/* Public Health — PUBH batch 4, topic pubh26: Insurance plans, payment
 * models, and Medicare vs Medicaid (FULL pdf page 299 / book 277 — the SECOND
 * content page of the HEALTHCARE DELIVERY subsection; pdf 298 / book 276 is
 * the subsection opener). The page carries THREE blocks, all owned: (1) the
 * "Major medical insurance plans" table — SIX rows in printed order (EPO,
 * HMO, PoS, PPO, ACO, HDHP); (2) the "Healthcare payment models" table —
 * FIVE rows in printed order (Bundled payment, Capitation, Discounted
 * fee-for-service, Fee-for-service, Global payment); (3) the "Medicare and
 * Medicaid" block — left column the paragraph (Social Security Act
 * amendments; Medicare ≥65 / <65 certain disabilities / ESRD; Medicaid joint
 * federal and state for limited income and/or resources), right column First
 * Aid's OWN mnemonic panel ("MedicarE is for Elderly." / "MedicaiD is for
 * Disadvantaged." / "The 4 parts of Medicare:" A Admissions · B Basic bills ·
 * C Combo · D Drugs). Census (pdfimages): ZERO raster images — three
 * text/vector tables + the indd footer slug; all three assets are ORIGINAL
 * KYP ADAPTATIONS (this registry visual re-lays the plans as a network-rules
 * grid, the payment models as risk-ladder flow cards, and the Medicare/
 * Medicaid block as a split panel — the layouts are KYP's, every printed
 * label is preserved). VLM-read at 120dpi + TWO 240dpi zoom passes
 * (staging-pubh26/vlm-census.txt): the mnemonic keyword letters print in RED
 * with black connecting words (drawn here in the emergency tone with
 * attribution tags — the 120dpi full-page pass had called the panel plain
 * black, the zoom passes govern); the Part lines carry square light-blue
 * bullets (the text layer extracts them as a control byte + the U+2598
 * quarter-block glyph); the mnemonic panel is the block's RIGHT COLUMN, not
 * a page-margin element; the Medicare/Medicaid block is TEXT-ONLY (no
 * artwork, flag, or image); both table titles print in bold dark teal/green
 * with dotted hairline row separators. Grid honesty: the page prints NO
 * referral or cost rule for EPO and NO network/referral rules for ACO or
 * HDHP — those grid cells are marked "— not printed" (documented silence),
 * never invented. The payment cards sit on the KYP RISK LADDER (arranged by
 * unit of payment: per service → discounted → divided → per incident → per
 * patient per period); the printed table's own order is alphabetical and is
 * carried verbatim in the note's table blocks. Nothing is reproduced from
 * the book; purely presentational (no props, no hooks, no external
 * images). */

