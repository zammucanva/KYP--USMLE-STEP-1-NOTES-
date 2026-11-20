import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 14. Source: FULL pdf page 259 / book 237 (Part 1)
// (Pharmacology — Autonomic Drugs: G-protein–linked second messengers — a
// FULL page, no shared-page split). The page carries TWO assets:
// [1] THE TABLE — RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS, five
// shaded family bands (Adrenergic, Cholinergic, Dopamine, Histamine,
// Vasopressin) over 14 receptor rows: α1 (q), α2 (i), β1 (s), β2 (s),
// β3 (s), M1 (q), M2 (i), M3 (q), D1 (s), D2 (i), H1 (q), H2 (s), V1 (q),
// V2 (s) — carried VERBATIM in the note's table block in printed row
// order, including the source's own red-printed mnemonic wordplay
// "(one heart)" in the β1 row, "(two lungs)" in the β2 row, and
// "twobules (tubules)" in the V2 row (all three attributed to First Aid,
// never presented as KYP originals). [2] THE FIGURE — adjudicated this
// session as TWO STACKED CASCADE PANELS of vector line art (NOT three
// side-by-side panels): the TOP panel is the Gq cascade (Ligand → H1, α1,
// V1, M1, or M3 receptor → Gq protein → Phospholipase C → PIP2 → DAG →
// Protein kinase C, with the second PIP2 arm IP3 → ↑Ca2+, which feeds
// BOTH Protein kinase C ⊕ and Smooth muscle contraction), and the BOTTOM
// panel carries BOTH the Gs arm AND the Gi arm on ONE shared Adenylyl
// cyclase (left: Ligand → B1, B2, B3, D1, H2, or V2 receptor → GS protein
// → ⊕ Adenylyl cyclase; right: Ligand → M2, α2, or D2 receptor → Gi
// protein → red ⊖ blunt-ended inhibition ONTO Adenylyl cyclase; then
// ATP → Cyclic AMP → Protein kinase A, which sends a ⊕ leftward to ↑Ca2+
// and a red ⊖ blunt arrow rightward onto Myosin light-chain kinase
// (smooth muscle contraction) — the figure's β2-relaxation arrow).
// CENSUS: pdfimages = ZERO raster images on pdf 259 (CONFIRMED, not
// assumed — the figure is pure vector line art); VLM (glm-4.6v) IS
// available this session (unlike the ph6–ph10 401 outage) and ran SEVEN
// passes: 120-DPI full page, 180-DPI full page (table + figure),
// 220-DPI panel crops, a 2x-zoomed bottom band, a 440-DPI-eq bottom band,
// and a 432-DPI PyMuPDF render of the Gq downstream cluster — all saved
// to .usmle-pipeline-cache/staging-ph14/vlm-census.txt, plus a PyMuPDF
// word/span/vector-path dump (staging-ph14/pymupdf-words.txt) whose
// geometry anchored the adjudication. NO margin notes or mnemonics print
// anywhere on the page (the only mnemonic material is INSIDE the table,
// red-printed, attributed above). TEXT-LAYER QUIRKS, documented: (a) the
// figure's labels print DOUBLED in part1.txt (a pdftotext artifact — the
// drawings carry an invisible ghost copy of the downstream cluster offset
// +19.2pt; PyMuPDF sees each label once), so figure quotes are carried
// as printed, doubled, and glossed; (b) the interleaves "CaIP 3" + "2+"
// (Ca2+ beside IP3) and "SmoothCamuscle" (Smooth muscle beside Ca2+'s
// superscript) are carried verbatim and glossed; (c) the figure's Gs
// receptor label prints Latin "B1, B2, B3" (Museo Sans text font) while
// the table prints Greek β1, β2, β3 (Symbol font) — both carried as
// printed; the figure's G protein prints "GS protein" with a capital S;
// (d) the footer slug prints MID-FIGURE in the text layer (its physical
// position is the page foot) and "SEC TION II" prints with a stray space
// — both carried as printed. The registry visual, the exam layer, the
// reading protocol, and the memory layer are original KYP work.

