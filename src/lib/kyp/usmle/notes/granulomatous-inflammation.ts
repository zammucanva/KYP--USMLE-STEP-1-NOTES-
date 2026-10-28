import type { KypUsMLENote } from "../types";

// Pathology — INFLAMMATION banner (P-batch 11). Source: pdf 235-236 /
// book 213-214 (Granulomatous inflammation + Scar formation — the
// wall-off definition; the HISTOLOGY block with the caseating/
// noncaseating fork; the MECHANISM cascade [APC → IL-12/CD40-CD40L →
// CD4+ Th1 → IFN-γ → macrophage activation → ↑ TNF → epithelioid
// macrophages + giant cells] with the anti-TNF latent-TB rule and
// the 1α-hydroxylase hypercalcemia rule; the eTIOLOGIeS table
// [Infectious vs Noninfectious]; and the Scar formation block with
// the hypertrophic-vs-keloid 5-row comparison). Census (pdfimages +
// VLM): THREE copyrighted photographs — p235's A (an H&E micrograph
// of a caseating granuloma: central amorphous pink acellular
// necrosis with a black arrow, ringed by epithelioid cells and
// lymphocytes) and p236's A and B (clinical photographs: A = a
// raised red/pink linear hypertrophic scar confined to the original
// wound with a measuring ruler; B = a large dark lobulated clawlike
// keloid extending beyond the wound on an earlobe/neck area) — ALL
// described-in-text only, NEVER reproduced (the M32 convention).
// The MECHANISM figure is VECTOR LINE ART (APC, T cell, Th1 cell,
// activated macrophage, giant cell, granuloma with IL-12, CD40L/
// CD40, TCR/MHC II, IFN-γ, TNF, Lymphocyte, Fibroblast, Epithelioid
// cell labels) — redrawn as an ORIGINAL KYP figure (the P2/P3
// pure-vector convention). NO margin notes or mnemonics on either
// page (VLM confirmed); the KYP memory layer is original.

