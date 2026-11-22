/* Public Health — pubh batch 1 / task pubh2: Clinical therapeutic trials
 * and the drug development pipeline (book 257 UPPER, pdf 279 — a pinned
 * page-split: everything from the "Clinical therapeutic trial" navy
 * heading down to the rule above "Off-label drug use"; the lower portion
 * belongs to bradford-hill-criteria). Census (pdfimages): ZERO raster
 * images — the printed phase figure is pure vector line art (VLM read it
 * as "a full-color illustrated image"; pdfimages -list is the authority),
 * so it is rebuilt here as an ORIGINAL KYP_REDRAW: the design-quality
 * ladder (experimental in humans → randomized → controlled →
 * double-blinded → triple-blind), the six-station pipeline rail
 * (Preclinical → Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4) with
 * First Aid's own "Can I SWIM?" letters pinned to phases 1-4 (S = Safety,
 * W = Work, I = Improvement, M = Market — the source's red caption words,
 * attributed; the letter-pinning is KYP's overlay), the FDA approval gate
 * above the Phase 3→4 connector, the printed Sample row (headcount
 * figures, open-label vs randomized/controlled/anonymized chips, and the
 * two large "?" anonymization badges beside phases 2-3), the
 * analysis-population fork (intention-to-treat vs as-treated vs
 * per-protocol with their printed bias ratings), and the crossover
 * timeline (≥2 treatments, randomized order, washout, subject as own
 * control). ADJUDICATION carried in the rail (print governs): "Very small
 * number…" prints under Phase 0 and "Small number…" under Phase 1
 * (pdftotext -layout + VLM agree). No source icons (microscope, syringe,
 * heart, scales, pill bottle) are reproduced — the art is KYP's; every
 * printed label and caption is preserved and additionally carried
 * verbatim in the note's table block. Purely presentational (no props, no
 * hooks, no external images). */

