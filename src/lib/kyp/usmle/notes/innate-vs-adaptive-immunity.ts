import type { KypUsMLENote } from "../types";

// Immunology — Cellular Components (E-batch 20).
// Source: First Aid 2026, Part 1 pdf 119 / book 97
// (innate vs adaptive immunity; innate immunity; adaptive immunity; immune privilege)

export const innateVsAdaptiveImmunity: KypUsMLENote = {
  id: "innate-vs-adaptive-immunity",
  title: "Innate vs Adaptive Immunity",
  subtitle:
    "The two arms of the immune system compared across five axes. Innate: germline-encoded receptors, nonspecific, active within minutes to hours, no memory — neutrophils, macrophages, monocytes, dendritic cells, NK cells (lymphoid origin), complement, epithelial barriers, and secreted enzymes (lysozyme, CRP, defensins), with Toll-like receptors reading PAMPs and DAMPs to activate NF-κB. Adaptive: specificity built by V(D)J recombination during lymphocyte development, responses that develop over long periods but leave memory cells that make re-exposure faster and more robust — T cells, B cells, circulating antibodies — and decline with age (immunosenescence). Plus immune privilege: eye, brain, placenta, testes — sites where chemical and physical mechanisms limit immune responses so inflammation cannot destroy what it cannot rebuild, and allograft rejection is less likely.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Cellular Components",
  pilotCategory: "Cellular Components — innate vs adaptive comparison, TLRs, PAMPs/DAMPs, memory, immunosenescence, immune privilege",
  difficulty: 1,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 97 (innate vs adaptive immunity; innate immunity; adaptive immunity; immune privilege)",
  tags: [
    "innate immunity",
    "adaptive immunity",
    "germline encoded",
    "V(D)J recombination",
    "nonspecific",
    "memory response",
    "neutrophils",
    "NK cells",
    "complement",
    "lysozyme",
    "C-reactive protein",
    "defensins",
    "Toll-like receptors",
    "TLR",
    "PAMPs",
    "DAMPs",
    "NF-κB",
    "LPS",
    "flagellin",
    "immunosenescence",
    "immune privilege",
    "immune-privileged sites",
  ],
  core: {
    what: "Innate immunity is the germline-encoded first line: neutrophils, macrophages, monocytes, dendritic cells, natural killer (NK) cells (lymphoid origin), complement, physical epithelial barriers, and secreted enzymes. Its response to pathogens is nonspecific, occurs rapidly (minutes to hours), and generates no memory. Its secreted proteins are lysozyme, complement, C-reactive protein (CRP), defensins, and cytokines; its pathogen recognition runs through Toll-like receptors (TLRs) — pattern recognition receptors that recognize pathogen- and damage-associated molecular patterns (PAMPs and DAMPs) → activation of NF-κB → release of pro-inflammatory cytokines. Adaptive immunity is the specialist arm: T cells, B cells, and circulating antibodies, with variation generated through V(D)J recombination during lymphocyte development. Its responses are highly specific and refined over time, develop over long periods, and leave memory cells — activated B and T cells — so subsequent exposure to a previously encountered antigen produces a stronger, quicker response; adaptive responses decrease with age (immunosenescence). Immune privilege describes organs (eg, eye, brain, placenta, testes) and tissues where chemical or physical mechanisms limit immune responses to foreign antigens, to avoid damage that would occur from inflammatory sequelae; allograft rejection at these sites is less likely.",
    why: "This comparison is the trunk every later Immunology branch grows from: every cell type, receptor, and drug in the chapter belongs to one arm or the other, and the five axes (components, mechanism, response timing, secreted proteins, recognition) are how exam stems sort them. The TLR→NF-κB pathway is the molecular hinge — the reason sepsis, endotoxemia, and sterile inflammation all feel 'innate'. The memory distinction separates vaccination logic (adaptive) from barrier/complement failure syndromes (innate). And immune privilege explains two classic vignettes: the corneal transplant that survives without systemic immunosuppression, and the eye/brain organ whose inflammatory response would be self-destructive.",
    keyIdea: "Hold the two arms side by side on five axes. Components: phagocytes + NK + complement + barriers vs T cells, B cells, antibodies. Mechanism: germline encoded vs V(D)J recombination. Response: rapid (minutes–hours), nonspecific, no memory vs slow, highly specific, memory that is faster and more robust on re-exposure. Secreted: lysozyme, complement, CRP, defensins vs immunoglobulins. Recognition: TLRs reading PAMPs (LPS of gram-negative bacteria, flagellin, viral nucleic acids) and DAMPs (mitochondrial DNA, histones, heat shock proteins) → NF-κB → pro-inflammatory cytokines vs antigen-specific memory cells. Then the exception: immune-privileged sites (eye, brain, placenta, testes) actively limit immune responses — the corneal allograft's free pass.",
  },
  mechanisms: [
    {
      id: "tlr-nfkb-alert",
      title: "TLR → NF-κB — the innate pattern alarm",
      context: "Pathogen recognition in innate immunity",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A molecular pattern appears: PAMP (pathogen) or DAMP (damage)",
            sublabel: "Input — LPS (gram ⊝ bacteria), flagellin, viral nucleic acids; mitochondrial DNA, histones, heat shock proteins.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Toll-like receptors (TLRs) — germline-encoded pattern recognition receptors — bind the pattern",
            sublabel: "Process — no gene rearrangement needed; every innate cell carries the receptor set from birth.",
            variant: "process",
          },
          {
            id: "s2",
            label: "TLR activation converges on NF-κB, the transcription factor that switches on inflammatory genes",
            sublabel: "Process — the shared signaling hub.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Release of pro-inflammatory cytokines: the minutes-to-hours response",
            sublabel: "Output — fever, acute-phase proteins, endothelial activation, neutrophil recruitment.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "PAMP/DAMP" },
          { from: "s1", to: "s2", label: "TLR activation" },
          { from: "s2", to: "o1", label: "NF-κB" },
        ],
        caption:
          "The innate arm does not need to learn a pathogen — it inherits a receptor repertoire (germline encoded) that reads conserved molecular patterns. PAMPs mark pathogens: LPS is the gram-negative signature, flagellin the motile-bacterium signature, nucleic acids the viral signature. DAMPs mark sterile damage: mitochondria release their DNA (which looks bacterial to a TLR), histones, and heat shock proteins when cells die violently. Both pattern families funnel through TLRs into NF-κB activation and a burst of pro-inflammatory cytokines — the same machinery whether the trigger is sepsis or a crush injury. This is why the innate response is nonspecific, fast (minutes to hours), and identical on every encounter — no memory.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "innate-vs-adaptive-arms",
      title: "The two arms — components, timing, and the memory curve",
      caption:
        "An original KYP diagram: the innate panel (germline-encoded, nonspecific, minutes-to-hours, no memory; neutrophils, macrophages, monocytes, dendritic cells, NK cells, complement, barriers, lysozyme/CRP/defensins; TLR-PAMP/DAMP recognition through NF-κB) beside the adaptive panel (V(D)J recombination, highly specific, slow primary response, faster and more robust memory; T cells, B cells, antibodies; immunosenescence), with a response-vs-time strip contrasting the flat innate curve with the lagging primary and brisk secondary adaptive curves.",
      notice:
        "The source page presents a five-row comparison table and no artwork (pdfimages confirms no rasters on pdf 119); this visual is an original KYP teaching diagram, and the verbatim table is the note's next block.",
    },
    {
      kind: "table",
      title: "Innate vs adaptive immunity — verbatim",
      intro: "The source's five-row comparison table, verbatim.",
      columns: ["", "Innate immunity", "Adaptive immunity"],
      rows: [
        ["COMPONENTS", "Neutrophils, macrophages, monocytes, dendritic cells, natural killer (NK) cells (lymphoid origin), complement, physical epithelial barriers, secreted enzymes.", "T cells, B cells, circulating antibodies."],
        ["MECHANISM", "Germline encoded.", "Variation through V(D)J recombination during lymphocyte development."],
        ["RESPONSE TO PATHOGENS", "Nonspecific. Occurs rapidly (minutes to hours). No memory response.", "Highly specific, refined over time. Develops over long periods; memory response is faster and more robust."],
        ["SECRETED PROTEINS", "Lysozyme, complement, C-reactive protein (CRP), defensins, cytokines.", "Immunoglobulins, cytokines."],
        ["KEY FEATURES IN PATHOGEN RECOGNITION", "Toll-like receptors (TLRs): pattern recognition receptors that recognize pathogen- and damage-associated molecular patterns (PAMPs and DAMPs) → activation of NF-κB → release of pro-inflammatory cytokines. Examples of PAMPs: LPS (gram ⊝ bacteria), flagellin (bacteria), nucleic acids (viruses). Examples of DAMPs: mitochondrial DNA, histones, heat shock proteins.", "Memory cells: activated B and T cells; subsequent exposure to a previously encountered antigen → stronger, quicker immune response. Adaptive immune responses decrease with age (immunosenescence)."],
      ],
      caption:
        "Read the table by rows, not cells: each row is one axis of comparison. The exam rarely asks for a single cell — it asks which arm changes when V(D)J fails (adaptive), which responds to LPS within the hour (innate), and which arm a vaccine trains (adaptive memory).",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Immune privilege — where inflammation is forbidden",
      body: "Organs (eg, eye, brain, placenta, testes) and tissues where chemical or physical mechanisms limit immune responses to foreign antigens, to avoid damage that would occur from inflammatory sequelae. Allograft rejection at these sites is less likely — the reason a corneal transplant can survive without systemic immunosuppression.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A researcher injects LPS and measures cytokines within one hour; the response is identical on the tenth injection.",
        discriminator: "Minutes-to-hours response + no memory on repeat exposure",
        concept: "Innate immunity (TLR → NF-κB)",
        answer:
          "LPS is a PAMP (gram-negative signature) recognized by germline-encoded Toll-like receptors → NF-κB activation → pro-inflammatory cytokines within minutes to hours. The innate arm is nonspecific and generates no memory, so the tenth response equals the first. An adaptive response would lag days on first exposure and be faster and more robust on re-exposure.",
      },
      {
        stem: "A trauma patient with a crush injury has high fever and a rising CRP eight hours after admission; cultures are negative and there is no infection.",
        discriminator: "Inflammation without infection = DAMP-driven innate activation",
        concept: "Sterile inflammation (DAMPs → TLRs → NF-κB)",
        answer:
          "DAMPs are the damage-associated molecular patterns released by violently dying cells: mitochondrial DNA (which resembles bacterial DNA to a TLR), histones, and heat shock proteins. Like the PAMPs of infection (LPS, flagellin, viral nucleic acids), they activate Toll-like receptors → NF-κB → pro-inflammatory cytokines — the same fever, CRP rise, and cytokine profile as sepsis, with sterile cultures. The innate arm cannot tell 'infected' from 'crushed'; it only reads patterns.",
      },
      {
        stem: "An 80-year-old patient's antibody titers after vaccination rise more slowly and peak lower than a 25-year-old's.",
        discriminator: "Blunted vaccine response in the elderly",
        concept: "Immunosenescence — adaptive immunity decreases with age",
        answer:
          "Adaptive immune responses decrease with age (immunosenescence): fewer naïve T cells (thymic involution — see the lymphoid structures note), less robust B-cell responses, weaker memory formation. The innate arm's speed is preserved even as the adaptive arm's learning slows — the basis for high-dose and adjuvanted vaccines in the elderly.",
      },
    ],
    traps: [
      {
        a: "NK cells are adaptive cells because they are lymphocytes",
        b: "NK cells are INNATE despite their lymphoid origin",
        whyConfused: "Lymphocyte lineage feels adaptive by definition.",
        keyDifference:
          "The source's table lists NK cells under innate COMPONENTS with the explicit parenthetical '(lymphoid origin)': they share a lineage with T and B cells but use germline-encoded receptors, respond within minutes-to-hours, and form no memory — innate by every functional axis.",
        clue: "Any 'which lymphocyte is innate' question.",
      },
      {
        a: "Complement is an adaptive protein because antibodies activate it",
        b: "Complement is innate — the classical pathway is merely borrowed by adaptive antibodies",
        whyConfused: "IgG/IgM immune complexes activate the classical pathway.",
        keyDifference:
          "Complement is listed among innate components and innate secreted proteins: it is germline encoded, acts immediately, and has no memory; the classical pathway simply gives adaptive antibodies a handle on an innate effector. The alternative and lectin pathways run with no adaptive input at all.",
        clue: "Any complement-classification question.",
      },
      {
        a: "Immune-privileged sites cannot mount any immune response",
        b: "Responses are limited — not absent — to avoid inflammatory damage",
        whyConfused: "'Privilege' sounds like immunity does not apply.",
        keyDifference:
          "Chemical and physical mechanisms LIMIT immune responses to foreign antigens at these sites (eye, brain, placenta, testes) — to avoid the damage that inflammatory sequelae would cause in tissue that cannot regenerate (cornea, neurons). That is why allograft rejection there is less likely, not impossible.",
        clue: "Any corneal-graft or ocular-inflammation question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Fast response vs memory response (which arm, which timing)",
        differentiator: "Speed and history-dependence",
        correctPath:
          "Minutes to hours, same magnitude every time = innate (no memory). Days on first exposure, then faster and more robust on re-exposure = adaptive memory (activated B and T cells). A blunted secondary response in an elderly patient = immunosenescence of the adaptive arm, not innate failure.",
      },
      {
        lookAlike: "The corneal graft vs the skin graft",
        differentiator: "Immune-privileged site vs ordinary tissue",
        correctPath:
          "Cornea (eye = immune-privileged): chemical and physical barriers limit immune responses; allograft rejection is less likely; topical immunosuppression at most. Skin (ordinary site): full allograft rejection machinery — T-cell-mediated rejection requiring systemic immunosuppression. Same donor-recipient mismatch, different tissue rules.",
      },
    ],
    miniCase: {
      vignette:
        "A 68-year-old man with corneal scarring from a childhood chemical injury receives a penetrating keratoplasty (full-thickness corneal transplant) from an unrelated deceased donor. He is treated with topical steroid drops only. Eighteen months later the graft remains clear without any systemic immunosuppression, and his vision is 20/40. His daughter, a nursing student, asks why a kidney transplant patient she met needs 'a dozen pills' while her father needed only eye drops.",
      question:
        "Which property of the transplanted organ best explains the different immunosuppressive requirements?",
      options: [
        {
          label: "A",
          text: "The cornea is an immune-privileged site: chemical and physical mechanisms limit immune responses to foreign antigens, so allograft rejection is less likely",
          correct: true,
          why: "Correct — the eye limits immune responses (blood-ocular barrier, low MHC expression, immunosuppressive factors in aqueous humor, absence of lymphatic drainage in the cornea) precisely because inflammatory sequelae would destroy tissue that cannot regenerate. Allograft rejection at immune-privileged sites (eye, brain, placenta, testes) is less likely, so topical steroids suffice.",
        },
        {
          label: "B",
          text: "The cornea is avascular, so it cannot be rejected by any mechanism",
          why: "Avascularity and lymphatic exclusion reduce — but do not abolish — allorecognition; rejection can still occur (epithelial, stromal, and endothelial rejection exist). 'Cannot be rejected' overstates the privilege; the source says rejection is LESS likely, not impossible.",
        },
        {
          label: "C",
          text: "Corneal antigens do not express MHC molecules, so T cells cannot recognize them",
          why: "Corneal cells do express MHC (low expression of class I on the endothelium contributes to privilege) — MHC-negative cells would be NK-cell targets. The privilege is about limited RESPONSE, not absent antigens.",
        },
        {
          label: "D",
          text: "The patient's age (68) means his adaptive immunity can no longer mount rejection",
          why: "Immunosenescence slows and weakens adaptive responses but does not eliminate them — elderly patients reject solid-organ grafts and still require systemic immunosuppression.",
        },
        {
          label: "E",
          text: "Topical steroids abolish circulating lymphocytes, making systemic immunosuppression unnecessary",
          why: "Topical steroids act locally on ocular inflammation; they do not create systemic lymphocyte depletion. The explanation is the site's immune privilege, not the drug's reach.",
        },
      ],
      reasoning:
        "The question turns one printed sentence into a clinical comparison: immune-privileged organs (eye, brain, placenta, testes) limit immune responses to foreign antigens through chemical and physical mechanisms — to avoid the damage inflammatory sequelae would cause — so allograft rejection there is less likely. The distractors all overstate the privilege (avascular = cannot reject, no MHC) or misattribute it (age, drug reach). The daughter's kidney-transplant comparison is the control: an ordinary vascularized organ meets the full adaptive rejection machinery and needs systemic immunosuppression.",
    },
  },
  mnemonics: [
    {
      code: "\u201cInnate is born with it; adaptive earns it.\u201d",
      meaning:
        "KYP's key for the mechanism axis: innate receptors are germline encoded (present from birth, identical in every cell), while adaptive specificity must be built through V(D)J recombination during lymphocyte development and refined through selection and memory.",
      memorizes: "The mechanism row of the comparison",
      whenToUse: "Any 'how does each arm generate its receptor diversity' question.",
      clinical: "V(D)J failure (RAG mutations) → no adaptive specificity → SCID with intact innate responses.",
    },
    {
      code: "\u201cPrivilege lives where inflammation cannot be repaired: eye, brain, placenta, testes.\u201d",
      meaning:
        "KYP's place-key for the four immune-privileged sites — all organs where inflammatory damage would be irreversible (cornea and neurons do not regenerate, the placenta must tolerate foreign paternal antigen, the testes must protect immunogenic haploid cells).",
      memorizes: "The immune-privileged sites and their logic",
      whenToUse: "Any corneal-graft or privileged-site question.",
      clinical: "Corneal transplant survives with topical steroids alone; the same mismatch in skin or kidney requires systemic immunosuppression.",
    },
  ],
  rapidReview: {
    s30: [
      "Innate: germline encoded, nonspecific, minutes-hours, NO memory",
      "Adaptive: V(D)J recombination, highly specific, slow primary, faster/robust memory",
      "Innate cells: neutrophils, macrophages, monocytes, dendritic cells, NK cells (lymphoid origin!)",
      "Innate proteins: lysozyme, complement, CRP, defensins · adaptive: immunoglobulins",
    ],
    m3: [
      "TLRs: pattern recognition receptors for PAMPs and DAMPs → NF-κB → pro-inflammatory cytokines",
      "PAMPs: LPS (gram ⊝), flagellin, viral nucleic acids · DAMPs: mitochondrial DNA, histones, heat shock proteins",
      "Memory cells = activated B and T cells → stronger, quicker response on re-exposure",
      "Immunosenescence: adaptive responses decrease with age (weak vaccine responses)",
    ],
    m10: [
      "Immune-privileged sites: eye, brain, placenta, testes — allograft rejection less likely",
      "Corneal transplant = topical steroids only (privilege); kidney/skin = systemic immunosuppression",
      "NK cells: lymphoid origin but functionally INNATE",
      "Complement: innate protein even when antibodies activate the classical pathway",
    ],
  },
  recall: [
    {
      q: "List the components, secreted proteins, and recognition strategy of innate immunity.",
      a: "Components: neutrophils, macrophages, monocytes, dendritic cells, natural killer (NK) cells (lymphoid origin), complement, physical epithelial barriers, secreted enzymes. Secreted proteins: lysozyme, complement, C-reactive protein (CRP), defensins, cytokines. Recognition: Toll-like receptors (TLRs) — pattern recognition receptors for PAMPs and DAMPs → NF-κB activation → pro-inflammatory cytokines.",
    },
    {
      q: "How does adaptive immunity generate specificity, and what changes on re-exposure to an antigen?",
      a: "Variation through V(D)J recombination during lymphocyte development. On subsequent exposure to a previously encountered antigen, memory cells (activated B and T cells) produce a stronger, quicker immune response — faster and more robust than the primary response.",
    },
    {
      q: "Name examples of PAMPs and DAMPs.",
      a: "PAMPs: LPS (gram-negative bacteria), flagellin (bacteria), nucleic acids (viruses). DAMPs: mitochondrial DNA, histones, heat shock proteins.",
    },
    {
      q: "Which immune cell is lymphoid in origin yet innate in function, and why?",
      a: "Natural killer (NK) cells — lymphoid origin, but germline-encoded receptors, minutes-to-hours response, and no memory place them among the innate components (the source's table states this explicitly).",
    },
    {
      q: "Define immune privilege, name the four classic sites, and state the transplantation consequence.",
      a: "Organs and tissues where chemical or physical mechanisms limit immune responses to foreign antigens, to avoid damage from inflammatory sequelae. Sites: eye, brain, placenta, testes. Consequence: allograft rejection at these sites is less likely (eg, corneal transplant without systemic immunosuppression).",
    },
  ],
  related: [
    {
      title: "Lymphoid Structures: Lymph Node, Spleen & Thymus",
      topicId: "lymphoid-structures",
      note: "The architecture where the two arms meet antigen — macrophage filtration (innate) and follicle/paracortex responses (adaptive).",
    },
    {
      title: "Complement Pathways & Disorders",
      topicId: "complement-pathways",
      note: "Complement is the innate arm's effector cascade — its three activation routes and its deficiency syndromes.",
    },
    {
      title: "T-Cell Development: Thymic Selection & Subset Lineages",
      topicId: "t-cell-development",
      note: "Where the adaptive arm's V(D)J-built receptors are selected — positive and negative selection in the thymus.",
    },
    {
      title: "Transplant Rejection",
      topicId: "transplant-rejection",
      note: "The rejection clock that immune-privileged sites slow down — hyperacute to chronic, and the graft-versus-host exception.",
    },
  ],
  crossLinks: [
    {
      subject: "Microbiology (Gram-negative sepsis)",
      connection: "LPS is the PAMP that fires TLR4 → NF-κB → pro-inflammatory cytokines — the molecular engine of gram-negative septic shock.",
    },
    {
      subject: "Ophthalmology & Transplantation",
      connection: "Corneal grafting exploits immune privilege: topical steroids only, no systemic immunosuppression — contrast with vascularized organ grafts.",
    },
    {
      subject: "Geriatrics & Public Health",
      connection: "Immunosenescence blunts vaccine responses — high-dose, adjuvanted, and spaced revaccination strategies exist for exactly this reason.",
    },
    {
      subject: "Biochemistry (Cell Signaling)",
      connection: "NF-κB is the shared transcription hub for innate alert — the same factor glucocorticoids suppress when they calm inflammation.",
    },
  ],
};
