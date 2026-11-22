import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 24. Source: FULL pdf page 271 / book 249
// (Pharmacology — Toxicities and Adverse Effects: TWO three-column tables —
// "Drug reactions—hematologic" on top (EIGHT rows, alphabetical as printed:
// Agranulocytosis, Aplastic anemia, Direct Coombs ⊕ hemolytic anemia, DRESS,
// Hemolysis in G6PD deficiency, Megaloblastic anemia, Thrombocytopenia,
// Thrombotic complications) and "Drug reactions—musculoskeletal/skin/
// connective tissue" on the bottom (ELEVEN rows: Drug-induced lupus, Fat
// redistribution, Gingival hyperplasia, Hyperuricemia (gout), Malignant
// hyperthermia, Myopathy, Osteoporosis, Photosensitivity, Rash
// (Stevens-Johnson syndrome), Teeth discoloration, Tendon/cartilage damage).
// Census (pdfimages): ZERO raster images. The VLM census (glm-4.6v at 120dpi,
// staging-ph24/vlm-census.txt — VLM available, one pass) read BOTH tables
// row-by-row; a deterministic PyMuPDF raw-span pass adjudicated the four
// disputes: (1) the stray "2+" of the text layer is the 6.5pt SUPERSCRIPT on
// "Ca" — the gingival row prints "Ca2+ channel blockers", not a footnote;
// (2) for the LAST THREE hematologic rows the layer emits reaction+causal
// columns first and the two non-empty NOTES cells as a TRAILING BLOCK
// ("You’re having a mega blast with PMS" then "Estrogen-mediated ↑ blood
// viscosity and platelet accumulation") — bbox coordinates assign them to
// the MEGALOBLASTIC ANEMIA and THROMBOTIC COMPLICATIONS rows (carried in row
// order); (3) the thrombotic causal cell prints NO COMMA between "SERMs" and
// "Testosterone supplements" — verbatim; (4) "syndrome" prints hyphenated
// across a wrap in the DRESS note — the cache layer merges it as "syndrome
// (DIHS)"; DIHS (not the VLM's smoothed "DHIS") is the printed spelling.
// EMPTY printed NOTES cells (span-confirmed, carried as printed): G6PD
// hemolysis, Thrombocytopenia, Drug-induced lupus, Myopathy, Osteoporosis,
// Tendon/cartilage damage. NO margin mnemonics, NO footnotes below either
// table; First Aid's own RED in-cell mnemonic lines are carried ATTRIBUTED
// inside the verbatim tables and are NOT counted among the four KYP
// mnemonics — headline carries, verbatim: "Drugs can cause pretty major
// granulocytes collapse" (Agranulocytosis NOTES cell) and "Steven Johnson has
// epileptic allergy to sulfa drugs and penicillin" (SJS rash NOTES cell).
// BATCH-MAP HONESTY: the batch content map expected "gray baby syndrome" and
// "serotonin syndrome" rows here — NEITHER PRINTS on pdf 271/book 249 ("gray
// baby" prints at book 188/197, the protein-synthesis-inhibitor pages);
// whatever rows print governs. NO DrugCards: the exemplar's DrugCard shape
// (mechanism/uses traceable to the printed page) does not fit a pure
// adverse-reaction table page — the causal-agent LISTS are folded into the
// verbatim table blocks, the cell-line mechanism, and the visual (documented
// in the manifest). The KYP diagram (drug-reaction-hematologic-map), the exam
// layer, and the memory layer are original.

