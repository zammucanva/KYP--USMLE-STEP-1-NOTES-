import type { KypUsMLENote } from "../types";

// Microbiology — ANTIMICROBIALS banner (M-batch 34). Source: pdf 212-213 /
// book 190-191 (the non-ribosomal directory pages: the folate factory with
// its two blocked gates, the gyrase, the membrane, and the free-radical
// doors). Census: both pages PURE TEXT (0 rasters); the FOLATE PATHWAY FIGURE
// prints entirely in the text layer (the PABA + Pteridine →
// Dihydropteroic-acid → Dihydrofolic-acid → Tetrahydrofolic-acid cascade with
// its two enzyme labels and the downstream products panel [Purines,
// Thymidine, Methionine → DNA, RNA / DNA / Protein]). The banner typo
// MICROCIOLOGY—ANTIMICROCIALS prints on both pages. The source's own margin
// mnemonics ('TMP Treats Marrow Poorly', 'Fluoroquinolones hurt attachments
// to your bones', 'Dapto-myo-skin', 'GET GAP on the Metro') are carried ONLY
// inside the verbatim note-block tables per the E38 precedent — omitted from
// the visual and the KYP memory layer. The metronidazole margin note
// interleaves INTO the CLINICAL USE text in the raw layer (the GET GAP
// mnemonic + the diaphragm rule printed alongside the field text) — the
// interleave is documented in the manifest.

