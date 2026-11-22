/* Public Health — PUBH batch 2, topic 19: Informed consent, minors, and
 * advance directives (FULL pdf page 291 / book 269 — the SECOND page of the
 * ETHICS subsection; pdf 290 / book 268-lower is the core-ethical-principles
 * page, pdf 292 / book 270 opens Ventilator-assisted life support). The page
 * is ONE continuous two-column term/definition table carrying THREE blocks:
 * (1) "Informed consent" — the four-part process (Disclosure, Understanding,
 * Capacity [distinct from competence, a legal determination], Voluntariness)
 * + the comprehensive-understanding sentence (alternatives INCLUDING NO
 * TREATMENT) + the right to revoke written consent at any time, even orally
 * + the exceptions box; (2) "Consent for minors" — the <18 rule, the
 * emergency and emancipation gates, the Sex/Drugs/Rock-and-roll set, assent,
 * minor-guardian communication; (3) "Advance directives" — oral, written
 * (living will), medical power of attorney, DNR. Census (pdfimages): ZERO
 * raster images — the table is the page's only printed asset, an ORIGINAL
 * KYP ADAPTATION. VLM-read at 120dpi (staging-pubh19/vlm-census.txt): the
 * "WIPE it away" heading and the W·I·P·E initial letters print in RED, and
 * "Sex", "Drugs", "Rock and roll" print in BOLD RED — First Aid's OWN
 * mnemonic devices, carried VERBATIM and ATTRIBUTED (fill-emergency text +
 * "First Aid" attribution tags); the three main term names print in bold
 * dark navy on pale shaded cells; thin black rules, no zebra. ADJUDICATION
 * drawn as flagged: the flexibility ladder (words → paper → person) is the
 * KYP synthesis of the printed cues — the Oral row's "problems arise from
 * variance in interpretation" and the Medical power of attorney row's
 * "more flexible than a living will" — and the DNR order is drawn as a
 * scoped order beside the ladder, not ranked on it (the print never ranks
 * it). Nothing is reproduced from the book; purely presentational (no
 * props, no hooks, no external images). */

