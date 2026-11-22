import type { KypUsMLENote } from "../types";

// Pharmacology — AUTONOMIC DRUGS (PH15 — the TISSUE x RECEPTOR GRID: the
// alpha1/alpha2/beta1/beta2/beta3 tissue-distribution table). Source:
// pdf 258 / book 236, the LOWER portion of the page — the section header
// 'Tissue distribution of adrenergic receptors' under the standing
// 'PHARMACOLOGY—AUTONOMIC DRUGS' banner, directly below the COMPLETED
// PH14 'Micturition control' section. The section's ENTIRE printed
// content is ONE 13-row table (5 receptor groups: α1 x2, α2 x3, β1 x2,
// β2 x5, β3 x1) under the three column heads RECEPTOR / TISSUE /
// EFFECT(S), carried verbatim in the note's first table block: α1 —
// 'Vascular smooth muscle / Vasoconstriction', 'Visceral smooth muscle /
// Smooth muscle contraction'; α2 — 'Pancreas / Inhibition of insulin
// secretion', 'Presynaptic terminals / Inhibition of neurotransmitter
// release', 'Salivary glands / Inhibition of salivary secretion'; β1 —
// 'Heart / ↑ heart rate, contractility', 'Kidney / ↑ renin secretion';
// β2 — 'Bronchioles / Bronchodilation', 'Cardiac muscle / ↑ heart rate,
// contractility', 'Liver / Glycogenolysis, glucose release', 'Arterial
// smooth muscle / Vasodilation', 'Pancreas / Stimulation of insulin
// secretion'; β3 — 'Adipose / ↑ lipolysis'. Pure text — no diagram, no
// margin note, no printed mnemonic; the page's 3 rasters all belong to
// the UPPER portion's PH14 bladder illustration.
// KYP EXTENSIONS (flagged wherever they appear): the GRID VIEW (tissues
// down x receptors across — the cross-tabulation of the book's own 13
// rows); the EMPTY-CELL CAVEAT (the table prints positives only — a
// blank cell is 'no printed row', NOT 'receptor absent from tissue');
// the SEESAW frames (pancreas α2-vs-β2 insulin; Vascular-α1-vs-Arterial-β2
// tone); the α2 TRIPLE-BRAKE reading (all three α2 rows are inhibitions);
// the Heart-vs-Cardiac-muscle doubling note ('↑ heart rate, contractility'
// prints under BOTH β1 'Heart' and β2 'Cardiac muscle'); the drug/clinical
// anchor layer (albuterol, epinephrine, dobutamine, phenylephrine,
// clonidine, mirabegron, the JG apparatus — none printed on this page);
// and the classic 'one heart, two lungs' counting code (the FACING page's
// G-protein table prints '(one heart)' and '(two lungs)' — book 237, the
// separate pending topic; attributed).
// EXCLUSIONS: the 'Micturition control' section in the UPPER portion of
// the SAME page is the COMPLETED topic PH14 (EXCLUDED; same-page boundary
// pinned — its 'β₃-receptor' detrusor plate is noted only as the
// same-page cross-link: β3 appears TWICE on this book page, as the
// detrusor plate above and the Adipose row below); pdf 257 carries the
// COMPLETED topics PH12 'acetylcholine-receptors' (upper) and PH13
// 'pain-transmission' (lower; EXCLUDED); pdf 259 opens the SEPARATE
// pending 'G-protein–linked second messengers' section (this section
// ENDS on pdf 258 at the table's last row — verified; sourcePages =
// [258] only).