export const drugReactionsHematologic: KypUsMLENote = {
  id: "drug-reactions-hematologic",
  title: "Drug Reactions: Hematologic",
  subtitle:
    "One page, two tables, nineteen drug reactions — and one reading rule that organizes all of them: route every hematologic reaction to the CELL LINE AND STAGE it cuts. Agranulocytosis takes out the granulocyte line (the “Drugs can cause pretty major granulocytes collapse” drugs), aplastic anemia empties the whole marrow (“Can’t make New blood cells properly”), megaloblastic anemia stalls erythroid DNA synthesis (“You’re having a mega blast with PMS”), hemolysis strikes the circulating RBC (oxidant stress in G6PD deficiency, immune attack with a ⊕ Coombs), thrombocytopenia drops the megakaryocyte line, and thrombotic complications thicken the plasma (estrogen-mediated ↑ blood viscosity and platelet accumulation). The second table swings to the immune-mediated and tissue reactions — DRESS and Stevens-Johnson rash (the sulfa/anti-epileptic hypersensitivity axis), drug-induced lupus, and the musculoskeletal classics from statin myopathy to dantrolene-antidoted malignant hyperthermia. Sulfa drugs alone strike five different rows on this page.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Toxicities and Adverse Effects",
  pilotCategory: "Pharmacology adverse-effect recall",
  difficulty: 1,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 249–249 (Pharmacology — Toxicities and Adverse Effects: Drug reactions—hematologic + Drug reactions—musculoskeletal/skin/connective tissue; …)",
  tags: [
    "drug reactions",
    "adverse effects",
    "agranulocytosis",
    "aplastic anemia",
    "megaloblastic anemia",
    "hemolytic anemia",
    "G6PD deficiency",
    "direct Coombs positive",
    "DRESS",
    "DIHS",
    "thrombocytopenia",
    "thrombotic complications",
    "drug-induced lupus",
    "Stevens-Johnson syndrome",
    "malignant hyperthermia",
    "photosensitivity",
    "myopathy",
    "osteoporosis",
    "sulfa drugs",
    "chloramphenicol",
    "methimazole",
    "clozapine",
    "heparin",
  ],
  core: {
    what:
      "Two printed tables. TABLE 1 — “Drug reactions—hematologic” (columns DRUG REACTION / CAUSAL AGENTS / NOTES), eight rows in printed (alphabetical) order: AGRANULOCYTOSIS (dapsone, clozapine, carbamazepine, propylthiouracil, methimazole, ganciclovir, colchicine — mnemonic “Drugs can cause pretty major granulocytes collapse”); APLASTIC ANEMIA (carbamazepine, methimazole, NSAIDs, benzene, chloramphenicol, propylthiouracil — “Can’t make New blood cells properly”); DIRECT COOMBS ⊕ HEMOLYTIC ANEMIA (penicillin, cephalosporins, methyldopa — “Pooh classically munches on honey Coombs”); DRUG REACTION WITH EOSINOPHILIA AND SYSTEMIC SYMPTOMS (phenytoin, carbamazepine, minocycline, sulfa drugs, allopurinol, vancomycin — note “T cell-mediated hypersensitivity reaction. Also known as drug-induced hypersensitivity syndrome (DIHS)” plus mnemonic “DRESSes partially cover my skin and viscera”); HEMOLYSIS IN G6PD DEFICIENCY (sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin — notes cell EMPTY); MEGALOBLASTIC ANEMIA (Hydroxyurea, Phenytoin, Methotrexate, Sulfa drugs — “You’re having a mega blast with PMS”); THROMBOCYTOPENIA (heparin, quinidine, ganciclovir, vancomycin, linezolid — notes cell EMPTY); THROMBOTIC COMPLICATIONS (combined oral contraceptives, hormone replacement therapy, SERMs, testosterone supplements, epoetin alfa — note “Estrogen-mediated ↑ blood viscosity and platelet accumulation”). TABLE 2 — “Drug reactions—musculoskeletal/skin/connective tissue”, eleven rows in printed order: DRUG-INDUCED LUPUS (hydralazine, procainamide, quinidine — notes empty); FAT REDISTRIBUTION (protease inhibitors, glucocorticoids — “Fat protects glutes”); GINGIVAL HYPERPLASIA (cyclosporine, Ca2+ channel blockers, phenytoin — “Can Cause puffy gums”); HYPERURICEMIA (GOUT) (pyrazinamide, thiazides, furosemide, niacin, cyclosporine — “Painful tophi and feet need care”); MALIGNANT HYPERTHERMIA (inhaled anesthetics (eg, isoflurane), succinylcholine — note “Individuals with ryanodine receptor mutation; antidote is dantrolene”); MYOPATHY (statins, fibrates, niacin, colchicine, daptomycin, hydroxychloroquine, interferon-α, penicillamine, glucocorticoids — notes empty); OSTEOPOROSIS (glucocorticoids, depot medroxyprogesterone acetate, GnRH agonists, aromatase inhibitors, anticonvulsants, heparin, PPIs — notes empty); PHOTOSENSITIVITY (sulfonamides, amiodarone, tetracyclines, fluoroquinolones — “Sat for photo”); RASH (STEVENS-JOHNSON SYNDROME) (anti-epileptic drugs (especially lamotrigine), allopurinol, sulfa drugs, penicillin — “Steven Johnson has epileptic allergy to sulfa drugs and penicillin”); TEETH DISCOLORATION (tetracyclines — “Teethracyclines”); TENDON/CARTILAGE DAMAGE (fluoroquinolones — notes empty).",
    why:
      "The exam asks this page backwards: it hands you a drug and a falling count, or a drug and a rash, and the answer is the reaction name (or vice versa). What makes the page learnable is that every hematologic row is a POINT ON THE HEMATOPOIETIC TREE — the reaction names the stage that got hit. Agranulocytosis is granulocyte-precursor toxicity (clozapine and methimazole are famous for isolated neutrophil loss — clozapine requires ANC monitoring); aplastic anemia is injury at the pluripotent stem-cell level, so ALL THREE lines fall together (pancytopenia — chloramphenicol's rare idiosyncratic marrow aplasia, benzene the industrial classic); megaloblastic anemia is failure of erythroid DNA synthesis (methotrexate and sulfa drugs antagonize folate metabolism, phenytoin impairs folate absorption, hydroxyurea stalls DNA synthesis at the S-phase) so macrocytes and hypersegmented neutrophils accumulate; hemolysis in G6PD deficiency is oxidant stress on the CIRCULATING red cell whose pentose-phosphate shunt cannot regenerate reduced glutathione (sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin), while direct Coombs ⊕ hemolytic anemia is IMMUNE attack on the circulating red cell (penicillin and cephalosporins act as haptens, methyldopa induces anti-RBC autoantibodies); thrombocytopenia removes the megakaryocyte's product (heparin — via HIT — quinidine, ganciclovir, vancomycin, linezolid); and thrombotic complications do not destroy cells at all — estrogens (OCPs, HRT, SERMs) and epoetin alfa/testosterone raise blood viscosity and platelet accumulation, the mechanism-expected flip side of the same hemostasis axis. The second table carries the IMMUNE-MEDIATED and tissue reactions the exam loves to pair with these: DRESS and Stevens-Johnson rash are both T cell-mediated (type IV) hypersensitivity to the same drug families (sulfa, anti-epileptics, allopurinol), drug-induced lupus is the hydralazine/procainamide/quinidine autoantibody syndrome, and the musculoskeletal rows (glucocorticoid osteoporosis, statin myopathy, gingival hyperplasia, teeth discoloration, tendon rupture, photosensitivity, gout) complete the tissue map. One structural fact crowns the page: OVERLAP IS THE POINT — carbamazepine, methimazole, and propylthiouracil each print in TWO hematologic rows (one drug, two cell-line targets), and sulfa drugs print in FIVE rows across both tables (DRESS, G6PD hemolysis, megaloblastic anemia, photosensitivity, SJS rash).",
    keyIdea:
      "Read every drug-reaction stem in four moves. MOVE 1 — NAME THE CELL LINE OR TISSUE THAT REACTED: isolated neutropenia → the granulocyte line (agranulocytosis); pancytopenia → the whole marrow (aplastic anemia); macrocytic anemia with hypersegmented neutrophils → erythroid DNA synthesis (megaloblastic); hemolysis → the circulating RBC (then ask Coombs ⊕ or −); isolated thrombocytopenia → the megakaryocyte line; clotting instead of bleeding → the plasma/viscosity axis (thrombotic complications); rash, mucositis, eosinophilia, or lupus-like serology → the immune-mediated rows of the second table. MOVE 2 — NAME THE MECHANISM CLASS: immune-mediated (Coombs ⊕ hemolysis, DRESS, SJS, drug-induced lupus) vs marrow/precursor toxicity (agranulocytosis, aplastic anemia) vs DNA-synthesis/proliferation failure (megaloblastic anemia) vs genetic idiosyncrasy (G6PD hemolysis) vs mechanism-expected viscosity effect (thrombosis) vs receptor-mutation catastrophe (malignant hyperthermia → dantrolene). MOVE 3 — NAME THE DRUG LIST (the printed mnemonics store them). MOVE 4 — CROSS-CHECK THE OVERLAPS before answering: if the drug is carbamazepine, methimazole, or propylthiouracil it can take out one line OR the whole marrow — the CBC picks the row; if the drug is a sulfa drug, five different rows are live — the tissue picks the row. The cell line that dropped, never the drug name alone, is the answer key.",
  },
  mechanisms: [
    {
      id: "cell-line-targeting-map",
      title:
        "The hematopoietic tree with the reactions docked to the stage each drug cuts",
      context: "Table 1 — Drug reactions—hematologic (book 249)",
      flow: {
        nodes: [
          {
            id: "drug-injury",
            label: "THE CAUSAL DRUGS — eight lists, one marrow",
            sublabel:
              "Input — the printed causal agents: dapsone, clozapine, carbamazepine, PTU, methimazole, ganciclovir, colchicine (agranulocytosis) · carbamazepine, methimazole, NSAIDs, benzene, chloramphenicol, PTU (aplastic) · penicillin, cephalosporins, methyldopa (Coombs ⊕) · sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin (G6PD) · hydroxyurea, phenytoin, methotrexate, sulfa drugs (megaloblastic) · heparin, quinidine, ganciclovir, vancomycin, linezolid (thrombocytopenia) · OCPs, HRT, SERMs, testosterone, epoetin alfa (thrombosis).",
            variant: "input",
          },
          {
            id: "stem-cell",
            label: "PLURIPOTENT STEM CELL — APLASTIC ANEMIA",
            sublabel:
              "Target — injury at the top of the tree empties every lineage at once: pancytopenia (anemia + neutropenia + thrombocytopenia). “Can’t make New blood cells properly”: Carbamazepine, methimazole, NSAIDs, benzene, chloramphenicol, propylthiouracil.",
            variant: "target",
          },
          {
            id: "granulocyte-line",
            label: "GRANULOCYTE PRECURSORS — AGRANULOCYTOSIS",
            sublabel:
              "Target — the committed granulocyte line fails in isolation: severe neutropenia with fever and painful mouth ulcers, RBCs and platelets spared. “Drugs can cause pretty major granulocytes collapse”: Dapsone, clozapine, carbamazepine, propylthiouracil, methimazole, ganciclovir, colchicine.",
            variant: "target",
          },
          {
            id: "erythroid-dna",
            label: "ERYTHROID DNA SYNTHESIS — MEGALOBLASTIC ANEMIA",
            sublabel:
              "Target — nuclear maturation lags cytoplasmic maturation: macrocytes, hypersegmented neutrophils, megaloblasts in the marrow. “You’re having a mega blast with PMS”: Hydroxyurea, Phenytoin, Methotrexate, Sulfa drugs (folate antagonism and S-phase stall).",
            variant: "target",
          },
          {
            id: "circulating-rbc",
            label: "CIRCULATING RBC — HEMOLYSIS (TWO MECHANISMS)",
            sublabel:
              "Target — the mature red cell is destroyed in the blood: OXIDANT stress in G6PD deficiency (Heinz bodies, bite cells; sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin — Coombs-negative) vs IMMUNE attack with Direct Coombs ⊕ (“Pooh classically munches on honey Coombs”: Penicillin, cephalosporins, methyldopa).",
            variant: "target",
          },
          {
            id: "megakaryocyte-line",
            label: "MEGAKARYOCYTE/PLATELET LINE — THROMBOCYTOPENIA",
            sublabel:
              "Target — the platelet line drops: isolated thrombocytopenia, petechiae and mucosal bleeding. Heparin, quinidine, ganciclovir, vancomycin, linezolid (the one hematologic row printed with NO mnemonic — KYP fills the cell with “HIS QUEEN GETS VERY LOUD”).",
            variant: "target",
          },
          {
            id: "plasma-viscosity",
            label: "PLASMA/ENDOTHELIUM — THROMBOTIC COMPLICATIONS",
            sublabel:
              "Target — no cell is destroyed; the fluid thickens: “Estrogen-mediated ↑ blood viscosity and platelet accumulation” — combined oral contraceptives, hormone replacement therapy, SERMs, testosterone supplements, epoetin alfa → DVT/PE and stroke risk.",
            variant: "target",
          },
          {
            id: "cbc-readout",
            label: "THE CBC NAMES THE ROW",
            sublabel:
              "Output — the exam hands you the count and the drug; the line that dropped (or clotted) routes the stem to exactly one printed row. Overlap check: carbamazepine, methimazole, and propylthiouracil print in TWO rows each (granulocyte line AND whole marrow) — the CBC discriminates.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "drug-injury",
            to: "stem-cell",
            label: "marrow-aplasia injury (benzene, chloramphenicol, carbamazepine…)",
          },
          {
            from: "drug-injury",
            to: "granulocyte-line",
            label: "precursor toxicity (clozapine, methimazole, ganciclovir…)",
          },
          {
            from: "drug-injury",
            to: "erythroid-dna",
            label: "folate/DNA antagonism (methotrexate, phenytoin, sulfa)",
          },
          {
            from: "drug-injury",
            to: "circulating-rbc",
            label: "oxidant stress (G6PD) and hapten/autoantibody (Coombs ⊕)",
          },
          {
            from: "drug-injury",
            to: "megakaryocyte-line",
            label: "platelet destruction (heparin, quinidine, linezolid…)",
          },
          {
            from: "drug-injury",
            to: "plasma-viscosity",
            label: "estrogen/testosterone/epoetin viscosity effect",
          },
          {
            from: "stem-cell",
            to: "cbc-readout",
            label: "pancytopenia",
          },
          {
            from: "granulocyte-line",
            to: "cbc-readout",
            label: "isolated neutropenia (and macrocytosis / hemolysis / thrombocytopenia from the other docks)",
          },
        ],
      },
    },
    {
      id: "sulfa-hypersensitivity-map",
      title:
        "The sulfa/anti-epileptic hypersensitivity axis: DRESS, Stevens-Johnson rash, photosensitivity — and the lupus trio next door",
      context:
        "Table 1's DRESS row + Table 2's Rash (Stevens-Johnson syndrome), Photosensitivity, and Drug-induced lupus rows (book 249)",
      flow: {
        nodes: [
          {
            id: "trigger-band",
            label: "THE TRIGGER BAND — SULFA · ANTI-EPILEPTICS · ALLOPURINOL",
            sublabel:
              "Input — the same three drug families trigger most of the immune rows: sulfa drugs (DRESS, G6PD hemolysis, megaloblastic anemia, photosensitivity, SJS rash — FIVE rows), anti-epileptic drugs especially lamotrigine (SJS rash; phenytoin/carbamazepine in DRESS and megaloblastic anemia), allopurinol (DRESS + SJS rash). Penicillin joins the SJS list; minocycline and vancomycin the DRESS list.",
            variant: "input",
          },
          {
            id: "tcell",
            label: "T CELL-MEDIATED HYPERSENSITIVITY (TYPE IV)",
            sublabel:
              "Process — the printed DRESS note: “T cell-mediated hypersensitivity reaction. Also known as drug-induced hypersensitivity syndrome (DIHS).” Drug-reactive T cells drive the rash, fever, and organ injury; onset is delayed, classically 2–8 weeks after starting the drug.",
            variant: "process",
          },
          {
            id: "dress",
            label: "DRESS — SKIN + VISCERA",
            sublabel:
              "Target — Drug Reaction with Eosinophilia and Systemic Symptoms: morbilliform rash, FEVER, EOSINOPHILIA, hepatitis and other visceral involvement, lymphadenopathy. “DRESSes partially cover my skin and viscera” (Phenytoin, carbamazepine, minocycline, sulfa drugs, allopurinol, vancomycin).",
            variant: "target",
          },
          {
            id: "sjs",
            label: "STEVENS-JOHNSON RASH — SKIN + MUCOSA",
            sublabel:
              "Target — the severe cutaneous adverse reaction spectrum (SJS/TEN): fever, targetoid/macules, MUCOSAL membrane involvement, epidermal necrosis with detachment. “Steven Johnson has epileptic allergy to sulfa drugs and penicillin” (anti-epileptic drugs (especially lamotrigine), allopurinol, sulfa drugs, penicillin).",
            variant: "target",
          },
          {
            id: "photo",
            label: "PHOTOSENSITIVITY — SKIN + UV",
            sublabel:
              "Target — the phototoxic subset: sun-exposed rash from a UV-reactive drug. “Sat for photo” (Sulfonamides, amiodarone, tetracyclines, fluoroquinolones).",
            variant: "target",
          },
          {
            id: "lupus",
            label: "DRUG-INDUCED LUPUS — THE SEROLOGY ROW",
            sublabel:
              "Target — a different immune mechanism (autoantibody induction, anti-histone): lupus-like syndrome (arthralgia, serositis, rash) without renal/CNS disease. Hydralazine, procainamide, quinidine — printed with an EMPTY notes cell.",
            variant: "target",
          },
          {
            id: "discriminator",
            label: "THE EXAM DISCRIMINATOR: WHICH TISSUE, WHICH TIMING",
            sublabel:
              "Output — one trigger band, four reactions; the stem's tissue and timing pick the row: eosinophilia + viscera weeks after starting → DRESS; mucosal involvement + epidermal detachment → SJS; sun-exposed distribution → photosensitivity; arthralgia + anti-histone in a patient on hydralazine/procainamide/quinidine → drug-induced lupus.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger-band", to: "tcell", label: "drug-reactive T cells" },
          { from: "tcell", to: "dress", label: "eosinophilia + systemic visceral injury" },
          { from: "tcell", to: "sjs", label: "keratinocyte apoptosis → epidermal necrosis" },
          { from: "tcell", to: "photo", label: "UV-exposed cutaneous reaction" },
          { from: "trigger-band", to: "lupus", label: "autoantibody (anti-histone) induction", type: "stimulate" },
          { from: "dress", to: "discriminator", label: "skin AND viscera" },
          { from: "sjs", to: "discriminator", label: "skin AND mucosa" },
          { from: "photo", to: "discriminator", label: "sun-exposed skin only" },
          { from: "lupus", to: "discriminator", label: "lupus-like serology, no T-cell rash" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "drug-reaction-hematologic-map",
      title: "The cell-line reaction map (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 249's two tables: the hematopoietic lineage tree (pluripotent stem cell → granulocyte / erythroid / megakaryocyte lines → circulating cells → plasma) with each of the eight hematologic reactions docked to the stage its drugs cut — agranulocytosis at the granulocyte precursors, aplastic anemia at the stem cell, megaloblastic anemia at erythroid DNA synthesis, G6PD hemolysis and Coombs ⊕ hemolysis at the circulating RBC (oxidant vs immune), thrombocytopenia at the megakaryocyte line, thrombotic complications at the plasma-viscosity axis; the sulfa-hypersensitivity band (DRESS → SJS → photosensitivity with the lupus trio beside it); the musculoskeletal/skin quick-dock of the remaining table-2 rows with the dantrolene-antidote callout on malignant hyperthermia; and the SULFA STRIKES FIVE TIMES overlap band that crosses both tables.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 271 — the page's two visual assets are the printed tables themselves (red mnemonic acrostic letters inside the causal-agent and notes cells, red letters inside four row labels — D-R-E-S-S, “Mega blast”, “Coombs”, “Steven Johnson” — dark-teal row labels, black non-mnemonic notes), VLM-read at 120dpi with no margin mnemonics and no footnotes; the lineage tree, the docks, the sulfa band, and the overlap band are an ORIGINAL KYP ADAPTATION — every row, causal agent, note, and mnemonic of both tables is preserved, but the artwork is KYP's. Both tables are additionally carried verbatim in the note's table blocks. The four ALL-CAPS mnemonics are KYP originals; First Aid's own red in-cell mnemonic lines are carried attributed inside the verbatim tables.",
    },
    {
      kind: "table",
      title:
        "Book 249 — the printed “Drug reactions—hematologic” table, carried verbatim (every printed row, printed order)",
      intro:
        "The top table, eight rows in the printed (alphabetical) order, columns DRUG REACTION / CAUSAL AGENTS / NOTES. First Aid prints the mnemonic lines in RED inside the notes cells (the red acrostic letters also highlight the causal agents themselves — e.g. the capitalized Hydroxyurea, Phenytoin, Methotrexate, Sulfa of row 6 keying “PMS”); the two NON-mnemonic notes (DRESS, Thrombotic complications) print in black. Empty notes cells are carried as printed (rows 5 and 7 have none).",
      columns: ["DRUG REACTION", "CAUSAL AGENTS", "NOTES"],
      rows: [
        [
          "Agranulocytosis",
          "Dapsone, clozapine, carbamazepine, propylthiouracil, methimazole, ganciclovir, colchicine",
          "“Drugs can cause pretty major granulocytes collapse” — First Aid's red in-cell mnemonic (acrostic D-c-c-p-m-g-c)",
        ],
        [
          "Aplastic anemia",
          "Carbamazepine, methimazole, NSAIDs, benzene, chloramphenicol, propylthiouracil",
          "“Can’t make New blood cells properly” — First Aid's red in-cell mnemonic (C-m-N-b-c-p)",
        ],
        [
          "Direct Coombs ⊕ hemolytic anemia",
          "Penicillin, cephalosporins, methyldopa",
          "“Pooh classically munches on honey Coombs” — First Aid's red in-cell mnemonic (P-c-m; “honey Coombs” = the positive result)",
        ],
        [
          "Drug Reaction with Eosinophilia and Systemic Symptoms",
          "Phenytoin, carbamazepine, minocycline, sulfa drugs, allopurinol, vancomycin",
          "T cell-mediated hypersensitivity reaction. Also known as drug-induced hypersensitivity syndrome (DIHS) + “DRESSes partially cover my skin and viscera” — First Aid's red in-cell mnemonic",
        ],
        [
          "Hemolysis in G6PD deficiency",
          "Sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin",
          "— (the printed notes cell is EMPTY; no mnemonic prints for this row)",
        ],
        [
          "Megaloblastic anemia",
          "Hydroxyurea, Phenytoin, Methotrexate, Sulfa drugs (the four initials print capitalized, keying the mnemonic)",
          "“You’re having a mega blast with PMS” — First Aid's red in-cell mnemonic (You’re-having = Hydroxyurea-Phenytoin; PMS = Phenytoin, Methotrexate, Sulfa)",
        ],
        [
          "Thrombocytopenia",
          "Heparin, quinidine, ganciclovir, vancomycin, linezolid",
          "— (the printed notes cell is EMPTY; KYP fills it with the original “HIS QUEEN GETS VERY LOUD”, marked as KYP's, not First Aid's)",
        ],
        [
          "Thrombotic complications",
          "Combined oral contraceptives, hormone replacement therapy, SERMs Testosterone supplements, epoetin alfa (printed with NO comma between “SERMs” and “Testosterone supplements” — carried verbatim)",
          "Estrogen-mediated ↑ blood viscosity and platelet accumulation — the printed note (black, not a mnemonic)",
        ],
      ],
      caption:
        "Verbatim carries, documented (see the staging census, staging-ph24/vlm-census.txt): the megaloblastic mnemonic prints in that row's NOTES cell (the text layer emits it in a TRAILING block after the thrombotic causal agents — bbox coordinates assign it to the megaloblastic row, y=285.1 vs the row label y=285.3); the thrombotic note likewise prints in its own row's cell (black type); the thrombotic causal cell prints no comma after “SERMs”; “syndrome” prints hyphenated across a wrap in the DRESS note (the cache layer merges it); DIHS is the printed spelling. The two headline mnemonics, verbatim: “Drugs can cause pretty major granulocytes collapse” and (table 2) “Steven Johnson has epileptic allergy to sulfa drugs and penicillin”.",
    },
    {
      kind: "table",
      title:
        "Book 249 — the printed “Drug reactions—musculoskeletal/skin/connective tissue” table, carried verbatim (every printed row, printed order)",
      intro:
        "The bottom table, eleven rows in the printed order, same three columns. The mnemonic lines print red; the two NON-mnemonic notes (Malignant hyperthermia) print black; four rows print with empty notes cells. The gingival row's “Ca2+ channel blockers” prints with a true SUPERSCRIPT 2+ on Ca (the text layer's stray “2+” line is that superscript, adjudicated by raw spans).",
      columns: ["DRUG REACTION", "CAUSAL AGENTS", "NOTES"],
      rows: [
        [
          "Drug-induced lupus",
          "Hydralazine, procainamide, quinidine",
          "— (the printed notes cell is EMPTY)",
        ],
        [
          "Fat redistribution",
          "Protease inhibitors, glucocorticoids",
          "“Fat protects glutes” — First Aid's red in-cell mnemonic",
        ],
        [
          "Gingival hyperplasia",
          "Cyclosporine, Ca2+ channel blockers, phenytoin (Ca2+ prints with a superscript 2+)",
          "“Can Cause puffy gums” — First Aid's red in-cell mnemonic (C-C-p)",
        ],
        [
          "Hyperuricemia (gout)",
          "Pyrazinamide, thiazides, furosemide, niacin, cyclosporine",
          "“Painful tophi and feet need care” — First Aid's red in-cell mnemonic (P-t-f-n-c)",
        ],
        [
          "Malignant hyperthermia",
          "Inhaled anesthetics (eg, isoflurane), succinylcholine",
          "Individuals with ryanodine receptor mutation; antidote is dantrolene — the printed note (black, not a mnemonic)",
        ],
        [
          "Myopathy",
          "Statins, fibrates, niacin, colchicine, daptomycin, hydroxychloroquine, interferon-α, penicillamine, glucocorticoids",
          "— (the printed notes cell is EMPTY)",
        ],
        [
          "Osteoporosis",
          "Glucocorticoids, depot medroxyprogesterone acetate, GnRH agonists, aromatase inhibitors, anticonvulsants, heparin, PPIs",
          "— (the printed notes cell is EMPTY)",
        ],
        [
          "Photosensitivity",
          "Sulfonamides, amiodarone, tetracyclines, fluoroquinolones",
          "“Sat for photo” — First Aid's red in-cell mnemonic (S-p)",
        ],
        [
          "Rash (Stevens-Johnson syndrome)",
          "Anti-epileptic drugs (especially lamotrigine), allopurinol, sulfa drugs, penicillin",
          "“Steven Johnson has epileptic allergy to sulfa drugs and penicillin” — First Aid's red in-cell mnemonic, carried verbatim (the row label itself prints “Stevens-Johnson” with red letters)",
        ],
        [
          "Teeth discoloration",
          "Tetracyclines",
          "“Teethracyclines” — First Aid's red in-cell mnemonic (the printed spelling)",
        ],
        [
          "Tendon/cartilage damage",
          "Fluoroquinolones",
          "— (the printed notes cell is EMPTY)",
        ],
      ],
      caption:
        "Verbatim carries, documented: “Teethracyclines” is the printed spelling (not “Tetracyclines” doubled — the pun is the mnemonic); “Anti-epileptic drugs (especially lamotrigine)” prints hyphenated; the SJS notes mnemonic wraps across two printed lines (“…to sulfa” / “drugs and penicillin”). No footnotes print below either table (VLM-confirmed); the batch content map's “gray baby syndrome” and “serotonin syndrome” rows do NOT print on this page — gray baby prints at book 188/197 with the protein synthesis inhibitors.",
    },
    {
      kind: "steps",
      title: "Reading any drug-reaction vignette in four moves",
      intro:
        "Both tables distilled into an ordered decision path — TISSUE, MECHANISM, LIST, OVERLAP.",
      steps: [
        {
          label: "MOVE 1 — NAME THE CELL LINE OR TISSUE THAT REACTED",
          detail:
            "Fever + sore throat + isolated neutropenia → granulocyte line (agranulocytosis). Pancytopenia → whole marrow (aplastic anemia). Macrocytic anemia with hypersegmented neutrophils → erythroid DNA synthesis (megaloblastic anemia). Hemolysis (dark urine, back pain, jaundice, ↑ indirect bilirubin/LDH) → circulating RBC — then Coombs ⊕ (immune) vs Coombs-negative (G6PD oxidant). Isolated thrombocytopenia (petechiae, mucosal bleeding) → megakaryocyte line. Clotting instead of bleeding → plasma/viscosity (thrombotic complications). Rash, mucositis, eosinophilia, photosensitive distribution, or lupus-like arthralgia → the immune-mediated rows of table 2. Muscle pain/weakness, bone loss, gum overgrowth, discolored teeth, tendon pain, fever with anesthesia → the tissue rows of table 2.",
        },
        {
          label: "MOVE 2 — NAME THE MECHANISM CLASS",
          detail:
            "Immune-mediated: direct Coombs ⊕ hemolysis (hapten — penicillin/cephalosporins; autoantibody — methyldopa), DRESS and SJS rash (T cell-mediated type IV), drug-induced lupus (anti-histone autoantibody — hydralazine/procainamide/quinidine). Marrow/precursor toxicity: agranulocytosis, aplastic anemia. DNA-synthesis/proliferation failure: megaloblastic anemia (methotrexate/sulfa folate antagonism, phenytoin, hydroxyurea). Genetic idiosyncrasy: G6PD hemolysis (oxidant drugs unmask the enzyme defect). Mechanism-expected: thrombotic complications (estrogen-mediated ↑ blood viscosity and platelet accumulation). Receptor-mutation catastrophe: malignant hyperthermia (ryanodine receptor; antidote dantrolene).",
        },
        {
          label: "MOVE 3 — NAME THE DRUG LIST (the printed mnemonics store them)",
          detail:
            "“Drugs can cause pretty major granulocytes collapse” (Dapsone, clozapine, carbamazepine, propylthiouracil, methimazole, ganciclovir, colchicine) · “Can’t make New blood cells properly” (Carbamazepine, methimazole, NSAIDs, benzene, chloramphenicol, propylthiouracil) · “Pooh classically munches on honey Coombs” (Penicillin, cephalosporins, methyldopa) · “DRESSes partially cover my skin and viscera” (Phenytoin, carbamazepine, minocycline, sulfa, allopurinol, vancomycin) · “You’re having a mega blast with PMS” (Hydroxyurea, Phenytoin, Methotrexate, Sulfa) · “Steven Johnson has epileptic allergy to sulfa drugs and penicillin” (anti-epileptics especially lamotrigine, allopurinol, sulfa, penicillin) · “Sat for photo” (Sulfonamides, amiodarone, tetracyclines, fluoroquinolones) · “Teethracyclines” (tetracyclines). The two rows with NO printed mnemonic — G6PD hemolysis (sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin) and thrombocytopenia (heparin, quinidine, ganciclovir, vancomycin, linezolid) — are the ones KYP supplies memory hooks for.",
        },
        {
          label: "MOVE 4 — CROSS-CHECK THE OVERLAPS BEFORE ANSWERING",
          detail:
            "Carbamazepine, methimazole, and propylthiouracil each print in BOTH agranulocytosis AND aplastic anemia — one drug, two possible depths of marrow injury; the CBC picks the row (isolated neutropenia vs pancytopenia). Ganciclovir prints in agranulocytosis AND thrombocytopenia. Sulfa drugs strike FIVE rows across the two tables (DRESS, G6PD hemolysis, megaloblastic anemia, photosensitivity, SJS rash) — the tissue picks the row. Allopurinol prints in DRESS and SJS. Phenytoin prints in DRESS, megaloblastic anemia, gingival hyperplasia, and (as an anti-epileptic) the SJS list. When the stem gives a drug that spans rows, the answer key is never the drug name — it is the cell line or tissue that reacted.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The overlap centerpiece — one drug, several rows; the CBC picks the answer",
      body:
        "The exam's favorite trick on this page is the DOUBLE-LISTED DRUG. Carbamazepine, methimazole, and propylthiouracil appear in both the agranulocytosis row and the aplastic anemia row — so “the patient is on methimazole” proves nothing by itself. Isolated neutropenia with fever and oral ulcers answers AGRANULOCYTOSIS; a pancytopenia with all three counts falling answers APLASTIC ANEMIA. Ganciclovir likewise spans agranulocytosis and thrombocytopenia (its marrow toxicity hits both precursor lines — the reason for dose-adjustment and count monitoring). And the champion: SULFA DRUGS print in five different rows across the two tables — DRESS, hemolysis in G6PD deficiency, megaloblastic anemia, photosensitivity, and the Stevens-Johnson rash. A sulfa-containing stem is live in five answer rows simultaneously; only the reacting tissue (eosinophilia + viscera? hemolysis? macrocytosis? sun-exposed rash? mucosal necrosis?) selects the printed row. Flip the logic and it becomes a rule: a reaction name with no drug given usually wants the mnemonic's initials; a drug with no reaction given usually wants the cell line.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own red text — the mnemonic layer printed on the page (attributed)",
      body:
        "Both tables carry First Aid's own memory hooks, printed in red inside the cells (attributed here, verbatim — they are the source's mnemonics, not KYP's): “Drugs can cause pretty major granulocytes collapse” (agranulocytosis) · “Can’t make New blood cells properly” (aplastic anemia) · “Pooh classically munches on honey Coombs” (direct Coombs ⊕ hemolytic anemia) · “DRESSes partially cover my skin and viscera” (DRESS) · “You’re having a mega blast with PMS” (megaloblastic anemia) · “Fat protects glutes” (fat redistribution) · “Can Cause puffy gums” (gingival hyperplasia) · “Painful tophi and feet need care” (hyperuricemia/gout) · “Sat for photo” (photosensitivity) · “Steven Johnson has epileptic allergy to sulfa drugs and penicillin” (SJS rash) · “Teethracyclines” (teeth discoloration). The red acrostic letters extend INTO the causal-agent cells — the capitalized “Hydroxyurea, Phenytoin, Methotrexate, Sulfa” keys “PMS”, the red initial letters of the agranulocytosis drugs key “Drugs can cause pretty major granulocytes collapse” — and into four row labels (the D-R-E-S-S of the DRESS row, “Mega blast” in the megaloblastic label, “Coombs” in the hemolysis label, “Steven Johnson” in the rash label). The four ALL-CAPS mnemonics in the Memory section below are KYP originals layered on top.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 34-year-old woman on an antithyroid drug for Graves disease for six weeks presents with fever, severe sore throat, and painful oropharyngeal ulcerations; CBC shows WBC 0.9/mm³ with an absolute neutrophil count below 100/mm³, hemoglobin 13.1 g/dL, and platelets 245,000/mm³.",
        discriminator: "Isolated, profound neutropenia with the red cell and platelet lines intact on methimazole",
        concept: "The granulocyte-line row: agranulocytosis",
        answer:
          "Methimazole is one of the printed “Drugs can cause pretty major granulocytes collapse” drugs (Dapsone, clozapine, carbamazepine, propylthiouracil, methimazole, ganciclovir, colchicine) — precursor toxicity confined to the granulocyte line. The same drug can also cause aplastic anemia, but aplastic anemia is PANCYTOPENIA; with hemoglobin and platelets normal, the granulocyte line alone has collapsed. (Clozapine is the sibling classic — the reason ANC monitoring is mandatory.)",
      },
      {
        stem: "A patient on carbamazepine for months develops fatigue, recurrent epistaxis, and gingival infections; CBC shows pancytopenia with hypocellular marrow on biopsy.",
        discriminator: "ALL three cell lines falling together — the injury is at the pluripotent stem cell",
        concept: "The whole-marrow row: aplastic anemia",
        answer:
          "“Can’t make New blood cells properly” — Carbamazepine, methimazole, NSAIDs, benzene, chloramphenicol, propylthiouracil. Pancytopenia with a hypocellular (empty) marrow distinguishes aplastic anemia from agranulocytosis (one line) and from megaloblastic anemia (hypercellular marrow, macrocytes, hypersegmented neutrophils). Chloramphenicol is the classic exam pairing (dose-related reversible suppression plus the rare idiosyncratic aplasia), benzene the occupational exposure.",
      },
      {
        stem: "A man with malaria prophylaxis aboard develops dark urine, back pain, and jaundice two days after starting the drug; smear shows bite cells and Heinz bodies; direct Coombs test is negative.",
        discriminator: "Oxidant hemolysis in an enzyme-deficient red cell — Coombs-negative, bite cells, Heinz bodies",
        concept: "The circulating-RBC oxidant row: hemolysis in G6PD deficiency",
        answer:
          "The printed causal agents: Sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin — oxidant drugs that overwhelm a G6PD-deficient pentose phosphate pathway (no NADPH → no reduced glutathione → oxidized hemoglobin precipitates as Heinz bodies, splenic macrophages bite them out). This is the row printed with an EMPTY notes cell: no mnemonic prints in the book. Contrast the other hemolysis row — direct Coombs ⊕ (immune): penicillin, cephalosporins, methyldopa (“Pooh classically munches on honey Coombs”).",
      },
      {
        stem: "Three weeks after starting a new anticonvulsant, a patient develops fever, a morbilliform rash, marked eosinophilia, transaminitis, and cervical lymphadenopathy; no mucosal involvement is present.",
        discriminator: "Rash + EOSINOPHILIA + systemic visceral involvement (liver), weeks after starting — T cell-mediated",
        concept: "The immune row that bridges both tables: DRESS",
        answer:
          "Drug Reaction with Eosinophilia and Systemic Symptoms — the printed note reads “T cell-mediated hypersensitivity reaction. Also known as drug-induced hypersensitivity syndrome (DIHS)” and the mnemonic “DRESSes partially cover my skin and viscera” stores the drugs: Phenytoin, carbamazepine, minocycline, sulfa drugs, allopurinol, vancomycin. The absence of mucosal involvement and the eosinophilia + hepatitis pattern separate it from Stevens-Johnson rash, the other T cell-mediated reaction on the same page.",
      },
    ],
    traps: [
      {
        a: "Agranulocytosis (carbamazepine, methimazole, propylthiouracil…)",
        b: "Aplastic anemia (carbamazepine, methimazole, propylthiouracil…)",
        whyConfused:
          "The same three drugs print in BOTH rows — the lists literally overlap",
        keyDifference:
          "The DEPTH of the marrow injury: agranulocytosis is isolated granulocyte-line failure (neutropenia alone, “Drugs can cause pretty major granulocytes collapse”), aplastic anemia is pluripotent-stem-cell failure (pancytopenia with hypocellular marrow, “Can’t make New blood cells properly”)",
        clue:
          "One count down vs all three counts down — the CBC, not the drug name, picks the row",
      },
      {
        a: "Direct Coombs ⊕ hemolytic anemia (penicillin, cephalosporins, methyldopa)",
        b: "Hemolysis in G6PD deficiency (sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin)",
        whyConfused:
          "Both rows are “drug-induced hemolytic anemia” and dapsone/sulfa drugs skirt both lists' neighborhoods",
        keyDifference:
          "Mechanism and smear: IMMUNE (hapten or autoantibody → Direct Coombs POSITIVE, spherocytes possible) vs OXIDANT (G6PD-deficient enzyme → Coombs NEGATIVE, Heinz bodies and bite cells); “Pooh classically munches on honey Coombs” is the immune row's mnemonic — the G6PD row prints with NO mnemonic",
        clue:
          "Coombs ⊕ + drug hapten/autoantibody story → immune row; oxidant drug + bite cells/Heinz bodies → G6PD row",
      },
      {
        a: "Thrombocytopenia (heparin, quinidine, ganciclovir, vancomycin, linezolid)",
        b: "Thrombotic complications (OCPs, HRT, SERMs, testosterone, epoetin alfa)",
        whyConfused:
          "Both rows sit on the platelet/hemostasis axis at the bottom of the same table",
        keyDifference:
          "Opposite directions: thrombocytopenia DESTROYS the megakaryocyte line's product (petechiae, mucosal BLEEDING) while thrombotic complications raise “estrogen-mediated ↑ blood viscosity and platelet accumulation” (pathologic CLOTTING — DVT/PE/stroke)",
        clue:
          "Bleeding exam findings → the destruction row; clotting findings (or a question about estrogen-containing contraception risk) → the viscosity row",
      },
      {
        a: "DRESS (drug Reaction with Eosinophilia and Systemic Symptoms)",
        b: "Rash (Stevens-Johnson syndrome)",
        whyConfused:
          "Both are T cell-mediated hypersensitivity to overlapping drug families (sulfa, anti-epileptics, allopurinol)",
        keyDifference:
          "The tissue and tempo: DRESS = delayed onset (2–8 weeks), fever, EOSINOPHILIA, hepatitis/viscera, lymphadenopathy, NO mucosal involvement (“DRESSes partially cover my skin and viscera”); SJS = fever, targetoid lesions, MUCOSAL membrane involvement, epidermal necrosis/detachment (“Steven Johnson has epileptic allergy to sulfa drugs and penicillin”)",
        clue:
          "Eosinophilia + transaminitis → DRESS; mucositis + skin sloughing/Nikolsky → SJS",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any drug-reaction stem — start by naming what the drug hit, not by naming the drug",
        differentiator:
          "MOVE 1 name the cell line or tissue (granulocyte line / whole marrow / erythroid DNA / circulating RBC / megakaryocyte / plasma-viscosity / skin+mucosa / muscle / bone / gingiva / teeth / tendon / thermoregulation) → MOVE 2 name the mechanism class (immune vs marrow-toxic vs DNA-synthesis vs oxidant-idiosyncratic vs viscosity-expected vs ryanodine-receptor) → MOVE 3 name the printed drug list → MOVE 4 cross-check the overlaps",
        correctPath:
          "Route every reaction to the cell line and stage it cuts — the CBC (or the reacting tissue) names the row; the drug name only supplies the list",
      },
      {
        lookAlike:
          "A stem naming a SULFA drug — five printed rows are live at once",
        differentiator:
          "Sulfa drugs print in DRESS, hemolysis in G6PD deficiency, megaloblastic anemia, photosensitivity, AND the Stevens-Johnson rash — the tissue and cell line decide which row the exam wants",
        correctPath:
          "SULFA STRIKES FIVE TIMES: let eosinophilia+viscera (DRESS), oxidant hemolysis (G6PD), macrocytosis (megaloblastic), sun-exposed rash (photosensitivity), or mucosal necrosis (SJS) pick the answer",
      },
      {
        lookAlike:
          "A rash or systemic reaction after a new drug — immune-mediated, dose/mechanism-expected, or idiosyncratic?",
        differentiator:
          "Immune-mediated rows: DRESS, SJS rash, drug-induced lupus (hydralazine/procainamide/quinidine, anti-histone), direct Coombs ⊕ hemolysis. Mechanism-expected: thrombotic complications (estrogen-mediated ↑ blood viscosity — the effect follows the pharmacology). Idiosyncratic-genetic: G6PD hemolysis (the defect is the patient's). Catastrophic-pharmacogenomic: malignant hyperthermia (ryanodine receptor mutation → inhaled anesthetics/succinylcholine → dantrolene)",
        correctPath:
          "Sort by WHY the reaction happens, not just WHICH drug — immune rows answer to withdrawal ± steroids/support; MH answers to dantrolene; viscosity answers to stopping the estrogen/androgen/epoetin",
      },
    ],
    miniCase: {
      vignette:
        "A 41-year-old woman with Graves disease, started on methimazole six weeks ago, presents with fever (38.9 °C), a severe sore throat, and multiple painful oropharyngeal ulcerations. She has no rash, no arthralgia, and no jaundice. CBC: WBC 0.9/mm³ (absolute neutrophil count 40/mm³), hemoglobin 13.4 g/dL, MCV 89 fL, platelets 248,000/mm³. Peripheral smear shows no fragmented cells; a direct Coombs test is pending. Which of the following best characterizes her reaction?",
      question:
        "Identify the printed drug reaction and the cell line it cut — choose the option that matches BOTH the reaction name and the mechanism.",
      options: [
        {
          label:
            "Agranulocytosis — granulocyte-precursor toxicity from methimazole; the red cell and platelet lines are spared",
          text: "One line down: the granulocyte line.",
          correct: true,
          why:
            "Correct on both layers. Methimazole prints in the agranulocytosis row — “Drugs can cause pretty major granulocytes collapse” (Dapsone, clozapine, carbamazepine, propylthiouracil, methimazole, ganciclovir, colchicine) — and the stem is the textbook agranulocytosis presentation: weeks of drug exposure, then fever, severe sore throat, and oral ulcers (the neutropenic patient's infected mucosa) with an ANC below 100/mm³. Hemoglobin, MCV, and platelets are all normal, which is exactly what granulocyte-line-only injury produces. Route the reaction to the line that dropped and the row names itself.",
        },
        {
          label:
            "Aplastic anemia — pluripotent stem-cell injury from methimazole; all three cell lines fall together",
          text: "Right drug, wrong depth — and the CBC disproves it.",
          why:
            "The trap built into the page: methimazole ALSO prints in the aplastic anemia row (“Can’t make New blood cells properly” — Carbamazepine, methimazole, NSAIDs, benzene, chloramphenicol, propylthiouracil). But aplastic anemia is injury at the pluripotent stem cell: PANCYTOPENIA — anemia, neutropenia, AND thrombocytopenia — with a hypocellular marrow. This patient's hemoglobin (13.4) and platelets (248,000) are normal, so only one lineage has failed. The overlap of the two drug lists is precisely why the CBC, not the drug name, is the answer key.",
        },
        {
          label:
            "Drug Reaction with Eosinophilia and Systemic Symptoms — T cell-mediated hypersensitivity to methimazole with visceral involvement",
          text: "Wrong row and wrong drug list.",
          why:
            "DRESS is real and exam-favorite, but the printed DRESS causal agents are Phenytoin, carbamazepine, minocycline, sulfa drugs, allopurinol, vancomycin — methimazole is not on that list. More importantly, DRESS presents with rash, FEVER, EOSINOPHILIA, hepatitis/transaminitis, and lymphadenopathy (“DRESSes partially cover my skin and viscera”) — a systemic T cell-mediated hypersensitivity (DIHS). This patient has no rash, no eosinophilia (the WBC is profoundly LOW, not eosinophilic), and no visceral signs; her findings are the infected-neutropenia picture, not a hypersensitivity syndrome.",
        },
        {
          label:
            "Hemolysis in G6PD deficiency — oxidant destruction of red cells after six weeks of drug exposure",
          text: "Wrong cell line entirely.",
          why:
            "The G6PD row (Sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin) is hemolysis of the CIRCULATING RED CELL: dark urine, back pain, jaundice, ↑ indirect bilirubin and LDH, Heinz bodies and bite cells on smear, Coombs-negative. This patient's hemoglobin is 13.4 g/dL with a normal MCV and no hemolytic features — the red cell line is untouched, and methimazole is not an oxidant-drug row member anyway. The distractor works because “drug + six weeks + acute presentation” feels hemolytic, but the count that dropped is the neutrophil, not the red cell.",
        },
      ],
      reasoning:
        "The stem hands you a drug (methimazole) and a CBC — so the four moves apply. MOVE 1 (name the line): WBC 0.9 with ANC 40 while hemoglobin, MCV, and platelets are normal means the GRANULOCYTE LINE ALONE has failed. MOVE 2 (mechanism): isolated precursor toxicity, not immune, not oxidant, not DNA-synthesis failure. MOVE 3 (list): methimazole prints in the agranulocytosis row — “Drugs can cause pretty major granulocytes collapse.” MOVE 4 (overlap check): methimazole also prints in the aplastic anemia row, but aplastic anemia is stem-cell failure — all three lines fall — and this CBC spares two of three; the same check eliminates DRESS (different drug list, eosinophilia + viscera) and G6PD hemolysis (red cell line, Coombs-negative hemolysis). Fever, sore throat, and oral ulcers in a profoundly neutropenic patient complete the classic picture (the reason antithyroid drugs and clozapine carry count-monitoring warnings). The correct option is the only one that matches BOTH the row and the line it cuts.",
    },
  },
  mnemonics: [
    {
      code: "ROUTE TO THE LINE",
      meaning:
        "Every hematologic drug reaction names a STAGE OF THE HEMATOPOIETIC TREE — find the stage and the row names itself: granulocyte precursors = AGRANULOCYTOSIS; pluripotent stem cell = APLASTIC ANEMIA (all three lines at once); erythroid DNA synthesis = MEGALOBLASTIC ANEMIA (macrocytes, hypersegmented neutrophils); circulating RBC = HEMOLYSIS (then split by Coombs: ⊕ immune — penicillin/cephalosporins/methyldopa; − oxidant — the G6PD list); megakaryocyte line = THROMBOCYTOPENIA; plasma/endothelium = THROMBOTIC COMPLICATIONS (estrogen-mediated ↑ blood viscosity and platelet accumulation).",
      memorizes:
        "The six-row architecture of the printed hematologic table — which reaction lives at which cell-line stage",
      whenToUse:
        "Any stem giving a drug plus a CBC, or a cytopenia plus a drug list; run the counts against the tree before touching the drug names",
      clinical:
        "The CBC discriminates the overlapping drug lists: one line down = agranulocytosis; all three down = aplastic anemia; the line that dropped tells you the depth of marrow injury even when the drug (carbamazepine, methimazole, PTU) spans both rows.",
    },
    {
      code: "HIS QUEEN GETS VERY LOUD",
      meaning:
        "Heparin, Quinidine, Ganciclovir, Vancomycin, Linezolid — the five printed thrombocytopenia drugs. The queen gets louder and louder while the platelet count goes quieter and quieter (isolated thrombocytopenia → petechiae and mucosal bleeding).",
      memorizes:
        "The thrombocytopenia causal-agents list — the one hematologic row whose NOTES cell prints EMPTY in First Aid (no mnemonic prints on the page for it)",
      whenToUse:
        "Isolated thrombocytopenia questions, HIT stems, linezolid or vancomycin count-monitoring questions, and any “which drug pair drops platelets” item",
      clinical:
        "Heparin (HIT — paradoxical thrombosis risk), quinidine, ganciclovir, vancomycin, linezolid — ganciclovir is the double-listed drug (also agranulocytosis), so a patient on it can lose neutrophils, platelets, or both.",
    },
    {
      code: "SULFA STRIKES FIVE TIMES",
      meaning:
        "Sulfa drugs print in FIVE different rows across the two tables of book 249: DRESS (drug Reaction with Eosinophilia and Systemic Symptoms), Hemolysis in G6PD deficiency, Megaloblastic anemia (folate antagonism), Photosensitivity, and Rash (Stevens-Johnson syndrome). One drug class, five tissues — the tissue, never the drug, picks the row.",
      memorizes:
        "The cross-table sulfa overlap — which five reactions a sulfonamide stem could be pointing to",
      whenToUse:
        "Any stem naming a sulfa drug (TMP-SMX, sulfasalazine, thiazides-adjacent distractors) with rash, hemolysis, macrocytosis, or a falling count",
      clinical:
        "A patient on a sulfonamide who is reacting is live in five answer rows — check eosinophilia + viscera (DRESS), Coombs-negative hemolysis with bite cells (G6PD), macrocytosis (megaloblastic), sun-exposed rash (photosensitivity), or mucosal necrosis (SJS) before answering.",
    },
    {
      code: "DANTROLENE DOMINATES THE RYANODINE RAGE",
      meaning:
        "Malignant hyperthermia: inhaled anesthetics (eg, isoflurane) + succinylcholine unmask a RYANODINE RECEPTOR mutation → uncontrolled skeletal-muscle Ca2+ release → hyperthermia, muscle rigidity, rhabdomyolysis, hypercarbia — and the printed antidote is DANTROLENE, which dominates the raged receptor (it blocks ryanodine-receptor Ca2+ release). The printed note reads: “Individuals with ryanodine receptor mutation; antidote is dantrolene.”",
      memorizes:
        "The malignant-hyperthermia row of the musculoskeletal table — triggers, the receptor, and the antidote",
      whenToUse:
        "Intraoperative or post-anesthesia hyperthermia + masseter rigidity stems, and any “antidote?” question on this reaction",
      clinical:
        "Dantrolene is the answer the moment the stem pairs an inhaled anesthetic or succinylcholine with fever and rigidity — stop the anesthetic, give dantrolene, cool the patient, watch for rhabdomyolysis.",
    },
  ],
  rapidReview: {
    s30: [
      "Agranulocytosis: dapsone, clozapine, carbamazepine, propylthiouracil, methimazole, ganciclovir, colchicine — “Drugs can cause pretty major granulocytes collapse”",
      "Aplastic anemia (pancytopenia, hypocellular marrow): carbamazepine, methimazole, NSAIDs, benzene, chloramphenicol, propylthiouracil — “Can’t make New blood cells properly”",
      "Direct Coombs ⊕ hemolytic anemia: penicillin, cephalosporins, methyldopa — “Pooh classically munches on honey Coombs”",
      "DRESS = T cell-mediated hypersensitivity reaction, also known as drug-induced hypersensitivity syndrome (DIHS): phenytoin, carbamazepine, minocycline, sulfa drugs, allopurinol, vancomycin — “DRESSes partially cover my skin and viscera”",
      "Hemolysis in G6PD deficiency (Coombs-negative, Heinz bodies, bite cells): sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin — printed with an EMPTY notes cell",
      "Megaloblastic anemia: Hydroxyurea, Phenytoin, Methotrexate, Sulfa drugs — “You’re having a mega blast with PMS”",
      "Thrombocytopenia: heparin, quinidine, ganciclovir, vancomycin, linezolid — empty notes cell (KYP: “HIS QUEEN GETS VERY LOUD”)",
      "Thrombotic complications: combined oral contraceptives, hormone replacement therapy, SERMs, testosterone supplements, epoetin alfa — “Estrogen-mediated ↑ blood viscosity and platelet accumulation”",
    ],
    m3: [
      "ROUTE TO THE LINE — the CBC names the row: one line down (agranulocytosis), all three down (aplastic), macrocytes (megaloblastic), hemolysis (circulating RBC — Coombs splits it), platelets down (thrombocytopenia), clotting (thrombotic)",
      "HIS QUEEN GETS VERY LOUD — Heparin, Quinidine, Ganciclovir, Vancomycin, Linezolid drop the platelet count",
      "SULFA STRIKES FIVE TIMES — DRESS, G6PD hemolysis, megaloblastic anemia, photosensitivity, SJS rash: the tissue picks the row",
      "DANTROLENE DOMINATES THE RYANODINE RAGE — inhaled anesthetics + succinylcholine → malignant hyperthermia in ryanodine-receptor mutation carriers; antidote dantrolene",
    ],
    m10: [
      "The page's headline mnemonics, verbatim: “Drugs can cause pretty major granulocytes collapse” (agranulocytosis) and “Steven Johnson has epileptic allergy to sulfa drugs and penicillin” (SJS rash) — both First Aid's red in-cell text, carried attributed",
      "Rows printed with EMPTY notes cells: Hemolysis in G6PD deficiency, Thrombocytopenia, Drug-induced lupus, Myopathy, Osteoporosis, Tendon/cartilage damage",
      "Printed quirks carried verbatim: the gingival causal cell prints “Ca2+ channel blockers” with a true superscript 2+; the thrombotic causal cell prints NO comma between “SERMs” and “Testosterone supplements”; “Teethracyclines” is the printed pun; DIHS (drug-induced hypersensitivity syndrome) is the printed abbreviation",
      "The hematologic table prints in alphabetical order: Agranulocytosis → Aplastic anemia → Direct Coombs ⊕ hemolytic anemia → DRESS → Hemolysis in G6PD deficiency → Megaloblastic anemia → Thrombocytopenia → Thrombotic complications",
      "Double-listed drugs: carbamazepine, methimazole, propylthiouracil (agranulocytosis + aplastic anemia); ganciclovir (agranulocytosis + thrombocytopenia); allopurinol (DRESS + SJS); phenytoin (DRESS + megaloblastic + gingival hyperplasia + the anti-epileptic SJS list)",
      "Drug-induced lupus: hydralazine, procainamide, quinidine — empty notes cell; the batch map's “gray baby syndrome” and “serotonin syndrome” rows do NOT print on this page (gray baby lives with the protein synthesis inhibitors, book 188/197)",
    ],
  },
  recall: [
    {
      q: "The agranulocytosis causal agents, verbatim, and the row's printed mnemonic.",
      a: "Dapsone, clozapine, carbamazepine, propylthiouracil, methimazole, ganciclovir, colchicine — “Drugs can cause pretty major granulocytes collapse” (First Aid's red in-cell mnemonic, acrostic D-c-c-p-m-g-c).",
    },
    {
      q: "The aplastic anemia causal agents and its mnemonic.",
      a: "Carbamazepine, methimazole, NSAIDs, benzene, chloramphenicol, propylthiouracil — “Can’t make New blood cells properly” (C-m-N-b-c-p).",
    },
    {
      q: "Which drug-induced hemolytic anemia is Direct Coombs ⊕, with its drugs and mnemonic?",
      a: "Penicillin, cephalosporins, methyldopa — “Pooh classically munches on honey Coombs” (immune hemolysis; contrast the Coombs-negative G6PD oxidant row: sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin).",
    },
    {
      q: "The DRESS row — causal agents, the printed note, and the mnemonic.",
      a: "Phenytoin, carbamazepine, minocycline, sulfa drugs, allopurinol, vancomycin. Printed note: “T cell-mediated hypersensitivity reaction. Also known as drug-induced hypersensitivity syndrome (DIHS).” Mnemonic: “DRESSes partially cover my skin and viscera.”",
    },
    {
      q: "The G6PD hemolysis row's causal agents — and what its notes cell prints.",
      a: "Sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin — the printed NOTES cell is EMPTY (no mnemonic prints for this row).",
    },
    {
      q: "The megaloblastic anemia causal agents and mnemonic.",
      a: "Hydroxyurea, Phenytoin, Methotrexate, Sulfa drugs (initials capitalized in the print, keying the mnemonic) — “You’re having a mega blast with PMS.”",
    },
    {
      q: "The two platelet-axis rows at the bottom of the hematologic table — causal agents and the printed note.",
      a: "Thrombocytopenia: heparin, quinidine, ganciclovir, vancomycin, linezolid (notes cell empty). Thrombotic complications: combined oral contraceptives, hormone replacement therapy, SERMs, testosterone supplements, epoetin alfa — “Estrogen-mediated ↑ blood viscosity and platelet accumulation.”",
    },
    {
      q: "The Stevens-Johnson rash row — causal agents and the exact printed mnemonic.",
      a: "Anti-epileptic drugs (especially lamotrigine), allopurinol, sulfa drugs, penicillin — “Steven Johnson has epileptic allergy to sulfa drugs and penicillin.”",
    },
  ],
  related: [
    {
      title: "Pentose Phosphate Pathway",
      topicId: "pentose-phosphate-pathway",
      note:
        "The G6PD row's engine room: G6PD is the rate-limiting enzyme of the HMP shunt, the red cell's only source of NADPH for regenerating reduced glutathione — the reason oxidant drugs (sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin) hemolyze G6PD-deficient cells and why Heinz bodies and bite cells appear on the smear.",
    },
    {
      title: "Hypersensitivity Types",
      topicId: "hypersensitivity-types",
      note:
        "The mechanism behind the immune rows: DRESS and the Stevens-Johnson rash print as “T cell-mediated hypersensitivity” — type IV (delayed) hypersensitivity — while direct Coombs ⊕ hemolytic anemia is type II (antibody against a cell: hapten-modified or autoantibody-coated RBCs); drug-induced lupus is the autoantibody (anti-histone) cousin.",
    },
    {
      title: "DNA/RNA & Folate Pathway Inhibitors",
      topicId: "dna-rna-folate-inhibitors",
      note:
        "Why the megaloblastic anemia list is what it is: methotrexate and sulfa drugs antagonize folate-dependent DNA synthesis (dihydrofolate reductase / PABA→dihydropteroate), and hydroxyurea stalls ribonucleotide reductase at S-phase — erythroid nuclear maturation fails and macrocytes with hypersegmented neutrophils accumulate.",
    },
    {
      title: "T-Cell, Combined & Phagocyte Immunodeficiencies",
      topicId: "t-cell-phagocyte-immunodeficiencies",
      note:
        "The congenital mirror of the agranulocytosis row: drug-induced granulocyte-line failure (clozapine, methimazole, ganciclovir, colchicine, dapsone, carbamazepine, PTU) presents exactly like the congenital neutropenia/phagocyte-defect workup — fever, oral ulcers, overwhelming bacterial and fungal infection when the ANC falls.",
    },
  ],
  crossLinks: [
    {
      subject: "Pathology and hematology (hematopoiesis and the CBC)",
      connection:
        "The hematologic table is a map of the hematopoietic tree: pluripotent stem cell injury → aplastic anemia (pancytopenia, hypocellular marrow); committed granulocyte-precursor injury → agranulocytosis (isolated neutropenia); megakaryocyte-line injury → thrombocytopenia; erythroid DNA-synthesis failure → megaloblastic anemia (macrocytes, hypersegmented neutrophils, megaloblasts); circulating-cell destruction → hemolysis; and plasma/endothelial effects → thrombosis. Reading a CBC against this tree is the same skill whether the cause is a drug or a marrow disease.",
    },
    {
      subject: "Biochemistry (folate, B12, and one-carbon metabolism)",
      connection:
        "Megaloblastic anemia sits at the junction of pharmacology and one-carbon biochemistry: methotrexate inhibits dihydrofolate reductase, sulfa drugs block de novo folate synthesis in bacteria (and at high dose can antagonize human folate handling), phenytoin impairs folate absorption, and hydroxyurea inhibits ribonucleotide reductase — all converging on failed thymidylate/DNA synthesis in the erythroid lineage, the same bottleneck as folate and B12 deficiency.",
    },
    {
      subject: "Immunology (type IV hypersensitivity and autoantibody syndromes)",
      connection:
        "DRESS and Stevens-Johnson rash are the drug-triggered face of type IV T cell-mediated hypersensitivity (delayed, drug-reactive T cells, 2–8 week onset), direct Coombs ⊕ hemolytic anemia is type II (hapten penicillin/cephalosporin; autoantibody methyldopa), and drug-induced lupus (hydralazine, procainamide, quinidine) is the anti-histone autoantibody syndrome — the Gell-Coombs ladder is literally printed across these rows.",
    },
    {
      subject: "Antimicrobial pharmacology (the sulfa platform and its off-targets)",
      connection:
        "The sulfa drugs' folate-pathway mechanism (PABA → dihydropteroate synthase inhibition) explains their megaloblastic-row entry, while the class's hypersensitivity tendency explains DRESS, photosensitivity, and the SJS rash — one antimicrobial platform striking five rows. Neighboring rows carry the same double-life: chloramphenicol (aplastic anemia here; gray baby syndrome with the protein synthesis inhibitors) and linezolid (thrombocytopenia here; serotonin-syndrome risk with serotonergic co-administration).",
    },
  ],
};
