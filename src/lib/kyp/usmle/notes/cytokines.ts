import type { KypUsMLENote } from "../types";

// Immunology — Immune Responses (E-batch 31).
// Source: First Aid 2026, Part 1 pdf 128 / book 106
// (Important cytokines; Secreted by macrophages; Secreted by T cells;
//  From Th1 cells; From Th2 cells)

export const cytokines: KypUsMLENote = {
  id: "cytokines",
  title: "Important Cytokines",
  subtitle:
    "The immune system's signaling roster, organized by who says what. MACROPHAGES secrete the acute-phase trio and the recruiters: IL-1 (fever, acute inflammation, endothelial adhesion-molecule activation, chemokine secretion to recruit WBCs — also called osteoclast-activating factor), IL-6 (fever plus acute-phase protein production), and TNF-α (endothelial activation, WBC recruitment, vascular leak, cachexia in malignancy, granuloma maintenance in TB) — with IL-1, IL-6, and TNF-α all capable of mediating fever and sepsis; then IL-8, the major chemotactic factor for neutrophils, and IL-12, which drives Th1 differentiation, activates NK cells, and facilitates TB granulomas. T CELLS secrete IL-2 (growth of helper, cytotoxic, and regulatory T cells plus NK cells) and IL-3 (bone-marrow stem-cell growth and differentiation, functioning like GM-CSF). Th1 CELLS deliver interferon-γ — secreted by NK and T cells in response to antigen or macrophage IL-12, stimulating macrophages to kill phagocytosed pathogens, inhibiting Th2 differentiation, inducing IgG switching, increasing MHC expression and antigen presentation by all cells, and activating macrophages for granuloma formation. Th2 CELLS deliver IL-4 (Th2 differentiation, B-cell growth, class switching to IgE and IgG), IL-5 (B-cell growth, IgA switching, eosinophil growth and differentiation), IL-10 (attenuates inflammation, decreases MHC II and Th1 cytokines, inhibits activated macrophages and dendritic cells — also from Tregs), and IL-13 (IgE production, alternative macrophage activation) — with TGF-β and IL-10 both attenuating the immune response. The timeline: acute (IL-1, IL-6, TNF-α), then recruit (IL-8, IL-12).",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immune Responses",
  pilotCategory: "Immune Responses — macrophage cytokines (IL-1, IL-6, TNF-α, IL-8, IL-12), T-cell cytokines (IL-2, IL-3), Th1 IFN-γ, Th2 cytokines (IL-4, IL-5, IL-10, IL-13), fever/sepsis trio, granuloma biology",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 106 (Important cytokines)",
  tags: [
    "cytokines",
    "interleukin-1",
    "IL-1",
    "osteoclast-activating factor",
    "fever",
    "acute inflammation",
    "adhesion molecules",
    "interleukin-6",
    "IL-6",
    "acute-phase proteins",
    "tumor necrosis factor",
    "TNF-alpha",
    "cachexia",
    "vascular leak",
    "sepsis",
    "granulomas",
    "tuberculosis",
    "interleukin-8",
    "IL-8",
    "neutrophil chemotaxis",
    "interleukin-12",
    "IL-12",
    "Th1 differentiation",
    "NK cell activation",
    "interleukin-2",
    "IL-2",
    "T-cell growth",
    "interleukin-3",
    "IL-3",
    "GM-CSF",
    "bone marrow stem cells",
    "interferon-gamma",
    "IFN-gamma",
    "macrophage activation",
    "MHC expression",
    "IgG class switching",
    "Th2 inhibition",
    "interleukin-4",
    "IL-4",
    "IgE class switching",
    "B-cell growth",
    "interleukin-5",
    "IL-5",
    "IgA class switching",
    "eosinophils",
    "interleukin-10",
    "IL-10",
    "immune attenuation",
    "regulatory T cells",
    "interleukin-13",
    "IL-13",
    "alternative macrophage activation",
    "TGF-beta",
  ],
  core: {
    what: "The macrophage panel leads the innate response. IL-1 causes fever and acute inflammation, activates endothelium to express adhesion molecules, and induces chemokine secretion to recruit WBCs (also called osteoclast-activating factor). IL-6 causes fever and stimulates production of acute-phase proteins. TNF-α activates endothelium, causes WBC recruitment and vascular leak, causes cachexia in malignancy, and maintains granulomas in TB — and IL-1, IL-6, and TNF-α together can mediate fever and sepsis. IL-8 is the major chemotactic factor for neutrophils. IL-12 induces differentiation of T cells into Th1 cells, activates NK cells, and facilitates granuloma formation in TB. The T-cell panel carries the growth factors: IL-2 stimulates growth of helper, cytotoxic, and regulatory T cells and NK cells; IL-3 supports growth and differentiation of bone-marrow stem cells, functioning like GM-CSF. From Th1 cells, interferon-γ (secreted by NK cells and T cells in response to antigen or IL-12 from macrophages) stimulates macrophages to kill phagocytosed pathogens, inhibits differentiation of Th2 cells, induces IgG isotype switching in B cells, increases MHC expression and antigen presentation by all cells, and activates macrophages to induce granuloma formation. From Th2 cells: IL-4 induces differentiation of T cells into Th2 cells, promotes growth of B cells, and enhances class switching to IgE and IgG; IL-5 promotes growth and differentiation of B cells, enhances class switching to IgA, and stimulates growth and differentiation of eosinophils; IL-10 attenuates the inflammatory response, decreases expression of MHC class II and Th1 cytokines, and inhibits activated macrophages and dendritic cells (also secreted by regulatory T cells); IL-13 promotes IgE production by B cells and induces alternative macrophage activation. TGF-β and IL-10 both attenuate the immune response. The sequencing rule: acute (IL-1, IL-6, TNF-α), then recruit (IL-8, IL-12).",
    why: "Cytokines are the connective tissue of the entire chapter — every previous page runs on them. IL-12 driving Th1 and IFN-γ arming macrophages is E24's switchboard; IL-2 expanding helper, cytotoxic, and regulatory T cells is E26's proliferation engine; IL-4, IL-5, and IL-13 explain the IgE-eosinophil axis of allergy and helminths; IL-10 and TGF-β are the Treg brake; the fever-sepsis trio is the pathophysiology of septic shock; and TNF-α's cachexia and granuloma roles anchor malignancy and TB stems. The exam uses this page three ways: direct function matching ('which cytokine causes cachexia'), mechanism sorting ('secreted by macrophages vs T cells'), and drug linkage — IL-2 is the transplant target (anti-IL-2 receptor antibodies and calcineurin inhibitors reduce its signal), anti-TNF agents dissolve granulomas and reactivate TB, and IL-6 blockade treats autoinflammation. The Th1/Th2 cross-regulation (IFN-γ inhibiting Th2; IL-10 suppressing Th1 and MHC II) is the molecular basis of immune deviation — why chronic infections polarize and why balancing the axis is therapeutic.",
    keyIdea: "Sort by speaker. MACROPHAGES: the acute trio (IL-1 — fever + endothelial adhesion molecules + chemokines, aka osteoclast-activating factor; IL-6 — fever + acute-phase proteins; TNF-α — endothelial activation, WBC recruitment, vascular leak, cachexia in malignancy, TB granulomas; together they mediate fever and sepsis) then the recruiters (IL-8 — neutrophil chemotaxis; IL-12 — Th1 differentiation + NK activation + TB granulomas). T CELLS: IL-2 grows helper, cytotoxic, and regulatory T cells AND NK cells; IL-3 grows marrow stem cells (GM-CSF-like). Th1 (IFN-γ): the macrophage activator — kills phagocytosed pathogens, granulomas, ↑MHC/antigen presentation everywhere, IgG switching, and INHIBITS Th2 (secreted on antigen or IL-12 trigger). Th2: IL-4 (Th2 differentiation itself, B-cell growth, IgE/IgG switching), IL-5 (B-cell growth, IgA switching, eosinophils), IL-10 (the attenuator: ↓MHC II, ↓Th1 cytokines, inhibits macrophages/DCs — also from Tregs), IL-13 (IgE production, alternative macrophage activation). Timeline: acute (IL-1, IL-6, TNF-α) → recruit (IL-8, IL-12). Cross-regulation: IFN-α... no — IFN-γ vs IL-4/IL-10: the Th1/Th2 seesaw, with TGF-β and IL-10 both damping the whole response.",
  },
  mechanisms: [
    {
      id: "cytokine-command-sequence",
      title: "The command sequence — acute alarm, recruitment, expansion, polarization",
      context: "How a cytokine network executes an immune response in order",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A macrophage engulfs a pathogen and toll-like signaling fires",
            sublabel: "Input — the innate sentinel is the first speaker.",
            variant: "input",
          },
          {
            id: "s1",
            label: "ACUTE (macrophage): IL-1 + IL-6 + TNF-α — fever, acute-phase proteins, endothelial activation (adhesion molecules), vascular leak; together they mediate fever and sepsis",
            sublabel: "Process — the systemic alarm: IL-1 (aka osteoclast-activating factor) and IL-6 drive fever and CRP; TNF-α opens the vessels and recruits; overdone, this trio is septic shock.",
            variant: "process",
          },
          {
            id: "s2",
            label: "RECRUIT (macrophage): IL-8 draws neutrophils; IL-12 drives Th1 differentiation and activates NK cells",
            sublabel: "Process — the second wave: chemotaxis (IL-8, 'the neutrophil homing beacon') and adaptive polarization (IL-12 → Th1).",
            variant: "process",
          },
          {
            id: "s3",
            label: "EXPAND + POLARIZE (T cells): IL-2 grows helper, cytotoxic, and regulatory T cells and NK cells; Th1 cells answer with IFN-γ (or Th2 with IL-4/5/13)",
            sublabel: "Process — clonal expansion on IL-2; the IL-12-vs-IL-4 milieu picks the lineage (E24's switchboard) and each lineage's cytokines suppress the other.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Effectors: IFN-γ activates macrophages (kill phagocytosed pathogens, granulomas), raises MHC expression everywhere, induces IgG switching, and inhibits Th2 — while IL-10/TGF-β attenuate the whole response when the fight ends",
            sublabel: "Output — a polarized, appropriately-sized response; the attenuation layer (IL-10 from Tregs and Th2 cells) is what fails in autoimmunity.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "TLR signal" },
          { from: "s1", to: "s2", label: "acute phase" },
          { from: "s2", to: "s3", label: "IL-12 → Th1" },
          { from: "s3", to: "o1", label: "IFN-γ / IL-10" },
        ],
        caption:
          "Read the network as a timeline with four beats. Beat 1, the acute alarm: IL-1, IL-6, and TNF-α (all macrophage products) produce fever, acute-phase proteins, and endothelial activation — the trio that mediates sepsis when uncontrolled. Beat 2, recruitment: IL-8 is the major chemotactic factor for neutrophils (the pus-forming wave), while IL-12 begins the adaptive polarization by driving Th1 differentiation and activating NK cells — which themselves become IFN-γ sources. Beat 3, expansion: IL-2 (the T-cell growth hormone) expands helper, cytotoxic, and regulatory T cells alike — the reason calcineurin inhibitors (which cut IL-2 transcription) and anti-IL-2-receptor antibodies are transplant drugs. Beat 4, polarization and its brake: Th1 cells secrete IFN-γ (macrophage activation for intracellular killers, granuloma formation for TB, MHC upregulation everywhere, IgG switching, and active suppression of Th2), while Th2 cells secrete IL-4, IL-5, and IL-13 (IgE/IgG and IgA/eosinophil programs) plus IL-10 — which attenuates the inflammatory response, decreases MHC II and Th1 cytokines, and inhibits activated macrophages and dendritic cells. TGF-β and IL-10 together are the immune system's volume knob; Tregs add IL-10 on top. The seesaw (IFN-γ vs IL-4/IL-10) explains polarized diseases — and why blocking one side (anti-TNF dissolving TNF-maintained granulomas) can reactivate the infections the granulomas were containing.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "cytokine-network-map",
      title: "The signaling map — who secretes what, to what end",
      caption:
        "An original KYP network map organized by secreting cell: the macrophage panel (IL-1, IL-6, TNF-α with the fever-and-sepsis banner; IL-8; IL-12), the T-cell panel (IL-2, IL-3/GM-CSF-like), the Th1 IFN-γ panel (all six printed functions), and the Th2 panel (IL-4, IL-5, IL-10 with its Treg source and attenuator banner, IL-13) — with the intro timeline 'acute (IL-1, IL-6, TNF-α), then recruit (IL-8, IL-12)' in the header.",
      notice:
        "The source page is pure vector text; this visual is an original KYP teaching diagram. FA's printed mnemonics (Hot T-bone stEAK; Clean up on aisle 8; Ain't too proud 2 BEG 4 help; I have 5 BAEs; thirtEEn) are NOT reproduced — KYP originals replace them.",
    },
    {
      kind: "table",
      title: "Cytokine functions — verbatim by source",
      intro: "The source's cytokine roster, verbatim and organized by secreting cell.",
      columns: ["Source", "Cytokine", "Functions (verbatim)"],
      rows: [
        ["Macrophages", "Interleukin-1", "Causes fever, acute inflammation. Activates endothelium to express adhesion molecules. Induces chemokine secretion to recruit WBCs. Also called osteoclast-activating factor."],
        ["Macrophages", "Interleukin-6", "Causes fever and stimulates production of acute-phase proteins."],
        ["Macrophages", "Tumor necrosis factor-α", "Activates endothelium. Causes WBC recruitment, vascular leak. Causes cachexia in malignancy. Maintains granulomas in TB."],
        ["Macrophages", "Interleukin-8", "Major chemotactic factor for neutrophils."],
        ["Macrophages", "Interleukin-12", "Induces differentiation of T cells into Th1 cells. Activates NK cells. Facilitates granuloma formation in TB."],
        ["T cells", "Interleukin-2", "Stimulates growth of helper, cytotoxic, and regulatory T cells, and NK cells."],
        ["T cells", "Interleukin-3", "Supports growth and differentiation of bone marrow stem cells. Functions like GM-CSF."],
        ["Th1 cells", "Interferon-γ", "Secreted by NK cells and T cells in response to antigen or IL-12 from macrophages; stimulates macrophages to kill phagocytosed pathogens. Inhibits differentiation of Th2 cells. Induces IgG isotype switching in B cells. Increases MHC expression and antigen presentation by all cells. Activates macrophages to induce granuloma formation."],
        ["Th2 cells", "Interleukin-4", "Induces differentiation of T cells into Th (helper) 2 cells. Promotes growth of B cells. Enhances class switching to IgE and IgG."],
        ["Th2 cells", "Interleukin-5", "Promotes growth and differentiation of B cells. Enhances class switching to IgA. Stimulates growth and differentiation of eosinophils."],
        ["Th2 cells", "Interleukin-10", "Attenuates inflammatory response. Decreases expression of MHC class II and Th1 cytokines. Inhibits activated macrophages and dendritic cells. Also secreted by regulatory T cells."],
        ["Th2 cells", "Interleukin-13", "Promotes IgE production by B cells. Induces alternative macrophage activation."],
      ],
      caption:
        "Read by column: the source column is the exam's favorite discriminator (IL-2 is T-cell, not macrophage; IL-10 is Th2 AND Treg). Within functions, cluster the superlatives: fever (IL-1, IL-6, TNF-α), sepsis (the same trio), neutrophil chemotaxis (IL-8), Th1 polarization (IL-12), macrophage activation and granulomas (IFN-γ with IL-12 and TNF-α), class switching (IFN-γ→IgG, IL-4→IgE/IgG, IL-5→IgA, IL-13→IgE), and attenuation (IL-10 with TGF-β). The IL-1/IL-6/TNF-α sepsis trio and the IL-12/IFN-γ granuloma axis are the two highest-yield clusters on the page.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The cytokine-drug bridge (KYP extension)",
      body: "Every cytokine on this page is a drug target somewhere in the formulary — the exam's favorite linkage. IL-2: calcineurin inhibitors (cyclosporine, tacrolimus) cut IL-2 transcription; sirolimus blocks IL-2 receptor signaling; basiliximab/daclizumab block the IL-2 receptor — the transplant and autoimmunity handles. TNF-α: inhibitors (infliximab, adalimumab, etanercept) treat rheumatoid arthritis, psoriasis, IBD — and can reactivate latent TB precisely because TNF-α maintains granulomas (screen before starting). IL-1: anakinra (IL-1 receptor antagonist) for autoinflammatory syndromes. IL-6: tocilizumab for RA and cytokine-release phenomena. IL-12/23: ustekinumab for psoriasis. IL-17 axis (E24's Th17 products): secukinumab. And augmenting the axis: recombinant IFN-γ for chronic granulomatous disease, IL-2 (aldesleukin) for melanoma/renal carcinoma. (Drug names are pharmacology content beyond this printed page — labeled KYP extension; the cytokine functions they exploit are the printed facts.)",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A patient with rheumatoid arthritis starting a TNF-α inhibitor is screened with an interferon-γ release assay before therapy; the drug insert warns of tuberculosis reactivation.",
        discriminator: "Anti-TNF → granuloma dissolution → TB reactivation",
        concept: "TNF-α maintains granulomas in TB",
        answer:
          "TNF-α maintains granulomas in TB (and facilitates granuloma formation with IL-12 and IFN-γ). Blocking it dissolves the walled-off containment of latent mycobacteria — hence mandatory TB screening (IGRA or PPD) before anti-TNF therapy and the classic exam question linking biologics to reactivation TB. The same drug exploits TNF-α's other roles: endothelial activation and WBC recruitment (inflammation) and cachexia.",
      },
      {
        stem: "A patient in the ICU with gram-negative septic shock has refractory hypotension from widespread vasodilation and capillary leak; the mediators include a trio of macrophage-derived cytokines.",
        discriminator: "Fever + vascular leak + hypotension in sepsis",
        concept: "IL-1, IL-6, TNF-α mediate fever and sepsis",
        answer:
          "The acute-phase trio — IL-1 (fever, endothelial adhesion-molecule expression, chemokine secretion), IL-6 (fever, acute-phase proteins), and TNF-α (endothelial activation, WBC recruitment, vascular leak) — together mediate fever and sepsis. TNF-α's vascular leak drives the refractory hypotension; the same mediators explain the fever curve and rising CRP. Therapeutically the source trio maps to sepsis-trial biology, and the IL-1/IL-6/TNF-α cluster explains why broad cytokine capture has been the target of sepsis trials for decades.",
      },
      {
        stem: "A child with recurrent atypical mycobacterial and salmonella infections has intact B-cell function; macrophages from the patient fail to produce a cytokine that normally induces Th1 differentiation.",
        discriminator: "Recurrent intracellular infections + absent Th1 polarization",
        concept: "IL-12 deficiency — the Th1/NK/IFN-γ axis failure",
        answer:
          "IL-12 induces differentiation of T cells into Th1 cells and activates NK cells — the polarization step that leads to IFN-γ production and macrophage killing of intracellular pathogens. IL-12 (or its receptor, or IFN-γ or its receptor) deficiency cripples the macrophage-activation axis: recurrent atypical mycobacteria (NTM, BCG), salmonella, and other intracellular organisms with otherwise intact immunity. Treatment logic follows the axis: IFN-γ supplementation when the defect is upstream of it. (The deficiency genetics are the KYP clinical layer; IL-12's functions are the printed facts.)",
      },
    ],
    traps: [
      {
        a: "IL-2 is a macrophage cytokine",
        b: "IL-2 is SECRETED BY T CELLS (it grows helper, cytotoxic, and regulatory T cells and NK cells)",
        whyConfused: "IL-1 through IL-6 are memorized as a numeric run, blurring the sources.",
        keyDifference:
          "The macrophage panel is IL-1, IL-6, TNF-α, IL-8, IL-12. The T-cell panel is IL-2 (T-cell + NK growth) and IL-3 (marrow stem cells, GM-CSF-like). IL-2's job is clonal expansion after activation — which is why transplant medicine targets it (calcineurin inhibitors cut its transcription; receptor antibodies block its signal).",
        clue: "Any source-matching question, especially IL-2 vs IL-12.",
      },
      {
        a: "IL-5 drives IgE production",
        b: "IL-5 drives IgA switching and eosinophils; IgE is IL-4 and IL-13",
        whyConfused: "The Th2 cytokines all serve allergy/helminth immunity, so their targets blur.",
        keyDifference:
          "Split the Th2 panel by target: IL-4 — Th2 differentiation itself, B-cell growth, class switching to IgE AND IgG; IL-5 — class switching to IgA plus eosinophil growth and differentiation; IL-13 — IgE production and alternative macrophage activation. The allergy pair (IgE) is IL-4 + IL-13; the eosinophil-IgA pair is IL-5. Anti-IL-5 therapy (mepolizumab) exists for eosinophilic asthma on exactly this line.",
        clue: "Any isotype-switching or eosinophil question naming a Th2 cytokine.",
      },
      {
        a: "IL-10 enhances the immune response",
        b: "IL-10 ATTENUATES it — ↓MHC II, ↓Th1 cytokines, inhibits macrophages and DCs",
        whyConfused: "A Th2-cell product feels pro-immune.",
        keyDifference:
          "IL-10 is the attenuator: it decreases MHC class II expression and Th1 cytokines and inhibits activated macrophages and dendritic cells — and regulatory T cells secrete it too. With TGF-β it forms the response's braking layer (E25's Treg brake, E24's switchboard toggle). Its viral exploitation is the classic exam twist: Epstein-Barr virus encodes an IL-10 homolog (vIL-10/BRLF1 product) to dampen the host response — labeled extension beyond this page.",
        clue: "Any 'which cytokine suppresses/attenuates' or EBV-immune-evasion question.",
      },
    ],
    pivots: [
      {
        lookAlike: "IL-12 vs IL-2 (the two 'growth/polarization' interleukins)",
        differentiator: "Polarization vs proliferation, macrophage vs T-cell source",
        correctPath:
          "IL-12 (macrophage): induces Th1 DIFFERENTIATION and activates NK cells — polarization; its axis (IL-12 → Th1 → IFN-γ → macrophage killing) fails in IL-12/IFN-γ-axis deficiencies (atypical mycobacteria). IL-2 (T cell): stimulates GROWTH of helper, cytotoxic, and regulatory T cells and NK cells — proliferation; its blockade is transplant immunosuppression, and its loss impairs Treg maintenance (IL-2 is Tregs' growth factor — E25's CD25 dependency).",
      },
      {
        lookAlike: "IFN-γ vs IL-10 (the Th1 amplifier vs the attenuator)",
        differentiator: "Direction of the response",
        correctPath:
          "IFN-γ (Th1, also NK): turns everything UP for intracellular killing — macrophage activation, granulomas, MHC expression and antigen presentation by all cells, IgG switching, and active inhibition of Th2. IL-10 (Th2 + Tregs): turns everything DOWN — attenuates inflammation, decreases MHC II and Th1 cytokines, inhibits activated macrophages and dendritic cells. Together with TGF-β, IL-10 is the volume knob whose failure (IPEX-like Treg dysfunction) unleashes autoimmunity and whose viral mimicry (EBV) exploits it.",
      },
    ],
    miniCase: {
      vignette:
        "A 3-year-old boy is referred for evaluation of recurrent infections. At 8 months he developed disseminated BCG-itis after neonatal vaccination; since then he has had two episodes of nontuberculous mycobacterial lymphadenitis requiring excision and one episode of Salmonella septicemia. He clears common viral illnesses normally, has normal antibody titers to prior vaccines, and normal lymphocyte subsets. Macrophages from the patient, stimulated in vitro with mycobacterial antigen, produce abundant IL-1, IL-6, and TNF-α — but his T cells fail to polarize to the Th1 lineage, and IFN-γ production is negligible. Parents are first cousins.",
      question:
        "Which cytokine pathway defect best explains this child's infections?",
      options: [
        {
          label: "A",
          text: "Macrophage IL-12 production failure, preventing Th1 differentiation and the IFN-γ–mediated macrophage activation that contains intracellular mycobacteria",
          correct: true,
          why: "Correct — the IL-12 → Th1 → IFN-γ → macrophage-killing axis is the containment system for intracellular organisms. IL-12 induces differentiation of T cells into Th1 cells and activates NK cells; without it, Th1 polarization fails (as the in vitro data show), IFN-γ production collapses, and macrophages cannot kill phagocytosed pathogens — disseminated BCG, nontuberculous mycobacteria, and Salmonella follow, with all other immunity intact. Autosomal-recessive inheritance fits the consanguinity. Treatment: IFN-γ supplementation (defect is upstream) plus antimycobacterial prophylaxis.",
        },
        {
          label: "B",
          text: "IL-2 deficiency impairing proliferation of helper, cytotoxic, and regulatory T cells",
          why: "IL-2 failure would compromise clonal expansion broadly — viral clearance, cytotoxic function, and Treg maintenance (autoimmunity) — not selectively spare everything except intracellular-bacteria containment. The in vitro findings localize the defect to Th1 polarization (IL-12), not proliferation (IL-2).",
        },
        {
          label: "C",
          text: "IL-8 deficiency preventing neutrophil recruitment to mycobacterial lesions",
          why: "IL-8 deficiency would present with recurrent pyogenic infections from failed neutrophil chemotaxis (absent pus, staphylococcal/gram-negative infections), not slow-growing intracellular organisms with intact pyogenic immunity — and BCG dissemination points at macrophage activation, not neutrophil delivery.",
        },
        {
          label: "D",
          text: "IL-10 overproduction attenuating MHC class II expression and macrophage function",
          why: "IL-10 excess would suppress the whole response (opportunistic infections of many classes, impaired antigen presentation) — not the selective mycobacteria-Salmonella pattern, and the in vitro macrophage cytokine production (IL-1/IL-6/TNF-α preserved) argues against a global attenuator.",
        },
        {
          label: "E",
          text: "IL-6 deficiency with absent acute-phase protein production",
          why: "IL-6 loss impairs fever and acute-phase responses (CRP) — a lab phenotype — but does not abolish Th1 polarization or mycobacterial containment; the child's macrophages make IL-6 normally in vitro, and his infections are the intracellular pattern, not the acute-phase pattern.",
        },
      ],
      reasoning:
        "The organism pattern IS the axis: disseminated BCG + nontuberculous mycobacteria + Salmonella = intracellular pathogens whose clearance depends on the IL-12 → Th1 → IFN-γ → macrophage-activation axis (IL-12 also facilitates granuloma formation in TB, and IFN-γ stimulates macrophages to kill phagocytosed pathogens and induces granulomas). The in vitro data complete the localization: macrophage cytokines intact (IL-1/IL-6/TNF-α preserved) but Th1 polarization absent and IFN-γ negligible — the defect is IL-12 (or its receptor). Distractors break other beats of the command sequence: IL-2 (expansion), IL-8 (neutrophil delivery), IL-10 (attenuation), IL-6 (acute phase) — each would produce a different infection pattern.",
    },
  },
  mnemonics: [
    {
      code: "\u201cThree alarms ring the sepsis bell: IL-1 lights it, IL-6 labels it, TNF-α leaks it.\u201d",
      meaning:
        "KYP's key for the macrophage acute trio: IL-1 lights the fever and acute inflammation (and activates endothelial adhesion molecules, induces chemokines — also called osteoclast-activating factor); IL-6 labels the response with acute-phase proteins (CRP); TNF-α opens the vessels (endothelial activation, WBC recruitment, vascular leak) — and cachexia and TB granulomas. Together: fever and sepsis.",
      memorizes: "IL-1 / IL-6 / TNF-α functions and the sepsis trio",
      whenToUse: "Any fever, sepsis, cachexia, or acute-phase question.",
      clinical: "Anti-TNF dissolves its granulomas (screen for TB); anti-IL-1 and anti-IL-6 agents treat autoinflammatory syndromes and RA.",
    },
    {
      code: "\u201cIL-8 is the aisle where neutrophils shop; IL-12 points the T cell down aisle 1.\u201d",
      meaning:
        "KYP's key for the two recruiters: IL-8 is the major chemotactic factor for NEUTROPHILS (the aisle where they shop for infection to clear); IL-12 sends naive T cells down the Th1 aisle (differentiation) and wakes NK cells — with granuloma facilitation in TB alongside.",
      memorizes: "IL-8 = neutrophil chemotaxis; IL-12 = Th1 + NK + granulomas",
      whenToUse: "Any chemotaxis or Th1-polarization question.",
      clinical: "IL-12/IFN-γ-axis failures = disseminated atypical mycobacteria and Salmonella.",
    },
    {
      code: "\u201cThe Th1/Th2 seesaw: IFN-γ pumps the Th1 side and mutes Th2; IL-4 flips it, IL-10 pulls the plug.\u201d",
      meaning:
        "KYP's key for cross-regulation: IFN-γ (Th1) activates macrophages, raises MHC everywhere, drives IgG switching, and INHIBITS Th2 differentiation. IL-4 (Th2) drives Th2 differentiation itself (plus B-cell growth, IgE/IgG switching). IL-10 (Th2 and Tregs) attenuates the whole response — ↓MHC II, ↓Th1 cytokines, macrophage/DC inhibition — with TGF-β as the co-attenuator. The axis tilts by which side's cytokines dominate.",
      memorizes: "Th1 vs Th2 cytokines and their mutual suppression",
      whenToUse: "Any polarization, isotype-switching, or attenuation question.",
      clinical: "Anti-IL-4R/IL-13 (dupilumab) exploits the Th2 side for asthma/eczema; IL-10 biology underlies Treg-mediated tolerance.",
    },
  ],
  rapidReview: {
    s30: [
      "Timeline: acute (IL-1, IL-6, TNF-α), then recruit (IL-8, IL-12)",
      "IL-1: fever, acute inflammation, endothelial adhesion molecules, chemokines (osteoclast-activating factor)",
      "IL-6: fever + acute-phase proteins · TNF-α: endothelial activation, WBC recruitment, vascular leak",
      "IL-8: major neutrophil chemotactic factor · IL-12: Th1 differentiation + NK activation + TB granulomas",
      "IL-2 (T cell): growth of helper, cytotoxic, regulatory T cells + NK · IL-3: marrow stem cells (GM-CSF-like)",
    ],
    m3: [
      "IFN-γ (Th1/NK, triggered by antigen or IL-12): macrophage killing, granulomas, ↑MHC everywhere, IgG switching, inhibits Th2",
      "IL-4: Th2 differentiation, B-cell growth, IgE + IgG switching",
      "IL-5: B-cell growth, IgA switching, eosinophil growth/differentiation",
      "IL-10: attenuates — ↓MHC II, ↓Th1 cytokines, inhibits macrophages/DCs (also from Tregs)",
      "IL-13: IgE production + alternative macrophage activation",
    ],
    m10: [
      "Fever + sepsis trio: IL-1, IL-6, TNF-α (all macrophage-derived)",
      "Granuloma cytokines: TNF-α maintains, IL-12 + IFN-γ form — anti-TNF reactivates TB",
      "Isotype switching map: IFN-γ→IgG · IL-4→IgE/IgG · IL-5→IgA · IL-13→IgE",
      "TGF-β + IL-10 both attenuate the immune response",
      "IL-12 axis failure = disseminated atypical mycobacteria + Salmonella (treat with IFN-γ)",
    ],
  },
  recall: [
    {
      q: "List the macrophage-secreted cytokines with their functions.",
      a: "IL-1: fever, acute inflammation; activates endothelium to express adhesion molecules; induces chemokine secretion to recruit WBCs; also called osteoclast-activating factor. IL-6: fever and acute-phase protein production. TNF-α: activates endothelium, WBC recruitment, vascular leak; cachexia in malignancy; maintains granulomas in TB. IL-8: major chemotactic factor for neutrophils. IL-12: induces Th1 differentiation, activates NK cells, facilitates granuloma formation in TB.",
    },
    {
      q: "Which three cytokines mediate fever and sepsis?",
      a: "IL-1, IL-6, and TNF-α can mediate fever and sepsis. The sequencing rule: acute (IL-1, IL-6, TNF-α), then recruit (IL-8, IL-12).",
    },
    {
      q: "What are the T-cell-secreted interleukins and their functions?",
      a: "IL-2: stimulates growth of helper, cytotoxic, and regulatory T cells, and NK cells. IL-3: supports growth and differentiation of bone marrow stem cells; functions like GM-CSF.",
    },
    {
      q: "List all six functions of interferon-γ.",
      a: "Secreted by NK cells and T cells in response to antigen or IL-12 from macrophages; stimulates macrophages to kill phagocytosed pathogens; inhibits differentiation of Th2 cells; induces IgG isotype switching in B cells; increases MHC expression and antigen presentation by all cells; activates macrophages to induce granuloma formation.",
    },
    {
      q: "List the Th2 cytokines and their functions, and name the two attenuators.",
      a: "IL-4: Th2 differentiation, B-cell growth, class switching to IgE and IgG. IL-5: B-cell growth and differentiation, class switching to IgA, eosinophil growth and differentiation. IL-10: attenuates inflammatory response, decreases MHC II and Th1 cytokines, inhibits activated macrophages and dendritic cells (also from Tregs). IL-13: IgE production by B cells, alternative macrophage activation. TGF-β and IL-10 both attenuate the immune response.",
    },
  ],
  related: [
    {
      title: "T-Cell Development: Thymic Selection & Subset Lineages",
      topicId: "t-cell-development",
      note: "The switchboard this page's cytokines drive — IL-12 into Th1, IL-4 into Th2, TGF-β/IL-6 into Th17, TGF-β/IL-2 into Treg.",
    },
    {
      title: "Effector T Cells: Cytotoxic, Regulatory & the Macrophage Interface",
      topicId: "cytotoxic-regulatory-t-cells",
      note: "IFN-γ + CD40L-CD40 is the Th1-macrophage loop; IL-10/TGF-β is the Treg brake — the cytokines at work.",
    },
    {
      title: "Immunosuppressants",
      topicId: "immunosuppressants",
      note: "IL-2 is the transplant target (calcineurin inhibitors, sirolimus, basiliximab); anti-TNF and anti-IL agents build on this roster.",
    },
    {
      title: "Immunodeficiency Infection Patterns",
      topicId: "immunodeficiency-infection-patterns",
      note: "The IL-12/IFN-γ axis failure pattern — atypical mycobacteria and Salmonella — sits between this page and the deficiency map.",
    },
  ],
  crossLinks: [
    {
      subject: "Infectious Disease (Tuberculosis)",
      connection: "Granulomas are a cytokine structure — TNF-α maintains them, IL-12 and IFN-γ form them — hence anti-TNF reactivation risk and IL-12/IFN-γ-axis NTM susceptibility.",
    },
    {
      subject: "Pharmacology (Biologics)",
      connection: "The formulary maps onto this page: anti-TNF, anti-IL-1, anti-IL-6, anti-IL-12/23, anti-IL-17, anti-IL-5, IL-2R blockade — each a printed cytokine turned drug target (labeled extension).",
    },
    {
      subject: "Rheumatology",
      connection: "Fever, acute-phase proteins (IL-6/CRP), and cachexia (TNF-α) are the systemic features of autoimmune inflammation — the trio in chronic dress.",
    },
    {
      subject: "Oncology",
      connection: "TNF-α causes cachexia in malignancy; high-dose IL-2 (aldesleukin) treats renal cell carcinoma and melanoma by expanding T cells and NK cells.",
    },
  ],
};
