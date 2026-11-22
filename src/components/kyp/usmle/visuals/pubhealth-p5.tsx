/* Public Health — PUBH batch 1, topic 5: Mortality, attack rates, and
 * demographic transition (book 259 UPPER, pdf 281 — a pinned page-split:
 * this topic owns the "Quantifying risk (continued)" heading and its final
 * two rows — Mortality rate, Attack rate — plus the entire Demographic
 * transition block, ending immediately BEFORE the "Likelihood ratio"
 * heading). Census (pdfimages): ZERO raster images — the page's three
 * population pyramids are pure vector art, redrawn here as
 * ORIGINAL_KYP_REDRAW (Male/Female horizontal bars by Age; three shapes
 * VLM-pinned: wide-based triangle = Growing, rectangle = Stable,
 * narrow-based with a bulging middle = Declining, left→right), and the two
 * tables are an ORIGINAL KYP ADAPTATION (every printed word preserved: both
 * definitions, both worked examples, both formulas, and the four transition
 * rows with their printed arrows — Birth rate ↑↑/↓/↓↓, Mortality rate
 * ↑/↓/↓, Life expectancy Short/Long/Long, Population Growing/Stable/
 * Declining). The source figure's axis labels extract INTERLEAVED in the
 * text layer (Male, Age ×3, Population pyramid, FemaleMale, Female,
 * Male Female, Population % Population, % …); the interleave is documented
 * in the note header + manifest — this redraw gives each of the three
 * pyramids the complete Male / Female / Age / Population % axis set. The
 * arithmetic dissections, the denominator-family decoder, and the
 * stage-band arrangement are KYP originals. Nothing is reproduced from the
 * book; purely presentational (no props, no hooks, no external images). */

