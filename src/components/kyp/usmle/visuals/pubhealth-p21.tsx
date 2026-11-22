/* Public Health — PUBH batch 2, topic 21: Patient-centered interviewing
 * (FULL pdf page 293 / book 271 — the FIRST page of the COMMUNICATION
 * SKILLS subsection; pdf 292 / book 270 ends the Ethics content, pdf 294 /
 * book 272 opens Cultural formulation interview). The page carries THREE
 * blocks, all owned, all pure text: (1) "Patient-centered interviewing
 * techniques" — a term/definition table, SIX rows in printed order
 * (Introduction, Agenda setting, Reflection, Validation, Recapitulation,
 * Facilitation); (2) "Establishing rapport" — the PEARLS block: the acronym
 * prints in RED beside the block title and the six row terms print their
 * INITIAL LETTERS in red (Partnership, Empathy, Apology, Respect,
 * Legitimization, Support) — First Aid's OWN, carried VERBATIM and
 * ATTRIBUTED (red text + "First Aid's own" tags in the wheel); (3)
 * "Communicating with patients with disabilities" — a three-line header and
 * SEVEN unlabeled prose paragraphs. Census (pdfimages): ZERO raster images —
 * three pure-text blocks + the indd footer slug; all three are ORIGINAL KYP
 * ADAPTATIONS in this ONE registry visual: the six techniques as a station
 * strip, PEARLS as a rapport wheel, the disabilities prose as a
 * grouped-by-need panel (universal layer + three need-specific protocols).
 * VLM-read at 120dpi (staging-pubh21/vlm-census.txt): the term/definition
 * layout prints with bold dark-teal terms and thin dotted/light rules; PEARLS
 * is the ONLY red on the page (heading + initial letters); the banner prints
 * TWICE (running header + in-body ribbon); no margin mnemonics, no images.
 * Printed quirks carried + documented: "SEC TION II" and "COmmUNICATION
 * SkILLS" small-caps artifacts (both banner instances); the Agenda setting
 * definition prints "developing joint agenda" with NO article (as printed,
 * called out on the Zone A rule strip); curly quotes as printed; the
 * disabilities header wraps across three lines. The 2+3+1 arc grouping, the
 * emotion-response reading of PEARLS, the ASK-DON'T-ASSUME rule, and the
 * TIME · SIMPLE · ATTENTION protocol tags are KYP originals, marked (KYP).
 * Nothing is reproduced from the book; purely presentational (no props, no
 * hooks, no external images). */

