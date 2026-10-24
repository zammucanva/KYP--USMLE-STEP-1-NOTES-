import type { KypUsMLENote } from "../types";

// Microbiology — ANTIMICROBIALS banner (M-batch 36). Source: pdf 216-217 /
// book 194-195 (Antifungal therapy). Census: p216 carries exactly ONE
// raster — the FUNGAL CELL mechanisms-of-action diagram (1087x488 cmyk jpeg,
// 103K, +14.9K smask, 150ppi ≈ 7.2x3.3 in), VLM-census confirmed a
// color-coded schematic (the fungal cell with drug-target lines: terbinafine
// to squalene epoxidase, azoles to 14-alpha-demethylase, flucytosine to the
// nucleus, polyenes to ergosterol pores with a pore-formation inset,
// echinocandins to the wall; a small Rx icon) — REDRAWN as the registry
// visual, never reproduced; p217 is pure text (0 rasters). Text quirks
// documented: the banner typo MICROCIOLOGY—ANTIMICROCIALS on both pages;
// the source's own margin mnemonics ('Amphotericin "tears" holes',
// '"shake and bake"', '"amphoterrible"' [text layer authoritative over the
// VLM's variant spelling], '"Swish and swallow"') are carried ONLY inside
// the verbatim tables per the E38 precedent — omitted from the visual and
// the KYP memory layer.

