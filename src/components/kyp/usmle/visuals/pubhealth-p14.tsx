/* Public Health — PUBH batch 3, topic 14: Hypothesis testing errors (FULL
 * pdf page 288 / book 266). The page carries THREE blocks, all owned:
 * (1) "Outcomes of statistical hypothesis testing" — the "Correct result"
 * definitions at the left + the STUDY-VS-REALITY 2×2 GRID (pure vector):
 * rows "Study rejects H0" / "Study does not reject H0", columns under a
 * spanning "Reality" header — H1 (LEFT) / H0 (RIGHT); cells: reject × H1 =
 * Power (1 – β) [BLUE], reject × H0 = α Type I error, not-reject × H1 =
 * β Type II error, not-reject × H0 = EMPTY [BLUE]; legend "Blue shading =
 * correct result." (2) "Testing errors" — Type I error (α) / Type II error
 * (β) rows (three-column print: label / main text / right column with the
 * "Also called" + cry-wolf lines). (3) "Statistical vs clinical
 * significance" — the 1 mg/dL blood-sugar example. Census (pdfimages): ZERO
 * raster images — the grid is an ORIGINAL_KYP_REDRAW (KYP geometry, every
 * printed label preserved, the two correct cells blue-shaded exactly as the
 * print shades them) and the two text blocks are ORIGINAL KYP ADAPTATIONS
 * (cards, lever chips, strip). VLM-read in TWO passes (staging-pubh14/
 * vlm-census.txt): the cry-wolf pair prints in roman with RED lead numerals
 * ("1st"/"2nd") and "power in numbers" in RED — First Aid's OWN lines,
 * carried VERBATIM and ATTRIBUTED (rendered in the KYP emergency red and
 * tagged "First Aid's own"). ADJUDICATION drawn exactly as pinned: the
 * columns are H1 (LEFT) / H0 (RIGHT) under the spanning "Reality" header,
 * and the BLUE cells are the Power cell (reject × H1) and the EMPTY
 * not-reject × H0 cell — pinned by pdftotext -bbox coordinates + a 200dpi
 * focused VLM re-pass (the first full-page pass mis-read the column
 * headers; bbox + focused pass + the print's own logic agree). Nothing is
 * reproduced from the book; purely presentational (no props, no hooks, no
 * external images). */