export const granulomatousInflammation: KypUsMLENote = {
  id: "granulomatous-inflammation",
  title: "Granulomatous Inflammation & Scar Types",
  subtitle:
    "The body's prison for what it cannot kill, and the scar it leaves behind (book 213-214) — GRANULOMATOUS INFLAMMATION: a pattern of chronic inflammation induced by persistent T-cell response to certain infections (eg, TB), immune-mediated diseases, and foreign bodies; granulomas 'wall off' a resistant stimulus without completely eradicating or degrading it → persistent inflammation → fibrosis, organ damage. THE HISTOLOGY — a focus of epithelioid cells (activated macrophages with abundant pink cytoplasm) surrounded by lymphocytes and multinucleated giant cells (formed by fusion of several activated macrophages); CASEATING (central necrosis; infectious — TB, fungal) against NONCASEATING (no necrosis; noninfectious — sarcoidosis, Crohn disease). THE MECHANISM — APCs present antigens to CD4+ Th cells and secrete IL-12 → Th1 differentiation; Th1 secretes IFN-γ → macrophage activation; macrophages ↑ cytokine secretion (eg, TNF) → epithelioid macrophages and giant cells; with the two clinical rules: anti-TNF therapy can break down sequestering granulomas → disseminated disease (always test for latent TB first), and hypercalcemia from ↑ 1α-hydroxylase activity in activated macrophages → ↑ vitamin D activity. THE ETIOLOGIES — Infectious (mycobacteria TB and leprosy; Bartonella henselae with stellate necrotizing granulomas; Listeria granulomatosis infantiseptica; Treponema pallidum 3° syphilis; endemic mycoses; schistosomiasis; catalase-positive organisms in chronic granulomatous disease) against Noninfectious (sarcoidosis, Crohn, 1° biliary cholangitis, de Quervain granulomatous thyroiditis; the vasculitides GPA, EGPA, giant cell temporal arteritis, Takayasu; berylliosis, talcosis, hypersensitivity pneumonitis). SCAR FORMATION — repair that cannot be accomplished by regeneration alone; nonregenerated cells replaced by connective tissue; 70%-80% of tensile strength regained at 3 months with little thereafter; excess TGF-β → hypertrophic and keloid scars; the 5-row split: HYPERTROPHIC (↑ collagen type III > type I, parallel, confined to the wound borders, infrequent recurrence, no predisposition) against KELOID (↑↑↑ collagen type I > type III, disorganized, clawlike extensions beyond the borders on earlobes/face/upper extremities, frequent recurrence, ↑ in darker skin).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Inflammation",
  pilotCategory:
    "The granuloma's complete architecture — the wall-off definition, the epithelioid-giant-cell histology with the caseating/noncaseating fork, the APC→Th1→IFN-γ→TNF mechanism cascade with the anti-TNF latent-TB rule and the 1α-hydroxylase hypercalcemia rule, the full infectious/noninfectious etiology table (including the CGD catalase-positive entry), and the scar-formation block with the hypertrophic-versus-keloid comparison across all five rows.",
  difficulty: 2,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 213–214 (Pathology — Inflammation: Granulomatous inflammation [definition, HISTOLOGY with the caseating/noncaseating fork, the MECHANISM cascade with the anti-TNF and hypercalcemia rules, the eTIOLOGIeS table]; Scar formation [the 70%-80% tensile-strength rule, the excess TGF-β association, and the hypertrophic-vs-keloid 5-row comparison]; the three lettered photographs, described in text)",
  tags: [
    "granulomatous inflammation",
    "granuloma",
    "chronic inflammation",
    "wall off",
    "epithelioid cells",
    "activated macrophages",
    "multinucleated giant cells",
    "caseating granuloma",
    "noncaseating granuloma",
    "central necrosis",
    "tuberculosis",
    "fungal infections",
    "sarcoidosis",
    "Crohn disease",
    "APC",
    "IL-12",
    "Th1 cells",
    "IFN-gamma",
    "macrophage activation",
    "TNF",
    "anti-TNF therapy",
    "latent TB",
    "disseminated disease",
    "hypercalcemia",
    "1-alpha-hydroxylase",
    "vitamin D",
    "Mycobacteria",
    "leprosy",
    "Bartonella henselae",
    "cat scratch disease",
    "stellate necrotizing granulomas",
    "Listeria monocytogenes",
    "granulomatosis infantiseptica",
    "Treponema pallidum",
    "tertiary syphilis",
    "endemic mycoses",
    "histoplasmosis",
    "schistosomiasis",
    "catalase-positive organisms",
    "chronic granulomatous disease",
    "primary biliary cholangitis",
    "de Quervain thyroiditis",
    "subacute granulomatous thyroiditis",
    "granulomatosis with polyangiitis",
    "eosinophilic granulomatosis with polyangiitis",
    "giant cell arteritis",
    "temporal arteritis",
    "Takayasu arteritis",
    "berylliosis",
    "talcosis",
    "hypersensitivity pneumonitis",
    "scar formation",
    "connective tissue",
    "tensile strength",
    "TGF-beta",
    "hypertrophic scar",
    "keloid scar",
    "collagen synthesis",
    "type III collagen",
    "type I collagen",
    "parallel collagen",
    "disorganized collagen",
    "clawlike projections",
    "earlobes",
    "recurrence",
    "darker skin predisposition",
  ],
  core: {
    what: "GRANULOMATOUS INFLAMMATION: a pattern of chronic inflammation; can be induced by persistent T-cell response to certain infections (eg, TB), immune-mediated diseases, and foreign bodies; granulomas 'wall off' a resistant stimulus without completely eradicating or degrading it → persistent inflammation → fibrosis, organ damage. HISTOLOGY: focus of epithelioid cells (activated macrophages with abundant pink cytoplasm) surrounded by lymphocytes and multinucleated giant cells (formed by fusion of several activated macrophages). Two types — CASEATING: associated with central necrosis; seen with infectious etiologies (eg, TB, fungal). NONCASEATING: no central necrosis; seen with noninfectious etiologies (eg, sarcoidosis, Crohn disease). MECHANISM: APCs present antigens to CD4+ Th cells and secrete IL-12 → CD4+ Th cells differentiate into Th1 cells; Th1 secretes IFN-γ → macrophage activation; macrophages ↑ cytokine secretion (eg, TNF) → formation of epithelioid macrophages and giant cells. Anti-TNF therapy can cause sequestering granulomas to break down → disseminated disease — always test for latent TB before starting anti-TNF therapy. Associated with hypercalcemia due to ↑ 1α-hydroxylase activity in activated macrophages, resulting in ↑ vitamin D activity. ETIOLOGIES — Infectious: bacterial — Mycobacteria (TB, leprosy), Bartonella henselae (cat scratch disease; stellate necrotizing granulomas), Listeria monocytogenes (granulomatosis infantiseptica), Treponema pallidum (3° syphilis); fungal — endemic mycoses (eg, histoplasmosis); parasitic — schistosomiasis; catalase-positive organisms in chronic granulomatous disease. Noninfectious: immune-mediated — sarcoidosis, Crohn disease, 1° biliary cholangitis, subacute (de Quervain/granulomatous) thyroiditis; vasculitis — granulomatosis with polyangiitis, eosinophilic granulomatosis with polyangiitis, giant cell (temporal) arteritis, Takayasu arteritis; foreign bodies — berylliosis, talcosis, hypersensitivity pneumonitis. SCAR FORMATION: occurs when repair cannot be accomplished by cell regeneration alone; nonregenerated cells (2° to severe acute or chronic injury) are replaced by connective tissue; 70%-80% of tensile strength regained at 3 months; little tensile strength regained thereafter; excess TGF-β is associated with aberrant scarring, such as hypertrophic and keloid scars. HYPERTROPHIC SCAR: collagen synthesis ↑ (type III > type I); collagen organization parallel; extent confined to borders of original wound; recurrence infrequent; predisposition none. KELOID SCAR: collagen synthesis ↑↑↑ (type I > type III); collagen organization disorganized; extent beyond the borders of the original wound with 'clawlike' projections typically on earlobes, face, upper extremities; recurrence frequent; predisposition ↑ incidence in people with darker skin.",
    why: "This two-page spread is the inflammation banner's finale, and it pairs two failure modes of repair: the granuloma (the body imprisoning what it cannot kill) and the scar (the body rebuilding what it cannot regenerate). The granuloma is defined by its logic — wall off a resistant stimulus without eradicating it, accepting persistent inflammation, fibrosis, and organ damage as the price of containment — and by its histology: the epithelioid macrophage with its abundant pink cytoplasm, the rimming lymphocytes, and the multinucleated giant cell fused from several macrophages. The fork is the exam's first discriminator: central amorphous necrosis means CASEATING and points to the infectious column (TB and fungi), while a clean ring means NONCASEATING and points to the noninfectious column (sarcoidosis, Crohn). The mechanism cascade names the molecular chain — APC antigen presentation with IL-12 and CD40-CD40L costimulation driving Th1 differentiation, Th1's IFN-γ activating the macrophage, and TNF building the epithelioid-giant-cell wall — and the two clinical rules hang directly off it: blockade of TNF dissolves the wall and releases the mycobacteria (hence the latent-TB test before anti-TNF therapy), and the activated macrophage's ectopic 1α-hydroxylase makes vitamin D (hence sarcoid granulomas' hypercalcemia). The etiology table is the fork's full inventory, with the CGD entry as the immunology crossover (catalase-positive organisms escaping the failed oxidative burst to be walled off instead). Then scar formation closes the banner: when regeneration cannot finish, connective tissue replaces the nonregenerated cells, 70-80% of tensile strength returns by 3 months, and excess TGF-β drives the two aberrant scars — the hypertrophic scar that overbuilds INSIDE the borders (parallel, type III-dominant, nonrecurring) and the keloid that overbuilds BEYOND them (disorganized, type I-dominant, clawlike, recurring, and predisposed in darker skin).",
    keyIdea:
      "Read every granuloma question through four frames. FRAME 1 — THE FORK: central necrosis = CASEATING = infectious (TB, fungal); no necrosis = NONCASEATING = noninfectious (sarcoidosis, Crohn, the vasculitides, foreign bodies). FRAME 2 — THE CASCADE: APC + IL-12 + CD40-CD40L → CD4+ Th1 → IFN-γ → macrophage activation → ↑ TNF → epithelioid macrophages + giant cells → the granuloma (lymphocytes rimming, fibroblasts walling). FRAME 3 — THE TWO RULES: anti-TNF therapy breaks sequestering granulomas → disseminated disease (test latent TB FIRST); activated macrophages carry 1α-hydroxylase → ↑ vitamin D → hypercalcemia. FRAME 4 — THE ETIOLOGY COLUMNS: infectious (mycobacteria TB/leprosy, Bartonella henselae stellate, Listeria infantiseptica, T pallidum 3°, endemic mycoses, schistosomiasis, catalase-positive in CGD) against noninfectious (sarcoidosis, Crohn, 1° biliary cholangitis, de Quervain; GPA, EGPA, GCA, Takayasu; berylliosis, talcosis, hypersensitivity pneumonitis). And the scar split: HYPERTROPHIC = ↑ type III > I, parallel, confined, infrequent recurrence, no predisposition; KELOID = ↑↑↑ type I > III, disorganized, clawlike beyond the borders (earlobes, face, upper extremities), frequent recurrence, ↑ in darker skin — both driven by excess TGF-β, with 70-80% of tensile strength back at 3 months.",
  },
  mechanisms: [
    {
      id: "granuloma-cascade",
      title: "The granuloma cascade: from antigen presentation to the walled-off fortress",
      context: "The MECHANISM block and figure (book 213)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A resistant stimulus the immune system cannot eradicate",
            sublabel: "Input — certain infections (eg, TB), immune-mediated diseases, foreign bodies; the persistent T-cell response is the induction.",
            variant: "input",
          },
          {
            id: "presentation",
            label: "THE PRESENTATION — APC + IL-12 + CD40-CD40L to the CD4+ Th cell",
            sublabel: "APCs present antigens to CD4+ Th cells (MHC II-TCR) and secrete IL-12, with CD40-CD40L costimulation → the CD4+ Th cells differentiate into Th1 cells.",
            variant: "process",
          },
          {
            id: "activation",
            label: "THE ACTIVATION — Th1 IFN-γ switches on the macrophage",
            sublabel: "Th1 secretes IFN-γ → macrophage activation; the activated macrophage ↑ cytokine secretion (eg, TNF) → formation of epithelioid macrophages and giant cells (fusion of several activated macrophages).",
            variant: "process",
          },
          {
            id: "granuloma",
            label: "THE FORTRESS — epithelioid cells + giant cells + lymphocytes + fibroblasts",
            sublabel: "The granuloma walls off the stimulus without eradicating it → persistent inflammation → fibrosis, organ damage — containment as the final answer.",
            variant: "process",
          },
          {
            id: "output",
            label: "The two rules that follow from the wall",
            sublabel: "Output — ANTI-TNF: the wall's mortar is TNF; blockade dissolves sequestering granulomas → disseminated disease (test latent TB first). HYPERCALCEMIA: the activated macrophage's ↑ 1α-hydroxylase makes vitamin D → ↑ calcium.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "presentation", label: "persists" },
          { from: "presentation", to: "activation", label: "Th1 → IFN-γ" },
          { from: "activation", to: "granuloma", label: "↑ TNF" },
          { from: "granuloma", to: "output", label: "the price of containment" },
        ],
      },
    },
    {
      id: "scar-overbuild-fork",
      title: "The scar fork: overbuild inside the borders (hypertrophic) or beyond them (keloid)",
      context: "The Scar formation block (book 214)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Repair that cannot be accomplished by cell regeneration alone",
            sublabel: "Input — severe acute or chronic injury; the nonregenerated cells are replaced by connective tissue, and 70%-80% of tensile strength returns by 3 months with little thereafter.",
            variant: "input",
          },
          {
            id: "tgf",
            label: "THE DRIVER — excess TGF-β and the aberrant scar",
            sublabel: "Excess TGF-β is associated with aberrant scarring: the hypertrophic and keloid scars — the fibrosis molecule of the whole banner (P6's radiation dermatitis, P10's mediators) overdriven in both.",
            variant: "process",
          },
          {
            id: "hypertrophic",
            label: "HYPERTROPHIC — the disciplined overbuild",
            sublabel: "Collagen ↑ (type III > type I), PARALLEL organization, confined to the borders of the original wound, infrequent recurrence, no predisposition.",
            variant: "process",
          },
          {
            id: "keloid",
            label: "KELOID — the escaped overbuild",
            sublabel: "Collagen ↑↑↑ (type I > type III), DISORGANIZED, extends beyond the borders with 'clawlike' projections (earlobes, face, upper extremities), frequent recurrence, ↑ incidence in people with darker skin.",
            variant: "process",
          },
          {
            id: "output",
            label: "Name the scar by its borders and its collagen",
            sublabel: "Output — inside the borders with parallel type III = hypertrophic; beyond the borders with disorganized type I = keloid — the two-question rule that resolves the comparison table.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "tgf", label: "excess TGF-β" },
          { from: "tgf", to: "hypertrophic", label: "overbuild, contained" },
          { from: "tgf", to: "keloid", label: "overbuild, escaped" },
          { from: "hypertrophic", to: "output", label: "borders + collagen" },
          { from: "keloid", to: "output", label: "borders + collagen" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "granuloma-scar-map",
      title: "The granuloma and scar map (an original KYP adaptation with a redrawn cascade)",
      caption:
        "An original KYP adaptation of the source pages (book 213-214): the granuloma panel (the wall-off definition with the fibrosis-organ-damage endpoint, the histology with epithelioid cells and giant cells and the caseating-versus-noncaseating fork, photograph A described); the mechanism cascade as an original KYP redraw of the source's vector figure (APC presenting antigen with MHC II-TCR, IL-12, and CD40-CD40L to the CD4+ T cell, Th1 differentiation, IFN-γ activating the macrophage, TNF driving the epithelioid macrophages and giant cells into the granuloma with rimming lymphocytes and walling fibroblasts); the two clinical rules (the anti-TNF latent-TB rule and the 1α-hydroxylase hypercalcemia rule); the etiologies table as the infectious/noninfectious columns with the CGD catalase-positive entry; and the scar formation band (the 70%-80% tensile-strength rule, excess TGF-β, and the hypertrophic-versus-keloid comparison across all five rows with photographs A and B described).",
      notice:
        "Census (pdfimages + VLM): THREE copyrighted photographs on these pages — p235's A (an H&E micrograph of a caseating granuloma: central amorphous pink acellular necrosis with a black arrow, ringed by epithelioid cells and lymphocytes, beside the HISTOLOGY block) and p236's A and B (clinical photographs beneath the comparison table: A = a raised red/pink linear hypertrophic scar confined to the original wound with a measuring ruler; B = a large dark lobulated clawlike keloid extending well beyond the wound on an earlobe/neck area). ALL described in text in this note's tables and in the registry visual, NEVER reproduced (the M32 convention). The MECHANISM figure is vector line art (all labels in the text layer) — redrawn as an ORIGINAL KYP figure with original glyphs (the P2/P3 pure-vector convention). No margin notes or mnemonics print on either page (VLM census confirmed); the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title: "Book 213 — the granuloma definition, histology, and mechanism (carried verbatim)",
      intro: "The granuloma's logic and molecular chain, as printed.",
      columns: ["BLOCK", "VERBATIM — book 213"],
      rows: [
        [
          "THE DEFINITION",
          "A pattern of chronic inflammation. Can be induced by persistent T-cell response to certain infections (eg, TB), immune-mediated diseases, and foreign bodies. Granulomas “wall off” a resistant stimulus without completely eradicating or degrading it → persistent inflammation → fibrosis, organ damage.",
        ],
        [
          "THE HISTOLOGY",
          "Focus of epithelioid cells (activated macrophages with abundant pink cytoplasm) surrounded by lymphocytes and multinucleated giant cells (formed by fusion of several activated macrophages). Two types: Caseating: associated with central necrosis A. Seen with infectious etiologies (eg, TB, fungal). Noncaseating: no central necrosis. Seen with noninfectious etiologies (eg, sarcoidosis, Crohn disease). [Photograph A, described in text: an H&E micrograph of a caseating granuloma — central amorphous pink acellular necrosis with a black arrow, ringed by epithelioid cells and lymphocytes.]",
        ],
        [
          "THE MECHANISM",
          "APCs present antigens to CD4+ Th cells and secrete IL-12 → CD4+ Th cells differentiate into Th1 cells. Th1 secretes IFN-γ → macrophage activation. Macrophages ↑ cytokine secretion (eg, TNF) → formation of epithelioid macrophages and giant cells.",
        ],
        [
          "THE ANTI-TNF RULE",
          "Anti-TNF therapy can cause sequestering granulomas to break down → disseminated disease. Always test for latent TB before starting anti-TNF therapy.",
        ],
        [
          "THE HYPERCALCEMIA RULE",
          "Associated with hypercalcemia due to ↑ 1α-hydroxylase activity in activated macrophages, resulting in ↑ vitamin D activity.",
        ],
      ],
      caption:
        "The wall-off logic, the epithelioid-giant-cell histology with its caseating/noncaseating fork, the APC→Th1→IFN-γ→TNF chain, and the two clinical rules that follow from the wall: TNF is the mortar (anti-TNF dissolves it — test for latent TB), and the activated macrophage carries the kidney's vitamin-D enzyme.",
    },
    {
      kind: "table",
      title: "Book 213 — the etiologies table (carried verbatim, both columns)",
      intro: "The fork's full inventory, as printed.",
      columns: ["Infectious (verbatim)", "Noninfectious (verbatim)"],
      rows: [
        [
          "Bacterial: Mycobacteria (TB, leprosy), Bartonella henselae (cat scratch disease; stellate necrotizing granulomas), Listeria monocytogenes (granulomatosis infantiseptica), Treponema pallidum (3° syphilis)",
          "Immune-mediated: sarcoidosis, Crohn disease, 1° biliary cholangitis, subacute (de Quervain/granulomatous) thyroiditis",
        ],
        [
          "Fungal: endemic mycoses (eg, histoplasmosis)",
          "Vasculitis: granulomatosis with polyangiitis, eosinophilic granulomatosis with polyangiitis, giant cell (temporal) arteritis, Takayasu arteritis",
        ],
        [
          "Parasitic: schistosomiasis",
          "Foreign bodies: berylliosis, talcosis, hypersensitivity pneumonitis",
        ],
        [
          "Catalase ⊕ organisms in chronic granulomatous disease",
          "",
        ],
      ],
      caption:
        "The infectious column (caseating-leaning: mycobacteria, Bartonella's stellate necrotizing granulomas, Listeria's infantiseptica, tertiary syphilis, endemic mycoses, schistosomiasis, and the CGD catalase-positive entry) against the noninfectious column (noncaseating-leaning: the immune-mediated quartet, the four vasculitides, and the three foreign-body exposures).",
    },
    {
      kind: "table",
      title: "Book 214 — scar formation and the hypertrophic-versus-keloid comparison (carried verbatim)",
      intro: "The repair finale, as printed — the tensile-strength rule, the TGF-β driver, and all five comparison rows.",
      columns: ["ROW", "HYPERTROPHIC SCAR (A) · KELOID SCAR (B) — book 214"],
      rows: [
        [
          "THE SCAR FORMATION RULE",
          "Occurs when repair cannot be accomplished by cell regeneration alone. Nonregenerated cells (2° to severe acute or chronic injury) are replaced by connective tissue. 70%-80% of tensile strength regained at 3 months; little tensile strength regained thereafter. Excess TGF-β is associated with aberrant scarring, such as hypertrophic and keloid scars.",
        ],
        [
          "COLLAGeN SYNTHeSIS",
          "HYPERTROPHIC: ↑ (type III > type I). KELOID: ↑↑↑ (type I > type III).",
        ],
        [
          "COLLAGeN ORGANIZATION",
          "HYPERTROPHIC: Parallel. KELOID: Disorganized.",
        ],
        [
          "eXTeNT Of SCAR",
          "HYPERTROPHIC: Confined to borders of original wound. KELOID: Extends beyond borders of original wound with “clawlike” projections typically on earlobes, face, upper extremities.",
        ],
        [
          "ReCURReNCe · PReDISPOSITION",
          "HYPERTROPHIC: Infrequent · None. KELOID: Frequent · ↑ incidence in people with darker skin.",
        ],
        [
          "THE TWO PHOTOGRAPHS (described in text — copyrighted, never reproduced)",
          "PHOTOGRAPH A (cmyk JPEG, ~427x340, 150 dpi): a clinical photograph of a hypertrophic scar — a raised, red/pink linear scar confined to the width of the original wound, with a measuring ruler alongside. PHOTOGRAPH B (~428x340): a clinical photograph of a keloid — a large, dark, lobulated, clawlike mass extending significantly beyond the original wound boundary, on an earlobe/neck area.",
        ],
      ],
      caption:
        "The two-question rule closes the table: where are the borders (inside = hypertrophic; beyond, clawlike = keloid) and which collagen dominates (type III, parallel = hypertrophic; type I, disorganized = keloid) — with recurrence and the darker-skin predisposition as the tiebreakers.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 34-year-old woman presents with fatigue, a dry cough, and tender shin nodules; chest imaging shows bilateral hilar lymphadenopathy, and a lymph node biopsy shows tightly formed noncaseating granulomas. Serum calcium is 11.8 mg/dL with elevated 1,25-dihydroxy vitamin D.",
        discriminator: "Sarcoidosis — noncaseating granulomas with macrophage 1α-hydroxylase driving the hypercalcemia",
        concept: "The noncaseating fork + the hypercalcemia rule",
        answer:
          "The noncaseating (no central necrosis) granuloma points to the noninfectious column — sarcoidosis first among the immune-mediated entries (hilar lymphadenopathy and erythema nodosum completing the classic picture) — and the hypercalcemia follows the printed rule: activated macrophages within the granulomas carry ↑ 1α-hydroxylase activity, converting 25-OH vitamin D to the active 1,25-dihydroxy form → ↑ vitamin D activity → ↑ calcium absorption and the elevated serum level.",
      },
      {
        stem: "A 62-year-old man with rheumatoid arthritis is scheduled to start adalimumab; his screening tuberculin skin test is placed the week before, and a chest radiograph from 2 years ago shows a calcified granuloma in the right apex.",
        discriminator: "The anti-TNF latent-TB rule — sequestering granulomas break down under TNF blockade → disseminated disease; always test for latent TB first",
        concept: "The mortar rule",
        answer:
          "The printed rule is verbatim: anti-TNF therapy can cause sequestering granulomas to break down → disseminated disease; always test for latent TB before starting anti-TNF therapy. The calcified apical granuloma is the sequestered infection; TNF is the mortar holding the wall — adalimumab (an anti-TNF agent) can dissolve it and release dormant mycobacteria into dissemination. The screening test BEFORE therapy is the standard of care.",
      },
      {
        stem: "A 19-year-old man develops a large, dark, lobulated mass extending well beyond the margins of a 2-month-old ear-piercing wound; his older brother had a similar lesion after a shaving cut.",
        discriminator: "Keloid — disorganized type I-dominant collagen extending beyond the wound borders with clawlike projections; frequent recurrence; ↑ in darker skin",
        concept: "The escaped overbuild",
        answer:
          "The keloid signature: ↑↑↑ collagen synthesis with type I > type III, DISORGANIZED collagen, extension BEYOND the borders of the original wound with clawlike projections (typically earlobes, face, upper extremities — the earlobe piercing being the classic trigger), frequent recurrence after excision, and the ↑ incidence in people with darker skin (the family history hinting at the predisposition). Excess TGF-β drives both keloids and hypertrophic scars; the borders are the discriminator.",
      },
    ],
    traps: [
      {
        a: "Caseating granuloma",
        b: "Noncaseating granuloma",
        whyConfused: "Both are granulomas with epithelioid cells and giant cells",
        keyDifference: "CASEATING has central necrosis and points to infectious etiologies (TB, fungal); NONCASEATING has no central necrosis and points to noninfectious etiologies (sarcoidosis, Crohn disease, the vasculitides, foreign bodies)",
        clue: "The amorphous necrotic center on histology (or the TB/fungal exposure) → caseating; the clean ring with a noninfectious disease in the stem → noncaseating",
      },
      {
        a: "Hypertrophic scar",
        b: "Keloid",
        whyConfused: "Both are raised aberrant scars driven by excess TGF-β",
        keyDifference: "HYPERTROPHIC: ↑ collagen type III > I, parallel, confined to the wound borders, infrequent recurrence, no predisposition; KELOID: ↑↑↑ type I > III, disorganized, clawlike extensions BEYOND the borders (earlobes, face, upper extremities), frequent recurrence, ↑ in darker skin",
        clue: "The borders are the discriminator: inside the original wound = hypertrophic; beyond it with clawlike projections = keloid",
      },
      {
        a: "Anti-TNF granuloma breakdown",
        b: "The granuloma's hypercalcemia",
        whyConfused: "Both are clinical rules printed beside the same cascade",
        keyDifference: "TNF is the wall's structural cytokine — blockade dissolves sequestering granulomas and disseminates the walled organism (hence the latent-TB test); the hypercalcemia is enzymatic — the activated macrophage's ectopic 1α-hydroxylase making active vitamin D",
        clue: "A question about starting a biologic → the anti-TNF/latent-TB rule; a question about calcium or vitamin D in sarcoidosis → the 1α-hydroxylase rule",
      },
      {
        a: "The CGD catalase-positive entry",
        b: "The infectious etiology column",
        whyConfused: "The CGD organisms are also bacteria and fungi",
        keyDifference: "The catalase ⊕ organisms in chronic granulomatous disease are the immunology crossover — the failed oxidative burst hands catalase-positive microbes (eg, S aureus, Aspergillus, Serratia) to the granuloma builder; they sit in the etiology table as the named CGD entry, distinct from the mycobacteria-TB-syphilis rows",
        clue: "A child with recurrent catalase-positive abscesses and granulomas → the CGD entry; a pure-infection stem without the immunodeficiency → the standard infectious rows",
      },
    ],
    pivots: [
      {
        lookAlike: "A granuloma on histology — which etiology column?",
        differentiator: "Route by the necrosis first (caseating → infectious; noncaseating → noninfectious), then by the column's entries: mycobacteria/Bartonella/Listeria/T pallidum/mycoses/schistosomiasis/CGD-catalase against sarcoidosis/Crohn/PBC/de Quervain/GPA/EGPA/GCA/Takayasu/berylliosis/talcosis/hypersensitivity pneumonitis",
        correctPath: "Necrosis present + TB or fungal exposure → the infectious column; clean ring + a systemic inflammatory or foreign-body story → the noninfectious column",
      },
      {
        lookAlike: "A raised scar at a wound site — hypertrophic or keloid?",
        differentiator: "The two-question rule: (1) the BORDERS — confined (hypertrophic) or clawlike extensions beyond, on earlobes/face/upper extremities (keloid); (2) the COLLAGEN — type III-dominant and parallel (hypertrophic) or type I-dominant and disorganized (keloid) — with recurrence frequency and the darker-skin predisposition as tiebreakers",
        correctPath: "Inside the borders with parallel type III = hypertrophic; beyond the borders with disorganized type I = keloid — both are excess-TGF-β aberrant scars",
      },
    ],
    miniCase: {
      vignette:
        "A 41-year-old woman presents with 3 months of fatigue, night sweats without fever, and a 6-lb weight loss. Chest CT shows bilateral hilar and mediastinal lymphadenopathy without consolidation. A lymph node biopsy shows well-formed granulomas with epithelioid cells, scattered multinucleated giant cells, and rimming lymphocytes; there is no central necrosis. Serum calcium is 12.1 mg/dL, 25-hydroxy vitamin D is low-normal, and 1,25-dihydroxy vitamin D is elevated; PTH is suppressed. Angiotensin-converting enzyme level is elevated. Because of severe arthritis, her rheumatologist proposes starting an anti-TNF agent; an interferon-γ release assay is placed.",
      question:
        "Name the histologic type of granuloma and the disease, explain the calcium and vitamin D findings, and state why the interferon-γ release assay and latent-TB screening must precede the anti-TNF therapy.",
      options: [
        {
          label: "Noncaseating granulomas of sarcoidosis — no central necrosis, noninfectious etiology; the macrophage 1α-hydroxylase is making 1,25-dihydroxy vitamin D ectopically (suppressed PTH, elevated calcium); anti-TNF can dissolve sequestering granulomas and disseminate latent TB, so screening must come first",
          text: "Clean ring, ectopic enzyme, and a wall that must stay up.",
          correct: true,
          why: "Correct on all four layers. (1) The HISTOLOGY: epithelioid cells, multinucleated giant cells, and rimming lymphocytes WITHOUT central necrosis = NONCASEATING — the fork that points to the noninfectious column, and with bilateral hilar lymphadenopathy, elevated ACE, and the arthritis, sarcoidosis is the leading entry. (2) THE CALCIUM: the printed rule — hypercalcemia due to ↑ 1α-hydroxylase activity in activated macrophages, resulting in ↑ vitamin D activity; the granuloma's macrophages convert 25-OH to 1,25-dihydroxy vitamin D autonomously (hence the elevated active form with a low-normal precursor and the appropriately suppressed PTH). (3) THE ANTI-TNF RULE: verbatim — anti-TNF therapy can cause sequestering granulomas to break down → disseminated disease; always test for latent TB before starting anti-TNF therapy. (4) The IGRA is that test: TNF is the structural mortar of the granuloma wall, and its blockade can release dormant mycobacteria from a walled focus — the calcified or latent lesion that the screening must find before the first dose.",
        },
        {
          label: "Caseating granulomas of tuberculosis — the night sweats and weight loss mandate mycobacterial disease, and the calcium is from bone destruction",
          text: "The necrotic center is surely there; the apical disease explains the calcium.",
          why: "Wrong fork and wrong calcium mechanism: the biopsy explicitly shows NO central necrosis — the noncaseating pattern that steers away from TB and toward sarcoidosis (hilar adenopathy, elevated ACE, the low-normal 25-OH with HIGH 1,25-dihydroxy and suppressed PTH is the ectopic-enzyme signature, not bone lysis). The night sweats and weight loss are compatible with sarcoid's systemic symptoms.",
        },
        {
          label: "The hypercalcemia is primary hyperparathyroidism coincident with the granulomas, and the anti-TNF concern is only an allergic reaction",
          text: "The PTH story and the drug allergy are the real issues.",
          why: "Wrong endocrine axis and wrong drug risk: primary hyperparathyroidism would show an UNSUPPRESSED (elevated) PTH with the calcium — the stem's suppressed PTH excludes it and names the vitamin-D-driven (1α-hydroxylase) route. And anti-TNF's printed danger is structural, not allergic: the breakdown of sequestering granulomas → disseminated disease.",
        },
        {
          label: "The granulomas are foreign-body reactions to inhaled beryllium, and no latent-TB screening is needed for a metal exposure",
          text: "The occupational history is the missing piece; the biologic is safe without testing.",
          why: "Wrong etiology and dangerous omission: berylliosis is a legitimate noncaseating entry (and can mimic sarcoidosis), but nothing in the stem supplies the exposure, and the elevated 1,25-dihydroxy vitamin D with suppressed PTH is the macrophage-enzyme signature that fits the sarcoid granuloma. The latent-TB screen before anti-TNF is the printed rule regardless of the granuloma's cause — TNF blockade threatens ANY sequestered mycobacterium.",
        },
        {
          label: "The granulomas are Giant cell (temporal) arteritis — the giant cells name the vasculitis, and calcium is irrelevant to the biologic decision",
          text: "The giant cells are the histologic diagnosis; the rest is noise.",
          why: "Wrong disease family: giant cell arteritis is a VASCULITIS (one of the noninfectious entries, but its lesions are arterial-wall granulomas with headache/jaw claudication in an elderly patient, not hilar lymphadenopathy with ectopic vitamin D in a 41-year-old). The multinucleated giant cell is a component of every granuloma, not a diagnosis — and the anti-TNF latent-TB rule stands for any patient, calcium or no calcium.",
        },
      ],
      reasoning:
        "The stem walks all four frames of the page. (1) THE FORK: the biopsy's clean granulomas (epithelioid cells, giant cells, lymphocytes, NO central necrosis) = NONCASEATING → the noninfectious column → sarcoidosis (hilar lymphadenopathy, elevated ACE, arthritis). (2) THE CASCADE: the granuloma is the endpoint of APC-IL-12-CD40/CD40L → Th1 → IFN-γ → macrophage activation → TNF-driven epithelioid and giant cells. (3) THE TWO RULES: the hypercalcemia is the macrophage 1α-hydroxylase rule (ectopic 1,25-dihydroxy vitamin D with suppressed PTH — not hyperparathyroidism, not bone destruction), and the anti-TNF rule is verbatim (sequestering granulomas break down → disseminated disease; always test for latent TB BEFORE therapy — the IGRA in the stem). (4) THE DIFFERENTIATORS: caseating/TB (the necrosis the biopsy excludes), hyperparathyroidism (the suppressed PTH excludes), beryllium (no exposure; and it would not remove the latent-TB rule), and GCA (a vasculitis of elderly arteries, not a hilar-lymph-node disease). The four-frame rule — fork, cascade, rules, columns — closes the case.",
    },
  },
  mnemonics: [
    {
      code: "NECROSIS NAMES THE INFECTION",
      meaning: "The fork: CASEATING (central necrosis) = infectious etiologies (TB, fungal); NONCASEATING (no necrosis) = noninfectious etiologies (sarcoidosis, Crohn disease, the vasculitides, the foreign bodies) — the amorphous center is the microbiologic surrender that separates the two columns.",
      memorizes: "The histology fork",
      whenToUse: "Any granuloma histology question asking for the etiology family",
      clinical: "The cheese-like center of TB against the clean ring of sarcoid — the microscope's first routing decision.",
    },
    {
      code: "IL-12 TO TH1 TO IFN-γ TO TNF",
      meaning: "The mechanism cascade verbatim as a chain: APCs present antigens to CD4+ Th cells and secrete IL-12 → Th1 differentiation; Th1 secretes IFN-γ → macrophage activation; macrophages ↑ cytokine secretion (eg, TNF) → formation of epithelioid macrophages and giant cells — the granuloma.",
      memorizes: "The mechanism block",
      whenToUse: "Any granuloma-formation mechanism or cytokine question",
      clinical: "Two cytokines build the wall: IFN-γ activates the bricklayer, TNF lays the mortar.",
    },
    {
      code: "THE MORTAR AND THE ENZYME",
      meaning: "The two clinical rules: TNF is the granuloma's MORTAR — anti-TNF therapy can cause sequestering granulomas to break down → disseminated disease (always test for latent TB before starting anti-TNF therapy); and the activated macrophage carries the kidney's ENZYME — ↑ 1α-hydroxylase → ↑ vitamin D activity → hypercalcemia.",
      memorizes: "The two clinical rules",
      whenToUse: "Any anti-TNF screening question or any sarcoidosis calcium question",
      clinical: "Dissolve the mortar and the prisoner escapes; give the bricklayer the kidney's enzyme and the calcium rises.",
    },
    {
      code: "INSIDE THE BORDERS, BEYOND THE BORDERS",
      meaning: "The scar fork: HYPERTROPHIC stays INSIDE — ↑ collagen (type III > type I), parallel, confined to the wound borders, infrequent recurrence, no predisposition; KELOID goes BEYOND — ↑↑↑ collagen (type I > type III), disorganized, clawlike projections past the borders (earlobes, face, upper extremities), frequent recurrence, ↑ in people with darker skin; both driven by excess TGF-β, with 70%-80% of tensile strength regained at 3 months.",
      memorizes: "The hypertrophic-versus-keloid table",
      whenToUse: "Any scar-comparison question",
      clinical: "The disciplined overbuild against the escaped one — the wound's borders are the whole diagnosis.",
    },
  ],
  rapidReview: {
    s30: [
      "Granulomatous inflammation: a pattern of chronic inflammation; persistent T-cell response to infections (TB), immune-mediated diseases, foreign bodies; granulomas wall off a resistant stimulus without eradicating it → persistent inflammation → fibrosis, organ damage",
      "Histology: epithelioid cells (activated macrophages, abundant pink cytoplasm) + lymphocytes + multinucleated giant cells (fusion of several activated macrophages); CASEATING = central necrosis, infectious (TB, fungal); NONCASEATING = no necrosis, noninfectious (sarcoidosis, Crohn)",
      "Mechanism: APC + IL-12 → CD4+ Th1; Th1 IFN-γ → macrophage activation; macrophage ↑ TNF → epithelioid macrophages + giant cells",
      "Anti-TNF rule: anti-TNF therapy can cause sequestering granulomas to break down → disseminated disease; always test for latent TB before starting anti-TNF therapy",
      "Hypercalcemia rule: ↑ 1α-hydroxylase activity in activated macrophages → ↑ vitamin D activity → hypercalcemia (the sarcoid granuloma's calcium)",
      "Etiologies — infectious: Mycobacteria (TB, leprosy), Bartonella henselae (cat scratch; stellate necrotizing granulomas), Listeria monocytogenes (granulomatosis infantiseptica), Treponema pallidum (3° syphilis), endemic mycoses (histoplasmosis), schistosomiasis, catalase ⊕ organisms in CGD",
      "Etiologies — noninfectious: sarcoidosis, Crohn, 1° biliary cholangitis, de Quervain granulomatous thyroiditis; GPA, EGPA, giant cell (temporal) arteritis, Takayasu; berylliosis, talcosis, hypersensitivity pneumonitis",
      "Scar formation: repair that cannot be done by regeneration alone; nonregenerated cells → connective tissue; 70%-80% of tensile strength at 3 months, little thereafter; excess TGF-β → hypertrophic and keloid scars",
      "Hypertrophic scar: ↑ collagen (type III > I), parallel, confined to wound borders, infrequent recurrence, no predisposition; Keloid: ↑↑↑ (type I > III), disorganized, clawlike beyond borders (earlobes, face, upper extremities), frequent recurrence, ↑ in darker skin",
    ],
    m3: [
      "NECROSIS NAMES THE INFECTION — caseating (necrosis, infectious) vs noncaseating (clean, noninfectious)",
      "IL-12 TO TH1 TO IFN-γ TO TNF — the granuloma's molecular chain",
      "THE MORTAR AND THE ENZYME — anti-TNF dissolves the wall (test latent TB first); macrophage 1α-hydroxylase makes vitamin D (hypercalcemia)",
      "INSIDE THE BORDERS, BEYOND THE BORDERS — hypertrophic vs keloid by extent, collagen type, organization, recurrence, and skin predisposition",
      "The CGD entry: catalase-positive organisms walled off when the oxidative burst fails — the immunology crossover in the etiology table",
    ],
    m10: [
      "Bartonella henselae makes stellate necrotizing granulomas (cat scratch disease); Listeria makes granulomatosis infantiseptica; T pallidum makes 3° syphilis gummas",
      "The four vasculitic granulomatoses: GPA (formerly Wegener), EGPA (Churg-Strauss), giant cell (temporal) arteritis, Takayasu arteritis",
      "The three foreign-body exposures: berylliosis, talcosis, hypersensitivity pneumonitis",
      "70%-80% of tensile strength regained at 3 months — little thereafter; excess TGF-β is the aberrant-scar driver (shared with P6's chronic radiation dermatitis and P10's fibrosis)",
      "The three copyrighted photographs (described in text): the caseating granuloma H&E (central amorphous necrosis with black arrow); the hypertrophic scar (raised linear, ruler-photographed, confined); the keloid (dark lobulated clawlike mass beyond the wound on an earlobe/neck)",
    ],
  },
  recall: [
    {
      q: "The granuloma definition and histology verbatim — including the fork.",
      a: "DEFINITION: A pattern of chronic inflammation. Can be induced by persistent T-cell response to certain infections (eg, TB), immune-mediated diseases, and foreign bodies. Granulomas “wall off” a resistant stimulus without completely eradicating or degrading it → persistent inflammation → fibrosis, organ damage. HISTOLOGY: Focus of epithelioid cells (activated macrophages with abundant pink cytoplasm) surrounded by lymphocytes and multinucleated giant cells (formed by fusion of several activated macrophages). Two types: Caseating: associated with central necrosis. Seen with infectious etiologies (eg, TB, fungal). Noncaseating: no central necrosis. Seen with noninfectious etiologies (eg, sarcoidosis, Crohn disease).",
    },
    {
      q: "The mechanism block verbatim — the cascade and both clinical rules.",
      a: "APCs present antigens to CD4+ Th cells and secrete IL-12 → CD4+ Th cells differentiate into Th1 cells. Th1 secretes IFN-γ → macrophage activation. Macrophages ↑ cytokine secretion (eg, TNF) → formation of epithelioid macrophages and giant cells. Anti-TNF therapy can cause sequestering granulomas to break down → disseminated disease. Always test for latent TB before starting anti-TNF therapy. Associated with hypercalcemia due to ↑ 1α-hydroxylase activity in activated macrophages, resulting in ↑ vitamin D activity.",
    },
    {
      q: "The etiologies table verbatim — both columns.",
      a: "Infectious — Bacterial: Mycobacteria (TB, leprosy), Bartonella henselae (cat scratch disease; stellate necrotizing granulomas), Listeria monocytogenes (granulomatosis infantiseptica), Treponema pallidum (3° syphilis). Fungal: endemic mycoses (eg, histoplasmosis). Parasitic: schistosomiasis. Catalase ⊕ organisms in chronic granulomatous disease. Noninfectious — Immune-mediated: sarcoidosis, Crohn disease, 1° biliary cholangitis, subacute (de Quervain/granulomatous) thyroiditis. Vasculitis: granulomatosis with polyangiitis, eosinophilic granulomatosis with polyangiitis, giant cell (temporal) arteritis, Takayasu arteritis. Foreign bodies: berylliosis, talcosis, hypersensitivity pneumonitis.",
    },
    {
      q: "The scar formation block verbatim — the rule and the driver.",
      a: "Occurs when repair cannot be accomplished by cell regeneration alone. Nonregenerated cells (2° to severe acute or chronic injury) are replaced by connective tissue. 70%-80% of tensile strength regained at 3 months; little tensile strength regained thereafter. Excess TGF-β is associated with aberrant scarring, such as hypertrophic and keloid scars.",
    },
    {
      q: "The hypertrophic-versus-keloid table verbatim — all five rows.",
      a: "COLLAGeN SYNTHeSIS: Hypertrophic ↑ (type III > type I); Keloid ↑↑↑ (type I > type III). COLLAGeN ORGANIZATION: Hypertrophic Parallel; Keloid Disorganized. eXTeNT Of SCAR: Hypertrophic confined to borders of original wound; Keloid extends beyond borders of original wound with “clawlike” projections typically on earlobes, face, upper extremities. ReCURReNCe: Hypertrophic Infrequent; Keloid Frequent. PReDISPOSITION: Hypertrophic None; Keloid ↑ incidence in people with darker skin.",
    },
  ],
  related: [
    {
      title: "Wound Healing: Mediators & Phases",
      topicId: "wound-healing",
      note: "The scar block is the wound-healing page's sequel: the proliferative build that ends in a scar, the tensile-strength timeline, and TGF-β — the fibrosis molecule that overbuilds both the hypertrophic and the keloid scar.",
    },
    {
      title: "Acute Inflammation: Cardinal Signs & Acute-Phase Reactants",
      topicId: "acute-inflammation",
      note: "Granulomatous inflammation is chronic inflammation's distinctive pattern — the acute panel's fifth outcome (antigen presentation → CD4+ Th cells) matured into the walled-off fortress, with serum amyloid A's chronic elevation completing the chronic-outcome trio.",
    },
    {
      title: "Amyloidosis: The Deposition Diseases",
      topicId: "amyloidosis",
      note: "The chronic-outcome chain runs through this page: scarring, AMYLOIDOSIS (AA from prolonged serum amyloid A elevation), and neoplastic transformation — the granuloma's long-term bill itemized on both pages.",
    },
    {
      title: "Calcification & Radiation Injury",
      topicId: "calcification-radiation-injury",
      note: "The granuloma's afterlife appears on the calcification page: the healed TB granuloma is dystrophic calcification's first listed associated condition — the wall mineralizes after it fibroses.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology (type IV hypersensitivity)",
      connection:
        "The granuloma is cell-mediated immunity's siege engine: persistent antigen presentation to CD4+ Th1 cells with IL-12 and IFN-γ — the same machinery as the type IV hypersensitivity the etiology table invokes for TB and the immune-mediated entries.",
    },
    {
      subject: "Infectious disease (the mycobacteria and the CGD crossover)",
      connection:
        "The infectious column is a microbiology roll call — TB and leprosy, Bartonella's stellate necrotizing granulomas, Listeria's infantiseptica, tertiary syphilis, the endemic mycoses, schistosomiasis — and the CGD entry is the phagocyte-oxidase failure that hands catalase-positive organisms to the granuloma builder.",
    },
    {
      subject: "Rheumatology (anti-TNF therapeutics)",
      connection:
        "TNF inhibitors (etanercept, infliximab, adalimumab) are the rheumatology workhorses whose printed warning lives on this page: blockade dissolves sequestering granulomas and can disseminate latent TB — the screening-IGRA rule before the first dose.",
    },
    {
      subject: "Dermatology (keloid management)",
      connection:
        "The keloid's clawlike extensions on earlobes, face, and upper extremities — with the darker-skin predisposition and frequent recurrence — are the dermatology and otolaryngology consultation scars, managed with excision plus steroid pressure after the borders rule names them.",
    },
  ],
};