export const antifungals: KypUsMLENote = {
  id: "antifungals",
  title: "Antifungal Agents",
  subtitle:
    "The fungal cell's target map (books 194-195). THE MEMBRANE DOOR — ergosterol, unique to fungi: the polyenes bind it and tear pores (amphotericin B for serious systemic mycoses — Cryptococcus (with flucytosine for cryptococcal meningitis), Blastomyces, Coccidioides, Histoplasma, Candida, Mucor; intrathecal for coccidioidal meningitis; supplement K+ and Mg2+ for the altered renal-tubule permeability; 'shake and bake', hypotension, nephrotoxicity, arrhythmias, anemia, IV phlebitis — hydration lowers nephrotoxicity and the liposomal form lowers toxicity; nystatin — same mechanism, topical only, too toxic for systemic use: 'swish and swallow' for thrush, topical for diaper rash and vaginal candidiasis). THE STEROL-SYNTHESIS DOORS — the azoles (clotrimazole, fluconazole, isavuconazole, itraconazole, ketoconazole, miconazole, voriconazole) inhibit the cytochrome P-450 enzyme that converts lanosterol to ergosterol (fluconazole for chronic suppression of cryptococcal meningitis in people living with HIV and candidal infections of all types; itraconazole for Blastomyces, Coccidioides, Histoplasma, Sporothrix schenckii; clotrimazole and miconazole topical; voriconazole for Aspergillus and some Candida; isavuconazole for serious Aspergillus and Mucor; testosterone-synthesis inhibition — gynecomastia especially with ketoconazole — liver dysfunction, QT prolongation) and terbinafine (inhibits squalene epoxidase; dermatophytoses, especially onychomycosis; GI upset, headaches, hepatotoxicity, taste disturbance). THE WALL DOOR — the echinocandins (anidulafungin, caspofungin, micafungin) inhibit β-glucan synthesis (invasive aspergillosis, Candida; GI upset, flushing by histamine release). THE MICROTUBULE DOOR — griseofulvin (interferes with microtubule function, disrupts mitosis; deposits in keratin-containing tissues, e.g. nails; oral treatment of superficial infections, inhibits dermatophyte growth — tinea, ringworm; teratogenic, carcinogenic, confusion, headaches, disulfiram-like reaction, ↑CYP450 → ↑warfarin metabolism). THE NUCLEIC-ACID DOOR — flucytosine (converted to 5-fluorouracil by cytosine deaminase; inhibits DNA and RNA biosynthesis; systemic fungal infections, especially cryptococcal meningitis, in combination with amphotericin B; myelosuppression). Plus the page-195 tail: the antiprotozoal summary (pyrimethamine-sulfadiazine for toxoplasmosis; suramin and melarsoprol for Trypanosoma brucei; nifurtimox for T cruzi; sodium stibogluconate for leishmaniasis), the anti-mite/louse set (permethrin, malathion — an acetylcholinesterase inhibitor — topical or oral ivermectin, for scabies [Sarcoptes scabiei] and lice [Pediculus, Pthirus]), and chloroquine (blocks detoxification of heme into hemozoin; treatment of plasmodial species other than P falciparum [resistance from a membrane pump lowering intracellular drug]; retinopathy on cumulative dose, pruritus especially in dark-skinned individuals).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Antimicrobials",
  pilotCategory:
    "The fungal cell's four doors — the ergosterol membrane (polyne pores), the sterol-synthesis ladder (azoles at 14-α-demethylase, terbinafine at squalene epoxidase), the β-glucan wall (echinocandins), and the microtubule/nucleic-acid pair (griseofulvin, flucytosine) — plus the page-195 protozoa/louse/chloroquine tail by page ownership.",
  difficulty: 2,
  readTime: 12,
  sourceRef:
    "First Aid 2026, Part 1 pp. 194–195 (Antifungal therapy — the polyenes, azoles, terbinafine, echinocandins, griseofulvin, flucytosine; the antiprotozoal/anti-louse/chloroquine tail)",
  tags: [
    "antifungal therapy",
    "ergosterol",
    "amphotericin B",
    "polyenes",
    "nystatin",
    "membrane pores",
    "systemic mycoses",
    "Cryptococcus",
    "cryptococcal meningitis",
    "Blastomyces",
    "Coccidioides",
    "Histoplasma",
    "Candida",
    "Mucor",
    "intrathecal",
    "nephrotoxicity",
    "liposomal amphotericin",
    "flucytosine",
    "5-fluorouracil",
    "cytosine deaminase",
    "myelosuppression",
    "azoles",
    "clotrimazole",
    "fluconazole",
    "isavuconazole",
    "itraconazole",
    "ketoconazole",
    "miconazole",
    "voriconazole",
    "lanosterol",
    "14-alpha-demethylase",
    "gynecomastia",
    "QT prolongation",
    "terbinafine",
    "squalene epoxidase",
    "onychomycosis",
    "echinocandins",
    "anidulafungin",
    "caspofungin",
    "micafungin",
    "beta-glucan",
    "griseofulvin",
    "microtubules",
    "keratin",
    "tinea",
    "ringworm",
    "disulfiram-like reaction",
    "antiprotozoal",
    "chloroquine",
    "hemozoin",
    "retinopathy",
  ],
  core: {
    what: "THE FOUR DOORS OF THE FUNGAL CELL (the page's schematic, redrawn as this note's registry visual). MEMBRANE (ergosterol — unique to fungi): the polyenes bind ergosterol and form membrane pores that allow leakage of electrolytes — amphotericin B for serious systemic mycoses (Cryptococcus [with flucytosine for cryptococcal meningitis], Blastomyces, Coccidioides [intrathecally for coccidioidal meningitis], Histoplasma, Candida, Mucor), with K+/Mg2+ supplementation for the altered renal-tubule permeability and hydration + liposomal formulation against the toxicity set ('shake and bake' fever/chills, hypotension, nephrotoxicity, arrhythmias, anemia, IV phlebitis); nystatin — same mechanism, topical only ('swish and swallow' for thrush; topical for diaper rash and vaginal candidiasis). STEROL SYNTHESIS: the azoles (clotrimazole, fluconazole, isavuconazole, itraconazole, ketoconazole, miconazole, voriconazole) inhibit the cytochrome P-450 enzyme converting lanosterol to ergosterol — local and less serious systemic mycoses (fluconazole: chronic suppression of cryptococcal meningitis in people living with HIV + candidal infections of all types; itraconazole: Blastomyces, Coccidioides, Histoplasma, Sporothrix schenckii; clotrimazole/miconazole: topical; voriconazole: Aspergillus and some Candida; isavuconazole: serious Aspergillus and Mucor) — with testosterone-synthesis inhibition (gynecomastia, especially ketoconazole), liver dysfunction (P-450 inhibition), and QT prolongation; and terbinafine at the top of the ladder (squalene epoxidase) for dermatophytoses, especially onychomycosis (GI upset, headaches, hepatotoxicity, taste disturbance). WALL: the echinocandins (anidulafungin, caspofungin, micafungin) inhibit β-glucan synthesis — invasive aspergillosis and Candida (GI upset, flushing by histamine release). MICROTUBULE: griseofulvin interferes with microtubule function (disrupts mitosis) and deposits in keratin-containing tissues (nails) — oral treatment of superficial infections, inhibiting dermatophyte growth (tinea, ringworm); teratogenic, carcinogenic, confusion, headaches, disulfiram-like reaction, ↑CYP450 → ↑warfarin metabolism. NUCLEIC ACID: flucytosine — converted to 5-fluorouracil by cytosine deaminase, inhibiting DNA and RNA biosynthesis; systemic fungal infections (especially cryptococcal meningitis) in combination with amphotericin B; myelosuppression. THE PAGE-195 TAIL (page ownership): antiprotozoal therapy — pyrimethamine-sulfadiazine (toxoplasmosis), suramin and melarsoprol (Trypanosoma brucei), nifurtimox (T cruzi), sodium stibogluconate (leishmaniasis); anti-mite/louse therapy — permethrin, malathion (acetylcholinesterase inhibitor), topical or oral ivermectin for scabies (Sarcoptes scabiei) and lice (Pediculus, Pthirus); and chloroquine — blocks detoxification of heme into hemozoin (heme accumulates and is toxic to plasmodia); treatment of plasmodial species other than P falciparum (resistance: a membrane pump lowers intracellular drug); retinopathy (cumulative-dose dependent), pruritus (especially in dark-skinned individuals).",
    why: "This page-set runs the same door logic as the antibacterial directory, but every door is a FUNGAL-specific structure — which is the selectivity story of the whole set. The membrane door is the deepest: ergosterol is unique to fungi (our membranes run cholesterol), so the polyenes can tear pores in it selectively — amphotericin binding ergosterol and forming the electrolyte-leaking pore is the classic mechanism figure (the page's only raster, redrawn as this note's visual). The sterol door is the ladder: terbinafine blocks the top step (squalene epoxidase) while the azoles block the conversion of lanosterol to ergosterol — and because that step is a fungal P-450, the azoles inherit the CYP450 interaction profile (liver dysfunction, and the same enzyme family that drives the QT and gynecomastia lines). The wall door is the newest: β-glucan exists in fungal walls only, which is why the echinocandins can shut wall synthesis without touching human cells at all. And the tail doors carry the classic pairings: flucytosine is a prodrug like INH (cytosine deaminase converts it to 5-FU — the same activation logic, and the same myelosuppression trade), and griseofulvin is the keratin-depositing microtubule drug whose disulfiram-like reaction and CYP450 induction echo metronidazole and rifampin from the earlier pages. The page-195 tail then pre-loads the antiparasitic sets M37 will detail — with chloroquine's heme-detoxification block and its cumulative-dose retinopathy as the closing toxicity line.",
    keyIdea:
      "Read the set by DOOR. MEMBRANE (ergosterol — unique to fungi): polyenes tear pores — amphotericin B (serious systemic mycoses; K+/Mg2+ supplementation; hydration + liposomal against 'shake and bake', nephrotoxicity, arrhythmias, anemia, phlebitis) and nystatin (topical only: thrush, diaper rash, vaginal candidiasis). STEROL LADDER: azoles at the P-450 converting lanosterol to ergosterol (fluconazole — HIV cryptococcal suppression + all candidal; itraconazole — Blastomyces, Coccidioides, Histoplasma, Sporothrix; voriconazole — Aspergillus; isavuconazole — serious Aspergillus/Mucor; gynecomastia esp. ketoconazole, liver dysfunction, QT) and terbinafine at squalene epoxidase (onychomycosis; taste disturbance). WALL: echinocandins stop β-glucan (invasive aspergillosis, Candida; histamine-release flushing). MICROTUBULE: griseofulvin (keratin deposits; tinea/ringworm; teratogenic, carcinogenic, disulfiram-like, ↑warfarin via ↑CYP450). NUCLEIC ACID: flucytosine → 5-FU by cytosine deaminase (with amphotericin B for cryptococcal meningitis; myelosuppression). TAIL: pyrimethamine-sulfadiazine (toxoplasmosis), suramin and melarsoprol (T brucei), nifurtimox (T cruzi), stibogluconate (leishmaniasis); permethrin, malathion, ivermectin; chloroquine (heme→hemozoin block; non-falciparum plasmodia; cumulative-dose retinopathy, pruritus in dark-skinned individuals).",
  },
  mechanisms: [
    {
      id: "ergosterol-door-logic",
      title: "One sterol, two doors: tear the membrane or starve its synthesis",
      context: "Reading any antifungal question off the fungal-cell schematic (books 194-195)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An antifungal drug or a systemic mycosis stem appears",
            sublabel: "Input — any of the page's drugs, or the systemic-mycosis set (Cryptococcus, Blastomyces, Coccidioides, Histoplasma, Candida, Mucor).",
            variant: "input",
          },
          {
            id: "membrane",
            label: "MEMBRANE DOOR — ergosterol, unique to fungi: the polyenes bind it and form pores",
            sublabel: "Amphotericin B (systemic) and nystatin (topical) — electrolyte leakage through the torn membrane.",
            variant: "process",
          },
          {
            id: "ladder",
            label: "SYNTHESIS DOORS — starve the sterol instead: azoles at the P-450 converting lanosterol to ergosterol; terbinafine at squalene epoxidase",
            sublabel: "The azoles inherit the CYP450 profile (liver dysfunction, QT, gynecomastia — ketoconazole); terbinafine takes the top step.",
            variant: "process",
          },
          {
            id: "wall",
            label: "WALL DOOR — echinocandins stop β-glucan synthesis",
            sublabel: "Invasive aspergillosis and Candida; histamine-release flushing; the newest door — fungal walls only.",
            variant: "process",
          },
          {
            id: "inner",
            label: "THE INNER DOORS — microtubules and nucleic acid",
            sublabel: "Griseofulvin (microtubules, keratin deposits — tinea/ringworm) and flucytosine (cytosine deaminase → 5-FU; DNA/RNA biosynthesis blocked — myelosuppression).",
            variant: "output",
          },
          {
            id: "route",
            label: "The clinical routing — severity and site decide the door",
            sublabel: "Serious/systemic → amphotericin B (± flucytosine for cryptococcal meningitis; intrathecal for coccidioidal); local/less serious → azoles; nails → terbinafine; tinea → griseofulvin; invasive aspergillosis/Candida → echinocandins.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "membrane", label: "the polyenes" },
          { from: "trigger", to: "ladder", label: "azoles + terbinafine" },
          { from: "trigger", to: "wall", label: "echinocandins" },
          { from: "trigger", to: "inner", label: "griseofulvin + 5-FC" },
          { from: "membrane", to: "route", label: "severity decides" },
          { from: "ladder", to: "route", label: "site decides" },
        ],
      },
    },
    {
      id: "prodrug-activation-tail",
      title: "The activation stories and the page-195 tail: 5-FC's cytosine deaminase, and the protozoa/louse/chloroquine set",
      context: "The flucytosine card and the antiprotozoal/anti-louse/chloroquine tail (book 195)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A prodrug-activation or antiparasitic question on these pages",
            sublabel: "Input — flucytosine, the protozoa set, the louse set, or chloroquine.",
            variant: "input",
          },
          {
            id: "flucytosine",
            label: "Flucytosine — cytosine deaminase converts it to 5-fluorouracil",
            sublabel: "The same prodrug logic as INH's katG: fungal cytosine deaminase activates it; DNA and RNA biosynthesis are inhibited; myelosuppression is the price — paired with amphotericin B for cryptococcal meningitis.",
            variant: "process",
          },
          {
            id: "protozoa",
            label: "The antiprotozoal summary (page ownership): pyrimethamine-sulfadiazine (toxoplasmosis), suramin and melarsoprol (T brucei), nifurtimox (T cruzi), sodium stibogluconate (leishmaniasis)",
            sublabel: "M37 details these; the page-195 block is the compact roster carried verbatim.",
            variant: "process",
          },
          {
            id: "louse",
            label: "Anti-mite/louse: permethrin, malathion (acetylcholinesterase inhibitor), topical or oral ivermectin — scabies (Sarcoptes scabiei) and lice (Pediculus, Pthirus)",
            sublabel: "The ectoparasite door M28's flora table adjoins.",
            variant: "process",
          },
          {
            id: "chloroquine",
            label: "Chloroquine — blocks detoxification of heme into hemozoin; heme accumulates and is toxic to plasmodia",
            sublabel: "Non-falciparum plasmodia (resistance: the membrane pump lowers intracellular drug); retinopathy on cumulative dose; pruritus especially in dark-skinned individuals.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "flucytosine", label: "the activation door" },
          { from: "trigger", to: "protozoa", label: "the summary roster" },
          { from: "trigger", to: "louse", label: "the ectoparasite set" },
          { from: "trigger", to: "chloroquine", label: "the heme door" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "antifungal-target-map",
      title: "The antifungal target map — the fungal cell's doors, redrawn",
      caption:
        "An original KYP redraw of the source's FUNGAL CELL mechanisms-of-action diagram (book 194, the page's single raster — VLM-census confirmed a color-coded schematic): the fungal cell with its four doors — the ergosterol membrane (the polyenes binding ergosterol and tearing pores, with the pore-formation inset), the sterol-synthesis ladder (terbinafine at squalene epoxidase; the azoles at the P-450 converting lanosterol to ergosterol), the β-glucan wall (the echinocandins), and the inner doors (flucytosine's 5-FU activation at the nucleus; griseofulvin's microtubules).",
      notice:
        "The source diagram is a 1087×488 rasterized schematic — REDRAWN here as clean vector panels, never reproduced. The source's own margin mnemonics ('Amphotericin tears holes', 'shake and bake', 'amphoterrible' [text layer authoritative over the VLM's variant spelling], 'Swish and swallow') are omitted from this visual per the copyright boundary — carried only inside the note's verbatim tables.",
    },
    {
      kind: "table",
      title: "Book 194 — the amphotericin B, nystatin, and flucytosine cards (carried verbatim)",
      intro:
        "The page's first three cards, as printed — including the source's own margin mnemonics ('tears holes'; K+/Mg2+ supplementation; hydration and the liposomal form).",
      columns: ["CARD · FIELD", "PRINTED CONTENT — verbatim (book 194)"],
      rows: [
        ["Amphotericin B — MECHANISM", "Binds ergosterol (unique to fungi); forms membrane pores that allow leakage of electrolytes. [Margin note (source): Amphotericin “tears” holes in the fungal membrane by forming pores.]"],
        ["— CLINICAL USE", "Serious, systemic mycoses. Cryptococcus (amphotericin B +/– flucytosine for cryptococcal meningitis), Blastomyces, Coccidioides, Histoplasma, Candida, Mucor. Intrathecally for coccidioidal meningitis. [Margin note (source): Supplement K+ and Mg2+ because of altered renal tubule permeability.]"],
        ["— ADVERSE EFFECTS", "Fever/chills (“shake and bake”), hypotension, nephrotoxicity, arrhythmias, anemia, IV phlebitis (“amphoterrible”). [Margin note (source): Hydration ↓ nephrotoxicity. Liposomal amphotericin ↓ toxicity.]"],
        ["Nystatin — MECHANISM", "Same as amphotericin B. Topical use only as too toxic for systemic use."],
        ["— CLINICAL USE", "“Swish and swallow” for oral candidiasis (thrush); topical for diaper rash or vaginal candidiasis."],
        ["Flucytosine — MECHANISM", "Inhibits DNA and RNA biosynthesis by conversion to 5-fluorouracil by cytosine deaminase."],
        ["— CLINICAL USE", "Systemic fungal infections (especially meningitis caused by Cryptococcus) in combination with amphotericin B."],
        ["— ADVERSE EFFECTS", "Myelosuppression."],
      ],
      caption:
        "The membrane door: the polyenes (amphotericin B's systemic set with the K+/Mg2+ supplementation note, hydration and liposomal rescue; nystatin's topical-only rule) and the prodrug flucytosine (cytosine deaminase → 5-FU, myelosuppression — paired with amphotericin B for cryptococcal meningitis).",
    },
    {
      kind: "table",
      title: "Book 195 — the azoles, terbinafine, echinocandins, and griseofulvin cards + the protozoa/louse/chloroquine tail (carried verbatim)",
      intro:
        "The page's four antifungal cards plus the page-195 tail blocks (antiprotozoal, anti-mite/louse, chloroquine) carried per the page-ownership convention; M37 details the dedicated antiparasitic cards.",
      columns: ["CARD · FIELD", "PRINTED CONTENT — verbatim (book 195)"],
      rows: [
        ["Azoles — Drugs", "Clotrimazole, fluconazole, isavuconazole, itraconazole, ketoconazole, miconazole, voriconazole."],
        ["— MECHANISM", "Inhibit fungal sterol (ergosterol) synthesis by inhibiting the cytochrome P-450 enzyme that converts lanosterol to ergosterol."],
        ["— CLINICAL USE", "Local and less serious systemic mycoses. Fluconazole for chronic suppression of cryptococcal meningitis in people living with HIV and candidal infections of all types. Itraconazole may be used for Blastomyces, Coccidioides, Histoplasma, Sporothrix schenckii. Clotrimazole and miconazole for topical fungal infections. Voriconazole for Aspergillus and some Candida. Isavuconazole for serious Aspergillus and Mucor infections."],
        ["— ADVERSE EFFECTS", "Testosterone synthesis inhibition (gynecomastia, especially with ketoconazole), liver dysfunction (inhibits cytochrome P-450), QT interval prolongation."],
        ["Terbinafine — MECHANISM", "Inhibits the fungal enzyme squalene epoxidase."],
        ["— CLINICAL USE", "Dermatophytoses (especially onychomycosis—fungal infection of finger or toe nails)."],
        ["— ADVERSE EFFECTS", "GI upset, headaches, hepatotoxicity, taste disturbance."],
        ["Echinocandins — Drugs", "Anidulafungin, caspofungin, micafungin."],
        ["— MECHANISM", "Inhibit cell wall synthesis by inhibiting synthesis of β-glucan."],
        ["— CLINICAL USE", "Invasive aspergillosis, Candida."],
        ["— ADVERSE EFFECTS", "GI upset, flushing (by histamine release)."],
        ["Griseofulvin — MECHANISM", "Interferes with microtubule function; disrupts mitosis. Deposits in keratin-containing tissues (eg, nails)."],
        ["— CLINICAL USE", "Oral treatment of superficial infections; inhibits growth of dermatophytes (tinea, ringworm)."],
        ["— ADVERSE EFFECTS", "Teratogenic, carcinogenic, confusion, headaches, disulfiram-like reaction, ↑ cytochrome P-450 → ↑ warfarin metabolism."],
        ["Antiprotozoal therapy (tail block)", "Pyrimethamine-sulfadiazine (toxoplasmosis), suramin and melarsoprol (Trypanosoma brucei), nifurtimox (T cruzi), sodium stibogluconate (leishmaniasis)."],
        ["Anti-mite/louse therapy (tail block)", "Permethrin, malathion (acetylcholinesterase inhibitor), topical or oral ivermectin. Used to treat scabies (Sarcoptes scabiei) and lice (Pediculus and Pthirus)."],
        ["Chloroquine — MECHANISM", "Blocks detoxification of heme into hemozoin. Heme accumulates and is toxic to plasmodia."],
        ["— CLINICAL USE", "Treatment of plasmodial species other than P falciparum (due to drug resistance from membrane pump that ↓ intracellular concentration of drug)."],
        ["— ADVERSE EFFECTS", "Retinopathy (dependent on cumulative dose); pruritus (especially in dark-skinned individuals)."],
      ],
      caption:
        "The synthesis doors (azoles at the P-450 converting lanosterol to ergosterol with their CYP450 profile; terbinafine at squalene epoxidase for the nails), the wall door (echinocandins, β-glucan), the microtubule door (griseofulvin — keratin deposits, disulfiram-like, ↑warfarin), and the page-195 tail: the protozoa roster, the ectoparasite set, and chloroquine's heme-detoxification block with its cumulative-dose retinopathy.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three routing rules these cards teach",
      body:
        "Rule 1 — SEVERITY PICKS THE POLYENE: serious systemic mycoses get amphotericin B (with K+/Mg2+ supplementation, hydration, and the liposomal form against the 'shake and bake'/nephrotoxicity set); cryptococcal meningitis pairs it with flucytosine (the cytosine-deaminase prodrug — myelosuppression is the price). Rule 2 — SITE PICKS THE SYNTHESIS DOOR: nails → terbinafine (squalene epoxidase); tinea/ringworm → griseofulvin (microtubules, keratin deposits); local/less serious systemic → the azoles (with fluconazole owning HIV cryptococcal suppression and all candidal types, itraconazole the endemic dimorphs, voriconazole Aspergillus, isavuconazole serious Aspergillus/Mucor). Rule 3 — THE CYP450 ECHO: the azoles INHIBIT fungal P-450 (that's their mechanism) and inherit the same liability in us — liver dysfunction, QT, and the ketoconazole gynecomastia — while griseofulvin, like rifampin, INDUCES it (↑warfarin) and, like metronidazole, carries a disulfiram-like reaction.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 34-year-old man with HIV (CD4 40) develops cryptococcal meningitis; induction therapy starts with the membrane-pore drug plus the nucleic-acid prodrug.",
        discriminator: "Amphotericin B + flucytosine for cryptococcal meningitis — the classic induction pair",
        concept: "The polyene + 5-FC pair",
        answer:
          "Amphotericin B binds ergosterol (unique to fungi) and forms membrane pores allowing electrolyte leakage; flucytosine is converted by cytosine deaminase to 5-fluorouracil, inhibiting DNA and RNA biosynthesis — the combination is the printed induction for cryptococcal meningitis (with K+/Mg2+ supplementation for the altered renal-tubule permeability, hydration and liposomal formulation against the nephrotoxicity set), stepping down to fluconazole for chronic suppression.",
      },
      {
        stem: "A 56-year-old on itraconazole for histoplasmosis develops tender breast enlargement; liver enzymes are mildly elevated and the QT is 480 ms.",
        discriminator: "Testosterone-synthesis inhibition (gynecomastia, especially ketoconazole) + P-450 inhibition — the azole CYP450 echo",
        concept: "Azole adverse-effect set",
        answer:
          "The azoles' own line: testosterone synthesis inhibition (gynecomastia, especially with ketoconazole), liver dysfunction (inhibits cytochrome P-450), QT prolongation — the mechanism (blocking the fungal P-450 that converts lanosterol to ergosterol) predicts the host-side CYP450 profile. Voriconazole/isavuconazole trade it for Aspergillus/Mucor coverage; terbinafine (squalene epoxidase) avoids it but adds taste disturbance.",
      },
      {
        stem: "A 7-year-old with scaly ring-shaped patches on the scalp and a KOH preparation showing hyphae is started on the oral microtubule drug that deposits in keratin.",
        discriminator: "Griseofulvin — interferes with microtubule function, disrupts mitosis, deposits in keratin-containing tissues",
        concept: "The microtubule door for dermatophytes",
        answer:
          "Griseofulvin is the printed choice for tinea/ringworm (inhibits dermatophyte growth; deposits in keratin — hair and nails carry it); its printed set: teratogenic, carcinogenic, confusion, headaches, disulfiram-like reaction, and ↑CYP450 → ↑warfarin metabolism. Onychomycosis instead → terbinafine; invasive aspergillosis/Candida → the echinocandins (β-glucan, histamine-release flushing).",
      },
    ],
    traps: [
      {
        a: "Amphotericin B (systemic)",
        b: "Nystatin (topical)",
        whyConfused: "Both are polyenes binding ergosterol",
        keyDifference: "Same mechanism, opposite reach: amphotericin B for serious systemic mycoses; nystatin too toxic for systemic use — 'swish and swallow' for thrush, topical for diaper rash/vaginal candidiasis",
        clue: "Systemic mycosis (Cryptococcus, Blastomyces, Coccidioides, Histoplasma, Mucor) → amphotericin B (± flucytosine); thrush/diaper rash → nystatin",
      },
      {
        a: "Terbinafine",
        b: "Griseofulvin",
        whyConfused: "Both treat the dermatophyte/keratin territory",
        keyDifference: "Terbinafine inhibits squalene epoxidase (the sterol ladder's top step) — onychomycosis; griseofulvin hits microtubules and deposits in keratin — tinea/ringworm, with teratogenicity and ↑warfarin",
        clue: "Nails → terbinafine (taste disturbance); scalp/body ringworm in a child → griseofulvin (never in pregnancy)",
      },
      {
        a: "Azoles (CYP450)",
        b: "Griseofulvin (CYP450)",
        whyConfused: "Both print 'cytochrome P-450' on their rows",
        keyDifference: "The azoles INHIBIT P-450 (their mechanism; liver dysfunction, QT, gynecomastia — ketoconazole); griseofulvin INDUCES it (↑warfarin) — the M35 polarity pair again, in the fungal directory",
        clue: "Gynecomastia + QT + liver dysfunction on an azole; bleeding/INR drop on griseofulvin",
      },
    ],
    pivots: [
      {
        lookAlike: "Fluconazole vs itraconazole (the two systemic azoles)",
        differentiator: "Fluconazole owns HIV cryptococcal suppression and all candidal types; itraconazole takes the endemic dimorphs (Blastomyces, Coccidioides, Histoplasma) and Sporothrix",
        correctPath: "Chronic cryptococcal suppression in HIV or candidal infections of all types → fluconazole; Blastomyces/Coccidioides/Histoplasma/Sporothrix schenckii → itraconazole (voriconazole for Aspergillus and some Candida; isavuconazole for serious Aspergillus and Mucor)",
      },
      {
        lookAlike: "Voriconazole vs isavuconazole (the Aspergillus pair)",
        differentiator: "Isavuconazole for SERIOUS Aspergillus and Mucor infections; voriconazole for Aspergillus and some Candida",
        correctPath: "Invasive aspergillosis → echinocandins or voriconazole; serious Aspergillus/Mucor → isavuconazole (and note the shorter QT liability conversation the azole class carries)",
      },
    ],
    miniCase: {
      vignette:
        "A 29-year-old woman, 24 weeks pregnant, is treated for a widespread tinea corporum infection. She is started on an oral antifungal that deposits in keratin. Three weeks later she reports a headache, confusion episodes, and a metallic taste; she mentions having had two glasses of wine at dinner. Her partner's INR (he takes warfarin) has also been drifting down at his clinic.",
      question: "Which drug was started, and which two mechanisms explain her symptoms and the INR drift?",
      options: [
        {
          label: "Griseofulvin — disulfiram-like reaction + CYP450 induction",
          text: "Griseofulvin's microtubule blockade deposits it in keratin for tinea; its printed set includes confusion, headache, a disulfiram-like reaction with alcohol, and CYP450 INDUCTION that raises warfarin metabolism (the INR falls).",
          correct: true,
          why: "Correct — and note the two exam layers: the pregnancy itself is the standing contraindication (griseofulvin is teratogenic — the printed first adverse effect), which is the counseling point this case also asks for. The wine-triggered flushing/headache/metallic-taste cluster is the disulfiram-like reaction (the metronidazole echo), and the partner's falling INR is the shared-household induction of CYP450 raising warfarin metabolism.",
        },
        {
          label: "Terbinafine — hepatotoxicity presenting as confusion",
          text: "Squalene epoxidase inhibition with hepatic encephalopathy.",
          why: "Wrong door: terbinafine is the onychomycosis drug; its printed set is GI upset, headache, hepatotoxicity, and TASTE disturbance — not a disulfiram-like alcohol reaction, and not CYP450 induction. The wine trigger points to griseofulvin's row.",
        },
        {
          label: "Ketoconazole — gynecomastia and P-450 inhibition",
          text: "Testosterone-synthesis inhibition with hepatic dysfunction.",
          why: "Wrong polarity and wrong territory: ketoconazole's gynecomastia is real (testosterone-synthesis inhibition) but this is a tinea case on an oral keratin-depositing drug; P-450 INHIBITION would RAISE warfarin levels (INR up, not down).",
        },
        {
          label: "Amphotericin B — nephrotoxicity with uremic confusion",
          text: "Electrolyte-leaking pores causing renal failure and encephalopathy.",
          why: "Wrong severity class: amphotericin B is for serious systemic mycoses, not tinea corporum; her potassium/magnesium story is absent, and the wine trigger plus the partner's INR drift are the tell-tales of griseofulvin's row.",
        },
        {
          label: "Flucytosine — myelosuppression with confusion",
          text: "5-FU conversion causing marrow failure and neurologic symptoms.",
          why: "Wrong drug entirely (flucytosine is the cryptococcal prodrug paired with amphotericin B); myelosuppression would show as cytopenias, not the alcohol-triggered cluster. A true-but-irrelevant distractor from the same page.",
        },
      ],
      reasoning:
        "The tinea + keratin-deposit + oral antifungal presentation identifies griseofulvin; the wine-triggered flushing, headache, and confusion match its printed disulfiram-like reaction (the metronidazole echo from M34), and the partner's falling INR matches its ↑CYP450 → ↑warfarin metabolism — the same induction polarity as rifampin (M35). The management layers: stop the alcohol trigger, retitrate the partner's warfarin, and — the counseling point the pregnancy creates — switch the patient off griseofulvin entirely, because its first printed adverse effect is teratogenicity.",
    },
  },
  mnemonics: [
    {
      code: "ONE STERL, FOUR DOORS",
      meaning: "The fungal cell runs on ergosterol: the polyenes TEAR the membrane that contains it (amphotericin B, nystatin), the azoles STARVE its synthesis (the lanosterol-to-ergosterol P-450), terbinafine takes the top step (squalene epoxidase), and the echinocandins stop the β-glucan wall around it.",
      memorizes: "The antifungal doors and their drugs",
      whenToUse: "Any antifungal mechanism or routing question",
      clinical: "Serious systemic → amphotericin B (± flucytosine); local/less serious → azoles; nails → terbinafine; tinea → griseofulvin; invasive aspergillosis/Candida → echinocandins.",
    },
    {
      code: "SUPPLEMENT THE TUBULE",
      meaning: "Amphotericin B's pores leak electrolytes through the renal tubule — supplement K+ and Mg2+ (the printed note), hydrate against nephrotoxicity, and go liposomal to cut the whole toxicity set.",
      memorizes: "Amphotericin B's management bundle",
      whenToUse: "Any amphotericin B therapy or toxicity question",
      clinical: "'Shake and bake' premedication, K+/Mg2+ replacement, hydration, and the liposomal form are the four printed levers against its fever/chills, nephrotoxicity, arrhythmias, anemia, and phlebitis.",
    },
    {
      code: "THE CYP450 ECHO",
      meaning: "The azoles inhibit the fungal P-450 — and echo it in us: liver dysfunction, QT, gynecomastia (ketoconazole). Griseofulvin flips the polarity: it INDUCES CYP450 (↑warfarin) — the M35 rifampin story retold in the fungal directory.",
      memorizes: "The antifungal interaction profile",
      whenToUse: "Any azole or griseofulvin co-prescription question",
      clinical: "Watch warfarin (griseofulvin raises its metabolism), watch QT and liver (azoles), and remember ketoconazole's testosterone-synthesis gynecomastia.",
    },
    {
      code: "CUMULATIVE RETINA",
      meaning: "Chloroquine's retinopathy is cumulative-dose dependent — the eye keeps the tally long after the course ends; pruritus clusters in dark-skinned individuals.",
      memorizes: "Chloroquine's signature toxicity pair",
      whenToUse: "Any chloroquine therapy or screening question",
      clinical: "Baseline and periodic fundus screening on long courses; counsel that the heme-to-hemozoin block works for non-falciparum plasmodia (the membrane pump resistance pattern).",
    },
  ],
  rapidReview: {
    s30: [
      "The membrane door: polyenes bind ergosterol (unique to fungi) and form pores — amphotericin B (serious systemic mycoses: Cryptococcus ± flucytosine, Blastomyces, Coccidioides [intrathecal for meningitis], Histoplasma, Candida, Mucor; K+/Mg2+ supplementation; hydration + liposomal) · nystatin (topical only: swish-and-swallow thrush, diaper rash, vaginal candidiasis)",
      "The sterol ladder: azoles (clotrimazole, fluconazole, isavuconazole, itraconazole, ketoconazole, miconazole, voriconazole) inhibit the P-450 converting lanosterol to ergosterol — fluconazole (HIV cryptococcal suppression + all candidal), itraconazole (Blastomyces, Coccidioides, Histoplasma, Sporothrix), voriconazole (Aspergillus, some Candida), isavuconazole (serious Aspergillus/Mucor); gynecomastia (ketoconazole), liver dysfunction, QT · terbinafine (squalene epoxidase) — onychomycosis; taste disturbance",
      "The wall and microtubule doors: echinocandins (anidulafungin, caspofungin, micafungin) inhibit β-glucan — invasive aspergillosis, Candida; histamine-release flushing · griseofulvin (microtubules; keratin deposits) — tinea, ringworm; teratogenic, carcinogenic, disulfiram-like, ↑CYP450 (↑warfarin)",
      "The nucleic-acid door: flucytosine → 5-fluorouracil by cytosine deaminase — DNA/RNA biosynthesis inhibited; with amphotericin B for cryptococcal meningitis; myelosuppression",
      "The page-195 tail: pyrimethamine-sulfadiazine (toxoplasmosis) · suramin, melarsoprol (T brucei) · nifurtimox (T cruzi) · sodium stibogluconate (leishmaniasis) · permethrin, malathion, ivermectin (scabies, lice) · chloroquine (heme→hemozoin block; non-falciparum plasmodia; cumulative-dose retinopathy, pruritus in dark-skinned individuals)",
    ],
    m3: [
      "Amphotericin B: binds ergosterol, forms pores, electrolyte leakage; serious systemic mycoses + intrathecal coccidioidal meningitis; 'shake and bake', hypotension, nephrotoxicity, arrhythmias, anemia, IV phlebitis; supplement K+/Mg2+ (altered renal-tubule permeability); hydration and liposomal lower toxicity",
      "Azoles: inhibit the P-450 converting lanosterol to ergosterol; local and less serious systemic mycoses; fluconazole — chronic cryptococcal suppression in HIV and candidal infections of all types; testosterone-synthesis inhibition (gynecomastia, esp. ketoconazole), liver dysfunction, QT",
      "Terbinafine + echinocandins: terbinafine inhibits squalene epoxidase — dermatophytoses/onychomycosis (GI upset, headache, hepatotoxicity, taste disturbance); echinocandins (anidulafungin, caspofungin, micafungin) inhibit β-glucan — invasive aspergillosis, Candida (GI upset, histamine-release flushing)",
      "Griseofulvin + flucytosine: griseofulvin — microtubules, keratin deposits; tinea/ringworm; teratogenic, carcinogenic, confusion, headaches, disulfiram-like, ↑CYP450 → ↑warfarin. Flucytosine — cytosine deaminase → 5-FU; DNA/RNA biosynthesis; cryptococcal meningitis with amphotericin B; myelosuppression",
      "The tail: antiprotozoal — pyrimethamine-sulfadiazine (toxoplasmosis), suramin/melarsoprol (T brucei), nifurtimox (T cruzi), sodium stibogluconate (leishmaniasis); anti-mite/louse — permethrin, malathion (AChE inhibitor), ivermectin (scabies, lice); chloroquine — heme→hemozoin block, non-falciparum plasmodia (membrane-pump resistance), cumulative-dose retinopathy, pruritus (esp. dark-skinned individuals)",
    ],
    m10: [
      "Census: p216's single raster is the FUNGAL CELL mechanisms-of-action diagram (1087×488 cmyk + 14.9K smask, 150ppi ≈ 7.2×3.3 in) — VLM census confirmed a color-coded schematic (drug-target lines: terbinafine, azoles, flucytosine, polyenes with a pore inset, echinocandins; a small Rx icon) — REDRAWN as the registry visual; p217 pure text (0 rasters)",
      "The text layer is authoritative over the VLM's variant spelling: the raw layer prints 'amphoterrible' (the VLM census read 'amphoterrrrible' — documented, text layer wins, the M23 convention)",
      "The source's own margin mnemonics ('tears holes', 'shake and bake', 'amphoterrible', 'Swish and swallow', plus the K+/Mg2+ and hydration/liposomal notes) are carried ONLY inside the verbatim tables per the E38 precedent — omitted from the visual and the KYP memory layer",
      "The banner typo MICROCIOLOGY—ANTIMICROCIALS prints on both pages; '195' prints mid-page on p217 (raw line 5, after the banner and before SEC TION II); the azoles' drug line is a single unbroken roster line (raw 11) — the longest single-line drug list in the chapter",
      "Page ownership: book 195 carries the antiprotozoal summary, the anti-mite/louse block, and the chloroquine card AFTER the four antifungal cards — all carried verbatim in M36's book-195 table; M37 (books 196-197) holds the dedicated antiparasitic/antiviral cards",
    ],
  },
  recall: [
    {
      q: "Walk the fungal cell's doors — each drug family, its mechanism, and its signature toxicity.",
      a: "MEMBRANE (ergosterol, unique to fungi): the polyenes bind it and form pores — amphotericin B (serious systemic mycoses; 'shake and bake', hypotension, nephrotoxicity, arrhythmias, anemia, IV phlebitis; K+/Mg2+ supplementation, hydration, liposomal) and nystatin (topical only — thrush, diaper rash, vaginal candidiasis). STEROL LADDER: the azoles inhibit the P-450 converting lanosterol to ergosterol (gynecomastia esp. ketoconazole, liver dysfunction, QT); terbinafine inhibits squalene epoxidase (onychomycosis; GI upset, headaches, hepatotoxicity, taste disturbance). WALL: the echinocandins inhibit β-glucan synthesis (invasive aspergillosis, Candida; GI upset, histamine-release flushing). MICROTUBULE: griseofulvin (keratin deposits; tinea/ringworm; teratogenic, carcinogenic, confusion, headaches, disulfiram-like, ↑CYP450 → ↑warfarin). NUCLEIC ACID: flucytosine — cytosine deaminase converts it to 5-FU; DNA/RNA biosynthesis inhibited; with amphotericin B for cryptococcal meningitis; myelosuppression.",
    },
    {
      q: "Carry the amphotericin B and nystatin cards verbatim — all fields with their margin notes.",
      a: "AMPHOTERICIN B — MECHANISM: binds ergosterol (unique to fungi); forms membrane pores that allow leakage of electrolytes. [Margin: Amphotericin 'tears' holes in the fungal membrane by forming pores.] CLINICAL USE: serious, systemic mycoses — Cryptococcus (amphotericin B +/– flucytosine for cryptococcal meningitis), Blastomyces, Coccidioides, Histoplasma, Candida, Mucor; intrathecally for coccidioidal meningitis. [Margin: Supplement K+ and Mg2+ because of altered renal tubule permeability.] ADVERSE EFFECTS: fever/chills ('shake and bake'), hypotension, nephrotoxicity, arrhythmias, anemia, IV phlebitis ('amphoterrible'). [Margin: Hydration ↓ nephrotoxicity. Liposomal amphotericin ↓ toxicity.] NYSTATIN — MECHANISM: same as amphotericin B; topical use only as too toxic for systemic use. CLINICAL USE: 'swish and swallow' for oral candidiasis (thrush); topical for diaper rash or vaginal candidiasis.",
    },
    {
      q: "Give the azoles card verbatim — the roster, mechanism, uses, and the CYP450 adverse set.",
      a: "DRUGS: clotrimazole, fluconazole, isavuconazole, itraconazole, ketoconazole, miconazole, voriconazole. MECHANISM: inhibit fungal sterol (ergosterol) synthesis by inhibiting the cytochrome P-450 enzyme that converts lanosterol to ergosterol. CLINICAL USE: local and less serious systemic mycoses — fluconazole for chronic suppression of cryptococcal meningitis in people living with HIV and candidal infections of all types; itraconazole may be used for Blastomyces, Coccidioides, Histoplasma, Sporothrix schenckii; clotrimazole and miconazole for topical fungal infections; voriconazole for Aspergillus and some Candida; isavuconazole for serious Aspergillus and Mucor infections. ADVERSE EFFECTS: testosterone synthesis inhibition (gynecomastia, especially with ketoconazole), liver dysfunction (inhibits cytochrome P-450), QT interval prolongation.",
    },
    {
      q: "Separate terbinafine, the echinocandins, and griseofulvin — door, use, and toxicity each.",
      a: "TERBINAFINE — squalene epoxidase (top of the sterol ladder); dermatophytoses, especially onychomycosis; GI upset, headaches, hepatotoxicity, taste disturbance. ECHINOCANDINS (anidulafungin, caspofungin, micafungin) — inhibit β-glucan synthesis (the wall door); invasive aspergillosis and Candida; GI upset, flushing by histamine release. GRISEOFULVIN — interferes with microtubule function, disrupts mitosis; deposits in keratin-containing tissues (nails); oral treatment of superficial infections, inhibiting dermatophyte growth (tinea, ringworm); teratogenic, carcinogenic, confusion, headaches, disulfiram-like reaction, ↑CYP450 → ↑warfarin metabolism.",
    },
    {
      q: "State the page-195 tail verbatim — the antiprotozoal roster, the anti-louse set, and chloroquine.",
      a: "ANTIPROTOZOAL THERAPY: pyrimethamine-sulfadiazine (toxoplasmosis), suramin and melarsoprol (Trypanosoma brucei), nifurtimox (T cruzi), sodium stibogluconate (leishmaniasis). ANTI-MITE/LOUSE THERAPY: permethrin, malathion (acetylcholinesterase inhibitor), topical or oral ivermectin — used to treat scabies (Sarcoptes scabiei) and lice (Pediculus and Pthirus). CHLOROQUINE — MECHANISM: blocks detoxification of heme into hemozoin; heme accumulates and is toxic to plasmodia. CLINICAL USE: treatment of plasmodial species other than P falciparum (drug resistance from a membrane pump that ↓ intracellular concentration of drug). ADVERSE EFFECTS: retinopathy (dependent on cumulative dose); pruritus (especially in dark-skinned individuals).",
    },
  ],
  related: [
    {
      title: "Antimicrobial Mechanisms: The Target Map",
      topicId: "antimicrobial-overview",
      note: "M31's map showed the polyenes at the membrane door (②) — this page-set is the fungal cell's own target map: the ergosterol membrane, the sterol ladder, the β-glucan wall, and the inner doors.",
    },
    {
      title: "Systemic Mycoses: Histoplasma, Blastomyces, Coccidioides",
      topicId: "systemic-mycoses",
      note: "M16 named the endemic dimorphs; this page-set prescribes for them — amphotericin B for the serious end, itraconazole for the rest, and isavuconazole for serious Aspergillus/Mucor.",
    },
    {
      title: "Opportunistic Fungi: Aspergillus, Cryptococcus, Candida",
      topicId: "opportunistic-fungi",
      note: "M17's opportunists are this page's dosing targets — Cryptococcus (amphotericin B + flucytosine, then fluconazole suppression), Candida (fluconazole/echinocandins/nystatin by site), and Mucor (amphotericin B, isavuconazole).",
    },
    {
      title: "Antiparasitic & Non-HIV Antiviral Agents",
      topicId: "antiparasitic-antiviral",
      note: "M37 details the dedicated antiparasitic/antiviral cards; this page's tail block (protozoa, lice, chloroquine) is its compact preview carried verbatim by page ownership.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (CYP450 — the fungal echo)",
      connection:
        "The azoles inhibit the fungal P-450 that makes ergosterol — and the same inhibition in our liver yields their host-side profile (liver dysfunction, QT, gynecomastia), while griseofulvin flips to induction (↑warfarin): the M35 polarity pair retold in the fungal directory.",
    },
    {
      subject: "Biochemistry (Sterol Synthesis)",
      connection:
        "The sterol ladder is the biochemistry chapter's cholesterol-synthesis map in fungal form: squalene epoxidase and the 14-α-demethylase step are the same enzymes the statin/sterol pathway teaches — with ergosterol as the fungal endpoint.",
    },
    {
      subject: "Ophthalmology (Cumulative-Dose Retinopathy)",
      connection:
        "Chloroquine's retinopathy is the ophthalmology chapter's screening story — cumulative-dose dependent, baseline and serial fundus testing, and the bull's-eye maculopathy the cumulative tally predicts.",
    },
    {
      subject: "Dermatology (Dermatophytes and Keratin)",
      connection:
        "Griseofulvin's keratin deposits and terbinafine's onychomycosis niche are the dermatology chapter's tinea/ringworm territory — the keratin-rich tissues (nail, hair, scalp) that carry the drug to the dermatophytes.",
    },
  ],
};
