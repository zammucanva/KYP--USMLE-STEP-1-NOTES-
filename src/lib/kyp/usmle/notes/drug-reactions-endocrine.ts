import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 23. Source: FULL pdf page 270 / book 248
// (Pharmacology — Toxicities and Adverse Effects: Drug reactions—
// endocrine/reproductive). The page actually holds TWO complete
// stacked tables: after the endocrine/reproductive table (9 rows,
// complete on this page) the page continues with "Drug reactions—
// gastrointestinal" (8 rows, also complete on this page). The batch
// brief described the page as one table; per whole-page ownership and
// the chapter plan (book 248 is assigned solely to this note; no GI
// drug-reactions topic exists), BOTH tables are carried VERBATIM below
// — the endocrine table as the note's core (mechanisms, patterns,
// traps, pivots, mnemonics, miniCase all built on the endocrine axis
// per the production rationale), the GI table as a verbatim second
// table block + the GI strip in the registry visual. Census
// (pdfimages): ZERO raster images. The VLM census (glm-4.6v at 120dpi,
// staging-ph23/vlm-census.txt — VLM available this session; one pass +
// deterministic pdftotext -bbox adjudication) confirms the printed
// order: Adrenocortical insufficiency → Diabetes insipidus →
// Gynecomastia → Hot flashes → Hyperglycemia → Hyperprolactinemia →
// Hyperthyroidism → Hypothyroidism → SIADH — carried verbatim. NO
// margin mnemonics (VLM-confirmed); First Aid's own RED in-cell
// mnemonic text is carried ATTRIBUTED and NOT counted among the four
// KYP originals: endocrine — "The people need High glucose"
// (hyperglycemia), "I am lethargic" (hypothyroidism), "Can’t
// Concentrate Serum Sodium" (SIADH); GI — "I referred patient serum
// (AST, ALT) for hepatitis" (hepatitis row, bbox-adjudicated: the
// cholestatic row's notes cell is empty), "Drugs generate a violent
// abdominal distress" (pancreatitis), "Pills Not beneficial for food
// tube" (esophagitis — printed INSIDE the CAUSAL AGENTS column below
// the drug list, per bbox x=181.5; quirk carried + documented).
// TEXT-LAYER INTERLEAVING (the DRUG REACTION tables' known quirk,
// adjudicated in the staging census): table 1 reads cleanly
// row-by-row; table 2 displaces its "NOTES" column header and the
// hepatitis mnemonic to AFTER the footer in the cache layer (both
// belong at the table top / the hepatitis row by bbox), interleaves
// the pancreatitis mnemonic between the two causal-agent lines (same
// y-band, NOTES column x=388.5), and prints the esophagitis mnemonic
// inside the causal-agents column. The VLM's "tcnolazine" misread is
// corrected to "ranolazine" by the text layer + bbox. PRINTED QUIRKS
// carried verbatim + documented: "Cyclophosphamide" capitalizes
// mid-list (the SIADH mnemonic's second C), "The people need High
// glucose" capitalizes "The"/"High", "Can’t" prints with the curly
// apostrophe (U+2019), "5HT3 receptor antagonist (ondansetron)",
// "SEC TION II" (the header's known extraction artifact). The KYP
// diagram (drug-reaction-endocrine-map), the four-axis routing
// protocol, the exam layer, the drug cards, and the memory layer are
// original.

