/* Public Health — PUBH batch 3: Off-label drug use + the Bradford Hill
 * criteria (book 257 LOWER, pdf 279 — a PINNED PAGE-SPLIT page, the p252
 * pharmacology convention: this topic's scope STARTS at the "Off-label drug
 * use" navy heading and runs to the page footer; the upper portion —
 * "Clinical therapeutic trial" + the five-phase "Can I SWIM?" figure —
 * belongs to clinical-therapeutic-trials, produced in parallel as pubh2).
 * Census (pdfimages): ZERO raster images on pdf 279 — pure text and vector;
 * VLM-read at 120dpi (glm-4.6v, staging-pubh3/vlm-census.txt): navy bold
 * term headings ("Off-label drug use", "Bradford Hill criteria", and each
 * of the nine criterion names), definitions in the right column, thin light
 * rules between rows, NO red text in the lower portion (unlike the upper
 * figure's red "Work?"/"Market?"), no margin notes, no mnemonics, no
 * asterisk footnotes, no images. This is an ORIGINAL KYP ADAPTATION: the
 * off-label definition panel (the printed definition verbatim, the three
 * FDA-approval axes form/population group/dosage, the two printed reasons,
 * the printed tricyclic-antidepressant example), the "NECESSARY BUT NOT
 * SUFFICIENT" verdict band anchored on the printed lead-in verbatim, and
 * the nine criteria as a 3×3 card grid in printed order — every criterion
 * name and every printed definition preserved verbatim — with a vector
 * glyph per criterion and the MEASURE (strength · consistency · biological
 * gradient · experiment) / THINK (specificity · plausibility · coherence ·
 * analogy) / GATE (temporality) grouping, which is a KYP original decode
 * layer. The grouping, the glyphs, and this layout are KYP's; the printed
 * text is preserved and additionally carried verbatim in the note's table
 * blocks. Nothing is reproduced from the book; purely presentational (no
 * props, no hooks, no external images). */

