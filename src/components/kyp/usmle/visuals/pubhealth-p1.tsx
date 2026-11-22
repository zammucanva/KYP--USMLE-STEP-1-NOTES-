/* Public Health — PUBH batch 1, topic 1: Observational study designs (FULL
 * pdf page 278 / book 256 — the FIRST content page of the Public Health
 * Sciences chapter and of the Epidemiology and Biostatistics subsection;
 * pdf 277 is the chapter opener). The page carries TWO blocks, both owned:
 * (1) the "Observational studies" table — columns STUDY TYPE / DESIGN /
 * mEASURES/EXAmPLE, SEVEN rows in printed order (Case series,
 * Cross-sectional, Case-control, Cohort, Twin concordance, Adoption,
 * Ecological); (2) the study-design TIMELINE FIGURE — pure vector art, four
 * study types on a Past–Present–Future axis with their risk-factor boxes
 * and compare-labels. Census (pdfimages): ZERO raster images — the table is
 * an ORIGINAL KYP ADAPTATION (cards), the timeline figure an
 * ORIGINAL_KYP_REDRAW (the book's VERTICAL Past-top axis is re-arranged as
 * a HORIZONTAL left-to-right KYP axis; the artwork and layout are KYP's,
 * every printed label is preserved). VLM-read at 120dpi
 * (staging-pubh1/vlm-census.txt): the figure's panels carry ⊕/⊖ circle
 * icons on the Risk factor boxes, pink/green/blue time bands, and solid
 * black arrows (the case-control arrows point UP = back in time; both
 * cohort panels point forward); the table prints its two mnemonics in RED
 * inside the MEASURES/EXAMPLE cells — "Control the case in the OR."
 * (Case-control row) and "Cohort = relative risk." (Cohort row), carried
 * VERBATIM and ATTRIBUTED (fill-emergency text + "First Aid" attribution
 * tags in the cards). ADJUDICATION drawn exactly as printed: the
 * Cross-sectional panel carries "Compare disease prevalence" and the
 * Case-control panel carries "Compare risk factor frequency" (pdftotext
 * -bbox coordinates + pdftotext -layout + the VLM pass all agree; the batch
 * brief had the two labels swapped — print governs, and the print is
 * internally consistent with the printed table: Cross-sectional measures
 * "Disease prevalence.", Case-control "Looks to see if odds of prior
 * exposure or risk factor differ by disease state"). Nothing is reproduced
 * from the book; purely presentational (no props, no hooks, no external
 * images). */

