/* Public Health — PUBH batch 2, topic 18: Core ethical principles and
 * decision-making capacity (LOWER portion of pdf page 290 / book 268 — a
 * PINNED PAGE-SPLIT: the upper portion, the "Pearson correlation
 * coefficient" block, belongs to correlation-coefficient, produced in
 * parallel). The lower portion runs from the in-body "▶ PUBLIC HEALTH
 * SCIENCES—ETHICS" ribbon to the page end and carries THREE blocks, all
 * owned: (1) the "Core ethical principles" table — FOUR rows in printed
 * order (Autonomy, Beneficence, Nonmaleficence, Justice), each principle
 * name in bold blue/navy with its definition; (2) the "Decision-making
 * capacity" table — the title cell plus five paragraphs (the
 * physician-must-determine definition, the irrevocability note, the
 * not-exclusion-criteria note, and the capacity-vs-competency pair);
 * (3) the "Four major components of decision-making:" panel — four
 * blue-square-bulleted items (Understanding, Appreciation, Reasoning,
 * Expressing a choice) that print BESIDE the capacity table, not below it
 * (pdftotext -bbox: capacity text x≈181-375, components panel x≈388-590,
 * both starting y≈574; VLM-confirmed). Census (pdfimages -list on pdf
 * 290): ZERO raster images — pure text, two tables, one bulleted panel,
 * the indd footer slug; the tables are ORIGINAL KYP ADAPTATIONS: the
 * principles table re-drawn as four PILLARS (capital band + plinth per
 * card, KYP's layout, every printed label preserved) and the capacity
 * block re-composed as the capacity-vs-competency SEE-SAW plus the
 * four-components STRIP (KYP's re-arrangement of the printed side panel,
 * labeled as such on the visual). VLM-read at 120dpi
 * (staging-pubh18/vlm-census.txt): the ETHICS ribbon prints on a solid
 * teal/navy band below the Pearson correlation figure (split boundary
 * confirmed) and the banner text also prints in the running header
 * (twice on the page); "Core ethical principles" and the four principle
 * names print blue bold with hairline rules, no shading; "Principle of
 * double effect" prints bold; the "not" in "are not exclusion criteria"
 * prints italic; NO red text, mnemonics, margin notes, or images in the
 * lower portion. Adjudication documented on the visual: the VLM pass
 * transcribed the last component's question with a duplicated "to do" —
 * the text layer reads "what would you like to do?" and GOVERNS. Nothing
 * is reproduced from the book; purely presentational (no props, no
 * hooks, no external images). */

