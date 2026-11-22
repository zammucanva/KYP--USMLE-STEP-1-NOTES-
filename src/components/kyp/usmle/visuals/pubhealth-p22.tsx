/* Public Health — PUBH batch 2, topic pubh22: Cultural formulation,
 * trauma-informed care, and motivational interviewing (FULL pdf page 294 /
 * book 272 — the THIRD page of the PUBLIC HEALTH SCIENCES—COMMUNICATION
 * SKILLS subsection; pdf 293 closes patient-centered interviewing, pdf 295
 * opens Use of interpreters). The page carries FOUR blue-headed pure-text
 * blocks in a two-column layout: (1) "Cultural formulation interview" —
 * FIVE moves, each opening with the printed bold lead-in "Identify";
 * (2) "Trauma-informed care" — screenings (mood, substance use, social
 * supports, suicide risk), the focus rule, permission / no-invasive-detail /
 * exam-signal / staff-support rules, counseling, and First Aid's OWN
 * "Remember 4 R's: Realize, Recognize, Respond, Resist retraumatization."
 * (the R initials print in RED); (3) "Motivational interviewing" — resolve
 * ambivalence (some desire required, commitment not), examine the behavior,
 * assess barriers (food access, untreated trauma), readiness for change,
 * SMART goals (the S/M/A/R/T initials print in RED — First Aid's own);
 * (4) "Gender- and sexuality-inclusive history taking" — no assumptions,
 * "partner" not "husband"/"wife", sex at birth ≠ gender identity, the
 * hand-laceration relevance gate, pronouns + EMR, confidentiality, trust
 * built over time. Census (pdfimages): ZERO raster images — every block is
 * an ORIGINAL KYP ADAPTATION (the staircase, the two panels, the arc, and
 * the checklist strip are KYP's layout; every printed prompt is preserved;
 * the full page is carried verbatim in the note's table block). VLM-read
 * at 120dpi (staging-pubh22/vlm-census.txt): the five "Identify" openers
 * print in bold; the 4 R's and SMART initials print in red bold — both
 * carried VERBATIM and ATTRIBUTED. ADJUDICATION drawn as printed: the
 * block D heading prints "Gender- and sexuality-inclusive history taking"
 * (the compound's own hyphen; the raw text layer merges it to
 * "sexualityinclusive" — documented quirk). Nothing is reproduced from
 * the book; purely presentational (no props, no hooks, no external
 * images). */

