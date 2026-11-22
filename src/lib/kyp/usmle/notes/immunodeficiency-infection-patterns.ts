import type { KypUsMLENote } from "../types";

// Immunology — Immune Responses (E-batch 38).
// Source: First Aid 2026, Part 1 pdf 138 / book 116
// (Infections in immunodeficiency)

export const immunodeficiencyInfectionPatterns: KypUsMLENote = {
  id: "immunodeficiency-infection-patterns",
  title: "Infections in Immunodeficiency: The Bug-Pattern Matrix",
  subtitle:
    "The organism directory that names the failed layer: a three-by-four matrix of pathogen class against deficient component. ↓T CELLS: sepsis (bacteria); CMV, EBV, JC virus, VZV, and chronic respiratory/GI viruses (viruses); and local Candida, PCP, and Cryptococcus (fungi) — the intracellular arm. ↓B CELLS: the ENCAPSULATED organisms (Pseudomonas aeruginosa, Streptococcus pneumoniae, Haemophilus influenzae type b, Neisseria meningitidis, Escherichia coli, Salmonella, Klebsiella pneumoniae, group B Streptococcus) — bacteria; enteroviral encephalitis and poliovirus, with live vaccine contraindicated — viruses; and GI giardiasis (no IgA) — fungi/parasites. ↓GRANULOCYTES: the Staphylococcus, Burkholderia cepacia, Pseudomonas aeruginosa, Nocardia, Serratia set — bacteria; and systemic Candida, Aspergillus, and Mucor — fungi. ↓COMPLEMENT: encapsulated species with early complement deficiencies and Neisseria with late (C5-C9) deficiencies — bacteria; viruses and fungi/parasites are not applicable. The printed rule that closes the table: B-cell deficiencies tend to produce recurrent bacterial infections, whereas T-cell deficiencies produce more fungal and viral infections.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immune Responses",
  pilotCategory: "Immune Responses — infection patterns by deficient component (T cells: sepsis + CMV/EBV/JC/VZV + local Candida/PCP/Cryptococcus; B cells: encapsulated bacteria + enterovirus/poliovirus + giardiasis; granulocytes: catalase-positive granule set + systemic fungi; complement: encapsulated early, Neisseria late)",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 116 (Infections in immunodeficiency)",
  tags: [
    "infections in immunodeficiency",
    "infection patterns",
    "T-cell deficiency",
    "B-cell deficiency",
    "granulocyte deficiency",
    "complement deficiency",
    "encapsulated organisms",
    "Pseudomonas aeruginosa",
    "Streptococcus pneumoniae",
    "Haemophilus influenzae type b",
    "Neisseria meningitidis",
    "Escherichia coli",
    "Salmonella",
    "Klebsiella pneumoniae",
    "group B Streptococcus",
    "Staphylococcus",
    "Burkholderia cepacia",
    "Nocardia",
    "Serratia",
    "sepsis",
    "CMV",
    "EBV",
    "JC virus",
    "VZV",
    "enteroviral encephalitis",
    "poliovirus",
    "live vaccine contraindicated",
    "Candida",
    "PCP",
    "Pneumocystis",
    "Cryptococcus",
    "giardiasis",
    "Aspergillus",
    "Mucor",
    "early complement deficiency",
    "late complement deficiency",
    "C5-C9",
    "recurrent bacterial infections",
    "fungal infections",
    "viral infections",
  ],
  core: {
    what: "The matrix crosses pathogen class with deficient component. BACTERIA: ↓T cells — sepsis; ↓B cells — encapsulated organisms (Pseudomonas aeruginosa, Streptococcus pneumoniae, Haemophilus influenzae type b, Neisseria meningitidis, Escherichia coli, Salmonella, Klebsiella pneumoniae, group B Streptococcus); ↓granulocytes — Staphylococcus, Burkholderia cepacia, Pseudomonas aeruginosa, Nocardia, Serratia; ↓complement — encapsulated species with early complement deficiencies, and Neisseria with late (C5-C9) deficiencies. VIRUSES: ↓T cells — CMV, EBV, JC virus, VZV, and chronic infection with respiratory/GI viruses; ↓B cells — enteroviral encephalitis and poliovirus (live vaccine contraindicated); granulocytes and complement — N/A. FUNGI/PARASITES: ↓T cells — Candida (local), PCP, Cryptococcus; ↓B cells — GI giardiasis (no IgA); ↓granulocytes — Candida (systemic), Aspergillus, Mucor; complement — N/A. The printed note: B-cell deficiencies tend to produce recurrent bacterial infections, whereas T-cell deficiencies produce more fungal and viral infections.",
    why: "This matrix is the diagnostic engine for every deficiency vignette in E36 and E37 — the organism list IS the layer test, asked in both directions: 'a child has PCP and CMV — which layer?' (T cells) and 'what infections follow B-cell failure?' (encapsulated bacteria, enteroviruses, giardia). The logic behind each column is the chapter's mechanism review: T cells run the intracellular arm (CTLs and IFN-γ-armed macrophages), so their failure surrenders to viruses, intracellular fungi (Candida local, PCP, Cryptococcus), and enough bacterial dyscontrol to permit sepsis; B cells make the opsonizing IgG that tames capsules, so their failure is the ENCAPSULATED panel, plus the IgA loss that invites giardia and the antibody gap that lets enteroviruses reach the brain (polio vaccine must be killed — live is contraindicated); granulocytes phagocytose, so their failure favors the catalase-positive granule-negative set of CGD logic (Staphylococcus, Burkholderia, Pseudomonas, Nocardia, Serratia) and the systemic molds (Candida systemic, Aspergillus, Mucor — the fungi neutrophils normally hold); complement splits by its own anatomy — early components opsonize and clear immune complexes (encapsulated species), and the terminal C5-C9 pore is Neisseria's specific executioner (E29's deficiency map). The granulocyte and complement columns' N/A for viruses is itself teaching: neither layer touches viruses.",
    keyIdea: "Read the matrix by column logic, not by memorization. ↓T CELLS = the intracellular arm is down: viral (CMV, EBV, JC, VZV, chronic respiratory/GI), fungal (LOCAL Candida, PCP, Cryptococcus), bacterial sepsis. ↓B CELLS = no opsonizing antibody: ENCAPSULATED bacteria (Pseudomonas, S pneumoniae, H influenzae b, N meningitidis, E coli, Salmonella, Klebsiella, group B Strep), enteroviral encephalitis + poliovirus (live vaccine contraindicated — use Salk), giardiasis (no IgA). ↓GRANULOCYTES = no phagocytes: the catalase-positive set (Staph, Burkholderia, Pseudomonas, Nocardia, Serratia) and SYSTEMIC mycoses (Candida systemic, Aspergillus, Mucor). ↓COMPLEMENT = early components → ENCAPSULATED species (opsonization/immune-complex clearance), terminal C5-C9 → NEISSERIA (the MAC pore). Viruses: T cells and B cells only — granulocytes and complement are N/A. The printed closer: B-cell deficiency → recurrent bacterial infections; T-cell deficiency → fungal and viral infections.",
  },
  mechanisms: [
    {
      id: "layer-logic-map",
      title: "Why each layer's failure opens its specific door",
      context: "The mechanism under each matrix column",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A deficient component leaves its assigned pathogens unopposed",
            sublabel: "Input — each immune layer owns a pathogen niche; the niche names the deficiency.",
            variant: "input",
          },
          {
            id: "s1",
            label: "T CELLS (the intracellular arm): CTLs kill virus-infected cells and IFN-γ arms macrophages — loss surrenders to CMV/EBV/JC/VZV and chronic respiratory/GI viruses, LOCAL Candida + PCP + Cryptococcus, and bacterial sepsis",
            sublabel: "Process — cell-mediated immunity is the antiviral and antifungal arm, and the printed bacterial entry is sepsis.",
            variant: "process",
          },
          {
            id: "s2",
            label: "B CELLS (the opsonizing arm): IgG tames capsules, IgA guards the gut — loss surrenders to the ENCAPSULATED panel, enteroviral encephalitis/poliovirus (live vaccine contraindicated), and GI giardiasis",
            sublabel: "Process — antibodies opsonize encapsulated bacteria; the poliovirus entry is the live-vaccine warning; giardiasis is the IgA hole.",
            variant: "process",
          },
          {
            id: "s3",
            label: "GRANULOCYTES (the eating arm) and COMPLEMENT (the lytic/opsonic arm): no neutrophils → the catalase-positive set (Staph, Burkholderia, Pseudomonas, Nocardia, Serratia) and SYSTEMIC Candida/Aspergillus/Mucor; no complement → encapsulated species (early) and Neisseria (terminal C5-C9)",
            sublabel: "Process — phagocytes hold the granule-negative catalase-positive bacteria and the systemic molds; early complement opsonizes, terminal complement lyses Neisseria.",
            variant: "process",
          },
          {
            id: "o1",
            label: "The diagnostic engine: organism list → failed layer → E36/E37 disease → management; both directions are tested",
            sublabel: "Output — with the printed rule as the summary: B-cell deficiency → recurrent bacterial infections; T-cell deficiency → more fungal and viral infections.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "niche assigned" },
          { from: "s1", to: "s2", label: "cellular → humoral" },
          { from: "s2", to: "s3", label: "innate effectors" },
          { from: "s3", to: "o1", label: "matrix read" },
        ],
        caption:
          "Every column of the matrix is a mechanism summary of the chapter. The T-cell column is cellular immunity: viruses (CMV, EBV, JC virus, VZV, and the chronic respiratory/GI viruses) require CTL killing of infected cells, and the intracellular fungi (local Candida, PCP, Cryptococcus) require macrophage activation — both T-cell-dependent, which is why T-cell deficiency reads as 'fungal and viral infections' in the printed note, with sepsis as the bacterial entry when cellular control of infection fails broadly. The B-cell column is opsonic immunity: encapsulated bacteria (the Pseudomonas-S pneumoniae-H influenzae b-N meningitidis-E coli-Salmonella-Klebsiella-group B Strep list) need IgG for opsonophagocytosis; enteroviruses and poliovirus are cleared by antibody (their CNS invasion is the antibody-gap disease — and the live polio vaccine must be avoided in these patients, killed Salk instead); giardiasis is the IgA loss of the mucosal compartment. The granulocyte column is phagocytic immunity: the Staphylococcus-Burkholderia-Pseudomonas-Nocardia-Serratia set is the catalase-positive family whose clearance depends on neutrophils (E32's CGD logic), and systemic Candida, Aspergillus, and Mucor are the angioinvasive molds neutrophils hold in check (why neutropenic patients prophylax against them). The complement column splits along the cascade: EARLY components (C1-C4) opsonize and clear immune complexes — their loss opens the door to encapsulated species; the TERMINAL C5-C9 pore is what lyses Neisseria — its loss is recurrent meningococcemia. And the N/A cells teach too: granulocytes and complement never touch viruses.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "bug-pattern-matrix",
      title: "The three-by-four matrix — pathogen class × deficient component",
      caption:
        "An original KYP matrix: the four deficiency columns (T cells, B cells, granulocytes, complement) against the three pathogen rows (bacteria, viruses, fungi/parasites) with every printed organism list, the N/A cells marked, the printed B-cell/T-cell rule in the bottom strip, and the one-line column logic beneath each header.",
      notice:
        "The printed table is pure vector (pdf 138 carries zero rasters); this visual is an original KYP teaching matrix. FA's printed mnemonic phrases ('Please SHINE my SKiS', the granule-set sentence) are NOT reproduced in the visual — the note's verbatim table carries them in manifest-verified form.",
    },
    {
      kind: "table",
      title: "Infections in immunodeficiency — verbatim",
      intro: "The source's full matrix, verbatim by cell.",
      columns: ["Pathogen", "↓ T cells", "↓ B cells", "↓ Granulocytes", "↓ Complement"],
      rows: [
        [
          "Bacteria",
          "Sepsis",
          "Encapsulated (Please SHINE my SKiS): Pseudomonas aeruginosa, Streptococcus pneumoniae, Haemophilus Influenzae type b, Neisseria meningitidis, Escherichia coli, Salmonella, Klebsiella pneumoniae, group B Streptococcus",
          "Some Bacteria Produce No Serious granules: Staphylococcus, Burkholderia cepacia, Pseudomonas aeruginosa, Nocardia, Serratia",
          "Encapsulated species with early complement deficiencies; Neisseria with late complement (C5-C9) deficiencies",
        ],
        [
          "Viruses",
          "CMV, EBV, JC virus, VZV, chronic infection with respiratory/GI viruses",
          "Enteroviral encephalitis, poliovirus (live vaccine contraindicated)",
          "N/A",
          "N/A",
        ],
        [
          "Fungi/parasites",
          "Candida (local), PCP, Cryptococcus",
          "GI giardiasis (no IgA)",
          "Candida (systemic), Aspergillus, Mucor",
          "N/A",
        ],
      ],
      caption:
        "Read by row for the exam direction 'given the deficiency, predict the infections' and by column for 'given the infections, name the deficiency.' The two organism mnemonics in the bacteria row are the source's printed phrases (quoted verbatim here for source fidelity); the printed note beneath the table is the summary rule: B-cell deficiencies tend to produce recurrent bacterial infections, whereas T-cell deficiencies produce more fungal and viral infections.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The matrix in practice — prophylaxis and vaccine logic (KYP bridge)",
      body: "The matrix drives management. T-cell deficiency: Pneumocystis prophylaxis (TMP-SMX) for SCID/HIV-level CD4 loss, with vigilance for CMV, Cryptococcus, and local Candida. B-cell deficiency: immunoglobulin replacement covers the encapsulated panel; killed (Salk) polio only — the live vaccine is contraindicated; giardiasis is treated as it arises. Granulocyte deficiency/neutropenia: antifungal prophylaxis against the systemic molds (Aspergillus, Mucor, systemic Candida) plus antibacterial coverage for the catalase-positive set — and GM-CSF/G-CSF when the counts must rise. Complement deficiency: meningococcal vaccination (the terminal-deficiency imperative of E29-E30) plus encapsulated-organism vigilance in early-component loss. In every column, the vaccine logic of E34 returns: live vaccines are contraindicated wherever cellular immunity cannot contain them (the poliovirus cell is the printed example).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 9-month-old with untreated X-linked agammaglobulinemia is admitted with pneumococcal bacteremia; his infection history includes two episodes of giardiasis and, last year, an aseptic meningitis that grew echovirus.",
        discriminator: "Encapsulated bacteria + giardiasis + enterovirus",
        concept: "B-cell deficiency — the antibody-gap column",
        answer:
          "The B-cell column of the matrix: no opsonizing IgG → ENCAPSULATED bacteria (S pneumoniae among the printed list); no IgA → GI giardiasis; no neutralizing antibody → enteroviral infections reaching the CNS (echovirus, and poliovirus — the live vaccine is contraindicated). The triad of encapsulated sepsis + giardia + enterovirus in one child names humoral deficiency before any flow cytometry is ordered.",
      },
      {
        stem: "A bone-marrow transplant patient on day 20 of profound neutropenia develops a fever; a serum galactomannan assay returns positive and a chest CT shows a halo sign.",
        discriminator: "Neutropenia + systemic mold",
        concept: "Granulocyte deficiency — the systemic-mold cell",
        answer:
          "The granulocyte column's fungal cell: Candida (systemic), Aspergillus, and Mucor are the angioinvasive molds that neutrophils hold in check — hence their dominance in prolonged neutropenia, the galactomannan positivity (Aspergillus), and the halo sign (angioinvasive pulmonary aspergillosis). Management: empiric mold-active antifungal therapy. The bacterial cell of the same column (Staphylococcus, Burkholderia, Pseudomonas, Nocardia, Serratia) explains the gram-negative and catalase-positive coverage in the same patients.",
      },
      {
        stem: "A 19-year-old with complement-mediated recurrent meningococcemia asks why he does not also suffer from frequent pneumonias; his brother with a different complement defect has both.",
        discriminator: "Neisseria-only versus encapsulated-plus-Neisseria",
        concept: "Terminal (C5-C9) versus early complement deficiency",
        answer:
          "The complement column splits along the cascade: TERMINAL (C5-C9) deficiency removes only the lytic pore — Neisseria's clearance is MAC-dependent, so infections cluster on meningococcemia with opsonization intact (few pneumonias). EARLY component deficiency removes opsonization and immune-complex clearance as well — hence ENCAPSULATED species disease in addition to Neisseria risk (and the immune-complex/SLE company of E30). Which complement component is missing predicts which column of the matrix manifests.",
      },
    ],
    traps: [
      {
        a: "Granulocyte deficiency predisposes to viral infections",
        b: "Granulocytes (and complement) are N/A for viruses — only T cells and B cells own viral defense",
        whyConfused: "Every deficiency feels like it should invite everything.",
        keyDifference:
          "The matrix's N/A cells are informative: viral defense belongs to T cells (CTLs kill infected cells) and B cells (neutralizing antibody — the enterovirus/poliovirus cell). Granulocytes and complement operate on bacteria and fungi only. A viral infection in a question stem points at the lymphocyte columns, never the effector-cell columns.",
        clue: "Any 'which deficiency → viral infection' question.",
      },
      {
        a: "Giardiasis indicates T-cell deficiency",
        b: "GI giardiasis (no IgA) is the B-CELL column's parasite entry",
        whyConfused: "Chronic giardiasis sounds like broad immune failure.",
        keyDifference:
          "IgA is the mucosal compartment's isotype (E28) — B-cell lineage. Its absence (selective IgA deficiency of E36, or any humoral failure) leaves Giardia unopposed at the gut surface. The T-cell fungal entry is local Candida/PCP/Cryptococcus, not giardia.",
        clue: "Any giardiasis question in an immunodeficiency stem.",
      },
      {
        a: "All complement deficiency causes Neisseria infections",
        b: "Neisseria belongs to LATE (C5-C9) deficiency; EARLY deficiency favors ENCAPSULATED species",
        whyConfused: "Neisseria is the headline complement infection (E29-E30).",
        keyDifference:
          "The matrix separates the two: early components (C1-C4) opsonize and clear immune complexes — their loss opens the door to ENCAPSULATED species; the terminal C5-C9 pore is Neisseria's specific executioner — its loss is the recurrent-meningococcemia pattern. A stem naming pneumonias plus meningococcemia suggests early loss; Neisseria alone suggests terminal loss.",
        clue: "Any complement-deficiency organism question distinguishing early from late.",
      },
    ],
    pivots: [
      {
        lookAlike: "T-cell versus B-cell deficiency (the master columns)",
        differentiator: "Pathogen class of the infections",
        correctPath:
          "T-cell deficiency: FUNGAL and VIRAL predominance (CMV/EBV/JC/VZV, local Candida, PCP, Cryptococcus) with sepsis as the bacterial entry. B-cell deficiency: recurrent BACTERIAL infections (the encapsulated panel) with enteroviral encephalitis/poliovirus and giardiasis as the non-bacterial entries. The printed rule is the summary; the matrix is the detail.",
      },
      {
        lookAlike: "Granulocyte versus complement deficiency (the innate-effector columns)",
        differentiator: "Bacterial signature and mold risk",
        correctPath:
          "Granulocyte deficiency: the catalase-positive granule-negative set (Staphylococcus, Burkholderia, Pseudomonas, Nocardia, Serratia) PLUS the systemic molds (systemic Candida, Aspergillus, Mucor) — phagocytes eat both. Complement deficiency: encapsulated species (early) and Neisseria (terminal) — the opsonic and lytic cascade; no viral or parasitic entries. Mold disease points at granulocytes; meningococcemia points at complement.",
      },
    ],
    miniCase: {
      vignette:
        "A 14-month-old boy is admitted with pneumococcal bacteremia. His history is notable for two prior episodes of pneumonia (one growing Haemophilus influenzae type b despite vaccination), six months of intermittent foul-smelling watery stools that improved with metronidazole, and a hospitalization at 11 months for viral (echovirus) meningoencephalitis. He received the oral poliovirus vaccine series at a clinic abroad before adoption. Examination shows absent tonsils and no palpable lymph nodes. Immunization-record review is under way; the family asks why he keeps getting sick.",
      question:
        "Which immune defect best explains this child's infection pattern?",
      options: [
        {
          label: "A",
          text: "B-cell deficiency with absent immunoglobulin production (humoral failure)",
          correct: true,
          why: "Correct — the matrix's B-cell column assembled: ENCAPSULATED bacteria (S pneumoniae, H influenzae type b — despite vaccination, since he cannot make antibody to the vaccine antigens), GI GIARDIASIS (the no-IgA entry), and ENTEROVIRAL meningoencephalitis (the antibody-gap infection; echovirus is classic) — with absent tonsils and nodes completing Bruton's picture (E36). The live oral poliovirus vaccine he received abroad is the contraindicated exposure the printed cell warns about: humoral deficiency cannot contain a live vaccine strain.",
        },
        {
          label: "B",
          text: "T-cell deficiency impairing cell-mediated immunity",
          why: "The T-cell column is fungal and viral in a different key: CMV/EBV/JC/VZV, LOCAL Candida, PCP, Cryptococcus — with sepsis as the bacterial entry. It does not produce the encapsulated-bacteria + giardia + enterovirus triad, and a T-cell defect would not explain absent lymphoid tissue (B cells populate the follicles).",
        },
        {
          label: "C",
          text: "Granulocyte dysfunction with impaired phagocytosis",
          why: "The granulocyte column predicts the catalase-positive set (Staphylococcus, Burkholderia, Pseudomonas, Nocardia, Serratia) and systemic molds — not encapsulated vaccine-type bacteria, giardiasis, or enterovirus. Nothing in the vignette suggests abscesses, granulomas, or mold disease.",
        },
        {
          label: "D",
          text: "Terminal complement (C5-C9) deficiency",
          why: "Terminal complement loss is Neisseria-specific (recurrent meningococcemia) with opsonization intact — the encapsulated pneumococcal and H influenzae disease, giardiasis, and echovirus all fall outside its column, and lymphoid tissue would be present.",
        },
        {
          label: "E",
          text: "Severe combined immunodeficiency affecting both T and B cells",
          why: "SCID presents earlier and broader: failure to thrive, chronic diarrhea, THRUSH, and recurrent viral, bacterial, fungal, and protozoal infections from the first months (E37) — not an encapsulated/giardia/enterovirus triad that spares opportunists until the second year, with the physical exam of absent B-cell tissue. His adoption-history vaccination with live polio without catastrophic infection also argues against combined deficiency.",
        },
      ],
      reasoning:
        "The vignette is the B-cell column in clinical sequence: encapsulated bacteremia despite vaccination (no antibody response), giardiasis (no IgA), and echoviral meningoencephalitis (no neutralizing antibody) — completed by the absent tonsils and nodes of Bruton agammaglobulinemia. The matrix's logic: each entry belongs to the antibody gap — opsonization (encapsulated), mucosal IgA (giardia), viral neutralization (enterovirus, and the live-polio warning the printed cell carries). Distractors are the other columns: T-cell (the fungal/viral pattern), granulocyte (catalase-positive set and molds), terminal complement (Neisseria-only), and SCID (earlier, broader, with thrush and failure to thrive).",
    },
  },
  mnemonics: [
    {
      code: "\u201cEach layer owns a door: T cells guard the intracellular door, B cells the capsule door, granulocytes the mold-and-granule door, complement the Neisseria door.\u201d",
      meaning:
        "KYP's key for the matrix's column logic: T-cell deficiency opens the viral + local-fungal (+ sepsis) door; B-cell deficiency opens the encapsulated-bacteria + enterovirus + giardia door; granulocyte deficiency opens the catalase-positive-bacteria + systemic-mold door; complement deficiency opens the encapsulated (early) and Neisseria (late) door. The N/A cells teach the same rule from the other side — granulocytes and complement never face viruses.",
      memorizes: "The column-pathogen assignments and their logic",
      whenToUse: "Any infection-pattern or deficiency-identification question.",
      clinical: "Organism list in the stem → column → E36/E37 disease → management.",
    },
    {
      code: "\u201cAntibody gaps let bugs keep their coats on: no IgG, no stripping the capsule; no IgA, no stopping Giardia at the border.\u201d",
      meaning:
        "KYP's key for the B-cell column: opsonizing IgG strips the ENCAPSULATED organisms' advantage (the printed Pseudomonas-to-group-B-Strep list); mucosal IgA holds Giardia at the gut surface; neutralizing antibody keeps enteroviruses (and poliovirus — live vaccine contraindicated, use killed Salk) out of the CNS.",
      memorizes: "The B-cell column: encapsulated + enterovirus/poliovirus + giardiasis",
      whenToUse: "Any humoral-deficiency infection question.",
      clinical: "Immunoglobulin replacement covers the column; vaccine responses fail (protein antigens need antibody); giardiasis treated as it arises.",
    },
    {
      code: "\u201cThe complement column splits at the cascade's waist: above it, capsules get through; below it, Neisseria gets through.\u201d",
      meaning:
        "KYP's key for the complement column: EARLY components (C1-C4, above the C3 waist) opsonize and clear immune complexes — their loss admits ENCAPSULATED species; the TERMINAL components (C5-C9, below the waist) build the pore — their loss admits NEISSERIA alone (with opsonization intact). E29's cascade anatomy read as an infection map.",
      memorizes: "Early complement → encapsulated; terminal complement → Neisseria",
      whenToUse: "Any complement-deficiency organism question.",
      clinical: "Meningococcal vaccination for all complement deficiencies; encapsulated vigilance (and SLE company) for early loss.",
    },
  ],
  rapidReview: {
    s30: [
      "↓T cells: sepsis · CMV, EBV, JC virus, VZV, chronic respiratory/GI viruses · Candida (local), PCP, Cryptococcus",
      "↓B cells: ENCAPSULATED bacteria · enteroviral encephalitis, poliovirus (live vaccine contraindicated) · GI giardiasis (no IgA)",
      "↓Granulocytes: Staphylococcus, Burkholderia cepacia, Pseudomonas, Nocardia, Serratia · Candida (systemic), Aspergillus, Mucor",
      "↓Complement: encapsulated species with EARLY deficiencies · Neisseria with LATE (C5-C9) deficiencies",
      "Granulocytes + complement: viruses N/A",
    ],
    m3: [
      "Encapsulated list: Pseudomonas, S pneumoniae, H influenzae b, N meningitidis, E coli, Salmonella, Klebsiella, group B Strep",
      "B-cell deficiency → recurrent BACTERIAL infections (the printed rule)",
      "T-cell deficiency → more FUNGAL and VIRAL infections (the printed rule)",
      "Neutropenic molds: systemic Candida, Aspergillus, Mucor (galactomannan, halo sign)",
      "Enteroviral encephalitis + poliovirus = the antibody-gap viral entries",
    ],
    m10: [
      "Sepsis is the T-cell bacterial entry (the broad-loss exception)",
      "Giardiasis = the IgA hole (selective IgA deficiency, E36)",
      "Live polio vaccine contraindicated in B-cell deficiency (killed Salk instead)",
      "Early complement loss → encapsulated + immune-complex disease; terminal loss → Neisseria only",
      "Matrix → prophylaxis: TMP-SMX (PCP), immunoglobulin (encapsulated), mold-active antifungals (neutropenia), meningococcal vaccine (complement)",
    ],
  },
  recall: [
    {
      q: "Give the bacteria entries for all four deficiency columns.",
      a: "↓T cells: sepsis. ↓B cells: encapsulated organisms — Pseudomonas aeruginosa, Streptococcus pneumoniae, Haemophilus influenzae type b, Neisseria meningitidis, Escherichia coli, Salmonella, Klebsiella pneumoniae, group B Streptococcus. ↓Granulocytes: Staphylococcus, Burkholderia cepacia, Pseudomonas aeruginosa, Nocardia, Serratia. ↓Complement: encapsulated species with early complement deficiencies; Neisseria with late complement (C5-C9) deficiencies.",
    },
    {
      q: "What viral infections follow T-cell and B-cell deficiency, and what is the vaccine warning?",
      a: "↓T cells: CMV, EBV, JC virus, VZV, and chronic infection with respiratory/GI viruses. ↓B cells: enteroviral encephalitis and poliovirus — the live vaccine is contraindicated (use the killed Salk vaccine in B-cell deficiency). Granulocytes and complement are N/A for viruses.",
    },
    {
      q: "Give the fungi/parasites entries for all four columns.",
      a: "↓T cells: Candida (local), PCP, Cryptococcus. ↓B cells: GI giardiasis (no IgA). ↓Granulocytes: Candida (systemic), Aspergillus, Mucor. ↓Complement: N/A.",
    },
    {
      q: "State the printed summary rule of the table.",
      a: "B-cell deficiencies tend to produce recurrent bacterial infections, whereas T-cell deficiencies produce more fungal and viral infections.",
    },
    {
      q: "Why do Neisseria infections specifically mark late complement deficiency?",
      a: "The terminal complement components C5-C9 assemble the membrane attack complex — the pore that lyses Neisseria (whose clearance is MAC-dependent, per E29's cascade and E30's deficiency map). Terminal deficiency removes only the pore (opsonization stays intact), so the infection pattern narrows to Neisseria; early-component loss removes opsonization and immune-complex clearance too, admitting the encapsulated species.",
    },
  ],
  related: [
    {
      title: "T-Cell, Combined & Phagocyte Immunodeficiencies",
      topicId: "t-cell-phagocyte-immunodeficiencies",
      note: "The eleven-disease deficiency table this matrix diagnoses — the organism list names the zone.",
    },
    {
      title: "B-Cell Immunodeficiencies",
      topicId: "b-cell-immunodeficiencies",
      note: "The encapsulated/giardia/enterovirus column is the humoral zone's clinical output.",
    },
    {
      title: "The Complement System",
      topicId: "complement-pathways",
      note: "The cascade anatomy whose waist splits the complement column into encapsulated-above and Neisseria-below.",
    },
    {
      title: "Active vs Passive Immunity & Vaccination",
      topicId: "active-passive-immunity",
      note: "The live-polio contraindication cell is E34's live-vaccine rule applied to the antibody gap.",
    },
  ],
  crossLinks: [
    {
      subject: "Infectious Disease",
      connection: "The matrix is the prophylaxis map in practice — PCP prophylaxis for T-cell loss, immunoglobulin for humoral loss, mold-active antifungals for neutropenia, and meningococcal vaccination for complement deficiency.",
    },
    {
      subject: "Oncology (Transplant & Neutropenia)",
      connection: "The neutropenic patient's infections live in the granulocyte column — the catalase-positive bacteria and the angioinvasive molds (halo sign, galactomannan).",
    },
    {
      subject: "Pediatrics (Immunization)",
      connection: "The poliovirus cell's live-vaccine contraindication is the practical immunology of humoral deficiency — killed vaccines only, with immunoglobulin replacing what antibody would have done.",
    },
    {
      subject: "Microbiology (Organism Identification)",
      connection: "The encapsulated list and the catalase-positive set are the microbiology directory turned diagnostic — the capsule stain and the catalase test become deficiency tests.",
    },
  ],
};