export const EthicsPrinciplesMap = () => {
  const w = 1102;
  const h = 1290;

  /* The three-verb verb-chip (Autonomy pillar) and the label-chip shapes —
   * layout is KYP's; every wording inside is the print's own. */
  const verbChip = (
    x: number,
    y: number,
    head: string,
    lines: string[],
    key: string
  ) => (
    <g key={key}>
      <rect x={x} y={y} width="150" height="70" rx="6" className="fill-secondary/40 stroke-border" />
      <text x={x + 8} y={y + 14} fontSize="3" fontWeight="800" className="fill-brand">{head}</text>
      {lines.map((l, i) => (
        <text key={i} x={x + 8} y={y + 27 + i * 10} fontSize="2.5" fontWeight="700" className="fill-foreground/70">{l}</text>
      ))}
    </g>
  );

  const conflictChip = (
    x: number,
    y: number,
    wd: number,
    head: string,
    line: string,
    key: string
  ) => (
    <g key={key}>
      <rect x={x} y={y} width={wd} height="40" rx="6" className="fill-warning-soft/50 stroke-warning" />
      <text x={x + 8} y={y + 14} fontSize="2.8" fontWeight="800" className="fill-warning">{head}</text>
      <text x={x + 8} y={y + 27} fontSize="2.4" fontWeight="700" className="fill-foreground/70">{line}</text>
    </g>
  );

  /* The four-components card — the print's blue square bullet is carried as
   * the ▘ glyph in the note's verbatim table; here the numbered card is
   * KYP's layout with the printed question verbatim. */
  const componentCard = (
    x: number,
    n: number,
    name: string,
    lines: string[],
    key: string
  ) => (
    <g key={key}>
      <rect x={x} y="1042" width="238" height="116" rx="10" className="fill-card stroke-border" />
      <circle cx={x + 24} cy="1066" r="10" className="fill-brand-soft stroke-brand" />
      <text x={x + 24} y="1069.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">{n}</text>
      <text x={x + 42} y="1070" fontSize="3.4" fontWeight="800" className="fill-brand">{name}</text>
      {lines.map((l, i) => (
        <text key={i} x={x + 14} y={1092 + i * 10} fontSize="2.5" fontWeight="700" className="fill-foreground/70">▘ {l}</text>
      ))}
    </g>
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Core ethical principles — the four pillars (autonomy: obligation to respect patients as individuals with truth-telling and confidentiality, to create conditions necessary for autonomous choice with informed consent, and to honor their preference in accepting or not accepting medical care; beneficence: do good, the physicians special ethical fiduciary duty to act in the patients best interest, colliding with autonomy where an informed patient has the right to decide and with what is best for society such as mandatory TB treatment where traditionally patient interest supersedes, plus the principle of double effect prioritizing facilitating comfort over potential side effects such as respiratory depression with opioid use for patients receiving end-of-life care; nonmaleficence: do no harm, balanced against beneficence so that if the benefits outweigh the risks a patient may make an informed decision to proceed, most surgeries and medications falling into this category; justice: to treat persons fairly and equitably, which does not always imply equally, eg triage), the decision-making capacity see-saw (capacity determined by a physician for a specific healthcare-related decision, eg to refuse medical care, with decisions made with capacity not revocable simply if the patient later loses capacity, versus competency determined by a judge, eg legally unable to make any healthcare-related decision, plus the guardrail that intellectual disabilities and mental illnesses are not exclusion criteria unless the patients condition presently impairs their ability to make healthcare decisions), and the four components of decision-making strip (understanding, appreciation, reasoning, expressing a choice, each with its printed question) — an original KYP diagram of book 268 lower." className="min-w-[1060px]">
      <title>Core ethical principles — the four pillars and the decision-making capacity gateway</title>
      <desc>
        The printed Core ethical principles table re-drawn as four pillars in printed order (Autonomy, Beneficence, Nonmaleficence, Justice — each with its printed definition, beneficence carrying its two collisions and the principle-of-double-effect callout), the Decision-making capacity block as a capacity-vs-competency see-saw (physician, one specific decision vs judge, any decision) with the two guardrails, and the four printed components of decision-making (Understanding, Appreciation, Reasoning, Expressing a choice) as a numbered strip with their bedside questions.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Core ethical principles — the four pillars and the decision-making capacity gateway</text>
        <rect x="810" y="25" width="252" height="18" rx="6" className="fill-brand-soft" />
        <text x="936" y="37.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">4 principles · capacity vs competency · 4 components</text>
      </g>

      {/* ===== ZONE A — THE FOUR PILLARS ===== */}
      <g>
        <rect x="36" y="76" width="1030" height="584" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="98" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FOUR PILLARS — the printed Core ethical principles table, re-drawn as pillars (ORIGINAL KYP ADAPTATION)</text>
        <text x="52" y="110" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">printed order: Autonomy, Beneficence, Nonmaleficence, Justice — every definition below is the print&apos;s own; the pillar layout is KYP&apos;s</text>

        {/* PILLAR 1 — Autonomy */}
        <g>
          <rect x="52" y="126" width="502" height="256" rx="10" className="fill-card stroke-border" />
          <rect x="66" y="140" width="474" height="24" rx="6" className="fill-brand-soft stroke-brand" />
          <text x="80" y="156.5" fontSize="4.6" fontWeight="800" className="fill-brand">AUTONOMY</text>
          <text x="534" y="156.5" textAnchor="end" fontSize="3" fontWeight="700" className="fill-muted-foreground">the hinge principle</text>
          <text x="80" y="176" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Obligation to respect patients as individuals (truth-telling, confidentiality), to create</text>
          <text x="80" y="187" fontSize="2.9" fontWeight="700" className="fill-foreground/80">conditions necessary for autonomous choice (informed consent), and to honor their</text>
          <text x="80" y="198" fontSize="2.9" fontWeight="700" className="fill-foreground/80">preference in accepting or not accepting medical care.</text>
          {verbChip(66, 208, "1 · RESPECT", ["patients as individuals", "truth-telling,", "confidentiality"], "auto-a")}
          {verbChip(226, 208, "2 · CREATE", ["conditions necessary", "for autonomous choice", "(informed consent)"], "auto-b")}
          {verbChip(386, 208, "3 · HONOR", ["their preference —", "accepting or NOT", "accepting medical care"], "auto-c")}
          <text x="80" y="298" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">resolves every collision the same printed way: “an informed patient has the right to decide”</text>
          <text x="80" y="310" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">— the parenthesis printed in the Beneficence row; honoring a refusal is this principle in action</text>
          <rect x="66" y="336" width="474" height="5" rx="2" className="fill-brand-soft" />
          <rect x="66" y="345" width="474" height="2.5" rx="1" className="fill-brand-soft" />
        </g>

        {/* PILLAR 2 — Beneficence (with the double-effect callout) */}
        <g>
          <rect x="566" y="126" width="502" height="256" rx="10" className="fill-card stroke-border" />
          <rect x="580" y="140" width="474" height="24" rx="6" className="fill-brand-soft stroke-brand" />
          <text x="594" y="156.5" fontSize="4.6" fontWeight="800" className="fill-brand">BENEFICENCE</text>
          <text x="1048" y="156.5" textAnchor="end" fontSize="3" fontWeight="700" className="fill-muted-foreground">“Do good.”</text>
          <text x="594" y="176" fontSize="2.9" fontWeight="700" className="fill-foreground/80">“Do good.” Physicians have a special ethical (fiduciary) duty to act in the patient’s</text>
          <text x="594" y="187" fontSize="2.9" fontWeight="700" className="fill-foreground/80">best interest. May conflict with autonomy (an informed patient has the right to decide)</text>
          <text x="594" y="198" fontSize="2.9" fontWeight="700" className="fill-foreground/80">or what is best for society (eg, mandatory TB treatment). Traditionally, patient</text>
          <text x="594" y="209" fontSize="2.9" fontWeight="700" className="fill-foreground/80">interest supersedes.</text>
          {conflictChip(580, 222, 231, "COLLIDES WITH AUTONOMY →", "an informed patient has the right to decide", "ben-a")}
          {conflictChip(823, 222, 231, "COLLIDES WITH SOCIETY →", "eg, mandatory TB treatment — patient interest supersedes", "ben-b")}
          <rect x="580" y="270" width="474" height="60" rx="8" className="fill-emergency-soft/40 stroke-emergency" />
          <text x="592" y="284" fontSize="3" fontWeight="800" className="fill-emergency">PRINCIPLE OF DOUBLE EFFECT — comfort first (printed in this row)</text>
          <text x="592" y="296" fontSize="2.5" fontWeight="700" className="fill-foreground/70">facilitating comfort is prioritized over potential side effects (eg, respiratory depression</text>
          <text x="592" y="306" fontSize="2.5" fontWeight="700" className="fill-foreground/70">with opioid use) for patients receiving end-of-life care — the intended good (comfort) is</text>
          <text x="592" y="316" fontSize="2.5" fontWeight="700" className="fill-foreground/70">prioritized over the foreseen but unintended potential harm.</text>
          <rect x="580" y="336" width="474" height="5" rx="2" className="fill-brand-soft" />
          <rect x="580" y="345" width="474" height="2.5" rx="1" className="fill-brand-soft" />
        </g>

        {/* PILLAR 3 — Nonmaleficence */}
        <g>
          <rect x="52" y="396" width="502" height="256" rx="10" className="fill-card stroke-border" />
          <rect x="66" y="410" width="474" height="24" rx="6" className="fill-brand-soft stroke-brand" />
          <text x="80" y="426.5" fontSize="4.6" fontWeight="800" className="fill-brand">NONMALEFICENCE</text>
          <text x="534" y="426.5" textAnchor="end" fontSize="3" fontWeight="700" className="fill-muted-foreground">“Do no harm.”</text>
          <text x="80" y="446" fontSize="2.9" fontWeight="700" className="fill-foreground/80">“Do no harm.” Must be balanced against beneficence; if the benefits outweigh the risks, a</text>
          <text x="80" y="457" fontSize="2.9" fontWeight="700" className="fill-foreground/80">patient may make an informed decision to proceed (most surgeries and medications fall</text>
          <text x="80" y="468" fontSize="2.9" fontWeight="700" className="fill-foreground/80">into this category).</text>
          {verbChip(66, 478, "BALANCED", ["“Do no harm.” must be", "balanced against", "beneficence (“Do good.”)"], "nm-a")}
          {verbChip(226, 478, "RISK vs BENEFIT", ["benefits outweigh", "the risks → a patient", "may make an informed", "decision to proceed"], "nm-b")}
          {verbChip(386, 478, "THE CATEGORY", ["most surgeries and", "medications fall into", "this category"], "nm-c")}
          <text x="80" y="568" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">risk alone never forbids an intervention — it triggers INFORMED CONSENT, and the capable</text>
          <text x="80" y="580" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">patient decides to proceed (the Autonomy pillar and the capacity gateway below)</text>
          <rect x="66" y="606" width="474" height="5" rx="2" className="fill-brand-soft" />
          <rect x="66" y="615" width="474" height="2.5" rx="1" className="fill-brand-soft" />
        </g>

        {/* PILLAR 4 — Justice */}
        <g>
          <rect x="566" y="396" width="502" height="256" rx="10" className="fill-card stroke-border" />
          <rect x="580" y="410" width="474" height="24" rx="6" className="fill-brand-soft stroke-brand" />
          <text x="594" y="426.5" fontSize="4.6" fontWeight="800" className="fill-brand">JUSTICE</text>
          <text x="1048" y="426.5" textAnchor="end" fontSize="3" fontWeight="700" className="fill-muted-foreground">fairly and equitably</text>
          <text x="594" y="446" fontSize="2.9" fontWeight="700" className="fill-foreground/80">To treat persons fairly and equitably. This does not always imply equally (eg, triage).</text>
          <rect x="580" y="458" width="231" height="56" rx="6" className="fill-success-soft/50 stroke-success" />
          <text x="590" y="472" fontSize="2.8" fontWeight="800" className="fill-success">FAIR + EQUITABLE</text>
          <text x="590" y="484" fontSize="2.5" fontWeight="700" className="fill-foreground/70">the distribution duty — treat</text>
          <text x="590" y="494" fontSize="2.5" fontWeight="700" className="fill-foreground/70">persons fairly and equitably</text>
          <rect x="823" y="458" width="231" height="56" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="833" y="472" fontSize="2.8" fontWeight="800" className="fill-warning">NOT ALWAYS EQUAL</text>
          <text x="833" y="484" fontSize="2.5" fontWeight="700" className="fill-foreground/70">“(eg, triage)” — the printed example:</text>
          <text x="833" y="494" fontSize="2.5" fontWeight="700" className="fill-foreground/70">sorting by need is fair without being equal</text>
          <text x="594" y="532" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the population-level overlay — where this chapter&apos;s epidemiology meets ethics:</text>
          <text x="594" y="544" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">allocating organs, vaccines, ICU beds, and clinic slots when demand outstrips supply</text>
          <rect x="580" y="606" width="474" height="5" rx="2" className="fill-brand-soft" />
          <rect x="580" y="615" width="474" height="2.5" rx="1" className="fill-brand-soft" />
        </g>
      </g>

      {/* ===== ZONE B — CAPACITY vs COMPETENCY ===== */}
      <g>
        <rect x="36" y="674" width="1030" height="306" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="696" fontSize="5.4" fontWeight="800" className="fill-foreground">DECISION-MAKING CAPACITY vs COMPETENCY — the printed capacity table as a see-saw (ORIGINAL KYP ADAPTATION)</text>
        <text x="52" y="708" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the page prints the four-components panel BESIDE this table (bbox-pinned, not below it); both print below the four principles</text>

        {/* CAPACITY card */}
        <g>
          <rect x="52" y="722" width="486" height="178" rx="10" className="fill-card stroke-success" />
          <rect x="66" y="736" width="458" height="24" rx="6" className="fill-success-soft/50 stroke-success" />
          <text x="80" y="752.5" fontSize="4" fontWeight="800" className="fill-success">CAPACITY — determined by a PHYSICIAN</text>
          <text x="80" y="772" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Physician must determine whether the patient is psychologically and legally capable of</text>
          <text x="80" y="783" fontSize="2.8" fontWeight="700" className="fill-foreground/80">making a particular healthcare decision.</text>
          <text x="80" y="799" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Capacity is determined by a physician for a specific healthcare-related decision</text>
          <text x="80" y="810" fontSize="2.8" fontWeight="700" className="fill-foreground/80">(eg, to refuse medical care).</text>
          <rect x="66" y="822" width="223" height="66" rx="6" className="fill-secondary/40 stroke-border" />
          <text x="76" y="836" fontSize="2.8" fontWeight="800" className="fill-brand">DECISION-SPECIFIC</text>
          <text x="76" y="848" fontSize="2.4" fontWeight="700" className="fill-foreground/70">one decision at a time — capacity</text>
          <text x="76" y="858" fontSize="2.4" fontWeight="700" className="fill-foreground/70">for this refusal ≠ capacity for</text>
          <text x="76" y="868" fontSize="2.4" fontWeight="700" className="fill-foreground/70">every decision (KYP)</text>
          <rect x="301" y="822" width="223" height="66" rx="6" className="fill-secondary/40 stroke-border" />
          <text x="311" y="836" fontSize="2.8" fontWeight="800" className="fill-brand">NOT REVOKED</text>
          <text x="311" y="848" fontSize="2.4" fontWeight="700" className="fill-foreground/70">decisions made with capacity</text>
          <text x="311" y="858" fontSize="2.4" fontWeight="700" className="fill-foreground/70">cannot be revoked simply if the</text>
          <text x="311" y="868" fontSize="2.4" fontWeight="700" className="fill-foreground/70">patient later loses capacity</text>
        </g>

        {/* the vs badge */}
        <circle cx="558" cy="811" r="16" className="fill-brand-soft stroke-brand" />
        <text x="558" y="815" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">vs</text>

        {/* COMPETENCY card */}
        <g>
          <rect x="578" y="722" width="474" height="178" rx="10" className="fill-card stroke-warning" />
          <rect x="592" y="736" width="446" height="24" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="606" y="752.5" fontSize="4" fontWeight="800" className="fill-warning">COMPETENCY — determined by a JUDGE</text>
          <text x="606" y="772" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Competency is determined by a judge (eg, legally unable to make any</text>
          <text x="606" y="783" fontSize="2.8" fontWeight="700" className="fill-foreground/80">healthcare-related decision).</text>
          <text x="606" y="799" fontSize="2.8" fontWeight="700" className="fill-foreground/80">the GLOBAL legal twin of the bedside assessment — a courtroom ruling</text>
          <text x="606" y="810" fontSize="2.8" fontWeight="700" className="fill-foreground/80">over ANY healthcare-related decision (KYP framing of the printed pair)</text>
          <rect x="592" y="822" width="446" height="66" rx="6" className="fill-secondary/40 stroke-border" />
          <text x="602" y="836" fontSize="2.8" fontWeight="800" className="fill-warning">ANY DECISION · FORUM = COURT</text>
          <text x="602" y="848" fontSize="2.4" fontWeight="700" className="fill-foreground/70">scope = any healthcare-related decision, determiner = a judge — vs the</text>
          <text x="602" y="858" fontSize="2.4" fontWeight="700" className="fill-foreground/70">physician&apos;s one-decision bedside call; the word “legally” in a stem</text>
          <text x="602" y="868" fontSize="2.4" fontWeight="700" className="fill-foreground/70">is the courtroom tell (KYP)</text>
        </g>

        {/* the diagnosis-is-not-destiny guardrail strip */}
        <rect x="52" y="910" width="1000" height="56" rx="8" className="fill-warning-soft/50 stroke-warning" />
        <text x="66" y="926" fontSize="3" fontWeight="800" className="fill-warning">GUARDRAIL — DIAGNOSIS IS NOT DESTINY (the print&apos;s italic “not”)</text>
        <text x="66" y="938" fontSize="2.7" fontWeight="700" className="fill-foreground/70">“Intellectual disabilities and mental illnesses are not exclusion criteria unless the patient’s condition</text>
        <text x="66" y="949" fontSize="2.7" fontWeight="700" className="fill-foreground/70">presently impairs their ability to make healthcare decisions.” — test the patient, not the chart</text>
      </g>

      {/* ===== ZONE C — THE FOUR COMPONENTS ===== */}
      <g>
        <rect x="36" y="994" width="1030" height="196" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1016" fontSize="5.4" fontWeight="800" className="fill-foreground">FOUR MAJOR COMPONENTS OF DECISION-MAKING — the printed side panel, as four bedside questions</text>
        <text x="52" y="1028" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the print&apos;s blue square bullets (▘) and bold lead words carried below; the strip is KYP&apos;s re-arrangement of the side panel</text>
        {componentCard(52, 1, "UNDERSTANDING", ["what do you know about", "your condition/proposed", "procedure/treatment?"], "comp-1")}
        {componentCard(300, 2, "APPRECIATION", ["what does your condition", "mean to you? why do you", "think your doctor is", "recommending this course", "of treatment?"], "comp-2")}
        {componentCard(548, 3, "REASONING", ["how are you weighing", "your options?"], "comp-3")}
        {componentCard(796, 4, "EXPRESSING A CHOICE", ["what would you like", "to do?"], "comp-4")}
        <text x="52" y="1176" fontSize="3" fontWeight="800" className="fill-muted-foreground">KYP — U-ARE: all four present → capacity for THIS decision · any one absent → impaired for that decision · the questions are the print&apos;s own</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1204" width="1054" height="72" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1222" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 290 / book 268 (lower) (Public Health Sciences — Ethics: Core ethical principles; Decision-making capacity)</text>
        <text x="42" y="1234" fontSize="3.8" className="fill-muted-foreground">PINNED PAGE-SPLIT: the LOWER portion from the in-body “▶ PUBLIC HEALTH SCIENCES—ETHICS” ribbon to the page end; the Pearson correlation block above belongs to</text>
        <text x="42" y="1244" fontSize="3.8" className="fill-muted-foreground">correlation-coefficient. Census (pdfimages): ZERO raster images — two color-coded tables + the blue-square-bulleted components panel (VLM-read at 120dpi,</text>
        <text x="42" y="1254" fontSize="3.8" className="fill-muted-foreground">staging-pubh18/vlm-census.txt); no mnemonics print on this page — the note&apos;s four mnemonic codes are KYP originals. ORIGINAL KYP ADAPTATION — the pillar,</text>
        <text x="42" y="1264" fontSize="3.8" className="fill-muted-foreground">see-saw, and strip layouts are KYP&apos;s; every printed label is preserved, and the full text is carried verbatim in the note&apos;s two table blocks.</text>
      </g>
    </svg>
  );
};