export const HypothesisErrorsMap = () => {
  const w = 1102;
  const h = 1290;

  /* The four grid cells — every label is the print's own; the geometry
   * (proportions, glosses, chips) is KYP's. */
  const GRID_X = 480;
  const COL_W = 190;
  const ROW_H = 114;
  const GRID_TOP = 172;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Hypothesis testing errors — the study-vs-reality 2×2 grid with rows Study rejects H0 and Study does not reject H0, columns Reality H1 and Reality H0, and the four cells Power (1 – β) and Type I error (α) in the reject row, β Type II error in the do-not-reject row, and the empty blue correct cell, with the legend Blue shading = correct result; below it the two printed error cards (Type I error also called false-positive error with First Aid's 1st time boy cries wolf line, Type II error also called false-negative error with First Aid's 2nd time boy cries wolf line and the see-saw line Generally when type I error increases type II error decreases); then the statistical power panel with the four printed levers (↑ sample size, ↑ expected effect size, ↑ precision of measurement, ↑ α level) and First Aid's There is power in numbers; and the statistical-vs-clinical-significance strip with the 1 mg/dL blood-sugar example — an original KYP diagram of book 266." className="min-w-[1060px]">
      <title>Hypothesis testing errors — the study-vs-reality grid, Type I vs Type II, and power</title>
      <desc>
        The study-vs-reality 2×2 grid as the centerpiece (blue-correct Power and empty cells, α and β error cells), the two printed error cards with First Aid&apos;s cry-wolf pair attributed, the four-lever power panel with &quot;There is power in numbers.&quot;, and the statistical-vs-clinical-significance strip with the 1 mg/dL blood-sugar example.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Hypothesis testing errors — the study-vs-reality grid, Type I vs Type II, and power</text>
        <rect x="866" y="25" width="196" height="18" rx="6" className="fill-brand-soft" />
        <text x="964" y="37.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">α · β · power = 1 – β</text>
      </g>

      {/* ===== ZONE A — THE STUDY-VS-REALITY 2×2 GRID ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="400" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE STUDY-VS-REALITY 2×2 GRID — the four outcomes of statistical hypothesis testing (as printed)</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ORIGINAL KYP REDRAW — every printed label preserved; the two blue-correct cells shaded exactly as the print shades them</text>

        {/* the "Correct result" block — printed at the LEFT of the grid */}
        <g>
          <rect x="52" y="118" width="400" height="286" rx="10" className="fill-card stroke-border" />
          <text x="66" y="140" fontSize="4.4" fontWeight="800" className="fill-brand">Correct result</text>
          <text x="66" y="160" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Stating that there is an effect or difference when</text>
          <text x="66" y="171" fontSize="2.9" fontWeight="700" className="fill-foreground/80">one exists (H0 rejected in favor of H1).</text>
          <text x="66" y="188" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Stating that there is no effect or difference when</text>
          <text x="66" y="199" fontSize="2.9" fontWeight="700" className="fill-foreground/80">none exists (H0 not rejected).</text>
          <rect x="66" y="214" width="372" height="24" rx="7" className="fill-brand-soft/50 stroke-brand" />
          <text x="78" y="230" fontSize="2.8" fontWeight="700" className="fill-brand">→ the POWER cell (Study rejects H0 × Reality H1) — blue</text>
          <rect x="66" y="246" width="372" height="24" rx="7" className="fill-brand-soft/50 stroke-brand" />
          <text x="78" y="262" fontSize="2.8" fontWeight="700" className="fill-brand">→ the silent cell (Study does not reject H0 × Reality H0) — blue</text>
          <text x="66" y="292" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the two printed sentences ARE the two blue cells — the print&apos;s own</text>
          <text x="66" y="303" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">layout puts the definitions beside the grid they grade (KYP reading)</text>
          <text x="66" y="334" fontSize="3" fontWeight="800" className="fill-foreground">READ ANY ERROR QUESTION OFF THE GRID —</text>
          <text x="66" y="346" fontSize="2.9" fontWeight="700" className="fill-foreground/80">the study&apos;s verdict picks the row; reality picks the column;</text>
          <text x="66" y="357" fontSize="2.9" fontWeight="700" className="fill-foreground/80">the cross names the outcome (KYP rule)</text>
          <text x="66" y="386" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">“You can never “prove” H1, but you can reject the H0 as being</text>
          <text x="66" y="397" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">very unlikely.” — printed in the Type I row</text>
        </g>

        {/* the grid — spanning "Reality" header over H1 (LEFT) / H0 (RIGHT) */}
        <text x="850" y="134" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">Reality</text>
        <rect x={GRID_X} y="138" width="180" height="34" className="fill-secondary stroke-border" />
        <rect x={GRID_X + 180} y="138" width={COL_W * 2} height="34" className="fill-secondary stroke-border" />
        <line x1={GRID_X + 180 + COL_W} y1="138" x2={GRID_X + 180 + COL_W} y2="400" className="stroke-border" strokeWidth="1" />
        <text x={GRID_X + 180 + COL_W / 2} y="153" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">H1</text>
        <text x={GRID_X + 180 + COL_W / 2} y="166" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">an effect or difference exists</text>
        <text x={GRID_X + 180 + COL_W + COL_W / 2} y="153" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">H0</text>
        <text x={GRID_X + 180 + COL_W + COL_W / 2} y="166" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">no effect or difference exists</text>

        {/* the row-header column cells + the grid's outer frame */}
        <rect x={GRID_X} y={GRID_TOP} width="180" height={ROW_H} className="fill-card stroke-border" />
        <rect x={GRID_X} y={GRID_TOP + ROW_H} width="180" height={ROW_H} className="fill-card stroke-border" />
        <rect x={GRID_X} y="138" width="560" height="262" fill="none" className="stroke-foreground" strokeWidth="1.5" />

        {/* row 1 header — Study rejects H0 */}
        <text x={GRID_X + 90} y="226" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">Study rejects H0</text>
        <text x={GRID_X + 90} y="240" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the study claims an effect</text>

        {/* row 2 header — Study does not reject H0 */}
        <text x={GRID_X + 90} y="338" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">Study does not</text>
        <text x={GRID_X + 90} y="350" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">reject H0</text>
        <text x={GRID_X + 90} y="364" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the study claims no effect</text>

        {/* CELL 1 — reject × H1 = Power (1 – β) [BLUE] */}
        <rect x={GRID_X + 180} y={GRID_TOP} width={COL_W} height={ROW_H} className="fill-brand-soft/60 stroke-brand" />
        <text x={GRID_X + 180 + COL_W / 2} y="212" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-brand">Power</text>
        <text x={GRID_X + 180 + COL_W / 2} y="230" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">(1 – β)</text>
        <text x={GRID_X + 180 + COL_W / 2} y="248" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-foreground/80">the probability of rejecting</text>
        <text x={GRID_X + 180 + COL_W / 2} y="259" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-foreground/80">H0 when it is false</text>
        <text x={GRID_X + 180 + COL_W / 2} y="276" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-brand">correct result — blue-shaded</text>

        {/* CELL 2 — reject × H0 = α Type I error */}
        <rect x={GRID_X + 180 + COL_W} y={GRID_TOP} width={COL_W} height={ROW_H} className="fill-card stroke-border" />
        <text x={GRID_X + 180 + COL_W + COL_W / 2} y="212" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-emergency">α</text>
        <text x={GRID_X + 180 + COL_W + COL_W / 2} y="230" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">Type I error</text>
        <text x={GRID_X + 180 + COL_W + COL_W / 2} y="248" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-emergency">false-positive error</text>
        <text x={GRID_X + 180 + COL_W + COL_W / 2} y="259" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">rejects an H0 that is true</text>
        <text x={GRID_X + 180 + COL_W + COL_W / 2} y="276" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">“1st time boy cries wolf”</text>

        {/* CELL 3 — not-reject × H1 = β Type II error */}
        <rect x={GRID_X + 180} y={GRID_TOP + ROW_H} width={COL_W} height={ROW_H} className="fill-card stroke-border" />
        <text x={GRID_X + 180 + COL_W / 2} y="326" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-warning">β</text>
        <text x={GRID_X + 180 + COL_W / 2} y="344" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">Type II error</text>
        <text x={GRID_X + 180 + COL_W / 2} y="362" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-warning">false-negative error</text>
        <text x={GRID_X + 180 + COL_W / 2} y="373" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">misses a false H0</text>
        <text x={GRID_X + 180 + COL_W / 2} y="390" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">“2nd time boy cries wolf”</text>

        {/* CELL 4 — not-reject × H0 = the EMPTY blue cell (as printed) */}
        <rect x={GRID_X + 180 + COL_W} y={GRID_TOP + ROW_H} width={COL_W} height={ROW_H} className="fill-brand-soft/60 stroke-brand" />
        <text x={GRID_X + 180 + COL_W + COL_W / 2} y="318" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">(unlabeled in print —</text>
        <text x={GRID_X + 180 + COL_W + COL_W / 2} y="329" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">blue shading only)</text>
        <text x={GRID_X + 180 + COL_W + COL_W / 2} y="352" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-brand">CORRECT RESULT</text>
        <text x={GRID_X + 180 + COL_W + COL_W / 2} y="370" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-foreground/80">no effect claimed, none exists</text>
        <text x={GRID_X + 180 + COL_W + COL_W / 2} y="381" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-foreground/80">— H0 not rejected</text>

        {/* the printed legend */}
        <text x={GRID_X + 180} y="418" fontSize="3.4" fontWeight="800" className="fill-foreground">Blue shading = correct result.</text>
        <text x={GRID_X + 180} y="432" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the bottom-right cell prints with no text — its shading is its name (as printed)</text>
      </g>

      {/* ===== ZONE B — THE TWO ERROR CARDS ===== */}
      <g>
        <rect x="36" y="486" width="1030" height="314" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="508" fontSize="5.4" fontWeight="800" className="fill-foreground">TESTING ERRORS — the printed Type I and Type II rows, adapted as KYP cards (the print&apos;s own words)</text>
        <text x="52" y="519" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">First Aid&apos;s cry-wolf pair is the source&apos;s own — carried VERBATIM and ATTRIBUTED (it prints with red lead numerals)</text>

        {/* CARD 1 — Type I error (α) */}
        <g>
          <rect x="52" y="532" width="502" height="258" rx="10" className="fill-card stroke-border" />
          <text x="66" y="556" fontSize="4.6" fontWeight="800" className="fill-brand">Type I error (α)</text>
          <rect x="386" y="543" width="154" height="17" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="463" y="555" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-warning">Also called false-positive error.</text>
          <text x="66" y="578" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Stating that there is an effect or difference when none exists (H0</text>
          <text x="66" y="589" fontSize="2.9" fontWeight="700" className="fill-foreground/80">incorrectly rejected in favor of H1).</text>
          <text x="66" y="607" fontSize="2.9" fontWeight="700" className="fill-foreground/80">α is the probability of making a type I error (usually 0.05 is chosen).</text>
          <text x="66" y="618" fontSize="2.9" fontWeight="700" className="fill-foreground/80">If P &lt; α, then assuming H0 is true, the probability of obtaining the test</text>
          <text x="66" y="629" fontSize="2.9" fontWeight="700" className="fill-foreground/80">results would be less than the probability of making a type I error.</text>
          <text x="66" y="640" fontSize="2.9" fontWeight="700" className="fill-foreground/80">H0 is therefore rejected as false.</text>
          <rect x="66" y="652" width="464" height="18" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="78" y="664" fontSize="2.9" fontWeight="800" className="fill-warning">Statistical significance ≠ clinical significance.</text>
          <text x="66" y="692" fontSize="3" fontWeight="800" className="fill-emergency">“1st time boy cries wolf, the town believes there is a wolf,</text>
          <text x="66" y="703" fontSize="3" fontWeight="800" className="fill-emergency">but there is not (false positive).” — First Aid&apos;s own, printed in red</text>
          <text x="66" y="724" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">“You can never “prove” H1, but you can reject the H0 as being very</text>
          <text x="66" y="735" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">unlikely.” — printed in this row&apos;s right column</text>
          <text x="66" y="760" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the grid cell: Study rejects H0 × Reality H0 (top-right, unshaded)</text>
        </g>

        {/* CARD 2 — Type II error (β) */}
        <g>
          <rect x="566" y="532" width="500" height="258" rx="10" className="fill-card stroke-border" />
          <text x="580" y="556" fontSize="4.6" fontWeight="800" className="fill-brand">Type II error (β)</text>
          <rect x="890" y="543" width="160" height="17" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="970" y="555" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-warning">Also called false-negative error.</text>
          <text x="580" y="578" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Stating that there is not an effect or difference when one exists (H0 is</text>
          <text x="580" y="589" fontSize="2.9" fontWeight="700" className="fill-foreground/80">not rejected when it is in fact false).</text>
          <text x="580" y="607" fontSize="2.9" fontWeight="700" className="fill-foreground/80">β is the probability of making a type II error. β is related to statistical</text>
          <text x="580" y="618" fontSize="2.9" fontWeight="700" className="fill-foreground/80">power (1 – β), which is the probability of rejecting H0 when it is false.</text>
          <rect x="580" y="630" width="464" height="18" rx="6" className="fill-success-soft/50 stroke-success" />
          <text x="592" y="642" fontSize="2.9" fontWeight="800" className="fill-success">POWER = 1 – β — the complement of this error</text>
          <rect x="580" y="652" width="464" height="18" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="592" y="664" fontSize="2.9" fontWeight="800" className="fill-warning">The see-saw: “Generally, when type I error increases, type II error decreases.”</text>
          <text x="580" y="692" fontSize="3" fontWeight="800" className="fill-emergency">“2nd time boy cries wolf, the town believes there is no wolf,</text>
          <text x="580" y="703" fontSize="3" fontWeight="800" className="fill-emergency">but there is one.” — First Aid&apos;s own, printed in red</text>
          <text x="580" y="724" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">“If you ↑ sample size, you ↑ power. There is power in numbers.” — First</text>
          <text x="580" y="735" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">Aid&apos;s own, printed in this row&apos;s right column (the phrase prints in red)</text>
          <text x="580" y="760" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the grid cell: Study does not reject H0 × Reality H1 (bottom-left, unshaded)</text>
        </g>
      </g>

      {/* ===== ZONE C — THE POWER PANEL ===== */}
      <g>
        <rect x="36" y="816" width="1030" height="204" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="838" fontSize="5.4" fontWeight="800" className="fill-foreground">STATISTICAL POWER (1 – β) — “the probability of rejecting H0 when it is false”</text>
        <text x="52" y="849" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the printed lever list — “↑ power and ↓ β by:” — four levers, printed order (ORIGINAL KYP ADAPTATION)</text>

        {/* the four lever chips */}
        <g>
          <rect x="52" y="862" width="240" height="56" rx="9" className="fill-card stroke-success" />
          <text x="172" y="884" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">↑ sample size</text>
          <text x="172" y="899" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the free lever — costs no α</text>
        </g>
        <g>
          <rect x="306" y="862" width="240" height="56" rx="9" className="fill-card stroke-success" />
          <text x="426" y="884" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">↑ expected effect size</text>
          <text x="426" y="899" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">study where the effect is largest</text>
        </g>
        <g>
          <rect x="560" y="862" width="240" height="56" rx="9" className="fill-card stroke-success" />
          <text x="680" y="884" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">↑ precision of measurement</text>
          <text x="680" y="899" textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">less noise around the signal</text>
        </g>
        <g>
          <rect x="814" y="862" width="240" height="56" rx="9" className="fill-card stroke-warning" />
          <text x="934" y="884" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">↑ α level</text>
          <text x="934" y="899" textAnchor="middle" fontSize="2.5" fontWeight="700" className="fill-muted-foreground">(↑ statistical significance level)</text>
        </g>

        <text x="52" y="942" fontSize="3.2" fontWeight="800" className="fill-emergency">“If you ↑ sample size, you ↑ power. There is power in numbers.” — First Aid&apos;s own, printed in red in the Type II row</text>
        <text x="52" y="958" fontSize="3" fontWeight="700" className="fill-foreground">The printed see-saw: “Generally, when type I error increases, type II error decreases.” — at fixed sample size, α and β move against each other (KYP qualifier)</text>
        <text x="52" y="974" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">levers 1–3 raise power without spending Type I safety; lever 4 buys it — power is a design quantity, set before the data exist (KYP framing)</text>
      </g>

      {/* ===== ZONE D — STATISTICAL VS CLINICAL SIGNIFICANCE ===== */}
      <g>
        <rect x="36" y="1036" width="1030" height="160" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1058" fontSize="5.4" fontWeight="800" className="fill-foreground">STATISTICAL VS CLINICAL SIGNIFICANCE — “Statistical significance ≠ clinical significance.”</text>
        <text x="52" y="1069" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the printed bottom block — the label-column title wraps across two lines in the print; three definition sentences</text>

        <g>
          <rect x="52" y="1082" width="500" height="58" rx="10" className="fill-card stroke-border" />
          <text x="66" y="1098" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Statistical significance—defined by the likelihood of study results being</text>
          <text x="66" y="1109" fontSize="2.9" fontWeight="700" className="fill-foreground/80">due to chance. If there is a high statistical significance, then there is a</text>
          <text x="66" y="1120" fontSize="2.9" fontWeight="700" className="fill-foreground/80">low probability that the results are due to chance.</text>
        </g>
        <g>
          <rect x="566" y="1082" width="500" height="58" rx="10" className="fill-card stroke-border" />
          <text x="580" y="1098" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Clinical significance—measure of effect on treatment outcomes. An</text>
          <text x="580" y="1109" fontSize="2.9" fontWeight="700" className="fill-foreground/80">intervention with high clinical significance is likely to have a large</text>
          <text x="580" y="1120" fontSize="2.9" fontWeight="700" className="fill-foreground/80">impact on patient outcomes/measures.</text>
        </g>

        <rect x="52" y="1148" width="1014" height="38" rx="9" className="fill-warning-soft/50 stroke-warning" />
        <text x="64" y="1163" fontSize="3.2" fontWeight="800" className="fill-warning">THE PRINTED EXAMPLE — high statistical significance, limited clinical impact:</text>
        <text x="64" y="1177" fontSize="2.9" fontWeight="700" className="fill-foreground">“…a study might show a statistical significance of lowered blood sugar levels by 1 mg/dL correlated with better outcomes, but this may not be clinically as important.”</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1212" width="1054" height="64" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1228" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 288 / book 266 (Public Health Sciences — Epidemiology and Biostatistics:</text>
        <text x="42" y="1238" fontSize="3.8" className="fill-muted-foreground">Outcomes of statistical hypothesis testing; Testing errors; Statistical vs clinical significance). Census (pdfimages): ZERO raster images — pure text + one vector grid.</text>
        <text x="42" y="1248" fontSize="3.8" className="fill-muted-foreground">VLM: two passes (120dpi full page + 200dpi focused grid crops), staging-pubh14/vlm-census.txt. ORIGINAL KYP REDRAW (the grid) + ADAPTATION (cards, levers, strip) —</text>
        <text x="42" y="1258" fontSize="3.8" className="fill-muted-foreground">every printed label preserved; the full grid and error rows are carried verbatim in the note&apos;s table block. First Aid&apos;s cry-wolf pair and “There is power in numbers.”</text>
        <text x="42" y="1268" fontSize="3.8" className="fill-muted-foreground">carried attributed. ADJUDICATION — columns: H1 LEFT / H0 RIGHT under “Reality”; blue cells = Power (reject × H1) + the EMPTY not-reject × H0 cell.</text>
      </g>
    </svg>
  );
};
