/* Public Health — PUBH batch 2, topic 10: Incidence vs prevalence (FULL pdf
 * page 284 / book 262 — a WHOLE-PAGE topic in the EPIDEMIOLOGY AND
 * BIOSTATISTICS subsection; the page after the ROC-curve page, the page
 * before "Bias and study errors"). The page carries FOUR blocks, all owned:
 * (1) the two formulas — "Incidence = # of new cases / # of people at risk
 * (per unit of time)" and "Prevalence = # of existing cases (at a point in
 * time) / Total # of people in a population"; (2) the relationship — the big
 * formula prints its stacked fraction LEFT of the equals sign, "Prevalence /
 * (1 – prevalence) = Incidence rate × average duration of disease", with the
 * simplified sentence "Prevalence = incidence × duration of the disease.",
 * the chronic/short-duration anchors (diabetes; common cold), and the margin
 * block (incidents/current-cases, pretest probability, PPV/NPV); (3) THE POOL
 * FIGURE — pure vector (pdfimages: ZERO raster images on the page): the
 * bathtub with "Prevalence" in the water, INCIDENCE pouring in from the
 * faucet, RECURRENCE looping back IN (arrowhead down into the water), and
 * MORTALITY + CURE draining OUT below; (4) the 8-row SITUATION table with
 * its printed ↑/↓/— glyphs. Census + geometry pinned by TWO VLM passes
 * (glm-4.6v, full-page 120dpi + 300dpi zoom, staging-pubh10/vlm-census.txt):
 * "Incidence and Recurrence fill the pool; Mortality and Cure drain it;
 * Cure's outflow loops back in as Recurrence" — ADJUDICATION: the batch
 * brief called Recurrence an OUTFLOW; the print shows a second INFLOW
 * (brief corrected to print). Nothing is reproduced from the book — the
 * bathtub is re-drawn as an ORIGINAL KYP REDRAW (KYP pool, vector stream
 * glyphs, KYP color coding), the table is an ORIGINAL KYP ADAPTATION
 * (full-width glyph band with KYP lever tags FLOW/STAY/COUNT marked as
 * KYP), every printed label and glyph preserved; the full table is also
 * carried verbatim in the note's table block. Purely presentational (no
 * props, no hooks, no external images). */

