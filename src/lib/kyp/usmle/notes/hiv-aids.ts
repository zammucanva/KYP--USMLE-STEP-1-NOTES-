import type { KypUsMLENote } from "../types";

// Microbiology — VIROLOGY banner (M-batch 27). Source: pdf 194-195 / books
//  172-173 (HIV — the structure diagram + the 3 structural genes + the
//  coreceptor logic + the diagnosis algorithm; Common diseases of
//  HIV-positive adults — the CD4 ladder). BOTH PAGES PURE VECTOR (0
//  rasters) — the virion diagram and the algorithm are redrawn originally.
//  The banner typo 'MICROCIOLOGY—VIROLOGY' prints on books 172-173. FA's
//  printed gloss (RIP "Pol") is quoted in the gene strip for verification
//  only. HIV therapy itself is M38 (hiv-therapy) — this note covers the
//  virology, diagnostics, and the opportunist ladder.

export const hivAids: KypUsMLENote = {
  id: "hiv-aids",
  title: "HIV & AIDS: Virology Through Opportunists",
  subtitle:
    "The retrovirus from its parts to its CD4 ladder. THE VIRION: envelope proteins acquired through budding from the host cell plasma membrane — gp120, the DOCKING glycoprotein that attaches to the host CD4+ T cell; gp41 (forty-one), the TRANSMEMBRANE glycoprotein for fusion and entry; the lipid envelope; p17, the MATRIX protein; p24, the CAPSID protein; reverse transcriptase with integrase and protease; and the DIPLOID genome (2 molecules of RNA). THE 3 STRUCTURAL GENES: env (gp120 and gp41, formed from cleavage of gp160 — envelope glycoproteins); gag (p24 and p17 — capsid and matrix proteins, respectively); pol (Reverse transcriptase, Integrase, Protease). THE ENTRY LOGIC: HIV binds CD4 as well as a coreceptor — CCR5 on macrophages (EARLY infection) or CXCR4 on T cells (LATE infection); homozygous CCR5 mutation = IMMUNITY, heterozygous = slower course. Reverse transcriptase synthesizes dsDNA from genomic RNA; the dsDNA integrates into the host genome. THE DIAGNOSIS ALGORITHM: the HIV-1/2 antibodies + p24 antigen combination immunoassay (4th-generation screen — detects the p24 capsid antigen and IgG/IgM to HIV-1/2; very high sensitivity and specificity, but may miss disease tested within the FIRST 2 WEEKS) → a positive screen is followed by the confirmatory HIV-1/HIV-2 antibody DIFFERENTIATION immunoassay → indeterminate results go to HIV-1 NAT. The RNA tests: NAAT is QUALITATIVE — a sensitive method to detect HIV viremia in antibody-negative patients; VIRAL LOAD (RT-PCR) is QUANTITATIVE — the plasma HIV RNA amount, used to monitor treatment response and transmissibility. Western blot is no longer recommended by the CDC. In babies with suspected HIV, Ag/Ab testing is NOT recommended (maternally transferred antibody) — use the HIV viral load. AIDS DIAGNOSIS: ≤200 CD4+ cells/mm³ (normal 500-1500) or HIV ⊕ with an AIDS-defining condition (eg, Pneumocystis pneumonia). THE CD4 LADDER: ↓CD4+ → reactivation of past infections (TB, HSV, shingles), dissemination of bacterial and fungal infections (eg, coccidioidomycosis), and non-Hodgkin lymphomas. CD4 <500/mm³ — Candida albicans oral thrush (scrapable white plaque, pseudohyphae); EBV oral hairy leukoplakia (UNSCRAPABLE, lateral tongue); HHV-8 Kaposi sarcoma localized (perivascular spindle cells); HPV squamous cell carcinoma at sexual-contact sites (anus, cervix, oropharynx); TB reactivation. CD4 <200/mm³ — Histoplasma capsulatum (fever, weight loss, cough — OVAL YEAST CELLS WITHIN MACROPHAGES); HIV itself (dementia, HIV-associated nephropathy — cerebral atrophy); JC virus reactivation (PML — nonenhancing demyelination on MRI); HHV-8 Kaposi disseminated (pulmonary, GI, lymphatic); Pneumocystis jirovecii pneumonia (GROUND-GLASS opacities). CD4 <100/mm³ — Bartonella bacillary angiomatosis (red-purple papules, neutrophilic inflammation); Candida esophagitis (white plaques on endoscopy); CMV — CREEP: Colitis, Retinitis, Esophagitis, Encephalitis, Pneumonitis (linear ulcers, cotton-wool spots, owl-eye inclusions); Cryptococcus neoformans meningitis (encapsulated yeast on India ink, capsular antigen ⊕); Cryptosporidium chronic watery diarrhea (acid-fast oocysts); EBV B-cell lymphoma (CNS lymphoma — ring enhancing, may be SOLITARY vs Toxoplasma); Mycobacterium avium–intracellulare (nonspecific systemic symptoms or superficial lymphadenitis — most common if CD4 <50); Toxoplasma gondii brain abscesses (MULTIPLE ring-enhancing lesions).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Virology",
  pilotCategory:
    "Virology — the HIV virion on the gene map (env-gag-pol), the entry coreceptor switch (CCR5 early, CXCR4 late) with the CCR5-mutation immunity logic, the 4th-generation diagnosis algorithm with its 2-week window, the AIDS definition, and the three-tier CD4 opportunist ladder",
  difficulty: 2,
  readTime: 14,
  sourceRef: "First Aid 2026, Part 1 pp. 172–173 (HIV; HIV diagnosis; Common diseases of HIV-positive adults)",
  tags: [
    "HIV",
    "AIDS",
    "gp120",
    "gp41",
    "p24",
    "p17",
    "lipid envelope",
    "budding",
    "diploid genome",
    "env",
    "gag",
    "pol",
    "reverse transcriptase",
    "integrase",
    "protease",
    "gp160",
    "CD4",
    "CCR5",
    "CXCR4",
    "coreceptor",
    "macrophages",
    "T cells",
    "CCR5 mutation",
    "homozygous immunity",
    "provirus",
    "p24 antigen",
    "combination immunoassay",
    "differentiation immunoassay",
    "NAT",
    "NAAT",
    "viral load",
    "RT-PCR",
    "Western blot",
    "maternal antibody",
    "AIDS definition",
    "CD4 count",
    "Pneumocystis pneumonia",
    "oral thrush",
    "oral hairy leukoplakia",
    "Kaposi sarcoma",
    "HPV squamous cell carcinoma",
    "TB reactivation",
    "histoplasmosis",
    "HIV dementia",
    "HIV-associated nephropathy",
    "PML",
    "ground-glass opacities",
    "bacillary angiomatosis",
    "Candida esophagitis",
    "CREEP",
    "CMV retinitis",
    "cotton-wool spots",
    "Cryptococcus meningitis",
    "India ink",
    "Cryptosporidium",
    "acid-fast oocysts",
    "CNS lymphoma",
    "MAC",
    "Toxoplasma",
    "ring-enhancing lesions",
  ],
  core: {
    what: "THE VIRION (book 172). HIV's envelope proteins are acquired through budding from the host cell plasma membrane. The parts: gp120 — the DOCKING glycoprotein, mediating attachment to the host CD4+ T cell; gp41 (forty-one) — the TRANSMEMBRANE glycoprotein for fusion and entry; the LIPID ENVELOPE itself; p17 — the MATRIX protein; p24 — the CAPSID protein; REVERSE TRANSCRIPTASE (with integrase and protease); and the DIPLOID genome — 2 molecules of RNA. THE 3 STRUCTURAL GENES (the proteins they code): env — gp120 and gp41, formed from cleavage of gp160 to form the envelope glycoproteins (gp120 attaches to CD4; gp41 fuses and enters); gag — p24 (capsid) and p17 (matrix); pol — Reverse transcriptase, Integrase, Protease (FA's printed gloss: RIP “Pol” — verification-only). THE ENTRY LOGIC: HIV binds CD4 as well as a coreceptor — either CCR5 on macrophages (EARLY infection) or CXCR4 on T cells (LATE infection). HOMOZYGOUS CCR5 mutation = immunity; HETEROZYGOUS = slower course. Reverse transcriptase synthesizes dsDNA from the genomic RNA, and the dsDNA integrates into the host genome — the proviral strategy that makes eradication impossible. THE DIAGNOSIS ALGORITHM: the HIV-1/2 antibodies + p24 antigen COMBINATION IMMUNOASSAY is the screen — it detects the viral p24 capsid protein and IgG and/or IgM to HIV-1/2; very high sensitivity and specificity, but it may miss early HIV disease if tested within the FIRST 2 WEEKS of infection. A POSITIVE screening test is followed by a confirmatory HIV-1/HIV-2 ANTIBODY DIFFERENTIATION immunoassay (HIV-1, HIV-2, or both); indeterminate results go to HIV-1 NAT. HIV RNA tests detect elevated HIV RNA and can be qualitative or quantitative: NAAT is QUALITATIVE — a sensitive method to detect HIV viremia in antibody-negative patients; VIRAL LOAD tests (RT-PCR) are QUANTITATIVE — the amount of viral RNA in plasma, used to MONITOR response to treatment and transmissibility. Western blot tests are NO LONGER RECOMMENDED by the CDC for confirmatory testing. HIV-1/2 Ag/Ab testing is NOT recommended in babies with suspected HIV (maternally transferred antibody) — use the HIV VIRAL LOAD instead. AIDS DIAGNOSIS: ≤200 CD4+ cells/mm³ (normal 500-1500) or HIV ⊕ with an AIDS-defining condition (eg, Pneumocystis pneumonia). THE CD4 LADDER (book 173): a falling CD4+ count brings reactivation of past infections (TB, HSV, shingles), dissemination of bacterial and fungal infections (eg, coccidioidomycosis), and non-Hodgkin lymphomas — tiered as: CD4 <500/mm³ — Candida albicans ORAL THRUSH (scrapable white plaque, pseudohyphae on microscopy); EBV ORAL HAIRY LEUKOPLAKIA (unscrapable white plaque on the lateral tongue); HHV-8 KAPOSI SARCOMA, localized cutaneous disease (perivascular spindle cells invading and forming vascular tumors); HPV SQUAMOUS CELL CARCINOMA at sites of sexual contact (most commonly anus, cervix, oropharynx); MYCOBACTERIUM TUBERCULOSIS reactivation. CD4 <200/mm³ — HISTOPLASMA CAPSULATUM (fever, weight loss, fatigue, cough, dyspnea, nausea, vomiting, diarrhea — oval yeast cells within macrophages); HIV ITSELF (dementia, HIV-associated nephropathy — cerebral atrophy on neuroimaging); JC VIRUS reactivation (progressive multifocal leukoencephalopathy — nonenhancing areas of demyelination on MRI); HHV-8 Kaposi disseminated (pulmonary, GI, lymphatic); PNEUMOCYSTIS JIROVECII pneumonia (ground-glass opacities on chest imaging). CD4 <100/mm³ — BARTONELLA spp (bacillary angiomatosis — multiple red to purple papules or nodules, biopsy with neutrophilic inflammation); CANDIDA ALBICANS esophagitis (white plaques on endoscopy, yeast and pseudohyphae on biopsy); CMV — Colitis, Retinitis, Esophagitis, Encephalitis, Pneumonitis (CREEP) with linear ulcers on endoscopy, cotton-wool spots on fundoscopy, and owl-eye intranuclear inclusions on biopsy; CRYPTOCOCCUS NEOFORMANS meningitis (encapsulated yeast on India ink stain or capsular antigen ⊕); CRYPTOSPORIDIUM spp (chronic, watery diarrhea — acid-fast oocysts in stool); EBV B-CELL LYMPHOMA (non-Hodgkin, CNS lymphoma — ring enhancing, may be solitary vs Toxoplasma); MYCOBACTERIUM AVIUM–INTRACELLULARE (nonspecific systemic symptoms or superficial lymphadenitis — most common if CD4 <50/mm³); TOXOPLASMA GONDII (brain abscesses — multiple ring-enhancing lesions on MRI).",
    why: "HIV is the retrovirus that anchors the entire immunocompromised-host chapter, and this block carries five exam institutions. The first is THE GENE-PART MAP: env = the envelope glycoproteins (gp120 docks CD4, gp41 fuses), gag = the structural pair (p24 capsid, p17 matrix), pol = the enzyme trio (RT, integrase, protease) — the map that every antiretroviral class (M38) targets. The second is THE CORECEPTOR SWITCH: CCR5 on macrophages in early infection, CXCR4 on T cells late — with the CCR5-mutation genetics (homozygous = immunity, heterozygous = slower course) that makes coreceptor biology testable. The third is THE DIAGNOSTIC LADDER: the 4th-generation combination assay (p24 + antibody) with its 2-week blind window, the differentiation immunoassay that confirms and types, the qualitative NAAT for antibody-negative viremia, the quantitative viral load for monitoring — and the two exclusions (no Western blot; no serology in babies). The fourth is THE AIDS DEFINITION: CD4 ≤200 or an AIDS-defining condition — the threshold that converts virology into surveillance. The fifth is THE CD4 LADDER: the three-tier opportunist map (below 500, below 200, below 100) with its ring-enhancing pair (Toxoplasma multiple vs EBV CNS lymphoma solitary), its scrapable-vs-unscrapable pair (thrush vs hairy leukoplakia), its CREEP set for CMV, and its India-ink and acid-fast anchors — the single most-tested table in opportunistic infection.",
    keyIdea: "Parts → entry → integration → diagnosis → the ladder. PARTS: gp120 docks CD4; gp41 fuses (forty-one = fusion); p17 matrix + p24 capsid (gag); RT + integrase + protease (pol); env from gp160 cleavage; 2 RNA molecules (diploid). ENTRY: CD4 + CCR5 (macrophage, EARLY) or CXCR4 (T cell, LATE); homozygous CCR5 mutation = IMMUNITY, heterozygous = slower. RT makes dsDNA; INTEGRASE inserts it (the provirus). DIAGNOSIS: 4th-gen Ag/Ab combo screen (p24 + IgG/IgM; may miss <2 weeks) → positive → HIV-1/2 DIFFERENTIATION immunoassay → indeterminate → HIV-1 NAT. NAAT = qualitative (antibody-negative viremia); viral load RT-PCR = quantitative (treatment response, transmissibility). Western blot: retired. Babies: viral load, not serology. AIDS = CD4 ≤200 (normal 500-1500) or an AIDS-defining condition (eg, PCP). LADDER: <500 — thrush (scrapable, pseudohyphae), hairy leukoplakia (UNSCRAPABLE, lateral tongue), localized Kaposi, HPV SCC (anus/cervix/oropharynx), TB reactivation. <200 — Histoplasma (oval yeasts IN macrophages), HIV dementia + nephropathy, JC PML (nonenhancing), disseminated Kaposi, PCP (ground-glass). <100 — Bartonella angiomatosis, Candida esophagitis, CMV CREEP (linear ulcers, cotton-wool, owl-eye), Crypto meningitis (India ink +), Cryptosporidium (acid-fast oocysts), EBV CNS lymphoma (SOLITARY ring-enhancing), MAC (<50), Toxoplasma (MULTIPLE ring-enhancing).",
  },
  mechanisms: [
    {
      id: "hiv-entry-integration-logic",
      title: "From docking to provirus: the entry and integration sequence",
      context: "gp120-CD4, the coreceptor switch, and the pol enzyme set",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "HIV arrives at a CD4+ cell — the envelope was built by budding from a host plasma membrane",
            sublabel: "Input — a diploid retrovirus carrying its own enzymes.",
            variant: "input",
          },
          {
            id: "s1",
            label: "DOCKING: gp120 (the env docking glycoprotein, cleaved from gp160 with gp41) attaches to the host CD4+ T cell — and to a CORECEPTOR: CCR5 on MACROPHAGES in early infection, CXCR4 on T CELLS in late infection. The genetics: HOMOZYGOUS CCR5 mutation = immunity; HETEROZYGOUS = slower course",
            sublabel: "Process — the coreceptor names the phase of infection.",
            variant: "process",
          },
          {
            id: "s2",
            label: "FUSION AND ENTRY: gp41 (forty-one — fusion and entry), the transmembrane glycoprotein, merges the lipid envelope with the host membrane and delivers the capsid",
            sublabel: "Process — gp120 finds the door; gp41 opens it.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE POL SEQUENCE: REVERSE TRANSCRIPTASE synthesizes dsDNA from the genomic RNA (2 molecules); INTEGRASE inserts the dsDNA into the host genome — the provirus; PROTEASE cleaves the polyproteins for maturation (gag's p24/p17, env's gp120/gp41 from gp160)",
            sublabel: "Process — each pol enzyme is one antiretroviral drug class (M38).",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the diagnostic reflection of the parts: the 4th-generation assay detects the p24 CAPSID antigen plus IgG/IgM antibody; viral load RT-PCR measures the genomic RNA; and integration explains why cure requires more than viral suppression",
            sublabel: "Output — the virion's parts become the assay's targets.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "gp120 docks CD4 + coreceptor" },
          { from: "s1", to: "s2", label: "gp41 fuses" },
          { from: "s2", to: "s3", label: "RT → integrase → protease" },
          { from: "s3", to: "o1", label: "parts become tests" },
        ],
      },
    },
    {
      id: "cd4-threshold-ladder",
      title: "The CD4 ladder: each threshold unlocks its own opportunist set",
      context: "The three tiers of HIV-associated disease",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "The CD4+ count falls below 500, then 200, then 100 cells/mm³",
            sublabel: "Input — the count is the question.",
            variant: "input",
          },
          {
            id: "s1",
            label: "BELOW 500 — the mucosal and reactivation tier: Candida ORAL THRUSH (scrapable, pseudohyphae) vs EBV ORAL HAIRY LEUKOPLAKIA (unscrapable, lateral tongue); HHV-8 KAPOSI localized; HPV SCC at sexual-contact sites; TB reactivation — the falling count first reactivates latent infections and disseminates fungi",
            sublabel: "Process — surface and reactivation disease first.",
            variant: "process",
          },
          {
            id: "s2",
            label: "BELOW 200 — the AIDS-defining tier: PNEUMOCYSTIS pneumonia (ground-glass opacities); HISTOPLASMA dissemination (oval yeasts within macrophages); JC virus PML (nonenhancing demyelination); HIV dementia and nephropathy; Kaposi disseminated — ≤200 alone defines AIDS",
            sublabel: "Process — the pneumocystis threshold.",
            variant: "process",
          },
          {
            id: "s3",
            label: "BELOW 100 — the deep-tissue tier: CMV CREEP (Colitis, Retinitis, Esophagitis, Encephalitis, Pneumonitis — linear ulcers, cotton-wool spots, owl-eye inclusions); CRYPTOCOCCUS meningitis (India ink, capsular antigen); TOXOPLASMA brain abscesses (MULTIPLE ring-enhancing) vs EBV CNS lymphoma (SOLITARY ring-enhancing); Cryptosporidium acid-fast oocysts; Bartonella angiomatosis; Candida esophagitis; MAC (most common below 50)",
            sublabel: "Process — the ring-enhancing pair and the CREEP set close the ladder.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the count predicts the pathogen: read the CD4 value first, then the imaging or stain (ground-glass = PCP; multiple ring-enhancing = Toxoplasma; solitary ring-enhancing = CNS lymphoma; owl-eye = CMV; India ink = Crypto; acid-fast oocysts = Cryptosporidium)",
            sublabel: "Output — the ladder converts a number into a differential.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "below 500" },
          { from: "s1", to: "s2", label: "below 200" },
          { from: "s2", to: "s3", label: "below 100" },
          { from: "s3", to: "o1", label: "count → pathogen" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "hiv-lifecycle-map",
      title: "The HIV map — virion, diagnosis, and the CD4 ladder",
      caption:
        "An original KYP redraw of the source's two-page block (books 172-173): the labeled virion diagram (gp120/gp41 spikes on the lipid envelope, p17 matrix, p24 capsid, the pol enzymes, the diploid RNA), the 3-gene strip, the entry-coreceptor logic, the diagnosis algorithm with the AIDS definition, and the three-tier CD4 ladder (18 pathogen rows).",
      notice:
        "Both source pages are PURE VECTOR — no rasters, no copyrighted photos; the virion diagram and the diagnosis algorithm are ORIGINAL KYP REDRAWS. FA's printed gloss (RIP “Pol”) is quoted in the gene strip for verification only. HIV therapy (the antiretroviral classes) is covered separately in M38 — hiv-therapy.",
    },
    {
      kind: "table",
      title: "The virion, genes, entry, and diagnosis — verbatim",
      intro: "The source's book-172 blocks, verbatim.",
      columns: ["Block", "Content (verbatim)"],
      rows: [
        [
          "Structure (book 172)",
          "Envelope proteins acquired through budding from host cell plasma membrane. p17: Matrix protein. gp120: Docking glycoprotein. Lipid envelope. gp41: Transmembrane glycoprotein. p24: Capsid protein. Reverse transcriptase. Diploid genome (2 molecules of RNA).",
        ],
        [
          "The 3 structural genes (protein coded for)",
          "Env (gp120 and gp41)—formed from cleavage of gp160 to form envelope glycoproteins. gp120—attachment to host CD4+ T cell. gp41 (forty-one)—fusion and entry. gag (p24 and p17)—capsid and matrix proteins, respectively. pol—Reverse transcriptase, Integrase, Protease; [FA gloss, printed: RIP “Pol” (Paul) — verification-only.]",
        ],
        [
          "Entry and integration",
          "Reverse transcriptase synthesizes dsDNA from genomic RNA; dsDNA integrates into host genome. Virus binds CD4 as well as a coreceptor, either CCR5 on macrophages (early infection) or CXCR4 on T cells (late infection). Homozygous CCR5 mutation = immunity. Heterozygous CCR5 mutation = slower course.",
        ],
        [
          "HIV diagnosis — the algorithm",
          "HIV-1/2 antibodies and p24 antigen combination immunoassay: negative for HIV-1 and HIV-2 antibodies and p24 Ag → negative. Positive → HIV-1/HIV-2 antibody differentiation immunoassay → HIV-1 infection, HIV-2 infection, or HIV-1 and HIV-2 infection; HIV-1 or HIV-2 indeterminate → HIV-1 NAT. [The printed algorithm's boxes: reactive test results, nonreactive test results, true positive tests, true negative tests.]",
        ],
        [
          "Diagnostic tests",
          "HIV-1/2 Ag/Ab immunoassays detect viral p24 antigen capsid protein and IgG and/or IgM to HIV-1/2. Use for diagnosis. Very high sensitivity/specificity, but may miss early HIV disease if tested within first 2 weeks of infection. A positive screening test is followed by a confirmatory HIV-1/2 differentiation immunoassay. HIV RNA tests detect elevated HIV RNA and can be qualitative or quantitative. NAAT is qualitative, and is a sensitive method to detect HIV viremia in antibodynegative patients. Viral load tests (RT-PCR) are quantitative and determine amount of viral RNA in the plasma. Use to monitor response to treatment and transmissibility. Western blot tests are no longer recommended by the CDC for confirmatory testing. HIV-1/2 Ag/Ab testing is not recommended in babies with suspected HIV due to maternally transferred antibody. Use HIV viral load instead.",
        ],
        [
          "AIDS diagnosis",
          "AIDS diagnosis: ≤200 CD4+ cells/mm3 (normal: 500-1500 cells/mm3) or HIV ⊕ with AIDS-defining condition (eg, Pneumocystis pneumonia).",
        ],
      ],
      caption:
        "The blocks read with the entry-integration mechanism: the parts map to the genes (env-gag-pol), the parts map to the assays (p24 to the 4th-gen screen, RNA to the viral load), and the CCR5/CXCR4 switch and its mutation genetics set the infection's tempo.",
    },
    {
      kind: "table",
      title: "The CD4 ladder — verbatim",
      intro: "The source's Common diseases of HIV-positive adults table (book 173), verbatim.",
      columns: ["CD4 tier · Pathogen", "Presentation · Findings (verbatim)"],
      rows: [
        [
          "CD4+ <500/mm³ — Candida albicans",
          "PRESENTATION: Oral thrush. FINDINGS: Scrapable white plaque, pseudohyphae on microscopy.",
        ],
        [
          "CD4+ <500/mm³ — EBV",
          "PRESENTATION: Oral hairy leukoplakia. FINDINGS: Unscrapable white plaque on lateral tongue.",
        ],
        [
          "CD4+ <500/mm³ — HHV-8",
          "PRESENTATION: Kaposi sarcoma, localized cutaneous disease. FINDINGS: Perivascular spindle cells invading and forming vascular tumors on histology.",
        ],
        [
          "CD4+ <500/mm³ — HPV",
          "PRESENTATION: Squamous cell carcinoma at site(s) of sexual contact (most commonly anus, cervix, oropharynx).",
        ],
        [
          "CD4+ <500/mm³ — Mycobacterium tuberculosis",
          "PRESENTATION: Increased risk of reactivation of latent TB infection.",
        ],
        [
          "CD4+ <200/mm³ — Histoplasma capsulatum",
          "PRESENTATION: Fever, weight loss, fatigue, cough, dyspnea, nausea, vomiting, diarrhea. FINDINGS: Oval yeast cells within macrophages.",
        ],
        [
          "CD4+ <200/mm³ — HIV",
          "PRESENTATION: Dementia, HIV-associated nephropathy. FINDINGS: Cerebral atrophy on neuroimaging.",
        ],
        [
          "CD4+ <200/mm³ — JC virus (reactivation)",
          "PRESENTATION: Progressive multifocal leukoencephalopathy. FINDINGS: Nonenhancing areas of demyelination on MRI.",
        ],
        [
          "CD4+ <200/mm³ — HHV-8 / Pneumocystis jirovecii",
          "HHV-8: Kaposi sarcoma, disseminated disease (pulmonary, GI, lymphatic). Pneumocystis: Pneumocystis pneumonia — “Ground-glass” opacities on chest imaging.",
        ],
        [
          "CD4+ <100/mm³ — Bartonella spp",
          "PRESENTATION: Bacillary angiomatosis. FINDINGS: Multiple red to purple papules or nodules; biopsy with neutrophilic inflammation.",
        ],
        [
          "CD4+ <100/mm³ — Candida albicans",
          "PRESENTATION: Esophagitis. FINDINGS: White plaques on endoscopy; yeast and pseudohyphae on biopsy.",
        ],
        [
          "CD4+ <100/mm³ — CMV",
          "PRESENTATION: Colitis, Retinitis, Esophagitis, Encephalitis, Pneumonitis (CREEP). FINDINGS: Linear ulcers on endoscopy, cotton-wool spots on fundoscopy; biopsy reveals cells with intranuclear (owl eye) inclusion bodies.",
        ],
        [
          "CD4+ <100/mm³ — Cryptococcus neoformans / Cryptosporidium spp",
          "Cryptococcus: Meningitis — encapsulated yeast on India ink stain or capsular antigen ⊕. Cryptosporidium: Chronic, watery diarrhea — acid-fast oocysts in stool.",
        ],
        [
          "CD4+ <100/mm³ — EBV / Mycobacterium avium–intracellulare / Toxoplasma gondii",
          "EBV: B-cell lymphoma (eg, non-Hodgkin lymphoma, CNS lymphoma) — CNS lymphoma ring enhancing, may be solitary (vs Toxoplasma). MAC (M avium complex): Nonspecific systemic symptoms (fever, night sweats, weight loss, diarrhea) or superficial lymphadenitis — most common if CD4+ <50/mm³. Toxoplasma: Brain abscesses — multiple ring-enhancing lesions on MRI.",
        ],
      ],
      caption:
        "The table reads with the CD4-ladder mechanism: the intro line (reactivation of past infections, dissemination of bacterial and fungal infections, non-Hodgkin lymphomas) explains the tiering; the scrapable/unscrapable pair, the ring-enhancing pair, and the CREEP set are the within-tier discriminators.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the map implies",
      body: "THE SCREENING PROTOCOL: 4th-generation combination immunoassay (p24 antigen + HIV-1/2 IgG/IgM) — very high sensitivity and specificity, but may miss the FIRST 2 WEEKS; a positive screen goes to the HIV-1/2 DIFFERENTIATION immunoassay; indeterminate goes to HIV-1 NAT. THE MONITORING PROTOCOL: viral load (quantitative RT-PCR) for treatment response and transmissibility; NAAT (qualitative) for viremia in the antibody-negative window. THE EXCLUSIONS: Western blot is retired; in babies, use VIRAL LOAD (maternal antibody confounds serology). THE AIDS THRESHOLD: CD4 ≤200/mm³ (normal 500-1500) or an AIDS-defining condition such as Pneumocystis pneumonia. THE PLAQUE PROTOCOL: scrapable white plaque = Candida thrush; unscrapable lateral-tongue plaque = EBV hairy leukoplakia. THE IMAGING PROTOCOL: ground-glass opacities = PCP; MULTIPLE ring-enhancing brain lesions = Toxoplasma; SOLITARY ring-enhancing = EBV CNS lymphoma; nonenhancing white matter = JC PML; cerebral atrophy = HIV dementia. THE STAIN PROTOCOL: owl-eye intranuclear inclusions = CMV (CREEP: Colitis, Retinitis, Esophagitis, Encephalitis, Pneumonitis); India ink / capsular antigen = Cryptococcus; acid-fast oocysts = Cryptosporidium; oval yeasts inside macrophages = Histoplasma; perivascular spindle cells = Kaposi. THE CORECEPTOR PROTOCOL: early infection uses CCR5 (macrophages), late uses CXCR4 (T cells); homozygous CCR5 mutation = immunity, heterozygous = slower course.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 38-year-old with untreated HIV presents with subacute dyspnea and a dry cough; CD4 count is 90/mm³; chest x-ray shows bilateral hazy infiltrates and CT shows ground-glass opacities.",
        discriminator: "CD4 <200 + ground-glass opacities + dry cough",
        concept: "Pneumocystis pneumonia — the below-200 anchor",
        answer:
          "Pneumocystis jirovecii pneumonia presents with dyspnea and cough at CD4 <200/mm³, with “ground-glass” opacities on chest imaging. Pneumocystis pneumonia is the printed example of an AIDS-defining condition — the AIDS diagnosis is ≤200 CD4+ cells/mm³ (normal 500-1500) or HIV ⊕ with such a condition.",
      },
      {
        stem: "A patient with HIV (CD4 60/mm³) develops headache and fever over 2 weeks; CSF shows lymphocytic pleocytosis with an opening pressure of 30 cm H₂O; India ink prep reveals encapsulated budding yeasts.",
        discriminator: "CD4 <100 + meningitis + India ink positivity",
        concept: "Cryptococcus neoformans meningitis",
        answer:
          "Cryptococcus neoformans meningitis occupies the CD4 <100/mm³ tier of the ladder: encapsulated yeast on India ink stain or capsular antigen ⊕ confirms. The same tier holds CMV CREEP, Bartonella angiomatosis, Candida esophagitis, Cryptosporidium acid-fast oocysts, EBV CNS lymphoma (solitary ring-enhancing), MAC (most common below 50), and Toxoplasma (multiple ring-enhancing).",
      },
      {
        stem: "A lab worker's 4th-generation HIV-1/2 combination immunoassay returns positive; the HIV-1/HIV-2 differentiation immunoassay returns indeterminate; an HIV-1 NAT is positive.",
        discriminator: "Positive screen → indeterminate differentiation → positive NAT",
        concept: "The HIV diagnostic algorithm",
        answer:
          "The algorithm: the HIV-1/2 antibodies + p24 antigen combination immunoassay screens (very high sensitivity/specificity; may miss the first 2 weeks); a positive screen is followed by the confirmatory HIV-1/HIV-2 antibody DIFFERENTIATION immunoassay; indeterminate results resolve with the HIV-1 NAT — the qualitative nucleic acid test that detects viremia in antibody-negative or indeterminate patients.",
      },
    ],
    traps: [
      {
        a: "A negative 4th-generation assay 10 days after a high-risk exposure excludes HIV",
        b: "The combination immunoassay MAY MISS early HIV disease tested within the FIRST 2 WEEKS of infection — acute infection may require the qualitative NAAT",
        whyConfused: "The 4th-gen assay is advertised as very high sensitivity/specificity.",
        keyDifference:
          "Sensitivity is high once p24 antigen and antibody are produced — but the first ~2 weeks can be blank. The NAAT (qualitative RNA test) is the sensitive method to detect HIV viremia in antibody-negative patients; the viral load (quantitative RT-PCR) monitors treatment and transmissibility.",
        clue: "Any early-exposure testing question.",
      },
      {
        a: "A Western blot confirms a positive HIV screen",
        b: "Western blot tests are NO LONGER RECOMMENDED by the CDC for confirmatory testing — the confirmatory test is now the HIV-1/2 antibody DIFFERENTIATION immunoassay",
        whyConfused: "Western blot was the classic confirmatory test for decades.",
        keyDifference:
          "The modern algorithm replaces the blot with the differentiation immunoassay, which also TYPES the infection (HIV-1, HIV-2, or both) and routes indeterminates to the HIV-1 NAT. Questions still bait the blot — the answer is the differentiation assay.",
        clue: "Any confirmatory-testing question.",
      },
      {
        a: "A single ring-enhancing brain lesion in AIDS is Toxoplasma until proven otherwise",
        b: "TOXOPLASMA lesions are MULTIPLE ring-enhancing; a SOLITARY ring-enhancing lesion suggests EBV-associated CNS LYMPHOMA",
        whyConfused: "Both are ring-enhancing mass lesions in the AIDS brain.",
        keyDifference:
          "The ring-enhancing pair is the ladder's most-tested imaging line: Toxoplasma gondii gives multiple ring-enhancing brain abscesses (CD4 <100), while EBV B-cell lymphoma's CNS lesions are ring enhancing and MAY BE SOLITARY. Add JC PML (nonenhancing demyelination) and HIV dementia (cerebral atrophy) to complete the AIDS neuroimaging set.",
        clue: "Any AIDS brain-imaging stem.",
      },
    ],
    pivots: [
      {
        lookAlike: "Oral thrush vs oral hairy leukoplakia (the plaque pair)",
        differentiator: "Scrapable vs unscrapable, and the surface",
        correctPath:
          "CANDIDA ALBICANS oral thrush: SCRAPABLE white plaque with pseudohyphae on microscopy (CD4 <500). EBV oral hairy leukoplakia: UNSCRAPABLE white plaque on the LATERAL TONGUE (CD4 <500). One is fungal and treatable; the other is EBV-driven epithelial disease.",
      },
      {
        lookAlike: "The two AIDS ring-enhancing brain lesions",
        differentiator: "Multiple vs solitary",
        correctPath:
          "TOXOPLASMA GONDII (CD4 <100): brain abscesses — MULTIPLE ring-enhancing lesions on MRI. EBV CNS LYMPHOMA (CD4 <100): ring enhancing, MAY BE SOLITARY. Both are contrast-enhancing masses; the count of lesions is the discriminator (and biopsy or empiric therapy sorts the rest).",
      },
    ],
    miniCase: {
      vignette:
        "A 42-year-old man with recently diagnosed HIV (untreated) presents with 3 weeks of progressive dyspnea, a nonproductive cough, and low-grade fever. He has lost 8 lb. Examination shows tachypnea and diffuse crackles; there is no oral candidiasis today, but he recalls treatment for thrush 4 months ago. CD4+ count is 110/mm³. Chest CT shows bilateral ground-glass opacities without lymphadenopathy. Oxygen saturation drops to 88% on ambulation.",
      question:
        "Which diagnosis does this presentation most likely represent, and what does it signify about disease staging?",
      options: [
        {
          label: "A",
          text: "Pneumocystis pneumonia — an AIDS-defining condition, with the CD4 count below 200",
          correct: true,
          why: "Correct. Pneumocystis jirovecii pneumonia presents at CD4 <200/mm³ with subacute dyspnea, dry cough, fever, weight loss, and exercise-induced desaturation, with “ground-glass” opacities on chest imaging. It is the printed example of an AIDS-DEFINING condition: AIDS is diagnosed at ≤200 CD4+ cells/mm³ (normal 500-1500) OR HIV ⊕ with such a condition — this patient meets both criteria.",
        },
        {
          label: "B",
          text: "Kaposi sarcoma, disseminated pulmonary disease",
          why: "Disseminated (pulmonary, GI, lymphatic) Kaposi is a HHV-8 disease of the <200 tier, but it presents with cutaneous violaceous lesions and pulmonary involvement on imaging — not symmetric ground-glass opacities with a dry cough. Localized Kaposi sits in the <500 tier.",
        },
        {
          label: "C",
          text: "CMV pneumonitis — the P of the CREEP set",
          why: "CMV pneumonitis is a CD4 <100 disease and part of CREEP (Colitis, Retinitis, Esophagitis, Encephalitis, Pneumonitis), but it typically coexists with other CMV end-organ disease and biopsy owl-eye inclusions — and the classic ground-glass dry-cough presentation at this count belongs to Pneumocystis.",
        },
        {
          label: "D",
          text: "Histoplasma capsulatum disseminated infection",
          why: "Histoplasmosis is a <200-tier disease with fever, weight loss, cough, and diarrhea — but its finding is oval yeast cells WITHIN MACROPHAGES, and the imaging pattern is not the symmetric ground-glass of Pneumocystis.",
        },
        {
          label: "E",
          text: "Mycobacterium avium–intracellulare infection",
          why: "MAC is most common when CD4 <50/mm³ and presents with nonspecific systemic symptoms (fever, night sweats, weight loss, diarrhea) or superficial lymphadenitis — not an acute hypoxic pulmonary syndrome with ground-glass opacities.",
        },
      ],
      reasoning:
        "The vignette stacks the Pneumocystis identifiers: the untreated HIV host, the prior thrush (a <500-tier herald), the CD4 of 110/mm³ (below the 200 threshold), the subacute dry cough with exertional desaturation, and the bilateral ground-glass opacities. The question also tests the AIDS definition — the count below 200 plus an AIDS-defining condition. Each distractor borrows another ladder tier's disease with the wrong finding set.",
    },
  },
  mnemonics: [
    {
      code: "“Env knocks, gag holds, pol copies.”",
      meaning:
        "KYP's key for the gene map: ENV builds the envelope glycoproteins (gp120 docks CD4, gp41 fuses — both cleaved from gp160); GAG builds the structure (p24 capsid, p17 matrix); POL builds the enzymes (Reverse transcriptase, Integrase, Protease). The diploid genome is 2 RNA molecules; RT makes dsDNA, and integrase plants the provirus.",
      memorizes: "The 3 structural genes and their proteins",
      whenToUse: "Any HIV structure or drug-target question.",
      clinical: "Each gene product is one antiretroviral class's target (M38).",
    },
    {
      code: "“Early R5 rides the macrophage; late X4 attacks the T cell — and no R5 at all means no HIV at all.”",
      meaning:
        "KYP's key for the coreceptor switch: CCR5 on MACROPHAGES serves EARLY infection; CXCR4 on T CELLS serves LATE infection. HOMOZYGOUS CCR5 mutation = immunity (the door HIV cannot open); HETEROZYGOUS = slower course.",
      memorizes: "The coreceptor logic",
      whenToUse: "Any HIV entry, tropism, or CCR5-question.",
      clinical: "Coreceptor blockers exist precisely because entry requires the second key.",
    },
    {
      code: "“Read the count, then the scan.”",
      meaning:
        "KYP's key for the ladder: below 500 — scrapable thrush, unscrapable hairy leukoplakia, localized Kaposi, HPV SCC, TB reactivation. Below 200 — PCP with GROUND-GLASS, Histoplasma oval yeasts in macrophages, JC PML nonenhancing, HIV dementia with atrophy, disseminated Kaposi. Below 100 — CMV CREEP with owl eyes, Crypto meningitis on India ink, Cryptosporidium acid-fast oocysts, Bartonella angiomatosis, Candida esophagitis, MAC below 50; and the ring-enhancing pair: Toxoplasma MULTIPLE vs EBV CNS lymphoma SOLITARY.",
      memorizes: "The CD4 opportunist ladder",
      whenToUse: "Any HIV complication stem.",
      clinical: "The count predicts the pathogen; the scan or stain confirms it.",
    },
  ],
  rapidReview: {
    s30: [
      "gp120 docks CD4; gp41 (forty-one) fuses; p17 matrix + p24 capsid (gag); RT + integrase + protease (pol); env from gp160 cleavage; diploid 2-RNA genome",
      "Coreceptors: CCR5 on macrophages (early) · CXCR4 on T cells (late); homozygous CCR5 mutation = immunity, heterozygous = slower",
      "RT makes dsDNA from RNA; integrase plants the provirus in the host genome",
      "AIDS = CD4 ≤200/mm³ (normal 500-1500) or HIV ⊕ with an AIDS-defining condition (eg, Pneumocystis pneumonia)",
      "4th-gen screen = p24 antigen + HIV-1/2 IgG/IgM; confirm with the HIV-1/2 DIFFERENTIATION immunoassay; Western blot retired",
    ],
    m3: [
      "The 4th-gen assay may miss the first 2 weeks; NAAT (qualitative) covers the antibody-negative window; viral load (RT-PCR, quantitative) monitors treatment + transmissibility",
      "Babies: no Ag/Ab serology (maternal antibody) — use HIV VIRAL LOAD",
      "<500 tier: thrush (scrapable) vs hairy leukoplakia (unscrapable, lateral tongue); localized Kaposi; HPV SCC; TB reactivation",
      "<200 tier: PCP (ground-glass); Histoplasma (oval yeasts IN macrophages); JC PML (nonenhancing); HIV dementia/nephropathy; disseminated Kaposi",
      "<100 tier: CMV CREEP; Crypto meningitis (India ink ⊕); Cryptosporidium (acid-fast oocysts); Bartonella angiomatosis; Candida esophagitis; EBV CNS lymphoma; MAC (<50); Toxoplasma",
    ],
    m10: [
      "CREEP = CMV Colitis, Retinitis, Esophagitis, Encephalitis, Pneumonitis — linear ulcers, cotton-wool spots, owl-eye inclusions",
      "The ring-enhancing pair: Toxoplasma MULTIPLE vs EBV CNS lymphoma may be SOLITARY",
      "Kaposi spans two tiers: localized cutaneous <500, disseminated (pulmonary, GI, lymphatic) <200",
      "Both pages pure vector — the virion diagram and the algorithm are original redraws; FA's RIP Pol gloss is verification-only",
      "HIV therapy (NRTIs through integrase inhibitors) is M38 — this note covers virology, diagnostics, and the ladder",
    ],
  },
  recall: [
    {
      q: "Name the HIV structural parts and the gene that codes each.",
      a: "ENV: gp120 (docking — attachment to the host CD4+ T cell) and gp41 (forty-one — fusion and entry), both formed from cleavage of gp160; the lipid envelope is acquired by budding from the host plasma membrane. GAG: p24 (capsid) and p17 (matrix). POL: reverse transcriptase, integrase, protease. The genome is diploid — 2 molecules of RNA.",
    },
    {
      q: "Walk the HIV diagnostic algorithm from screen to confirmation, with the pediatric exception.",
      a: "SCREEN: the HIV-1/2 antibodies + p24 antigen combination immunoassay — detects the p24 capsid antigen and IgG/IgM to HIV-1/2; very high sensitivity/specificity but may miss the FIRST 2 WEEKS. POSITIVE SCREEN → the confirmatory HIV-1/HIV-2 antibody DIFFERENTIATION immunoassay (types: HIV-1, HIV-2, or both). INDETERMINATE → HIV-1 NAT. RNA TESTS: NAAT qualitative (antibody-negative viremia); viral load RT-PCR quantitative (treatment response, transmissibility). Western blot: no longer recommended. BABIES: no Ag/Ab serology (maternal antibody) — use viral load.",
    },
    {
      q: "Give the three CD4 tiers with two anchors each.",
      a: "BELOW 500: Candida oral thrush (scrapable, pseudohyphae) and EBV oral hairy leukoplakia (unscrapable, lateral tongue) — with localized Kaposi, HPV SCC, and TB reactivation. BELOW 200: Pneumocystis pneumonia (ground-glass opacities) and JC virus PML (nonenhancing demyelination) — with Histoplasma (oval yeasts in macrophages), HIV dementia/nephropathy, and disseminated Kaposi. BELOW 100: CMV CREEP (owl-eye inclusions, cotton-wool spots) and Cryptococcus meningitis (India ink, capsular antigen ⊕) — with Toxoplasma (multiple ring-enhancing), EBV CNS lymphoma (solitary ring-enhancing), Cryptosporidium (acid-fast oocysts), Bartonella angiomatosis, Candida esophagitis, and MAC (most common below 50).",
    },
    {
      q: "Explain the CCR5 findings: early vs late coreceptors and the mutation genetics.",
      a: "HIV binds CD4 plus a coreceptor: CCR5 on macrophages in EARLY infection, CXCR4 on T cells in LATE infection. HOMOZYGOUS CCR5 mutation = immunity (the virus cannot enter macrophage-tropic strains); HETEROZYGOUS CCR5 mutation = a slower disease course.",
    },
    {
      q: "State the AIDS definition and the significance of a CD4 count of 110 with ground-glass opacities.",
      a: "AIDS is diagnosed at ≤200 CD4+ cells/mm³ (normal 500-1500) OR HIV ⊕ with an AIDS-defining condition (eg, Pneumocystis pneumonia). A count of 110 with ground-glass opacities and a dry cough is Pneumocystis pneumonia — which is itself an AIDS-defining condition, so the patient meets AIDS criteria twice over (count and condition).",
    },
  ],
  related: [
    {
      title: "RNA Viruses: Families & Disease Map",
      topicId: "rna-viruses",
      note: "M24's retrovirus row (reverse transcriptase; HTLV, HIV) and its receptors entry (HIV — CD4, CXCR4, CCR5) are the family and receptor foundations this note builds the full HIV map on.",
    },
    {
      title: "DNA Viruses: Families & Disease Map",
      topicId: "dna-viruses",
      note: "M23's herpes roster supplies this note's HIV-tier opportunists: EBV (hairy leukoplakia, CNS lymphoma), CMV (CREEP), and HHV-8 (Kaposi sarcoma) — the DNA viruses of the immunocompromised host.",
    },
    {
      title: "Immunodeficiency Infection Patterns",
      topicId: "immunodeficiency-infection-patterns",
      note: "E38's deficiency-pathogen matrix (the T-cell column) is the immunology-side mirror of this note's CD4 ladder — the same opportunists organized by immune layer rather than count.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology (CD4+ T-Cell Collapse)",
      connection:
        "The CD4 ladder is applied immunology: the falling T-cell count reactivates latent infections (TB, HSV, shingles, JC), disseminates fungi, and unmasks malignancy (EBV lymphoma, HHV-8 Kaposi, HPV SCC) — E38's T-cell column made clinical.",
    },
    {
      subject: "Pharmacology (Antiretroviral Therapy)",
      connection:
        "Every pol-gene enzyme is a drug class — nucleoside and non-nucleoside RT inhibitors, integrase inhibitors, protease inhibitors — plus entry/fusion blockers aimed at gp120/gp41 and CCR5; the full therapy map is M38.",
    },
    {
      subject: "Neurology (The AIDS Brain)",
      connection:
        "The four AIDS neuroimaging patterns — Toxoplasma multiple ring-enhancing, EBV CNS lymphoma solitary ring-enhancing, JC PML nonenhancing white matter, and HIV dementia with atrophy — anchor the immunocompromised neuro differential.",
    },
    {
      subject: "Ophthalmology (Retinal Disease in Immunocompromise)",
      connection:
        "CMV retinitis — cotton-wool spots and hemorrhage, the R of CREEP, the 'sightomegalovirus' of M23 — is the AIDS-defining retinal disease; fundoscopy findings route directly to the CD4 <100 tier.",
    },
  ],
};
