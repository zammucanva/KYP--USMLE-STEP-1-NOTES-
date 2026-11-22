import type { KypUsMLENote } from "../types";

// Pathology — CELLULAR INJURY banner (P-batch 7). Source: pdf 230 /
// book 208 (Amyloidosis — the definition block with the β-pleated
// sheet configuration, the six-organ manifestations list, the Congo
// red / H&E staining block, and the COMMON TYPES table: Systemic
// [Primary AL, Secondary AA, Transthyretin, Dialysis-related
// β2-microglobulin] + Localized [Alzheimer β-amyloid, Isolated
// atrial ANP, Type 2 DM islet amyloid polypeptide, Medullary
// thyroid cancer calcitonin]). Census: pdfimages reports TWO cmyk
// JPEG rasters (~188x177 and ~188x175 at 150 dpi), lettered A and
// B: A = the Congo red micrograph under NONPOLARIZED light
// (salmon red/orange amyloid deposits against a pale pink
// background with scattered dark nuclei); B = the same field under
// POLARIZED light (a dark background with the deposits glowing
// apple-green birefringent flecks and streaks). BOTH COPYRIGHTED —
// described-in-text only, NEVER reproduced (the M32 convention).
// Stream-order quirk documented (the M39 footer-split pattern): the
// left-column labels 'Amyloidosis' (raw 94), 'COMMON TYPeS'
// (raw 96), 'A' (raw 98), 'B' (raw 100), 'Systemic' (raw 102), and
// 'Localized' (raw 104) all print AFTER the table rows and the
// manifestations in the text layer. NO margin notes or mnemonics on
// this page (VLM confirmed); the KYP memory layer is original.