export const ObservationalStudiesMap = () => {
  const w = 1102;
  const h = 1170;

  /* The four timeline lanes — every label is the print's own; the layout
   * (horizontal axis, four stacked lanes) is KYP's. */
  const RISK_CHIP_W = 92;
  const riskChip = (x: number, y: number, withIcon: boolean, key: string) => (
    <g key={key}>
      <rect x={x} y={y} width={RISK_CHIP_W} height="22" rx="6" className="fill-card stroke-brand" />
      <circle cx={x + 18} cy={y + 11} r="5.5" className={withIcon ? "stroke-success" : "stroke-emergency"} strokeWidth="1.4" fill="none" />
      {withIcon ? (
        <g className="stroke-success" strokeWidth="1.4">
          <line x1={x + 14.5} y1={y + 11} x2={x + 21.5} y2={y + 11} />
          <line x1={x + 18} y1={y + 7.5} x2={x + 18} y2={y + 14.5} />
        </g>
      ) : (
        <line x1={x + 14.5} y1={y + 11} x2={x + 21.5} y2={y + 11} className="stroke-emergency" strokeWidth="1.4" />
      )}
      <text x={x + 30} y={y + 14.5} fontSize="3" fontWeight="700" className="fill-foreground">Risk factor</text>
    </g>
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Observational study designs — the seven printed designs as cards (case series with no comparison group, cross-sectional measuring disease prevalence, case-control yielding the odds ratio with First Aid's mnemonic Control the case in the OR, cohort yielding disease incidence and relative risk with First Aid's mnemonic Cohort = relative risk, twin concordance and adoption studies measuring heritability with the schizophrenia examples, ecological study with the ecological fallacy and the polluted-cities COPD example), above a Past-Present-Future time axis plotting the four timeline designs with their risk-factor chips and printed compare-labels (cross-sectional at the present comparing disease prevalence; case-control looking back from diseased cases and controls without disease to compare risk factor frequency in the past; retrospective cohort reviewing previous records from past risk factors forward to compare disease incidence at the present; prospective cohort following forward from present risk factors to compare disease incidence in the future) — an original KYP diagram of book 256." className="min-w-[1060px]">
      <title>Observational study designs — the seven designs and the time axis</title>
      <desc>
        A horizontal Past–Present–Future time axis with four study-design lanes (cross-sectional, case-control, retrospective cohort, prospective cohort — each with its printed risk-factor chips, arrows, and compare-label), then the seven printed table rows as compact cards carrying design, measure, and example, with First Aid's two red mnemonics attributed, and the page's two example threads (COPD through three designs, schizophrenia through the two heritability designs).
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Observational study designs — the seven designs and the Past–Present–Future time axis</text>
        <rect x="802" y="25" width="260" height="18" rx="6" className="fill-brand-soft" />
        <text x="932" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">7 designs · 4 timeline lanes</text>
      </g>

      {/* ===== ZONE A — THE PAST–PRESENT–FUTURE TIME AXIS ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="436" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE PAST–PRESENT–FUTURE TIME AXIS — the four timeline designs, plotted by the direction of inquiry</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the printed figure&apos;s vertical axis re-drawn horizontally (ORIGINAL KYP REDRAW) — the risk-factor chips carry the print&apos;s circle icons: with vs without the exposure</text>

        {/* the axis + the three time ticks */}
        <text x="250" y="131" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">Past</text>
        <text x="590" y="131" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">Present</text>
        <text x="930" y="131" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">Future</text>
        <line x1="140" y1="140" x2="1036" y2="140" className="stroke-foreground" strokeWidth="1.5" />
        <path d="M 1034 136 L 1044 140 L 1034 144 Z" className="fill-foreground" />
        <line x1="250" y1="133" x2="250" y2="147" className="stroke-foreground" strokeWidth="1.5" />
        <line x1="590" y1="133" x2="590" y2="147" className="stroke-foreground" strokeWidth="1.5" />
        <line x1="930" y1="133" x2="930" y2="147" className="stroke-foreground" strokeWidth="1.5" />
        <line x1="250" y1="152" x2="250" y2="462" className="stroke-border" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="590" y1="152" x2="590" y2="462" className="stroke-border" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="930" y1="152" x2="930" y2="462" className="stroke-border" strokeWidth="1" strokeDasharray="4 4" />

        {/* LANE 1 — Cross-sectional study: two risk-factor chips AT the Present → Compare disease prevalence */}
        <g>
          <text x="52" y="189" fontSize="4.4" fontWeight="800" className="fill-brand">Cross-sectional study</text>
          <text x="52" y="200" fontSize="3" fontWeight="700" className="fill-muted-foreground">one slice of the present</text>
          {riskChip(494, 182, true, "xs-a")}
          {riskChip(598, 182, false, "xs-b")}
          <line x1="692" y1="193" x2="722" y2="193" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 720 189 L 730 193 L 720 197 Z" className="fill-foreground" />
          <rect x="734" y="182" width="176" height="22" rx="8" className="fill-success-soft/50 stroke-success" />
          <text x="822" y="196.5" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-success">Compare disease prevalence</text>
        </g>

        {/* LANE 2 — Case-control study: Diseased cases + Controls without disease at Present, arrows BACK to Compare risk factor frequency */}
        <g>
          <text x="52" y="259" fontSize="4.4" fontWeight="800" className="fill-brand">Case-control study</text>
          <text x="52" y="270" fontSize="3" fontWeight="700" className="fill-muted-foreground">look back from disease</text>
          <rect x="488" y="252" width="104" height="22" rx="6" className="fill-card stroke-warning" />
          <text x="540" y="266.5" textAnchor="middle" fontSize="2.9" fontWeight="800" className="fill-warning">Diseased cases</text>
          <rect x="600" y="252" width="116" height="22" rx="6" className="fill-card stroke-warning" />
          <text x="658" y="266.5" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-warning">Controls without disease</text>
          <line x1="484" y1="258" x2="348" y2="258" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 350 254 L 340 258 L 350 262 Z" className="fill-foreground" />
          <line x1="484" y1="268" x2="348" y2="268" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 350 264 L 340 268 L 350 272 Z" className="fill-foreground" />
          <rect x="196" y="250" width="144" height="26" rx="8" className="fill-warning-soft/50 stroke-warning" />
          <text x="268" y="261.5" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-warning">Compare risk factor</text>
          <text x="268" y="271.5" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-warning">frequency</text>
        </g>

        {/* LANE 3 — Retrospective cohort study: risk-factor chips at Past → Compare disease incidence at Present, via Review previous records */}
        <g>
          <text x="52" y="325" fontSize="4.4" fontWeight="800" className="fill-brand">Retrospective</text>
          <text x="52" y="336" fontSize="4.4" fontWeight="800" className="fill-brand">cohort study</text>
          <text x="52" y="347" fontSize="3" fontWeight="700" className="fill-muted-foreground">records run the arrow forward</text>
          {riskChip(196, 322, true, "rc-a")}
          {riskChip(296, 322, false, "rc-b")}
          <line x1="392" y1="328" x2="526" y2="328" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 524 324 L 534 328 L 524 332 Z" className="fill-foreground" />
          <line x1="392" y1="338" x2="526" y2="338" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 524 334 L 534 338 L 524 342 Z" className="fill-foreground" />
          <rect x="532" y="320" width="116" height="26" rx="8" className="fill-success-soft/50 stroke-success" />
          <text x="590" y="331.5" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-success">Compare disease</text>
          <text x="590" y="341.5" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-success">incidence</text>
          <rect x="700" y="322" width="132" height="22" rx="6" className="fill-card stroke-border" strokeDasharray="4 3" />
          <text x="766" y="336.5" textAnchor="middle" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">Review previous records</text>
          <path d="M 766 344 L 766 360 L 258 360 L 258 350" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <path d="M 254 352 L 258 344 L 262 352 Z" className="fill-muted-foreground" />
        </g>

        {/* LANE 4 — Prospective cohort study: risk-factor chips at Present → Compare disease incidence at Future */}
        <g>
          <text x="52" y="395" fontSize="4.4" fontWeight="800" className="fill-brand">Prospective</text>
          <text x="52" y="406" fontSize="4.4" fontWeight="800" className="fill-brand">cohort study</text>
          <text x="52" y="417" fontSize="3" fontWeight="700" className="fill-muted-foreground">follow forward from exposure</text>
          {riskChip(494, 392, true, "pc-a")}
          {riskChip(598, 392, false, "pc-b")}
          <line x1="694" y1="398" x2="862" y2="398" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 860 394 L 870 398 L 860 402 Z" className="fill-foreground" />
          <line x1="694" y1="408" x2="862" y2="408" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 860 404 L 870 408 L 860 412 Z" className="fill-foreground" />
          <rect x="870" y="392" width="120" height="26" rx="8" className="fill-success-soft/50 stroke-success" />
          <text x="930" y="403.5" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-success">Compare disease</text>
          <text x="930" y="413.5" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-success">incidence</text>
        </g>

        {/* the rule strip */}
        <line x1="52" y1="470" x2="1050" y2="470" className="stroke-border" strokeWidth="1" />
        <text x="52" y="484" fontSize="3.6" fontWeight="800" className="fill-foreground">THE KYP RULE — the direction fixes the measure: a slice of the present measures PREVALENCE · a look-back from disease measures ODDS (OR) · a forward march from exposure measures INCIDENCE (RR)</text>
        <text x="52" y="496" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Printed compare-labels, as adjudicated — Cross-sectional: “Compare disease prevalence” · Case-control: “Compare risk factor frequency” · both cohorts: “Compare disease incidence”</text>
      </g>

      {/* ===== ZONE B — THE SEVEN DESIGNS ===== */}
      <g>
        <rect x="36" y="516" width="1030" height="566" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="538" fontSize="5.4" fontWeight="800" className="fill-foreground">THE SEVEN DESIGNS — the printed table as cards: design → measure → example (PRINTED order)</text>
        <text x="52" y="549" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">First Aid&apos;s two red in-cell mnemonics carried verbatim and attributed — every measure and example below is the print&apos;s own</text>

        {/* CARD 1 — Case series */}
        <g>
          <rect x="52" y="560" width="502" height="120" rx="10" className="fill-card stroke-border" />
          <circle cx="70" cy="578" r="9" className="fill-brand-soft stroke-brand" />
          <text x="70" y="580.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">1</text>
          <text x="86" y="582" fontSize="4.4" fontWeight="800" className="fill-brand">Case series</text>
          <text x="66" y="600" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Describes several individual patients with the same diagnosis, treatment, or outcome —</text>
          <text x="66" y="610" fontSize="2.9" fontWeight="700" className="fill-foreground/80">description of clinical findings and symptoms.</text>
          <rect x="66" y="618" width="296" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="74" y="629" fontSize="3" fontWeight="800" className="fill-warning">NO COMPARISON GROUP → cannot show risk factor association</text>
          <text x="66" y="652" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the table&apos;s pre-analytic row — describe to spot a pattern; compare to test one (KYP)</text>
        </g>

        {/* CARD 2 — Cross-sectional study */}
        <g>
          <rect x="566" y="560" width="502" height="120" rx="10" className="fill-card stroke-border" />
          <circle cx="584" cy="578" r="9" className="fill-brand-soft stroke-brand" />
          <text x="584" y="580.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">2</text>
          <text x="600" y="582" fontSize="4.4" fontWeight="800" className="fill-brand">Cross-sectional study</text>
          <text x="580" y="600" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Frequency of disease and frequency of risk-related factors are assessed</text>
          <text x="580" y="610" fontSize="2.9" fontWeight="700" className="fill-foreground/80">in the present — a single time slice.</text>
          <rect x="580" y="618" width="196" height="16" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="588" y="629" fontSize="3" fontWeight="800" className="fill-success">MEASURES DISEASE PREVALENCE</text>
          <text x="580" y="652" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">can show risk factor association with disease, but does not establish causality</text>
        </g>

        {/* CARD 3 — Case-control study */}
        <g>
          <rect x="52" y="690" width="502" height="120" rx="10" className="fill-card stroke-border" />
          <circle cx="70" cy="708" r="9" className="fill-brand-soft stroke-brand" />
          <text x="70" y="710.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">3</text>
          <text x="86" y="712" fontSize="4.4" fontWeight="800" className="fill-brand">Case-control study</text>
          <text x="66" y="730" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Retrospectively compares a group of people with disease to a group without disease —</text>
          <text x="66" y="740" fontSize="2.9" fontWeight="700" className="fill-foreground/80">looks to see if odds of prior exposure or risk factor differ by disease state.</text>
          <rect x="66" y="748" width="120" height="16" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="74" y="759" fontSize="3" fontWeight="800" className="fill-success">ODDS RATIO (OR)</text>
          <text x="66" y="782" fontSize="3" fontWeight="800" className="fill-emergency">“Control the case in the OR.” — First Aid&apos;s own, printed in red in the cell</text>
          <text x="66" y="798" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">Patients with COPD had higher odds of a smoking history than those without COPD.</text>
        </g>

        {/* CARD 4 — Cohort study */}
        <g>
          <rect x="566" y="690" width="502" height="120" rx="10" className="fill-card stroke-border" />
          <circle cx="584" cy="708" r="9" className="fill-brand-soft stroke-brand" />
          <text x="584" y="710.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">4</text>
          <text x="600" y="712" fontSize="4.4" fontWeight="800" className="fill-brand">Cohort study</text>
          <text x="580" y="730" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Compares a group with a given exposure or risk factor to a group without such</text>
          <text x="580" y="740" fontSize="2.9" fontWeight="700" className="fill-foreground/80">exposure — later development of disease; can be prospective or retrospective.</text>
          <rect x="580" y="748" width="236" height="16" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="588" y="759" fontSize="3" fontWeight="800" className="fill-success">DISEASE INCIDENCE · RELATIVE RISK (RR)</text>
          <text x="580" y="782" fontSize="3" fontWeight="800" className="fill-emergency">“Cohort = relative risk.” — First Aid&apos;s own, printed in red in the cell</text>
          <text x="580" y="798" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">People who smoke had a higher risk of developing COPD than people who do not.</text>
        </g>

        {/* CARD 5 — Twin concordance study */}
        <g>
          <rect x="52" y="820" width="502" height="120" rx="10" className="fill-card stroke-border" />
          <circle cx="70" cy="838" r="9" className="fill-brand-soft stroke-brand" />
          <text x="70" y="840.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">5</text>
          <text x="86" y="842" fontSize="4.4" fontWeight="800" className="fill-brand">Twin concordance study</text>
          <text x="66" y="860" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Compares the frequency with which both monozygotic twins vs both dizygotic</text>
          <text x="66" y="870" fontSize="2.9" fontWeight="700" className="fill-foreground/80">twins develop the same disease.</text>
          <rect x="66" y="878" width="228" height="16" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="74" y="889" fontSize="3" fontWeight="800" className="fill-success">HERITABILITY — “NATURE VS NURTURE”</text>
          <text x="66" y="912" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">If one monozygotic twin develops schizophrenia, the other twin has a much higher</text>
          <text x="66" y="922" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">concordance rate than dizygotic twins — a strong genetic component.</text>
        </g>

        {/* CARD 6 — Adoption study */}
        <g>
          <rect x="566" y="820" width="502" height="120" rx="10" className="fill-card stroke-border" />
          <circle cx="584" cy="838" r="9" className="fill-brand-soft stroke-brand" />
          <text x="584" y="840.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">6</text>
          <text x="600" y="842" fontSize="4.4" fontWeight="800" className="fill-brand">Adoption study</text>
          <text x="580" y="860" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Compares behavioral traits/genetics in siblings raised by biological vs</text>
          <text x="580" y="870" fontSize="2.9" fontWeight="700" className="fill-foreground/80">adoptive parents.</text>
          <rect x="580" y="878" width="188" height="16" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="588" y="889" fontSize="3" fontWeight="800" className="fill-success">HERITABILITY + ENVIRONMENT</text>
          <text x="580" y="912" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">An adopted child has a higher risk of developing schizophrenia if their biological</text>
          <text x="580" y="922" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">parent had schizophrenia, regardless of the adoptive parents’ health.</text>
        </g>

        {/* CARD 7 — Ecological study */}
        <g>
          <rect x="52" y="950" width="502" height="120" rx="10" className="fill-card stroke-border" />
          <circle cx="70" cy="968" r="9" className="fill-brand-soft stroke-brand" />
          <text x="70" y="970.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">7</text>
          <text x="86" y="972" fontSize="4.4" fontWeight="800" className="fill-brand">Ecological study</text>
          <text x="66" y="990" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Compares frequency of disease and frequency of risk-related factors across</text>
          <text x="66" y="1000" fontSize="2.9" fontWeight="700" className="fill-foreground/80">populations — population data not necessarily applicable to individuals.</text>
          <rect x="66" y="1008" width="300" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="74" y="1019" fontSize="3" fontWeight="800" className="fill-warning">ECOLOGICAL FALLACY — used to monitor population health</text>
          <text x="66" y="1042" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">COPD prevalence was higher in more polluted cities.</text>
        </g>

        {/* CARD 8 — the two example threads (KYP) */}
        <g>
          <rect x="566" y="950" width="502" height="120" rx="10" className="fill-card stroke-neural" />
          <text x="580" y="972" fontSize="4.4" fontWeight="800" className="fill-neural">The page&apos;s two example threads (KYP)</text>
          <text x="580" y="990" fontSize="2.9" fontWeight="800" className="fill-foreground">COPD — one disease, three designs:</text>
          <text x="590" y="1000" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">case-control — higher odds of a smoking history · cohort — higher risk of developing</text>
          <text x="590" y="1010" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">COPD · ecological — prevalence higher in more polluted cities</text>
          <text x="580" y="1028" fontSize="2.9" fontWeight="800" className="fill-foreground">SCHIZOPHRENIA — the two heritability designs:</text>
          <text x="590" y="1038" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">twin concordance — MZ co-twin concordance ≫ DZ · adoption — risk follows the</text>
          <text x="590" y="1048" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">biological parent, regardless of the adoptive parents’ health</text>
          <text x="580" y="1062" fontSize="2.8" fontWeight="700" className="fill-neural">the design decides the measure — the page&apos;s own lesson (KYP)</text>
        </g>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1092" width="1054" height="64" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1110" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 278 / book 256 (Public Health Sciences — Epidemiology and Biostatistics: Observational studies)</text>
        <text x="42" y="1122" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the color-coded table (dark navy title, blue study-type names, two red mnemonic lines, dotted hairlines; VLM-read at 120dpi,</text>
        <text x="42" y="1132" fontSize="3.8" className="fill-muted-foreground">staging-pubh1/vlm-census.txt) + the pure-vector timeline figure. ORIGINAL KYP ADAPTATION + REDRAW — the horizontal axis and the card layout are KYP&apos;s; every printed</text>
        <text x="42" y="1142" fontSize="3.8" className="fill-muted-foreground">label is preserved (7 rows, 4 panels, both compare-labels, both mnemonics attributed) — the full table is carried verbatim in the note&apos;s table block.</text>
        <text x="42" y="1152" fontSize="3.8" className="fill-muted-foreground">ADJUDICATION — print: Cross-sectional panel carries “Compare disease prevalence”; Case-control panel carries “Compare risk factor frequency” (bbox + layout + VLM agree).</text>
      </g>
    </svg>
  );
};