export const drugReactionsEndocrine: KypUsMLENote = {
  id: "drug-reactions-endocrine",
  title: "Drug Reactions: Endocrine & Reproductive",
  subtitle:
    "One page of First Aid, nine endocrine/reproductive reactions, four hormone axes — every row on this page is a drug leaning on a hormone axis the body regulates by feedback, and the exam question is always which axis bent and in which direction. Chronic exogenous glucocorticoids put the HPA axis to sleep (abrupt withdrawal → adrenal crisis); the gynecomastia list is six ways to remove the androgen signal while estrogen keeps acting; SERMs pull the estrogen signal and unmask hot flashes; D2-blockers release prolactin onto the gonads (hypogonadism + galactorrhea); amiodarone and lithium push the thyroid in BOTH directions; lithium and demeclocycline block ADH (diabetes insipidus) while carbamazepine, cyclophosphamide, and SSRIs boost it (SIADH, Can’t Concentrate Serum Sodium); and the hyperglycemia list is five drugs that tilt the glucose axis. Route the reaction to its axis, and the drug list reads itself.",
  subject: "Pharmacology",
  system: "Section II · High-Yield General Principles — Pharmacology: Toxicities and Adverse Effects",
  pilotCategory: "Pharmacology adverse-effect recall",
  difficulty: 1,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 248–248 (Pharmacology — Toxicities and Adverse Effects: Drug reactions—endocrine/reproductive; the page additionally carries the complete Drug reactions—gastrointestinal table, owned by this note per the whole-page assignment; …)",
  tags: [
    "drug reactions",
    "adverse effects",
    "endocrine",
    "reproductive",
    "adrenocortical insufficiency",
    "HPA suppression",
    "adrenal crisis",
    "glucocorticoid withdrawal",
    "diabetes insipidus",
    "gynecomastia",
    "hot flashes",
    "SERMs",
    "hyperglycemia",
    "hyperprolactinemia",
    "galactorrhea",
    "hyperthyroidism",
    "hypothyroidism",
    "amiodarone",
    "lithium",
    "SIADH",
    "hyponatremia",
    "spironolactone",
    "cimetidine",
    "ketoconazole",
  ],
  core: {
    what:
      "The printed endocrine/reproductive table runs nine rows, verbatim: ADRENOCORTICAL INSUFFICIENCY — HPA suppression secondary to chronic exogenous glucocorticoid use; abrupt withdrawal of exogenous glucocorticoids leads to adrenal crisis. DIABETES INSIPIDUS — Lithium, demeclocycline. GYNECOMASTIA — Ketoconazole, cimetidine, spironolactone, GnRH analogs/antagonists, androgen receptor inhibitors, 5α-reductase inhibitors. HOT FLASHES — SERMs (eg, tamoxifen, clomiphene, raloxifene). HYPERGLYCEMIA — Tacrolimus, protease inhibitors, niacin, HCTZ, glucocorticoids (First Aid's own red mnemonic: “The people need High glucose”). HYPERPROLACTINEMIA — Typical antipsychotics (eg, haloperidol), atypical antipsychotics (eg, risperidone), metoclopramide, methyldopa, verapamil; presents with hypogonadism (eg, infertility, amenorrhea, erectile dysfunction) and galactorrhea. HYPERTHYROIDISM — Amiodarone, iodine, lithium. HYPOTHYROIDISM — Amiodarone, lithium (“I am lethargic”). SIADH — Carbamazepine, Cyclophosphamide, SSRIs (“Can’t Concentrate Serum Sodium”). The same page then carries the complete Drug reactions—gastrointestinal table (8 rows, verbatim below): acute cholestatic hepatitis/jaundice (macrolides), constipation, diarrhea, focal to massive hepatic necrosis, hepatitis (isoniazid, rifampin, pyrazinamide, statins, fibrates — “I referred patient serum (AST, ALT) for hepatitis”), pancreatitis (“Drugs generate a violent abdominal distress”), medication-induced esophagitis (“Pills Not beneficial for food tube”), and pseudomembranous colitis (antibiotics predispose to superinfection by resistant C difficile).",
    why:
      "This is the endocrine ADR axis page — the four hormone systems the exam loves to bend with drugs, because each has a one-line physiology that predicts the whole row. The HPA axis works by negative feedback: chronically replacing its output (exogenous glucocorticoid) suppresses CRH/ACTH, the zona fasciculata goes quiet, and abrupt withdrawal unmasks an adrenal that cannot answer — adrenal crisis, the one row on the page that is about WITHDRAWAL rather than the drug itself. The sex-steroid axis is a balance beam: gynecomastia is the androgen side of the beam being cut (six printed mechanisms, from synthesis to receptor to DHT), while hot flashes are the estrogen side being pulled (SERMs strip estrogenic feedback in the hypothalamus → vasomotor instability, the menopause signature) and hyperprolactinemia is dopamine's brake on prolactin being lifted (D2 blockade → prolactin rises → gonadal suppression + galactorrhea). The thyroid row pair exists because amiodarone is a huge iodine load (it can push either Wolff-Chaikoff hypo- or Jod-Basedow-type hyperthyroidism) and lithium blocks hormone release — the same two drugs printed in BOTH thyroid rows, a built-in exam trap. The water axis is ADH with a direction arrow: lithium and demeclocycline antagonize ADH at the collecting duct (dilute polyuria — diabetes insipidus), while carbamazepine, cyclophosphamide, and SSRIs enhance ADH release (water retention, concentrated urine, hyponatremia — SIADH). And the glucose list (tacrolimus, protease inhibitors, niacin, HCTZ, glucocorticoids) is the diabetogenic drug family that pairs with the diabetes mellitus content. That is why exam writers love these pairings: every row is a physiology one-liner wearing a drug list.",
    keyIdea:
      "Route every endocrine drug reaction through the hormone axis it disrupts, then read the direction. MOVE 1 — NAME THE AXIS: HPA (adrenocortical insufficiency, and glucocorticoids' second appearance under hyperglycemia), SEX-STEROID (gynecomastia = androgen removed; hot flashes = estrogen effect removed; hyperprolactinemia = the dopamine brake on prolactin), THYROID (hyper- vs hypothyroidism — amiodarone and lithium print in both rows), WATER/GLUCOSE (diabetes insipidus = ADH blocked; SIADH = ADH enhanced; hyperglycemia = the diabetogenic list). MOVE 2 — NAME THE DIRECTION the drug bends the axis: suppressed vs stimulated, blocked vs boosted — the gynecomastia drugs all point the SAME way (androgen down, estrogen unopposed) while the SERMs point the OTHER way (estrogenic effect down → hot flashes); lithium points ADH down while carbamazepine/SSRIs point it up. MOVE 3 — READ THE PRESENTATION the row predicts: crisis on withdrawal, breast tissue + low libido, vasomotor flushes, amenorrhea with galactorrhea, lethargy vs heat intolerance, dilute polyuria vs concentrated hyponatremia. MOVE 4 — MATCH THE CAUSAL-AGENT LIST, using First Aid's own red in-cell keys (The people need High glucose · I am lethargic · Can’t Concentrate Serum Sodium) as the list-keys. The axis + direction — never the drug name alone — is the answer key, because the same drug (lithium, amiodarone, glucocorticoids) prints in more than one row.",
  },
  mechanisms: [
    {
      id: "hpa-suppression-withdrawal-map",
      title: "The sleeping adrenal: chronic exogenous glucocorticoid suppresses the HPA axis, and abrupt withdrawal wakes it into crisis",
      context: "The adrenocortical insufficiency row (book 248) — the page's only withdrawal-driven reaction",
      flow: {
        nodes: [
          {
            id: "steroid",
            label: "CHRONIC EXOGENOUS GLUCOCORTICOID",
            sublabel:
              "Input — prednisone, hydrocortisone, dexamethasone taken long enough at suppressive doses; the printed causal agent is “HPA suppression secondary to chronic exogenous glucocorticoid use.”",
            variant: "input",
          },
          {
            id: "feedback",
            label: "NEGATIVE FEEDBACK ON THE HPA AXIS",
            sublabel:
              "Process — the exogenous hormone tells the hypothalamus and pituitary the axis is “full”: ↓ CRH → ↓ ACTH. The body reads the drug as its own cortisol.",
            variant: "process",
          },
          {
            id: "atrophy",
            label: "THE ADRENAL CORTEX GOES QUIET",
            sublabel:
              "Target — ACTH-deprived zona fasciculata/reticularis atrophy and stop maintaining cortisol synthetic capacity; the gland is sleeping, not destroyed (the zona glomerulosa, driven mostly by renin–angiotensin, is relatively spared).",
            variant: "target",
          },
          {
            id: "withdrawal",
            label: "ABRUPT WITHDRAWAL",
            sublabel:
              "Input — the drug stops today, but the suppressed axis cannot: CRH/ACTH remain suppressed and the atrophic cortex cannot generate cortisol for weeks (the reason the taper convention exists).",
            variant: "input",
          },
          {
            id: "crisis",
            label: "ADRENAL CRISIS",
            sublabel:
              "Output — the printed note, verbatim: “Abrupt withdrawal of exogenous glucocorticoids leads to adrenal crisis.” Glucocorticoid deficiency in a stressed patient: hypotension, vomiting, hypoglycemia, hyponatremia, weakness, shock.",
            variant: "output",
          },
          {
            id: "taper",
            label: "THE PREVENTION: TAPER, DON'T STOP",
            sublabel:
              "Output — withdraw slowly so the axis can reawaken (CRH → ACTH → cortical trophic recovery) before the exogenous drug is gone; a patient on chronic steroids ALSO needs stress-dose steroids for surgery or illness while the axis sleeps.",
            variant: "output",
          },
        ],
        edges: [
          { from: "steroid", to: "feedback", label: "replaces the axis's own cortisol", type: "stimulate" },
          { from: "feedback", to: "atrophy", label: "↓ CRH → ↓ ACTH → the cortex loses its trophic drive" },
          { from: "atrophy", to: "withdrawal", label: "a sleeping gland behind a stopped drug" },
          { from: "withdrawal", to: "crisis", label: "no drug, no ACTH, no cortisol — the printed crisis", type: "stimulate" },
          { from: "taper", to: "crisis", label: "slow withdrawal lets the axis reawaken first", type: "inhibit" },
        ],
      },
    },
    {
      id: "sex-steroid-disruption-map",
      title: "The balance beam: gynecomastia, hot flashes, and hyperprolactinemia — three rows, one sex-steroid axis, three different levers",
      context: "The gynecomastia, hot flashes, and hyperprolactinemia rows (book 248)",
      flow: {
        nodes: [
          {
            id: "beam",
            label: "THE ANDROGEN–ESTROGEN BALANCE BEAM",
            sublabel:
              "Input — breast tissue grows when the estrogen : androgen ratio rises; sexual/reproductive physiology runs on this balance plus dopamine's brake on prolactin.",
            variant: "input",
          },
          {
            id: "androgen-block",
            label: "SIX WAYS TO CUT THE ANDROGEN SIDE (GYNECOMASTIA)",
            sublabel:
              "Process — ketoconazole (blocks steroidogenesis), cimetidine (androgen receptor antagonist), spironolactone (antiandrogenic), GnRH analogs/antagonists (↓ gonadal androgen), androgen receptor inhibitors, 5α-reductase inhibitors (↓ DHT) — every printed agent removes androgen signaling.",
            variant: "process",
          },
          {
            id: "gynecomastia",
            label: "UNOPPOSED ESTROGEN EFFECT AT THE BREAST",
            sublabel:
              "Output — gynecomastia: with androgen off the beam, physiologic estrogen drives ductal epithelial proliferation — breast enlargement, often tender.",
            variant: "output",
          },
          {
            id: "serm",
            label: "SERMs STRIP THE ESTROGEN SIGNAL (HOT FLASHES)",
            sublabel:
              "Process — tamoxifen, clomiphene, raloxifene are estrogen-receptor modulators that act as ANTAGONISTS at the hypothalamus: the brain reads estrogen deficiency.",
            variant: "process",
          },
          {
            id: "hot-flashes",
            label: "VASOMOTOR INSTABILITY — HOT FLASHES",
            sublabel:
              "Output — loss of hypothalamic estrogenic feedback → surging GnRH/LH → the menopausal vasomotor signature: hot flashes, sweats — the drug-induced menopause equivalent.",
            variant: "output",
          },
          {
            id: "d2",
            label: "D2 BLOCKADE RELEASES PROLACTIN",
            sublabel:
              "Process — typical antipsychotics (eg, haloperidol), atypical antipsychotics (eg, risperidone), metoclopramide, methyldopa, verapamil all remove dopamine's inhibition of lactotrophs.",
            variant: "inhibit",
          },
          {
            id: "hyperprolactin",
            label: "↑ PROLACTIN → HYPOGONADISM + GALACTORRHEA",
            sublabel:
              "Output — the printed presentation: hypogonadism (eg, infertility, amenorrhea, erectile dysfunction) and galactorrhea — prolactin suppresses GnRH while driving milk production.",
            variant: "output",
          },
        ],
        edges: [
          { from: "beam", to: "androgen-block", label: "the gynecomastia lever: androgen side down", type: "inhibit" },
          { from: "androgen-block", to: "gynecomastia" },
          { from: "beam", to: "serm", label: "the hot-flashes lever: estrogen signal off at the hypothalamus" },
          { from: "serm", to: "hot-flashes" },
          { from: "beam", to: "d2", label: "the prolactin lever: dopamine brake lifted", type: "inhibit" },
          { from: "d2", to: "hyperprolactin" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "drug-reaction-endocrine-map",
      title: "The four-axis drug-reaction map (an original KYP diagram)",
      caption:
        "An original KYP diagram of book page 248: the four hormone-axis lanes — HPA, SEX-STEROID (with its three levers: androgen blocked → gynecomastia, estrogen stripped → hot flashes, D2 blockade → hyperprolactinemia), THYROID (amiodarone and lithium pushing both directions), and WATER/GLUCOSE (ADH blocked → diabetes insipidus vs ADH enhanced → SIADH; the diabetogenic list) — with every printed reaction as a chip carrying its causal agents and First Aid's red in-cell mnemonics; the glucocorticoid withdrawal timeline (chronic exogenous steroid → HPA suppression → the sleeping adrenal → ABRUPT WITHDRAWAL → ADRENAL CRISIS, with the TAPER escape); the endocrine/reproductive table verbatim in printed order; and the strip documenting the page's second table — Drug reactions—gastrointestinal — which this note also owns and carries verbatim.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 270 — the page's visual assets are the two color-coded tables themselves, VLM-read at 120dpi (staging-ph23/vlm-census.txt), no margin mnemonics. The four-lane routing map, the withdrawal timeline, and the GI strip are an ORIGINAL KYP ADAPTATION — every reaction name, causal-agent list, note, and in-cell mnemonic is preserved, but the artwork is KYP's; both tables are additionally carried verbatim in the note's table blocks. First Aid's red in-cell mnemonic text (The people need High glucose · I am lethargic · Can’t Concentrate Serum Sodium · and the three gastrointestinal hooks) is carried attributed; the four ALL-CAPS mnemonics in the Memory section are KYP originals.",
    },
    {
      kind: "table",
      title: "Book 248 — the printed endocrine/reproductive table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The page's first table, in the printed row order: Adrenocortical insufficiency → Diabetes insipidus → Gynecomastia → Hot flashes → Hyperglycemia → Hyperprolactinemia → Hyperthyroidism → Hypothyroidism → SIADH. Four rows print with EMPTY notes cells (marked —); three rows carry First Aid's own red mnemonic text inside the NOTES column, reproduced here attributed, exactly as printed.",
      columns: ["DRUG REACTION", "CAUSAL AGENTS", "NOTES"],
      rows: [
        [
          "Adrenocortical insufficiency",
          "HPA suppression secondary to chronic exogenous glucocorticoid use",
          "Abrupt withdrawal of exogenous glucocorticoids leads to adrenal crisis",
        ],
        [
          "Diabetes insipidus",
          "Lithium, demeclocycline",
          "— (no printed note)",
        ],
        [
          "Gynecomastia",
          "Ketoconazole, cimetidine, spironolactone, GnRH analogs/antagonists, androgen receptor inhibitors, 5α-reductase inhibitors",
          "— (no printed note)",
        ],
        [
          "Hot flashes",
          "SERMs (eg, tamoxifen, clomiphene, raloxifene)",
          "— (no printed note)",
        ],
        [
          "Hyperglycemia",
          "Tacrolimus, protease inhibitors, niacin, HCTZ, glucocorticoids",
          "“The people need High glucose” — First Aid's own red mnemonic, printed in this NOTES cell (The = Tacrolimus, people = Protease inhibitors, need = Niacin, High = HCTZ, glucose = Glucocorticoids)",
        ],
        [
          "Hyperprolactinemia",
          "Typical antipsychotics (eg, haloperidol), atypical antipsychotics (eg, risperidone), metoclopramide, methyldopa, verapamil",
          "Presents with hypogonadism (eg, infertility, amenorrhea, erectile dysfunction) and galactorrhea",
        ],
        [
          "Hyperthyroidism",
          "Amiodarone, iodine, lithium",
          "— (no printed note)",
        ],
        [
          "Hypothyroidism",
          "Amiodarone, lithium",
          "“I am lethargic” — First Aid's own red mnemonic, printed in this NOTES cell (“I am” = Amiodarone, “lethargic” = Lithium)",
        ],
        [
          "SIADH",
          "Carbamazepine, Cyclophosphamide, SSRIs",
          "“Can’t Concentrate Serum Sodium” — First Aid's own red mnemonic, printed in this NOTES cell (Can’t = Carbamazepine, Concentrate = Cyclophosphamide — printed with the capital C mid-list, Serum Sodium = SSRIs, the double S)",
        ],
      ],
      caption:
        "Verbatim carries, documented: the SIADH causal-agents cell prints “Cyclophosphamide” with the capital C mid-list and the NOTES cell prints “Can’t” with the curly right single quote (U+2019) — both the source's own print, preserved. The hyperglycemia mnemonic capitalizes “The” and “High” as printed. Empty NOTES cells (Diabetes insipidus, Gynecomastia, Hot flashes, Hyperthyroidism) print blank in the source — marked here with —. The endocrine table's text layer reads cleanly row-by-row (reaction → causal agents → notes); the interleaving quirks all belong to the page's second table (see below). Amiodarone and lithium print in BOTH thyroid rows; glucocorticoids print in both the first row (as the HPA suppressor) and the hyperglycemia row — the double appearances the exam pivots on.",
    },
    {
      kind: "steps",
      title: "Reading any endocrine drug reaction in four moves — the axis-routing protocol",
      intro:
        "The whole table distilled into an ordered decision path: AXIS → DIRECTION → PRESENTATION → LIST. This is the protocol the exam layer (patterns, traps, pivots) below is built on.",
      steps: [
        {
          label: "MOVE 1 — NAME THE AXIS the drug is leaning on",
          detail:
            "HPA (adrenocortical insufficiency — and glucocorticoids' second appearance under hyperglycemia) · SEX-STEROID (gynecomastia, hot flashes, hyperprolactinemia) · THYROID (hyperthyroidism, hypothyroidism) · WATER/GLUCOSE (diabetes insipidus, SIADH, hyperglycemia). Nine rows, four axes — the table is four physiology one-liners wearing drug lists.",
        },
        {
          label: "MOVE 2 — NAME THE DIRECTION the axis is bent",
          detail:
            "Androgen signal REMOVED (gynecomastia: six printed mechanisms — synthesis [ketoconazole], receptor [cimetidine, androgen receptor inhibitors], antiandrogen [spironolactone], gonadal drive [GnRH analogs/antagonists], DHT [5α-reductase inhibitors]) vs estrogen signal REMOVED (hot flashes: SERMs at the hypothalamus). ADH BLOCKED (lithium, demeclocycline → diabetes insipidus) vs ADH ENHANCED (carbamazepine, Cyclophosphamide, SSRIs → SIADH). Thyroid UP (amiodarone, iodine, lithium) vs DOWN (amiodarone, lithium — the shared drugs bend it either way). Glucocorticoid EXCESS in the body (hyperglycemia) vs its axis SUPPRESSED (adrenocortical insufficiency on withdrawal).",
        },
        {
          label: "MOVE 3 — READ THE PRESENTATION the row predicts",
          detail:
            "Withdrawal-day hypotension, vomiting, hypoglycemia → the HPA row. Breast enlargement in a man on a potassium-sparing diuretic, an H2 blocker, or prostate/androgen therapy → the gynecomastia row. Menopausal-type vasomotor flushes on tamoxifen → the SERM row. Amenorrhea with galactorrhea (or erectile dysfunction + infertility) on an antipsychotic or metoclopramide → hyperprolactinemia. Lethargy, cold intolerance, weight gain vs heat intolerance, weight loss → the thyroid rows. Dilute high-volume polyuria with hypernatremia → diabetes insipidus; euvolemic hyponatremia with inappropriately concentrated urine → SIADH. New hyperglycemia on a transplant or HIV regimen → the diabetogenic list.",
        },
        {
          label: "MOVE 4 — MATCH THE CAUSAL-AGENT LIST, using the printed keys",
          detail:
            "First Aid prints its own in-cell keys in red — carry them attributed: “The people need High glucose” (hyperglycemia: Tacrolimus, Protease inhibitors, Niacin, HCTZ, Glucocorticoids), “I am lethargic” (hypothyroidism: Amiodarone, Lithium), “Can’t Concentrate Serum Sodium” (SIADH: Carbamazepine, Cyclophosphamide, SSRIs). When the presentation is ambiguous, the drug list settles it — and when the DRUG is ambiguous (lithium, amiodarone, glucocorticoids all print twice), the presentation settles the row.",
        },
      ],
    },
    {
      kind: "compare",
      title: "The two directions of each axis — the table's hidden symmetry",
      intro:
        "Four of the table's rows come in directional pairs: the same axis, bent opposite ways, by different (or the same!) drugs. Reading them as pairs is what makes the list stick.",
      columns: ["THE HORMONE SIGNAL GOES DOWN", "THE HORMONE SIGNAL GOES UP"],
      rows: [
        {
          label: "Sex-steroid lane",
          a: "ANDROGEN removed → GYNECOMASTIA — ketoconazole, cimetidine, spironolactone, GnRH analogs/antagonists, androgen receptor inhibitors, 5α-reductase inhibitors: estrogen unopposed at the breast",
          b: "PROLACTIN released (the dopamine brake lifted) → HYPERPROLACTINEMIA — typical antipsychotics (eg, haloperidol), atypical antipsychotics (eg, risperidone), metoclopramide, methyldopa, verapamil: hypogonadism + galactorrhea. (The third lever — ESTROGEN removed by SERMs → hot flashes — bends the beam the other way.)",
        },
        {
          label: "Thyroid lane",
          a: "HYPOTHYROIDISM — amiodarone, lithium (“I am lethargic”): iodine load tripping Wolff-Chaikoff, or blocked hormone release",
          b: "HYPERTHYROIDISM — amiodarone, iodine, lithium: iodine load tipping into Jod-Basedow-type excess; amiodarone and lithium print in BOTH rows",
        },
        {
          label: "Water lane (ADH)",
          a: "ADH BLOCKED → DIABETES INSIPIDUS — lithium, demeclocycline: collecting duct unresponsive, dilute polyuria, hypernatremia",
          b: "ADH ENHANCED → SIADH — carbamazepine, Cyclophosphamide, SSRIs (“Can’t Concentrate Serum Sodium”): water retained, concentrated urine, euvolemic hyponatremia",
        },
        {
          label: "Adrenal/glucose lane",
          a: "HPA AXIS SUPPRESSED → ADRENOCORTICAL INSUFFICIENCY — chronic exogenous glucocorticoid; the crisis comes at abrupt WITHDRAWAL",
          b: "GLUCOSE DRIVEN UP → HYPERGLYCEMIA — tacrolimus, protease inhibitors, niacin, HCTZ, glucocorticoids (“The people need High glucose”) — glucocorticoids print in both rows: excess effect vs suppressed axis",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three double-appearance drugs — and the withdrawal trap",
      body:
        "Three agents print in more than one row, and every one of them is a ready-made exam stem. GLUCOCORTICOIDS print twice: as the HPA suppressor whose abrupt withdrawal causes adrenal crisis, and as the last word of the hyperglycemia list (The people need High glucose) — the same drug gives the patient too much hormone effect while dosed and too little at withdrawal. AMIODARONE prints in BOTH thyroid rows (with iodine joining it only in hyperthyroidism): the iodine-rich antiarrhythmic that can push the thyroid either direction — a stem cannot assume which. LITHIUM prints in three places: hypothyroidism, hyperthyroidism, AND diabetes insipidus (with demeclocycline) — the one drug that tilts both the thyroid axis and the water axis, in opposite water directions. And the adrenocortical insufficiency row is the page's withdrawal trap: the reaction belongs to the STOPPING of the drug, not the taking of it — chronic therapy suppresses, abrupt cessation crashes, and the answer to “why” is HPA suppression with an atrophic cortex, not a cytotoxic destruction of the gland.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "First Aid's own red text — the mnemonic layer printed on the page",
      body:
        "This page carries six of First Aid's own memory hooks, printed in red inside the cells (attributed, verbatim — these are the source's mnemonics, not KYP's; the four ALL-CAPS codes in the Memory section are KYP originals). Endocrine/reproductive: “The people need High glucose” (hyperglycemia — The=Tacrolimus, people=Protease inhibitors, need=Niacin, High=HCTZ, glucose=Glucocorticoids); “I am lethargic” (hypothyroidism — “I am”=Amiodarone, “lethargic”=Lithium); “Can’t Concentrate Serum Sodium” (SIADH — Can’t=Carbamazepine, Concentrate=Cyclophosphamide, Serum Sodium=SSRIs). Gastrointestinal: “I referred patient serum (AST, ALT) for hepatitis” (hepatitis — I=Isoniazid, referred=Rifampin, patient=Pyrazinamide, serum=Statins, for=Fibrates); “Drugs generate a violent abdominal distress” (pancreatitis — Diuretics, glucocorticoids, alcohol, valproate, azathioprine); “Pills Not beneficial for food tube” (medication-induced esophagitis — Potassium chloride, NSAIDs, bisphosphonates, ferrous sulfate, tetracyclines — printed, as a quirk, inside the CAUSAL AGENTS column below the drug list rather than in the NOTES column).",
    },
    {
      kind: "table",
      title: "Book 248 — the page's SECOND table, Drug reactions—gastrointestinal, carried verbatim (this note owns the whole page)",
      intro:
        "The endocrine/reproductive table ends with SIADH, and the same printed page continues directly into a second complete table — Drug reactions—gastrointestinal (8 rows). The chapter plan assigns book page 248 solely to this note and no separate gastrointestinal drug-reactions topic exists, so the whole page is carried here. Text-layer interleaving quirks adjudicated by bbox + VLM (documented in staging-ph23/vlm-census.txt): the GI table's “NOTES” column header and the hepatitis row's red mnemonic are displaced to AFTER the footer slug in the cache text layer (both belong at the table top / the hepatitis row); the pancreatitis mnemonic interleaves between the two causal-agent lines (same y-band, NOTES column); and the esophagitis mnemonic prints INSIDE the causal-agents column, below the drug list — carried there, attributed.",
      columns: ["DRUG REACTION", "CAUSAL AGENTS", "NOTES"],
      rows: [
        [
          "Acute cholestatic hepatitis, jaundice",
          "Macrolides (eg, erythromycin)",
          "— (no printed note)",
        ],
        [
          "Constipation",
          "Antimuscarinics (eg, atropine), antipsychotics, opioids, non-dihydropyridine CCBs, ranolazine, amiodarone, aluminum hydroxide, loperamide, 5HT3 receptor antagonist (ondansetron), vincristine",
          "— (no printed note)",
        ],
        [
          "Diarrhea",
          "Acamprosate, antidiabetic agents (acarbose, metformin, pramlintide), colchicine, cholinesterase inhibitors, lipid-lowering agents (eg, ezetimibe, orlistat), macrolides (eg, erythromycin), SSRIs, chemotherapy (eg, irinotecan)",
          "— (no printed note)",
        ],
        [
          "Focal to massive hepatic necrosis",
          "Amanita phalloides (death cap mushroom), valproate, acetaminophen",
          "— (no printed note)",
        ],
        [
          "Hepatitis",
          "Isoniazid, rifampin, pyrazinamide, statins, fibrates",
          "“I referred patient serum (AST, ALT) for hepatitis” — First Aid's own red mnemonic, printed in this NOTES cell (I = Isoniazid, referred = Rifampin, patient = Pyrazinamide, serum = Statins, for = Fibrates)",
        ],
        [
          "Pancreatitis",
          "Diuretics (eg, furosemide, HCTZ), glucocorticoids, alcohol, valproate, azathioprine",
          "“Drugs generate a violent abdominal distress” — First Aid's own red mnemonic, printed in this NOTES cell (Drugs = Diuretics, generate = glucocorticoids, a = alcohol, violent = valproate, distress = azathioprine)",
        ],
        [
          "Medication-induced esophagitis",
          "Potassium chloride, NSAIDs, bisphosphonates, ferrous sulfate, tetracyclines — “Pills Not beneficial for food tube” — First Aid's own red mnemonic, printed INSIDE this CAUSAL AGENTS cell below the drug list (Pills = Potassium chloride, Not = NSAIDs, beneficial = bisphosphonates, food = ferrous sulfate, tube = tetracyclines)",
          "Usually occurs at anatomic sites of esophageal narrowing (eg, near level of aortic arch); caustic effect minimized with upright posture and adequate water ingestion",
        ],
        [
          "Pseudomembranous colitis",
          "Ampicillin, cephalosporins, clindamycin, fluoroquinolones, PPIs",
          "Antibiotics predispose to superinfection by resistant C difficile",
        ],
      ],
      caption:
        "Verbatim carries, documented: “ranolazine” (the VLM's 120dpi read mis-saw “tcnolazine”; the text layer and bbox words both print ranolazine — text layer wins); “5HT3 receptor antagonist (ondansetron)” and “non-dihydropyridine CCBs” print as shown; the esophagitis mnemonic's placement inside the CAUSAL AGENTS column (bbox x=181.5, the causal-agents anchor — vs x=388.5 for NOTES) is the source's own print, preserved and flagged. Note the GI table's own axis structure the exam borrows: motility (constipation vs diarrhea, two lists that mirror each other), hepatotoxicity in three grades (cholestatic jaundice → hepatitis → focal-to-massive necrosis), and the three infection/caustic rows (pancreatitis, esophagitis, pseudomembranous colitis). SSRIs print in both the SIADH row (endocrine table) and the diarrhea row (this table) — one more double-appearance drug.",
    },
  ],
  drugs: [
    {
      drug: "Chronic exogenous glucocorticoids (eg, prednisone)",
      klass: "Systemic glucocorticoid therapy (the HPA-suppressing row)",
      target: "The HPA axis — hypothalamic CRH and pituitary ACTH (negative feedback), and every glucose-producing pathway glucocorticoid turns on",
      mechanism:
        "Chronic exogenous glucocorticoid feeds back on the axis (↓ CRH → ↓ ACTH → zona fasciculata/reticularis atrophy); simultaneously glucocorticoid effect drives gluconeogenesis and insulin resistance (the hyperglycemia row)",
      effect: "Suppressed endogenous cortisol capacity while dosed; ↑ glucose (the last word of “The people need High glucose”)",
      uses: "Anti-inflammatory/immunosuppressive dosing (the context in which the row bites — transplant, rheumatologic, asthma therapy)",
      adverse: "Abrupt withdrawal of exogenous glucocorticoids leads to adrenal crisis (the printed note); hyperglycemia (the printed list)",
      clue: "The only row where the reaction belongs to STOPPING the drug — taper, and give stress doses while the axis sleeps.",
    },
    {
      drug: "Spironolactone",
      klass: "Aldosterone antagonist with antiandrogenic effect (the gynecomastia row)",
      target: "Mineralocorticoid receptor (intended) + androgen synthesis/signaling (the adverse-effect lever)",
      mechanism:
        "Antagonizes aldosterone at the collecting duct; at higher effect also inhibits androgen binding and shows estrogen-like activity — the androgen side of the balance beam comes off",
      effect: "Natriuresis with K+ retention; relative estrogen dominance at the breast",
      uses: "Hyperaldosteronism, ascites/cirrhosis edema, resistant hypertension, heart failure",
      adverse: "Gynecomastia (the printed row — one of six androgen-cutting mechanisms), hyperkalemia, menstrual irregularities",
      clue: "The gynecomastia patient on a potassium-sparing diuretic — breast tissue + a high potassium should name this drug.",
    },
    {
      drug: "Amiodarone",
      klass: "Class III antiarrhythmic (the both-directions thyroid drug)",
      target: "Thyroid hormone synthesis and release — via its enormous iodine load (≈37% iodine by weight)",
      mechanism:
        "Iodine load can trip the Wolff-Chaikoff effect into hypothyroidism or tip into Jod-Basedow-type hormone excess — the drug prints in BOTH thyroid rows; thyroiditis with release of stored hormone is the other pathway",
      effect: "Thyroid function bent in either direction by one drug",
      uses: "Arrhythmia control (atrial and ventricular)",
      adverse:
        "Hypothyroidism (with lithium) AND hyperthyroidism (with iodine and lithium) — both printed rows; also constipation (the GI table's list), photosensitivity, pulmonary fibrosis, corneal deposits",
      clue: "An antiarrhythmic with a thyroid-function test the examiner refuses to predict — if the stem does not say which direction, do not assume one.",
    },
    {
      drug: "Lithium",
      klass: "Mood stabilizer (the three-row drug)",
      target: "The renal collecting duct (ADH signaling) + the thyroid follicle (hormone release)",
      mechanism:
        "Impairs the collecting duct's response to ADH (like demeclocycline) → nephrogenic diabetes insipidus; interferes with thyroid hormone release → hypothyroidism (also printed under hyperthyroidism)",
      effect: "Dilute polyuria on the water axis; thyroid under-activity on the thyroid axis",
      uses: "Bipolar disorder — mania and maintenance",
      adverse: "Diabetes insipidus (with demeclocycline), hypothyroidism, hyperthyroidism (both thyroid rows), tremor, teratogenicity (Ebstein anomaly)",
      clue: "The patient on lithium with polyuria AND a TSH question — one drug, two axes, opposite water directions.",
    },
    {
      drug: "Carbamazepine (+ cyclophosphamide, SSRIs)",
      klass: "Antiepileptic heading the SIADH row",
      target: "ADH release from the hypothalamus/posterior pituitary (enhanced) — the opposite end from lithium and demeclocycline",
      mechanism:
        "Enhances ADH release → collecting-duct water retention → euvolemic hyponatremia with inappropriately concentrated urine; SSRIs do the same via increased serotonergic drive on ADH secretion",
      effect: "Water retained, sodium diluted — “Can’t Concentrate Serum Sodium”",
      uses: "Focal seizures, trigeminal neuralgia, bipolar disorder (carbamazepine); oncology and rheumatology (cyclophosphamide); depression/anxiety (SSRIs)",
      adverse: "SIADH/hyponatremia (the printed row); carbamazepine also causes agranulocytosis, aplastic anemia, and SJS (printed on the facing hematologic/skin pages)",
      clue: "Hyponatremia with concentrated urine in a patient on an antiepileptic or an antidepressant — the water axis bent UP, not blocked.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 68-year-old woman treated with prednisone for 8 months for polymyalgia rheumatica stops the drug abruptly when her prescription runs out; three days later she presents with hypotension, vomiting, abdominal pain, hypoglycemia, and hyponatremia.",
        discriminator: "Chronic exogenous glucocorticoid → HPA suppression; the crash lands on abrupt WITHDRAWAL, not on dosing",
        concept: "The adrenocortical insufficiency row",
        answer:
          "HPA suppression secondary to chronic exogenous glucocorticoid use — abrupt withdrawal of exogenous glucocorticoids leads to adrenal crisis (the printed note, verbatim). ↓CRH → ↓ACTH → atrophic zona fasciculata/reticularis cannot generate cortisol when the drug stops; stress then unmasks the deficiency as crisis. Prevention is the taper (plus stress-dose steroids during intercurrent illness).",
      },
      {
        stem: "A 58-year-old man on spironolactone for cirrhotic ascites (with cimetidine for reflux) develops bilateral tender breast enlargement.",
        discriminator: "Tender gynecomastia accumulating through drugs that each cut a different link in androgen signaling",
        concept: "The gynecomastia row — six androgen-cutting mechanisms",
        answer:
          "The gynecomastia causal agents, verbatim: ketoconazole, cimetidine, spironolactone, GnRH analogs/antagonists, androgen receptor inhibitors, 5α-reductase inhibitors — synthesis blocked, receptor blocked, gonadal drive down, DHT down: every entry removes androgen effect, leaving estrogen unopposed at the breast. Route it through the balance beam: androgen side off → ductal proliferation → gynecomastia.",
      },
      {
        stem: "A 74-year-old woman started on an SSRI for depression three weeks ago is found to have a serum sodium of 126 mEq/L with urine osmolality higher than serum osmolality, euvolemia, and no edema.",
        discriminator: "Euvolemic hyponatremia with INappropriately concentrated urine after a drug on the SIADH list",
        concept: "The SIADH row — the water axis bent UP",
        answer:
          "SIADH from the printed agents — carbamazepine, Cyclophosphamide, SSRIs (“Can’t Concentrate Serum Sodium”): enhanced ADH release → free-water retention → dilutional hyponatremia with concentrated urine. Contrast the opposite direction of the same axis: lithium and demeclocycline BLOCK ADH → diabetes insipidus (dilute polyuria, hypernatremia) — the direction arrow, not the drug name, picks the row.",
      },
      {
        stem: "A 32-year-old woman on risperidone for schizophrenia presents with amenorrhea and bilateral galactorrhea; she and her partner have been unable to conceive for a year.",
        discriminator: "Galactorrhea + hypogonadism on a D2-blocking drug — the dopamine brake on prolactin lifted",
        concept: "The hyperprolactinemia row",
        answer:
          "Hyperprolactinemia from the printed agents — typical antipsychotics (eg, haloperidol), atypical antipsychotics (eg, risperidone), metoclopramide, methyldopa, verapamil. The printed presentation: “Presents with hypogonadism (eg, infertility, amenorrhea, erectile dysfunction) and galactorrhea” — prolactin suppresses GnRH (→ hypogonadism) while driving milk production. Every agent on the list shares the D2-antagonism lever (methyldopa and verapamil included via their own dopaminergic interference).",
      },
    ],
    traps: [
      {
        a: "Lithium → diabetes insipidus (ADH blocked)",
        b: "Carbamazepine, cyclophosphamide, SSRIs → SIADH (ADH enhanced)",
        whyConfused: "Both are “water-axis” drug reactions on the same page, and lithium is the famous drug",
        keyDifference:
          "The direction of the ADH arrow: lithium (with demeclocycline) antagonizes ADH at the collecting duct → dilute polyuria and HYPERnatremia; the SIADH trio enhances ADH release → water retention, concentrated urine, HYPOnatremia",
        clue:
          "Urine osmolality decides: inappropriately DILUTE urine = the DI pair; inappropriately CONCENTRATED urine with low sodium = the SIADH trio (“Can’t Concentrate Serum Sodium”)",
      },
      {
        a: "Amiodarone, lithium → hypothyroidism",
        b: "Amiodarone, iodine, lithium → hyperthyroidism",
        whyConfused: "The same two drugs print in BOTH rows — the table itself supplies the confusion",
        keyDifference:
          "The iodine load pushes either way: Wolff-Chaikoff shutdown (hypo) vs Jod-Basedow-type excess or thyroiditis release (hyper); only IODINE is exclusive to the hyperthyroidism row",
        clue:
          "Never answer a thyroid-direction question from the drug name alone — the stem's symptoms (lethargy/cold intolerance vs heat intolerance/weight loss) pick the row, and amiodarone can produce either",
      },
      {
        a: "Gynecomastia — androgen removed (spironolactone, cimetidine, ketoconazole, GnRH analogs/antagonists, androgen receptor inhibitors, 5α-reductase inhibitors)",
        b: "Hot flashes — estrogen effect removed (SERMs: tamoxifen, clomiphene, raloxifene)",
        whyConfused: "Both are sex-steroid disruption rows and both can appear in a breast/vasomotor symptom stem",
        keyDifference:
          "Which side of the balance beam is cut: gynecomastia = androgen OFF (estrogen unopposed → breast tissue grows); hot flashes = estrogenic feedback OFF at the hypothalamus (→ menopausal vasomotor instability)",
        clue: "Breast enlargement points to the androgen-cutting list; flushing/sweats points to the SERM list — two rows, opposite levers, same axis",
      },
      {
        a: "Drug-withdrawal adrenocortical insufficiency (HPA suppression — SECONDARY)",
        b: "Primary adrenal insufficiency (Addison disease — autoimmune destruction)",
        whyConfused: "Both present with hypotension, hyponatremia, and vomiting",
        keyDifference:
          "HPA suppression is withdrawal-driven, ACTH-SUPPRESSED (no hyperpigmentation; the zona glomerulosa is relatively spared, so salt-wasting/hyperkalemia are not the signature) — Addison disease is ACTH-DRIVEN (hyperpigmentation, hyperkalemia, salt craving)",
        clue:
          "The chronic-steroid history + the timing of the crash at cessation + ABSENT hyperpigmentation = the drug row; hyperpigmentation with hyperkalemia = the disease, not the drug",
      },
    ],
    pivots: [
      {
        lookAlike: "Any endocrine drug-reaction stem — route it before naming anything",
        differentiator:
          "NAME THE AXIS (HPA · sex-steroid · thyroid · water/glucose) → NAME THE DIRECTION (suppressed vs stimulated; blocked vs enhanced; androgen-off vs estrogen-off) → READ THE PRESENTATION the row predicts → MATCH the causal-agent list using First Aid's red keys (The people need High glucose · I am lethargic · Can’t Concentrate Serum Sodium)",
        correctPath:
          "Axis + direction first: the same drug prints in multiple rows (lithium ×3, amiodarone ×2, glucocorticoids ×2), so the drug name alone can never pick the row — the presentation does",
      },
      {
        lookAlike: "A sodium/water imbalance stem with a psychiatric or antiepileptic drug in the history",
        differentiator:
          "Lithium and demeclocycline block ADH (dilute polyuria, hypernatremia — diabetes insipidus); carbamazepine, Cyclophosphamide, and SSRIs enhance ADH (euvolemic hyponatremia, concentrated urine — SIADH)",
        correctPath:
          "Check urine osmolality against serum: inappropriately dilute → the DI pair; inappropriately concentrated with low sodium → the SIADH trio — the water axis has a direction arrow, and the arrow is the answer",
      },
      {
        lookAlike: "A patient on chronic steroids presenting acutely — hyperglycemia? adrenal crisis? which mechanism?",
        differentiator:
          "WHILE DOSING, glucocorticoid EFFECT dominates (hyperglycemia — “The people need High glucose”); AT ABRUPT WITHDRAWAL, the suppressed axis is unmasked (adrenal crisis — the first row's printed note)",
        correctPath:
          "Ask about the timing: on-drug hyperglycemia vs off-drug crisis; the prevention for the second is taper + stress-dosing, and the mechanism is HPA suppression with cortical atrophy, not gland destruction",
      },
    ],
    miniCase: {
      vignette:
        "A 61-year-old man with a renal transplant has been maintained on prednisone (with tacrolimus and mycophenolate) for two years. He decides to stop all his pills after reading about steroid side effects. Four days later his wife brings him in: blood pressure 82/50 mmHg, pulse 112/min, temperature 37.9 °C, repeated vomiting, glucose 54 mg/dL, sodium 128 mEq/L, potassium 4.3 mEq/L. He looks ill and mildly confused. Skin inspection shows no hyperpigmentation. Which of the following best explains his presentation?",
      question: "Identify the mechanism — choose the option that correctly routes this presentation through the axis the drug disrupted.",
      options: [
        {
          label:
            "Chronic exogenous glucocorticoid suppressed his HPA axis (↓ CRH → ↓ ACTH → cortisol synthetic capacity atrophied); abrupt withdrawal left no endogenous cortisol to meet the stress of illness, producing adrenal crisis",
          text: "The sleeping adrenal, woken rudely by withdrawal — the printed row.",
          correct: true,
          why:
            "Correct on both layers. The printed causal agent is “HPA suppression secondary to chronic exogenous glucocorticoid use” and the printed note is “Abrupt withdrawal of exogenous glucocorticoids leads to adrenal crisis.” Two years of prednisone fed the axis's own hormone back to it: CRH fell, ACTH fell, and the zona fasciculata/reticularis — ACTH-dependent — went quiescent. When the drug stopped, the axis could not answer for weeks, and a minor febrile illness was enough stress to unmask the deficiency: hypotension, vomiting, hypoglycemia, hyponatremia. The normal potassium and absent hyperpigmentation fit the SECONDARY (ACTH-suppressed) pattern. The treatment logic follows the mechanism: glucocorticoid replacement now (stress doses), and — had he asked — a slow taper to let the axis reawaken.",
        },
        {
          label:
            "Prednisone is directly cytotoxic to the adrenal cortex, destroying the zona fasciculata the way ketoconazole blocks steroidogenesis, so the gland failed while he was still taking it",
          text: "A destruction story where the print is a suppression story.",
          why:
            "Wrong mechanism, wrong timeline. Nothing about exogenous glucocorticoids destroys the cortex — the gland is SUPPRESSED (ACTH-deprived, atrophic but reversible), not poisoned, and ketoconazole's steroidogenesis blockade is a different drug with a different lever (it appears on this page in the gynecomastia row, not the adrenal row). The distractor is tempting because “adrenal failure” invites a cytotoxic imagination, but the presentation here began at WITHDRAWAL — the exact timing the printed note names: the crisis belongs to the stopping, not the taking.",
        },
        {
          label:
            "Tacrolimus has precipitated adrenal insufficiency through its inhibition of calcineurin in the adrenal cortex, which is why transplant patients on tacrolimus routinely develop crises",
          text: "The right vignette, the wrong drug from the same pocket.",
          why:
            "Wrong agent for the axis. Tacrolimus is on this page — but in the HYPERGLYCEMIA row (“The people need High glucose”: Tacrolimus, Protease inhibitors, Niacin, HCTZ, Glucocorticoids), where its calcineurin blockade disturbs insulin secretion and glucose handling. It is not printed as a cause of adrenocortical insufficiency, and the mechanism offered (calcineurin-dependent adrenal failure) is invented for the option. The distractor works because the drug sits in the same regimen, but each row owns its own drug list — route by axis, and the adrenal row belongs to the glucocorticoid.",
        },
        {
          label:
            "He has developed SIADH from abruptly stopping glucocorticoids — glucocorticoids are a listed SIADH causal agent, and the hyponatremia with vomiting is the water-retention syndrome",
          text: "A row-swap: borrowing one hyponatremia to explain another.",
          why:
            "Wrong row entirely. The SIADH causal agents as printed are carbamazepine, Cyclophosphamide, and SSRIs (“Can’t Concentrate Serum Sodium”) — glucocorticoids are NOT on that list; they print in the adrenocortical insufficiency and hyperglycemia rows. The hyponatremia of adrenal crisis is part of the cortisol-deficiency state itself (and the volume depletion of vomiting), not ADH excess driven by steroid withdrawal. The distractor is seductive because both rows produce a low sodium, but the route differs: check the urine (dilute here, not inappropriately concentrated) and the volume status (depleted, not euvolemic) — and match the drug to its PRINTED row before borrowing another row's mechanism.",
        },
      ],
      reasoning:
        "The stem hands over every routing cue: a chronic exogenous glucocorticoid, an abrupt stop, and a crash four days later with hypotension, hypoglycemia, hyponatremia, vomiting, and a stressor (low-grade fever) — the printed adrenocortical insufficiency row in vignette form (“HPA suppression secondary to chronic exogenous glucocorticoid use … abrupt withdrawal … leads to adrenal crisis”). The correct option routes the mechanism the way the row prints it: negative feedback (↓CRH → ↓ACTH) → cortisol capacity atrophy → withdrawal unmasks deficiency under stress. Each distractor breaks one link of the routing: option B invents gland DESTRUCTION (and misfiles ketoconazole, whose steroidogenesis blockade belongs to the gynecomastia row's story); option C swaps in tacrolimus, a real drug on the SAME PAGE — but in the hyperglycemia row, with a fabricated adrenal mechanism; option D borrows the SIADH row, whose printed list (carbamazepine, Cyclophosphamide, SSRIs) does not contain glucocorticoids and whose physiology (euvolemic water retention with concentrated urine) contradicts this depleted, dilute-urine patient. Axis first, direction second, presentation third, list last — and the potassium 4.3 with no hyperpigmentation quietly confirms the secondary (HPA-suppressed) form rather than Addison disease.",
    },
  },
  mnemonics: [
    {
      code: "ROUTE THE REACTION TO ITS AXIS",
      meaning:
        "Four axes organize all nine endocrine/reproductive rows: HPA (adrenocortical insufficiency — plus glucocorticoids' second appearance in hyperglycemia) · SEX-STEROID (gynecomastia, hot flashes, hyperprolactinemia) · THYROID (hypo- and hyperthyroidism) · WATER/GLUCOSE (diabetes insipidus, SIADH, hyperglycemia). Before naming any drug, name the axis — then the direction the drug bends it.",
      memorizes: "The whole-page reading protocol: which hormone system each drug reaction belongs to",
      whenToUse: "Any drug-reaction stem with an endocrine or reproductive presentation — and any question asking which drug causes which endocrine finding",
      clinical:
        "The axis predicts the workup: cortisol/ACTH for the HPA row, testosterone/estradiol and prolactin for the sex-steroid rows, TSH for the thyroid rows, urine and serum osmolality for the water rows, glucose for the diabetogenic list.",
    },
    {
      code: "THE ADRENAL SLEEPS — TAPER, DON'T STOP",
      meaning:
        "Chronic exogenous glucocorticoid is the axis's own hormone fed back from outside: CRH falls, ACTH falls, and the cortisol-synthesizing cortex (zona fasciculata/reticularis) goes QUIET — sleeping, not destroyed. The patient is fine while the drug keeps supplying hormone; the crisis comes when the drug stops and the sleeping gland cannot answer stress. Abrupt withdrawal → adrenal crisis; slow taper (and stress-dose steroids during illness/surgery) → the axis reawakens safely.",
      memorizes: "The adrenocortical insufficiency row — why the reaction belongs to withdrawal, and why secondary insufficiency spares pigmentation and potassium",
      whenToUse: "Any chronic-steroid stem, any perioperative steroid question, and any hypotension-plus-hypoglycemia presentation after a medication was stopped",
      clinical:
        "A suppressed ACTH axis means no hyperpigmentation (ACTH/POMC is low, not high) and relatively preserved mineralocorticoid function (the zona glomerulosa runs on renin–angiotensin) — the contrasts that separate drug-induced secondary insufficiency from Addison disease.",
    },
    {
      code: "NO ANDROGEN SIGNAL, NEW BREAST TISSUE",
      meaning:
        "Every gynecomastia agent cuts androgen signaling at a different link — ketoconazole (synthesis), cimetidine + androgen receptor inhibitors (receptor), spironolactone (antiandrogen effect), GnRH analogs/antagonists (gonadal drive), 5α-reductase inhibitors (DHT) — so estrogen's physiologic push on breast ducts becomes unopposed and gynecomastia grows. The mirror lever: SERMs strip the ESTROGEN signal at the hypothalamus → hot flashes; and D2-blockers lift the prolactin brake → hypogonadism + galactorrhea. Three rows, one beam.",
      memorizes: "The gynecomastia causal-agent list (six links) and its split from the SERM and hyperprolactinemia rows",
      whenToUse:
        "Breast enlargement in a man on any of the six drug families; vasomotor flushes on tamoxifen/clomiphene/raloxifene; amenorrhea-galactorrhea on an antipsychotic or metoclopramide",
      clinical:
        "The breast exam plus the medication list is often the whole diagnosis; stopping or switching the offending drug (and checking prolactin when the D2 lever is suspected) is the move.",
    },
    {
      code: "ADH DOWN DILUTES, ADH UP DROWNS",
      meaning:
        "The water axis has a direction arrow: LITHIUM and DEMECLOCYCLINE block ADH at the collecting duct → the duct ignores the signal → dilute, high-volume urine and HYPERnatremia (diabetes insipidus). CARBAMAZEPINE, CYCLOPHOSPHAMIDE, and SSRIs enhance ADH release → water retained, urine inappropriately concentrated, euvolemic HYPOnatremia (SIADH — First Aid's own key: “Can’t Concentrate Serum Sodium”). Same axis, opposite arrows, opposite sodiums.",
      memorizes: "Which water-axis drug causes which sodium problem — the DI pair vs the SIADH trio",
      whenToUse: "Any hyponatremia or hypernatremia stem with a drug in the history; any urine-osmolality interpretation question",
      clinical:
        "Urine osmolality is the tiebreaker: inappropriately dilute with high sodium → the DI pair (treat with water access; thiazides/amiloride for lithium DI); concentrated with low sodium → the SIADH trio (fluid restriction; consider the cause-drug).",
    },
  ],
  rapidReview: {
    s30: [
      "Adrenocortical insufficiency — HPA suppression secondary to chronic exogenous glucocorticoid use; abrupt withdrawal of exogenous glucocorticoids leads to adrenal crisis",
      "Diabetes insipidus — lithium, demeclocycline (ADH blocked: dilute polyuria, hypernatremia)",
      "Gynecomastia — ketoconazole, cimetidine, spironolactone, GnRH analogs/antagonists, androgen receptor inhibitors, 5α-reductase inhibitors (androgen removed → estrogen unopposed)",
      "Hot flashes — SERMs (eg, tamoxifen, clomiphene, raloxifene): estrogenic feedback stripped at the hypothalamus",
      "Hyperglycemia — tacrolimus, protease inhibitors, niacin, HCTZ, glucocorticoids (“The people need High glucose”)",
      "Hyperprolactinemia — typical antipsychotics (eg, haloperidol), atypical antipsychotics (eg, risperidone), metoclopramide, methyldopa, verapamil; presents with hypogonadism (eg, infertility, amenorrhea, erectile dysfunction) and galactorrhea",
      "Hyperthyroidism — amiodarone, iodine, lithium · Hypothyroidism — amiodarone, lithium (“I am lethargic”): amiodarone and lithium print in BOTH rows",
      "SIADH — carbamazepine, Cyclophosphamide, SSRIs (“Can’t Concentrate Serum Sodium”): water retained, hyponatremia",
    ],
    m3: [
      "ROUTE THE REACTION TO ITS AXIS — HPA · sex-steroid · thyroid · water/glucose; the axis, not the drug name, is the answer key",
      "THE ADRENAL SLEEPS — TAPER, DON'T STOP — chronic glucocorticoid suppresses CRH/ACTH; abrupt withdrawal → adrenal crisis",
      "NO ANDROGEN SIGNAL, NEW BREAST TISSUE — six links of androgen blockade → gynecomastia; SERMs cut the ESTROGEN side → hot flashes; D2 blockade → ↑prolactin → hypogonadism + galactorrhea",
      "ADH DOWN DILUTES, ADH UP DROWNS — lithium/demeclocycline → DI (hypernatremia); carbamazepine/cyclophosphamide/SSRIs → SIADH (hyponatremia)",
    ],
    m10: [
      "The page (book 248) holds TWO complete tables: Drug reactions—endocrine/reproductive (9 rows, this note's core) followed by Drug reactions—gastrointestinal (8 rows) — both carried verbatim; the chapter plan assigns the whole page to this note",
      "Lithium prints in THREE endocrine rows (diabetes insipidus, hyperthyroidism, hypothyroidism); amiodarone in TWO (hyper- and hypothyroidism); glucocorticoids in TWO (adrenocortical insufficiency via withdrawal, and hyperglycemia) — the double-appearance drugs are the pivots",
      "First Aid's red in-cell mnemonics, attributed: “The people need High glucose” (Tacrolimus, Protease inhibitors, Niacin, HCTZ, Glucocorticoids) · “I am lethargic” (Amiodarone, Lithium) · “Can’t Concentrate Serum Sodium” (Carbamazepine, Cyclophosphamide, SSRIs)",
      "Printed quirks carried verbatim: “Cyclophosphamide” capitalizes mid-list (the SIADH mnemonic's second C); “The people need High glucose” capitalizes The/High; “Can’t” prints with the curly apostrophe (U+2019)",
      "GI-table quirks: the NOTES column header and the hepatitis mnemonic (“I referred patient serum (AST, ALT) for hepatitis”) displace to after the footer in the text layer; the pancreatitis mnemonic (“Drugs generate a violent abdominal distress”) interleaves between the causal-agent lines; the esophagitis mnemonic (“Pills Not beneficial for food tube”) prints INSIDE the causal-agents column, below the drug list — all adjudicated by bbox coordinates in staging-ph23/vlm-census.txt",
      "The VLM's 120dpi read mis-saw “tcnolazine” in the constipation row — the print reads “ranolazine” (text layer + bbox); SSRIs print on BOTH tables (SIADH in the endocrine table, diarrhea in the GI table)",
    ],
  },
  recall: [
    {
      q: "The adrenocortical insufficiency row, verbatim — causal agent and note.",
      a: "HPA suppression secondary to chronic exogenous glucocorticoid use. Abrupt withdrawal of exogenous glucocorticoids leads to adrenal crisis.",
    },
    {
      q: "The gynecomastia causal agents, verbatim (six links of androgen blockade).",
      a: "Ketoconazole, cimetidine, spironolactone, GnRH analogs/antagonists, androgen receptor inhibitors, 5α-reductase inhibitors.",
    },
    {
      q: "The hyperglycemia row, verbatim — and First Aid's own red mnemonic for it.",
      a: "Tacrolimus, protease inhibitors, niacin, HCTZ, glucocorticoids — “The people need High glucose.”",
    },
    {
      q: "The hyperprolactinemia row — the five causal-agent families and the printed presentation.",
      a: "Typical antipsychotics (eg, haloperidol), atypical antipsychotics (eg, risperidone), metoclopramide, methyldopa, verapamil; presents with hypogonadism (eg, infertility, amenorrhea, erectile dysfunction) and galactorrhea.",
    },
    {
      q: "Which drug appears in BOTH thyroid rows, and which agent is exclusive to hyperthyroidism?",
      a: "Amiodarone and lithium appear in both hyperthyroidism and hypothyroidism; iodine appears only in hyperthyroidism.",
    },
    {
      q: "The SIADH row, verbatim — agents and First Aid's red mnemonic.",
      a: "Carbamazepine, Cyclophosphamide, SSRIs — “Can’t Concentrate Serum Sodium.”",
    },
    {
      q: "The diabetes insipidus causal agents — and the direction each bends the ADH axis relative to the SIADH trio.",
      a: "Lithium, demeclocycline — they BLOCK ADH (dilute polyuria, hypernatremia), while carbamazepine/cyclophosphamide/SSRIs ENHANCE ADH (water retention, hyponatremia).",
    },
    {
      q: "The hot flashes row, verbatim — and which side of the sex-steroid beam it cuts.",
      a: "SERMs (eg, tamoxifen, clomiphene, raloxifene) — the ESTROGEN side (hypothalamic estrogenic feedback stripped → vasomotor instability), the mirror of the gynecomastia row's androgen cut.",
    },
  ],
  related: [
    {
      title: "Diabetes Mellitus",
      topicId: "diabetes-mellitus",
      note:
        "The hyperglycemia row is the drug half of the diabetes content: tacrolimus, protease inhibitors, niacin, HCTZ, and glucocorticoids (“The people need High glucose”) tilt the glucose axis the same direction the diabetes notes explain — gluconeogenesis, insulin secretion, and insulin resistance — and glucocorticoid- or transplant-drug-induced hyperglycemia is a classic boards bridge between the two pages.",
    },
    {
      title: "Drug Effect Modifications",
      topicId: "drug-effect-modifications",
      note:
        "The adrenocortical insufficiency row is chronicity made visible: what changes with long-term drug exposure (here, HPA suppression) and what happens at withdrawal — the physiological cousin of tolerance and tachyphylaxis, where the axis adapts to the drug and the drug's removal, not its presence, produces the reaction.",
    },
    {
      title: "Toxicity Treatments (the antidote table)",
      topicId: "toxicity-treatments",
      note:
        "The sibling toxicities page printed immediately before this one (book 247) — the toxin-to-antidote pairs (acetaminophen → N-acetylcysteine, methanol → fomepizole, lead → EDTA/succimer) that complement this page's chronic adverse-effect rows; together they are First Aid's two faces of drug harm: the acute overdose and the slow endocrine bend.",
    },
    {
      title: "Acid-Base Physiology",
      topicId: "acid-base-physiology",
      note:
        "The water-axis rows are fluid-and-electrolyte physiology in drug form: SIADH (carbamazepine, cyclophosphamide, SSRIs) retains free water into hyponatremia while lithium and demeclocycline waste it into hypernatremic diabetes insipidus — the same ADH/collecting-duct machinery the acid-base and body-fluid notes teach, with a drug list attached.",
    },
  ],
  crossLinks: [
    {
      subject: "Endocrine physiology (the HPA axis)",
      connection:
        "The first row of the table IS the HPA axis taught in physiology, worn as a drug reaction: hypothalamic CRH → pituitary ACTH → adrenal cortisol, closed by negative feedback. Chronic exogenous glucocorticoid occupies the feedback arm (↓CRH, ↓ACTH), the zona fasciculata/reticularis loses its trophic drive, and abrupt withdrawal exposes a gland that cannot secrete — adrenal crisis. Secondary insufficiency's fingerprint (no hyperpigmentation, relatively spared mineralocorticoids) versus Addison disease is the physiology differentiator.",
    },
    {
      subject: "Reproductive endocrinology (the androgen–estrogen beam and the prolactin brake)",
      connection:
        "Three rows ride the reproductive axis: gynecomastia is the estrogen:androgen ratio shifted toward estrogen by six different androgen-cutting mechanisms (synthesis, receptor, gonadal drive, DHT); hot flashes are the hypothalamic estrogen signal stripped by SERMs — the same vasomotor instability of menopause, pharmacologically induced; and hyperprolactinemia is dopamine's tonic brake on lactotrophs lifted by D2 blockade, which simultaneously suppresses GnRH (hypogonadism: infertility, amenorrhea, erectile dysfunction) and drives milk (galactorrhea).",
    },
    {
      subject: "Renal physiology (ADH and the collecting duct)",
      connection:
        "The water rows are collecting-duct physiology with drug arrows: ADH → V2 receptors → aquaporin-2 insertion → water reabsorption. Lithium and demeclocycline make the duct unresponsive (nephrogenic diabetes insipidus — dilute polyuria, hypernatremia); carbamazepine, cyclophosphamide, and SSRIs increase ADH release (SIADH — inappropriately concentrated urine, euvolemic hyponatremia). Urine osmolality is the single measurement that separates the two directions.",
    },
    {
      subject: "Thyroid pharmacology and pathology (the amiodarone paradox)",
      connection:
        "Amiodarone's iodine load (≈37% iodine by weight) makes it the one drug that prints in both thyroid rows: the Wolff-Chaikoff effect can push toward hypothyroidism while iodine-induced hormone excess (Jod-Basedow) or destructive thyroiditis can push toward hyperthyroidism — and lithium, which blocks hormone release, joins it in both rows. Thyroid function on amiodarone is direction-agnostic until measured; the exam grades the direction, never the drug.",
    },
  ],
};