export const gProteinSecondMessengers: KypUsMLENote = {
  id: "g-protein-second-messengers",
  title: "G-Protein-Linked Second Messengers",
  subtitle:
    "The single highest-yield table in autonomic pharmacology: every receptor on this page — α1, α2, β1, β2, β3, M1, M2, M3, D1, D2, H1, H2, V1, V2 — sorts into one of three G-protein mail routes. Gq (α1, M1, M3, H1, V1) drives phospholipase C → PIP2 → DAG + IP3 → Ca2+ → smooth muscle contraction. Gs (β1, β2, β3, D1, H2, V2) drives adenylyl cyclase → ATP → cyclic AMP → protein kinase A. Gi (α2, M2, D2) parks the brake on the SAME adenylyl cyclase. The page's figure makes the opposition visible: one enzyme, two arrows — GS protein stimulates it, Gi protein inhibits it — and protein kinase A ends the story by inhibiting myosin light-chain kinase (smooth muscle contraction), the β2 route to relaxation.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Autonomic Drugs",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 3,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 237–237 (Pharmacology — Autonomic Drugs: G-protein–linked second messengers; …)",
  tags: [
    "g-protein-coupled receptors",
    "GPCR",
    "G proteins",
    "Gq",
    "Gs",
    "Gi",
    "second messengers",
    "cyclic AMP",
    "cAMP",
    "IP3",
    "DAG",
    "phospholipase C",
    "adenylyl cyclase",
    "protein kinase A",
    "protein kinase C",
    "calcium signaling",
    "autonomic pharmacology",
    "alpha receptors",
    "beta receptors",
    "muscarinic receptors",
    "dopamine receptors",
    "histamine receptors",
    "vasopressin receptors",
    "aquaporin-2",
    "myosin light-chain kinase",
    "signal transduction",
  ],
  core: {
    what:
      "The page is a routing table plus a wiring figure. THE TABLE lists 14 receptors in five family bands — Adrenergic (α1 q, α2 i, β1 s, β2 s, β3 s), Cholinergic (M1 q, M2 i, M3 q), Dopamine (D1 s, D2 i), Histamine (H1 q, H2 s), Vasopressin (V1 q, V2 s) — each with its G-protein class letter (q, i, or s) and its major functions. THE FIGURE (adjudicated at 180–432 DPI + vector-path analysis) is two stacked panels: a Gq panel (Ligand → H1, α1, V1, M1, or M3 receptor → Gq protein → Phospholipase C → PIP2, which splits into DAG → Protein kinase C and IP3 → ↑Ca2+, with Ca2+ feeding both Protein kinase C and Smooth muscle contraction) and a bottom panel where the Gs and Gi arms share one Adenylyl cyclase (GS protein stimulates it ⊕; Gi protein inhibits it ⊖; downstream ATP → Cyclic AMP → Protein kinase A → ⊕ ↑Ca2+ and ⊖ Myosin light-chain kinase (smooth muscle contraction)).",
    why:
      "This is the answer key for every 'which second messenger' question in autonomic pharmacology — and the logic generalizes far past the autonomic nervous system. Know the q/i/s letter and you can derive the intracellular cascade, the direction of the end-organ effect, and the drug class that manipulates it, without memorizing a single cascade per drug. The table also encodes the chapter's classic exam forks: α1 (q, contracts vessels) vs α2 (i, brakes sympathetic outflow); β1 (one heart) vs β2 (two lungs); M1/M3 (q, glands and smooth muscle) vs M2 (i, the vagal brake on the heart); H1 (q, airways and itch) vs H2 (s, gastric acid); D1 (s, renal vasodilation) vs D2 (i, transmitter modulation); V1 (q, vasoconstriction) vs V2 (s, water reabsorption via aquaporin-2). And the figure's one enzyme with two opposing arrows is the whole point of Gs vs Gi: β1 stimulation and M2 stimulation act on the SAME adenylyl cyclase in opposite directions, which is why vagal slowing (M2, Gi) and β1 blockade both blunt cAMP-driven cardiac contractility.",
    keyIdea:
      "Read every G-protein question in five moves. MOVE 1 — SORT THE LETTER: find the receptor in the table and read its G-protein class — q, i, or s. MOVE 2 — NAME THE ENZYME: q → Phospholipase C; s → Adenylyl cyclase (stimulated); i → Adenylyl cyclase (inhibited). MOVE 3 — FOLLOW THE MESSENGER: q → PIP2 splits into DAG + IP3 → ↑Ca2+; s and i → ATP → cyclic AMP, up or down. MOVE 4 — NAME THE OUTPUT: q → Protein kinase C + Ca2+ → smooth muscle contraction; s → Protein kinase A → ⊕ Ca2+ and ⊖ myosin light-chain kinase (smooth muscle contraction); i → less of everything the Gs arm built. MOVE 5 — PREDICT THE ORGAN: run the cascade into the printed major functions — α1 squeezes vessels and pupils, β1 speeds the one heart, β2 opens the two lungs and relaxes the uterus, M2 slows the heart, V2 reclaims water. The receptor decides the route; the route decides the messenger; the messenger decides the response.",
  },
  mechanisms: [
    {
      id: "gq-cascade-map",
      title:
        "The Gq cascade: phospholipase C cuts PIP2 into two messengers — DAG and IP3",
      context:
        "The figure's TOP panel (book 237): H1, α1, V1, M1, or M3 receptor",
      flow: {
        nodes: [
          {
            id: "ligand",
            label: "LIGAND — the first messenger",
            sublabel:
              "Input — the molecule outside the cell. The receptor it lands on decides the route; the ligand never does.",
            variant: "input",
          },
          {
            id: "gq-receptor",
            label: "H1, α1, V1, M1, or M3 receptor",
            sublabel:
              "The Gq-family receptor set, exactly as the figure prints it — histamine H1, adrenergic α1, vasopressin V1, and muscarinic M1/M3 all route into the same G protein.",
            variant: "process",
          },
          {
            id: "gq-protein",
            label: "Gq protein",
            sublabel:
              "The trimeric G protein engaged by the receptor — the q class turns on a lipid-cleaving enzyme rather than a cyclase.",
            variant: "process",
          },
          {
            id: "plc",
            label: "Phospholipase C",
            sublabel:
              "The Gq effector enzyme — sits at the membrane and cleaves a membrane lipid.",
            variant: "process",
          },
          {
            id: "pip2",
            label: "PIP2",
            sublabel:
              "The membrane lipid substrate — one cut, two messengers.",
            variant: "target",
          },
          {
            id: "dag",
            label: "DAG",
            sublabel:
              "One arm of the split — stays at the membrane and activates a kinase.",
            variant: "process",
          },
          {
            id: "ip3",
            label: "IP3",
            sublabel:
              "The other arm — soluble, diffuses away to release Ca2+.",
            variant: "process",
          },
          {
            id: "ca2",
            label: "↑Ca2+",
            sublabel:
              "The calcium signal — rises through the IP3 arm and feeds BOTH the kinase and the contractile machinery.",
            variant: "output",
          },
          {
            id: "pkc",
            label: "Protein kinase C",
            sublabel:
              "The Gq arm's kinase — activated by DAG from the membrane and by Ca2+ from the cytosol (both arrows ⊕, as printed).",
            variant: "output",
          },
          {
            id: "smc",
            label: "Smooth muscle contraction",
            sublabel:
              "Output — the printed end point of the Gq panel: Ca2+ lands on the contractile machinery and the smooth muscle squeezes.",
            variant: "output",
          },
        ],
        edges: [
          { from: "ligand", to: "gq-receptor", label: "binds" },
          { from: "gq-receptor", to: "gq-protein", label: "engages ⊕" },
          { from: "gq-protein", to: "plc", label: "⊕" },
          { from: "plc", to: "pip2", label: "cleaves ⊕" },
          { from: "pip2", to: "dag", label: "the membrane arm" },
          { from: "pip2", to: "ip3", label: "the soluble arm" },
          { from: "dag", to: "pkc", label: "⊕" },
          { from: "ip3", to: "ca2", label: "releases" },
          { from: "ca2", to: "pkc", label: "⊕ — Ca2+ feeds PKC too" },
          { from: "ca2", to: "smc", label: "the contraction output" },
        ],
      },
    },
    {
      id: "gs-gi-opposition-map",
      title:
        "The Gs vs Gi opposition: two receptor families, one adenylyl cyclase, two arrows",
      context:
        "The figure's BOTTOM panel (book 237): the Gs and Gi arms share one enzyme",
      flow: {
        nodes: [
          {
            id: "ligand-s",
            label: "LIGAND — the Gs arm",
            sublabel:
              "Input — the left arm of the bottom panel (the panel prints one 'Ligand' label; each receptor carries its own ligand circle).",
            variant: "input",
          },
          {
            id: "gs-receptor",
            label: "B1, B2, B3, D1, H2, or V2 receptor",
            sublabel:
              "The Gs-family set as the figure prints it (Latin B) — the table's β1, β2, β3 plus D1, H2, and V2, every one stamped s.",
            variant: "process",
          },
          {
            id: "gs-protein",
            label: "GS protein",
            sublabel:
              "The stimulatory G protein — its arrow to the cyclase is pointed, marked ⊕.",
            variant: "process",
          },
          {
            id: "ligand-i",
            label: "LIGAND — the Gi arm",
            sublabel:
              "Input — the right arm of the bottom panel.",
            variant: "input",
          },
          {
            id: "gi-receptor",
            label: "M2, α2, or D2 receptor",
            sublabel:
              "The Gi-family set as the figure prints it — the table's three i receptors: the vagal muscarinic, the adrenergic autoreceptor, and the dopamine modulator.",
            variant: "process",
          },
          {
            id: "gi-protein",
            label: "Gi protein",
            sublabel:
              "The inhibitory G protein — its arrow to the SAME cyclase is blunt-ended, marked ⊖: the brake.",
            variant: "inhibit",
          },
          {
            id: "ac",
            label: "Adenylyl cyclase",
            sublabel:
              "The shared membrane enzyme — the figure's whole point: GS protein drives it, Gi protein suppresses it, and downstream everything depends on who is winning.",
            variant: "process",
          },
          {
            id: "atp",
            label: "ATP",
            sublabel:
              "The substrate — the figure draws it as a starburst feeding the cyclase.",
            variant: "target",
          },
          {
            id: "camp",
            label: "Cyclic AMP",
            sublabel:
              "The second messenger — rises when Gs wins, falls when Gi wins.",
            variant: "process",
          },
          {
            id: "pka",
            label: "Protein kinase A",
            sublabel:
              "The cAMP-dependent kinase — the Gs arm's engine.",
            variant: "process",
          },
          {
            id: "ca-out",
            label: "↑Ca2+",
            sublabel:
              "Output — the figure sends Protein kinase A's ⊕ leftward onto the calcium signal.",
            variant: "output",
          },
          {
            id: "mlck",
            label: "Myosin light-chain kinase (smooth muscle contraction)",
            sublabel:
              "Output — the figure's subtlest arrow: Protein kinase A's red ⊖ lands HERE, inhibiting the contraction kinase — the mechanism of β2-mediated smooth muscle relaxation.",
            variant: "target",
          },
        ],
        edges: [
          { from: "ligand-s", to: "gs-receptor", label: "binds" },
          { from: "gs-receptor", to: "gs-protein", label: "engages ⊕" },
          { from: "gs-protein", to: "ac", label: "⊕ stimulates" },
          { from: "ligand-i", to: "gi-receptor", label: "binds" },
          { from: "gi-receptor", to: "gi-protein", label: "engages" },
          {
            from: "gi-protein",
            to: "ac",
            label: "⊖ inhibits — the brake on the same enzyme",
            type: "inhibit",
          },
          { from: "atp", to: "ac", label: "the substrate enters" },
          { from: "ac", to: "camp", label: "→" },
          { from: "camp", to: "pka", label: "activates" },
          { from: "pka", to: "ca-out", label: "⊕" },
          {
            from: "pka",
            to: "mlck",
            label: "⊖ inhibits — relaxation of smooth muscle",
            type: "inhibit",
          },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "g-protein-messenger-map",
      title:
        "The q/i/s directory + the two cascade panels (an original KYP redraw of book 237)",
      caption:
        "An original KYP redraw of book 237's two assets. TOP — the printed table compressed into three color-coded swimlanes: the Gq lane (α1, M1, M3, H1, V1 — the phospholipase C route), the Gs lane (β1, β2, β3, D1, H2, V2 — the adenylyl cyclase route), and the Gi lane (α2, M2, D2 — the brake on adenylyl cyclase), each chip carrying its printed function digest. MIDDLE — the figure redrawn as KYP glyph chains: the Gq panel (Ligand → H1, α1, V1, M1, or M3 receptor → Gq protein → Phospholipase C → PIP2 → DAG → Protein kinase C, with IP3 → ↑Ca2+ feeding both Protein kinase C and Smooth muscle contraction) and the bottom panel where B1, B2, B3, D1, H2, or V2 receptor → GS protein → ⊕ Adenylyl cyclase while M2, α2, or D2 receptor → Gi protein → ⊖ the SAME Adenylyl cyclase, then ATP → Cyclic AMP → Protein kinase A → ⊕ ↑Ca2+ and ⊖ Myosin light-chain kinase (smooth muscle contraction). BOTTOM — the source's own red-printed β1/β2/V2 hints: one heart, two lungs, twobules.",
      notice:
        "Census: pdfimages = ZERO raster images on pdf 259 (CONFIRMED — pure vector line art); VLM (glm-4.6v) ran seven passes this session (120–432 DPI) plus a PyMuPDF word/vector-path dump, saved to staging-ph14/. ADJUDICATION: the figure is TWO stacked panels, not three — Gq on top, and a BOTTOM panel carrying BOTH the Gs and Gi arms on one shared Adenylyl cyclase; Myosin light-chain kinase sits in the BOTTOM panel under Protein kinase A's inhibitory arrow (a red ⊖ blunt end), not in the Gq panel. The swimlane directory, the glyph chains, and the hook band are original KYP artwork — no source art is reproduced; every printed label is preserved. The source's own mnemonic hints are carried attributed, never as KYP originals.",
    },
    {
      kind: "table",
      title:
        "Book 237 — the printed RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS table, carried verbatim (printed row order, every printed word)",
      intro:
        "The whole table, exactly as printed: five shaded family bands (Adrenergic, Cholinergic, Dopamine, Histamine, Vasopressin — carried here as band rows) over 14 receptor rows. The β1 '(one heart)', β2 '(two lungs)', and V2 'twobules (tubules)' wordplay prints in red in the source — First Aid's own mnemonic styling, carried attributed and never silently corrected.",
      columns: [
        "RECEPTOR",
        "G-PROTEIN CLASS",
        "MAJOR FUNCTIONS — book 237 (verbatim)",
      ],
      rows: [
        ["Adrenergic", "", "— family band —"],
        [
          "α1",
          "q",
          "↑ vascular smooth muscle contraction, ↑ pupillary dilator muscle contraction (mydriasis), ↑ intestinal and bladder sphincter muscle contraction",
        ],
        [
          "α2",
          "i",
          "↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production",
        ],
        [
          "β1",
          "s",
          "↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis",
        ],
        [
          "β2",
          "s",
          "Vasodilation, bronchodilation (two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis, ↓ uterine tone (tocolysis), ↑ aqueous humor production, ↑ cellular K+ uptake",
        ],
        [
          "β3",
          "s",
          "↑ lipolysis, ↑ thermogenesis in skeletal muscle, ↑ bladder relaxation",
        ],
        ["Cholinergic", "", "— family band —"],
        [
          "M1",
          "q",
          "Mediates higher cognitive functions, stimulates enteric nervous system, ↑ exocrine gland secretions",
        ],
        [
          "M2",
          "i",
          "↓ heart rate, AV node conduction velocity, and atrial contractility",
        ],
        [
          "M3",
          "q",
          "↑ exocrine gland secretions, gut peristalsis, bladder contraction, bronchoconstriction, vasodilation, ↑ pupillary sphincter muscle contraction (miosis), ciliary muscle contraction (accommodation)",
        ],
        ["Dopamine", "", "— family band —"],
        [
          "D1",
          "s",
          "Relaxes renal vascular smooth muscle, activates direct pathway of striatum",
        ],
        [
          "D2",
          "i",
          "Modulates transmitter release, especially in brain, inhibits indirect pathway of striatum",
        ],
        ["Histamine", "", "— family band —"],
        [
          "H1",
          "q",
          "↑ bronchoconstriction, airway mucus production, ↑ vascular permeability/vasodilation, pruritus",
        ],
        ["H2", "s", "↑ gastric acid secretion"],
        ["Vasopressin", "", "— family band —"],
        ["V1", "q", "↑ vascular smooth muscle contraction"],
        [
          "V2",
          "s",
          "↑ H2O permeability and reabsorption via upregulating aquaporin-2 in collecting twobules (tubules) of kidney, ↑ release of vWF",
        ],
      ],
      caption:
        "Fourteen receptors, three routes: q takes α1, M1, M3, H1, V1 (five); s takes β1, β2, β3, D1, H2, V2 (six); i takes α2, M2, D2 (three). The V2 row's 'twobules (tubules)' is the source's own red-printed wordplay — V2, aquaporin-2, TWO-bules — carried verbatim with the corrected word in parentheses, as printed.",
    },
    {
      kind: "table",
      title:
        "The crosswalk — the table's q/i/s column mapped onto the figure's three G proteins",
      intro:
        "The page prints the table and the figure as two separate assets; this crosswalk is the KYP synthesis that fuses them — every claim in it comes from the page's own two halves.",
      columns: [
        "THE G PROTEIN",
        "ITS RECEPTORS (table → figure)",
        "THE CASCADE (the figure's labels)",
        "THE CLINICAL SIGNATURE",
      ],
      rows: [
        [
          "Gq",
          "α1, M1, M3, H1, V1 → 'H1, α1, V1, M1, or M3 receptor'",
          "Gq protein → Phospholipase C → PIP2 → DAG → Protein kinase C; PIP2 → IP3 → ↑Ca2+ → Smooth muscle contraction (Ca2+ feeds Protein kinase C too)",
          "The squeeze route: vasoconstriction (α1, V1), miosis and gland secretion (M1, M3), bronchoconstriction and itch (H1)",
        ],
        [
          "Gs",
          "β1, β2, β3, D1, H2, V2 → 'B1, B2, B3, D1, H2, or V2 receptor'",
          "GS protein → ⊕ Adenylyl cyclase → ATP → Cyclic AMP → Protein kinase A → ⊕ ↑Ca2+ and ⊖ Myosin light-chain kinase (smooth muscle contraction)",
          "The accelerate-and-relax route: the one heart speeds (β1), the two lungs open and the uterus relaxes (β2), acid pours (H2), water is reclaimed (V2)",
        ],
        [
          "Gi",
          "α2, M2, D2 → 'M2, α2, or D2 receptor'",
          "Gi protein → ⊖ the SAME Adenylyl cyclase — blunt-ended inhibition, less Cyclic AMP",
          "The brake route: sympathetic outflow falls (α2), the heart slows (M2), transmitter release is modulated (D2)",
        ],
      ],
      caption:
        "One enzyme, two arrows: the Gs arm's GS protein carries a pointed ⊕ into adenylyl cyclase while the Gi arm's Gi protein carries a blunt ⊖ onto the same enzyme — that single printed opposition IS the Gs/Gi distinction.",
    },
    {
      kind: "steps",
      title: "Reading any G-protein second-messenger question in five moves",
      intro:
        "The whole page distilled into an ordered decision path — SORT, NAME, FOLLOW, OUTPUT, PREDICT.",
      steps: [
        {
          label: "SORT — find the receptor, read its letter",
          detail:
            "Every receptor on the page carries exactly one G-protein class letter in the table: α1 q · α2 i · β1 s · β2 s · β3 s · M1 q · M2 i · M3 q · D1 s · D2 i · H1 q · H2 s · V1 q · V2 s. If the stem hands you a receptor, the letter is already printed on this page — sort before you think.",
        },
        {
          label: "NAME — the enzyme the letter engages",
          detail:
            "q → Gq protein → Phospholipase C. s → GS protein → Adenylyl cyclase (stimulated). i → Gi protein → Adenylyl cyclase (inhibited). Two of the three routes converge on ONE enzyme — that is the figure's central design.",
        },
        {
          label: "FOLLOW — the second messenger",
          detail:
            "The Gq route cleaves PIP2 into TWO messengers: DAG (stays at the membrane) and IP3 (releases ↑Ca2+). The Gs/Gi routes move ONE messenger through ATP → Cyclic AMP — up when GS protein wins, down when Gi protein wins.",
        },
        {
          label: "OUTPUT — the kinase and the end effector",
          detail:
            "Gq → Protein kinase C (fed by both DAG and Ca2+) plus Ca2+ landing on Smooth muscle contraction. Gs → Protein kinase A, which sends a ⊕ onto ↑Ca2+ and a ⊖ onto Myosin light-chain kinase (smooth muscle contraction) — the β2 relaxation mechanism. Gi → less cAMP, less Protein kinase A, less of everything the Gs arm built.",
        },
        {
          label: "PREDICT — run the cascade into the organ",
          detail:
            "α1 (q) squeezes vessels, dilates pupils, closes sphincters. β1 (s) speeds the one heart and releases renin. β2 (s) opens the two lungs, relaxes the uterus (tocolysis), drives K+ into cells. M2 (i) slows the heart. H2 (s) pours gastric acid. V2 (s) plants aquaporin-2 in the collecting tubules and releases vWF. The letter plus the organ row IS the answer.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "The source's own printed hints — attributed to First Aid, not KYP originals",
      body:
        "The printed table itself carries three mnemonic touches, printed in red in the source and carried here verbatim with attribution: the β1 row prints '↑ heart rate, ↑ contractility (one heart)' — β1, ONE heart; the β2 row prints 'Vasodilation, bronchodilation (two lungs)' — β2, TWO lungs; and the V2 row prints 'upregulating aquaporin-2 in collecting twobules (tubules) of kidney' — the source's own wordplay, V2/aquaporin-2/TWO-bules, with the corrected word '(tubules)' printed in parentheses immediately after it. These are First Aid's memory hooks, not KYP's — the KYP mnemonic layer is separately authored below. Also documented as printed: the figure's Gs receptor label reads 'B1, B2, B3, D1, H2, or V2 receptor' with Latin letter B, while the table prints the same receptors as Greek β1, β2, β3; and the figure's G protein label prints 'GS protein' with a capital S.",
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "The two most testable arrows on the page — same enzyme, and the kinase that gets inhibited",
      body:
        "ARROW 1: the bottom panel prints ONE adenylyl cyclase with TWO incoming G-protein arrows — GS protein's pointed ⊕ (stimulation) from the B1/B2/B3/D1/H2/V2 side and Gi protein's blunt-ended red ⊖ (inhibition) from the M2/α2/D2 side. Any question that pairs β1 (or D1, H2, V2) against M2 (or α2, D2) on cAMP is testing exactly this opposition. ARROW 2: Protein kinase A's OTHER output is a red ⊖ that lands on Myosin light-chain kinase (smooth muscle contraction) — phosphorylation by PKA inhibits the contraction kinase, which is how a β2 agonist RELAXES smooth muscle (bronchodilation, tocolysis) through a kinase named 'contraction'. Do not flip that arrow on the exam: cAMP → PKA → LESS myosin light-chain kinase activity → LESS contraction.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 21-year-old man is given an intranasal decongestant; his nasal mucosal vessels constrict and his pupils dilate. The receptor engaged couples to the G-protein class printed as 'q' in the pharmacology tables.",
        discriminator:
          "α1 (q) → Gq → Phospholipase C → PIP2 → DAG + IP3 → ↑Ca2+ → smooth muscle contraction",
        concept: "The Gq squeeze route (the figure's top panel)",
        answer:
          "α1 is the printed q-class adrenergic receptor: ↑ vascular smooth muscle contraction (decongestion), ↑ pupillary dilator muscle contraction (mydriasis), ↑ intestinal and bladder sphincter muscle contraction. Route it through the figure's top panel — Gq protein → Phospholipase C → PIP2 splitting into DAG (→ Protein kinase C) and IP3 (→ ↑Ca2+ → Smooth muscle contraction) — and every 'q' receptor on the page (α1, M1, M3, H1, V1) produces the same calcium-driven squeeze family of effects.",
      },
      {
        stem: "A 64-year-old woman with heart failure has her cardiac index measured before and after an infusion of a β1-selective agonist; heart rate, contractility, and renin all rise together.",
        discriminator:
          "β1 (s) — 'one heart' — via GS protein → adenylyl cyclase → ATP → cyclic AMP → protein kinase A",
        concept: "The Gs route in the one heart (the source's own β1 hint)",
        answer:
          "The β1 row prints ↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis — all s-class, all through the figure's bottom panel: GS protein carries the ⊕ onto adenylyl cyclase, ATP becomes cyclic AMP, and protein kinase A phosphorylates the cardiac machinery. The same cascade, run in the kidney's juxtaglomerular cells, is the ↑ renin release; the source's own red-printed hint '(one heart)' keys the receptor: β1, one heart.",
      },
      {
        stem: "A pregnant woman at 31 weeks in preterm labor receives a β2-selective agonist; uterine contractions quiet, and if she receives repeated high doses her serum K+ falls.",
        discriminator:
          "β2 (s) — 'two lungs' — cAMP → protein kinase A ⊖ myosin light-chain kinase; plus ↑ cellular K+ uptake",
        concept: "The β2 pair of effects: relaxation (PKA ⊣ MLCK) and K+ shift",
        answer:
          "The β2 row prints both facts: '↓ uterine tone (tocolysis)' and '↑ cellular K+ uptake'. The relaxation runs through the figure's subtlest arrow — protein kinase A's blunt red ⊖ landing on myosin light-chain kinase (smooth muscle contraction): less MLCK activity, less uterine (and bronchial) contraction, the mechanism of both tocolysis and bronchodilation. The K+ entry ('↑ cellular K+ uptake') is the companion effect that drops serum potassium after repeated β2 agonist doses.",
      },
      {
        stem: "A research volunteer takes an experimental α2 agonist; plasma norepinephrine falls, platelets aggregate more readily, and insulin secretion declines.",
        discriminator:
          "α2 (i) — the Gi route: Gi protein's ⊖ lands on the same adenylyl cyclase the Gs arm stimulates",
        concept: "The Gi brake (the figure's right arm)",
        answer:
          "α2 is one of the three printed i-class receptors (α2, M2, D2). Its row reads ↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production — a brake profile, because the Gi protein's blunt-ended arrow suppresses the shared adenylyl cyclase, lowering cAMP in exactly the compartments where β stimulation would raise it. Presynaptic α2 is the autoreceptor version of the same fact: less cAMP-supported exocytosis, less norepinephrine release.",
      },
      {
        stem: "A patient with central diabetes insipidus is given desmopressin; urine output falls as collecting-duct epithelium becomes water-permeable, and von Willebrand factor levels rise.",
        discriminator:
          "V2 (s) — the 'twobules (tubules)' row: aquaporin-2 upregulation in the collecting tubules",
        concept: "Vasopressin V2, a Gs receptor at the kidney",
        answer:
          "The V2 row prints ↑ H2O permeability and reabsorption via upregulating aquaporin-2 in collecting twobules (tubules) of kidney, ↑ release of vWF — both effects of a Gs-coupled receptor raising cAMP in the collecting duct (water channels inserted) and in endothelial cells (Weibel-Palade release). The source's own red wordplay — V2, aquaporin-2, TWO-bules — is carried verbatim; the corrected word '(tubules)' prints in parentheses right after it, as printed.",
      },
    ],
    traps: [
      {
        a: "α1 (q — the squeeze)",
        b: "α2 (i — the brake)",
        whyConfused:
          "The same Greek letter, the same adrenergic family, adjacent rows in the table",
        keyDifference:
          "α1 is q: ↑ vascular smooth muscle contraction, mydriasis, sphincter contraction. α2 is i: ↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production — the autoreceptor brake that lowers cAMP through Gi",
        clue:
          "Vasoconstriction + mydriasis = α1 (q); falling sympathetic outflow + platelet aggregation = α2 (i) — the digit flips the G protein",
      },
      {
        a: "β1 (s — one heart)",
        b: "β2 (s — two lungs)",
        whyConfused:
          "Both are s-class; both raise cAMP through GS protein; both ↑ lipolysis",
        keyDifference:
          "β1 prints ↑ heart rate, ↑ contractility (one heart), ↑ renin release — the cardiac row; β2 prints Vasodilation, bronchodilation (two lungs), ↑ insulin release, ↑ glycogenolysis, ↓ uterine tone (tocolysis), ↑ aqueous humor production, ↑ cellular K+ uptake — the smooth-muscle-relaxation row",
        clue:
          "The source's own red hints decide it: ONE heart = β1; TWO lungs = β2 — the parentheticals are printed in the table for exactly this fork",
      },
      {
        a: "M1/M3 (q — glands and squeeze)",
        b: "M2 (i — the vagal brake)",
        whyConfused:
          "All three are muscarinic; the cholinergic band prints them as one family",
        keyDifference:
          "M1 (q) mediates higher cognitive functions, stimulates the enteric nervous system, ↑ exocrine gland secretions; M3 (q) drives the secretions + peristalsis + bladder contraction + bronchoconstriction + miosis + accommodation; M2 (i) is the heart row: ↓ heart rate, AV node conduction velocity, and atrial contractility",
        clue:
          "A muscarinic effect ON THE HEART = M2 = i (cAMP falls); a muscarinic effect on glands/smooth muscle = M1/M3 = q (IP3/DAG/Ca2+ rises)",
      },
      {
        a: "H1 (q — airways and itch)",
        b: "H2 (s — gastric acid)",
        whyConfused:
          "The same ligand (histamine), the same family band, one digit apart",
        keyDifference:
          "H1 is q: ↑ bronchoconstriction, airway mucus production, ↑ vascular permeability/vasodilation, pruritus. H2 is s: ↑ gastric acid secretion — the cAMP/PKA route in the parietal cell",
        clue:
          "Itch, bronchoconstriction, and leaky vessels = H1 (q); gastric acid = H2 (s) — why H1 blockers dry the nose but do nothing for acid, and H2 blockers do the reverse",
      },
      {
        a: "D1 (s — renal vasodilation, direct pathway)",
        b: "D2 (i — transmitter modulation, indirect pathway)",
        whyConfused:
          "Both dopamine receptors, printed under one Dopamine band",
        keyDifference:
          "D1 is s: relaxes renal vascular smooth muscle, activates direct pathway of striatum. D2 is i: modulates transmitter release, especially in brain, inhibits indirect pathway of striatum",
        clue:
          "Kidney + direct pathway = D1 (s, cAMP up); transmitter modulation + indirect pathway = D2 (i, cAMP down) — the basal ganglia pairs sort by the same letter",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any 'which second messenger changes?' question — cAMP up, cAMP down, or IP3/DAG/Ca2+ up?",
        differentiator:
          "Never answer from the ligand or the organ — answer from the receptor's q/i/s letter. q (α1, M1, M3, H1, V1) → Phospholipase C → PIP2 → DAG + IP3 → ↑Ca2+. s (β1, β2, β3, D1, H2, V2) → adenylyl cyclase ⊕ → ↑cAMP. i (α2, M2, D2) → adenylyl cyclase ⊖ → ↓cAMP.",
        correctPath:
          "Receptor → letter → enzyme → messenger: the table's middle column is the entire decision, and the figure is just the middle column unrolled",
      },
      {
        lookAlike:
          "A transmitter-name stem that hides two different G proteins — acetylcholine, norepinephrine, histamine, dopamine, or vasopressin",
        differentiator:
          "Every family on the page forks: ACh → M2 (i) vs M1/M3 (q); NE/Epi → α1 (q) vs α2 (i) vs β1/β2/β3 (s); histamine → H1 (q) vs H2 (s); dopamine → D1 (s) vs D2 (i); vasopressin → V1 (q) vs V2 (s). The transmitter never decides the route — the receptor subtype does.",
        correctPath:
          "When the stem names only the transmitter, hunt the subtype: the answer is always the receptor row, and the row's letter hands you the cascade",
      },
      {
        lookAlike:
          "A smooth-muscle question — will it contract or relax?",
        differentiator:
          "The Gq arm contracts: α1, M3, H1, V1 → IP3 → ↑Ca2+ → Smooth muscle contraction (the figure's top panel). The β2 arm relaxes through the SAME figure's bottom panel: cAMP → protein kinase A → ⊖ myosin light-chain kinase (smooth muscle contraction) — kinase A phosphorylates the contraction kinase and switches it off.",
        correctPath:
          "Contraction questions route through Ca2+; β2 relaxation routes through PKA ⊣ MLCK — the only arrow on the page where a kinase named for contraction is INHIBITED",
      },
    ],
    miniCase: {
      vignette:
        "A 27-year-old woman at 31 weeks' gestation presents with regular painful uterine contractions and a cervical change consistent with preterm labor. Tocolytic therapy is started with a β2-selective agonist given as a continuous infusion. Over the following hour the contractions space out and the uterus quiets. Which of the following intracellular cascades best explains the relaxation of her uterine smooth muscle?",
      question:
        "Trace the drug's mechanism through the book 237 table and figure — receptor, G-protein class, enzyme, second messenger, and the final arrow.",
      options: [
        {
          label:
            "β2 receptor (s) → GS protein → ⊕ adenylyl cyclase → ATP → cyclic AMP → protein kinase A → ⊖ myosin light-chain kinase (smooth muscle contraction)",
          text:
            "The full Gs route ending on the figure's inhibitory arrow.",
          correct: true,
          why:
            "Correct — this is the figure's bottom panel, end to end. The β2 row of the table is s-class, and its printed functions include '↓ uterine tone (tocolysis)'. The bottom panel routes it: GS protein carries the pointed ⊕ onto adenylyl cyclase, ATP becomes cyclic AMP, cyclic AMP activates protein kinase A, and protein kinase A's blunt red ⊖ lands on myosin light-chain kinase (smooth muscle contraction) — phosphorylation inhibits the contraction kinase, so the uterine myometrium relaxes. Every element of this option is printed on the page.",
        },
        {
          label:
            "β2 receptor (q) → Gq protein → phospholipase C → PIP2 → IP3 → ↑Ca2+ → smooth muscle contraction",
          text: "The calcium squeeze, mis-routed through β2.",
          why:
            "Wrong letter. The Gq route (Phospholipase C → PIP2 → DAG + IP3 → ↑Ca2+ → Smooth muscle contraction) is real — but the figure's top panel assigns it to H1, α1, V1, M1, or M3, and the table stamps β2 as s, not q. Worse, this cascade CONTRACTS smooth muscle: routing a tocolytic through IP3 and Ca2+ would predict more contractions, the opposite of the vignette.",
        },
        {
          label:
            "β2 receptor (i) → Gi protein → ⊖ adenylyl cyclase → ↓ cyclic AMP",
          text: "The brake, attached to the wrong receptor.",
          why:
            "The Gi brake is real — the bottom panel's right arm — but the figure assigns it to the M2, α2, or D2 receptor, and the table stamps β2 as s. Lowering cAMP with Gi would blunt protein kinase A and remove the very kinase whose ⊖ on myosin light-chain kinase produces the relaxation; the mechanism in this option cannot relax the uterus the way the vignette describes.",
        },
        {
          label:
            "β2 receptor (s) → GS protein → ⊕ adenylyl cyclase → ATP → cyclic AMP → protein kinase A → ⊕ myosin light-chain kinase (smooth muscle contraction)",
          text: "The right cascade with the last arrow flipped.",
          why:
            "Everything here is printed on the page except the final arrow's direction — and that arrow is the point. Protein kinase A's output toward myosin light-chain kinase is the figure's blunt red ⊖ (inhibition), not a ⊕: PKA phosphorylates MLCK, lowers its activity, and relaxation follows. Flipping the arrow predicts contraction and would make the tocolytic a uterotonic — the single most exam-worthy subtlety on this page.",
        },
      ],
      reasoning:
        "The stem names the receptor class (β2-selective agonist) and the effect (uterine quieting), so the task is to run the table's letter into the figure's cascade. β2 is s-class; the s route is the bottom panel's left arm: GS protein → ⊕ adenylyl cyclase → ATP → cyclic AMP → protein kinase A. The only question left is what protein kinase A DOES at the end, and the figure prints it as an inhibitory blunt arrow onto myosin light-chain kinase (smooth muscle contraction) — the mechanism of β2-mediated smooth muscle relaxation (tocolysis here; bronchodilation in the two lungs). Distractor 2 mis-sorts β2 into the q family (that cascade belongs to H1/α1/V1/M1/M3 and would contract the uterus); distractor 3 mis-sorts it into the i family (the Gi brake belongs to M2/α2/D2 and would remove PKA rather than deploy it); distractor 4 gets the whole cascade right but flips the final arrow, turning the page's most carefully printed inhibition into a stimulation. The correct answer is the only option that matches every arrow as printed.",
    },
  },
  mnemonics: [
    {
      code: "HAV M&M",
      meaning:
        "The Gq family list: H1, α1, V1 (H-A-V — 'HAV') + M1, M3 (the two Ms — 'M&M') — read together as 'HAVE an M&M'. Five receptors, one G protein: the figure's top panel prints them as 'H1, α1, V1, M1, or M3 receptor', and the table stamps each of them q.",
      memorizes:
        "The five q-class receptors: α1, M1, M3, H1, V1",
      whenToUse:
        "Any question asking which receptors couple to Gq / phospholipase C / IP3-DAG, or which receptor family a calcium-mediated effect belongs to",
      clinical:
        "All five are the squeeze-and-secrete family: vasoconstriction and mydriasis (α1, V1), gland secretion and peristalsis (M1, M3), bronchoconstriction and pruritus (H1) — one cascade, five clinical faces.",
    },
    {
      code: "MAD TWOS",
      meaning:
        "The Gi family list: M2, α2, D2 — the three receptors whose subscripts are all 2, spelling M-A-D — and every one of them is a DOWN-brake: M2 ↓ heart rate, α2 ↓ sympathetic (adrenergic) outflow, D2 modulates (turns down) transmitter release. The figure prints them as 'M2, α2, or D2 receptor' with the blunt ⊖ arrow.",
      memorizes:
        "The three i-class receptors: α2, M2, D2 — and their brake-like functions",
      whenToUse:
        "Any question about which receptors couple to Gi / inhibit adenylyl cyclase / lower cAMP, or why α2 agonism lowers blood pressure",
      clinical:
        "The i-family brakes: vagal slowing of the heart (M2), the presynaptic autoreceptor that quiets norepinephrine release (α2), and the dopamine modulator of transmitter release (D2) — all blunt the same cyclase.",
    },
    {
      code: "Q SQUEEZES · S SPARKS · I SILENCES",
      meaning:
        "The three routes in one line: Q SQUEEZES — Gq → Phospholipase C → PIP2 → DAG + IP3 → ↑Ca2+ → smooth muscle contraction (the calcium squeeze). S SPARKS — Gs → adenylyl cyclase ⊕ → ATP → cyclic AMP → protein kinase A (the cyclase sparked up). I SILENCES — Gi → the same adenylyl cyclase ⊖ → less cyclic AMP (the cyclase silenced).",
      memorizes:
        "Which G protein drives which enzyme and which direction the second messenger moves",
      whenToUse:
        "Any 'match the receptor to its second messenger' or 'which enzyme does this G protein engage' question — the whole figure in one recall line",
      clinical:
        "Before answering any cascade question, name the verb: squeeze (Ca2+), spark (cAMP up), or silence (cAMP down) — the verb picks the enzyme, the messenger, and the direction of the organ response.",
    },
    {
      code: "PIP2 SPLITS TWO WAYS",
      meaning:
        "The Gq downstream fork: phospholipase C cuts PIP2 into two messengers with two different addresses — DAG stays at the membrane and wakes Protein kinase C; IP3 diffuses to the calcium stores and raises ↑Ca2+, which BOTH feeds Protein kinase C and lands on Smooth muscle contraction. One substrate, two arms, one contraction.",
      memorizes:
        "The Gq panel's branching topology: PIP2 → DAG → PKC, and PIP2 → IP3 → Ca2+ → (PKC ⊕ and smooth muscle contraction)",
      whenToUse:
        "Any question about DAG vs IP3, what activates protein kinase C, or where the calcium comes from in a Gq-mediated contraction",
      clinical:
        "The two arms explain one pharmacologic split: calcium (IP3 arm) drives the contraction directly, while DAG/PKC modulates it — both arms originate from the single PIP2 cut, which is why every q receptor on the page contracts smooth muscle.",
    },
  ],
  rapidReview: {
    s30: [
      "q family (5): α1, M1, M3, H1, V1 — Gq protein → Phospholipase C → PIP2 → DAG + IP3 → ↑Ca2+ → smooth muscle contraction",
      "s family (6): β1, β2, β3, D1, H2, V2 — GS protein → ⊕ adenylyl cyclase → ATP → cyclic AMP → protein kinase A",
      "i family (3): α2, M2, D2 — Gi protein → ⊖ the SAME adenylyl cyclase → ↓ cyclic AMP",
      "β1 (one heart): ↑ heart rate, ↑ contractility, ↑ renin release, ↑ lipolysis",
      "β2 (two lungs): vasodilation, bronchodilation, ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis, ↓ uterine tone (tocolysis), ↑ aqueous humor production, ↑ cellular K+ uptake",
      "α1: ↑ vascular smooth muscle contraction, mydriasis, ↑ intestinal and bladder sphincter contraction",
      "α2: ↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production",
      "M2: ↓ heart rate, AV node conduction velocity, and atrial contractility — the Gi brake on the heart",
      "V2: ↑ H2O permeability and reabsorption via upregulating aquaporin-2 in collecting twobules (tubules) of kidney, ↑ release of vWF",
      "Protein kinase A's final arrow: ⊖ myosin light-chain kinase (smooth muscle contraction) — how β2 relaxes smooth muscle",
    ],
    m3: [
      "HAV M&M — the Gq five: H1, α1, V1, M1, M3",
      "MAD TWOS — the Gi three: M2, α2, D2, all 2s, all brakes",
      "Q SQUEEZES · S SPARKS · I SILENCES — Gq squeezes calcium, Gs sparks the cyclase, Gi silences it",
      "PIP2 SPLITS TWO WAYS — DAG → protein kinase C at the membrane; IP3 → ↑Ca2+ → contraction (and PKC too)",
    ],
    m10: [
      "The page is a FULL page (pdf 259 / book 237): the 14-row RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS table on top, the cascade figure below — no shared-page split, no margin notes, no printed mnemonics outside the table itself",
      "The figure is TWO stacked panels, not three: the Gq cascade on top, and ONE bottom panel where the Gs and Gi arms share a single adenylyl cyclase — GS protein's ⊕ and Gi protein's blunt ⊖ both land on that enzyme (adjudicated at 180–432 DPI VLM + PyMuPDF vector-path analysis)",
      "Myosin light-chain kinase (smooth muscle contraction) prints in the BOTTOM panel, under protein kinase A's inhibitory arrow — not in the Gq panel; PKA ⊣ MLCK is the β2-relaxation mechanism",
      "In the Gq panel, ↑Ca2+ feeds BOTH protein kinase C (⊕) and smooth muscle contraction — two arrows leave the calcium node",
      "The figure's Gs receptor label prints Latin 'B1, B2, B3, D1, H2, or V2 receptor' while the table prints Greek β1, β2, β3 — a printed inconsistency, both carried as printed; the G protein label prints 'GS protein' with a capital S",
      "The text layer prints every figure label DOUBLED (a pdftotext artifact from an invisible +19.2pt ghost copy of the downstream cluster in the vector data) and interleaves 'CaIP 3' + '2+' and 'SmoothCamuscle' — carried verbatim in the evidence quotes and glossed in the note",
      "The V2 row's 'twobules (tubules)' is the source's own red-printed wordplay (V2 · aquaporin-2 · TWO-bules) with the corrected word printed in parentheses — carried verbatim, attributed, never silently fixed; '(one heart)' and '(two lungs)' are the same class of red-printed source hints",
    ],
  },
  recall: [
    {
      q: "The five q-class receptors and the cascade the q letter engages.",
      a: "α1, M1, M3, H1, V1 → Gq protein → Phospholipase C → PIP2 → DAG → Protein kinase C, with the second arm IP3 → ↑Ca2+ → Smooth muscle contraction (Ca2+ also feeds Protein kinase C ⊕).",
    },
    {
      q: "The six s-class receptors and the cascade the s letter engages.",
      a: "β1, β2, β3, D1, H2, V2 → GS protein → ⊕ adenylyl cyclase → ATP → Cyclic AMP → Protein kinase A → ⊕ ↑Ca2+ and ⊖ Myosin light-chain kinase (smooth muscle contraction).",
    },
    {
      q: "The three i-class receptors, and where the Gi protein's arrow lands.",
      a: "α2, M2, D2 → Gi protein → a blunt-ended red ⊖ ONTO the same adenylyl cyclase the Gs arm stimulates — the shared enzyme is the figure's bottom panel.",
    },
    {
      q: "β1's four printed functions — and the source's own hint for remembering the receptor.",
      a: "↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis — the '(one heart)' parenthetical is First Aid's own red-printed hint: β1, one heart.",
    },
    {
      q: "β2's eight printed functions.",
      a: "Vasodilation, bronchodilation (two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis, ↓ uterine tone (tocolysis), ↑ aqueous humor production, ↑ cellular K+ uptake.",
    },
    {
      q: "α2's five printed functions.",
      a: "↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production.",
    },
    {
      q: "M2's printed function, and its G-protein class.",
      a: "↓ heart rate, AV node conduction velocity, and atrial contractility — class i (the Gi brake on the heart).",
    },
    {
      q: "The V2 row, verbatim — including the source's wordplay.",
      a: "↑ H2O permeability and reabsorption via upregulating aquaporin-2 in collecting twobules (tubules) of kidney, ↑ release of vWF — 'twobules (tubules)' is the source's own red-printed pun, carried as printed.",
    },
    {
      q: "Which kinase does protein kinase A inhibit in the figure — and what does that produce in smooth muscle?",
      a: "Myosin light-chain kinase (smooth muscle contraction) — PKA's red ⊖ on MLCK lowers contraction-kinesis activity, producing β2-mediated relaxation (bronchodilation, tocolysis).",
    },
    {
      q: "In the Gq panel, what are the TWO arrows that leave the ↑Ca2+ node?",
      a: "One ⊕ onto Protein kinase C (calcium co-activates PKC with DAG), and one onto Smooth muscle contraction — the panel's printed end point.",
    },
    {
      q: "H1 vs H2 — the printed functions and the letters.",
      a: "H1 (q): ↑ bronchoconstriction, airway mucus production, ↑ vascular permeability/vasodilation, pruritus. H2 (s): ↑ gastric acid secretion.",
    },
    {
      q: "D1 vs D2 — the printed functions and the letters.",
      a: "D1 (s): Relaxes renal vascular smooth muscle, activates direct pathway of striatum. D2 (i): Modulates transmitter release, especially in brain, inhibits indirect pathway of striatum.",
    },
  ],
  related: [
    {
      title: "Tissue Distribution of Adrenergic Receptors",
      topicId: "adrenergic-receptor-distribution",
      note: "The facing-page table (book 236) tells you WHERE β1, β2, and β3 live tissue by tissue; this page tells you WHAT each of them does intracellularly — the distribution table and the q/i/s table are two halves of one adrenergic story (β1 heart, β2 everywhere smooth muscle relaxes, β3 adipose and bladder).",
    },
    {
      title: "Acetylcholine Receptors: Nicotinic & Muscarinic",
      topicId: "acetylcholine-receptors",
      note: "The sibling page (book 235) defines the M1–5 family this page splits by G protein: M1/M3 route through Gq (glands, smooth muscle) while M2 routes through Gi (the heart) — the muscarinic family straddles two of the three routes.",
    },
    {
      title: "Autonomic Receptors: The Organ Response Table",
      topicId: "autonomic-receptors",
      note: "The wiring map (book 234) shows which fiber delivers which transmitter to which receptor chip; this page picks up exactly there — once the transmitter lands, the receptor's q/i/s letter decides the intracellular route.",
    },
    {
      title: "Autonomic Drugs: Synapse Targets & Overview",
      topicId: "autonomic-drugs-synapse",
      note: "The next page (book 238) is where drugs attack the synapse (ChAT, VMAT, AChE, MAO, COMT, the α2 autoreceptor's negative feedback); this page is what happens AFTER the transmitter is released and bound — the receptor-to-second-messenger half of the pathway.",
    },
    {
      title: "Phosphodiesterase Inhibitors",
      topicId: "phosphodiesterase-inhibitors",
      note: "The direct pharmacologic sequel to this page: PDEs are the enzymes that DESTROY the second messengers built here (cAMP, cGMP) — inhibiting them keeps the Gs signal loud, which is why PDE inhibitors function like indirect β stimulation in the heart and vasculature.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry — signal transduction (the second-messenger machinery)",
      connection:
        "The cascades printed here are the biochemistry chapter's signal-transduction pathways wearing autonomic clothes: Gq → phospholipase C → PIP2 → IP3 (Ca2+ from stores) + DAG (PKC at the membrane) and Gs/Gi → adenylyl cyclase → cAMP → protein kinase A are the two canonical GPCR routes; this page supplies the receptor roster (14 receptors, three routes) that the biochem chapter abstracts.",
    },
    {
      subject: "Renal physiology — vasopressin and water handling",
      connection:
        "The V2 row is a renal physiology lecture in one line: ↑ H2O permeability and reabsorption via upregulating aquaporin-2 in collecting twobules (tubules) of kidney — cAMP-driven aquaporin-2 insertion into the collecting-duct apical membrane, the mechanism desmopressin exploits in central diabetes insipidus and that fails in the nephrogenic form (a V2/Gs/post-receptor problem with the receptor intact).",
    },
    {
      subject: "Cardiovascular physiology & pharmacology — rate, contractility, renin",
      connection:
        "β1 (s) and M2 (i) are the cardiac rows: β1 raises heart rate, contractility, and renin through cAMP → protein kinase A, while M2 — the vagal brake — suppresses the SAME adenylyl cyclase through Gi; the figure's one-enzyme/two-arrows design is literally the sympathetic-vagal standoff at the sinoatrial node, and β-blockers and vagal maneuvers act on its two arms.",
    },
    {
      subject: "Pulmonary, obstetric & endocrine pharmacology — the β2 relaxation axis",
      connection:
        "β2 (s) is the smooth-muscle relaxation route: bronchodilation in the two lungs, tocolysis for the preterm uterus, and the K+ shifts (↑ cellular K+ uptake) that drop serum potassium after repeated β2 agonist doses — all through protein kinase A's ⊖ on myosin light-chain kinase (smooth muscle contraction), the figure's last and most easily missed arrow; H2's ↑ gastric acid secretion is the same Gs route run in the parietal cell.",
    },
  ],
};
