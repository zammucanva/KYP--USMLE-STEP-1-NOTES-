/* Public Health — PUBH batch 2, topic 23: Interpreters and Delivering Bad
 * News: SPIKES (FULL pdf page 295 / book 273 — the THIRD page under the
 * COMMUNICATION SKILLS banner; pdf 293 is the subsection opener, which
 * prints the banner twice — this page prints it ONCE, in the running
 * header only). The page carries TWO side-head blocks, both owned:
 * (1) "Use of interpreters" — SIX printed paragraphs: the
 * professionally-trained-interpreter default with the
 * conversational-fluency exception, the telephone/video-call fallback, the
 * family-member preference recorded in the chart, the never-assume
 * language-ask rule (name / skin tone / accent), the direct-speech rule
 * ("tell him" forbidden), the pace rule (extra time, one question at a
 * time), the spoken-vs-sign positioning mirror, and the emergency
 * any-tools override; (2) "Delivering bad news" — SPIKES, FIRST AID'S OWN
 * acronym, printed in BOLD RED beside the heading, with the six station
 * labels (Setting, Perception, Invitation, Knowledge, Emotions, Strategy)
 * each printing an enlarged RED initial letter + bold navy remainder.
 * Census (pdfimages): ZERO raster images — pure text, no figures; the
 * VLM pass at 120dpi (staging-pubh23/vlm-census.txt) confirmed the bold
 * red SPIKES, the red-initial station labels, the two bold navy block
 * headings, and the absence of margin mnemonics, boxes, and images.
 * Nothing is reproduced from the book: the whole visual is an ORIGINAL
 * KYP ADAPTATION (the fallback ladder, the rule cards, the positioning
 * diagrams with sightline arrows, and the six-station rail are KYP's
 * artwork; every printed rule, position, and station move is preserved
 * from the print, and both blocks are carried VERBATIM in the note's two
 * table blocks). SPIKES is attributed to First Aid, not claimed as KYP's.
 * Purely presentational (no props, no hooks, no external images). */