export const ConsentMap = () => {
  const w = 1102;
  const h = 1290;

  /* A small forward chevron between adjacent cards. */
  const chevron = (x: number, y: number, key: string) => (
    <g key={key}>
      <line x1={x} y1={y} x2={x + 7} y2={y} className="stroke-foreground" strokeWidth="1.2" />
      <path d={`M ${x + 5} ${y - 3} L ${x + 11} ${y} L ${x + 5} ${y + 3} Z`} className="fill-foreground" />
    </g>
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Informed consent minors and advance directives — the four-part consent process (disclosure of pertinent information including risks and benefits, understanding, capacity distinct from competence a legal determination, voluntariness) with the disclosure set covering alternatives including no treatment and the right to revoke written consent at any time even orally; the four WIPE exceptions as cards (waiver, legally incompetent with consent from the legal surrogate, therapeutic privilege, emergency situation with implied consent — First Aid's own mnemonic carried attributed); the minors panel with the under-18 default, the emergency and emancipation gates (blood transfusions; married, self-supporting, or in the military), the attributed Sex Drugs Rock and roll row (contraception, STIs, prenatal care usually not abortion; substance use disorder treatment; emergency trauma), and the assent and minor-guardian communication closers; and the four advance-directive instruments ranked by flexibility (oral advance directive, written advance directive or living will, medical power of attorney printed more flexible than a living will) with the DNR order drawn as the scoped order that prohibits CPR only — an original KYP diagram of book 269." className="min-w-[1060px]">
      <title>Informed consent, minors, and advance directives — the page of who decides</title>
      <desc>
        Zone A: the four process pillars (Disclosure, Understanding, Capacity, Voluntariness) with the disclosure set including no treatment and the revocation clause. Zone B: the four WIPE exception cards, First Aid&apos;s own red mnemonic attributed. Zone C: the minors panel — the under-18 default, the emergency and emancipation gates, the Sex/Drugs/Rock-and-roll row attributed, and the assent and communication closers. Zone D: the four advance-directive instruments on the flexibility ladder (oral, written/living will, medical power of attorney) with the DNR order as the scoped CPR-only order.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Informed consent, minors, and advance directives — the page of who decides</text>
        <rect x="790" y="25" width="272" height="18" rx="6" className="fill-brand-soft" />
        <text x="926" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">3 blocks · 4 pillars · 4 exceptions · 4 instruments</text>
      </g>

      {/* ===== ZONE A — THE FOUR-PART PROCESS ===== */}
      <g>
        <rect x="36" y="74" width="1030" height="306" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="96" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FOUR-PART PROCESS — informed consent is “a process that requires” four things (PRINTED order)</text>
        <text x="52" y="107" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the signature only records the process — fail a pillar and there is no consent, whatever the form says (KYP)</text>

        {/* PILLAR 1 — Disclosure */}
        <g>
          <rect x="52" y="118" width="240" height="150" rx="10" className="fill-card stroke-border" />
          <circle cx="70" cy="136" r="9" className="fill-brand-soft stroke-brand" />
          <text x="70" y="138.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">1</text>
          <text x="86" y="140" fontSize="4.4" fontWeight="800" className="fill-brand">Disclosure</text>
          <text x="66" y="162" fontSize="2.9" fontWeight="700" className="fill-foreground/80">discussion of pertinent information,</text>
          <text x="66" y="172" fontSize="2.9" fontWeight="700" className="fill-foreground/80">including risks/benefits</text>
          <rect x="66" y="184" width="150" height="16" rx="5" className="fill-brand-soft/60" />
          <text x="74" y="195" fontSize="2.7" fontWeight="800" className="fill-brand">WHAT was said — the information given</text>
          <text x="66" y="226" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the set to disclose: diagnosis · risks/benefits</text>
          <text x="66" y="236" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">of the proposed treatment · the alternatives ·</text>
          <text x="66" y="246" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">no treatment at all</text>
        </g>

        {/* PILLAR 2 — Understanding */}
        <g>
          <rect x="304" y="118" width="240" height="150" rx="10" className="fill-card stroke-border" />
          <circle cx="322" cy="136" r="9" className="fill-brand-soft stroke-brand" />
          <text x="322" y="138.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">2</text>
          <text x="338" y="140" fontSize="4.4" fontWeight="800" className="fill-brand">Understanding</text>
          <text x="318" y="162" fontSize="2.9" fontWeight="700" className="fill-foreground/80">ability to comprehend</text>
          <rect x="318" y="184" width="168" height="16" rx="5" className="fill-brand-soft/60" />
          <text x="326" y="195" fontSize="2.7" fontWeight="800" className="fill-brand">WHAT was understood — the grasp</text>
          <text x="318" y="226" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">disclosure without comprehension is a</text>
          <text x="318" y="236" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">recital, not a consent — confirm the patient</text>
          <text x="318" y="246" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">grasps diagnosis, risks, alternatives, no tx</text>
        </g>

        {/* PILLAR 3 — Capacity */}
        <g>
          <rect x="556" y="118" width="240" height="150" rx="10" className="fill-card stroke-border" />
          <circle cx="574" cy="136" r="9" className="fill-brand-soft stroke-brand" />
          <text x="574" y="138.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">3</text>
          <text x="590" y="140" fontSize="4.4" fontWeight="800" className="fill-brand">Capacity</text>
          <text x="570" y="162" fontSize="2.9" fontWeight="700" className="fill-foreground/80">ability to reason and make one’s own</text>
          <text x="570" y="172" fontSize="2.9" fontWeight="700" className="fill-foreground/80">decisions (distinct from competence,</text>
          <text x="570" y="182" fontSize="2.9" fontWeight="700" className="fill-foreground/80">a legal determination)</text>
          <rect x="570" y="192" width="196" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="578" y="203" fontSize="2.7" fontWeight="800" className="fill-warning">WHO can decide — clinical vs legal (KYP)</text>
          <text x="570" y="226" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">capacity: assessed by the physician, for the</text>
          <text x="570" y="236" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">decision at hand · competence: declared by</text>
          <text x="570" y="246" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">a judge — the printed parenthetical (KYP)</text>
        </g>

        {/* PILLAR 4 — Voluntariness */}
        <g>
          <rect x="808" y="118" width="240" height="150" rx="10" className="fill-card stroke-border" />
          <circle cx="826" cy="136" r="9" className="fill-brand-soft stroke-brand" />
          <text x="826" y="138.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">4</text>
          <text x="842" y="140" fontSize="4.4" fontWeight="800" className="fill-brand">Voluntariness</text>
          <text x="822" y="162" fontSize="2.9" fontWeight="700" className="fill-foreground/80">freedom from coercion and</text>
          <text x="822" y="172" fontSize="2.9" fontWeight="700" className="fill-foreground/80">manipulation</text>
          <rect x="822" y="184" width="160" height="16" rx="5" className="fill-brand-soft/60" />
          <text x="830" y="195" fontSize="2.7" fontWeight="800" className="fill-brand">HOW freely — no pressure</text>
          <text x="822" y="226" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">a yes extracted by pressure from family,</text>
          <text x="822" y="236" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">physician, or institution fails this pillar</text>
          <text x="822" y="246" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">even when the first three stand (KYP)</text>
        </g>

        {chevron(293, 193, "ch-1-2")}
        {chevron(545, 193, "ch-2-3")}
        {chevron(797, 193, "ch-3-4")}

        {/* the disclosure set */}
        <g>
          <rect x="52" y="282" width="996" height="26" rx="8" className="fill-success-soft/50 stroke-success" />
          <text x="66" y="299" fontSize="3.2" fontWeight="800" className="fill-success">THE DISCLOSURE SET — patients must have a comprehensive understanding of their diagnosis and the risks/benefits of proposed treatment and alternative options, INCLUDING NO TREATMENT</text>
        </g>

        {/* the revocation clause */}
        <g>
          <rect x="52" y="318" width="996" height="32" rx="8" className="fill-warning-soft/50 stroke-warning" />
          <text x="66" y="332" fontSize="3.2" fontWeight="800" className="fill-warning">THE REVOCATION CLAUSE — patients must be informed of their right to revoke written consent at any time, even orally</text>
          <text x="66" y="344" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the consent is a live agreement, not a contract — the patient’s yes today can become a spoken no tomorrow, mid-treatment (KYP)</text>
        </g>
      </g>

      {/* ===== ZONE B — THE WIPE EXCEPTIONS ===== */}
      <g>
        <rect x="36" y="394" width="1030" height="196" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="416" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FOUR EXCEPTIONS — “Exceptions to informed consent (WIPE it away)”</text>
        <text x="52" y="427" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">First Aid’s OWN mnemonic — the heading and the W·I·P·E initials print in red on book 269 (VLM-confirmed); carried VERBATIM and ATTRIBUTED</text>

        {/* W — Waiver */}
        <g>
          <rect x="52" y="438" width="240" height="128" rx="10" className="fill-card stroke-border" />
          <text x="70" y="470" fontSize="9" fontWeight="800" className="fill-emergency">W</text>
          <text x="92" y="466" fontSize="4.4" fontWeight="800" className="fill-foreground">Waiver</text>
          <text x="66" y="488" fontSize="2.9" fontWeight="700" className="fill-foreground/80">patient explicitly relinquishes</text>
          <text x="66" y="498" fontSize="2.9" fontWeight="700" className="fill-foreground/80">the right of informed consent</text>
          <rect x="66" y="508" width="196" height="16" rx="5" className="fill-brand-soft/60" />
          <text x="74" y="519" fontSize="2.7" fontWeight="800" className="fill-brand">the PATIENT gives the process away</text>
          <text x="66" y="546" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">a family’s request is never a waiver — the</text>
          <text x="66" y="556" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">relinquishment must be the patient’s own (KYP)</text>
        </g>

        {/* I — Legally Incompetent */}
        <g>
          <rect x="304" y="438" width="240" height="128" rx="10" className="fill-card stroke-border" />
          <text x="322" y="470" fontSize="9" fontWeight="800" className="fill-emergency">I</text>
          <text x="344" y="466" fontSize="3.9" fontWeight="800" className="fill-foreground">Legally Incompetent</text>
          <text x="318" y="488" fontSize="2.9" fontWeight="700" className="fill-foreground/80">patient lacks decision-making</text>
          <text x="318" y="498" fontSize="2.9" fontWeight="700" className="fill-foreground/80">capacity (obtain consent from</text>
          <text x="318" y="508" fontSize="2.9" fontWeight="700" className="fill-foreground/80">legal surrogate)</text>
          <rect x="318" y="516" width="206" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="326" y="527" fontSize="2.7" fontWeight="800" className="fill-warning">consent routes to the LEGAL SURROGATE</text>
          <text x="318" y="552" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">incompetence is the court’s word; the physician</text>
          <text x="318" y="562" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">assesses capacity — the judge decides competence</text>
        </g>

        {/* P — Therapeutic Privilege */}
        <g>
          <rect x="556" y="438" width="240" height="128" rx="10" className="fill-card stroke-border" />
          <text x="574" y="470" fontSize="9" fontWeight="800" className="fill-emergency">P</text>
          <text x="596" y="466" fontSize="3.9" fontWeight="800" className="fill-foreground">Therapeutic Privilege</text>
          <text x="570" y="488" fontSize="2.9" fontWeight="700" className="fill-foreground/80">withholding information when disclosure</text>
          <text x="570" y="498" fontSize="2.9" fontWeight="700" className="fill-foreground/80">would severely harm the patient or</text>
          <text x="570" y="508" fontSize="2.9" fontWeight="700" className="fill-foreground/80">undermine informed decision-making capacity</text>
          <rect x="570" y="516" width="214" height="16" rx="5" className="fill-brand-soft/60" />
          <text x="578" y="527" fontSize="2.7" fontWeight="800" className="fill-brand">the PHYSICIAN withholds — two conditions</text>
          <text x="570" y="552" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">severe harm, or undermining the decision itself —</text>
          <text x="570" y="562" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">never mere discomfort or family preference (KYP)</text>
        </g>

        {/* E — Emergency situation */}
        <g>
          <rect x="808" y="438" width="240" height="128" rx="10" className="fill-card stroke-border" />
          <text x="826" y="470" fontSize="9" fontWeight="800" className="fill-emergency">E</text>
          <text x="848" y="466" fontSize="3.9" fontWeight="800" className="fill-foreground">Emergency situation</text>
          <text x="822" y="488" fontSize="2.9" fontWeight="700" className="fill-foreground/80">implied consent may apply</text>
          <rect x="822" y="500" width="176" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="830" y="511" fontSize="2.7" fontWeight="800" className="fill-warning">no time to run the process</text>
          <text x="822" y="540" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the same logic powers the minors block’s</text>
          <text x="822" y="550" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">emergency gate (eg, blood transfusions), and</text>
          <text x="822" y="560" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">it lasts only as long as the emergency (KYP)</text>
        </g>

        <text x="52" y="582" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">Read each exception by its mechanism: WHO removed the conversation — the patient (W), the law (I), the physician (P), or the clock (E)?</text>
      </g>

      {/* ===== ZONE C — CONSENT FOR MINORS ===== */}
      <g>
        <rect x="36" y="604" width="1030" height="250" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="626" fontSize="5.4" fontWeight="800" className="fill-foreground">CONSENT FOR MINORS — the &lt;18 default, three gates out, and the assent that survives them all</text>
        <text x="52" y="637" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">“A minor is generally any person &lt;18 years old” · “Parental consent laws in relation to healthcare vary by state”</text>

        {/* the default + the two status/clock gates */}
        <g>
          <rect x="52" y="648" width="500" height="124" rx="10" className="fill-card stroke-border" />
          <text x="66" y="668" fontSize="4" fontWeight="800" className="fill-brand">THE DEFAULT — the parent decides</text>
          <text x="66" y="686" fontSize="2.9" fontWeight="700" className="fill-foreground/80">“In general, parental consent should be obtained, but</text>
          <text x="66" y="696" fontSize="2.9" fontWeight="700" className="fill-foreground/80">exceptions exist for —”</text>
          <rect x="66" y="706" width="230" height="26" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="74" y="717" fontSize="2.7" fontWeight="800" className="fill-warning">GATE 1 · EMERGENCY TREATMENT</text>
          <text x="74" y="727" fontSize="2.6" fontWeight="700" className="fill-foreground/80">(eg, blood transfusions)</text>
          <rect x="304" y="706" width="234" height="26" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="312" y="717" fontSize="2.7" fontWeight="800" className="fill-warning">GATE 2 · LEGALLY EMANCIPATED</text>
          <text x="312" y="727" fontSize="2.6" fontWeight="700" className="fill-foreground/80">(eg, married, self-supporting, or in the military)</text>
          <text x="66" y="752" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">emancipation is a blanket status — it transfers GENERAL consent</text>
          <text x="66" y="762" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">authority; the emergency gate is category-wide (KYP)</text>
        </g>

        {/* the care-category set (FA's own, red) */}
        <g>
          <rect x="566" y="648" width="500" height="124" rx="10" className="fill-card stroke-border" />
          <text x="580" y="668" fontSize="3.6" fontWeight="800" className="fill-foreground">“Situations in which parental consent is usually not required”</text>
          <text x="580" y="678" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">First Aid’s OWN framing — Sex, Drugs, Rock and roll print in BOLD RED (attributed)</text>
          <text x="580" y="700" fontSize="3.6" fontWeight="800" className="fill-emergency">Sex</text>
          <text x="622" y="700" fontSize="2.8" fontWeight="700" className="fill-foreground/80">(contraception, STIs, prenatal care—usually not abortion)</text>
          <text x="580" y="716" fontSize="3.6" fontWeight="800" className="fill-emergency">Drugs</text>
          <text x="632" y="716" fontSize="2.8" fontWeight="700" className="fill-foreground/80">(substance use disorder treatment)</text>
          <text x="580" y="732" fontSize="3.6" fontWeight="800" className="fill-emergency">Rock and roll</text>
          <text x="676" y="732" fontSize="2.8" fontWeight="700" className="fill-foreground/80">(emergency/trauma)</text>
          <text x="580" y="754" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">care CATEGORIES — no emancipation needed: they authorize the</text>
          <text x="580" y="764" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">minor’s consent for that care only, not for elective surgery (KYP)</text>
        </g>

        {/* the closers: communication + assent */}
        <g>
          <rect x="52" y="786" width="494" height="52" rx="10" className="fill-card stroke-brand" />
          <text x="66" y="804" fontSize="3" fontWeight="800" className="fill-brand">COMMUNICATION — always</text>
          <text x="66" y="816" fontSize="2.7" fontWeight="700" className="fill-foreground/80">“Physicians should always encourage healthy minor-guardian communication.”</text>
          <text x="66" y="828" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">encourage — never compel or disclose over the patient’s refusal (KYP)</text>
        </g>
        <g>
          <rect x="564" y="786" width="502" height="52" rx="10" className="fill-card stroke-brand" />
          <text x="578" y="804" fontSize="3" fontWeight="800" className="fill-brand">ASSENT — seek it anyway</text>
          <text x="578" y="816" fontSize="2.7" fontWeight="700" className="fill-foreground/80">“Physician should seek a minor’s assent (agreement of someone unable to legally</text>
          <text x="578" y="826" fontSize="2.7" fontWeight="700" className="fill-foreground/80">consent) even if their consent is not required.”</text>
        </g>
      </g>

      {/* ===== ZONE D — ADVANCE DIRECTIVES ===== */}
      <g>
        <rect x="36" y="868" width="1030" height="330" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="890" fontSize="5.4" fontWeight="800" className="fill-foreground">THE ADVANCE DIRECTIVES — four instruments, ranked by flexibility</text>
        <text x="52" y="901" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">“Instructions given by a patient in anticipation of the need for a medical decision. Details vary per state law.” · the ladder is the KYP synthesis of the</text>
        <text x="52" y="911" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">printed cues — the Oral row’s “problems arise from variance in interpretation” and the POA row’s “More flexible than a living will”</text>

        {/* rung 1 — ORAL (words) */}
        <g>
          <rect x="52" y="990" width="316" height="122" rx="10" className="fill-card stroke-border" />
          <rect x="66" y="1002" width="120" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="74" y="1013" fontSize="2.7" fontWeight="800" className="fill-warning">WORDS — least formal</text>
          <text x="66" y="1038" fontSize="4" fontWeight="800" className="fill-brand">Oral advance directive</text>
          <text x="66" y="1054" fontSize="2.7" fontWeight="700" className="fill-foreground/80">Incapacitated patient’s prior oral statements commonly</text>
          <text x="66" y="1064" fontSize="2.7" fontWeight="700" className="fill-foreground/80">used as guide. Problems arise from variance in interpretation.</text>
          <text x="66" y="1082" fontSize="2.6" fontWeight="800" className="fill-success">MORE VALID if informed · specific · a choice ·</text>
          <text x="66" y="1092" fontSize="2.6" fontWeight="800" className="fill-success">repeated over time to multiple people</text>
        </g>

        {/* rung 2 — WRITTEN (paper) */}
        <g>
          <rect x="388" y="964" width="316" height="122" rx="10" className="fill-card stroke-border" />
          <rect x="402" y="976" width="110" height="16" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="410" y="987" fontSize="2.7" fontWeight="800" className="fill-success">PAPER — specific</text>
          <text x="402" y="1012" fontSize="4" fontWeight="800" className="fill-brand">Written advance directive</text>
          <text x="402" y="1028" fontSize="2.7" fontWeight="700" className="fill-foreground/80">Delineates specific healthcare interventions that patient</text>
          <text x="402" y="1038" fontSize="2.7" fontWeight="700" className="fill-foreground/80">anticipates accepting or rejecting during treatment for a</text>
          <text x="402" y="1048" fontSize="2.7" fontWeight="700" className="fill-foreground/80">critical or life-threatening illness.</text>
          <text x="402" y="1068" fontSize="2.6" fontWeight="800" className="fill-success">A LIVING WILL IS AN EXAMPLE — rigid but precise:</text>
          <text x="402" y="1078" fontSize="2.6" fontWeight="800" className="fill-success">it says only what it says</text>
        </g>

        {/* rung 3 — MEDICAL POWER OF ATTORNEY (person) */}
        <g>
          <rect x="724" y="938" width="324" height="122" rx="10" className="fill-card stroke-brand" />
          <rect x="738" y="950" width="140" height="16" rx="5" className="fill-brand-soft" />
          <text x="746" y="961" fontSize="2.7" fontWeight="800" className="fill-brand">PERSON — most flexible</text>
          <text x="738" y="986" fontSize="4" fontWeight="800" className="fill-brand">Medical power of attorney</text>
          <text x="738" y="1002" fontSize="2.7" fontWeight="700" className="fill-foreground/80">Patient designates an agent to make medical decisions in</text>
          <text x="738" y="1012" fontSize="2.7" fontWeight="700" className="fill-foreground/80">the event that the patient loses decision-making capacity.</text>
          <text x="738" y="1022" fontSize="2.7" fontWeight="700" className="fill-foreground/80">Patient may also specify decisions in clinical situations.</text>
          <text x="738" y="1040" fontSize="2.6" fontWeight="800" className="fill-success">“MORE FLEXIBLE THAN A LIVING WILL” · can be revoked by</text>
          <text x="738" y="1050" fontSize="2.6" fontWeight="800" className="fill-success">patient if decision-making capacity is intact</text>
        </g>

        {/* the rising flexibility arrow (KYP) */}
        <path d="M 66 1130 L 1006 1092" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="4 4" fill="none" />
        <path d="M 1004 1086 L 1016 1091 L 1005 1098 Z" className="fill-muted-foreground" />
        <text x="52" y="1144" fontSize="3.2" fontWeight="800" className="fill-foreground">FLEXIBILITY RISES — words are contested · paper is specific · a person adapts (KYP ladder; the print ranks only implicitly)</text>

        {/* the scoped order — DNR */}
        <g>
          <rect x="52" y="1152" width="996" height="32" rx="8" className="fill-warning-soft/50 stroke-warning" />
          <text x="66" y="1166" fontSize="3.2" fontWeight="800" className="fill-warning">THE SCOPED ORDER — “DNR order prohibits cardiopulmonary resuscitation (CPR). Patient may still consider other life-sustaining measures</text>
          <text x="66" y="1178" fontSize="3.2" fontWeight="800" className="fill-warning">(eg, intubation, feeding tube, chemotherapy).” — a DNR is not “do not treat”: it forbids CPR only, everything else is a separate decision</text>
        </g>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1212" width="1054" height="64" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1230" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 291 / book 269 (Public Health Sciences — Ethics: Informed consent; Consent for minors; Advance directives)</text>
        <text x="42" y="1242" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the page&apos;s single printed asset is the two-column term/definition table (bold navy terms on pale shaded cells, thin black rules, no zebra;</text>
        <text x="42" y="1252" fontSize="3.8" className="fill-muted-foreground">VLM-read at 120dpi, staging-pubh19/vlm-census.txt). ORIGINAL KYP ADAPTATION — the pillar / valve / gate / ladder layout is KYP&apos;s; every printed label and definition is preserved,</text>
        <text x="42" y="1262" fontSize="3.8" className="fill-muted-foreground">and both of First Aid&apos;s red mnemonic devices are carried attributed: “Exceptions to informed consent (WIPE it away)” with its W·I·P·E initials, and the Sex / Drugs / Rock and roll row.</text>
        <text x="42" y="1272" fontSize="3.8" className="fill-muted-foreground">ADJUDICATION — the flexibility ladder is the KYP synthesis of printed cues; the DNR is drawn as the scoped CPR-only order, not a ladder rung (the print never ranks it).</text>
      </g>
    </svg>
  );
};
