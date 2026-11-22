import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 27. Source: FULL pdf pages 274–275 / book 252–253
// (Pharmacology — Miscellaneous: the topic owns TWO WHOLE PAGES — the
// two-page "Drug names" stem table, "Drug names" on 274 + "Drug names
// (continued)" on 275; columns ENDING / CATEGORY / EXAMPLE; 64 rows in 7
// group-band clusters: Antimicrobial 13, Antineoplastic 7, CNS 12 on 252;
// Autonomic 5, Cardiovascular 7, Metabolic 6, Other 14 on 253). Census
// (pdfimages): ZERO raster images on both pages — pure vector/text. VLM
// AVAILABLE this session (glm-4.6v at 120dpi): TWO full-page passes
// (staging-ph27/vlm-census.txt) confirming the printed row order of BOTH
// pages, the seven full-width shaded group-band rows, the bold-blue ENDING
// column (NOT red — unlike the toxicology tables), and the ABSENCE of
// margin notes, mnemonics, -mab/monoclonal-antibody pointers, asterisk
// footnotes, and images on both pages (VLM-explicit). PRINTED-TEXT QUIRKS
// carried verbatim + documented: (1) the group-band labels extract OUT OF
// ORDER in the raw text layer (all three at the END of page 274's lines;
// Autonomic/Cardiovascular mid-page and Metabolic/Other at the END of page
// 275's lines) — they print as full-width shaded band rows inside the table
// (VLM + pdftotext -layout agree) and are carried in printed position in
// the note's table blocks; (2) the -dipine category prints "Dihydropyridine
// Ca2+ channel blocker" with a SUPERSCRIPT 2+ that the raw text layer
// extracts out of order (floating after "Sildenafil", before "-dipine") —
// joined as printed; (3) "5-HT1B/1D agonist" prints on ONE line (the batch
// brief's "5-HT agonist 1B/1D split-row" worry adjudicated NO split — raw
// text layer + layout + VLM agree; the VLM's "5-IIT" reading is a 120dpi
// serif misread, adjudicated to the text layer's "5-HT"); (4) the VLM's
// "-curium, -uronium" reading drops the "cu" — text layer + layout agree
// "-curium, -curonium" (adjudicated); the VLM's "CNS covers 14 rows" is a
// miscount — it covers 12 (13+7+12 = 32 rows per page, all three reads
// agree); (5) four rows print PAIRED endings with paired examples
// (-apine, -idone / -curium, -curonium / -ipramine, -triptyline / -zepam,
// -zolam); (6) "SEC TION II" is the header-space extraction artifact
// (known, carried as-is) and page 274 prints the subsection banner TWICE
// (running header + standalone teal sub-banner above the title); (7) NO
// -mab/-cept rows print anywhere on 252–253 (VLM-explicit) — the
// monoclonal-antibody infix system (-u-/-xi-/-zu-, -cept) is carried as a
// clearly-marked KYP BRIDGE to the parallel-produced biologic-agents note,
// as are the dofa-/gab- prefix families (KYP context, not printed here;
// the book's own pain-transmission line names the gabapentinoids). DRUG
// CARDS: FOLDED — the page is a table of ENDINGS, not drug monographs, so
// no DrugCards are authored (documented in the manifest); every printed
// row is instead carried in the two verbatim table blocks, the cluster
// list, recall, and the visual. The three-scan decode protocol, the seven
// family bands, the prefix/infix panel, the exam layer, and the memory
// layer are original KYP art; every ending, category, and example is
// preserved from the print.