export const dnaRnaFolateInhibitors: KypUsMLENote = {
  id: "dna-rna-folate-inhibitors",
  title: "DNA/RNA & Folate Pathway Inhibitors",
  subtitle:
    "The non-ribosomal doors of the M31 map, in drug-directory form (books 190-191). THE FOLATE FACTORY: the cascade PABA + Pteridine → dihydropteroic acid → dihydrofolic acid → tetrahydrofolic acid → the downstream products (purines, thymidine, methionine → DNA, RNA, protein), with its TWO GATES — dihydropteroate synthase (locked by the sulfonamides and dapsone) and dihydrofolate reductase (locked by trimethoprim and pyrimethamine); each drug alone is bacteriostatic, the sequential block together is bactericidal. THE CARDS: sulfonamides (sulfamethoxazole, sulfisoxazole, sulfadiazine — inhibit dihydropteroate synthase; gram ⊕, gram ⊝, Nocardia; TMP-SMX for simple UTI; Stevens-Johnson, urticaria, liver damage, folate deficiency, optic neuritis, nephrotoxicity, agranulocytosis, hemolysis if G6PD deficient, kernicterus in infants; resistance by altered enzyme, ↓ uptake, or ↑ PABA); dapsone (structurally distinct sulfa-like — leprosy, P jirovecii prophylaxis with TMP; hemolysis if G6PD deficient, methemoglobinemia, agranulocytosis); trimethoprim (inhibits bacterial dihydrofolate reductase; static alone, cidal with sulfa — UTIs, Shigella, Salmonella, P jirovecii treatment and prophylaxis, toxoplasmosis prophylaxis; hyperkalemia at high doses [the potassium-sparing-diuretic mechanism], megaloblastic anemia, leukopenia, granulocytopenia — avoided with leucovorin); fluoroquinolones (ciprofloxacin, ofloxacin; respiratory: levofloxacin, moxifloxacin — inhibit topoisomerase II [DNA gyrase] and topoisomerase IV; cidal; divalent cations decrease oral absorption; gram ⊝ rods of urinary and GI tracts including Pseudomonas, some gram ⊕, otitis externa, CAP; GI upset, superinfections, rashes, headache, dizziness, leg cramps and myalgias; contraindicated in pregnancy/breastfeeding and children <18 [cartilage]; QT prolongation; tendonitis/tendon rupture >60 years or on prednisone; ciprofloxacin inhibits P-450; resistance by gyrase mutation, plasmids, efflux); daptomycin (lipopeptide creating transmembrane channels in gram ⊕ membranes — MRSA skin infections, bacteremia, endocarditis, VRE; myopathy, rhabdomyolysis; NOT for pneumonia — avidly binds and is inactivated by surfactant); metronidazole (toxic free radical metabolites damaging bacterial/protozoal DNA — cidal, antiprotozoal; Giardia, Entamoeba, Trichomonas, Gardnerella vaginalis, anaerobes [Bacteroides, C difficile]; below-the-diaphragm anaerobes vs clindamycin above; H pylori triple therapy for the penicillin-allergic; disulfiram-like reaction with alcohol, headache, metallic taste).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Antimicrobials",
  pilotCategory:
    "The folate factory with its two gates and the sequential-block synergy; the gyrase door with its divalent-cation trap and its age-bookend toxicities; the membrane channel that surfactant silences; and the free-radical door that owns the below-diaphragm anaerobes.",
  difficulty: 2,
  readTime: 13,
  sourceRef:
    "First Aid 2026, Part 1 pp. 190–191 (the folate pathway pages — sulfonamides, dapsone, trimethoprim; fluoroquinolones, daptomycin, metronidazole)",
  tags: [
    "folate pathway",
    "dihydropteroate synthase",
    "dihydrofolate reductase",
    "PABA",
    "pteridine",
    "sulfonamides",
    "sulfamethoxazole",
    "sulfisoxazole",
    "sulfadiazine",
    "dapsone",
    "trimethoprim",
    "pyrimethamine",
    "TMP-SMX",
    "sequential block",
    "leucovorin",
    "hyperkalemia",
    "megaloblastic anemia",
    "G6PD",
    "kernicterus",
    "Stevens-Johnson syndrome",
    "Nocardia",
    "Pneumocystis jirovecii",
    "toxoplasmosis",
    "fluoroquinolones",
    "ciprofloxacin",
    "ofloxacin",
    "levofloxacin",
    "moxifloxacin",
    "topoisomerase II",
    "DNA gyrase",
    "topoisomerase IV",
    "tendon rupture",
    "QT prolongation",
    "daptomycin",
    "lipopeptide",
    "transmembrane channels",
    "surfactant",
    "rhabdomyolysis",
    "metronidazole",
    "free radicals",
    "disulfiram-like reaction",
    "H pylori triple therapy",
    "anaerobes below the diaphragm",
  ],
  core: {
    what: "THE FOLATE FACTORY (book 190, printed as a text-layer figure). The cascade runs PABA + Pteridine → [dihydropteroate synthase] → dihydropteroic acid → dihydrofolic acid → [dihydrofolate reductase] → tetrahydrofolic acid → the downstream products: purines, thymidine, methionine — feeding DNA, RNA, and protein. TWO GATES, TWO DRUG FAMILIES: the sulfonamides (with dapsone, the structurally distinct cousin) lock the FIRST gate (dihydropteroate synthase — inhibiting folate synthesis); trimethoprim (with pyrimethamine, the antiparasitic cousin) locks the SECOND gate (bacterial dihydrofolate reductase). Each alone is bacteriOSTATIC; the sequential block together (TMP-SMX) is bacteriCIDAL — the synergy that makes the combination the drug of choice for Nocardia, P jirovecii (treatment and prophylaxis), toxoplasmosis prophylaxis, Shigella, Salmonella, and simple UTIs. THE CARDS: SULFONAMIDES (sulfamethoxazole [SMX], sulfisoxazole, sulfadiazine) — gram ⊕, gram ⊝, Nocardia; TMP-SMX for simple UTI; adverse: Stevens-Johnson syndrome, urticaria, liver damage, folate deficiency, optic neuritis, nephrotoxicity, agranulocytosis, hemolysis if G6PD deficient, kernicterus in infants; resistance: altered dihydropteroate synthase, ↓ uptake, or ↑ PABA synthesis. DAPSONE — similar to sulfonamides but structurally distinct; leprosy (lepromatous and tuberculoid), P jirovecii prophylaxis or treatment with TMP; adverse: hemolysis if G6PD deficient, methemoglobinemia, agranulocytosis. TRIMETHOPRIM — inhibits bacterial DHFR; static alone; the combination covers UTIs, Shigella, Salmonella, P jirovecii pneumonia treatment and prophylaxis, toxoplasmosis prophylaxis; adverse: hyperkalemia at high doses (the same mechanism as potassium-sparing diuretics), megaloblastic anemia, leukopenia, granulocytopenia — avoided by coadministering leucovorin (folinic acid). FLUOROQUINOLONES (ciprofloxacin, ofloxacin; respiratory: levofloxacin, moxifloxacin) — inhibit topoisomerase II (DNA gyrase) and topoisomerase IV; bactericidal; concurrent divalent cations (dairy, antacids) markedly decrease oral absorption; gram ⊝ rods of urinary and GI tracts (including Pseudomonas), some gram ⊕, otitis externa, community-acquired pneumonia; adverse: GI upset, superinfections, skin rashes, headache, dizziness, leg cramps and myalgias; contraindicated in pregnancy/breastfeeding and children <18 (cartilage damage); some prolong QT; tendonitis or tendon rupture in people >60 or on prednisone; ciprofloxacin inhibits cytochrome P-450; resistance: chromosome-encoded gyrase mutation, plasmid-mediated resistance, efflux pumps. DAPTOMYCIN — a lipopeptide disrupting gram ⊕ cell membranes by creating transmembrane channels; S aureus skin infections (especially MRSA), bacteremia, infective endocarditis, VRE; myopathy, rhabdomyolysis; NOT used for pneumonia (avidly binds to and is inactivated by surfactant). METRONIDAZOLE — forms toxic free radical metabolites in the bacterial cell that damage DNA; bactericidal, antiprotozoal; Giardia, Entamoeba, Trichomonas, Gardnerella vaginalis, anaerobes (Bacteroides, C difficile); replaces amoxicillin in H pylori triple therapy for the penicillin-allergic; adverse: disulfiram-like reaction with alcohol (severe flushing, tachycardia, hypotension), headache, metallic taste.",
    why: "This page-set completes the M31 map's non-ribosomal doors, and the folate figure is its centerpiece: the cascade is drawn with its two enzyme gates labeled, so the two drug families read as the two locks. The deep idea is SELECTIVITY BY PATHWAY ABSENCE (the M31 chart's own folate logic): bacteria synthesize folate de novo from PABA while human cells import dietary folate — the factory exists only in the pathogen, which is why the sulfa gate and the DHFR gate can be locked without touching the host (except through the idiosyncratic toxicity set: Stevens-Johnson, G6PD hemolysis, kernicterus). The sequential-block synergy is the second idea: locking ONE gate merely slows the factory (static), but locking BOTH starves it outright (cidal) — which is why TMP-SMX, not either drug alone, treats Nocardia and P jirovecii. The fluoroquinolone card carries the set's other selectivity story: we lack bacterial DNA gyrase (we use topoisomerases that the drugs spare), so the gyrase door is pathogen-only — but the drug pays for it with two age-bookend toxicities: cartilage below 18 (contraindicated) and tendons above 60 or on prednisone. The daptomycin card adds the membrane channel: the one wall drug that surfactant silences, which is why MRSA pneumonia is vancomycin's job, not daptomycin's. And the metronidazole card owns the anaerobic world below the diaphragm — the free-radical door that closes the diaphragm rule M33 opened (clindamycin above, metronidazole below).",
    keyIdea:
      "Read the set by GATE, DOOR, and ROUTE. GATE (the folate factory): FIRST gate — dihydropteroate synthase, locked by the sulfonamides (SMX, sulfisoxazole, sulfadiazine) and dapsone; SECOND gate — dihydrofolate reductase, locked by trimethoprim (and pyrimethamine, its antiparasitic cousin); each lock alone is static, both together (TMP-SMX) are cidal; leucovorin rescues the host's marrow (megaloblastic anemia, leukopenia, granulocytopenia) but hyperkalemia at high doses persists (the potassium-sparing mechanism). DOOR (the non-ribosomal set): ⑤ GYRASE — fluoroquinolones (ciprofloxacin, ofloxacin; levofloxacin, moxifloxacin for respiratory) hit topoisomerase II and IV; divalent cations block their absorption; <18 cartilage, >60/prednisone tendons, QT, and cipro's P-450 inhibition. ② MEMBRANE — daptomycin's transmembrane channels (MRSA skin, bacteremia, endocarditis, VRE; myopathy/rhabdomyolysis; never pneumonia — surfactant inactivates it). ③ FREE RADICALS — metronidazole (Giardia, Entamoeba, Trichomonas, Gardnerella, Bacteroides, C difficile; H pylori triple therapy for the penicillin-allergic; disulfiram-like with alcohol). ROUTE: Nocardia and P jirovecii → TMP-SMX; MRSA pneumonia → vancomycin (NOT daptomycin); anaerobes below the diaphragm → metronidazole, above → clindamycin.",
  },
  mechanisms: [
    {
      id: "sequential-folate-blockade",
      title: "Two gates, one factory: the sequential block that turns static into cidal",
      context: "Reading any folate-pathway drug question off the cascade figure (book 190)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A folate-pathway drug or a Nocardia/P jirovecii/toxoplasmosis stem appears",
            sublabel: "Input — sulfa, dapsone, TMP, pyrimethamine, or the TMP-SMX pair.",
            variant: "input",
          },
          {
            id: "gate1",
            label: "FIRST GATE — dihydropteroate synthase (PABA + pteridine → dihydropteroic acid)",
            sublabel: "Locked by the sulfonamides (SMX, sulfisoxazole, sulfadiazine) and dapsone — folate synthesis inhibited; static.",
            variant: "process",
          },
          {
            id: "gate2",
            label: "SECOND GATE — dihydrofolate reductase (dihydrofolic acid → tetrahydrofolic acid)",
            sublabel: "Locked by trimethoprim (and pyrimethamine) — static alone.",
            variant: "process",
          },
          {
            id: "synergy",
            label: "BOTH gates locked — the sequential block starves the factory: bactericidal",
            sublabel: "TMP-SMX: Nocardia, P jirovecii treatment and prophylaxis, toxoplasmosis prophylaxis, Shigella, Salmonella, UTIs.",
            variant: "process",
          },
          {
            id: "hostrescue",
            label: "The host-side protections — leucovorin rescues the marrow; nothing rescues the idiosyncratic set",
            sublabel: "Megaloblastic anemia/leukopenia/granulocytopenia → leucovorin; but Stevens-Johnson, G6PD hemolysis, kernicterus, optic neuritis, and hyperkalemia (high-dose TMP, the K-sparing mechanism) remain.",
            variant: "output",
          },
          {
            id: "resistance",
            label: "The escapes — altered synthase, ↓ uptake, or ↑ PABA (sulfa); resistance to TMP by DHFR changes",
            sublabel: "The factory can reroute around a single lock, which is another reason the pair outlasts either drug alone.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "gate1", label: "the first lock" },
          { from: "trigger", to: "gate2", label: "the second lock" },
          { from: "gate1", to: "synergy", label: "with the second" },
          { from: "gate2", to: "synergy", label: "with the first" },
          { from: "synergy", to: "hostrescue", label: "protect the host" },
          { from: "hostrescue", to: "resistance", label: "the pathogen's escapes" },
        ],
      },
    },
    {
      id: "nonribosomal-doors",
      title: "⑤ gyrase · ② membrane · ③ free radicals: the three remaining doors",
      context: "The fluoroquinolone, daptomycin, and metronidazole cards (book 191)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A non-ribosomal door question — gyrase, membrane, or DNA free radicals",
            sublabel: "Input — FQ, daptomycin, or metronidazole territory.",
            variant: "input",
          },
          {
            id: "gyrase",
            label: "⑤ GYRASE — fluoroquinolones inhibit topoisomerase II (DNA gyrase) and topoisomerase IV; cidal",
            sublabel: "Gram ⊝ rods of urinary/GI tracts incl. Pseudomonas, otitis externa, CAP (respiratory FQs); divalent cations cut absorption; <18 cartilage, >60/prednisone tendons, QT, cipro P-450.",
            variant: "process",
          },
          {
            id: "membrane",
            label: "② MEMBRANE — daptomycin creates transmembrane channels in gram ⊕ membranes",
            sublabel: "MRSA skin, bacteremia, endocarditis, VRE; myopathy/rhabdomyolysis; surfactant inactivates it — never pneumonia.",
            variant: "process",
          },
          {
            id: "radicals",
            label: "③ FREE RADICALS — metronidazole's toxic metabolites damage DNA; cidal, antiprotozoal",
            sublabel: "Giardia, Entamoeba, Trichomonas, Gardnerella, Bacteroides, C difficile; below-diaphragm anaerobes; H pylori triple therapy for the penicillin-allergic; disulfiram-like with alcohol.",
            variant: "process",
          },
          {
            id: "route",
            label: "The routing consequences — MRSA pneumonia → vancomycin; below the diaphragm → metronidazole",
            sublabel: "The age bookends (<18, >60) and the absorption trap (dairy, antacids) complete the FQ's story.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "gyrase", label: "the supercoil lock" },
          { from: "trigger", to: "membrane", label: "the channel drill" },
          { from: "trigger", to: "radicals", label: "the radical burst" },
          { from: "gyrase", to: "route", label: "absorption + age traps" },
          { from: "membrane", to: "route", label: "the surfactant exception" },
          { from: "radicals", to: "route", label: "the diaphragm rule's other half" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "folate-quinolone-map",
      title: "The folate-quinolone map — the folate factory and the three remaining doors",
      caption:
        "An original KYP redraw of the source's folate pathway figure (book 190, printed entirely in the text layer — 0 rasters): the cascade PABA + Pteridine → [dihydropteroate synthase — LOCKED by the sulfonamides and dapsone] → dihydropteroic acid → dihydrofolic acid → [dihydrofolate reductase — LOCKED by trimethoprim and pyrimethamine] → tetrahydrofolic acid → the downstream products panel (purines, thymidine, methionine feeding DNA, RNA, and protein); beside it the three remaining doors of the M31 map — ⑤ the gyrase (fluoroquinolones), ② the membrane channel (daptomycin, the surfactant exception), and ③ the free radicals (metronidazole, the below-diaphragm owner).",
      notice:
        "The cascade figure is pure text-layer glyphs (the two enzyme labels, the four folate intermediates, the downstream products) — redrawn here as clean vector panels. The source's own margin mnemonics ('TMP Treats Marrow Poorly', 'Fluoroquinolones hurt attachments to your bones', 'Dapto-myo-skin', 'GET GAP on the Metro') are omitted from this visual per the copyright boundary — carried only inside the note's verbatim tables.",
    },
    {
      kind: "table",
      title: "Book 190 — the sulfonamides, dapsone, and trimethoprim cards + the folate figure (carried verbatim)",
      intro:
        "The page's three cards and the printed cascade figure, as printed — including the source's own 'TMP Treats Marrow Poorly' margin mnemonic; the figure's glyph emission is interleaved among the cards in the raw layer (documented in the manifest).",
      columns: ["CARD · FIELD", "PRINTED CONTENT — verbatim (book 190)"],
      rows: [
        ["Sulfonamides — Drugs", "Sulfamethoxazole (SMX), sulfisoxazole, sulfadiazine."],
        ["— MECHANISM", "Inhibit dihydropteroate synthase, thus inhibiting folate synthesis. Bacteriostatic (bactericidal when combined with trimethoprim)."],
        ["— CLINICAL USE", "Gram ⊕, gram ⊝, Nocardia. TMP-SMX for simple UTI."],
        ["— ADVERSE EFFECTS", "Stevens-Johnson syndrome, urticaria, liver damage, folate deficiency, optic neuritis, nephrotoxicity, agranulocytosis, hemolysis if G6PD deficient, kernicterus in infants."],
        ["— MECHANISM OF RESISTANCE", "Altered enzyme (bacterial dihydropteroate synthase), ↓ uptake, or ↑ PABA synthesis."],
        ["The folate figure — the first gate", "Sulfonamides, dapsone · Dihydropteroate synthase · Dihydropteroic acid [the locked first gate; PABA + Pteridine feeds it]"],
        ["The folate figure — the second gate", "Dihydrofolic acid · Trimethoprim, pyrimethamine · Dihydrofolate reductase · Tetrahydrofolic acid [the locked second gate]"],
        ["The folate figure — the downstream panel", "Purines · Thymidine · Methionine · DNA, RNA · DNA · Protein [the products the factory feeds]"],
        ["Dapsone — MECHANISM", "Similar to sulfonamides, but structurally distinct agent."],
        ["— CLINICAL USE", "Leprosy (lepromatous and tuberculoid), Pneumocystis jirovecii prophylaxis, or treatment when used in combination with TMP."],
        ["— ADVERSE EFFECTS", "Hemolysis if G6PD deficient, methemoglobinemia, agranulocytosis."],
        ["Trimethoprim — MECHANISM", "Inhibits bacterial dihydrofolate reductase. Bacteriostatic."],
        ["— CLINICAL USE", "Used in combination with sulfonamides (trimethoprim-sulfamethoxazole [TMP-SMX]), causing sequential block of folate synthesis. Combination used for UTIs, Shigella, Salmonella, Pneumocystis jirovecii pneumonia treatment and prophylaxis, toxoplasmosis prophylaxis."],
        ["— ADVERSE EFFECTS", "Hyperkalemia (at high doses; similar mechanism as potassium-sparing diuretics), megaloblastic anemia, leukopenia, granulocytopenia, which may be avoided with coadministration of leucovorin (folinic acid). [Margin note (source): TMP Treats Marrow Poorly.]"],
      ],
      caption:
        "Two gates, one factory: the sulfa lock (dihydropteroate synthase — with its G6PD/Stevens-Johnson/kernicterus idiosyncratic set), the structurally distinct dapsone (leprosy + P jirovecii, with methemoglobinemia), and the TMP lock (DHFR — with the hyperkalemia mechanism and the leucovorin rescue).",
    },
    {
      kind: "table",
      title: "Book 191 — the fluoroquinolones, daptomycin, and metronidazole cards (carried verbatim)",
      intro:
        "The non-ribosomal doors' three cards, as printed — including the source's own margin mnemonics (tendonitis/P-450, 'Fluoroquinolones hurt attachments to your bones', 'Dapto-myo-skin', 'GET GAP on the Metro' + the diaphragm rule, which interleaves INTO the metronidazole CLINICAL USE text in the raw layer).",
      columns: ["CARD · FIELD", "PRINTED CONTENT — verbatim (book 191)"],
      rows: [
        ["Fluoroquinolones — Drugs", "Ciprofloxacin, ofloxacin; respiratory fluoroquinolones: levofloxacin, moxifloxacin."],
        ["— MECHANISM", "Inhibit prokaryotic enzymes topoisomerase II (DNA gyrase) and topoisomerase IV. Bactericidal. Concurrent ingestion of divalent cations (eg, dairy, antacids) markedly decreases oral absorption."],
        ["— CLINICAL USE", "Gram ⊝ rods of urinary and GI tracts (including Pseudomonas), some gram ⊕ organisms, otitis externa, community-acquired pneumonia."],
        ["— ADVERSE EFFECTS", "GI upset, superinfections, skin rashes, headache, dizziness. Less commonly, can cause leg cramps and myalgias. Contraindicated during pregnancy or breastfeeding and in children <18 years old due to possible damage to cartilage. Some may prolong QT interval."],
        ["— Margin notes (source)", "May cause tendonitis or tendon rupture in people >60 years old and in patients taking prednisone. Ciprofloxacin inhibits cytochrome P-450. Fluoroquinolones hurt attachments to your bones."],
        ["— MECHANISM OF RESISTANCE", "Chromosome-encoded mutation in DNA gyrase, plasmid-mediated resistance, efflux pumps."],
        ["Daptomycin — MECHANISM", "Lipopeptide that disrupts cell membranes of gram ⊕ cocci by creating transmembrane channels."],
        ["— CLINICAL USE", "S aureus skin infections (especially MRSA), bacteremia, infective endocarditis, VRE."],
        ["— ADVERSE EFFECTS + note (source)", "Myopathy, rhabdomyolysis. Not used for pneumonia (avidly binds to and is inactivated by surfactant). “Dapto-myo-skin” is used for skin infections but can cause myopathy."],
        ["Metronidazole — MECHANISM", "Forms toxic free radical metabolites in the bacterial cell that damage DNA. Bactericidal, antiprotozoal."],
        ["— CLINICAL USE (+ interleaved margin, source)", "Treats Giardia, Entamoeba, Trichomonas, Gardnerella vaginalis, Anaerobes (Bacteroides, C difficile). Can be used in place of amoxicillin in H pylori “triple therapy” in case of penicillin allergy. [Margin, interleaved: GET GAP on the Metro with metronidazole! Treats anaerobic infection below the diaphragm vs clindamycin (anaerobic infections above diaphragm).]"],
        ["— ADVERSE EFFECTS", "Disulfiram-like reaction (severe flushing, tachycardia, hypotension) with alcohol; headache, metallic taste."],
      ],
      caption:
        "The gyrase door (with its divalent-cation trap, age bookends — cartilage <18, tendons >60/prednisone — and QT), the membrane channel (the surfactant exception that bans it from pneumonia), and the free-radical door (the below-diaphragm owner with the disulfiram-like alcohol trap).",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three routing rules these cards teach",
      body:
        "Rule 1 — THE SYNERGY IS THE ANSWER: Nocardia, P jirovecii (treatment and prophylaxis), toxoplasmosis prophylaxis, and Shigella/Salmonella all route to TMP-SMX — the sequential block that is cidal where either lock alone is static; leucovorin protects the marrow but never the idiosyncratic set (Stevens-Johnson, G6PD hemolysis, kernicterus). Rule 2 — THE ABSORPTION TRAP REPEATS: the fluoroquinolones inherit the tetracycline trap — dairy and antacids (divalent cations) markedly decrease oral absorption. Rule 3 — THE MEMBRANE EXCEPTION: daptomycin is the MRSA drug that must NOT treat pneumonia (surfactant inactivates it) — MRSA pneumonia is vancomycin's job — while metronidazole owns the below-diaphragm anaerobes that clindamycin treats above it.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 71-year-old man on prednisone for polymyalgia rheumatica is given ciprofloxacin for a complicated UTI; days later he develops acute pain and swelling above the heel with an inability to plantarflex.",
        discriminator: "Tendonitis or tendon rupture in people >60 and in patients taking prednisone — the fluoroquinolone's age-bookend toxicity",
        concept: "Fluoroquinolone tendinopathy",
        answer:
          "The card's own margin line: fluoroquinolones may cause tendonitis or tendon rupture in people >60 years old and in patients taking prednisone — the Achilles is the classic site. The same card carries the other bookend (cartilage damage, contraindicated <18), the divalent-cation absorption trap, QT prolongation, and ciprofloxacin's P-450 inhibition.",
      },
      {
        stem: "A 34-year-old woman with bacterial vaginosis is prescribed metronidazole; at a wedding three days later she drinks champagne and develops severe flushing, tachycardia, and hypotension.",
        discriminator: "Disulfiram-like reaction with alcohol — severe flushing, tachycardia, hypotension",
        concept: "Metronidazole's alcohol trap",
        answer:
          "The card's own adverse-effect line: a disulfiram-like reaction with alcohol (severe flushing, tachycardia, hypotension), plus headache and a metallic taste. Counsel every metronidazole patient to avoid alcohol; the drug otherwise covers Giardia, Entamoeba, Trichomonas, Gardnerella, and the below-diaphragm anaerobes (Bacteroides, C difficile), and substitutes for amoxicillin in H pylori triple therapy when penicillin-allergic.",
      },
      {
        stem: "A 26-year-old man with AIDS (CD4 80) develops bilateral diffuse pneumonia; silver stain shows Pneumocystis jirovecii; he is started on the two-drug combination that locks both folate gates.",
        discriminator: "The sequential block of folate synthesis — cidal where each lock alone is static",
        concept: "TMP-SMX for P jirovecii",
        answer:
          "Trimethoprim inhibits bacterial dihydrofolate reductase (the SECOND gate) while sulfamethoxazole inhibits dihydropteroate synthase (the FIRST gate) — together the sequential block that treats P jirovecii pneumonia (and provides prophylaxis), Nocardia, toxoplasmosis prophylaxis, Shigella, Salmonella, and simple UTIs. Watch for hyperkalemia at high doses (the potassium-sparing mechanism) and rescue the marrow with leucovorin.",
      },
    ],
    traps: [
      {
        a: "Sulfonamides alone",
        b: "TMP-SMX together",
        whyConfused: "Both are 'the folate drugs'",
        keyDifference: "Each lock alone is bacteriOSTATIC; the sequential block together is bacteriCIDAL — the synergy line on the sulfa card itself",
        clue: "Nocardia, P jirovecii, toxoplasmosis prophylaxis → the combination; simple UTI → TMP-SMX (the printed use)",
      },
      {
        a: "Daptomycin (MRSA)",
        b: "Vancomycin (MRSA)",
        whyConfused: "Both cover MRSA — daptomycin even covers VRE",
        keyDifference: "Daptomycin is inactivated by surfactant — NOT used for pneumonia; MRSA pneumonia routes to vancomycin (or linezolid)",
        clue: "MRSA bacteremia/endocarditis/VRE (esp. skin) → daptomycin; MRSA pneumonia → vancomycin; and daptomycin brings myopathy/rhabdomyolysis",
      },
      {
        a: "Metronidazole (anaerobes)",
        b: "Clindamycin (anaerobes)",
        whyConfused: "Both are 'the anaerobe drugs'",
        keyDifference: "The diaphragm: metronidazole treats BELOW it (Bacteroides, C difficile, Trichomonas, Giardia); clindamycin treats ABOVE it (the M33 rule)",
        clue: "Intra-abdominal/pelvic anaerobes or C difficile or protozoa → metronidazole; aspiration pneumonia/lung abscess/oral → clindamycin",
      },
    ],
    pivots: [
      {
        lookAlike: "Ciprofloxacin vs levofloxacin/moxifloxacin (the FQ quartet)",
        differentiator: "The respiratory fluoroquinolones (levofloxacin, moxifloxacin) cover the atypicals for community-acquired pneumonia",
        correctPath: "UTI/GI gram ⊝ rods, Pseudomonas, otitis externa → ciprofloxacin/ofloxacin; CAP needing atypical coverage → levofloxacin/moxifloxacin — all sharing the divalent-cation trap, the <18 cartilage ban, the >60/prednisone tendon risk, and QT",
      },
      {
        lookAlike: "Dapsone vs the sulfonamides",
        differentiator: "Structurally distinct but same first gate — and leprosy belongs to dapsone",
        correctPath: "Leprosy (lepromatous or tuberculoid) → dapsone (watch G6PD hemolysis AND methemoglobinemia); Nocardia/simple UTI → the sulfa family; P jirovecii prophylaxis → dapsone-with-TMP or TMP-SMX",
      },
    ],
    miniCase: {
      vignette:
        "A 78-year-old woman with heart failure is treated with TMP-SMX for a first UTI. Her home medications include lisinopril and spironolactone. One week later routine labs show K+ 6.1 mEq/L with peaked T waves; creatinine is unchanged from baseline and her blood counts are normal.",
      question: "What explains the hyperkalemia, and what is the appropriate management?",
      options: [
        {
          label: "Trimethoprim's potassium-sparing effect",
          text: "At high doses trimethoprim blocks distal-tubule epithelial sodium channels like amiloride — the potassium-sparing diuretic mechanism — and the effect stacks on her ACE inhibitor and spironolactone.",
          correct: true,
          why: "Correct. The card's own line: hyperkalemia (at high doses; similar mechanism as potassium-sparing diuretics) — trimethoprim is a ring-shaped amiloride analog at the collecting duct sodium channel. The management is to stop or reduce the TMP-SMX (or switch agents), treat the K+ per protocol, and avoid the stacking combination in future prescriptions; the marrow effects (megaloblastic anemia, leukopenia) would be counteracted with leucovorin, but leucovorin does nothing for the potassium.",
        },
        {
          label: "Sulfonamide-induced nephrotoxicity",
          text: "Acute kidney injury from the sulfa component causing reduced potassium excretion.",
          why: "Wrong, and tempting because nephrotoxicity is printed on the sulfa card. But her creatinine is unchanged — the potassium rise is tubular-channel pharmacology, not kidney failure; the sulfa card's renal toxicity is interstitial/injury-pattern and would move the creatinine first.",
        },
        {
          label: "Addisonian crisis",
          text: "Adrenal insufficiency presenting with hyperkalemia and peaked T waves.",
          why: "Wrong. Nothing in the vignette suggests adrenal collapse (no hypotension, hyponatremia, or hyperpigmentation); the temporal lock to TMP-SMX plus the amiloride-like mechanism is the discriminator. A true-but-irrelevant distractor for any hyperkalemia stem.",
        },
        {
          label: "Hemolysis with hyperkalemia from G6PD deficiency",
          text: "Sulfa-triggered red-cell lysis releasing potassium.",
          why: "Wrong. G6PD hemolysis is printed on the sulfa card (and would present with anemia, jaundice, and dark urine) — but her blood counts are normal and the question's mechanism is the distal sodium channel. G6PD hemolysis is the idiosyncratic set's member, not this one.",
        },
        {
          label: "Spironolactone alone",
          text: "The mineralocorticoid antagonist she was already taking.",
          why: "Partly-true-but-incomplete: spironolactone (and lisinopril) contribute — but she was stable on them before. The NEW variable is the TMP-SMX; the printed mechanism (the potassium-sparing-diuretic-like effect at high doses) is precisely why the combination tipped her. Blaming the old drug alone misses the iatrogenic stack the card warns about.",
        },
      ],
      reasoning:
        "The K+ 6.1 with unchanged creatinine and normal counts points at the collecting duct, not the glomerulus or the marrow: trimethoprim at high doses blocks the distal tubular sodium channel like amiloride (the card's own 'similar mechanism as potassium-sparing diuretics' line), and the patient's baseline ACE inhibitor + spironolactone amplified it. Management: stop or dose-reduce the TMP-SMX, treat the hyperkalemia, and document the interaction — leucovorin would rescue the marrow lines (megaloblastic anemia, leukopenia, granulocytopenia) but cannot touch the potassium.",
    },
  },
  mnemonics: [
    {
      code: "TWO GATES, ONE FACTORY",
      meaning: "The folate cascade has exactly two enzymatic gates: dihydropteroate synthase (locked by the sulfonamides and dapsone) and dihydrofolate reductase (locked by trimethoprim and pyrimethamine) — one lock is static, both are cidal.",
      memorizes: "The folate pathway's two drug gates and the sequential-block synergy",
      whenToUse: "Any folate-pathway mechanism or TMP-SMX indication question",
      clinical: "Nocardia, P jirovecii, toxoplasmosis prophylaxis, Shigella, Salmonella → the two-gate combination; leucovorin rescues the marrow, never the potassium or the idiosyncratic set.",
    },
    {
      code: "CHARTER UNDER 18, RUPTURE OVER 60",
      meaning: "Fluoroquinolones' two age bookends: CARTilage damage risk under 18 (contraindicated) and Tendon RUPTURE over 60 or on prednisone.",
      memorizes: "The fluoroquinolone age-related toxicities",
      whenToUse: "Any FQ prescription in a child, teenager, older adult, or steroid patient",
      clinical: "Avoid FQs in children <18, pregnancy, and breastfeeding; warn the >60/prednisone patient about Achilles pain; remember dairy and antacids cut absorption (the tetracycline trap) and ciprofloxacin inhibits P-450.",
    },
    {
      code: "THE SURFACTANT SPONGE",
      meaning: "Daptomycin avidly binds to and is inactivated by pulmonary surfactant — the lung's sponge soaks it up, so it can never treat pneumonia.",
      memorizes: "Why daptomycin is banned from the lung",
      whenToUse: "MRSA site-of-infection routing questions",
      clinical: "MRSA skin, bacteremia, endocarditis, VRE → daptomycin (watch myopathy/rhabdomyolysis); MRSA pneumonia → vancomycin (or linezolid).",
    },
    {
      code: "METRO RIDES LOW",
      meaning: "Metronidazole works below the diaphragm (Bacteroides, C difficile, Trichomonas, Giardia, Entamoeba, Gardnerella) — clindamycin rides high (above it).",
      memorizes: "The diaphragm rule's metronidazole half",
      whenToUse: "Any anaerobic-site routing question",
      clinical: "Intra-abdominal/pelvic anaerobes, C difficile, bacterial vaginosis, protozoa → metronidazole (counsel no alcohol — the disulfiram-like trap); aspiration pneumonia/oral/dental → clindamycin.",
    },
  ],
  rapidReview: {
    s30: [
      "The folate cascade: PABA + pteridine → [dihydropteroate synthase] → dihydropteroic acid → dihydrofolic acid → [dihydrofolate reductase] → tetrahydrofolic acid → purines, thymidine, methionine (feeding DNA, RNA, protein)",
      "Gate 1 drugs: sulfonamides (SMX, sulfisoxazole, sulfadiazine — static; cidal with TMP) + dapsone (structurally distinct; leprosy, P jirovecii with TMP; hemolysis if G6PD deficient, methemoglobinemia)",
      "Gate 2 drugs: trimethoprim (bacterial DHFR; static alone) + pyrimethamine (its antiparasitic cousin); TMP-SMX covers Nocardia, P jirovecii treatment and prophylaxis, toxoplasmosis prophylaxis, Shigella, Salmonella, UTIs",
      "Fluoroquinolones: ciprofloxacin, ofloxacin + respiratory levofloxacin, moxifloxacin — topoisomerase II (DNA gyrase) and IV; cidal; divalent cations cut absorption; <18 cartilage, >60/prednisone tendons, QT, cipro P-450; resistance by gyrase mutation, plasmids, efflux",
      "Daptomycin (lipopeptide channels, gram ⊕; MRSA skin/bacteremia/endocarditis/VRE; myopathy, rhabdomyolysis; NOT pneumonia — surfactant) · Metronidazole (free radicals damaging DNA; Giardia, Entamoeba, Trichomonas, Gardnerella, Bacteroides, C difficile; below-diaphragm; H pylori triple therapy for the penicillin-allergic; disulfiram-like with alcohol)",
    ],
    m3: [
      "Sulfonamides: inhibit dihydropteroate synthase (folate synthesis); static, cidal with TMP; gram ⊕, gram ⊝, Nocardia; TMP-SMX for simple UTI; Stevens-Johnson, urticaria, liver damage, folate deficiency, optic neuritis, nephrotoxicity, agranulocytosis, G6PD hemolysis, kernicterus in infants; resistance: altered enzyme, ↓ uptake, ↑ PABA",
      "Trimethoprim: inhibits bacterial DHFR; the combination (TMP-SMX) causes the sequential block — UTIs, Shigella, Salmonella, P jirovecii treatment and prophylaxis, toxoplasmosis prophylaxis; hyperkalemia at high doses (the potassium-sparing-diuretic mechanism), megaloblastic anemia, leukopenia, granulocytopenia — avoided with leucovorin (folinic acid)",
      "Dapsone: similar to sulfonamides but structurally distinct; leprosy (lepromatous and tuberculoid), P jirovecii prophylaxis or treatment with TMP; hemolysis if G6PD deficient, methemoglobinemia, agranulocytosis",
      "Fluoroquinolones: inhibit topoisomerase II (DNA gyrase) and topoisomerase IV; bactericidal; gram ⊝ rods of urinary and GI tracts (incl. Pseudomonas), some gram ⊕, otitis externa, CAP (respiratory FQs); GI upset, superinfections, rashes, headache, dizziness, leg cramps/myalgias; contraindicated in pregnancy/breastfeeding and <18 (cartilage); QT; tendonitis/tendon rupture >60 or on prednisone; ciprofloxacin inhibits P-450",
      "Metronidazole: toxic free radical metabolites damage DNA; bactericidal, antiprotozoal; Giardia, Entamoeba, Trichomonas, Gardnerella vaginalis, anaerobes (Bacteroides, C difficile); below-diaphragm vs clindamycin above; replaces amoxicillin in H pylori triple therapy for penicillin-allergic; disulfiram-like reaction with alcohol, headache, metallic taste",
    ],
    m10: [
      "Census: p212 and p213 are PURE TEXT (0 rasters each); the folate pathway figure prints entirely in the text layer — the two enzyme labels, the four intermediates, and the downstream products panel (Purines, Thymidine, Methionine, DNA RNA, DNA, Protein)",
      "The figure's glyph emission interleaves among the cards in the raw layer: 'Sulfonamides, dapsone' (37) and 'Dihydropteroate synthase' (40-41) print between the sulfa and dapsone cards; 'PABA + Pteridine' (58) inside the dapsone card's adverse effects; the downstream panel (97-107) prints after the indd footer — page-end emission",
      "The source's own margin mnemonics ('TMP Treats Marrow Poorly' at raw 93; 'Fluoroquinolones hurt attachments to your bones' at 47-48; 'Dapto-myo-skin' at 66-69; 'GET GAP on the Metro' at 81) are carried ONLY inside the verbatim tables per the E38 precedent",
      "The metronidazole margin note interleaves INTO the CLINICAL USE text in the raw layer (the GET GAP mnemonic and the diaphragm rule print alongside the field text, raw lines 80-86) — documented in the manifest; the fluoroquinolone margin (tendonitis/P-450, raw 43-46) prints between the ADVERSE EFFECTS and RESISTANCE blocks",
      "The banner typo MICROCIOLOGY—ANTIMICROCIALS prints on both pages; '191' (the book-page number on p213) prints mid-page at raw line 41 — between the FQ resistance block and its margin notes",
    ],
  },
  recall: [
    {
      q: "Draw the folate cascade with its two gates and name each gate's drugs.",
      a: "PABA + Pteridine → [GATE 1: dihydropteroate synthase — locked by the sulfonamides (sulfamethoxazole, sulfisoxazole, sulfadiazine) and dapsone] → dihydropteroic acid → dihydrofolic acid → [GATE 2: dihydrofolate reductase — locked by trimethoprim (and pyrimethamine, the antiparasitic cousin)] → tetrahydrofolic acid → the downstream products: purines, thymidine, methionine — feeding DNA, RNA, and protein. Each lock alone is bacteriostatic; the sequential block together (TMP-SMX) is bactericidal — the synergy behind its use for Nocardia, P jirovecii (treatment and prophylaxis), toxoplasmosis prophylaxis, Shigella, Salmonella, and simple UTIs.",
    },
    {
      q: "Carry the sulfonamides and dapsone cards verbatim — all fields.",
      a: "SULFONAMIDES (SMX, sulfisoxazole, sulfadiazine): MECHANISM — inhibit dihydropteroate synthase, thus inhibiting folate synthesis; bacteriostatic (bactericidal when combined with trimethoprim). CLINICAL USE — gram ⊕, gram ⊝, Nocardia; TMP-SMX for simple UTI. ADVERSE EFFECTS — Stevens-Johnson syndrome, urticaria, liver damage, folate deficiency, optic neuritis, nephrotoxicity, agranulocytosis, hemolysis if G6PD deficient, kernicterus in infants. RESISTANCE — altered enzyme (bacterial dihydropteroate synthase), ↓ uptake, or ↑ PABA synthesis. DAPSONE: MECHANISM — similar to sulfonamides, but structurally distinct agent. CLINICAL USE — leprosy (lepromatous and tuberculoid), Pneumocystis jirovecii prophylaxis, or treatment when used in combination with TMP. ADVERSE EFFECTS — hemolysis if G6PD deficient, methemoglobinemia, agranulocytosis.",
    },
    {
      q: "Carry the trimethoprim card verbatim — including the hyperkalemia mechanism.",
      a: "MECHANISM: inhibits bacterial dihydrofolate reductase. Bacteriostatic. CLINICAL USE: used in combination with sulfonamides (trimethoprim-sulfamethoxazole [TMP-SMX]), causing sequential block of folate synthesis; the combination is used for UTIs, Shigella, Salmonella, Pneumocystis jirovecii pneumonia treatment and prophylaxis, and toxoplasmosis prophylaxis. ADVERSE EFFECTS: hyperkalemia (at high doses; similar mechanism as potassium-sparing diuretics), megaloblastic anemia, leukopenia, granulocytopenia — which may be avoided with coadministration of leucovorin (folinic acid). [Margin note (source): TMP Treats Marrow Poorly.]",
    },
    {
      q: "Give the fluoroquinolones card verbatim — mechanism through resistance, with the margin notes.",
      a: "DRUGS: ciprofloxacin, ofloxacin; respiratory fluoroquinolones: levofloxacin, moxifloxacin. MECHANISM: inhibit prokaryotic enzymes topoisomerase II (DNA gyrase) and topoisomerase IV; bactericidal; concurrent ingestion of divalent cations (eg, dairy, antacids) markedly decreases oral absorption. CLINICAL USE: gram ⊝ rods of urinary and GI tracts (including Pseudomonas), some gram ⊕ organisms, otitis externa, community-acquired pneumonia. ADVERSE EFFECTS: GI upset, superinfections, skin rashes, headache, dizziness; less commonly leg cramps and myalgias; contraindicated during pregnancy or breastfeeding and in children <18 years old due to possible damage to cartilage; some may prolong QT. [Margin notes (source): may cause tendonitis or tendon rupture in people >60 years old and in patients taking prednisone; ciprofloxacin inhibits cytochrome P-450; Fluoroquinolones hurt attachments to your bones.] RESISTANCE: chromosome-encoded mutation in DNA gyrase, plasmid-mediated resistance, efflux pumps.",
    },
    {
      q: "Separate daptomycin from metronidazole — mechanism, use, and the two famous exceptions.",
      a: "DAPTOMYCIN: a lipopeptide that disrupts cell membranes of gram ⊕ cocci by creating transmembrane channels; S aureus skin infections (especially MRSA), bacteremia, infective endocarditis, VRE; myopathy, rhabdomyolysis; THE SURFACTANT EXCEPTION — not used for pneumonia (avidly binds to and is inactivated by surfactant), so MRSA pneumonia routes to vancomycin. METRONIDAZOLE: forms toxic free radical metabolites in the bacterial cell that damage DNA; bactericidal, antiprotozoal; Giardia, Entamoeba, Trichomonas, Gardnerella vaginalis, anaerobes (Bacteroides, C difficile); can replace amoxicillin in H pylori triple therapy for the penicillin-allergic; THE ALCOHOL EXCEPTION — a disulfiram-like reaction (severe flushing, tachycardia, hypotension) with alcohol, plus headache and a metallic taste; and the DIAPHRAGM RULE — it owns the anaerobes below the diaphragm while clindamycin treats above it.",
    },
  ],
  related: [
    {
      title: "Antimicrobial Mechanisms: The Target Map",
      topicId: "antimicrobial-overview",
      note: "M31's doors ①③⑤ and the membrane pair ② are this page-set's home: the folate factory (① with its two gates), the free radicals (③), the gyrase (⑤), and daptomycin's gram ⊕ membrane channel (②) — M34 fills the non-ribosomal doors in clinical form.",
    },
    {
      title: "Protein Synthesis Inhibitors: 30S, 50S & Beyond",
      topicId: "protein-synthesis-inhibitors",
      note: "M33 owns the diaphragm rule's clindamycin half (above); this set owns the metronidazole half (below) — the two notes complete each other's anaerobe routing.",
    },
    {
      title: "Cell Wall Inhibitors: Penicillins, Cephalosporins, Carbapenems, Vancomycin",
      topicId: "cell-wall-inhibitors",
      note: "The M32 vancomycin card is the destination of this set's daptomycin exception (MRSA pneumonia) and the amoxicillin-replacement note on the metronidazole card (H pylori triple therapy for the penicillin-allergic).",
    },
    {
      title: "Antimycobacterial Therapy",
      topicId: "antimycobacterials",
      note: "M35 continues the directory: the RIPE regimen's members — this set introduces the folate logic that pyrazinamide and ethambutol's cards sit beside, and dapsone's leprosy card is this set's mycobacteria bridge.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (One-Carbon Metabolism and Nucleotide Synthesis)",
      connection:
        "The folate cascade is the one-carbon chapter in pharmacologic cross-section: THF feeding purines, thymidine (the dTMP step), and methionine — the same pathway the biochemistry chapter teaches from the enzyme side, seen here from the two locked gates.",
    },
    {
      subject: "Pharmacology (Diuretics — Potassium Sparing)",
      connection:
        "Trimethoprim's hyperkalemia is the collecting-duct amiloride mechanism the diuretics chapter teaches — the same epithelial sodium channel, borrowed by an antimicrobial at high doses.",
    },
    {
      subject: "Hematology (G6PD Deficiency)",
      connection:
        "The sulfa and dapsone hemolysis lines are the G6PD chapter's oxidative-stress story applied to prescribing: any oxidative drug in a G6PD-deficient patient risks hemolysis — dapsone adds methemoglobinemia on the same enzyme logic.",
    },
    {
      subject: "Infectious Disease (HIV Prophylaxis Ladder)",
      connection:
        "TMP-SMX is the prophylaxis anchor of the CD4 ladder (P jirovecii below 200, toxoplasmosis below 100) — the M27 CD4-threshold map's prescribing arm, and the reason this set's hyperkalemia trap matters most in exactly those patients.",
    },
  ],
};