export const IncidencePrevalenceMap = () => {
  const w = 1102;
  const h = 1380;

  /* The 8-row situation table — situations and glyphs are the print's own
   * (exact ↑/↓/— in printed order); the lever tags and why-lines are KYP's. */
  const SITUATIONS: {
    text: string;
    why: string;
    lever: "FLOW" | "STAY" | "COUNT";
    inc: string;
    prev: string;
  }[] = [
    { text: "↑ survival time", why: "longer stay — cases accumulate; the faucet is untouched", lever: "STAY", inc: "—", prev: "↑" },
    { text: "↑ mortality rate", why: "wider mortality drain — cases exit the pool faster", lever: "STAY", inc: "—", prev: "↓" },
    { text: "Faster recovery time", why: "wider cure drain — cases recover out of the pool sooner", lever: "STAY", inc: "—", prev: "↓" },
    { text: "Extensive vaccine administration", why: "fewer susceptibles → fewer new cases generated", lever: "FLOW", inc: "↓", prev: "↓" },
    { text: "↓ risk factors", why: "fewer exposures → fewer new cases generated", lever: "FLOW", inc: "↓", prev: "↓" },
    { text: "↑ diagnostic sensitivity", why: "more cases COUNTED — measurement, not more disease (KYP)", lever: "COUNT", inc: "↑", prev: "↑" },
    { text: "New effective treatment started", why: "wider cure drain — the pool empties faster; no prevention", lever: "STAY", inc: "—", prev: "↓" },
    { text: "↓ contact between infected and noninfected patients with airborne infectious disease", why: "transmission interrupted → fewer new infections", lever: "FLOW", inc: "↓", prev: "↓" },
  ];
  const leverClass = (l: string) =>
    l === "FLOW" ? "fill-brand" : l === "COUNT" ? "fill-warning" : "fill-neural";
  const leverBox = (l: string) =>
    l === "FLOW" ? "fill-brand-soft stroke-brand" : l === "COUNT" ? "fill-card stroke-warning" : "fill-card stroke-neural";
  const glyphClass = (g: string) =>
    g === "↑" ? "fill-success" : g === "↓" ? "fill-warning" : "fill-muted-foreground";

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Incidence vs prevalence — the pool and its streams: a pool of existing cases labeled Prevalence, filled by the Incidence faucet of new cases and by the Recurrence loop of relapsing cases re-entering from the cure side, drained below by Mortality and Cure, with the printed relationship Prevalence over 1 minus prevalence equals Incidence rate times average duration of disease, simplified as prevalence equals incidence times duration; the two formula cards (Incidence equals number of new cases over number of people at risk per unit of time; Prevalence equals number of existing cases at a point in time over total number of people in a population) with First Aid's margin sentences Incidence looks at new cases (incidents) and Prevalence looks at all current cases; the chronic-disease anchor diabetes where prevalence exceeds incidence and the short-duration anchor common cold where prevalence approximates incidence; the pretest-probability bridge that higher prevalence raises PPV and lowers NPV; and the full 8-row situation table (up survival time, up mortality rate, faster recovery time, extensive vaccine administration, down risk factors, up diagnostic sensitivity, new effective treatment started, down contact between infected and noninfected patients with airborne infectious disease) each with its printed incidence and prevalence effect glyphs including the em-dash meaning no effect — an original KYP diagram of book 262." className="min-w-[1060px]">
      <title>Incidence vs prevalence — the pool, its streams, and the situation table</title>
      <desc>
        An original KYP pool diagram (incidence and recurrence flow in; mortality and cure drain out; prevalence is the water level) with the printed prevalence–incidence–duration identity, the two formula cards with First Aid&apos;s margin sentences, the diabetes and common-cold anchors, the pretest-probability bridge to PPV and NPV, and the 8-row situation table as a full-width band with every printed effect glyph.
      </desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Incidence vs prevalence — the pool, its streams, and the situation table</text>
        <rect x="802" y="25" width="260" height="18" rx="6" className="fill-brand-soft" />
        <text x="932" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">1 pool · 4 streams · 8 situations</text>
      </g>

      {/* ===== ZONE A — THE POOL ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="420" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="90" fontSize="5.4" fontWeight="800" className="fill-foreground">THE POOL — prevalence is the water level</text>
        <text x="52" y="101" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ORIGINAL KYP REDRAW of the printed bathtub figure — every printed label preserved</text>

        {/* the balance card (left) */}
        <g>
          <rect x="52" y="150" width="300" height="220" rx="10" className="fill-card stroke-border" />
          <text x="64" y="168" fontSize="4" fontWeight="800" className="fill-foreground">THE BALANCE (KYP)</text>
          <text x="64" y="186" fontSize="3" fontWeight="700" className="fill-foreground/80">enters: INCIDENCE (new cases) +</text>
          <text x="64" y="200" fontSize="3" fontWeight="700" className="fill-foreground/80">RECURRENCE (relapses pour back in)</text>
          <text x="64" y="214" fontSize="3" fontWeight="700" className="fill-foreground/80">leaves: MORTALITY (deaths) + CURE (recovery)</text>
          <text x="64" y="234" fontSize="3" fontWeight="700" className="fill-muted-foreground">the level rises when inflow &gt; outflow — and every</text>
          <text x="64" y="247" fontSize="3" fontWeight="700" className="fill-muted-foreground">one of the 8 situations moves the level</text>
          <text x="64" y="272" fontSize="3.4" fontWeight="800" className="fill-foreground">Prevalence</text>
          <line x1="64" y1="277" x2="140" y2="277" className="stroke-foreground" strokeWidth="1.2" />
          <text x="64" y="289" fontSize="3.4" fontWeight="800" className="fill-foreground">1 – prevalence</text>
          <text x="150" y="282" fontSize="3.4" fontWeight="800" className="fill-foreground">=</text>
          <text x="162" y="282" fontSize="3.4" fontWeight="800" className="fill-foreground">Incidence rate × average duration</text>
          <text x="162" y="294" fontSize="3.4" fontWeight="800" className="fill-foreground">of disease</text>
          <text x="64" y="315" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">simplified: Prevalence = incidence × duration of the disease.</text>
          <text x="64" y="332" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">steady state: the level ≈ faucet × stay</text>
          <text x="64" y="352" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the printed identity, stacked as in the print (see band below)</text>
        </g>

        {/* INFLOW 1 — Incidence, the faucet */}
        <g>
          <text x="330" y="95" fontSize="5.2" fontWeight="800" className="fill-brand">Incidence</text>
          <text x="330" y="107" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the faucet of new cases</text>
          <rect x="330" y="112" width="12" height="34" className="fill-card stroke-foreground" />
          <rect x="330" y="110" width="46" height="12" className="fill-card stroke-foreground" />
          <circle cx="384" cy="132" r="2.5" className="fill-brand" />
          <circle cx="396" cy="150" r="2.5" className="fill-brand" />
          <circle cx="408" cy="166" r="2.5" className="fill-brand" />
          <circle cx="420" cy="180" r="2.5" className="fill-brand" />
          <path d="M 424 178 L 432 192 L 436 176 Z" className="fill-brand" />
        </g>

        {/* INFLOW 2 — Recurrence, the return loop */}
        <g>
          <text x="800" y="95" fontSize="5.2" fontWeight="800" className="fill-brand">Recurrence</text>
          <text x="800" y="107" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the loop — relapses re-enter the pool from the cure side</text>
          <path d="M 795 355 C 945 345, 955 150, 768 132 C 740 128, 726 146, 734 164" className="stroke-brand" strokeWidth="3" fill="none" />
          <path d="M 727 162 L 735 176 L 742 161 Z" className="fill-brand" />
        </g>

        {/* the pool itself */}
        <g>
          <rect x="400" y="165" width="360" height="190" rx="16" className="fill-brand-soft/50 stroke-brand" strokeWidth="2" />
          <path d="M 420 225 Q 445 217 470 225 T 520 225 T 570 225 T 620 225 T 670 225 T 720 225" className="stroke-brand" strokeWidth="1" fill="none" />
          <path d="M 430 300 Q 455 292 480 300 T 530 300 T 580 300 T 630 300 T 680 300" className="stroke-brand" strokeWidth="1" fill="none" />
          <text x="580" y="258" textAnchor="middle" fontSize="11" fontWeight="800" className="fill-brand">Prevalence</text>
          <text x="580" y="276" textAnchor="middle" fontSize="3" fontWeight="700" className="fill-foreground/75"># of existing cases (at a point in time)</text>
          <text x="580" y="290" textAnchor="middle" fontSize="3" fontWeight="700" className="fill-foreground/75">Total # of people in a population</text>
        </g>

        {/* OUTFLOW 1 — Mortality, the left drain */}
        <g>
          <rect x="452" y="355" width="40" height="14" className="fill-card stroke-warning" />
          <line x1="472" y1="372" x2="472" y2="400" className="stroke-warning" strokeWidth="1.6" />
          <path d="M 466 398 L 472 410 L 478 398 Z" className="fill-warning" />
          <circle cx="460" cy="420" r="2" className="fill-warning" />
          <circle cx="484" cy="418" r="2" className="fill-warning" />
          <circle cx="472" cy="430" r="2" className="fill-warning" />
          <text x="420" y="448" fontSize="5.2" fontWeight="800" className="fill-warning">Mortality</text>
          <text x="420" y="460" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">drain — cases leave by dying</text>
        </g>

        {/* OUTFLOW 2 — Cure, the right drain */}
        <g>
          <rect x="668" y="355" width="40" height="14" className="fill-card stroke-warning" />
          <line x1="688" y1="372" x2="688" y2="400" className="stroke-warning" strokeWidth="1.6" />
          <path d="M 682 398 L 688 410 L 694 398 Z" className="fill-warning" />
          <circle cx="676" cy="420" r="2" className="fill-warning" />
          <circle cx="700" cy="418" r="2" className="fill-warning" />
          <circle cx="688" cy="430" r="2" className="fill-warning" />
          <text x="640" y="448" fontSize="5.2" fontWeight="800" className="fill-warning">Cure</text>
          <text x="640" y="460" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">drain — cases leave by recovering</text>
        </g>

        {/* the zone strip */}
        <line x1="52" y1="472" x2="1050" y2="472" className="stroke-border" strokeWidth="1" />
        <text x="52" y="486" fontSize="3.4" fontWeight="800" className="fill-foreground">PREVALENCE MOVES IN ALL 8 SITUATIONS — the level is downstream of both levers; incidence moves only when the flow of new cases (or the counting) changes</text>
        <text x="640" y="486" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">KYP color coding: blue streams fill the pool · amber drains empty it</text>
      </g>

      {/* ===== ZONE B — THE TWO FORMULAS + THE RELATIONSHIP ===== */}
      <g>
        <rect x="36" y="500" width="1030" height="330" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="522" fontSize="5.4" fontWeight="800" className="fill-foreground">THE TWO FORMULAS — a flow and a stock (the page&apos;s own words)</text>
        <text x="52" y="533" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">stacked fractions as printed — the margin sentences carried attributed (First Aid&apos;s red wordplay in print)</text>

        {/* Card 1 — Incidence */}
        <g>
          <rect x="52" y="548" width="490" height="150" rx="10" className="fill-card stroke-border" />
          <text x="64" y="568" fontSize="4.6" fontWeight="800" className="fill-brand">INCIDENCE — the flow of new cases</text>
          <text x="64" y="596" fontSize="4.2" fontWeight="800" className="fill-foreground">Incidence =</text>
          <text x="180" y="590" fontSize="3.6" fontWeight="700" className="fill-foreground"># of new cases</text>
          <line x1="178" y1="595" x2="242" y2="595" className="stroke-foreground" strokeWidth="1.2" />
          <text x="180" y="608" fontSize="3.6" fontWeight="700" className="fill-foreground"># of people at risk</text>
          <rect x="270" y="582" width="92" height="18" rx="6" className="fill-brand-soft stroke-brand" />
          <text x="316" y="594" textAnchor="middle" fontSize="3.2" fontWeight="700" className="fill-brand">(per unit of time)</text>
          <text x="64" y="634" fontSize="3.4" fontWeight="800" className="fill-emergency">“Incidence looks at new cases (incidents).” — First Aid&apos;s own margin sentence</text>
          <text x="64" y="652" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">numerator: NEW cases only · denominator: people AT RISK — not the whole population · a rate over time</text>
          <text x="64" y="670" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">harvested by the COHORT study (disease incidence — book 256&apos;s table)</text>
        </g>

        {/* Card 2 — Prevalence */}
        <g>
          <rect x="566" y="548" width="490" height="150" rx="10" className="fill-card stroke-border" />
          <text x="578" y="568" fontSize="4.6" fontWeight="800" className="fill-brand">PREVALENCE — the stock of existing cases</text>
          <text x="578" y="596" fontSize="4.2" fontWeight="800" className="fill-foreground">Prevalence =</text>
          <text x="640" y="590" fontSize="3.6" fontWeight="700" className="fill-foreground"># of existing cases</text>
          <line x1="638" y1="595" x2="712" y2="595" className="stroke-foreground" strokeWidth="1.2" />
          <text x="640" y="608" fontSize="3.6" fontWeight="700" className="fill-foreground">Total # of people in a population</text>
          <rect x="740" y="582" width="104" height="18" rx="6" className="fill-brand-soft stroke-brand" />
          <text x="792" y="594" textAnchor="middle" fontSize="3.2" fontWeight="700" className="fill-brand">(at a point in time)</text>
          <text x="578" y="634" fontSize="3.4" fontWeight="800" className="fill-emergency">“Prevalence looks at all current cases.” — First Aid&apos;s own margin sentence</text>
          <text x="578" y="652" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">numerator: EXISTING cases, new and old alike · denominator: everyone · a snapshot at one instant</text>
          <text x="578" y="670" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">harvested by the CROSS-SECTIONAL study (disease prevalence — book 256&apos;s table)</text>
        </g>

        {/* the relationship band */}
        <g>
          <rect x="52" y="714" width="1002" height="100" rx="10" className="fill-card stroke-border" />
          <text x="64" y="734" fontSize="4.2" fontWeight="800" className="fill-foreground">THE RELATIONSHIP — level = faucet × stay (stacked fraction printed LEFT of the equals sign)</text>
          <text x="64" y="758" fontSize="3.8" fontWeight="800" className="fill-foreground">Prevalence</text>
          <line x1="64" y1="763" x2="108" y2="763" className="stroke-foreground" strokeWidth="1.2" />
          <text x="64" y="776" fontSize="3.8" fontWeight="800" className="fill-foreground">1 – prevalence</text>
          <text x="118" y="770" fontSize="3.8" fontWeight="800" className="fill-foreground">=</text>
          <text x="130" y="770" fontSize="3.8" fontWeight="800" className="fill-foreground">Incidence rate × average duration of disease</text>
          <text x="240" y="758" fontSize="3" fontWeight="700" className="fill-muted-foreground">simplified:</text>
          <text x="240" y="774" fontSize="3.8" fontWeight="800" className="fill-brand">Prevalence = incidence × duration of the disease.</text>
          <rect x="700" y="744" width="330" height="26" rx="8" className="fill-warning-soft/50 stroke-warning" />
          <text x="865" y="760" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-warning">CHRONIC (eg, diabetes): Prevalence &gt; incidence — large # of existing cases</text>
          <rect x="700" y="778" width="330" height="26" rx="8" className="fill-success-soft/50 stroke-success" />
          <text x="865" y="794" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-success">SHORT DURATION (eg, common cold): Prevalence ≈ incidence</text>
          <text x="64" y="800" fontSize="3.4" fontWeight="700" className="fill-foreground">Prevalence ∼ pretest probability. ↑ prevalence → ↑ PPV and ↓ NPV. — the margin bridge to testing: predictive values move with the population, sensitivity and specificity never do</text>
        </g>
      </g>

      {/* ===== ZONE C — THE SITUATION TABLE ===== */}
      <g>
        <rect x="36" y="840" width="1030" height="450" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="862" fontSize="5.4" fontWeight="800" className="fill-foreground">THE SITUATION TABLE — 8 rows, printed order, every glyph exactly as printed</text>
        <text x="52" y="873" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">— = no effect (the printed em dash) · lever tags FLOW / STAY / COUNT are KYP annotations</text>

        {/* header row */}
        <text x="64" y="903" fontSize="4" fontWeight="800" className="fill-foreground">SITUATION</text>
        <text x="770" y="903" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">INCIDENCE</text>
        <text x="950" y="903" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">PREVALENCE</text>
        <line x1="676" y1="886" x2="676" y2="1280" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="856" y1="886" x2="856" y2="1280" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="52" y1="912" x2="1040" y2="912" className="stroke-foreground" strokeWidth="1.5" />

        {/* the 8 rows */}
        {SITUATIONS.map((r, k) => {
          const top = 912 + 46 * k;
          return (
            <g key={r.text}>
              {k > 0 && <line x1="52" y1={top} x2="1040" y2={top} className="stroke-border" strokeWidth="1" strokeDasharray="2 3" />}
              <text x="64" y={top + 21} fontSize="3.4" fontWeight="700" className="fill-foreground">{r.text}</text>
              <text x="64" y={top + 35} fontSize="2.6" fontWeight="700" className="fill-muted-foreground">{r.why}</text>
              <rect x="575" y={top + 9} width="80" height="16" rx="5" className={leverBox(r.lever)} />
              <text x="615" y={top + 20.5} textAnchor="middle" fontSize="2.9" fontWeight="800" className={leverClass(r.lever)}>{r.lever}</text>
              <text x="770" y={top + 27} textAnchor="middle" fontSize="7" fontWeight="800" className={glyphClass(r.inc)}>{r.inc}</text>
              <text x="950" y={top + 27} textAnchor="middle" fontSize="7" fontWeight="800" className={glyphClass(r.prev)}>{r.prev}</text>
            </g>
          );
        })}
        <line x1="52" y1="1280" x2="1040" y2="1280" className="stroke-foreground" strokeWidth="1.5" />
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1300" width="1054" height="74" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1318" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 284 / book 262 (Public Health Sciences — Epidemiology and Biostatistics: Incidence vs prevalence)</text>
        <text x="42" y="1329" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the pure-vector bathtub figure, the typographic formulas, and the color-coded table (plain uppercase headers, thin</text>
        <text x="42" y="1339" fontSize="3.8" className="fill-muted-foreground">rules, no zebra; VLM-read at 120dpi + a 300dpi zoom pass, staging-pubh10/vlm-census.txt). ORIGINAL KYP ADAPTATION + REDRAW — the pool, the card layout, and</text>
        <text x="42" y="1349" fontSize="3.8" className="fill-muted-foreground">the glyph band are KYP&apos;s; every printed label is preserved (all 5 figure labels, all 3 formulas, all 8 rows with their exact ↑/↓/— glyphs) — the full table is</text>
        <text x="42" y="1359" fontSize="3.8" className="fill-muted-foreground">carried verbatim in the note&apos;s table block. ADJUDICATIONS (print governs): RECURRENCE is a second INFLOW (the loop re-enters the pool); the identity&apos;s stacked</text>
        <text x="42" y="1369" fontSize="3.8" className="fill-muted-foreground">fraction prints LEFT of the equals sign — Prevalence / (1 – prevalence) = Incidence rate × average duration of disease.</text>
      </g>
    </svg>
  );
};
