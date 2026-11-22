/* Public Health — PUBH batch 2, topic 20: Surrogate decision-makers,
 * confidentiality, and gifts (FULL pdf page 292 / book 270 — the THIRD page
 * under the ETHICS banner and its LAST; pdf 293 opens COMMUNICATION SKILLS).
 * The page carries FOUR label-column text blocks, all owned: (1)
 * "Ventilator-assisted life support" — the preference gap, the surrogate
 * (patient identified or legally appointed) weighing the prognosis of the
 * condition + the believed wishes of the patient, the OVERRIDE RULE
 * (withhold or withdraw "regardless of what the surrogate prefers"), and the
 * support wrap (palliative care, chaplain services, primary care physician,
 * emotional support); (2) "Surrogate decision-maker" — capacity lost + no
 * advance directive → the priority chain spouse → adult children → parents →
 * adult siblings → other relatives; (3) "Confidentiality" — the default
 * (privacy and autonomy), the waiver (eg, insurance company request), the
 * incapacitated/emergent judgment, the three general principles, and the five
 * SAVED exceptions with the warn mechanics (public officials notify people at
 * risk; TB or Ebola may require involuntary treatment); (4) "Accepting gifts
 * from patients" — the harm-vs-benefit assessment, the three decline rules,
 * and the decline script. Census (pdfimages): ZERO raster images — pure text;
 * every block is an ORIGINAL KYP ADAPTATION (the ladder, rule strip, five
 * cards, gates, and gifts panel are KYP's layout; no source artwork exists to
 * redraw). VLM-read at 120dpi (staging-pubh20/vlm-census.txt): First Aid's
 * TWO mnemonics print in RED — "the spouse chips in" (inside the priority
 * chain's parenthesis) and "The physician's good judgment SAVED the day"
 * (SAVED in red capitals, the initial capitals S-A-V-E-D of the five bullets
 * picked out in red) — carried VERBATIM and ATTRIBUTED (emergency-colored
 * fill + "First Aid" attribution tags), never as KYP originals; the
 * ventilator override rule prints in plain roman text with a black arrow;
 * bullets are small solid squares; the ETHICS banner prints ONCE (running
 * header). ADJUDICATION drawn as printed: the block-2 heading prints
 * "Surrogate decision-maker" with the hyphen at the line wrap (pdftotext
 * -layout + VLM agree; the raw text layer merges it to "Surrogate
 * decisionmaker" — documented in the note and the manifest). The KYP-original
 * hooks ("SERIOUS, STUCK, STOPPABLE", "WISHES, NOT WANTS") are labeled KYP.
 * Nothing is reproduced from the book; purely presentational (no props, no
 * hooks, no external images). */