export const BadNewsMap = () => {
  const w = 1102;
  const h = 1280;

  /* A simple vector person glyph — head + shoulders, labeled. */
  const person = (
    x: number,
    y: number,
    label: string,
    tone: string,
    key: string,
    dashed = false
  ) => (
    <g key={key}>
      <circle
        cx={x}
        cy={y}
        r="8"
        className={tone}
        strokeWidth="1.4"
        fill="none"
        strokeDasharray={dashed ? "3 3" : undefined}
      />
      <path
        d={`M ${x - 13} ${y + 26} q 0 -18 13 -18 q 13 0 13 18 Z`}
        className={tone}
        strokeWidth="1.4"
        fill="none"
        strokeDasharray={dashed ? "3 3" : undefined}
      />
      <text
        x={x}
        y={y + 38}
        textAnchor="middle"
        fontSize="2.6"
        fontWeight="800"
        className="fill-foreground"
      >
        {label}
      </text>
    </g>
  );

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      role="img"
      aria-label="Interpreters and delivering bad news — the interpreter protocol as a fallback ladder (professionally trained medical interpreter in person unless the physician is conversationally fluent, telephone or video call if unavailable, family member if the patient prefers recorded in the chart, emergencies using any tools available — friends, family, sketches, interpreter apps), the language-ask rule (do not assume poor English from name, skin tone, or accent — ask what language is preferred), the direct-speech rule (eye contact with the patient, speaking directly, no third-person tell him, extra time, one question at a time), positioning diagrams for spoken-language interpretation (interpreter next to or slightly behind the patient) versus sign-language interpretation (interpreter next to or slightly behind the physician), and the SPIKES six-station rail attributed to First Aid — Setting, Perception, Invitation, Knowledge, Emotions, Strategy — each station with its printed key moves — an original KYP diagram of book 273."
      className="min-w-[1060px]"
    >
      <title>Interpreters and delivering bad news — the interpreter protocol + the SPIKES rail</title>
      <desc>
        Zone A: the interpreter protocol — the four-rung fallback ladder, the language-ask rule card, the direct-speech rule card with the pace chips, and the two positioning diagrams (spoken language: interpreter at the patient's side; sign language: interpreter at the physician's side). Zone B: First Aid's own SPIKES protocol as a six-station rail — Setting, Perception, Invitation, Knowledge, Emotions, Strategy — each with its printed moves, plus the KYP order strip.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">
          Interpreters and delivering bad news — the interpreter protocol + the SPIKES six-station rail
        </text>
        <rect x="812" y="25" width="250" height="18" rx="6" className="fill-brand-soft" />
        <text x="937" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">
          2 blocks · 6 stations
        </text>
      </g>

      {/* ===== ZONE A — THE INTERPRETER PROTOCOL ===== */}
      <g>
        <rect x="36" y="74" width="1030" height="520" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="96" fontSize="5.4" fontWeight="800" className="fill-foreground">
          THE INTERPRETER PROTOCOL — “Use of interpreters,” rule by rule (the print&apos;s own words; the layout is KYP&apos;s)
        </text>
        <text x="52" y="107" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">
          a patient who speaks little English → who interprets, how to identify the need, how to speak, and where everyone sits — ORIGINAL KYP ADAPTATION
        </text>

        {/* the fallback ladder */}
        <g>
          <rect x="52" y="122" width="228" height="84" rx="9" className="fill-card stroke-success" />
          <text x="64" y="140" fontSize="3.2" fontWeight="800" className="fill-success">PROFESSIONALLY TRAINED</text>
          <text x="64" y="150" fontSize="3.2" fontWeight="800" className="fill-success">MEDICAL INTERPRETER — IN PERSON</text>
          <text x="64" y="166" fontSize="2.7" fontWeight="700" className="fill-foreground/80">the default — unless the physician is</text>
          <text x="64" y="176" fontSize="2.7" fontWeight="700" className="fill-foreground/80">conversationally fluent in the</text>
          <text x="64" y="186" fontSize="2.7" fontWeight="700" className="fill-foreground/80">patient&apos;s preferred language</text>

          <line x1="282" y1="164" x2="304" y2="164" className="stroke-foreground" strokeWidth="1.4" />
          <path d="M 302 160 L 312 164 L 302 168 Z" className="fill-foreground" />

          <rect x="316" y="122" width="228" height="84" rx="9" className="fill-card stroke-success" />
          <text x="328" y="140" fontSize="3.2" fontWeight="800" className="fill-success">TELEPHONE OR VIDEO CALL</text>
          <text x="328" y="166" fontSize="2.7" fontWeight="700" className="fill-foreground/80">if an interpreter is unavailable</text>
          <text x="328" y="176" fontSize="2.7" fontWeight="700" className="fill-foreground/80">in person — interpretation services</text>
          <text x="328" y="186" fontSize="2.7" fontWeight="700" className="fill-foreground/80">may be provided remotely</text>

          <line x1="546" y1="164" x2="568" y2="164" className="stroke-foreground" strokeWidth="1.4" />
          <path d="M 566 160 L 576 164 L 566 168 Z" className="fill-foreground" />

          <rect x="580" y="122" width="228" height="84" rx="9" className="fill-card stroke-brand" />
          <text x="592" y="140" fontSize="3.2" fontWeight="800" className="fill-brand">FAMILY MEMBER</text>
          <text x="592" y="166" fontSize="2.7" fontWeight="700" className="fill-foreground/80">if the patient prefers to utilize</text>
          <text x="592" y="176" fontSize="2.7" fontWeight="700" className="fill-foreground/80">one — this should be recorded</text>
          <text x="592" y="186" fontSize="2.7" fontWeight="700" className="fill-foreground/80">in the chart</text>

          <line x1="810" y1="164" x2="832" y2="164" className="stroke-foreground" strokeWidth="1.4" />
          <path d="M 830 160 L 840 164 L 830 168 Z" className="fill-foreground" />

          <rect x="844" y="122" width="204" height="84" rx="9" className="fill-warning-soft/50 stroke-warning" />
          <text x="856" y="140" fontSize="3.2" fontWeight="800" className="fill-warning">EMERGENCY: ANY TOOLS</text>
          <text x="856" y="166" fontSize="2.7" fontWeight="700" className="fill-foreground/80">friends · family · sketches ·</text>
          <text x="856" y="176" fontSize="2.7" fontWeight="700" className="fill-foreground/80">interpreter apps — even though</text>
          <text x="856" y="186" fontSize="2.7" fontWeight="700" className="fill-foreground/80">not standard procedure otherwise</text>
        </g>

        {/* the two rule cards */}
        <g>
          <rect x="52" y="222" width="502" height="104" rx="10" className="fill-card stroke-warning" />
          <text x="66" y="242" fontSize="4.2" fontWeight="800" className="fill-warning">THE LANGUAGE-ASK RULE — never assume</text>
          <text x="66" y="258" fontSize="2.8" fontWeight="700" className="fill-foreground/80">“Do not assume that a patient is a poor English speaker because of name,</text>
          <text x="66" y="268" fontSize="2.8" fontWeight="700" className="fill-foreground/80">skin tone, or accent.”</text>
          <rect x="66" y="278" width="316" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="74" y="289" fontSize="2.9" fontWeight="800" className="fill-warning">ASK the patient what language is preferred.</text>
          <text x="66" y="312" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the need for an interpreter is established by asking — not by profiling (KYP)</text>

          <rect x="566" y="222" width="502" height="104" rx="10" className="fill-card stroke-brand" />
          <text x="580" y="242" fontSize="4.2" fontWeight="800" className="fill-brand">THE DIRECT-SPEECH RULE — the interpreter is a channel</text>
          <text x="580" y="258" fontSize="2.8" fontWeight="700" className="fill-foreground/80">“Make eye contact with the patient and speak to them directly, without use</text>
          <text x="580" y="268" fontSize="2.8" fontWeight="700" className="fill-foreground/80">of third-person statements such as “tell him.””</text>
          <rect x="580" y="278" width="168" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="588" y="289" fontSize="2.9" fontWeight="800" className="fill-brand">EXTRA time for the interview</text>
          <rect x="756" y="278" width="188" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="764" y="289" fontSize="2.9" fontWeight="800" className="fill-brand">ONE question at a time</text>
          <text x="580" y="312" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the conversation stays two-person: physician ↔ patient (KYP framing of the print)</text>
        </g>

        {/* the positioning diagrams */}
        <g>
          <rect x="52" y="342" width="502" height="218" rx="10" className="fill-card stroke-border" />
          <text x="66" y="364" fontSize="4.2" fontWeight="800" className="fill-foreground">SPOKEN-LANGUAGE INTERPRETATION (in person)</text>
          {/* physician */}
          {person(140, 412, "PHYSICIAN", "stroke-brand", "sp-doc")}
          {/* patient */}
          {person(370, 412, "PATIENT", "stroke-brand", "sp-pt")}
          {/* interpreter — next to / slightly behind the patient */}
          {person(452, 404, "INTERPRETER", "stroke-muted-foreground", "sp-int", true)}
          {/* direct-speech arrow */}
          <line x1="158" y1="412" x2="344" y2="412" className="stroke-foreground" strokeWidth="1.3" />
          <path d="M 342 408 L 352 412 L 342 416 Z" className="fill-foreground" />
          <text x="252" y="402" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-foreground">direct speech — eye contact</text>
          <rect x="68" y="470" width="470" height="20" rx="7" className="fill-success-soft/50 stroke-success" />
          <text x="303" y="483.5" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-success">
            the interpreter ideally next to or slightly behind the PATIENT
          </text>
          <text x="68" y="510" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">
            the patient is the person whose words need carrying — the interpreter voices the patient&apos;s
          </text>
          <text x="68" y="520" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">
            language from the patient&apos;s side (sightline logic: KYP context; the position is printed verbatim)
          </text>

          <rect x="566" y="342" width="502" height="218" rx="10" className="fill-card stroke-border" />
          <text x="580" y="364" fontSize="4.2" fontWeight="800" className="fill-foreground">SIGN-LANGUAGE INTERPRETATION</text>
          {/* interpreter — next to / slightly behind the physician */}
          {person(614, 404, "INTERPRETER", "stroke-muted-foreground", "sl-int", true)}
          {/* physician */}
          {person(700, 412, "PHYSICIAN", "stroke-brand", "sl-doc")}
          {/* patient */}
          {person(930, 412, "PATIENT", "stroke-brand", "sl-pt")}
          {/* the patient watches the physician's face */}
          <line x1="908" y1="412" x2="724" y2="412" className="stroke-foreground" strokeWidth="1.3" strokeDasharray="5 3" />
          <path d="M 726 408 L 716 412 L 726 416 Z" className="fill-foreground" />
          <text x="816" y="402" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-foreground">the patient watches the physician</text>
          <rect x="582" y="470" width="470" height="20" rx="7" className="fill-success-soft/50 stroke-success" />
          <text x="817" y="483.5" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-success">
            the interpreter next to or slightly behind the PHYSICIAN
          </text>
          <text x="582" y="510" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">
            the interpreter&apos;s hands carry the physician&apos;s words from inside the deaf patient&apos;s sightline
          </text>
          <text x="582" y="520" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">
            to the physician&apos;s face (sightline logic: KYP context; the position is printed verbatim)
          </text>
        </g>

        {/* the mirror strip */}
        <line x1="52" y1="570" x2="1050" y2="570" className="stroke-border" strokeWidth="1" />
        <text x="52" y="584" fontSize="3.6" fontWeight="800" className="fill-foreground">
          THE MIRROR, printed verbatim — spoken: “next to or slightly behind the patient” · sign: “next to or slightly behind the physician”
        </text>
      </g>

      {/* ===== ZONE B — THE SPIKES RAIL ===== */}
      <g>
        <rect x="36" y="610" width="1030" height="560" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="632" fontSize="5.4" fontWeight="800" className="fill-foreground">
          DELIVERING BAD NEWS — SPIKES, the six-station rail (First Aid&apos;s own acronym, printed in bold red on book 273 — carried attributed)
        </text>
        <text x="52" y="643" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">
          the print gives each station label an enlarged red initial letter; every move below is the print&apos;s own — the rail layout is KYP&apos;s
        </text>

        {/* CARD S — Setting */}
        <g>
          <rect x="52" y="656" width="326" height="200" rx="10" className="fill-card stroke-border" />
          <text x="70" y="690" fontSize="14" fontWeight="800" className="fill-emergency">S</text>
          <text x="92" y="688" fontSize="5" fontWeight="800" className="fill-brand">Setting</text>
          <line x1="68" y1="700" x2="362" y2="700" className="stroke-border" strokeWidth="1" />
          <text x="70" y="716" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Offer in advance for the patient to bring</text>
          <text x="70" y="726" fontSize="2.9" fontWeight="700" className="fill-foreground/80">support. Eliminate distractions, ensure</text>
          <text x="70" y="736" fontSize="2.9" fontWeight="700" className="fill-foreground/80">privacy, and sit down with the patient</text>
          <text x="70" y="746" fontSize="2.9" fontWeight="700" className="fill-foreground/80">to talk.</text>
          <rect x="70" y="758" width="150" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="78" y="769" fontSize="2.7" fontWeight="800" className="fill-brand">stage before speech</text>
          <text x="70" y="800" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">support offered in advance · no distractions ·</text>
          <text x="70" y="810" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">privacy · the physician sits down</text>
        </g>

        {/* CARD P — Perception */}
        <g>
          <rect x="390" y="656" width="326" height="200" rx="10" className="fill-card stroke-border" />
          <text x="408" y="690" fontSize="14" fontWeight="800" className="fill-emergency">P</text>
          <text x="428" y="688" fontSize="5" fontWeight="800" className="fill-brand">Perception</text>
          <line x1="406" y1="700" x2="700" y2="700" className="stroke-border" strokeWidth="1" />
          <text x="408" y="716" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Determine the patient&apos;s understanding</text>
          <text x="408" y="726" fontSize="2.9" fontWeight="700" className="fill-foreground/80">and expectations of the situation.</text>
          <rect x="408" y="758" width="172" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="416" y="769" fontSize="2.7" fontWeight="800" className="fill-brand">calibrate before content</text>
          <text x="408" y="800" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">what the patient already knows and expects —</text>
          <text x="408" y="810" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">asked before any news is disclosed</text>
        </g>

        {/* CARD I — Invitation */}
        <g>
          <rect x="728" y="656" width="326" height="200" rx="10" className="fill-card stroke-border" />
          <text x="746" y="690" fontSize="14" fontWeight="800" className="fill-emergency">I</text>
          <text x="762" y="688" fontSize="5" fontWeight="800" className="fill-brand">Invitation</text>
          <line x1="744" y1="700" x2="1038" y2="700" className="stroke-border" strokeWidth="1" />
          <text x="746" y="716" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Obtain the patient&apos;s permission to</text>
          <text x="746" y="726" fontSize="2.9" fontWeight="700" className="fill-foreground/80">disclose the news and what level of</text>
          <text x="746" y="736" fontSize="2.9" fontWeight="700" className="fill-foreground/80">detail is desired.</text>
          <rect x="746" y="758" width="196" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="754" y="769" fontSize="2.7" fontWeight="800" className="fill-brand">permission before disclosure</text>
          <text x="746" y="800" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the patient decides whether to receive the</text>
          <text x="746" y="810" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">news now, and in how much depth</text>
        </g>

        {/* CARD K — Knowledge */}
        <g>
          <rect x="52" y="868" width="326" height="200" rx="10" className="fill-card stroke-border" />
          <text x="70" y="902" fontSize="14" fontWeight="800" className="fill-emergency">K</text>
          <text x="90" y="900" fontSize="5" fontWeight="800" className="fill-brand">Knowledge</text>
          <line x1="68" y1="912" x2="362" y2="912" className="stroke-border" strokeWidth="1" />
          <text x="70" y="928" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Share the information in small pieces</text>
          <text x="70" y="938" fontSize="2.9" fontWeight="700" className="fill-foreground/80">without medical jargon, allowing time</text>
          <text x="70" y="948" fontSize="2.9" fontWeight="700" className="fill-foreground/80">to process. Assess the patient&apos;s</text>
          <text x="70" y="958" fontSize="2.9" fontWeight="700" className="fill-foreground/80">understanding.</text>
          <rect x="70" y="970" width="132" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="78" y="981" fontSize="2.7" fontWeight="800" className="fill-brand">chunk, then check</text>
          <text x="70" y="1012" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">small pieces · no jargon · time to process ·</text>
          <text x="70" y="1022" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">a comprehension check built into the station</text>
        </g>

        {/* CARD E — Emotions */}
        <g>
          <rect x="390" y="868" width="326" height="200" rx="10" className="fill-card stroke-border" />
          <text x="408" y="902" fontSize="14" fontWeight="800" className="fill-emergency">E</text>
          <text x="426" y="900" fontSize="5" fontWeight="800" className="fill-brand">Emotions</text>
          <line x1="406" y1="912" x2="700" y2="912" className="stroke-border" strokeWidth="1" />
          <text x="408" y="928" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Acknowledge the patient&apos;s emotions,</text>
          <text x="408" y="938" fontSize="2.9" fontWeight="700" className="fill-foreground/80">and provide opportunity to express</text>
          <text x="408" y="948" fontSize="2.9" fontWeight="700" className="fill-foreground/80">them. Listen and offer empathetic</text>
          <text x="408" y="958" fontSize="2.9" fontWeight="700" className="fill-foreground/80">responses.</text>
          <rect x="408" y="970" width="170" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="416" y="981" fontSize="2.7" fontWeight="800" className="fill-brand">clear emotion before plan</text>
          <text x="408" y="1012" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">a patient absorbing bad news cannot yet</text>
          <text x="408" y="1022" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">weigh treatment options (KYP reading)</text>
        </g>

        {/* CARD S — Strategy */}
        <g>
          <rect x="728" y="868" width="326" height="200" rx="10" className="fill-card stroke-border" />
          <text x="746" y="902" fontSize="14" fontWeight="800" className="fill-emergency">S</text>
          <text x="766" y="900" fontSize="5" fontWeight="800" className="fill-brand">Strategy</text>
          <line x1="744" y1="912" x2="1038" y2="912" className="stroke-border" strokeWidth="1" />
          <text x="746" y="928" fontSize="2.9" fontWeight="700" className="fill-foreground/80">If the patient feels ready, discuss</text>
          <text x="746" y="938" fontSize="2.9" fontWeight="700" className="fill-foreground/80">treatment options and goals of care.</text>
          <text x="746" y="948" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Offer an agenda for the next appointment.</text>
          <text x="746" y="958" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Giving control to the patient may be</text>
          <text x="746" y="968" fontSize="2.9" fontWeight="700" className="fill-foreground/80">empowering. Ask how they feel a problem</text>
          <text x="746" y="978" fontSize="2.9" fontWeight="700" className="fill-foreground/80">might be solved and what they would like</text>
          <text x="746" y="988" fontSize="2.9" fontWeight="700" className="fill-foreground/80">to do about the plan of action.</text>
          <rect x="746" y="998" width="160" height="16" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="754" y="1009" fontSize="2.7" fontWeight="800" className="fill-success">gated: “if the patient feels ready”</text>
          <text x="746" y="1040" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">options · goals of care · a next-appointment agenda ·</text>
          <text x="746" y="1050" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the plan handed back to the patient</text>
        </g>

        {/* the KYP order strip */}
        <rect x="52" y="1080" width="1000" height="66" rx="9" className="fill-card stroke-neural" />
        <text x="68" y="1100" fontSize="3.6" fontWeight="800" className="fill-foreground">
          THE ORDER (KYP reading) — stage the setting → calibrate (perception) → obtain permission (invitation) → disclose in small pieces (knowledge)
        </text>
        <text x="68" y="1114" fontSize="3.6" fontWeight="800" className="fill-foreground">
          → clear the emotion (emotions) → return control (strategy)
        </text>
        <text x="68" y="1132" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">
          The stations cannot swap: perception and invitation come before knowledge; emotions before strategy — and strategy is gated: “If the patient feels ready…”
        </text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1186" width="1054" height="78" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1206" fontSize="3.8" fontWeight="800" className="fill-foreground">
          Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 295 / book 273 (Public Health Sciences — Communication Skills: Use of interpreters; Delivering bad news)
        </text>
        <text x="42" y="1218" fontSize="3.8" className="fill-muted-foreground">
          Census (pdfimages): ZERO raster images — pure text in a side-head layout; the VLM pass at 120dpi (staging-pubh23/vlm-census.txt) confirmed “SPIKES” printed in bold red
        </text>
        <text x="42" y="1228" fontSize="3.8" className="fill-muted-foreground">
          beside the “Delivering bad news” heading, enlarged red initial letters on the six station labels, and two bold navy block headings; the banner prints ONCE (running
        </text>
        <text x="42" y="1238" fontSize="3.8" className="fill-muted-foreground">
          header only — pdf 293 is the subsection opener). ORIGINAL KYP ADAPTATION: the ladder, rule cards, positioning diagrams, and rail are KYP&apos;s artwork; every printed
        </text>
        <text x="42" y="1248" fontSize="3.8" className="fill-muted-foreground">
          rule, position, and station move is preserved — and both blocks are carried VERBATIM in the note&apos;s two table blocks. SPIKES is First Aid&apos;s own, attributed.
        </text>
      </g>
    </svg>
  );
};