export const BradfordHillMap = () => {
  const w = 1102;
  const h = 1120;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Bradford Hill criteria — judging causation: the off-label drug use panel (the FDA-approval axes form / population group / dosage, the two printed reasons, and the tricyclic-antidepressant example), the necessary-but-not-sufficient verdict band on the printed lead-in, and the nine criteria as a 3×3 card grid in printed order (Strength, Consistency, Specificity, Temporality, Biological gradient, Plausibility, Coherence, Experiment, Analogy) each with its printed definition and a vector glyph, grouped MEASURE / THINK / GATE — an original KYP diagram of book 257 lower." className="min-w-[1060px]">
      <title>Bradford Hill criteria — judging causation (original KYP diagram)</title>
      <desc>An original KYP adaptation of the lower portion of First Aid 2026 book page 257: the off-label drug use block (definition, two reasons, tricyclic-antidepressant example) and the nine Bradford Hill criteria with their printed one-line definitions, arranged as the off-label panel, the necessary-but-not-sufficient verdict band, and a 3×3 criteria grid grouped by the KYP MEASURE/THINK/GATE decoder.</desc>

      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Off-label use &amp; the Bradford Hill criteria — judging causation (original KYP diagram)</text>
        <rect x="770" y="25" width="292" height="18" rx="9" className="fill-brand-soft" />
        <text x="916" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">9 criteria · necessary but not sufficient</text>
      </g>

      {/* ===== ZONE A — OFF-LABEL DRUG USE ===== */}
      <g>
        <rect x="36" y="76" width="1030" height="188" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="98" fontSize="5.4" fontWeight="800" className="fill-foreground">OFF-LABEL DRUG USE — use beyond the FDA-approved label (the printed block)</text>
        <text x="52" y="110" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the printed block, carried verbatim: the definition → the two reasons → the tricyclic-antidepressant example</text>

        {/* left panel — the definition + the three approval axes */}
        <g>
          <rect x="52" y="122" width="486" height="130" rx="10" className="fill-card stroke-border" />
          <text x="66" y="142" fontSize="4.2" fontWeight="800" className="fill-foreground">THE DEFINITION (verbatim)</text>
          <text x="66" y="160" fontSize="3.6" fontWeight="700" className="fill-foreground">Use of a drug to treat a disease in a form, population group,</text>
          <text x="66" y="172" fontSize="3.6" fontWeight="700" className="fill-foreground">or dosage that is not specifically approved by the FDA.</text>
          <rect x="66" y="184" width="58" height="18" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="95" y="196" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-brand">FORM</text>
          <rect x="132" y="184" width="124" height="18" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="194" y="196" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-brand">POPULATION GROUP</text>
          <rect x="264" y="184" width="66" height="18" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="297" y="196" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-brand">DOSAGE</text>
          <text x="66" y="222" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">the three axes an FDA approval defines — off-label use crosses at least one (KYP decoder)</text>
          <text x="66" y="238" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">off-label ≠ illegal or experimental — it is prescribing beyond the label (KYP context)</text>
        </g>

        {/* right panel — the two printed reasons + the printed example */}
        <g>
          <rect x="556" y="122" width="494" height="130" rx="10" className="fill-card stroke-border" />
          <text x="570" y="142" fontSize="4.2" fontWeight="800" className="fill-foreground">THE TWO PRINTED REASONS + THE PRINTED EXAMPLE</text>
          <rect x="570" y="152" width="462" height="24" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="580" y="168" fontSize="3.3" fontWeight="700" className="fill-foreground">① treating an illness with NO approved pharmacologic treatment</text>
          <rect x="570" y="182" width="462" height="24" rx="6" className="fill-warning-soft/50 stroke-warning" />
          <text x="580" y="198" fontSize="3.3" fontWeight="700" className="fill-foreground">② exploring ALTERNATIVE treatments after failure of approved options</text>
          <rect x="570" y="212" width="462" height="26" rx="6" className="fill-success-soft/50 stroke-success" />
          <text x="580" y="229" fontSize="3.4" fontWeight="800" className="fill-success">PRINTED EXAMPLE — tricyclic antidepressants for neuropathic/chronic pain</text>
        </g>
      </g>

      {/* ===== ZONE B — THE VERDICT BAND ===== */}
      <g>
        <rect x="36" y="280" width="1030" height="92" rx="14" className="fill-card stroke-brand" />
        <text x="60" y="304" fontSize="3" fontWeight="800" className="fill-brand">THE VERDICT ON THE WHOLE GROUP</text>
        <text x="60" y="330" fontSize="8" fontWeight="800" className="fill-foreground">NECESSARY BUT NOT SUFFICIENT</text>
        <text x="60" y="350" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">limited support, never proof — the criteria are the bridge, not the destination (KYP gloss)</text>
        {/* association → causation glyph */}
        <rect x="228" y="322" width="80" height="22" rx="6" className="fill-secondary stroke-border" />
        <text x="268" y="336.5" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-foreground">association</text>
        <line x1="312" y1="333" x2="322" y2="333" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 320 329 L 328 333 L 320 337 Z" className="fill-foreground" />
        <rect x="330" y="322" width="80" height="22" rx="6" className="fill-brand-soft stroke-brand" />
        <text x="370" y="336.5" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-brand">causation</text>
        {/* divider */}
        <line x1="426" y1="296" x2="426" y2="356" className="stroke-border" strokeWidth="1.2" />
        {/* the printed lead-in, verbatim */}
        <text x="442" y="304" fontSize="3" fontWeight="800" className="fill-muted-foreground">THE PRINTED LEAD-IN (verbatim)</text>
        <text x="442" y="322" fontSize="3.6" fontWeight="700" className="fill-foreground">A group of principles that provide limited support (ie, necessary but not sufficient</text>
        <text x="442" y="334" fontSize="3.6" fontWeight="700" className="fill-foreground">criteria) for establishing evidence of a causal relationship between presumed cause and effect.</text>
        <text x="442" y="352" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">judged one criterion at a time below — none alone is sufficient, and the group itself is only limited support</text>
      </g>

      {/* ===== ZONE C — THE NINE CRITERIA, 3×3 ===== */}
      <g>
        <rect x="36" y="388" width="1030" height="650" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="410" fontSize="5.4" fontWeight="800" className="fill-foreground">THE NINE BRADFORD HILL CRITERIA — printed order, printed definitions (verbatim)</text>
        <rect x="52" y="416" width="12" height="10" rx="2" className="fill-brand" />
        <text x="70" y="424.5" fontSize="3.2" fontWeight="700" className="fill-foreground">MEASURED — strength · consistency · biological gradient · experiment (evidence you COUNT)</text>
        <rect x="400" y="416" width="12" height="10" rx="2" className="fill-warning" />
        <text x="418" y="424.5" fontSize="3.2" fontWeight="700" className="fill-foreground">THINKING — specificity · plausibility · coherence · analogy (evidence you REASON)</text>
        <rect x="750" y="416" width="12" height="10" rx="2" className="fill-success" />
        <text x="768" y="424.5" fontSize="3.2" fontWeight="700" className="fill-foreground">THE GATE — temporality (the one that must hold)</text>
        <text x="52" y="438" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">the MEASURE / THINK / GATE grouping and every glyph are KYP originals — each criterion name and definition is the printed text (grouping glosses = KYP context)</text>

        {[
          {
            n: 1, name: "Strength", group: "MEASURED",
            def: "Association does not necessarily imply causation, but the stronger the association, the more evidence for causation.",
            asks: ["HOW BIG is the association?", "the stronger it is, the more", "evidence for causation"],
            gloss: "the page’s own caveat: association ≠ causation — strength alone never proves it",
          },
          {
            n: 2, name: "Consistency", group: "MEASURED",
            def: "Repeated observations of the findings in multiple distinct samples.",
            asks: ["Does it REPLICATE?", "the same finding, again, in", "multiple distinct samples"],
            gloss: "replication across populations and settings — meta-analysis territory (KYP link)",
          },
          {
            n: 3, name: "Specificity", group: "THINKING",
            def: "The more specific the presumed cause is to the effect, the stronger the evidence for causation.",
            asks: ["ONE cause → ONE effect?", "the more specific the cause is", "to the effect, the stronger"],
            gloss: "the weakest fit for multifactorial disease — many causes, many effects (KYP context)",
          },
          {
            n: 4, name: "Temporality", group: "GATE",
            def: "The presumed cause precedes the effect by an expected amount of time.",
            asks: ["Does the cause come FIRST?", "preceding the effect by an", "expected amount of time"],
            gloss: "the only criterion that MUST hold — reverse the order and causation fails (KYP gloss)",
          },
          {
            n: 5, name: "Biological gradient", group: "MEASURED",
            def: "Greater effect observed with greater exposure to the presumed cause (dose-response relationship).",
            asks: ["Is there a DOSE-RESPONSE?", "greater effect observed with", "greater exposure"],
            gloss: "a dose-response curve is the classic supporting-evidence vignette (KYP gloss)",
          },
          {
            n: 6, name: "Plausibility", group: "THINKING",
            def: "A conceivable mechanism exists by which the cause may lead to the effect.",
            asks: ["Is there a MECHANISM?", "a conceivable path by which", "the cause may lead to the effect"],
            gloss: "mechanism from pathophysiology — plausibility is coherence’s mechanistic twin (KYP)",
          },
          {
            n: 7, name: "Coherence", group: "THINKING",
            def: "The presumed cause and effect do not conflict with existing scientific consensus.",
            asks: ["Does it CONFLICT?", "it must not conflict with", "existing scientific consensus"],
            gloss: "fits the known natural history and lab findings of the disease (KYP gloss)",
          },
          {
            n: 8, name: "Experiment", group: "MEASURED",
            def: "Empirical evidence supporting the presumed cause and effect (eg, animal studies, in vitro studies).",
            asks: ["Can it be SHOWN?", "empirical evidence — animal", "studies, in vitro studies"],
            gloss: "the interventional criterion — the RCT’s echo inside a causal judgment (KYP link)",
          },
          {
            n: 9, name: "Analogy", group: "THINKING",
            def: "The presumed cause and effect are comparable to a similar, established cause and effect.",
            asks: ["SEEN BEFORE?", "comparable to a similar,", "established cause and effect"],
            gloss: "argues from a parallel case — the softest of the nine (KYP context)",
          },
        ].map((c, i) => {
          const X = [54, 391, 728][i % 3];
          const Y = [448, 646, 844][Math.floor(i / 3)];
          const S = c.group === "MEASURED"
            ? { stroke: "stroke-brand", fill: "fill-brand" }
            : c.group === "THINKING"
              ? { stroke: "stroke-warning", fill: "fill-warning" }
              : { stroke: "stroke-success", fill: "fill-success" };
          return (
            <g key={`crit-${c.n}`}>
              <rect x={X} y={Y} width="320" height="186" rx="10" className={`fill-card ${S.stroke}`} />
              <circle cx={X + 25} cy={Y + 23} r="13" className={S.fill} />
              <text x={X + 25} y={Y + 26.5} textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-card">{c.n}</text>
              <text x={X + 46} y={Y + 28} fontSize="4.8" fontWeight="800" className={S.fill}>{c.name}</text>
              <rect x={X + 270} y={Y + 14} width="36" height="13" rx="6" className={S.fill} />
              <text x={X + 288} y={Y + 23.5} textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-card">{c.group === "GATE" ? "THE GATE" : c.group}</text>
              <text x={X + 14} y={Y + 52} fontSize="3.3" fontWeight="700" className="fill-foreground">{c.def}</text>
              <line x1={X + 14} y1={Y + 70} x2={X + 306} y2={Y + 70} className="stroke-border" strokeWidth="1" />

              {/* glyph (left) + the question it asks (right) */}
              {c.n === 1 && (
                <g>
                  <line x1={X + 22} y1={Y + 140} x2={X + 126} y2={Y + 140} className="stroke-foreground" strokeWidth="1.2" />
                  <rect x={X + 40} y={Y + 116} width="14" height="24" className="fill-secondary stroke-border" />
                  <rect x={X + 78} y={Y + 94} width="14" height="46" className="fill-brand" />
                  <text x={X + 47} y={Y + 152} textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">weak</text>
                  <text x={X + 85} y={Y + 152} textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-brand">strong</text>
                </g>
              )}
              {c.n === 2 && (
                <g>
                  {[18, 58, 98].map((dx, j) => (
                    <g key={`sam-${j}`}>
                      <rect x={X + dx} y={Y + 92} width="32" height="36" rx="4" className="fill-card stroke-border" />
                      <circle cx={X + dx + 16} cy={Y + 106} r="5" className="fill-brand" />
                      <rect x={X + dx + 8} y={Y + 116} width="16" height="5" rx="2" className="fill-brand" />
                    </g>
                  ))}
                  <text x={X + 18} y={Y + 146} fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the same finding, 3 distinct samples</text>
                </g>
              )}
              {c.n === 3 && (
                <g>
                  <circle cx={X + 26} cy={Y + 114} r="7" className="fill-brand" />
                  <text x={X + 26} y={Y + 134} textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">cause</text>
                  <line x1={X + 38} y1={Y + 114} x2={X + 62} y2={Y + 114} className="stroke-foreground" strokeWidth="1.4" />
                  <path d={`M ${X + 59} ${Y + 110} L ${X + 67} ${Y + 114} L ${X + 59} ${Y + 118} Z`} className="fill-foreground" />
                  <rect x={X + 66} y={Y + 100} width="40" height="28" rx="5" className="fill-card stroke-brand" />
                  <circle cx={X + 86} cy={Y + 111} r="5" className="stroke-brand" strokeWidth="1.2" fill="none" />
                  <rect x={X + 81} y={Y + 115} width="10" height="8" rx="2" className="fill-brand" />
                  <text x={X + 86} y={Y + 140} textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">one effect</text>
                </g>
              )}
              {c.n === 4 && (
                <g>
                  <text x={X + 70} y={Y + 88} textAnchor="middle" fontSize="2.4" fontWeight="700" className="fill-muted-foreground">expected time</text>
                  <circle cx={X + 70} cy={Y + 99} r="8" className="stroke-foreground" strokeWidth="1.2" fill="none" />
                  <line x1={X + 70} y1={Y + 99} x2={X + 70} y2={Y + 93.5} className="stroke-foreground" strokeWidth="1.2" />
                  <line x1={X + 70} y1={Y + 99} x2={X + 74.5} y2={Y + 99} className="stroke-foreground" strokeWidth="1.2" />
                  <circle cx={X + 28} cy={Y + 120} r="7" className="fill-success" />
                  <circle cx={X + 112} cy={Y + 120} r="7" className="fill-card stroke-success" strokeWidth="1.4" />
                  <line x1={X + 38} y1={Y + 120} x2={X + 102} y2={Y + 120} className="stroke-success" strokeWidth="1.6" />
                  <path d={`M ${X + 99} ${Y + 116} L ${X + 107} ${Y + 120} L ${X + 99} ${Y + 124} Z`} className="fill-success" />
                  <text x={X + 28} y={Y + 140} textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">cause</text>
                  <text x={X + 112} y={Y + 140} textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">effect</text>
                </g>
              )}
              {c.n === 5 && (
                <g>
                  <rect x={X + 24} y={Y + 130} width="14" height="10" className="fill-brand" />
                  <rect x={X + 46} y={Y + 118} width="14" height="22" className="fill-brand" />
                  <rect x={X + 68} y={Y + 106} width="14" height="34" className="fill-brand" />
                  <rect x={X + 90} y={Y + 94} width="14" height="46" className="fill-brand" />
                  <line x1={X + 20} y1={Y + 140} x2={X + 126} y2={Y + 140} className="stroke-foreground" strokeWidth="1.2" />
                  <text x={X + 24} y={Y + 152} fontSize="2.6" fontWeight="700" className="fill-muted-foreground">dose →</text>
                  <text x={X + 97} y={Y + 88} fontSize="2.6" fontWeight="700" className="fill-brand">effect ↑</text>
                </g>
              )}
              {c.n === 6 && (
                <g>
                  <rect x={X + 16} y={Y + 104} width="32" height="20" rx="4" className="fill-card stroke-border" />
                  <text x={X + 32} y={Y + 117.5} textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">cause</text>
                  <line x1={X + 50} y1={Y + 114} x2={X + 58} y2={Y + 114} className="stroke-foreground" strokeWidth="1.4" />
                  <path d={`M ${X + 56} ${Y + 110} L ${X + 63} ${Y + 114} L ${X + 56} ${Y + 118} Z`} className="fill-foreground" />
                  <circle cx={X + 74} cy={Y + 114} r="11" className="stroke-foreground" strokeWidth="1.4" fill="none" />
                  <line x1={X + 74} y1={Y + 101} x2={X + 74} y2={Y + 107} className="stroke-foreground" strokeWidth="1.4" />
                  <line x1={X + 74} y1={Y + 121} x2={X + 74} y2={Y + 127} className="stroke-foreground" strokeWidth="1.4" />
                  <line x1={X + 61} y1={Y + 114} x2={X + 67} y2={Y + 114} className="stroke-foreground" strokeWidth="1.4" />
                  <line x1={X + 81} y1={Y + 114} x2={X + 87} y2={Y + 114} className="stroke-foreground" strokeWidth="1.4" />
                  <circle cx={X + 74} cy={Y + 114} r="3" className="fill-foreground" />
                  <line x1={X + 88} y1={Y + 114} x2={X + 96} y2={Y + 114} className="stroke-foreground" strokeWidth="1.4" />
                  <path d={`M ${X + 94} ${Y + 110} L ${X + 101} ${Y + 114} L ${X + 94} ${Y + 118} Z`} className="fill-foreground" />
                  <rect x={X + 102} y={Y + 104} width="36" height="20" rx="4" className="fill-card stroke-border" />
                  <text x={X + 120} y={Y + 117.5} textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">effect</text>
                  <text x={X + 16} y={Y + 144} fontSize="2.6" fontWeight="700" className="fill-muted-foreground">the mechanism</text>
                </g>
              )}
              {c.n === 7 && (
                <g>
                  <rect x={X + 16} y={Y + 96} width="72" height="44" rx="6" className="fill-card stroke-border" />
                  <text x={X + 52} y={Y + 112} textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">existing</text>
                  <text x={X + 52} y={Y + 121} textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">scientific</text>
                  <text x={X + 52} y={Y + 130} textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">consensus</text>
                  <line x1={X + 99} y1={Y + 118} x2={X + 92} y2={Y + 118} className="stroke-success" strokeWidth="1.6" />
                  <path d={`M ${X + 96} ${Y + 114} L ${X + 88} ${Y + 118} L ${X + 96} ${Y + 122} Z`} className="fill-success" />
                  <rect x={X + 104} y={Y + 106} width="26" height="24" rx="4" className="fill-success" />
                  <circle cx={X + 117} cy={Y + 106} r="5" className="fill-success" />
                  <text x={X + 16} y={Y + 152} fontSize="2.6" fontWeight="700" className="fill-muted-foreground">fits — no conflict</text>
                </g>
              )}
              {c.n === 8 && (
                <g>
                  <path d={`M ${X + 52} ${Y + 100} L ${X + 46} ${Y + 132} L ${X + 78} ${Y + 132} L ${X + 72} ${Y + 100} Z`} className="stroke-foreground" strokeWidth="1.4" fill="none" />
                  <line x1={X + 52} y1={Y + 100} x2={X + 72} y2={Y + 100} className="stroke-foreground" strokeWidth="1.4" />
                  <path d={`M ${X + 49} ${Y + 124} L ${X + 75} ${Y + 124} L ${X + 78} ${Y + 132} L ${X + 46} ${Y + 132} Z`} className="fill-brand" />
                  <circle cx={X + 58} cy={Y + 128} r="1.6" className="fill-card" />
                  <circle cx={X + 64} cy={Y + 126} r="1.2" className="fill-card" />
                  <ellipse cx={X + 104} cy={Y + 130} rx="16" ry="5.5" className="stroke-foreground" strokeWidth="1.2" fill="none" />
                  <ellipse cx={X + 104} cy={Y + 127} rx="10" ry="3" className="fill-brand-soft" />
                  <text x={X + 62} y={Y + 146} textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">animal</text>
                  <text x={X + 104} y={Y + 146} textAnchor="middle" fontSize="2.6" fontWeight="700" className="fill-muted-foreground">in vitro</text>
                </g>
              )}
              {c.n === 9 && (
                <g>
                  <rect x={X + 16} y={Y + 92} width="28" height="16" rx="3" className="fill-secondary stroke-border" />
                  <line x1={X + 46} y1={Y + 100} x2={X + 54} y2={Y + 100} className="stroke-foreground" strokeWidth="1.2" />
                  <path d={`M ${X + 52} ${Y + 96.5} L ${X + 58.5} ${Y + 100} L ${X + 52} ${Y + 103.5} Z`} className="fill-foreground" />
                  <rect x={X + 58} y={Y + 92} width="28" height="16" rx="3" className="fill-secondary stroke-border" />
                  <text x={X + 16} y={Y + 118} fontSize="2.4" fontWeight="700" className="fill-muted-foreground">established</text>
                  <rect x={X + 16} y={Y + 124} width="28" height="16" rx="3" className="fill-card stroke-warning" strokeDasharray="3 2" />
                  <line x1={X + 46} y1={Y + 132} x2={X + 54} y2={Y + 132} className="stroke-warning" strokeWidth="1.2" strokeDasharray="3 2" />
                  <path d={`M ${X + 52} ${Y + 128.5} L ${X + 58.5} ${Y + 132} L ${X + 52} ${Y + 135.5} Z`} className="fill-warning" />
                  <rect x={X + 58} y={Y + 124} width="28" height="16" rx="3" className="fill-card stroke-warning" strokeDasharray="3 2" />
                  <text x={X + 16} y={Y + 154} fontSize="2.4" fontWeight="700" className="fill-muted-foreground">the new pair</text>
                  <text x={X + 98} y={Y + 122} fontSize="5" fontWeight="800" className="fill-foreground">≈</text>
                </g>
              )}

              <text x={X + 150} y={Y + 88} fontSize="2.7" fontWeight="800" className="fill-muted-foreground">ASKS</text>
              {c.asks.map((line, j) => (
                <text key={`ask-${c.n}-${j}`} x={X + 150} y={Y + 102 + j * 11} fontSize="3.1" fontWeight="700" className="fill-foreground">{line}</text>
              ))}
              <text x={X + 14} y={Y + 172} fontSize="2.9" fontWeight="700" className="fill-muted-foreground">{c.gloss}</text>
            </g>
          );
        })}
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1052" width="1054" height="58" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1070" fontSize="3.7" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 279 / book 257, LOWER portion (Public Health Sciences — Epidemiology and Biostatistics: Off-label drug use;</text>
        <text x="42" y="1081" fontSize="3.7" className="fill-muted-foreground">Bradford Hill criteria). PINNED SPLIT: this topic starts at the “Off-label drug use” navy heading — the upper portion (Clinical therapeutic trial + the “Can I SWIM?” figure)</text>
        <text x="42" y="1092" fontSize="3.7" className="fill-muted-foreground">belongs to clinical-therapeutic-trials. Census (pdfimages): ZERO raster images; VLM-read at 120dpi (glm-4.6v, staging-pubh3/vlm-census.txt): navy bold term headings, thin</text>
        <text x="42" y="1103" fontSize="3.7" className="fill-muted-foreground">rules between rows, no red text, no mnemonics or images below the split. ORIGINAL KYP ADAPTATION — layout, glyphs, and grouping are KYP&apos;s; all printed text is preserved.</text>
      </g>
    </svg>
  );
};