export const tissueDistributionOfAdrenergicReceptors: KypUsMLENote = {
  id: "tissue-distribution-of-adrenergic-receptors",
  title: "Tissue Distribution of Adrenergic Receptors",
  subtitle:
    "The body's adrenergic address book — one table, five receptors, thirteen tissue rows: α1 on vascular and visceral smooth muscle (constrict/contract), α2 on pancreas, presynaptic terminals, and salivary glands (three inhibitions — the brake pedal), β1 on heart and kidney (rate, contractility, renin), β2 on bronchioles, cardiac muscle, liver, arterial smooth muscle, and pancreas (dilate, fuel, pour insulin), and β3 on adipose (lipolysis) — with the seesaws the grid hides (pancreas α2-vs-β2, vascular-α1-vs-arterial-β2) and the doubled heart-rate row (β1 'Heart' and β2 'Cardiac muscle' print the same effect).",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications, autonomic-receptors, acetylcholine-receptors, pain-transmission, and micturition-control before it — the Tissue distribution of adrenergic receptors section occupies the LOWER portion of the book-236 page, directly below the completed PH14 Micturition control section)",
  pilotCategory:
    "The tissue-distribution page's complete architecture — the 13-row RECEPTOR/TISSUE/EFFECT(S) table (α1: vascular + visceral smooth muscle; α2: pancreas + presynaptic terminals + salivary glands, all inhibitions; β1: heart + kidney; β2: bronchioles + cardiac muscle + liver + arterial smooth muscle + pancreas; β3: adipose), plus the KYP grid layer that cross-tabulates it (tissues down x receptors across), the seesaw frames (pancreas insulin, vascular tone), the α2 triple-brake reading, and the drug/clinical anchors that hang off each row (albuterol, epinephrine, dobutamine, phenylephrine, clonidine, mirabegron).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 236 (Pharmacology — Autonomic Drugs: Tissue distribution of adrenergic receptors — the section's entire printed content is one 13-row table under the heads RECEPTOR / TISSUE / EFFECT(S), carried verbatim: α1 'Vascular smooth muscle / Vasoconstriction' and 'Visceral smooth muscle / Smooth muscle contraction'; α2 'Pancreas / Inhibition of insulin secretion', 'Presynaptic terminals / Inhibition of neurotransmitter release', and 'Salivary glands / Inhibition of salivary secretion'; β1 'Heart / ↑ heart rate, contractility' and 'Kidney / ↑ renin secretion'; β2 'Bronchioles / Bronchodilation', 'Cardiac muscle / ↑ heart rate, contractility', 'Liver / Glycogenolysis, glucose release', 'Arterial smooth muscle / Vasodilation', and 'Pancreas / Stimulation of insulin secretion'; β3 'Adipose / ↑ lipolysis' — the table is pure text (no diagram; the page's three images belong to the Micturition control section above, the completed PH14, EXCLUDED); the grid view, the empty-cell caveat, the seesaw/brake frames, the doubled heart-rate note, and the drug anchors (albuterol, epinephrine, dobutamine, phenylephrine, clonidine, mirabegron) are KYP extensions; the classic 'one heart, two lungs' counting code is printed on the facing page's G-protein table (book 237, the separate pending G-protein–linked second messengers topic); this section ends on pdf 258 — the G-protein section opens pdf 259, the separate pending topic)",
  tags: [
    "tissue distribution",
    "adrenergic receptors",
    "alpha1 receptor",
    "α1 receptor",
    "alpha2 receptor",
    "α2 receptor",
    "beta1 receptor",
    "β1 receptor",
    "beta2 receptor",
    "β2 receptor",
    "beta3 receptor",
    "β3 receptor",
    "vascular smooth muscle",
    "vasoconstriction",
    "visceral smooth muscle",
    "pancreas",
    "insulin secretion",
    "presynaptic terminals",
    "neurotransmitter release",
    "salivary glands",
    "salivary secretion",
    "heart",
    "heart rate",
    "contractility",
    "kidney",
    "renin secretion",
    "bronchioles",
    "bronchodilation",
    "cardiac muscle",
    "liver",
    "glycogenolysis",
    "arterial smooth muscle",
    "vasodilation",
    "adipose",
    "lipolysis",
    "autonomic drugs",
    "sympathetic nervous system",
    "norepinephrine",
    "epinephrine",
    "albuterol",
    "clonidine",
    "mirabegron",
    "one heart two lungs",
    "pharmacology",
  ],
  core: {
    what:
      "FIVE RECEPTORS, THIRTEEN ROWS, ONE ADDRESS BOOK. The page prints the adrenergic system's delivery map — which tissue carries which receptor, and what happens when each receptor is turned. THE α ROWS: α1 lives on SMOOTH MUSCLE BEDS — 'Vascular smooth muscle / Vasoconstriction' and 'Visceral smooth muscle / Smooth muscle contraction' (α1 is the table's contraction receptor); α2 lives on SECRETORY AND NEURONAL CELLS — 'Pancreas / Inhibition of insulin secretion', 'Presynaptic terminals / Inhibition of neurotransmitter release', 'Salivary glands / Inhibition of salivary secretion' (three rows, three inhibitions — in this table α2 only ever says STOP). THE β ROWS: β1 is the CARDIORENAL receptor — 'Heart / ↑ heart rate, contractility' and 'Kidney / ↑ renin secretion'; β2 is the five-tissue relax-and-fuel receptor — 'Bronchioles / Bronchodilation', 'Cardiac muscle / ↑ heart rate, contractility', 'Liver / Glycogenolysis, glucose release', 'Arterial smooth muscle / Vasodilation', 'Pancreas / Stimulation of insulin secretion'; β3 is the one-tissue metabolic receptor — 'Adipose / ↑ lipolysis'. THE SEESAWS the list view hides (KYP frames of the book's own cells): the PANCREAS appears twice — α2 holds insulin back, β2 pours it out (the only organ with two rows under two receptors); the TONE axis is split across two labels — α1 'Vascular smooth muscle' constricts while β2 'Arterial smooth muscle' dilates; and the HEART-RATE EFFECT prints twice — under β1 'Heart' and again under β2 'Cardiac muscle' (the doubled row).",
    why:
      "WHY A DISTRIBUTION PAGE SITS IN THE AUTONOMIC DRUGS CHAPTER. Every sympathomimetic and every sympatholytic question is this table read one way or another: the drug names the receptor, the receptor names the tissue, the tissue names the effect — and the table is the printed link in that chain. WHY THE α/β SPLIT RUNS THE WAY IT DOES: α1 and β2 are the two smooth-muscle receptors with OPPOSITE signs on overlapping beds (α1 constricts vessels, β2 dilates arteries), which is why the same catecholamine can raise or lower regional tone depending on which receptor dominates the bed — and why the table prints the two arms under DIFFERENT labels ('Vascular' vs 'Arterial'): the seesaw is real, the labels are the book's own. WHY α2 IS THE BRAKE PEDAL: all three α2 rows are inhibitions — insulin, neurotransmitter release, salivary secretion — because α2 is the table's PRESYNAPTIC AND SECRETORY brake (its presynaptic-terminal row is the autoreceptor story: α2 stimulation curbs norepinephrine release itself, the clonidine mechanism, KYP anchor), while α1 is the table's contraction receptor. WHY THE β ROWS ARE THE CLINICAL SHELF: β1's two rows are the cardiorenal drug story (dobutamine's inotropy, the JG apparatus's renin — KYP anchors), β2's five rows are the rescue story (albuterol's bronchodilation, epinephrine's composite — KYP anchors), and β3's one row is the metabolic story — with the same-page twist that β3's BLADDER job (the detrusor plate) lives in the diagram ABOVE this table on the same book page (PH14's 'β₃-receptor' on the detrusor; mirabegron's target — the same-page cross-link).",
    keyIdea:
      "Read every adrenergic stem through two anchors. ANCHOR 1 — NAME THE TISSUE: the stem's organ names the row (heart → β1 'Heart'; bronchioles → β2; pancreas → the seesaw's two rows; vessels → the tone axis's two labels). ANCHOR 2 — READ THE RECEPTOR COLUMN, THEN THE EFFECT CELL: the table's own cell supplies the direction — α1 cells all say contract/constrict, α2 cells all say inhibit, β cells all say ↑/stimulate/dilate. THE EMPTY-CELL CAVEAT (KYP): the table prints positives only — a blank cell means 'no printed row pairs this receptor with this tissue', NOT 'the receptor is absent from the tissue' (do not read absence into silence; the exam asks what the BOOK prints). The exam's one-line summary: THE TISSUE NAMES THE RECEPTOR, THE RECEPTOR NAMES THE EFFECT — and the three composite anchors to carry: α1 = the contraction receptor (smooth-muscle beds), α2 = the brake pedal (three inhibitions), β = the accelerator (β1 heart/kidney, β2 the five-tissue relax-and-fuel set, β3 adipose).",
  },
  mechanisms: [
    {
      id: "alpha-distribution-wiring",
      title:
        "The α mechanism: sympathetic stimulation → α1 on vascular + visceral smooth muscle (Vasoconstriction / Smooth muscle contraction) + α2 on pancreas, presynaptic terminals, and salivary glands (three inhibitions) — the contraction receptor and the brake pedal, one table half",
      context:
        "The table's α1 and α2 blocks (book 236), verbatim: 'α1 — Vascular smooth muscle / Vasoconstriction; Visceral smooth muscle / Smooth muscle contraction' and 'α2 — Pancreas / Inhibition of insulin secretion; Presynaptic terminals / Inhibition of neurotransmitter release; Salivary glands / Inhibition of salivary secretion'. The brake-pedal naming, the autoreceptor reading of the presynaptic row, and the clonidine/JG anchors are KYP extensions beyond the page's printed set.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "Sympathetic outflow rises — NE and epinephrine reach the tissues",
            sublabel:
              "Input — the adrenergic transmitters (norepinephrine from the sympathetic terminals, epinephrine from the adrenal medulla — KYP anchors; the table itself begins at the receptor). Every catecholamine question downstream is decided by WHICH of the five receptors the transmitter finds on WHICH tissue — and this table is the printed map of exactly that: five receptors, thirteen tissue rows.",
            variant: "input",
          },
          {
            id: "alpha1-beds",
            label: "α1 on the smooth-muscle beds → Vasoconstriction + Smooth muscle contraction",
            sublabel:
              "The table's α1 rows, verbatim: 'Vascular smooth muscle / Vasoconstriction' and 'Visceral smooth muscle / Smooth muscle contraction'. α1 is this table's CONTRACTION receptor — both printed rows carry the positive sign (constrict, contract). The vascular row is the tone axis's constrictor arm (its dilator arm is the β2 'Arterial smooth muscle / Vasodilation' row); the visceral row is the same sign on the visceral beds (KYP anchors: the sphincters and gut wall — the 'rest' side of the gut story).",
            variant: "process",
          },
          {
            id: "alpha2-brake",
            label: "α2 on pancreas, presynaptic terminals, salivary glands → three INHIBITIONS",
            sublabel:
              "The table's α2 rows, verbatim: 'Pancreas / Inhibition of insulin secretion', 'Presynaptic terminals / Inhibition of neurotransmitter release', 'Salivary glands / Inhibition of salivary secretion'. Three rows, three inhibitions — in this table α2 only ever says STOP (KYP: the brake-pedal reading; the contraction receptor is α1). The presynaptic row is the AUTOCEPTOR story: α2 stimulation on the terminal curbs norepinephrine release itself — the negative-feedback loop the exam draws as a curve, and the clonidine mechanism (KYP clinical anchors; the page prints only the row).",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — the α half of the map: CONSTRICT the beds, BRAKE the secretions",
            sublabel:
              "Output — the α half of the distribution: α1 tightens the smooth-muscle beds (vascular tone up, visceral tone up) while α2 brakes three secretory/release processes (insulin, neurotransmitter release, saliva). The exam's payoff: anything that stimulates α1 constricts (phenylephrine — KYP anchor); anything that stimulates α2 brakes (clonidine on the presynaptic terminals — ↓ sympathetic outflow, dry mouth, and the α2 arm of the pancreas seesaw; KYP anchors). The two α receptors are OPPOSITE strategies on the same sympathetic budget: one acts on the effector, one on the signals.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "alpha1-beds", label: "catecholamines on the smooth-muscle beds" },
          { from: "input", to: "alpha2-brake", label: "catecholamines on the secretory/neuronal cells" },
          { from: "alpha1-beds", to: "output", label: "constrict + contract (the effector arm)" },
          { from: "alpha2-brake", to: "output", label: "three inhibitions (the signal arm)" },
        ],
      },
    },
    {
      id: "beta-distribution-wiring",
      title:
        "The β mechanism: β1 on heart + kidney (↑ heart rate, contractility; ↑ renin secretion) + β2 on bronchioles, cardiac muscle, liver, arterial smooth muscle, pancreas (dilate, fuel, pour insulin) + β3 on adipose (↑ lipolysis) — the accelerator half, one heart and two lungs",
      context:
        "The table's β1, β2, and β3 blocks (book 236), verbatim: 'β1 — Heart / ↑ heart rate, contractility; Kidney / ↑ renin secretion'; 'β2 — Bronchioles / Bronchodilation; Cardiac muscle / ↑ heart rate, contractility; Liver / Glycogenolysis, glucose release; Arterial smooth muscle / Vasodilation; Pancreas / Stimulation of insulin secretion'; 'β3 — Adipose / ↑ lipolysis'. The dobutamine/albuterol/epinephrine/mirabegron anchors and the JG-apparatus reading of the Kidney row are KYP extensions beyond the page's printed set.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The same catecholamines, the β half of the address book",
            sublabel:
              "Input — the same sympathetic transmitters (NE, epinephrine — KYP anchors), now read against the β columns: β1 (two rows), β2 (five rows), β3 (one row). The β receptors are the table's ACCELERATOR half — every printed β effect is an ↑, a stimulation, or a dilation.",
            variant: "input",
          },
          {
            id: "beta1-cardiorenal",
            label: "β1 on Heart + Kidney → ↑ heart rate, contractility + ↑ renin secretion",
            sublabel:
              "The table's β1 rows, verbatim: 'Heart / ↑ heart rate, contractility' and 'Kidney / ↑ renin secretion'. β1 is the CARDIORENAL receptor — the inotropy-and-renin pair the exam writes as one drug question (KYP anchors: dobutamine's inotropy; the juxtaglomerular apparatus as the renin's cellular home; the RAAS downstream). Note the kidney row's reach: β1 is the only receptor in the table with a row on the kidney at all.",
            variant: "process",
          },
          {
            id: "beta2-five-tissues",
            label: "β2 on the five-tissue set → dilate, squeeze fuel, pour insulin",
            sublabel:
              "The table's β2 rows, verbatim: 'Bronchioles / Bronchodilation' (the airway row — albuterol's target, KYP anchor), 'Cardiac muscle / ↑ heart rate, contractility' (the DOUBLED row: the same effect string prints under β1 'Heart' AND here — the table's own two cardiac rows), 'Liver / Glycogenolysis, glucose release' (the fight-or-flight fuel row), 'Arterial smooth muscle / Vasodilation' (the tone axis's dilator arm — the opposite sign of the α1 'Vascular smooth muscle' row), and 'Pancreas / Stimulation of insulin secretion' (the β2 arm of the pancreas seesaw — the same organ the α2 row inhibits).",
            variant: "process",
          },
          {
            id: "beta3-adipose",
            label: "β3 on Adipose → ↑ lipolysis",
            sublabel:
              "The table's β3 row, verbatim: 'Adipose / ↑ lipolysis'. β3 is the table's one-tissue metabolic receptor — the fat-mobilization row. The same-page twist (KYP cross-link): the SAME book page carries β3 a second time, in the diagram ABOVE this table — the 'β₃-receptor' plate on the detrusor (the completed PH14's territory), which is why mirabegron relaxes a bladder (KYP anchors: the β₃ detrusor story lives on the upper portion; THIS table gives β3 only the adipose row).",
            variant: "target",
          },
          {
            id: "output",
            label: "RESULT — the β half of the map: ACCELERATE everything it touches",
            sublabel:
              "Output — the β half of the distribution: β1 accelerates the pump and the RAAS, β2 opens airways and arteries and pours out fuel (glucose, insulin), β3 mobilizes fat. The exam's payoff: the β rows are the rescue pharmacology (KYP anchors: albuterol on β2 bronchioles, epinephrine's anaphylaxis composite α1+β2, dobutamine on β1) and the energy story (β2 liver + β3 adipose = the fight-or-flight fuel budget). And the counting code (classic, the facing page prints it in its G-protein table — book 237): β1 = ONE HEART, β2 = TWO LUNGS.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "beta1-cardiorenal", label: "catecholamines on the heart and kidney" },
          { from: "input", to: "beta2-five-tissues", label: "catecholamines on the five-tissue set" },
          { from: "input", to: "beta3-adipose", label: "catecholamines on the fat" },
          { from: "beta1-cardiorenal", to: "output", label: "↑ rate, ↑ contractility, ↑ renin" },
          { from: "beta2-five-tissues", to: "output", label: "dilate + fuel + insulin" },
          { from: "beta3-adipose", to: "output", label: "↑ lipolysis" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "adrenergic-receptor-distribution-map",
      title: "The adrenergic receptor distribution map (an original KYP visual)",
      caption:
        "An original KYP grid conveying the section's table (book 236 — pure text, no imagery): the 12-TISSUE × 5-RECEPTOR MATRIX (tissues down in book order, α1/α2/β1/β2/β3 across, every filled cell carrying the book's verbatim effect string, the pancreas row carrying TWO cells — the seesaw in one row) with the EMPTY-CELL CAVEAT strip (blank = no printed row, not receptor-absent); the three SEESAW cards (the pancreas seesaw α2-holds/β2-pours, the tone seesaw α1-Vascular-constricts/β2-Arterial-dilates, the α2 triple brake — three rows, three inhibitions); the four-code strip (1 HEART, 2 LUNGS, 3 FAT — the classic counting code, the facing page's G-protein table prints '(one heart)'/'(two lungs)'; plus three KYP originals); and the reading-rule footer (tissue → receptor → effect).",
      notice:
        "Census (pdfimages + text layer): the section's sole printed element is ONE TABLE — pure text, nothing reproduced, nothing redrawn from imagery (the page's 3 rasters all belong to the UPPER portion's PH14 bladder illustration, the separate completed topic — EXCLUDED). This visual conveys the table as an ORIGINAL_KYP_ADAPTATION grid: the cross-tabulation (tissues down × receptors across) is KYP's pivot of the book's own 13 rows — every filled cell is the book's own printed string. KYP extensions flagged on the map: the empty-cell caveat (positives only — blank ≠ absent), the seesaw/brake frames, the Heart-vs-Cardiac-muscle doubling note, the drug anchors (albuterol, epinephrine, dobutamine, phenylephrine, clonidine, mirabegron — none printed on this page), and the classic 'one heart, two lungs' counting code (printed on the FACING page's G-protein table, book 237 — a separate pending topic; attributed).",
    },
    {
      kind: "table",
      title: "Book 236 — the Tissue distribution of adrenergic receptors table, verbatim",
      intro:
        "The section's entire printed content — the 13 tissue rows under the three column heads RECEPTOR / TISSUE / EFFECT(S), carried whole (one row per receptor group, every tissue and effect string verbatim). The table is pure text: no diagram, no margin note, no printed mnemonic belongs to this section.",
      columns: [
        "THE TABLE (book 236, verbatim)",
        "WHAT IT ESTABLISHES",
      ],
      rows: [
        [
          "α1 — Vascular smooth muscle → Vasoconstriction. Visceral smooth muscle → Smooth muscle contraction.",
          "The α1 rows — the CONTRACTION receptor's two beds. Both rows carry the positive sign: vessels constrict (the tone axis's constrictor arm), visceral smooth muscle contracts (the same sign on the visceral beds). Everything α1 does in this table is a tightening — α1 is the effector half of the α pair (α2 is the signal half).",
        ],
        [
          "α2 — Pancreas → Inhibition of insulin secretion. Presynaptic terminals → Inhibition of neurotransmitter release. Salivary glands → Inhibition of salivary secretion.",
          "The α2 rows — the BRAKE PEDAL's three stops. Three rows, three inhibitions: insulin held back (the α2 arm of the pancreas seesaw), norepinephrine release curbed at the terminal itself (the autoreceptor story — the only row of the table that lives on a neuron, KYP), and saliva dried up (the clonidine-shaped effect, KYP anchor). In this table α2 never excites anything.",
        ],
        [
          "β1 — Heart → ↑ heart rate, contractility. Kidney → ↑ renin secretion.",
          "The β1 rows — the CARDIORENAL receptor. The heart row is the inotropy-and-chronotropy string (the same string prints again under β2 'Cardiac muscle' — the doubled row, the table's own two cardiac entries); the kidney row is the RAAS row (the only receptor in the table with any row on the kidney — the JG apparatus, KYP anchor).",
        ],
        [
          "β2 — Bronchioles → Bronchodilation. Cardiac muscle → ↑ heart rate, contractility. Liver → Glycogenolysis, glucose release. Arterial smooth muscle → Vasodilation. Pancreas → Stimulation of insulin secretion.",
          "The β2 rows — the five-tissue RELAX-AND-FUEL set. Airways open (the albuterol row, KYP anchor), the second cardiac row prints the same heart-rate string as β1's, the liver pours glucose, the arteries dilate (the tone axis's dilator arm — the opposite sign of the α1 'Vascular smooth muscle' row), and the pancreas pours insulin (the β2 arm of the seesaw — the same organ the α2 row inhibits). β2 is the table's broadest receptor: five of the thirteen rows.",
        ],
        [
          "β3 — Adipose → ↑ lipolysis.",
          "The β3 row — the one-tissue METABOLIC receptor. The fat-mobilization row, and the table's only β3 row: the same book page carries β3 a second time in the diagram above (the 'β₃-receptor' plate on the detrusor, the completed PH14's territory — the same-page cross-link; mirabegron's bladder story lives there, KYP anchor).",
        ],
      ],
      caption:
        "One table, two halves: the α half (α1 the contraction receptor on smooth-muscle beds + α2 the brake pedal on secretory and neuronal cells) and the β half (β1 heart/kidney, β2 the five-tissue set, β3 adipose) — thirteen rows, five receptors, and the seesaws hiding in plain sight (pancreas twice, vessels vs arteries, heart-rate string twice). The table prints NO negatives: every row is a positive pairing.",
    },
    {
      kind: "table",
      title: "The tissue × receptor grid (KYP pivot of the book's own 13 rows)",
      intro:
        "The book prints the distribution as a receptor-grouped list; this grid pivots it — each tissue against all five receptors. Every filled cell is the book's own printed pairing; the view itself is KYP's. THE EMPTY-CELL CAVEAT (flagged): a dash means 'no row in the book's table pairs this receptor with this tissue' — NOT 'the receptor is absent from the tissue' (the table prints positives only; never read absence into silence).",
      columns: [
        "TISSUE",
        "α1",
        "α2",
        "β1",
        "β2",
        "β3",
      ],
      rows: [
        [
          "Vascular smooth muscle",
          "Vasoconstriction",
          "— (no printed row)",
          "— (no printed row)",
          "— (no printed row)",
          "— (no printed row)",
        ],
        [
          "Visceral smooth muscle",
          "Smooth muscle contraction",
          "— (no printed row)",
          "— (no printed row)",
          "— (no printed row)",
          "— (no printed row)",
        ],
        [
          "Pancreas — the seesaw organ (two rows, two receptors)",
          "— (no printed row)",
          "Inhibition of insulin secretion",
          "— (no printed row)",
          "Stimulation of insulin secretion",
          "— (no printed row)",
        ],
        [
          "Presynaptic terminals — the only neuronal row",
          "— (no printed row)",
          "Inhibition of neurotransmitter release",
          "— (no printed row)",
          "— (no printed row)",
          "— (no printed row)",
        ],
        [
          "Salivary glands",
          "— (no printed row)",
          "Inhibition of salivary secretion",
          "— (no printed row)",
          "— (no printed row)",
          "— (no printed row)",
        ],
        [
          "Heart",
          "— (no printed row)",
          "— (no printed row)",
          "↑ heart rate, contractility",
          "— (no printed row)",
          "— (no printed row)",
        ],
        [
          "Kidney",
          "— (no printed row)",
          "— (no printed row)",
          "↑ renin secretion",
          "— (no printed row)",
          "— (no printed row)",
        ],
        [
          "Bronchioles",
          "— (no printed row)",
          "— (no printed row)",
          "— (no printed row)",
          "Bronchodilation",
          "— (no printed row)",
        ],
        [
          "Cardiac muscle — the second cardiac row",
          "— (no printed row)",
          "— (no printed row)",
          "— (no printed row)",
          "↑ heart rate, contractility",
          "— (no printed row)",
        ],
        [
          "Liver",
          "— (no printed row)",
          "— (no printed row)",
          "— (no printed row)",
          "Glycogenolysis, glucose release",
          "— (no printed row)",
        ],
        [
          "Arterial smooth muscle — the dilator arm of the tone seesaw",
          "— (no printed row)",
          "— (no printed row)",
          "— (no printed row)",
          "Vasodilation",
          "— (no printed row)",
        ],
        [
          "Adipose",
          "— (no printed row)",
          "— (no printed row)",
          "— (no printed row)",
          "— (no printed row)",
          "↑ lipolysis",
        ],
      ],
      caption:
        "The patterns the receptor-grouped list hides (all KYP readings of the book's own cells): PANCREAS is the only tissue with TWO filled cells (α2 + β2 — the insulin seesaw in one row); the TONE AXIS is split across two different labels (α1 'Vascular smooth muscle' constricts vs β2 'Arterial smooth muscle' dilates — two arms, two rows, opposite signs); the HEART-RATE STRING prints twice (β1 'Heart' and β2 'Cardiac muscle' — the doubled row); α2's column is all inhibitions (the brake pedal); β2's column is the widest (five of thirteen rows); and β1 is the only receptor with a Kidney row (renin — the RAAS row). Sorting frames (KYP): a stem naming an organ → read the row across; a stem naming a drug → read the column down; a stem naming an effect → find the cell, then name its row and column.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 19-year-old woman with asthma presents with acute wheezing and dyspnea; she receives an inhaled bronchodilator and within minutes her wheezing resolves and her heart rate rises slightly. The question asks which receptor mediates the drug's effect on the airway — and where else the same receptor acts.",
        discriminator:
          "The β2 block's first row: 'Bronchioles / Bronchodilation' — plus the four sister rows that travel with it (Cardiac muscle '↑ heart rate, contractility', Liver 'Glycogenolysis, glucose release', Arterial smooth muscle 'Vasodilation', Pancreas 'Stimulation of insulin secretion')",
        concept: "Airway obstruction → β2 on bronchioles → bronchodilation (the five-tissue receptor)",
        answer:
          "β2 stimulation on 'Bronchioles → Bronchodilation' — the albuterol story (KYP anchor; the table prints the row, the drug belongs to the anchor layer). The slight heart-rate rise is the sister row: the same receptor's 'Cardiac muscle / ↑ heart rate, contractility' row — the doubled string that also prints under β1 'Heart'. Run the column (KYP frame): a β2 agonist dilates airways and arteries, pours glucose from the liver and insulin from the pancreas — the five-tissue set in one mechanism question.",
      },
      {
        stem:
          "A drug is reported to increase heart rate and contractility while also increasing renin secretion; a physiology question asks which adrenergic receptor, expressed on which two tissues per the standard distribution table, produces both effects.",
        discriminator:
          "The β1 block, both rows: 'Heart / ↑ heart rate, contractility' + 'Kidney / ↑ renin secretion' — β1 is the only receptor in the table with ANY row on the kidney",
        concept: "↑ rate + ↑ contractility + ↑ renin → β1 (heart + kidney — the cardiorenal receptor)",
        answer:
          "β1 — the cardiorenal receptor: 'Heart / ↑ heart rate, contractility' and 'Kidney / ↑ renin secretion' (the JG apparatus, KYP anchor). The exam's wrinkle is the doubled string: '↑ heart rate, contractility' prints under BOTH β1 'Heart' and β2 'Cardiac muscle' — the renin clause is the discriminator that pins the answer to β1 (no other receptor in the table has a kidney row at all). KYP anchors: dobutamine selects this column; the RAAS downstream answers the renal chapters.",
      },
      {
        stem:
          "A 54-year-old man with hypertension is started on a drug that acts at presynaptic sympathetic terminals; his blood pressure falls, his mouth is dry, and his heart rate slows. The question asks the mechanism — which receptor, on which tissue of the distribution table, produces which listed effect.",
        discriminator:
          "The α2 block's middle row: 'Presynaptic terminals / Inhibition of neurotransmitter release' — flanked by 'Pancreas / Inhibition of insulin secretion' and 'Salivary glands / Inhibition of salivary secretion' (three rows, three inhibitions)",
        concept: "Presynaptic α2 → inhibition of neurotransmitter release → ↓ sympathetic outflow (the autoreceptor row)",
        answer:
          "α2 stimulation on 'Presynaptic terminals → Inhibition of neurotransmitter release' — the clonidine story (KYP anchor; the page prints the row, the drug belongs to the anchor layer). The dry mouth is the sister row: 'Salivary glands / Inhibition of salivary secretion'. The frame to carry (KYP): in this table α2 is the brake pedal — all three of its rows are inhibitions — and the presynaptic row is the only row of the table that lives on a NEURON rather than an effector: stimulating it brakes norepinephrine release itself, the negative-feedback loop the exam draws as a curve.",
      },
    ],
    traps: [
      {
        a: "α2 stimulates insulin secretion — 'α' is the excitatory prefix, so the α receptor on the pancreas pours insulin out",
        b: "Carrying the α1 contraction sign (the other α receptor's rows) onto the α2 pancreas row, whose printed sign is INHIBITION",
        whyConfused:
          "The two α receptors share a letter and a family, and α1's rows are all contractions — students default the whole α family to 'excite'; the pancreas row's verb is easy to flip under time pressure",
        keyDifference:
          "The printed rows: 'α2 … Pancreas → Inhibition of insulin secretion' — while β2's pancreas row prints 'Stimulation of insulin secretion'. The seesaw is the table's own: α2 HOLDS insulin back (the brake pedal), β2 POURS it out (the accelerator) — same organ, two rows, two receptors, opposite signs. The β-cell's stimulatory adrenergic signal in this table is β2, and its inhibitory one is α2; insulin is never an α2-stimulated secretion.",
        clue:
          "Before answering any pancreas stem, recite the seesaw: α2 HOLDS, β2 POURS. Mnemonic: THE PANCREAS SEESAW — the table's two pancreas rows in one line (the only organ with two rows under two receptors).",
      },
      {
        a: "Only β1 raises heart rate — the table's 'Heart' row is β1, so the β2 column has no cardiac entry",
        b: "Erasing the β2 'Cardiac muscle' row — the table prints a SECOND cardiac row under β2, carrying the same effect string",
        whyConfused:
          "'One heart' pins the heart to β1 (the counting code is real — β1 is the heart's dominant receptor), and students over-extend it to 'β2 has no cardiac row'; the two rows sit in different receptor blocks, so the doubling is easy to miss in the list view",
        keyDifference:
          "The table prints BOTH rows: β1 — 'Heart / ↑ heart rate, contractility' AND β2 — 'Cardiac muscle / ↑ heart rate, contractility' (the identical effect string, verbatim, in both blocks). Both are true: β1 is the dominant cardiac receptor (one heart), and the table itself gives β2 a cardiac row with the same printed effect. When a stem asks 'which receptors can raise heart rate per the distribution table', the table's own answer is BOTH β1 and β2.",
        clue:
          "The doubled row is a designed testable point: scan the grid's heart-rate cells — there are TWO of them, one in the β1 column, one in the β2 column. Mnemonic: ONE HEART, TWO LUNGS names the DOMINANT receptor per organ — it does not delete the table's second cardiac row.",
      },
      {
        a: "The table contradicts itself on vascular tone — 'Vascular smooth muscle → Vasoconstriction' and 'Arterial smooth muscle → Vasodilation' cannot both be adrenergic effects on vessels",
        b: "Reading the two labels as one tissue listed twice with opposite signs, then 'resolving' the contradiction by deleting one row",
        whyConfused:
          "'Vascular' and 'arterial' sound like the same tissue, and both rows are smooth-muscle rows — the α1 row constricts and the β2 row dilates, which looks like a sign conflict if the labels are collapsed",
        keyDifference:
          "The two rows are the table's own TWO ARMS of the tone axis, printed under two different labels: α1 — 'Vascular smooth muscle → Vasoconstriction' and β2 — 'Arterial smooth muscle → Vasodilation'. No contradiction: they are different receptor-tissue pairings with opposite signs — exactly how the same catecholamine can raise or lower regional tone depending on which receptor dominates the bed. The seesaw is the point (KYP frame built from the book's own two rows).",
        clue:
          "Any tone stem: name the arm before the direction. Mnemonic: TWO SMOOTH MUSCLES, TWO SIGNS — α1 VASCULAR CONSTRICTS, β2 ARTERIAL DILATES (the tone seesaw's two rows, verbatim labels).",
      },
      {
        a: "α2 is a vasoconstrictor / α1 inhibits saliva — the two α receptors' rows can be swapped, since both are 'the α receptor' with similar names",
        b: "Swapping the α1 and α2 blocks — assigning the contraction rows to α2 or the inhibition rows to α1",
        whyConfused:
          "The two receptors share the α name, and outside this table (real pharmacology) each receptor does more than this table prints — students blend the blocks into one 'α does everything' concept",
        keyDifference:
          "The printed split is clean: α1's rows are ALL contractions ('Vascular smooth muscle / Vasoconstriction', 'Visceral smooth muscle / Smooth muscle contraction' — the effector receptor); α2's rows are ALL inhibitions ('Pancreas / Inhibition of insulin secretion', 'Presynaptic terminals / Inhibition of neurotransmitter release', 'Salivary glands / Inhibition of salivary secretion' — the signal receptor). α1 acts on smooth-muscle beds; α2 acts on secretory cells and the presynaptic terminal. α2 has NO row on any smooth muscle in this table, and α1 has NO row on any gland or neuron.",
        clue:
          "Sort by verb before sorting by receptor: every 'inhibition' in this table belongs to α2; every 'contraction/constriction' to α1 (or the β dilations). Mnemonic: α2 IS THE BRAKE PEDAL — three rows, three inhibitions, nothing else.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any stem asking 'which receptor / which tissue / which mechanism' — the five receptors and thirteen rows all look alike in the options, especially in mixed autonomic stems where several organs appear at once",
        differentiator:
          "Run the grid before reading the options: α1 = the contraction column (Vascular 'Vasoconstriction' + Visceral 'Smooth muscle contraction'); α2 = the inhibition column (Pancreas insulin + Presynaptic terminals + Salivary glands — the brake pedal); β1 = the cardiorenal column (Heart '↑ heart rate, contractility' + Kidney '↑ renin secretion' — the only kidney row in the table); β2 = the five-tissue column (Bronchioles, Cardiac muscle, Liver, Arterial smooth muscle, Pancreas — the widest column); β3 = the adipose column (↑ lipolysis — the one-row receptor).",
        correctPath:
          "Name the tissue first, then read the row across, then the cell's sign: heart-rate stems carry the doubled-row wrinkle (β1 'Heart' AND β2 'Cardiac muscle' print the same string — a renin clause pins β1, an airway/artery clause pins β2); pancreas stems are always the seesaw (α2 inhibits, β2 stimulates — same organ, two rows); tone stems are always the two-arm axis (α1 Vascular constricts, β2 Arterial dilates — two labels, two receptors); and any 'inhibition of release/secretion' cell is α2's signature — the brake pedal never contracts anything in this table.",
      },
      {
        lookAlike: "A drug-effect stem — albuterol, epinephrine, dobutamine, phenylephrine, clonidine, mirabegron, or a physiologic state (exercise, hemorrhage, anaphylaxis) — asking what the agent does to a given organ, or which organ it acts on",
        differentiator:
          "Map the drug to its receptor column, then read the column's rows (the anchors are KYP — the table prints no drug names): albuterol/epinephrine-β2 → 'Bronchodilation' + 'Vasodilation' + 'Glycogenolysis' + 'Stimulation of insulin secretion' + the cardiac-muscle row; dobutamine-β1 → the Heart and Kidney rows; phenylephrine-α1 → the Vascular and Visceral rows; clonidine-α2 → the three inhibition rows (the presynaptic one is its mechanism); mirabegron-β3 → the Adipose row here — with its bladder job living on the SAME page's upper diagram (the PH14 cross-link).",
        correctPath:
          "(1) NAME THE DRUG'S RECEPTOR (selectivity is the stem's real question). (2) READ THAT COLUMN DOWN — every row the table prints for that receptor is now on the table for side effects and secondary effects (a β2 agonist's slight tachycardia is the Cardiac muscle row; clonidine's dry mouth is the Salivary row). (3) FOR MIXED AGENTS (epinephrine), split by dose and receptor: low dose reads the β columns first, higher doses recruit the α1 column (the anaphylaxis composite — KYP anchors). (4) Never carry a drug onto a tissue the table gives no row for — the empty-cell caveat: the table prints positives only, and the exam asks what the BOOK prints.",
      },
    ],
    miniCase: {
      vignette:
        "A 21-year-old woman with a history of asthma presents to the emergency department with two hours of worsening wheezing and dyspnea after visiting a friend with a cat; she is speaking in short phrases, with diffuse expiratory wheeze, a respiratory rate of 28, and a heart rate of 104. She receives nebulized albuterol; twenty minutes later her wheeze is markedly improved, her peak flow has doubled, and her heart rate is 118. The medical student at the bedside asks which receptor the drug acted at, why her heart rate rose, and where else in the body the same receptor is acting at that moment.",
      question:
        "Which adrenergic receptor mediates the bronchodilation, which printed tissue row explains the rise in heart rate, and what are the OTHER tissue rows of the same receptor's column in the standard distribution table?",
      options: [
        {
          label:
            "β2 — the bronchioles row: 'Bronchodilation'. The heart-rate rise is the same receptor's sister row 'Cardiac muscle / ↑ heart rate, contractility'. The column's other rows: 'Liver / Glycogenolysis, glucose release', 'Arterial smooth muscle / Vasodilation', and 'Pancreas / Stimulation of insulin secretion' — the five-tissue set.",
          text: "β2 — bronchioles; the heart rate is its own cardiac-muscle row.",
          correct: true,
          why:
            "Correct on every count, and every element is the source page's own. THE TARGET ROW: 'Bronchioles / Bronchodilation' is the β2 block's first row — the albuterol story (the drug name is the anchor layer, KYP; the row is printed). THE HEART RATE: the same receptor's 'Cardiac muscle / ↑ heart rate, contractility' row — the DOUBLED string that also prints under β1 'Heart'; the table's own two cardiac rows mean a β2 agonist can raise heart rate through the β2 column itself. THE COLUMN (KYP reading order — read the column down): bronchioles dilate, cardiac muscle accelerates, the liver pours glucose, the arteries dilate, and the pancreas pours insulin — β2 is the table's widest receptor, five of the thirteen rows.",
        },
        {
          label:
            "β1 — the heart row: '↑ heart rate, contractility'. Rationale: the heart rate rose, and β1 is the cardiac receptor — so the drug acted at β1 on the airway too.",
          text: "β1 — the heart's own receptor; it must have dilated the bronchi.",
          why:
            "Right observation, wrong column — the doubled-row trap. β1's rows are 'Heart / ↑ heart rate, contractility' and 'Kidney / ↑ renin secretion' — the cardiorenal pair; the table gives β1 NO row on the airway. The heart-rate rise in a β2-agonist patient is the β2 column's OWN cardiac row ('Cardiac muscle / ↑ heart rate, contractility' — the identical string printed twice in the table); it does not convert the drug into a β1 agonist. The discriminator for true β1 stems is the kidney: β1 is the only receptor in the table with a renin row.",
        },
        {
          label:
            "α1 — the smooth-muscle row: 'Vasoconstriction'. Rationale: bronchioles are smooth muscle, and α1 is the smooth-muscle receptor — so stimulating it should relax the airway.",
          text: "α1 — the smooth-muscle receptor, applied to the airway.",
          why:
            "Sign flip — the α1 column's rows all CONTRACT: 'Vascular smooth muscle / Vasoconstriction' and 'Visceral smooth muscle / Smooth muscle contraction'. There is no printed α1 row on the bronchioles, and even the generalization gets the direction backwards: α1 stimulation tightens smooth muscle, it does not relax it (the tone seesaw's constrictor arm). The airway's printed row belongs to the β2 column — 'Bronchodilation' — the opposite sign on the same tissue class.",
        },
        {
          label:
            "α2 — the presynaptic row: 'Inhibition of neurotransmitter release'. Rationale: the drug calmed bronchial tone by inhibiting sympathetic neurotransmitter release at the airway's terminals.",
          text: "α2 — brake the terminals, calm the airway.",
          why:
            "Right verb, wrong system — the α2 column's rows are the three inhibitions (pancreas insulin, presynaptic release, salivary secretion), and NONE of them is an airway row. The α2 story is real pharmacology (the clonidine mechanism, KYP anchor) but it is a CENTRAL/presynaptic outflow story, not an airway smooth-muscle story — and no albuterol-type drug works by braking transmitter release. The airway's dilator row is β2's; α2's column contains no smooth-muscle row at all.",
        },
        {
          label:
            "β3 — the adipose row: '↑ lipolysis'. Rationale: the drug is a sympathomimetic, and β3 is a sympathetic receptor — the energy-mobilization receptor should open the airways as part of the fight-or-flight package.",
          text: "β3 — the fight-or-flight receptor, lipolysis plus bronchodilation.",
          why:
            "Column confusion — the β3 block of THIS table has exactly one row: 'Adipose / ↑ lipolysis'. The β3 receptor's wider story (the detrusor plate) lives in the diagram on the SAME page's upper portion — the completed PH14's territory, the mirabegron story — and neither of those is an airway row either. No printed row pairs β3 with the bronchioles; the airway's dilator column is β2. When an option offers the right family (a β receptor) with the wrong member, the tissue row is the discriminator: only β2's column contains 'Bronchioles'.",
        },
      ],
      reasoning:
        "The vignette is the β2 column played as an ED visit. (1) THE TISSUE — the stem's organ is the airway: the table's bronchiolar row is 'Bronchodilation', and it sits in the β2 block (the row is printed; the albuterol name is the anchor layer, KYP). (2) THE RECEPTOR — the drug's selectivity is the real question: β2 is the table's five-tissue receptor, and the airway is its first row. (3) THE HEART-RATE WRINKLE — the doubled row: '↑ heart rate, contractility' prints under BOTH β1 'Heart' and β2 'Cardiac muscle'; the patient's 104 → 118 is the β2 column's own cardiac row, which is why the β1 option is tempting but wrong (β1's discriminator is the kidney — the only renin row in the table). (4) THE COLUMN — read it down for the secondary effects: cardiac muscle (the tachycardia), liver (glucose), arterial smooth muscle (vasodilation), pancreas (insulin) — each distractor transposes one printed element: β1 (right observation, wrong column), α1 (right tissue class, wrong sign), α2 (right verb, wrong system), β3 (right family, wrong member).",
    },
  },
  mnemonics: [
    {
      code: "1 HEART, 2 LUNGS, 3 FAT — β1 → Heart, β2 → Bronchioles, β3 → Adipose",
      meaning:
        "The CLASSIC counting code for the β subscripts (carried as the classic code, attributed): β1 has ONE heart ('Heart / ↑ heart rate, contractility' — plus the kidney's renin row), β2 has TWO lungs ('Bronchioles / Bronchodilation' — plus four more rows: cardiac muscle, liver, arterial smooth muscle, pancreas), β3 lives in the FAT ('Adipose / ↑ lipolysis'). The book itself prints '(one heart)' and '(two lungs)' in the β1/β2 rows of the G-protein table on the FACING page (book 237 — the separate pending G-protein–linked second messengers topic); the tissue rows it compresses are THIS page's own. The caveat the code carries (KYP): it names each receptor's DOMINANT organ — it does not delete the table's other rows (β2 keeps its cardiac-muscle row; β3 keeps only adipose HERE, its bladder plate living on the same page's upper diagram).",
      memorizes: "Which β receptor number goes with which organ — the three β subscripts in one breath",
      whenToUse:
        "Any stem asking which β receptor mediates a given organ effect, or offering β1/β2/β3 options — recite the code before touching the options, then check the table's own rows for the wrinkle (the doubled heart-rate string)",
      clinical:
        "The code's drug layer (KYP anchors, none printed on the page): albuterol/epinephrine read the 2 (bronchodilation), dobutamine reads the 1 (inotropy + renin), mirabegron reads the 3 — and mirabegron's bladder target is the same-page cross-link: the β₃ detrusor plate lives in the diagram ABOVE this table (the completed PH14's territory), while THIS table gives β3 only the adipose row.",
    },
    {
      code: "α2 IS THE BRAKE PEDAL — three rows, three inhibitions: insulin, neurotransmitter release, saliva",
      meaning:
        "The α2 code (KYP compression of the table's own three α2 rows): every α2 row in this table is an INHIBITION — 'Pancreas / Inhibition of insulin secretion', 'Presynaptic terminals / Inhibition of neurotransmitter release', 'Salivary glands / Inhibition of salivary secretion'. α2 never contracts anything in this table (the contraction receptor is α1); it brakes three different secretory/release processes from three different beds — the islet, the sympathetic terminal, and the exocrine gland.",
      memorizes: "What α2 does and where — the three inhibition rows and their tissues",
      whenToUse:
        "Any α2 stem (clonidine, dry mouth, presynaptic feedback, the pancreas seesaw) and any stem whose options turn on the α1-vs-α2 split — the verb names the receptor: every 'inhibition' in this table is α2's, every 'contraction' is α1's",
      clinical:
        "The brake-pedal rows are three different drug stories (KYP anchors): the presynaptic row is clonidine's mechanism (↓ sympathetic outflow), the salivary row is its dry mouth, and the pancreatic row is the α2 arm of the insulin seesaw — the stress-state physiology the endocrinology stems test (sympathetic activation holds insulin back while pouring glucose).",
    },
    {
      code: "THE PANCREAS SEESAW — α2 HOLDS the insulin, β2 POURS it out",
      meaning:
        "The seesaw code (KYP compression of the table's two pancreas rows — the only organ with two rows under two different receptors): 'α2 … Pancreas → Inhibition of insulin secretion' vs 'β2 … Pancreas → Stimulation of insulin secretion'. Same organ, opposite signs, two receptors in different halves of the table — one row in the α2 block, one in the β2 block. The islet listens to both, and the direction is decided by which receptor the catecholamine finds.",
      memorizes: "The two pancreas rows and their opposite directions — the table's only two-row organ",
      whenToUse:
        "Any stem touching insulin, stress hyperglycemia, catecholamines and the islet, or an option pair contrasting α2 vs β2 on the pancreas — recite the seesaw before reading the options",
      clinical:
        "The seesaw explains the classic stress physiology (KYP anchors): sympathetic activation holds insulin back (α2) while the β2 liver row pours glucose ('Glycogenolysis, glucose release') — the fight-or-flight fuel state: glucose out, insulin held. Epinephrine's islet story is exactly this seesaw; the beta-blocker stems flip it (β2 blocked → less insulin pouring; α2 unopposed — the hypoglycemia-with-β-blockers wrinkle the exam likes).",
    },
    {
      code: "TWO SMOOTH MUSCLES, TWO SIGNS — α1 VASCULAR CONSTRICTS, β2 ARTERIAL DILATES",
      meaning:
        "The tone code (KYP compression of the table's two vascular rows — printed under two DIFFERENT labels): 'α1 … Vascular smooth muscle → Vasoconstriction' vs 'β2 … Arterial smooth muscle → Vasodilation'. Two arms, two labels, two receptors, opposite signs — the tone axis of the whole autonomic pharmacology shelf. The third muscle pair of the table (α1 'Visceral smooth muscle / Smooth muscle contraction') carries the same constrictor sign on the visceral beds.",
      memorizes: "Which adrenergic receptor constricts and which dilates — and which printed label each arm carries",
      whenToUse:
        "Any tone stem (vasoconstriction, vasodilation, regional flow, epinephrine's dose-dependent effects) and any stem contrasting dilation vs constriction in the options — name the arm before the direction",
      clinical:
        "The two arms are the dose-story of every mixed agonist (KYP anchors): low-dose epinephrine reads the β2 arm first (vasodilation — the diastolic pressure fall), higher doses recruit the α1 arm (vasoconstriction — the pressure rise), and phenylephrine is the pure α1 arm. The same two rows explain the anaphylaxis composite — the exam's favorite epinephrine question is this axis plus the β2 bronchiolar row.",
    },
  ],
  rapidReview: {
    s30: [
      "'Tissue distribution of adrenergic receptors' — the section header; the section's entire printed content is one 13-row table.",
      "α1 — 'Vascular smooth muscle → Vasoconstriction' + 'Visceral smooth muscle → Smooth muscle contraction' — the contraction receptor's two beds.",
      "α2 — 'Pancreas → Inhibition of insulin secretion' — the α2 arm of the pancreas seesaw.",
      "α2 — 'Presynaptic terminals → Inhibition of neurotransmitter release' — the autoreceptor row, the only neuronal row in the table.",
      "α2 — 'Salivary glands → Inhibition of salivary secretion' — the dry-mouth row.",
      "β1 — 'Heart → ↑ heart rate, contractility' + 'Kidney → ↑ renin secretion' — the cardiorenal pair (the only kidney row in the table).",
      "β2 — 'Bronchioles → Bronchodilation' — the airway row (the albuterol story, KYP anchor).",
      "β2 — 'Cardiac muscle → ↑ heart rate, contractility' — the DOUBLED row: the same string prints under β1 'Heart'.",
      "β2 — 'Liver → Glycogenolysis, glucose release' + 'Arterial smooth muscle → Vasodilation' + 'Pancreas → Stimulation of insulin secretion'.",
      "β3 — 'Adipose → ↑ lipolysis' — the one-row receptor; its bladder plate lives on the same page's upper diagram (the PH14 cross-link).",
    ],
    m3: [
      "1 HEART, 2 LUNGS, 3 FAT — β1 → Heart, β2 → Bronchioles, β3 → Adipose (the classic counting code; the facing page prints '(one heart)'/'(two lungs)').",
      "α2 IS THE BRAKE PEDAL — three rows, three inhibitions: insulin, neurotransmitter release, saliva.",
      "THE PANCREAS SEESAW — α2 HOLDS the insulin, β2 POURS it out (the table's only two-row organ).",
      "TWO SMOOTH MUSCLES, TWO SIGNS — α1 VASCULAR CONSTRICTS, β2 ARTERIAL DILATES (the tone axis's two labels).",
    ],
    m10: [
      "The whole page in one breath: one table, five receptors, thirteen rows — α1 (2 rows: vascular, visceral), α2 (3 rows: pancreas, presynaptic terminals, salivary glands), β1 (2 rows: heart, kidney), β2 (5 rows: bronchioles, cardiac muscle, liver, arterial smooth muscle, pancreas), β3 (1 row: adipose) — under the three column heads RECEPTOR / TISSUE / EFFECT(S).",
      "The α half: α1 is the table's CONTRACTION receptor (both rows positive: constrict, contract — the effector half of the α pair); α2 is the table's BRAKE PEDAL (all three rows inhibitions — the signal half). α1 has NO gland or neuron row; α2 has NO smooth-muscle row.",
      "The β half: β1 is the CARDIORENAL receptor (heart + kidney — the only renin row in the table); β2 is the five-tissue RELAX-AND-FUEL set (the widest column: airways, the second cardiac row, the liver, the arteries, the islet); β3 is the one-tissue METABOLIC receptor (adipose).",
      "The seesaws the list hides: PANCREAS twice (α2 inhibits insulin, β2 stimulates it — the only two-row organ); the TONE axis split across two labels (α1 'Vascular smooth muscle' constricts vs β2 'Arterial smooth muscle' dilates); and the DOUBLED heart-rate string (β1 'Heart' and β2 'Cardiac muscle' print the identical effect).",
      "The empty-cell caveat (KYP, the discipline of the grid): the table prints POSITIVES ONLY — a blank cell means 'no printed row pairs this receptor with this tissue', NOT 'the receptor is absent from the tissue'. The exam asks what the BOOK prints; never read absence into silence.",
      "The drug/anchor layer (KYP — none of it printed on this page): albuterol → the β2 column (bronchioles first); epinephrine → the composite (low dose reads β2, higher doses recruit α1 — the anaphylaxis answer is α1 + β2 together); dobutamine → the β1 column (inotropy + renin); phenylephrine → the α1 column; clonidine → the α2 presynaptic row (↓ outflow, dry mouth); mirabegron → β3, whose ADIPOSE row is here while its BLADDER plate lives on the same page's upper diagram (the PH14 cross-link).",
      "The stress-state physiology in one line: sympathetic activation holds insulin back (α2 islet row) while pouring glucose (β2 liver row) and mobilizing fat (β3 adipose row) — the fight-or-flight fuel package, with the airways opened (β2) and the vessels split by bed (α1 constricts, β2 dilates).",
      "The renal wrinkle: β1 is the ONLY receptor in the table with a kidney row ('↑ renin secretion' — the JG apparatus, KYP anchor); any stem pairing tachycardia with renin is β1's signature — and the renin clause is the discriminator against the doubled heart-rate string (β2's cardiac-muscle row raises rate but never releases renin).",
      "The provenance discipline: the table's 13 rows, the three column heads, and the receptor groupings are the page's own printed set; the GRID VIEW (tissues × receptors), the empty-cell caveat, the seesaw/brake frames, the doubled-row note, and every drug name (albuterol, epinephrine, dobutamine, phenylephrine, clonidine, mirabegron) are KYP layers, flagged wherever they appear; '1 heart, 2 lungs' is the classic counting code, printed on the FACING page's G-protein table (book 237 — a separate pending topic), attributed.",
      "The exam's reading order: (1) name the TISSUE (the stem's organ names the row); (2) read the RECEPTOR column; (3) read the EFFECT cell (the sign: contract/constrict = α1, inhibit = α2, ↑/dilate/stimulate = β); (4) for drug stems, map the drug to its column and read the column DOWN for side effects (a β2 agonist's tachycardia is its own cardiac-muscle row; clonidine's dry mouth is the salivary row).",
    ],
  },
  recall: [
    {
      q: "Recite the table's 13 rows verbatim — receptor, tissue, effect — grouped by receptor block (the section's entire printed content in one answer).",
      a:
        "α1: 'Vascular smooth muscle / Vasoconstriction'; 'Visceral smooth muscle / Smooth muscle contraction'. α2: 'Pancreas / Inhibition of insulin secretion'; 'Presynaptic terminals / Inhibition of neurotransmitter release'; 'Salivary glands / Inhibition of salivary secretion'. β1: 'Heart / ↑ heart rate, contractility'; 'Kidney / ↑ renin secretion'. β2: 'Bronchioles / Bronchodilation'; 'Cardiac muscle / ↑ heart rate, contractility'; 'Liver / Glycogenolysis, glucose release'; 'Arterial smooth muscle / Vasodilation'; 'Pancreas / Stimulation of insulin secretion'. β3: 'Adipose / ↑ lipolysis'. Under the column heads RECEPTOR / TISSUE / EFFECT(S) — the section's sole printed element (no diagram, no margin note, no printed mnemonic).",
    },
    {
      q: "Which organ appears TWICE in the table under two different receptors, with which two effects — and why is the pancreas the only two-row organ?",
      a:
        "The PANCREAS: the α2 block prints 'Pancreas / Inhibition of insulin secretion' and the β2 block prints 'Pancreas / Stimulation of insulin secretion' — same organ, opposite signs, two receptors in different halves of the table. It is the only two-row organ because it is the one endocrine tissue the table assigns to both an α and a β receptor: the islet listens to the brake (α2 holds insulin back) and the accelerator (β2 pours it out) — the seesaw the endocrinology stems test (KYP frame; both rows are the book's own).",
    },
    {
      q: "Which effect string prints TWICE in the table, under which two different tissue labels and which two receptors — and what does each occurrence mean for a drug stem?",
      a:
        "'↑ heart rate, contractility' prints twice: under β1 'Heart' and under β2 'Cardiac muscle' (the doubled row — the table's own two cardiac entries, in two different receptor blocks). For a drug stem: β1 agonists (dobutamine — KYP anchor) raise rate through the Heart row; β2 agonists (albuterol, epinephrine at low dose — KYP anchors) can raise it through the Cardiac muscle row — which is why a β2 agonist's slight tachycardia does NOT make it a β1 drug. The discriminator for β1 is the kidney: the renin row is β1's alone — no other receptor in the table has any row on the kidney.",
    },
    {
      q: "Name the two printed smooth-muscle rows that form the vascular TONE axis — which receptor and which label carries each arm, and what is the sign of each?",
      a:
        "The constrictor arm: α1 — 'Vascular smooth muscle / Vasoconstriction'. The dilator arm: β2 — 'Arterial smooth muscle / Vasodilation'. Two different printed labels, two different receptors, opposite signs — the tone axis (KYP frame built from the book's own two rows). The third muscle pair, α1 'Visceral smooth muscle / Smooth muscle contraction', carries the constrictor sign on the visceral beds. This axis is the dose story of every mixed agonist (KYP anchors: low-dose epinephrine reads β2 first; phenylephrine is the pure α1 arm) and the anaphylaxis composite (α1 + β2 together).",
    },
    {
      q: "What does α2 do in this table — list its three rows — and how does the presynaptic row explain a centrally-acting antihypertensive with a dry mouth?",
      a:
        "α2's three rows, verbatim: 'Pancreas / Inhibition of insulin secretion'; 'Presynaptic terminals / Inhibition of neurotransmitter release'; 'Salivary glands / Inhibition of salivary secretion' — three rows, three inhibitions (the brake pedal; KYP compression). The presynaptic row is the AUTOCEPTOR story: α2 stimulation on the sympathetic terminal inhibits norepinephrine release itself — the negative-feedback loop (a KYP reading of the printed row; the page prints no drug names). A centrally-acting α2 agonist (clonidine — KYP anchor) rides that row to brake sympathetic outflow (blood pressure falls, heart rate slows), and the salivary row is its dry mouth; the table's rows supply the mechanism, the drug story is the anchor layer.",
    },
  ],
  related: [
    {
      title: "Micturition Control — the Same Page's Upper Half (the β3 cross-link)",
      topicId: "micturition-control",
      note:
        "The page immediately above this one in every sense (PH14, the UPPER portion of the SAME book-236 page): the bladder wiring diagram with its three nerves and four receptor plates. The cross-link is the SAME PAGE's double life with β3: the upper diagram prints the 'β₃-receptor' plate on the detrusor (mirabegron's target — '⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity'), while THIS table's lower half gives β3 only the 'Adipose / ↑ lipolysis' row. Two pages of one sheet: the wiring above, the address book below — the micturition page supplies the organ-level wiring, this page the system-wide distribution.",
    },
    {
      title: "Autonomic Receptors — the Wiring Diagram This Table Plugs Into",
      topicId: "autonomic-receptors",
      note:
        "The page four before this one (PH11, book 234): the autonomic/somatic overview schematic — the divisions, the ganglia, and the receptor plates at each organ. This table is that diagram's adrenergic half exploded: the overview draws WHERE the sympathetic wires go; this table prints WHAT each adrenergic receptor does once it arrives — the effector half (α1 on the smooth-muscle beds) and the signal half (α2 on the presynaptic terminals — the autoreceptor loop the overview draws as the presynaptic bulb).",
    },
    {
      title: "Acetylcholine Receptors — the Cholinergic Counterpart of This Map",
      topicId: "acetylcholine-receptors",
      note:
        "The page three before this one (PH12, the upper half of book 235): the ACh receptor families — nicotinic ligand-gated channels and muscarinic GPCRs. The two maps are the two halves of autonomic pharmacology: this table is the ADRENERGIC address book (α1/α2/β1/β2/β3 on their tissues), that page the CHOLINERGIC one (nicotinic and muscarinic on theirs). Read together they answer the exam's two-column questions — which transmitter, which receptor family, which tissue — and its favorite composite: the sympathetic terminal's own junction (α2 presynaptic here, the cholinergic ganglion there).",
    },
    {
      title: "Sympathomimetics — the Agonist Grid That Rides This Table",
      topicId: "sympathomimetics",
      note:
        "The completed grid topic that scores every adrenergic agonist by receptor activity. This table is the grid's reference axis: each agonist's column in that grid selects rows from THIS table — albuterol reads the β2 column (bronchioles first), dobutamine the β1 column (heart + kidney), phenylephrine the α1 column (the vascular row), clonidine the α2 column (the presynaptic row), mirabegron the β3 column (whose adipose row is here and whose bladder plate is the same page's upper diagram). The grid supplies the selectivity story; this table supplies the distribution the selectivity is measured against.",
    },
  ],
  crossLinks: [
    {
      subject: "Pulmonology (asthma and COPD — the β2 column as the airway shelf)",
      connection:
        "The β2 block's first row — 'Bronchioles / Bronchodilation' — is the mechanism line of the entire obstructive-lung-disease pharmacology: SABA/SABA-nebulized albuterol in acute exacerbations (this table's row plus the micturition-style wiring of the bronchial smooth muscle), LABA maintenance added to ICS, and the tachycardia/tremor side effects read off the same column's other rows (the Cardiac muscle row for rate; the tremor is skeletal-muscle β2 — outside this table's rows, KYP anchor). The COPD stems add the anticholinergic tier (ipratropium — the cholinergic counterpart map, the acetylcholine-receptors topic) — the two half-maps of autonomic pharmacology in one airway.",
    },
    {
      subject: "Cardiology (the β1 column — inotropy, renin, and the beta-blocker shelf)",
      connection:
        "The β1 block's two rows — 'Heart / ↑ heart rate, contractility' and 'Kidney / ↑ renin secretion' — are the cardiology shelf's mechanism lines: dobutamine's inotropy in decompensated heart failure (KYP anchors: the β1-selective story), the JG apparatus's renin (the RAAS trigger the cardiorenal chapters test), and read in reverse, the beta-blocker shelf — β1 blockade slows the heart, lowers renin, and blunts exercise responses (the doubled heart-rate row warns that nonselective agents also carry the β2 column's rows: bronchospasm risk in asthmatics — the pulmonology cross-link). The heart-failure stems add the compensatory-activation story: the SNS drives the failing heart through these very rows.",
    },
    {
      subject: "Endocrinology (the pancreas seesaw and the stress-fuel package)",
      connection:
        "The table's two pancreas rows are the islet's adrenergic wiring: 'α2 / Inhibition of insulin secretion' vs 'β2 / Stimulation of insulin secretion' — the seesaw that sets circulating insulin under stress, exercise, and hypoglycemia (the counterregulatory story: epinephrine holds insulin back while pouring glucose through the β2 liver row 'Glycogenolysis, glucose release' and mobilizing fat through the β3 adipose row '↑ lipolysis' — the fight-or-flight fuel package). The β-blocker stems flip it (nonselective blockade removes the β2 pour; the hypoglycemia-unawareness wrinkle in diabetics on beta-blockers is the same column read in reverse — KYP anchors). The diabetes questions add the insulin-secretagogue class — the non-adrenergic half of the islet's wiring.",
    },
    {
      subject: "Emergency Medicine / Anaphylaxis (the composite read — α1 + β2 together)",
      connection:
        "Anaphylaxis treatment is this table's two halves recruited at once: epinephrine stimulates the α1 column ('Vascular smooth muscle / Vasoconstriction' — the pressure arm) AND the β2 column ('Bronchodilation' — the airway arm; 'Vasodilation' — the skeletal-muscle beds outside the shock beds) — which is why the same drug is both the pressor and the bronchodilator, and why the dose story splits by arm (low dose reads β2 first — the diastolic fall; higher doses recruit α1 — the pressure rise; KYP anchors: the TWO SMOOTH MUSCLES, TWO SIGNS axis). The emergency stems also ride the α2 block's rows in the other direction — the sedation/analgesia adjuncts that lean on presynaptic α2 (the clonidine family, KYP anchors) — the table's signal half.",
    },
  ],
};
