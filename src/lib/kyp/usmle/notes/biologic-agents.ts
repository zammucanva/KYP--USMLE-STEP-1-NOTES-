import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 28. Source: FULL pdf page 276 / book 254 (the LAST
// page of the Pharmacology chapter — pdf 277 opens Public Health Sciences).
// The topic owns the WHOLE page: the "Biologic agents" table, columns
// ENDING / CATEGORY / EXAMPLE, with THREE group banner rows — "Monoclonal
// antibodies (-mab)—target overexpressed cell surface receptors" (3 rows:
// -ximab/rituximab, -zumab/bevacizumab, -umab/denosumab), "Small molecule
// inhibitors (-ib)—target intracellular molecules" (6 rows: -ciclib/
// palbociclib, -coxib/celecoxib, -parib/olaparib, -rafenib/vemurafenib,
// -tinib/imatinib, -zomib/bortezomib), and "Interleukin receptor modulators
// (-kin)—agonists and antagonists of interleukin receptors" (2 rows:
// -leukin/aldesleukin, -kinra/anakinra) — 11 data rows, all three cells
// carried verbatim. Census (pdfimages): ZERO raster images — the page is the
// section header band + ONE table + the indd footer slug (VLM: the table
// occupies the top ~40% of a short page; the lower two-thirds is blank —
// the chapter's final page). VLM AVAILABLE this session (glm-4.6v at 120dpi,
// ONE full-page pass, staging-ph28/vlm-census.txt), confirming the printed
// row order of all 11 rows and the color furniture: red mnemonic letters
// INSIDE the CATEGORY cells (Chi-meric · Humanized · Human · Cyclin- · COX-2
// · Poly(ADP-ribose) · BRAF · Tyrosine kinase · Proteas-ome · Inter-leukin-2
// · interleukin "r"eceptor "a"ntagonist) plus red banner fragments ("anti"-
// bodies, "inhib"itors, Inter"leuk"in), light blue-gray shaded group banner
// rows spanning all three columns, dark navy table title; NO margin
// mnemonics, NO images, NO asterisk footnotes (VLM-confirmed — the red
// highlighting is First Aid's own, carried ATTRIBUTED; the four ALL-CAPS
// codes in this note's Memory section are KYP originals). PRINTED-TEXT
// QUIRKS carried verbatim + documented: (1) ADJUDICATION — the batch brief
// anticipated "-cept fusion proteins" and "the other recombinant
// cytokines/enzymes" rows; they DO NOT PRINT on pdf 276 (raw text layer +
// pdftotext -layout + the VLM pass all agree: the page carries ONLY the
// three stem groups -mab / -ib / -kin; brief corrected to print — the
// -leukin/-kinra interleukin modulators are the page's only cytokine
// family); (2) "SEC TION II" header-space extraction artifact (known,
// carried as-is); (3) the group banners print with em dashes — "(-mab)—
// target", "(-ib)—target", "(-kin)—agonists and antagonists" — and span all
// three columns in print; (4) subscripts/superscripts carry as plain text
// per the cache layer (COX-2, Poly(ADP-ribose)). The KYP diagram
// (biologic-agents-map), the decode-grammar layer, the exam layer, and the
// memory layer are original; the -mab generalizations beyond the three
// printed rows (infliximab, trastuzumab, adalimumab) and the clinical-use
// glosses are KYP context, marked as such. DrugCards are FOLDED (documented
// in the manifest): the page is a NAMING table — it prints category words
// only, no mechanisms/uses/adverse effects to trace, so the DrugCard shape
// does not fit; the naming content is carried in blocks/recall/mnemonics.

export const biologicAgents: KypUsMLENote = {
  id: "biologic-agents",
  title: "Biologic Agents: The Naming Table",
  subtitle:
    "The last table of Pharmacology is a decoder ring. Three stems — -mab (monoclonal antibodies that target overexpressed cell surface receptors), -ib (small molecule inhibitors that target intracellular molecules), -kin (interleukin receptor modulators) — and inside each stem the name carries its own biography: the -xi- of -ximab mixes mouse and human (chimeric — rituximab), the -zu- of -zumab grafts only the binding loops onto a human frame (humanized — bevacizumab), the -u- of -umab is fully human (denosumab). The -ib infixes name the intracellular machine each small molecule jams: -ciclib the cyclin-dependent kinase (palbociclib), -coxib COX-2 (celecoxib), -parib poly(ADP-ribose) polymerase (olaparib), -rafenib BRAF (vemurafenib), -tinib the tyrosine kinase (imatinib), -zomib the proteasome (bortezomib). And the -kin family splits by direction: -leukin is the interleukin-2 agonist/analog (aldesleukin) while -kinra is the interleukin receptor antagonist (anakinra). Learn the grammar once and every biologic name on the exam decodes itself — the stem names the format, the infix names the source or the target, and the format follows the target.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Miscellaneous",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 1,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 254–254 (Pharmacology — Miscellaneous: Biologic agents)",
  tags: [
    "biologic agents",
    "monoclonal antibodies",
    "nomenclature",
    "drug stems",
    "-mab",
    "-ximab",
    "-zumab",
    "-umab",
    "rituximab",
    "bevacizumab",
    "denosumab",
    "chimeric antibody",
    "humanized antibody",
    "human antibody",
    "small molecule inhibitors",
    "-ib",
    "-ciclib",
    "palbociclib",
    "-coxib",
    "celecoxib",
    "-parib",
    "olaparib",
    "-rafenib",
    "vemurafenib",
    "-tinib",
    "imatinib",
    "-zomib",
    "bortezomib",
    "interleukin receptor modulators",
    "-kin",
    "-leukin",
    "aldesleukin",
    "-kinra",
    "anakinra",
    "interleukin-2",
  ],
  core: {
    what:
      "One printed table, carried whole. BIOLOGIC AGENTS — columns ENDING / CATEGORY / EXAMPLE, three group banners, eleven data rows in printed order. GROUP 1 — “Monoclonal antibodies (-mab)—target overexpressed cell surface receptors”: -ximab → Chimeric human-mouse monoclonal antibody → Rituximab; -zumab → Humanized monoclonal antibody → Bevacizumab; -umab → Human monoclonal antibody → Denosumab. GROUP 2 — “Small molecule inhibitors (-ib)—target intracellular molecules”: -ciclib → Cyclin-dependent kinase inhibitor → Palbociclib; -coxib → COX-2 inhibitor → Celecoxib; -parib → Poly(ADP-ribose) polymerase inhibitor → Olaparib; -rafenib → BRAF inhibitor → Vemurafenib; -tinib → Tyrosine kinase inhibitor → Imatinib; -zomib → Proteasome inhibitor → Bortezomib. GROUP 3 — “Interleukin receptor modulators (-kin)—agonists and antagonists of interleukin receptors”: -leukin → Interleukin-2 agonist/analog → Aldesleukin; -kinra → Interleukin receptor antagonist → Anakinra. The page's red mnemonic letters sit inside the CATEGORY cells (Chi-meric, Humanized, Human, Cyclin-, COX-2, Poly, BRAF, Tyrosine kinase, Proteasome, Interleukin-2, interleukin receptor antagonist) — First Aid's own highlighting, carried attributed.",
    why:
      "This table is worth a full page of the book's last Pharmacology real estate because the -mab naming grammar decodes EVERY monoclonal antibody the exam can name — not just the three printed examples. The grammar is a chain of infixes: the stem -mab says “monoclonal antibody”; the source infix immediately before it says how much mouse is left in the molecule (-xi- = chimeric human-mouse, -zu- = humanized, -u- = human); and the rest of the name usually gestures at the target. That chain predicts the pharmacology: the more mouse sequence, the more immunogenic the antibody (infusion reactions, anti-drug antibodies — KYP context), which is precisely why medicine humanized its antibodies from rituximab (-ximab) through bevacizumab (-zumab) to denosumab (-umab). The -ib and -kin families carry the same lesson at the small-molecule and cytokine scales: a cell-surface receptor can be reached by a 150-kDa antibody, but an intracellular molecule (a kinase, COX-2, PARP, BRAF, the proteasome) needs a small molecule that crosses the membrane — the format follows the target — and an interleukin receptor can be pushed OR blocked by a recombinant mimic (aldesleukin the interleukin-2 agonist/analog vs anakinra the interleukin receptor antagonist). This is also the immunology bridge: -leukin and -kinra are the pharmacology of the cytokine physiology taught in Immunology (interleukin-2 and the T-cell expansion it drives; interleukin-1 and the acute inflammation it ignites).",
    keyIdea:
      "Decode, never memorize: every biologic drug name is a sentence with a grammar. MOVE 1 — READ THE STEM, rightmost first: -mab = monoclonal antibody (big protein, extracellular, targets overexpressed cell-surface receptors); -ib = small molecule inhibitor (crosses membranes, targets intracellular molecules); -kin = interleukin receptor modulator (agonists and antagonists of interleukin receptors). MOVE 2 — IF IT IS A -mab, READ THE SOURCE INFIX: -xi- = chimeric human-mouse (mixed, the most mouse, e.g. rituximab); -zu- = humanized (only the binding loops grafted onto a human frame, e.g. bevacizumab); -u- = human (fully human sequence, e.g. denosumab) — the humanization ladder XI MIXES → ZU GRAFTS → U IS HUMAN. MOVE 3 — IF IT IS AN -ib, READ THE TARGET INFIX: the infix names the intracellular machine — -cicl- (cyclin-dependent kinase), -cox- (COX-2), -parib (poly(ADP-ribose) polymerase), -raf- (BRAF), -tin- (tyrosine kinase), -zom- (proteasome). MOVE 4 — IF IT IS A -kin, READ THE DIRECTION: -leukin = the interleukin-2 agonist/analog (aldesleukin — mimics and STIMULATES); -kinra = the interleukin receptor antagonist (anakinra — BLOCKS). Stem → source/target infix → direction: three questions, and any biologic name on the exam — printed on this page or not — answers itself.",
  },
  mechanisms: [
    {
      id: "mab-grammar-map",
      title:
        "The -mab grammar: source infixes route an antibody to chimeric, humanized, or human",
      context: "The printed Monoclonal antibodies (-mab) group (book 254)",
      flow: {
        nodes: [
          {
            id: "name",
            label: "THE DRUG NAME — a monoclonal antibody ending in -mab",
            sublabel:
              "Input — any monoclonal antibody name is a chain of infixes: [target infix][source infix]-mab. The stem -mab says monoclonal antibody — a 150-kDa protein built to bind ONE overexpressed cell-surface receptor (the printed banner: “Monoclonal antibodies (-mab)—target overexpressed cell surface receptors”). The printed examples: rituximab, bevacizumab, denosumab.",
            variant: "input",
          },
          {
            id: "xi",
            label: "-xi- → CHIMERIC human-mouse (the -ximab row)",
            sublabel:
              "Process — the source infix -xi- marks a CHIMERA: the variable (antigen-binding) regions are mouse, the constant regions human — “Chimeric human-mouse monoclonal antibody,” printed example Rituximab. Roughly a third of the sequence is still mouse (KYP context), which is why chimerics are the most immunogenic rung of the ladder — infusion reactions and anti-drug antibodies are the classic price (KYP context, not printed).",
            variant: "process",
          },
          {
            id: "zu",
            label: "-zu- → HUMANIZED (the -zumab row)",
            sublabel:
              "Process — the source infix -zu- marks a HUMANIZED antibody: only the complementarity-determining loops (the binding loops themselves) are grafted from mouse onto a fully human frame — “Humanized monoclonal antibody,” printed example Bevacizumab. Far less mouse than a chimeric, less immunogenic (KYP context).",
            variant: "process",
          },
          {
            id: "u",
            label: "-u- → HUMAN (the -umab row)",
            sublabel:
              "Process — the source infix -u- (with no -xi-/-zu- before it) marks a fully HUMAN antibody, sequence derived start to finish from human immunoglobulin genes — “Human monoclonal antibody,” printed example Denosumab. The top rung of the humanization ladder: minimal anti-drug immunogenicity (KYP context).",
            variant: "process",
          },
          {
            id: "target",
            label: "THE TARGET — an overexpressed cell-surface receptor",
            sublabel:
              "Target — what every rung of the ladder shares: the printed banner's own phrase, “target overexpressed cell surface receptors.” An antibody is a large extracellular protein — it cannot cross the plasma membrane, so its address is always a surface molecule a tumor or immune cell overexpresses (KYP context: rituximab → CD20 on B cells; bevacizumab → VEGF; denosumab → RANKL).",
            variant: "target",
          },
          {
            id: "grammar",
            label: "THE GRAMMAR RULE: read the name right-to-left — stem, then source infix",
            sublabel:
              "Output — -mab names the format (monoclonal antibody), the infix immediately before it names the source (-xi- chimeric, -zu- humanized, -u- human), and the rest of the name gestures at the target. The grammar generalizes beyond the printed page (KYP context: infliximab is chimeric anti-TNF, trastuzumab is humanized anti-HER2, adalimumab is fully human anti-TNF) — which is why this three-row table decodes every monoclonal on the exam.",
            variant: "output",
          },
        ],
        edges: [
          { from: "name", to: "xi", label: "the infix reads -xi- →" },
          { from: "name", to: "zu", label: "the infix reads -zu- →" },
          { from: "name", to: "u", label: "no -xi-/-zu-, just -u- →" },
          { from: "xi", to: "target", label: "binds it with mouse variable regions" },
          { from: "zu", to: "target", label: "binds it with grafted loops" },
          { from: "u", to: "target", label: "binds it with fully human sequence" },
          { from: "target", to: "grammar", label: "one address, three sources — the ladder" },
        ],
      },
    },
    {
      id: "cytokine-mimic-map",
      title:
        "Beyond antibodies: the intracellular -ib inhibitors and the interleukin -kin modulators",
      context:
        "The printed Small molecule inhibitors (-ib) and Interleukin receptor modulators (-kin) groups (book 254)",
      flow: {
        nodes: [
          {
            id: "table",
            label: "THE OTHER EIGHT ROWS — two non-antibody formats",
            sublabel:
              "Input — the printed table's second and third banners: “Small molecule inhibitors (-ib)—target intracellular molecules” (six rows: -ciclib, -coxib, -parib, -rafenib, -tinib, -zomib) and “Interleukin receptor modulators (-kin)—agonists and antagonists of interleukin receptors” (two rows: -leukin, -kinra). An antibody cannot enter a cell, and a cytokine receptor needs a cytokine-shaped key — so the format follows the target.",
            variant: "input",
          },
          {
            id: "ib",
            label: "THE -ib ARM — small molecules that cross the membrane and jam an intracellular machine",
            sublabel:
              "Process — six printed stems, each infix naming the machine: -ciclib → Cyclin-dependent kinase inhibitor (Palbociclib); -coxib → COX-2 inhibitor (Celecoxib); -parib → Poly(ADP-ribose) polymerase inhibitor (Olaparib); -rafenib → BRAF inhibitor (Vemurafenib); -tinib → Tyrosine kinase inhibitor (Imatinib); -zomib → Proteasome inhibitor (Bortezomib). All six end in -ib — the shared “inhibitor” suffix of the small-molecule world (the printed banner: “target intracellular molecules”).",
            variant: "process",
          },
          {
            id: "leukin",
            label: "-leukin → the interleukin-2 AGONIST/ANALOG (aldesleukin)",
            sublabel:
              "Process — the -kin group's stimulatory arm: “Interleukin-2 agonist/analog,” printed example Aldesleukin. A recombinant MIMIC of interleukin-2 that pushes the IL-2 receptor the same direction the native cytokine does (KYP context: IL-2 drives T-cell expansion — which is why an IL-2 analog treats cancer by amplifying the immune response). The stem -leukin carries the word interleukin itself.",
            variant: "process",
          },
          {
            id: "kinra",
            label: "-kinra → the interleukin receptor ANTAGONIST (anakinra)",
            sublabel:
              "Process — the -kin group's blocking arm: “Interleukin receptor antagonist,” printed example Anakinra. A recombinant interleukin-1 receptor antagonist (KYP context) that occupies the receptor without activating it — the mirror image of -leukin. Two stems in the same family, opposite directions: the agonist/analog mimics-and-stimulates; the antagonist occupies-and-blocks.",
            variant: "process",
          },
          {
            id: "bridge",
            label: "THE IMMUNOLOGY BRIDGE — interleukin pharmacology is interleukin physiology, weaponized",
            sublabel:
              "Output — the -kin rows are the pharmacology of the cytokine table taught in Immunology: interleukin-2 is the T-cell growth factor (its agonist/analog amplifies the response), and the interleukin-1 receptor antagonist is the body's own brake on acute inflammation (its recombinant copy, anakinra, borrows the brake as a drug — KYP context). Read the stem's direction before its letters: -leukin LIFTS the receptor; -kinra KNOCKS it.",
            variant: "output",
          },
        ],
        edges: [
          { from: "table", to: "ib", label: "the target is intracellular → a small molecule" },
          { from: "table", to: "leukin", label: "the target is an interleukin receptor, pushed →" },
          { from: "table", to: "kinra", label: "the target is an interleukin receptor, blocked →" },
          { from: "ib", to: "bridge", label: "the infix names the machine" },
          { from: "leukin", to: "bridge", label: "mimic and stimulate" },
          { from: "kinra", to: "bridge", label: "occupy and block" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "biologic-agents-map",
      title:
        "The biologic agents decoder: the -mab humanization ladder, the intracellular -ib six, and the -kin see-saw (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 254's single table: the -mab humanization ladder drawn as three Y-shaped antibodies — -ximab chimeric (mouse variable regions retained, printed example rituximab), -zumab humanized (only the binding loops grafted, bevacizumab), -umab human (fully human sequence, denosumab) — all aiming at the printed banner's overexpressed cell-surface receptors; the cell-crossing panel where the six -ib small molecules enter the cell and jam their intracellular machines (-ciclib the cyclin-dependent kinase, -coxib COX-2, -parib poly(ADP-ribose) polymerase, -rafenib BRAF, -tinib the tyrosine kinase, -zomib the proteasome); the -kin see-saw at the interleukin receptor (aldesleukin the interleukin-2 agonist/analog pushing, anakinra the interleukin receptor antagonist blocking); and the four-move decode protocol strip.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 276 — the page's visual asset is the color-coded table itself (red mnemonic letters inside the CATEGORY cells, light blue-gray group banner rows, dark navy title), VLM-read at 120dpi with no margin mnemonics and no images; the table occupies the top ~40% of the last page of Pharmacology. The antibody schematics, the cell-crossing panel, the see-saw, and the protocol strip are an ORIGINAL KYP ADAPTATION — every ending, category, and example is preserved from the print, but the artwork and the decode-grammar organization are KYP's. The full table is additionally carried verbatim in the note's table block. The four ALL-CAPS mnemonics in the Memory section are KYP originals; First Aid's own red letters are carried ATTRIBUTED.",
    },
    {
      kind: "table",
      title:
        "Book 254 — the printed Biologic agents table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The page's single table: 3 columns (ENDING / CATEGORY / EXAMPLE), 3 shaded group banner rows, and 11 data rows in printed order — -ximab through -kinra. In print, the group banner rows span all three columns and carry em dashes (“(-mab)—target…”); they are carried here as full rows in their printed positions. First Aid prints its mnemonic letters in red inside the CATEGORY cells (Chi-meric, Humanized, Human, Cyclin-, COX-2, Poly, BRAF, Tyrosine kinase, Proteasome, Interleukin-2, interleukin receptor antagonist) — attributed, with the letters as printed.",
      columns: ["ENDING", "CATEGORY", "EXAMPLE"],
      rows: [
        [
          "Monoclonal antibodies (-mab)—target overexpressed cell surface receptors",
          "",
          "",
        ],
        ["-ximab", "Chimeric human-mouse monoclonal antibody", "Rituximab"],
        ["-zumab", "Humanized monoclonal antibody", "Bevacizumab"],
        ["-umab", "Human monoclonal antibody", "Denosumab"],
        [
          "Small molecule inhibitors (-ib)—target intracellular molecules",
          "",
          "",
        ],
        ["-ciclib", "Cyclin-dependent kinase inhibitor", "Palbociclib"],
        ["-coxib", "COX-2 inhibitor", "Celecoxib"],
        [
          "-parib",
          "Poly(ADP-ribose) polymerase inhibitor",
          "Olaparib",
        ],
        ["-rafenib", "BRAF inhibitor", "Vemurafenib"],
        ["-tinib", "Tyrosine kinase inhibitor", "Imatinib"],
        ["-zomib", "Proteasome inhibitor", "Bortezomib"],
        [
          "Interleukin receptor modulators (-kin)—agonists and antagonists of interleukin receptors",
          "",
          "",
        ],
        ["-leukin", "Interleukin-2 agonist/analog", "Aldesleukin"],
        ["-kinra", "Interleukin receptor antagonist", "Anakinra"],
      ],
      caption:
        "Verbatim carry, documented: the three banner rows print as shaded full-width bands (light blue-gray, VLM-read) with em dashes — “(-mab)—target overexpressed cell surface receptors”, “(-ib)—target intracellular molecules”, “(-kin)—agonists and antagonists of interleukin receptors” — spanning all three columns; they are carried here as rows in their printed positions. ADJUDICATION (raw text layer + pdftotext -layout + the VLM pass all agree): the batch brief anticipated -cept fusion proteins and other recombinant cytokines/enzymes rows — NONE print on pdf 276; the page carries exactly these three stem groups and eleven data rows, and the -leukin/-kinra interleukin modulators are its only cytokine family. Red letters documented in the intro are First Aid's own, reproduced as printed; subscripts carry as plain text (COX-2, Poly(ADP-ribose)).",
    },
    {
      kind: "list",
      title:
        "The decode grammar — what each stem and infix contributes (KYP's reading of the table)",
      intro:
        "The table is a grammar, not a vocabulary list: each name is assembled from a stem (the drug's format), a source infix (-mab only: how much mouse remains), and a target infix or direction word (what the drug touches, and which way it pushes).",
      items: [
        {
          lead: "THE -mab STEM + SOURCE LADDER — -ximab / -zumab / -umab",
          text: "Stem -mab = monoclonal antibody, an extracellular protein aimed at an overexpressed cell-surface receptor (the printed banner). Source infixes, least to most human: -xi- = CHIMERIC human-mouse (mouse variable regions, human constant regions — Rituximab) · -zu- = HUMANIZED (only the binding loops grafted onto a human frame — Bevacizumab) · -u- = HUMAN (fully human sequence — Denosumab). The ladder's clinical shadow (KYP context, not printed): more mouse sequence → more anti-drug immunogenicity and infusion reactions, which is why the field climbed from -ximab to -umab. The grammar generalizes to monoclonals the page never prints (KYP context): infliximab = chimeric anti-TNF, trastuzumab = humanized anti-HER2, adalimumab = fully human anti-TNF.",
        },
        {
          lead: "THE -ib STEM + TARGET INFIXES — the intracellular six",
          text: "Stem -ib = small molecule inhibitor, membrane-permeant, aimed at an intracellular molecule (the printed banner). Each infix names the machine: -cicl- = cyclin-dependent kinase (-ciclib → Palbociclib) · -cox- = COX-2 (-coxib → Celecoxib) · -parib = poly(ADP-ribose) polymerase (Olaparib) · -raf- = BRAF (-rafenib → Vemurafenib) · -tin- = tyrosine kinase (-tinib → Imatinib) · -zom- = proteasome (-zomib → Bortezomib). Six stems, six machines, one suffix: the shared -ib of inhibition.",
        },
        {
          lead: "THE -kin STEM + DIRECTION — the interleukin modulators",
          text: "Stem -kin = interleukin receptor modulator, “agonists and antagonists of interleukin receptors” (the printed banner). The direction is in the letters: -leukin carries the word interleukin itself and marks the AGONIST/ANALOG — Interleukin-2 agonist/analog, Aldesleukin, a recombinant mimic that pushes the IL-2 receptor (KYP context: the T-cell growth signal, amplified) · -kinra marks the ANTAGONIST — Interleukin receptor antagonist, Anakinra, a recombinant copy of the body's own IL-1 receptor blocker (KYP context) that occupies the receptor without activating it. One family, two arrows: mimic-and-stimulate vs occupy-and-block.",
        },
        {
          lead: "THE FORMAT FOLLOWS THE TARGET — the table's deepest rule (KYP)",
          text: "Why three formats? Because the target's address decides the drug's size. A cell-surface receptor can be reached from outside → a 150-kDa antibody suffices (-mab). An intracellular molecule — a kinase in the cytosol, COX-2 in the endoplasmic reticulum, the proteasome — requires a small molecule that crosses the plasma membrane (-ib). And an interleukin receptor is best engaged by a recombinant copy of the body's own cytokine logic (-kin, agonist or antagonist). Stem → format → target location: the naming table is secretly a drug-delivery table.",
        },
      ],
    },
    {
      kind: "steps",
      title: "Decoding any biologic drug name in four moves",
      intro:
        "The whole table distilled into an ordered reading path — STEM, SOURCE INFIX, TARGET INFIX, EXAMPLE — applicable to any biologic name the exam shows, printed on book 254 or not.",
      steps: [
        {
          label: "MOVE 1 — READ THE STEM (rightmost first): -mab, -ib, or -kin",
          detail:
            "The ending names the format: -mab = monoclonal antibody (extracellular protein, targets overexpressed cell-surface receptors) · -ib = small molecule inhibitor (crosses membranes, targets intracellular molecules) · -kin = interleukin receptor modulator (agonists and antagonists of interleukin receptors). If the stem is -mab, move 2 applies; if -ib or -kin, skip to move 3.",
        },
        {
          label: "MOVE 2 — IF -mab, READ THE SOURCE INFIX: -xi-, -zu-, or -u-",
          detail:
            "The infix immediately before -mab names how much mouse remains: -xi- → chimeric human-mouse monoclonal antibody (Rituximab) · -zu- → humanized monoclonal antibody (Bevacizumab) · plain -u- → human monoclonal antibody (Denosumab). Chimeric retains the most mouse sequence (variable regions), humanized grafts only the binding loops, human is fully human — the immunogenicity ladder descends in the same order (KYP context).",
        },
        {
          label:
            "MOVE 3 — IF -ib OR -kin, READ THE TARGET INFIX OR DIRECTION",
          detail:
            "For -ib, the infix names the intracellular machine: -cicl- cyclin-dependent kinase (palbociclib) · -cox- COX-2 (celecoxib) · -parib poly(ADP-ribose) polymerase (olaparib) · -raf- BRAF (vemurafenib) · -tin- tyrosine kinase (imatinib) · -zom- proteasome (bortezomib). For -kin, the stem itself carries the direction: -leukin = interleukin-2 agonist/analog (aldesleukin — pushes the receptor) · -kinra = interleukin receptor antagonist (anakinra — blocks it).",
        },
        {
          label: "MOVE 4 — RECALL THE PRINTED EXAMPLE, THEN GENERALIZE",
          detail:
            "Anchor each stem on its printed example — rituximab, bevacizumab, denosumab; palbociclib, celecoxib, olaparib, vemurafenib, imatinib, bortezomib; aldesleukin, anakinra — then apply the same grammar to unfamiliar names: the exam's unlisted monoclonals decode by infix alone (KYP context: infliximab -xi- chimeric, trastuzumab -zu- humanized, adalimumab -u- human), and any -ib ending promises an intracellular inhibitor whose infix names the target.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "The -kin see-saw — aldesleukin vs anakinra: the interleukin family's two directions",
      intro:
        "The table's last two rows are one receptor family with opposite arrows: the agonist/analog that mimics interleukin-2, and the antagonist that blocks the interleukin-1 receptor (KYP context for the specific receptor). This is the immunology bridge — interleukin pharmacology is interleukin physiology, weaponized in both directions.",
      columns: [
        "-leukin — Interleukin-2 AGONIST/ANALOG (Aldesleukin)",
        "-kinra — Interleukin receptor ANTAGONIST (Anakinra)",
      ],
      rows: [
        {
          label: "The printed category",
          a: "“Interleukin-2 agonist/analog” — the stem -leukin carries the word interleukin itself, and the category names both roles: it AGONIZES the receptor as an ANALOG of the native cytokine",
          b: "“Interleukin receptor antagonist” — the -kinra stem marks the blocker: a recombinant copy of the body's own interleukin-1 receptor antagonist (KYP context) that occupies the receptor without activating it",
        },
        {
          label: "What it does at the receptor",
          a: "Mimics interleukin-2 and pushes the IL-2 receptor the same direction the native cytokine does — stimulate, expand, amplify (KYP context: IL-2 is the T-cell growth factor, so its analog amplifies the immune response)",
          b: "Sits in the interleukin receptor and prevents the native cytokine from signaling — occupy, block, silence (KYP context: IL-1 drives acute inflammation and fever, so its antagonist damps them)",
        },
        {
          label: "The stem's direction word",
          a: "AGONIST/ANALOG — mimic and stimulate; the drug acts LIKE the cytokine it is named for",
          b: "ANTAGONIST — occupy and block; the drug acts AGAINST the receptor family it is named for",
        },
        {
          label: "The exam's question shape",
          a: "Given the interleukin-2 physiology (T-cell expansion), name the drug that amplifies it — and read -leukin as “the interleukin mimic that lifts”",
          b: "Given the interleukin-1 physiology (acute-phase inflammation), name the recombinant brake — and read -kinra as “the receptor block that knocks”",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "The exam asks the table in reverse — and the grammar answers names the page never prints",
      body:
        "First Aid prints one example per stem, but the grammar is the testable object. The exam's two reverse directions: (1) NAME → CLASS — “A patient develops rigors during the infusion of a chimeric human-mouse monoclonal antibody; which ending does the drug carry?” → -ximab (the -xi- infix, rituximab's row); “trastuzumab is which class?” → humanized (-zu-, the -zumab row; KYP context — not printed on book 254). (2) CLASS → NAME — “A fully human monoclonal antibody ends in…?” → -umab (denosumab's row); “A small molecule ending in -tinib inhibits…?” → a tyrosine kinase (imatinib's row); “Which ending marks an interleukin receptor antagonist?” → -kinra (anakinra's row). The high-yield pairings the exam loves to blur: -ximab/-zumab/-umab (chimeric vs humanized vs human — read the infix), -tinib/-zomib (kinase vs proteasome — read the infix), -leukin/-kinra (agonist/analog vs antagonist — read the direction), and -mab vs -ib (cell-surface receptor vs intracellular molecule — read the format). And the composite question: given a novel name like “ganitumab” or “ruxolitinib” (KYP context), the grammar alone answers — -u-mab = human monoclonal antibody; -tinib = tyrosine kinase inhibitor.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "First Aid's own red letters — the highlighting printed on the page",
      body:
        "This page prints its mnemonics AS RED LETTERS INSIDE THE CATEGORY CELLS (attributed here, verbatim — these are the source's hooks, not KYP's; the four ALL-CAPS codes in the Memory section are KYP originals): the “Chi” of Chimeric in the -ximab row; the “H” of Humanized and of Human in the -zumab and -umab rows; the “Cyc” of Cyclin-dependent kinase (-ciclib); the “COX” of COX-2 (-coxib); the “Poly” of Poly(ADP-ribose) polymerase (-parib); the “BRAF” of the BRAF inhibitor row (-rafenib); the “Ty” and “kin” of Tyrosine kinase (-tinib); the “ome” of Proteasome (-zomib); the “leuk” of Interleukin-2 (-leukin); and the interleukin “r”eceptor “a”ntagonist letters (-kinra) — plus red fragments inside the three banner rows (“anti”bodies, “inhib”itors, Inter“leuk”in). The color logic is First Aid's own teaching: the red substring in each CATEGORY cell is the very infix the ENDING cell carries — the page is literally highlighting the grammar.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A patient with a B-cell lymphoma receives an infusion of a monoclonal antibody directed against a B-cell surface marker; during the infusion he develops rigors and urticaria. The package insert describes the antibody as chimeric human-mouse.",
        discriminator:
          "The source infix -xi- inside -ximab — chimeric, the rung of the humanization ladder with the most mouse sequence (and the most infusion immunogenicity, KYP context)",
        concept: "The -mab source ladder: -ximab / -zumab / -umab",
        answer:
          "Chimeric human-mouse monoclonal antibody — the printed -ximab row (category verbatim), example rituximab. The infix -xi- is the entire question: it names the chimeric rung, against -zu- humanized (bevacizumab) and plain -u- human (denosumab).",
      },
      {
        stem: "A pharmaceutical detail sheet lists a new oral oncology drug ending in -tinib; the mechanism section describes blockade of an intracellular phosphorylating enzyme.",
        discriminator:
          "The target infix -tin- = tyrosine kinase, inside a small molecule that had to cross the plasma membrane to reach it",
        concept: "The -ib family: the infix names the intracellular machine",
        answer:
          "Tyrosine kinase inhibitor — the printed -tinib row, example imatinib. The -ib stem promises an intracellular target (the printed banner “Small molecule inhibitors (-ib)—target intracellular molecules”), and -tin- names the machine: the tyrosine kinase — contrast -cicl- (cyclin-dependent kinase, palbociclib), -cox- (COX-2, celecoxib), -parib (PARP, olaparib), -raf- (BRAF, vemurafenib), -zom- (proteasome, bortezomib).",
      },
      {
        stem: "A patient with metastatic renal cell carcinoma receives an agent that amplifies his T-cell expansion; the drug name ends in -leukin (KYP context for the indication — the stem and category are the printed content).",
        discriminator:
          "The -kin stem with the interleukin direction word: -leukin = interleukin-2 agonist/ANALOG — a recombinant mimic that pushes the receptor",
        concept: "The -kin family: agonist vs antagonist at the interleukin receptor",
        answer:
          "Interleukin-2 agonist/analog — the printed -leukin row, example aldesleukin. The name carries its biography: -leukin holds the word interleukin itself, and the category's “agonist/analog” names the direction — mimic and stimulate — the mirror of -kinra (interleukin receptor antagonist, anakinra), which occupies and blocks.",
      },
      {
        stem: "A drug formulary question asks which ending on the list marks a monoclonal antibody produced entirely from human immunoglobulin sequences — the options include -ximab, -zumab, -umab, and -kinra.",
        discriminator:
          "The source infix ladder's top rung: no -xi-, no -zu-, just the -u- before -mab",
        concept: "The humanization ladder: chimeric → humanized → human",
        answer:
          "-umab — the printed Human monoclonal antibody row, example denosumab. The ladder reads by mouse content: -ximab mixes mouse variable regions into a human frame (rituximab), -zumab grafts only the binding loops (bevacizumab), -umab is fully human (denosumab) — and -kinra is not a monoclonal at all but the interleukin receptor antagonist (anakinra).",
      },
    ],
    traps: [
      {
        a: "-ximab — Chimeric human-mouse monoclonal antibody (rituximab)",
        b: "-zumab — Humanized monoclonal antibody (bevacizumab); -umab — Human monoclonal antibody (denosumab)",
        whyConfused:
          "Three adjacent rows of the same stem, all ending in -mab, all targeting overexpressed cell-surface receptors — the categories differ by one word each (Chimeric / Humanized / Human)",
        keyDifference:
          "The SOURCE INFIX decides: -xi- = chimeric (mouse variable regions remain — the most mouse), -zu- = humanized (only the binding loops grafted), -u- = human (fully human sequence). The immunogenicity shadow descends in the same order: chimeric > humanized > human (KYP context)",
        clue:
          "Read the letters between the target and -mab: xi looks like a cross (a MIX of two species), zu is “zipped-up” mostly human, and u is the u of hUman.",
      },
      {
        a: "-tinib — Tyrosine kinase inhibitor (imatinib)",
        b: "-zomib — Proteasome inhibitor (bortezomib)",
        whyConfused:
          "Two oral oncology -ib agents aimed at intracellular machinery, both treating hematologic malignancies (KYP context), both ending in the same inhibitor suffix",
        keyDifference:
          "The infix names the machine: -tin- = tyrosine KINase (the phosphorylating enzyme), -zom- = proteasOME (the protein-degrading machine). One jams phosphorylation; the other jams the disposal of tagged proteins",
        clue:
          "Read the infix before -ib: “tin” sits inside “kinaSE-inhibiTIN” — actually read it phonetically: -tinib carries the “tin” of kinase inhibition; -zomib carries the “zome” of proteasome.",
      },
      {
        a: "-leukin — Interleukin-2 agonist/analog (aldesleukin)",
        b: "-kinra — Interleukin receptor antagonist (anakinra)",
        whyConfused:
          "The same printed family (“Interleukin receptor modulators (-kin)—agonists and antagonists of interleukin receptors”), two rows apart, names that differ by a few letters",
        keyDifference:
          "The DIRECTION word decides: -leukin = the interleukin-2 AGONIST/ANALOG (a mimic that stimulates — the T-cell growth signal amplified), -kinra = the interleukin receptor ANTAGONIST (a blocker that occupies — the body's own IL-1 brake, borrowed as a drug; KYP context)",
        clue:
          "“Leukin LIFTS, kinra KNOCKS” — and the printed categories say so verbatim: “agonist/analog” vs “antagonist”.",
      },
      {
        a: "A monoclonal antibody (-mab) — targets overexpressed CELL-SURFACE receptors",
        b: "A small molecule inhibitor (-ib) — targets INTRACELLULAR molecules",
        whyConfused:
          "Both formats appear in biologic-adjacent oncology lists, and both banners end in “target …” — the exam swaps the addresses",
        keyDifference:
          "The FORMAT FOLLOWS THE TARGET: a 150-kDa antibody cannot cross the plasma membrane, so its address is always a surface receptor; a small molecule crosses membranes, so the kinases, COX-2, PARP, BRAF, and the proteasome belong to the -ib world",
        clue:
          "Ask “where does the target live?” — outside the cell → -mab; inside the cell → -ib; at an interleukin receptor → -kin.",
      },
    ],
    pivots: [
      {
        lookAlike: "rituximab · bevacizumab · denosumab — three monoclonals, three rows",
        differentiator:
          "The source infix: -xi- (chimeric) vs -zu- (humanized) vs -u- (human)",
        correctPath:
          "Read right-to-left: strip -mab, read the infix before it — -xi- → Chimeric human-mouse (rituximab's row), -zu- → Humanized (bevacizumab's row), -u- → Human (denosumab's row).",
      },
      {
        lookAlike: "An unfamiliar biologic name ending in -mab vs one ending in -ib",
        differentiator:
          "The stem names the format: protein antibody vs membrane-permeant small molecule",
        correctPath:
          "-mab → an extracellular monoclonal antibody against an overexpressed cell-surface receptor (then read the source infix); -ib → an intracellular inhibitor (then read the target infix: -cicl-, -cox-, -parib, -raf-, -tin-, -zom-).",
      },
      {
        lookAlike: "A cytokine-direction question: amplify the interleukin signal vs block it",
        differentiator:
          "The -kin stem's direction word: agonist/analog vs antagonist",
        correctPath:
          "Push the interleukin-2 receptor → -leukin (aldesleukin, the interleukin-2 agonist/analog); block an interleukin receptor → -kinra (anakinra, the interleukin receptor antagonist).",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old man with a relapsed CD20+ follicular lymphoma is admitted for his first infusion of rituximab. Ninety minutes into the infusion he develops fever, rigors, and urticaria; the infusion is stopped and the symptoms resolve. The oncology fellow asks the medical student why this antibody, of all the monoclonals on the ward, is the one most famous for infusion reactions. The student pulls up the drug's structural description: the antigen-binding variable regions are murine, while the constant regions are human.",
      question:
        "Which drug-name ending marks the monoclonal antibody class this patient received?",
      options: [
        {
          label: "A",
          text: "-ximab",
          correct: true,
          why:
            "CORRECT — and the vignette's structural description is the class definition verbatim: murine variable regions grafted onto human constant regions = “Chimeric human-mouse monoclonal antibody,” the printed -ximab row, example rituximab. The -xi- infix is the chimeric rung of the humanization ladder — the most retained mouse sequence, hence the most infusion immunogenicity (KYP context), which is exactly what the fellow was asking about.",
        },
        {
          label: "B",
          text: "-zumab",
          why:
            "TEMPTING but wrong — -zumab is the HUMANIZED rung (bevacizumab's row): only the binding loops are grafted onto a human frame, leaving far less murine sequence and correspondingly less infusion immunogenicity than a chimeric. The vignette's mouse-variable-regions description rules the humanized class out.",
        },
        {
          label: "C",
          text: "-umab",
          why:
            "TEMPTING but wrong — -umab is the fully HUMAN rung (denosumab's row): sequences derived entirely from human immunoglobulin genes, the least immunogenic of the three. A fully human antibody would not carry murine variable regions, contradicting the vignette.",
        },
        {
          label: "D",
          text: "-kinra",
          why:
            "WRONG format entirely — -kinra is not a monoclonal antibody at all: it is the interleukin receptor antagonist (anakinra's row), a recombinant cytokine-receptor modulator from the -kin family. It is the trap for anyone matching suffixes to “immune drug” without reading the stem.",
        },
      ],
      reasoning:
        "The question tests the -mab source ladder in reverse: from the structural description (murine variable + human constant = chimeric) back to the name's infix. The ladder is -ximab (chimeric human-mouse — rituximab, the most mouse and the most infusion-immunogenic) → -zumab (humanized — bevacizumab) → -umab (human — denosumab). The clinical detail (first-infusion rigors and urticaria in a lymphoma patient) is the classic chimeric-antibody infusion reaction (KYP context), which points at the -xi- infix; the structural sentence is the printed category verbatim, so the ending follows the grammar: -ximab. Option D fails at the stem level — -kinra belongs to the interleukin receptor modulator family, not the antibody family.",
    },
  },
  mnemonics: [
    {
      code: "XI MIXES, ZU GRAFTS, U IS HUMAN",
      meaning:
        "The -mab humanization ladder (a KYP original): -xi- marks the CHIMERA — mouse variable regions MIXED into a human frame (“Chimeric human-mouse monoclonal antibody,” -ximab → rituximab); -zu- marks the GRAFT — only the binding loops grafted onto a human frame (“Humanized monoclonal antibody,” -zumab → bevacizumab); plain -u- marks the fully HUMAN sequence (“Human monoclonal antibody,” -umab → denosumab).",
      memorizes:
        "The three -mab source infixes and their categories — the table's first three rows, plus the immunogenicity shadow that descends with the mouse content (chimeric > humanized > human, KYP context)",
      whenToUse:
        "Any question pairing a monoclonal's name with its species composition, its immunogenicity, or its structural description — and any unfamiliar -mab name (the infix alone answers: infliximab -xi- chimeric, trastuzumab -zu- humanized, adalimumab -u- human — KYP context)",
      clinical:
        "The ladder predicts the infusion-reaction risk profile: the chimeric antibodies (rituximab) carry the most murine sequence and the most first-infusion reactivity; humanized (bevacizumab) and human (denosumab) descend in order (KYP context).",
    },
    {
      code: "MAB OUTSIDE, IB INSIDE, KIN IN-BETWEEN",
      meaning:
        "The format-follows-the-target rule (a KYP original): -mab = a large extracellular antibody aimed at OVEREXPRESSED CELL-SURFACE receptors (the printed banner); -ib = a small molecule that crosses the membrane to jam INTRACELLULAR machines (the second banner: cyclin-dependent kinase, COX-2, poly(ADP-ribose) polymerase, BRAF, tyrosine kinase, proteasome); -kin = the interleukin receptor modulators IN-BETWEEN — recombinant copies of cytokine logic, agonist or antagonist (the third banner).",
      memorizes:
        "Which of the three biologic formats a drug belongs to — decided entirely by where the target lives",
      whenToUse:
        "Any stem giving a drug name and asking the class or the target location, and any “which ending…” option list mixing -mab, -ib, and -kin",
      clinical:
        "The rule explains the delivery: antibodies like rituximab, bevacizumab, and denosumab are infused proteins that never enter the cell; -ib agents like imatinib are oral small molecules that must; and -kin agents like aldesleukin and anakinra are recombinant cytokine mimics injected into the immune conversation.",
    },
    {
      code: "SIX MACHINES, ONE SUFFIX",
      meaning:
        "The -ib family (a KYP original): every -ib ending marks an inhibitor, and the infix before it names the intracellular machine — -cicl- the CYCLIN-dependent kinase (palbociclib), -cox- COX-2 (celecoxib), -parib the poly(ADP-RIBOSE) polymerase (olaparib), -raf- BRAF (vemurafenib), -tin- the tyrosine KINase (imatinib), -zom- the proteasOME (bortezomib). Six machines, one suffix: read the infix, name the target.",
      memorizes:
        "All six printed -ib stems, their categories, and their examples — the table's middle six rows",
      whenToUse:
        "Any -ib drug-name question — especially the confusable pairs (-tinib kinase vs -zomib proteasome; -rafenib BRAF vs -parib PARP) and any unfamiliar -ib name whose target must be inferred from the infix",
      clinical:
        "The infix predicts the indication family (KYP context): -tinib agents treat kinase-driven leukemias (imatinib), -rafenib treats BRAF-driven melanoma (vemurafenib), -parib treats PARP-dependence in BRCA-mutated cancers (olaparib), -ciclib treats CDK4/6-dependent breast cancers (palbociclib), -zomib treats multiple myeloma (bortezomib), and -coxib is the anti-inflammatory COX-2 branch (celecoxib).",
    },
    {
      code: "LEUKIN LIFTS, KINRA KNOCKS",
      meaning:
        "The -kin direction rule (a KYP original): -leukin LIFTS the interleukin-2 receptor — the printed category “Interleukin-2 agonist/analog,” a recombinant mimic that stimulates (aldesleukin); -kinra KNOCKS the interleukin receptor — the printed category “Interleukin receptor antagonist,” a recombinant copy of the body's own IL-1 receptor blocker that occupies without activating (anakinra). Two stems, one family, opposite arrows.",
      memorizes:
        "The last two rows of the table — which -kin stem is the agonist/analog and which is the antagonist",
      whenToUse:
        "Any question about interleukin-directed therapy, any option pair aldesleukin vs anakinra, and any cytokine-physiology stem (IL-2 and T-cell expansion; IL-1 and acute inflammation — the immunology bridge)",
      clinical:
        "The directions predict the use (KYP context): the IL-2 analog amplifies the immune response against renal cell carcinoma and melanoma; the IL-1 receptor antagonist damps the autoinflammatory cascade in rheumatoid and autoinflammatory syndromes.",
    },
  ],
  rapidReview: {
    s30: [
      "-mab = monoclonal antibody, targets overexpressed cell-surface receptors; -ib = small molecule inhibitor, targets intracellular molecules; -kin = interleukin receptor modulators — agonists and antagonists of interleukin receptors (the three printed banners)",
      "-ximab = Chimeric human-mouse monoclonal antibody (rituximab) · -zumab = Humanized monoclonal antibody (bevacizumab) · -umab = Human monoclonal antibody (denosumab)",
      "-ciclib = Cyclin-dependent kinase inhibitor (palbociclib) · -coxib = COX-2 inhibitor (celecoxib) · -parib = Poly(ADP-ribose) polymerase inhibitor (olaparib)",
      "-rafenib = BRAF inhibitor (vemurafenib) · -tinib = Tyrosine kinase inhibitor (imatinib) · -zomib = Proteasome inhibitor (bortezomib)",
      "-leukin = Interleukin-2 agonist/analog (aldesleukin) · -kinra = Interleukin receptor antagonist (anakinra)",
    ],
    m3: [
      "XI MIXES, ZU GRAFTS, U IS HUMAN — the -mab source ladder and its immunogenicity shadow",
      "MAB OUTSIDE, IB INSIDE, KIN IN-BETWEEN — the format follows the target's address",
      "SIX MACHINES, ONE SUFFIX — the -ib infix names the intracellular machine",
      "LEUKIN LIFTS, KINRA KNOCKS — the -kin agonist/antagonist see-saw",
    ],
    m10: [
      "Decode protocol: stem → source infix (-mab) or target infix (-ib) or direction (-kin) → printed example → generalize to any unfamiliar name",
      "The -mab grammar decodes monoclonals the page never prints: infliximab (-xi-, chimeric), trastuzumab (-zu-, humanized), adalimumab (-u-, human) — KYP context",
      "The immunology bridge: aldesleukin is the IL-2 agonist/analog (T-cell growth signal amplified); anakinra is the interleukin-1 receptor antagonist (the acute-inflammation brake borrowed as a drug) — KYP context for the receptors",
      "The page is the LAST page of Pharmacology (book 254) — the biologic-agents naming table closes the chapter; pdf 277 opens Public Health Sciences",
    ],
  },
  recall: [
    {
      q: "Which ending marks a chimeric human-mouse monoclonal antibody, and what is the printed example?",
      a: "-ximab (rituximab) — the source infix -xi- marks the chimera: mouse variable regions mixed into a human frame.",
    },
    {
      q: "Which ending marks a humanized monoclonal antibody, and which marks a fully human one?",
      a: "-zumab (bevacizumab) = humanized — only the binding loops grafted onto a human frame; -umab (denosumab) = human — fully human sequence.",
    },
    {
      q: "What do monoclonal antibodies (-mab) target, per the printed banner?",
      a: "Overexpressed cell surface receptors — “Monoclonal antibodies (-mab)—target overexpressed cell surface receptors.”",
    },
    {
      q: "Name the six -ib stems with their categories and examples, in printed order.",
      a: "-ciclib = Cyclin-dependent kinase inhibitor (palbociclib) · -coxib = COX-2 inhibitor (celecoxib) · -parib = Poly(ADP-ribose) polymerase inhibitor (olaparib) · -rafenib = BRAF inhibitor (vemurafenib) · -tinib = Tyrosine kinase inhibitor (imatinib) · -zomib = Proteasome inhibitor (bortezomib).",
    },
    {
      q: "What do small molecule inhibitors (-ib) target, per the printed banner?",
      a: "Intracellular molecules — “Small molecule inhibitors (-ib)—target intracellular molecules”; the membrane-permeant small-molecule format exists because antibodies cannot cross the plasma membrane.",
    },
    {
      q: "Which ending marks the interleukin-2 agonist/analog, and what is the example?",
      a: "-leukin (aldesleukin) — a recombinant interleukin-2 mimic that stimulates the receptor (the “agonist/analog” direction).",
    },
    {
      q: "Which ending marks an interleukin receptor antagonist, and what is the example?",
      a: "-kinra (anakinra) — a recombinant interleukin-1 receptor antagonist (KYP context for the receptor) that occupies the receptor without activating it.",
    },
    {
      q: "A novel drug name ends in -tinib. What class is it, and where does its target live?",
      a: "Tyrosine kinase inhibitor (imatinib's row) — an intracellular molecule; the -ib format exists precisely because the kinase lives inside the cell (the format follows the target).",
    },
  ],
  related: [
    {
      title: "Drug names — the sibling stem table",
      note:
        "The two pages before this one (book 252–253) carry the general Drug names stem table — the same ENDING / CATEGORY / EXAMPLE grammar for the whole formulary. The biologic-agents table is its final chapter: the -mab / -ib / -kin stems close the naming system that the drug-names table teaches from -azole onward. Read together, any generic name in the exam decodes. (Produced in parallel in this same batch — referenced by design.)",
      topicId: "drug-names",
    },
    {
      title: "Cancer immunotherapy & epidemiology",
      note:
        "The -mab antibodies and the -ib inhibitors on this page are the pharmacology of the oncology immune/targeted therapies — rituximab's anti-CD20 strategy, the kinase-inhibitor logic of targeted cancer therapy, and aldesleukin's immune amplification all live in the cancer-immunotherapy frame.",
      topicId: "cancer-immunotherapy-epidemiology",
    },
    {
      title: "Recombinant cytokines and immune agents",
      note:
        "Aldesleukin (the interleukin-2 agonist/analog) and anakinra (the interleukin receptor antagonist) are the interleukin half of the recombinant-cytokine story — the -kin banner's “agonists and antagonists of interleukin receptors” is precisely the recombinant-cytokine design space.",
      topicId: "recombinant-cytokines",
    },
    {
      title: "Cytokines — the interleukin physiology the -kin stems modulate",
      note:
        "The immunology bridge: interleukin-2 is the T-cell growth factor its agonist/analog (aldesleukin) amplifies, and the interleukin-1 / acute-inflammation axis is what the receptor antagonist (anakinra) damps. The -kin rows are the cytokine table's pharmacology column.",
      topicId: "cytokines",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology",
      connection:
        "The -kin family is applied interleukin physiology: interleukin-2 (T-cell clonal expansion, the IL-2 receptor) is the receptor aldesleukin mimics; interleukin-1 (acute-phase response, fever) is the axis anakinra blocks — the interleukin table and the biologic-agents table are two views of one system.",
    },
    {
      subject: "Biochemistry — cell signaling",
      connection:
        "The -ib infixes name the intracellular signaling machines taught in biochemistry: tyrosine kinases and their phosphorylation cascades (-tinib), the cyclin-dependent kinases of the cell cycle (-ciclib), and poly(ADP-ribose) polymerase of the DNA-damage response (-parib) — kinase biology is the target list.",
    },
    {
      subject: "Pathology — oncology",
      connection:
        "The oncogene map supplies the -ib targets: BRAF (vemurafenib's target, the melanoma driver), the BCR-ABL tyrosine kinase (imatinib's classic address, KYP context), the CDK4/6 axis (palbociclib), and PARP-dependence in BRCA-mutated tumors (olaparib) — targeted therapy is the oncogene table's pharmacology.",
    },
    {
      subject: "Pharmacology — immunosuppressants",
      connection:
        "The interleukin receptor modulators sit beside the transplant immunosuppressants: anakinra's receptor-antagonist logic and aldesleukin's agonist logic are the same cytokine-receptor manipulations the immunosuppressant table applies to graft survival and autoimmunity.",
    },
  ],
};
