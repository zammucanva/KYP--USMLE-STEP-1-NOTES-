/* Public Health — PUBH batch 2, topic 11: Bias and study errors (FULL pdf
 * page 285 / book 263 — a WHOLE-PAGE topic in the EPIDEMIOLOGY AND
 * BIOSTATISTICS subsection; the page after Incidence vs prevalence, the page
 * before Confounding vs effect modification). The page carries ONE table —
 * "Bias and study errors", columns TYPE / DEFINITION / EXAmPLES / STRATEGIES
 * TO REDUCE BIAS, SEVEN rows in printed order (Selection, Recall,
 * Measurement, Procedure, Observer-expectancy, Lead-time, Length-time) —
 * plus the study-stage rail printing INSIDE the table as three full-width
 * light-teal bands: "Recruiting participants" (governs Selection bias),
 * "Performing study" (governs Recall, Measurement, Procedure,
 * Observer-expectancy), "Interpreting results" (governs Lead-time,
 * Length-time). Census (pdfimages): ZERO raster images. VLM-read at 120dpi
 * (one full-page pass + two zoom passes, staging-pubh11/vlm-census.txt),
 * colors PINNED by PyMuPDF span reads + 300dpi pixel sampling: navy table
 * title and column headers; teal TYPE names and band labels; black body;
 * red reserved for First Aid's own letter-link hooks — "be"/"bias" of
 * "(bedside bias)", "observed" + the watch-words "Haw"/"watches"/"haw" of
 * the mnemonic "(Hawthorne watches you like a hawk).", and the "E"+"d"
 * binding L(e)a(d)-time to (E)arly (d)etection. ADJUDICATIONS drawn exactly
 * as printed: (1) the STRATEGIES column carries ONE merged cell spanning
 * BOTH the Procedure bias and Observer-expectancy bias rows (bbox y-span +
 * -layout + the zoom VLM pass agree) — drawn here as ONE fix box spanning
 * both cards; (2) "Convenience sampling—patients are enrolled on basis of
 * ease of contact" prints in the DEFINITION cell of the Selection bias row
 * (bbox x-coordinates; not among the examples); (3) "Most commonly a
 * sampling bias" prints black (pixel-pinned — the first VLM color call was
 * corrected); (4) the stage bands are full-width shaded rows inside the
 * table, mapped 1-4-2. Nothing is reproduced from the book — an ORIGINAL
 * KYP ADAPTATION: the bands re-drawn as a docked left rail, the rows as
 * cards; the artwork and layout are KYP's, every printed label is
 * preserved, and the full table is also carried verbatim in the note's
 * table block. Purely presentational (no props, no hooks, no external
 * images). */

