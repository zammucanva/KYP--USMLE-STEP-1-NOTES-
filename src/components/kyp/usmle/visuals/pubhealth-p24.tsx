/* Public Health — PUBH batch, topic 24: Challenging patient and ethical
 * scenarios (FULL pdf pages 296-297 / books 274-275, the two-page
 * situation/response table — the drug-names precedent). The pages carry the
 * lead-in ("Appropriate responses are patient-centered, open-ended, and
 * empathetic. Acknowledge obstacles... validate emotions... create
 * open-ended dialogue... reflect ethical principles (autonomy,
 * beneficence, nonmaleficence, justice) and consider multiple points of
 * view—patient, family, culture, and healthcare team.") plus the 25-row
 * SITUATION / APPROPRIATE RESPONSE table (13 rows on book 274 + 12 on book
 * 275, where the table ENDS with a closing rule — VLM-confirmed). ROW-COUNT
 * ADJUDICATION: the batch brief said "24 rows"; the PRINT carries 25
 * (13 + 12; the chapter census's own rationale enumerates 25 situations) —
 * printed rows govern, all 25 carried. Census (pdfimages): ZERO raster
 * images on both pages — the two table parts are an ORIGINAL KYP
 * ADAPTATION. VLM-read at 120dpi (staging-pubh24/vlm-census.txt): dotted
 * hairlines, no zebra striping, SITUATION column regular black, bold-navy
 * titles, and NO mnemonics, margin notes, red in-cell mnemonic lines,
 * asterisk footnotes, or images anywhere on either page (the lead-in's
 * first-letter red styling is the book's signature styling, not a
 * mnemonic — so all KYP mnemonic codes elsewhere are originals); the VLM's
 * "spinal are reflex" is a 120dpi misread adjudicated to the text layer's
 * "spinal arc reflex" (drawn as printed). The layout is deliberately NOT a
 * 25-row wall: the lead-in triad band (ACKNOWLEDGE obstacles / VALIDATE
 * emotions / CREATE open-ended dialogue with the three printed example
 * phrases, over the principles + lenses strips), then SEVEN themed cluster
 * cards (adherence barriers · consent & disclosure · minors · end-of-life
 * & loss · boundaries & professionalism · safety & reporting · conflicts
 * of interest & conscience) carrying all 25 situations with the verbatim
 * key phrases of their responses, plus the KYP override-rules card (safety,
 * minors, reports). Nothing is reproduced from the book; purely
 * presentational (no props, no hooks, no external images). */