export const VitalStatisticsMap = () => {
  const w = 1102;
  const h = 1232;

  /* Pyramid bar half-widths, oldest band (top) → youngest band (bottom),
   * in viewBox units, max half-width 120 — the three VLM-pinned shapes. */
  const PYRAMIDS: {
    key: string;
    px: number; // panel x
    chip: string;
    chipClass: string;
    shapeLine: string;
    halves: number[];
    descA: string;
    descB: string;
  }[] = [
    {
      key: "grow",
      px: 52,
      chip: "STAGE 1 · GROWING",
      chipClass: "fill-warning",
      shapeLine: "wide base — the classic triangle",
      halves: [10, 20, 32, 46, 62, 80, 99, 120],
      descA: "births far exceed deaths — many children,",
      descB: "few elders; life expectancy Short",
    },
    {
      key: "stable",
      px: 388,
      chip: "STAGE 2 · STABLE",
      chipClass: "fill-brand",
      shapeLine: "even bars up the ages — the rectangle",
      halves: [92, 104, 112, 116, 118, 120, 120, 120],
      descA: "births ≈ deaths — each generation",
      descB: "replaces itself; life expectancy Long",
    },
    {
      key: "decline",
      px: 724,
      chip: "STAGE 3 · DECLINING",
      chipClass: "fill-success",
      shapeLine: "narrow base, bulging middle",
      halves: [64, 90, 112, 120, 118, 96, 68, 40],
      descA: "births fall below deaths — the cohort",
      descB: "ages; the base is narrower than the middle",
    },
  ];

  /* The four printed transition rows: label + the three stage values
   * (arrow up/down with count, or plain text). */
  const ROWS: {
    label: string;
    values: { kind: "arrow"; dir: "up" | "down"; count: 1 | 2 }[] | { kind: "text"; text: string; cls: string }[];
  }[] = [
    {
      label: "Birth rate",
      values: [
        { kind: "arrow", dir: "up", count: 2 },
        { kind: "arrow", dir: "down", count: 1 },
        { kind: "arrow", dir: "down", count: 2 },
      ],
    },
    {
      label: "Mortality rate",
      values: [
        { kind: "arrow", dir: "up", count: 1 },
        { kind: "arrow", dir: "down", count: 1 },
        { kind: "arrow", dir: "down", count: 1 },
      ],
    },
    {
      label: "Life expectancy",
      values: [
        { kind: "text", text: "Short", cls: "fill-foreground" },
        { kind: "text", text: "Long", cls: "fill-foreground" },
        { kind: "text", text: "Long", cls: "fill-foreground" },
      ],
    },
    {
      label: "Population",
      values: [
        { kind: "text", text: "Growing", cls: "fill-warning" },
        { kind: "text", text: "Stable", cls: "fill-brand" },
        { kind: "text", text: "Declining", cls: "fill-success" },
      ],
    },
  ];

  const stageCenters = [215, 551, 887]; // aligned to the pyramid panels above

  const ArrowGlyph = ({ x, y, dir }: { x: number; y: number; dir: "up" | "down" }) => (
    <g>
      <line
        x1={x}
        y1={dir === "up" ? y + 11 : y - 11}
        x2={x}
        y2={dir === "up" ? y - 4 : y + 4}
        className={dir === "up" ? "stroke-warning" : "stroke-success"}
        strokeWidth="1.8"
      />
      <path
        d={
          dir === "up"
            ? `M ${x - 3.2} ${y - 1} L ${x} ${y - 7} L ${x + 3.2} ${y - 1} Z`
            : `M ${x - 3.2} ${y + 1} L ${x} ${y + 7} L ${x + 3.2} ${y + 1} Z`
        }
        className={dir === "up" ? "fill-warning" : "fill-success"}
      />
    </g>
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Mortality attack rates and demographic transition — the two vital-statistic formula cards (mortality rate: deaths/1000 people per year, with the printed worked example 80 deaths in a town of 10,000 over 2 years dissected to 4 per 1000 per year; attack rate: people who become ill over total people exposed, 60 ill of 80 exposed = 75%) with the denominator decoder, then the demographic transition redrawn as three population pyramids (growing = wide-based triangle, stable = rectangle, declining = narrow base with bulging middle, Male and Female bars by Age with a Population % axis) and the four printed transition rows (birth rate, mortality rate, life expectancy, population) — an original KYP diagram of book 259 upper." className="min-w-[1060px]">
      <title>Mortality, attack rates, and demographic transition</title>
      <desc>
        Two vital-statistic formula cards with their printed worked examples and the arithmetic dissected (mortality rate = deaths per 1000 people per year, annualized; attack rate = ill divided by exposed, a proportion), the denominator-family decoder, and the demographic transition: the printed definition sentence, three population pyramids redrawn (growing, stable, declining), and the four transition rows with their printed arrows.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Mortality, attack rates, and demographic transition — the page&apos;s two vital statistics and three pyramids</text>
        <rect x="872" y="25" width="230" height="18" rx="6" className="fill-brand-soft" />
        <text x="987" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">2 rates · 3 pyramids · 4 rows</text>
      </g>

      {/* ===== ZONE A — THE TWO VITAL STATISTICS ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="354" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE TWO VITAL STATISTICS — the final two rows of the “Quantifying risk (continued)” table</text>
        <text x="52" y="103" fontSize="3.7" fontWeight="700" className="fill-muted-foreground">printed columns TERm / DEFINITION / EXAmPLE / FORmULA (the small-caps “m” artifact, carried as-is) — two rates, two denominators, two clocks</text>

        {/* card 1 — mortality rate */}
        <g>
          <rect x="52" y="114" width="500" height="240" rx="10" className="fill-card stroke-warning" />
          <text x="66" y="136" fontSize="6" fontWeight="800" className="fill-warning">Mortality rate</text>
          <rect x="400" y="124" width="138" height="15" rx="4" className="fill-warning-soft/50 stroke-warning" />
          <text x="469" y="134.5" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-warning">ROW 1 · VERBATIM</text>
          <text x="66" y="152" fontSize="3.2" fontWeight="700" className="fill-foreground">Number of deaths (in general or</text>
          <text x="66" y="162" fontSize="3.2" fontWeight="700" className="fill-foreground">due to specific cause) within a</text>
          <text x="66" y="172" fontSize="3.2" fontWeight="700" className="fill-foreground">population over a defined period.</text>
          <rect x="66" y="182" width="196" height="16" rx="4" className="fill-warning-soft/50 stroke-warning" />
          <text x="164" y="193" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">Deaths/1000 people per year.</text>
          <text x="66" y="212" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">EXAMPLE (verbatim): If 80 people in a town</text>
          <text x="66" y="222" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">of 10,000 die over 2 years, mortality rate is</text>
          <text x="66" y="232" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">4 per 1000 per year.</text>
          <text x="66" y="250" fontSize="3" fontWeight="800" className="fill-foreground">WHERE THE “4” COMES FROM (KYP dissection):</text>
          {([
            ["80 deaths ÷ 10,000 people", "(scale to the population)"],
            ["× 1000 → 8 per 1000", "across the 2-year window"],
            ["÷ 2 years → 4 per 1000", "per year — annualized"],
          ] as [string, string][]).map(([line1, line2], col) => (
            <g key={`mort-step-${col}`}>
              <rect x={66 + col * 162} y="258" width="138" height="34" rx="6" className="fill-secondary stroke-border" />
              <text x={135 + col * 162} y="271" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-foreground">{line1}</text>
              <text x={135 + col * 162} y="282" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">{line2}</text>
            </g>
          ))}
          <line x1="206" y1="275" x2="220" y2="275" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 217 271.5 L 224 275 L 217 278.5 Z" className="fill-foreground" />
          <line x1="368" y1="275" x2="382" y2="275" className="stroke-foreground" strokeWidth="1.2" />
          <path d="M 379 271.5 L 386 275 L 379 278.5 Z" className="fill-foreground" />
          <rect x="66" y="300" width="462" height="14" rx="4" className="fill-secondary stroke-border" />
          <text x="74" y="310" fontSize="2.9" fontWeight="800" className="fill-foreground">DENOMINATOR: the whole population · CLOCK: per year — annualize the observation window</text>
          <text x="66" y="330" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">all-cause OR cause-specific — the definition&apos;s own parenthetical; contrast the case fatality</text>
          <text x="66" y="340" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">rate, which divides by the CASES (book 258 — KYP context, the facing page&apos;s row)</text>
        </g>

        {/* card 2 — attack rate */}
        <g>
          <rect x="562" y="114" width="490" height="240" rx="10" className="fill-card stroke-success" />
          <text x="576" y="136" fontSize="6" fontWeight="800" className="fill-success">Attack rate</text>
          <rect x="916" y="124" width="122" height="15" rx="4" className="fill-success-soft/50 stroke-success" />
          <text x="977" y="134.5" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-success">ROW 2 · VERBATIM</text>
          <text x="576" y="156" fontSize="3.2" fontWeight="700" className="fill-foreground">Proportion of exposed people who become ill.</text>
          <rect x="576" y="168" width="196" height="46" rx="6" className="fill-success-soft/50 stroke-success" />
          <text x="674" y="183" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">People who become ill</text>
          <line x1="596" y1="190" x2="752" y2="190" className="stroke-foreground" strokeWidth="1.2" />
          <text x="674" y="205" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">Total people exposed</text>
          <text x="788" y="182" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">EXAMPLE (verbatim): If 80 people in a</text>
          <text x="788" y="192" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">town are exposed and 60 people become</text>
          <text x="788" y="202" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">ill, attack rate is 75%.</text>
          <text x="576" y="234" fontSize="3" fontWeight="800" className="fill-foreground">ONE STEP, ONE DENOMINATOR (KYP dissection):</text>
          <g>
            <rect x="576" y="242" width="220" height="34" rx="6" className="fill-secondary stroke-border" />
            <text x="686" y="255" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-foreground">60 people become ill ÷ 80 people exposed</text>
            <text x="686" y="266" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-success">= 3/4 = 75%</text>
          </g>
          <g>
            <rect x="812" y="242" width="226" height="34" rx="6" className="fill-secondary stroke-border" />
            <text x="925" y="255" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-foreground">the town&apos;s 10,000 NEVER enters</text>
            <text x="925" y="266" textAnchor="middle" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the fraction — that is the trap</text>
          </g>
          <rect x="576" y="284" width="462" height="14" rx="4" className="fill-secondary stroke-border" />
          <text x="584" y="294" fontSize="2.9" fontWeight="800" className="fill-foreground">DENOMINATOR: everyone exposed, ill or not · CLOCK: none — a proportion (0–100%)</text>
          <text x="576" y="314" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">no time unit anywhere in the formula — a time window in the stem is noise, never a divisor;</text>
          <text x="576" y="324" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the outbreak investigator&apos;s first number — attack rate per exposure (KYP context)</text>
          <text x="576" y="344" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">a proportion despite the name “rate”: an incidence risk among the exposed (KYP context)</text>
        </g>

        {/* denominator-family decoder strip */}
        <g>
          <text x="52" y="392" fontSize="3.6" fontWeight="800" className="fill-foreground">THE DENOMINATOR FAMILY (facing pages):</text>
          <rect x="260" y="378" width="240" height="18" rx="6" className="fill-card stroke-warning" />
          <text x="380" y="390" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-warning">÷ POPULATION → mortality rate</text>
          <rect x="520" y="378" width="240" height="18" rx="6" className="fill-card stroke-success" />
          <text x="640" y="390" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-success">÷ EXPOSED → attack rate</text>
          <rect x="780" y="378" width="240" height="18" rx="6" className="fill-card stroke-brand" />
          <text x="900" y="390" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-brand">÷ CASES → case fatality rate</text>
          <text x="52" y="412" fontSize="3" fontWeight="700" className="fill-muted-foreground">Same numerator idea, three denominators — the denominator chooses the statistic, and only the mortality rate carries a per-year clock (the case fatality rate prints on book 258 — KYP context).</text>
        </g>
      </g>

      {/* ===== ZONE B — DEMOGRAPHIC TRANSITION: THE THREE PYRAMIDS ===== */}
      <g>
        <rect x="36" y="438" width="1030" height="482" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="460" fontSize="5.4" fontWeight="800" className="fill-foreground">DEMOGRAPHIC TRANSITION — as development proceeds, the pyramid reshapes</text>
        <text x="52" y="471" fontSize="3.7" fontWeight="700" className="fill-muted-foreground">the printed sentence, the three pyramids redrawn as original KYP vector art (Male left / Female right, bars by Age), and the four transition rows below</text>
        <rect x="52" y="480" width="998" height="24" rx="6" className="fill-card stroke-border" />
        <text x="551" y="495.5" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">“As a country proceeds to higher levels of development, birth and mortality rates decline to varying degrees, changing the age composition of the population.”</text>

        {PYRAMIDS.map((p) => {
          const cx = p.px + 178;
          return (
            <g key={p.key}>
              <rect x={p.px} y="508" width="326" height="352" rx="10" className="fill-card stroke-border" />
              <rect x={p.px + 14} y="518" width="150" height="16" rx="5" className={p.chipClass} />
              <text x={p.px + 89} y="529" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-card">{p.chip}</text>
              <text x={p.px + 14} y="548" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">{p.shapeLine}</text>

              {/* age axis (horizontal label, no rotated text) */}
              <line x1={p.px + 40} y1="552" x2={p.px + 40} y2="774" className="stroke-border" strokeWidth="1.4" />
              <path d={`M ${p.px + 36.6} 556 L ${p.px + 40} 549 L ${p.px + 43.4} 556 Z`} className="fill-muted-foreground" />
              <text x={p.px + 14} y="666" fontSize="3.2" fontWeight="800" className="fill-muted-foreground">Age</text>

              {/* center axis + bars */}
              <line x1={cx} y1="552" x2={cx} y2="774" className="stroke-border" strokeWidth="1" />
              {p.halves.map((half, i) => {
                const by = 558 + i * 27;
                return (
                  <g key={`${p.key}-band-${i}`}>
                    <rect x={cx - half} y={by} width={Math.max(half - 1.2, 2)} height="24" className="fill-brand" />
                    <rect x={cx + 1.2} y={by} width={Math.max(half - 1.2, 2)} height="24" className="fill-emergency/60" />
                  </g>
                );
              })}

              {/* male / female legend */}
              <rect x={cx - 54} y="782" width="9" height="9" rx="2" className="fill-brand" />
              <text x={cx - 41} y="790" fontSize="3.4" fontWeight="800" className="fill-brand">Male</text>
              <rect x={cx + 22} y="782" width="9" height="9" rx="2" className="fill-emergency/60" />
              <text x={cx + 35} y="790" fontSize="3.4" fontWeight="800" className="fill-emergency">Female</text>

              {/* population % axis */}
              <line x1={cx - 96} y1="806" x2={cx + 96} y2="806" className="stroke-foreground" strokeWidth="1" />
              <path d={`M ${cx - 95} 803 L ${cx - 101} 806 L ${cx - 95} 809 Z`} className="fill-foreground" />
              <path d={`M ${cx + 95} 803 L ${cx + 101} 806 L ${cx + 95} 809 Z`} className="fill-foreground" />
              <text x={cx} y="820" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-muted-foreground">Population %</text>

              <text x={p.px + 14} y="838" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">{p.descA}</text>
              <text x={p.px + 14} y="848" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">{p.descB}</text>
            </g>
          );
        })}
      </g>

      {/* ===== ZONE C — THE FOUR TRANSITION ROWS ===== */}
      <g>
        <rect x="36" y="934" width="1030" height="196" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="956" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FOUR TRANSITION ROWS — the printed table beneath the pyramids</text>
        <text x="52" y="967" fontSize="3.7" fontWeight="700" className="fill-muted-foreground">stage columns aligned to the pyramids above — the stage identities print in the Population row and the pyramid shapes (VLM-pinned), not as column headers</text>

        <text x="60" y="991" fontSize="3.4" fontWeight="800" className="fill-muted-foreground">ROW (printed)</text>
        {[
          ["GROWING", "fill-warning"],
          ["STABLE", "fill-brand"],
          ["DECLINING", "fill-success"],
        ].map(([label, cls], i) => (
          <g key={`stage-${i}`}>
            <rect x={stageCenters[i] - 85} y="978" width="170" height="16" rx="5" className={cls} />
            <text x={stageCenters[i]} y="989" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-card">{label}</text>
          </g>
        ))}

        {ROWS.map((row, r) => {
          const ry = 998 + r * 26;
          return (
            <g key={`row-${r}`}>
              <rect x="52" y={ry} width="1006" height="26" rx="4" className={r % 2 === 0 ? "fill-card" : "fill-card/50"} />
              <text x="60" y={ry + 17} fontSize="3.6" fontWeight="800" className="fill-foreground">{row.label}</text>
              {row.values.map((v, c) => {
                if (v.kind === "arrow") {
                  return v.count === 2 ? (
                    <g key={`cell-${r}-${c}`}>
                      <ArrowGlyph x={stageCenters[c] - 7} y={ry + 13} dir={v.dir} />
                      <ArrowGlyph x={stageCenters[c] + 7} y={ry + 13} dir={v.dir} />
                    </g>
                  ) : (
                    <ArrowGlyph key={`cell-${r}-${c}`} x={stageCenters[c]} y={ry + 13} dir={v.dir} />
                  );
                }
                return (
                  <text
                    key={`cell-${r}-${c}`}
                    x={stageCenters[c]}
                    y={ry + 17}
                    textAnchor="middle"
                    fontSize="3.8"
                    fontWeight="800"
                    className={v.cls}
                  >
                    {v.text}
                  </text>
                );
              })}
            </g>
          );
        })}
        <text x="52" y="1116" fontSize="3" fontWeight="700" className="fill-muted-foreground">Arrows as printed — the birth rate is the only row with double arrows (↑↑ then ↓↓); the mortality rate never carries more than one; life expectancy is Long in both the stable and declining stages.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1142" width="1054" height="78" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1160" fontSize="4.2" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 281 upper / book 259 (Public Health Sciences — Epidemiology and Biostatistics: Quantifying risk (continued); Demographic transition)</text>
        <text x="42" y="1172" fontSize="3.7" className="fill-muted-foreground">A pinned page-split: this topic owns the upper portion through the Demographic transition block and ends immediately before the “Likelihood ratio” heading (LR → likelihood-ratios; Kaplan-Meier → survival-analysis).</text>
        <text x="42" y="1182" fontSize="3.7" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the three pyramids are pure vector art, redrawn here as ORIGINAL_KYP_REDRAW; the two tables are an ORIGINAL KYP ADAPTATION with every printed word preserved.</text>
        <text x="42" y="1192" fontSize="3.7" className="fill-muted-foreground">VLM census (glm-4.6v, 120dpi, staging-pubh5/vlm-census.txt): shapes pinned — wide-based / rectangular / narrow-based with bulging middle, left→right Growing → Stable → Declining; the figure&apos;s axis labels</text>
        <text x="42" y="1202" fontSize="3.7" className="fill-muted-foreground">extract interleaved in the text layer (Male, Age ×3, Population % … — documented in the note header + manifest); this redraw gives each pyramid the full Male / Female / Age / Population % axis set.</text>
        <text x="42" y="1212" fontSize="3.7" className="fill-muted-foreground">The arithmetic dissections, the denominator-family decoder, and the stage-band arrangement are KYP originals; the page prints no mnemonics of its own (VLM-confirmed).</text>
      </g>
    </svg>
  );
};