export function ClinicalTrialsMap() {
  const w = 1102;
  const h = 1124;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Clinical therapeutic trials — the design-quality ladder (randomized, controlled, double-blinded, triple-blind), the drug development pipeline rail Preclinical to Phase 0, Phase 1 Safety, Phase 2 Work, Phase 3 Improvement, FDA approval, Phase 4 Market with the printed Sample row, the analysis-population fork (intention-to-treat vs as-treated vs per-protocol), and the crossover trial timeline with its washout period — an original KYP diagram of book 257 upper, with First Aid's own Can I SWIM mnemonic attributed." className="min-w-[1060px]">
      <title>Clinical therapeutic trials — design ladder, Can I SWIM pipeline, analysis fork, crossover timeline</title>
      <desc>
        An original KYP diagram of First Aid 2026 book 257 upper: the design-quality
        ladder from experimental study in humans through randomized, controlled,
        double-blinded to triple-blind; the six-station drug development pipeline
        (Preclinical, Phase 0 microdosing, Phase 1 Safety, Phase 2 Work, Phase 3
        Improvement, Phase 4 Market) with the FDA approval gate and the printed
        Sample row; the analysis-population fork (intention-to-treat, as-treated,
        per-protocol); and the crossover trial timeline with its washout period.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Clinical therapeutic trials — the design ladder, the “Can I SWIM?” pipeline, and the analysis fork (original KYP diagram)</text>
        <rect x="762" y="25" width="300" height="18" className="fill-brand-soft" />
        <text x="912" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">5 phases · 3 analyses · 1 ladder</text>
      </g>

      {/* ===== ZONE A — THE DESIGN-QUALITY LADDER ===== */}
      <g>
        <rect x="36" y="76" width="1030" height="94" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="98" fontSize="5.4" fontWeight="800" className="fill-foreground">THE DESIGN LADDER — “Study quality improves when clinical trial is randomized, controlled, and double-blinded” (printed)</text>
        <text x="52" y="109" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">an experimental study involving humans, comparing therapeutic benefits of ≥2 interventions — each rung closes one bias channel; triple-blind adds the analysts</text>
        {[
          ["EXPERIMENTAL IN HUMANS", "compares therapeutic benefits of", "≥2 interventions (vs placebo, vs treatment)", 52, "stroke-border"],
          ["RANDOMIZED", "chance builds the arms — known", "and unknown confounders even out", 250, "stroke-brand"],
          ["CONTROLLED", "a comparator exists: placebo or", "active treatment (treatment vs treatment)", 448, "stroke-brand"],
          ["DOUBLE-BLINDED", "neither subject nor researcher", "knows which group the subject is in", 646, "stroke-brand"],
          ["TRIPLE-BLIND", "+ the researchers analyzing the", "data are blinded too (the 3rd party)", 844, "stroke-warning"],
        ].map(([label, sub1, sub2, x, stroke], i) => (
          <g key={`ladder-${i}`}>
            <rect x={x as number} y="120" width="188" height="36" rx="8" className={`fill-card ${stroke as string}`} />
            <text x={(x as number) + 12} y="134" fontSize="3.5" fontWeight="800" className="fill-foreground">{label as string}</text>
            <text x={(x as number) + 12} y="145" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">{sub1 as string}</text>
            <text x={(x as number) + 12} y="154" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">{sub2 as string}</text>
            {i < 4 && (
              <g>
                <line x1={(x as number) + 189} y1="138" x2={(x as number) + 193} y2="138" className="stroke-foreground" strokeWidth="1.2" />
                <path d={`M ${(x as number) + 192} 135 L ${(x as number) + 198} 138 L ${(x as number) + 192} 141 Z`} className="fill-foreground" />
              </g>
            )}
          </g>
        ))}
        <text x="52" y="166" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Count the blinded parties: double-blind = subject + researcher · triple-blind adds the analysts. A crossover design (bottom strip) stacks on top of any rung.</text>
      </g>

      {/* ===== ZONE B — THE “Can I SWIM?” PIPELINE RAIL ===== */}
      <g>
        <rect x="36" y="182" width="1030" height="400" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="204" fontSize="5.4" fontWeight="800" className="fill-foreground">THE PIPELINE — “Can I SWIM?” (First Aid&apos;s own mnemonic, attributed — S · W · I · M are the source&apos;s red caption words)</text>
        <text x="52" y="215" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">“Clinical trials occur after preclinical studies and consist of five phases” — printed left-to-right order; the FDA gate sits on the arrow into Phase 4</text>

        {/* FDA approval gate — above the Phase 3→Phase 4 connector (printed position, VLM-confirmed) */}
        <rect x="835" y="224" width="92" height="16" rx="8" className="fill-card stroke-brand" />
        <text x="881" y="235" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-brand">FDA approval</text>
        <line x1="881" y1="240" x2="881" y2="309" className="stroke-brand" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="881" cy="315" r="3" className="fill-brand" />

        {/* the six stations */}
        {[
          { name: "Preclinical", stroke: "stroke-border", letter: null, letterClass: "", desc: ["Test drug in lab animals", "and in vitro experiments."], x: 52 },
          { name: "Phase 0", stroke: "stroke-success", letter: null, letterClass: "", desc: ["Initial pharmacokinetic and", "pharmacodynamic assessment", "via microdosing. Often", "skipped."], x: 219 },
          { name: "Phase 1", stroke: "stroke-brand", letter: "S", letterClass: "fill-brand", desc: ["Safety assessment via dose", "escalation. Determine", "maximum tolerable dose."], x: 386 },
          { name: "Phase 2", stroke: "stroke-emergency", letter: "W", letterClass: "fill-emergency", desc: ["Efficacy assessment (does it", "Work?) Provides additional", "data on short-term", "adverse effects."], x: 553 },
          { name: "Phase 3", stroke: "stroke-neural", letter: "I", letterClass: "fill-neural", desc: ["Effectiveness assessment via", "comparison with current", "standard of care/placebo", "(any Improvement?)"], x: 720 },
          { name: "Phase 4", stroke: "stroke-warning", letter: "M", letterClass: "fill-warning", desc: ["Provides data on long-term", "or rare adverse effects", "(can it stay on the", "Market?)"], x: 887 },
        ].map((card, i) => (
          <g key={`phase-${i}`}>
            <rect x={card.x} y="240" width="155" height="150" rx="10" className={`fill-card ${card.stroke}`} />
            <text x={card.x + 14} y="262" fontSize="5" fontWeight="800" className="fill-foreground">{card.name}</text>
            {card.letter && (
              <g>
                <rect x={card.x + 113} y="252" width="28" height="20" rx="5" className={card.letterClass} />
                <text x={card.x + 127} y="266.5" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-card">{card.letter}</text>
              </g>
            )}
            {card.desc.map((line, j) => (
              <text key={`phase-${i}-desc-${j}`} x={card.x + 14} y={290 + j * 10} fontSize="3" fontWeight="700" className="fill-foreground">{line}</text>
            ))}
            {i < 5 && (
              <g>
                <line x1={card.x + 157} y1="315" x2={card.x + 163} y2="315" className="stroke-foreground" strokeWidth="1.2" />
                <path d={`M ${card.x + 161} 312 L ${card.x + 167} 315 L ${card.x + 161} 318 Z`} className="fill-foreground" />
              </g>
            )}
          </g>
        ))}

        {/* the Sample row */}
        <rect x="52" y="404" width="86" height="15" rx="7" className="fill-secondary stroke-border" />
        <text x="95" y="414.5" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-foreground">Sample</text>
        <text x="66" y="434" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">no human sample —</text>
        <text x="66" y="444" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">the label itself prints</text>
        <text x="66" y="454" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">here (leftmost column)</text>

        {[
          { n: 1, cls: "fill-success", x: 219, q: null, qCls: "", text: ["Very small number of healthy", "volunteers or patients with", "disease of interest."], chip: "OPEN LABEL", chipCls: "fill-secondary stroke-border", chipText: "fill-foreground", chipW: 76, chipFs: "2.8" },
          { n: 3, cls: "fill-brand", x: 386, q: null, qCls: "", text: ["Small number of healthy", "volunteers or patients with", "disease of interest."], chip: "OPEN LABEL", chipCls: "fill-secondary stroke-border", chipText: "fill-foreground", chipW: 76, chipFs: "2.8" },
          { n: 5, cls: "fill-emergency", x: 553, q: "?", qCls: "fill-emergency", text: ["Moderate number of patients", "with disease of interest."], chip: "RANDOMIZED · CONTROLLED · ANONYMIZED", chipCls: "fill-brand-soft stroke-brand", chipText: "fill-brand", chipW: 128, chipFs: "2.5" },
          { n: 8, cls: "fill-neural", x: 720, q: "?", qCls: "fill-neural", text: ["Large number of patients", "with disease of interest."], chip: "RANDOMIZED · CONTROLLED · ANONYMIZED", chipCls: "fill-brand-soft stroke-brand", chipText: "fill-brand", chipW: 128, chipFs: "2.5" },
          { n: 9, cls: "fill-warning", x: 887, q: null, qCls: "", text: ["Postmarketing surveillance of", "patients with disease of", "interest."], chip: "OPEN LABEL", chipCls: "fill-secondary stroke-border", chipText: "fill-foreground", chipW: 76, chipFs: "2.8" },
        ].map((cell, i) => (
          <g key={`sample-${i}`}>
            {Array.from({ length: cell.n }).map((_, k) => (
              <g key={`sample-${i}-p-${k}`} className={cell.cls}>
                <circle cx={cell.x + 14 + k * 12} cy="443" r="2.6" />
                <rect x={cell.x + 10 + k * 12} y="447.5" width="8" height="5" rx="2" />
              </g>
            ))}
            {cell.q && (
              <text x={cell.x + 14 + cell.n * 12 + 6} y="452" fontSize="13" fontWeight="800" className={cell.qCls}>{cell.q}</text>
            )}
            {cell.text.map((line, j) => (
              <text key={`sample-${i}-t-${j}`} x={cell.x + 14} y={470 + j * 10} fontSize="2.9" fontWeight="700" className="fill-foreground">{line}</text>
            ))}
            <rect x={cell.x + 12} y="502" width={cell.chipW} height="14" rx="5" className={cell.chipCls} />
            <text x={cell.x + 12 + cell.chipW / 2} y="511.5" textAnchor="middle" fontSize={cell.chipFs} fontWeight="800" className={cell.chipText}>{cell.chip}</text>
          </g>
        ))}

        <text x="52" y="542" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">The two large “?” marks print beside the phase 2 and phase 3 sample groups in the source figure (VLM) — read here as the anonymization mark (KYP reading).</text>
        <text x="52" y="554" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">Phase colors echo the print&apos;s per-phase icon colors (green · blue · pink · purple · tan); the SWIM letter badges are KYP&apos;s overlay of First Aid&apos;s own mnemonic.</text>
      </g>

      {/* ===== ZONE C — THE ANALYSIS-POPULATION FORK ===== */}
      <g>
        <rect x="36" y="598" width="1030" height="280" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="620" fontSize="5.4" fontWeight="800" className="fill-foreground">THE ANALYSIS-POPULATION FORK — one completed dataset, three printed rules</text>
        <text x="52" y="631" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">who counts in the final table? Intention-to-treat · As-treated · Per-protocol — same trial, three denominators, three bias profiles</text>

        {/* the completed trial node */}
        <g>
          <rect x="52" y="700" width="170" height="110" rx="10" className="fill-card stroke-border" />
          <text x="137" y="722" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">THE COMPLETED TRIAL</text>
          {["randomized on day 0 —", "but dropouts (attrition),", "switches (crossover), and", "stopped pills (nonrandom", "noncompliance) blur the", "arms by trial's end"].map((line, j) => (
            <text key={`fork-node-${j}`} x="62" y={738 + j * 10} fontSize="2.9" fontWeight="700" className="fill-muted-foreground">{line}</text>
          ))}
        </g>

        {/* arrows out of the node */}
        <g>
          <line x1="222" y1="720" x2="296" y2="698" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 293 695 L 300 697 L 295 703 Z" className="fill-foreground" />
          <line x1="222" y1="752" x2="296" y2="745" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 293 742 L 300 745 L 293 749 Z" className="fill-foreground" />
          <line x1="222" y1="786" x2="296" y2="802" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 294 798 L 300 803 L 293 805 Z" className="fill-foreground" />
        </g>

        {/* ITT */}
        <g>
          <rect x="300" y="660" width="224" height="170" rx="10" className="fill-card stroke-success" />
          <text x="314" y="682" fontSize="4.2" fontWeight="800" className="fill-success">INTENTION-TO-TREAT</text>
          <text x="314" y="693" fontSize="3" fontWeight="800" className="fill-foreground">“once randomized, always analyzed”</text>
          {["All subjects are analyzed according to their", "original, randomly assigned treatment.", "No one is excluded."].map((line, j) => (
            <text key={`itt-${j}`} x="314" y={709 + j * 10} fontSize="3" fontWeight="700" className="fill-foreground">{line}</text>
          ))}
          <rect x="314" y="748" width="196" height="26" rx="6" className="fill-success" />
          <text x="412" y="759" textAnchor="middle" fontSize="2.9" fontWeight="800" className="fill-card">AVOIDS bias from attrition, crossover,</text>
          <text x="412" y="769" textAnchor="middle" fontSize="2.9" fontWeight="800" className="fill-card">nonrandom noncompliance</text>
          <text x="314" y="790" fontSize="2.9" fontWeight="800" className="fill-muted-foreground">…but MAY DILUTE the true effects of intervention</text>
          <text x="314" y="808" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the conservative, real-world estimate (KYP context)</text>
        </g>

        {/* AS-TREATED */}
        <g>
          <rect x="556" y="660" width="224" height="170" rx="10" className="fill-card stroke-warning" />
          <text x="570" y="682" fontSize="4.2" fontWeight="800" className="fill-warning">AS-TREATED</text>
          <text x="570" y="693" fontSize="3" fontWeight="800" className="fill-foreground">analyzed by what was RECEIVED</text>
          {["All subjects are analyzed according to the", "treatment they actually received."].map((line, j) => (
            <text key={`ast-${j}`} x="570" y={709 + j * 10} fontSize="3" fontWeight="700" className="fill-foreground">{line}</text>
          ))}
          <rect x="570" y="748" width="196" height="26" rx="6" className="fill-warning" />
          <text x="668" y="766" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-card">↑ RISK OF BIAS</text>
          <text x="570" y="790" fontSize="2.9" fontWeight="800" className="fill-muted-foreground">subjects migrate to the arm their behavior chose —</text>
          <text x="570" y="808" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">and behavior is not random (KYP context)</text>
        </g>

        {/* PER-PROTOCOL */}
        <g>
          <rect x="812" y="660" width="224" height="170" rx="10" className="fill-card stroke-warning" />
          <text x="826" y="682" fontSize="4.2" fontWeight="800" className="fill-warning">PER-PROTOCOL</text>
          <text x="826" y="693" fontSize="3" fontWeight="800" className="fill-foreground">completers only — noncompleters out</text>
          {["Subjects who fail to complete treatment as", "originally, randomly assigned are excluded."].map((line, j) => (
            <text key={`pp-${j}`} x="826" y={709 + j * 10} fontSize="3" fontWeight="700" className="fill-foreground">{line}</text>
          ))}
          <rect x="826" y="748" width="196" height="26" rx="6" className="fill-warning" />
          <text x="924" y="766" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-card">↑ RISK OF BIAS</text>
          <text x="826" y="790" fontSize="2.9" fontWeight="800" className="fill-muted-foreground">the cleanest-looking rule, the most dangerous —</text>
          <text x="826" y="808" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">exclusion is itself an outcome (KYP context)</text>
        </g>

        <text x="52" y="858" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">The printed trade-off, verbatim: ITT “attempts to avoid bias from attrition, crossover, and nonrandom noncompliance, but may dilute the true effects of intervention” — as-treated and per-protocol each print “↑ risk of bias.”</text>
      </g>

      {/* ===== ZONE D — THE CROSSOVER TIMELINE ===== */}
      <g>
        <rect x="36" y="894" width="1030" height="136" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="916" fontSize="5.4" fontWeight="800" className="fill-foreground">THE CROSSOVER TRIAL — a series of ≥2 treatments on one subject, randomized order, washout between</text>
        <text x="52" y="927" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">“Allows subjects to serve as their own controls” — one subject&apos;s timeline, drawn left to right</text>

        {/* the subject */}
        <g>
          <circle cx="78" cy="956" r="8" className="fill-brand-soft stroke-brand" />
          <rect x="64" y="966" width="28" height="12" rx="6" className="fill-brand-soft stroke-brand" />
          <text x="78" y="992" textAnchor="middle" fontSize="2.9" fontWeight="800" className="fill-foreground">ONE SUBJECT</text>
        </g>
        <g>
          <line x1="98" y1="965" x2="124" y2="965" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 121 962 L 128 965 L 121 968 Z" className="fill-foreground" />
        </g>

        {/* treatment A */}
        <g>
          <rect x="130" y="944" width="170" height="42" rx="8" className="fill-card stroke-brand" />
          <text x="215" y="962" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">TREATMENT A</text>
          <text x="215" y="973" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">order decided by lot (randomized)</text>
        </g>
        <g>
          <line x1="302" y1="965" x2="324" y2="965" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 321 962 L 328 965 L 321 968 Z" className="fill-foreground" />
        </g>

        {/* washout */}
        <g>
          <rect x="330" y="944" width="180" height="42" rx="8" className="fill-warning-soft/40 stroke-warning" strokeDasharray="5 4" />
          <text x="420" y="962" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-warning">WASHOUT PERIOD</text>
          <text x="420" y="973" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">drug-free interval between treatments</text>
        </g>
        <g>
          <line x1="512" y1="965" x2="534" y2="965" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 531 962 L 538 965 L 531 968 Z" className="fill-foreground" />
        </g>

        {/* treatment B */}
        <g>
          <rect x="540" y="944" width="170" height="42" rx="8" className="fill-card stroke-brand" />
          <text x="625" y="962" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">TREATMENT B</text>
          <text x="625" y="973" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the other treatment of the series</text>
        </g>
        <g>
          <line x1="712" y1="965" x2="734" y2="965" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 731 962 L 738 965 L 731 968 Z" className="fill-foreground" />
        </g>

        {/* self-control output */}
        <g>
          <rect x="740" y="944" width="262" height="42" rx="8" className="fill-success-soft/50 stroke-success" />
          <text x="871" y="962" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-success">SUBJECT = OWN CONTROL</text>
          <text x="871" y="973" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the A-period is compared with the same subject&apos;s B-period</text>
        </g>

        <text x="52" y="1014" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">The order in which subjects receive treatments is randomized (half start with A, half with B); the washout keeps the first treatment from contaminating the second; each subject supplies their own comparison.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1046" width="1054" height="62" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1062" fontSize="3.8" className="fill-muted-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 279 / book 257 UPPER (Public Health Sciences — Epidemiology and Biostatistics: Clinical therapeutic trial — a pinned page-split;</text>
        <text x="42" y="1072" fontSize="3.8" className="fill-muted-foreground">the lower portion, Off-label drug use + Bradford Hill criteria, belongs to the bradford-hill-criteria topic). Census (pdfimages): ZERO raster images — the phase figure is pure vector art, rebuilt as</text>
        <text x="42" y="1082" fontSize="3.8" className="fill-muted-foreground">ORIGINAL KYP VECTOR ART (no source icons reproduced). VLM available this session (glm-4.6v at 120dpi, staging-pubh2/vlm-census.txt): six-box rail, “FDA approval” above the Phase 3→4 connector,</text>
        <text x="42" y="1092" fontSize="3.8" className="fill-muted-foreground">the “Sample” row, two large “?” marks beside the phase 2/3 groups, red words “I SWIM” · “Work?” · “Improvement?” · “Market?” — all confirmed. ADJUDICATION (print governs): “Very small number…”</text>
        <text x="42" y="1102" fontSize="3.8" className="fill-muted-foreground">prints under Phase 0; “Small number…” under Phase 1 (layout + VLM agree). First Aid&apos;s own “Can I SWIM?” and “once randomized, always analyzed” are carried attributed; the letter-pinning is KYP&apos;s.</text>
      </g>
    </svg>
  );
}
