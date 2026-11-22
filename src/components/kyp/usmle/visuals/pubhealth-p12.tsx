/* Public Health — PUBH batch 3 / task pubh12: Confounding vs effect
 * modification (FULL pdf page 286 / book 264 — a WHOLE-PAGE topic in the
 * EPIDEMIOLOGY AND BIOSTATISTICS subsection; the page after "Bias and study
 * errors" (pdf 285 / book 263), the page before "Statistical distribution"
 * (pdf 287 / book 265)). The page carries TWO blocks, both owned:
 * (1) the "Confounding vs effect modification" table — columns TYPE /
 * DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS, TWO rows in printed
 * order (Confounding; Effect modification); (2) the TWO CRUDE-VS-STRATIFIED
 * DIAGRAM GROUPS (pure vector art) plus their SHARED ARROW LEGEND — group 1
 * "Confounding" (Crude analysis: Drinking coffee -> Lung cancer; Stratified
 * analysis: Smokers / Nonsmokers rows, each Drinking coffee -> Lung cancer;
 * "Note: Association disappeared after stratification.") and group 2
 * "Effect modification" (Crude: OCP use -> DVT; Stratified: Smokers /
 * Nonsmokers rows, each OCP use -> DVT; "Note: Association was strong in one
 * subgroup with weak/no association in the other subgroup."), with the
 * legend "Strong association" / "Significant association" / "Weak/no
 * association". Census (pdfimages): ZERO raster images. VLM AVAILABLE
 * (glm-4.6v: full-page 120dpi + 300dpi zoom + a targeted 300dpi
 * confirmation, plus an objective PIXEL census of the 300dpi bitmap —
 * staging-pubh12/vlm-census.txt), pinning: gray rounded title boxes,
 * tan/orange exposure boxes, light-blue outcome boxes, light-gray stratum
 * boxes, bold horizontal "Crude analysis" / "Stratified analysis" labels at
 * the LEFT above their row blocks, dark-gray right-pointing arrows; the
 * three association labels print ONCE as a STANDALONE LEGEND below group
 * 2's note (no leader lines to any arrow), decoding the arrow grammar used
 * in BOTH groups — thick solid = Strong, thin solid = Significant, dashed =
 * Weak/no. ADJUDICATION (all reads agree; brief corrected to print): the
 * task brief described the strong/weak labels as in-diagram subgroup
 * annotations — the print shows the shared legend; BOTH groups print the
 * same three-style grammar (crude thin solid, Smokers thick solid,
 * Nonsmokers dashed), drawn here exactly as printed; and the confounding
 * group's own note ("Association disappeared after stratification.")
 * governs its lane's verdict strip. The ﬁ ligature prints in the diagram
 * groups' text only ("Stratiﬁed analysis", "Effect modiﬁcation",
 * "Signiﬁcant association", "stratiﬁcation" in note 1) — carried verbatim.
 * Nothing is reproduced from the book; the two stacked groups are
 * re-arranged as TWO PARALLEL VERTICAL LANES, each ending in its verdict
 * strip (the layout is KYP's, every printed label is preserved); the table
 * is an ORIGINAL KYP ADAPTATION (the two-row digest band); the full table
 * is also carried verbatim in the note's table block. Purely presentational
 * (no props, no hooks, no external images). */

