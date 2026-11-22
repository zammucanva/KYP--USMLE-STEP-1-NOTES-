/* Public Health — PUBH 27, topic patient-safety-quality (FULL pdf page 300 /
 * book 278 — the FINAL page of the Public Health Sciences chapter and the
 * LAST page of the HEALTHCARE DELIVERY subsection; pdf 301 opens Section
 * III). The page carries FOUR blocks, all owned: (1) "Palliative care" — a
 * label + text block (comfort, relieve suffering, improve quality of life
 * regardless of diagnosis or prognosis; often concurrent with curative or
 * life-prolonging treatment; interdisciplinary team; hospice care = form of
 * palliative care, prognosis ≤6 months when curative treatment is no longer
 * wanted or beneficial); (2) "Types of medical errors" — the error-domain
 * list + the outcome-independent disclosure rule + a FOUR-row table (Active
 * error, Latent error, Never event with Sentinel event, Near miss); (3)
 * "Medical error analysis" — a TWO-row table with printed column headers
 * DESIGN / mETHODS (Root cause analysis vs Failure mode and effects
 * analysis); (4) "Causes of medical errors" — a TWO-row table (Burnout,
 * Fatigue). Census (pdfimages): ZERO raster images, NO vector figure —
 * three hairline tables, every one an ORIGINAL KYP ADAPTATION rebuilt in
 * this ONE registry visual (nothing to redraw). VLM-read at 120dpi
 * (staging-pubh27/vlm-census.txt): section titles and row labels print in
 * dark navy with the inline lead-ins "Hospice care" and "Sentinel event"
 * also navy; the Medical error analysis table prints its leading capitals
 * in RED (the R of Root and of Retrospective, the F of Failure and of
 * Forward-looking — pixel-probed to the glyph, the only red on the page; FA
 * styling, not a mnemonic); the errors and causes tables print WITHOUT
 * column headers (the column furniture on this visual is KYP-descriptive,
 * documented); no margin mnemonics anywhere on the page — the four mnemonic
 * tags on this visual are KYP originals. Quirks carried: "SEC TION II"
 * header-space artifact; the subsection banner's DOUBLED text layer (two
 * overlapping copies ~2.6pt apart — "▶▶ PUBLIC / PUBLIC HEALTH / …",
 * NOT two banner instances; no in-body ribbon on this page); "mETHODS"
 * small-caps extraction artifact; "fishbone/cause-and-effect diagrams"
 * hyphenates across a line wrap (raw layer merges it to
 * "cause-andeffect"); the "Medical error analysis" heading extracts AFTER
 * its table body in the raw layer though it prints above it. ADJUDICATION:
 * the VLM's "concurent" misread corrected to the text layer's "concurrent".
 * Nothing is reproduced from the book; purely presentational (no props, no
 * hooks, no external images). */

