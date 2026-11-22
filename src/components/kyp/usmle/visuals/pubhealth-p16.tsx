/* Public Health — PUBH batch 2, topic 16: Choosing the statistical test
 * (LOWER PORTION ONLY of pdf page 289 / book 267 — a PINNED PAGE-SPLIT;
 * the topic owns everything from the navy "Common statistical tests"
 * heading (raw text-layer line 39, bbox y≈336 below a thin rule) through
 * the page end; the Confidence interval + significance-rules + Meta-
 * analysis blocks ABOVE the split belong to confidence-intervals-meta-
 * analysis, produced as pubh15 — never quoted here). The lower portion
 * carries TWO blocks, both owned: (1) the "Common statistical tests"
 * table — FOUR rows in printed order: t-test, ANOVA, Chi-square (χ²),
 * Fisher's exact test, each with its "Checks..." sentence(s) and its
 * mnemonic + Example in the right cell — THREE mnemonics are First Aid's
 * OWN, printed in RED ("Tea is meant for 2." · "3 words: ANalysis Of
 * VAriance." — capitals as printed — · "Pronounce chi-tegorical."),
 * carried VERBATIM and ATTRIBUTED; the Fisher row prints NO mnemonic —
 * its cue is the printed "Use instead of chi-square test with small
 * samples."; the row labels print in dark red/maroon, the rows are
 * separated by thin light-gray rules (no zebra, no vertical borders),
 * and the table prints with NO column-header row (the column names in
 * the note's table block are KYP's descriptive labels — documented);
 * (2) THE TEST-SELECTION ALGORITHM FIGURE — pure vector art (pdfimages:
 * ZERO raster images on the page): a top→bottom tree with a tan rounded
 * root box "Variables to be compared", branching left to a LIGHT BLUE
 * "Numerical (means)" box and right to a LIGHT PINK "Categorical
 * (proportions)" box; the third level prints as PLAIN TEXT labels (no
 * boxes — VLM-confirmed): "2 groups" / "≥ 3 groups" under Numerical,
 * "Small sample size" / "Large sample size" under Categorical; each
 * label drops a short arrow onto its leaf box — t-test and ANOVA in
 * light blue, Fisher's exact test and Chi-square test in light pink,
 * each leaf DIRECTLY below its criterion (bbox-pinned). The figure's
 * text objects extract at the very bottom of the raw stream with the
 * indd footer slug interleaved MID-FIGURE — a reading-order jumble,
 * documented; the tree is pinned by pdftotext -bbox + the VLM pass
 * (staging-pubh16/vlm-census.txt, TWO passes: 120dpi full page + 300dpi
 * lower crop). The algorithm is an ORIGINAL KYP REDRAW (the tree is
 * re-laid-out as KYP vector art; every printed label is preserved); the
 * four rows are an ORIGINAL KYP ADAPTATION (cards). The route chips,
 * family tags, and the clinical-thread strip are KYP additions, marked.
 * Nothing is reproduced from the book; purely presentational (no props,
 * no hooks, no external images). */

