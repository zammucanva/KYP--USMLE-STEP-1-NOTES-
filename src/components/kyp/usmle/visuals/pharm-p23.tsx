/* Pharmacology — PH-batch 23: Drug reactions—endocrine/reproductive
 * (book 248, pdf 270 — the whole page, which additionally carries the
 * complete Drug reactions—gastrointestinal table; both are owned by
 * this note per the chapter plan). Census (pdfimages): ZERO raster
 * images; the page's visual assets are the two color-coded tables —
 * VLM-read at 120dpi (staging-ph23/vlm-census.txt — VLM available
 * this session; one pass + deterministic pdftotext -bbox
 * adjudication), no margin mnemonics. This is an ORIGINAL KYP
 * ADAPTATION: the four hormone-axis routing lanes (HPA · sex-steroid
 * with its three levers · thyroid with amiodarone/lithium pushing
 * both directions · water/glucose with the ADH direction arrow),
 * every printed reaction as a chip with its causal agents and First
 * Aid's red in-cell mnemonics (The people need High glucose · I am
 * lethargic · Can’t Concentrate Serum Sodium) carried attributed; the
 * glucocorticoid withdrawal timeline (chronic exogenous steroid →
 * HPA suppression → the sleeping adrenal → abrupt withdrawal →
 * ADRENAL CRISIS, with the taper escape); the endocrine/reproductive
 * table verbatim in PRINTED row order; and the strip documenting the
 * page’s second table — Drug reactions—gastrointestinal — with its
 * eight rows and three red mnemonics. Printed quirks carried:
 * “Cyclophosphamide” capitalized mid-list, “Can’t” with the curly
 * apostrophe. Nothing is reproduced from the book; purely
 * presentational (no props, no hooks, no external images). */