export const amyloidosis: KypUsMLENote = {
  id: "amyloidosis",
  title: "Amyloidosis: The Deposition Diseases",
  subtitle:
    "One structural accident — extracellular protein deposited in abnormal fibrillar form (β-pleated sheet configuration) → cell injury and apoptosis — wearing nine clinical costumes (book 208). THE STAIN — Congo red: red/orange on nonpolarized light (A), apple-green birefringence on polarized light (B); H&E: amorphous pink. THE ORGANS — manifestations vary with the involved organ: renal (nephrotic syndrome), cardiac (restrictive cardiomyopathy), GI (hepatosplenomegaly), neurologic (dementia, peripheral neuropathy), musculoskeletal (muscle enlargement eg macroglossia, carpal tunnel syndrome), skin (waxy thickening, easy bruising). THE SOURCE ROUTING — SYSTEMIC: Primary amyloidosis = AL (from Ig Light chains) in plasma cell dyscrasias (eg, multiple myeloma); Secondary amyloidosis = AA (serum Amyloid A) in chronic inflammatory conditions (eg, rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection); Transthyretin amyloidosis = TTR, sporadic wild-type (slowly progressive, aging, mainly the heart) or hereditary mutated (familial amyloid polyneuropathy and/or cardiomyopathy); Dialysis-related = β2-microglobulin in ESRD on long-term dialysis. LOCALIZED: Alzheimer disease = β-amyloid protein cleaved from amyloid precursor protein; Isolated atrial amyloidosis = ANP (common, aging, ↑ risk for atrial fibrillation); Type 2 diabetes mellitus = islet amyloid polypeptide (amylin deposited in pancreatic islets); Medullary thyroid cancer = calcitonin secreted from tumor cells.",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Cellular Injury",
  pilotCategory:
    "The fibril-to-disease router — one β-pleated-sheet deposition mechanism with a Congo-red identification cascade (red/orange nonpolarized, apple-green birefringence polarized, amorphous pink on H&E), a six-organ manifestation list (nephrotic syndrome, restrictive cardiomyopathy, hepatosplenomegaly, dementia and peripheral neuropathy, macroglossia and carpal tunnel, waxy thickening and easy bruising), and the nine-row COMMON TYPES table split Systemic (AL, AA, TTR wild-type and mutated, β2-microglobulin) against Localized (β-amyloid, ANP, islet amyloid polypeptide, calcitonin).",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 208–208 (Amyloidosis — the definition block with the β-pleated sheet configuration; the manifestations list; the Congo red and H&E staining block with the two lettered micrographs, described in text; the COMMON TYPES table — Systemic and Localized groups)",
  tags: [
    "amyloidosis",
    "beta-pleated sheet",
    "Congo red stain",
    "apple-green birefringence",
    "polarized light",
    "amorphous pink",
    "H&E stain",
    "AL amyloidosis",
    "primary amyloidosis",
    "Ig light chains",
    "plasma cell dyscrasia",
    "multiple myeloma",
    "AA amyloidosis",
    "secondary amyloidosis",
    "serum amyloid A",
    "chronic inflammatory conditions",
    "rheumatoid arthritis",
    "inflammatory bowel disease",
    "familial Mediterranean fever",
    "protracted infection",
    "transthyretin amyloidosis",
    "wild-type TTR",
    "mutated TTR",
    "familial amyloid polyneuropathy",
    "senile cardiac amyloidosis",
    "dialysis-related amyloidosis",
    "beta2-microglobulin",
    "ESRD",
    "long-term dialysis",
    "Alzheimer disease",
    "beta-amyloid protein",
    "amyloid precursor protein",
    "APP",
    "isolated atrial amyloidosis",
    "ANP",
    "atrial natriuretic peptide",
    "atrial fibrillation",
    "type 2 diabetes mellitus",
    "islet amyloid polypeptide",
    "amylin",
    "pancreatic islets",
    "medullary thyroid cancer",
    "calcitonin",
    "nephrotic syndrome",
    "restrictive cardiomyopathy",
    "hepatosplenomegaly",
    "dementia",
    "peripheral neuropathy",
    "macroglossia",
    "carpal tunnel syndrome",
    "waxy thickening",
    "easy bruising",
    "cell injury",
    "apoptosis",
  ],
  core: {
    what: "AMYLOIDOSIS: extracellular deposition of protein in abnormal fibrillar form (β-pleated sheet configuration) → cell injury and apoptosis. Manifestations vary depending on involved organ: Renal—nephrotic syndrome; Cardiac—restrictive cardiomyopathy; GI—hepatosplenomegaly; Neurologic—dementia, peripheral neuropathy; Musculoskeletal—muscle enlargement (eg, macroglossia), carpal tunnel syndrome; Skin—waxy thickening, easy bruising. IDENTIFICATION: amyloid deposits are visualized by Congo red stain (red/orange on nonpolarized light, apple-green birefringence on polarized light) and H&E stain (amorphous pink). COMMON TYPES — SYSTEMIC: Primary amyloidosis — AL (from Ig Light chains), seen in plasma cell dyscrasias (eg, multiple myeloma); Secondary amyloidosis — AA (serum Amyloid A), seen in chronic inflammatory conditions (eg, rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection); Transthyretin amyloidosis — Transthyretin, sporadic (wild-type TTR) slowly progressive, associated with aging, mainly affecting the heart, or hereditary (mutated TTR) with familial amyloid polyneuropathy and/or cardiomyopathy; Dialysis-related amyloidosis — β2-microglobulin, seen in patients with ESRD on long-term dialysis. LOCALIZED: Alzheimer disease — β-amyloid protein, cleaved from amyloid precursor protein; Isolated atrial amyloidosis — ANP, common, associated with aging, ↑ risk for atrial fibrillation; Type 2 diabetes mellitus — islet amyloid polypeptide, caused by deposition of amylin in pancreatic islets; Medullary thyroid cancer — calcitonin, secreted from tumor cells.",
    why: "This page is the deposition twin of the calcification page: one structural accident (a protein refolded into a β-pleated sheet and laid down extracellularly) that injures cells and triggers apoptosis wherever it lands, and a diagnostic stain that reads the sheet directly — Congo red glues to the fibrils and shifts from red/orange under plain light to the apple-green birefringence under polarized light (with only amorphous pink to show on H&E). The organ list is the clinical signature: a disease that presents as nephrotic syndrome in the kidney, restrictive cardiomyopathy in the heart, hepatosplenomegaly in the GI tract, dementia and peripheral neuropathy in the nervous system, macroglossia and carpal tunnel in muscle, and waxy easy-bruising skin — one mechanism, six costumes. And the COMMON TYPES table is the exam's router: ask WHERE the protein came from and you have named the disease — AL from Ig light chains in plasma cell dyscrasias (multiple myeloma), AA from serum amyloid A in chronic inflammation (rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection), transthyretin in its wild-type aging heart and mutated familial polyneuropathy forms, β2-microglobulin accumulating in the ESRD patient on long-term dialysis, then the localized quartet — β-amyloid cleaved from APP in Alzheimer disease, ANP in the aging atrium raising atrial fibrillation risk, amylin in the type 2 diabetic islet, and calcitonin secreted by medullary thyroid cancer cells.",
    keyIdea:
      "Route every amyloid question through three stations. STATION 1 — THE STAIN: Congo red = red/orange on nonpolarized light, APPLE-GREEN birefringence on polarized light; H&E = amorphous pink. STATION 2 — THE ORGAN: renal nephrotic syndrome, cardiac restrictive cardiomyopathy, GI hepatosplenomegaly, neurologic dementia and peripheral neuropathy, musculoskeletal macroglossia and carpal tunnel, skin waxy thickening and easy bruising. STATION 3 — THE SOURCE: SYSTEMIC (AL — Ig light chains, plasma cell dyscrasias eg multiple myeloma; AA — serum amyloid A, chronic inflammation eg rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection; TTR — wild-type aging heart vs mutated familial amyloid polyneuropathy and/or cardiomyopathy; β2-microglobulin — ESRD on long-term dialysis) or LOCALIZED (β-amyloid from APP — Alzheimer disease; ANP — aging atria, ↑ atrial fibrillation risk; islet amyloid polypeptide/amylin — type 2 diabetes pancreatic islets; calcitonin — medullary thyroid cancer, secreted from tumor cells). One β-pleated sheet, one green glow, nine diseases.",
  },
  mechanisms: [
    {
      id: "beta-sheet-identification",
      title: "The identification cascade: a β-pleated sheet that glows green and kills cells quietly",
      context: "The definition and staining blocks (book 208)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Extracellular protein deposited in abnormal fibrillar form — the β-pleated sheet configuration",
            sublabel: "Input — any amyloid vignette: an unexplained nephrotic syndrome, a stiff heart, a giant tongue, a waxy bruise.",
            variant: "input",
          },
          {
            id: "injury",
            label: "THE INJURY — cell injury and apoptosis",
            sublabel: "The deposited fibrils injure the cells they surround and push them into apoptosis — the parenchyma thins between deposits, organ by organ.",
            variant: "process",
          },
          {
            id: "organs",
            label: "THE SIX ORGANS — manifestations vary with the involved organ",
            sublabel: "Renal—nephrotic syndrome · Cardiac—restrictive cardiomyopathy · GI—hepatosplenomegaly · Neurologic—dementia, peripheral neuropathy · Musculoskeletal—muscle enlargement (eg, macroglossia), carpal tunnel syndrome · Skin—waxy thickening, easy bruising.",
            variant: "process",
          },
          {
            id: "stain",
            label: "THE STAIN — Congo red: red/orange plain light, apple-green birefringence polarized; H&E: amorphous pink",
            sublabel: "Amyloid deposits are visualized by Congo red stain (red/orange on nonpolarized light, apple-green birefringence on polarized light) and H&E stain (amorphous pink) — the birefringence is the confirmatory glow.",
            variant: "process",
          },
          {
            id: "output",
            label: "Diagnosis made — now name the protein source to name the disease",
            sublabel: "Output — the stain confirms amyloid; the COMMON TYPES table (systemic vs localized, and the clinical context) names which of the nine diseases is depositing.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "injury", label: "fibrils deposit" },
          { from: "injury", to: "organs", label: "organ by organ" },
          { from: "organs", to: "stain", label: "biopsy" },
          { from: "stain", to: "output", label: "green glow" },
        ],
      },
    },
    {
      id: "fibril-source-routing",
      title: "The fibril source router: which protein, which clinical setting, which disease",
      context: "The COMMON TYPES table (book 208)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An amyloid diagnosis is confirmed — route by the protein's origin",
            sublabel: "Input — the clinical context already in the stem: a plasma cell dyscrasia, chronic inflammation, aging, dialysis, or a single-organ disease.",
            variant: "input",
          },
          {
            id: "systemic",
            label: "SYSTEMIC — the four marrow-, inflammation-, liver-, and dialysis-derived fibrils",
            sublabel: "PRIMARY (AL, from Ig Light chains) in plasma cell dyscrasias (eg, multiple myeloma) · SECONDARY (AA, serum Amyloid A) in chronic inflammatory conditions (eg, rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection) · TRANSTHYRETIN — sporadic wild-type (slowly progressive, aging, mainly the heart) or hereditary mutated (familial amyloid polyneuropathy and/or cardiomyopathy) · DIALYSIS-RELATED (β2-microglobulin) in ESRD on long-term dialysis.",
            variant: "process",
          },
          {
            id: "localized",
            label: "LOCALIZED — the four organ-confined fibrils",
            sublabel: "ALZHEIMER DISEASE (β-amyloid protein, cleaved from amyloid precursor protein) · ISOLATED ATRIAL AMYLOIDOSIS (ANP — common, aging, ↑ risk for atrial fibrillation) · TYPE 2 DIABETES MELLITUS (islet amyloid polypeptide — amylin deposited in pancreatic islets) · MEDULLARY THYROID CANCER (calcitonin, secreted from tumor cells).",
            variant: "process",
          },
          {
            id: "output",
            label: "The named disease — and the named next move",
            sublabel: "Output — the marrow drives the workup of AL (the M spike, the free light chains); inflammation drives AA (treat the source); aging heart and neuropathy split the TTR pair by pace and family; the dialysis patient's β2-microglobulin and the localized quartet stay where they started.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "systemic", label: "multi-organ / systemic context" },
          { from: "trigger", to: "localized", label: "single-organ disease" },
          { from: "systemic", to: "output", label: "name the source" },
          { from: "localized", to: "output", label: "name the organ" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "amyloid-deposition-map",
      title: "The amyloid fibril-to-organ deposition map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source page (book 208 — the definition block, the manifestations list, the Congo red/H&E staining block, and the COMMON TYPES table; the two copyrighted micrographs described in text): the definition panel (the β-pleated sheet configuration → cell injury and apoptosis) with the Congo red identification cascade (red/orange on nonpolarized light, apple-green birefringence on polarized light, amorphous pink on H&E); the six-organ manifestation strip (renal nephrotic syndrome, cardiac restrictive cardiomyopathy, GI hepatosplenomegaly, neurologic dementia and peripheral neuropathy, musculoskeletal macroglossia and carpal tunnel, skin waxy thickening and easy bruising); and the COMMON TYPES router — SYSTEMIC (AL from Ig light chains in plasma cell dyscrasias; AA from serum amyloid A in chronic inflammation; transthyretin in its wild-type aging-heart and mutated familial-polyneuropathy forms; β2-microglobulin in ESRD on long-term dialysis) against LOCALIZED (β-amyloid from APP in Alzheimer disease; ANP in the aging atrium with ↑ atrial fibrillation risk; islet amyloid polypeptide/amylin in the type 2 diabetic islet; calcitonin secreted from medullary thyroid cancer cells).",
      notice:
        "The source page prints TWO COPYRIGHTED PHOTOGRAPHS (cmyk JPEGs, ~188x177 and ~188x175 at 150 dpi), lettered A and B: A = Congo red stain under NONPOLARIZED light — salmon red/orange amyloid deposits against a pale background with scattered dark nuclei; B = the same deposit under POLARIZED light — a dark field with the amyloid glowing apple-green birefringent. Both described in text in this note's tables and in the registry visual, NEVER reproduced (the M32 convention). Stream-order quirk documented (the M39 pattern): the left-column labels 'Amyloidosis' (raw 94), 'COMMON TYPeS' (raw 96), 'A' (raw 98), 'B' (raw 100), 'Systemic' (raw 102), and 'Localized' (raw 104) print after the table rows in the text layer. No margin notes or mnemonics on the page (VLM census confirmed); the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title: "Book 208 — the definition, manifestations, and staining blocks (carried verbatim)",
      intro: "The page's opening blocks, as printed — the mechanism, the six-organ signature, and the two-stain identification.",
      columns: ["BLOCK", "VERBATIM — book 208"],
      rows: [
        [
          "THE DEFINITION",
          "Extracellular deposition of protein in abnormal fibrillar form (β-pleated sheet configuration) → cell injury and apoptosis. Manifestations vary depending on involved organ and include:",
        ],
        [
          "THE SIX ORGANS",
          "▘ Renal—nephrotic syndrome. ▘ Cardiac—restrictive cardiomyopathy. ▘ GI—hepatosplenomegaly. ▘ Neurologic—dementia, peripheral neuropathy. ▘ Musculoskeletal—muscle enlargement (eg, macroglossia), carpal tunnel syndrome. ▘ Skin—waxy thickening, easy bruising.",
        ],
        [
          "THE STAIN",
          "Amyloid deposits are visualized by Congo red stain (red/orange on nonpolarized light A, apple-green birefringence on polarized light B), and H&E stain (amorphous pink).",
        ],
        [
          "THE TWO PHOTOGRAPHS (described in text — copyrighted, never reproduced)",
          "PHOTOGRAPH A (cmyk JPEG, ~188x177, 150 dpi): the Congo red micrograph under NONPOLARIZED light — salmon red/orange amyloid deposits in a granular, dense texture against a pale pinkish background with scattered dark nuclei. PHOTOGRAPH B (~188x175): the same field under POLARIZED light — the background gone dark, the deposits glowing as apple-green birefringent flecks and streaks. Both sit in the upper right column beside the definition, above the COMMON TYPES table.",
        ],
      ],
      caption:
        "One sheet, six organs, one green glow: the β-pleated sheet injures cells and drives apoptosis wherever it deposits, the organ list is the presentation, and the Congo red pair (A plain light, B polarized) is the confirmation.",
    },
    {
      kind: "table",
      title: "Book 208 — the COMMON TYPES table (carried verbatim, all nine rows)",
      intro: "The fibril source router, as printed — Systemic and Localized groups, with each fibril protein and its clinical note.",
      columns: ["COMMON TYPES (verbatim)", "FIBRIL PROTEIN (verbatim)", "NOTES (verbatim)"],
      rows: [
        [
          "Systemic — Primary amyloidosis",
          "AL (from Ig Light chains)",
          "Seen in plasma cell dyscrasias (eg, multiple myeloma)",
        ],
        [
          "Systemic — Secondary amyloidosis",
          "AA (serum Amyloid A)",
          "Seen in chronic inflammatory conditions, (eg, rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection)",
        ],
        [
          "Systemic — Transthyretin amyloidosis",
          "Transthyretin",
          "Sporadic (wild-type TTR)—slowly progressive, associated with aging; mainly affects the heart. Hereditary (mutated TTR)—familial amyloid polyneuropathy and/or cardiomyopathy",
        ],
        [
          "Systemic — Dialysis-related amyloidosis",
          "β2-microglobulin",
          "Seen in patients with ESRD on long-term dialysis",
        ],
        [
          "Localized — Alzheimer disease",
          "β-amyloid protein",
          "Cleaved from amyloid precursor protein",
        ],
        [
          "Localized — Isolated atrial amyloidosis",
          "ANP",
          "Common, associated with aging; ↑ risk for atrial fibrillation",
        ],
        [
          "Localized — Type 2 diabetes mellitus",
          "Islet amyloid polypeptide",
          "Caused by deposition of amylin in pancreatic islets",
        ],
        [
          "Localized — Medullary thyroid cancer",
          "Calcitonin",
          "Secreted from tumor cells",
        ],
      ],
      caption:
        "Ask where the protein came from and the disease names itself: the marrow's light chains (AL), inflammation's serum amyloid A (AA), the liver's transthyretin in wild-type and mutated forms, the dialysis patient's β2-microglobulin — then the organ-confined quartet: APP's β-amyloid, the aging atrium's ANP, the diabetic islet's amylin, and the tumor cell's calcitonin.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 66-year-old man with a new monoclonal M spike on serum protein electrophoresis develops nephrotic-range proteinuria, and echocardiography shows thickened ventricles with a restrictive filling pattern; he also complains of a burning sensation in the fingers at night.",
        discriminator: "AL amyloidosis — Ig light chains in a plasma cell dyscrasia, depositing systemically: nephrotic syndrome + restrictive cardiomyopathy + carpal tunnel",
        concept: "The marrow source",
        answer:
          "Primary amyloidosis: AL (from Ig Light chains), seen in plasma cell dyscrasias (eg, multiple myeloma) — the M spike names the source, the nephrotic-range proteinuria is the renal manifestation, the restrictive cardiomyopathy is the cardiac manifestation, and the nocturnal finger burning is carpal tunnel from the musculoskeletal deposition. A fat-pad or renal biopsy stained with Congo red (red/orange nonpolarized, apple-green birefringence polarized) confirms the sheet.",
      },
      {
        stem: "A 45-year-old woman with a 15-year history of rheumatoid arthritis presents with new nephrotic syndrome and hepatosplenomegaly; her joints are chronically deformed and inflamed.",
        discriminator: "AA amyloidosis — serum amyloid A in chronic inflammatory conditions (rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection)",
        concept: "The inflammation source",
        answer:
          "Secondary amyloidosis: AA (serum Amyloid A), seen in chronic inflammatory conditions (eg, rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection) — the acute-phase reactant that never stops being produced finally refolds and deposits. The kidney (nephrotic syndrome) and the GI tract (hepatosplenomegaly) are the classic landing sites; treatment of the underlying inflammation is the treatment of the deposition.",
      },
      {
        stem: "A 78-year-old man with no other history develops progressive heart failure with echocardiography showing thickened, restrictive ventricular walls and biventricular stiffness; no M spike is found and the free light-chain ratio is normal.",
        discriminator: "Sporadic wild-type transthyretin amyloidosis — slowly progressive, associated with aging, mainly affecting the heart",
        concept: "The aging heart",
        answer:
          "Transthyretin amyloidosis, sporadic (wild-type TTR): slowly progressive, associated with aging, mainly affects the heart — the negative M spike and normal light chains separate it from AL, and the absence of neuropathy separates it from the hereditary form (mutated TTR — familial amyloid polyneuropathy and/or cardiomyopathy), which presents decades earlier with a family history.",
      },
    ],
    traps: [
      {
        a: "AL amyloidosis",
        b: "AA amyloidosis",
        whyConfused: "Both are systemic amyloid and both can cause nephrotic syndrome",
        keyDifference: "AL comes from Ig light chains in plasma cell dyscrasias (eg, multiple myeloma) — look for the M spike; AA comes from serum amyloid A in chronic inflammatory conditions (rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection) — look for the long-standing inflammation",
        clue: "The comorbidity names the fibril: an M spike or myeloma workup in the stem → AL; deformed rheumatoid joints, IBD, recurrent fevers, or a protracted infection → AA",
      },
      {
        a: "Wild-type (sporadic) TTR amyloidosis",
        b: "Hereditary (mutated) TTR amyloidosis",
        whyConfused: "Same fibril protein — transthyretin — in both",
        keyDifference: "Sporadic wild-type is slowly progressive, associated with aging, and mainly affects the heart; hereditary mutated presents as familial amyloid polyneuropathy and/or cardiomyopathy — a family history and neuropathy point to the mutated form",
        clue: "An elderly patient with an isolated stiff heart and normal light chains → wild-type; a younger patient with a family history and a painful polyneuropathy ± cardiomyopathy → mutated",
      },
      {
        a: "Amyloid on H&E",
        b: "Amyloid on Congo red",
        whyConfused: "Both stains visualize the same deposit, but only one names it",
        keyDifference: "H&E shows amyloid only as amorphous pink (nonspecific); Congo red is the diagnostic stain — red/orange on nonpolarized light and APPLE-GREEN birefringence on polarized light — the birefringence is the confirmation the exam asks for",
        clue: "Any stem that hands you a polarizer or asks for the confirmatory finding → apple-green birefringence on Congo red under polarized light; plain H&E can only offer amorphous pink",
      },
      {
        a: "Islet amyloid polypeptide in type 2 diabetes",
        b: "Calcitonin amyloid in medullary thyroid cancer",
        whyConfused: "Both are localized amyloid of endocrine organs",
        keyDifference: "The diabetic islet deposits are islet amyloid polypeptide (amylin) laid down in pancreatic islets; the medullary thyroid deposits are calcitonin SECRETED FROM TUMOR CELLS — the tumor makes the fibril protein itself",
        clue: "The organ in the stem names the protein: pancreatic islets of a type 2 diabetic → amylin; a calcitonin-secreting thyroid mass (with the RET/MEN 2 context) → medullary thyroid cancer amyloid",
      },
    ],
    pivots: [
      {
        lookAlike: "A systemic-sounding amyloid presentation — which of the four systemic fibrils?",
        differentiator: "Route by the clinical context printed in the stem: plasma cell dyscrasia (M spike, myeloma) → AL; chronic inflammation (RA, IBD, FMF, protracted infection) → AA; aging heart without M spike → wild-type TTR; ESRD on long-term dialysis → β2-microglobulin",
        correctPath: "The comorbidity IS the pointer: marrow → AL, inflammation → AA, age → TTR, dialysis → β2-microglobulin — four systemic fibrils, four clinical doors",
      },
      {
        lookAlike: "An organ-specific disease — is amyloid even the mechanism?",
        differentiator: "The localized quartet is single-organ and protein-specific: Alzheimer disease (β-amyloid protein cleaved from APP), isolated atrial amyloidosis (ANP, aging, ↑ atrial fibrillation risk), type 2 diabetes mellitus (islet amyloid polypeptide/amylin in pancreatic islets), medullary thyroid cancer (calcitonin from tumor cells)",
        correctPath: "When the disease is confined to one organ, name the local protein: the brain's plaques, the aging atrium, the diabetic islet, and the tumor's calcitonin — none of them require Congo red to manage, but all of them are amyloid by structure",
      },
    ],
    miniCase: {
      vignette:
        "A 69-year-old man presents with 6 months of fatigue, ankle swelling, and early satiety. Urinalysis shows 4+ proteinuria with a spot protein/creatinine ratio of 9.2 g/g and a bland sediment; serum albumin is 2.4 g/dL and total cholesterol is high. Echocardiography shows concentrically thickened ventricular walls with a restrictive filling pattern and small cavities, and the ejection fraction is normal. On examination the tongue appears enlarged with dental indentations, the skin of the eyelids and neck is waxy and bruises easily, and he reports numbness in both hands at night that wakes him from sleep. Serum protein electrophoresis shows an M spike, and serum free light chains show a markedly elevated lambda fraction. A renal biopsy is performed.",
      question:
        "What will the biopsy show, which stain confirms it, and what is the source of the deposited protein in this patient?",
      options: [
        {
          label: "Amorphous extracellular deposits that are amorphous pink on H&E, red/orange with Congo red under nonpolarized light, and apple-green birefringent under polarized light — AL amyloidosis from Ig light chains of a plasma cell dyscrasia",
          text: "The lambda M spike names the source; the Congo red glow names the sheet.",
          correct: true,
          why: "Correct on all three layers. The presentation stacks four entries of the manifestations list — renal (nephrotic syndrome: 9.2 g/g proteinuria, hypoalbuminemia, hyperlipidemia), cardiac (restrictive cardiomyopathy: thickened walls, restrictive filling, normal EF), musculoskeletal (muscle enlargement — the macroglossia with dental indentations — and carpal tunnel syndrome), and skin (waxy thickening, easy bruising). The biopsy shows extracellular amorphous pink deposits on H&E that stain red/orange on Congo red under nonpolarized light and show apple-green birefringence under polarized light — the β-pleated sheet configuration, extracellular deposition of protein in abnormal fibrillar form causing cell injury and apoptosis. The source is AL (from Ig Light chains) — primary amyloidosis, seen in plasma cell dyscrasias (eg, multiple myeloma), here named by the M spike and the lambda free light chain excess.",
        },
        {
          label: "The same Congo red findings, but the source is AA (serum amyloid A) from a chronic inflammatory condition",
          text: "It is systemic amyloid either way — the inflammation must be driving it.",
          why: "Wrong source routing: AA amyloidosis is seen in chronic inflammatory conditions (eg, rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection), and this stem has none — instead it hands you the plasma cell dyscrasia (M spike, lambda light chain excess). The fibril protein matters because the workup and the prognosis follow the source: myeloma-driven AL, not inflammation-driven AA.",
        },
        {
          label: "Wild-type transthyretin amyloidosis of the aging heart — the nephrotic syndrome is unrelated chronic kidney disease",
          text: "At 69 with a stiff heart, the aging transthyretin is the unifying diagnosis.",
          why: "Wrong unification: sporadic wild-type TTR is slowly progressive, associated with aging, and MAINLY AFFECTS THE HEART — it does not explain the nephrotic syndrome, the macroglossia, or the carpal tunnel, and crucially the stem's M spike with lambda light chain excess is the AL signature that wild-type TTR explicitly lacks (free light chains are normal in TTR amyloidosis).",
        },
        {
          label: "Light-chain (cast) nephropathy — the lambda chains are directly toxic to tubules, so no Congo red staining is expected",
          text: "Myeloma kidney is the renal disease of plasma cell dyscrasias; amyloid is a red herring.",
          why: "Wrong lesion for the same source: light-chain cast nephropathy of multiple myeloma produces Blandin tubular casts (fractured, brittle casts with a giant-cell reaction) that are Congo red NEGATIVE, and it presents with acute kidney injury and a muddy sediment — not 4+ proteinuria with nephrotic syndrome and a bland sediment. The nephrotic-range proteinuria with hypoalbuminemia here is the glomerular deposition disease — amyloid — and it glows apple-green under polarized light.",
        },
        {
          label: "β2-microglobulin dialysis-related amyloidosis — the renal failure caused the deposition",
          text: "The kidney failure came first; the amyloid followed the dialysis.",
          why: "Wrong clinical door: dialysis-related amyloidosis (β2-microglobulin) is seen in patients with ESRD on LONG-TERM dialysis, and this patient's kidneys are failing from the amyloid itself (nephrotic syndrome), not from ESRD preceding it — there is no dialysis history, and the M spike points to the marrow, not to the dialysis circuit.",
        },
      ],
      reasoning:
        "The stem deliberately stacks four of the six manifestations (renal, cardiac, musculoskeletal with both macroglossia AND carpal tunnel, and skin) and then hands you the source (the M spike with lambda light chain excess). (1) The MANIFESTATIONS list: nephrotic syndrome, restrictive cardiomyopathy, muscle enlargement (eg, macroglossia) with carpal tunnel syndrome, and waxy thickening with easy bruising — all four print on the source page. (2) The STAIN: the biopsy shows amorphous pink on H&E, and Congo red gives red/orange on nonpolarized light with apple-green birefringence on polarized light — the confirmatory cascade. (3) The SOURCE: the plasma cell dyscrasia routes to AL (from Ig Light chains) — primary amyloidosis, seen in plasma cell dyscrasias (eg, multiple myeloma). The distractors each misroute one layer: AA (requires chronic inflammation the stem does not have), wild-type TTR (aging heart WITHOUT an M spike — and without nephrotic syndrome, macroglossia, or carpal tunnel), light-chain cast nephropathy (the other renal disease of myeloma — Congo red negative, tubular casts, nephritic not nephrotic), and dialysis-related β2-microglobulin (requires ESRD on long-term dialysis BEFORE the amyloid, not amyloid causing the renal disease). The three-station rule closes the case: the stain confirms, the organs map, the source names.",
    },
  },
  mnemonics: [
    {
      code: "ONE SHEET, SIX ORGANS",
      meaning: "The deposition rule and its clinical surface: ONE mechanism — extracellular protein in abnormal fibrillar form (β-pleated sheet configuration) → cell injury and apoptosis — presenting in SIX organs: Renal (nephrotic syndrome), Cardiac (restrictive cardiomyopathy), GI (hepatosplenomegaly), Neurologic (dementia, peripheral neuropathy), Musculoskeletal (muscle enlargement eg macroglossia, carpal tunnel syndrome), Skin (waxy thickening, easy bruising).",
      memorizes: "The definition and the manifestations list",
      whenToUse: "Any question pairing an unexplained organ disease with amyloid stains, or asking which organ manifests how",
      clinical: "The giant tongue and the stiff heart are the classic pair; the nephrotic kidney and the waxy bruise complete the picture.",
    },
    {
      code: "CONGO GLOWS GREEN",
      meaning: "The identification cascade: Congo red stain makes amyloid red/orange on NONPOLARIZED light and APPLE-GREEN birefringent on POLARIZED light; H&E shows only amorphous pink. The birefringence under polarization is the confirmation the exam wants.",
      memorizes: "The staining block",
      whenToUse: "Any 'how is amyloid diagnosed?' or 'what does the polarized light show?' question",
      clinical: "Biopsy any involved tissue — fat pad, marrow, kidney — and rotate the polarizer: pink-to-green is the signature of the β-pleated sheet.",
    },
    {
      code: "MARROW MAKES AL, INFLAMMATION MAKES AA",
      meaning: "The two acquired systemic amyloids by their sources: AL (from Ig Light chains) — plasma cell dyscrasias (eg, multiple myeloma); AA (serum Amyloid A) — chronic inflammatory conditions (eg, rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection). The comorbidity in the stem names the fibril.",
      memorizes: "The systemic source split",
      whenToUse: "Any systemic amyloidosis question asking which protein is depositing",
      clinical: "The M spike points to AL; the deformed rheumatoid joints or the FMF fevers point to AA — treat the source, slow the deposition.",
    },
    {
      code: "LOCAL PROTEIN, LOCAL DISEASE",
      meaning: "The localized quartet, each protein staying in its organ: β-amyloid protein (cleaved from amyloid precursor protein) — Alzheimer disease; ANP — isolated atrial amyloidosis (common, aging, ↑ risk for atrial fibrillation); islet amyloid polypeptide (amylin) — deposited in pancreatic islets of type 2 diabetes mellitus; calcitonin — secreted from medullary thyroid cancer cells.",
      memorizes: "The localized rows of the COMMON TYPES table",
      whenToUse: "Any single-organ question with amyloid in the differential or asking for the deposited protein",
      clinical: "The brain plaque, the aging atrium, the diabetic islet, and the tumor's calcitonin — four diseases that are amyloid by structure and organ-confined by behavior.",
    },
  ],
  rapidReview: {
    s30: [
      "Amyloidosis: extracellular deposition of protein in abnormal fibrillar form (β-pleated sheet configuration) → cell injury and apoptosis",
      "Manifestations by organ: Renal—nephrotic syndrome; Cardiac—restrictive cardiomyopathy; GI—hepatosplenomegaly; Neurologic—dementia, peripheral neuropathy; Musculoskeletal—muscle enlargement (eg, macroglossia), carpal tunnel syndrome; Skin—waxy thickening, easy bruising",
      "Staining: Congo red — red/orange on nonpolarized light, apple-green birefringence on polarized light; H&E — amorphous pink",
      "Systemic types: Primary (AL, from Ig light chains — plasma cell dyscrasias eg multiple myeloma); Secondary (AA, serum amyloid A — chronic inflammation eg rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection); Transthyretin (wild-type — slowly progressive, aging, mainly the heart; mutated — familial amyloid polyneuropathy and/or cardiomyopathy); Dialysis-related (β2-microglobulin — ESRD on long-term dialysis)",
      "Localized types: Alzheimer disease (β-amyloid protein, cleaved from amyloid precursor protein); Isolated atrial amyloidosis (ANP — common, aging, ↑ risk for atrial fibrillation); Type 2 diabetes mellitus (islet amyloid polypeptide — amylin in pancreatic islets); Medullary thyroid cancer (calcitonin — secreted from tumor cells)",
    ],
    m3: [
      "The three-station rule: the stain confirms (Congo red — red/orange nonpolarized, apple-green birefringence polarized, amorphous pink H&E), the organs map (nephrotic, restrictive, hepatosplenomegaly, dementia/neuropathy, macroglossia/carpal tunnel, waxy bruising), the source names (AL marrow, AA inflammation, TTR aging, β2-microglobulin dialysis; localized β-amyloid/ANP/amylin/calcitonin)",
      "MARROW MAKES AL, INFLAMMATION MAKES AA — the M spike vs the chronically inflamed joint, bowel, fever syndrome, or protracted infection",
      "The TTR pair: wild-type (sporadic, slowly progressive, aging, mainly the heart) vs mutated (hereditary — familial amyloid polyneuropathy and/or cardiomyopathy)",
      "ONE SHEET, SIX ORGANS — renal nephrotic, cardiac restrictive, GI hepatosplenomegaly, neurologic dementia + peripheral neuropathy, musculoskeletal macroglossia + carpal tunnel, skin waxy thickening + easy bruising",
      "LOCAL PROTEIN, LOCAL DISEASE — β-amyloid (APP-cleaved, Alzheimer), ANP (aging atrium, ↑ AF risk), amylin (T2DM islets), calcitonin (medullary thyroid cancer, secreted from tumor cells)",
    ],
    m10: [
      "Definition: extracellular deposition of protein in abnormal fibrillar form (β-pleated sheet configuration) → cell injury and apoptosis — manifestations vary depending on involved organ",
      "Congo red: red/orange on nonpolarized light, apple-green birefringence on polarized light; H&E: amorphous pink — the birefringence is the confirmatory finding",
      "The nine-row COMMON TYPES table: Systemic (Primary AL/Ig light chains — plasma cell dyscrasias; Secondary AA/serum amyloid A — chronic inflammatory conditions; Transthyretin — wild-type aging heart, mutated familial polyneuropathy/cardiomyopathy; Dialysis-related β2-microglobulin — ESRD on long-term dialysis) + Localized (Alzheimer β-amyloid from APP; Isolated atrial ANP with ↑ AF risk; T2DM islet amyloid polypeptide/amylin; Medullary thyroid cancer calcitonin)",
      "The systemic discriminators: the M spike (AL), the chronic inflammation (AA), the aging heart without the M spike (wild-type TTR), and the dialysis years (β2-microglobulin)",
      "The two micrographs (copyrighted, described in text): A — Congo red under nonpolarized light (salmon red/orange deposits); B — the same field polarized (apple-green birefringent glow on a dark background)",
    ],
  },
  recall: [
      {
        q: "The definition block verbatim — the mechanism and its endpoint.",
        a: "Extracellular deposition of protein in abnormal fibrillar form (β-pleated sheet configuration) → cell injury and apoptosis. Manifestations vary depending on involved organ.",
      },
      {
        q: "Carry the manifestations list verbatim — all six organs.",
        a: "Renal—nephrotic syndrome. Cardiac—restrictive cardiomyopathy. GI—hepatosplenomegaly. Neurologic—dementia, peripheral neuropathy. Musculoskeletal—muscle enlargement (eg, macroglossia), carpal tunnel syndrome. Skin—waxy thickening, easy bruising.",
      },
      {
        q: "The staining block verbatim — both stains, both lights.",
        a: "Amyloid deposits are visualized by Congo red stain (red/orange on nonpolarized light, apple-green birefringence on polarized light), and H&E stain (amorphous pink).",
      },
      {
        q: "The COMMON TYPES table verbatim — the four systemic rows.",
        a: "Primary amyloidosis — AL (from Ig Light chains) — seen in plasma cell dyscrasias (eg, multiple myeloma). Secondary amyloidosis — AA (serum Amyloid A) — seen in chronic inflammatory conditions (eg, rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection). Transthyretin amyloidosis — Transthyretin — sporadic (wild-type TTR) slowly progressive, associated with aging, mainly affects the heart; hereditary (mutated TTR) familial amyloid polyneuropathy and/or cardiomyopathy. Dialysis-related amyloidosis — β2-microglobulin — seen in patients with ESRD on long-term dialysis.",
      },
      {
        q: "The COMMON TYPES table verbatim — the four localized rows.",
        a: "Alzheimer disease — β-amyloid protein — cleaved from amyloid precursor protein. Isolated atrial amyloidosis — ANP — common, associated with aging; ↑ risk for atrial fibrillation. Type 2 diabetes mellitus — Islet amyloid polypeptide — caused by deposition of amylin in pancreatic islets. Medullary thyroid cancer — Calcitonin — secreted from tumor cells.",
      },
  ],
  related: [
    {
      title: "Calcification & Radiation Injury",
      topicId: "calcification-radiation-injury",
      note: "The sister deposition page of the cellular-injury banner: calcium raining into dead tissue (dystrophic) or an overloaded serum's landing zones (metastatic) — amyloidosis adds the protein deposition disease, identified not by chemistry but by the Congo red glow.",
    },
    {
      title: "Apoptosis: Intrinsic, Extrinsic & Misfolded Proteins",
      topicId: "apoptosis-pathways",
      note: "Amyloid's mechanism ends in apoptosis — the deposited β-pleated sheets injure cells and push them through the programmed-death doors that page maps; the misfolded-protein trigger is shared biology.",
    },
    {
      title: "Necrosis: The Five Morphologic Patterns",
      topicId: "necrosis-types",
      note: "The contrast stain-lesson of the banner: necrosis reads as coagulative, liquefactive, caseous, fat, or fibrinoid on H&E, while amyloid shows only amorphous pink on H&E and needs Congo red's apple-green birefringence to be named.",
    },
    {
      title: "Diabetes Mellitus",
      topicId: "diabetes-mellitus",
      note: "The islet story of type 2 diabetes has an amyloid chapter — islet amyloid polypeptide (amylin) deposited in pancreatic islets — one of the localized quartet, and a structural reason the beta cells fail over years.",
    },
  ],
  crossLinks: [
    {
      subject: "Nephrology (the amyloid kidney)",
      connection:
        "The renal manifestation is nephrotic syndrome — the deposition lands in the glomeruli and produces heavy proteinuria, hypoalbuminemia, and hyperlipidemia; a plasma-cell-dyscrasia workup (AL) or a chronic-inflammation workup (AA) follows the biopsy's apple-green glow.",
    },
    {
      subject: "Cardiology (the stiff heart)",
      connection:
        "Restrictive cardiomyopathy is the cardiac manifestation — thickened walls, restrictive filling, normal ejection fraction — shared by AL and wild-type TTR; the M spike is what separates the marrow's heart disease from the aging heart's.",
    },
    {
      subject: "Endocrinology (the islet and the thyroid)",
      connection:
        "Two of the localized quartet are endocrine: type 2 diabetes mellitus deposits islet amyloid polypeptide (amylin) in pancreatic islets, and medullary thyroid cancer deposits calcitonin secreted from its own tumor cells — the protein made by the organ is the protein that kills it.",
    },
    {
      subject: "Neurology (the plaque and the nerve)",
      connection:
        "The neurologic manifestations run the localized-systemic span: Alzheimer disease's β-amyloid (cleaved from amyloid precursor protein) is the localized brain disease, while systemic amyloids produce dementia and peripheral neuropathy — the same sheet, different geography.",
    },
  ],
};