export const StatTestsMap = () => {
  const w = 1102;
  const h = 1252;

  /* An elbow connector with a small solid arrowhead (the print's gray
   * right-angle connectors, redrawn as KYP vector paths). */
  const elbow = (x: number, yTop: number, yBar: number, yDrop: number, key: string) => (
    <g key={key}>
      <line x1={x} y1={yTop} x2={x} y2={yBar} className="stroke-muted-foreground" strokeWidth="1.2" />
      <line x1={x} y1={yBar + 8} x2={x} y2={yDrop - 4} className="stroke-muted-foreground" strokeWidth="1.2" />
      <path d={`M ${x - 4} ${yDrop - 6} L ${x} ${yDrop} L ${x + 4} ${yDrop - 6} Z`} className="fill-muted-foreground" />
    </g>
  );

  /* A short vertical arrow from a criterion label down to its leaf box. */
  const drop = (x: number, y1: number, y2: number, key: string) => (
    <g key={key}>
      <line x1={x} y1={y1} x2={x} y2={y2 - 4} className="stroke-muted-foreground" strokeWidth="1.2" />
      <path d={`M ${x - 4} ${y2 - 6} L ${x} ${y2} L ${x + 4} ${y2 - 6} Z`} className="fill-muted-foreground" />
    </g>
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Choosing the statistical test — the printed test-selection algorithm redrawn as a tree: a root box Variables to be compared branching into a blue Numerical (means) box (2 groups dropping to t-test, 3 or more groups dropping to ANOVA) and a pink Categorical (proportions) box (Small sample size dropping to Fisher's exact test, Large sample size dropping to Chi-square test); below the tree, the four printed test rows as cards — t-test checking differences between means of 2 groups with First Aid's mnemonic Tea is meant for 2 and the example comparing the mean blood pressure between men and women; ANOVA checking differences between means of 3 or more groups with First Aid's mnemonic 3 words ANalysis Of VAriance and the example comparing the mean blood pressure between members of 3 different ethnic groups; Chi-square checking differences between 2 or more percentages or proportions of categorical outcomes not mean values with First Aid's mnemonic Pronounce chi-tegorical and the example comparing the proportion of members of 3 age groups who have essential hypertension; and Fisher's exact test checking differences between 2 percentages or proportions of categorical nominal outcomes, used instead of chi-square with small samples, with the example comparing the percentage of 20 men and 20 women with hypertension — an original KYP diagram of book 267 lower." className="min-w-[1060px]">
      <title>Choosing the statistical test — the selection tree and the four tests</title>
      <desc>
        A top-to-bottom test-selection tree (Variables to be compared branching into Numerical means and Categorical proportions, then 2 groups, 3-or-more groups, Small sample size, and Large sample size, each dropping onto its test: t-test, ANOVA, Fisher&apos;s exact test, Chi-square test), followed by the four printed test rows as cards carrying what each test checks, First Aid&apos;s three red mnemonics attributed, and the four worked blood-pressure and hypertension examples.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Choosing the statistical test — the selection tree and the four tests</text>
        <rect x="792" y="25" width="270" height="18" rx="6" className="fill-brand-soft" />
        <text x="927" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">1 algorithm · 4 tests · 3 mnemonics</text>
      </g>

      {/* ===== ZONE A — THE TEST-SELECTION ALGORITHM ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="470" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE TEST-SELECTION ALGORITHM — the printed tree, redrawn as original KYP vector art (every label is the print&apos;s own)</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the print&apos;s box colors carried (VLM census): tan root · blue numerical branch · pink categorical branch — flow runs top → bottom; the third level prints as plain text labels, no boxes</text>

        {/* LEVEL 1 — the root */}
        <rect x="451" y="116" width="200" height="30" rx="10" className="fill-secondary stroke-border" />
        <text x="551" y="135" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">Variables to be compared</text>
        <line x1="551" y1="146" x2="551" y2="158" className="stroke-muted-foreground" strokeWidth="1.2" />
        <line x1="330" y1="158" x2="772" y2="158" className="stroke-muted-foreground" strokeWidth="1.2" />
        {elbow(330, 158, 158, 172, "e-num")}
        {elbow(772, 158, 158, 172, "e-cat")}

        {/* LEVEL 2 — the two variable-type branches */}
        <rect x="210" y="172" width="240" height="30" rx="10" className="fill-brand-soft stroke-brand" />
        <text x="330" y="191" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">Numerical (means)</text>
        <rect x="652" y="172" width="240" height="30" rx="10" className="fill-warning-soft/50 stroke-warning" />
        <text x="772" y="191" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-warning">Categorical (proportions)</text>
        <line x1="330" y1="202" x2="330" y2="216" className="stroke-muted-foreground" strokeWidth="1.2" />
        <line x1="248" y1="216" x2="412" y2="216" className="stroke-muted-foreground" strokeWidth="1.2" />
        {elbow(248, 216, 216, 230, "e-2g")}
        {elbow(412, 216, 216, 230, "e-3g")}
        <line x1="772" y1="202" x2="772" y2="216" className="stroke-muted-foreground" strokeWidth="1.2" />
        <line x1="690" y1="216" x2="855" y2="216" className="stroke-muted-foreground" strokeWidth="1.2" />
        {elbow(690, 216, 216, 230, "e-ss")}
        {elbow(855, 216, 216, 230, "e-ls")}

        {/* LEVEL 3 — the four criteria (plain text, as printed — no boxes) */}
        <text x="248" y="245" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">2 groups</text>
        <text x="412" y="245" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">≥ 3 groups</text>
        <text x="690" y="245" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">Small sample size</text>
        <text x="855" y="245" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">Large sample size</text>
        {drop(248, 250, 274, "d-t")}
        {drop(412, 250, 274, "d-a")}
        {drop(690, 250, 274, "d-f")}
        {drop(855, 250, 274, "d-c")}

        {/* LEVEL 4 — the four leaf tests, each directly below its criterion */}
        <rect x="188" y="274" width="120" height="30" rx="10" className="fill-brand-soft stroke-brand" />
        <text x="248" y="293" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">t-test</text>
        <rect x="352" y="274" width="120" height="30" rx="10" className="fill-brand-soft stroke-brand" />
        <text x="412" y="293" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">ANOVA</text>
        <rect x="622" y="274" width="136" height="30" rx="10" className="fill-warning-soft/50 stroke-warning" />
        <text x="690" y="293" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-warning">Fisher’s exact test</text>
        <rect x="787" y="274" width="136" height="30" rx="10" className="fill-warning-soft/50 stroke-warning" />
        <text x="855" y="293" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-warning">Chi-square test</text>

        {/* family tags (KYP) */}
        <line x1="188" y1="314" x2="472" y2="314" className="stroke-brand" strokeWidth="1" strokeDasharray="4 3" />
        <text x="330" y="326" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-brand">THE MEANS FAMILY (KYP tag)</text>
        <line x1="622" y1="314" x2="923" y2="314" className="stroke-warning" strokeWidth="1" strokeDasharray="4 3" />
        <text x="772" y="326" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-warning">THE PROPORTIONS FAMILY (KYP tag)</text>

        {/* the two route chips — the KYP reading of the tree */}
        <rect x="60" y="340" width="486" height="42" rx="8" className="fill-card stroke-brand" />
        <text x="74" y="356" fontSize="3.2" fontWeight="800" className="fill-brand">MEANS? — count the GROUPS:</text>
        <text x="74" y="368" fontSize="3" fontWeight="700" className="fill-foreground/80">2 groups → t-test · ≥ 3 groups → ANOVA</text>
        <text x="74" y="378" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">“Tea is meant for 2.” · “3 words: ANalysis Of VAriance.” — First Aid&apos;s own (KYP reading)</text>
        <rect x="556" y="340" width="486" height="42" rx="8" className="fill-card stroke-warning" />
        <text x="570" y="356" fontSize="3.2" fontWeight="800" className="fill-warning">PROPORTIONS? — gauge the SAMPLE:</text>
        <text x="570" y="368" fontSize="3" fontWeight="700" className="fill-foreground/80">Small sample size → Fisher’s exact test · Large sample size → Chi-square test</text>
        <text x="570" y="378" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">“Use instead of chi-square test with small samples.” — the print&apos;s Fisher cue (KYP reading)</text>

        {/* the rule strip */}
        <line x1="52" y1="396" x2="1050" y2="396" className="stroke-border" strokeWidth="1" />
        <text x="52" y="410" fontSize="3.6" fontWeight="800" className="fill-foreground">THE KYP RULE — two questions pick the test: (1) WHAT KIND of variable? numerical (means) vs categorical (proportions); (2) HOW MANY groups (means) / HOW BIG the sample (proportions)?</text>
        <text x="52" y="422" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Printed tree, as adjudicated — root: “Variables to be compared” · left branch: “Numerical (means)” · right branch: “Categorical (proportions)” · each leaf sits directly below its criterion (bbox + VLM agree)</text>
        <text x="52" y="434" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — pure vector figure; the tree&apos;s labels extract interleaved at the raw page bottom with the indd slug mid-figure (jumble documented; geometry bbox-pinned)</text>
      </g>

      {/* ===== ZONE B — THE FOUR TESTS ===== */}
      <g>
        <rect x="36" y="556" width="1030" height="620" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="578" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FOUR TESTS — the printed table as cards: what it checks → mnemonic → worked example (PRINTED order)</text>
        <text x="52" y="589" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">First Aid&apos;s three red mnemonics carried verbatim and attributed; the Fisher row prints NONE — its printed cue is “Use instead of chi-square test with small samples.” (documented)</text>

        {/* CARD 1 — t-test */}
        <g>
          <rect x="52" y="602" width="502" height="250" rx="10" className="fill-card stroke-border" />
          <circle cx="70" cy="620" r="9" className="fill-brand-soft stroke-brand" />
          <text x="70" y="622.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">1</text>
          <text x="86" y="624" fontSize="4.6" fontWeight="800" className="fill-emergency">t-test</text>
          <rect x="330" y="612" width="212" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="436" y="623" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-brand">ROUTE: Numerical (means) → 2 groups</text>
          <text x="66" y="648" fontSize="2.9" fontWeight="700" className="fill-foreground/80">“Checks differences between means of 2 groups.”</text>
          <rect x="66" y="660" width="330" height="20" rx="6" className="fill-emergency/10 stroke-emergency" />
          <text x="76" y="673.5" fontSize="3.1" fontWeight="800" className="fill-emergency">“Tea is meant for 2.” — First Aid&apos;s own, printed in red</text>
          <text x="66" y="700" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">Example: comparing the mean blood pressure</text>
          <text x="66" y="711" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">between men and women.</text>
          <text x="66" y="734" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the tree&apos;s first leaf — TWO means, one test (KYP)</text>
          <text x="66" y="745" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the print bolds “means” and “2” inside the Checks cell (VLM)</text>
        </g>

        {/* CARD 2 — ANOVA */}
        <g>
          <rect x="566" y="602" width="502" height="250" rx="10" className="fill-card stroke-border" />
          <circle cx="584" cy="620" r="9" className="fill-brand-soft stroke-brand" />
          <text x="584" y="622.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-brand">2</text>
          <text x="600" y="624" fontSize="4.6" fontWeight="800" className="fill-emergency">ANOVA</text>
          <rect x="826" y="612" width="228" height="16" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="940" y="623" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-brand">ROUTE: Numerical (means) → ≥ 3 groups</text>
          <text x="580" y="648" fontSize="2.9" fontWeight="700" className="fill-foreground/80">“Checks differences between means of 3 or more groups.”</text>
          <rect x="580" y="660" width="400" height="20" rx="6" className="fill-emergency/10 stroke-emergency" />
          <text x="590" y="673.5" fontSize="3.1" fontWeight="800" className="fill-emergency">“3 words: ANalysis Of VAriance.” — First Aid&apos;s own (capitals as printed)</text>
          <text x="580" y="700" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">Example: comparing the mean blood pressure between</text>
          <text x="580" y="711" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">members of 3 different ethnic groups.</text>
          <text x="580" y="734" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the mnemonic IS the test&apos;s name — AN-O-VA (KYP)</text>
          <text x="580" y="745" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the print bolds “3” inside the Checks cell (VLM)</text>
        </g>

        {/* CARD 3 — Chi-square (χ²) */}
        <g>
          <rect x="52" y="864" width="502" height="250" rx="10" className="fill-card stroke-border" />
          <circle cx="70" cy="882" r="9" className="fill-warning-soft stroke-warning" />
          <text x="70" y="884.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-warning">3</text>
          <text x="86" y="886" fontSize="4.6" fontWeight="800" className="fill-emergency">Chi-square (χ²)</text>
          <rect x="288" y="874" width="254" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="415" y="885" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-warning">ROUTE: Categorical (proportions) → Large sample size</text>
          <text x="66" y="910" fontSize="2.9" fontWeight="700" className="fill-foreground/80">“Checks differences between 2 or more percentages or proportions of</text>
          <text x="66" y="921" fontSize="2.9" fontWeight="700" className="fill-foreground/80">categorical outcomes (not mean values).”</text>
          <rect x="66" y="933" width="330" height="20" rx="6" className="fill-emergency/10 stroke-emergency" />
          <text x="76" y="946.5" fontSize="3.1" fontWeight="800" className="fill-emergency">“Pronounce chi-tegorical.” — First Aid&apos;s own, printed in red</text>
          <text x="66" y="973" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">Example: comparing the proportion of members of 3 age groups</text>
          <text x="66" y="984" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">who have essential hypertension.</text>
          <text x="66" y="1007" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">χ² handles 2 OR MORE proportions — but never means (KYP)</text>
          <text x="66" y="1018" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the print bolds “categorical” inside the Checks cell (VLM)</text>
        </g>

        {/* CARD 4 — Fisher's exact test */}
        <g>
          <rect x="566" y="864" width="502" height="250" rx="10" className="fill-card stroke-border" />
          <circle cx="584" cy="882" r="9" className="fill-warning-soft stroke-warning" />
          <text x="584" y="884.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-warning">4</text>
          <text x="600" y="886" fontSize="4.6" fontWeight="800" className="fill-emergency">Fisher’s exact test</text>
          <rect x="840" y="874" width="214" height="16" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="947" y="885" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-warning">ROUTE: Categorical (proportions) → Small sample</text>
          <text x="580" y="910" fontSize="2.9" fontWeight="700" className="fill-foreground/80">“Checks differences between 2 percentages or proportions of</text>
          <text x="580" y="921" fontSize="2.9" fontWeight="700" className="fill-foreground/80">categorical, nominal outcomes. Use instead of chi-square</text>
          <text x="580" y="932" fontSize="2.9" fontWeight="700" className="fill-foreground/80">test with small samples.”</text>
          <rect x="580" y="944" width="414" height="20" rx="6" className="fill-card stroke-border" strokeDasharray="4 3" />
          <text x="590" y="957.5" fontSize="3" fontWeight="800" className="fill-muted-foreground">NO mnemonic of its own in the print (documented) — the cue: “small samples”</text>
          <text x="580" y="984" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">Example: comparing the percentage of 20 men and 20 women</text>
          <text x="580" y="995" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">with hypertension.</text>
          <text x="580" y="1018" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the tree&apos;s small-sample leaf — χ²&apos;s stand-in (KYP)</text>
          <text x="580" y="1029" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">exactly 2 percentages/proportions, nominal outcomes (as printed)</text>
        </g>

        {/* the clinical-thread strip (KYP) */}
        <rect x="52" y="1126" width="998" height="38" rx="8" className="fill-card stroke-neural" />
        <text x="66" y="1141" fontSize="3" fontWeight="800" className="fill-neural">THE PAGE&apos;S ONE CLINICAL THREAD (KYP) — every worked example is a blood-pressure comparison:</text>
        <text x="66" y="1153" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">MEANS — men vs women (2 groups → t-test) · 3 ethnic groups (≥ 3 → ANOVA) · PROPORTIONS — hypertension across 3 age groups (large sample → Chi-square) · 20 men vs 20 women with hypertension (small sample → Fisher&apos;s exact test)</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1188" width="1054" height="48" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1206" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 289 / book 267 lower (Epidemiology and Biostatistics: Common statistical tests)</text>
        <text x="42" y="1218" fontSize="3.8" className="fill-muted-foreground">PINNED SPLIT — the Confidence interval + Meta-analysis blocks above the boundary heading belong to confidence-intervals-meta-analysis (pubh15); every quote here stays at or below “Common statistical tests”.</text>
        <text x="42" y="1228" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the four-row table is an ORIGINAL KYP ADAPTATION (cards) and the pure-vector algorithm an ORIGINAL KYP REDRAW (this tree); every printed label preserved; VLM-read at 120dpi + 300dpi</text>
        <text x="42" y="1238" fontSize="3.8" className="fill-muted-foreground">(staging-pubh16/vlm-census.txt) — three red mnemonics attributed; NO mnemonic in the Fisher row; row labels dark red; tree colors tan/blue/pink as printed.</text>
      </g>
    </svg>
  );
};