export function DrugReactionEndocrineMap() {
  const w = 1102;
  const h = 1250;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Drug Reactions Endocrine and Reproductive — the four hormone-axis routing lanes (HPA, sex-steroid, thyroid, water/glucose) with all nine printed endocrine rows as chips, the glucocorticoid withdrawal timeline ending in adrenal crisis, the printed table verbatim in row order with First Aid's red in-cell mnemonics attributed, and the gastrointestinal table strip sharing book page 248 (original KYP diagram of book 248)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Drug reactions — endocrine/reproductive (book 248) — route every reaction to its hormone axis</text>
        <rect x="778" y="25" width="284" height="18" className="fill-brand-soft" />
        <text x="920" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">four hormone axes · nine printed rows</text>
      </g>

      {/* ===== ZONE A — THE FOUR HORMONE-AXIS LANES ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="392" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FOUR HORMONE-AXIS LANES — every printed row is a drug leaning on one feedback-controlled axis (original KYP routing)</text>

        {/* lane 1 — HPA */}
        <rect x="52" y="100" width="1000" height="74" rx="10" className="fill-brand-soft/30 stroke-brand" />
        <text x="64" y="116" fontSize="4.6" fontWeight="800" className="fill-brand">LANE 1 — THE HPA AXIS</text>
        <rect x="64" y="124" width="250" height="18" rx="5" className="fill-card stroke-border" />
        <text x="189" y="136.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ADRENOCORTICAL INSUFFICIENCY</text>
        <text x="326" y="133" fontSize="3.9" fontWeight="700" className="fill-foreground">HPA suppression secondary to chronic exogenous glucocorticoid use</text>
        <text x="326" y="143" fontSize="3.9" fontWeight="700" className="fill-foreground">Abrupt withdrawal of exogenous glucocorticoids leads to adrenal crisis</text>
        <text x="326" y="158" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the page’s only withdrawal-driven row — glucocorticoids ALSO print in the hyperglycemia row (double appearance)</text>
        <text x="64" y="158" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">THE ADRENAL SLEEPS —</text>
        <text x="64" y="167" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">TAPER, DON’T STOP</text>

        {/* lane 2 — sex-steroid */}
        <rect x="52" y="180" width="1000" height="96" rx="10" className="fill-card stroke-border" />
        <text x="64" y="196" fontSize="4.6" fontWeight="800" className="fill-foreground">LANE 2 — THE SEX-STEROID BEAM (three rows, three levers)</text>
        <rect x="64" y="204" width="316" height="64" rx="6" className="fill-emergency-soft/30 stroke-border" />
        <text x="72" y="216" fontSize="4" fontWeight="800" className="fill-emergency">GYNECOMASTIA — androgen removed</text>
        <text x="72" y="226" fontSize="3.4" fontWeight="700" className="fill-foreground">ketoconazole · cimetidine · spironolactone · GnRH</text>
        <text x="72" y="235" fontSize="3.4" fontWeight="700" className="fill-foreground">analogs/antagonists · androgen receptor inhibitors ·</text>
        <text x="72" y="244" fontSize="3.4" fontWeight="700" className="fill-foreground">5α-reductase inhibitors → estrogen unopposed at the breast</text>
        <text x="72" y="260" fontSize="3.3" fontWeight="800" className="fill-emergency">NO ANDROGEN SIGNAL, NEW BREAST TISSUE</text>
        <rect x="388" y="204" width="316" height="64" rx="6" className="fill-warning-soft/30 stroke-border" />
        <text x="396" y="216" fontSize="4" fontWeight="800" className="fill-warning">HOT FLASHES — estrogen effect removed</text>
        <text x="396" y="226" fontSize="3.4" fontWeight="700" className="fill-foreground">SERMs (eg, tamoxifen, clomiphene, raloxifene) —</text>
        <text x="396" y="235" fontSize="3.4" fontWeight="700" className="fill-foreground">hypothalamic estrogenic feedback stripped →</text>
        <text x="396" y="244" fontSize="3.4" fontWeight="700" className="fill-foreground">vasomotor instability (the menopausal signature)</text>
        <text x="396" y="260" fontSize="3.3" fontWeight="800" className="fill-warning">THE MIRROR LEVER OF THE SAME BEAM</text>
        <rect x="712" y="204" width="324" height="64" rx="6" className="fill-card stroke-border" />
        <text x="720" y="216" fontSize="4" fontWeight="800" className="fill-foreground">HYPERPROLACTINEMIA — D2 brake lifted</text>
        <text x="720" y="226" fontSize="3.4" fontWeight="700" className="fill-foreground">typical antipsychotics (eg, haloperidol) · atypical</text>
        <text x="720" y="235" fontSize="3.4" fontWeight="700" className="fill-foreground">antipsychotics (eg, risperidone) · metoclopramide ·</text>
        <text x="720" y="244" fontSize="3.4" fontWeight="700" className="fill-foreground">methyldopa · verapamil → ↑ prolactin</text>
        <text x="720" y="260" fontSize="3.3" fontWeight="700" className="fill-muted-foreground">printed presentation: hypogonadism (eg, infertility, amenorrhea, erectile dysfunction) + galactorrhea</text>

        {/* lane 3 — thyroid */}
        <rect x="52" y="282" width="1000" height="68" rx="10" className="fill-card stroke-border" />
        <text x="64" y="298" fontSize="4.6" fontWeight="800" className="fill-foreground">LANE 3 — THE THYROID AXIS (one drug, both directions)</text>
        <rect x="64" y="306" width="484" height="36" rx="6" className="fill-warning-soft/40 stroke-warning" />
        <text x="72" y="319" fontSize="4" fontWeight="800" className="fill-foreground">HYPERTHYROIDISM — Amiodarone, iodine, lithium</text>
        <text x="72" y="330" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">iodine load → Jod-Basedow-type excess / thyroiditis release</text>
        <rect x="556" y="306" width="496" height="36" rx="6" className="fill-brand-soft/40 stroke-brand" />
        <text x="564" y="319" fontSize="4" fontWeight="800" className="fill-foreground">HYPOTHYROIDISM — Amiodarone, lithium</text>
        <text x="564" y="330" fontSize="3.4" fontWeight="700" className="fill-emergency">“I am lethargic” (“I am” = Amiodarone, “lethargic” = Lithium)</text>
        <text x="548" y="326" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">⇄</text>
        <text x="64" y="348" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">amiodarone and lithium print in BOTH rows — only iodine is exclusive to hyperthyroidism; never answer direction from the drug name alone</text>

        {/* lane 4 — water/glucose */}
        <rect x="52" y="356" width="1000" height="94" rx="10" className="fill-card stroke-border" />
        <text x="64" y="372" fontSize="4.6" fontWeight="800" className="fill-foreground">LANE 4 — THE WATER/GLUCOSE AXES (the ADH direction arrow + the diabetogenic list)</text>
        <rect x="64" y="380" width="316" height="62" rx="6" className="fill-card stroke-border" />
        <text x="72" y="392" fontSize="4" fontWeight="800" className="fill-foreground">DIABETES INSIPIDUS — ADH ↓ blocked</text>
        <text x="72" y="402" fontSize="3.4" fontWeight="700" className="fill-foreground">Lithium, demeclocycline — collecting duct</text>
        <text x="72" y="411" fontSize="3.4" fontWeight="700" className="fill-foreground">unresponsive → dilute polyuria, HYPERnatremia</text>
        <text x="72" y="431" fontSize="3.3" fontWeight="800" className="fill-brand">ADH DOWN DILUTES</text>
        <rect x="388" y="380" width="316" height="62" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="396" y="392" fontSize="4" fontWeight="800" className="fill-foreground">SIADH — ADH ↑ enhanced</text>
        <text x="396" y="402" fontSize="3.4" fontWeight="700" className="fill-foreground">Carbamazepine, Cyclophosphamide, SSRIs — water</text>
        <text x="396" y="411" fontSize="3.4" fontWeight="700" className="fill-foreground">retained, concentrated urine, HYPOnatremia</text>
        <text x="396" y="431" fontSize="3.3" fontWeight="800" className="fill-emergency">“Can’t Concentrate Serum Sodium” · ADH UP DROWNS</text>
        <rect x="712" y="380" width="324" height="62" rx="6" className="fill-card stroke-border" />
        <text x="720" y="392" fontSize="4" fontWeight="800" className="fill-foreground">HYPERGLYCEMIA — the diabetogenic list</text>
        <text x="720" y="402" fontSize="3.4" fontWeight="700" className="fill-foreground">Tacrolimus, protease inhibitors, niacin, HCTZ,</text>
        <text x="720" y="411" fontSize="3.4" fontWeight="700" className="fill-foreground">glucocorticoids (glucocorticoids print twice)</text>
        <text x="720" y="431" fontSize="3.3" fontWeight="800" className="fill-emergency">“The people need High glucose” (T·P·N·H·G)</text>
      </g>

      {/* ===== ZONE B — THE WITHDRAWAL TIMELINE ===== */}
      <g>
        <rect x="36" y="470" width="1030" height="150" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="492" fontSize="5.4" fontWeight="800" className="fill-foreground">THE WITHDRAWAL TIMELINE — how the HPA row becomes adrenal crisis (book 248, printed note verbatim)</text>
        <rect x="52" y="502" width="188" height="40" rx="6" className="fill-card stroke-border" />
        <text x="146" y="517" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">CHRONIC EXOGENOUS</text>
        <text x="146" y="527" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">GLUCOCORTICOID</text>
        <line x1="240" y1="522" x2="268" y2="522" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 264 518 L 274 522 L 264 526 Z" className="fill-foreground" />
        <rect x="276" y="502" width="196" height="40" rx="6" className="fill-card stroke-border" />
        <text x="374" y="517" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">NEGATIVE FEEDBACK</text>
        <text x="374" y="527" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">↓ CRH → ↓ ACTH</text>
        <line x1="472" y1="522" x2="500" y2="522" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 496 518 L 506 522 L 496 526 Z" className="fill-foreground" />
        <rect x="508" y="502" width="216" height="40" rx="6" className="fill-card stroke-border" />
        <text x="616" y="515" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">THE SLEEPING ADRENAL</text>
        <text x="616" y="525" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">zona fasciculata/reticularis atrophy</text>
        <text x="616" y="535" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">suppressed, not destroyed</text>
        <line x1="724" y1="522" x2="752" y2="522" className="stroke-emergency" strokeWidth="1.4" />
        <path d="M 748 518 L 758 522 L 748 526 Z" className="fill-emergency" />
        <rect x="760" y="502" width="140" height="40" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="830" y="517" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-emergency">ABRUPT</text>
        <text x="830" y="527" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-emergency">WITHDRAWAL</text>
        <line x1="900" y1="522" x2="928" y2="522" className="stroke-emergency" strokeWidth="1.4" />
        <path d="M 924 518 L 934 522 L 924 526 Z" className="fill-emergency" />
        <rect x="936" y="502" width="100" height="40" rx="6" className="fill-emergency stroke-emergency" />
        <text x="986" y="519" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-card">ADRENAL</text>
        <text x="986" y="530" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-card">CRISIS</text>
        <rect x="52" y="550" width="664" height="58" rx="6" className="fill-card stroke-border" />
        <text x="60" y="564" fontSize="3.8" fontWeight="800" className="fill-foreground">GLUCOCORTICOID DEFICIENCY UNDER STRESS (no drug, no ACTH, no cortisol for weeks)</text>
        <text x="60" y="575" fontSize="3.6" fontWeight="700" className="fill-foreground">hypotension · vomiting · hypoglycemia · hyponatremia · weakness · shock</text>
        <text x="60" y="589" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">secondary pattern: ACTH suppressed → NO hyperpigmentation; zona glomerulosa relatively spared → potassium typically normal</text>
        <rect x="724" y="550" width="312" height="58" rx="6" className="fill-brand-soft/40 stroke-brand" />
        <text x="732" y="564" fontSize="3.8" fontWeight="800" className="fill-brand">THE PREVENTION — TAPER, DON’T STOP</text>
        <text x="732" y="575" fontSize="3.5" fontWeight="700" className="fill-foreground">slow withdrawal lets CRH → ACTH → cortical recovery reawaken the axis first;</text>
        <text x="732" y="585" fontSize="3.5" fontWeight="700" className="fill-foreground">stress-dose steroids for surgery/illness while the axis sleeps</text>
      </g>

      {/* ===== ZONE C — THE PRINTED TABLE, VERBATIM ===== */}
      <g>
        <rect x="36" y="626" width="1030" height="420" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="648" fontSize="5.4" fontWeight="800" className="fill-foreground">BOOK 248 — THE PRINTED TABLE, VERBATIM (nine rows, PRINTED order; red text = First Aid’s own in-cell mnemonics, attributed)</text>
        <rect x="52" y="656" width="184" height="20" className="fill-brand-soft stroke-brand" />
        <text x="144" y="669.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">DRUG REACTION</text>
        <rect x="240" y="656" width="420" height="20" className="fill-brand-soft stroke-brand" />
        <text x="450" y="669.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">CAUSAL AGENTS</text>
        <rect x="664" y="656" width="372" height="20" className="fill-brand-soft stroke-brand" />
        <text x="850" y="669.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">NOTES</text>
        {/* row 1 */}
        <rect x="52" y="678" width="184" height="40" className="fill-card stroke-border" />
        <text x="60" y="694" fontSize="3.6" fontWeight="800" className="fill-foreground">Adrenocortical</text>
        <text x="60" y="704" fontSize="3.6" fontWeight="800" className="fill-foreground">insufficiency</text>
        <rect x="240" y="678" width="420" height="40" className="fill-card stroke-border" />
        <text x="248" y="694" fontSize="3.5" fontWeight="700" className="fill-foreground">HPA suppression secondary to chronic</text>
        <text x="248" y="704" fontSize="3.5" fontWeight="700" className="fill-foreground">exogenous glucocorticoid use</text>
        <rect x="664" y="678" width="372" height="40" className="fill-card stroke-border" />
        <text x="672" y="694" fontSize="3.5" fontWeight="700" className="fill-foreground">Abrupt withdrawal of exogenous</text>
        <text x="672" y="704" fontSize="3.5" fontWeight="700" className="fill-foreground">glucocorticoids leads to adrenal crisis</text>
        {/* row 2 */}
        <rect x="52" y="718" width="184" height="40" className="fill-card stroke-border" />
        <text x="60" y="734" fontSize="3.6" fontWeight="800" className="fill-foreground">Diabetes insipidus</text>
        <rect x="240" y="718" width="420" height="40" className="fill-card stroke-border" />
        <text x="248" y="734" fontSize="3.5" fontWeight="700" className="fill-foreground">Lithium, demeclocycline</text>
        <rect x="664" y="718" width="372" height="40" className="fill-card stroke-border" />
        <text x="672" y="734" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">— (no printed note)</text>
        {/* row 3 */}
        <rect x="52" y="758" width="184" height="40" className="fill-card stroke-border" />
        <text x="60" y="774" fontSize="3.6" fontWeight="800" className="fill-foreground">Gynecomastia</text>
        <rect x="240" y="758" width="420" height="40" className="fill-card stroke-border" />
        <text x="248" y="771" fontSize="3.5" fontWeight="700" className="fill-foreground">Ketoconazole, cimetidine, spironolactone, GnRH</text>
        <text x="248" y="781" fontSize="3.5" fontWeight="700" className="fill-foreground">analogs/antagonists, androgen receptor inhibitors,</text>
        <text x="248" y="791" fontSize="3.5" fontWeight="700" className="fill-foreground">5α-reductase inhibitors</text>
        <rect x="664" y="758" width="372" height="40" className="fill-card stroke-border" />
        <text x="672" y="774" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">— (no printed note)</text>
        {/* row 4 */}
        <rect x="52" y="798" width="184" height="40" className="fill-card stroke-border" />
        <text x="60" y="814" fontSize="3.6" fontWeight="800" className="fill-foreground">Hot flashes</text>
        <rect x="240" y="798" width="420" height="40" className="fill-card stroke-border" />
        <text x="248" y="814" fontSize="3.5" fontWeight="700" className="fill-foreground">SERMs (eg, tamoxifen, clomiphene, raloxifene)</text>
        <rect x="664" y="798" width="372" height="40" className="fill-card stroke-border" />
        <text x="672" y="814" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">— (no printed note)</text>
        {/* row 5 */}
        <rect x="52" y="838" width="184" height="40" className="fill-card stroke-border" />
        <text x="60" y="854" fontSize="3.6" fontWeight="800" className="fill-foreground">Hyperglycemia</text>
        <rect x="240" y="838" width="420" height="40" className="fill-card stroke-border" />
        <text x="248" y="854" fontSize="3.5" fontWeight="700" className="fill-foreground">Tacrolimus, protease inhibitors, niacin, HCTZ,</text>
        <text x="248" y="864" fontSize="3.5" fontWeight="700" className="fill-foreground">glucocorticoids</text>
        <rect x="664" y="838" width="372" height="40" className="fill-card stroke-border" />
        <text x="672" y="850" fontSize="3.6" fontWeight="800" className="fill-emergency">“The people need High glucose”</text>
        <text x="672" y="861" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">The=Tacrolimus · people=Protease inhibitors · need=Niacin ·</text>
        <text x="672" y="870" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">High=HCTZ · glucose=Glucocorticoids</text>
        {/* row 6 */}
        <rect x="52" y="878" width="184" height="40" className="fill-card stroke-border" />
        <text x="60" y="891" fontSize="3.6" fontWeight="800" className="fill-foreground">Hyperprolactinemia</text>
        <rect x="240" y="878" width="420" height="40" className="fill-card stroke-border" />
        <text x="248" y="891" fontSize="3.5" fontWeight="700" className="fill-foreground">Typical antipsychotics (eg, haloperidol), atypical</text>
        <text x="248" y="901" fontSize="3.5" fontWeight="700" className="fill-foreground">antipsychotics (eg, risperidone), metoclopramide,</text>
        <text x="248" y="911" fontSize="3.5" fontWeight="700" className="fill-foreground">methyldopa, verapamil</text>
        <rect x="664" y="878" width="372" height="40" className="fill-card stroke-border" />
        <text x="672" y="891" fontSize="3.5" fontWeight="700" className="fill-foreground">Presents with hypogonadism (eg, infertility,</text>
        <text x="672" y="901" fontSize="3.5" fontWeight="700" className="fill-foreground">amenorrhea, erectile dysfunction)</text>
        <text x="672" y="911" fontSize="3.5" fontWeight="700" className="fill-foreground">and galactorrhea</text>
        {/* row 7 */}
        <rect x="52" y="918" width="184" height="40" className="fill-card stroke-border" />
        <text x="60" y="934" fontSize="3.6" fontWeight="800" className="fill-foreground">Hyperthyroidism</text>
        <rect x="240" y="918" width="420" height="40" className="fill-card stroke-border" />
        <text x="248" y="934" fontSize="3.5" fontWeight="700" className="fill-foreground">Amiodarone, iodine, lithium</text>
        <rect x="664" y="918" width="372" height="40" className="fill-card stroke-border" />
        <text x="672" y="934" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">— (no printed note)</text>
        {/* row 8 */}
        <rect x="52" y="958" width="184" height="40" className="fill-card stroke-border" />
        <text x="60" y="974" fontSize="3.6" fontWeight="800" className="fill-foreground">Hypothyroidism</text>
        <rect x="240" y="958" width="420" height="40" className="fill-card stroke-border" />
        <text x="248" y="974" fontSize="3.5" fontWeight="700" className="fill-foreground">Amiodarone, lithium</text>
        <rect x="664" y="958" width="372" height="40" className="fill-card stroke-border" />
        <text x="672" y="968" fontSize="3.6" fontWeight="800" className="fill-emergency">“I am lethargic”</text>
        <text x="672" y="979" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">“I am” = Amiodarone · “lethargic” = Lithium</text>
        {/* row 9 */}
        <rect x="52" y="998" width="184" height="40" className="fill-card stroke-border" />
        <text x="60" y="1014" fontSize="3.6" fontWeight="800" className="fill-foreground">SIADH</text>
        <rect x="240" y="998" width="420" height="40" className="fill-card stroke-border" />
        <text x="248" y="1014" fontSize="3.5" fontWeight="700" className="fill-foreground">Carbamazepine, Cyclophosphamide, SSRIs</text>
        <rect x="664" y="998" width="372" height="40" className="fill-card stroke-border" />
        <text x="672" y="1010" fontSize="3.6" fontWeight="800" className="fill-emergency">“Can’t Concentrate Serum Sodium”</text>
        <text x="672" y="1021" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">Can’t=Carbamazepine · Concentrate=Cyclophosphamide (capital C</text>
        <text x="672" y="1030" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">prints mid-list) · Serum Sodium=SSRIs</text>
      </g>

      {/* ===== ZONE D — THE PAGE'S SECOND TABLE (GI STRIP) ===== */}
      <g>
        <rect x="36" y="1052" width="1030" height="138" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1074" fontSize="5.4" fontWeight="800" className="fill-foreground">THE PAGE’S SECOND TABLE — “Drug reactions—gastrointestinal” (8 rows, complete on book 248; owned by this note, carried verbatim in the table block)</text>
        <rect x="52" y="1082" width="496" height="50" rx="6" className="fill-card stroke-border" />
        <text x="60" y="1095" fontSize="3.5" fontWeight="800" className="fill-foreground">Acute cholestatic hepatitis, jaundice — Macrolides (eg, erythromycin)</text>
        <text x="60" y="1105" fontSize="3.4" fontWeight="700" className="fill-foreground">Constipation — antimuscarinics (eg, atropine), antipsychotics, opioids, non-dihydropyridine CCBs,</text>
        <text x="60" y="1114" fontSize="3.4" fontWeight="700" className="fill-foreground">ranolazine, amiodarone, aluminum hydroxide, loperamide, 5HT3 receptor antagonist (ondansetron), vincristine</text>
        <text x="60" y="1124" fontSize="3.4" fontWeight="700" className="fill-foreground">Diarrhea — acamprosate, antidiabetic agents (acarbose, metformin, pramlintide), colchicine, cholinesterase</text>
        <text x="60" y="1131" fontSize="3.4" fontWeight="700" className="fill-foreground">inhibitors, lipid-lowering agents (eg, ezetimibe, orlistat), macrolides, SSRIs, chemotherapy (eg, irinotecan)</text>
        <rect x="556" y="1082" width="480" height="50" rx="6" className="fill-card stroke-border" />
        <text x="564" y="1095" fontSize="3.5" fontWeight="800" className="fill-foreground">Focal to massive hepatic necrosis — Amanita phalloides, valproate, acetaminophen</text>
        <text x="564" y="1105" fontSize="3.5" fontWeight="800" className="fill-foreground">Hepatitis — isoniazid, rifampin, pyrazinamide, statins, fibrates</text>
        <text x="564" y="1114" fontSize="3.4" fontWeight="800" className="fill-emergency">“I referred patient serum (AST, ALT) for hepatitis”</text>
        <text x="564" y="1124" fontSize="3.4" fontWeight="700" className="fill-foreground">Pancreatitis — diuretics (eg, furosemide, HCTZ), glucocorticoids, alcohol, valproate, azathioprine</text>
        <text x="564" y="1131" fontSize="3.4" fontWeight="800" className="fill-emergency">“Drugs generate a violent abdominal distress”</text>
        <rect x="52" y="1138" width="496" height="46" rx="6" className="fill-card stroke-border" />
        <text x="60" y="1151" fontSize="3.5" fontWeight="800" className="fill-foreground">Medication-induced esophagitis — potassium chloride, NSAIDs, bisphosphonates, ferrous sulfate, tetracyclines</text>
        <text x="60" y="1161" fontSize="3.4" fontWeight="800" className="fill-emergency">“Pills Not beneficial for food tube” (printed inside the CAUSAL AGENTS cell — a documented quirk)</text>
        <text x="60" y="1170" fontSize="3.4" fontWeight="700" className="fill-foreground">NOTES: at anatomic sites of esophageal narrowing (eg, near aortic arch); upright posture + water minimizes</text>
        <rect x="556" y="1138" width="480" height="46" rx="6" className="fill-card stroke-border" />
        <text x="564" y="1151" fontSize="3.5" fontWeight="800" className="fill-foreground">Pseudomembranous colitis — ampicillin, cephalosporins, clindamycin,</text>
        <text x="564" y="1161" fontSize="3.5" fontWeight="800" className="fill-foreground">fluoroquinolones, PPIs</text>
        <text x="564" y="1170" fontSize="3.4" fontWeight="700" className="fill-foreground">NOTES: antibiotics predispose to superinfection by resistant C difficile</text>
        <text x="564" y="1179" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">SSRIs print on BOTH tables: SIADH (endocrine) and diarrhea (GI)</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1198" width="1054" height="44" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1215" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 270 / book 248 (Pharmacology — Toxicities and Adverse Effects: Drug reactions—endocrine/reproductive)</text>
        <text x="42" y="1226" fontSize="4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the page’s assets are the two color-coded tables, VLM-read at 120dpi (glm-4.6v, staging-ph23/vlm-census.txt), no margin mnemonics. This diagram is</text>
        <text x="42" y="1236" fontSize="4" className="fill-muted-foreground">an ORIGINAL KYP ADAPTATION — every reaction, causal agent, note, and red in-cell mnemonic preserved (attributed); both tables are also carried verbatim in the note’s table blocks.</text>
      </g>
    </svg>
  );
}