export const ConfoundingMap = () => {
  const w = 1102;
  const h = 1194;

  /* The three printed arrow styles, decoded by the book's shared legend:
   * thick solid = Strong association · thin solid = Significant association ·
   * thin dashed = Weak/no association. */
  const arrow = (
    x1: number,
    y: number,
    x2: number,
    style: "strong" | "significant" | "weak",
    key: string
  ) => {
    const sw = style === "strong" ? 4.2 : 1.6;
    const hs = style === "strong" ? 11 : 8;
    return (
      <g key={key}>
        <line
          x1={x1}
          y1={y}
          x2={x2 - hs + 1}
          y2={y}
          className="stroke-foreground"
          strokeWidth={sw}
          strokeDasharray={style === "weak" ? "8 6" : undefined}
        />
        <path
          d={`M ${x2 - hs} ${y - hs / 2} L ${x2} ${y} L ${x2 - hs} ${y + hs / 2} Z`}
          className="fill-foreground"
        />
      </g>
    );
  };

  /* The printed box kinds: exposure = tan/orange, outcome = light blue,
   * stratum = light gray. */
  const box = (
    x: number,
    y: number,
    bw: number,
    label: string,
    kind: "exposure" | "outcome" | "stratum",
    key: string
  ) => {
    const cls =
      kind === "exposure"
        ? "fill-warning-soft/60 stroke-warning"
        : kind === "outcome"
          ? "fill-brand-soft/60 stroke-brand"
          : "fill-secondary/60 stroke-border";
    return (
      <g key={key}>
        <rect x={x} y={y} width={bw} height="26" rx="6" className={cls} />
        <text
          x={x + bw / 2}
          y={y + 16.5}
          textAnchor="middle"
          fontSize="3.1"
          fontWeight="800"
          className="fill-foreground"
        >
          {label}
        </text>
      </g>
    );
  };

  /* One diagram row: optional stratum box + exposure box + styled arrow +
   * outcome box + the muted style tag (the tag is KYP's decode of the
   * printed legend, not a printed label). */
  const row = (
    lx: number,
    yBox: number,
    stratum: string | null,
    exposure: string,
    outcome: string,
    style: "strong" | "significant" | "weak",
    tag: string,
    key: string
  ) => {
    const yMid = yBox + 13;
    const xs = lx + (stratum ? 106 : 14);
    const xa1 = xs + 122;
    const xa2 = xa1 + 112;
    return (
      <g key={key}>
        {stratum !== null && box(lx + 14, yBox, 88, stratum, "stratum", `${key}-str`)}
        {box(xs, yBox, 116, exposure, "exposure", `${key}-exp`)}
        {arrow(xa1, yMid, xa2, style, `${key}-ar`)}
        {box(xa2 + 4, yBox, 96, outcome, "outcome", `${key}-out`)}
        <text
          x={(xa1 + xa2) / 2}
          y={yBox + 34}
          textAnchor="middle"
          fontSize="2.7"
          fontWeight="700"
          className="fill-muted-foreground"
        >
          {tag}
        </text>
      </g>
    );
  };

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      role="img"
      aria-label="Confounding vs effect modification — what stratification reveals: two parallel lanes drawn from book 264's two diagram groups. Lane 1, Confounding: a Crude analysis row (Drinking coffee to Lung cancer, thin solid arrow, the Significant association style), a Stratified analysis block (Smokers — Drinking coffee to Lung cancer with the thick solid Strong association style; Nonsmokers — Drinking coffee to Lung cancer with the dashed Weak/no association style), and the verdict strip — No association after stratification, Note: Association disappeared after stratification, with the three printed reduction strategies (Crossover studies where the subject serves as self-control; Matching of patients with similar characteristics in both treatment and control groups; Analytic techniques, eg regression analysis when confounding variables are known and were measured). Lane 2, Effect modification: Crude analysis (OCP use to DVT, thin solid arrow), Stratified analysis (Smokers — OCP use to DVT, strong association; Nonsmokers — OCP use to DVT, weak/no association), and the verdict strip — True association exists, Note: Association was strong in one subgroup with weak/no association in the other subgroup, with the printed handling (Stratified analysis, after testing for interaction between OCP and smoking, analyze risk among smokers and nonsmokers). Between the lanes sits the book's shared arrow legend exactly as it prints once below the second group (thick solid = Strong association, thin solid = Significant association, dashed = Weak/no association), then the two-row table digest: the confounding definition (factor related to both exposure and outcome, not on a causal pathway, distorts the effect on the outcome) with the coffee and lung cancer example where smoking is the true cause, and the effect-modification definition (exposure leads to different outcomes in subgroups stratified by factor) with the OCP and DVT example — an original KYP diagram of book 264."
      className="min-w-[1060px]"
    >
      <title>Confounding vs effect modification — the two stratification lanes and the arrow legend</title>
      <desc>
        Two parallel lanes redrawn from the book's two crude-vs-stratified diagram groups — Confounding (coffee to lung cancer; the association disappears on stratification by smoking; remove it via crossover, matching, analytic techniques) and Effect modification (OCP use to DVT; the association splits — strong among smokers, weak or none among nonsmokers; report it with stratified analysis after testing for interaction) — each lane ending in its printed verdict strip, with the book's shared arrow legend (thick solid = Strong association, thin solid = Significant association, dashed = Weak/no association) and the two-row table digest below.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">
          Confounding vs effect modification — what stratification reveals
        </text>
        <rect x="802" y="25" width="260" height="18" rx="6" className="fill-brand-soft" />
        <text x="932" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">
          2 rows · 2 lanes · 3 arrow keys
        </text>
      </g>

      {/* ===== ZONE A — THE TWO STRATIFICATION LANES ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="522" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">
          THE TWO STRATIFICATION LANES — the book&apos;s two diagram groups re-drawn side by side (ORIGINAL KYP REDRAW; every printed label preserved)
        </text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">
          same three-row grammar in both groups: Crude analysis, then Stratified analysis (Smokers / Nonsmokers) — only the VERDICT differs; arrow styles decoded by the legend below
        </text>

        {/* LANE 1 — CONFOUNDING */}
        <g>
          <rect x="52" y="112" width="487" height="468" rx="10" className="fill-card stroke-border" />
          <rect x="52" y="112" width="487" height="34" rx="10" className="fill-warning-soft/50 stroke-warning" />
          <text x="66" y="134" fontSize="4.8" fontWeight="800" className="fill-warning">Confounding</text>
          <text x="66" y="163" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">
            the association is SPURIOUS — a third variable manufactured it; stratification collapses it
          </text>

          <text x="66" y="188" fontSize="3.6" fontWeight="800" className="fill-foreground">Crude analysis</text>
          {row(52, 196, null, "Drinking coffee", "Lung cancer", "significant", "Signiﬁcant association style", "c-crude")}

          <text x="66" y="262" fontSize="3.6" fontWeight="800" className="fill-foreground">Stratiﬁed analysis</text>
          {row(52, 270, "Smokers", "Drinking coffee", "Lung cancer", "strong", "Strong association style", "c-smk")}
          {row(52, 326, "Nonsmokers", "Drinking coffee", "Lung cancer", "weak", "Weak/no association style", "c-nsm")}

          {/* verdict strip */}
          <g>
            <rect x="66" y="382" width="459" height="182" rx="8" className="fill-warning-soft/40 stroke-warning" />
            <text x="80" y="404" fontSize="3.6" fontWeight="800" className="fill-warning">VERDICT — “No association after stratification”</text>
            <text x="80" y="422" fontSize="3.2" fontWeight="800" className="fill-foreground">Note: Association disappeared after stratiﬁcation.</text>
            <text x="80" y="442" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">
              the crude coffee–cancer link was the mixing: coffee drinkers tend to smoke more, and smoking is the
            </text>
            <text x="80" y="453" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">
              true cause — inside smokers and inside nonsmokers, coffee adds nothing
            </text>
            <text x="80" y="476" fontSize="3" fontWeight="800" className="fill-foreground">STRATEGIES TO REDUCE BIAS (printed):</text>
            <rect x="80" y="484" width="431" height="16" rx="5" className="fill-card stroke-border" />
            <text x="88" y="495" fontSize="2.7" fontWeight="700" className="fill-foreground/85">Crossover studies — the subject serves as self-control</text>
            <rect x="80" y="504" width="431" height="16" rx="5" className="fill-card stroke-border" />
            <text x="88" y="515" fontSize="2.7" fontWeight="700" className="fill-foreground/85">Matching — patients with similar characteristics in both treatment and control groups</text>
            <rect x="80" y="524" width="431" height="16" rx="5" className="fill-card stroke-border" />
            <text x="88" y="535" fontSize="2.7" fontWeight="700" className="fill-foreground/85">Analytic techniques — eg, regression analysis when confounding variables are known and were measured</text>
            <text x="80" y="556" fontSize="2.7" fontWeight="700" className="fill-warning">confounder test: related to BOTH exposure and outcome, and NOT on a causal pathway</text>
          </g>
        </g>

        {/* LANE 2 — EFFECT MODIFICATION */}
        <g>
          <rect x="553" y="112" width="487" height="468" rx="10" className="fill-card stroke-border" />
          <rect x="553" y="112" width="487" height="34" rx="10" className="fill-success-soft/50 stroke-success" />
          <text x="567" y="134" fontSize="4.8" fontWeight="800" className="fill-success">Effect modiﬁcation</text>
          <text x="567" y="163" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">
            the association is TRUE — the effect itself varies by subgroup; stratification splits it
          </text>

          <text x="567" y="188" fontSize="3.6" fontWeight="800" className="fill-foreground">Crude analysis</text>
          {row(553, 196, null, "OCP use", "DVT", "significant", "Signiﬁcant association style", "e-crude")}

          <text x="567" y="262" fontSize="3.6" fontWeight="800" className="fill-foreground">Stratiﬁed analysis</text>
          {row(553, 270, "Smokers", "OCP use", "DVT", "strong", "Strong association style", "e-smk")}
          {row(553, 326, "Nonsmokers", "OCP use", "DVT", "weak", "Weak/no association style", "e-nsm")}

          {/* verdict strip */}
          <g>
            <rect x="567" y="382" width="459" height="182" rx="8" className="fill-success-soft/40 stroke-success" />
            <text x="581" y="404" fontSize="3.6" fontWeight="800" className="fill-success">VERDICT — “True association exists”</text>
            <text x="581" y="422" fontSize="3.2" fontWeight="800" className="fill-foreground">Note: Association was strong in one subgroup with weak/no</text>
            <text x="581" y="433" fontSize="3.2" fontWeight="800" className="fill-foreground">association in the other subgroup.</text>
            <text x="581" y="453" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">
              a very strong association between OCP use and DVT among smokers, but no such association
            </text>
            <text x="581" y="464" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">
              in people who do not smoke — the finding, not a flaw
            </text>
            <text x="581" y="487" fontSize="3" fontWeight="800" className="fill-foreground">HANDLING (printed):</text>
            <rect x="581" y="495" width="431" height="16" rx="5" className="fill-card stroke-border" />
            <text x="589" y="506" fontSize="2.7" fontWeight="700" className="fill-foreground/85">Stratified analysis — after testing for interaction between OCP and smoking,</text>
            <rect x="581" y="515" width="431" height="16" rx="5" className="fill-card stroke-border" />
            <text x="589" y="526" fontSize="2.7" fontWeight="700" className="fill-foreground/85">analyze risk among smokers and nonsmokers — report the stratum-specific risks</text>
            <text x="581" y="556" fontSize="2.7" fontWeight="700" className="fill-success">modifier tell: the exposure leads to DIFFERENT outcomes in subgroups stratified by factor</text>
          </g>
        </g>
      </g>

      {/* ===== ZONE B — THE ARROW LEGEND (the print's shared key) ===== */}
      <g>
        <rect x="36" y="604" width="1030" height="146" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="626" fontSize="5.4" fontWeight="800" className="fill-foreground">THE ARROW LEGEND — printed ONCE, below the Effect modiﬁcation group&apos;s note, decoding the arrow styles used in BOTH groups</text>
        <text x="52" y="637" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the book prints three sample arrows with these labels (no leader lines to any diagram arrow) — drawn here exactly as printed</text>

        <g>
          {arrow(70, 668, 150, "strong", "lg-1")}
          <text x="162" y="664" fontSize="3.4" fontWeight="800" className="fill-foreground">Strong association</text>
          <text x="162" y="677" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">thick solid — the Smokers-row style in both groups</text>
        </g>
        <g>
          {arrow(412, 668, 492, "significant", "lg-2")}
          <text x="504" y="664" fontSize="3.4" fontWeight="800" className="fill-foreground">Signiﬁcant association</text>
          <text x="504" y="677" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">thin solid — the Crude-analysis style in both groups</text>
        </g>
        <g>
          {arrow(754, 668, 834, "weak", "lg-3")}
          <text x="846" y="664" fontSize="3.4" fontWeight="800" className="fill-foreground">Weak/no association</text>
          <text x="846" y="677" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">thin dashed — the Nonsmokers-row style in both groups</text>
        </g>

        <line x1="52" y1="694" x2="1050" y2="694" className="stroke-border" strokeWidth="1" />
        <text x="52" y="710" fontSize="3.6" fontWeight="800" className="fill-foreground">THE KYP RULE — COLLAPSE = CONFOUND (the association disappears in every stratum → remove it: crossover · matching · regression) · SPLIT = MODIFY (real but different across strata → report it: test for interaction, then stratified analysis)</text>
        <text x="52" y="724" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">smoking plays BOTH roles on this page: CONFOUNDER in the coffee–lung-cancer story, EFFECT MODIFIER in the OCP–DVT story — the role belongs to the relationship, not the variable</text>
        <text x="52" y="738" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">adjudication, drawn as printed: the confounding group&apos;s stratified rows print the strong/dashed arrow grammar while its own note says the association disappeared — the printed NOTE governs the verdict</text>
      </g>

      {/* ===== ZONE C — THE TWO-ROW TABLE DIGEST ===== */}
      <g>
        <rect x="36" y="764" width="1030" height="330" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="786" fontSize="5.4" fontWeight="800" className="fill-foreground">THE PRINTED TABLE — the two rows as cards (ORIGINAL KYP ADAPTATION; the full table is carried verbatim in the note&apos;s table block)</text>
        <text x="52" y="797" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">columns TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS — the header prints in small caps and extracts as “EXAmPLES” (text-layer artifact, carried as extracted)</text>

        {/* CARD 1 — Confounding */}
        <g>
          <rect x="52" y="808" width="1002" height="130" rx="10" className="fill-card stroke-border" />
          <circle cx="72" cy="826" r="9" className="fill-warning-soft stroke-warning" />
          <text x="72" y="828.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-warning">1</text>
          <text x="88" y="830" fontSize="4.4" fontWeight="800" className="fill-warning">Confounding</text>
          <text x="66" y="850" fontSize="2.9" fontWeight="700" className="fill-foreground/85">Factor related to both exposure and outcome (not on a causal pathway) distorts the effect on the outcome.</text>
          <rect x="66" y="858" width="228" height="15" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="74" y="868.5" fontSize="2.8" fontWeight="800" className="fill-warning">No association after stratification</text>
          <text x="66" y="892" fontSize="2.9" fontWeight="700" className="fill-foreground/85">Coffee appears to be linked to lung cancer, but smoking is the true cause, as coffee drinkers tend to smoke more.</text>
          <text x="66" y="914" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">Strategies: Crossover studies (subject serves as self-control) · Matching (patients with similar characteristics in both</text>
          <text x="66" y="925" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">treatment and control groups) · Analytic techniques (eg, regression analysis when confounding variables are known and were measured)</text>
        </g>

        {/* CARD 2 — Effect modification */}
        <g>
          <rect x="52" y="948" width="1002" height="132" rx="10" className="fill-card stroke-border" />
          <circle cx="72" cy="966" r="9" className="fill-success-soft stroke-success" />
          <text x="72" y="968.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-success">2</text>
          <text x="88" y="970" fontSize="4.4" fontWeight="800" className="fill-success">Effect modification</text>
          <text x="66" y="990" fontSize="2.9" fontWeight="700" className="fill-foreground/85">Exposure leads to different outcomes in subgroups stratified by factor.</text>
          <rect x="66" y="998" width="156" height="15" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="74" y="1008.5" fontSize="2.8" fontWeight="800" className="fill-success">True association exists</text>
          <text x="66" y="1030" fontSize="2.9" fontWeight="700" className="fill-foreground/85">A study among women using OCPs showed significant risk of DVT, but when these data were stratified by smoking habits, there was</text>
          <text x="66" y="1041" fontSize="2.9" fontWeight="700" className="fill-foreground/85">a very strong association between OCP use and DVT among smokers, but there was no such association in people who do not smoke.</text>
          <text x="66" y="1064" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">Strategies: Stratified analysis (eg, after testing for interaction between OCP and smoking, analyze risk among smokers and nonsmokers)</text>
        </g>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1106" width="1054" height="74" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1124" fontSize="3.8" fontWeight="800" className="fill-foreground">
          Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 286 / book 264 (Public Health Sciences — Epidemiology and Biostatistics: Confounding vs effect modification)
        </text>
        <text x="42" y="1136" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the color-coded table (blue bold row labels, bold verdict sub-lines, dotted hairlines, NO red text) + two pure-vector diagram groups</text>
        <text x="42" y="1146" fontSize="3.8" className="fill-muted-foreground">+ the shared arrow legend. VLM-read at 120dpi + 300dpi zoom + a targeted confirmation pass + an objective pixel census (staging-pubh12/vlm-census.txt):</text>
        <text x="42" y="1156" fontSize="3.8" className="fill-muted-foreground">the legend prints ONCE below the Effect modification group&apos;s note and decodes the arrow grammar used in BOTH groups — ORIGINAL KYP ADAPTATION + REDRAW, every printed label preserved</text>
        <text x="42" y="1166" fontSize="3.8" className="fill-muted-foreground">(both table rows, both diagram groups, both notes, all three legend entries); the ﬁ ligature prints in the diagram text only — carried verbatim; the full table is carried verbatim in the note.</text>
      </g>
    </svg>
  );
};
