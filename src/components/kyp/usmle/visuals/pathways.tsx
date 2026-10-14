"use client";

// Original KYP pathway & mechanism visuals.
// All SVGs use theme tokens (currentColor + Tailwind color classes),
// so they stay readable in light AND dark mode.

// ---------------------------------------------------------------------------
// Glycolysis regulation map
// ---------------------------------------------------------------------------

export function GlycolysisRegulationMap() {
  const w = 640;
  const h = 560;
  const midX = 210;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Glycolysis regulation map" className="min-w-[560px]">
      {/* central pathway */}
      <g fontSize="12" fontWeight="600">
        <rect x={midX - 90} y="16" width="180" height="34" rx="8" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x={midX} y="37" textAnchor="middle" className="fill-foreground">Glucose</text>

        <rect x={midX - 90} y="82" width="180" height="34" rx="8" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x={midX} y="103" textAnchor="middle" className="fill-foreground">Glucose-6-P</text>

        <rect x={midX - 90} y="148" width="180" height="34" rx="8" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x={midX} y="169" textAnchor="middle" className="fill-foreground">Fructose-6-P</text>

        <rect x={midX - 100} y="214" width="200" height="34" rx="8" className="fill-brand-soft stroke-brand" strokeWidth="1.6" />
        <text x={midX} y="235" textAnchor="middle" className="fill-brand">Fructose-1,6-BP</text>

        <rect x={midX - 90} y="280" width="180" height="34" rx="8" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x={midX} y="301" textAnchor="middle" className="fill-foreground">Glyceraldehyde-3-P</text>

        <rect x={midX - 90} y="362" width="180" height="34" rx="8" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x={midX} y="383" textAnchor="middle" className="fill-foreground">2 × PEP →</text>

        <rect x={midX - 90} y="428" width="180" height="34" rx="8" className="fill-neural-soft stroke-neural" strokeWidth="1.6" />
        <text x={midX} y="449" textAnchor="middle" className="fill-neural">2 × Pyruvate</text>
      </g>

      {/* arrows */}
      <g stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="currentColor">
        {[50, 116, 182, 248, 330, 396].map((y) => (
          <g key={y}>
            <line x1={midX} y1={y} x2={midX} y2={y + 14} />
            <path d={`M${midX} ${y + 22} l-4.5 -8 h9 z`} stroke="none" />
          </g>
        ))}
      </g>

      {/* enzyme labels on arrows */}
      <g fontSize="10.5" fontWeight="700">
        <text x={midX + 12} y="64" className="fill-foreground/80">Hexokinase / Glucokinase (−1 ATP)</text>
        <text x={midX + 12} y="130" className="fill-foreground/80">Phosphoglucose isomerase</text>
        <text x={midX + 12} y="196" className="fill-brand">PFK-1 ★ rate-limiting (−1 ATP)</text>
        <text x={midX + 12} y="352" className="fill-warning">ATP made: 1,3-BPG→3-PG and PEP→pyruvate (2 × 2 ATP)</text>
      </g>

      {/* regulators of PFK-1 */}
      <g fontSize="10.5">
        <rect x="8" y="200" width="92" height="20" rx="10" className="fill-brand-soft" />
        <text x="54" y="214" textAnchor="middle" className="fill-brand" fontWeight="700">⊕ AMP, F-2,6-BP</text>
        <line x1="100" y1="210" x2={midX - 104} y2="224" stroke="currentColor" strokeWidth="1.2" className="text-brand" strokeDasharray="3 3" />
        <rect x="8" y="236" width="92" height="20" rx="10" className="fill-emergency-soft" />
        <text x="54" y="250" textAnchor="middle" className="fill-emergency" fontWeight="700">⊝ ATP, citrate</text>
        <line x1="100" y1="246" x2={midX - 104} y2="232" stroke="currentColor" strokeWidth="1.2" className="text-emergency" strokeDasharray="3 3" />
      </g>

      {/* pyruvate kinase regulation */}
      <g fontSize="10.5">
        <rect x="430" y="404" width="112" height="20" rx="10" className="fill-brand-soft" />
        <text x="486" y="418" textAnchor="middle" className="fill-brand" fontWeight="700">⊕ F-1,6-BP (feed-forward)</text>
        <rect x="430" y="432" width="112" height="20" rx="10" className="fill-emergency-soft" />
        <text x="486" y="446" textAnchor="middle" className="fill-emergency" fontWeight="700">⊝ ATP, alanine, glucagon, epi</text>
      </g>

      {/* F2,6BP switch panel */}
      <g>
        <rect x="404" y="60" width="222" height="216" rx="12" className="fill-card stroke-neural/50" strokeWidth="1.4" />
        <text x="515" y="84" textAnchor="middle" fontSize="11.5" fontWeight="800" className="fill-neural">
          THE F-2,6-BP SWITCH
        </text>
        <text x="515" y="102" textAnchor="middle" fontSize="10" className="fill-muted-foreground">
          PFK-2 / FBPase-2 — one bifunctional enzyme
        </text>
        {/* fed */}
        <rect x="420" y="112" width="94" height="18" rx="9" className="fill-brand-soft" />
        <text x="467" y="125" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-brand">↑ Insulin (fed)</text>
        <text x="467" y="150" textAnchor="middle" fontSize="10" className="fill-foreground/85">PFK-2 active</text>
        <text x="467" y="166" textAnchor="middle" fontSize="10" className="fill-foreground/85">→ ↑ F-2,6-BP</text>
        <text x="467" y="184" textAnchor="middle" fontSize="10.5" fontWeight="700" className="fill-brand">→ GLYCOLYSIS ON</text>
        <text x="467" y="200" fontSize="9.5" fontStyle="italic" className="fill-muted-foreground">“Prince FredericK</text>
        <text x="467" y="212" fontSize="9.5" fontStyle="italic" className="fill-muted-foreground">works only when fed”</text>
        {/* fasting */}
        <rect x="522" y="112" width="94" height="18" rx="9" className="fill-warning-soft" />
        <text x="569" y="125" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-warning">↑ Glucagon (fasting)</text>
        <text x="569" y="150" textAnchor="middle" fontSize="10" className="fill-foreground/85">PKA → FBPase-2 active</text>
        <text x="569" y="166" textAnchor="middle" fontSize="10" className="fill-foreground/85">→ ↓ F-2,6-BP</text>
        <text x="569" y="184" textAnchor="middle" fontSize="10.5" fontWeight="700" className="fill-warning">→ GLUCONEOGENESIS</text>
        <text x="569" y="200" fontSize="9.5" fontStyle="italic" className="fill-muted-foreground">“FaBian the Peasant</text>
        <text x="569" y="212" fontSize="9.5" fontStyle="italic" className="fill-muted-foreground">works when starving”</text>
        <line x1="515" y1="224" x2="515" y2="248" stroke="currentColor" strokeWidth="1.4" className="text-neural" />
        <text x="515" y="262" textAnchor="middle" fontSize="9.5" className="fill-muted-foreground">
          F-2,6-BP ⊕ PFK-1 and ⊝ FBPase-1
        </text>
      </g>

      {/* net equation */}
      <text x={midX} y="496" textAnchor="middle" fontSize="11" fontWeight="700" className="fill-foreground">
        NET: Glucose + 2 ADP + 2 Pi + 2 NAD⁺ → 2 pyruvate + 2 ATP + 2 NADH + 2 H⁺
      </text>
      <text x={midX} y="516" textAnchor="middle" fontSize="10" className="fill-muted-foreground">
        Cytoplasm. Investment phase (−2 ATP) → payoff phase (+4 ATP) = net +2 ATP.
      </text>
      <text x={midX} y="538" textAnchor="middle" fontSize="10" className="fill-muted-foreground">
        Pyruvate → acetyl-CoA (PDH, mitochondria) → TCA cycle.
      </text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Hexokinase vs glucokinase kinetics
// ---------------------------------------------------------------------------

export function HexokinaseVsGlucokinase() {
  const w = 620;
  const h = 260;
  // substrate axis
  const ox = 60;
  const oy = 210;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Hexokinase vs glucokinase kinetics" className="min-w-[520px]">
      {/* axes */}
      <line x1={ox} y1={oy} x2={w - 20} y2={oy} stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" />
      <line x1={ox} y1={oy} x2={ox} y2="24" stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" />
      <text x={w - 24} y={oy + 16} textAnchor="end" fontSize="10.5" className="fill-muted-foreground">[Glucose] →</text>
      <text x={ox - 10} y="30" fontSize="10.5" textAnchor="start" className="fill-muted-foreground" transform={`rotate(-90 ${ox - 10} 40)`} />
      <text x="26" y="120" fontSize="10.5" className="fill-muted-foreground" transform="rotate(-90 26 120)" textAnchor="middle">Reaction rate (v)</text>

      {/* Hexokinase curve: rises fast, plateaus low */}
      <path
        d="M 60 210 C 90 120, 120 96, 170 92 L 460 84"
        fill="none"
        strokeWidth="2.6"
        className="stroke-brand"
      />
      {/* Glucokinase curve: slow rise, plateaus high */}
      <path
        d="M 60 210 C 220 206, 330 150, 480 48"
        fill="none"
        strokeWidth="2.6"
        strokeDasharray="7 4"
        className="stroke-neural"
      />

      {/* plateau guides */}
      <line x1="60" y1="84" x2="460" y2="84" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4" className="text-muted-foreground/60" />
      <line x1="60" y1="48" x2="480" y2="48" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4" className="text-muted-foreground/60" />

      {/* labels */}
      <text x="200" y="76" fontSize="11" fontWeight="700" className="fill-brand">Hexokinase — most tissues</text>
      <text x="200" y="62" fontSize="9.5" className="fill-muted-foreground">Low Km (high affinity) · low Vmax · ⊝ glucose-6-P</text>
      <text x="330" y="120" fontSize="11" fontWeight="700" className="fill-neural">Glucokinase — liver, pancreatic β cells</text>
      <text x="330" y="134" fontSize="9.5" className="fill-muted-foreground">High Km · high Vmax · ⊝ fructose-6-P · induced by insulin</text>
      <text x="330" y="148" fontSize="9.5" className="fill-muted-foreground">Deficiency → MODY &amp; gestational diabetes</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Atherogenesis timeline
// ---------------------------------------------------------------------------

export function AtherogenesisTimeline() {
  const stages = [
    {
      name: "Normal artery",
      sub: "Intact endothelium",
      plaque: 0,
    },
    {
      name: "Endothelial injury / dysfunction",
      sub: "HTN, smoking, ↑LDL, diabetes → LDL enters intima",
      plaque: 0.08,
    },
    {
      name: "Fatty streak",
      sub: "Macrophages take up LDL → foam cells",
      plaque: 0.2,
    },
    {
      name: "Fibrous plaque",
      sub: "SMC migration + proliferation (PDGF, FGF), ECM → fibrous cap",
      plaque: 0.42,
    },
    {
      name: "Complicated atheroma",
      sub: "Calcification, hemorrhage, ulceration → rupture → thrombosis",
      plaque: 0.62,
    },
  ];
  const w = 660;
  const h = 300;
  const cellW = w / stages.length;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Atherogenesis progression" className="min-w-[600px]">
      {stages.map((s, i) => {
        const cx = cellW * i + cellW / 2;
        const r = 44;
        // artery cross-section: outer wall circle + lumen shrinking
        return (
          <g key={s.name}>
            <text x={cx} y="20" textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-emergency">
              {String(i).padStart(2, "0")}
            </text>
            <circle cx={cx} cy="92" r={r} className="fill-secondary stroke-border" strokeWidth="1.5" />
            {/* plaque grows from bottom of wall (crescent) */}
            {s.plaque > 0 ? (
              <path
                d={plaquePath(cx, 92, r, s.plaque)}
                className="fill-warning/70 stroke-warning"
                strokeWidth="1"
              />
            ) : null}
            {/* lumen */}
            <circle cx={cx} cy="92" r={r - 4 - s.plaque * 26} className="fill-card stroke-border/60" strokeWidth="0.8" />
            {s.plaque > 0.3 ? (
              <circle cx={cx} cy={92} r={r - 6 - s.plaque * 22} className="fill-none stroke-neural" strokeWidth="1" strokeDasharray="2 2" />
            ) : null}
            {s.plaque > 0.55 ? (
              <path
                d={`M ${cx - 10} ${92 + r - 18} l 8 6 l 6 -8 l 8 5`}
                fill="none"
                strokeWidth="1.8"
                className="stroke-emergency"
              />
            ) : null}
            <text x={cx} y="168" textAnchor="middle" fontSize="11" fontWeight="700" className="fill-foreground">
              {s.name}
            </text>
            <foreignObject x={cellW * i + 6} y="176" width={cellW - 12} height="110">
              <div className="text-center text-[9.5px] leading-snug text-muted-foreground px-0.5">
                {s.sub}
              </div>
            </foreignObject>
            {i < stages.length - 1 ? (
              <path
                d={`M ${cx + r + 10} 92 h 24 l -6 -5 m 6 5 l -6 5`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="text-muted-foreground"
              />
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}

function plaquePath(cx: number, cy: number, r: number, amount: number) {
  // crescent along the inner wall, growing with amount
  const rr = r - 2;
  const off = amount * 20;
  return `M ${cx - rr * 0.8} ${cy + rr * 0.55}
          A ${rr} ${rr} 0 0 0 ${cx + rr * 0.8} ${cy + rr * 0.55}
          A ${rr - off} ${rr - off} 0 0 1 ${cx - rr * 0.8} ${cy + rr * 0.55} Z`;
}

// ---------------------------------------------------------------------------
// Acid-base map (Davenport-style)
// ---------------------------------------------------------------------------

export function AcidBaseMap() {
  const w = 620;
  const h = 420;
  // plot area
  const px = 70;
  const py = 20;
  const pw = 500;
  const ph = 330;
  const x = (ph7: number) => px + ((ph7 - 6.9) / (7.9 - 6.9)) * pw;
  const y = (hco3: number) => py + ph - ((hco3 - 5) / (45 - 5)) * ph;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Acid-base map" className="min-w-[540px]">
      {/* frame */}
      <rect x={px} y={py} width={pw} height={ph} className="fill-card stroke-border" strokeWidth="1" />
      {/* pH gridlines */}
      {[7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8].map((v) => (
        <g key={v}>
          <line x1={x(v)} y1={py} x2={x(v)} y2={py + ph} stroke="currentColor" strokeWidth="0.4" className="text-muted-foreground/40" />
          <text x={x(v)} y={py + ph + 16} textAnchor="middle" fontSize="9.5" className="fill-muted-foreground">{v.toFixed(1)}</text>
        </g>
      ))}
      {[10, 20, 30, 40].map((v) => (
        <g key={v}>
          <line x1={px} y1={y(v)} x2={px + pw} y2={y(v)} stroke="currentColor" strokeWidth="0.4" className="text-muted-foreground/40" />
          <text x={px - 10} y={y(v) + 3} textAnchor="end" fontSize="9.5" className="fill-muted-foreground">{v}</text>
        </g>
      ))}
      <text x={px + pw / 2} y={py + ph + 34} textAnchor="middle" fontSize="11" fontWeight="700" className="fill-foreground">Arterial pH</text>
      <text x="18" y={py + ph / 2} textAnchor="middle" fontSize="11" fontWeight="700" className="fill-foreground" transform={`rotate(-90 18 ${py + ph / 2})`}>Plasma [HCO₃⁻] (mEq/L)</text>

      {/* zones */}
      <g className="fill-emergency/15">
        <polygon points={`${x(6.9)},${y(26)} ${x(7.3)},${y(44)} ${x(7.3)},${y(13)}`} />
      </g>
      <g className="fill-warning/20">
        <polygon points={`${x(7.1)},${y(10)} ${x(7.3)},${y(26)} ${x(7.45)},${y(14)} ${x(7.3)},${y(6)}`} />
      </g>
      <g className="fill-brand/15">
        <polygon points={`${x(7.45)},${y(30)} ${x(7.5)},${y(38)} ${x(7.9)},${y(18)} ${x(7.6)},${y(8)}`} />
      </g>
      <g className="fill-neural/15">
        <polygon points={`${x(7.42)},${y(44)} ${x(7.5)},${y(44)} ${x(7.9)},${y(34)}`} />
      </g>

      {/* normal point */}
      <circle cx={x(7.4)} cy={y(24)} r="5" className="fill-brand stroke-background" strokeWidth="1.5" />
      <text x={x(7.4) + 10} y={y(24) - 8} fontSize="10.5" fontWeight="700" className="fill-brand">NORMAL 7.40 / 24 / PCO₂ 40</text>

      {/* zone labels */}
      <text x={x(7.02)} y={y(20)} fontSize="11" fontWeight="800" className="fill-emergency">Metabolic</text>
      <text x={x(7.02)} y={y(20) + 13} fontSize="11" fontWeight="800" className="fill-emergency">acidosis</text>
      <text x={x(7.14)} y={y(32)} fontSize="11" fontWeight="800" className="fill-warning">Respiratory</text>
      <text x={x(7.14)} y={y(32) + 13} fontSize="11" fontWeight="800" className="fill-warning">acidosis</text>
      <text x={x(7.58)} y={y(34)} fontSize="11" fontWeight="800" className="fill-neural">Metabolic</text>
      <text x={x(7.58)} y={y(34) + 13} fontSize="11" fontWeight="800" className="fill-neural">alkalosis</text>
      <text x={x(7.52)} y={y(14)} fontSize="11" fontWeight="800" className="fill-brand">Respiratory</text>
      <text x={x(7.52)} y={y(14) + 13} fontSize="11" fontWeight="800" className="fill-brand">alkalosis</text>

      {/* compensation arrows */}
      <g strokeWidth="2" fill="none">
        <path d={`M ${x(7.18)} ${y(15)} q -10 -8 -16 -2`} className="stroke-emergency" markerEnd="" />
        <text x={x(7.18) - 24} y={y(15) - 12} fontSize="9" fontWeight="700" className="fill-emergency">hyperventilation ↘ PCO₂</text>
        <path d={`M ${x(7.5)} ${y(34)} q 6 8 14 8`} className="stroke-neural" />
        <text x={x(7.5) - 34} y={y(34) + 34} fontSize="9" fontWeight="700" className="fill-neural">hypoventilation ↗ PCO₂</text>
      </g>

      <text x={px + pw / 2} y={h - 8} textAnchor="middle" fontSize="9.5" fontStyle="italic" className="fill-muted-foreground">
        Compensation never fully corrects pH except (classically) respiratory alkalosis at altitude.
      </text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Acid-base diagnostic algorithm
// ---------------------------------------------------------------------------

export function AcidBaseAlgorithm() {
  const steps: { q: string; a: string[] }[] = [
    { q: "① Check arterial pH", a: ["< 7.35 → acidemia", "> 7.45 → alkalemia"] },
    { q: "② Identify the primary disorder", a: ["Acidemia + PCO₂ > 44 → respiratory acidosis", "Acidemia + HCO₃⁻ < 20 → metabolic acidosis", "Alkalemia + PCO₂ < 36 → respiratory alkalosis", "Alkalemia + HCO₃⁻ > 28 → metabolic alkalosis"] },
    { q: "③ Metabolic acidosis → anion gap", a: ["AG = Na⁺ − (Cl⁻ + HCO₃⁻); normal 8–12", "↑ AG → GOLDMARK", "Normal AG (↓ HCO₃⁻, ↑ Cl⁻) → diarrhea, RTA, hyperchloremia"] },
    { q: "④ Check compensation (metabolic acidosis)", a: ["Winter: PCO₂ = 1.5 × [HCO₃⁻] + 8 ± 2", "Measured > predicted → concomitant respiratory acidosis", "Measured < predicted → concomitant respiratory alkalosis"] },
    { q: "⑤ Metabolic alkalosis → urine Cl⁻", a: ["< 20 mEq/L → saline-responsive (vomiting, diuretics)", "> 20 mEq/L → saline-resistant (hyperaldosteronism, Bartter, Gitelman)"] },
  ];
  return (
    <div className="space-y-3">
      {steps.map((s, i) => (
        <div key={s.q} className="relative rounded-xl border border-border bg-card p-3.5 pl-5">
          <span
            className="absolute left-0 top-0 h-full w-1.5 rounded-l-xl"
            style={{ background: "var(--brand)" }}
            aria-hidden
          />
          <div className="text-sm font-bold">{s.q}</div>
          <ul className="mt-1.5 space-y-1">
            {s.a.map((a) => (
              <li key={a} className="flex gap-2 text-sm leading-relaxed text-foreground/85">
                <span className="text-brand" aria-hidden>→</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
          {i < steps.length - 1 ? (
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-brand" aria-hidden>
              <svg width="14" height="16" viewBox="0 0 14 16">
                <line x1="7" y1="0" x2="7" y2="9" stroke="currentColor" strokeWidth="1.6" />
                <path d="M7 15 L2 7.5 L12 7.5 Z" fill="currentColor" />
              </svg>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Pyruvate metabolism hub
// ---------------------------------------------------------------------------

export function PyruvateHub() {
  const w = 640;
  const h = 300;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Pyruvate metabolism hub" className="min-w-[560px]">
      {/* central pyruvate */}
      <rect x="260" y="120" width="120" height="44" rx="10" className="fill-neural-soft stroke-neural" strokeWidth="1.6" />
      <text x="320" y="147" textAnchor="middle" fontSize="14" fontWeight="800" className="fill-neural">PYRUVATE</text>

      {/* four fates — note lines break at word boundaries */}
      {[
        { x: 60, y: 44, label: "Lactate", enz: "LDH (B3)", note: ["anaerobic glycolysis — RBC, WBC,", "renal medulla, lens, cornea, Sertoli"], tone: "teal" },
        { x: 440, y: 44, label: "Alanine", enz: "ALT (B6)", note: ["carries amino groups", "muscle → liver (Cahill cycle)"], tone: "amber" },
        { x: 60, y: 196, label: "Oxaloacetate", enz: "Pyruvate carboxylase (B7/biotin)", note: ["replenishes TCA (anaplerotic)", "or gluconeogenesis"], tone: "teal" },
        { x: 420, y: 196, label: "Acetyl-CoA", enz: "PDH (B1, B2, B3, B5, lipoic acid)", note: ["irreversible entry to TCA —", "cannot make glucose"], tone: "rose" },
      ].map((f) => (
        <g key={f.label}>
          <rect x={f.x} y={f.y} width="160" height="50" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
          <text x={f.x + 80} y={f.y + 19} textAnchor="middle" fontSize="12" fontWeight="700" className="fill-foreground">{f.label}</text>
          <text x={f.x + 80} y={f.y + 35} textAnchor="middle" fontSize="9" className="fill-warning">{f.enz}</text>
          <text x={f.x + 80} y={f.y + (f.y > 130 ? 66 : -8)} textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">{f.note[0]}</text>
          <text x={f.x + 80} y={f.y + (f.y > 130 ? 77 : -19)} textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">{f.note[1]}</text>
        </g>
      ))}

      {/* connectors — V-tips touch card borders without crossing in */}
      <g stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="currentColor">
        <path d="M 285 120 L 160 100 l 6 -6 m -6 6 l 8 3" fill="none" />
        <path d="M 355 120 L 480 100 l -6 -6 m 6 6 l -8 3" fill="none" />
        <path d="M 285 164 L 160 190 l 6 6 m -6 -6 l 8 -3" fill="none" />
        <path d="M 380 150 L 500 190 l -6 6 m 6 -6 l -8 -3" fill="none" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Diabetes complications web (glycation + sorbitol)
// ---------------------------------------------------------------------------

export function DiabetesComplicationsWeb() {
  const w = 660;
  const h = 380;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Diabetes chronic complications mechanisms" className="min-w-[580px]">
      {/* root */}
      <rect x="230" y="12" width="200" height="38" rx="10" className="fill-emergency-soft stroke-emergency" strokeWidth="1.6" />
      <text x="330" y="35" textAnchor="middle" fontSize="12.5" fontWeight="800" className="fill-emergency">CHRONIC HYPERGLYCEMIA</text>

      {/* two branches */}
      <path d="M 290 50 C 220 80, 190 90, 165 110" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" />
      <path d="M 370 50 C 440 80, 470 90, 495 110" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" />

      {/* glycation branch */}
      <rect x="60" y="110" width="210" height="64" rx="10" className="fill-warning-soft stroke-warning/70" strokeWidth="1.4" />
      <text x="165" y="132" textAnchor="middle" fontSize="11.5" fontWeight="800" className="fill-warning">NONENZYMATIC GLYCATION</text>
      <text x="165" y="148" textAnchor="middle" fontSize="9.5" className="fill-foreground/80">Glucose + proteins → AGEs</text>
      <text x="165" y="162" textAnchor="middle" fontSize="9.5" className="fill-foreground/80">(HbA1c reflects 3-month exposure)</text>

      {/* sorbitol branch */}
      <rect x="390" y="110" width="210" height="64" rx="10" className="fill-neural-soft stroke-neural/70" strokeWidth="1.4" />
      <text x="495" y="132" textAnchor="middle" fontSize="11.5" fontWeight="800" className="fill-neural">OSMOTIC (SORBITOL) DAMAGE</text>
      <text x="495" y="148" textAnchor="middle" fontSize="9.5" className="fill-foreground/80">Aldose reductase → sorbitol</text>
      <text x="495" y="162" textAnchor="middle" fontSize="9.5" className="fill-foreground/80">LARKS lack sorbitol dehydrogenase</text>

      {/* small vessel */}
      <path d="M 120 174 C 100 200, 90 210, 85 230" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" />
      <rect x="16" y="230" width="150" height="56" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
      <text x="91" y="250" textAnchor="middle" fontSize="10.5" fontWeight="700" className="fill-foreground">SMALL VESSEL DISEASE</text>
      <text x="91" y="264" textAnchor="middle" fontSize="9" className="fill-muted-foreground">hyaline arteriolosclerosis</text>
      <text x="91" y="278" textAnchor="middle" fontSize="9" className="fill-muted-foreground">→ retinopathy · nephropathy</text>

      {/* large vessel */}
      <path d="M 210 174 C 240 200, 250 210, 260 230" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" />
      <rect x="196" y="230" width="150" height="56" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
      <text x="271" y="250" textAnchor="middle" fontSize="10.5" fontWeight="700" className="fill-foreground">LARGE VESSEL DISEASE</text>
      <text x="271" y="264" textAnchor="middle" fontSize="9" className="fill-muted-foreground">atherosclerosis → CAD, CVA,</text>
      <text x="271" y="278" textAnchor="middle" fontSize="9" className="fill-muted-foreground">PVD · MI = #1 cause of death</text>

      {/* sorbitol organs */}
      <path d="M 495 174 C 495 200, 480 210, 460 230" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" />
      <rect x="386" y="230" width="150" height="56" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
      <text x="461" y="250" textAnchor="middle" fontSize="10.5" fontWeight="700" className="fill-foreground">LARKS ORGANS</text>
      <text x="461" y="264" textAnchor="middle" fontSize="9" className="fill-muted-foreground">Lens → cataracts · Retina → retinopathy</text>
      <text x="461" y="278" textAnchor="middle" fontSize="9" className="fill-muted-foreground">Kidneys · Schwann cells → neuropathy</text>

      {/* neuropathy note */}
      <path d="M 520 174 C 560 200, 580 210, 590 230" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" />
      <rect x="556" y="230" width="96" height="56" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
      <text x="604" y="250" textAnchor="middle" fontSize="10.5" fontWeight="700" className="fill-foreground">NEUROPATHY</text>
      <text x="604" y="264" textAnchor="middle" fontSize="9" className="fill-muted-foreground">sensory: glove-stocking</text>
      <text x="604" y="278" textAnchor="middle" fontSize="9" className="fill-muted-foreground">autonomic: GERD, gastroparesis</text>

      {/* key legend */}
      <rect x="140" y="318" width="380" height="44" rx="10" className="fill-secondary" />
      <text x="330" y="336" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-foreground">
        Tissue with BOTH enzyme defenses (liver, ovaries, seminal vesicles) escape sorbitol damage —
      </text>
      <text x="330" y="351" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-foreground">
        they “lose sorbitol” via sorbitol dehydrogenase → fructose.
      </text>
    </svg>
  );
}