export const BiasMap = () => {
  const w = 1102;
  const h = 1360;

  /* The seven traps — definition/example/fix text is the print's own; the
   * stage grouping follows the printed bands; KYP framing lines are marked. */
  const fixChip = (x: number, y: number, w2: number, lines: string[], key: string) => (
    <g key={key}>
      <rect x={x} y={y} width={w2} height={12 + lines.length * 11} rx="6" className="fill-success-soft/50 stroke-success" />
      {lines.map((t, i) => (
        <text key={i} x={x + 10} y={y + 15 + i * 11} fontSize="2.8" fontWeight="700" className="fill-success">{t}</text>
      ))}
    </g>
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Bias and study errors — the seven traps docked to the printed three-stage rail: recruiting participants governs selection bias (nonrandom sampling with its three printed faces — convenience sampling by ease of contact, Berkson bias the bedside bias of hospital-selected cases and controls, and attrition bias among participants lost to follow up, fixed by randomization and the right comparison group); performing study governs recall bias (awareness of disorder alters recall, common in retrospective studies, fixed by shorter follow-up and medical records), measurement bias (information gathered in a systemically distorted manner — the faulty automatic sphygmomanometer and the Hawthorne effect with First Aid's mnemonic Hawthorne watches you like a hawk, fixed by objective standardized pretested methods and a placebo group), procedure bias (groups not treated the same — more time in highly specialized hospital units) and observer-expectancy bias (the researcher's belief changes the outcome, also called Pygmalion effect) — these two share ONE merged fix cell in the print: blinding (masking) and use of placebo, so that neither participants nor researchers know group assignments; and interpreting results governs lead-time bias (early detection interpreted as increased survival though the disease course has not changed — breast cancer by mammography, fixed by measuring back-end survival adjusted for severity at diagnosis, with the caveat of potential masking of causality) and length-time bias (the screen detects long-latency disease while shorter-latency disease becomes symptomatic earlier — the slowly progressive cancer is more likely detected than the rapidly progressive one, fixed by a randomized controlled trial assigning subjects to the screening program or to no screening) — an original KYP diagram of book 263." className="min-w-[1060px]">
      <title>Bias and study errors — the seven traps, their stages, and their fixes</title>
      <desc>
        The three printed stage bands as a docked left rail (recruiting participants, performing study, interpreting results — the 1-4-2 census), the seven bias traps as cards in printed order each carrying definition, examples, and fix, with the Procedure and Observer-expectancy cards sharing one merged blinding-and-placebo fix box exactly as the print merges their strategies cell, and First Aid's own red hooks attributed: the bedside-bias nickname, the Hawthorne hawk mnemonic, and the E+d letter-link binding Lead-time to Early detection.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Bias and study errors — the seven traps and their fixes</text>
        <rect x="802" y="25" width="260" height="18" rx="6" className="fill-brand-soft" />
        <text x="932" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">7 traps · 3 stages · 1 merged fix cell</text>
      </g>

      {/* ===== ZONE A — THE STAGE RAIL AND THE SEVEN TRAPS ===== */}
      <g>
        <rect x="36" y="74" width="1030" height="1082" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="96" fontSize="5.4" fontWeight="800" className="fill-foreground">THE STAGE RAIL AND THE SEVEN TRAPS — every card carries its printed definition, example(s), and FIX</text>
        <text x="52" y="107" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the printed table&apos;s three stage bands re-drawn as a docked rail (ORIGINAL KYP ADAPTATION) — every label below is the print&apos;s own; First Aid&apos;s red hooks attributed</text>

        {/* ===== THE LEFT RAIL — the three printed stage bands ===== */}
        {/* Band 1 — Recruiting participants */}
        <g>
          <rect x="52" y="120" width="120" height="172" rx="10" className="fill-brand-soft/40 stroke-brand" />
          <text x="112" y="142" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">RECRUITING</text>
          <text x="112" y="154" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">PARTICIPANTS</text>
          <line x1="66" y1="164" x2="158" y2="164" className="stroke-brand/70" strokeWidth="1" />
          <text x="112" y="180" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">1 trap</text>
          <text x="112" y="192" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">who gets in —</text>
          <text x="112" y="202" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">and who stays</text>
          <rect x="62" y="214" width="100" height="18" rx="6" className="fill-card stroke-brand" />
          <text x="112" y="226" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-brand">SELECTION BIAS</text>
          <text x="112" y="252" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">the print&apos;s first band —</text>
          <text x="112" y="262" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">the recruiting stage</text>
          <text x="112" y="274" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">fix: randomize + right</text>
          <text x="112" y="284" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">reference group</text>
        </g>
        {/* band arrow */}
        <path d="M 112 296 L 112 300" className="stroke-brand" strokeWidth="1.2" />
        <path d="M 109 298 L 112 304 L 115 298 Z" className="fill-brand" />

        {/* Band 2 — Performing study */}
        <g>
          <rect x="52" y="308" width="120" height="476" rx="10" className="fill-brand-soft/40 stroke-brand" />
          <text x="112" y="330" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">PERFORMING</text>
          <text x="112" y="342" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">STUDY</text>
          <line x1="66" y1="352" x2="158" y2="352" className="stroke-brand/70" strokeWidth="1" />
          <text x="112" y="368" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">4 traps</text>
          <text x="112" y="380" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">what is remembered,</text>
          <text x="112" y="390" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">measured, done,</text>
          <text x="112" y="400" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">and expected</text>
          <rect x="62" y="412" width="100" height="16" rx="5" className="fill-card stroke-brand" />
          <text x="112" y="423" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-brand">RECALL BIAS</text>
          <rect x="62" y="434" width="100" height="16" rx="5" className="fill-card stroke-brand" />
          <text x="112" y="445" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-brand">MEASUREMENT BIAS</text>
          <rect x="62" y="456" width="100" height="16" rx="5" className="fill-card stroke-brand" />
          <text x="112" y="467" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-brand">PROCEDURE BIAS</text>
          <rect x="62" y="478" width="100" height="26" rx="5" className="fill-card stroke-brand" />
          <text x="112" y="489" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-brand">OBSERVER-</text>
          <text x="112" y="499" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-brand">EXPECTANCY BIAS</text>
          <text x="112" y="524" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">fixed by design machinery:</text>
          <text x="112" y="534" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">records · pretested tools ·</text>
          <text x="112" y="544" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">blinding · placebo</text>
          <text x="112" y="766" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">the print&apos;s second band —</text>
          <text x="112" y="776" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">4 of the 7 traps</text>
        </g>
        {/* band arrow */}
        <path d="M 112 788 L 112 792" className="stroke-brand" strokeWidth="1.2" />
        <path d="M 109 790 L 112 796 L 115 790 Z" className="fill-brand" />

        {/* Band 3 — Interpreting results */}
        <g>
          <rect x="52" y="800" width="120" height="348" rx="10" className="fill-brand-soft/40 stroke-brand" />
          <text x="112" y="822" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">INTERPRETING</text>
          <text x="112" y="834" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">RESULTS</text>
          <line x1="66" y1="844" x2="158" y2="844" className="stroke-brand/70" strokeWidth="1" />
          <text x="112" y="860" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">2 traps</text>
          <text x="112" y="872" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">how screening results</text>
          <text x="112" y="882" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">are read — both children</text>
          <text x="112" y="892" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">of screening</text>
          <rect x="62" y="904" width="100" height="16" rx="5" className="fill-card stroke-brand" />
          <text x="112" y="915" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-brand">LEAD-TIME BIAS</text>
          <rect x="62" y="926" width="100" height="16" rx="5" className="fill-card stroke-brand" />
          <text x="112" y="937" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-brand">LENGTH-TIME BIAS</text>
          <text x="112" y="962" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">fixes: the back-end</text>
          <text x="112" y="972" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">survival clock · the</text>
          <text x="112" y="982" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">screening RCT</text>
          <text x="112" y="1130" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">the print&apos;s third band —</text>
          <text x="112" y="1140" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">the screening pair</text>
        </g>

        {/* rail-to-cards connectors */}
        <line x1="172" y1="206" x2="186" y2="206" className="stroke-brand" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="172" y1="546" x2="186" y2="546" className="stroke-brand" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="172" y1="978" x2="186" y2="978" className="stroke-brand" strokeWidth="1" strokeDasharray="3 3" />

        {/* ===== CARD 1 — Selection bias ===== */}
        <g>
          <rect x="186" y="120" width="866" height="172" rx="10" className="fill-card stroke-border" />
          <circle cx="204" cy="138" r="9" className="fill-brand-soft stroke-brand" />
          <text x="204" y="140.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">1</text>
          <text x="220" y="142" fontSize="4.4" fontWeight="800" className="fill-brand">Selection bias</text>
          <text x="1044" y="141" textAnchor="end" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">STAGE: RECRUITING PARTICIPANTS</text>
          <text x="200" y="164" fontSize="2.9" fontWeight="700" className="fill-foreground/80">DEFINITION — Nonrandom sampling or treatment allocation of subjects such that study population is not representative of target population.</text>
          <text x="200" y="175" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Most commonly a sampling bias · Convenience sampling—patients are enrolled on basis of ease of contact <tspan className="fill-muted-foreground">(both print in the DEFINITION cell)</tspan></text>
          <text x="200" y="193" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">EX — Berkson bias—cases and/or controls selected from hospitals <tspan className="fill-emergency" fontWeight="800">(bedside bias)</tspan> are less healthy and have different exposures.</text>
          <text x="200" y="204" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">EX — Attrition bias—participants lost to follow up have a different prognosis than those who complete the study.</text>
          {fixChip(200, 216, 838, [
            "FIX — Randomization (creates groups with similar distributions of known and unknown variables)",
            "· Ensure the choice of the right comparison/reference group",
          ], "fix1")}
          <text x="200" y="262" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">three printed faces — convenience (ease of contact) · Berkson (the hospital bedside) · attrition (lost to follow up): the sample&apos;s composition, not the study&apos;s conduct, is what is distorted</text>
          <text x="200" y="278" fontSize="2.6" fontWeight="700" className="fill-emergency">“(bedside bias)” — First Aid&apos;s own printed nickname, its “be…bias” letters picked out in red in the cell</text>
        </g>

        {/* ===== CARD 2 — Recall bias ===== */}
        <g>
          <rect x="186" y="308" width="866" height="96" rx="10" className="fill-card stroke-border" />
          <circle cx="204" cy="326" r="9" className="fill-brand-soft stroke-brand" />
          <text x="204" y="328.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">2</text>
          <text x="220" y="330" fontSize="4.4" fontWeight="800" className="fill-brand">Recall bias</text>
          <text x="1044" y="329" textAnchor="end" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">STAGE: PERFORMING STUDY</text>
          <text x="200" y="352" fontSize="2.9" fontWeight="700" className="fill-foreground/80">DEFINITION — Awareness of disorder alters recall by subjects; common in retrospective studies.</text>
          <text x="200" y="368" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">EX — Patients with disease recall exposure after learning of similar cases.</text>
          {fixChip(200, 378, 838, [
            "FIX — Decrease time from exposure to follow-up; use medical records as sources",
          ], "fix2")}
        </g>

        {/* ===== CARD 3 — Measurement bias ===== */}
        <g>
          <rect x="186" y="416" width="866" height="164" rx="10" className="fill-card stroke-border" />
          <circle cx="204" cy="434" r="9" className="fill-brand-soft stroke-brand" />
          <text x="204" y="436.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">3</text>
          <text x="220" y="438" fontSize="4.4" fontWeight="800" className="fill-brand">Measurement bias</text>
          <text x="1044" y="437" textAnchor="end" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">STAGE: PERFORMING STUDY</text>
          <text x="200" y="460" fontSize="2.9" fontWeight="700" className="fill-foreground/80">DEFINITION — Information is gathered in a systemically distorted manner.</text>
          <text x="200" y="476" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">EX — Using a faulty automatic sphygmomanometer.</text>
          <text x="200" y="487" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">EX — Hawthorne effect—participants change behavior upon awareness of being observed <tspan className="fill-emergency" fontWeight="800">(Hawthorne watches you like a hawk).</tspan></text>
          <text x="200" y="498" fontSize="2.6" fontWeight="800" className="fill-emergency">“Hawthorne watches you like a hawk.” — First Aid&apos;s own mnemonic, printed in red in the cell (with “observed”)</text>
          {fixChip(200, 508, 838, [
            "FIX — Use objective, standardized, and previously tested methods of data collection that are planned ahead of time",
            "· Use placebo group",
          ], "fix3")}
          <text x="200" y="556" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">two printed faces — a faulty instrument, or the watched subject: the act of being observed is itself a distorted instrument (KYP)</text>
        </g>

        {/* ===== CARD 4 — Procedure bias (shares the merged fix box with card 5) ===== */}
        <g>
          <rect x="186" y="592" width="558" height="88" rx="10" className="fill-card stroke-border" />
          <circle cx="204" cy="610" r="9" className="fill-brand-soft stroke-brand" />
          <text x="204" y="612.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">4</text>
          <text x="220" y="614" fontSize="4.4" fontWeight="800" className="fill-brand">Procedure bias</text>
          <text x="736" y="613" textAnchor="end" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">STAGE: PERFORMING STUDY</text>
          <text x="200" y="636" fontSize="2.9" fontWeight="700" className="fill-foreground/80">DEFINITION — Subjects in different groups are not treated the same.</text>
          <text x="200" y="652" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">EX — Patients in treatment group spend more time in highly specialized</text>
          <text x="200" y="663" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">hospital units.</text>
        </g>

        {/* ===== CARD 5 — Observer-expectancy bias ===== */}
        <g>
          <rect x="186" y="692" width="558" height="92" rx="10" className="fill-card stroke-border" />
          <circle cx="204" cy="710" r="9" className="fill-brand-soft stroke-brand" />
          <text x="204" y="712.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">5</text>
          <text x="220" y="714" fontSize="4.4" fontWeight="800" className="fill-brand">Observer-expectancy bias</text>
          <text x="736" y="713" textAnchor="end" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">STAGE: PERFORMING STUDY</text>
          <text x="200" y="736" fontSize="2.9" fontWeight="700" className="fill-foreground/80">DEFINITION — Researcher’s belief in the efficacy of a treatment changes the</text>
          <text x="200" y="747" fontSize="2.9" fontWeight="700" className="fill-foreground/80">outcome of that treatment (also called Pygmalion effect).</text>
          <text x="200" y="766" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">EX — An observer expecting treatment group to show signs of recovery is more</text>
          <text x="200" y="777" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">likely to document positive outcomes.</text>
        </g>

        {/* ===== THE MERGED FIX BOX — spans cards 4 and 5, exactly as the print merges their STRATEGIES cell ===== */}
        <g>
          <rect x="756" y="592" width="296" height="192" rx="10" className="fill-success-soft/50 stroke-success" />
          <text x="768" y="612" fontSize="3.4" fontWeight="800" className="fill-success">THE MERGED FIX CELL</text>
          <text x="768" y="623" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">ONE printed STRATEGIES cell spans BOTH rows</text>
          <line x1="768" y1="630" x2="1040" y2="630" className="stroke-success" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="768" y="644" fontSize="2.8" fontWeight="700" className="fill-foreground/80">“Blinding (masking) and use of</text>
          <text x="768" y="655" fontSize="2.8" fontWeight="700" className="fill-foreground/80">placebo reduce influence of</text>
          <text x="768" y="666" fontSize="2.8" fontWeight="700" className="fill-foreground/80">participants and researchers on</text>
          <text x="768" y="677" fontSize="2.8" fontWeight="700" className="fill-foreground/80">procedures and interpretation of</text>
          <text x="768" y="688" fontSize="2.8" fontWeight="700" className="fill-foreground/80">outcomes as neither are aware of</text>
          <text x="768" y="699" fontSize="2.8" fontWeight="700" className="fill-foreground/80">group assignments”</text>
          <text x="768" y="718" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">one fix family, two traps: if nobody</text>
          <text x="768" y="728" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">knows the assignments, unequal care</text>
          <text x="768" y="738" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">(procedure) and expectant reading</text>
          <text x="768" y="748" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">(observer-expectancy) both die —</text>
          <text x="768" y="758" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">one printed cell, two traps killed</text>
          <text x="768" y="776" fontSize="2.5" fontWeight="800" className="fill-success">FIX — Blinding (masking) + placebo</text>
        </g>

        {/* ===== CARD 6 — Lead-time bias ===== */}
        <g>
          <rect x="186" y="800" width="866" height="168" rx="10" className="fill-card stroke-border" />
          <circle cx="204" cy="818" r="9" className="fill-brand-soft stroke-brand" />
          <text x="204" y="820.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">6</text>
          <text x="220" y="822" fontSize="4.4" fontWeight="800" className="fill-brand">Lead-time bias</text>
          <text x="1044" y="821" textAnchor="end" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">STAGE: INTERPRETING RESULTS</text>
          <text x="200" y="844" fontSize="2.9" fontWeight="700" className="fill-foreground/80">DEFINITION — <tspan className="fill-emergency" fontWeight="800">E</tspan>arly <tspan className="fill-emergency" fontWeight="800">d</tspan>etection interpreted as ↑ survival, but the disease course has not changed.</text>
          <text x="200" y="855" fontSize="2.6" fontWeight="800" className="fill-emergency">First Aid prints the E and the d in red — L(e)a(d)-time = (E)arly (d)etection: the book&apos;s own letter-link</text>
          <text x="200" y="874" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">EX — Breast cancer diagnosed early by mammography may appear to exaggerate survival time because patients are known to have the cancer for longer.</text>
          {fixChip(200, 886, 838, [
            "FIX — Measure “back-end” survival (adjust survival according to the severity of disease at the time of diagnosis)",
            "· caveat of adjusting for severity is the potential masking of causality (printed)",
          ], "fix6")}
          <text x="200" y="936" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the clock started early — the survival gain is time already known-to-have-the-cancer, not time gained (the course is unchanged)</text>
        </g>

        {/* ===== CARD 7 — Length-time bias ===== */}
        <g>
          <rect x="186" y="980" width="866" height="168" rx="10" className="fill-card stroke-border" />
          <circle cx="204" cy="998" r="9" className="fill-brand-soft stroke-brand" />
          <text x="204" y="1000.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">7</text>
          <text x="220" y="1002" fontSize="4.4" fontWeight="800" className="fill-brand">Length-time bias</text>
          <text x="1044" y="1001" textAnchor="end" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">STAGE: INTERPRETING RESULTS</text>
          <text x="200" y="1024" fontSize="2.9" fontWeight="700" className="fill-foreground/80">DEFINITION — Screening test detects diseases with long latency period, while those with shorter latency period become symptomatic earlier.</text>
          <text x="200" y="1040" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">EX — A slowly progressive cancer is more likely detected by a screening test than a rapidly progressive cancer.</text>
          {fixChip(200, 1052, 838, [
            "FIX — A randomized controlled trial assigning subjects to the screening program or to no screening",
          ], "fix7")}
          <text x="200" y="1092" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the screen&apos;s net catches the slow fish — the fast ones present clinically before the screen ever runs; randomize to equalize the slow/fast mix (KYP)</text>
          <text x="200" y="1108" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">sibling of lead-time bias: same mammography suite, different illusion — the catch is skewed, not the clock</text>
        </g>
      </g>

      {/* ===== THE STAGE RULE STRIP ===== */}
      <g>
        <rect x="36" y="1170" width="1030" height="62" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1190" fontSize="3.6" fontWeight="800" className="fill-foreground">THE KYP STAGE RULE — RANDOMIZE THE RECRUITING · BLIND AND STANDARDIZE THE PERFORMING · ADJUST THE CLOCK (OR RANDOMIZE THE SCREEN) FOR THE INTERPRETING</text>
        <text x="52" y="1204" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">randomization + right comparison/reference group → selection · records + shorter window → recall · pretested methods + placebo → measurement</text>
        <text x="52" y="1216" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">blinding + placebo → procedure AND observer-expectancy (one merged cell) · back-end survival → lead-time · screening RCT → length-time</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1246" width="1054" height="106" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1266" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 285 / book 263 (Public Health Sciences — Epidemiology and Biostatistics: Bias and study errors)</text>
        <text x="42" y="1278" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the color-coded table (navy title and headers, teal TYPE names, black body) plus the three full-width light-teal stage bands</text>
        <text x="42" y="1288" fontSize="3.8" className="fill-muted-foreground">(Recruiting participants · Performing study · Interpreting results). Colors pinned by VLM 120dpi + PyMuPDF span reads + 300dpi pixel sampling (staging-pubh11/vlm-census.txt):</text>
        <text x="42" y="1298" fontSize="3.8" className="fill-muted-foreground">red is reserved for FA&apos;s letter-link hooks — “(bedside bias),” the Hawthorne mnemonic&apos;s watch-words, the E+d of Lead-time = Early detection; “Most commonly a sampling bias” prints black.</text>
        <text x="42" y="1308" fontSize="3.8" className="fill-muted-foreground">ORIGINAL KYP ADAPTATION — the rail-and-card layout is KYP&apos;s; every printed label is preserved (7 rows, 4 columns, 3 band labels, the merged cell&apos;s full text); the full table is also</text>
        <text x="42" y="1318" fontSize="3.8" className="fill-muted-foreground">carried verbatim in the note&apos;s table block. ADJUDICATIONS (print governs): ONE merged STRATEGIES cell spans the Procedure + Observer-expectancy rows; “Convenience sampling—</text>
        <text x="42" y="1328" fontSize="3.8" className="fill-muted-foreground">patients are enrolled on basis of ease of contact” prints in the DEFINITION cell (not the EXAMPLES); stage mapping pinned 1-4-2: Recruiting → Selection · Performing → Recall,</text>
        <text x="42" y="1338" fontSize="3.8" className="fill-muted-foreground">Measurement, Procedure, Observer-expectancy · Interpreting → Lead-time, Length-time.</text>
      </g>
    </svg>
  );
};