export const InsuranceModelsMap = () => {
  const w = 1102;
  const h = 1350;

  /* A status chip — the grid's per-axis verdict, colored by the verdict
   * (locked/gated = warning tone, open/low-cost = success tone, brand for
   * the provider-side row, muted for page-silent cells). */
  const chip = (
    x: number,
    y: number,
    label: string,
    cls: string,
    textCls: string,
    width: number,
    key: string
  ) => (
    <g key={key}>
      <rect x={x} y={y} width={width} height="13" rx="5" className={cls} />
      <text x={x + width / 2} y={y + 9.4} textAnchor="middle" fontSize="2.6" fontWeight="800" className={textCls}>
        {label}
      </text>
    </g>
  );

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      role="img"
      aria-label="Insurance plans payment models — the six major medical insurance plans as a network-referral-cost grid (exclusive provider organization requiring in-network care with out-of-network coverage available for emergencies; health maintenance organization with lower premiums, in-network providers only, primary care referral for specialists, and lower out-of-pocket cost; point of service combining HMO and PPO, allowing out-of-network care at higher cost, requiring primary care referrals; preferred provider organization with flexibility for in-network and out-of-network care, higher cost for out-of-network services, no referral requirement; accountable care organization as a group of providers who voluntarily coordinate care for Medicare patients; high deductible health plan with low premiums, high out-of-pocket cost, compatible with a health savings account), the five healthcare payment models as flow cards on a risk ladder (fee-for-service paying for each individual service; discounted fee-for-service paying per service at a rate predetermined by providers and payers such as PPOs; bundled payment as a set amount per service regardless of ultimate cost divided among all providers and facilities involved; global payment as one payment for all expenses of a single incident of care, most commonly elective surgeries covering surgery plus pre- and postoperative visits; capitation as a set amount per patient per period of time regardless of use, used by some HMOs), and the Medicare versus Medicaid split panel (Medicare available to patients 65 or older, under 65 with certain disabilities, and those with end-stage renal disease, with parts A hospital Admissions including hospice and skilled nursing, B Basic medical bills such as physician fees and diagnostic testing, C the A plus B Combo delivered by approved private companies, D prescription Drugs, and First Aid's own mnemonic MedicarE is for Elderly; Medicaid as joint federal and state health assistance for people with limited income and/or resources with First Aid's own mnemonic MedicaiD is for Disadvantaged; both federal social healthcare programs that originated from amendments to the Social Security Act) — an original KYP diagram of book 277."
      className="min-w-[1060px]"
    >
      <title>Insurance plans, payment models, and Medicare vs Medicaid</title>
      <desc>
        The six major medical insurance plans as a network-rules grid (network, referral, and premium-vs-out-of-pocket columns; page-silent cells marked), the five healthcare payment models as flow cards on a payer-to-provider risk ladder arranged by unit of payment, and the Medicare/Medicaid split panel with the four A-B-C-D Medicare parts and First Aid's own E/D mnemonics attributed.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Insurance plans, payment models, and Medicare vs Medicaid — the whole of book 277 in one diagram</text>
        <rect x="852" y="25" width="210" height="18" rx="6" className="fill-brand-soft" />
        <text x="957" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">6 plans · 5 models · 2 programs</text>
      </g>

      {/* ===== ZONE A — THE SIX PLANS: THE NETWORK–REFERRAL–COST GRID ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="470" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE SIX MAJOR MEDICAL INSURANCE PLANS — the network–referral–cost grid (PRINTED order)</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">every cell below is the print&apos;s own rule; “—” marks where the page prints no rule (documented silence — the exam tests the printed row)</text>

        {/* column headers + hairline */}
        <text x="58" y="120" fontSize="2.8" fontWeight="800" className="fill-muted-foreground">PLAN</text>
        <text x="224" y="120" fontSize="2.8" fontWeight="800" className="fill-muted-foreground">NETWORK RULE — whom can the member see?</text>
        <text x="496" y="120" fontSize="2.8" fontWeight="800" className="fill-muted-foreground">REFERRAL RULE — who gates the specialist?</text>
        <text x="766" y="120" fontSize="2.8" fontWeight="800" className="fill-muted-foreground">COST SEE-SAW — premiums vs out-of-pocket</text>
        <line x1="44" y1="128" x2="1054" y2="128" className="stroke-border" strokeWidth="1" />

        {/* ROW 1 — EPO */}
        <g>
          <rect x="44" y="138" width="1010" height="56" rx="8" className="fill-card stroke-border" />
          <line x1="212" y1="144" x2="212" y2="188" className="stroke-border" strokeWidth="1" />
          <line x1="484" y1="144" x2="484" y2="188" className="stroke-border" strokeWidth="1" />
          <line x1="754" y1="144" x2="754" y2="188" className="stroke-border" strokeWidth="1" />
          <rect x="54" y="146" width="58" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="83" y="157.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">EPO</text>
          <text x="54" y="180" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Exclusive provider organization</text>
          {chip(222, 146, "IN-NETWORK ONLY", "fill-warning-soft/50 stroke-warning", "fill-warning", 108, "epo-net")}
          <text x="222" y="174" fontSize="2.6" fontWeight="700" className="fill-foreground/80">Requires in-network care; out-of-network</text>
          <text x="222" y="184" fontSize="2.6" fontWeight="700" className="fill-foreground/80">coverage available for emergencies.</text>
          <text x="496" y="158" fontSize="2.8" fontWeight="800" className="fill-muted-foreground">— not printed</text>
          <text x="496" y="180" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">the EPO row is a pure network rule</text>
          <text x="766" y="158" fontSize="2.8" fontWeight="800" className="fill-muted-foreground">— not printed</text>
          <text x="766" y="180" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">no premium / out-of-pocket rule in the row</text>
        </g>

        {/* ROW 2 — HMO */}
        <g>
          <rect x="44" y="200" width="1010" height="56" rx="8" className="fill-card stroke-border" />
          <line x1="212" y1="206" x2="212" y2="250" className="stroke-border" strokeWidth="1" />
          <line x1="484" y1="206" x2="484" y2="250" className="stroke-border" strokeWidth="1" />
          <line x1="754" y1="206" x2="754" y2="250" className="stroke-border" strokeWidth="1" />
          <rect x="54" y="208" width="58" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="83" y="219.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">HMO</text>
          <text x="54" y="242" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Health maintenance organization</text>
          {chip(222, 208, "IN-NETWORK ONLY", "fill-warning-soft/50 stroke-warning", "fill-warning", 108, "hmo-net")}
          <text x="222" y="236" fontSize="2.6" fontWeight="700" className="fill-foreground/80">Limited to in-network providers —</text>
          <text x="222" y="246" fontSize="2.6" fontWeight="700" className="fill-foreground/80">the network is closed.</text>
          {chip(496, 208, "REFERRAL REQUIRED", "fill-warning-soft/50 stroke-warning", "fill-warning", 122, "hmo-ref")}
          <text x="496" y="236" fontSize="2.6" fontWeight="700" className="fill-foreground/80">Requires primary care referral</text>
          <text x="496" y="246" fontSize="2.6" fontWeight="700" className="fill-foreground/80">for specialists — the gate.</text>
          {chip(766, 208, "BOTH ENDS LOW", "fill-success-soft/50 stroke-success", "fill-success", 96, "hmo-cost")}
          <text x="766" y="236" fontSize="2.6" fontWeight="700" className="fill-foreground/80">Lower premiums · lower out-of-pocket</text>
          <text x="766" y="246" fontSize="2.6" fontWeight="700" className="fill-foreground/80">cost — the only row printing both low.</text>
        </g>

        {/* ROW 3 — PoS */}
        <g>
          <rect x="44" y="262" width="1010" height="56" rx="8" className="fill-card stroke-border" />
          <line x1="212" y1="268" x2="212" y2="312" className="stroke-border" strokeWidth="1" />
          <line x1="484" y1="268" x2="484" y2="312" className="stroke-border" strokeWidth="1" />
          <line x1="754" y1="268" x2="754" y2="312" className="stroke-border" strokeWidth="1" />
          <rect x="54" y="270" width="58" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="83" y="281.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">PoS</text>
          <text x="54" y="304" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Point of service</text>
          {chip(222, 270, "HYBRID (HMO + PPO)", "fill-warning-soft/50 stroke-warning", "fill-warning", 126, "pos-net")}
          <text x="222" y="298" fontSize="2.6" fontWeight="700" className="fill-foreground/80">Combination of HMO and PPO; allows</text>
          <text x="222" y="308" fontSize="2.6" fontWeight="700" className="fill-foreground/80">out-of-network care at higher cost.</text>
          {chip(496, 270, "REFERRAL REQUIRED", "fill-warning-soft/50 stroke-warning", "fill-warning", 122, "pos-ref")}
          <text x="496" y="298" fontSize="2.6" fontWeight="700" className="fill-foreground/80">Requires primary care referrals —</text>
          <text x="496" y="308" fontSize="2.6" fontWeight="700" className="fill-foreground/80">the gate never comes off.</text>
          {chip(766, 270, "OUT-OF-NETWORK COSTS MORE", "fill-warning-soft/50 stroke-warning", "fill-warning", 168, "pos-cost")}
          <text x="766" y="298" fontSize="2.6" fontWeight="700" className="fill-foreground/80">The printed price of the escape</text>
          <text x="766" y="308" fontSize="2.6" fontWeight="700" className="fill-foreground/80">hatch — out-of-network at higher cost.</text>
        </g>

        {/* ROW 4 — PPO */}
        <g>
          <rect x="44" y="324" width="1010" height="56" rx="8" className="fill-card stroke-border" />
          <line x1="212" y1="330" x2="212" y2="374" className="stroke-border" strokeWidth="1" />
          <line x1="484" y1="330" x2="484" y2="374" className="stroke-border" strokeWidth="1" />
          <line x1="754" y1="330" x2="754" y2="374" className="stroke-border" strokeWidth="1" />
          <rect x="54" y="332" width="58" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="83" y="343.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">PPO</text>
          <text x="54" y="366" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Preferred provider organization</text>
          {chip(222, 332, "BOTH NETWORKS", "fill-success-soft/50 stroke-success", "fill-success", 102, "ppo-net")}
          <text x="222" y="360" fontSize="2.6" fontWeight="700" className="fill-foreground/80">Flexibility with in-network and</text>
          <text x="222" y="370" fontSize="2.6" fontWeight="700" className="fill-foreground/80">out-of-network care.</text>
          {chip(496, 332, "NO REFERRAL NEEDED", "fill-success-soft/50 stroke-success", "fill-success", 128, "ppo-ref")}
          <text x="496" y="360" fontSize="2.6" fontWeight="700" className="fill-foreground/80">“No referral requirement” — direct</text>
          <text x="496" y="370" fontSize="2.6" fontWeight="700" className="fill-foreground/80">specialist access; only row printing it.</text>
          {chip(766, 332, "OUT-OF-NETWORK COSTS MORE", "fill-warning-soft/50 stroke-warning", "fill-warning", 168, "ppo-cost")}
          <text x="766" y="360" fontSize="2.6" fontWeight="700" className="fill-foreground/80">Higher cost for out-of-network</text>
          <text x="766" y="370" fontSize="2.6" fontWeight="700" className="fill-foreground/80">services — the freedom is priced.</text>
        </g>

        {/* ROW 5 — ACO */}
        <g>
          <rect x="44" y="386" width="1010" height="56" rx="8" className="fill-card stroke-border" />
          <line x1="212" y1="392" x2="212" y2="436" className="stroke-border" strokeWidth="1" />
          <line x1="484" y1="392" x2="484" y2="436" className="stroke-border" strokeWidth="1" />
          <line x1="754" y1="392" x2="754" y2="436" className="stroke-border" strokeWidth="1" />
          <rect x="54" y="394" width="58" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="83" y="405.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">ACO</text>
          <text x="54" y="428" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Accountable care organization</text>
          {chip(222, 394, "PROVIDER GROUP · MEDICARE", "fill-brand/15 stroke-brand/50", "fill-brand", 160, "aco-net")}
          <text x="222" y="422" fontSize="2.6" fontWeight="700" className="fill-foreground/80">Group of providers who voluntarily coordinate</text>
          <text x="222" y="432" fontSize="2.6" fontWeight="700" className="fill-foreground/80">care for Medicare patients.</text>
          <text x="496" y="406" fontSize="2.8" fontWeight="800" className="fill-muted-foreground">— not printed</text>
          <text x="496" y="428" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">a provider-side row, not a member network rule</text>
          <text x="766" y="406" fontSize="2.8" fontWeight="800" className="fill-muted-foreground">— not printed</text>
          <text x="766" y="428" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">no cost rule in the row</text>
        </g>

        {/* ROW 6 — HDHP */}
        <g>
          <rect x="44" y="448" width="1010" height="56" rx="8" className="fill-card stroke-border" />
          <line x1="212" y1="454" x2="212" y2="498" className="stroke-border" strokeWidth="1" />
          <line x1="484" y1="454" x2="484" y2="498" className="stroke-border" strokeWidth="1" />
          <line x1="754" y1="454" x2="754" y2="498" className="stroke-border" strokeWidth="1" />
          <rect x="54" y="456" width="58" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="83" y="467.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">HDHP</text>
          <text x="54" y="490" fontSize="2.5" fontWeight="700" className="fill-foreground/80">High deductible health plan</text>
          <text x="222" y="468" fontSize="2.8" fontWeight="800" className="fill-muted-foreground">— not printed</text>
          <text x="222" y="490" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">a cost design, not a network rule</text>
          <text x="496" y="468" fontSize="2.8" fontWeight="800" className="fill-muted-foreground">— not printed</text>
          <text x="496" y="490" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">no referral rule in the row</text>
          {chip(766, 456, "LOW PREMIUM · HIGH OUT-OF-POCKET", "fill-warning-soft/50 stroke-warning", "fill-warning", 196, "hdhp-cost")}
          <text x="766" y="484" fontSize="2.6" fontWeight="700" className="fill-foreground/80">Compatible with health savings</text>
          <text x="766" y="494" fontSize="2.6" fontWeight="700" className="fill-foreground/80">account (HSA) — the printed pairing.</text>
        </g>

        {/* the grid rule strip */}
        <text x="52" y="522" fontSize="3.2" fontWeight="800" className="fill-foreground">THE GRID RULE — EPO/HMO lock the network · HMO/PoS print the referral gate · PPO alone prints both networks AND no gate · HDHP plays the see-saw&apos;s far end (+HSA) · ACO coordinates providers for Medicare</text>
        <text x="52" y="533" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">Printed order EPO · HMO · PoS · PPO · ACO · HDHP; “—” cells = the page prints no rule there — the decoder marks the silences instead of inventing them.</text>
      </g>

      {/* ===== ZONE B — THE FIVE PAYMENT MODELS: THE RISK LADDER ===== */}
      <g>
        <rect x="36" y="555" width="1030" height="360" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="577" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FIVE HEALTHCARE PAYMENT MODELS — flow cards: who is paid, per what, and who bears the risk</text>
        <text x="52" y="588" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">arranged on the KYP risk ladder by unit of payment (the printed table lists the rows alphabetically — the printed order is carried verbatim in the note)</text>

        {/* CARD 1 — Fee-for-service */}
        <g>
          <rect x="52" y="600" width="848" height="52" rx="10" className="fill-card stroke-border" />
          <text x="66" y="618" fontSize="4" fontWeight="800" className="fill-brand">Fee-for-service</text>
          {chip(66, 626, "PER SERVICE", "fill-secondary stroke-border", "fill-foreground", 84, "ffs-unit")}
          <text x="300" y="618" fontSize="2.7" fontWeight="700" className="fill-foreground/80">Insurer and/or patient pays for each individual service — every visit and test bills separately;</text>
          <text x="300" y="630" fontSize="2.7" fontWeight="700" className="fill-foreground/80">total cost tracks utilization: the baseline model every other row modifies.</text>
          {chip(764, 612, "PAYER RISK", "fill-warning-soft/50 stroke-warning", "fill-warning", 92, "ffs-risk")}
          <text x="764" y="640" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">payer pays per use</text>
        </g>

        {/* CARD 2 — Discounted fee-for-service */}
        <g>
          <rect x="52" y="658" width="848" height="52" rx="10" className="fill-card stroke-border" />
          <text x="66" y="676" fontSize="4" fontWeight="800" className="fill-brand">Discounted fee-for-service</text>
          {chip(66, 684, "PER SERVICE, AT A DISCOUNT", "fill-secondary stroke-border", "fill-foreground", 168, "dffs-unit")}
          <text x="300" y="676" fontSize="2.7" fontWeight="700" className="fill-foreground/80">Same per-service unit, at a discounted rate predetermined by providers and payers</text>
          <text x="300" y="688" fontSize="2.7" fontWeight="700" className="fill-foreground/80">(eg, PPOs) — the printed bridge from payment models to the plans table.</text>
          {chip(764, 670, "PAYER RISK", "fill-warning-soft/50 stroke-warning", "fill-warning", 92, "dffs-risk")}
          <text x="764" y="698" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">price fixed in advance</text>
        </g>

        {/* CARD 3 — Bundled payment */}
        <g>
          <rect x="52" y="716" width="848" height="52" rx="10" className="fill-card stroke-border" />
          <text x="66" y="734" fontSize="4" fontWeight="800" className="fill-brand">Bundled payment</text>
          {chip(66, 742, "PER SERVICE, DIVIDED", "fill-secondary stroke-border", "fill-foreground", 140, "bund-unit")}
          <text x="300" y="734" fontSize="2.7" fontWeight="700" className="fill-foreground/80">Healthcare organization receives a set amount per service, regardless of ultimate cost,</text>
          <text x="300" y="746" fontSize="2.7" fontWeight="700" className="fill-foreground/80">to be divided among all providers and facilities involved — one payment, many hands.</text>
          {chip(764, 728, "SHARED RISK", "fill-brand/15 stroke-brand/50", "fill-brand", 98, "bund-risk")}
          <text x="764" y="756" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">org + its providers</text>
        </g>

        {/* CARD 4 — Global payment */}
        <g>
          <rect x="52" y="774" width="848" height="52" rx="10" className="fill-card stroke-border" />
          <text x="66" y="792" fontSize="4" fontWeight="800" className="fill-brand">Global payment</text>
          {chip(66, 800, "PER INCIDENT OF CARE", "fill-secondary stroke-border", "fill-foreground", 132, "glob-unit")}
          <text x="300" y="792" fontSize="2.7" fontWeight="700" className="fill-foreground/80">All expenses associated with a single incident of care with a single payment — most common in</text>
          <text x="300" y="804" fontSize="2.7" fontWeight="700" className="fill-foreground/80">elective surgeries: covers the surgery + the necessary pre- and postoperative visits.</text>
          {chip(764, 786, "PROVIDER EPISODE RISK", "fill-success-soft/50 stroke-success", "fill-success", 132, "glob-risk")}
          <text x="764" y="814" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">the provider owns the episode</text>
        </g>

        {/* CARD 5 — Capitation */}
        <g>
          <rect x="52" y="832" width="848" height="52" rx="10" className="fill-card stroke-border" />
          <text x="66" y="850" fontSize="4" fontWeight="800" className="fill-brand">Capitation</text>
          {chip(66, 858, "PER PATIENT · PER PERIOD", "fill-secondary stroke-border", "fill-foreground", 156, "cap-unit")}
          <text x="300" y="850" fontSize="2.7" fontWeight="700" className="fill-foreground/80">Physicians receive a set amount per patient assigned to them per period of time, regardless of</text>
          <text x="300" y="862" fontSize="2.7" fontWeight="700" className="fill-foreground/80">how much the patient uses the healthcare system — used by some HMOs.</text>
          {chip(764, 844, "PHYSICIAN PANEL RISK", "fill-success-soft/50 stroke-success", "fill-success", 130, "cap-risk")}
          <text x="764" y="872" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">paid the same for heavy and never-users</text>
        </g>

        {/* the risk-gradient column */}
        <g>
          <rect x="912" y="600" width="138" height="284" rx="10" className="fill-secondary/40 stroke-border" />
          <text x="981" y="616" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-foreground">WHO BEARS THE RISK?</text>
          <text x="981" y="638" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-warning">PAYER</text>
          <line x1="981" y1="650" x2="981" y2="798" className="stroke-foreground" strokeWidth="1.6" />
          <path d="M 975 796 L 981 810 L 987 796 Z" className="fill-foreground" />
          <text x="981" y="832" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-success">PROVIDER</text>
          <text x="981" y="852" textAnchor="middle" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">the wider the PER,</text>
          <text x="981" y="862" textAnchor="middle" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">the further down</text>
          <text x="981" y="872" textAnchor="middle" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">risk travels</text>
        </g>

        {/* the ladder rule strip */}
        <text x="52" y="900" fontSize="3.2" fontWeight="800" className="fill-foreground">THE LADDER RULE — per SERVICE (payer) → per service DIVIDED among all involved (shared) → per INCIDENT (provider episode) → per PATIENT-PER-PERIOD (physician panel)</text>
      </g>

      {/* ===== ZONE C — MEDICARE vs MEDICAID ===== */}
      <g>
        <rect x="36" y="930" width="1030" height="345" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="952" fontSize="5.4" fontWeight="800" className="fill-foreground">MEDICARE vs MEDICAID — the two government programs</text>
        <text x="52" y="963" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">First Aid&apos;s own mnemonics carried verbatim and attributed — the keyword letters print red in the book (VLM-adjudicated, staging-pubh26/vlm-census.txt)</text>

        {/* MEDICARE panel */}
        <g>
          <rect x="52" y="975" width="503" height="240" rx="10" className="fill-card stroke-border" />
          <text x="68" y="997" fontSize="5" fontWeight="800" className="fill-brand">MEDICARE</text>
          <rect x="424" y="984" width="118" height="16" rx="6" className="fill-brand-soft" />
          <text x="483" y="995.5" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-brand">PARTS A · B · C · D</text>
          <text x="68" y="1012" fontSize="3.2" fontWeight="800" className="fill-emergency">“MedicarE is for Elderly.” — First Aid&apos;s own</text>
          <text x="68" y="1030" fontSize="2.7" fontWeight="700" className="fill-foreground/80">Medicare is available to patients ≥65 years old, &lt;65 with certain disabilities,</text>
          <text x="68" y="1041" fontSize="2.7" fontWeight="700" className="fill-foreground/80">and those with end-stage renal disease (the ESRD door — any age).</text>
          <text x="68" y="1062" fontSize="3" fontWeight="800" className="fill-foreground">The 4 parts of Medicare:</text>
          <text x="74" y="1080" fontSize="3.2" fontWeight="800" className="fill-emergency">A</text>
          <text x="88" y="1080" fontSize="2.7" fontWeight="700" className="fill-foreground/80">hospital Admissions, including hospice, skilled nursing</text>
          <text x="74" y="1100" fontSize="3.2" fontWeight="800" className="fill-emergency">B</text>
          <text x="88" y="1100" fontSize="2.7" fontWeight="700" className="fill-foreground/80">Basic medical bills (eg, physician fees, diagnostic testing)</text>
          <text x="74" y="1120" fontSize="3.2" fontWeight="800" className="fill-emergency">C</text>
          <text x="88" y="1120" fontSize="2.7" fontWeight="700" className="fill-foreground/80">(parts A + B = Combo) delivered by approved private companies</text>
          <text x="74" y="1140" fontSize="3.2" fontWeight="800" className="fill-emergency">D</text>
          <text x="88" y="1140" fontSize="2.7" fontWeight="700" className="fill-foreground/80">prescription Drugs</text>
          <text x="68" y="1162" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">First Aid&apos;s own mnemonic panel (the block&apos;s right column in print) — the E/D and</text>
          <text x="68" y="1172" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">A/B/C/D keyword letters print red; square bullets mark the four Part lines.</text>
          <text x="68" y="1196" fontSize="2.5" fontWeight="800" className="fill-foreground">THE DOOR — age (≥65) · disability (&lt;65, certain) · disease (ESRD)</text>
        </g>

        {/* MEDICAID panel */}
        <g>
          <rect x="566" y="975" width="503" height="240" rx="10" className="fill-card stroke-border" />
          <text x="582" y="997" fontSize="5" fontWeight="800" className="fill-brand">MEDICAID</text>
          <rect x="924" y="984" width="132" height="16" rx="6" className="fill-brand-soft" />
          <text x="990" y="995.5" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-brand">MEANS, NOT AGE</text>
          <text x="582" y="1012" fontSize="3.2" fontWeight="800" className="fill-emergency">“MedicaiD is for Disadvantaged.” — First Aid&apos;s own</text>
          <text x="582" y="1030" fontSize="2.7" fontWeight="700" className="fill-foreground/80">Medicaid is joint federal and state health assistance for people with</text>
          <text x="582" y="1041" fontSize="2.7" fontWeight="700" className="fill-foreground/80">limited income and/or resources.</text>
          {chip(582, 1054, "JOINT FEDERAL + STATE", "fill-brand/15 stroke-brand/50", "fill-brand", 146, "medicaid-chip")}
          <text x="582" y="1092" fontSize="2.7" fontWeight="700" className="fill-foreground/80">THE E/D PAIR (KYP): Medicare keys on the Elderly — age ≥65, certain</text>
          <text x="582" y="1103" fontSize="2.7" fontWeight="700" className="fill-foreground/80">disabilities, ESRD; Medicaid keys on the Disadvantaged — limited income</text>
          <text x="582" y="1114" fontSize="2.7" fontWeight="700" className="fill-foreground/80">and/or resources. The page prints no age door for Medicaid.</text>
          <text x="582" y="1136" fontSize="2.5" fontWeight="800" className="fill-foreground">THE DOOR — means: limited income and/or resources</text>
          <text x="582" y="1162" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">The same mnemonic panel prints both hooks side by side — the E/D capitals</text>
          <text x="582" y="1172" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">are the exam&apos;s fastest eligibility router.</text>
        </g>

        {/* the shared-origin strip */}
        <text x="52" y="1240" fontSize="2.9" fontWeight="800" className="fill-foreground">Medicare and Medicaid—federal social healthcare programs that originated from amendments to the Social Security Act.</text>
        <text x="52" y="1253" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">Verbatim carry — the paragraph is the block&apos;s left column in print; the mnemonics are its right column (First Aid&apos;s own, keyword letters in red; the “and/or” wraps in print as “and/” + “or resources”).</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1290" width="1054" height="46" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1306" fontSize="3" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 299 / book 277 (Public Health Sciences — Healthcare Delivery: Major medical insurance plans; Healthcare payment models; Medicare and Medicaid)</text>
        <text x="42" y="1316" fontSize="2.6" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — three text/vector tables (VLM-read at 120dpi + two 240dpi zoom passes, staging-pubh26/vlm-census.txt). ORIGINAL KYP ADAPTATION — the grid, the risk ladder, and the split panel are</text>
        <text x="42" y="1326" fontSize="2.6" className="fill-muted-foreground">KYP&apos;s layouts; every printed label is preserved (6 plan rows + 5 payment rows + the Medicare/Medicaid paragraph + both mnemonics attributed) — full rows carried verbatim in the note&apos;s table blocks.</text>
        <text x="42" y="1336" fontSize="2.6" className="fill-muted-foreground">ADJUDICATION — the mnemonic panel is the block&apos;s right column; its keyword letters (E, D, and the A/B/C/D letters) print RED with black connecting words (two 240dpi zoom passes govern over the 120dpi read).</text>
      </g>
    </svg>
  );
};