export const drugNames: KypUsMLENote = {
  id: "drug-names",
  title: "Drug Names: Prefixes, Suffixes & Stem Families",
  subtitle:
    "Two printed pages, one skill: reading a drug's class straight out of its name. Sixty-four stem rows in seven family clusters — the antimicrobials (-cillin transpeptidase inhibitor, -conazole ergosterol synthesis inhibitor, -cycline protein synthesis inhibitor, -floxacin fluoroquinolone, -thromycin macrolide, and the seven -vir antivirals), the antineoplastics (-platin, -rubicin, -taxel, -tecan, -poside, -mustine, -case), the CNS families (-zepam/-zolam benzodiazepines, -barbital barbiturates, -caine local anesthetics, -triptan 5-HT1B/1D agonists, -ipramine/-triptyline TCAs), the autonomic mirror (-olol β-blocker vs -terol β2-agonist, -zosin α1-blocker, -chol cholinergic agonist, -stigmine AChE inhibitor), the cardiovascular set (-pril ACE, -sartan ARB, -dipine dihydropyridine, -afil PDE-5, -xaban factor Xa, -parin LMWH, -plase thrombolytic), the metabolic gli- family (-gliflozin, -glinide, -gliptin, -glitazone, -glutide, -statin), and the fourteen-row Other band (-prazole PPIs, -tidine H2 blockers, -tadine H1 blockers, -setron 5-HT3 blockers, -vaptan, -steride, -trozole…). Behind the table sits one decode protocol: scan the ENDING first, then the prefix, then the infix — that is where the -mab humanization codes of the biologics live.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Miscellaneous",
  pilotCategory: "Pharmacology nomenclature",
  difficulty: 1,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 252–253 (Pharmacology — Miscellaneous: Drug names; Drug names (continued); …)",
  tags: [
    "drug names",
    "nomenclature",
    "stem families",
    "suffixes",
    "prefixes",
    "infixes",
    "generic names",
    "-prazole",
    "proton pump inhibitors",
    "-sartan",
    "angiotensin-II receptor blockers",
    "-pril",
    "ACE inhibitors",
    "-olol",
    "beta-blockers",
    "-terol",
    "beta-2 agonists",
    "-afil",
    "PDE-5 inhibitors",
    "-statin",
    "HMG-CoA reductase inhibitors",
    "gli- family",
    "SGLT-2 inhibitors",
    "DPP-4 inhibitors",
    "GLP-1 analogs",
    "-caine",
    "local anesthetics",
    "-vir family",
    "antivirals",
    "-mab",
    "monoclonal antibodies",
    "-cept",
  ],
  core: {
    what:
      "One table across two printed pages, carried whole: 64 stem rows in seven labeled family clusters, columns ENDING / CATEGORY / EXAMPLE. PAGE 252 (pdf 274), “Drug names” — ANTIMICROBIAL (13 rows): -asvir → NS5A inhibitor (Ledipasvir) · -bendazole → Antiparasitic/antihelminthic (Mebendazole) · -buvir → NS5B inhibitor (Sofosbuvir) · -cillin → Transpeptidase inhibitor (Ampicillin) · -conazole → Ergosterol synthesis inhibitor (Ketoconazole) · -cycline → Protein synthesis inhibitor (Tetracycline) · -floxacin → Fluoroquinolone (Ciprofloxacin) · -mivir → Neuraminidase inhibitor (Oseltamivir) · -navir → Protease inhibitor (Ritonavir) · -ovir → Viral DNA polymerase inhibitor (Acyclovir) · -previr → NS3/4A inhibitor (Grazoprevir) · -tegravir → Integrase inhibitor (Dolutegravir) · -thromycin → Macrolide (Azithromycin). ANTINEOPLASTIC (7 rows): -case → Recombinant uricase (Rasburicase) · -mustine → Nitrosourea (Carmustine) · -platin → Platinum compound (Cisplatin) · -poside → Topoisomerase II inhibitor (Etoposide) · -rubicin → Anthracycline (Doxorubicin) · -taxel → Taxane (Paclitaxel) · -tecan → Topoisomerase I inhibitor (Irinotecan). CNS (12 rows): -flurane → Inhaled anesthetic (Sevoflurane) · -apine, -idone → Atypical antipsychotic (Quetiapine, risperidone) · -azine → Typical antipsychotic (Thioridazine) · -barbital → Barbiturate (Phenobarbital) · -benazine → VMAT inhibitor (Tetrabenazine) · -caine → Local anesthetic (Lidocaine) · -capone → COMT inhibitor (Entacapone) · -curium, -curonium → Nondepolarizing neuromuscular blocker (Atracurium, pancuronium) · -giline → MAO-B inhibitor (Selegiline) · -ipramine, -triptyline → TCA (Imipramine, amitriptyline) · -triptan → 5-HT1B/1D agonist (Sumatriptan) · -zepam, -zolam → Benzodiazepine (Diazepam, alprazolam). PAGE 253 (pdf 275), “Drug names (continued)” — AUTONOMIC (5 rows): -chol → Cholinergic agonist (Bethanechol) · -olol → β-blocker (Propranolol) · -stigmine → AChE inhibitor (Neostigmine) · -terol → β2-agonist (Albuterol) · -zosin → α1-blocker (Prazosin). CARDIOVASCULAR (7 rows): -afil → PDE-5 inhibitor (Sildenafil) · -dipine → Dihydropyridine Ca2+ channel blocker (Amlodipine) · -parin → Low-molecular-weight heparin (Enoxaparin) · -plase → Thrombolytic (Alteplase) · -pril → ACE inhibitor (Captopril) · -sartan → Angiotensin-II receptor blocker (Losartan) · -xaban → Direct factor Xa inhibitor (Apixaban). METABOLIC (6 rows): -gliflozin → SGLT-2 inhibitor (Dapagliflozin) · -glinide → Meglitinide (Repaglinide) · -gliptin → DPP-4 inhibitor (Sitagliptin) · -glitazone → PPAR-γ activator (Pioglitazone) · -glutide → GLP-1 analog (Liraglutide) · -statin → HMG-CoA reductase inhibitor (Atorvastatin). OTHER (14 rows): -caftor → CFTR modulator (Lumacaftor) · -dronate → Bisphosphonate (Alendronate) · -lukast → CysLT1 receptor blocker (Montelukast) · -lutamide → Androgen receptor inhibitor (Flutamide) · -pitant → NK1 blocker (Aprepitant) · -prazole → Proton pump inhibitor (Omeprazole) · -prost → Prostaglandin analog (Latanoprost) · -sentan → Endothelin receptor antagonist (Bosentan) · -setron → 5-HT3 blocker (Ondansetron) · -steride → 5α-reductase inhibitor (Finasteride) · -tadine → H1-antagonist (Loratadine) · -tidine → H2-antagonist (Cimetidine) · -trozole → Aromatase inhibitor (Anastrozole) · -vaptan → ADH antagonist (Tolvaptan).",
    why:
      "Name→class decoding is Step 1's highest-yield naming skill because the exam deliberately tests drugs you have never seen: the stem hands you an unfamiliar generic name and expects the class, the mechanism, the indication, or the adverse effect to fall out of the name itself. The -prazoles are proton pump inhibitors, the -sartans angiotensin-II receptor blockers, the -olols β-blockers, the -afils PDE-5 inhibitors, the -statins HMG-CoA reductase inhibitors, the -caines local anesthetics, the -prils ACE inhibitors — learn the 64 rows once and every future -sartan or -gliptin decodes itself. The gli- family shows why the skill has layers: five antidiabetic classes share one infix and are distinguished only by their endings (flozin/nide/tin/tazone/tide), exactly the distinction the exam likes to blur. And the naming system extends beyond this table: the -mab and -cept families bridge directly to the biologics page, where the INFIX carries the humanization code (-u- human, -xi- chimeric, -zu- humanized) — the deepest version of the same decode skill.",
    keyIdea:
      "Decode every unfamiliar name in three scans, in this order. SCAN 1 — THE ENDING FIRST: the suffix names the class (-pril ACE inhibitor, -sartan ARB, -olol β-blocker, -afil PDE-5 inhibitor, -prazole PPI, -statin HMG-CoA reductase inhibitor, -caine local anesthetic, -vaptan ADH antagonist); 64 printed rows reduce to 7 family clusters. SCAN 2 — THE PREFIX: when the ending does not decide, the front of the name does — the gli- infix family (five antidiabetic classes distinguished by ending: -gliflozin SGLT-2, -glinide meglitinide, -gliptin DPP-4, -glitazone PPAR-γ, -glutide GLP-1), the -vir family (seven antiviral endings: -asvir NS5A, -buvir NS5B, -previr NS3/4A, -tegravir integrase, -mivir neuraminidase, -navir protease, -ovir viral DNA polymerase), and the prefix families beyond this page (dofa- class III antiarrhythmics, gab- the gabapentinoids — KYP context, not printed on 252–253). SCAN 3 — THE INFIX: for the biologics, the infix IS the answer — in -mab names the humanization code sits in the middle (-xi- chimeric, -zu- humanized, -u- human) and -cept marks a receptor fused to immunoglobulin; no -mab rows print on these two pages (VLM-confirmed), so the codes are carried as the marked bridge to the biologic-agents note. Suffix first, prefix second, infix third — the name is a compressed monograph.",
  },
  mechanisms: [
    {
      id: "suffix-decode-map",
      title:
        "The suffix decode map: ending → class → example — the 64-row routing compressed to three scans",
      context:
        "The printed two-page Drug names table (books 252–253)",
      flow: {
        nodes: [
          {
            id: "name",
            label:
              "AN UNFAMILIAR GENERIC NAME IN THE VIGNETTE — the exam's favorite unknown",
            sublabel:
              "Input — Step 1 deliberately tests drugs you have never seen by name. The generic name is not arbitrary: it is assembled from a stem, infixes, and an ENDING, and the ending is a compressed monograph. “A 62-year-old man is started on telmisartan…” — the name itself carries the class, the mechanism, and half the adverse-effect list.",
            variant: "input",
          },
          {
            id: "scan1",
            label:
              "SCAN 1 — READ THE ENDING FIRST (the suffix names the class)",
            sublabel:
              "Process — the high-yield decodes the exam quotes: -prazole → proton pump inhibitor (omeprazole) · -sartan → angiotensin-II receptor blocker (losartan) · -pril → ACE inhibitor (captopril) · -olol → β-blocker (propranolol) · -afil → PDE-5 inhibitor (sildenafil) · -statin → HMG-CoA reductase inhibitor (atorvastatin) · -caine → local anesthetic (lidocaine) · -vaptan → ADH antagonist (tolvaptan) · -stigmine → AChE inhibitor (neostigmine) · -xaban → direct factor Xa inhibitor (apixaban). Sixty-four printed rows, seven family clusters.",
            variant: "process",
          },
          {
            id: "scan2",
            label:
              "SCAN 2 — RESOLVE THE COLLISIONS (endings that differ by one letter)",
            sublabel:
              "Process — the near-miss endings are the exam's distractor factory: -olol (β-blocker, propranolol) vs -terol (β2-agonist, albuterol) · -tadine (H1-antagonist, loratadine) vs -tidine (H2-antagonist, cimetidine) · -prazole (PPI) vs -conazole (ergosterol synthesis inhibitor) vs -trozole (aromatase inhibitor) · -setron (5-HT3 blocker, ondansetron) vs -triptan (5-HT1B/1D agonist, sumatriptan) · -statin (HMG-CoA reductase inhibitor) vs -stigmine (AChE inhibitor).",
            variant: "process",
          },
          {
            id: "class",
            label:
              "THE CLASS → THE MECHANISM, INDICATION, AND ADVERSE-EFFECT PROFILE",
            sublabel:
              "Target — the decoded class is a lookup key into everything else you know: -pril decodes to ACE inhibition (bradykinin cough, hyperkalemia, angioedema), -sartan to receptor blockade at AT1 (no cough), -olol to β-blockade (bradycardia, bronchospasm risk in asthma), -dipine to arteriolar dilation (dependent edema), -stigmine to sustained acetylcholine (myasthenia, ileus, urinary retention reversal).",
            variant: "target",
          },
          {
            id: "answer",
            label:
              "PREDICT THE ANSWER — mechanism, indication, adverse effect, or contraindication",
            sublabel:
              "Output — the suffix converts an unknown name into a known pharmacology: any future -gliptin is a DPP-4 inhibitor, any -vaptan an ADH antagonist, any -setron a 5-HT3 blocker. The name IS the question-writer's answer key.",
            variant: "output",
          },
        ],
        edges: [
          { from: "name", to: "scan1", label: "read the last syllable first" },
          { from: "scan1", to: "scan2", label: "if two classes share a sound" },
          { from: "scan2", to: "class", label: "the ending names the class" },
          { from: "class", to: "answer", label: "the class carries the pharmacology" },
        ],
      },
    },
    {
      id: "prefix-infix-map",
      title:
        "The prefix & infix map: the gli- five, the -vir seven, and the -mab/-cept humanization codes",
      context:
        "The printed Metabolic and Antimicrobial clusters (book 253, 252) + the biologics bridge",
      flow: {
        nodes: [
          {
            id: "ambiguous",
            label:
              "A NAME WHOSE ENDING ALONE DOESN'T DECIDE — read the infix",
            sublabel:
              "Input — five printed antidiabetics share the infix gli- and are distinguished ONLY by their endings: dapagliflozin (SGLT-2 inhibitor), repaglinide (meglitinide), sitagliptin (DPP-4 inhibitor), pioglitazone (PPAR-γ activator), liraglutide (GLP-1 analog). The infix names the family; the ending names the class.",
            variant: "input",
          },
          {
            id: "glifive",
            label:
              "THE GLI- FIVE (printed, Metabolic cluster) — infix = antidiabetic, ending = class",
            sublabel:
              "Process — -gliflozin → SGLT-2 inhibitor (flushes glucose into the urine) · -glinide → meglitinide (nudges early insulin secretion) · -gliptin → DPP-4 inhibitor (trims the enzyme that degrades GLP-1) · -glitazone → PPAR-γ activator (tunes insulin sensitivity) · -glutide → GLP-1 analog (the incretin peptide). Plus the family's non-gli neighbor: -statin → HMG-CoA reductase inhibitor (atorvastatin).",
            variant: "process",
          },
          {
            id: "virseven",
            label:
              "THE -VIR SEVEN (printed, Antimicrobial cluster) — the infix names the viral target",
            sublabel:
              "Process — -asvir → NS5A inhibitor (ledipasvir; A of asvir = A of NS5A) · -buvir → NS5B inhibitor (sofosbuvir; B→5B) · -previr → NS3/4A inhibitor (grazoprevir) · -tegravir → integrase inhibitor (dolutegravir; TEG = integrase) · -mivir → neuraminidase inhibitor (oseltamivir, influenza) · -navir → protease inhibitor (ritonavir, HIV) · -ovir → viral DNA polymerase inhibitor (acyclovir). Seven endings, one virus-suffix, seven targets.",
            variant: "process",
          },
          {
            id: "mab",
            label:
              "THE -MAB/-CEPT BRIDGE — the infix carries the humanization code (beyond this page)",
            sublabel:
              "Target — NO -mab or -cept rows print on books 252–253 (VLM-explicit: no monoclonal-antibody pointers anywhere on either page). The system is carried here as the marked KYP bridge to the biologic-agents note: the stem -mab = monoclonal antibody, with the SOURCE infix inside it (-u- human, -xi- chimeric mouse-human, -zu- humanized) and the target-morphism infix before it; -cept = a receptor extracellular domain fused to immunoglobulin Fc. Same decode skill, one page over.",
            variant: "target",
          },
          {
            id: "protocol",
            label:
              "THE FULL DECODE PROTOCOL: ENDING FIRST, THEN PREFIX, THEN INFIX",
            sublabel:
              "Output — where each code lives: the class lives in the ENDING (-prazole, -sartan, -olol), the family in the PREFIX/INFIX (gli-, the -vir targets), and the humanization source in the -mab INFIX (-xi-/-zu-/-u-). Prefix families beyond this page (KYP context, not printed on 252–253): dofa- — the class III antiarrhythmics (dofetilide); gab- — the gabapentinoids, which the book's own pain-transmission line names among the drugs that block transduction. Scan in that order and no generic name stays unknown.",
            variant: "output",
          },
        ],
        edges: [
          { from: "ambiguous", to: "glifive", label: "the infix names the family" },
          { from: "glifive", to: "virseven", label: "the infix names the viral target" },
          { from: "virseven", to: "mab", label: "in biologic names, the infix is the answer" },
          { from: "mab", to: "protocol", label: "suffix, prefix, infix — in that order" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "drug-name-map",
      title:
        "The drug-name map: 64 endings, 7 family clusters, 3 scans (an original KYP diagram)",
      caption:
        "An original KYP diagram of books 252–253's two-page stem table: the three-scan decode protocol (ENDING → PREFIX → INFIX) across the top; the full 64-row table rebuilt as seven compact family bands — page 252's Antimicrobial (13), Antineoplastic (7), and CNS (12) clusters on the left, page 253's Autonomic (5), Cardiovascular (7), Metabolic (6), and Other (14) clusters on the right, every band row reading ending → category · example in printed order; and the prefix/infix panel below — the printed gli- five and -vir seven, plus the -mab/-cept humanization-code bridge to the biologic-agents note (marked as beyond this page).",
      notice:
        "Census (pdfimages): ZERO raster images on both pages — the pages' visual asset is the color-coded table itself (bold-blue ENDING column, seven full-width shaded group bands, VLM-read at 120dpi; no red text, no mnemonics, no -mab pointers, no margin notes). The seven-band layout, the three-scan protocol, and the prefix/infix panel are an ORIGINAL KYP ADAPTATION — every ending, category, and example is preserved from the print, but the artwork and the band classification are KYP's. Both pages are additionally carried verbatim in the note's table blocks. All four mnemonics in the Memory section are KYP originals; the page prints none.",
    },
    {
      kind: "table",
      title:
        "Book 252 — the printed “Drug names” table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "Page one of the two-page table: 32 rows in three group clusters, columns ENDING / CATEGORY / EXAMPLE. The ENDING column prints in bold blue (VLM-read — not red); the group names (Antimicrobial, Antineoplastic, CNS) print as full-width shaded band rows inside the table, carried here as in-line band rows in printed position (in the raw text layer they extract at the END of the page — documented quirk). Four rows print PAIRED endings with paired examples, exactly as carried.",
      columns: ["ENDING", "CATEGORY", "EXAMPLE"],
      rows: [
        ["Antimicrobial", "— group band —", "—"],
        ["-asvir", "NS5A inhibitor", "Ledipasvir"],
        ["-bendazole", "Antiparasitic/antihelminthic", "Mebendazole"],
        ["-buvir", "NS5B inhibitor", "Sofosbuvir"],
        ["-cillin", "Transpeptidase inhibitor", "Ampicillin"],
        ["-conazole", "Ergosterol synthesis inhibitor", "Ketoconazole"],
        ["-cycline", "Protein synthesis inhibitor", "Tetracycline"],
        ["-floxacin", "Fluoroquinolone", "Ciprofloxacin"],
        ["-mivir", "Neuraminidase inhibitor", "Oseltamivir"],
        ["-navir", "Protease inhibitor", "Ritonavir"],
        ["-ovir", "Viral DNA polymerase inhibitor", "Acyclovir"],
        ["-previr", "NS3/4A inhibitor", "Grazoprevir"],
        ["-tegravir", "Integrase inhibitor", "Dolutegravir"],
        ["-thromycin", "Macrolide", "Azithromycin"],
        ["Antineoplastic", "— group band —", "—"],
        ["-case", "Recombinant uricase", "Rasburicase"],
        ["-mustine", "Nitrosourea", "Carmustine"],
        ["-platin", "Platinum compound", "Cisplatin"],
        ["-poside", "Topoisomerase II inhibitor", "Etoposide"],
        ["-rubicin", "Anthracycline", "Doxorubicin"],
        ["-taxel", "Taxane", "Paclitaxel"],
        ["-tecan", "Topoisomerase I inhibitor", "Irinotecan"],
        ["CNS", "— group band —", "—"],
        ["-flurane", "Inhaled anesthetic", "Sevoflurane"],
        ["-apine, -idone", "Atypical antipsychotic", "Quetiapine, risperidone"],
        ["-azine", "Typical antipsychotic", "Thioridazine"],
        ["-barbital", "Barbiturate", "Phenobarbital"],
        ["-benazine", "VMAT inhibitor", "Tetrabenazine"],
        ["-caine", "Local anesthetic", "Lidocaine"],
        ["-capone", "COMT inhibitor", "Entacapone"],
        [
          "-curium, -curonium",
          "Nondepolarizing neuromuscular blocker",
          "Atracurium, pancuronium",
        ],
        ["-giline", "MAO-B inhibitor", "Selegiline"],
        ["-ipramine, -triptyline", "TCA", "Imipramine, amitriptyline"],
        ["-triptan", "5-HT1B/1D agonist", "Sumatriptan"],
        ["-zepam, -zolam", "Benzodiazepine", "Diazepam, alprazolam"],
      ],
      caption:
        "Verbatim carries, documented: “5-HT1B/1D agonist” prints on ONE line (the batch brief's “5-HT agonist 1B/1D” split-row worry is adjudicated NO split — raw text layer, layout, and VLM agree; the VLM's “5-IIT” is a 120dpi serif misread, adjudicated to the text layer); “-curium, -curonium” is the printed pair (the VLM's “-uronium” drops the “cu” — adjudicated); the CNS band covers 12 rows (the VLM's “14 rows” is a miscount — 13 + 7 + 12 = 32 rows on the page, all reads agree); subscripts carry as plain digits per the cache text layer (5-HT1B/1D); “SEC TION II” is the header-space extraction artifact; page 274 prints the subsection banner twice (running header + standalone sub-banner above the title).",
    },
    {
      kind: "table",
      title:
        "Book 253 — the printed “Drug names (continued)” table, carried verbatim",
      intro:
        "Page two of the table: 32 rows in four group clusters, columns ENDING / CATEGORY / EXAMPLE, from -chol (Cholinergic agonist / Bethanechol) through -vaptan (ADH antagonist / Tolvaptan). The group names (Autonomic, Cardiovascular, Metabolic, Other) print as full-width shaded band rows inside the table, carried here as in-line band rows in printed position (in the raw text layer “Autonomic”/“Cardiovascular” extract mid-page and “Metabolic”/“Other” at the END — documented quirk).",
      columns: ["ENDING", "CATEGORY", "EXAMPLE"],
      rows: [
        ["Autonomic", "— group band —", "—"],
        ["-chol", "Cholinergic agonist", "Bethanechol"],
        ["-olol", "β-blocker", "Propranolol"],
        ["-stigmine", "AChE inhibitor", "Neostigmine"],
        ["-terol", "β2-agonist", "Albuterol"],
        ["-zosin", "α1-blocker", "Prazosin"],
        ["Cardiovascular", "— group band —", "—"],
        ["-afil", "PDE-5 inhibitor", "Sildenafil"],
        ["-dipine", "Dihydropyridine Ca2+ channel blocker", "Amlodipine"],
        ["-parin", "Low-molecular-weight heparin", "Enoxaparin"],
        ["-plase", "Thrombolytic", "Alteplase"],
        ["-pril", "ACE inhibitor", "Captopril"],
        ["-sartan", "Angiotensin-II receptor blocker", "Losartan"],
        ["-xaban", "Direct factor Xa inhibitor", "Apixaban"],
        ["Metabolic", "— group band —", "—"],
        ["-gliflozin", "SGLT-2 inhibitor", "Dapagliflozin"],
        ["-glinide", "Meglitinide", "Repaglinide"],
        ["-gliptin", "DPP-4 inhibitor", "Sitagliptin"],
        ["-glitazone", "PPAR-γ activator", "Pioglitazone"],
        ["-glutide", "GLP-1 analog", "Liraglutide"],
        ["-statin", "HMG-CoA reductase inhibitor", "Atorvastatin"],
        ["Other", "— group band —", "—"],
        ["-caftor", "CFTR modulator", "Lumacaftor"],
        ["-dronate", "Bisphosphonate", "Alendronate"],
        ["-lukast", "CysLT1 receptor blocker", "Montelukast"],
        ["-lutamide", "Androgen receptor inhibitor", "Flutamide"],
        ["-pitant", "NK1 blocker", "Aprepitant"],
        ["-prazole", "Proton pump inhibitor", "Omeprazole"],
        ["-prost", "Prostaglandin analog", "Latanoprost"],
        ["-sentan", "Endothelin receptor antagonist", "Bosentan"],
        ["-setron", "5-HT3 blocker", "Ondansetron"],
        ["-steride", "5α-reductase inhibitor", "Finasteride"],
        ["-tadine", "H1-antagonist", "Loratadine"],
        ["-tidine", "H2-antagonist", "Cimetidine"],
        ["-trozole", "Aromatase inhibitor", "Anastrozole"],
        ["-vaptan", "ADH antagonist", "Tolvaptan"],
      ],
      caption:
        "Verbatim carries, documented: the -dipine category prints “Dihydropyridine Ca2+ channel blocker” with a SUPERSCRIPT 2+ — in the raw text layer the “2+” extracts out of order (floating after “Sildenafil”, before “-dipine”); it is joined as printed here (VLM confirmed the superscript). Subscripts/superscripts carry as plain digits per the cache text layer (β2, α1, Ca2+, PPAR-γ, CysLT1, 5-HT3, 5α). The table ENDS at -vaptan with the table's closing rule (VLM-confirmed) — no -mab, -cept, or monoclonal-antibody rows print anywhere on either page, and the -mab/-cept infix system is carried only as the clearly-marked bridge in this note's prefix/infix mechanism.",
    },
    {
      kind: "list",
      title:
        "The seven family clusters — the two-page table as KYP reads it",
      intro:
        "KYP's re-sorting of the 64 printed rows into the seven group bands the print itself labels. Each band is a decode neighborhood: learn the cluster, and any new name ending in one of its endings routes to the cluster's pharmacology.",
      items: [
        {
          lead: "ANTIMICROBIAL — 13 rows (book 252)",
          text: "The antibacterials: -cillin (transpeptidase inhibitor, ampicillin) · -conazole (ergosterol synthesis inhibitor, ketoconazole) · -cycline (protein synthesis inhibitor, tetracycline) · -floxacin (fluoroquinolone, ciprofloxacin) · -thromycin (macrolide, azithromycin) · -bendazole (antiparasitic/antihelminthic, mebendazole). The seven -vir antivirals: -asvir (NS5A, ledipasvir) · -buvir (NS5B, sofosbuvir) · -previr (NS3/4A, grazoprevir) · -tegravir (integrase, dolutegravir) · -mivir (neuraminidase, oseltamivir) · -navir (protease, ritonavir) · -ovir (viral DNA polymerase, acyclovir).",
        },
        {
          lead: "ANTINEOPLASTIC — 7 rows (book 252)",
          text: "-case (recombinant uricase, rasburicase — tumor lysis rescue) · -mustine (nitrosourea, carmustine) · -platin (platinum compound, cisplatin) · -poside (topoisomerase II inhibitor, etoposide) · -rubicin (anthracycline, doxorubicin) · -taxel (taxane, paclitaxel) · -tecan (topoisomerase I inhibitor, irinotecan).",
        },
        {
          lead: "CNS — 12 rows (book 252)",
          text: "-flurane (inhaled anesthetic, sevoflurane) · -apine, -idone (atypical antipsychotic, quetiapine, risperidone) · -azine (typical antipsychotic, thioridazine) · -barbital (barbiturate, phenobarbital) · -benazine (VMAT inhibitor, tetrabenazine) · -caine (local anesthetic, lidocaine) · -capone (COMT inhibitor, entacapone) · -curium, -curonium (nondepolarizing neuromuscular blocker, atracurium, pancuronium) · -giline (MAO-B inhibitor, selegiline) · -ipramine, -triptyline (TCA, imipramine, amitriptyline) · -triptan (5-HT1B/1D agonist, sumatriptan) · -zepam, -zolam (benzodiazepine, diazepam, alprazolam).",
        },
        {
          lead: "AUTONOMIC — 5 rows (book 253)",
          text: "The autonomic mirror: -chol (cholinergic agonist, bethanechol) · -olol (β-blocker, propranolol) · -stigmine (AChE inhibitor, neostigmine) · -terol (β2-agonist, albuterol) · -zosin (α1-blocker, prazosin). Three endings tune one receptor system in opposite directions — decode the ending before touching the stem.",
        },
        {
          lead: "CARDIOVASCULAR — 7 rows (book 253)",
          text: "-afil (PDE-5 inhibitor, sildenafil) · -dipine (dihydropyridine Ca2+ channel blocker, amlodipine) · -parin (low-molecular-weight heparin, enoxaparin) · -plase (thrombolytic, alteplase) · -pril (ACE inhibitor, captopril) · -sartan (angiotensin-II receptor blocker, losartan) · -xaban (direct factor Xa inhibitor, apixaban).",
        },
        {
          lead: "METABOLIC — 6 rows (book 253)",
          text: "The gli- five plus the lipid neighbor: -gliflozin (SGLT-2 inhibitor, dapagliflozin) · -glinide (meglitinide, repaglinide) · -gliptin (DPP-4 inhibitor, sitagliptin) · -glitazone (PPAR-γ activator, pioglitazone) · -glutide (GLP-1 analog, liraglutide) · -statin (HMG-CoA reductase inhibitor, atorvastatin).",
        },
        {
          lead: "OTHER — 14 rows (book 253)",
          text: "-caftor (CFTR modulator, lumacaftor) · -dronate (bisphosphonate, alendronate) · -lukast (CysLT1 receptor blocker, montelukast) · -lutamide (androgen receptor inhibitor, flutamide) · -pitant (NK1 blocker, aprepitant) · -prazole (proton pump inhibitor, omeprazole) · -prost (prostaglandin analog, latanoprost) · -sentan (endothelin receptor antagonist, bosentan) · -setron (5-HT3 blocker, ondansetron) · -steride (5α-reductase inhibitor, finasteride) · -tadine (H1-antagonist, loratadine) · -tidine (H2-antagonist, cimetidine) · -trozole (aromatase inhibitor, anastrozole) · -vaptan (ADH antagonist, tolvaptan).",
        },
      ],
    },
    {
      kind: "steps",
      title: "Decoding any unfamiliar drug name in three scans",
      intro:
        "The whole two-page table distilled into an ordered reading path — ENDING, PREFIX, INFIX — the protocol behind the exam's unknown-drug stems.",
      steps: [
        {
          label: "SCAN 1 — THE ENDING: the suffix names the class",
          detail:
            "Start at the back of the name. The 64 printed endings route to classes instantly: cardiovascular (-pril ACE inhibitor, -sartan ARB, -olol β-blocker, -dipine dihydropyridine, -afil PDE-5 inhibitor, -xaban direct factor Xa inhibitor, -parin LMWH, -plase thrombolytic), metabolic (-gliflozin SGLT-2, -glinide meglitinide, -gliptin DPP-4, -glitazone PPAR-γ, -glutide GLP-1, -statin HMG-CoA reductase inhibitor), autonomic (-chol, -olol, -stigmine, -terol, -zosin), antimicrobial (-cillin, -conazole, -cycline, -floxacin, -thromycin, the seven -vir endings), antineoplastic (-platin, -rubicin, -taxel, -tecan, -poside, -mustine, -case), CNS (-zepam/-zolam, -barbital, -caine, -triptan, -ipramine/-triptyline, -azine, -apine/-idone, -flurane, -benazine, -capone, -curium/-curonium, -giline), and the Other band (-prazole PPI, -tidine H2, -tadine H1, -setron 5-HT3, -vaptan ADH antagonist, -steride, -trozole, -dronate, -lukast, -lutamide, -pitant, -prost, -sentan, -caftor).",
        },
        {
          label: "SCAN 2 — THE PREFIX: the front of the name resolves what the ending leaves open",
          detail:
            "When two classes share a sound, the front half arbitrates: the three -ozoles split by prefix+infix (-prazole proton pump inhibitor, -conazole ergosterol synthesis inhibitor, -trozole aromatase inhibitor); the gli- infix family splits by ending (flozin/nide/tin/tazone/tide); the -vir family splits by infix (as/bu/pre/teg/mi/na/o). Beyond this page (KYP context, not printed on 252–253): the dofa- prefix family (dofetilide, the class III antiarrhythmics) and the gab- family (the gabapentinoids, named in the book's own pain-transmission line among the drugs that block transduction).",
        },
        {
          label: "SCAN 3 — THE INFIX: in biologic names, the middle is the answer",
          detail:
            "The -mab and -cept families do not print on these two pages (VLM-confirmed) — they are the bridge to the biologic-agents note. In a monoclonal antibody name the infixes carry the code: the source infix (-u- human, -xi- chimeric, -zu- humanized) sits before the stem -mab, and the target infix sits before that; -cept marks a receptor's extracellular domain fused to immunoglobulin Fc. Same skill, deeper layer: the name still tells you what the molecule is.",
        },
        {
          label: "READ THE WHOLE NAME AS A COMPRESSED MONOGRAPH",
          detail:
            "Assemble the scans: “dapagliflozin” = the gli- infix (antidiabetic family) + the -gliflozin ending = SGLT-2 inhibitor (flushes glucose into the urine); “ledipasvir/sofosbuvir” = -asvir (NS5A) + -buvir (NS5B) = a two-drug direct-acting anti-HCV regimen decoded from endings alone; “tolvaptan” = -vaptan = ADH antagonist (hyponatremia, SIADH). Ending, prefix, infix — three scans, one class, and the mechanism/indication/adverse-effect profile comes with it.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "The sound-alike collisions — endings that differ by one letter (the exam's distractor factory)",
      intro:
        "Six high-yield near-miss pairs from the two printed pages. The question-writer's favorite trick is to swap one vowel; the decode protocol's Scan 2 exists for exactly these.",
      columns: [
        "THE ENDING YOU READ — first branch",
        "THE ENDING IT COLLIDES WITH — second branch",
      ],
      rows: [
        {
          label: "-olol vs -terol",
          a: "-olol → β-blocker (propranolol) — blocks β1/β2: bradycardia, bronchospasm risk",
          b: "-terol → β2-agonist (albuterol) — opens the airway: tachycardia, tremor, hypokalemia",
        },
        {
          label: "-tadine vs -tidine",
          a: "-tadine → H1-antagonist (loratadine) — allergies, sedation (first generation)",
          b: "-tidine → H2-antagonist (cimetidine) — gastric acid suppression, B12/drug interactions",
        },
        {
          label: "the three -ozoles",
          a: "-prazole → proton pump inhibitor (omeprazole); -conazole → ergosterol synthesis inhibitor (ketoconazole)",
          b: "-trozole → aromatase inhibitor (anastrozole) — estrogen synthesis blockade in breast cancer",
        },
        {
          label: "-setron vs -triptan",
          a: "-setron → 5-HT3 blocker (ondansetron) — blocks the serotonin receptor; antiemetic (chemotherapy)",
          b: "-triptan → 5-HT1B/1D agonist (sumatriptan) — activates the serotonin receptor; aborts migraine",
        },
        {
          label: "-statin vs -stigmine",
          a: "-statin → HMG-CoA reductase inhibitor (atorvastatin) — the lipid neighbor of the gli- band",
          b: "-stigmine → AChE inhibitor (neostigmine) — sustains acetylcholine (myasthenia, ileus, retention)",
        },
        {
          label: "-pril vs -sartan (the RAAS pair)",
          a: "-pril → ACE inhibitor (captopril) — bradykinin survives: dry cough, angioedema, hyperkalemia",
          b: "-sartan → angiotensin-II receptor blocker (losartan) — receptor-level blockade, no bradykinin, no cough",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "What Step 1 does with this table",
      body:
        "The exam rarely asks “what does -prazole mean?” — it hands you a name you have never seen and asks the mechanism, the indication, or the adverse effect. Every option in those questions is decoded by this table: the unfamiliar antihypertensive that causes a dry cough is a -pril; the new antidiabetic that causes urinary tract infections and genital mycotic infections is a -gliflozin (glucose-rich urine); the added drug that causes headache and flushing in a nitrate user is an -afil; the myasthenia drug that improves grip strength is a -stigmine. Decode the ending first and the stem confirms it; read the name front-first and you lose the question to a distractor ending.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A vignette introduces an unfamiliar drug by generic name only — “a 62-year-old man with hypertension is started on telmisartan” — and asks for the mechanism or an adverse effect",
        discriminator:
          "The ending: -sartan (the exam's telmisartan, valsartan, losartan, irbesartan all decode identically)",
        concept:
          "Suffix→class decoding — the highest-yield naming skill in Step 1 pharmacology",
        answer:
          "Angiotensin-II receptor blocker — AT1 receptor blockade without bradykinin accumulation (no cough), hyperkalemia and fetal toxicity shared with ACE inhibitors",
      },
      {
        stem: "A patient started on an antihypertensive returns with a dry, hacking cough (± angioedema, hyperkalemia); the question asks the mechanism of the offending drug or the replacement",
        discriminator:
          "The -pril ending + bradykinin-mediated cough (captopril, lisinopril, enalapril)",
        concept:
          "ACE inhibition leaves bradykinin undegraded; ARBs block the receptor instead",
        answer:
          "ACE inhibitor → replace with a -sartan (angiotensin-II receptor blocker) — the two rows sit side by side in the printed Cardiovascular cluster",
      },
      {
        stem: "A patient with asthma (or cocaine intoxication) is prescribed a drug whose name ends in -olol; the question asks why this is avoided or what complication follows",
        discriminator:
          "-olol = β-blocker; nonselective members block β2 alongside β1",
        concept:
          "β2 blockade in the airway (and unopposed α-stimulation in cocaine use)",
        answer:
          "Bronchospasm in asthma (bronchial β2 blockade) / hypertensive crisis with cocaine (unopposed α vasoconstriction) — propranolol is the printed example",
      },
      {
        stem: "A man on isosorbide mononitrate for angina is prescribed a drug ending in -afil; he presents with dizziness and profound hypotension",
        discriminator:
          "-afil = PDE-5 inhibitor (sildenafil, tadalafil, vardenafil) + concurrent nitrate",
        concept:
          "Both pathways converge on cGMP/NO-mediated vasodilation",
        answer:
          "The combination is contraindicated — PDE-5 inhibition amplifies nitrate-driven cGMP accumulation → severe hypotension; the printed row is sildenafil (PDE-5 inhibitor)",
      },
    ],
    traps: [
      {
        a: "-terol (β2-agonist — albuterol)",
        b: "-olol (β-blocker — propranolol)",
        whyConfused:
          "Both end in an “-ol” sound and both touch the adrenergic system; the endings differ by two letters in the middle",
        keyDifference:
          "-terol OPENS the airway (β2 agonism — albuterol, formoterol, salmeterol); -olol BLOCKS the receptors (β-blockade — propranolol, metoprolol, atenolol). One vowel decides bronchodilation vs bronchospasm.",
        clue:
          "Scan the ending before the stem; in an asthma vignette the -terol is rescue/maintenance and the -olol is the hazard",
      },
      {
        a: "-tadine (H1-antagonist — loratadine)",
        b: "-tidine (H2-antagonist — cimetidine)",
        whyConfused:
          "One consonant apart; both block histamine receptors",
        keyDifference:
          "-tadine blocks H1 (allergy symptoms; first-generation members sedate); -tidine blocks H2 (gastric acid; cimetidine is a CYP inhibitor and the classic B12-deficiency/drug-interaction antacid).",
        clue:
          "The vowel is the target number: a-tadine → H1, i-tidine → H2 — “a” comes before “i” as 1 comes before 2",
      },
      {
        a: "-prazole (proton pump inhibitor — omeprazole)",
        b: "-conazole (ergosterol synthesis inhibitor — ketoconazole) / -trozole (aromatase inhibitor — anastrozole)",
        whyConfused:
          "All three end in -ozole; the prefix/infix decides the class",
        keyDifference:
          "-prazole irreversibly blocks the H+/K+ ATPase (acid suppression); -conazole blocks 14α-demethylase (fungal membrane ergosterol — ketoconazole); -trozole blocks aromatase (estrogen synthesis — anastrozole).",
        clue:
          "Three -ozoles, three organ systems: gut (prazole), fungus (conazole), breast-cancer estrogen (trozole) — Scan 2 territory",
      },
      {
        a: "-setron (5-HT3 blocker — ondansetron)",
        b: "-triptan (5-HT1B/1D agonist — sumatriptan)",
        whyConfused:
          "Both are serotonergic endings printed on the same two pages (setron in Other, triptan in CNS)",
        keyDifference:
          "-setron BLOCKS the 5-HT3 receptor (chemotherapy-emesis pathway; ondansetron, granisetron); -triptan AGONIZES 5-HT1B/1D (cranial vasoconstriction + trigeminal blockade; sumatriptan).",
        clue:
          "Blocker vs agonist at neighboring serotonin receptors — the stem's chemotherapy context (setron) vs migraine context (triptan) confirms the ending",
      },
    ],
    pivots: [
      {
        lookAlike:
          "An unfamiliar generic drug name in the stem, never seen in study materials",
        differentiator:
          "Scan the ENDING first (-pril, -sartan, -olol, -afil, -prazole, -statin, -caine, -vaptan, -stigmine…): the suffix names the class in almost every case — 64 printed rows reduce to 7 clusters",
        correctPath:
          "Ending → class → mechanism/indication/adverse effect; only if the ending is ambiguous move to the prefix, and only for biologics to the infix.",
      },
      {
        lookAlike:
          "Two antidiabetic options that both contain “gli-” (dapagliflozin vs sitagliptin, or pioglitazone vs liraglutide)",
        differentiator:
          "The infix says family, the ENDING says class: -gliflozin SGLT-2 inhibitor, -glinide meglitinide, -gliptin DPP-4 inhibitor, -glitazone PPAR-γ activator, -glutide GLP-1 analog",
        correctPath:
          "Decode the suffix half of the gli- compound — the shared infix is the distractor's camouflage, not the answer.",
      },
      {
        lookAlike:
          "A biologic name ending in -mab or -cept when the question asks about the molecule's structure or immune risk",
        differentiator:
          "Route to the monoclonal naming system: in -mab names the source infix carries the humanization code (-u- human, -xi- chimeric, -zu- humanized); -cept marks a receptor fused to immunoglobulin Fc — these codes print on the biologics page, NOT on 252–253 (VLM-confirmed)",
        correctPath:
          "Treat -mab/-cept endings as the bridge to the biologic-agents note — decode the infix to predict infusion reactions and hypersensitivity that scale with murine content.",
      },
    ],
    miniCase: {
      vignette:
        "A 57-year-old man with type 2 diabetes mellitus, hemoglobin A1c 8.4% despite metformin and diet, is started on a new oral agent, dapagliflozin. At his three-month follow-up his A1c has improved to 7.5%, but he reports two episodes of dysuria and urinary frequency confirmed as Escherichia coli cystitis, and mentions mild genital pruritus. He is pleased that he has also lost 2 kg. Which of the following best describes the mechanism of the drug he was started on?",
      question:
        "Decode the name and choose the mechanism — the answer is written into the ending.",
      options: [
        {
          label:
            "Inhibition of sodium-glucose cotransporter-2 (SGLT-2) in the proximal renal tubule, reducing glucose reabsorption",
          text: "The -gliflozin ending — glucose flushed into the urine.",
          correct: true,
          why:
            "Correct, and the vignette is the ending decoded: dapagliflozin = the gli- infix (antidiabetic family) + the -gliflozin ending = SGLT-2 inhibitor, printed in the Metabolic cluster with the class verbatim (SGLT-2 inhibitor). Blocking proximal-tubule glucose reabsorption causes glycosuria — which explains every detail in the stem: the lowered A1c, the glucose-rich urine feeding E. coli (urinary tract infections), the genital mycotic pruritus, and the calorie loss behind the weight reduction. The name carried the whole monograph.",
        },
        {
          label:
            "Inhibition of dipeptidyl peptidase-4 (DPP-4), prolonging the action of endogenous incretins",
          text: "Right family, wrong ending — this is the -gliptin decode.",
          why:
            "The gli- trap. DPP-4 inhibition is the -gliptin ending — sitagliptin is the printed example — and it shares the gli- infix with dapagliflozin, which is exactly why the exam builds this distractor. But DPP-4 inhibitors are weight-neutral and carry no glycosuria, no urinary tract infections, and no genital mycotic infections; the stem's complications are all consequences of glucose exiting the body through the kidney, which requires the SGLT-2 mechanism, not the incretin mechanism. The infix said “antidiabetic”; only the ENDING said “which one.”",
        },
        {
          label:
            "Activation of PPAR-γ, increasing insulin sensitivity in adipose tissue and muscle",
          text: "The third gli- neighbor — the -glitazone decode.",
          why:
            "Another same-infix, different-ending error: PPAR-γ activation is the -glitazone ending (pioglitazone, printed in the same Metabolic cluster). The thiazolidinediones lower glucose by sensitizing peripheral tissues to insulin — no glycosuria, therefore no urinary infections or genital pruritus — and their signature adverse effects run the opposite direction from this stem's weight loss: fluid retention, edema, and weight GAIN, plus fracture risk and heart-failure exacerbation. The ending, not the infix, separates flozin from tazone.",
        },
        {
          label:
            "Agonism of the GLP-1 receptor, enhancing glucose-dependent insulin secretion and slowing gastric emptying",
          text: "The fourth gli- neighbor — the -glutide decode.",
          why:
            "The last member of the printed gli- five: GLP-1 receptor agonism is the -glutide ending (liraglutide). It is the closest physiological cousin of the SGLT-2 answer among the distractors — it also lowers A1c and causes weight loss — but it works through incretin-mimetic insulin secretion, not renal glucose loss, so it produces nausea and delayed gastric emptying rather than urinary tract infections and genital mycotic pruritus, and in its printed form it is an injectable peptide (analog), not the oral tablet this stem implies. Again: the infix promised an antidiabetic; only the -gliflozin ending promised the one that flushes glucose into the urine.",
        },
      ],
      reasoning:
        "The stem is a decoding exercise dressed as a clinical follow-up: an unfamiliar antidiabetic (dapagliflozin) with a complication profile that IS the mechanism. The three-scan protocol solves it without any prior encounter with the drug. SCAN 1 — the ENDING: -gliflozin, printed verbatim in the Metabolic cluster as SGLT-2 inhibitor. SCAN 2 — the PREFIX/INFIX: gli- confirms the antidiabetic family, and the family's four sibling endings (-glinide, -gliptin, -glitazone, -glutide) are precisely the three distractors plus the answer — the exam's version of the printed page. SCAN 3 — not needed: no -mab/-cept infix. The clinical details confirm the decode: glycosuria-driven urinary tract infection, genital mycotic pruritus, weight loss, and A1c improvement are all direct consequences of blocking SGLT-2 in the proximal tubule (option A correct). Each distractor decodes to a real printed row — DPP-4 inhibitor (sitagliptin), PPAR-γ activator (pioglitazone), GLP-1 analog (liraglutide) — and each fails on a mechanism-specific detail (weight-neutral vs weight-gain vs nausea/injectable) that the -gliflozin ending alone would have predicted. The name was the monograph.",
    },
  },
  mnemonics: [
    {
      code: "VIR MEANS VIRUS — A→5A, B→5B, PRE & NAV PROTEASE, TEG INTEGRATES, MI MEETS SIALIC ACID, O POLYMERASE",
      meaning:
        "The seven printed antiviral endings, all sharing the -vir virus suffix, distinguished by their infixes: -asvir → NS5A inhibitor (ledipasvir — the A of “as” is the A of NS5A) · -buvir → NS5B inhibitor (sofosbuvir — B→5B) · -previr → NS3/4A inhibitor (grazoprevir — HCV protease) · -navir → protease inhibitor (ritonavir — HIV protease) · -tegravir → integrase inhibitor (dolutegravir — TEG = integrase, it integrates) · -mivir → neuraminidase inhibitor (oseltamivir — influenza's sialic-acid-cleaving enzyme) · -ovir → viral DNA polymerase inhibitor (acyclovir — O for pOlymerase).",
      memorizes:
        "The printed Antimicrobial cluster's entire antiviral wing — seven endings and their viral targets",
      whenToUse:
        "Any unfamiliar antiviral name in a stem, and any HCV-regimen question (ledipasvir/sofosbuvir decodes to NS5A + NS5B from the endings alone)",
      clinical:
        "Direct-acting HCV therapy is taught by target: NS3/4A protease (-previr), NS5A (-asvir), NS5B polymerase (-buvir); influenza uses -mivir neuraminidase inhibitors; HIV combines -tegravir integrase inhibitors with -navir protease inhibitors — the endings sort the entire antiviral shelf (KYP context: the regimens; the rows are printed).",
    },
    {
      code: "THE GLI-FIVE: FLOZIN FLUSHES, NIDE NOODGES, TIN TRIMS, TAZONE TUNES, TIDE IS THE PEPTIDE",
      meaning:
        "The printed Metabolic cluster's antidiabetic infix family — one infix, five endings, five classes: -gliflozin → SGLT-2 inhibitor (dapagliflozin — FLUSHES glucose into the urine) · -glinide → meglitinide (repaglinide — NOODGES early insulin secretion, prandial) · -gliptin → DPP-4 inhibitor (sitagliptin — TRIMS the enzyme that degrades GLP-1) · -glitazone → PPAR-γ activator (pioglitazone — TUNES insulin sensitivity) · -glutide → GLP-1 analog (liraglutide — the incretin PEPTIDE tide). The band's sixth row is the lipid neighbor: -statin → HMG-CoA reductase inhibitor (atorvastatin).",
      memorizes:
        "The five gli- antidiabetic endings and their classes — the exam's favorite intra-family discrimination",
      whenToUse:
        "Any antidiabetic option list where multiple choices contain “gli-”, and any question pairing an antidiabetic with a mechanism-specific adverse effect (genital mycotic infection → flozin; weight gain/edema → tazone; nausea/injectable → tide)",
      clinical:
        "The ending predicts the adverse-effect profile before you know the drug: glycosuria infections (flozin), hypoglycemia with sulfonylurea co-use (nide), weight neutrality (tin), heart-failure risk (tazone), GI effects and pancreatitis question marks (tide).",
    },
    {
      code: "OLOL BLOCKS, TEROL OPENS, ZOSIN UNLOADS, CHOL FLOWS, STIGMINE SUSTAINS",
      meaning:
        "The printed Autonomic cluster — five endings, one receptor system: -olol → β-blocker (propranolol — BLOCKS β1/β2) · -terol → β2-agonist (albuterol — OPENS the airway) · -zosin → α1-blocker (prazosin — UNLOADS the vasculature and the prostate) · -chol → cholinergic agonist (bethanechol — makes the bladder and gut FLOW) · -stigmine → AChE inhibitor (neostigmine — SUSTAINS acetylcholine at the junction).",
      memorizes:
        "The five autonomic endings and the direction each one pushes the sympathetic/parasympathetic balance",
      whenToUse:
        "Any autonomic pharmacology question with an unfamiliar name, and any near-miss option pair (-olol vs -terol is the classic)",
      clinical:
        "The mirror pairs write the exam questions: the asthmatic who decompensates on a -olol, the COPD patient rescued by a -terol, the BPH patient whose -zosin also drops his orthostatic blood pressure, the postoperative ileus treated with a -chol or a -stigmine.",
    },
    {
      code: "MAB MEANS MONOCLONAL; THE INFIX IS THE DONOR (u-human, xi-mix, zu-humanized)",
      meaning:
        "The bridge beyond the printed pages: in -mab names the infix before the stem carries the antibody's source — -u- = fully human (the “u” of human), -xi- = chimeric, a mouse-human MIX (“xi” ≈ xylophone hybrid), -zu- = humanized (mouse complementarity-determining regions grafted onto a human framework); and -cept marks a receptor's extracellular domain fused to immunoglobulin Fc (a decoy receptor). No -mab/-cept rows print on books 252–253 (VLM-confirmed) — this is the decode hook for the biologics page.",
      memorizes:
        "The -mab source infixes and the -cept receptor-fusion stem — the deepest layer of drug-name decoding",
      whenToUse:
        "Any -mab or -cept name whose question asks about structure, immune risk, or infusion reactions, and any distractor counting murine content",
      clinical:
        "Humanization predicts the hypersensitivity ladder: chimeric (-xi-) names carry the highest infusion-reaction risk, humanized (-zu-) less, fully human (-u-) least (KYP context for the grading; the infix spellings are the universal nomenclature — this note's bridge to the biologic-agents note).",
    },
  ],
  rapidReview: {
    s30: [
      "Antimicrobial endings: -cillin transpeptidase inhibitor · -conazole ergosterol synthesis inhibitor · -cycline protein synthesis inhibitor · -floxacin fluoroquinolone · -thromycin macrolide · -bendazole antiparasitic/antihelminthic · -asvir NS5A · -buvir NS5B · -previr NS3/4A · -tegravir integrase · -mivir neuraminidase · -navir protease · -ovir viral DNA polymerase",
      "Antineoplastic endings: -case recombinant uricase · -mustine nitrosourea · -platin platinum compound · -poside topoisomerase II inhibitor · -rubicin anthracycline · -taxel taxane · -tecan topoisomerase I inhibitor",
      "CNS endings: -flurane inhaled anesthetic · -apine/-idone atypical antipsychotic · -azine typical antipsychotic · -barbital barbiturate · -benazine VMAT inhibitor · -caine local anesthetic · -capone COMT inhibitor · -curium/-curonium nondepolarizing neuromuscular blocker · -giline MAO-B inhibitor · -ipramine/-triptyline TCA · -triptan 5-HT1B/1D agonist · -zepam/-zolam benzodiazepine",
      "Autonomic endings: -chol cholinergic agonist · -olol β-blocker · -stigmine AChE inhibitor · -terol β2-agonist · -zosin α1-blocker",
      "Cardiovascular endings: -afil PDE-5 inhibitor · -dipine dihydropyridine Ca2+ channel blocker · -parin low-molecular-weight heparin · -plase thrombolytic · -pril ACE inhibitor · -sartan angiotensin-II receptor blocker · -xaban direct factor Xa inhibitor",
      "Metabolic endings: -gliflozin SGLT-2 inhibitor · -glinide meglitinide · -gliptin DPP-4 inhibitor · -glitazone PPAR-γ activator · -glutide GLP-1 analog · -statin HMG-CoA reductase inhibitor",
      "Other endings: -caftor CFTR modulator · -dronate bisphosphonate · -lukast CysLT1 receptor blocker · -lutamide androgen receptor inhibitor · -pitant NK1 blocker · -prazole proton pump inhibitor · -prost prostaglandin analog · -sentan endothelin receptor antagonist · -setron 5-HT3 blocker · -steride 5α-reductase inhibitor · -tadine H1-antagonist · -tidine H2-antagonist · -trozole aromatase inhibitor · -vaptan ADH antagonist",
    ],
    m3: [
      "VIR MEANS VIRUS — A→5A, B→5B, PRE & NAV protease, TEG integrase, MI neuraminidase (flu), O polymerase: the seven antiviral endings",
      "THE GLI-FIVE — flozin flushes (SGLT-2), nide nudges (meglitinide), tin trims (DPP-4), tazone tunes (PPAR-γ), tide is the peptide (GLP-1): one infix, five classes",
      "OLOL BLOCKS, TEROL OPENS, ZOSIN UNLOADS, CHOL FLOWS, STIGMINE SUSTAINS: the autonomic mirror",
      "MAB MEANS MONOCLONAL; THE INFIX IS THE DONOR — u-human, xi-mix (chimeric), zu-humanized, and -cept = receptor-Fc fusion: the biologics bridge",
    ],
    m10: [
      "The table is TWO pages, 64 rows, 7 group bands: page 252 = Antimicrobial (13) + Antineoplastic (7) + CNS (12); page 253 = Autonomic (5) + Cardiovascular (7) + Metabolic (6) + Other (14) — both pages carry columns ENDING / CATEGORY / EXAMPLE, and the bands print as full-width shaded rows inside the table",
      "The group-band labels extract OUT OF ORDER in the raw text layer (all three at the END of page 274; Autonomic/Cardiovascular mid-page, Metabolic/Other at the END of page 275) — repositioned into printed order in the note, documented",
      "The -dipine category prints “Dihydropyridine Ca2+ channel blocker” with a SUPERSCRIPT 2+ that the raw text layer extracts out of order (floating after “Sildenafil”, before “-dipine”) — joined as printed",
      "“5-HT1B/1D agonist” prints on ONE line (the brief's “5-HT agonist 1B/1D” split-row worry adjudicated NO split; the VLM's “5-IIT” is a 120dpi serif misread, adjudicated to the text layer); “-curium, -curonium” is the printed pair (the VLM's “-uronium” adjudicated); the CNS band covers 12 rows (the VLM's “14” is a miscount)",
      "Four rows print PAIRED endings with paired examples: -apine, -idone (quetiapine, risperidone) · -curium, -curonium (atracurium, pancuronium) · -ipramine, -triptyline (imipramine, amitriptyline) · -zepam, -zolam (diazepam, alprazolam)",
      "NO -mab/-cept rows, NO monoclonal-antibody pointers, NO mnemonics, NO margin notes, NO red text, and NO images print anywhere on either page (pdfimages: zero rasters; VLM-explicit) — the ENDING column prints in bold BLUE; the -mab/-cept infix system and the dofa-/gab- prefix families are carried as clearly-marked KYP bridges/context, not as printed text",
      "“SEC TION II” is the header-space extraction artifact (known, carried as-is); page 274 prints the subsection banner twice (running header + standalone sub-banner above the title); the table ends at -vaptan with the closing rule (VLM-confirmed)",
    ],
  },
  recall: [
    {
      q: "The Antimicrobial cluster, verbatim — all 13 endings with category and example.",
      a: "-asvir → NS5A inhibitor (Ledipasvir) · -bendazole → Antiparasitic/antihelminthic (Mebendazole) · -buvir → NS5B inhibitor (Sofosbuvir) · -cillin → Transpeptidase inhibitor (Ampicillin) · -conazole → Ergosterol synthesis inhibitor (Ketoconazole) · -cycline → Protein synthesis inhibitor (Tetracycline) · -floxacin → Fluoroquinolone (Ciprofloxacin) · -mivir → Neuraminidase inhibitor (Oseltamivir) · -navir → Protease inhibitor (Ritonavir) · -ovir → Viral DNA polymerase inhibitor (Acyclovir) · -previr → NS3/4A inhibitor (Grazoprevir) · -tegravir → Integrase inhibitor (Dolutegravir) · -thromycin → Macrolide (Azithromycin).",
    },
    {
      q: "The Antineoplastic cluster, verbatim — all 7 rows.",
      a: "-case → Recombinant uricase (Rasburicase) · -mustine → Nitrosourea (Carmustine) · -platin → Platinum compound (Cisplatin) · -poside → Topoisomerase II inhibitor (Etoposide) · -rubicin → Anthracycline (Doxorubicin) · -taxel → Taxane (Paclitaxel) · -tecan → Topoisomerase I inhibitor (Irinotecan).",
    },
    {
      q: "The CNS cluster, verbatim — all 12 rows, including the four paired endings.",
      a: "-flurane → Inhaled anesthetic (Sevoflurane) · -apine, -idone → Atypical antipsychotic (Quetiapine, risperidone) · -azine → Typical antipsychotic (Thioridazine) · -barbital → Barbiturate (Phenobarbital) · -benazine → VMAT inhibitor (Tetrabenazine) · -caine → Local anesthetic (Lidocaine) · -capone → COMT inhibitor (Entacapone) · -curium, -curonium → Nondepolarizing neuromuscular blocker (Atracurium, pancuronium) · -giline → MAO-B inhibitor (Selegiline) · -ipramine, -triptyline → TCA (Imipramine, amitriptyline) · -triptan → 5-HT1B/1D agonist (Sumatriptan) · -zepam, -zolam → Benzodiazepine (Diazepam, alprazolam).",
    },
    {
      q: "The Autonomic cluster, verbatim — all 5 rows (the autonomic mirror).",
      a: "-chol → Cholinergic agonist (Bethanechol) · -olol → β-blocker (Propranolol) · -stigmine → AChE inhibitor (Neostigmine) · -terol → β2-agonist (Albuterol) · -zosin → α1-blocker (Prazosin).",
    },
    {
      q: "The Cardiovascular cluster, verbatim — all 7 rows.",
      a: "-afil → PDE-5 inhibitor (Sildenafil) · -dipine → Dihydropyridine Ca2+ channel blocker (Amlodipine) · -parin → Low-molecular-weight heparin (Enoxaparin) · -plase → Thrombolytic (Alteplase) · -pril → ACE inhibitor (Captopril) · -sartan → Angiotensin-II receptor blocker (Losartan) · -xaban → Direct factor Xa inhibitor (Apixaban).",
    },
    {
      q: "The Metabolic cluster, verbatim — the gli- five plus the lipid neighbor.",
      a: "-gliflozin → SGLT-2 inhibitor (Dapagliflozin) · -glinide → Meglitinide (Repaglinide) · -gliptin → DPP-4 inhibitor (Sitagliptin) · -glitazone → PPAR-γ activator (Pioglitazone) · -glutide → GLP-1 analog (Liraglutide) · -statin → HMG-CoA reductase inhibitor (Atorvastatin).",
    },
    {
      q: "The Other cluster, verbatim — all 14 rows, -caftor through -vaptan.",
      a: "-caftor → CFTR modulator (Lumacaftor) · -dronate → Bisphosphonate (Alendronate) · -lukast → CysLT1 receptor blocker (Montelukast) · -lutamide → Androgen receptor inhibitor (Flutamide) · -pitant → NK1 blocker (Aprepitant) · -prazole → Proton pump inhibitor (Omeprazole) · -prost → Prostaglandin analog (Latanoprost) · -sentan → Endothelin receptor antagonist (Bosentan) · -setron → 5-HT3 blocker (Ondansetron) · -steride → 5α-reductase inhibitor (Finasteride) · -tadine → H1-antagonist (Loratadine) · -tidine → H2-antagonist (Cimetidine) · -trozole → Aromatase inhibitor (Anastrozole) · -vaptan → ADH antagonist (Tolvaptan).",
    },
    {
      q: "The decode protocol and the page's shape — the three scans, the seven bands, and what does NOT print on these pages.",
      a: "Three scans: the ENDING first (suffix names the class — 64 printed rows), then the PREFIX (the gli- infix family, the -vir targets, and beyond this page dofa-/gab-), then the INFIX (the -mab humanization codes -u-/-xi-/-zu- and the -cept receptor-fusion stem — NOT printed on 252–253; the bridge to the biologic-agents note). The pages: two-page table, 64 rows in 7 shaded group bands (Antimicrobial 13, Antineoplastic 7, CNS 12, Autonomic 5, Cardiovascular 7, Metabolic 6, Other 14), columns ENDING / CATEGORY / EXAMPLE, ending at -vaptan (ADH antagonist, Tolvaptan).",
    },
  ],
  related: [
    {
      title: "Biologic Agents",
      topicId: "biologic-agents",
      note:
        "The decode bridge this note points to: the -mab stem and the -xi-/-zu-/-u- humanization infixes, plus the -cept receptor-fusion stem, print on the biologics page (none of them print on 252–253) — the same ending-first reading skill, one layer deeper, where the infix IS the structural answer.",
    },
    {
      title: "Beta-Blockers",
      topicId: "beta-blockers",
      note:
        "The -olol row expanded into a full note: propranolol is the printed example, and the β1-selective vs nonselective distinction (metoprolol vs propranolol) is the intra-ending subtlety the suffix alone does not encode — decode the ending, then check selectivity.",
    },
    {
      title: "Phosphodiesterase Inhibitors",
      topicId: "phosphodiesterase-inhibitors",
      note:
        "The -afil row's home note: sildenafil (PDE-5) is the printed example, the nitrate contraindication is the exam's favorite -afil question, and the PDE family (3, 4, 5) shows why one suffix still needs the isozyme context.",
    },
    {
      title: "Cholinomimetics",
      topicId: "cholinomimetics",
      note:
        "Two Autonomic rows expanded: -chol (bethanechol, the cholinergic agonist) and -stigmine (neostigmine, the AChE inhibitor) — the note supplies the receptor and enzyme pharmacology that the two endings compress.",
    },
  ],
  crossLinks: [
    {
      subject: "Microbiology (the viral targets behind the -vir endings)",
      connection:
        "The seven antiviral endings encode the virology: HCV's nonstructural proteins NS3/4A (protease → -previr), NS5A (→ -asvir), and NS5B (RNA polymerase → -buvir); HIV's integrase (→ -tegravir) and protease (→ -navir); influenza's neuraminidase (→ -mivir, oseltamivir); and the herpesviral DNA polymerase (→ -ovir, acyclovir, a guanosine analog needing viral thymidine kinase). Decode the ending and you have named the viral enzyme — the microbiology note supplies the replication step each enzyme serves.",
    },
    {
      subject: "Endocrinology (the antidiabetic classes behind the gli- infix)",
      connection:
        "The Metabolic band compresses the entire non-insulin diabetes armamentarium: SGLT-2 inhibitors (renal glucose reabsorption — glycosuria, UTIs, weight loss), meglitinides (short-acting prandial insulin secretagogues), DPP-4 inhibitors (incretin degradation blockade — weight-neutral), PPAR-γ activators (insulin sensitizers — edema, weight gain, fracture risk), GLP-1 analogs (incretin mimetics — delayed gastric emptying, satiety), and the -statin neighbor addressing the cardiovascular comorbidity; the endocrine notes carry each mechanism's full physiology and adverse-effect logic.",
    },
    {
      subject: "Biochemistry (the enzymes behind the -conazole, -steride, and -trozole rows)",
      connection:
        "Three endings name three enzyme systems: -conazole inhibits fungal 14α-demethylase (lanosterol → ergosterol — membrane biochemistry, the reason azoles are antifungal and why human steroid synthesis can be collateral at high doses); -steride inhibits 5α-reductase (testosterone → DHT, the prostate and hair-follicle pathway); -trozole inhibits aromatase (androgens → estrogens, the postmenopausal breast-cancer estrogen source). One suffix family, three different metabolic conversions.",
    },
    {
      subject: "Cardiology (the RAAS pair: -pril vs -sartan)",
      connection:
        "The two Cardiovascular rows sit side by side because they decode the same axis at two points: -pril inhibits the converting enzyme (bradykinin accumulates → dry cough, angioedema; angiotensin II falls at its source) while -sartan blocks the AT1 receptor (bradykinin metabolism intact → no cough; blockade downstream of any escape). Both share hyperkalemia (aldosterone falls) and fetal renal toxicity — the cardiology notes carry the full RAAS physiology the two endings compress.",
    },
  ],
};