export const ChallengingScenariosMap = () => {
  const w = 1102;
  const h = 1380;

  /* One situation line inside a cluster card: the printed row number, a
   * short situation label, and the verbatim key phrase of the response. */
  const sitLine = (
    x: number,
    y: number,
    num: string,
    label: string,
    phrase: string,
    key: string,
  ) => (
    <g key={key}>
      <circle cx={x + 8} cy={y - 2.6} r="5.2" className="fill-brand-soft stroke-brand" />
      <text x={x + 8} y={y - 1} textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-brand">{num}</text>
      <text x={x + 19} y={y} fontSize="2.8" fontWeight="800" className="fill-foreground/90">{label}</text>
      <text x={x + 19} y={y + 9} fontSize="2.7" fontWeight="700" className="fill-muted-foreground">{phrase}</text>
    </g>
  );

  /* One cluster card: title + principle chip + its situation lines. */
  const clusterCard = (
    x: number,
    y: number,
    hh: number,
    title: string,
    principle: string,
    children: React.ReactNode,
    key: string,
  ) => (
    <g key={key}>
      <rect x={x} y={y} width="502" height={hh} rx="10" className="fill-card stroke-border" />
      <text x={x + 16} y={y + 20} fontSize="4.3" fontWeight="800" className="fill-brand">{title}</text>
      <rect x={x + 16} y={y + 28} width="300" height="15" rx="5" className="fill-brand-soft" />
      <text x={x + 24} y={y + 38.5} fontSize="2.9" fontWeight="800" className="fill-brand">{principle}</text>
      {children}
    </g>
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Challenging patient and ethical scenarios — the two-page response table of books 274 and 275 rebuilt as themed clusters: a lead-in triad band (appropriate responses are patient-centered, open-ended, and empathetic — acknowledge obstacles with I understand this plan may be difficult, validate emotions with It's understandable to feel frustrated, create open-ended dialogue with What concerns you most about; reflect autonomy, beneficence, nonmaleficence, and justice through patient, family, culture, and healthcare team points of view), then seven cluster cards carrying all twenty-five situations — adherence barriers (nonadherence, medication difficulty, alternative medicine: explore, don't coerce), consent and disclosure (unnecessary procedure, family asking prognosis, family requesting nondisclosure, uninsured treatment: the patient holds the information), minors (the 17-year-old requesting abortion whose decision is not swayed, the 15-year-old who retains the right to make decisions regarding the child, the Jehovah's Witness emergency — transfuse daughter but do not transfuse mother, vaccine refusal needing parental consent), end-of-life and loss (physician-assisted dying with analgesics permitted even if they potentially shorten the patient's life, the bereaved 7-year-old given a direct concrete description with no cliches or euphemisms, brain death equivalent to death with spinal arc reflex movements), boundaries and professionalism (the date request — romantic relationships with patients are never appropriate, the post-mastectomy patient offered no falsely reassuring statements, waiting-room anger acknowledged without explaining the delay, the complaint about another physician), safety and reporting (the suicidal patient possibly hospitalized involuntarily, the wrong-patient error disclosed regardless of the outcome, intimate partner violence met with a safety plan and no pressure to leave or disclose, the impaired colleague reported, suspected abuse reported by law), and conflicts of interest and conscience (the pharmaceutical sponsorship rejected with the AMA Code of Ethics exceptions, the procedure against personal beliefs met with unbiased information and a referral) — plus the override-rules card: safety, minors, and reports override preference; everything else explores, informs, and refers — an original KYP diagram of books 274-275." className="min-w-[1060px]">
      <title>Challenging patient and ethical scenarios — the 25 situations as seven response clusters</title>
      <desc>
        The lead-in triad band (patient-centered, open-ended, empathetic — acknowledge obstacles, validate emotions, create open-ended dialogue, with the three printed example phrases, the four ethical principles, and the four points of view), then seven themed cluster cards carrying all 25 printed situations with the verbatim key phrases of their responses, and the override-rules card (safety, minors, reports).
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Challenging patient and ethical scenarios — the response table, clustered</text>
        <rect x="790" y="25" width="272" height="18" rx="6" className="fill-brand-soft" />
        <text x="926" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">25 situations · 7 clusters · books 274–275</text>
      </g>

      {/* ===== ZONE A — THE LEAD-IN TRIAD BAND ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="196" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="93" fontSize="5.2" fontWeight="800" className="fill-foreground">THE LEAD-IN TRIAD — “Appropriate responses are patient-centered, open-ended, and empathetic.”</text>
        <text x="52" y="104" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the three printed moves with their three printed example phrases — the grammar that generates every response in the 25-row table</text>

        {/* the three moves */}
        <g>
          <rect x="52" y="114" width="326" height="62" rx="10" className="fill-card stroke-success" />
          <text x="68" y="132" fontSize="3.6" fontWeight="800" className="fill-success">ACKNOWLEDGE OBSTACLES</text>
          <text x="68" y="145" fontSize="3" fontWeight="700" className="fill-foreground/85">“I understand this plan may be difficult...”</text>
          <text x="68" y="160" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">name the barrier — financial, logistical, or other —</text>
          <text x="68" y="169" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">before addressing it (rows 1, 2, 3, 5, 18)</text>
        </g>
        <g>
          <rect x="388" y="114" width="326" height="62" rx="10" className="fill-card stroke-success" />
          <text x="404" y="132" fontSize="3.6" fontWeight="800" className="fill-success">VALIDATE EMOTIONS</text>
          <text x="404" y="145" fontSize="3" fontWeight="700" className="fill-foreground/85">“It’s understandable to feel frustrated...”</text>
          <text x="404" y="160" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the feeling is legitimate even when the</text>
          <text x="404" y="169" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">behavior is not (rows 11, 12, 16, 20)</text>
        </g>
        <g>
          <rect x="724" y="114" width="326" height="62" rx="10" className="fill-card stroke-success" />
          <text x="740" y="132" fontSize="3.6" fontWeight="800" className="fill-success">CREATE OPEN-ENDED DIALOGUE</text>
          <text x="740" y="145" fontSize="3" fontWeight="700" className="fill-foreground/85">“What concerns you most about...?”</text>
          <text x="740" y="160" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">hand the microphone back — direct, open-ended</text>
          <text x="740" y="169" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">questions (rows 17, 25, 7)</text>
        </g>

        {/* the principles strip */}
        <text x="52" y="196" fontSize="3.2" fontWeight="800" className="fill-foreground">REFLECT ETHICAL PRINCIPLES:</text>
        <rect x="212" y="185" width="86" height="15" rx="5" className="fill-brand-soft" />
        <text x="255" y="195.5" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-brand">autonomy</text>
        <rect x="304" y="185" width="94" height="15" rx="5" className="fill-brand-soft" />
        <text x="351" y="195.5" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-brand">beneficence</text>
        <rect x="404" y="185" width="112" height="15" rx="5" className="fill-brand-soft" />
        <text x="460" y="195.5" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-brand">nonmaleficence</text>
        <rect x="522" y="185" width="74" height="15" rx="5" className="fill-brand-soft" />
        <text x="559" y="195.5" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-brand">justice</text>

        {/* the lenses strip */}
        <text x="52" y="219" fontSize="3.2" fontWeight="800" className="fill-foreground">CONSIDER POINTS OF VIEW:</text>
        <rect x="212" y="208" width="76" height="15" rx="5" className="fill-neural-soft stroke-neural" />
        <text x="250" y="218.5" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-neural">patient</text>
        <rect x="294" y="208" width="74" height="15" rx="5" className="fill-neural-soft stroke-neural" />
        <text x="331" y="218.5" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-neural">family</text>
        <rect x="374" y="208" width="80" height="15" rx="5" className="fill-neural-soft stroke-neural" />
        <text x="414" y="218.5" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-neural">culture</text>
        <rect x="460" y="208" width="140" height="15" rx="5" className="fill-neural-soft stroke-neural" />
        <text x="530" y="218.5" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-neural">healthcare team</text>
        <text x="616" y="218.5" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">— printed as the lead-in’s own closing sentence; “points of view—patient, family, culture, and healthcare team”</text>

        {/* the KYP grammar rule */}
        <text x="52" y="245" fontSize="3.3" fontWeight="800" className="fill-foreground">THE KYP RULE — the correct option EXPLORES (obstacles, reasons, cultural factors), INFORMS (risks, benefits, options, mistakes), or REFERS (abortion care · CAM provider · another physician · ethics board) — never coerces, never dismisses, never decides for the patient.</text>
        <text x="52" y="256" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">The exceptions — where the physician acts over objection — are the OVERRIDE card at bottom right: SAFETY · MINORS · REPORTS.</text>
      </g>

      {/* ===== ZONE B — THE SEVEN CLUSTERS (all 25 rows, each exactly once) ===== */}
      <g>
        <text x="36" y="288" fontSize="5.2" fontWeight="800" className="fill-foreground">THE SEVEN CLUSTERS — the 25 printed rows, re-sorted by response shape (row numbers = the two verbatim table blocks in the note)</text>
        <text x="36" y="299" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">every quoted phrase below is the print’s own; the cluster layout is KYP’s — the printed row order is preserved in the note’s table blocks</text>

        {/* CARD 1 — ADHERENCE BARRIERS (rows 1, 3, 18) */}
        {clusterCard(36, 308, 232, "ADHERENCE BARRIERS — rows 1 · 3 · 18", "EXPLORE, DON’T COERCE", <>
          {sitLine(52, 372, "1", "Does not follow the medical plan", "“Determine whether there are financial, logistical, or other obstacles... Do not coerce the patient into adhering or refer...", "c1r1")}
          {sitLine(52, 396, "3", "Difficulty taking medications", "“...providing written instructions, using the teach-back method, or simplifying treatment regimens.”", "c1r3")}
          {sitLine(52, 420, "18", "Wants alternative or holistic medicine", "“Explore any underlying reasons... in a supportive, nonjudgmental manner”; advise of benefits/risks; consider CAM referral.", "c1r18")}
          <text x={52} y={452} fontSize="2.7" fontWeight="800" className="fill-warning">follow-up visits track progress — the relationship holds; obstacles are information, not defiance</text>
        </>, "card1")}

        {/* CARD 2 — CONSENT & DISCLOSURE (rows 2, 4, 5, 15) */}
        {clusterCard(548, 308, 232, "CONSENT & DISCLOSURE — rows 2 · 4 · 5 · 15", "THE PATIENT HOLDS THE INFORMATION", <>
          {sitLine(564, 372, "2", "Desires an unnecessary procedure", "“Attempt to understand why... Do not refuse to see the patient... Avoid performing unnecessary procedures.”", "c2r2")}
          {sitLine(564, 396, "4", "Family asks about patient’s prognosis", "“Avoid discussing issues with relatives without the patient’s permission.”", "c2r4")}
          {sitLine(564, 420, "5", "Family asks you not to disclose poor results", "“Explore why... including possible cultural factors”; privilege only if patient “might seriously harm self or others”.", "c2r5")}
          {sitLine(564, 444, "15", "Treatment not covered by insurance", "“Discuss all treatment options... even if some are not covered”; inform of financial assistance programs.", "c2r15")}
        </>, "card2")}

        {/* CARD 3 — MINORS (rows 6, 7, 23, 25) */}
        {clusterCard(36, 552, 232, "MINORS — rows 6 · 7 · 23 · 25", "THE MINOR’S BODY, THE PARENT’S CONSENT", <>
          {sitLine(52, 616, "6", "17-year-old requests an abortion", "“a physician should not sway the patient’s decision for, or against, an elective abortion” — refer to abortion care.", "c3r6")}
          {sitLine(52, 640, "7", "15-year-old wants to raise the child", "“The patient retains the right to make decisions regarding the child, even if the patient’s parents disagree.”", "c3r7")}
          {sitLine(52, 664, "23", "Jehovah’s Witness emergency (mother + 15-year-old)", "“Transfuse daughter, but do not transfuse mother” — proxy refusal stands for the known-preference adult, not the minor.", "c3r23")}
          {sitLine(52, 688, "25", "Parent refuses the child’s vaccinations", "“Do not administer routine vaccinations without the parent’s consent” — routine care needs consent; emergencies protect.", "c3r25")}
        </>, "card3")}

        {/* CARD 4 — END-OF-LIFE & LOSS (rows 8, 16, 20) */}
        {clusterCard(548, 552, 232, "END-OF-LIFE & LOSS — rows 8 · 16 · 20", "NEITHER HASTEN NOR PROLONG", <>
          {sitLine(564, 616, "8", "Terminally ill patient requests physician-assisted dying", "most states prohibit; “medically appropriate analgesics even if they potentially shorten the patient’s life.”", "c4r8")}
          {sitLine(564, 640, "16", "7-year-old lost his sister to cancer, feels responsible", "at ages 5-7 death is understood as permanent — “direct, concrete description”; “Avoid clichés and euphemisms.”", "c4r16")}
          {sitLine(564, 664, "20", "Family insists on life support after brain death", "“brain death is equivalent to death. Movement is due to spinal arc reflex” — bring case to ethics board re futility.", "c4r20")}
          <text x={564} y={696} fontSize="2.7" fontWeight="800" className="fill-warning">double effect (analgesics permitted) · the definition of death holds against grief · futility goes to the board, never unilateral</text>
        </>, "card4")}

        {/* CARD 5 — BOUNDARIES & PROFESSIONALISM (rows 10, 11, 12, 13) */}
        {clusterCard(36, 796, 232, "BOUNDARIES & PROFESSIONALISM — rows 10 · 11 · 12 · 13", "ACKNOWLEDGE, DON’T ABSORB", <>
          {sitLine(52, 860, "10", "Patient asks you on a date", "“Romantic relationships with patients are never appropriate” — chaperone, firm boundaries, transition care if needed.", "c5r10")}
          {sitLine(52, 884, "11", "Post-mastectomy patient feels “ugly”", "“Find out why the patient feels this way. Do not offer falsely reassuring statements (eg, “You still look good”).”", "c5r11")}
          {sitLine(52, 908, "12", "Angry about long waiting-room time", "“do not take a patient’s anger personally... Stay away from efforts to explain the delay” — thank and apologize.", "c5r12")}
          {sitLine(52, 932, "13", "Upset with treatment from another physician", "“Suggest that the patient speak directly to that physician”; office-staff problems you address yourself.", "c5r13")}
        </>, "card5")}

        {/* CARD 6 — SAFETY & REPORTING (rows 9, 14, 17, 19, 24) */}
        {clusterCard(548, 796, 232, "SAFETY & REPORTING — rows 9 · 14 · 17 · 19 · 24", "SAFETY TRUMPS PREFERENCE", <>
          {sitLine(564, 860, "9", "Patient is suicidal", "assess seriousness; actively suicidal with a plan → “patient may be hospitalized involuntarily if needed.”", "c6r9")}
          {sitLine(564, 884, "14", "Invasive test on the wrong patient", "“Regardless of the outcome, a physician is ethically obligated to inform a patient that a mistake has been made.”", "c6r14")}
          {sitLine(564, 908, "17", "Victim of intimate partner violence", "ask if safe, devise an emergency plan; “Do not necessarily pressure patient to leave a partner or disclose.”", "c6r17")}
          {sitLine(564, 932, "19", "Colleague presents to work impaired", "“an ethical and usually a legal obligation to report impaired colleagues” — risk to patient safety.", "c6r19")}
          {sitLine(564, 956, "24", "Injuries inconsistent with caretaker’s story", "“required by law to report any reasonable suspicion of abuse, neglect, or endangerment” — interview alone.", "c6r24")}
        </>, "card6")}

        {/* CARD 7 — CONFLICTS OF INTEREST & CONSCIENCE (rows 21, 22) */}
        {clusterCard(36, 1040, 232, "CONFLICTS OF INTEREST & CONSCIENCE — rows 21 · 22", "DISCLOSE, DECLINE, REFER", <>
          {sitLine(52, 1104, "21", "Pharmaceutical sponsorship offer", "“Reject this offer. Generally, decline gifts and sponsorships to avoid any conflict of interest.”", "c7r21")}
          {sitLine(52, 1128, "22", "Procedure against your personal or religious beliefs", "“Provide accurate and unbiased information so patients can make an informed decision.”", "c7r22")}
          <text x={71} y={1146} fontSize="2.7" fontWeight="700" className="fill-muted-foreground">“In a neutral, nonjudgmental manner, explain to the patient that you do not perform the procedure but offer to refer.”</text>
          <rect x={52} y={1154} width="470" height="62" rx="8" className="fill-secondary/40 stroke-border" />
          <text x={64} y={1168} fontSize="2.8" fontWeight="800" className="fill-foreground">THE AMA CODE OF ETHICS EXCEPTIONS (printed):</text>
          <text x={64} y={1179} fontSize="2.7" fontWeight="700" className="fill-muted-foreground">gifts directly benefitting patients · special funding for medical education of students, residents,</text>
          <text x={64} y={1188} fontSize="2.7" fontWeight="700" className="fill-muted-foreground">fellows · grants whose recipients are chosen by independent institutional criteria · funds distributed</text>
          <text x={64} y={1197} fontSize="2.7" fontWeight="700" className="fill-muted-foreground">without attribution to sponsors — the sponsorship itself is still rejected.</text>
          <text x={64} y={1230} fontSize="2.7" fontWeight="800" className="fill-warning">conscience never blocks information and never abandons the patient — the table’s own pairing</text>
        </>, "card7")}

        {/* CARD 8 — THE OVERRIDE RULES (KYP) */}
        <g key="card8">
          <rect x={548} y={1040} width="502" height="232" rx="10" className="fill-card stroke-emergency" />
          <circle cx={568} cy={1058} r="9" className="fill-emergency-soft stroke-emergency" />
          <text x={568} y={1060.5} textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">!</text>
          <text x={584} y={1062} fontSize="4.3" fontWeight="800" className="fill-emergency">THE OVERRIDES — when preference yields (KYP)</text>
          <rect x={564} y={1072} width="180" height="15" rx="5" className="fill-emergency-soft" />
          <text x={654} y={1082.5} textAnchor="middle" fontSize="2.9" fontWeight="800" className="fill-emergency">SAFETY, MINORS, REPORTS</text>
          <text x={564} y={1108} fontSize="2.9" fontWeight="800" className="fill-foreground">OVERRIDE 1 — SAFETY:</text>
          <text x={574} y={1117} fontSize="2.7" fontWeight="700" className="fill-muted-foreground">actively suicidal with a plan → involuntary hospitalization if needed · impaired colleague → report</text>
          <text x={564} y={1136} fontSize="2.9" fontWeight="800" className="fill-foreground">OVERRIDE 2 — THE MINOR LINE:</text>
          <text x={574} y={1145} fontSize="2.7" fontWeight="700" className="fill-muted-foreground">emergent care “not for a minor based solely on faith” — transfuse the daughter; routine care still</text>
          <text x={574} y={1154} fontSize="2.7" fontWeight="700" className="fill-muted-foreground">needs the parent’s consent (the vaccine row)</text>
          <text x={564} y={1173} fontSize="2.9" fontWeight="800" className="fill-foreground">OVERRIDE 3 — LEGAL DUTIES:</text>
          <text x={574} y={1182} fontSize="2.7" fontWeight="700" className="fill-muted-foreground">report any reasonable suspicion of abuse, neglect, or endangerment · report impaired colleagues ·</text>
          <text x={574} y={1191} fontSize="2.7" fontWeight="700" className="fill-muted-foreground">disclose errors “regardless of the outcome”</text>
          <line x1="564" y1="1204" x2="1034" y2="1204" className="stroke-border" strokeWidth="1" />
          <text x={564} y={1217} fontSize="2.9" fontWeight="800" className="fill-emergency">NO OVERRIDE FIRES → the grammar governs: acknowledge, validate, ask — then explore, inform, or refer.</text>
          <text x={564} y={1226} fontSize="2.7" fontWeight="700" className="fill-muted-foreground">near-misses the print keeps narrow: therapeutic privilege only at serious harm to self or others · IPV disclosure</text>
          <text x={564} y={1235} fontSize="2.7" fontWeight="700" className="fill-muted-foreground">not pressed “unless required by state law” · futility to the ethics board, never unilateral withdrawal</text>
          <text x={564} y={1250} fontSize="2.7" fontWeight="800" className="fill-warning">the 25 rows are 25 points on this one map — the KYP reading of the two printed pages</text>
        </g>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1288" width="1054" height="76" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1306" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 296–297 / books 274–275 (Public Health Sciences — Communication Skills: Challenging patient and ethical scenarios)</text>
        <text x="42" y="1318" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster images on both pages — the two table parts (bold-navy titles, small-caps column headers, regular-black SITUATION column, dotted</text>
        <text x="42" y="1328" fontSize="3.8" className="fill-muted-foreground">hairlines, no zebra striping; VLM-read at 120dpi, staging-pubh24/vlm-census.txt — two full-page passes). ORIGINAL KYP ADAPTATION: the cluster layout is KYP’s;</text>
        <text x="42" y="1338" fontSize="3.8" className="fill-muted-foreground">every situation and every quoted response phrase is the print’s own, and the full 25 rows are carried verbatim in the note’s two table blocks.</text>
        <text x="42" y="1348" fontSize="3.8" className="fill-muted-foreground">ADJUDICATIONS — the print carries 25 rows (13 on book 274 + 12 on book 275; the brief said 24 — print governs) · “spinal arc reflex” per the text layer (the VLM’s</text>
        <text x="42" y="1358" fontSize="3.8" className="fill-muted-foreground">“are” is a 120dpi misread) · the final vaccine row interleaves its cells in the raw text layer and is drawn here in its de-interleaved reading (VLM-confirmed).</text>
      </g>
    </svg>
  );
};
