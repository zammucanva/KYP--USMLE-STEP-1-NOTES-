import type { KypUsMLENote } from "../types";

// Immunology — Immune Responses (E-batch 37).
// Source: First Aid 2026, Part 1 pdf 136-137 / book 114-115
// (Immunodeficiencies (continued): T-cell disorders; B- and T-cell disorders;
//  Phagocyte dysfunction)

export const tCellPhagocyteImmunodeficiencies: KypUsMLENote = {
  id: "t-cell-phagocyte-immunodeficiencies",
  title: "T-Cell, Combined & Phagocyte Immunodeficiencies",
  subtitle:
    "The rest of the deficiency map: eleven diseases across three failing layers. T-CELL ONLY: thymic aplasia (DiGeorge — 22q11 deletion, absent thymus and parathyroids, conotruncal defects, cleft palate, hypocalcemic tetany, low T cells with absent thymic shadow); IL-12 receptor deficiency (low Th1, disseminated mycobacterial and fungal infections, the most common cause of Mendelian susceptibility to mycobacterial diseases); autosomal dominant hyper-IgE (Job) syndrome (STAT3 → Th17 deficiency → poor neutrophil recruitment — cold staphylococcal abscesses, coarse facies, retained baby teeth, eczema, fractures, high IgE and eosinophils); chronic mucocutaneous candidiasis (T-cell dysfunction against Candida, classic form from AIRE defects). COMBINED (B + T): severe combined immunodeficiency (IL-2R γ chain most common/X-linked, ADA deficiency, RAG VDJ defect — failure to thrive, chronic diarrhea, thrush, recurrent viral-bacterial-fungal-protozoal infections, low TRECs on newborn screening, absent thymic shadow/germinal centers/T cells); ataxia-telangiectasia (ATM → DNA damage undetected — ataxia, telangiectasias, IgA deficiency, radiation sensitivity, high AFP and IgM, lymphoma/leukemia risk); hyper-IgM syndrome (CD40L defect → class switching fails — normal or high IgM with very low IgG/IgA/IgE, no germinal centers, pyogenic plus opportunistic infections); Wiskott-Aldrich syndrome (WAS → actin cytoskeleton fails — thrombocytopenia, eczema, recurrent pyogenic infections, fewer and smaller platelets). PHAGOCYTE: leukocyte adhesion deficiency type 1 (LFA-1/CD18 → migration fails — late cord separation, ABSENT pus, neutrophilia in blood with no neutrophils at sites); Chédiak-Higashi syndrome (LYST → phagosome-lysosome fusion fails — partial albinism, neurodegeneration, neuropathy, lymphohistiocytosis, GIANT GRANULES, pancytopenia); chronic granulomatous disease (NADPH oxidase → the burst fails — catalase-positive organisms, granulomas, abnormal dihydrorhodamine test).",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immune Responses",
  pilotCategory: "Immune Responses — T-cell disorders (DiGeorge, IL-12R, Job/STAT3, chronic mucocutaneous candidiasis), combined disorders (SCID, ataxia-telangiectasia, hyper-IgM, Wiskott-Aldrich), phagocyte dysfunction (LAD-1, Chédiak-Higashi, CGD) with defects, presentations, findings, and newborn screening",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 114–115 (Immunodeficiencies: T-cell disorders; B- and T-cell disorders; Phagocyte dysfunction)",
  tags: [
    "immunodeficiency",
    "T-cell disorders",
    "thymic aplasia",
    "DiGeorge syndrome",
    "velocardiofacial syndrome",
    "22q11 deletion",
    "pharyngeal pouches",
    "conotruncal defects",
    "tetralogy of Fallot",
    "truncus arteriosus",
    "hypocalcemia",
    "tetany",
    "absent thymic shadow",
    "IL-12 receptor deficiency",
    "Mendelian susceptibility to mycobacterial diseases",
    "MSMD",
    "hyper-IgE syndrome",
    "Job syndrome",
    "STAT3",
    "Th17 cells",
    "cold abscesses",
    "coarse facies",
    "retained baby teeth",
    "chronic mucocutaneous candidiasis",
    "AIRE",
    "severe combined immunodeficiency",
    "SCID",
    "IL-2 receptor gamma chain",
    "adenosine deaminase deficiency",
    "RAG mutation",
    "VDJ recombination",
    "TRECs",
    "T-cell receptor excision circles",
    "newborn screening",
    "failure to thrive",
    "thrush",
    "ataxia-telangiectasia",
    "ATM gene",
    "DNA damage repair",
    "radiation sensitivity",
    "AFP",
    "hyper-IgM syndrome",
    "CD40L",
    "class switching defect",
    "Pneumocystis",
    "Cryptosporidium",
    "Wiskott-Aldrich syndrome",
    "WAS gene",
    "actin cytoskeleton",
    "thrombocytopenia",
    "eczema",
    "leukocyte adhesion deficiency",
    "LAD-1",
    "LFA-1",
    "CD18",
    "integrin",
    "late cord separation",
    "absent pus",
    "Chediak-Higashi syndrome",
    "LYST",
    "lysosomal trafficking",
    "giant granules",
    "partial albinism",
    "lymphohistiocytosis",
    "chronic granulomatous disease",
    "NADPH oxidase",
    "dihydrorhodamine test",
    "nitroblue tetrazolium",
  ],
  core: {
    what: "T-CELL DISORDERS. Thymic aplasia (DiGeorge syndrome): 22q11 microdeletion with failure to develop the 3rd and 4th pharyngeal pouches → absent thymus and parathyroids; velocardiofacial syndrome is the same deletion with palate, facial, and cardiac defects; presentation includes conotruncal abnormalities (tetralogy of Fallot, truncus arteriosus), abnormal facies, thymic hypoplasia → T-cell deficiency with recurrent viral/fungal infections, cleft palate, and hypocalcemia from parathyroid aplasia causing tetany; findings are low T cells, low PTH, low calcium, and an absent thymic shadow on CXR. IL-12 receptor deficiency: low Th1 response, autosomal recessive; disseminated mycobacterial and fungal infections, possibly after BCG administration; low IFN-γ; the most common cause of Mendelian susceptibility to mycobacterial diseases (MSMD). Autosomal dominant hyper-IgE (Job) syndrome: deficiency of Th17 cells due to STAT3 mutation → impaired neutrophil recruitment; cold (noninflamed) staphylococcal abscesses, retained baby teeth, coarse facies, dermatologic problems (eczema), high IgE, and bone fractures from minor trauma; findings include high IgE and eosinophils. Chronic mucocutaneous candidiasis: T-cell dysfunction with impaired cell-mediated immunity against Candida species; the classic form is caused by AIRE defects; persistent noninvasive Candida albicans infections of skin and mucous membranes with absent T-cell proliferation and absent cutaneous reaction to Candida antigens. B- AND T-CELL DISORDERS. Severe combined immunodeficiency: several types including defective IL-2R γ chain (most common, X-linked recessive), adenosine deaminase deficiency (autosomal recessive), and RAG mutation → VDJ recombination defect; failure to thrive, chronic diarrhea, thrush, and recurrent viral, bacterial, fungal, and protozoal infections; low T-cell receptor excision circles (TRECs) form part of newborn SCID screening; absence of the thymic shadow, of germinal centers, and of T cells. Ataxia-telangiectasia: ATM gene defects → failure to detect DNA damage → failure to halt cell-cycle progression → accumulating mutations (autosomal recessive); triad of cerebellar defects (ataxia), spider angiomas (ocular and facial telangiectasias), and IgA deficiency with increased sensitivity to radiation (limit x-ray exposure); high AFP and IgM, low IgA/IgG/IgE, lymphopenia, cerebellar atrophy, and increased lymphoma/leukemia risk. Hyper-IgM syndrome: most commonly defective CD40L on Th cells → class switching defect, X-linked recessive; severe pyogenic infections early in life with opportunistic Pneumocystis, Cryptosporidium, and CMV; normal or elevated IgM with very low IgG, IgA, and IgE, and failure to make germinal centers. Wiskott-Aldrich syndrome: WAS mutation — leukocytes and platelets unable to reorganize the actin cytoskeleton → defective antigen presentation (X-linked recessive); thrombocytopenia, eczema, recurrent pyogenic infections, with increased autoimmune disease and malignancy risk; low-to-normal IgG and IgM, elevated IgE and IgA, and fewer, smaller platelets. PHAGOCYTE DYSFUNCTION. Leukocyte adhesion deficiency (type 1): autosomal recessive defect in the LFA-1 integrin (CD18) protein on phagocytes → impaired migration and chemotaxis by C5a, IL-8, and leukotriene B4; late separation (>30 days) of the umbilical cord, absent pus, dysfunctional neutrophils with recurrent skin and mucosal bacterial infections; high blood neutrophils with absence at infection sites and impaired wound healing. Chédiak-Higashi syndrome: defect in the lysosomal trafficking regulator gene (LYST) with microtubule dysfunction in phagosome-lysosome fusion (autosomal recessive); progressive neurodegeneration, lymphohistiocytosis, partial albinism, recurrent pyogenic infections, and peripheral neuropathy; giant granules in granulocytes and platelets, pancytopenia, and mild coagulation defects. Chronic granulomatous disease: defect of NADPH oxidase → decreased reactive oxygen species and respiratory burst in neutrophils (X-linked form most common); increased susceptibility to catalase-positive organisms, recurrent infections, and granulomas; abnormal dihydrorhodamine (flow cytometry) test with decreased green fluorescence, and the (obsolete) nitroblue tetrazolium dye reduction test failing to turn blue.",
    why: "This is the exam's deficiency master-table — every vignette about a child with unusual infections resolves here, and the discriminating variables are WHICH layer failed (predicted by the organism pattern of E38), the inheritance pattern, and one signature finding per disease. The layer logic: T-cell failure opens the door to viral, fungal, and opportunistic infection (DiGeorge's thymic absence); combined failure opens every door (SCID's failure to thrive, diarrhea, thrush, and everything-recurrent); phagocyte failure splits into delivery (LAD — neutrophils that cannot arrive: absent pus, late cord, neutrophilia without pus) versus killing (CGD — neutrophils that arrive but cannot detonate: catalase-positive organisms and granulomas) versus fusion (Chédiak-Higashi — giant granules that cannot merge their cargo). The signature findings are one-per-disease exam currency: absent thymic shadow (DiGeorge), low TRECs on newborn screening (SCID), high AFP with ataxia and radiation sensitivity (ataxia-telangiectasia), high IgM with low everything-else (hyper-IgM), small platelets with eczema (WAS), absent pus with late cord (LAD), giant granules with albinism (Chédiak-Higashi), and the failed burst test (CGD). The genetics concentrate the X-linked cluster (SCID IL-2Rγ, hyper-IgM CD40L, WAS, CGD) — a pedigree in the stem points into this set.",
    keyIdea: "Three zones, eleven diseases, one signature each. ZONE 1 — T-CELL: DiGeorge (22q11, absent 3rd/4th pouch structures: thymus + parathyroids; conotruncal + cleft + tetany; ↓T/PTH/Ca, absent thymic shadow — B cells NORMAL); IL-12R deficiency (AR, ↓Th1, disseminated mycobacteria/fungi post-BCG, ↓IFN-γ, the MSMD archetype); Job/STAT3 (AD, Th17 ↓ → neutrophil recruitment fails: COLD staph abscesses, coarse facies, retained baby teeth, eczema, fractures; ↑IgE + eosinophils); chronic mucocutaneous candidiasis (T-cell dysfunction vs Candida; classic = AIRE). ZONE 2 — COMBINED: SCID (IL-2Rγ XLR most common; ADA AR; RAG VDJ; failure to thrive + diarrhea + thrush + everything-recurrent; ↓TRECs newborn screen; absent thymic shadow, germinal centers, T cells); ataxia-telangiectasia (ATM, AR: DNA damage unmet — ataxia, telangiectasias, IgA deficiency, radiation sensitivity; ↑AFP/IgM, ↓IgA/IgG/IgE, lymphoma/leukemia); hyper-IgM (CD40L XLR: switching fails — normal/↑IgM, ↓↓IgG/IgA/IgE, no germinal centers; Pneumocystis/Cryptosporidium/CMV); Wiskott-Aldrich (WAS XLR: actin fails — thrombocytopenia (FEWER, SMALLER platelets), eczema, recurrent pyogenic; ↑IgE/IgA). ZONE 3 — PHAGOCYTE: LAD-1 (LFA-1/CD18 AR: delivery fails — late cord >30 days, ABSENT pus, blood neutrophilia with nothing at sites); Chédiak-Higashi (LYST AR: fusion fails — partial albinism, neurodegeneration/neuropathy, lymphohistiocytosis, GIANT GRANULES, pancytopenia); CGD (NADPH oxidase XLR: the burst fails — catalase-POSITIVE organisms, granulomas, abnormal DHR/NBT).",
  },
  mechanisms: [
    {
      id: "deficiency-layer-map",
      title: "Which layer failed — the infection pattern names the zone",
      context: "Reading deficiency vignettes by failed layer",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A child presents with unusual or recurrent infections",
            sublabel: "Input — the ORGANISM PATTERN and the physical signature name the failed layer before any test.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Viral, fungal, and opportunistic infections (thrush, Pneumocystis) → T-cell zone: DiGeorge (with tetany and conotruncal defects), IL-12R (mycobacteria post-BCG), Job (cold abscesses, ↑IgE), candidiasis (AIRE)",
            sublabel: "Process — cellular immunity is the antiviral/antifungal arm; its absence reads as opportunists.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Everything recurrent — viral + bacterial + fungal + protozoal, with failure to thrive, chronic diarrhea, and thrush → combined zone: SCID (↓TRECs), ataxia-telangiectasia (ATM), hyper-IgM (CD40L), WAS (platelets + eczema)",
            sublabel: "Process — both adaptive arms failing opens every door; the distinguishing features are the companions (ataxia/telangiectasias; IgM pattern; small platelets).",
            variant: "process",
          },
          {
            id: "s3",
            label: "Bacterial infections with a delivery or killing signature → phagocyte zone: LAD-1 (absent pus, late cord — DELIVERY fails), Chédiak-Higashi (giant granules, albinism — FUSION fails), CGD (catalase-positive organisms, granulomas — the BURST fails)",
            sublabel: "Process — phagocyte disease splits by the step that fails: arrive, fuse, or detonate.",
            variant: "process",
          },
          {
            id: "o1",
            label: "The named disease, its genetics (the X-linked cluster: IL-2Rγ, CD40L, WAS, CGD), and its management — from TREC-based newborn SCID screening to hematopoietic stem cell transplantation",
            sublabel: "Output — layer → disease → inheritance → signature finding → management is the full exam chain.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "opportunist pattern" },
          { from: "s1", to: "s2", label: "one arm vs both" },
          { from: "s2", to: "s3", label: "delivery signature" },
          { from: "s3", to: "o1", label: "disease named" },
        ],
        caption:
          "The master move on deficiency vignettes is layer triage. A child with THRUSH, viral infections, or Pneumocystis has a T-cell problem — and the companions pick the disease within the zone: tetany with conotruncal heart disease says DiGeorge (the 22q11 deletion that took the thymus and parathyroids with it); disseminated mycobacteria after BCG says IL-12 receptor (the Th1/IFN-γ axis); cold staphylococcal abscesses with coarse facies and retained baby teeth say Job (STAT3's Th17 failure — the neutrophils are never recruited, so the abscess is 'cold'); persistent noninvasive Candida says the candidiasis T-cell dysfunction (AIRE in its classic form). A child failing with EVERYTHING — viral, bacterial, fungal, protozoal, plus failure to thrive and chronic diarrhea — has combined disease: SCID (whose newborn-screening marker is the low TREC count, and whose genetics include the X-linked IL-2R γ chain, ADA deficiency, and RAG), ataxia-telangiectasia (ATM — the DNA-damage sentinel; ataxia, telangiectasias, IgA deficiency, radiation sensitivity, rising AFP, and lymphoma/leukemia risk), hyper-IgM (CD40L failure — IgM normal or high with the switched classes collapsed and no germinal centers), and WAS (the actin cytoskeleton — thrombocytopenia with FEWER and SMALLER platelets, eczema, and pyogenic infections). Bacterial-only disease with a transport signature goes to the phagocytes: LAD-1's neutrophils cannot leave the blood (CD18/LFA-1 integrin failure — late cord separation, absent pus, neutrophilia in blood with nothing at the site), Chédiak-Higashi's granules cannot fuse (LYST — giant granules, partial albinism, neurodegeneration), and CGD's burst cannot fire (NADPH oxidase — catalase-positive organisms, granulomas, the abnormal DHR test).",
      },
    },
    {
      id: "molecular-thread-map",
      title: "The molecular threads — four genes that explain four themes",
      context: "Deeper organization of the genetics",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Eleven diseases resist pure memorization until the molecular threads surface",
            sublabel: "Input — four threads organize most of the table.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE X-LINKED CLUSTER: IL-2R γ chain (SCID, most common), CD40L (hyper-IgM), WAS, CGD's NADPH oxidase — a male pedigree points into this set",
            sublabel: "Process — four X-linked recessive genes, four different layers (cytokine signaling, costimulation, cytoskeleton, burst).",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE CYTOSKELETON THREAD: WAS (actin reorganization) and LAD-1 (integrin/CD18 adhesion) — architecture failures of movement and presentation",
            sublabel: "Process — when the cell cannot move or reshape, presentation (WAS) and delivery (LAD) fail.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE DNA-SENTINEL THREAD: ATM (damage detection) and AIRE (self-antigen display) — surveillance failures with cancer and autoimmunity as the price",
            sublabel: "Process — ataxia-telangiectasia accumulates mutations (radiation sensitivity, lymphoma); AIRE loss releases anti-Candida and organ-specific autoimmunity (E24's bridge).",
            variant: "process",
          },
          {
            id: "o1",
            label: "THE SIGNALING THREAD: IL-2R γ (common γ chain — SCID), IL-12R (Th1 axis — MSMD), CD40L (class switching), STAT3 (Th17 — Job) — each receptor failure names its missing lineage",
            sublabel: "Output — gene → pathway → missing lineage → infection pattern: the chain the exam actually tests.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "pedigree first" },
          { from: "s1", to: "s2", label: "architecture" },
          { from: "s2", to: "s3", label: "surveillance" },
          { from: "s3", to: "o1", label: "signaling" },
        ],
        caption:
          "Four threads turn the table into a map. First, the X-linked cluster — IL-2R γ chain (the most common SCID), CD40L (hyper-IgM), WAS, and the X-linked NADPH oxidase form of CGD: an affected-male pedigree (brothers, maternal uncles) narrows the differential to these four in one move. Second, the cytoskeleton thread: WAS protein and the LFA-1/CD18 integrin both build the cell's movement machinery — WAS failure leaves platelets small and antigen presentation defective (the immune synapse is an actin structure), while LAD failure leaves neutrophils circulating but unable to exit (the integrin that binds ICAM on endothelium is missing — hence absent pus against a background of neutrophilia). Third, the DNA-sentinel thread: ATM watches for double-strand breaks and halts the cycle — its loss (ataxia-telangiectasia) explains the radiation sensitivity, the rising AFP, the lymphoma/leukemia risk, and even the cerebellar degeneration; AIRE displays self-antigens in the thymic medulla — its loss explains both chronic mucocutaneous candidiasis and the E24 autoimmune polyendocrine syndrome. Fourth, the signaling thread: each receptor names its lineage — the common γ chain (IL-2Rγ) failure kills all lymphocyte proliferation (SCID); IL-12R failure kills the Th1/IFN-γ axis (mycobacteria); CD40L failure kills class switching (the IgM pattern); STAT3 failure kills Th17 (Job's cold abscesses). Gene → pathway → lineage → infection pattern is the chain worth building.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "immunodeficiency-spectrum-map",
      title: "The three-zone spectrum map",
      caption:
        "An original KYP map: three zone panels (T-cell disorders with DiGeorge, IL-12R, Job/STAT3, and candidiasis; B- and T-cell disorders with SCID, ataxia-telangiectasia, hyper-IgM, and WAS; phagocyte dysfunction with LAD-1, Chédiak-Higashi, and CGD) — each disease card carrying defect, presentation, and findings — plus the signpost-signature strip (absent pus + late cord = LAD-1; cold abscesses + coarse facies + baby teeth = Job; tetany + conotruncal + absent thymic shadow = DiGeorge; with the CGD, SCID, and WAS one-liners below).",
      notice:
        "The printed table is pure vector; its two clinical micrographs (telangiectasias, giant granules — the A and B rasters on p137) are copyrighted and are described in the text, never reproduced. FA's printed mnemonics (CATCH-22, the ABCDEF Job list, WATER, PLAIN) are NOT reproduced — KYP originals replace them.",
    },
    {
      kind: "table",
      title: "T-cell disorders — verbatim",
      intro: "The source's T-cell disorder rows, verbatim.",
      columns: ["Disease", "Defect · Presentation · Findings (verbatim)"],
      rows: [
        ["Thymic aplasia (DiGeorge syndrome; velocardiofacial syndrome)", "22q11 microdeletion; failure to develop 3rd and 4th pharyngeal pouches → absent thymus and parathyroids. DiGeorge syndrome—thymic, parathyroid, cardiac defects. Velocardiofacial syndrome—palate, facial, cardiac defects. Presentation: Cardiac defects (conotruncal abnormalities [eg, tetralogy of Fallot, truncus arteriosus]), Abnormal facies, Thymic hypoplasia → T-cell deficiency (recurrent viral/fungal infections), Cleft palate, Hypocalcemia 2° to parathyroid aplasia → tetany. Findings: ↓ T cells, ↓ PTH, ↓ Ca2+. Thymic shadow absent on CXR."],
        ["IL-12 receptor deficiency", "↓ Th1 response; autosomal recessive. Presentation: disseminated mycobacterial and fungal infections; may present after administration of BCG vaccine. Findings: ↓ IFN-γ. Most common cause of Mendelian susceptibility to mycobacterial diseases (MSMD)."],
        ["Autosomal dominant hyper-IgE (Job) syndrome", "Deficiency of Th17 cells due to STAT3 mutation → impaired recruitment of neutrophils to sites of infection. Presentation: Cold (noninflamed) staphylococcal Abscesses, retained Baby teeth, Coarse facies, Dermatologic problems (eczema), ↑ IgE, bone Fractures from minor trauma. Findings: ↑ IgE, ↑ eosinophils."],
        ["Chronic mucocutaneous candidiasis", "T-cell dysfunction. Impaired cell-mediated immunity against Candida sp. Classic form caused by defects in AIRE. Presentation: persistent noninvasive Candida albicans infections of skin and mucous membranes. Findings: absent in vitro T-cell proliferation in response to Candida antigens; absent cutaneous reaction to Candida antigens."],
      ],
      caption:
        "The T-cell zone reads by companion finding: DiGeorge carries the 22q11 structures (heart, palate, parathyroids — tetany plus conotruncal plus absent thymic shadow); IL-12R carries the mycobacteria (post-BCG dissemination); Job carries the STAT3/Th17 signature (cold abscesses, coarse facies, retained baby teeth, eczema, fractures — high IgE and eosinophils); candidiasis carries the AIRE connection (persistent noninvasive Candida).",
    },
    {
      kind: "table",
      title: "B- and T-cell disorders and phagocyte dysfunction — verbatim",
      intro: "The source's combined and phagocyte rows, verbatim.",
      columns: ["Disease", "Defect · Presentation · Findings (verbatim)"],
      rows: [
        ["Severe combined immunodeficiency (SCID)", "Several types including defective IL-2R gamma chain (most common, X-linked recessive); adenosine deaminase deficiency (autosomal recessive); RAG mutation → VDJ recombination defect. Presentation: failure to thrive, chronic diarrhea, thrush; recurrent viral, bacterial, fungal, and protozoal infections. Findings: ↓ T-cell receptor excision circles (TRECs) — part of newborn screening for SCID. Absence of thymic shadow (CXR), germinal centers (lymph node biopsy), and T cells (flow cytometry)."],
        ["Ataxia-telangiectasia", "Defects in ATM gene → failure to detect DNA damage → failure to halt progression of cell cycle → mutations accumulate; autosomal recessive. Presentation: Triad: cerebellar defects (Ataxia), spider Angiomas (ocular and facial telangiectasias), IgA deficiency; ↑↑ sensitivity to radiation (limit x-ray exposure). Findings: ↑ AFP, IgM; ↓ IgA, IgG, and IgE; lymphopenia, cerebellar atrophy; ↑ risk of lymphoma and leukemia."],
        ["Hyper-IgM syndrome", "Most commonly due to defective CD40L on Th cells → class switching defect; X-linked recessive. Presentation: severe pyogenic infections early in life; opportunistic infection with Pneumocystis, Cryptosporidium, CMV. Findings: Normal or ↑ IgM; ↓↓ IgG, IgA, IgE. Failure to make germinal centers."],
        ["Wiskott-Aldrich syndrome", "WAS mutation; leukocytes and platelets unable to reorganize actin cytoskeleton → defective antigen presentation; X-linked recessive. Presentation: Thrombocytopenia, Eczema, Recurrent (pyogenic) infections; ↑ risk of autoimmune disease and malignancy. Findings: ↓ to normal IgG, IgM; ↑ IgE, IgA; fewer and smaller platelets."],
        ["Leukocyte adhesion deficiency (type 1)", "Autosomal recessive defect in LFA-1 integrin (CD18) protein on phagocytes leads to impaired migration and chemotaxis by C5a, IL-8, and leukotriene B4. Presentation: late separation (>30 days) of umbilical cord, absent pus, dysfunctional neutrophils → recurrent skin and mucosal bacterial infections. Findings: ↑ neutrophils in blood; absence of neutrophils at infection sites → impaired wound healing."],
        ["Chédiak-Higashi syndrome", "Defect in lysosomal trafficking regulator gene (LYST). Microtubule dysfunction in phagosome-lysosome fusion; autosomal recessive. Presentation: Progressive neurodegeneration, Lymphohistiocytosis, Albinism (partial), recurrent pyogenic Infections, peripheral Neuropathy. Findings: giant granules in granulocytes and platelets; pancytopenia; mild coagulation defects."],
        ["Chronic granulomatous disease", "Defect of NADPH oxidase → ↓ reactive oxygen species (eg, superoxide) and ↓ respiratory burst in neutrophils; X-linked form most common. Presentation: ↑ susceptibility to catalase ⊕ organisms; recurrent infections and granulomas. Findings: abnormal dihydrorhodamine (flow cytometry) test (↓ green fluorescence); nitroblue tetrazolium dye reduction test (obsolete) fails to turn blue."],
      ],
      caption:
        "The combined zone reads by companion (ataxia/telangiectasias, IgM pattern, small platelets) and the phagocyte zone by the failed step: delivery (LAD — absent pus), fusion (Chédiak-Higashi — giant granules), burst (CGD — catalase-positive organisms, abnormal DHR). SCID's newborn-screening row (TRECs) is the newest and most-tested line on the page.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Newborn screening and the management map (KYP bridge)",
      body: "SCID newborn screening quantifies T-cell receptor excision circles (TRECs) — the DNA circles excised during TCR rearrangement; a low TREC count flags the absent T-cell development of SCID before infections begin, enabling protective isolation and early hematopoietic stem cell transplantation (HSCT), which is curative for SCID and also used in Wiskott-Aldrich, CGD, LAD, and Chédiak-Higashi (the accelerated lymphohistiocytic phase of Chédiak-Higashi is treated with the HLH protocol first). DiGeorge management is replacement of the absent structures: calcium and vitamin D for the hypoparathyroidism, surgical correction of the heart defects, and thymic or marrow transplantation for the severe T-cell deficiency (most partial cases need only surveillance). IL-12R and IFN-γ-axis defects receive antimycobacterial prophylaxis and IFN-γ supplementation. Hyper-IgM receives immunoglobulin replacement plus Pneumocystis prophylaxis. CGD receives antibacterial-antifungal prophylaxis and IFN-γ, with HSCT and gene therapy as definitive options — and every live vaccine (BCG, rotavirus) is avoided in known severe combined deficiencies.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A newborn's dried blood spot shows a markedly low TREC count; at 3 months the infant has failure to thrive, chronic diarrhea, and severe oral thrush, and has been hospitalized twice with respiratory viruses.",
        discriminator: "Low TRECs + failure to thrive + thrush + broad infections",
        concept: "Severe combined immunodeficiency — newborn screening",
        answer:
          "TRECs (T-cell receptor excision circles) are the byproduct of TCR rearrangement; SCID's absent T-cell development leaves them low, and TREC screening now flags SCID at birth — before the failure to thrive, chronic diarrhea, thrush, and recurrent viral, bacterial, fungal, and protozoal infections begin. Genetics: IL-2R γ chain (most common, X-linked), ADA deficiency (AR), RAG → VDJ recombination defect. Flow confirms absent T cells; the thymic shadow and germinal centers are absent. Management: protective isolation, immunoglobulin, and HSCT (curative).",
      },
      {
        stem: "A 4-day-old infant still has his umbilical cord stump; a periumbilical ulceration cultures Staphylococcus aureus but produces no pus, and the CBC shows a neutrophil count of 30,000/μL with no neutrophils on the wound biopsy.",
        discriminator: "Late cord + ABSENT pus + neutrophilia",
        concept: "Leukocyte adhesion deficiency type 1 — the delivery failure",
        answer:
          "LAD-1's autosomal recessive LFA-1 integrin (CD18) defect prevents neutrophil migration and chemotaxis (impaired responses to C5a, IL-8, and leukotriene B4): the cells cannot leave the blood. Hence the paradox that names the disease — high blood neutrophils with no pus at the infected site — plus late umbilical cord separation (>30 days), impaired wound healing, and recurrent skin and mucosal bacterial infections. Management: antibiotics for infections; HSCT for severe disease.",
      },
      {
        stem: "A 1-year-old has recurrent 'cold' skin abscesses that lack the usual warmth and erythema, a coarse face, delayed shedding of baby teeth, eczema, and a clavicular fracture from a crib fall; IgE is markedly elevated with eosinophilia.",
        discriminator: "Cold abscesses + coarse facies + retained baby teeth + ↑IgE",
        concept: "Autosomal dominant hyper-IgE (Job) syndrome — STAT3/Th17",
        answer:
          "Job syndrome is the autosomal dominant STAT3 mutation → Th17 deficiency → impaired neutrophil recruitment to infection sites: staphylococcal abscesses that are cold (noninflamed) because the neutrophils never arrive, plus coarse facies, retained baby teeth, eczema, bone fractures from minor trauma (the osteopenia), and the laboratory signature of high IgE with eosinophils. Management: skin care, antistaphylococcal coverage for infections, and dental/pulmonary surveillance.",
      },
    ],
    traps: [
      {
        a: "DiGeorge syndrome causes combined B- and T-cell deficiency",
        b: "DiGeorge is a T-CELL disorder — B cells are present and immunoglobulins largely intact",
        whyConfused: "Severe DiGeorge looks clinically severe enough to be 'combined.'",
        keyDifference:
          "The 22q11 deletion removes the thymic ENVIRONMENT (and the parathyroids): T cells fail to develop, but the B-cell lineage is intact — immunoglobulin production is near-normal (with some impaired T-dependent responses). The combined zone is SCID's: absent T AND B function, low TRECs, absent germinal centers. DiGeorge's markers are the thymic/parathyroid/cardiac companions, not the immunoglobulin pattern.",
        clue: "Any DiGeorge-vs-SCID question with immunoglobulin levels in the stem.",
      },
      {
        a: "Wiskott-Aldrich platelets are large, like immune thrombocytopenia's",
        b: "WAS platelets are FEWER and SMALLER — the actin-cytoskeleton signature",
        whyConfused: "Most pediatric thrombocytopenias feature large platelets (ITP's young platelets).",
        keyDifference:
          "The WAS gene's actin reorganization failure produces structurally defective, SMALL platelets — the opposite of ITP's large young ones. With the X-linked inheritance, eczema, recurrent pyogenic infections, elevated IgE/IgA, and the autoimmune/malignancy risk, the small-platelet finding completes the diagnosis; bone marrow transplant is curative.",
        clue: "Any thrombocytopenia question in a boy with eczema and infections.",
      },
      {
        a: "Hyper-IgM patients lack B cells",
        b: "B cells are PRESENT — CD40L failure blocks class SWITCHING, not B-cell development",
        whyConfused: "The collapsed IgG/IgA/IgE resembles Bruton's all-class loss.",
        keyDifference:
          "The hyper-IgM defect is the T-cell's CD40L: without the handshake, B cells cannot switch or form germinal centers — but the B cells themselves (and IgM production) are intact, indeed elevated. Bruton has ABSENT B cells with low IgM too; hyper-IgM has normal-to-high IgM with the switched classes specifically lost. The IgM level is the fastest discriminator between the two hypogammaglobulinemias.",
        clue: "Any IgM-level question in a pyogenic-infection stem.",
      },
    ],
    pivots: [
      {
        lookAlike: "DiGeorge vs SCID (the severe-childhood pair)",
        differentiator: "T-only vs combined, and the 22q11 companions",
        correctPath:
          "DiGeorge: T-cell deficiency from the absent thymic environment — with the 22q11 company (conotruncal defects, cleft palate, hypocalcemic tetany, absent thymic shadow) and B cells intact. SCID: combined failure (viral + bacterial + fungal + protozoal; failure to thrive, diarrhea, thrush) with low TRECs on newborn screening, absent germinal centers, and the X-linked IL-2Rγ / ADA / RAG genetics. Companions and TREC/flow separate them in one step.",
      },
      {
        lookAlike: "LAD-1 vs CGD vs Chédiak-Higashi (the three phagocyte failures)",
        differentiator: "Delivery vs fusion vs burst",
        correctPath:
          "LAD-1 (CD18/LFA-1): neutrophils cannot ARRIVE — absent pus, late cord, blood neutrophilia. Chédiak-Higashi (LYST): granules cannot FUSE with the phagosome — giant granules, partial albinism, neurodegeneration, lymphohistiocytosis. CGD (NADPH oxidase): the oxidative burst cannot DETONATE — catalase-positive organisms (S aureus, Aspergillus), granulomas, abnormal DHR/NBT. Arrive → fuse → detonate: the phagocyte's three-step test.",
      },
    ],
    miniCase: {
      vignette:
        "A 4-month-old boy is referred for failure to thrive (weight below the 3rd percentile), chronic watery diarrhea since 6 weeks of age, and persistent oral thrush unresponsive to nystatin. He has been hospitalized twice: once with respiratory syncytial virus bronchiolitis and once with Pneumocystis pneumonia. His newborn screening report, retrieved from the state laboratory, notes a markedly reduced TREC level with normal thyroxine and biotinidase. There is no cardiac murmur, no cleft palate, serum calcium is normal, and the chest x-ray report comments on an absent thymic shadow. A maternal uncle died in infancy of 'an immune problem.'",
      question:
        "Which finding would most likely be present on further laboratory evaluation?",
      options: [
        {
          label: "A",
          text: "Absent T cells on flow cytometry with absent germinal centers on lymph node biopsy",
          correct: true,
          why: "Correct — severe combined immunodeficiency. The presentation is the combined pattern: failure to thrive, chronic diarrhea, thrush (T-cell failure), plus viral (RSV), fungal (Pneumocystis), and opportunistic infections — and the newborn screen's LOW TREC count is the designed early marker (T-cell receptor excision circles fall when TCR rearrangement never happens). SCID's findings complete exactly this way: absent T cells on flow, absent germinal centers on node biopsy, absent thymic shadow — with B-cell and NK-cell numbers depending on the genotype (IL-2R γ chain, ADA, or RAG). The X-linked family history fits the most common form.",
        },
        {
          label: "B",
          text: "Normal T-cell count with low IgG, IgA, and IgE and absent B cells",
          why: "This is Bruton's pattern (E36) — a B-CELL-only deficiency with intact cellular immunity: it would not produce thrush, Pneumocystis, or a low TREC count, and Bruton's onset waits for maternal IgG to wane rather than presenting with diarrhea-from-weeks. The combined presentation excludes the B-cell-only zone.",
        },
        {
          label: "C",
          text: "High IgM with low IgG, IgA, and IgE",
          why: "The hyper-IgM pattern is a class-switching failure (CD40L) — another X-linked candidate, but its T-cell NUMBER is preserved (function impaired), so TRECs are normal, and the presentation is predominantly severe pyogenic disease with the opportunistic set, not the global T-cell failure with thrush and diarrhea from the first weeks. The IgM level distinguishes it from SCID, where all immunoglobulins fall.",
        },
        {
          label: "D",
          text: "Giant granules in granulocytes with partial albinism",
          why: "Chédiak-Higashi's findings — a phagocyte fusion disorder with recurrent PYOGENIC infections (not the viral/fungal/opportunist pattern), plus the albinism and neuropathy that are conspicuously absent here. The low TREC count and absent thymic shadow point to the lymphocyte, not the granule.",
        },
        {
          label: "E",
          text: "Blood neutrophilia with absent pus at the infection site",
          why: "LAD-1's delivery failure — bacterial skin and mucosal infections with the paradox of high blood counts and no pus, plus late cord separation. This infant's problem is the adaptive arm (thrush, viruses, Pneumocystis, low TRECs), not neutrophil delivery; a neutrophil count would be normal.",
        },
      ],
      reasoning:
        "The vignette stacks the combined-zone signature: failure to thrive + chronic diarrhea + thrush + viral/fungal/opportunist infections, anchored by the NEWBORN SCREENING finding — a low TREC count, the designed SCID marker. The absent thymic shadow is shared with SCID (and would appear in DiGeorge too, but the normal calcium, the absence of cardiac and palate findings, and the uncle's lethal infantile disease steer away from 22q11). The question asks the laboratory completion, and the mechanism supplies it: no TCR rearrangement → no TRECs; no T-cell development → absent T cells on flow and absent thymic shadow; no T-cell help → no germinal centers. Distractors come from each neighboring zone: Bruton (B-only), hyper-IgM (switching), Chédiak-Higashi (fusion), LAD (delivery).",
    },
  },
  mnemonics: [
    {
      code: "\u201cArrive, fuse, detonate — the phagocyte's three-step test.\u201d",
      meaning:
        "KYP's key for the phagocyte zone: LAD-1 fails ARRIVAL (CD18 integrin — absent pus, late cord, blood neutrophilia), Chédiak-Higashi fails FUSION (LYST — giant granules, albinism, neurodegeneration), CGD fails DETONATION (NADPH oxidase — catalase-positive organisms, granulomas, abnormal DHR/NBT). The failed step names the disease.",
      memorizes: "LAD vs Chédiak-Higashi vs CGD by failed step",
      whenToUse: "Any phagocyte-disorder question with a bacterial-infection signature.",
      clinical: "Absent pus = delivery; giant granules = fusion; granulomas with catalase-positive organisms = burst.",
    },
    {
      code: "\u201cThe male-line quartet: one cytokine receptor, one handshake, one cytoskeleton, one cannon — γ-chain, CD40L, WAS, oxidase.\u201d",
      meaning:
        "KYP's key for the X-linked cluster (the pedigree shortcut): IL-2R γ chain (SCID — the cytokine receptor), CD40L (hyper-IgM — the handshake), WAS (the cytoskeleton), and NADPH oxidase (CGD — the cannon). An affected-boy pedigree narrows the differential to these four genes in one step; each then names its layer by the infection pattern.",
      memorizes: "The four X-linked immunodeficiencies and their layers",
      whenToUse: "Any pedigree or affected-male-infant stem.",
      clinical: "All four are HSCT or gene-therapy candidates; genetic counseling is X-linked recessive.",
    },
    {
      code: "\u201cJob's abscesses are cold because no one shows up: STAT3 lost the recruitment poster (Th17).\"\u201d",
      meaning:
        "KYP's key for hyper-IgE syndrome: the STAT3 mutation kills Th17 cells, whose cytokines recruit neutrophils to infection sites — so the staphylococcal abscesses are COLD (noninflamed, no neutrophils). The company: coarse facies, retained baby teeth, eczema, bone fractures from minor trauma — with ↑ IgE and eosinophils.",
      memorizes: "Job syndrome: STAT3 → Th17 → cold abscesses + the somatic company",
      whenToUse: "Any cold-abscess or ↑IgE stem.",
      clinical: "Autosomal dominant (unlike most deficiencies) — a parent may be similarly affected.",
    },
  ],
  rapidReview: {
    s30: [
      "DiGeorge: 22q11, absent 3rd/4th pouches → thymus + parathyroids gone; ↓T, ↓PTH, ↓Ca, absent thymic shadow",
      "IL-12R deficiency: ↓Th1, mycobacteria/fungi (post-BCG), MSMD; ↓IFN-γ",
      "Job (AD, STAT3): Th17 ↓ → cold staph abscesses, coarse facies, baby teeth, eczema, fractures; ↑IgE/eosinophils",
      "Chronic mucocutaneous candidiasis: T-cell dysfunction vs Candida; classic = AIRE defects",
      "SCID: IL-2Rγ (XLR, most common) · ADA (AR) · RAG (VDJ); ↓TRECs on newborn screen",
    ],
    m3: [
      "SCID: failure to thrive + chronic diarrhea + thrush + viral/bacterial/fungal/protozoal infections",
      "SCID findings: absent thymic shadow, germinal centers, and T cells",
      "Ataxia-telangiectasia: ATM → DNA damage undetected; ataxia + telangiectasias + IgA deficiency; radiation-sensitive",
      "Ataxia-telangiectasia labs: ↑AFP, ↑IgM; ↓IgA/IgG/IgE; lymphoma/leukemia risk",
      "Hyper-IgM: CD40L → no switching; normal/↑IgM, ↓↓IgG/IgA/IgE, no germinal centers; PJP/Crypto/CMV",
    ],
    m10: [
      "WAS: actin failure — thrombocytopenia (FEWER, SMALLER platelets), eczema, pyogenic infections; ↑IgE/IgA",
      "LAD-1: CD18/LFA-1 → absent pus, late cord (>30 days), blood neutrophilia with none at sites",
      "Chédiak-Higashi: LYST → giant granules, partial albinism, neuropathy, lymphohistiocytosis, pancytopenia",
      "CGD: catalase-POSITIVE organisms, granulomas; abnormal DHR (NBT obsolete)",
      "X-linked quartet: IL-2Rγ, CD40L, WAS, NADPH oxidase — the pedigree shortcut",
    ],
  },
  recall: [
    {
      q: "Give DiGeorge syndrome's defect, presentation, and findings.",
      a: "22q11 microdeletion; failure to develop 3rd and 4th pharyngeal pouches → absent thymus and parathyroids. Presentation: cardiac defects (conotruncal — tetralogy of Fallot, truncus arteriosus), abnormal facies, thymic hypoplasia → T-cell deficiency (recurrent viral/fungal infections), cleft palate, hypocalcemia 2° to parathyroid aplasia → tetany. Findings: ↓ T cells, ↓ PTH, ↓ Ca2+; thymic shadow absent on CXR.",
    },
    {
      q: "What are the SCID genotypes, presentation, and newborn-screening finding?",
      a: "Types: defective IL-2R gamma chain (most common, X-linked recessive); adenosine deaminase deficiency (autosomal recessive); RAG mutation → VDJ recombination defect. Presentation: failure to thrive, chronic diarrhea, thrush; recurrent viral, bacterial, fungal, and protozoal infections. Newborn screening: ↓ T-cell receptor excision circles (TRECs). Findings: absence of thymic shadow (CXR), germinal centers (lymph node biopsy), and T cells (flow cytometry).",
    },
    {
      q: "Contrast the hyper-IgM and Wiskott-Aldrich findings.",
      a: "Hyper-IgM (defective CD40L on Th cells → class switching defect; X-linked recessive): severe pyogenic infections early in life plus opportunistic Pneumocystis, Cryptosporidium, CMV; normal or ↑ IgM with ↓↓ IgG, IgA, IgE; failure to make germinal centers. Wiskott-Aldrich (WAS mutation → actin cytoskeleton failure; X-linked recessive): thrombocytopenia, eczema, recurrent pyogenic infections, ↑ autoimmune and malignancy risk; ↓-to-normal IgG and IgM with ↑ IgE and IgA; fewer and smaller platelets.",
    },
    {
      q: "Give ataxia-telangiectasia's mechanism, triad, and laboratory findings.",
      a: "ATM gene defects → failure to detect DNA damage → failure to halt cell-cycle progression → mutations accumulate (autosomal recessive). Triad: cerebellar defects (ataxia), spider angiomas (ocular and facial telangiectasias), IgA deficiency; ↑↑ sensitivity to radiation (limit x-ray exposure). Findings: ↑ AFP, ↑ IgM; ↓ IgA, IgG, IgE; lymphopenia, cerebellar atrophy; ↑ risk of lymphoma and leukemia.",
    },
    {
      q: "Contrast the three phagocyte disorders' defects and signatures.",
      a: "LAD-1 (AR, LFA-1 integrin/CD18): impaired migration and chemotaxis (C5a, IL-8, LTB4) — late cord separation >30 days, absent pus, recurrent skin/mucosal bacterial infections; ↑ blood neutrophils with none at sites. Chédiak-Higashi (AR, LYST): microtubule dysfunction in phagosome-lysosome fusion — progressive neurodegeneration, lymphohistiocytosis, partial albinism, recurrent pyogenic infections, peripheral neuropathy; giant granules in granulocytes and platelets, pancytopenia, mild coagulation defects. CGD (X-linked most common, NADPH oxidase): ↓ ROS and respiratory burst — ↑ susceptibility to catalase-positive organisms, recurrent infections and granulomas; abnormal dihydrorhodamine test (↓ green fluorescence), NBT test fails to turn blue.",
    },
  ],
  related: [
    {
      title: "B-Cell Immunodeficiencies",
      topicId: "b-cell-immunodeficiencies",
      note: "The B-cell-only rows of the same printed table — the Bruton/IgA/CVID zone that this page's combined zone must be distinguished from.",
    },
    {
      title: "Immunodeficiency Infection Patterns",
      topicId: "immunodeficiency-infection-patterns",
      note: "The organism-pattern directory that performs this page's layer triage from the infection list alone.",
    },
    {
      title: "Respiratory Burst & Type I Interferons",
      topicId: "respiratory-burst-ifn",
      note: "CGD's burst chemistry and catalase logic in full — the killing failure this page names.",
    },
    {
      title: "T-Cell Development: Thymic Selection & Subset Lineages",
      topicId: "t-cell-development",
      note: "DiGeorge's absent thymus is the selection school itself missing; Job's Th17 and IL-12R's Th1 are switchboard lineages.",
    },
  ],
  crossLinks: [
    {
      subject: "Genetics",
      connection: "The X-linked quartet (IL-2Rγ, CD40L, WAS, NADPH oxidase) plus the AR cluster (ADA, RAG, ATM, LFA-1, LYST, IL-12R) — pedigree analysis points into the right zone before any laboratory is ordered.",
    },
    {
      subject: "Pediatrics (Newborn Screening)",
      connection: "TREC-based SCID screening is the newest core panel addition — a low TREC result in a well newborn triggers the entire SCID pathway before the first infection.",
    },
    {
      subject: "Dermatology",
      connection: "Eczema (WAS, Job), partial albinism (Chédiak-Higashi), cold abscesses (Job), and telangiectasias (ataxia-telangiectasia) — the skin often names the deficiency.",
    },
    {
      subject: "Hematology-Oncology",
      connection: "Small platelets (WAS), giant granules with pancytopenia (Chédiak-Higashi), and the lymphoma/leukemia risk of ATM failure — the blood smear and cancer risk tie the table to hematology.",
    },
  ],
};