export const CulturalInterviewingMap = () => {
  const w = 1102;
  const h = 1150;

  /* The five staircase cards — every quoted prompt is the print's own; the
   * layout (descending staircase + decoder tags) is KYP's. */
  const STEP_W = 372;
  const STEP_H = 84;
  const stepX = (i: number) => 52 + (i - 1) * 156;
  const stepY = (i: number) => 122 + (i - 1) * 98;
  const stepCard = (
    i: number,
    title: string,
    lines: string[],
    tag: string,
  ) => (
    <g key={`step-${i}`}>
      <rect x={stepX(i)} y={stepY(i)} width={STEP_W} height={STEP_H} rx="10" className="fill-card stroke-border" />
      <circle cx={stepX(i) + 18} cy={stepY(i) + 18} r="9" className="fill-brand-soft stroke-brand" />
      <text x={stepX(i) + 18} y={stepY(i) + 20.5} textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">{i}</text>
      <text x={stepX(i) + 34} y={stepY(i) + 22} fontSize="3.4" fontWeight="800" className="fill-brand">{title}</text>
      {lines.map((ln, j) => (
        <text key={`step-${i}-ln-${j}`} x={stepX(i) + 14} y={stepY(i) + 38 + j * 10} fontSize="2.7" fontWeight="700" className="fill-foreground/80">{ln}</text>
      ))}
      <text x={stepX(i) + 14} y={stepY(i) + 78} fontSize="2.6" fontWeight="800" className="fill-neural">{tag}</text>
    </g>
  );
  const stepArrow = (i: number) => (
    <g key={`step-arrow-${i}`}>
      <line x1={stepX(i) + 340} y1={stepY(i) + 86} x2={stepX(i) + 340} y2={stepY(i) + 94} className="stroke-foreground" strokeWidth="1.2" />
      <path d={`M ${stepX(i) + 336} ${stepY(i) + 92} L ${stepX(i) + 340} ${stepY(i) + 98} L ${stepX(i) + 344} ${stepY(i) + 92} Z`} className="fill-foreground" />
    </g>
  );

  /* The inclusive-history checklist cell — a vector checkbox (no glyph-font
   * dependency), the printed rule, and one decoding line. */
  const checkCell = (
    x: number,
    y: number,
    wd: number,
    title: string,
    detail: string,
    key: string,
  ) => (
    <g key={key}>
      <rect x={x} y={y} width={wd} height="34" rx="8" className="fill-card stroke-border" />
      <rect x={x + 10} y={y + 11} width="10" height="10" rx="2" className="fill-brand-soft stroke-brand" />
      <polyline points={`${x + 12},${y + 16} ${x + 14.5},${y + 19} ${x + 18.5},${y + 12.5}`} fill="none" className="stroke-brand" strokeWidth="1.4" />
      <text x={x + 28} y={y + 14.5} fontSize="2.9" fontWeight="800" className="fill-foreground">{title}</text>
      <text x={x + 28} y={y + 26.5} fontSize="2.5" fontWeight="700" className="fill-muted-foreground">{detail}</text>
    </g>
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Cultural formulation trauma-informed care and motivational interviewing — the five cultural-formulation moves as a descending staircase (identify the problem through the patient's perspective in their own words or as they would describe it to family and friends; identify cultural perceptions of why they think they are experiencing the problem; identify how the patient's background influences the problem including family community and spirituality; identify how culture may impact current and future interventions, combining their plans with the standard medical regimen; identify possible barriers to care based on culture and what maintains the patient-physician relationship), the trauma-informed care panel with thorough behavioral health screenings of mood substance use social supports and suicide risk, the permission signal and support rules and First Aid's 4 R's Realize Recognize Respond Resist retraumatization, the motivational interviewing arc from resolving ambivalence through examining behavior and assessing barriers like food access and untreated trauma and readiness for change to SMART goals Specific Measurable Achievable Relevant Time bound, and the gender- and sexuality-inclusive history taking checklist (no assumptions, partner rather than husband or wife, assigned sex at birth and gender identity may differ, pronouns and the EMR, confidentiality, trust built over time) — an original KYP diagram of book 272." className="min-w-[1060px]">
      <title>Cultural formulation, trauma-informed care, and motivational interviewing — the four blocks of book 272</title>
      <desc>
        The five cultural-formulation moves as a descending staircase with every printed prompt and a KYP decoder tag per move; the trauma-informed care panel (screenings, focus rule, PERMISSION / SIGNAL / SUPPORT rules, First Aid&apos;s red-initialed 4 R&apos;s); the motivational-interviewing arc from ambivalence through barriers and readiness to SMART goals; and the gender- and sexuality-inclusive history taking checklist strip.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Cultural formulation, trauma-informed care, and motivational interviewing</text>
        <rect x="802" y="25" width="260" height="18" rx="6" className="fill-brand-soft" />
        <text x="932" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">5 CFI moves · 4 R’s · SMART</text>
      </g>

      {/* ===== ZONE A — THE CULTURAL FORMULATION INTERVIEW STAIRCASE ===== */}
      <g>
        <rect x="36" y="74" width="1030" height="530" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="96" fontSize="5.4" fontWeight="800" className="fill-foreground">THE CULTURAL FORMULATION INTERVIEW — the five printed moves as a descending staircase</text>
        <text x="52" y="107" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">every quoted prompt below is the print’s own — each move opens with the printed bold lead-in “Identify”; the decoder tags are KYP’s</text>

        {stepCard(1, "MOVE 1 — the problem through the patient’s perspective", [
          "“Ask the patient to describe the problem in their own words, or how the",
          "patient would describe the problem to their family and friends.”",
        ], "DECODER: PROBLEM — whose words define the problem")}
        {stepCard(2, "MOVE 2 — cultural perceptions of factors leading to a problem", [
          "“Ask the patient to explain why they think they are experiencing",
          "their problem.”",
        ], "DECODER: PERCEPTION — the patient’s own causal model")}
        {stepCard(3, "MOVE 3 — how the patient’s background influences the problem", [
          "“Ask the patient about what makes their problem better or worse.",
          "Investigate roles of family, community, and spirituality.”",
        ], "DECODER: BACKGROUND — the context that decides adherence")}
        {stepCard(4, "MOVE 4 — how culture may impact current and future interventions", [
          "“Ask the patient if they have any concerns or suggestions about the",
          "current plan of treatment. If they do not want to follow medical advice,",
          "investigate if there is a way to combine their plans with the standard",
          "medical regimen.”",
        ], "DECODER: PLAN — combine, do not override")}
        {stepCard(5, "MOVE 5 — possible barriers to care based on culture", [
          "“Ask the patient if there is anything that would prevent them from",
          "seeking care in a standard medical institution. Probe for explanations",
          "and what may increase the chance of maintaining a good patient-physician",
          "relationship.”",
        ], "DECODER: BARRIERS — the relationship is the output")}
        {stepArrow(1)}
        {stepArrow(2)}
        {stepArrow(3)}
        {stepArrow(4)}

        {/* the KYP reading (fills the top-right void of the staircase) */}
        <g>
          <rect x="744" y="126" width="316" height="176" rx="10" className="fill-card stroke-neural" />
          <text x="758" y="148" fontSize="4.2" fontWeight="800" className="fill-neural">THE KYP READING</text>
          <text x="758" y="164" fontSize="2.7" fontWeight="700" className="fill-foreground/80">Each move feeds the next: the patient’s own</text>
          <text x="758" y="175" fontSize="2.7" fontWeight="700" className="fill-foreground/80">words define the problem (1); their explanation</text>
          <text x="758" y="186" fontSize="2.7" fontWeight="700" className="fill-foreground/80">prices the perceived cause (2); background sets</text>
          <text x="758" y="197" fontSize="2.7" fontWeight="700" className="fill-foreground/80">the context (3); the plan gets combined, never</text>
          <text x="758" y="208" fontSize="2.7" fontWeight="700" className="fill-foreground/80">replaced (4); and barriers are probed before</text>
          <text x="758" y="219" fontSize="2.7" fontWeight="700" className="fill-foreground/80">they break the relationship (5).</text>
          <text x="758" y="240" fontSize="2.6" fontWeight="800" className="fill-neural">The relationship is the deliverable — the print’s</text>
          <text x="758" y="251" fontSize="2.6" fontWeight="800" className="fill-neural">own closing probe (move 5) makes it explicit.</text>
          <text x="758" y="276" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">the five “Identify” lead-ins print in bold in the book</text>
        </g>
      </g>

      {/* ===== ZONE B — TRAUMA-INFORMED CARE ===== */}
      <g>
        <rect x="36" y="616" width="508" height="260" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="638" fontSize="5.4" fontWeight="800" className="fill-foreground">TRAUMA-INFORMED CARE — screen, focus, protect</text>
        <text x="52" y="649" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">every rule below is the print’s own; the 4 R’s are First Aid’s own, red-initialed</text>

        <text x="52" y="666" fontSize="2.7" fontWeight="700" className="fill-foreground/80">SCREEN — patients with history of psychological trauma should receive thorough</text>
        <text x="52" y="676" fontSize="2.7" fontWeight="700" className="fill-foreground/80">behavioral health screenings: regularly assess mood, substance use, social supports, and suicide risk.</text>
        <text x="52" y="691" fontSize="2.7" fontWeight="700" className="fill-foreground/80">FOCUS — assessments on trauma-related symptoms that interfere with social and occupational function.</text>
        <text x="52" y="706" fontSize="2.7" fontWeight="700" className="fill-foreground/80">PERMISSION — ask permission prior to discussion; never ask invasive questions</text>
        <text x="52" y="716" fontSize="2.7" fontWeight="700" className="fill-foreground/80">requiring the patient to describe trauma in detail. Always be empathetic.</text>
        <text x="52" y="731" fontSize="2.7" fontWeight="700" className="fill-foreground/80">SIGNAL — before the physical exam, reassure patients that they may signal to end</text>
        <text x="52" y="741" fontSize="2.7" fontWeight="700" className="fill-foreground/80">it immediately if they experience too much physical or emotional discomfort.</text>
        <text x="52" y="756" fontSize="2.7" fontWeight="700" className="fill-foreground/80">SUPPORT — offer the presence of additional staff; psychological counseling may</text>
        <text x="52" y="766" fontSize="2.7" fontWeight="700" className="fill-foreground/80">be indicated; follow-up counseling is offered (or advised) as appropriate.</text>

        {/* the 4 R's strip — First Aid's own, attributed */}
        <g>
          <rect x="52" y="778" width="460" height="34" rx="8" className="fill-card stroke-emergency" />
          <text x="62" y="799" fontSize="3" fontWeight="800" className="fill-foreground">Remember 4 R’s:</text>
          <rect x="132" y="786" width="44" height="18" rx="5" className="fill-card stroke-emergency" />
          <text x="154" y="798" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-emergency">Realize</text>
          <rect x="182" y="786" width="54" height="18" rx="5" className="fill-card stroke-emergency" />
          <text x="209" y="798" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-emergency">Recognize</text>
          <rect x="242" y="786" width="48" height="18" rx="5" className="fill-card stroke-emergency" />
          <text x="266" y="798" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-emergency">Respond</text>
          <rect x="296" y="786" width="128" height="18" rx="5" className="fill-card stroke-emergency" />
          <text x="360" y="798" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-emergency">Resist retraumatization</text>
        </g>
        <text x="52" y="826" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">First Aid’s own mnemonic — the R initials print in RED in the book (carried attributed)</text>
        <text x="52" y="846" fontSize="2.8" fontWeight="800" className="fill-neural">THE KYP RULE — PERMISSION governs the conversation, SIGNAL governs the exam, SUPPORT governs the room</text>
      </g>

      {/* ===== ZONE C — MOTIVATIONAL INTERVIEWING ARC ===== */}
      <g>
        <rect x="556" y="616" width="510" height="260" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="572" y="638" fontSize="5.4" fontWeight="800" className="fill-foreground">MOTIVATIONAL INTERVIEWING — the arc to SMART goals</text>
        <text x="572" y="649" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">resolve ambivalence: some desire to change required — commitment not</text>

        {/* node 1 — resolve ambivalence */}
        <rect x="572" y="660" width="478" height="32" rx="8" className="fill-card stroke-border" />
        <text x="584" y="672" fontSize="2.6" fontWeight="800" className="fill-brand">RESOLVE AMBIVALENCE — a counseling technique to facilitate behavior modification;</text>
        <text x="584" y="683" fontSize="2.6" fontWeight="700" className="fill-foreground/80">useful for many conditions (eg, nicotine dependence, obesity) — the patient voices the argument</text>

        <line x1="689" y1="692" x2="689" y2="698" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 685 696 L 689 702 L 693 696 Z" className="fill-foreground" />
        <line x1="933" y1="692" x2="933" y2="698" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 929 696 L 933 702 L 937 696 Z" className="fill-foreground" />

        {/* node 2 — examine the behavior */}
        <rect x="572" y="704" width="234" height="44" rx="8" className="fill-card stroke-border" />
        <text x="584" y="716" fontSize="2.5" fontWeight="800" className="fill-brand">EXAMINE — ask how the behavior</text>
        <text x="584" y="726" fontSize="2.5" fontWeight="700" className="fill-foreground/80">interferes with their life, or why</text>
        <text x="584" y="736" fontSize="2.5" fontWeight="700" className="fill-foreground/80">they might want to change it.</text>

        {/* node 3 — assess barriers */}
        <rect x="816" y="704" width="234" height="44" rx="8" className="fill-card stroke-border" />
        <text x="828" y="716" fontSize="2.5" fontWeight="800" className="fill-brand">BARRIERS — assess what makes</text>
        <text x="828" y="726" fontSize="2.5" fontWeight="700" className="fill-foreground/80">change difficult (eg, food access,</text>
        <text x="828" y="736" fontSize="2.5" fontWeight="700" className="fill-foreground/80">untreated trauma).</text>

        <line x1="689" y1="748" x2="689" y2="754" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 685 752 L 689 758 L 693 752 Z" className="fill-foreground" />
        <line x1="933" y1="748" x2="933" y2="754" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 929 752 L 933 758 L 937 752 Z" className="fill-foreground" />

        {/* node 4 — readiness for change */}
        <rect x="572" y="760" width="478" height="26" rx="8" className="fill-card stroke-border" />
        <text x="584" y="777" fontSize="2.6" fontWeight="800" className="fill-brand">READINESS — assessing the patient’s readiness for change guides physician-suggested goals</text>

        <line x1="811" y1="786" x2="811" y2="792" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 807 790 L 811 796 L 815 790 Z" className="fill-foreground" />

        {/* the SMART output bar — First Aid's own, attributed */}
        <rect x="572" y="798" width="478" height="32" rx="8" className="fill-card stroke-success" />
        <text x="584" y="811" fontSize="2.8" fontWeight="800" className="fill-success">GOALS: Specific · Measurable · Achievable · Relevant · Time bound (SMART)</text>
        <text x="584" y="823" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">First Aid’s own mnemonic — the S/M/A/R/T initials print in RED in the book (carried attributed)</text>
        <text x="572" y="850" fontSize="2.8" fontWeight="800" className="fill-neural">THE KYP RULE — readiness SIZES the goal; SMART FORMATS it — two jobs in one arc</text>
      </g>

      {/* ===== ZONE D — INCLUSIVE HISTORY CHECKLIST STRIP ===== */}
      <g>
        <rect x="36" y="890" width="1030" height="160" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="912" fontSize="5.4" fontWeight="800" className="fill-foreground">GENDER- AND SEXUALITY-INCLUSIVE HISTORY TAKING — the checklist</text>
        <text x="52" y="923" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">no assumptions, ever — sexual orientation, gender identity, gender expression, and behavior are independent axes</text>

        {checkCell(52, 934, 492, "NO ASSUMPTIONS — orientation, identity, expression, and behavior", "a patient who identifies as heterosexual may engage in same-sex sexual activity", "inc-1")}
        {checkCell(560, 934, 490, "NEUTRAL TERMS — “partner” rather than “husband” or “wife”", "upon first meeting, until the patient instructs otherwise or uses specific pronouns", "inc-2")}
        {checkCell(52, 972, 492, "SEX AT BIRTH ≠ GENDER IDENTITY", "a patient’s assigned sex at birth and gender identity may differ", "inc-3")}
        {checkCell(560, 972, 490, "ONLY IF RELEVANT — the hand-laceration rule", "do not bring up gender or sexuality if it is not relevant to the visit", "inc-4")}
        {checkCell(52, 1010, 492, "PRONOUNS + EMR — state yours, ask theirs", "“I’m Dr. Smith, and I use she/her pronouns”; correct name and pronouns in the electronic medical record", "inc-5")}
        {checkCell(560, 1010, 490, "CONFIDENTIALITY + TRUST — built over time", "reassure confidentiality; patients may not be open to others in their life", "inc-6")}
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1064" width="1054" height="66" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1082" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 294 / book 272 (Public Health Sciences — Communication Skills: Cultural formulation</text>
        <text x="42" y="1092" fontSize="3.8" className="fill-muted-foreground">interview; Trauma-informed care; Motivational interviewing; Gender- and sexuality-inclusive history taking). Census (pdfimages): ZERO raster images — four</text>
        <text x="42" y="1102" fontSize="3.8" className="fill-muted-foreground">blue-headed pure-text blocks (VLM-read at 120dpi, staging-pubh22/vlm-census.txt); the five “Identify” lead-ins print in bold; the 4 R’s and SMART initials print in RED.</text>
        <text x="42" y="1112" fontSize="3.8" className="fill-muted-foreground">ORIGINAL KYP ADAPTATION — the staircase, panels, arc, and checklist are KYP’s layout; every printed prompt is preserved; the full page is carried verbatim in</text>
        <text x="42" y="1122" fontSize="3.8" className="fill-muted-foreground">the note’s table block. QUIRK — the block D heading breaks after “sexuality-” in print; the raw text layer merges it to “sexualityinclusive” (documented).</text>
      </g>
    </svg>
  );
};