export const InterviewingMap = () => {
  const w = 1102;
  const h = 1460;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Patient-centered interviewing — the six techniques as a station strip in printed order (introduction: introduce yourself, ask the name and how the patient would like to be addressed, use the name and pronouns given, avoid gender assumptions, sit at eye level near the patient facing directly; agenda setting: a joint agenda between physician and patient; reflection: actively listen and synthesize, particularly the primary concern or concerns; validation: legitimize or affirm the patient's perspectives; recapitulation: summarize so far to ensure correct interpretation; facilitation: free speech without leading questions, questions allowed throughout), the PEARLS rapport wheel attributed to First Aid (partnership, empathy, apology, respect, legitimization, support — First Aid's own acronym, printed in red in the source), and the disabilities communication panel grouped by need (universal rules: ask their terms person-first or identity-first, talk directly to the patient, ask before assisting, never raise an irrelevant disability, never skip relevant exam parts; then speech difficulties: extra time, write or rephrase, repeat back; cognitive impairment: concrete specific language, simple direct questions, eliminate background noise, do not assume literacy, adjust to their best channel; deaf or hard of hearing: ask preferred mode, light touch or waving, quiet room for lipreading, face the patient, consider an interpreter) — an original KYP diagram of book 271." className="min-w-[1060px]">
      <title>Patient-centered interviewing — the six-station arc, the PEARLS rapport wheel, and the disabilities panel</title>
      <desc>
        Three zones. Top: the six printed interviewing techniques as a station strip in printed order, each station carrying its verbatim definition, with the KYP 2+3+1 grouping brackets (two to structure, three to listen, one to open the door). Middle: the PEARLS rapport wheel — First Aid&apos;s own acronym, printed in red in the source — six spokes for Partnership, Empathy, Apology, Respect, Legitimization, Support, each with its verbatim definition. Bottom: the disabilities communication panel grouped by need — a universal layer (language, address, assistance, boundaries) plus three need-specific protocol cards (speech difficulties, cognitive impairment, deaf or hard of hearing).
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Patient-centered interviewing — the six-station arc, the PEARLS rapport wheel, and the disabilities panel</text>
        <rect x="772" y="25" width="290" height="18" rx="6" className="fill-brand-soft" />
        <text x="917" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">6 stations · 6 spokes · 3 need groups</text>
      </g>

      {/* ===== ZONE A — THE SIX-TECHNIQUE STATION STRIP ===== */}
      <g>
        <rect x="36" y="72" width="1030" height="308" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="94" fontSize="5.4" fontWeight="800" className="fill-foreground">THE SIX-TECHNIQUE STATION STRIP — the printed techniques in PRINTED order, read as one encounter timeline</text>
        <text x="52" y="105" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ORIGINAL KYP ADAPTATION — every definition below is the print&apos;s own verbatim; the 2+3+1 grouping and the arc reading are KYP&apos;s</text>

        {/* STATION 1 — Introduction */}
        <g>
          <rect x="47" y="130" width="158" height="168" rx="10" className="fill-card stroke-border" />
          <circle cx="65" cy="148" r="9" className="fill-brand-soft stroke-brand" />
          <text x="65" y="150.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">1</text>
          <text x="80" y="152" fontSize="4.2" fontWeight="800" className="fill-brand">Introduction</text>
          <text x="61" y="166" fontSize="2.6" fontWeight="800" className="fill-success">STRUCTURE — name the relationship</text>
          <text x="61" y="182" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Introduce yourself and ask</text>
          <text x="61" y="192" fontSize="2.5" fontWeight="700" className="fill-foreground/80">the patient their name and</text>
          <text x="61" y="202" fontSize="2.5" fontWeight="700" className="fill-foreground/80">how they would like to be</text>
          <text x="61" y="212" fontSize="2.5" fontWeight="700" className="fill-foreground/80">addressed. Address the</text>
          <text x="61" y="222" fontSize="2.5" fontWeight="700" className="fill-foreground/80">patient by the name and</text>
          <text x="61" y="232" fontSize="2.5" fontWeight="700" className="fill-foreground/80">pronouns given. Avoid</text>
          <text x="61" y="242" fontSize="2.5" fontWeight="700" className="fill-foreground/80">making gender assumptions.</text>
          <text x="61" y="252" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Sit at eye level, near the</text>
          <text x="61" y="262" fontSize="2.5" fontWeight="700" className="fill-foreground/80">patient, while facing them</text>
          <text x="61" y="272" fontSize="2.5" fontWeight="700" className="fill-foreground/80">directly.</text>
        </g>

        {/* STATION 2 — Agenda setting */}
        <g>
          <rect x="217" y="130" width="158" height="168" rx="10" className="fill-card stroke-border" />
          <circle cx="235" cy="148" r="9" className="fill-brand-soft stroke-brand" />
          <text x="235" y="150.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">2</text>
          <text x="250" y="152" fontSize="4.2" fontWeight="800" className="fill-brand">Agenda setting</text>
          <text x="231" y="166" fontSize="2.6" fontWeight="800" className="fill-success">STRUCTURE — build the joint map</text>
          <text x="231" y="182" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Identify concerns and set</text>
          <text x="231" y="192" fontSize="2.5" fontWeight="700" className="fill-foreground/80">goals by developing joint</text>
          <text x="231" y="202" fontSize="2.5" fontWeight="700" className="fill-foreground/80">agenda between the physician</text>
          <text x="231" y="212" fontSize="2.5" fontWeight="700" className="fill-foreground/80">and the patient.</text>
          <text x="231" y="234" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">as printed — no article before</text>
          <text x="231" y="244" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">“joint agenda” (a printed quirk,</text>
          <text x="231" y="254" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">carried verbatim)</text>
        </g>

        {/* STATION 3 — Reflection */}
        <g>
          <rect x="387" y="130" width="158" height="168" rx="10" className="fill-card stroke-border" />
          <circle cx="405" cy="148" r="9" className="fill-brand-soft stroke-brand" />
          <text x="405" y="150.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">3</text>
          <text x="420" y="152" fontSize="4.2" fontWeight="800" className="fill-brand">Reflection</text>
          <text x="401" y="166" fontSize="2.6" fontWeight="800" className="fill-warning">LISTEN — mirror the story</text>
          <text x="401" y="182" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Actively listen and</text>
          <text x="401" y="192" fontSize="2.5" fontWeight="700" className="fill-foreground/80">synthesize information</text>
          <text x="401" y="202" fontSize="2.5" fontWeight="700" className="fill-foreground/80">offered by the patient,</text>
          <text x="401" y="212" fontSize="2.5" fontWeight="700" className="fill-foreground/80">particularly with respect</text>
          <text x="401" y="222" fontSize="2.5" fontWeight="700" className="fill-foreground/80">to primary concern(s).</text>
        </g>

        {/* STATION 4 — Validation */}
        <g>
          <rect x="557" y="130" width="158" height="168" rx="10" className="fill-card stroke-border" />
          <circle cx="575" cy="148" r="9" className="fill-brand-soft stroke-brand" />
          <text x="575" y="150.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">4</text>
          <text x="590" y="152" fontSize="4.2" fontWeight="800" className="fill-brand">Validation</text>
          <text x="571" y="166" fontSize="2.6" fontWeight="800" className="fill-warning">LISTEN — affirm the view</text>
          <text x="571" y="182" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Legitimize or affirm the</text>
          <text x="571" y="192" fontSize="2.5" fontWeight="700" className="fill-foreground/80">patient’s perspectives.</text>
        </g>

        {/* STATION 5 — Recapitulation */}
        <g>
          <rect x="727" y="130" width="158" height="168" rx="10" className="fill-card stroke-border" />
          <circle cx="745" cy="148" r="9" className="fill-brand-soft stroke-brand" />
          <text x="745" y="150.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">5</text>
          <text x="760" y="152" fontSize="3.9" fontWeight="800" className="fill-brand">Recapitulation</text>
          <text x="741" y="166" fontSize="2.6" fontWeight="800" className="fill-warning">LISTEN — check the record</text>
          <text x="741" y="182" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Summarize what the patient</text>
          <text x="741" y="192" fontSize="2.5" fontWeight="700" className="fill-foreground/80">has said so far to ensure</text>
          <text x="741" y="202" fontSize="2.5" fontWeight="700" className="fill-foreground/80">correct interpretation.</text>
        </g>

        {/* STATION 6 — Facilitation */}
        <g>
          <rect x="897" y="130" width="158" height="168" rx="10" className="fill-card stroke-border" />
          <circle cx="915" cy="148" r="9" className="fill-brand-soft stroke-brand" />
          <text x="915" y="150.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">6</text>
          <text x="930" y="152" fontSize="4.1" fontWeight="800" className="fill-brand">Facilitation</text>
          <text x="911" y="166" fontSize="2.6" fontWeight="800" className="fill-emergency">OPEN THE DOOR</text>
          <text x="911" y="182" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Encourage the patient to</text>
          <text x="911" y="192" fontSize="2.5" fontWeight="700" className="fill-foreground/80">speak freely without</text>
          <text x="911" y="202" fontSize="2.5" fontWeight="700" className="fill-foreground/80">guiding responses or</text>
          <text x="911" y="212" fontSize="2.5" fontWeight="700" className="fill-foreground/80">leading questions. Allow</text>
          <text x="911" y="222" fontSize="2.5" fontWeight="700" className="fill-foreground/80">the patient to ask</text>
          <text x="911" y="232" fontSize="2.5" fontWeight="700" className="fill-foreground/80">questions throughout the</text>
          <text x="911" y="242" fontSize="2.5" fontWeight="700" className="fill-foreground/80">encounter.</text>
        </g>

        {/* station arrows */}
        <g className="stroke-foreground" strokeWidth="1.2" fill="none">
          <line x1="207" y1="214" x2="213" y2="214" />
          <line x1="377" y1="214" x2="383" y2="214" />
          <line x1="547" y1="214" x2="553" y2="214" />
          <line x1="717" y1="214" x2="723" y2="214" />
          <line x1="887" y1="214" x2="893" y2="214" />
        </g>
        <g className="fill-foreground">
          <path d="M 213 210 L 217 214 L 213 218 Z" />
          <path d="M 383 210 L 387 214 L 383 218 Z" />
          <path d="M 553 210 L 557 214 L 553 218 Z" />
          <path d="M 723 210 L 727 214 L 723 218 Z" />
          <path d="M 893 210 L 897 214 L 893 218 Z" />
        </g>

        {/* the 2+3+1 grouping brackets (KYP) */}
        <g>
          <path d="M 47 312 L 47 306 L 375 306 L 375 312" className="stroke-success" strokeWidth="1" fill="none" />
          <text x="211" y="324" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-success">TWO TO STRUCTURE (KYP)</text>
          <path d="M 387 312 L 387 306 L 885 306 L 885 312" className="stroke-warning" strokeWidth="1" fill="none" />
          <text x="636" y="324" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-warning">THREE TO LISTEN (KYP)</text>
          <path d="M 897 312 L 897 306 L 1055 306 L 1055 312" className="stroke-emergency" strokeWidth="1" fill="none" />
          <text x="976" y="324" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-emergency">ONE TO OPEN THE DOOR (KYP)</text>
        </g>

        {/* the Zone A rule strip */}
        <line x1="52" y1="340" x2="1050" y2="340" className="stroke-border" strokeWidth="1" />
        <text x="52" y="352" fontSize="3.4" fontWeight="800" className="fill-foreground">THE KYP READING — the printed order is the working order: STRUCTURE the encounter (1–2), LISTEN to the story (3–5), keep the door OPEN (6)</text>
        <text x="52" y="366" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">Printed verbatim throughout — including the Agenda setting row&apos;s “developing joint agenda between the physician and the patient” (no article, as printed)</text>
      </g>

      {/* ===== ZONE B — THE PEARLS RAPPORT WHEEL ===== */}
      <g>
        <rect x="36" y="396" width="1030" height="575" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="418" fontSize="5.4" fontWeight="800" className="fill-foreground">THE PEARLS RAPPORT WHEEL — First Aid&apos;s OWN acronym, printed in RED in the source (heading + red initial letters), carried ATTRIBUTED</text>
        <text x="52" y="429" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">when an emotion surfaces mid-interview, answer it with a rapport move — the emotion-response reading of the wheel is KYP&apos;s; the six definitions are the print&apos;s own</text>

        {/* the hub */}
        <circle cx="551" cy="700" r="54" className="fill-brand-soft stroke-brand" strokeWidth="1.6" />
        <text x="551" y="695" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-emergency">PEARLS</text>
        <text x="551" y="708" textAnchor="middle" fontSize="2.4" fontWeight="700" className="fill-foreground">First Aid&apos;s own —</text>
        <text x="551" y="718" textAnchor="middle" fontSize="2.4" fontWeight="700" className="fill-foreground">printed in red</text>
        <text x="551" y="730" textAnchor="middle" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">Establishing rapport</text>

        {/* spokes */}
        <g className="stroke-foreground" strokeWidth="1.2" fill="none">
          <line x1="551" y1="646" x2="551" y2="551" />
          <line x1="601" y1="671" x2="642" y2="650" />
          <line x1="601" y1="729" x2="642" y2="750" />
          <line x1="551" y1="758" x2="551" y2="851" />
          <line x1="501" y1="729" x2="460" y2="750" />
          <line x1="501" y1="671" x2="460" y2="650" />
        </g>
        <g className="fill-foreground">
          <path d="M 547 553 L 551 545 L 555 553 Z" />
          <path d="M 635 646 L 646 649 L 639 658 Z" />
          <path d="M 639 742 L 646 751 L 635 754 Z" />
          <path d="M 547 849 L 551 857 L 555 849 Z" />
          <path d="M 467 742 L 460 751 L 471 754 Z" />
          <path d="M 467 658 L 460 649 L 471 646 Z" />
        </g>

        {/* P — Partnership (top) */}
        <g>
          <rect x="434" y="447" width="234" height="96" rx="10" className="fill-card stroke-border" />
          <text x="448" y="473" fontSize="7" fontWeight="800" className="fill-emergency">P</text>
          <text x="464" y="471" fontSize="4" fontWeight="800" className="fill-brand">Partnership</text>
          <text x="448" y="490" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Work together with patient to</text>
          <text x="448" y="500" fontSize="2.5" fontWeight="700" className="fill-foreground/80">identify primary concerns and</text>
          <text x="448" y="510" fontSize="2.5" fontWeight="700" className="fill-foreground/80">develop preferred solutions.</text>
          <text x="448" y="532" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">“we,” not “I will” — the solutions are the patient&apos;s preferred ones</text>
        </g>

        {/* E — Empathy (upper right) */}
        <g>
          <rect x="611" y="550" width="234" height="96" rx="10" className="fill-card stroke-border" />
          <text x="625" y="576" fontSize="7" fontWeight="800" className="fill-emergency">E</text>
          <text x="641" y="574" fontSize="4" fontWeight="800" className="fill-brand">Empathy</text>
          <text x="625" y="593" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Acknowledge the emotions displayed</text>
          <text x="625" y="603" fontSize="2.5" fontWeight="700" className="fill-foreground/80">and demonstrate understanding of</text>
          <text x="625" y="613" fontSize="2.5" fontWeight="700" className="fill-foreground/80">why the patient is feeling that way.</text>
          <text x="625" y="635" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">name the feeling AND the why — both printed halves required</text>
        </g>

        {/* A — Apology (lower right) */}
        <g>
          <rect x="611" y="754" width="234" height="96" rx="10" className="fill-card stroke-border" />
          <text x="625" y="780" fontSize="7" fontWeight="800" className="fill-emergency">A</text>
          <text x="641" y="778" fontSize="4" fontWeight="800" className="fill-brand">Apology</text>
          <text x="625" y="797" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Take personal responsibility</text>
          <text x="625" y="807" fontSize="2.5" fontWeight="700" className="fill-foreground/80">when appropriate.</text>
          <text x="625" y="829" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">the physician&apos;s own faults only — never for the disease (KYP)</text>
        </g>

        {/* R — Respect (bottom) */}
        <g>
          <rect x="434" y="857" width="234" height="96" rx="10" className="fill-card stroke-border" />
          <text x="448" y="883" fontSize="7" fontWeight="800" className="fill-emergency">R</text>
          <text x="464" y="881" fontSize="4" fontWeight="800" className="fill-brand">Respect</text>
          <text x="448" y="900" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Commend the patient for coming in to</text>
          <text x="448" y="910" fontSize="2.5" fontWeight="700" className="fill-foreground/80">discuss a problem, pushing through</text>
          <text x="448" y="920" fontSize="2.5" fontWeight="700" className="fill-foreground/80">challenging circumstances, keeping a</text>
          <text x="448" y="930" fontSize="2.5" fontWeight="700" className="fill-foreground/80">positive attitude, or other constructive</text>
          <text x="448" y="940" fontSize="2.5" fontWeight="700" className="fill-foreground/80">behaviors.</text>
        </g>

        {/* L — Legitimization (lower left) */}
        <g>
          <rect x="257" y="754" width="234" height="96" rx="10" className="fill-card stroke-border" />
          <text x="271" y="780" fontSize="7" fontWeight="800" className="fill-emergency">L</text>
          <text x="287" y="778" fontSize="3.9" fontWeight="800" className="fill-brand">Legitimization</text>
          <text x="271" y="797" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Assure patient that emotional</text>
          <text x="271" y="807" fontSize="2.5" fontWeight="700" className="fill-foreground/80">responses are understandable</text>
          <text x="271" y="817" fontSize="2.5" fontWeight="700" className="fill-foreground/80">or common.</text>
          <text x="271" y="839" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">normalize the RESPONSE — distinct from Empathy&apos;s the-WHY (KYP)</text>
        </g>

        {/* S — Support (upper left) */}
        <g>
          <rect x="257" y="550" width="234" height="96" rx="10" className="fill-card stroke-border" />
          <text x="271" y="576" fontSize="7" fontWeight="800" className="fill-emergency">S</text>
          <text x="287" y="574" fontSize="4" fontWeight="800" className="fill-brand">Support</text>
          <text x="271" y="593" fontSize="2.5" fontWeight="700" className="fill-foreground/80">Reassure patient that you will work</text>
          <text x="271" y="603" fontSize="2.5" fontWeight="700" className="fill-foreground/80">together through difficult times and</text>
          <text x="271" y="613" fontSize="2.5" fontWeight="700" className="fill-foreground/80">offer appropriate resources.</text>
          <text x="271" y="635" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">presence AND resources — both printed halves required</text>
        </g>
      </g>

      {/* ===== ZONE C — THE DISABILITIES COMMUNICATION PANEL ===== */}
      <g>
        <rect x="36" y="983" width="1030" height="378" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1005" fontSize="5.4" fontWeight="800" className="fill-foreground">COMMUNICATING WITH PATIENTS WITH DISABILITIES — the seven printed paragraphs, grouped by need</text>
        <text x="52" y="1016" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the print runs seven unlabeled prose paragraphs (¶1–¶7 in the note); the grouping, the ¶ tags, and the TIME · SIMPLE · ATTENTION labels are KYP&apos;s</text>

        {/* the universal layer */}
        <g>
          <rect x="52" y="1028" width="998" height="96" rx="10" className="fill-card stroke-border" />
          <text x="66" y="1046" fontSize="3.4" fontWeight="800" className="fill-foreground">THE UNIVERSAL LAYER — every patient with a disability (¶1 · ¶2 · ¶3 · ¶7)</text>
          <text x="66" y="1062" fontSize="2.8" fontWeight="800" className="fill-brand">LANGUAGE (¶1)</text>
          <text x="66" y="1074" fontSize="2.4" fontWeight="700" className="fill-foreground/80">Person-first (“a person with a</text>
          <text x="66" y="1084" fontSize="2.4" fontWeight="700" className="fill-foreground/80">disability”) or identity-first (“a</text>
          <text x="66" y="1094" fontSize="2.4" fontWeight="700" className="fill-foreground/80">disabled person”) — ask patients</text>
          <text x="66" y="1104" fontSize="2.4" fontWeight="700" className="fill-foreground/80">what terms they use.</text>
          <text x="306" y="1062" fontSize="2.8" fontWeight="800" className="fill-brand">ADDRESS (¶2)</text>
          <text x="306" y="1074" fontSize="2.4" fontWeight="700" className="fill-foreground/80">Talk directly to the patient; do not</text>
          <text x="306" y="1084" fontSize="2.4" fontWeight="700" className="fill-foreground/80">assume nonverbal patients do not</text>
          <text x="306" y="1094" fontSize="2.4" fontWeight="700" className="fill-foreground/80">understand. Caregivers can add</text>
          <text x="306" y="1104" fontSize="2.4" fontWeight="700" className="fill-foreground/80">information as needed.</text>
          <text x="546" y="1062" fontSize="2.8" fontWeight="800" className="fill-brand">ASSISTANCE (¶3)</text>
          <text x="546" y="1074" fontSize="2.4" fontWeight="700" className="fill-foreground/80">Ask if assistance is desired rather</text>
          <text x="546" y="1084" fontSize="2.4" fontWeight="700" className="fill-foreground/80">than assuming the patient cannot do</text>
          <text x="546" y="1094" fontSize="2.4" fontWeight="700" className="fill-foreground/80">something alone — most people</text>
          <text x="546" y="1104" fontSize="2.4" fontWeight="700" className="fill-foreground/80">value their independence.</text>
          <text x="786" y="1062" fontSize="2.8" fontWeight="800" className="fill-brand">BOUNDARIES (¶7)</text>
          <text x="786" y="1074" fontSize="2.4" fontWeight="700" className="fill-foreground/80">Do not bring up a disability if it is</text>
          <text x="786" y="1084" fontSize="2.4" fontWeight="700" className="fill-foreground/80">not relevant (wheelchair + ear</text>
          <text x="786" y="1094" fontSize="2.4" fontWeight="700" className="fill-foreground/80">infection). Do not skip relevant</text>
          <text x="786" y="1104" fontSize="2.4" fontWeight="700" className="fill-foreground/80">parts of the physical exam.</text>
        </g>

        {/* the three need-specific protocols */}
        <g>
          <rect x="52" y="1136" width="316" height="178" rx="10" className="fill-card stroke-success" />
          <text x="68" y="1158" fontSize="4" fontWeight="800" className="fill-success">SPEECH DIFFICULTIES</text>
          <text x="68" y="1171" fontSize="2.6" fontWeight="800" className="fill-muted-foreground">the TIME protocol (KYP tag) · printed ¶4</text>
          <text x="68" y="1188" fontSize="2.5" fontWeight="700" className="fill-foreground/80">· Provide extra time for the interview.</text>
          <text x="68" y="1201" fontSize="2.5" fontWeight="700" className="fill-foreground/80">· If speech is difficult to understand: ask them to</text>
          <text x="68" y="1212" fontSize="2.5" fontWeight="700" className="fill-foreground/80">  write down a few words or ask them to rephrase</text>
          <text x="68" y="1223" fontSize="2.5" fontWeight="700" className="fill-foreground/80">  their sentence.</text>
          <text x="68" y="1236" fontSize="2.5" fontWeight="700" className="fill-foreground/80">· Repeat what they said to ensure you understood</text>
          <text x="68" y="1247" fontSize="2.5" fontWeight="700" className="fill-foreground/80">  it correctly.</text>
          <text x="68" y="1300" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">the patient stays the historian — the protocol keeps their authorship</text>
        </g>
        <g>
          <rect x="392" y="1136" width="316" height="178" rx="10" className="fill-card stroke-warning" />
          <text x="408" y="1158" fontSize="4" fontWeight="800" className="fill-warning">COGNITIVE IMPAIRMENT</text>
          <text x="408" y="1171" fontSize="2.6" fontWeight="800" className="fill-muted-foreground">the SIMPLE protocol (KYP tag) · printed ¶5</text>
          <text x="408" y="1188" fontSize="2.5" fontWeight="700" className="fill-foreground/80">· Use concrete, specific language.</text>
          <text x="408" y="1201" fontSize="2.5" fontWeight="700" className="fill-foreground/80">· Ask simple, direct questions.</text>
          <text x="408" y="1214" fontSize="2.5" fontWeight="700" className="fill-foreground/80">· Eliminate background noise and distractions.</text>
          <text x="408" y="1227" fontSize="2.5" fontWeight="700" className="fill-foreground/80">· Do not assume the patient can read.</text>
          <text x="408" y="1240" fontSize="2.5" fontWeight="700" className="fill-foreground/80">· Adjust to how the patient understands best (eg,</text>
          <text x="408" y="1251" fontSize="2.5" fontWeight="700" className="fill-foreground/80">  use hand gestures or ask them to demonstrate a task).</text>
          <text x="408" y="1300" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">no assumed literacy — adjust the channel, not the respect</text>
        </g>
        <g>
          <rect x="732" y="1136" width="316" height="178" rx="10" className="fill-card stroke-brand" />
          <text x="748" y="1158" fontSize="4" fontWeight="800" className="fill-brand">DEAF OR HARD OF HEARING</text>
          <text x="748" y="1171" fontSize="2.6" fontWeight="800" className="fill-muted-foreground">the ATTENTION protocol (KYP tag) · printed ¶6</text>
          <text x="748" y="1188" fontSize="2.5" fontWeight="700" className="fill-foreground/80">· Ask their preferred mode of communication.</text>
          <text x="748" y="1201" fontSize="2.5" fontWeight="700" className="fill-foreground/80">· Use light touch or waving to get their attention.</text>
          <text x="748" y="1214" fontSize="2.5" fontWeight="700" className="fill-foreground/80">· For patients who prefer to speak and lipread:</text>
          <text x="748" y="1225" fontSize="2.5" fontWeight="700" className="fill-foreground/80">  eliminate background noise, face the patient, and</text>
          <text x="748" y="1236" fontSize="2.5" fontWeight="700" className="fill-foreground/80">  do not change your mode of speaking.</text>
          <text x="748" y="1249" fontSize="2.5" fontWeight="700" className="fill-foreground/80">· Consider using an interpreter when necessary.</text>
          <text x="748" y="1300" fontSize="2.3" fontWeight="700" className="fill-muted-foreground">get the attention first, then protect the chosen channel</text>
        </g>

        {/* the Zone C rule strip */}
        <line x1="52" y1="1330" x2="1050" y2="1330" className="stroke-border" strokeWidth="1" />
        <text x="52" y="1344" fontSize="3.2" fontWeight="800" className="fill-foreground">THE KYP RULE — every access question is ASKED, never assumed: the terms (¶1), the assistance (¶3), the communication mode (¶6)</text>
        <text x="52" y="1356" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">Then adapt the channel: SPEECH → extra time · COGNITIVE → concrete and simple · DEAF/HARD OF HEARING → attention first</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1368" width="1054" height="78" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1386" fontSize="3.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 293 / book 271 (Public Health Sciences — Communication Skills: Patient-centered interviewing</text>
        <text x="42" y="1396" fontSize="3.6" fontWeight="800" className="fill-foreground">techniques; Establishing rapport; Communicating with patients with disabilities)</text>
        <text x="42" y="1408" fontSize="3.4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — three pure-text blocks (two term/definition tables with bold dark-teal terms and thin dotted rules; the disabilities prose under a three-line</text>
        <text x="42" y="1418" fontSize="3.4" className="fill-muted-foreground">header). VLM-read at 120dpi (staging-pubh21/vlm-census.txt): PEARLS prints in RED beside “Establishing rapport” and the six row terms carry RED initial letters — First Aid&apos;s own,</text>
        <text x="42" y="1428" fontSize="3.4" className="fill-muted-foreground">carried verbatim and attributed; no other red, no margin mnemonics, no images. ORIGINAL KYP ADAPTATION ×3 — the station strip, the wheel, and the grouped panel are KYP&apos;s</text>
        <text x="42" y="1438" fontSize="3.4" className="fill-muted-foreground">layout; every printed label, definition, and paragraph is preserved (full verbatim tables + list in the note&apos;s blocks). Quirks: “SEC TION II” + “COmmUNICATION SkILLS” artifacts.</text>
      </g>
    </svg>
  );
};