export const PatientSafetyMap = () => {
  const w = 1102;
  const h = 1224;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Patient safety medical errors and quality improvement — the palliative-vs-hospice boundary (comfort, relieve suffering, improve quality of life regardless of diagnosis or prognosis, often concurrent with curative or life-prolonging treatment, interdisciplinary team; hospice care as a form of palliative care for prognosis ≤6 months when curative treatment is no longer wanted or beneficial), the error quartet with every printed example (active error at the frontline operator with wrong IV pump dose programmed and immediate impact; latent error in processes indirect from the operator with different types of IV pumps used within same hospital, an accident waiting to happen; never event identifiable, serious, usually preventable with the retained scalpel and the sentinel event escalator of death, permanent harm, or severe temporary harm; near miss with the pharmacist recognizing a medication interaction and cancelling the order), the error-domain list and the outcome-independent disclosure rule, the root-cause-analysis-versus-failure-mode-and-effects-analysis time axis (RCA rewinds after the failure event with records, participant interviews, 5 whys, fishbone/cause-and-effect diagrams, and process maps to the six underlying problems; FMEA forecasts before implementation with inductive reasoning prioritized by probability of occurrence and impact on patients), and the burnout and fatigue causes strip — an original KYP diagram of book 278." className="min-w-[1060px]">
      <title>Patient safety — medical errors and quality improvement</title>
      <desc>
        Four zones: the palliative-vs-hospice pair (any prognosis alongside cure vs ≤6 months with curative treatment no longer wanted or beneficial); the four error types as cards with their printed examples and consequence chips (immediate impact, accident waiting to happen, major error that should never occur with the sentinel-event escalator, narrow prevention of harm that exposes dangers) over the error-domain strip and the disclosure rule; the RCA-vs-FMEA time axis (forward-looking before implementation vs retrospective after the failure event); and the burnout/fatigue causes strip.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Patient safety — medical errors and quality improvement</text>
        <rect x="802" y="25" width="260" height="18" rx="6" className="fill-brand-soft" />
        <text x="932" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">4 blocks · 4 error types · 2 tools</text>
      </g>

      {/* ===== ZONE A — THE PALLIATIVE–HOSPICE BOUNDARY ===== */}
      <g>
        <rect x="36" y="72" width="1030" height="184" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="94" fontSize="5.4" fontWeight="800" className="fill-foreground">THE PALLIATIVE–HOSPICE BOUNDARY — comfort at any stage; hospice at ≤6 months</text>
        <text x="52" y="105" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the printed Palliative care block — every sentence below is the print&apos;s own; the two-card split is KYP&apos;s</text>

        {/* LEFT — Palliative care */}
        <g>
          <rect x="52" y="116" width="502" height="126" rx="10" className="fill-card stroke-border" />
          <text x="66" y="136" fontSize="4.4" fontWeight="800" className="fill-brand">Palliative care</text>
          <text x="66" y="147" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">comfort, at any stage, alongside cure</text>
          <text x="66" y="162" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Medical care aiming to provide comfort, relieve suffering, and improve</text>
          <text x="66" y="172" fontSize="2.8" fontWeight="700" className="fill-foreground/80">quality of life in patients with complex or life-threatening illness —</text>
          <text x="66" y="182" fontSize="2.8" fontWeight="800" className="fill-foreground/80">REGARDLESS of their diagnosis or prognosis.</text>
          <rect x="66" y="192" width="330" height="16" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="74" y="203" fontSize="3" fontWeight="800" className="fill-success">OFTEN CONCURRENT WITH CURATIVE OR LIFE-PROLONGING TREATMENT</text>
          <text x="66" y="222" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">Delivered by interdisciplinary team (eg, physicians, nurses, social workers) —</text>
          <text x="66" y="234" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">hospitals, outpatient clinics, or at home.</text>
        </g>

        {/* RIGHT — Hospice care */}
        <g>
          <rect x="566" y="116" width="502" height="126" rx="10" className="fill-card stroke-border" />
          <text x="580" y="136" fontSize="4.4" fontWeight="800" className="fill-warning">Hospice care (end-of-life care)</text>
          <text x="580" y="147" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the narrower form — curative treatment steps aside</text>
          <text x="580" y="162" fontSize="2.8" fontWeight="700" className="fill-foreground/80">A FORM of palliative care — for patients with prognosis ≤6 MONTHS</text>
          <text x="580" y="172" fontSize="2.8" fontWeight="700" className="fill-foreground/80">when curative or life-prolonging treatment is no longer wanted or beneficial.</text>
          <rect x="580" y="184" width="210" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="588" y="195" fontSize="3" fontWeight="800" className="fill-warning">PROGNOSIS ≤6 MONTHS</text>
          <rect x="800" y="184" width="252" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="808" y="195" fontSize="3" fontWeight="800" className="fill-warning">CURE NO LONGER WANTED OR BENEFICIAL</text>
          <text x="580" y="224" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">both gates required — the TIME gate and the INTENT gate (KYP reading):</text>
          <text x="580" y="236" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">every hospice is palliative; not every palliative is hospice.</text>
        </g>
      </g>

      {/* ===== ZONE B — THE ERROR QUARTET ===== */}
      <g>
        <rect x="36" y="268" width="1030" height="436" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="290" fontSize="5.4" fontWeight="800" className="fill-foreground">THE ERROR QUARTET — the printed Types of medical errors table as cards (PRINTED order)</text>
        <text x="52" y="301" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the two axes: WHERE it sits (operator vs system) × WHAT it did (the harm ladder) — every cell and example below is the print&apos;s own</text>

        {/* CARD 1 — Active error */}
        <g>
          <rect x="52" y="312" width="502" height="152" rx="10" className="fill-card stroke-border" />
          <circle cx="70" cy="330" r="9" className="fill-brand-soft stroke-brand" />
          <text x="70" y="332.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">1</text>
          <text x="86" y="334" fontSize="4.4" fontWeight="800" className="fill-brand">Active error</text>
          <text x="66" y="352" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Occurs at level of frontline operator</text>
          <text x="66" y="362" fontSize="2.8" fontWeight="700" className="fill-foreground/80">(eg, wrong IV pump dose programmed).</text>
          <rect x="66" y="372" width="150" height="16" rx="5" className="fill-emergency-soft stroke-emergency" />
          <text x="74" y="383" fontSize="3" fontWeight="800" className="fill-emergency">IMMEDIATE IMPACT</text>
          <text x="66" y="412" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">THE WHERE AXIS — at the frontline operator: the act at the point</text>
          <text x="66" y="424" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">of care. The print&apos;s example is the dose programmed wrong</text>
          <text x="66" y="436" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">(the operator&apos;s own hands) — “ACTIVE ACTS” (KYP).</text>
        </g>

        {/* CARD 2 — Latent error */}
        <g>
          <rect x="566" y="312" width="502" height="152" rx="10" className="fill-card stroke-border" />
          <circle cx="584" cy="330" r="9" className="fill-brand-soft stroke-brand" />
          <text x="584" y="332.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">2</text>
          <text x="600" y="334" fontSize="4.4" fontWeight="800" className="fill-brand">Latent error</text>
          <text x="580" y="352" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Occurs in processes indirect from operator but impacts</text>
          <text x="580" y="362" fontSize="2.8" fontWeight="700" className="fill-foreground/80">patient care (eg, different types of IV pumps used within same hospital).</text>
          <rect x="580" y="372" width="240" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="588" y="383" fontSize="3" fontWeight="800" className="fill-warning">ACCIDENT WAITING TO HAPPEN</text>
          <text x="580" y="412" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">THE WHERE AXIS — in the processes behind the operator: a standing</text>
          <text x="580" y="424" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">hazard, no event yet. The print&apos;s example is the mixed IV pump</text>
          <text x="580" y="436" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">fleet — “LATENT LURKS” (KYP). Same device as Card 1, one level up.</text>
        </g>

        {/* CARD 3 — Never event (+ Sentinel event) */}
        <g>
          <rect x="52" y="474" width="502" height="152" rx="10" className="fill-card stroke-border" />
          <circle cx="70" cy="492" r="9" className="fill-brand-soft stroke-brand" />
          <text x="70" y="494.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">3</text>
          <text x="86" y="496" fontSize="4.4" fontWeight="800" className="fill-brand">Never event</text>
          <text x="66" y="514" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Adverse event that is identifiable, serious, and usually preventable</text>
          <text x="66" y="524" fontSize="2.8" fontWeight="700" className="fill-foreground/80">(eg, scalpel retained in a surgical patient’s abdomen).</text>
          <rect x="66" y="534" width="260" height="16" rx="5" className="fill-emergency-soft stroke-emergency" />
          <text x="74" y="545" fontSize="3" fontWeight="800" className="fill-emergency">MAJOR ERROR THAT SHOULD NEVER OCCUR</text>
          <rect x="66" y="556" width="470" height="58" rx="8" className="fill-warning-soft/50 stroke-warning" />
          <text x="76" y="570" fontSize="3" fontWeight="800" className="fill-warning">Sentinel event — a never event that leads to death,</text>
          <text x="76" y="581" fontSize="3" fontWeight="800" className="fill-warning">permanent harm, or severe temporary harm.</text>
          <text x="76" y="598" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">subset rule (KYP): every sentinel event IS a never event —</text>
          <text x="76" y="608" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the outcome sentence decides the grade.</text>
        </g>

        {/* CARD 4 — Near miss */}
        <g>
          <rect x="566" y="474" width="502" height="152" rx="10" className="fill-card stroke-border" />
          <circle cx="584" cy="492" r="9" className="fill-brand-soft stroke-brand" />
          <text x="584" y="494.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">4</text>
          <text x="600" y="496" fontSize="4.4" fontWeight="800" className="fill-brand">Near miss</text>
          <text x="580" y="514" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Unplanned event that does not result in harm but has the</text>
          <text x="580" y="524" fontSize="2.8" fontWeight="700" className="fill-foreground/80">potential to do so (eg, pharmacist recognizes a medication interaction</text>
          <text x="580" y="534" fontSize="2.8" fontWeight="700" className="fill-foreground/80">and cancels the order).</text>
          <rect x="580" y="542" width="320" height="16" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="588" y="553" fontSize="3" fontWeight="800" className="fill-success">NARROW PREVENTION OF HARM THAT EXPOSES DANGERS</text>
          <text x="580" y="578" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">THE HARM AXIS — no harm reached the patient, but the potential was real:</text>
          <text x="580" y="590" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the catch exposes the danger — and it is still disclosed (harmful or not).</text>
          <text x="580" y="612" fontSize="2.7" fontWeight="800" className="fill-foreground">THE LADDER — near miss → never event → sentinel event (KYP)</text>
        </g>

        {/* the domain strip + the disclosure rule */}
        <g>
          <rect x="52" y="638" width="998" height="54" rx="10" className="fill-card stroke-border" />
          <text x="66" y="654" fontSize="3" fontWeight="800" className="fill-foreground">MAY INVOLVE — patient identification · diagnosis · monitoring · healthcare-associated infection · medications · procedures · devices · documentation · handoffs</text>
          <rect x="66" y="662" width="720" height="22" rx="6" className="fill-brand-soft stroke-brand" />
          <text x="76" y="676" fontSize="3" fontWeight="800" className="fill-brand">THE RULE — medical errors should be disclosed to patients, independent of immediate outcome (harmful or not)</text>
          <text x="802" y="676" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the disclosure runs across every grade — near misses included</text>
        </g>
      </g>

      {/* ===== ZONE C — RCA vs FMEA ON THE TIME AXIS ===== */}
      <g>
        <rect x="36" y="716" width="1030" height="250" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="738" fontSize="5.4" fontWeight="800" className="fill-foreground">MEDICAL ERROR ANALYSIS — two directions on one time axis: RCA rewinds, FMEA forecasts</text>
        <text x="52" y="749" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the printed DESIGN / mETHODS table — both rows carried verbatim below; the shared timeline and the arrows are KYP&apos;s</text>

        {/* the axis */}
        <text x="250" y="766" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">BEFORE IMPLEMENTATION</text>
        <text x="590" y="766" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">LIVE PROCESS</text>
        <text x="930" y="766" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">FAILURE EVENT</text>
        <line x1="140" y1="778" x2="1044" y2="778" className="stroke-foreground" strokeWidth="1.5" />
        <path d="M 1042 774 L 1052 778 L 1042 782 Z" className="fill-foreground" />
        <line x1="250" y1="771" x2="250" y2="785" className="stroke-foreground" strokeWidth="1.5" />
        <line x1="590" y1="771" x2="590" y2="785" className="stroke-foreground" strokeWidth="1.5" />
        <line x1="930" y1="771" x2="930" y2="785" className="stroke-foreground" strokeWidth="1.5" />
        <line x1="250" y1="790" x2="250" y2="796" className="stroke-border" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="590" y1="790" x2="590" y2="796" className="stroke-border" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="930" y1="790" x2="930" y2="796" className="stroke-border" strokeWidth="1" strokeDasharray="4 4" />

        {/* the two direction arrows on the axis */}
        <line x1="258" y1="778" x2="570" y2="778" className="stroke-success" strokeWidth="3" />
        <path d="M 566 772 L 580 778 L 566 784 Z" className="fill-success" />
        <text x="415" y="794" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-success">FMEA forecasts — applied BEFORE implementation</text>
        <line x1="922" y1="778" x2="610" y2="778" className="stroke-emergency" strokeWidth="3" />
        <path d="M 614 772 L 600 778 L 614 784 Z" className="fill-emergency" />
        <text x="765" y="794" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-emergency">RCA rewinds — applied AFTER the failure event</text>

        {/* LEFT — Failure mode and effects analysis */}
        <g>
          <rect x="52" y="804" width="480" height="140" rx="10" className="fill-card stroke-border" />
          <text x="66" y="824" fontSize="4.4" fontWeight="800" className="fill-brand">Failure mode and effects analysis</text>
          <text x="66" y="835" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">FMEA — the forecast (KYP tag)</text>
          <rect x="66" y="846" width="240" height="16" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="74" y="857" fontSize="3" fontWeight="800" className="fill-success">FORWARD-LOOKING APPROACH</text>
          <text x="66" y="880" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Applied before process implementation to prevent failure</text>
          <text x="66" y="890" fontSize="2.8" fontWeight="700" className="fill-foreground/80">occurrence. Uses inductive reasoning to identify all the</text>
          <text x="66" y="900" fontSize="2.8" fontWeight="700" className="fill-foreground/80">ways a process might fail and prioritizes them by their</text>
          <text x="66" y="910" fontSize="2.8" fontWeight="800" className="fill-foreground/80">PROBABILITY OF OCCURRENCE and IMPACT ON PATIENTS.</text>
          <text x="66" y="930" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">a ranked risk budget for the redesign — probability × impact (KYP)</text>
        </g>

        {/* RIGHT — Root cause analysis */}
        <g>
          <rect x="570" y="804" width="480" height="140" rx="10" className="fill-card stroke-border" />
          <text x="584" y="824" fontSize="4.4" fontWeight="800" className="fill-brand">Root cause analysis</text>
          <text x="584" y="835" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">RCA — the rewind (KYP tag)</text>
          <rect x="584" y="846" width="220" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="592" y="857" fontSize="3" fontWeight="800" className="fill-warning">RETROSPECTIVE APPROACH</text>
          <text x="584" y="880" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Applied after failure event to prevent recurrence. Uses</text>
          <text x="584" y="890" fontSize="2.8" fontWeight="700" className="fill-foreground/80">records and participant interviews (eg, 5 whys approach,</text>
          <text x="584" y="900" fontSize="2.8" fontWeight="700" className="fill-foreground/80">fishbone/cause-and-effect diagrams, process maps) to identify</text>
          <text x="584" y="910" fontSize="2.8" fontWeight="800" className="fill-foreground/80">ALL THE UNDERLYING PROBLEMS that led to an error.</text>
          <text x="584" y="930" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">digs past the operator to the system — it refuses to blame (KYP)</text>
        </g>

        <text x="52" y="958" fontSize="2.8" fontWeight="800" className="fill-foreground">RCA&apos;s six underlying problems — the 2P-2E-2M grouping (KYP): 2 Ps (process, people) · 2 Es (environment, equipment) · 2 Ms (materials, management)</text>
      </g>

      {/* ===== ZONE D — THE PRINTED CAUSES ===== */}
      <g>
        <rect x="36" y="978" width="1030" height="128" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1000" fontSize="5.4" fontWeight="800" className="fill-foreground">THE PRINTED CAUSES — why the tools stay busy (the page&apos;s final block)</text>

        {/* Burnout */}
        <g>
          <rect x="52" y="1010" width="486" height="84" rx="10" className="fill-card stroke-border" />
          <text x="66" y="1028" fontSize="4.4" fontWeight="800" className="fill-warning">Burnout</text>
          <text x="66" y="1046" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Prolonged, excessive stress → emotional exhaustion,</text>
          <text x="66" y="1056" fontSize="2.8" fontWeight="700" className="fill-foreground/80">depersonalization → reduced professional efficacy.</text>
          <text x="66" y="1078" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">stress → exhaustion + depersonalization → lost efficacy (KYP chain)</text>
        </g>

        {/* Fatigue */}
        <g>
          <rect x="564" y="1010" width="486" height="84" rx="10" className="fill-card stroke-border" />
          <text x="578" y="1028" fontSize="4.4" fontWeight="800" className="fill-warning">Fatigue</text>
          <text x="578" y="1046" fontSize="2.8" fontWeight="700" className="fill-foreground/80">Sleep/rest deprivation → cognitive impairment and</text>
          <text x="578" y="1056" fontSize="2.8" fontWeight="700" className="fill-foreground/80">decreased attention to detail.</text>
          <text x="578" y="1078" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">deprivation → impaired cognition + lost detail (KYP chain)</text>
        </g>

        <text x="551" y="1102" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">wellness is a patient-safety intervention — the impaired operator is how latent conditions become active errors (KYP)</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1118" width="1054" height="84" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1136" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 300 / book 278 (Public Health Sciences — Healthcare Delivery: Palliative care; Types of</text>
        <text x="42" y="1147" fontSize="3.8" className="fill-muted-foreground">medical errors; Medical error analysis; Causes of medical errors) — the FINAL page of the chapter (pdf 301 opens Section III).</text>
        <text x="42" y="1158" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — three hairline tables and no vector figure; all rebuilt as ORIGINAL KYP ADAPTATION in this one registry visual.</text>
        <text x="42" y="1169" fontSize="3.8" className="fill-muted-foreground">VLM-read at 120dpi (staging-pubh27/vlm-census.txt): navy labels with inline navy “Hospice care” / “Sentinel event”; RED leading capitals on Root / Retrospective /</text>
        <text x="42" y="1180" fontSize="3.8" className="fill-muted-foreground">Failure / Forward-looking (pixel-probed — the only red on the page); the errors and causes tables print WITHOUT column headers (labels here are KYP-descriptive);</text>
        <text x="42" y="1191" fontSize="3.8" className="fill-muted-foreground">no margin mnemonics anywhere. Quirks carried: “SEC TION II”; doubled ▶ banner text layer; “mETHODS” small-caps artifact; “cause-and-effect” line-wrap hyphen.</text>
      </g>
    </svg>
  );
};