export const ConfidentialityMap = () => {
  const w = 1102;
  const h = 1300;

  /* One SAVED letter card — the letter circles and bodies; every label is the
   * print's own; the card layout is KYP's. */
  const savedCard = (
    x: number,
    letter: string,
    title: string,
    lines: string[],
    key: string,
  ) => (
    <g key={key}>
      <rect x={x} y={706} width="196" height="132" rx="10" className="fill-card stroke-border" />
      <circle cx={x + 22} cy={726} r="12" className="fill-emergency-soft/50 stroke-emergency" />
      <text x={x + 22} y={730} textAnchor="middle" fontSize="6" fontWeight="800" className="fill-emergency">{letter}</text>
      <text x={x + 40} y={729} fontSize="3.4" fontWeight="800" className="fill-foreground">{title}</text>
      {lines.map((t, i) => (
        <text key={i} x={x + 14} y={750 + i * 11} fontSize="2.5" fontWeight="700" className="fill-foreground/80">{t}</text>
      ))}
      <text x={x + 14} y={831} fontSize="2.4" fontWeight="700" className="fill-muted-foreground">printed initial capital in red</text>
    </g>
  );

  /* One gate chip — the three general principles. */
  const gate = (x: number, lead: string, lines: string[], key: string) => (
    <g key={key}>
      <rect x={x} y={656} width="320" height="38" rx="8" className="fill-card stroke-brand" />
      <text x={x + 12} y={670} fontSize="3" fontWeight="800" className="fill-brand">{lead}</text>
      {lines.map((t, i) => (
        <text key={i} x={x + 12} y={681 + i * 9.5} fontSize="2.5" fontWeight="700" className="fill-foreground/80">{t}</text>
      ))}
    </g>
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Surrogate decision-makers confidentiality and gifts — the surrogate priority ladder (spouse, then adult children, parents, adult siblings, other relatives — First Aid's mnemonic the spouse chips in, attributed), the ventilator decision rule (surrogate decision-makers weigh the prognosis of the condition and the believed wishes of the patient; if the patient would not have wanted life support with ventilation, withhold or withdraw it regardless of what the surrogate prefers, then involve palliative care, chaplain services, and the primary care physician with emotional support), confidentiality's default and waiver, the three general principles (serious and imminent harm, no alternative means to warn or protect, steps can prevent harm), and First Aid's mnemonic The physician's good judgment SAVED the day as five lettered cards (Suicidal/homicidal ideation, Abuse of children and older adults and prisoners, duty to protect a potential Victim, Epilepsy and other impaired automobile drivers, reportable Diseases with public officials notifying people at risk and TB or Ebola requiring possible involuntary treatment), plus the gifts decision panel (cards, baked goods, and inexpensive gifts against the risk-of-harm-versus-benefit assessment, the three decline rules, and the decline script that thanks the patient and preserves the relationship) — an original KYP diagram of book 270." className="min-w-[1060px]">
      <title>Surrogate decision-makers, confidentiality, and gifts — book 270 in one diagram</title>
      <desc>
        Four zones: the surrogate priority ladder (capacity lost + no advance directive → spouse → adult children → parents → adult siblings → other relatives, with First Aid's red mnemonic "the spouse chips in" attributed); the ventilator decision rule strip (the preference gap → prognosis + believed wishes → the override rule → the palliative wrap); confidentiality (the default, waiver, and emergent judgment; the three general principles as gate chips; the five SAVED exception cards with the warn mechanics); and the gifts decision panel (the practice norm, the harm-versus-benefit assessment, the three decline rules, and the decline script).
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Surrogate decision-makers, confidentiality, and gifts — book 270 in one diagram</text>
        <rect x="802" y="25" width="260" height="18" rx="6" className="fill-brand-soft" />
        <text x="932" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">4 blocks · 2 red FA mnemonics</text>
      </g>

      {/* ===== ZONE A — THE SURROGATE PRIORITY LADDER ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="264" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE SURROGATE PRIORITY LADDER — who decides when the patient cannot</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the ladder activates only if the patient loses decision-making capacity AND has not prepared an advance directive — a prepared directive governs instead (book 269)</text>

        {/* the two triggers + the task */}
        <g>
          <rect x="52" y="116" width="220" height="20" rx="7" className="fill-warning-soft/50 stroke-warning" />
          <text x="64" y="129" fontSize="2.7" fontWeight="800" className="fill-warning">TRIGGER 1 — decision-making capacity lost</text>
          <rect x="52" y="142" width="220" height="20" rx="7" className="fill-warning-soft/50 stroke-warning" />
          <text x="64" y="155" fontSize="2.7" fontWeight="800" className="fill-warning">TRIGGER 2 — no advance directive prepared</text>
          <line x1="162" y1="166" x2="162" y2="176" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 158 174 L 162 184 L 166 174 Z" className="fill-foreground" />
          <rect x="52" y="188" width="220" height="66" rx="8" className="fill-card stroke-border" />
          <text x="64" y="203" fontSize="2.7" fontWeight="800" className="fill-foreground">THE SURROGATES&apos; TASK</text>
          <text x="64" y="215" fontSize="2.5" fontWeight="700" className="fill-foreground/80">individuals (surrogates) who know the</text>
          <text x="64" y="226" fontSize="2.5" fontWeight="700" className="fill-foreground/80">patient must determine what the patient</text>
          <text x="64" y="237" fontSize="2.5" fontWeight="700" className="fill-foreground/80">would have done — substituted judgment,</text>
          <text x="64" y="248" fontSize="2.5" fontWeight="700" className="fill-foreground/80">not the surrogate&apos;s own choice (KYP)</text>
        </g>

        {/* the five rungs */}
        <g>
          {[
            { n: "1", label: "Spouse", note: "the spouse decides first" },
            { n: "2", label: "Adult children", note: "then the children, together" },
            { n: "3", label: "Parents", note: "then the parents" },
            { n: "4", label: "Adult siblings", note: "then the siblings" },
            { n: "5", label: "Other relatives", note: "the last rung" },
          ].map((r, i) => (
            <g key={r.n}>
              <rect x="310" y={116 + i * 36} width="300" height="26" rx="8" className={i === 0 ? "fill-brand-soft/60 stroke-brand" : "fill-card stroke-border"} />
              <circle cx={330} cy={129 + i * 36} r="9" className={i === 0 ? "fill-brand-soft stroke-brand" : "fill-secondary stroke-border"} />
              <text x={330} y={131.5 + i * 36} textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">{r.n}</text>
              <text x={346} y={132.5 + i * 36} fontSize="3.6" fontWeight="800" className="fill-foreground">{r.label}</text>
              <text x={462} y={132.5 + i * 36} fontSize="2.4" fontWeight="700" className="fill-muted-foreground">{r.note}</text>
              {i < 4 && (
                <g>
                  <line x1={460} y1={142 + i * 36} x2={460} y2={148 + i * 36} className="stroke-foreground" strokeWidth="1.2" />
                  <path d={`M ${456} ${146 + i * 36} L 460 ${152 + i * 36} L ${464} ${146 + i * 36} Z`} className="fill-foreground" />
                </g>
              )}
            </g>
          ))}
        </g>

        {/* the FA mnemonic panel */}
        <g>
          <rect x="640" y="116" width="410" height="60" rx="10" className="fill-card stroke-emergency" />
          <text x="656" y="136" fontSize="4.4" fontWeight="800" className="fill-emergency">“the spouse chips in”</text>
          <text x="656" y="149" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">FIRST AID&apos;S OWN mnemonic, printed in red inside the chain&apos;s parenthesis —</text>
          <text x="656" y="159" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">Spouse → Children → Parents → Siblings → other relatives, in exactly this order</text>
          <text x="656" y="169" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">(carried verbatim and attributed; not KYP&apos;s)</text>
        </g>
        <g>
          <rect x="640" y="188" width="410" height="66" rx="10" className="fill-card stroke-neural" />
          <text x="656" y="207" fontSize="3" fontWeight="800" className="fill-neural">THE ROUTING RULE (KYP framing of the print)</text>
          <text x="656" y="220" fontSize="2.6" fontWeight="700" className="fill-foreground/80">capacity present → the patient decides · capacity lost + directive prepared →</text>
          <text x="656" y="231" fontSize="2.6" fontWeight="700" className="fill-foreground/80">the directive governs · capacity lost + no directive → this ladder, spouse first.</text>
          <text x="656" y="242" fontSize="2.6" fontWeight="700" className="fill-foreground/80">Two relatives in conflict? The higher rung decides — the exam&apos;s favorite ladder stem.</text>
        </g>
        <text x="52" y="316" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Printed chain, as extracted: “Priority of surrogates: spouse → adult children → parents → adult siblings → other relatives (the spouse chips in).” — the raw layer carries C1 bytes around the arrows (known artifact)</text>
      </g>

      {/* ===== ZONE B — THE VENTILATOR DECISION RULE ===== */}
      <g>
        <rect x="36" y="348" width="1030" height="196" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="370" fontSize="5.4" fontWeight="800" className="fill-foreground">THE VENTILATOR DECISION RULE — ventilator-assisted life support</text>
        <text x="52" y="381" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">discussions with patients ideally occur before ventilator support is necessary — but preferences may be absent when the intervention is needed to survive</text>

        {/* box 1 — the gap */}
        <g>
          <rect x="52" y="394" width="204" height="66" rx="8" className="fill-card stroke-border" />
          <text x="64" y="409" fontSize="2.9" fontWeight="800" className="fill-brand">THE PREFERENCE GAP</text>
          <text x="64" y="421" fontSize="2.5" fontWeight="700" className="fill-foreground/80">surrogate decision-makers step in</text>
          <text x="64" y="432" fontSize="2.5" fontWeight="700" className="fill-foreground/80">(patient identified or legally appointed)</text>
          <text x="64" y="443" fontSize="2.5" fontWeight="700" className="fill-foreground/80">to discuss continuation or withdrawal</text>
          <text x="64" y="454" fontSize="2.5" fontWeight="700" className="fill-foreground/80">of ventilatory support</text>
        </g>
        <line x1="256" y1="427" x2="266" y2="427" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 264 423 L 274 427 L 264 431 Z" className="fill-foreground" />

        {/* box 2 — the two inputs */}
        <g>
          <rect x="276" y="394" width="204" height="66" rx="8" className="fill-card stroke-border" />
          <text x="288" y="409" fontSize="2.9" fontWeight="800" className="fill-brand">THE TWO INPUTS</text>
          <text x="288" y="421" fontSize="2.5" fontWeight="700" className="fill-foreground/80">1 · the prognosis of the condition</text>
          <text x="288" y="432" fontSize="2.5" fontWeight="700" className="fill-foreground/80">2 · the believed wishes of the patient</text>
          <text x="288" y="443" fontSize="2.5" fontWeight="700" className="fill-foreground/80">— both, always (as printed)</text>
          <text x="288" y="454" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">the medical facts AND the patient&apos;s values</text>
        </g>
        <line x1="480" y1="427" x2="490" y2="427" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 488 423 L 498 427 L 488 431 Z" className="fill-foreground" />

        {/* box 3 — the override rule */}
        <g>
          <rect x="498" y="394" width="304" height="66" rx="8" className="fill-emergency-soft/40 stroke-emergency" />
          <text x="510" y="409" fontSize="2.9" fontWeight="800" className="fill-emergency">THE OVERRIDE RULE (printed with the arrow)</text>
          <text x="510" y="421" fontSize="2.5" fontWeight="800" className="fill-foreground/90">If surrogates indicate patient would not have wanted to receive</text>
          <text x="510" y="432" fontSize="2.5" fontWeight="800" className="fill-foreground/90">life support with ventilation → withhold or withdraw life support</text>
          <text x="510" y="443" fontSize="2.5" fontWeight="800" className="fill-emergency">regardless of what the surrogate prefers.</text>
          <text x="510" y="454" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">WISHES, NOT WANTS — KYP original hook for the printed rule</text>
        </g>
        <line x1="802" y1="427" x2="812" y2="427" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 810 423 L 820 427 L 810 431 Z" className="fill-foreground" />

        {/* box 4 — the support wrap */}
        <g>
          <rect x="820" y="394" width="230" height="66" rx="8" className="fill-success-soft/40 stroke-success" />
          <text x="832" y="409" fontSize="2.9" fontWeight="800" className="fill-success">THE SUPPORT WRAP</text>
          <text x="832" y="421" fontSize="2.5" fontWeight="700" className="fill-foreground/80">involve palliative care, chaplain services,</text>
          <text x="832" y="432" fontSize="2.5" fontWeight="700" className="fill-foreground/80">and the primary care physician in medical</text>
          <text x="832" y="443" fontSize="2.5" fontWeight="700" className="fill-foreground/80">discussions with the family and provide</text>
          <text x="832" y="454" fontSize="2.5" fontWeight="700" className="fill-foreground/80">emotional support</text>
        </g>

        {/* the rule strip */}
        <line x1="52" y1="478" x2="1050" y2="478" className="stroke-border" strokeWidth="1" />
        <text x="52" y="492" fontSize="3.6" fontWeight="800" className="fill-foreground">THE KYP RULE — the believed wishes of the patient govern the ventilator, not the surrogate&apos;s own preference; and the wrap (palliative care · chaplain · primary care physician · emotional support) is part of the printed answer</text>
        <text x="52" y="504" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Exam shape: a surrogate reports the patient “would never have wanted this” but begs to continue — honor the patient&apos;s believed wishes and withdraw, with the wrap (VLM: the printed rule sits in plain roman text with a black arrow, not a box)</text>
        <text x="52" y="516" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">The next page of the Ethics story: this rule is substituted judgment — the same principle that powers the advance directives on book 269</text>
      </g>

      {/* ===== ZONE C — CONFIDENTIALITY ===== */}
      <g>
        <rect x="36" y="558" width="1030" height="376" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="580" fontSize="5.4" fontWeight="800" className="fill-foreground">CONFIDENTIALITY — the default, the three gates, and the five SAVED exceptions</text>
        <text x="52" y="591" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">First Aid&apos;s own mnemonic “The physician&apos;s good judgment SAVED the day” — SAVED prints in red, and the initial capitals of the five bullets print in red (attributed; not KYP&apos;s)</text>

        {/* the default row */}
        <g>
          <rect x="52" y="602" width="320" height="38" rx="8" className="fill-card stroke-success" />
          <text x="64" y="616" fontSize="3" fontWeight="800" className="fill-success">THE DEFAULT</text>
          <text x="64" y="627" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Confidentiality respects patient privacy and autonomy —</text>
          <text x="64" y="637" fontSize="2.5" fontWeight="700" className="fill-foreground/80">the information belongs to the patient</text>
          <rect x="384" y="602" width="320" height="38" rx="8" className="fill-card stroke-success" />
          <text x="396" y="616" fontSize="3" fontWeight="800" className="fill-success">THE WAIVER (not a breach)</text>
          <text x="396" y="627" fontSize="2.5" fontWeight="700" className="fill-foreground/80">the patient may voluntarily waive the right to confidentiality</text>
          <text x="396" y="637" fontSize="2.5" fontWeight="700" className="fill-foreground/80">(eg, insurance company request)</text>
          <rect x="716" y="602" width="334" height="38" rx="8" className="fill-card stroke-success" />
          <text x="728" y="616" fontSize="3" fontWeight="800" className="fill-success">INCAPACITATED / EMERGENT (not a breach)</text>
          <text x="728" y="627" fontSize="2.5" fontWeight="700" className="fill-foreground/80">disclosure to family and friends guided by professional judgment</text>
          <text x="728" y="637" fontSize="2.5" fontWeight="700" className="fill-foreground/80">of patient&apos;s best interest</text>
        </g>

        {/* connector */}
        <line x1="551" y1="640" x2="551" y2="648" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 547 646 L 551 654 L 555 646 Z" className="fill-foreground" />

        {/* the three gates */}
        <text x="52" y="652" fontSize="3" fontWeight="800" className="fill-foreground">GENERAL PRINCIPLES FOR EXCEPTIONS — all three must hold before confidentiality yields:</text>
        {gate(52, "GATE 1 — SERIOUS", ["potential physical harm to self or others is", "serious and imminent"], "g1")}
        {gate(384, "GATE 2 — STUCK", ["alternative means to warn or protect those at", "risk is not possible"], "g2")}
        {gate(716, "GATE 3 — STOPPABLE", ["steps can be taken to prevent the harm"], "g3")}

        {/* connector */}
        <line x1="551" y1="694" x2="551" y2="700" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 547 698 L 551 704 L 555 698 Z" className="fill-foreground" />

        {/* the five SAVED cards */}
        <text x="52" y="702" fontSize="2.8" fontWeight="800" className="fill-emergency">“The physician&apos;s good judgment SAVED the day” — the five printed examples, many state specific:</text>
        {savedCard(52, "S", "Suicidal / homicidal", ["patients with active", "Suicidal/homicidal ideation —", "the harm is to self or others,", "and it is imminent"], "sv-s")}
        {savedCard(260, "A", "Abuse", ["abuse of children, older", "adults, and/or prisoners —", "the protected groups print", "in the bullet itself"], "sv-a")}
        {savedCard(468, "V", "Duty to protect", ["state-specific laws that", "sometimes allow physician to", "inform or somehow protect the", "potential Victim from harm"], "sv-v")}
        {savedCard(676, "E", "Epilepsy", ["patients with Epilepsy and", "other impaired automobile", "drivers — report despite", "confidentiality (state specific)"], "sv-e")}
        {savedCard(884, "D", "Reportable Diseases", ["eg, STIs, hepatitis, food", "poisoning — the physician warns", "public officials, who then notify", "people at risk"], "sv-d")}

        {/* the warn mechanics strip */}
        <rect x="52" y="848" width="998" height="34" rx="8" className="fill-card stroke-border" strokeDasharray="4 3" />
        <text x="64" y="862" fontSize="2.9" fontWeight="800" className="fill-foreground">THE WARN MECHANICS — physicians may have a duty to warn public officials, who will then notify people at risk</text>
        <text x="64" y="873" fontSize="2.6" fontWeight="700" className="fill-emergency">and the printed edge: dangerous communicable diseases, such as TB or Ebola, may require involuntary treatment — the one exception that reaches past disclosure into treatment</text>

        <text x="52" y="900" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">“many are state specific” prints unhyphenated, as shown — the duty-to-protect, impaired-driver, and reportable lists vary by state (as printed); the gates + roster answer every breach vignette</text>
        <text x="52" y="912" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Keep-side disclosures (waiver, incapacitated/emergent judgment) work FOR the patient; the SAVED letters override the patient — that contrast is the compare block in the note</text>
      </g>

      {/* ===== ZONE D — THE GIFTS DECISION PANEL ===== */}
      <g>
        <rect x="36" y="948" width="1030" height="250" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="970" fontSize="5.4" fontWeight="800" className="fill-foreground">ACCEPTING GIFTS FROM PATIENTS — one assessment, three declines, one script</text>
        <text x="52" y="981" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">“a complex subject without definitive regulations” — the decision rests on an individual assessment of whether or not the risk of harm outweighs the potential benefit</text>

        {/* the practice box */}
        <g>
          <rect x="52" y="994" width="300" height="94" rx="8" className="fill-card stroke-border" />
          <text x="64" y="1009" fontSize="2.9" fontWeight="800" className="fill-brand">IN PRACTICE</text>
          <text x="64" y="1021" fontSize="2.5" fontWeight="700" className="fill-foreground/80">patients often present items such as cards,</text>
          <text x="64" y="1032" fontSize="2.5" fontWeight="700" className="fill-foreground/80">baked goods, and inexpensive gifts</text>
          <text x="64" y="1046" fontSize="2.5" fontWeight="700" className="fill-foreground/80">the printed debate: some argue the patient-</text>
          <text x="64" y="1057" fontSize="2.5" fontWeight="700" className="fill-foreground/80">physician relationship is strengthened by</text>
          <text x="64" y="1068" fontSize="2.5" fontWeight="700" className="fill-foreground/80">accepting; others argue negative consequences</text>
          <text x="64" y="1079" fontSize="2.5" fontWeight="700" className="fill-foreground/80">outweigh the benefits</text>
        </g>
        <line x1="352" y1="1041" x2="362" y2="1041" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 360 1037 L 370 1041 L 360 1045 Z" className="fill-foreground" />

        {/* the assessment box */}
        <g>
          <rect x="368" y="994" width="316" height="94" rx="8" className="fill-brand-soft/40 stroke-brand" />
          <text x="380" y="1009" fontSize="2.9" fontWeight="800" className="fill-brand">THE ONE ASSESSMENT</text>
          <text x="380" y="1021" fontSize="2.6" fontWeight="800" className="fill-foreground/90">does the risk of harm outweigh the potential</text>
          <text x="380" y="1032" fontSize="2.6" fontWeight="800" className="fill-foreground/90">benefit? — accept or decline on this alone</text>
          <text x="380" y="1046" fontSize="2.5" fontWeight="700" className="fill-foreground/80">small and inexpensive (cards, baked goods)</text>
          <text x="380" y="1057" fontSize="2.5" fontWeight="700" className="fill-success">→ usually accept</text>
          <text x="380" y="1071" fontSize="2.5" fontWeight="700" className="fill-foreground/80">any of the three decline rules met</text>
          <text x="380" y="1082" fontSize="2.5" fontWeight="700" className="fill-emergency">→ decline, with the script below</text>
        </g>
        <line x1="684" y1="1041" x2="694" y2="1041" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 692 1037 L 702 1041 L 692 1045 Z" className="fill-foreground" />

        {/* the three decline rules */}
        <g>
          <rect x="700" y="994" width="350" height="28" rx="8" className="fill-warning-soft/50 stroke-warning" />
          <text x="712" y="1006" fontSize="2.7" fontWeight="800" className="fill-warning">DECLINE 1 — TOO BIG</text>
          <text x="712" y="1017" fontSize="2.5" fontWeight="700" className="fill-foreground/80">gifts inappropriately large or valuable</text>
          <rect x="700" y="1028" width="350" height="28" rx="8" className="fill-warning-soft/50 stroke-warning" />
          <text x="712" y="1040" fontSize="2.7" fontWeight="800" className="fill-warning">DECLINE 2 — CARE-AFFECTING</text>
          <text x="712" y="1051" fontSize="2.5" fontWeight="700" className="fill-foreground/80">gifts that could detrimentally affect patient care</text>
          <rect x="700" y="1062" width="350" height="28" rx="8" className="fill-warning-soft/50 stroke-warning" />
          <text x="712" y="1074" fontSize="2.7" fontWeight="800" className="fill-warning">DECLINE 3 — PATIENT-STRESSING</text>
          <text x="712" y="1085" fontSize="2.5" fontWeight="700" className="fill-foreground/80">gifts that may cause emotional or financial stress for the patient</text>
        </g>

        {/* the decline script strip */}
        <rect x="52" y="1100" width="998" height="56" rx="10" className="fill-card stroke-success" />
        <text x="64" y="1116" fontSize="3" fontWeight="800" className="fill-success">THE DECLINE SCRIPT (as printed) — when a gift violates any guideline:</text>
        <text x="64" y="1130" fontSize="2.7" fontWeight="800" className="fill-foreground/90">1 · thank the patient for offering a kind gift</text>
        <text x="64" y="1143" fontSize="2.7" fontWeight="800" className="fill-foreground/90">2 · politely indicate that it must be declined</text>
        <text x="64" y="1156" fontSize="2.7" fontWeight="800" className="fill-foreground/90">3 · emphasize that the incident does not influence the physician-patient relationship in any way</text>
        <text x="64" y="1170" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the script is testable content — the exam&apos;s answer option carries all three moves, not just the refusal</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1212" width="1054" height="66" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1230" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 292 / book 270 (Public Health Sciences — Ethics: Ventilator-assisted life support; Surrogate decision-maker; Confidentiality; Accepting gifts from patients)</text>
        <text x="42" y="1242" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — four label-column text blocks (blue bold headings, thin rules between blocks; VLM-read at 120dpi, staging-pubh20/vlm-census.txt): “the spouse chips in” and “SAVED” + the</text>
        <text x="42" y="1252" fontSize="3.8" className="fill-muted-foreground">S-A-V-E-D initial capitals print in RED — First Aid&apos;s own mnemonics, carried VERBATIM and ATTRIBUTED. ORIGINAL KYP ADAPTATION — the ladder, rule strip, gates, five cards, and gifts panel are KYP&apos;s layout;</text>
        <text x="42" y="1262" fontSize="3.8" className="fill-muted-foreground">every printed label is preserved and the four blocks are carried verbatim in the note&apos;s table block. ADJUDICATION — the block-2 heading prints “Surrogate decision-maker” (hyphen at the wrap; the raw</text>
        <text x="42" y="1272" fontSize="3.8" className="fill-muted-foreground">text layer merges it to “Surrogate decisionmaker” — documented); “SERIOUS, STUCK, STOPPABLE” and “WISHES, NOT WANTS” are KYP originals, labeled as such.</text>
      </g>
    </svg>
  );
};
