"use client";

// Original KYP pharmacology + immunology visuals.

import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Sympathomimetic receptor activity grid
// ---------------------------------------------------------------------------

type Act = 3 | 2 | 1 | 0; // 3 strong, 2 moderate, 1 mild, 0 none
const receptors = ["α1", "α2", "β1", "β2", "D1"] as const;

const grid: {
  drug: string;
  act: Record<(typeof receptors)[number], Act>;
  use: string;
}[] = [
  { drug: "Norepinephrine", act: { α1: 3, α2: 2, β1: 2, β2: 0, D1: 0 }, use: "Hypotension, septic shock — reflex bradycardia" },
  { drug: "Phenylephrine", act: { α1: 3, α2: 1, β1: 0, β2: 0, D1: 0 }, use: "Hypotension, mydriasis, rhinitis, priapism — reflex bradycardia" },
  { drug: "Midodrine", act: { α1: 3, α2: 0, β1: 0, β2: 0, D1: 0 }, use: "Autonomic insufficiency, orthostatic hypotension" },
  { drug: "Epinephrine", act: { α1: 2, α2: 2, β1: 3, β2: 3, D1: 0 }, use: "Anaphylaxis, asthma, shock, open-angle glaucoma" },
  { drug: "Dobutamine", act: { α1: 1, α2: 0, β1: 3, β2: 2, D1: 0 }, use: "Cardiac stress test, acute decompensated HF (inotrope)" },
  { drug: "Isoproterenol", act: { α1: 0, α2: 0, β1: 3, β2: 3, D1: 0 }, use: "EP study of tachyarrhythmias — reflex tachycardia" },
  { drug: "Dopamine", act: { α1: 2, α2: 0, β1: 2, β2: 0, D1: 3 }, use: "Unstable bradycardia, shock — dose-dependent effects" },
  { drug: "Fenoldopam", act: { α1: 0, α2: 0, β1: 0, β2: 0, D1: 3 }, use: "Postoperative HTN, hypertensive crisis — natriuresis" },
  { drug: "Albuterol", act: { α1: 0, α2: 0, β1: 1, β2: 3, D1: 0 }, use: "Acute asthma/COPD (salmeterol = long-acting, terbutaline = tocolysis)" },
  { drug: "Mirabegron", act: { α1: 0, α2: 0, β1: 0, β2: 0, D1: 0 }, use: "Overactive bladder — think miraβ3gron (β3)" },
];

function ActDot({ level }: { level: Act }) {
  if (level === 0) {
    return <span className="inline-block h-3 w-3 rounded-full border border-muted-foreground/40" aria-label="no activity" />;
  }
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`activity ${level} of 3`}>
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={cn(
            "inline-block h-3 w-3 rounded-full",
            i <= level
              ? level === 3
                ? "bg-emergency"
                : level === 2
                  ? "bg-warning"
                  : "bg-brand"
              : "bg-muted/60"
          )}
        />
      ))}
    </span>
  );
}

export function SympathReceptorGrid() {
  return (
    <div className="kyp-scroll overflow-x-auto">
      <div className="min-w-[560px]">
        <div className="grid grid-cols-[1.6fr_repeat(5,0.9fr)] gap-1 rounded-lg bg-secondary/70 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          <div>Drug</div>
          {receptors.map((r) => (
            <div key={r} className="text-center">{r}</div>
          ))}
        </div>
        {grid.map((row, i) => (
          <div
            key={row.drug}
            className={cn(
              "grid grid-cols-[1.6fr_repeat(5,0.9fr)] items-center gap-1 rounded-lg px-3 py-2 text-sm",
              i % 2 === 0 ? "bg-card" : "bg-secondary/40"
            )}
          >
            <div className="min-w-0">
              <div className="font-semibold">{row.drug}</div>
              <div className="text-[10px] leading-tight text-muted-foreground">{row.use}</div>
            </div>
            {receptors.map((r) => (
              <div key={r} className="flex justify-center">
                <ActDot level={row.act[r]} />
              </div>
            ))}
          </div>
        ))}
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><ActDot level={3} /> strong agonism</span>
          <span className="flex items-center gap-1.5"><ActDot level={2} /> moderate</span>
          <span className="flex items-center gap-1.5"><ActDot level={1} /> mild</span>
          <span className="flex items-center gap-1.5"><ActDot level={0} /> negligible</span>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Epinephrine reversal (before / after α-blockade)
// ---------------------------------------------------------------------------

function BarPair({
  before,
  after,
  label,
  reversal,
}: {
  before: "up" | "down";
  after: "up" | "down" | "flat";
  label: string;
  reversal: boolean;
}) {
  const bar = (dir: "up" | "down" | "flat", filled: boolean) => (
    <div className="flex items-center gap-1.5">
      <div className="flex h-6 w-16 items-end overflow-hidden rounded-md bg-secondary">
        <div
          className={cn(
            "w-full rounded-sm",
            !filled && "opacity-30",
            dir === "up" && "h-full bg-emergency/80",
            dir === "down" && "h-1/2 bg-brand/80",
            dir === "flat" && "h-1/3 bg-muted-foreground/50"
          )}
        />
      </div>
      <span className="text-xs font-semibold">
        {dir === "up" ? "↑ BP" : dir === "down" ? "↓ BP" : "→ BP"}
      </span>
    </div>
  );
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="text-sm font-bold">{label}</div>
      <div className="mt-3 space-y-2.5">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Before α-blockade
          </div>
          <div className="mt-1">{bar(before, true)}</div>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            After α-blockade
          </div>
          <div className="mt-1">{bar(after, true)}</div>
        </div>
      </div>
      <p className={cn("mt-3 text-xs leading-relaxed", reversal ? "font-semibold text-brand" : "text-muted-foreground")}>
        {reversal
          ? "REVERSAL: net pressor → net depressor. α1 blocked → unopposed β2 vasodilation wins."
          : "SUPPRESSED but NOT reversed — pure α1 agonist has no β2 effect to unmask."}
      </p>
    </div>
  );
}

export function EpiReversalVisual() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <BarPair before="up" after="down" label="Epinephrine (α + β agonist)" reversal />
      <BarPair before="up" after="flat" label="Phenylephrine (pure α1 agonist)" reversal={false} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hypersensitivity — 4 mechanism schematics
// ---------------------------------------------------------------------------

function HsFrame({
  title,
  tone,
  children,
  caption,
}: {
  title: string;
  tone: "teal" | "rose" | "amber" | "plum";
  children: React.ReactNode;
  caption: string;
}) {
  const border = {
    teal: "border-brand/40",
    rose: "border-emergency/40",
    amber: "border-warning/40",
    plum: "border-neural/40",
  }[tone];
  return (
    <figure className={cn("rounded-xl border bg-card p-4", border)}>
      <figcaption className="mb-2 text-sm font-bold">{title}</figcaption>
      {children}
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{caption}</p>
    </figure>
  );
}

export function HypersensitivityMechanisms() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <HsFrame
        title="Type I — Anaphylactic / atopic (IgE)"
        tone="teal"
        caption="First and Fast. Immediate (minutes): histamine, tryptase, leukotrienes. Late (hours): chemokines → eosinophils. Tests: skin test, allergen-specific IgE ELISA. Examples: anaphylaxis, allergic asthma."
      >
        <svg viewBox="0 0 220 96" width="100%" role="img" aria-label="Type I hypersensitivity mechanism" className="min-w-[200px]">
          {/* mast cell */}
          <rect x="12" y="22" width="86" height="52" rx="10" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
          <text x="55" y="14" textAnchor="middle" fontSize="9.5" fontWeight="700" className="fill-brand">Mast cell</text>
          <circle cx="34" cy="40" r="4" className="fill-warning" />
          <circle cx="52" cy="52" r="4" className="fill-warning" />
          <circle cx="70" cy="38" r="4" className="fill-warning" />
          <circle cx="40" cy="62" r="4" className="fill-warning" />
          {/* IgE on surface */}
          <path d="M 40 74 l 3 8 m 3 -8 l -3 8" className="stroke-neural" strokeWidth="2" />
          <path d="M 60 74 l 3 8 m 3 -8 l -3 8" className="stroke-neural" strokeWidth="2" />
          <text x="55" y="93" textAnchor="middle" fontSize="8.5" className="fill-neural">preformed surface IgE</text>
          {/* allergen crosslink */}
          <path d="M 108 30 C 130 22, 150 30, 168 44 M 108 78 C 130 86, 150 78, 168 64" className="stroke-emergency" strokeWidth="2" fill="none" />
          <circle cx="180" cy="54" r="12" className="fill-emergency-soft stroke-emergency" strokeWidth="1.4" />
          <text x="180" y="57" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-emergency">allergen</text>
          {/* Stacked two-line label keeps clear of both the "Mast cell"
              label (left) and the allergen circle (right) at render size. */}
          <text x="130" y="8" textAnchor="middle" fontSize="8" className="fill-muted-foreground">crosslinks IgE</text>
          <text x="130" y="19" textAnchor="middle" fontSize="8" className="fill-muted-foreground">→ degranulation</text>
        </svg>
      </HsFrame>

      <HsFrame
        title="Type II — Antibody-mediated (IgG/IgM)"
        tone="rose"
        caption="Antibodies bind cell-surface antigens → (1) opsonization + complement/phagocytosis, (2) NK-cell ADCC, (3) inflammation, (4) receptor dysfunction. Tests: direct Coombs (on RBC), indirect Coombs (in serum). Examples: AIHA, ITP, Goodpasture, MG, Graves."
      >
        <svg viewBox="0 0 220 96" width="100%" role="img" aria-label="Type II hypersensitivity mechanism" className="min-w-[200px]">
          {/* target cell */}
          <circle cx="60" cy="48" r="30" className="fill-emergency-soft stroke-emergency" strokeWidth="1.6" />
          <text x="60" y="51" textAnchor="middle" fontSize="9.5" fontWeight="700" className="fill-emergency">cell</text>
          <text x="60" y="90" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">surface antigen</text>
          {/* antibodies */}
          <path d="M 96 38 C 116 34, 128 40, 142 48 M 96 58 C 116 62, 128 56, 142 48" className="stroke-neural" strokeWidth="2" fill="none" />
          <text x="120" y="30" textAnchor="middle" fontSize="8.5" className="fill-neural">IgG binds</text>
          {/* NK cell */}
          <circle cx="184" cy="48" r="22" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
          <text x="184" y="46" textAnchor="middle" fontSize="9" fontWeight="700" className="fill-warning">NK</text>
          <text x="184" y="57" textAnchor="middle" fontSize="8" className="fill-warning">cell</text>
          <path d="M 148 48 l 12 0 m -4 -3 l 4 3 l -4 3" className="stroke-foreground/70" strokeWidth="1.4" fill="none" />
        </svg>
      </HsFrame>

      <HsFrame
        title="Type III — Immune complex"
        tone="amber"
        caption="Antigen-antibody-complement complexes ('3 things stuck together') deposit in tissues → complement → neutrophils → lysosomal enzymes → endothelial damage. ↓ serum C3, C4. Examples: serum sickness, Arthus reaction, SLE, PSGN, PAN, IgA vasculitis."
      >
        <svg viewBox="0 0 220 96" width="100%" role="img" aria-label="Type III hypersensitivity mechanism" className="min-w-[200px]">
          {/* vessel */}
          <rect x="10" y="18" width="90" height="60" rx="14" className="fill-secondary stroke-border" strokeWidth="1.2" />
          <text x="55" y="12" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">bloodstream</text>
          {/* complexes */}
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${28 + i * 26} ${38 + (i % 2) * 20})`}>
              <circle r="6" className="fill-warning" />
              <circle r="6" cx="9" cy="3" className="fill-neural/80" />
              <circle r="6" cx="-8" cy="4" className="fill-brand/80" />
            </g>
          ))}
          <text x="55" y="93" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">Ag + Ab + C3b complexes</text>
          {/* deposition */}
          <path d="M 100 48 h 26 m -5 -4 l 5 4 l -5 4" className="stroke-foreground/70" strokeWidth="1.4" fill="none" />
          {/* tissue + neutrophils */}
          <rect x="130" y="24" width="82" height="48" rx="10" className="fill-emergency-soft/60 stroke-emergency/60" strokeWidth="1.2" />
          <text x="171" y="42" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-emergency">tissue deposit</text>
          {[0, 1].map((i) => (
            <g key={i} transform={`translate(${152 + i * 36} 58)`}>
              <circle r="7" className="fill-card stroke-warning" strokeWidth="1.2" />
              {[0, 90, 180, 270].map((a) => (
                <circle key={a} r="2.2" cx={Math.cos((a * Math.PI) / 180) * 3.4} cy={Math.sin((a * Math.PI) / 180) * 3.4} className="fill-warning" />
              ))}
            </g>
          ))}
        </svg>
      </HsFrame>

      <HsFrame
        title="Type IV — Delayed, cell-mediated (T cells)"
        tone="plum"
        caption="Fourth and last — no antibodies. (1) CD8+ direct cytotoxicity; (2) CD4+ Th1 cytokines → activated macrophages. Delayed 48–72 h. Tests: PPD, patch test, Candida skin test. Examples: contact dermatitis, SJS/TEN/DRESS, GVHD. 4 T's: T cells, Transplant rejections, TB skin tests, Touching."
      >
        <svg viewBox="0 0 220 96" width="100%" role="img" aria-label="Type IV hypersensitivity mechanism" className="min-w-[200px]">
          {/* APC */}
          <circle cx="52" cy="52" r="28" className="fill-neural-soft stroke-neural" strokeWidth="1.5" />
          <text x="52" y="49" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-neural">APC /</text>
          <text x="52" y="60" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-neural">target</text>
          {/* T cell */}
          <circle cx="150" cy="52" r="26" className="fill-brand-soft stroke-brand" strokeWidth="1.5" />
          <text x="150" y="49" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-brand">CD4+</text>
          <text x="150" y="60" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-brand">Th1</text>
          {/* recognition */}
          <path d="M 82 52 h 40 m -5 -4 l 5 4 l -5 4" className="stroke-foreground/70" strokeWidth="1.4" fill="none" />
          <text x="101" y="42" textAnchor="middle" fontSize="8" className="fill-muted-foreground">TCR + MHC II</text>
          {/* cytokines */}
          {["IFN-γ", "IL-2", "TNF-α"].map((c, i) => (
            <g key={c}>
              <rect x={30 + i * 62} y="6" width="46" height="14" rx="7" className="fill-warning-soft" />
              <text x={53 + i * 62} y="16.5" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-warning">{c}</text>
            </g>
          ))}
          {/* macrophage activation */}
          <text x="110" y="90" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">
            cytokines → activated macrophages → tissue damage (48–72 h)
          </text>
        </svg>
      </HsFrame>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Enzyme kinetics — the kinetics + inhibition map (PH1)
// An original KYP redraw of book 228: the Michaelis-Menten kinetics plot,
// the Lineweaver-Burk double-reciprocal plot, the Effects of enzyme
// inhibition overlays, and the inhibition comparison table.
// ---------------------------------------------------------------------------

export function EnzymeKineticsMap() {
  const w = 980;
  const h = 1180;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Enzyme kinetics — the map (an original KYP redraw of the source page book 228 — the Michaelis-Menten kinetics plot with Vmax, 1/2 Vmax, Km, and the Saturation plateau; the Lineweaver-Burk double-reciprocal plot with slope = m, the -1/Km X-intercept, and the 1/Vmax Y-intercept; the Effects of enzyme inhibition overlays showing reversible competitive lines crossing the uninhibited line at the Y-axis and noncompetitive lines not crossing; the 5-row inhibition comparison table with the Competitive reversible, Competitive irreversible, Noncompetitive columns and the Resemble substrate, Overcome by ↑ [S], Bind site, Effect on Vmax, Effect on Km, Pharmacodynamics rows; and the Kompetitive inhibitors increase Km margin mnemonic; no copyrighted photographs on the page)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Enzyme kinetics — the map (original KYP redraw)</text>
        <rect x="700" y="24" width="232" height="18" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">2 plots · 3 inhibitions · 1 mnemonic</text>
      </g>

      {/* ===== TOP-LEFT: MICHAELIS-MENTEN PLOT ===== */}
      <g>
        <rect x="36" y="76" width="440" height="380" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="98" fontSize="9" fontWeight="800" className="fill-foreground">MICHAELIS-MENTEN KINETICS</text>
        <text x="52" y="112" fontSize="6.5" className="fill-muted-foreground">V vs [S] — hyperbolic; Vmax ceiling, Km at 1/2 Vmax</text>

        {/* plot area: origin (100, 410), Y up to y=130, X right to x=450 */}
        <line x1="100" y1="410" x2="100" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="100" y1="410" x2="450" y2="410" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <text x="455" y="424" fontSize="7" className="fill-muted-foreground">[S] →</text>
        <text x="92" y="135" textAnchor="end" fontSize="7" className="fill-muted-foreground">V</text>

        {/* Vmax dashed line at y=150 */}
        <line x1="100" y1="150" x2="450" y2="150" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground/60" />
        <text x="455" y="153" fontSize="7" fontWeight="700" className="fill-foreground">Vmax</text>

        {/* 1/2 Vmax dashed line at y=280 */}
        <line x1="100" y1="280" x2="450" y2="280" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground/60" />
        <text x="455" y="283" fontSize="7" fontWeight="700" className="fill-foreground">1/2 Vmax</text>

        {/* Km vertical line at x=220 (where curve crosses 1/2 Vmax) */}
        <line x1="220" y1="280" x2="220" y2="410" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" className="text-muted-foreground/60" />
        <text x="220" y="424" textAnchor="middle" fontSize="7" fontWeight="700" className="fill-brand">Km</text>

        {/* Hyperbolic curve: from (100,410) through (220,280) to plateau (450,150) */}
        <path d="M 100 410 C 160 410, 190 290, 220 280 C 260 270, 320 175, 380 155 L 450 150" fill="none" strokeWidth="2.4" className="stroke-brand" />

        {/* Saturation label */}
        <text x="370" y="142" textAnchor="middle" fontSize="7" fontWeight="700" className="fill-muted-foreground">Saturation</text>

        {/* annotation: Km = [S] at 1/2 Vmax */}
        <text x="280" y="395" textAnchor="middle" fontSize="6.5" fontWeight="700" className="fill-brand">Km = [S] at 1/2 Vmax</text>

        {/* definition snippet */}
        <text x="52" y="438" fontSize="6" className="fill-muted-foreground">Km = substrate concentration at 1/2 Vmax; inversely related to affinity (↑Km = ↓affinity).</text>
        <text x="52" y="448" fontSize="6" className="fill-muted-foreground">Vmax ∝ [enzyme]. Hyperbolic = Michaelis-Menten; sigmoidal = cooperativity (eg, aspartate transcarbamoylase).</text>
      </g>

      {/* ===== TOP-RIGHT: LINEWEAVER-BURK PLOT ===== */}
      <g>
        <rect x="504" y="76" width="440" height="380" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="520" y="98" fontSize="9" fontWeight="800" className="fill-foreground">LINEWEAVER-BURK PLOT (double-reciprocal)</text>
        <text x="520" y="112" fontSize="6.5" className="fill-muted-foreground">1/V vs 1/[S] — linear; Y-intercept = 1/Vmax, X-intercept = -1/Km</text>

        {/* plot area: origin (700, 410), Y up to y=130, X from x=560 (neg) to x=920 (pos) */}
        <line x1="560" y1="410" x2="920" y2="410" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="700" y1="410" x2="700" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <text x="925" y="424" fontSize="7" className="fill-muted-foreground">1/[S] →</text>
        <text x="692" y="135" textAnchor="end" fontSize="7" className="fill-muted-foreground">1/V</text>
        <text x="695" y="424" textAnchor="end" fontSize="6" className="fill-muted-foreground">0</text>

        {/* X-intercept tick at (560, 410) = -1/Km */}
        <line x1="560" y1="410" x2="560" y2="416" stroke="currentColor" strokeWidth="1" className="text-muted-foreground" />
        <text x="560" y="426" textAnchor="middle" fontSize="6.5" fontWeight="700" className="fill-brand">-1/Km</text>

        {/* Y-intercept tick at (700, 250) = 1/Vmax */}
        <line x1="694" y1="250" x2="700" y2="250" stroke="currentColor" strokeWidth="1" className="text-muted-foreground" />
        <text x="690" y="253" textAnchor="end" fontSize="6.5" fontWeight="700" className="fill-brand">1/Vmax</text>

        {/* Straight line: (560, 410) → (770, 138) passing through (700, 250) */}
        <line x1="560" y1="410" x2="770" y2="138" strokeWidth="2.4" className="stroke-brand" />

        {/* slope = m label aligned with the line */}
        <text x="660" y="262" fontSize="7" fontWeight="700" className="fill-muted-foreground" transform="rotate(-52 660 262)">slope = m</text>

        {/* definition snippet */}
        <text x="520" y="438" fontSize="6" className="fill-muted-foreground">Y-intercept closer to 0 → higher Vmax. X-intercept closer to 0 → higher Km.</text>
        <text x="520" y="448" fontSize="6" className="fill-muted-foreground">↑Km = ↓affinity. Reversible competitive lines CROSS; noncompetitive lines DO NOT cross.</text>
      </g>

      {/* ===== EFFECTS OF ENZYME INHIBITION (overlay plots) ===== */}
      <g>
        <rect x="36" y="470" width="908" height="350" rx="14" className="fill-secondary/40 stroke-emergency" />
        <text x="52" y="492" fontSize="9" fontWeight="800" className="fill-emergency">EFFECTS OF ENZYME INHIBITION — overlay plots</text>
        <text x="52" y="506" fontSize="6.5" className="fill-muted-foreground">Uninhibited (teal) vs Reversible competitive (amber) vs Noncompetitive (rose)</text>

        {/* ===== LEFT OVERLAY: MM with 3 curves ===== */}
        {/* plot area: origin (80, 790), Y up to y=530, X right to x=460 */}
        <line x1="80" y1="790" x2="80" y2="530" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="80" y1="790" x2="460" y2="790" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <text x="465" y="804" fontSize="6.5" className="fill-muted-foreground">[S] →</text>
        <text x="74" y="535" textAnchor="end" fontSize="6.5" className="fill-muted-foreground">V</text>
        <text x="120" y="546" fontSize="7" fontWeight="800" className="fill-foreground">V vs [S] — 3 curves</text>

        {/* Vmax dashed lines (uninhibited + reversible competitive share Vmax at y=552) */}
        <line x1="80" y1="552" x2="460" y2="552" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" className="text-brand/50" />
        {/* Noncompetitive Vmax (lower) at y=642 */}
        <line x1="80" y1="642" x2="460" y2="642" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" className="text-emergency/50" />

        {/* Uninhibited curve: Vmax at y=552, Km at x=200 (1/2 Vmax at y=671) */}
        <path d="M 80 790 C 140 790, 175 685, 200 671 C 240 651, 300 580, 360 558 L 460 552" fill="none" strokeWidth="2.2" className="stroke-brand" />

        {/* Reversible competitive curve: Vmax at y=552 (SAME), Km at x=290 (HIGHER) */}
        <path d="M 80 790 C 180 790, 240 685, 290 671 C 330 651, 380 580, 420 558 L 460 552" fill="none" strokeWidth="2.2" className="stroke-warning" strokeDasharray="6 3" />

        {/* Noncompetitive curve: Vmax at y=642 (LOWER), Km at x=200 (SAME) */}
        <path d="M 80 790 C 140 790, 175 725, 200 716 C 240 700, 300 660, 360 645 L 460 642" fill="none" strokeWidth="2.2" className="stroke-emergency" strokeDasharray="2 3" />

        {/* Km vertical at x=200 (shared by uninhibited + noncompetitive) */}
        <line x1="200" y1="716" x2="200" y2="790" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" className="text-muted-foreground/50" />
        <text x="200" y="804" textAnchor="middle" fontSize="6" fontWeight="700" className="fill-brand">Km</text>
        {/* Km' vertical at x=290 (reversible competitive, shifted right) */}
        <line x1="290" y1="671" x2="290" y2="790" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" className="text-muted-foreground/50" />
        <text x="290" y="804" textAnchor="middle" fontSize="6" fontWeight="700" className="fill-warning">Km ↑</text>

        {/* Legend (upper-left of plot, clear area) — absolute coordinates to avoid transform-related getBBox offset */}
        <g>
          <line x1="96" y1="575" x2="110" y2="575" strokeWidth="2.2" className="stroke-brand" />
          <text x="114" y="578" fontSize="6" className="fill-foreground">Uninhibited</text>
          <line x1="96" y1="586" x2="110" y2="586" strokeWidth="2.2" className="stroke-warning" strokeDasharray="3 2" />
          <text x="114" y="589" fontSize="6" className="fill-foreground">Competitive (reversible)</text>
          <line x1="96" y1="597" x2="110" y2="597" strokeWidth="2.2" className="stroke-emergency" strokeDasharray="2 2" />
          <text x="114" y="600" fontSize="6" className="fill-foreground">Noncompetitive</text>
        </g>

        {/* annotation */}
        <text x="80" y="815" fontSize="6" className="fill-muted-foreground">Competitive: same Vmax, Km ↑ (curve shifts RIGHT). Noncompetitive: Vmax ↓ (curve flattens), Km unchanged.</text>

        {/* ===== RIGHT OVERLAY: LB with 3 lines ===== */}
        {/* plot area: origin (700, 790), Y up to y=530, X from x=520 (neg) to x=920 (pos) */}
        <line x1="520" y1="790" x2="920" y2="790" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="700" y1="790" x2="700" y2="530" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <text x="925" y="804" fontSize="6.5" className="fill-muted-foreground">1/[S] →</text>
        <text x="694" y="535" textAnchor="end" fontSize="6.5" className="fill-muted-foreground">1/V</text>
        <text x="780" y="546" fontSize="7" fontWeight="800" className="fill-foreground">1/V vs 1/[S] — 3 lines</text>

        {/* Uninhibited line: (560, 790) → (803, 530), through (700, 640) */}
        <line x1="560" y1="790" x2="803" y2="530" strokeWidth="2.2" className="stroke-brand" />
        {/* Reversible competitive line: (520, 790) → (832, 530), through (700, 640) — CROSSES uninhibited at Y-axis */}
        <line x1="520" y1="790" x2="832" y2="530" strokeWidth="2.2" className="stroke-warning" strokeDasharray="6 3" />
        {/* Noncompetitive line: (560, 790) → (733, 530), through (700, 580) — does NOT cross uninhibited above X-axis */}
        <line x1="560" y1="790" x2="733" y2="530" strokeWidth="2.2" className="stroke-emergency" strokeDasharray="2 3" />

        {/* Crossing point markers */}
        <circle cx="700" cy="640" r="3.5" className="fill-card stroke-warning" strokeWidth="1.4" />
        <circle cx="560" cy="790" r="3.5" className="fill-card stroke-emergency" strokeWidth="1.4" />

        {/* X-intercept labels */}
        <text x="560" y="804" textAnchor="middle" fontSize="6" fontWeight="700" className="fill-brand">-1/Km</text>
        <text x="520" y="804" textAnchor="middle" fontSize="6" fontWeight="700" className="fill-warning">-1/Km'</text>

        {/* Y-intercept labels */}
        <text x="690" y="643" textAnchor="end" fontSize="6" fontWeight="700" className="fill-brand">1/Vmax</text>
        <text x="690" y="583" textAnchor="end" fontSize="6" fontWeight="700" className="fill-emergency">1/Vmax'</text>

        {/* Crossing annotation */}
        <text x="720" y="635" fontSize="6" fontWeight="700" className="fill-warning">CROSS</text>
        <text x="575" y="775" fontSize="6" fontWeight="700" className="fill-emergency">NO CROSS</text>

        {/* annotation */}
        <text x="520" y="815" fontSize="6" className="fill-muted-foreground">Competitive lines CROSS at Y-axis (shared 1/Vmax). Noncompetitive lines DO NOT CROSS (shared -1/Km, diverge).</text>
      </g>

      {/* ===== INHIBITION COMPARISON TABLE ===== */}
      <g>
        <rect x="36" y="834" width="908" height="290" rx="14" className="fill-card stroke-border" />
        <text x="52" y="856" fontSize="9" fontWeight="800" className="fill-foreground">INHIBITION COMPARISON TABLE (book 228 — verbatim)</text>

        {/* Header row at y 868-908 (height 40) */}
        <rect x="52" y="868" width="180" height="40" className="fill-secondary stroke-border" />
        <text x="142" y="892" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">Property</text>

        <rect x="232" y="868" width="220" height="40" className="fill-warning-soft stroke-border" />
        <text x="342" y="884" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-warning">Competitive inhibitors,</text>
        <text x="342" y="895" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-warning">reversible</text>

        <rect x="452" y="868" width="220" height="40" className="fill-emergency-soft stroke-border" />
        <text x="562" y="884" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-emergency">Competitive inhibitors,</text>
        <text x="562" y="895" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-emergency">irreversible</text>

        <rect x="672" y="868" width="240" height="40" className="fill-neural-soft stroke-border" />
        <text x="792" y="892" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-neural">Noncompetitive inhibitors</text>

        {/* Data rows (6 rows × 36 height = 216) */}
        {[
          { y: 908, label: "Resemble substrate", c1: "Yes", c2: "Yes", c3: "No" },
          { y: 944, label: "Overcome by ↑ [S]", c1: "Yes", c2: "No", c3: "No" },
          { y: 980, label: "Bind site", c1: "Active", c2: "Active", c3: "Allosteric" },
          { y: 1016, label: "Effect on Vmax", c1: "Unchanged", c2: "↓", c3: "↓" },
          { y: 1052, label: "Effect on Km", c1: "↑", c2: "Unchanged", c3: "Unchanged" },
          { y: 1088, label: "Pharmacodynamics", c1: "↓ potency", c2: "↓ efficacy", c3: "↓ efficacy" },
        ].map((row, i) => (
          <g key={i}>
            <rect x="52" y={row.y} width="180" height="36" className={i % 2 === 0 ? "fill-secondary/40 stroke-border" : "fill-card stroke-border"} />
            <text x="142" y={row.y + 22} textAnchor="middle" fontSize="7" fontWeight="700" className="fill-foreground">{row.label}</text>
            <rect x="232" y={row.y} width="220" height="36" className={i % 2 === 0 ? "fill-warning-soft/30 stroke-border" : "fill-card stroke-border"} />
            <text x="342" y={row.y + 22} textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-foreground">{row.c1}</text>
            <rect x="452" y={row.y} width="220" height="36" className={i % 2 === 0 ? "fill-emergency-soft/30 stroke-border" : "fill-card stroke-border"} />
            <text x="562" y={row.y + 22} textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-foreground">{row.c2}</text>
            <rect x="672" y={row.y} width="240" height="36" className={i % 2 === 0 ? "fill-neural-soft/30 stroke-border" : "fill-card stroke-border"} />
            <text x="792" y={row.y + 22} textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-foreground">{row.c3}</text>
          </g>
        ))}
      </g>

      {/* ===== MNEMONIC CALLOUT ===== */}
      <g>
        <rect x="36" y="1130" width="908" height="40" rx="10" className="fill-brand-soft stroke-brand" />
        <text x="490" y="1156" textAnchor="middle" fontSize="11" fontWeight="800" className="fill-brand">KOMPETITIVE INHIBITORS INCREASE Km</text>
      </g>
    </svg>
  );
}

export function PharmacokineticsMap() {
  const w = 980;
  const h = 1200;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Pharmacokinetics — the map (an original KYP redraw of the source page book 229 — the AUC plot showing plasma concentration vs time with the IV curve and the oral curve, the AUCIV and AUCOral labels, and the bioavailability formula F = [AUCoral x DoseIV] / [Doseoral x AUCIV] x 100; the Vd compartment / drug-types table with the Low/Intravascular/Large-charged, Medium/ECF/Small-hydrophilic, High/All-tissues-including-fat/Small-lipophilic rows; the Clearance equation CL = Vd x Ke; the Half-life equation t1/2 = 0.7 x Vd / CL with the 4-5 half-lives to steady state and 3.3 half-lives to 90% rules; the half-life remaining strip showing 50%, 25%, 12.5%, 6.25% after 1, 2, 3, 4 half-lives; the age-related PK changes 2x2 grid covering Absorption, Distribution, Metabolism, Excretion; and the FOUR TO FIVE HALF-LIVES TO STEADY STATE margin mnemonic; no copyrighted photographs on the page)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Pharmacokinetics — the map (original KYP redraw)</text>
        <rect x="700" y="24" width="232" height="18" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">4 constants · 2 tables · 1 mnemonic</text>
      </g>

      {/* ===== TOP-LEFT: AUC PLOT ===== */}
      <g>
        <rect x="24" y="76" width="460" height="360" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="98" fontSize="9" fontWeight="800" className="fill-foreground">BIOAVAILABILITY (F) — AUC PLOT</text>
        <text x="40" y="112" fontSize="6.5" className="fill-muted-foreground">Plasma concentration vs time; IV (taller) vs Oral (shorter) curves</text>

        {/* plot area: origin (80, 380), Y up to y=130, X right to x=460 */}
        <line x1="80" y1="380" x2="80" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="80" y1="380" x2="460" y2="380" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <text x="465" y="394" fontSize="7" className="fill-muted-foreground">Time →</text>
        <text x="72" y="135" textAnchor="end" fontSize="7" className="fill-muted-foreground">Plasma</text>
        <text x="72" y="144" textAnchor="end" fontSize="7" className="fill-muted-foreground">conc.</text>

        {/* IV curve: peaks immediately at y=140, then exponential decay to baseline */}
        <path d="M 80 140 C 110 150, 150 220, 200 280 C 250 320, 320 360, 460 378" fill="none" strokeWidth="2.4" className="stroke-brand" />
        {/* Oral curve: starts at 0 (origin), rises to lower peak at y=190 around x=160, then decays */}
        <path d="M 80 380 C 110 340, 140 200, 170 190 C 210 200, 260 290, 320 340 C 380 365, 420 376, 460 380" fill="none" strokeWidth="2.4" className="stroke-warning" strokeDasharray="6 3" />

        {/* AUCIV label (under IV curve) */}
        <text x="180" y="270" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-brand">AUCIV</text>
        {/* AUCOral label (under oral curve) */}
        <text x="240" y="335" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-warning">AUCOral</text>

        {/* Legend */}
        <g>
          <line x1="96" y1="160" x2="110" y2="160" strokeWidth="2.4" className="stroke-brand" />
          <text x="114" y="163" fontSize="6.5" className="fill-foreground">IV (F = 100%)</text>
          <line x1="96" y1="172" x2="110" y2="172" strokeWidth="2.4" className="stroke-warning" strokeDasharray="3 2" />
          <text x="114" y="175" fontSize="6.5" className="fill-foreground">Oral (F &lt;100%)</text>
        </g>

        {/* formula */}
        <rect x="40" y="404" width="428" height="26" rx="6" className="fill-card stroke-border" />
        <text x="254" y="421" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100</text>

        {/* definition snippet */}
        <text x="40" y="441" fontSize="6" className="fill-muted-foreground">F = fraction reaching systemic circulation. IV: F = 100%. Oral: F &lt;100% (incomplete absorption + first-pass metabolism).</text>
      </g>

      {/* ===== TOP-RIGHT: Vd COMPARTMENT TABLE ===== */}
      <g>
        <rect x="504" y="76" width="452" height="360" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="520" y="98" fontSize="9" fontWeight="800" className="fill-foreground">Vd COMPARTMENT / DRUG TYPES (book 229 — verbatim)</text>
        <text x="520" y="112" fontSize="6.5" className="fill-muted-foreground">Vd = amount of drug in the body / plasma drug concentration</text>

        {/* Header row at y=124-160 (height 36) */}
        <rect x="520" y="124" width="80" height="36" className="fill-secondary stroke-border" />
        <text x="560" y="147" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">Vd</text>

        <rect x="600" y="124" width="150" height="36" className="fill-brand-soft stroke-border" />
        <text x="675" y="147" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">COMPARTMENT</text>

        <rect x="750" y="124" width="190" height="36" className="fill-warning-soft stroke-border" />
        <text x="845" y="147" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-warning">DRUG TYPES</text>

        {/* Data rows (3 rows × 70 height = 210) */}
        {[
          { y: 160, label: "Low", compartment: "Intravascular", types: "Large/charged molecules; plasma protein bound", tone: "brand" },
          { y: 230, label: "Medium", compartment: "ECF", types: "Small hydrophilic molecules", tone: "warning" },
          { y: 300, label: "High", compartment: "All tissues including fat", types: "Small lipophilic molecules, especially if bound to tissue protein", tone: "emergency" },
        ].map((row, i) => (
          <g key={i}>
            <rect x="520" y={row.y} width="80" height="70" className={i % 2 === 0 ? "fill-secondary/40 stroke-border" : "fill-card stroke-border"} />
            <text x="560" y={row.y + 40} textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">{row.label}</text>

            <rect x="600" y={row.y} width="150" height="70" className={i % 2 === 0 ? "fill-brand-soft/30 stroke-border" : "fill-card stroke-border"} />
            <text x="675" y={row.y + 40} textAnchor="middle" fontSize="8" fontWeight="700" className="fill-foreground">{row.compartment}</text>

            <rect x="750" y={row.y} width="190" height="70" className={i % 2 === 0 ? "fill-warning-soft/30 stroke-border" : "fill-card stroke-border"} />
            <text x="845" y={row.y + 30} textAnchor="middle" fontSize="7" fontWeight="700" className="fill-foreground">{row.types}</text>
          </g>
        ))}

        {/* Rule strip below the table */}
        <rect x="520" y="378" width="420" height="50" rx="8" className="fill-card stroke-border" />
        <text x="530" y="396" fontSize="6.5" fontWeight="700" className="fill-foreground">Liver &amp; kidney disease ↑ Vd (↓ protein binding). Hemodialysis: most effective for LOW-Vd drugs.</text>
        <text x="530" y="410" fontSize="6.5" fontWeight="700" className="fill-foreground">t1/2 = 0.7 × Vd / CL (high Vd → long t1/2; low Vd → dialyzable).</text>
        <text x="530" y="423" fontSize="6.5" className="fill-muted-foreground">Drugs may distribute in more than one compartment.</text>
      </g>

      {/* ===== MIDDLE-LEFT: CLEARANCE & HALF-LIFE ===== */}
      <g>
        <rect x="24" y="450" width="460" height="230" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="472" fontSize="9" fontWeight="800" className="fill-foreground">CLEARANCE &amp; HALF-LIFE</text>
        <text x="40" y="486" fontSize="6.5" className="fill-muted-foreground">How fast the body clears the drug; how long the drug stays</text>

        {/* CL equation panel */}
        <rect x="40" y="500" width="428" height="56" rx="8" className="fill-card stroke-brand" />
        <text x="56" y="520" fontSize="8" fontWeight="800" className="fill-brand">CLEARANCE (CL)</text>
        <text x="56" y="534" fontSize="7" className="fill-foreground">CL = rate of elimination / plasma drug concentration = Vd × Ke (elimination constant)</text>
        <text x="56" y="546" fontSize="7" className="fill-muted-foreground">Volume of plasma cleared per unit time; impaired by cardiac, hepatic, or renal dysfunction.</text>

        {/* t1/2 equation panel */}
        <rect x="40" y="566" width="428" height="56" rx="8" className="fill-card stroke-emergency" />
        <text x="56" y="586" fontSize="8" fontWeight="800" className="fill-emergency">HALF-LIFE (t1/2)</text>
        <text x="56" y="600" fontSize="7" className="fill-foreground">t1/2 = 0.7 × Vd / CL  (first-order elimination)</text>
        <text x="56" y="612" fontSize="7" className="fill-muted-foreground">Time to eliminate 1/2 of the drug. ↑Vd or ↓CL → ↑t1/2. Both move t1/2 the same direction.</text>

        {/* Steady-state rules */}
        <rect x="40" y="632" width="428" height="40" rx="8" className="fill-brand-soft stroke-brand" />
        <text x="56" y="650" fontSize="8" fontWeight="800" className="fill-brand">STEADY STATE</text>
        <text x="56" y="664" fontSize="7" className="fill-foreground">4-5 half-lives to steady state · 3.3 half-lives to 90% of steady state · rate in = rate out</text>
      </g>

      {/* ===== MIDDLE-RIGHT: HALF-LIFE REMAINING STRIP ===== */}
      <g>
        <rect x="504" y="450" width="452" height="230" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="520" y="472" fontSize="9" fontWeight="800" className="fill-foreground">HALF-LIFE REMAINING (book 229 — verbatim)</text>
        <text x="520" y="486" fontSize="6.5" className="fill-muted-foreground">% of drug remaining after each half-life of first-order elimination</text>

        {/* Column strip: 4 columns × 100 height */}
        {[
          { n: 1, pct: "50%", color: "fill-brand-soft stroke-brand", text: "fill-brand" },
          { n: 2, pct: "25%", color: "fill-warning-soft stroke-warning", text: "fill-warning" },
          { n: 3, pct: "12.5%", color: "fill-emergency-soft stroke-emergency", text: "fill-emergency" },
          { n: 4, pct: "6.25%", color: "fill-neural-soft stroke-neural", text: "fill-neural" },
        ].map((col, i) => (
          <g key={i}>
            <rect x={520 + i * 105} y={500} width={100} height={110} rx="8" className={col.color} />
            <text x={570 + i * 105} y={528} textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">{col.n}</text>
            <text x={570 + i * 105} y={540} textAnchor="middle" fontSize="6" className="fill-muted-foreground">half-life{col.n === 1 ? "" : "s"}</text>
            <text x={570 + i * 105} y={585} textAnchor="middle" fontSize="14" fontWeight="800" className={col.text}>{col.pct}</text>
            <text x={570 + i * 105} y={600} textAnchor="middle" fontSize="6" className="fill-muted-foreground">remaining</text>
          </g>
        ))}

        {/* Annotation */}
        <text x="520" y="630" fontSize="7" fontWeight="700" className="fill-foreground">Each half-life halves the remaining drug (or accumulates half the gap to plateau).</text>
        <text x="520" y="644" fontSize="6.5" className="fill-muted-foreground">Symmetric: 1 half-life = 50% of plateau (or 50% eliminated); 4 half-lives ≈ 94% of plateau.</text>
        <text x="520" y="657" fontSize="6.5" className="fill-muted-foreground">After discontinuation, the same decay applies to washout.</text>
        <text x="520" y="672" fontSize="6.5" fontWeight="700" className="fill-brand">3.3 half-lives → 90% of steady state; 4-5 half-lives → steady state.</text>
      </g>

      {/* ===== BOTTOM: AGE-RELATED PK CHANGES 2x2 GRID ===== */}
      <g>
        <rect x="24" y="694" width="932" height="386" rx="14" className="fill-secondary/40 stroke-emergency" />
        <text x="40" y="716" fontSize="9" fontWeight="800" className="fill-emergency">AGE-RELATED CHANGES IN PHARMACOKINETICS</text>
        <text x="40" y="730" fontSize="6.5" className="fill-muted-foreground">Aging rewires every PK constant — older patients often require reduced doses to prevent toxicity</text>

        {/* Top-left: Absorption */}
        <rect x="40" y="744" width="448" height="160" rx="10" className="fill-card stroke-border" />
        <text x="56" y="766" fontSize="9" fontWeight="800" className="fill-emergency">▘ ABSORPTION</text>
        <text x="56" y="790" fontSize="8" fontWeight="700" className="fill-foreground">Mostly unaffected</text>
        <text x="56" y="812" fontSize="7" className="fill-muted-foreground">Gut motility and surface area do not significantly change with age.</text>
        <text x="56" y="826" fontSize="7" className="fill-muted-foreground">Absorption rate may slow slightly, but the extent of absorption is preserved.</text>
        <text x="56" y="846" fontSize="7" fontWeight="700" className="fill-foreground">Clinical: standard oral dosing is acceptable for absorption.</text>
        <text x="56" y="868" fontSize="7" className="fill-muted-foreground">Toxicity in the elderly is NOT from ↑ absorption — look elsewhere (Vd, CL, t1/2).</text>

        {/* Top-right: Distribution */}
        <rect x="498" y="744" width="448" height="160" rx="10" className="fill-card stroke-border" />
        <text x="514" y="766" fontSize="9" fontWeight="800" className="fill-emergency">▘ DISTRIBUTION</text>
        <text x="514" y="790" fontSize="8" fontWeight="700" className="fill-foreground">↓ Total body water · ↑ Total body fat</text>
        <text x="514" y="812" fontSize="7" className="fill-foreground">↓ TBW → ↓ Vd of hydrophilic drugs → ↑ plasma concentration (smaller compartment, same dose).</text>
        <text x="514" y="826" fontSize="7" className="fill-foreground">↑ TBF → ↑ Vd of lipophilic drugs → ↑ half-life (drug hides in fat, clearance cannot find it).</text>
        <text x="514" y="846" fontSize="7" fontWeight="700" className="fill-emergency">Hydrophilic concentrates; lipophilic lingers — opposite directions, both toxic.</text>
        <text x="514" y="868" fontSize="7" className="fill-muted-foreground">Examples: digoxin (lipophilic, ↑ t1/2); lithium (hydrophilic, ↑ concentration).</text>

        {/* Bottom-left: Metabolism */}
        <rect x="40" y="912" width="448" height="160" rx="10" className="fill-card stroke-border" />
        <text x="56" y="934" fontSize="9" fontWeight="800" className="fill-emergency">▘ METABOLISM</text>
        <text x="56" y="958" fontSize="8" fontWeight="700" className="fill-foreground">↓ Hepatic mass &amp; blood flow → ↓ first-pass, ↓ hepatic clearance</text>
        <text x="56" y="980" fontSize="7" className="fill-foreground">Phase I (CYP450 oxidation/reduction/hydrolysis): DECREASED in the elderly.</text>
        <text x="56" y="994" fontSize="7" className="fill-foreground">Phase II (conjugation — glucuronidation, sulfation, acetylation): RELATIVELY PRESERVED.</text>
        <text x="56" y="1014" fontSize="7" fontWeight="700" className="fill-emergency">Phase I falls, Phase II preserved → prefer LOT (Lorazepam, Oxazepam, Temazepam).</text>
        <text x="56" y="1036" fontSize="7" className="fill-muted-foreground">Avoid diazepam/chlordiazepoxide/midazolam (Phase I-oxidized) — longer t1/2 in elderly.</text>

        {/* Bottom-right: Excretion */}
        <rect x="498" y="912" width="448" height="160" rx="10" className="fill-card stroke-border" />
        <text x="514" y="934" fontSize="9" fontWeight="800" className="fill-emergency">▘ EXCRETION</text>
        <text x="514" y="958" fontSize="8" fontWeight="700" className="fill-foreground">↓ Renal mass &amp; blood flow → ↓ GFR → ↓ renal clearance</text>
        <text x="514" y="980" fontSize="7" className="fill-foreground">Renally-cleared drugs (digoxin, lithium, vancomycin, aminoglycosides, metformin) accumulate.</text>
        <text x="514" y="994" fontSize="7" className="fill-foreground">t1/2 rises → steady-state concentration rises → toxicity at standard doses.</text>
        <text x="514" y="1014" fontSize="7" fontWeight="700" className="fill-emergency">CrCl-based dosing required for every renally-cleared drug in the elderly.</text>
        <text x="514" y="1036" fontSize="7" className="fill-muted-foreground">Drug-disease interaction: CKD + elderly multiplies the renal CL decline.</text>
      </g>

      {/* ===== MNEMONIC CALLOUT ===== */}
      <g>
        <rect x="24" y="1094" width="932" height="62" rx="10" className="fill-brand-soft stroke-brand" />
        <text x="490" y="1120" textAnchor="middle" fontSize="11" fontWeight="800" className="fill-brand">FOUR TO FIVE HALF-LIVES TO STEADY STATE · 0.7 × Vd / CL = t1/2</text>
        <text x="490" y="1140" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-foreground">Low Vd = dialyzable, high Vd = not · Phase I falls, Phase II preserved in the elderly</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Drug metabolism — Phase I → Phase II → Excretion flow (PH3, book 230)
// ---------------------------------------------------------------------------

export function DrugMetabolismMap() {
  const w = 980;
  const h = 1100;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Drug metabolism — the map (an original KYP redraw of the source page book 230 — the Phase I to Phase II to Excretion flow diagram with the Lipophilic drugs input rail at top-left and the Polar drugs water-soluble input rail at top-right; the Phase I box labeled predominantly CYP450-dependent containing the four reaction types Reduction, Oxidation, Hydrolysis, Methylation, outputting a Slightly polar metabolite (active or inactive) plus Reactive oxygen metabolites; the Phase II box containing the three conjugation reactions Glucuronidation, Acetylation, Sulfation, outputting a Very polar hydrophilic metabolite except the acetylated metabolite which is less polar; the Excretion box with Serum (urine, sweat) and bile (stool) routes; the Phase I reaction list table; the Phase II reaction list table; the two modifier callouts Geriatric patients lose phase I first and Slow acetylators have increased adverse effects (eg, isoniazid); and the PHASE I = OXIDIZE REDUCE HYDROLYZE METHYLATE (CYP450) mnemonic callout at the bottom; no copyrighted photographs on the page)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Drug metabolism — the map (original KYP redraw)</text>
        <rect x="700" y="24" width="232" height="18" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">2 phases · 2 tables · 2 modifiers</text>
      </g>

      {/* ===== INPUT RAILS ===== */}
      <g>
        <rect x="60" y="80" width="240" height="32" rx="8" className="fill-brand-soft stroke-brand" />
        <text x="180" y="101" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">Lipophilic drugs</text>

        <rect x="680" y="80" width="240" height="32" rx="8" className="fill-warning-soft stroke-warning" />
        <text x="800" y="101" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-warning">Polar drugs (water-soluble)</text>
      </g>

      {/* ===== ARROWS: input rails to phase boxes ===== */}
      <g>
        {/* Lipophilic → Phase I (vertical down) */}
        <line x1="180" y1="112" x2="180" y2="140" stroke="currentColor" strokeWidth="1.6" className="text-brand" />
        <polygon points="176,138 180,148 184,138" className="fill-brand" />
        {/* Polar → Phase II (vertical down) */}
        <line x1="800" y1="112" x2="800" y2="140" stroke="currentColor" strokeWidth="1.6" className="text-warning" />
        <polygon points="796,138 800,148 804,138" className="fill-warning" />
      </g>

      {/* ===== PHASE I BOX ===== */}
      <g>
        <rect x="40" y="150" width="440" height="300" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="56" y="172" fontSize="10" fontWeight="800" className="fill-brand">PHASE I  (predominantly CYP450-dependent)</text>
        <text x="56" y="186" fontSize="6.5" className="fill-muted-foreground">Introduces/unmasks a functional group → slightly polar metabolite</text>

        {/* 4 reaction sub-boxes */}
        {[
          { x: 50, label: "Reduction" },
          { x: 160, label: "Oxidation" },
          { x: 270, label: "Hydrolysis" },
          { x: 380, label: "Methylation" },
        ].map((r, i) => (
          <g key={i}>
            <rect x={r.x} y={200} width={i === 3 ? 90 : 100} height={36} rx="6" className="fill-card stroke-brand" />
            <text x={r.x + (i === 3 ? 45 : 50)} y={222} textAnchor="middle" fontSize="8" fontWeight="700" className="fill-foreground">{r.label}</text>
          </g>
        ))}

        {/* reactive oxygen metabolites note */}
        <text x="56" y="258" fontSize="7" fontWeight="700" className="fill-emergency">+ Reactive oxygen metabolites (CYP450 byproduct)</text>

        {/* Output panel inside Phase I */}
        <rect x="50" y="280" width="420" height="80" rx="10" className="fill-card stroke-border" />
        <text x="60" y="302" fontSize="8" fontWeight="800" className="fill-brand">PHASE I OUTPUT</text>
        <text x="60" y="318" fontSize="7.5" fontWeight="700" className="fill-foreground">Slightly polar metabolite</text>
        <text x="60" y="330" fontSize="7" className="fill-muted-foreground">(active or inactive — codeine → morphine = bioactivation;</text>
        <text x="60" y="342" fontSize="7" className="fill-muted-foreground">diazepam → oxazepam preserves activity; most are deactivated)</text>
        <text x="60" y="354" fontSize="7" fontWeight="700" className="fill-emergency">Plus reactive oxygen metabolites (oxidative stress source)</text>

        {/* Bioactivation note */}
        <text x="56" y="382" fontSize="6.5" className="fill-muted-foreground">Active or inactive — Phase I can bioactivate (prodrug → active), deactivate, or preserve activity.</text>
        <text x="56" y="394" fontSize="6.5" className="fill-muted-foreground">CYP450 = heme-thiolate monooxygenase (CYP3A4, 2D6, 2E1, 1A2 major isoforms).</text>
        <text x="56" y="406" fontSize="6.5" fontWeight="700" className="fill-brand">Examples: codeine CYP2D6 → morphine; diazepam CYP3A4 → nordiazepam.</text>
      </g>

      {/* ===== PHASE II BOX ===== */}
      <g>
        <rect x="510" y="150" width="430" height="300" rx="14" className="fill-secondary/40 stroke-warning" />
        <text x="526" y="172" fontSize="10" fontWeight="800" className="fill-warning">PHASE II  (conjugation)</text>
        <text x="526" y="186" fontSize="6.5" className="fill-muted-foreground">Attaches a bulky polar conjugate → very polar hydrophilic metabolite</text>

        {/* 3 reaction sub-boxes */}
        {[
          { x: 520, label: "Glucuronidation" },
          { x: 660, label: "Acetylation" },
          { x: 800, label: "Sulfation" },
        ].map((r, i) => (
          <g key={i}>
            <rect x={r.x} y={200} width={130} height={36} rx="6" className="fill-card stroke-warning" />
            <text x={r.x + 65} y={222} textAnchor="middle" fontSize="8" fontWeight="700" className="fill-foreground">{r.label}</text>
          </g>
        ))}

        {/* donor note */}
        <text x="526" y="258" fontSize="7" fontWeight="700" className="fill-foreground">Donors: UDP-glucuronic acid (UGT) · Acetyl-CoA (NAT1/NAT2) · PAPS (SULT)</text>

        {/* Output panel inside Phase II */}
        <rect x="520" y="280" width="410" height="80" rx="10" className="fill-card stroke-border" />
        <text x="530" y="302" fontSize="8" fontWeight="800" className="fill-warning">PHASE II OUTPUT</text>
        <text x="530" y="318" fontSize="7.5" fontWeight="700" className="fill-foreground">Very polar, hydrophilic metabolite</text>
        <text x="530" y="332" fontSize="7" fontWeight="700" className="fill-emergency">EXCEPT acetylated metabolite — LESS polar than the parent</text>
        <text x="530" y="346" fontSize="7" className="fill-muted-foreground">(the lone Phase II exception — why slow acetylators accumulate isoniazid:</text>
        <text x="530" y="358" fontSize="7" className="fill-muted-foreground">slower formation AND less-polar product is less readily excreted)</text>

        {/* Notes */}
        <text x="526" y="382" fontSize="6.5" className="fill-muted-foreground">Glucuronidation (UGT, UDP-glucuronic acid) · Sulfation (SULT, PAPS) make metabolite very polar.</text>
        <text x="526" y="394" fontSize="6.5" className="fill-muted-foreground">Acetylation (NAT1/NAT2, acetyl-CoA) MASKS the amine → less polar product.</text>
        <text x="526" y="406" fontSize="6.5" fontWeight="700" className="fill-warning">Examples: lorazepam UGT; isoniazid NAT2; acetaminophen UGT/SULT.</text>
      </g>

      {/* ===== ARROW: Phase I → Phase II (slightly polar → conjugation) ===== */}
      <g>
        <line x1="470" y1="320" x2="510" y2="320" stroke="currentColor" strokeWidth="1.8" className="text-foreground" />
        <polygon points="506,316 516,320 506,324" className="fill-foreground" />
        <text x="490" y="313" textAnchor="middle" fontSize="6" fontWeight="700" className="fill-muted-foreground">slightly</text>
        <text x="490" y="324" textAnchor="middle" fontSize="6" fontWeight="700" className="fill-muted-foreground">polar →</text>
      </g>

      {/* ===== EXCRETION BOX ===== */}
      <g>
        {/* Arrow Phase II → Excretion */}
        <line x1="725" y1="450" x2="725" y2="478" stroke="currentColor" strokeWidth="1.8" className="text-warning" />
        <polygon points="721,476 725,486 729,476" className="fill-warning" />

        <rect x="300" y="478" width="640" height="50" rx="10" className="fill-brand-soft stroke-brand" />
        <text x="620" y="500" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-brand">EXCRETION</text>
        <text x="620" y="516" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-foreground">Serum (urine, sweat) · bile (stool)</text>

        {/* Side note */}
        <text x="60" y="500" fontSize="7" fontWeight="700" className="fill-muted-foreground">Kidney filters water-soluble</text>
        <text x="60" y="512" fontSize="7" fontWeight="700" className="fill-muted-foreground">metabolites; liver secretes</text>
        <text x="60" y="524" fontSize="7" fontWeight="700" className="fill-muted-foreground">larger conjugates into bile.</text>
      </g>

      {/* ===== NOT-NECESSARILY-SEQUENTIAL CALLOUT ===== */}
      <g>
        <rect x="40" y="444" width="260" height="30" rx="6" className="fill-card stroke-border" />
        <text x="50" y="459" fontSize="6.5" fontWeight="700" className="fill-foreground">Not necessarily sequential —</text>
        <text x="50" y="469" fontSize="6.5" fontWeight="700" className="fill-foreground">phase I can follow phase II.</text>
      </g>

      {/* ===== PHASE I REACTION LIST TABLE ===== */}
      <g>
        <rect x="24" y="548" width="932" height="180" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="570" fontSize="9" fontWeight="800" className="fill-brand">PHASE I REACTION LIST (book 230 — verbatim)</text>
        <text x="40" y="584" fontSize="6.5" className="fill-muted-foreground">Phase I (predominantly CYP450-dependent): Reduction, Oxidation, Hydrolysis, Methylation → slightly polar metabolite (active or inactive) + reactive oxygen metabolites</text>

        {/* Header row at y=594-624 (height 30) */}
        <rect x="40" y="594" width="160" height="30" className="fill-secondary stroke-border" />
        <text x="120" y="613" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-foreground">Phase I reaction</text>
        <rect x="200" y="594" width="240" height="30" className="fill-brand-soft stroke-border" />
        <text x="320" y="613" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-brand">Catalyst / note</text>
        <rect x="440" y="594" width="260" height="30" className="fill-warning-soft stroke-border" />
        <text x="570" y="613" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-warning">Output</text>
        <rect x="700" y="594" width="240" height="30" className="fill-emergency-soft stroke-border" />
        <text x="820" y="613" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-emergency">Clinical anchor</text>

        {/* Data rows: 4 rows × 25 height = 100 */}
        {[
          { y: 624, c1: "Reduction", c2: "Predominantly CYP450 (anaerobic)", c3: "Slightly polar metabolite + ROM", c4: "Halothane reduction under low O2" },
          { y: 649, c1: "Oxidation", c2: "Predominantly CYP450 (major route)", c3: "Slightly polar metabolite + ROM", c4: "Codeine → morphine (CYP2D6 bioactivation)" },
          { y: 674, c1: "Hydrolysis", c2: "Esterases / amidases (plasma, tissue)", c3: "Slightly polar metabolite", c4: "Procaine → PABA; succinylcholine; aspirin" },
          { y: 699, c1: "Methylation", c2: "Methyltransferases (COMT, TPMT); SAM", c3: "Slightly polar metabolite", c4: "Catechol-O-methylation; TPMT polymorphism" },
        ].map((row, i) => (
          <g key={i}>
            <rect x="40" y={row.y} width="160" height="25" className={i % 2 === 0 ? "fill-card stroke-border" : "fill-secondary/30 stroke-border"} />
            <text x="120" y={row.y + 17} textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-foreground">{row.c1}</text>
            <rect x="200" y={row.y} width="240" height="25" className={i % 2 === 0 ? "fill-card stroke-border" : "fill-secondary/30 stroke-border"} />
            <text x="320" y={row.y + 17} textAnchor="middle" fontSize="7" className="fill-foreground">{row.c2}</text>
            <rect x="440" y={row.y} width="260" height="25" className={i % 2 === 0 ? "fill-card stroke-border" : "fill-secondary/30 stroke-border"} />
            <text x="570" y={row.y + 17} textAnchor="middle" fontSize="7" className="fill-foreground">{row.c3}</text>
            <rect x="700" y={row.y} width="240" height="25" className={i % 2 === 0 ? "fill-card stroke-border" : "fill-secondary/30 stroke-border"} />
            <text x="820" y={row.y + 17} textAnchor="middle" fontSize="7" className="fill-foreground">{row.c4}</text>
          </g>
        ))}
      </g>

      {/* ===== PHASE II REACTION LIST TABLE ===== */}
      <g>
        <rect x="24" y="740" width="932" height="155" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="762" fontSize="9" fontWeight="800" className="fill-warning">PHASE II REACTION LIST (book 230 — verbatim)</text>
        <text x="40" y="776" fontSize="6.5" className="fill-muted-foreground">Phase II (conjugation): Glucuronidation, Acetylation, Sulfation → very polar, hydrophilic metabolite (EXCEPT acetylated metabolite, which is LESS polar than the parent)</text>

        {/* Header row at y=786-816 (height 30) */}
        <rect x="40" y="786" width="160" height="30" className="fill-secondary stroke-border" />
        <text x="120" y="805" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-foreground">Phase II reaction</text>
        <rect x="200" y="786" width="240" height="30" className="fill-brand-soft stroke-border" />
        <text x="320" y="805" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-brand">Conjugate donor</text>
        <rect x="440" y="786" width="260" height="30" className="fill-warning-soft stroke-border" />
        <text x="570" y="805" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-warning">Output</text>
        <rect x="700" y="786" width="240" height="30" className="fill-emergency-soft stroke-border" />
        <text x="820" y="805" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-emergency">Clinical anchor</text>

        {/* Data rows: 3 rows × 30 height = 90 */}
        {[
          { y: 816, c1: "Glucuronidation", c2: "UDP-glucuronic acid (UGT)", c3: "Very polar, hydrophilic metabolite", c4: "Bilirubin; morphine; LOT (loraz/oxaz/temaz)" },
          { y: 846, c1: "Acetylation", c2: "Acetyl-CoA (NAT1/NAT2)", c3: "EXCEPT — less polar than parent", c4: "Isoniazid, hydralazine, procainamide, dapsone" },
          { y: 876, c1: "Sulfation", c2: "PAPS (SULT)", c3: "Very polar, hydrophilic metabolite", c4: "Steroids; acetaminophen sulfate" },
        ].map((row, i) => (
          <g key={i}>
            <rect x="40" y={row.y} width="160" height="30" className={i % 2 === 0 ? "fill-card stroke-border" : "fill-secondary/30 stroke-border"} />
            <text x="120" y={row.y + 18} textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-foreground">{row.c1}</text>
            <rect x="200" y={row.y} width="240" height="30" className={i % 2 === 0 ? "fill-card stroke-border" : "fill-secondary/30 stroke-border"} />
            <text x="320" y={row.y + 18} textAnchor="middle" fontSize="7" className="fill-foreground">{row.c2}</text>
            <rect x="440" y={row.y} width="260" height="30" className={i % 2 === 0 ? "fill-card stroke-border" : "fill-secondary/30 stroke-border"} />
            <text x="570" y={row.y + 18} textAnchor="middle" fontSize="7" className={i === 1 ? "fill-emergency" : "fill-foreground"} fontWeight={i === 1 ? "700" : "400"}>{row.c3}</text>
            <rect x="700" y={row.y} width="240" height="30" className={i % 2 === 0 ? "fill-card stroke-border" : "fill-secondary/30 stroke-border"} />
            <text x="820" y={row.y + 18} textAnchor="middle" fontSize="7" className="fill-foreground">{row.c4}</text>
          </g>
        ))}
      </g>

      {/* ===== MODIFIER CALLOUTS ===== */}
      <g>
        <rect x="24" y="908" width="456" height="120" rx="10" className="fill-card stroke-emergency" />
        <text x="40" y="930" fontSize="9" fontWeight="800" className="fill-emergency">▘ MODIFIER 1 — GERIATRIC</text>
        <text x="40" y="952" fontSize="9" fontWeight="800" className="fill-foreground">Geriatric patients lose Phase I first.</text>
        <text x="40" y="970" fontSize="7" className="fill-foreground">Phase I (CYP450 oxidation, reduction, hydrolysis, methylation) declines with age</text>
        <text x="40" y="982" fontSize="7" className="fill-foreground">as hepatic mass and blood flow fall; Phase II (glucuronidation, sulfation,</text>
        <text x="40" y="994" fontSize="7" className="fill-foreground">acetylation) is relatively PRESERVED.</text>
        <text x="40" y="1012" fontSize="7" fontWeight="700" className="fill-emergency">Use LOT (Lorazepam, Oxazepam, Temazepam) over Phase I-oxidized diazepam.</text>
        <text x="40" y="1024" fontSize="6.5" className="fill-muted-foreground">Phase I-metabolized drugs (diazepam, phenytoin, theophylline) accumulate → toxicity.</text>
      </g>
      <g>
        <rect x="500" y="908" width="456" height="120" rx="10" className="fill-card stroke-warning" />
        <text x="516" y="930" fontSize="9" fontWeight="800" className="fill-warning">▘ MODIFIER 2 — SLOW ACETYLATOR</text>
        <text x="516" y="952" fontSize="9" fontWeight="800" className="fill-foreground">Slow acetylators have ↑ adverse effects from ↓ rate of metabolism.</text>
        <text x="516" y="970" fontSize="7" className="fill-foreground">NAT2 slow-acetylator polymorphism reduces Phase II ACETYLATION (one of three</text>
        <text x="516" y="982" fontSize="7" className="fill-foreground">Phase II reactions) — the acetylated metabolite is LESS polar than the parent</text>
        <text x="516" y="994" fontSize="7" className="fill-foreground">(the page's Phase II exception) → slower formation + less-readily-excreted product.</text>
        <text x="516" y="1012" fontSize="7" fontWeight="700" className="fill-warning">Isoniazid (hepatotox + neuropathy, B6) · hydralazine/procainamide (lupus) · dapsone (hemolysis).</text>
        <text x="516" y="1024" fontSize="6.5" className="fill-muted-foreground">The four NAT2-substrate drugs are the test set.</text>
      </g>

      {/* ===== MNEMONIC CALLOUT ===== */}
      <g>
        <rect x="24" y="1042" width="932" height="48" rx="10" className="fill-brand-soft stroke-brand" />
        <text x="490" y="1066" textAnchor="middle" fontSize="11" fontWeight="800" className="fill-brand">PHASE I = OXIDIZE / REDUCE / HYDROLYZE / METHYLATE (CYP450)</text>
        <text x="490" y="1082" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-foreground">PHASE II = CONJUGATE (GLUCURONIDE / SULFATE / ACETYLATE) · Geriatric loses Phase I · Slow acetylators accumulate (INH, hydralazine, procainamide, dapsone)</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Elimination of drugs — zero-order vs first-order kinetics (PH4, book 230)
// ---------------------------------------------------------------------------

export function EliminationOfDrugsMap() {
  const w = 980;
  const h = 1000;
  // First-order exponential curve: Cp(t) = 4 × 2^(-t/0.5), x = 546 + 190t,
  // y = 352 − 45·Cp — plotted as a polyline at 0.1 h steps.
  const expCurve = [
    [546, 172], [565, 195.3], [584, 215.6], [603, 233.2], [622, 248.6],
    [641, 262], [660, 273.7], [679, 283.8], [698, 292.6], [717, 300.3],
    [736, 307], [755, 312.8], [774, 317.9], [793, 322.3], [812, 326.2],
    [831, 329.5], [850, 332.4], [869, 335], [888, 337.2], [907, 339.1],
    [926, 340.8],
  ].map(([x, y]) => `${x},${y}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Elimination of drugs — the map (an original KYP redraw of the source page book 230 — the zero-order elimination panel with the definition rate of elimination is constant regardless of Cp, constant amount of drug eliminated per unit time, Cp falls linearly with time, capacity-limited, and its graph with the constant 2 U/h elimination rate slope, the shrinking half-life brackets First t1/2 greater than Second t1/2 greater than Third t1/2, and the rule Time of t1/2 rises as concentration rises; the first-order elimination panel with the definition rate directly proportional to the drug concentration, constant fraction of drug eliminated per unit time, Cp falls exponentially with time, applies to most drugs, flow-dependent, and its graph with the falling elimination rate slopes 4 U/h then 2 U/h then 1 U/h then 0.5 U/h, the equal half-life brackets First t1/2 equals Second t1/2 equals Third t1/2, and the rule Time of t1/2 is constant as concentration rises; the PEA mnemonic callout A PEA is round shaped like the 0 in zero-order for Phenytoin Ethanol and Aspirin with the aspirin salicylate-saturation qualifier; the zero-order vs first-order comparison table; and the four-code mnemonic strip; no copyrighted photographs on the page)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Elimination of drugs — the map (original KYP redraw)</text>
        <rect x="700" y="24" width="232" height="18" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">2 orders · 2 graphs · 1 mnemonic</text>
      </g>

      {/* ===== ZERO-ORDER PANEL ===== */}
      <g>
        <rect x="24" y="76" width="456" height="430" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="40" y="98" fontSize="10" fontWeight="800" className="fill-brand">ZERO-ORDER ELIMINATION</text>
        <text x="40" y="112" fontSize="6.5" className="fill-muted-foreground">Capacity-limited elimination — enzymes saturated; constant AMOUNT per unit time</text>
        <text x="40" y="128" fontSize="7" className="fill-foreground">Rate of elimination is constant regardless of Cp (ie, constant</text>
        <text x="40" y="140" fontSize="7" className="fill-foreground">amount of drug eliminated per unit time). Cp ↓ linearly with time.</text>
        <text x="40" y="152" fontSize="7" fontWeight="700" className="fill-brand">Examples: Phenytoin, Ethanol, Aspirin — capacity-limited (see PEA below)</text>

        {/* graph */}
        <line x1="70" y1="170" x2="70" y2="358" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="70" y1="358" x2="450" y2="358" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <text x="74" y="165" fontSize="6.5" className="fill-muted-foreground">Drug plasma concentration ↑</text>
        <text x="410" y="372" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">Time (h)</text>
        <text x="62" y="175.5" textAnchor="end" fontSize="6" className="fill-muted-foreground">4</text>
        <text x="62" y="265.5" textAnchor="end" fontSize="6" className="fill-muted-foreground">2</text>
        <text x="62" y="310.5" textAnchor="end" fontSize="6" className="fill-muted-foreground">1</text>
        <text x="62" y="333" textAnchor="end" fontSize="6" className="fill-muted-foreground">0.5</text>

        {/* halving guides (dashed) */}
        <line x1="70" y1="262" x2="215" y2="262" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground" />
        <line x1="70" y1="307" x2="287.5" y2="307" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground" />
        <line x1="70" y1="329.5" x2="323.75" y2="329.5" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground" />
        <line x1="215" y1="262" x2="215" y2="358" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground" />
        <line x1="287.5" y1="307" x2="287.5" y2="358" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground" />
        <line x1="323.75" y1="329.5" x2="323.75" y2="358" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground" />

        {/* linear Cp decline (constant 2 U/h) */}
        <line x1="70" y1="172" x2="360" y2="352" stroke="currentColor" strokeWidth="2.25" className="text-brand" />
        <circle cx="215" cy="262" r="2.5" className="fill-brand" />
        <circle cx="287.5" cy="307" r="2.5" className="fill-brand" />
        <circle cx="323.75" cy="329.5" r="2.5" className="fill-brand" />

        {/* slope labels */}
        <text x="200" y="230" fontSize="6" fontWeight="700" className="fill-brand">2 U/h</text>
        <text x="330" y="290" fontSize="6" fontWeight="700" className="fill-brand">2 U/h</text>
        <text x="250" y="196" fontSize="6.5" fontWeight="700" className="fill-brand">Elimination rate (=slope) = 2 U/h throughout</text>

        {/* t1/2 brackets (shrinking intervals) */}
        <line x1="70" y1="364" x2="215" y2="364" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <line x1="70" y1="361" x2="70" y2="364" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <line x1="215" y1="361" x2="215" y2="364" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <line x1="215" y1="364" x2="287.5" y2="364" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <line x1="287.5" y1="361" x2="287.5" y2="364" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <line x1="287.5" y1="364" x2="323.75" y2="364" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <line x1="323.75" y1="361" x2="323.75" y2="364" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <text x="142.5" y="378" textAnchor="middle" fontSize="5.5" fontWeight="700" className="fill-foreground">First t1/2 &gt;</text>
        <text x="251.25" y="378" textAnchor="middle" fontSize="5.5" fontWeight="700" className="fill-foreground">Second t1/2 &gt;</text>
        <text x="305.5" y="378" textAnchor="middle" fontSize="5.5" fontWeight="700" className="fill-foreground">Third t1/2</text>

        {/* annotation box */}
        <rect x="40" y="392" width="424" height="104" rx="10" className="fill-card stroke-border" />
        <text x="52" y="408" fontSize="7" fontWeight="800" className="fill-brand">GRAPH ANNOTATIONS (book 230 — verbatim)</text>
        <text x="52" y="424" fontSize="7" fontWeight="700" className="fill-foreground">First t1/2 &gt; Second t1/2 &gt; Third t1/2 — each successive half-life is SHORTER</text>
        <text x="52" y="438" fontSize="7" className="fill-foreground">Time of t1/2 ↑ as concentration ↑ — t1/2 is NOT constant (zero-order)</text>
        <text x="52" y="452" fontSize="7" className="fill-foreground">Elimination rate (=slope) constant at 2 U/h — the same amount leaves every hour</text>
        <text x="52" y="466" fontSize="6.5" className="fill-muted-foreground">Capacity-limited: enzymes saturated (Michaelis-Menten, [S] &gt;&gt; Km)</text>
        <text x="52" y="480" fontSize="6.5" fontWeight="700" className="fill-emergency">Aspirin joins at high/toxic conc only — ↑ salicylate saturation</text>
      </g>

      {/* ===== FIRST-ORDER PANEL ===== */}
      <g>
        <rect x="500" y="76" width="456" height="430" rx="14" className="fill-secondary/40 stroke-warning" />
        <text x="516" y="98" fontSize="10" fontWeight="800" className="fill-warning">FIRST-ORDER ELIMINATION</text>
        <text x="516" y="112" fontSize="6.5" className="fill-muted-foreground">Flow-dependent elimination — enzymes unsaturated; constant FRACTION per unit time</text>
        <text x="516" y="128" fontSize="7" className="fill-foreground">Rate of first-order elimination is directly proportional to the drug</text>
        <text x="516" y="140" fontSize="7" className="fill-foreground">concentration (ie, constant fraction of drug eliminated per unit time).</text>
        <text x="516" y="152" fontSize="7" fontWeight="700" className="fill-warning">Cp ↓ exponentially with time. Applies to most drugs.</text>

        {/* graph */}
        <line x1="546" y1="170" x2="546" y2="358" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="546" y1="358" x2="926" y2="358" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <text x="550" y="165" fontSize="6.5" className="fill-muted-foreground">Drug plasma concentration ↑</text>
        <text x="886" y="372" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">Time (h)</text>
        <text x="538" y="175.5" textAnchor="end" fontSize="6" className="fill-muted-foreground">4</text>
        <text x="538" y="265.5" textAnchor="end" fontSize="6" className="fill-muted-foreground">2</text>
        <text x="538" y="310.5" textAnchor="end" fontSize="6" className="fill-muted-foreground">1</text>
        <text x="538" y="333" textAnchor="end" fontSize="6" className="fill-muted-foreground">0.5</text>

        {/* halving guides (dashed) */}
        <line x1="546" y1="262" x2="641" y2="262" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground" />
        <line x1="546" y1="307" x2="736" y2="307" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground" />
        <line x1="546" y1="329.5" x2="831" y2="329.5" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground" />
        <line x1="641" y1="262" x2="641" y2="358" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground" />
        <line x1="736" y1="307" x2="736" y2="358" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground" />
        <line x1="831" y1="329.5" x2="831" y2="358" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground" />

        {/* exponential Cp decline */}
        <polyline points={expCurve} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-warning" />
        <circle cx="641" cy="262" r="2.5" className="fill-warning" />
        <circle cx="736" cy="307" r="2.5" className="fill-warning" />
        <circle cx="831" cy="329.5" r="2.5" className="fill-warning" />

        {/* slope labels (falling with Cp) */}
        <text x="583" y="210" fontSize="6" fontWeight="700" className="fill-warning">4 U/h</text>
        <text x="668" y="262" fontSize="6" fontWeight="700" className="fill-warning">2 U/h</text>
        <text x="763" y="305" fontSize="6" fontWeight="700" className="fill-warning">1 U/h</text>
        <text x="855" y="327" fontSize="6" fontWeight="700" className="fill-warning">0.5 U/h</text>
        <text x="700" y="196" fontSize="6.5" fontWeight="700" className="fill-warning">Elimination rate (=slope) FALLS as Cp falls</text>

        {/* t1/2 brackets (equal intervals) */}
        <line x1="546" y1="364" x2="641" y2="364" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <line x1="546" y1="361" x2="546" y2="364" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <line x1="641" y1="361" x2="641" y2="364" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <line x1="641" y1="364" x2="736" y2="364" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <line x1="736" y1="361" x2="736" y2="364" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <line x1="736" y1="364" x2="831" y2="364" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <line x1="831" y1="361" x2="831" y2="364" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <text x="593.5" y="378" textAnchor="middle" fontSize="5.5" fontWeight="700" className="fill-foreground">First t1/2 =</text>
        <text x="688.5" y="378" textAnchor="middle" fontSize="5.5" fontWeight="700" className="fill-foreground">Second t1/2 =</text>
        <text x="783.5" y="378" textAnchor="middle" fontSize="5.5" fontWeight="700" className="fill-foreground">Third t1/2</text>

        {/* annotation box */}
        <rect x="516" y="392" width="424" height="104" rx="10" className="fill-card stroke-border" />
        <text x="528" y="408" fontSize="7" fontWeight="800" className="fill-warning">GRAPH ANNOTATIONS (book 230 — verbatim)</text>
        <text x="528" y="424" fontSize="7" fontWeight="700" className="fill-foreground">First t1/2 = Second t1/2 = Third t1/2 — every half-life takes the SAME time</text>
        <text x="528" y="438" fontSize="7" className="fill-foreground">Time of t1/2 is constant as concentration ↑ — t1/2 is a fixed property</text>
        <text x="528" y="452" fontSize="7" className="fill-foreground">Elimination rate (=slope) falls: 4 U/h → 2 U/h → 1 U/h → 0.5 U/h as Cp halves</text>
        <text x="528" y="466" fontSize="6.5" className="fill-muted-foreground">Flow-dependent: enzymes unsaturated (S well below Km) — delivery limits elimination</text>
        <text x="528" y="480" fontSize="6.5" fontWeight="700" className="fill-warning">Applies to most drugs — constant t1/2 → 4-5 half-lives to steady state</text>
      </g>

      {/* ===== PEA MNEMONIC CALLOUT ===== */}
      <g>
        <rect x="24" y="520" width="932" height="66" rx="10" className="fill-brand-soft stroke-brand" />
        <text x="490" y="546" textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-brand">A PEA IS ROUND, SHAPED LIKE THE “0” IN ZERO-ORDER (the page’s own mnemonic)</text>
        <text x="490" y="566" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-foreground">Phenytoin · Ethanol · Aspirin — the zero-order drugs (aspirin only at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination)</text>
      </g>

      {/* ===== COMPARISON TABLE ===== */}
      <g>
        <rect x="24" y="600" width="932" height="226" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="622" fontSize="9" fontWeight="800" className="fill-brand">THE ELIMINATION COMPARISON (book 230 — carried verbatim)</text>
        <text x="40" y="636" fontSize="6.5" className="fill-muted-foreground">Zero-order: capacity-limited · constant amount · Cp ↓ linearly — First-order: flow-dependent · constant fraction · Cp ↓ exponentially</text>

        {/* header row */}
        <rect x="40" y="646" width="170" height="28" className="fill-secondary stroke-border" />
        <text x="125" y="664" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-foreground">Parameter</text>
        <rect x="210" y="646" width="360" height="28" className="fill-brand-soft stroke-border" />
        <text x="390" y="664" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-brand">Zero-order elimination</text>
        <rect x="570" y="646" width="360" height="28" className="fill-warning-soft stroke-border" />
        <text x="750" y="664" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-warning">First-order elimination</text>

        {/* data rows */}
        {[
          { y: 674, c1: "Rate of elimination", c2: "Constant regardless of Cp — constant AMOUNT per unit time", c3: "Proportional to Cp — constant FRACTION per unit time" },
          { y: 702, c1: "Cp vs time", c2: "Cp ↓ linearly with time", c3: "Cp ↓ exponentially with time" },
          { y: 730, c1: "Kinetic type", c2: "Capacity-limited elimination", c3: "Flow-dependent elimination" },
          { y: 758, c1: "Examples", c2: "Phenytoin, Ethanol, Aspirin (high/toxic conc → salicylate saturation)", c3: "Applies to most drugs" },
          { y: 786, c1: "t1/2 behavior", c2: "First &gt; Second &gt; Third — t1/2 ↑ as concentration ↑", c3: "First = Second = Third — t1/2 constant" },
        ].map((row, i) => (
          <g key={i}>
            <rect x="40" y={row.y} width="170" height="28" className={i % 2 === 0 ? "fill-card stroke-border" : "fill-secondary/30 stroke-border"} />
            <text x="125" y={row.y + 18} textAnchor="middle" fontSize="7" fontWeight="700" className="fill-foreground">{row.c1}</text>
            <rect x="210" y={row.y} width="360" height="28" className={i % 2 === 0 ? "fill-card stroke-border" : "fill-secondary/30 stroke-border"} />
            <text x="390" y={row.y + 18} textAnchor="middle" fontSize="7" className="fill-foreground">{row.c2}</text>
            <rect x="570" y={row.y} width="360" height="28" className={i % 2 === 0 ? "fill-card stroke-border" : "fill-secondary/30 stroke-border"} />
            <text x="750" y={row.y + 18} textAnchor="middle" fontSize="7" className="fill-foreground">{row.c3}</text>
          </g>
        ))}
      </g>

      {/* ===== FOUR-CODE MNEMONIC STRIP ===== */}
      <g>
        <rect x="24" y="840" width="932" height="146" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="862" fontSize="9" fontWeight="800" className="fill-brand">THE FOUR CODES</text>
        <text x="40" y="884" fontSize="8" fontWeight="800" className="fill-foreground">1 · A PEA IS ROUND, SHAPED LIKE THE “0” IN ZERO-ORDER — Phenytoin · Ethanol · Aspirin (aspirin only at high/toxic concentrations)</text>
        <text x="40" y="904" fontSize="8" fontWeight="800" className="fill-foreground">2 · AMOUNT vs FRACTION — zero-order removes a constant AMOUNT per unit time; first-order removes a constant FRACTION</text>
        <text x="40" y="924" fontSize="8" fontWeight="800" className="fill-foreground">3 · LINE vs CURVE — zero-order Cp falls in a straight LINE; first-order Cp falls on an exponential CURVE</text>
        <text x="40" y="944" fontSize="8" fontWeight="800" className="fill-foreground">4 · CAPACITY vs FLOW — zero-order is CAPACITY-limited (enzymes saturated); first-order is FLOW-dependent (enzymes to spare)</text>
        <text x="40" y="964" fontSize="6.5" className="fill-muted-foreground">t1/2 tells the order: constant t1/2 = first-order · t1/2 rising with Cp = zero-order. Code 1 prints on the page; codes 2-4 are KYP-original.</text>
      </g>
    </svg>
  );
}

export function UrinePhEliminationMap() {
  const w = 980;
  const h = 1000;
  // Ionized-species curves (Henderson-Hasselbalch sigmoids), book 231:
  // weak acid (pKa 7.0) rises with pH; weak base (pKa 9.2 — the page's
  // printed example) falls with pH. x = 160 + (pH − 4)·72, y = 750 − 160·f,
  // plotted as polylines at 0.25-pH steps from pH 4 to 14.
  const acidY = (ph: number) => 750 - 160 / (1 + Math.pow(10, 7 - ph));
  const baseY = (ph: number) => 750 - 160 / (1 + Math.pow(10, ph - 9.2));
  const X = (ph: number) => 160 + (ph - 4) * 72;
  const pts: number[] = [];
  for (let ph = 4; ph <= 14.001; ph += 0.25) pts.push(ph);
  const acidCurve = pts.map((ph) => `${X(ph).toFixed(1)},${acidY(ph).toFixed(1)}`).join(" ");
  const baseCurve = pts.map((ph) => `${X(ph).toFixed(1)},${baseY(ph).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Urine pH and drug elimination — the map (an original KYP redraw of the source page book 231 — the governing rule Ionized species are trapped in urine and cleared quickly, Neutral forms can be reabsorbed; the weak-acids panel with phenobarbital, methotrexate, and aspirin salicylates, sodium bicarbonate to alkalinize urine, and the RCOOH lipid soluble to RCOO– + H+ trapped strip; the weak-bases panel with TCAs and amphetamines, trapped in acidic environments, ammonium chloride to acidify urine for severe alkalosis, and the RNH3+ trapped to RNH2 + H+ lipid soluble strip; the TCA caveat that bicarbonate treats the sodium channel-blocking cardiac toxicity but does not accelerate drug elimination; the pKa rule panel with pKa = more acidic and pKa = more basic; the Ionized species formation percent graph redrawn with the rising Weak acid curve, the falling Weak base curve, the 100, 50, 0 gridlines, the 4, 8, 12, 14 pH ticks, and the pKa 9.2 annotation; and the four-code mnemonic strip; no copyrighted photographs on the page)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Urine pH and drug elimination — the map (original KYP redraw)</text>
        <rect x="700" y="24" width="232" height="18" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">2 species · 1 lever · 1 graph</text>
      </g>

      {/* ===== GOVERNING RULE (verbatim) ===== */}
      <g>
        <rect x="24" y="74" width="932" height="42" rx="10" className="fill-brand-soft stroke-brand" />
        <text x="490" y="92" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">“Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.” (book 231 — verbatim)</text>
        <text x="490" y="107" textAnchor="middle" fontSize="6.5" className="fill-foreground">Trapping is a CHARGE problem — the tubule is a lipid membrane: only the neutral form crosses back; the ionized form is stuck in the lumen</text>
      </g>

      {/* ===== WEAK ACIDS PANEL ===== */}
      <g>
        <rect x="24" y="126" width="456" height="262" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="40" y="146" fontSize="10" fontWeight="800" className="fill-brand">WEAK ACIDS</text>
        <text x="40" y="160" fontSize="6.5" className="fill-muted-foreground">Trapped by ALKALINE urine — the strip: RCOOH ⇌ RCOO– + H+</text>
        <text x="40" y="176" fontSize="7" fontWeight="700" className="fill-foreground">Examples: phenobarbital, methotrexate, aspirin (salicylates).</text>
        <text x="40" y="188" fontSize="7" fontWeight="700" className="fill-brand">Treat overdose with sodium bicarbonate to alkalinize urine.</text>

        {/* ionization strip */}
        <rect x="40" y="212" width="160" height="44" rx="8" className="fill-card stroke-border" />
        <text x="120" y="232" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">RCOOH</text>
        <text x="120" y="248" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">(lipid soluble)</text>
        <text x="218" y="206" textAnchor="middle" fontSize="6" fontWeight="700" className="fill-brand">↑ urine pH →</text>
        <line x1="204" y1="234" x2="230" y2="234" stroke="currentColor" strokeWidth="1.6" className="text-brand" />
        <polygon points="236,234 227,230 227,238" className="fill-brand" />
        <rect x="236" y="212" width="190" height="44" rx="8" className="fill-brand-soft stroke-brand" />
        <text x="331" y="232" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">RCOO – + H+</text>
        <text x="331" y="248" textAnchor="middle" fontSize="6.5" fontWeight="700" className="fill-brand">(trapped)</text>

        <text x="40" y="282" fontSize="6.5" className="fill-foreground">Neutral form: RCOOH — lipid soluble — REABSORBED across the tubule</text>
        <text x="40" y="294" fontSize="6.5" fontWeight="800" className="fill-brand">Ionized form: RCOO– — trapped in the lumen — CLEARED quickly</text>
        <text x="40" y="310" fontSize="6.5" fontWeight="700" className="fill-brand">Alkaline urine (pH above pKa) → equilibrium shifts RIGHT → more trapped anion</text>
        <text x="40" y="330" fontSize="7.5" fontWeight="800" className="fill-foreground">PMA — Phenobarbital · Methotrexate · Aspirin (the weak-acid set)</text>
        <text x="40" y="346" fontSize="6.5" className="fill-muted-foreground">Bicarbonate in salicylate poisoning: two jobs — ion trapping + buffering the acidemia</text>
        <text x="40" y="360" fontSize="6.5" className="fill-muted-foreground">Phenobarbital: a long-acting barbiturate — its neutral form is reabsorbed, so alkalinize</text>
      </g>

      {/* ===== WEAK BASES PANEL ===== */}
      <g>
        <rect x="500" y="126" width="456" height="262" rx="14" className="fill-secondary/40 stroke-warning" />
        <text x="516" y="146" fontSize="10" fontWeight="800" className="fill-warning">WEAK BASES</text>
        <text x="516" y="160" fontSize="6.5" className="fill-muted-foreground">“Trapped in acidic environments” — the strip: RNH3+ ⇌ RNH2 + H+</text>
        <text x="516" y="176" fontSize="7" fontWeight="700" className="fill-foreground">Examples: tricyclic antidepressants (TCAs), amphetamines.</text>
        <text x="516" y="188" fontSize="7" fontWeight="700" className="fill-warning">For severe alkalosis, treat with ammonium chloride to acidify urine.</text>

        {/* ionization strip */}
        <rect x="516" y="212" width="160" height="44" rx="8" className="fill-warning-soft stroke-warning" />
        <text x="596" y="232" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-warning">RNH3+</text>
        <text x="596" y="248" textAnchor="middle" fontSize="6.5" fontWeight="700" className="fill-warning">(trapped)</text>
        <text x="694" y="206" textAnchor="middle" fontSize="6" fontWeight="700" className="fill-warning">↓ urine pH →</text>
        <line x1="680" y1="234" x2="706" y2="234" stroke="currentColor" strokeWidth="1.6" className="text-warning" />
        <polygon points="712,234 703,230 703,238" className="fill-warning" />
        <rect x="712" y="212" width="190" height="44" rx="8" className="fill-card stroke-border" />
        <text x="807" y="232" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">RNH2 + H+</text>
        <text x="807" y="248" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">(lipid soluble)</text>

        <text x="516" y="282" fontSize="6.5" fontWeight="800" className="fill-warning">Ionized form: RNH3+ — trapped in the lumen — CLEARED quickly</text>
        <text x="516" y="294" fontSize="6.5" className="fill-foreground">Neutral form: RNH2 — lipid soluble — REABSORBED across the tubule</text>
        <text x="516" y="310" fontSize="6.5" fontWeight="700" className="fill-warning">Acidic urine (pH below pKa) → equilibrium shifts LEFT → more trapped cation</text>
        <text x="516" y="330" fontSize="7.5" fontWeight="800" className="fill-foreground">AA — Amphetamines And TCAs (the weak-base set)</text>
        <text x="516" y="346" fontSize="6.5" className="fill-muted-foreground">Severe alkalosis tilts weak bases toward the neutral form — ammonium chloride restores the trap</text>
        <text x="516" y="360" fontSize="6.5" className="fill-muted-foreground">Vitamin C is the milder acidifying version of the same lever</text>
      </g>

      {/* ===== TCA CAVEAT (verbatim) ===== */}
      <g>
        <rect x="24" y="398" width="932" height="60" rx="10" className="fill-card stroke-emergency" />
        <text x="40" y="416" fontSize="8" fontWeight="800" className="fill-emergency">THE TCA CAVEAT (book 231 — verbatim)</text>
        <text x="40" y="432" fontSize="7" className="fill-foreground">TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking</text>
        <text x="40" y="444" fontSize="7" fontWeight="800" className="fill-emergency">activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination.</text>
      </g>

      {/* ===== pKa RULE + pKa AXIS ===== */}
      <g>
        <rect x="24" y="468" width="456" height="72" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="40" y="486" fontSize="8" fontWeight="800" className="fill-brand">THE pKa RULE (book 231 — verbatim)</text>
        <text x="40" y="502" fontSize="7" className="fill-foreground">pH at which drugs (weak acid or base) are 50% ionized and</text>
        <text x="40" y="514" fontSize="7" className="fill-foreground">50% nonionized. The pKa represents the strength of the</text>
        <text x="40" y="526" fontSize="7" className="fill-foreground">weak acid or base.</text>
      </g>
      <g>
        <rect x="500" y="468" width="456" height="72" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="516" y="486" fontSize="8" fontWeight="800" className="fill-brand">THE pKa AXIS (book 231 — verbatim)</text>
        <text x="516" y="502" fontSize="7" className="fill-foreground">pKa = more acidic — a low pKa is a stronger acid (ionizes at a lower pH)</text>
        <text x="516" y="514" fontSize="7" className="fill-foreground">pKa = more basic — a high pKa is a stronger base</text>
        <text x="516" y="526" fontSize="7" fontWeight="700" className="fill-brand">Each pH unit on the ionizing side of the pKa shifts the split ~tenfold</text>
      </g>

      {/* ===== THE GRAPH (original KYP redraw) ===== */}
      <g>
        <rect x="24" y="550" width="932" height="250" rx="14" className="fill-card stroke-border" />
        <text x="40" y="570" fontSize="9" fontWeight="800" className="fill-brand">THE IONIZED SPECIES FORMATION GRAPH (book 231 — original KYP redraw)</text>

        {/* axes + gridlines */}
        <line x1="100" y1="580" x2="100" y2="750" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="100" y1="750" x2="900" y2="750" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <text x="104" y="578" fontSize="6.5" className="fill-muted-foreground">Ionized species formation (%) ↑</text>
        <line x1="100" y1="590" x2="900" y2="590" stroke="currentColor" strokeWidth="0.6" className="text-muted-foreground" />
        <line x1="100" y1="670" x2="900" y2="670" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 3" className="text-muted-foreground" />
        <line x1="100" y1="750" x2="900" y2="750" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <text x="92" y="593" textAnchor="end" fontSize="6" className="fill-muted-foreground">100</text>
        <text x="92" y="673" textAnchor="end" fontSize="6" className="fill-muted-foreground">50</text>
        <text x="92" y="753" textAnchor="end" fontSize="6" className="fill-muted-foreground">0</text>
        <text x="108" y="664" fontSize="6" className="fill-muted-foreground">50% ionized / 50% nonionized at pH = pKa</text>
        <text x="160" y="764" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">4</text>
        <text x="448" y="764" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">8</text>
        <text x="736" y="764" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">12</text>
        <text x="880" y="764" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">14 pH</text>

        {/* the two curves */}
        <polyline points={acidCurve} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-brand" />
        <polyline points={baseCurve} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-warning" />
        <text x="700" y="612" fontSize="7" fontWeight="800" className="fill-brand">Weak acid</text>
        <text x="240" y="614" fontSize="7" fontWeight="800" className="fill-warning">Weak base</text>

        {/* 50% crossings */}
        <circle cx="400" cy="670" r="3" className="fill-brand" />
        <circle cx="534.4" cy="670" r="3" className="fill-warning" />
        <line x1="534.4" y1="674" x2="520" y2="696" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" className="text-warning" />
        <text x="515" y="702" textAnchor="end" fontSize="7" fontWeight="800" className="fill-warning">pKa: 9.2</text>

        {/* pKa axis annotations */}
        <text x="160" y="780" fontSize="6.5" fontWeight="700" className="fill-foreground">pKa = more acidic</text>
        <line x1="330" y1="777" x2="650" y2="777" stroke="currentColor" strokeWidth="1" className="text-muted-foreground" />
        <polygon points="326,777 335,773 335,781" className="fill-muted-foreground" />
        <polygon points="654,777 645,773 645,781" className="fill-muted-foreground" />
        <text x="880" y="780" textAnchor="end" fontSize="6.5" fontWeight="700" className="fill-foreground">pKa = more basic</text>
        <text x="490" y="796" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">The pKa represents the strength of the weak acid or base — a low pKa is a stronger acid; a high pKa is a stronger base</text>
      </g>

      {/* ===== FOUR-CODE MNEMONIC STRIP ===== */}
      <g>
        <rect x="24" y="810" width="932" height="176" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="832" fontSize="9" fontWeight="800" className="fill-brand">THE FOUR CODES</text>
        <text x="40" y="856" fontSize="8" fontWeight="800" className="fill-foreground">1 · ACID-in-ALKALI · BASE-in-ACID — weak ACIDs are trapped in ALKALIne urine; weak BASEs are trapped in ACIDic urine</text>
        <text x="40" y="876" fontSize="8" fontWeight="800" className="fill-foreground">2 · PMA GETS THE BICARB — Phenobarbital · Methotrexate · Aspirin (the weak-acid set → sodium bicarbonate)</text>
        <text x="40" y="896" fontSize="8" fontWeight="800" className="fill-foreground">3 · AA ACIDIFIES — Amphetamines And TCAs (the weak-base set → ammonium chloride for severe alkalosis)</text>
        <text x="40" y="916" fontSize="8" fontWeight="800" className="fill-foreground">4 · 50/50 AT pKa — at pH = pKa the drug is 50% ionized / 50% nonionized (the pKa = strength)</text>
        <text x="40" y="942" fontSize="6.5" className="fill-muted-foreground">The ionized form is always the trapped form; the neutral lipid-soluble form is always the reabsorbed one.</text>
        <text x="40" y="960" fontSize="6.5" className="fill-muted-foreground">All four codes are KYP-original — the page prints no mnemonic in this section (unlike the PEA code on book 230).</text>
      </g>
    </svg>
  );
}

export function DosageCalculationsMap() {
  const w = 980;
  const h = 900;
  // First-order accumulation to steady state (original KYP redraw — the
  // standard 1 − 2^−n identity; no curve is printed on the source page):
  // % of Css after n half-lives = 50 / 75 / 87.5 / 93.75 / 96.9%.
  // x = 140 + n·144 (n = 0…5), y = 690 − 150·(1 − 2^−n).
  const accX = (n: number) => 140 + n * 144;
  const accY = (n: number) => 690 - 150 * (1 - Math.pow(2, -n));
  const accPts: string[] = [];
  for (let n = 0; n <= 5.001; n += 0.1) accPts.push(`${accX(n).toFixed(1)},${accY(n).toFixed(1)}`);
  const accCurve = accPts.join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Dosage calculations — the map (an original KYP redraw of the source page book 231 — the two fraction formulas Loading dose = Cp × Vd over F and Maintenance dose = Cp × CL × τ over F; the variable dictionary Cp target plasma concentration, Vd the tank, CL the drain, τ dosage interval which does not apply for continuous infusions, F bioavailability; the organ-disease rule In renal or liver disease maintenance dose ↓ and loading dose is usually unchanged; the steady-state clock with the accumulation curve at 50, 75, 87.5, 93.75, and about 97 percent after 1 through 5 half-lives and the rule that time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency; and the four-code mnemonic strip; no copyrighted photographs on the page)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Dosage calculations — the map (original KYP redraw)</text>
        <rect x="700" y="24" width="232" height="18" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">2 formulas · 5 variables · 1 clock</text>
      </g>

      {/* ===== LOADING DOSE PANEL ===== */}
      <g>
        <rect x="24" y="74" width="456" height="202" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="40" y="96" fontSize="10" fontWeight="800" className="fill-brand">THE LOADING DOSE (book 231 — verbatim)</text>
        <text x="40" y="110" fontSize="6.5" className="fill-muted-foreground">Fill the tank — a DISTRIBUTION calculation: reach Cp NOW</text>
        <text x="40" y="152" fontSize="10" fontWeight="800" className="fill-foreground">Loading dose =</text>
        <text x="215" y="141" textAnchor="middle" fontSize="11" fontWeight="800" className="fill-foreground">Cp × Vd</text>
        <line x1="155" y1="148" x2="275" y2="148" stroke="currentColor" strokeWidth="1.4" className="text-foreground" />
        <text x="215" y="166" textAnchor="middle" fontSize="11" fontWeight="800" className="fill-foreground">F</text>
        <text x="300" y="160" fontSize="7" fontWeight="700" className="fill-brand">← Vd = the TANK</text>
        <text x="40" y="186" fontSize="7" fontWeight="700" className="fill-foreground">Vd = the tank size — how much drug fills the body to reach Cp</text>
        <text x="40" y="200" fontSize="7" className="fill-foreground">Cp × Vd = the target body burden; ÷ F converts it to the dose to give</text>
        <text x="40" y="216" fontSize="7" fontWeight="800" className="fill-brand">CL is NOT in the formula → organ disease spares the load</text>
        <text x="40" y="232" fontSize="6.5" className="fill-muted-foreground">In renal or liver disease... loading dose is usually unchanged.</text>
        <text x="40" y="246" fontSize="6.5" className="fill-muted-foreground">IV F = 1 (dose = target amount); PO F = 0.5 doubles the dose</text>
        <text x="40" y="260" fontSize="6.5" className="fill-muted-foreground">The load sets the STARTING POINT — it does not set the steady-state clock</text>
      </g>

      {/* ===== MAINTENANCE DOSE PANEL ===== */}
      <g>
        <rect x="500" y="74" width="456" height="202" rx="14" className="fill-secondary/40 stroke-warning" />
        <text x="516" y="96" fontSize="10" fontWeight="800" className="fill-warning">THE MAINTENANCE DOSE (book 231 — verbatim)</text>
        <text x="516" y="110" fontSize="6.5" className="fill-muted-foreground">Match the drain — an ELIMINATION calculation: hold Cp over time</text>
        <text x="516" y="152" fontSize="10" fontWeight="800" className="fill-foreground">Maintenance dose =</text>
        <text x="716" y="141" textAnchor="middle" fontSize="11" fontWeight="800" className="fill-foreground">Cp × CL × τ</text>
        <line x1="656" y1="148" x2="776" y2="148" stroke="currentColor" strokeWidth="1.4" className="text-foreground" />
        <text x="716" y="166" textAnchor="middle" fontSize="11" fontWeight="800" className="fill-foreground">F</text>
        <text x="800" y="160" fontSize="7" fontWeight="700" className="fill-warning">← CL = the DRAIN</text>
        <text x="516" y="186" fontSize="7" fontWeight="700" className="fill-foreground">CL = the drain speed · τ = the refill interval (per-dose amount)</text>
        <text x="516" y="200" fontSize="7" className="fill-foreground">Cp × CL = what the drain removes per unit time; × τ makes it PER DOSE</text>
        <text x="516" y="216" fontSize="7" fontWeight="800" className="fill-warning">Vd is NOT in the formula → organ disease shrinks the maintenance</text>
        <text x="516" y="232" fontSize="6.5" className="fill-muted-foreground">In renal or liver disease, maintenance dose ↓ (CL ↓)</text>
        <text x="516" y="246" fontSize="6.5" className="fill-muted-foreground">Continuous infusions: τ does not apply — infusion rate = Cp × CL</text>
        <text x="516" y="260" fontSize="6.5" className="fill-muted-foreground">q6h → q24h: the per-dose amount ×4, the daily total unchanged</text>
      </g>

      {/* ===== VARIABLE DICTIONARY ===== */}
      <g>
        <rect x="24" y="288" width="176" height="118" rx="10" className="fill-card stroke-border" />
        <text x="40" y="310" fontSize="10" fontWeight="800" className="fill-brand">Cp</text>
        <text x="40" y="328" fontSize="6.5" fontWeight="700" className="fill-foreground">target plasma concentration</text>
        <text x="40" y="344" fontSize="6" className="fill-muted-foreground">the target — the shared first term</text>
        <text x="40" y="356" fontSize="6" className="fill-muted-foreground">of both formulas; set by the</text>
        <text x="40" y="368" fontSize="6" className="fill-muted-foreground">therapeutic window</text>
      </g>
      <g>
        <rect x="213" y="288" width="176" height="118" rx="10" className="fill-card stroke-border" />
        <text x="229" y="310" fontSize="10" fontWeight="800" className="fill-brand">Vd</text>
        <text x="229" y="328" fontSize="6.5" fontWeight="700" className="fill-foreground">volume of distribution</text>
        <text x="229" y="344" fontSize="6" className="fill-muted-foreground">the TANK — the loading dose's</text>
        <text x="229" y="356" fontSize="6" className="fill-muted-foreground">variable; big Vd → big load</text>
        <text x="229" y="368" fontSize="6" className="fill-muted-foreground">(digoxin ~7 L/kg)</text>
      </g>
      <g>
        <rect x="402" y="288" width="176" height="118" rx="10" className="fill-card stroke-border" />
        <text x="418" y="310" fontSize="10" fontWeight="800" className="fill-warning">CL</text>
        <text x="418" y="328" fontSize="6.5" fontWeight="700" className="fill-foreground">clearance</text>
        <text x="418" y="344" fontSize="6" className="fill-muted-foreground">the DRAIN — the maintenance</text>
        <text x="418" y="356" fontSize="6" className="fill-muted-foreground">dose's variable; organ disease</text>
        <text x="418" y="368" fontSize="6" className="fill-muted-foreground">lowers CL (renal, liver)</text>
      </g>
      <g>
        <rect x="591" y="288" width="176" height="118" rx="10" className="fill-card stroke-border" />
        <text x="607" y="310" fontSize="10" fontWeight="800" className="fill-warning">τ (tau)</text>
        <text x="607" y="328" fontSize="6.5" fontWeight="700" className="fill-foreground">dosage interval (time between</text>
        <text x="607" y="340" fontSize="6.5" fontWeight="700" className="fill-foreground">doses); does not apply for</text>
        <text x="607" y="352" fontSize="6.5" fontWeight="700" className="fill-foreground">continuous infusions</text>
        <text x="607" y="372" fontSize="6" className="fill-muted-foreground">× τ → the PER-DOSE amount</text>
      </g>
      <g>
        <rect x="780" y="288" width="176" height="118" rx="10" className="fill-card stroke-border" />
        <text x="796" y="310" fontSize="10" fontWeight="800" className="fill-brand">F</text>
        <text x="796" y="328" fontSize="6.5" fontWeight="700" className="fill-foreground">bioavailability</text>
        <text x="796" y="344" fontSize="6" className="fill-muted-foreground">÷ F in BOTH formulas: IV F = 1;</text>
        <text x="796" y="356" fontSize="6" className="fill-muted-foreground">PO F = 0.5 → double the dose;</text>
        <text x="796" y="368" fontSize="6" className="fill-muted-foreground">first-pass drugs: PO ≫ IV dose</text>
      </g>

      {/* ===== ORGAN-DISEASE RULE (verbatim) ===== */}
      <g>
        <rect x="24" y="418" width="932" height="58" rx="10" className="fill-card stroke-emergency" />
        <text x="40" y="440" fontSize="8" fontWeight="800" className="fill-emergency">In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged. (book 231 — verbatim)</text>
        <text x="40" y="458" fontSize="6.5" className="fill-foreground">The failing organ is the DRAIN (CL ↓), not the TANK (Vd) — reduce the maintenance dose, keep the usual load. t1/2 = 0.7 × Vd / CL lengthens as CL falls, so accumulation is slower AND ends higher.</text>
      </g>

      {/* ===== THE STEADY-STATE CLOCK (verbatim rule + KYP redraw curve) ===== */}
      <g>
        <rect x="24" y="486" width="932" height="256" rx="14" className="fill-card stroke-border" />
        <text x="40" y="506" fontSize="9" fontWeight="800" className="fill-brand">THE STEADY-STATE CLOCK (book 231 rule verbatim + original KYP redraw)</text>
        <text x="40" y="522" fontSize="7.5" fontWeight="800" className="fill-foreground">Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.</text>

        {/* axes */}
        <line x1="140" y1="530" x2="140" y2="690" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="140" y1="690" x2="880" y2="690" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <text x="132" y="545" textAnchor="end" fontSize="6" className="fill-muted-foreground">100</text>
        <text x="132" y="618" textAnchor="end" fontSize="6" className="fill-muted-foreground">50</text>
        <text x="132" y="581" textAnchor="end" fontSize="6" className="fill-muted-foreground">75</text>
        <text x="132" y="693" textAnchor="end" fontSize="6" className="fill-muted-foreground">0</text>
        <text x="146" y="556" fontSize="6.5" className="fill-muted-foreground">% of eventual steady state ↑</text>

        {/* Css line */}
        <line x1="140" y1="540" x2="880" y2="540" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 3" className="text-muted-foreground" />
        <text x="878" y="535" textAnchor="end" fontSize="6.5" fontWeight="700" className="fill-muted-foreground">Css — eventual steady state (100%)</text>

        {/* the accumulation curve */}
        <polyline points={accCurve} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-brand" />

        {/* the 1-5 half-life points */}
        <circle cx="284" cy="615" r="3" className="fill-brand" />
        <circle cx="428" cy="577.5" r="3" className="fill-brand" />
        <circle cx="572" cy="558.75" r="3" className="fill-brand" />
        <circle cx="716" cy="549.4" r="3" className="fill-brand" />
        <circle cx="860" cy="544.7" r="3" className="fill-brand" />
        <text x="284" y="634" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">50%</text>
        <text x="428" y="596" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">75%</text>
        <text x="572" y="578" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">87.5%</text>
        <text x="716" y="568" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">93.75%</text>
        <text x="900" y="565" textAnchor="end" fontSize="7" fontWeight="800" className="fill-brand">~97% — effectively steady state at 4-5 t1/2</text>

        {/* x ticks */}
        <text x="140" y="704" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">0</text>
        <text x="284" y="704" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">1</text>
        <text x="428" y="704" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">2</text>
        <text x="572" y="704" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">3</text>
        <text x="716" y="704" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">4</text>
        <text x="860" y="704" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">5</text>
        <text x="500" y="718" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">number of half-lives (t1/2)</text>

        {/* in-plot annotation */}
        <text x="660" y="622" textAnchor="middle" fontSize="7" fontWeight="700" className="fill-foreground">Dose size and dosing frequency change the LEVEL —</text>
        <text x="660" y="636" textAnchor="middle" fontSize="7" fontWeight="700" className="fill-foreground">the CLOCK is set by t1/2 alone; the loading dose changes</text>
        <text x="660" y="650" textAnchor="middle" fontSize="7" fontWeight="700" className="fill-foreground">the STARTING POINT, not the time</text>

        <text x="500" y="736" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">The same clock runs in reverse: ~4-5 half-lives to washout after the last dose</text>
      </g>

      {/* ===== FOUR-CODE MNEMONIC STRIP ===== */}
      <g>
        <rect x="24" y="754" width="932" height="138" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="776" fontSize="9" fontWeight="800" className="fill-brand">THE FOUR CODES (all KYP-original — the page prints no mnemonic in this section)</text>
        <text x="40" y="800" fontSize="8" fontWeight="800" className="fill-foreground">1 · LOAD THE TANK, MAINTAIN THE DRAIN — load = Cp × Vd / F (the tank) · maintenance = Cp × CL × τ / F (the drain)</text>
        <text x="40" y="822" fontSize="8" fontWeight="800" className="fill-foreground">2 · DIVIDE BY F TO DELIVER — both formulas ÷ F: IV F = 1 · PO F = 0.5 doubles the dose</text>
        <text x="40" y="844" fontSize="8" fontWeight="800" className="fill-foreground">3 · SICK ORGANS SHRINK THE MAINTENANCE, SPARE THE LOAD — renal or liver disease: maintenance ↓, load usually unchanged</text>
        <text x="40" y="866" fontSize="8" fontWeight="800" className="fill-foreground">4 · THE STEADY-STATE CLOCK IS t1/2 — 50 · 75 · 87.5 · 94 · 97% at 1-5 half-lives; dose and frequency change the level, never the time</text>
        <text x="40" y="884" fontSize="6.5" className="fill-muted-foreground">τ = dosage interval (time between doses); does not apply for continuous infusions — infusion rate = Cp × CL</text>
      </g>
    </svg>
  );
}

export function EfficacyPotencyMap() {
  const w = 980;
  const h = 1000;
  // Dose-response sigmoids on log dose (original KYP redraw — the standard
  // Hill occupancy curve; the source page book 232 prints two panels,
  // RELATIVE EFFICACY and RELATIVE POTENCY, as vector line art). Both
  // panels: y(pct) = 520 − 2.6·pct (100% → 260, 50% → 390, 0% → 520),
  // 60 px per log decade.
  const yPct = (e: number) => 520 - 2.6 * e;
  const sig = (x: number, ec50: number, emax: number) =>
    emax / (1 + Math.pow(10, (ec50 - x) / 60));
  const poly = (x0: number, x1: number, f: (x: number) => number) => {
    const out: string[] = [];
    for (let x = x0; x <= x1 + 0.01; x += 4) out.push(`${x.toFixed(1)},${yPct(f(x)).toFixed(1)}`);
    return out.join(" ");
  };
  // RELATIVE EFFICACY (left): same EC50 (x = 230) — full agonist Emax 100
  // vs partial agonist Emax 60; the ceilings differ, the position does not.
  const effA = poly(100, 452, (x) => sig(x, 230, 100));
  const effB = poly(100, 452, (x) => sig(x, 230, 60));
  // RELATIVE POTENCY (right): same Emax 100 — Drug A EC50 660 (left) vs
  // Drug B EC50 820 (right); the positions differ, the ceiling does not.
  const potA = poly(576, 928, (x) => sig(x, 660, 100));
  const potB = poly(576, 928, (x) => sig(x, 820, 100));
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Efficacy vs potency — the map (an original KYP redraw of the source page book 232 — the two definitions: Efficacy, maximal effect a drug can produce, intrinsic activity, represented by the y-value Emax, up y-value equals up Emax equals up efficacy, unrelated to potency, partial agonists have less efficacy than full agonists; and Potency, amount of drug needed for a given effect, represented by the x-value EC50, left shifting means down EC50 equals up potency equals down drug needed, unrelated to efficacy; the RELATIVE EFFICACY panel redrawn with the full agonist sigmoid to 100 percent and the partial agonist sigmoid to 60 percent at the same curve position, dashed plateaus labeled Emax Drug A and Emax Drug B, and the vertical delta Efficacy bracket between them; the RELATIVE POTENCY panel redrawn with two full agonist sigmoids at the same 100 percent ceiling, Drug A left-shifted at EC50 660 and Drug B at EC50 820, dashed 50 percent crossings dropped to the x-axis at the two EC50 ticks, the horizontal delta Potency bracket, and the EC equals Effective concentration legend; the partial agonist rule callout; the two independence rules verbatim; and the four-code mnemonic strip; no copyrighted photographs on the page)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Efficacy vs potency — the map (original KYP redraw)</text>
        <rect x="700" y="24" width="232" height="18" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">2 definitions · 2 panels · 2 deltas</text>
      </g>

      {/* ===== EFFICACY DEFINITION CARD ===== */}
      <g>
        <rect x="24" y="74" width="456" height="116" rx="10" className="fill-card stroke-border" />
        <text x="40" y="96" fontSize="10" fontWeight="800" className="fill-brand">EFFICACY — the y-value (Emax)</text>
        <text x="40" y="114" fontSize="7" fontWeight="700" className="fill-foreground">Maximal effect a drug can produce (intrinsic activity).</text>
        <text x="40" y="128" fontSize="7" className="fill-foreground">Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy.</text>
        <text x="40" y="142" fontSize="7" className="fill-muted-foreground">Unrelated to potency (ie, efficacious drugs can have high or low potency).</text>
        <text x="40" y="156" fontSize="7" fontWeight="800" className="fill-brand">Partial agonists have less efficacy than full agonists.</text>
        <text x="40" y="172" fontSize="6.5" className="fill-muted-foreground">The one asymmetry: a partial agonist lowers the CEILING, not the position</text>
      </g>

      {/* ===== POTENCY DEFINITION CARD ===== */}
      <g>
        <rect x="500" y="74" width="456" height="116" rx="10" className="fill-card stroke-border" />
        <text x="516" y="96" fontSize="10" fontWeight="800" className="fill-warning">POTENCY — the x-value (EC50)</text>
        <text x="516" y="114" fontSize="7" fontWeight="700" className="fill-foreground">Amount of drug needed for a given effect.</text>
        <text x="516" y="128" fontSize="7" className="fill-foreground">Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed.</text>
        <text x="516" y="142" fontSize="7" className="fill-muted-foreground">Unrelated to efficacy (ie, potent drugs can have high or low efficacy).</text>
        <text x="516" y="156" fontSize="7" fontWeight="800" className="fill-warning">EC = Effective concentration (the panel legend, verbatim)</text>
        <text x="516" y="172" fontSize="6.5" className="fill-muted-foreground">EC50 = the dose producing 50% of maximal effect — read on Log (drug dose)</text>
      </g>

      {/* ===== RELATIVE EFFICACY PANEL (left) ===== */}
      <g>
        <rect x="24" y="196" width="456" height="386" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="40" y="216" fontSize="10" fontWeight="800" className="fill-brand">RELATIVE EFFICACY (book 232 — original KYP redraw)</text>
        <text x="40" y="230" fontSize="6.5" className="fill-muted-foreground">Read the y-axis: the CEILING (Emax) — Δ Efficacy is a VERTICAL gap between plateaus</text>

        {/* axes */}
        <line x1="100" y1="248" x2="100" y2="520" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="100" y1="520" x2="452" y2="520" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <text x="92" y="263" textAnchor="end" fontSize="6" className="fill-muted-foreground">100</text>
        <text x="92" y="393" textAnchor="end" fontSize="6" className="fill-muted-foreground">50</text>
        <text x="92" y="523" textAnchor="end" fontSize="6" className="fill-muted-foreground">0</text>
        <text x="104" y="246" fontSize="6.5" className="fill-muted-foreground">% Maximal effect ↑</text>

        {/* gridlines: 50% dashed; plateaus as dashed lines at 100 (Drug A) and 60 (Drug B) */}
        <line x1="100" y1="390" x2="452" y2="390" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3" className="text-muted-foreground" />
        <line x1="100" y1="260" x2="430" y2="260" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 3" className="text-brand" />
        <line x1="100" y1="364" x2="430" y2="364" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 3" className="text-warning" />

        {/* the two curves: same EC50 (x = 230), different ceilings */}
        <polyline points={effA} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-brand" />
        <polyline points={effB} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-warning" />

        {/* plateau labels (verbatim) */}
        <text x="452" y="254" textAnchor="end" fontSize="7" fontWeight="800" className="fill-brand">Emax Drug A</text>
        <text x="452" y="378" textAnchor="end" fontSize="7" fontWeight="800" className="fill-warning">Emax Drug B</text>

        {/* Δ Efficacy bracket — the vertical gap between the plateaus */}
        <line x1="424" y1="272" x2="424" y2="352" stroke="currentColor" strokeWidth="1.4" className="text-foreground" />
        <polygon points="424,268 420,276 428,276" className="fill-foreground" />
        <polygon points="424,356 420,348 428,348" className="fill-foreground" />
        <text x="416" y="316" textAnchor="end" fontSize="8" fontWeight="800" className="fill-foreground">Δ Efficacy</text>

        {/* x axis + notes */}
        <text x="276" y="542" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">Log (drug dose)</text>
        <text x="276" y="560" textAnchor="middle" fontSize="6.5" fontWeight="700" className="fill-foreground">Drug A = full agonist (reaches the 100% ceiling) · Drug B = partial agonist (plateaus at 60%)</text>
        <text x="276" y="574" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">Same curve position (same EC50) — only the ceilings differ; no dose above saturation raises a plateau</text>
      </g>

      {/* ===== RELATIVE POTENCY PANEL (right) ===== */}
      <g>
        <rect x="500" y="196" width="456" height="386" rx="14" className="fill-secondary/40 stroke-warning" />
        <text x="516" y="216" fontSize="10" fontWeight="800" className="fill-warning">RELATIVE POTENCY (book 232 — original KYP redraw)</text>
        <text x="516" y="230" fontSize="6.5" className="fill-muted-foreground">Read the x-axis: the POSITION (EC50) — Δ Potency is a HORIZONTAL gap between EC50s</text>

        {/* axes */}
        <line x1="576" y1="248" x2="576" y2="520" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="576" y1="520" x2="928" y2="520" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <text x="568" y="263" textAnchor="end" fontSize="6" className="fill-muted-foreground">100</text>
        <text x="568" y="393" textAnchor="end" fontSize="6" className="fill-muted-foreground">50</text>
        <text x="568" y="523" textAnchor="end" fontSize="6" className="fill-muted-foreground">0</text>
        <text x="580" y="246" fontSize="6.5" className="fill-muted-foreground">% Maximal effect ↑</text>

        {/* gridlines: 100 (the shared ceiling) solid, 50% dashed */}
        <line x1="576" y1="260" x2="928" y2="260" stroke="currentColor" strokeWidth="0.7" className="text-muted-foreground" />
        <line x1="576" y1="390" x2="928" y2="390" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3" className="text-muted-foreground" />

        {/* the two curves: same Emax (100), different EC50 (660 vs 820) */}
        <polyline points={potA} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-brand" />
        <polyline points={potB} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-warning" />

        {/* curve labels (verbatim) */}
        <text x="688" y="304" textAnchor="end" fontSize="7.5" fontWeight="800" className="fill-brand">Drug A</text>
        <text x="848" y="304" textAnchor="end" fontSize="7.5" fontWeight="800" className="fill-warning">Drug B</text>

        {/* ceiling + left-shift notes */}
        <text x="580" y="276" fontSize="6.5" className="fill-muted-foreground">same Emax — same ceiling (100%)</text>
        <text x="580" y="290" fontSize="6.5" fontWeight="700" className="fill-brand">Drug A sits LEFT — ↓ EC50 = ↑ potency</text>

        {/* EC50 drops: dashed verticals from the 50% crossing to the x axis */}
        <line x1="660" y1="390" x2="660" y2="520" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-brand" />
        <line x1="820" y1="390" x2="820" y2="520" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-warning" />
        <line x1="660" y1="520" x2="660" y2="526" stroke="currentColor" strokeWidth="1.2" className="text-foreground" />
        <line x1="820" y1="520" x2="820" y2="526" stroke="currentColor" strokeWidth="1.2" className="text-foreground" />

        {/* x axis + EC50 labels + legend */}
        <text x="752" y="542" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">Log (drug dose)</text>
        <text x="660" y="540" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">EC50</text>
        <text x="820" y="540" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-warning">EC50</text>

        {/* Δ Potency bracket — the horizontal gap between the EC50s */}
        <line x1="672" y1="556" x2="808" y2="556" stroke="currentColor" strokeWidth="1.4" className="text-foreground" />
        <polygon points="664,556 672,551 672,561" className="fill-foreground" />
        <polygon points="816,556 808,551 808,561" className="fill-foreground" />
        <text x="740" y="576" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">Δ Potency</text>
        <text x="596" y="576" fontSize="6.5" className="fill-muted-foreground">EC = Effective concentration</text>
      </g>

      {/* ===== PARTIAL AGONIST RULE (verbatim) ===== */}
      <g>
        <rect x="24" y="596" width="932" height="76" rx="10" className="fill-card stroke-emergency" />
        <text x="40" y="618" fontSize="8" fontWeight="800" className="fill-emergency">THE PARTIAL AGONIST RULE (book 232 — verbatim)</text>
        <text x="40" y="636" fontSize="7.5" fontWeight="800" className="fill-foreground">“Partial agonists have less efficacy than full agonists.”</text>
        <text x="40" y="650" fontSize="6.5" className="fill-foreground">A partial agonist lowers the CEILING (y-axis: Emax ↓) — not the position; even at 100% receptor occupancy its response plateaus</text>
        <text x="40" y="662" fontSize="6.5" className="fill-foreground">below a full agonist's, and no dose above saturation raises a plateau. In the RELATIVE EFFICACY panel it is Drug B.</text>
      </g>

      {/* ===== THE INDEPENDENCE RULES (verbatim) ===== */}
      <g>
        <rect x="24" y="686" width="932" height="72" rx="10" className="fill-brand-soft stroke-brand" />
        <text x="40" y="708" fontSize="9" fontWeight="800" className="fill-brand">THE INDEPENDENCE RULES (book 232 — verbatim)</text>
        <text x="40" y="728" fontSize="7" className="fill-foreground">Efficacy: “Unrelated to potency (ie, efficacious drugs can have high or low potency).” — the ceiling never tells you the position.</text>
        <text x="40" y="742" fontSize="7" className="fill-foreground">Potency: “Unrelated to efficacy (ie, potent drugs can have high or low efficacy).” — the position never tells you the ceiling.</text>
      </g>

      {/* ===== FOUR-CODE MNEMONIC STRIP ===== */}
      <g>
        <rect x="24" y="772" width="932" height="196" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="794" fontSize="9" fontWeight="800" className="fill-brand">THE FOUR CODES (all KYP-original — the page prints no mnemonic in this section)</text>
        <text x="40" y="822" fontSize="8" fontWeight="800" className="fill-foreground">1 · EFFICACY IS THE CEILING — READ THE y-AXIS: Emax = maximal effect (intrinsic activity); ↑ y-value = ↑ Emax = ↑ efficacy</text>
        <text x="40" y="846" fontSize="8" fontWeight="800" className="fill-foreground">2 · POTENCY IS THE POSITION — READ THE x-AXIS: EC50 = the dose for 50% effect; left shift = ↓ EC50 = ↑ potency = ↓ drug needed</text>
        <text x="40" y="870" fontSize="8" fontWeight="800" className="fill-foreground">3 · PARTIALS PULL THE CEILING DOWN — partial agonists have less efficacy than full agonists (lower Emax at any dose)</text>
        <text x="40" y="894" fontSize="8" fontWeight="800" className="fill-foreground">4 · CEILING ≠ POSITION — the axes don't talk: efficacious drugs can have high or low potency; potent drugs can have high or low efficacy</text>
        <text x="40" y="922" fontSize="6.5" className="fill-muted-foreground">Δ Efficacy = the VERTICAL gap between plateaus (Emax) · Δ Potency = the HORIZONTAL gap between EC50s (a fold difference in dose)</text>
        <text x="40" y="940" fontSize="6.5" className="fill-muted-foreground">EC = Effective concentration — both panels print “% Maximal effect” (y) vs “Log (drug dose)” (x) with 100/50/0 gridlines</text>
        <text x="40" y="958" fontSize="6.5" className="fill-muted-foreground">Clinical carriers: haloperidol vs chlorpromazine (equal efficacy, ~50× potency) · buprenorphine (more potent, less efficacious than morphine) · aripiprazole (partial D2 agonist)</text>
      </g>
    </svg>
  );
}

export function ReceptorBindingMap() {
  const w = 980;
  const h = 1100;
  // Agonist dose-response sigmoids (original KYP redraw — the standard Hill
  // occupancy curve; the source page book 233 prints three panels as vector
  // line art: agonist + competitive antagonist; agonist + noncompetitive
  // antagonist; agonist + two partial agonists). All panels: y(pct) =
  // 352 − 2.2·pct (100% → 132, 50% → 242, 0% → 352), 55 px per log decade.
  const yPct = (e: number) => 352 - 2.2 * e;
  const sig = (x: number, ec50: number, emax: number) =>
    emax / (1 + Math.pow(10, (ec50 - x) / 55));
  const poly = (x0: number, x1: number, f: (x: number) => number) => {
    const out: string[] = [];
    for (let x = x0; x <= x1 + 0.01; x += 4) out.push(`${x.toFixed(1)},${yPct(f(x)).toFixed(1)}`);
    return out.join(" ");
  };
  // PANEL A (competitive): both curves reach 100 — the antagonist curve is a
  // parallel RIGHT shift (EC50 104 vs 214), ceiling intact.
  const agA = poly(48, 306, (x) => sig(x, 104, 100));
  const compA = poly(48, 306, (x) => sig(x, 214, 100));
  // PANEL B (noncompetitive): same EC50 (x = 420) — the antagonist curve
  // plateaus at 50% (Emax ↓), position unchanged.
  const agB = poly(364, 622, (x) => sig(x, 420, 100));
  const ncB = poly(364, 622, (x) => sig(x, 420, 50));
  // PANEL C (partial agonists): agonist Emax 100 at EC50 726; upper partial
  // agonist Emax 70 at the SAME EC50 (reduced efficacy); lower 'Partial C
  // agonist' Emax 40 shifted right (EC50 836 — independent potency).
  const agC = poly(680, 936, (x) => sig(x, 726, 100));
  const pC1 = poly(680, 936, (x) => sig(x, 726, 70));
  const pC2 = poly(680, 936, (x) => sig(x, 836, 40));
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Receptor binding — the map (an original KYP redraw of the source page book 233 — four ways a molecule changes the agonist curve. PANEL A, competitive antagonist: the agonist curve and the agonist plus competitive antagonist curve as a parallel right shift at the same 100 percent ceiling, the circled A marker, the Reduced potency annotation with a horizontal shift arrow at the 50 percent level — potency down, efficacy no change, can be overcome by up agonist concentration, diazepam plus flumazenil on the GABA A receptor. PANEL B, noncompetitive antagonist: the agonist curve and the agonist plus noncompetitive antagonist curve at the same position with the second curve plateauing at 50 percent, the circled B marker, the Reduced efficacy annotation with a vertical ceiling arrow — potency no change, efficacy down, cannot be overcome by up agonist concentration, norepinephrine plus phenoxybenzamine on alpha receptors. PANEL C, partial agonists: the agonist curve plus two partial agonist curves — the upper Partial agonist at the agonist own EC50 with the Reduced efficacy vertical arrow, and the lower Partial C agonist shifted right with the circled C marker and the Independent potency horizontal arrow between the two EC50 drops. Then the AGONIST WITH table re-typeset verbatim as a grid — AGONIST WITH, POTENCY, EFFICACY, REMARKS, EXAMPLE columns with the four rows: A competitive antagonist, down, no change, can be overcome by up agonist concentration, diazepam plus flumazenil; B noncompetitive antagonist, no change, down, cannot be overcome by up agonist concentration, norepinephrine plus phenoxybenzamine; C partial agonist alone, independent, down, acts at same site as full agonist, morphine versus buprenorphine; inverse agonist alone, independent, negative, binds to a constitutively active receptor thereby reducing its activity, H1 antihistamines such as diphenhydramine. Then the efficacy ladder strip — full agonist 100 percent, partial agonist lower Emax same site, neutral antagonist zero alone, inverse agonist negative below baseline — and the four-code mnemonic strip; no copyrighted photographs on the page)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Receptor binding — the map (original KYP redraw)</text>
        <rect x="700" y="24" width="232" height="18" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">4 rows · 3 panels · 1 table</text>
      </g>

      {/* ===== PANEL A — COMPETITIVE ANTAGONIST ===== */}
      <g>
        <rect x="24" y="74" width="300" height="350" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="40" y="94" fontSize="9" fontWeight="800" className="fill-brand">A · COMPETITIVE ANTAGONIST (panel 1)</text>
        <text x="40" y="107" fontSize="6.5" className="fill-muted-foreground">parallel right shift — same 100 ceiling · surmountable</text>
        {/* axes + gridlines */}
        <line x1="40" y1="118" x2="40" y2="352" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="40" y1="352" x2="308" y2="352" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="40" y1="132" x2="308" y2="132" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3" className="text-muted-foreground" />
        <line x1="40" y1="242" x2="308" y2="242" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3" className="text-muted-foreground" />
        <text x="34" y="134" textAnchor="end" fontSize="6" className="fill-muted-foreground">100</text>
        <text x="34" y="244" textAnchor="end" fontSize="6" className="fill-muted-foreground">50</text>
        <text x="34" y="354" textAnchor="end" fontSize="6" className="fill-muted-foreground">0</text>
        {/* the two curves: same Emax (100), different EC50 (104 vs 214) */}
        <polyline points={agA} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-brand" />
        <polyline points={compA} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-warning" />
        {/* curve labels (verbatim) */}
        <text x="150" y="126" fontSize="6.5" fontWeight="800" className="fill-brand">Agonist</text>
        <text x="306" y="126" textAnchor="end" fontSize="6" fontWeight="800" className="fill-warning">Agonist + competitive antagonist</text>
        {/* circled A + Reduced potency annotation (verbatim) */}
        <circle cx="158" cy="228" r="8" className="fill-card stroke-foreground" strokeWidth="1.2" />
        <text x="158" y="231.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">A</text>
        <line x1="112" y1="242" x2="206" y2="242" stroke="currentColor" strokeWidth="1.4" className="text-emergency" />
        <polygon points="104,242 113,237 113,247" className="fill-emergency" />
        <polygon points="214,242 205,237 205,247" className="fill-emergency" />
        <text x="158" y="264" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-emergency">Reduced potency</text>
        {/* x axis + footer notes */}
        <text x="174" y="366" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">Agonist dose</text>
        <text x="174" y="384" textAnchor="middle" fontSize="6" className="fill-foreground">Row A — competitive: potency ↓ (right shift), efficacy No change</text>
        <text x="174" y="398" textAnchor="middle" fontSize="6" className="fill-muted-foreground">“Can be overcome by ↑ agonist concentration” — surmountable</text>
      </g>

      {/* ===== PANEL B — NONCOMPETITIVE ANTAGONIST ===== */}
      <g>
        <rect x="340" y="74" width="300" height="350" rx="14" className="fill-secondary/40 stroke-warning" />
        <text x="356" y="94" fontSize="9" fontWeight="800" className="fill-warning">B · NONCOMPETITIVE ANTAGONIST (panel 2)</text>
        <text x="356" y="107" fontSize="6.5" className="fill-muted-foreground">same position — lower Emax · insurmountable</text>
        {/* axes + gridlines */}
        <line x1="356" y1="118" x2="356" y2="352" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="356" y1="352" x2="624" y2="352" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="356" y1="132" x2="624" y2="132" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3" className="text-muted-foreground" />
        <line x1="356" y1="242" x2="624" y2="242" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3" className="text-warning" />
        <text x="350" y="134" textAnchor="end" fontSize="6" className="fill-muted-foreground">100</text>
        <text x="350" y="244" textAnchor="end" fontSize="6" className="fill-muted-foreground">50</text>
        <text x="350" y="354" textAnchor="end" fontSize="6" className="fill-muted-foreground">0</text>
        {/* the two curves: same EC50 (x = 420), Emax 100 vs 50 */}
        <polyline points={agB} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-brand" />
        <polyline points={ncB} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-warning" />
        {/* curve labels (verbatim) */}
        <text x="460" y="126" fontSize="6.5" fontWeight="800" className="fill-brand">Agonist</text>
        <text x="622" y="126" textAnchor="end" fontSize="6" fontWeight="800" className="fill-warning">Agonist + noncompetitive antagonist</text>
        {/* circled B + Reduced efficacy annotation (verbatim) */}
        <circle cx="542" cy="154" r="8" className="fill-card stroke-foreground" strokeWidth="1.2" />
        <text x="542" y="157.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">B</text>
        <text x="622" y="157" textAnchor="end" fontSize="6.5" fontWeight="800" className="fill-emergency">Reduced efficacy</text>
        <line x1="600" y1="164" x2="600" y2="234" stroke="currentColor" strokeWidth="1.4" className="text-emergency" />
        <polygon points="600,242 595,233 605,233" className="fill-emergency" />
        {/* x axis + footer notes */}
        <text x="490" y="366" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">Agonist dose</text>
        <text x="490" y="384" textAnchor="middle" fontSize="6" className="fill-foreground">Row B — noncompetitive: potency No change, efficacy ↓ (Emax ↓)</text>
        <text x="490" y="398" textAnchor="middle" fontSize="6" className="fill-muted-foreground">“Cannot be overcome by ↑ agonist concentration” — insurmountable</text>
      </g>

      {/* ===== PANEL C — PARTIAL AGONISTS ===== */}
      <g>
        <rect x="656" y="74" width="300" height="350" rx="14" className="fill-secondary/40 stroke-emergency" />
        <text x="672" y="94" fontSize="9" fontWeight="800" className="fill-emergency">C · PARTIAL AGONISTS (panel 3)</text>
        <text x="672" y="107" fontSize="6.5" className="fill-muted-foreground">lower ceilings at the same site — potency independent</text>
        {/* axes + gridlines */}
        <line x1="672" y1="118" x2="672" y2="352" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="672" y1="352" x2="940" y2="352" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="672" y1="132" x2="940" y2="132" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3" className="text-muted-foreground" />
        <line x1="672" y1="242" x2="940" y2="242" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3" className="text-muted-foreground" />
        <text x="666" y="134" textAnchor="end" fontSize="6" className="fill-muted-foreground">100</text>
        <text x="666" y="244" textAnchor="end" fontSize="6" className="fill-muted-foreground">50</text>
        <text x="666" y="354" textAnchor="end" fontSize="6" className="fill-muted-foreground">0</text>
        {/* the three curves: agonist 100 @ 726 · partial 70 @ 726 · partial C 40 @ 836 */}
        <polyline points={agC} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-brand" />
        <polyline points={pC1} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-warning" />
        <polyline points={pC2} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-emergency" />
        {/* curve labels (verbatim) */}
        <text x="766" y="126" fontSize="6.5" fontWeight="800" className="fill-brand">Agonist</text>
        <text x="930" y="216" textAnchor="end" fontSize="6.5" fontWeight="800" className="fill-warning">Partial agonist</text>
        <text x="930" y="286" textAnchor="end" fontSize="6.5" fontWeight="800" className="fill-emergency">Partial C agonist</text>
        {/* Reduced efficacy annotation (verbatim) + vertical ceiling arrow */}
        <text x="930" y="156" textAnchor="end" fontSize="6.5" fontWeight="800" className="fill-emergency">Reduced</text>
        <text x="930" y="167" textAnchor="end" fontSize="6.5" fontWeight="800" className="fill-emergency">efficacy</text>
        <line x1="938" y1="138" x2="938" y2="192" stroke="currentColor" strokeWidth="1.4" className="text-emergency" />
        <polygon points="938,198 933,190 943,190" className="fill-emergency" />
        {/* circled C (marks table row C) */}
        <circle cx="938" cy="250" r="8" className="fill-card stroke-foreground" strokeWidth="1.2" />
        <text x="938" y="253.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">C</text>
        {/* EC50 drops + Independent potency annotation (verbatim) */}
        <line x1="726" y1="275" x2="726" y2="352" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-warning" />
        <line x1="836" y1="308" x2="836" y2="352" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-emergency" />
        <line x1="734" y1="372" x2="828" y2="372" stroke="currentColor" strokeWidth="1.4" className="text-emergency" />
        <polygon points="726,372 735,367 735,377" className="fill-emergency" />
        <polygon points="836,372 827,367 827,377" className="fill-emergency" />
        <text x="781" y="390" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-emergency">Independent potency</text>
        {/* x axis + footer note */}
        <text x="806" y="366" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">Agonist dose</text>
        <text x="806" y="404" textAnchor="middle" fontSize="6" className="fill-muted-foreground">Row C — “Acts at same site as full agonist”: efficacy ↓, potency independent</text>
      </g>

      {/* ===== THE AGONIST WITH TABLE (VERBATIM GRID) ===== */}
      <g>
        <text x="24" y="448" fontSize="10" fontWeight="800" className="fill-brand">THE AGONIST WITH TABLE (book 233 — carried verbatim)</text>
        <rect x="24" y="458" width="932" height="258" rx="10" className="fill-card stroke-border" />
        <rect x="24" y="458" width="932" height="24" rx="10" className="fill-brand-soft stroke-border" />
        {/* header row */}
        <text x="96" y="474" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">AGONIST WITH</text>
        <text x="210" y="474" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">POTENCY</text>
        <text x="294" y="474" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">EFFICACY</text>
        <text x="464" y="474" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">REMARKS</text>
        <text x="774" y="474" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">EXAMPLE</text>
        {/* grid */}
        <line x1="168" y1="458" x2="168" y2="716" stroke="currentColor" strokeWidth="0.8" className="text-muted-foreground" />
        <line x1="252" y1="458" x2="252" y2="716" stroke="currentColor" strokeWidth="0.8" className="text-muted-foreground" />
        <line x1="336" y1="458" x2="336" y2="716" stroke="currentColor" strokeWidth="0.8" className="text-muted-foreground" />
        <line x1="592" y1="458" x2="592" y2="716" stroke="currentColor" strokeWidth="0.8" className="text-muted-foreground" />
        <line x1="24" y1="482" x2="956" y2="482" stroke="currentColor" strokeWidth="0.8" className="text-muted-foreground" />
        <line x1="24" y1="536" x2="956" y2="536" stroke="currentColor" strokeWidth="0.8" className="text-muted-foreground" />
        <line x1="24" y1="590" x2="956" y2="590" stroke="currentColor" strokeWidth="0.8" className="text-muted-foreground" />
        <line x1="24" y1="642" x2="956" y2="642" stroke="currentColor" strokeWidth="0.8" className="text-muted-foreground" />
        {/* row A — competitive antagonist */}
        <text x="34" y="503" fontSize="6.5" fontWeight="800" className="fill-foreground">A Competitive</text>
        <text x="34" y="515" fontSize="6.5" fontWeight="800" className="fill-foreground">antagonist</text>
        <text x="210" y="510" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-warning">↓</text>
        <text x="294" y="509" textAnchor="middle" fontSize="6.5" className="fill-foreground">No change</text>
        <text x="346" y="503" fontSize="6.5" className="fill-foreground">Can be overcome by</text>
        <text x="346" y="515" fontSize="6.5" className="fill-foreground">↑ agonist concentration</text>
        <text x="602" y="496" fontSize="6.5" className="fill-foreground">Diazepam (agonist) + flumazenil</text>
        <text x="602" y="508" fontSize="6.5" className="fill-foreground">(competitive antagonist) on</text>
        <text x="602" y="520" fontSize="6.5" className="fill-foreground">GABA A receptor.</text>
        {/* row B — noncompetitive antagonist */}
        <text x="34" y="557" fontSize="6.5" fontWeight="800" className="fill-foreground">B Noncompetitive</text>
        <text x="34" y="569" fontSize="6.5" fontWeight="800" className="fill-foreground">antagonist</text>
        <text x="210" y="563" textAnchor="middle" fontSize="6.5" className="fill-foreground">No change</text>
        <text x="294" y="564" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-warning">↓</text>
        <text x="346" y="557" fontSize="6.5" className="fill-foreground">Cannot be overcome by</text>
        <text x="346" y="569" fontSize="6.5" className="fill-foreground">↑ agonist concentration</text>
        <text x="602" y="550" fontSize="6.5" className="fill-foreground">Norepinephrine (agonist) +</text>
        <text x="602" y="562" fontSize="6.5" className="fill-foreground">phenoxybenzamine (noncompetitive</text>
        <text x="602" y="574" fontSize="6.5" className="fill-foreground">antagonist) on α-receptors.</text>
        {/* row C — partial agonist (alone) */}
        <text x="34" y="610" fontSize="6.5" fontWeight="800" className="fill-foreground">C Partial agonist</text>
        <text x="34" y="622" fontSize="6.5" fontWeight="800" className="fill-foreground">(alone)</text>
        <text x="210" y="616" textAnchor="middle" fontSize="6.5" className="fill-foreground">Independent</text>
        <text x="294" y="617" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-warning">↓</text>
        <text x="346" y="610" fontSize="6.5" className="fill-foreground">Acts at same site as full</text>
        <text x="346" y="622" fontSize="6.5" className="fill-foreground">agonist</text>
        <text x="602" y="603" fontSize="6.5" className="fill-foreground">Morphine (full agonist) vs</text>
        <text x="602" y="615" fontSize="6.5" className="fill-foreground">buprenorphine (partial agonist)</text>
        <text x="602" y="627" fontSize="6.5" className="fill-foreground">at opioid μ-receptors.</text>
        {/* row 4 — inverse agonist (alone) */}
        <text x="34" y="673" fontSize="6.5" fontWeight="800" className="fill-foreground">Inverse agonist</text>
        <text x="34" y="685" fontSize="6.5" fontWeight="800" className="fill-foreground">(alone)</text>
        <text x="210" y="679" textAnchor="middle" fontSize="6.5" className="fill-foreground">Independent</text>
        <text x="294" y="679" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-emergency">Negative</text>
        <text x="346" y="658" fontSize="6.5" className="fill-foreground">Binds to a constitutively</text>
        <text x="346" y="670" fontSize="6.5" className="fill-foreground">active receptor, thereby</text>
        <text x="346" y="682" fontSize="6.5" className="fill-foreground">reducing its activity; has</text>
        <text x="346" y="694" fontSize="6.5" className="fill-foreground">the opposite effect of an agonist</text>
        <text x="602" y="673" fontSize="6.5" className="fill-foreground">H1 antihistamines</text>
        <text x="602" y="685" fontSize="6.5" className="fill-foreground">(eg, diphenhydramine)</text>
      </g>

      {/* ===== THE EFFICACY LADDER (KYP SYNTHESIS) ===== */}
      <g>
        <rect x="24" y="730" width="932" height="62" rx="10" className="fill-card stroke-emergency" />
        <text x="40" y="750" fontSize="8" fontWeight="800" className="fill-emergency">THE EFFICACY LADDER at one receptor (KYP synthesis — the direction of the effect)</text>
        <text x="40" y="770" fontSize="7" className="fill-foreground">Full agonist → Emax 100% · Partial agonist → lower Emax, same site (row C) · Neutral antagonist → no change alone (zero) · Inverse agonist → NEGATIVE (below baseline)</text>
        <text x="40" y="784" fontSize="6.5" className="fill-muted-foreground">In any mixture the highest-intrinsic-activity occupant sets the direction — a partial agonist + full agonist = net effect ↓ (functional antagonism: buprenorphine displaces morphine)</text>
      </g>

      {/* ===== FOUR-CODE MNEMONIC STRIP ===== */}
      <g>
        <rect x="24" y="806" width="932" height="278" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="828" fontSize="9" fontWeight="800" className="fill-brand">THE FOUR CODES (all KYP-original — the Receptor binding section prints no mnemonic)</text>
        <text x="40" y="856" fontSize="8" fontWeight="800" className="fill-foreground">1 · COMPETITIVE SLIDES RIGHT, SAME CEILING — surmountable: potency ↓, efficacy No change, “Can be overcome by ↑ agonist concentration”</text>
        <text x="40" y="870" fontSize="6.5" className="fill-muted-foreground">flumazenil at the benzodiazepine site of GABA A (diazepam, midazolam) · naloxone at μ-opioid receptors — re-sedation / re-narcotization when the agonist outlasts the antagonist</text>
        <text x="40" y="898" fontSize="8" fontWeight="800" className="fill-foreground">2 · NONCOMPETITIVE CLIPS THE CEILING, SAME SPOT — insurmountable: potency No change, efficacy ↓, “Cannot be overcome by ↑ agonist concentration”</text>
        <text x="40" y="912" fontSize="6.5" className="fill-muted-foreground">phenoxybenzamine binds α-receptors covalently — preoperative pheochromocytoma blockade that catecholamine surges cannot overcome; recovery waits on receptor resynthesis</text>
        <text x="40" y="940" fontSize="8" fontWeight="800" className="fill-foreground">3 · PARTIALS SHARE THE SITE, DROP THE CEILING — “Acts at same site as full agonist”: efficacy ↓, potency Independent</text>
        <text x="40" y="954" fontSize="6.5" className="fill-muted-foreground">buprenorphine at μ-opioid receptors (respiratory-depression ceiling; displaces full agonists → precipitated withdrawal) · aripiprazole (partial D2 agonist)</text>
        <text x="40" y="982" fontSize="8" fontWeight="800" className="fill-foreground">4 · INVERSE GOES NEGATIVE — binds a constitutively active receptor, reducing its activity below baseline: the opposite effect of an agonist</text>
        <text x="40" y="996" fontSize="6.5" className="fill-muted-foreground">H1 antihistamines (eg, diphenhydramine) quiet constitutively active H1 receptors · many β-blockers are inverse agonists at tonically active β receptors</text>
        <text x="40" y="1026" fontSize="6.5" className="fill-muted-foreground">Surmountability is the REMARKS column's one test, asked twice: competitive CAN be overcome by ↑ agonist concentration; noncompetitive CANNOT — push the dose and see whether the effect returns</text>
        <text x="40" y="1044" fontSize="6.5" className="fill-muted-foreground">The columns are mirror pairs: competitive costs potency only; noncompetitive costs efficacy only; partial and inverse agonists (given alone) keep potency “Independent” and move efficacy ↓ or negative</text>
        <text x="40" y="1062" fontSize="6.5" className="fill-muted-foreground">Axes as printed: effect vs “Agonist dose” with 100/50/0 gridlines — see the efficacy-vs-potency topic for the y-axis (Emax) and x-axis (EC50) reading of the same curves</text>
      </g>
    </svg>
  );
}

export function TherapeuticIndexMap() {
  const w = 980;
  const h = 1000;
  // Quantal dose-response curves (original KYP redraw — the standard quantal
  // cumulative-frequency geometry; the source page book 233 prints the
  // Efficacy/Toxicity panel as vector line art with y-axis '% of patients
  // responding' (100/50/0) and x-axis 'Log (drug concentration)'). All
  // panels: y(pct) = 420 − 3·pct (100% → 120, 50% → 270, 0% → 420), 55 px
  // per log decade.
  const yPct = (e: number) => 420 - 3 * e;
  const sig = (x: number, ed50: number) =>
    100 / (1 + Math.pow(10, (ed50 - x) / 55));
  const poly = (x0: number, x1: number, f: (x: number) => number) => {
    const out: string[] = [];
    for (let x = x0; x <= x1 + 0.01; x += 4) out.push(`${x.toFixed(1)},${yPct(f(x)).toFixed(1)}`);
    return out.join(" ");
  };
  // The Efficacy curve crosses 50% of patients at ED50 (x = 200); the
  // Toxicity curve crosses 50% of patients at TD50 (x = 360) — the
  // horizontal gap between the crossings is the therapeutic index.
  const eff = poly(56, 470, (x) => sig(x, 200));
  const tox = poly(56, 470, (x) => sig(x, 360));
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Therapeutic index — the map (an original KYP redraw of the source page book 233, lower half. THE QUANTAL PANEL: the y-axis '% of patients responding' with 100, 50, 0 gridlines against 'Log (drug concentration)' on the x-axis; two overlapping sigmoid cumulative curves — the Efficacy curve on the left crossing 50 percent of patients at ED50, the Toxicity curve on the right crossing 50 percent of patients at TD50 — with dashed drop lines at ED50 and TD50, and the Therapeutic index double-arrow spanning the gap between them; the panel legend reads ED = Effective dose, TD = Toxic dose. THE EQUATION PANEL: 'Measurement of drug safety.' with the fraction TD50 (median toxic dose) over ED50 (median effective dose), plus the LD50 note — LD50 (lethal median dose) often replaces TD50 in animal studies. THE THERAPEUTIC WINDOW PANEL: the verbatim definition — therapeutic window, range of drug concentrations that can safely and effectively treat disease — over a concentration band split into no-effect, THERAPEUTIC WINDOW, and toxicity zones, bounded by the lowest effective and lowest toxic concentrations. THE MARGIN NOTE STRIP: the source's own printed mnemonic 'TITE: Therapeutic Index = TD50 / ED50' carried verbatim and attributed, beside the verbatim warning 'Safer drugs have ↑ TI; drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!)'. THE FIVE-CARD MONITORING GRID: warfarin with INR, theophylline with serum levels 10 to 20, digoxin with level plus apical pulse, antiepileptic drugs with drug levels including free phenytoin, lithium with serum levels 0.6 to 1.2, under the source's own exclamation Warning! These drugs are lethal! And the four-code mnemonic strip — code 1, TITE, is the source's own printed mnemonic; codes 2 to 4 are KYP-original; no copyrighted photographs on the page)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Therapeutic index — the map (original KYP redraw)</text>
        <rect x="700" y="24" width="232" height="18" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">1 equation · 1 panel · 5 drugs</text>
      </g>

      {/* ===== THE QUANTAL CURVES PANEL (EFFICACY / TOXICITY) ===== */}
      <g>
        <rect x="24" y="74" width="470" height="410" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="40" y="94" fontSize="9" fontWeight="800" className="fill-brand">THE QUANTAL CURVES — Efficacy / Toxicity (book 233, redrawn)</text>
        <text x="40" y="107" fontSize="6.5" className="fill-muted-foreground">“% of patients responding” vs “Log (drug concentration)” — read BOTH curves at the 50% line</text>
        {/* axes + gridlines */}
        <line x1="56" y1="118" x2="56" y2="420" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="56" y1="420" x2="470" y2="420" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <line x1="56" y1="120" x2="470" y2="120" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3" className="text-muted-foreground" />
        <line x1="56" y1="270" x2="470" y2="270" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 3" className="text-warning" />
        <text x="50" y="122" textAnchor="end" fontSize="6" className="fill-muted-foreground">100</text>
        <text x="50" y="272" textAnchor="end" fontSize="6" className="fill-muted-foreground">50</text>
        <text x="50" y="422" textAnchor="end" fontSize="6" className="fill-muted-foreground">0</text>
        <text x="60" y="264" fontSize="5.5" className="fill-muted-foreground">the 50% line — where both curves are read</text>
        {/* the two quantal curves: Efficacy (ED50 = 200) and Toxicity (TD50 = 360) */}
        <polyline points={eff} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-brand" />
        <polyline points={tox} fill="none" stroke="currentColor" strokeWidth="2.25" className="text-emergency" />
        {/* curve labels (verbatim) */}
        <text x="250" y="138" fontSize="6.5" fontWeight="800" className="fill-brand">Efficacy</text>
        <text x="470" y="158" textAnchor="end" fontSize="6.5" fontWeight="800" className="fill-emergency">Toxicity</text>
        {/* ED50 / TD50 drop markers (verbatim) */}
        <line x1="200" y1="270" x2="200" y2="420" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-brand" />
        <line x1="360" y1="270" x2="360" y2="420" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-emergency" />
        <text x="200" y="434" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">ED50</text>
        <text x="360" y="434" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-emergency">TD50</text>
        {/* the 'Therapeutic index' annotation (verbatim) spanning the gap */}
        <line x1="212" y1="296" x2="348" y2="296" stroke="currentColor" strokeWidth="1.4" className="text-foreground" />
        <polygon points="212,296 221,291 221,301" className="fill-foreground" />
        <polygon points="348,296 339,291 339,301" className="fill-foreground" />
        <text x="280" y="288" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">Therapeutic index</text>
        {/* x axis + footer notes */}
        <text x="263" y="448" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">Log (drug concentration)</text>
        <text x="263" y="466" textAnchor="middle" fontSize="6" className="fill-foreground">ED = Effective dose · TD = Toxic dose — the panel’s own legend (verbatim)</text>
        <text x="263" y="478" textAnchor="middle" fontSize="6" className="fill-muted-foreground">Wide gap = ↑ TI (safe) · narrow gap = ↓ TI (monitor)</text>
      </g>

      {/* ===== THE EQUATION PANEL (VERBATIM) ===== */}
      <g>
        <rect x="510" y="74" width="446" height="180" rx="14" className="fill-secondary/40 stroke-warning" />
        <text x="526" y="94" fontSize="9" fontWeight="800" className="fill-warning">THE EQUATION (book 233, verbatim)</text>
        <text x="526" y="110" fontSize="8" fontWeight="700" className="fill-foreground">“Measurement of drug safety.”</text>
        {/* the fraction: TI = TD50 / ED50 */}
        <text x="556" y="176" textAnchor="middle" fontSize="16" fontWeight="800" className="fill-foreground">TI</text>
        <text x="596" y="176" textAnchor="middle" fontSize="16" fontWeight="800" className="fill-foreground">=</text>
        <text x="695" y="158" textAnchor="middle" fontSize="17" fontWeight="800" className="fill-warning">TD50</text>
        <line x1="640" y1="166" x2="750" y2="166" stroke="currentColor" strokeWidth="1.6" className="text-foreground" />
        <text x="695" y="190" textAnchor="middle" fontSize="17" fontWeight="800" className="fill-brand">ED50</text>
        <text x="775" y="155" fontSize="6.5" className="fill-muted-foreground">median toxic dose</text>
        <text x="775" y="188" fontSize="6.5" className="fill-muted-foreground">median effective dose</text>
        <text x="526" y="214" fontSize="6.5" className="fill-foreground">TD50 = the dose toxic in 50% of patients · ED50 = the dose effective in 50% of patients</text>
        <text x="526" y="230" fontSize="6" className="fill-muted-foreground">Safer drugs have ↑ TI — the bigger the ratio, the wider the safety margin (margin note, verbatim)</text>
        <text x="526" y="246" fontSize="6.5" className="fill-foreground">LD50 (lethal median dose) often replaces TD50 in animal studies. (verbatim)</text>
      </g>

      {/* ===== THE THERAPEUTIC WINDOW PANEL ===== */}
      <g>
        <rect x="510" y="266" width="446" height="218" rx="14" className="fill-secondary/40 stroke-emergency" />
        <text x="526" y="286" fontSize="9" fontWeight="800" className="fill-emergency">THE THERAPEUTIC WINDOW (book 233 — definition verbatim)</text>
        <text x="526" y="303" fontSize="7" className="fill-foreground">“Therapeutic window—range of drug</text>
        <text x="526" y="315" fontSize="7" className="fill-foreground">concentrations that can safely and effectively</text>
        <text x="526" y="327" fontSize="7" className="fill-foreground">treat disease.”</text>
        {/* the concentration band: no effect | THERAPEUTIC WINDOW | toxicity */}
        <rect x="530" y="348" width="110" height="32" className="fill-secondary stroke-border" />
        <rect x="640" y="348" width="200" height="32" className="fill-brand-soft stroke-brand" />
        <rect x="840" y="348" width="96" height="32" className="fill-emergency/20 stroke-emergency" />
        <text x="585" y="368" textAnchor="middle" fontSize="6" className="fill-muted-foreground">no effect</text>
        <text x="740" y="368" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">THERAPEUTIC WINDOW</text>
        <text x="888" y="368" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-emergency">toxicity</text>
        {/* the window boundaries */}
        <line x1="640" y1="344" x2="640" y2="384" stroke="currentColor" strokeWidth="1.2" className="text-brand" />
        <line x1="840" y1="344" x2="840" y2="384" stroke="currentColor" strokeWidth="1.2" className="text-emergency" />
        <text x="640" y="398" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-brand">MEC</text>
        <text x="640" y="410" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">lowest effective</text>
        <text x="840" y="398" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-emergency">MTC</text>
        <text x="840" y="410" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">lowest toxic</text>
        {/* the log concentration axis */}
        <line x1="530" y1="424" x2="936" y2="424" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" />
        <polygon points="936,424 927,419 927,429" className="fill-muted-foreground" />
        <text x="733" y="438" textAnchor="middle" fontSize="6.5" className="fill-muted-foreground">Log (drug concentration)</text>
        <text x="526" y="462" fontSize="6" className="fill-muted-foreground">Narrow window = ↓ TI = frequent monitoring · wide window = ↑ TI = dose freely (KYP synthesis)</text>
        <text x="526" y="476" fontSize="6" className="fill-muted-foreground">Dosing is what you control; concentration is what you measure — the window is the target</text>
      </g>

      {/* ===== THE MARGIN NOTE STRIP (VERBATIM — INCLUDING THE SOURCE'S OWN MNEMONIC) ===== */}
      <g>
        <rect x="24" y="496" width="932" height="120" rx="10" className="fill-card stroke-emergency" />
        <text x="40" y="516" fontSize="9" fontWeight="800" className="fill-emergency">THE MARGIN NOTE (book 233, verbatim — including the source’s own printed mnemonic)</text>
        <line x1="470" y1="506" x2="470" y2="606" stroke="currentColor" strokeWidth="0.8" className="text-muted-foreground" />
        {/* left: TITE — the source's own mnemonic */}
        <text x="40" y="545" fontSize="13" fontWeight="800" className="fill-foreground">TITE: Therapeutic Index = TD50 / ED50.</text>
        <text x="40" y="562" fontSize="6.5" className="fill-muted-foreground">(printed in the margin of book 233 — the SOURCE’S OWN mnemonic, carried verbatim)</text>
        <text x="40" y="580" fontSize="6.5" className="fill-muted-foreground">T before E — the toxic dose on top of the effective dose: the fraction’s whole meaning</text>
        <text x="40" y="600" fontSize="6" className="fill-muted-foreground">↑ TI = wide margin = safe · ↓ TI = narrow margin = the five monitored drugs (below)</text>
        {/* right: the safer-drugs warning, verbatim */}
        <text x="480" y="528" fontSize="7.5" fontWeight="700" className="fill-foreground">Safer drugs have ↑ TI; drugs with ↓ TI</text>
        <text x="480" y="544" fontSize="7" className="fill-foreground">require frequent monitoring (eg, warfarin, theophylline,</text>
        <text x="480" y="558" fontSize="7" className="fill-foreground">digoxin, antiepileptic drugs, lithium;</text>
        <text x="480" y="574" fontSize="7.5" fontWeight="800" className="fill-emergency">Warning! These drugs are lethal!).</text>
        <text x="480" y="592" fontSize="6" className="fill-muted-foreground">the book’s own list AND its own exclamation — carried verbatim</text>
      </g>

      {/* ===== THE LOW-TI DRUGS — THE MONITORING GRID ===== */}
      <g>
        <text x="24" y="644" fontSize="9" fontWeight="800" className="fill-emergency">THE LOW-TI DRUGS — the monitoring list (the five names verbatim from the margin note; clinical anchors are KYP)</text>
        <rect x="24" y="654" width="932" height="112" rx="10" className="fill-card stroke-border" />
        {/* card 1 — warfarin */}
        <g>
          <rect x="32" y="662" width="172" height="96" rx="8" className="fill-secondary/40 stroke-border" />
          <text x="118" y="682" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">WARFARIN</text>
          <text x="118" y="696" textAnchor="middle" fontSize="6" className="fill-muted-foreground">anticoagulation</text>
          <text x="118" y="712" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-brand">monitor: INR</text>
          <text x="118" y="728" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">window: bleeding ↔ thrombosis;</text>
          <text x="118" y="739" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">moved by CYP2C9 + vitamin K intake</text>
        </g>
        {/* card 2 — theophylline */}
        <g>
          <rect x="212" y="662" width="172" height="96" rx="8" className="fill-secondary/40 stroke-border" />
          <text x="298" y="682" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">THEOPHYLLINE</text>
          <text x="298" y="696" textAnchor="middle" fontSize="6" className="fill-muted-foreground">asthma · COPD</text>
          <text x="298" y="712" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-brand">monitor: serum 10–20 mg/L</text>
          <text x="298" y="728" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">CYP1A2 inhibition (ciprofloxacin)</text>
          <text x="298" y="739" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">pushes levels above the window</text>
        </g>
        {/* card 3 — digoxin */}
        <g>
          <rect x="392" y="662" width="172" height="96" rx="8" className="fill-secondary/40 stroke-border" />
          <text x="478" y="682" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">DIGOXIN</text>
          <text x="478" y="696" textAnchor="middle" fontSize="6" className="fill-muted-foreground">HF rate control</text>
          <text x="478" y="712" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-brand">monitor: level + apical pulse</text>
          <text x="478" y="728" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">renal clearance; hypokalemia</text>
          <text x="478" y="739" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">sensitizes to its toxicity</text>
        </g>
        {/* card 4 — antiepileptic drugs */}
        <g>
          <rect x="572" y="662" width="172" height="96" rx="8" className="fill-secondary/40 stroke-border" />
          <text x="658" y="682" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">ANTIEPILEPTIC DRUGS</text>
          <text x="658" y="696" textAnchor="middle" fontSize="6" className="fill-muted-foreground">seizure control</text>
          <text x="658" y="712" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-brand">monitor: levels (free phenytoin)</text>
          <text x="658" y="728" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">phenytoin: zero-order kinetics</text>
          <text x="658" y="739" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">near the top of the window</text>
        </g>
        {/* card 5 — lithium */}
        <g>
          <rect x="752" y="662" width="172" height="96" rx="8" className="fill-secondary/40 stroke-border" />
          <text x="838" y="682" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">LITHIUM</text>
          <text x="838" y="696" textAnchor="middle" fontSize="6" className="fill-muted-foreground">bipolar disorder</text>
          <text x="838" y="712" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-brand">monitor: serum Li 0.6–1.2 mEq/L</text>
          <text x="838" y="728" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">renal excretion; NSAIDs, thiazides,</text>
          <text x="838" y="739" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">ACE inhibitors retain lithium</text>
        </g>
        {/* the source's own exclamation */}
        <rect x="24" y="772" width="932" height="20" className="fill-emergency/10 stroke-emergency" />
        <text x="490" y="786" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-emergency">WARNING! “These drugs are lethal!” — the source’s own exclamation: ↓ TI means the median toxic dose sits close to the median effective dose</text>
      </g>

      {/* ===== FOUR-CODE MNEMONIC STRIP ===== */}
      <g>
        <rect x="24" y="810" width="932" height="168" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="830" fontSize="9" fontWeight="800" className="fill-brand">THE FOUR CODES (code 1 is the SOURCE’S OWN printed mnemonic; codes 2–4 are KYP-original)</text>
        <text x="40" y="852" fontSize="7.5" fontWeight="800" className="fill-foreground">1 · TITE: Therapeutic Index = TD50 / ED50 — printed in the margin of book 233 (the source’s own mnemonic, carried verbatim)</text>
        <text x="40" y="864" fontSize="6" className="fill-muted-foreground">the fastest defense against the inverted fraction — T before E, toxic on top, effective on the bottom</text>
        <text x="40" y="888" fontSize="7.5" fontWeight="800" className="fill-foreground">2 · NUMERATOR TOXIC, DENOMINATOR THERAPEUTIC — the dose that harms on top of the dose that heals: push the ratio UP for safety</text>
        <text x="40" y="900" fontSize="6" className="fill-muted-foreground">TI 8 = forgiving · TI 2 = draw levels · TI ≈ 1 = unusable — a position (potency) is not a ratio (safety)</text>
        <text x="40" y="924" fontSize="7.5" fontWeight="800" className="fill-foreground">3 · QUANTAL = COUNT HEADS, NOT EFFECT — the y-axis is “% of patients responding”: ED50/TD50 are read at the 50-PATIENT line</text>
        <text x="40" y="936" fontSize="6" className="fill-muted-foreground">the 50%-of-maximal-effect reading belongs to the graded curves (EC50/Emax) of the two preceding topics</text>
        <text x="40" y="960" fontSize="7.5" fontWeight="800" className="fill-foreground">4 · THE LETHAL FIVE — Warfarin · Theophylline · Digoxin · Antiepileptic drugs · Lithium: ↓ TI = frequent monitoring</text>
        <text x="40" y="972" fontSize="6" className="fill-muted-foreground">levels are the window made measurable: INR · serum theophylline, digoxin, lithium · antiepileptic drug levels (free phenytoin)</text>
      </g>
    </svg>
  );
}

export function DrugEffectModificationsMap() {
  const w = 980;
  const h = 900;
  // The six-row TERM/DEFINITION/EXAMPLE table of book 234 (pdf 256),
  // re-typeset as an original KYP visual. The section is typeset text
  // only (no figures on the page — pdfimages returned zero rows); the
  // four math-metaphor rows render as the sign ladder, the two
  // metaphor-free rows get dedicated panels, and the EXAMPLE column
  // prints verbatim in the strip. JSX text uses &gt; / &lt; for the
  // ">" and "<" of the math metaphors ("2 + 2 > 4", "2 + 2 < 4").
  const col = (x: number, cx: number, stroke: string, sign: string, term: string, eq: string, cmp: string, drug: string, drugSub: string, d1: string, d2: string, d3: string, alone: string, aloneCls: string) => (
    <g>
      <rect x={x} y="116" width="223" height="196" rx="8" className={`fill-secondary/40 ${stroke}`} />
      <rect x={x + 8} y="124" width="30" height="16" rx="4" className={stroke.replace("stroke-", "fill-").replace("stroke-", "fill-") + "-soft"} />
      <text x={x + 23} y="136" textAnchor="middle" fontSize="9" fontWeight="800" className={stroke.replace("stroke-", "fill-")}>{sign}</text>
      <text x={cx} y="160" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">{term}</text>
      <text x={cx} y="186" textAnchor="middle" fontSize="15" fontWeight="800" className={stroke.replace("stroke-", "fill-")}>{eq}</text>
      <text x={cx} y="206" textAnchor="middle" fontSize="6.5" className="fill-foreground">{cmp}</text>
      <text x={cx} y="226" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">{drug}</text>
      <text x={cx} y="238" textAnchor="middle" fontSize="6" className="fill-muted-foreground">{drugSub}</text>
      <text x={cx} y="260" textAnchor="middle" fontSize="6" className="fill-foreground">{d1}</text>
      <text x={cx} y="272" textAnchor="middle" fontSize="6" className="fill-foreground">{d2}</text>
      <text x={cx} y="284" textAnchor="middle" fontSize="6" className="fill-foreground">{d3}</text>
      <text x={cx} y="304" textAnchor="middle" fontSize="5.5" fontWeight="800" className={aloneCls}>{alone}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Drug effect modifications — the map (an original KYP re-typesetting of the source page book 234, upper portion. THE SIGN LADDER: the four math-metaphor rows as columns — ADDITIVE, together equal to the sum of individual effects, aspirin and acetaminophen, 2 + 2 = 4; SYNERGISTIC, together greater than the sum, clopidogrel with aspirin, 2 + 2 greater than 4; POTENTIATION, drug B with no therapeutic action alone enhances drug A, carbidopa only blocks enzyme to prevent peripheral conversion of levodopa, 2 + 0 greater than 2; ANTAGONISTIC, together less than the sum, morphine with naloxone, 2 + 2 less than 4. THE PERMISSIVE ROW: presence of substance A is required for the full effects of substance B — cortisol on catecholamine responsiveness, with the gate diagram and the adrenal-crisis clinical anchor. THE TACHYPHYLACTIC ROW: acute decrease in response to a drug after initial or repeated administration — repeat use of intranasal decongestant, eg oxymetazoline, with down-arrow therapeutic response and rebound congestion. THE VERBATIM EXAMPLES STRIP: all six EXAMPLE cells exactly as printed. THE FOUR-CODE MNEMONIC STRIP — all four codes are KYP-original; the source prints no mnemonic; the Autonomic receptors section on the same page is EXCLUDED — separate topic; no copyrighted artwork on the page — nothing reproduced)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Drug effect modifications — the map (original KYP re-typesetting)</text>
        <rect x="700" y="24" width="232" height="18" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">6 terms · 4 signs · 5 pairs</text>
      </g>

      {/* ===== THE SIGN LADDER — the four math-metaphor rows (verbatim) ===== */}
      <g>
        <rect x="24" y="74" width="932" height="250" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="94" fontSize="9" fontWeight="800" className="fill-foreground">THE COMBINATION ARITHMETIC — the four math-metaphor rows (book 234, verbatim)</text>
        <text x="40" y="107" fontSize="6.5" className="fill-muted-foreground">the anchor is THE SUM OF INDIVIDUAL EFFECTS — the observed combination is placed against it, and the sign names the term</text>
        {col(32, 143.5, "stroke-brand", "=", "ADDITIVE", "2 + 2 = 4", "together EQUALS the sum", "Aspirin and acetaminophen", "two analgesics — same class, same axis", "“Effect of substances A and B", "together is equal to the sum", "of their individual effects”", "who acts alone? both active — same class, same axis", "fill-brand")}
        {col(263, 374.5, "stroke-warning", ">", "SYNERGISTIC", "2 + 2 &gt; 4", "together BEATS the sum", "Clopidogrel with aspirin", "P2Y12 blockade + COX-1 — different axes", "“Effect of substances A and B", "together is greater than the sum", "of their individual effects”", "who acts alone? both active — different axes, beating the sum", "fill-warning")}
        {col(494, 605.5, "stroke-emergency", "0&gt;", "POTENTIATION", "2 + 0 &gt; 2", "a ZERO partner still beats A alone", "Carbidopa + levodopa", "only blocks peripheral conversion of levodopa", "“Similar to synergism, but drug B", "(with no therapeutic action alone)", "enhances the action of drug A”", "who acts alone? the partner is a ZERO — yet the pair beats A alone", "fill-emergency")}
        {col(725, 836.5, "stroke-neural", "&lt;", "ANTAGONISTIC", "2 + 2 &lt; 4", "together LOSES to the sum", "Morphine with naloxone", "a competitive antagonist at μ-opioid receptors", "“Effect of substances A and B", "together is less than the sum", "of their individual effects”", "who acts alone? the second drug blocks the first at the receptor", "fill-neural")}
      </g>

      {/* ===== THE PERMISSIVE ROW (no sign — a requirement) ===== */}
      <g>
        <rect x="24" y="338" width="460" height="158" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="40" y="358" fontSize="9" fontWeight="800" className="fill-brand">THE PERMISSIVE ROW — no sign; a requirement (book 234, verbatim)</text>
        <text x="40" y="380" fontSize="7.5" className="fill-foreground">“Presence of substance A is required for the full effects of substance B”</text>
        <text x="40" y="402" fontSize="8" fontWeight="800" className="fill-foreground">Cortisol on catecholamine responsiveness</text>
        <text x="40" y="426" fontSize="6.5" className="fill-foreground"><tspan fontWeight="800" className="fill-brand">WITH cortisol</tspan> — catecholamine → full vascular response (the gate is open)</text>
        <text x="40" y="448" fontSize="6.5" className="fill-foreground"><tspan fontWeight="800" className="fill-emergency">WITHOUT cortisol</tspan> — catecholamine → blunted response (the gate is shut)</text>
        <text x="40" y="474" fontSize="5.5" className="fill-muted-foreground">clinical anchor (KYP, beyond the page): pressor-refractory shock in adrenal crisis, rescued by hydrocortisone</text>
      </g>

      {/* ===== THE TACHYPHYLACTIC ROW (no partner — a clock) ===== */}
      <g>
        <rect x="496" y="338" width="460" height="158" rx="14" className="fill-secondary/40 stroke-warning" />
        <text x="512" y="358" fontSize="9" fontWeight="800" className="fill-warning">THE TACHYPHYLACTIC ROW — no partner; a clock (book 234, verbatim)</text>
        <text x="512" y="380" fontSize="7.5" className="fill-foreground">“Acute decrease in response to a drug after initial/repeated administration”</text>
        <text x="512" y="402" fontSize="8" fontWeight="800" className="fill-foreground">Repeat use of intranasal decongestant (eg, oxymetazoline)</text>
        <text x="512" y="426" fontSize="6.5" className="fill-foreground">repeat dosing → ↓ therapeutic response (with rebound congestion)</text>
        <text x="512" y="448" fontSize="6.5" className="fill-foreground">rhinitis medicamentosa — the congestion returns worse than baseline (KYP anchor)</text>
        <text x="512" y="474" fontSize="5.5" className="fill-muted-foreground">same drug, re-dosed — no second drug, no sum: NOT antagonistic; acute (the source’s word), the tolerance boundary is a KYP anchor</text>
      </g>

      {/* ===== THE VERBATIM EXAMPLES STRIP ===== */}
      <g>
        <rect x="24" y="506" width="932" height="112" rx="10" className="fill-card stroke-border" />
        <text x="40" y="526" fontSize="9" fontWeight="800" className="fill-foreground">THE EXAMPLE COLUMN — all six, verbatim (book 234)</text>
        <line x1="492" y1="516" x2="492" y2="608" stroke="currentColor" strokeWidth="0.8" className="text-muted-foreground" />
        <text x="40" y="550" fontSize="6.5" className="fill-foreground">Additive — Aspirin and acetaminophen · “2 + 2 = 4”</text>
        <text x="40" y="572" fontSize="6.5" className="fill-foreground">Permissive — Cortisol on catecholamine responsiveness</text>
        <text x="40" y="594" fontSize="6.5" className="fill-foreground">Synergistic — Clopidogrel with aspirin · “2 + 2 &gt; 4”</text>
        <text x="508" y="550" fontSize="6.5" className="fill-foreground">Potentiation — Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa · “2 + 0 &gt; 2”</text>
        <text x="508" y="572" fontSize="6.5" className="fill-foreground">Antagonistic — Morphine with naloxone · “2 + 2 &lt; 4”</text>
        <text x="508" y="594" fontSize="6.5" className="fill-foreground">Tachyphylactic — Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion)</text>
      </g>

      {/* ===== FOUR-CODE MNEMONIC STRIP ===== */}
      <g>
        <rect x="24" y="634" width="932" height="196" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="654" fontSize="9" fontWeight="800" className="fill-brand">THE FOUR CODES (all four KYP-original — the source prints no mnemonic)</text>
        <text x="40" y="678" fontSize="7.5" fontWeight="800" className="fill-foreground">1 · READ THE SIGN, NAME THE TERM — &lt; is Antagonistic (morphine with naloxone) · = is Additive (aspirin and acetaminophen) · &gt; is Synergistic (clopidogrel with aspirin) · 0&gt; is Potentiation (carbidopa + levodopa)</text>
        <text x="40" y="690" fontSize="6" className="fill-muted-foreground">the four magnitude rows compressed to four signs — find the sign in the stem (or its phrase: less than / equal to / greater than the sum) and the term names itself</text>
        <text x="40" y="714" fontSize="7.5" fontWeight="800" className="fill-foreground">2 · THE ZERO RULES POTENTIATION — a partner that is a ZERO alone and still beats the solitary drug is “2 + 0 &gt; 2”, never “2 + 2 &gt; 4”</text>
        <text x="40" y="726" fontSize="6" className="fill-muted-foreground">the source’s own boundary word is “but”: ‘Similar to synergism, BUT drug B (with no therapeutic action alone) enhances the therapeutic action of drug A’</text>
        <text x="40" y="750" fontSize="7.5" fontWeight="800" className="fill-foreground">3 · PERMISSIVE = PERMISSION, NOT POWER — cortisol doesn’t add pressor force; it permits catecholamines their full effect</text>
        <text x="40" y="762" fontSize="6" className="fill-muted-foreground">“required for the full effects of” — a requirement claim, not a magnitude claim; adrenal crisis is its clinical face (KYP anchor)</text>
        <text x="40" y="786" fontSize="7.5" fontWeight="800" className="fill-foreground">4 · TACHYPHYLAXIS = THE DRUG TIRES OF ITSELF — same drug, repeat dosing, response falls: no partner, no sum, just the clock</text>
        <text x="40" y="798" fontSize="6" className="fill-muted-foreground">“Acute decrease in response... after initial/repeated administration” — rebound congestion (rhinitis medicamentosa, KYP anchor); count the drugs, then check the clock</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="846" width="932" height="44" rx="10" className="fill-card stroke-border" />
        <text x="490" y="866" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">READ THE SIGN, THEN ASK WHO ACTS ALONE — AND COUNT THE DRUGS BEFORE YOU CHECK THE CLOCK: &lt; blocks · = adds · &gt; multiplies · 0&gt; enables · “required for” permits · “after repeated dosing” tires</text>
        <text x="490" y="882" textAnchor="middle" fontSize="6" className="fill-muted-foreground">All six rows carried verbatim from book 234 — the page that opens the AUTONOMIC DRUGS banner; the four codes are KYP-original (the source prints no mnemonic); clinical anchors are KYP extensions beyond the source page</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Autonomic receptors — the AUTONOMIC/SOMATIC receptor map (PH11)
// ---------------------------------------------------------------------------

export function AutonomicReceptorsMap() {
  const w = 980;
  const h = 1256;
  // An original KYP REDRAW of the AUTONOMIC/SOMATIC overview diagram of
  // book 234 (pdf 256, LOWER portion of the page). Census: the source
  // figure is VECTOR LINE ART (pdfimages returned zero raster rows) —
  // path-drawn nerves, ganglia, and organs with typeset labels. This
  // visual re-draws the wiring with original KYP glyphs (CNS band, three
  // pathway columns, synapse chips, receptor plates, organ plates) and
  // carries across only short attributed labels (ACh, NE, Epi, D, Nn, Nm,
  // M₁–M₃, α1/α2/β1/β2, D1, neuron names, organ names) — nothing is
  // reproduced. Color code: blue = cholinergic/muscarinic, red = adrenergic
  // (NE, Epi), green = dopaminergic (D), violet = somatic, amber =
  // sympathetic division chrome; Nn/Nm chips outlined neutral.
  const nt = (cx: number, y: number, label: string, tone: string) => (
    <g>
      <rect x={cx - 15} y={y} width="30" height="16" rx="4" className={`${tone}-soft stroke-${tone}`} strokeWidth="1.2" />
      <text x={cx} y={y + 11.5} textAnchor="middle" fontSize="7.5" fontWeight="800" className={`fill-${tone}`}>{label}</text>
    </g>
  );
  const rec = (cx: number, y: number, wd: number, label: string, tone: string, solid: boolean) => (
    <g>
      <rect x={cx - wd / 2} y={y} width={wd} height="18" rx="6" className={solid ? `fill-${tone} stroke-${tone}` : `fill-${tone}-soft stroke-${tone}`} strokeWidth="1.3" />
      <text x={cx} y={y + 13} textAnchor="middle" fontSize="7.5" fontWeight="800" className={solid ? "fill-card" : `fill-${tone}`}>{label}</text>
    </g>
  );
  const arrowR = (x: number, y: number, len: number, cls = "stroke-foreground/70") => (
    <path d={`M ${x} ${y} h ${len} m -4 -3 l 4 3 l -4 3`} className={cls} strokeWidth="1.3" fill="none" />
  );
  const arrowL = (x: number, y: number, len: number, cls = "stroke-foreground/70") => (
    <path d={`M ${x} ${y} h ${-len} m 4 -3 l -4 3 l 4 3`} className={cls} strokeWidth="1.3" fill="none" />
  );
  const arrowD = (x: number, y: number, len: number, cls = "stroke-foreground/70") => (
    <path d={`M ${x} ${y} v ${len} m -3 -4 l 3 4 l 3 -4`} className={cls} strokeWidth="1.3" fill="none" />
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Autonomic receptors — the map (an original KYP redraw of the AUTONOMIC/SOMATIC overview diagram, book 234, lower portion. THE AUTONOMIC DIVISION — PARASYMPATHETIC: preganglionic neuron long, ganglion on the organ with ACh on Nn, postganglionic neuron short, ACh on M1, M2, M3, targeting smooth muscle, gland cells, nerve terminals, cardiac muscle. SYMPATHETIC: preganglionic neuron short, sympathetic chain with ACh on Nn, postganglionic neuron long, NE on alpha1, alpha2, beta1, beta2 targeting the same organ plate, with two labeled exceptions — the cholinergic sympathetic fiber ACh on M3 to sweat glands, and the dopaminergic branch D on D1 to renal vasculature smooth muscle — plus THE ADRENAL LIMB: adrenal gland medulla directly innervated by the preganglionic fiber, ACh on Nn, secreting Epi and NE into the blood, catecholamine transmission, onto alpha1, alpha2, beta1, beta2 at cardiac muscle and vessels. THE SOMATIC DIVISION: voluntary motor nerve, a single neuron, ACh on Nm at the neuromuscular junction, skeletal muscle. THE THREE FOOTNOTES verbatim: pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system; adrenal medulla is directly innervated by preganglionic sympathetic fibers; sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers, sympathetic nervous system results in a chold sweat — printed as shown, ie cold. THE RECEPTOR ALPHABET KEY: Nn, Nm, M1-M3, alpha and beta adrenergic, D1. THE FOUR-CODE MNEMONIC STRIP — all four codes KYP-original, the source prints no mnemonic. Vector line art in the source — zero raster images; original KYP redraw, nothing reproduced; the Drug effect modifications section on the same page is EXCLUDED — separate topic; the section ends on book 234 — pdf 257 opens the separate Acetylcholine receptors section)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Autonomic receptors — the map (original KYP redraw of book 234)</text>
        <rect x="700" y="24" width="232" height="18" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">3 pathways · 4 transmitters · 6 receptor plates</text>
      </g>

      {/* ===== COLUMN + DIVISION HEADERS ===== */}
      <g>
        <rect x="24" y="74" width="636" height="24" rx="6" className="fill-secondary" />
        <text x="342" y="90" textAnchor="middle" fontSize="9" fontWeight="800" letterSpacing="2" className="fill-foreground">AUTONOMIC</text>
        <rect x="676" y="74" width="280" height="24" rx="6" className="fill-secondary" />
        <text x="816" y="90" textAnchor="middle" fontSize="9" fontWeight="800" letterSpacing="2" className="fill-foreground">SOMATIC</text>
        <rect x="24" y="104" width="308" height="22" rx="6" className="fill-brand-soft stroke-brand" />
        <text x="178" y="119" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">Parasympathetic</text>
        <rect x="344" y="104" width="316" height="22" rx="6" className="fill-warning-soft stroke-warning" />
        <text x="502" y="119" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">Sympathetic</text>
        <text x="816" y="119" textAnchor="middle" fontSize="6" className="fill-muted-foreground">(the one-neuron division)</text>
      </g>

      {/* ===== THE CNS BAND ===== */}
      <g>
        <rect x="24" y="136" width="636" height="64" rx="10" className="fill-card stroke-border" />
        <text x="40" y="150" fontSize="7" fontWeight="800" className="fill-muted-foreground">THE CNS — the origin of all three pathways</text>
        <rect x="64" y="158" width="130" height="30" rx="6" className="fill-brand-soft stroke-brand" />
        <text x="129" y="177" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">Brainstem</text>
        <rect x="230" y="158" width="140" height="30" rx="6" className="fill-warning-soft stroke-warning" />
        <text x="300" y="177" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">Spinal cord</text>
        <path d="M 194 173 h 32 m -4 -3 l 4 3 l -4 3" className="stroke-foreground/70" strokeWidth="1.3" fill="none" />
        <text x="388" y="154" fontSize="5.2" className="fill-muted-foreground">para outflow: craniosacral — CNs III, VII, IX, X + pelvic splanchnic (footnote 1)</text>
        <text x="388" y="163" fontSize="5.2" className="fill-muted-foreground">sym outflow: thoracolumbar → the sympathetic chain</text>
        {/* fibers out of the CNS */}
        <path d="M 129 188 v 20 m -3 -4 l 3 4 l 3 -4" className="stroke-brand" strokeWidth="1.4" fill="none" />
        <path d="M 300 188 v 14 h 156 v 6 m -3 -4 l 3 4 l 3 -4" className="stroke-warning" strokeWidth="1.4" fill="none" />
        <path d="M 370 174 H 816 v 32 m -3 -4 l 3 4 l 3 -4" className="stroke-neural" strokeWidth="1.4" fill="none" />
        <text x="760" y="167" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">somatic outflow — anterior horn (single neuron)</text>
      </g>

      {/* ===== PARASYMPATHETIC COLUMN ===== */}
      <g>
        <rect x="44" y="216" width="270" height="46" rx="8" className="fill-card stroke-brand" />
        <text x="179" y="234" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">Preganglionic neuron (long)</text>
        <text x="179" y="248" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">cholinergic — its ganglion sits ON the organ</text>
        <path d="M 179 262 v 30" className="stroke-foreground/70" strokeWidth="1.2" fill="none" />
        {nt(179, 268, "ACh", "brand")}
        <circle cx="179" cy="308" r="11" className="fill-card stroke-brand" strokeWidth="1.6" />
        <text x="179" y="311.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">Nn</text>
        <text x="196" y="304" fontSize="5.2" className="fill-muted-foreground">the ganglion on/near the organ —</text>
        <text x="196" y="313" fontSize="5.2" className="fill-muted-foreground">the synapse that never changes (ACh → Nn)</text>
        <path d="M 179 319 v 29" className="stroke-foreground/70" strokeWidth="1.2" fill="none" />
        <rect x="44" y="352" width="270" height="46" rx="8" className="fill-card stroke-brand" />
        <text x="179" y="370" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">Postganglionic neuron (short)</text>
        <text x="179" y="384" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">cholinergic — releases ACh at the organ</text>
        <path d="M 179 398 v 34" className="stroke-foreground/70" strokeWidth="1.2" fill="none" />
        {nt(179, 404, "ACh", "brand")}
        {rec(179, 440, 120, "M₁, M₂, M₃", "brand", false)}
        <path d="M 179 458 v 18" className="stroke-foreground/70" strokeWidth="1.2" fill="none" />
        <rect x="44" y="478" width="270" height="76" rx="8" className="fill-secondary/40 stroke-brand" />
        <text x="179" y="496" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-muted-foreground">THE ORGAN PLATE (book 234)</text>
        <text x="179" y="512" textAnchor="middle" fontSize="6.5" className="fill-foreground">Smooth muscle, gland cells,</text>
        <text x="179" y="524" textAnchor="middle" fontSize="6.5" className="fill-foreground">nerve terminals,</text>
        <text x="179" y="536" textAnchor="middle" fontSize="6.5" className="fill-foreground">cardiac muscle</text>
        <text x="179" y="550" textAnchor="middle" fontSize="5" className="fill-muted-foreground">answers cholinomimetics + anticholinergics</text>
        <text x="179" y="572" textAnchor="middle" fontSize="5.8" fontWeight="800" className="fill-brand">LONG P, SHORT POST — discrete, organ-local action</text>
        <text x="179" y="582" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">the ganglion sits ON the organ — that is why parasympathetic action is discrete</text>
      </g>

      {/* ===== SYMPATHETIC COLUMN — the chain path ===== */}
      <g>
        <rect x="352" y="216" width="208" height="46" rx="8" className="fill-card stroke-warning" />
        <text x="456" y="234" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">Preganglionic neuron (short)</text>
        <text x="456" y="248" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">cholinergic — thoracolumbar outflow</text>
        <path d="M 456 262 v 26" className="stroke-foreground/70" strokeWidth="1.2" fill="none" />
        {nt(456, 268, "ACh", "brand")}
        <rect x="352" y="292" width="208" height="56" rx="8" className="fill-warning-soft stroke-warning" />
        <text x="456" y="306" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">Sympathetic chain</text>
        <circle cx="392" cy="326" r="6" className="fill-card stroke-warning" strokeWidth="1.2" />
        <circle cx="414" cy="326" r="6" className="fill-card stroke-warning" strokeWidth="1.2" />
        <circle cx="436" cy="326" r="6" className="fill-card stroke-warning" strokeWidth="1.2" />
        <path d="M 398 326 h 10 M 420 326 h 10" className="stroke-warning" strokeWidth="1.2" fill="none" />
        <rect x="478" y="318" width="30" height="17" rx="4" className="fill-card stroke-foreground/70" />
        <text x="493" y="330.5" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-foreground">Nn</text>
        <text x="456" y="344" textAnchor="middle" fontSize="5" className="fill-muted-foreground">the chain NEAR the cord — one preganglionic fiber recruits many</text>
        <path d="M 456 348 v 28" className="stroke-foreground/70" strokeWidth="1.2" fill="none" />
        <rect x="352" y="380" width="208" height="46" rx="8" className="fill-card stroke-warning" />
        <text x="456" y="398" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">Postganglionic neuron (long)</text>
        <text x="456" y="412" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">mostly noradrenergic — the labeled exceptions below</text>
        {/* the three postganglionic fibers fan out */}
        <path d="M 456 426 L 386 444 M 456 426 L 478 444 M 456 426 L 570 444" className="stroke-foreground/60" strokeWidth="1.2" fill="none" />
        {/* lane 1 — NE → α/β organ plate */}
        <path d="M 386 444 v 4" className="stroke-foreground/60" strokeWidth="1.2" fill="none" />
        {nt(386, 448, "NE", "emergency")}
        <path d="M 386 464 v 12" className="stroke-foreground/60" strokeWidth="1.2" fill="none" />
        {rec(386, 476, 90, "α1, α2, β1, β2", "emergency", false)}
        <path d="M 386 494 v 12" className="stroke-foreground/60" strokeWidth="1.2" fill="none" />
        <rect x="346" y="506" width="80" height="78" rx="8" className="fill-secondary/40 stroke-warning" />
        <text x="386" y="522" textAnchor="middle" fontSize="6" className="fill-foreground">Smooth muscle,</text>
        <text x="386" y="533" textAnchor="middle" fontSize="6" className="fill-foreground">gland cells, nerve</text>
        <text x="386" y="544" textAnchor="middle" fontSize="6" className="fill-foreground">terminals,</text>
        <text x="386" y="555" textAnchor="middle" fontSize="6" className="fill-foreground">cardiac muscle</text>
        <text x="386" y="572" textAnchor="middle" fontSize="5" className="fill-muted-foreground">the NE plate</text>
        {/* lane 2 — the sweat gland exception (ACh → M3) */}
        <path d="M 478 444 v 4" className="stroke-foreground/60" strokeWidth="1.2" fill="none" />
        {nt(478, 448, "ACh", "brand")}
        <path d="M 478 464 v 12" className="stroke-foreground/60" strokeWidth="1.2" fill="none" />
        {rec(478, 476, 34, "M₃", "brand", false)}
        <path d="M 478 494 v 12" className="stroke-foreground/60" strokeWidth="1.2" fill="none" />
        <rect x="438" y="506" width="80" height="78" rx="8" className="fill-secondary/40 stroke-warning" />
        <text x="478" y="524" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">Sweat glands</text>
        <text x="478" y="542" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">sympathetic PATH,</text>
        <text x="478" y="551" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">cholinergic FIBER —</text>
        <text x="478" y="560" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">the exception (footnote 3)</text>
        <text x="478" y="576" textAnchor="middle" fontSize="5" className="fill-muted-foreground">“chold” sweat [sic]</text>
        {/* lane 3 — the dopaminergic renal branch (D → D1) */}
        <path d="M 570 444 v 4" className="stroke-foreground/60" strokeWidth="1.2" fill="none" />
        {nt(570, 448, "D", "success")}
        <path d="M 570 464 v 12" className="stroke-foreground/60" strokeWidth="1.2" fill="none" />
        {rec(570, 476, 34, "D1", "success", false)}
        <path d="M 570 494 v 12" className="stroke-foreground/60" strokeWidth="1.2" fill="none" />
        <rect x="530" y="506" width="80" height="78" rx="8" className="fill-secondary/40 stroke-warning" />
        <text x="570" y="524" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-foreground">Renal</text>
        <text x="570" y="535" textAnchor="middle" fontSize="6.5" className="fill-foreground">vasculature</text>
        <text x="570" y="546" textAnchor="middle" fontSize="6.5" className="fill-foreground">smooth muscle</text>
        <text x="570" y="564" textAnchor="middle" fontSize="5" className="fill-muted-foreground">low-dose dopamine,</text>
        <text x="570" y="574" textAnchor="middle" fontSize="5" className="fill-muted-foreground">fenoldopam (KYP)</text>
        <text x="456" y="594" textAnchor="middle" fontSize="5.8" fontWeight="800" className="fill-warning">SHORT P, LONG POST — the chain NEAR the cord (mass discharge)</text>
        {/* the adrenal exit — direct, no postganglionic neuron */}
        <path d="M 560 238 H 628 V 592 m -3 -4 l 3 4 l 3 -4" className="stroke-warning" strokeWidth="1.4" fill="none" />
        <text x="622" y="400" textAnchor="end" fontSize="5.2" className="fill-muted-foreground">direct —</text>
        <text x="622" y="409" textAnchor="end" fontSize="5.2" className="fill-muted-foreground">no postganglionic</text>
        <text x="622" y="418" textAnchor="end" fontSize="5.2" className="fill-muted-foreground">neuron (footnote 2)</text>
      </g>

      {/* ===== THE ADRENAL LIMB — the endocrine bypass ===== */}
      <g>
        <rect x="352" y="600" width="308" height="128" rx="10" className="fill-card stroke-warning" />
        <text x="368" y="618" fontSize="7.5" fontWeight="800" className="fill-warning">THE ADRENAL LIMB — the endocrine bypass (no postganglionic neuron)</text>
        <text x="368" y="630" fontSize="5.2" className="fill-muted-foreground">the medulla IS the ganglion — chromaffin cells are the axon-less postganglionic neuron</text>
        <rect x="366" y="640" width="56" height="20" rx="6" className="fill-brand-soft stroke-brand" />
        <text x="394" y="654" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-brand">ACh → Nn</text>
        {arrowR(424, 650, 14)}
        <rect x="442" y="638" width="100" height="32" rx="8" className="fill-warning-soft stroke-warning" />
        <text x="492" y="651" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-warning">Adrenal gland</text>
        <text x="492" y="663" textAnchor="middle" fontSize="6" className="fill-warning">(medulla)</text>
        {arrowR(546, 650, 12)}
        <rect x="562" y="640" width="54" height="20" rx="6" className="fill-emergency-soft stroke-emergency" />
        <text x="589" y="654" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-emergency">Epi + NE</text>
        {arrowD(589, 660, 14)}
        <rect x="536" y="678" width="106" height="36" rx="6" className="fill-emergency-soft stroke-emergency" />
        <text x="589" y="692" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-emergency">Blood</text>
        <text x="589" y="703" textAnchor="middle" fontSize="5.2" className="fill-emergency">(catecholamine</text>
        <text x="589" y="712" textAnchor="middle" fontSize="5.2" className="fill-emergency">transmission)</text>
        {arrowL(534, 696, 12)}
        {rec(473, 687, 86, "α1, α2, β1, β2", "emergency", false)}
        {arrowL(430, 696, 12)}
        <rect x="368" y="678" width="46" height="42" rx="6" className="fill-secondary/40 stroke-emergency" />
        <text x="391" y="694" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-foreground">Cardiac</text>
        <text x="391" y="705" textAnchor="middle" fontSize="6.5" className="fill-foreground">muscle,</text>
        <text x="391" y="716" textAnchor="middle" fontSize="6.5" className="fill-foreground">vessels</text>
      </g>

      {/* ===== SOMATIC COLUMN ===== */}
      <g>
        <rect x="700" y="216" width="232" height="46" rx="8" className="fill-card stroke-neural" />
        <text x="816" y="234" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-neural">Voluntary motor nerve</text>
        <text x="816" y="248" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">single neuron — ONE, not two; no ganglion</text>
        <path d="M 816 262 v 104" className="stroke-neural" strokeWidth="1.6" fill="none" />
        <circle cx="816" cy="270" r="7" className="fill-neural-soft stroke-neural" strokeWidth="1.3" />
        <text x="832" y="318" fontSize="5.2" className="fill-muted-foreground">one long axon —</text>
        <text x="832" y="327" fontSize="5.2" className="fill-muted-foreground">no ganglion in the path</text>
        {nt(816, 368, "ACh", "brand")}
        <path d="M 816 384 v 40" className="stroke-neural" strokeWidth="1.6" fill="none" />
        <rect x="724" y="426" width="200" height="44" rx="8" className="fill-secondary/40 stroke-neural" />
        <path d="M 784 426 v 10 M 792 426 v 10 M 800 426 v 10 M 808 426 v 10 M 816 426 v 10 M 824 426 v 10 M 832 426 v 10 M 840 426 v 10 M 848 426 v 10" className="stroke-neural" strokeWidth="1" fill="none" />
        <text x="824" y="458" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-neural">Neuromuscular junction</text>
        <text x="824" y="466" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">the somatic synapse — the diagram’s fourth synapse type</text>
        <rect x="801" y="486" width="30" height="18" rx="6" className="fill-card stroke-foreground/70" />
        <text x="816" y="499.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">Nm</text>
        <text x="840" y="494" fontSize="5.2" className="fill-muted-foreground">the NMJ’s nicotinic subtype —</text>
        <text x="840" y="503" fontSize="5.2" className="fill-muted-foreground">blocked by NMBAs, not by ganglionic drugs</text>
        <path d="M 816 504 v 18" className="stroke-foreground/70" strokeWidth="1.2" fill="none" />
        <rect x="724" y="522" width="200" height="48" rx="8" className="fill-secondary/40 stroke-neural" />
        <text x="824" y="542" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-neural">Skeletal muscle</text>
        <text x="824" y="556" textAnchor="middle" fontSize="5.5" className="fill-muted-foreground">the ONE effector the autonomic divisions never reach</text>
        <text x="824" y="584" textAnchor="middle" fontSize="5.8" fontWeight="800" className="fill-neural">TWO NEURONS TO THE ORGANS, ONE TO THE BONES</text>
        <text x="824" y="594" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">Nm blockade paralyzes without touching any autonomic plate</text>
      </g>

      {/* ===== ONE TRANSMITTER, THREE ADDRESSES ===== */}
      <g>
        <rect x="676" y="612" width="280" height="112" rx="10" className="fill-card stroke-border" />
        <text x="692" y="630" fontSize="8" fontWeight="800" className="fill-foreground">ONE TRANSMITTER, THREE ADDRESSES (ACh)</text>
        <text x="692" y="650" fontSize="6.2" className="fill-foreground">Nn — autonomic ganglia + the adrenal medulla (ganglionic)</text>
        <text x="692" y="664" fontSize="6.2" className="fill-foreground">Nm — the neuromuscular junction on skeletal muscle</text>
        <text x="692" y="678" fontSize="6.2" className="fill-foreground">M₁, M₂, M₃ — all parasympathetic organs + the sweat glands’ M₃</text>
        <text x="692" y="692" fontSize="5.4" className="fill-muted-foreground">same transmitter, different receptors — the receptor, not the</text>
        <text x="692" y="701" fontSize="5.4" className="fill-muted-foreground">transmitter, names the drug class and its selectivity</text>
      </g>

      {/* ===== THE THREE FOOTNOTES (verbatim) ===== */}
      <g>
        <rect x="24" y="740" width="932" height="130" rx="10" className="fill-card stroke-border" />
        <text x="40" y="758" fontSize="9" fontWeight="800" className="fill-foreground">THE THREE DIAGRAM FOOTNOTES (book 234, verbatim)</text>
        <line x1="330" y1="748" x2="330" y2="860" className="stroke-border" strokeWidth="1" />
        <line x1="642" y1="748" x2="642" y2="860" className="stroke-border" strokeWidth="1" />
        <text x="48" y="776" fontSize="6" fontWeight="800" className="fill-brand">FOOTNOTE 1 — the craniosacral outflow</text>
        <text x="48" y="794" fontSize="6.2" className="fill-foreground">Pelvic splanchnic nerves and CNs III,</text>
        <text x="48" y="804" fontSize="6.2" className="fill-foreground">VII, IX, and X are part of the</text>
        <text x="48" y="814" fontSize="6.2" className="fill-foreground">parasympathetic nervous system.</text>
        <text x="48" y="832" fontSize="5.2" className="fill-muted-foreground">the long preganglionic fibers of the first column</text>
        <text x="48" y="841" fontSize="5.2" className="fill-muted-foreground">run in these nerves (CNs above; S2-S4 below)</text>
        <text x="344" y="776" fontSize="6" fontWeight="800" className="fill-warning">FOOTNOTE 2 — the adrenal limb’s mechanism</text>
        <text x="344" y="794" fontSize="6.2" className="fill-foreground">Adrenal medulla is directly innervated by</text>
        <text x="344" y="804" fontSize="6.2" className="fill-foreground">preganglionic sympathetic fibers.</text>
        <text x="344" y="822" fontSize="5.2" className="fill-muted-foreground">why the adrenal panel has no postganglionic neuron:</text>
        <text x="344" y="831" fontSize="5.2" className="fill-muted-foreground">the medulla IS the ganglion — its chromaffin cells</text>
        <text x="344" y="840" fontSize="5.2" className="fill-muted-foreground">secrete Epi + NE straight into the blood</text>
        <text x="656" y="776" fontSize="6" fontWeight="800" className="fill-warning">FOOTNOTE 3 — the sweat-gland exception</text>
        <text x="656" y="794" fontSize="6.2" className="fill-foreground">Sweat glands are part of the sympathetic</text>
        <text x="656" y="804" fontSize="6.2" className="fill-foreground">pathway but are innervated by cholinergic</text>
        <text x="656" y="814" fontSize="6.2" className="fill-foreground">fibers (sympathetic nervous system results</text>
        <text x="656" y="824" fontSize="6.2" className="fill-foreground">in a “chold” sweat).</text>
        <text x="656" y="842" fontSize="5.2" className="fill-muted-foreground">the printed “chold” [sic] = “cold” — sympathetic PATH,</text>
        <text x="656" y="851" fontSize="5.2" className="fill-muted-foreground">cholinergic FIBER, M₃ receptor</text>
      </g>

      {/* ===== THE RECEPTOR ALPHABET KEY ===== */}
      <g>
        <rect x="24" y="884" width="932" height="112" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="40" y="902" fontSize="9" fontWeight="800" className="fill-foreground">THE RECEPTOR ALPHABET — six plates, three transmitter families</text>
        <rect x="92" y="914" width="52" height="18" rx="6" className="fill-card stroke-foreground/70" />
        <text x="118" y="927.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">Nn</text>
        <text x="118" y="948" textAnchor="middle" fontSize="5.8" className="fill-foreground">nicotinic (ganglionic)</text>
        <text x="118" y="958" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">autonomic ganglia +</text>
        <text x="118" y="967" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">the adrenal medulla</text>
        <rect x="280" y="914" width="52" height="18" rx="6" className="fill-card stroke-foreground/70" />
        <text x="306" y="927.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">Nm</text>
        <text x="306" y="948" textAnchor="middle" fontSize="5.8" className="fill-foreground">nicotinic (muscular)</text>
        <text x="306" y="958" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">the neuromuscular junction</text>
        <text x="306" y="967" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">on skeletal muscle</text>
        <rect x="458" y="914" width="72" height="18" rx="6" className="fill-brand-soft stroke-brand" />
        <text x="494" y="927.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">M₁, M₂, M₃</text>
        <text x="494" y="948" textAnchor="middle" fontSize="5.8" className="fill-foreground">muscarinic (GPCR)</text>
        <text x="494" y="958" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">parasympathetic organs +</text>
        <text x="494" y="967" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">sweat glands (M₃)</text>
        <rect x="630" y="914" width="104" height="18" rx="6" className="fill-emergency-soft stroke-emergency" />
        <text x="682" y="927.5" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-emergency">α1, α2, β1, β2</text>
        <text x="682" y="948" textAnchor="middle" fontSize="5.8" className="fill-foreground">adrenergic (GPCR)</text>
        <text x="682" y="958" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">NE organs + blood-borne Epi/NE</text>
        <text x="682" y="967" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">(cardiac muscle, vessels)</text>
        <rect x="844" y="914" width="52" height="18" rx="6" className="fill-success-soft stroke-success" />
        <text x="870" y="927.5" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-success">D1</text>
        <text x="870" y="948" textAnchor="middle" fontSize="5.8" className="fill-foreground">dopamine</text>
        <text x="870" y="958" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">renal vasculature</text>
        <text x="870" y="967" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">smooth muscle</text>
        <text x="490" y="988" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">COLOR KEY — transmitter chips: blue ACh · red NE/Epi · green D — receptor chips match their transmitter family; Nn/Nm outlined neutral; division chrome: blue parasympathetic · amber sympathetic · violet somatic</text>
      </g>

      {/* ===== FOUR-CODE MNEMONIC STRIP ===== */}
      <g>
        <rect x="24" y="1008" width="932" height="172" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="1026" fontSize="9" fontWeight="800" className="fill-brand">THE FOUR CODES (all four KYP-original — the source prints no mnemonic)</text>
        <text x="40" y="1050" fontSize="7.5" fontWeight="800" className="fill-foreground">1 · THE GANGLION IS ALWAYS NICOTINIC — every autonomic ganglion and the adrenal medulla sit behind ACh on Nn; only the organ synapse changes</text>
        <text x="40" y="1062" fontSize="5.8" className="fill-muted-foreground">a ganglionic (Nn) blocker silences BOTH divisions at once — and still cannot paralyze (Nm is a different receptor)</text>
        <text x="40" y="1086" fontSize="7.5" fontWeight="800" className="fill-foreground">2 · PARA = LONG P, SHORT POST; SYM = SHORT P, LONG POST — the parasympathetic ganglion sits ON the organ, the sympathetic chain NEAR the cord</text>
        <text x="40" y="1098" fontSize="5.8" className="fill-muted-foreground">discrete, organ-local action (para) vs mass discharge (sym) — the neuron lengths ARE that anatomy</text>
        <text x="40" y="1122" fontSize="7.5" fontWeight="800" className="fill-foreground">3 · THE SYMPATHETIC EXCEPTIONS: SWEAT IS M₃, KIDNEY IS D1, ADRENAL HAS NO AXON</text>
        <text x="40" y="1134" fontSize="5.8" className="fill-muted-foreground">sweat glands — sympathetic path, cholinergic fiber, M₃ · renal branch — D on D1 · adrenal — directly innervated, secretes Epi + NE into blood</text>
        <text x="40" y="1158" fontSize="7.5" fontWeight="800" className="fill-foreground">4 · TWO NEURONS TO THE ORGANS, ONE TO THE BONES — autonomic chains end on M/α/β/D; the somatic motor nerve ends on Nm</text>
        <text x="40" y="1170" fontSize="5.8" className="fill-muted-foreground">count the neurons first: skeletal muscle = somatic (Nm); smooth muscle, cardiac muscle, glands = autonomic (two neurons, M/α/β/D)</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="1192" width="932" height="56" rx="10" className="fill-card stroke-border" />
        <text x="490" y="1212" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">COUNT THE NEURONS, NAME THE GANGLION, READ THE POSTGANGLIONIC TRANSMITTER — THE RECEPTOR ALPHABET NAMES ITSELF</text>
        <text x="490" y="1228" textAnchor="middle" fontSize="5.8" className="fill-muted-foreground">All pathway labels carried verbatim from book 234 (the AUTONOMIC/SOMATIC diagram — vector line art; pdfimages: zero raster rows) — redrawn here as an original KYP visual with original glyphs; nothing reproduced</text>
        <text x="490" y="1239" textAnchor="middle" fontSize="5.8" className="fill-muted-foreground">the four codes are KYP-original (the source prints no mnemonic); the section ENDS on book 234 — pdf 257 opens the separate Acetylcholine receptors section; clinical anchors are KYP extensions</text>
      </g>
    </svg>
  );
}

export function AcetylcholineReceptorsMap() {
  const w = 980;
  const h = 1180;
  // An original KYP visual of the ACETYLCHOLINE RECEPTORS section of
  // book 235 (pdf 257, UPPER portion of the page). Census: the page has
  // NO figure (pdfimages returned zero raster rows) — the section is TWO
  // TYPESET PARAGRAPHS, so this is an ORIGINAL_KYP_ADAPTATION built from
  // the section's own sentences (the ACh origin band, the nicotinic panel
  // with its channel glyph and NN/NM station cards, the muscarinic panel
  // with its G-protein fork and odd/even lanes, the location strip, the
  // sorting row, the four-code strip) — nothing reproduced. PAGE-STRUCTURE
  // FINDING: the page prints NO muscarinic subtype table; the M1–M5
  // G-protein layer is a KYP extension with a provenance split — the
  // M1 = Gq, M2 = Gi, M3 = Gq letters are the book's own (book 237, the
  // separate g-protein-linked-second-messengers topic); M4/M5 and the
  // odd/even rule are KYP-original. Color code: violet = nicotinic
  // family, blue = muscarinic family / ACh chips, red = the odd Gq
  // (IP3/DAG) lane, green = the even Gi (↓cAMP) lane. JSX text uses
  // &gt; / &amp; escapes where needed.
  const nt = (cx: number, y: number, label: string, tone: string, wd = 34) => (
    <g>
      <rect x={cx - wd / 2} y={y} width={wd} height="17" rx="4" className={`fill-card stroke-${tone}`} strokeWidth="1.2" />
      <text x={cx} y={y + 12} textAnchor="middle" fontSize="7.5" fontWeight="800" className={`fill-${tone}`}>{label}</text>
    </g>
  );
  const downArrow = (x: number, y1: number, y2: number, cls = "stroke-foreground/70") => (
    <path d={`M ${x} ${y1} V ${y2} m -3 -4 l 3 4 l 3 -4`} className={cls} strokeWidth="1.3" fill="none" />
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Acetylcholine receptors — the two-family map (an original KYP visual of the Acetylcholine receptors section, book 235. ONE TRANSMITTER, TWO FAMILIES: ACh addresses the NICOTINIC family — ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+ — with two subtypes: NN, found in autonomic ganglia and the adrenal medulla, and NM, found in the neuromuscular junction of skeletal muscle; and the MUSCARINIC family — G-protein-coupled receptors that usually act through 2nd messengers, with 5 subtypes M1 to M5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands, cholinergic sympathetic. The G-protein fork: the odd subtypes M1, M3, M5 couple Gq, activating PLC to make IP3 and DAG; the even subtypes M2, M4 couple Gi, lowering cAMP through inhibition of adenylyl cyclase; M2 is the heart's brake, M3 the gland and smooth-muscle workhorse including the sweat glands. THE LOCATION STRIP distributes the book's collective list by subtype. THE SORTING ROW contrasts the two families — signaling, stations, character, drug families. THE FOUR-CODE MNEMONIC STRIP — all KYP-original, the source prints no mnemonic. Page structure: the page prints no muscarinic subtype table — the M1 to M3 G-protein letters are the book's own from book 237, the separate g-protein-linked-second-messengers topic; M4, M5, and the odd/even rule are KYP extensions. The Pain transmission section on the same page is EXCLUDED — separate topic; the section ends on book 235 — pdf 258 opens the separate Micturition control section; no figure exists on the page — zero raster rows; original KYP visual, nothing reproduced)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Acetylcholine receptors — the two-family map (original KYP visual of book 235)</text>
        <rect x="700" y="24" width="232" height="18" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">1 transmitter · 2 families · 7 subtypes</text>
      </g>

      {/* ===== THE ACh ORIGIN BAND ===== */}
      <g>
        <rect x="24" y="74" width="932" height="64" rx="10" className="fill-card stroke-border" />
        <rect x="410" y="86" width="160" height="24" rx="8" className="fill-brand-soft stroke-brand" />
        <text x="490" y="102" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">ACh — acetylcholine</text>
        <text x="490" y="124" textAnchor="middle" fontSize="6" className="fill-muted-foreground">ONE transmitter — the family, not the transmitter, names the drug class and its selectivity</text>
        <path d="M 410 98 H 244 V 146 m -3 -4 l 3 4 l 3 -4" className="stroke-foreground/70" strokeWidth="1.3" fill="none" />
        <path d="M 570 98 H 736 V 146 m -3 -4 l 3 4 l 3 -4" className="stroke-foreground/70" strokeWidth="1.3" fill="none" />
      </g>

      {/* ===== NICOTINIC PANEL ===== */}
      <g>
        <rect x="24" y="150" width="440" height="512" rx="10" className="fill-card stroke-neural" strokeWidth="1.5" />
        <text x="40" y="170" fontSize="9.5" fontWeight="800" className="fill-neural">THE NICOTINIC FAMILY — ligand-gated channels (ionotropic)</text>
        <text x="40" y="181" fontSize="5.8" className="fill-muted-foreground">book 235, verbatim — the section&apos;s first paragraph:</text>
        <rect x="36" y="186" width="416" height="72" rx="6" className="fill-secondary/40" />
        <text x="46" y="200" fontSize="6.2" className="fill-foreground">Nicotinic ACh receptors are ligand-gated channels allowing</text>
        <text x="46" y="210" fontSize="6.2" className="fill-foreground">efflux of K+ and influx of Na+ and in some cases Ca2+.</text>
        <text x="46" y="220" fontSize="6.2" className="fill-foreground">Two subtypes: NN (found in autonomic ganglia, adrenal</text>
        <text x="46" y="230" fontSize="6.2" className="fill-foreground">medulla) and NM (found in neuromuscular junction of</text>
        <text x="46" y="240" fontSize="6.2" className="fill-foreground">skeletal muscle).</text>
        {/* the channel glyph — the receptor IS the pore */}
        <text x="40" y="276" fontSize="6.5" fontWeight="800" className="fill-neural">THE CHANNEL MECHANISM — the receptor IS the pore</text>
        <text x="66" y="310" fontSize="5" className="fill-muted-foreground">MEMBRANE</text>
        <rect x="60" y="296" width="158" height="22" className="fill-secondary stroke-foreground/30" />
        <rect x="306" y="296" width="118" height="22" className="fill-secondary stroke-foreground/30" />
        <text x="66" y="340" fontSize="5" className="fill-muted-foreground">CYTOSOL — depolarization</text>
        <rect x="218" y="290" width="88" height="34" rx="5" className="fill-card stroke-neural" strokeWidth="1.4" />
        <rect x="234" y="271" width="56" height="15" rx="4" className="fill-brand-soft stroke-brand" />
        <text x="262" y="282" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-brand">ACh BINDS</text>
        <path d="M 262 286 V 291" className="stroke-brand" strokeWidth="1.2" fill="none" />
        <path d="M 234 288 V 352 m -3 -4 l 3 4 l 3 -4" className="stroke-emergency" strokeWidth="1.4" fill="none" />
        <path d="M 263 288 V 352 m -3 -4 l 3 4 l 3 -4" className="stroke-foreground/50" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
        <path d="M 292 352 V 288 m 4 4 l -4 -4 l -4 4" className="stroke-success" strokeWidth="1.4" fill="none" />
        <text x="236" y="364" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-emergency">Na+ influx</text>
        <text x="292" y="364" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-success">K+ efflux</text>
        <text x="263" y="375" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">Ca2+ — in some cases</text>
        <text x="244" y="388" textAnchor="middle" fontSize="5.8" fontWeight="800" className="fill-neural">ms-fast · unamplified · all-or-none at the station</text>
        {/* the NN station card */}
        <rect x="36" y="396" width="416" height="92" rx="8" className="fill-neural-soft stroke-neural" />
        <text x="48" y="412" fontSize="8.5" fontWeight="800" className="fill-neural">NN — the ganglionic subtype</text>
        <text x="48" y="424" fontSize="6.4" className="fill-foreground">“found in autonomic ganglia, adrenal medulla” (book 235)</text>
        <text x="48" y="436" fontSize="5.6" className="fill-muted-foreground">every autonomic ganglion of BOTH divisions + the adrenal&apos;s</text>
        <text x="48" y="445" fontSize="5.6" className="fill-muted-foreground">catecholamine trigger — ganglionic blockers (trimetaphan/</text>
        <text x="48" y="454" fontSize="5.6" className="fill-muted-foreground">mecamylamine — KYP anchors) silence both divisions here</text>
        <text x="48" y="472" fontSize="6" fontWeight="800" className="fill-neural">N–N = neuron→neuron — the ganglionic synapse</text>
        {/* the NM station card */}
        <rect x="36" y="498" width="416" height="92" rx="8" className="fill-neural-soft stroke-neural" />
        <text x="48" y="514" fontSize="8.5" fontWeight="800" className="fill-neural">NM — the muscular subtype</text>
        <text x="48" y="526" fontSize="6.4" className="fill-foreground">“found in neuromuscular junction of skeletal muscle”</text>
        <text x="48" y="538" fontSize="5.6" className="fill-muted-foreground">the somatic plate — ACh on NM → end-plate potential →</text>
        <text x="48" y="547" fontSize="5.6" className="fill-muted-foreground">skeletal muscle contraction; NMBAs (rocuronium-type —</text>
        <text x="48" y="556" fontSize="5.6" className="fill-muted-foreground">KYP anchor) paralyze here without touching NN or M</text>
        <text x="48" y="574" fontSize="6" fontWeight="800" className="fill-neural">N–M = neuron→muscle — the neuromuscular junction</text>
        {/* the reading rule */}
        <rect x="36" y="600" width="416" height="54" rx="6" className="fill-secondary/40" />
        <text x="48" y="616" fontSize="6.5" fontWeight="800" className="fill-neural">THE SUBSCRIPT NAMES THE STATION (KYP reading rule)</text>
        <text x="48" y="628" fontSize="5.6" className="fill-foreground">N-N = neuron→neuron (the ganglion) · N-M = neuron→muscle</text>
        <text x="48" y="637" fontSize="5.6" className="fill-foreground">(the NMJ). Same transmitter, same channel mechanism —</text>
        <text x="48" y="646" fontSize="5.6" className="fill-foreground">different station, different drugs, no cross-blockade.</text>
      </g>

      {/* ===== MUSCARINIC PANEL ===== */}
      <g>
        <rect x="480" y="150" width="476" height="512" rx="10" className="fill-card stroke-brand" strokeWidth="1.5" />
        <text x="496" y="170" fontSize="9.5" fontWeight="800" className="fill-brand">THE MUSCARINIC FAMILY — G-protein–coupled (metabotropic)</text>
        <text x="496" y="181" fontSize="5.8" className="fill-muted-foreground">book 235, verbatim — the section&apos;s second paragraph:</text>
        <rect x="492" y="186" width="452" height="72" rx="6" className="fill-secondary/40" />
        <text x="502" y="200" fontSize="6.2" className="fill-foreground">Muscarinic ACh receptors are G-protein–coupled receptors</text>
        <text x="502" y="210" fontSize="6.2" className="fill-foreground">that usually act through 2nd messengers. 5 subtypes:</text>
        <text x="502" y="220" fontSize="6.2" className="fill-foreground">M1–5 found in heart, smooth muscle, brain, exocrine</text>
        <text x="502" y="230" fontSize="6.2" className="fill-foreground">glands, and on sweat glands (cholinergic sympathetic).</text>
        <text x="496" y="276" fontSize="6.5" fontWeight="800" className="fill-brand">THE G-PROTEIN FORK — second messengers, two lanes</text>
        <text x="496" y="287" fontSize="5.4" className="fill-muted-foreground">the fork is a KYP extension — the provenance box below prints every letter&apos;s source</text>
        {/* the ODD lane — Gq */}
        <rect x="492" y="300" width="452" height="128" rx="8" className="fill-card stroke-emergency" />
        <text x="504" y="316" fontSize="7" fontWeight="800" className="fill-emergency">THE ODD SUBTYPES → Gq → PLC → IP3 + DAG (↑Ca2+ · PKC)</text>
        {nt(521, 326, "M1", "emergency")}
        <text x="546" y="338" fontSize="5.8" className="fill-foreground">Gq — brain: higher cognitive, enteric NS (book 237)</text>
        {nt(521, 348, "M3", "emergency")}
        <text x="546" y="360" fontSize="5.8" className="fill-foreground">Gq — the workhorse: exocrine glands, gut, bladder, bronchi,</text>
        <text x="546" y="369" fontSize="5.8" className="fill-foreground">miosis · + the sweat glands (“cholinergic sympathetic”)</text>
        {nt(521, 380, "M5", "emergency")}
        <text x="546" y="392" fontSize="5.8" className="fill-foreground">Gq — beyond the book&apos;s printed set (KYP extension)</text>
        <text x="504" y="414" fontSize="5.4" className="fill-muted-foreground">the turn-things-ON lane: secretion, contraction, miosis, sweating</text>
        {/* the EVEN lane — Gi */}
        <rect x="492" y="436" width="452" height="100" rx="8" className="fill-card stroke-success" />
        <text x="504" y="452" fontSize="7" fontWeight="800" className="fill-success">THE EVEN SUBTYPES → Gi → ↓ adenylyl cyclase → ↓cAMP</text>
        {nt(521, 462, "M2", "success")}
        <text x="546" y="474" fontSize="5.8" className="fill-foreground">Gi — heart: ↓ rate, ↓ AV conduction, ↓ atrial contractility (book 237)</text>
        {nt(521, 484, "M4", "success")}
        <text x="546" y="496" fontSize="5.8" className="fill-foreground">Gi — beyond the book&apos;s printed set (KYP extension)</text>
        <text x="504" y="518" fontSize="5.4" className="fill-muted-foreground">the turn-things-DOWN lane: the heart&apos;s brake (the vagal M₂)</text>
        {/* the provenance box */}
        <rect x="492" y="546" width="452" height="108" rx="6" className="fill-secondary/40 stroke-border" />
        <text x="504" y="562" fontSize="6.5" fontWeight="800" className="fill-foreground">PROVENANCE — what book 235 prints vs what this map adds</text>
        <text x="504" y="576" fontSize="5.5" className="fill-foreground">book 235 prints: the family (“G-protein–coupled receptors that usually act</text>
        <text x="504" y="585" fontSize="5.5" className="fill-foreground">through 2nd messengers”), the count (5 subtypes), and the collective</text>
        <text x="504" y="594" fontSize="5.5" className="fill-foreground">locations (heart, smooth muscle, brain, exocrine glands, sweat glands).</text>
        <text x="504" y="608" fontSize="5.5" fontWeight="800" className="fill-foreground">M1 = Gq, M2 = Gi, M3 = Gq — the book&apos;s own letters, printed in the</text>
        <text x="504" y="617" fontSize="5.5" className="fill-foreground">book-237 G-protein table (the separate g-protein-linked-second-</text>
        <text x="504" y="626" fontSize="5.5" className="fill-foreground">messengers topic — pinned as a provenance pointer). M4, M5, and</text>
        <text x="504" y="635" fontSize="5.5" className="fill-foreground">the odd/even rule: KYP extensions beyond the book&apos;s printed set.</text>
      </g>

      {/* ===== THE LOCATION STRIP ===== */}
      <g>
        <rect x="24" y="674" width="932" height="108" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="40" y="692" fontSize="8" fontWeight="800" className="fill-foreground">THE LOCATION LIST, DISTRIBUTED BY SUBTYPE</text>
        <text x="40" y="703" fontSize="5.4" className="fill-muted-foreground">book 235 prints the list collectively — “found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic)”; the per-subtype split follows the book-237 table where printed (flags mark extensions)</text>
        <rect x="36" y="712" width="172" height="58" rx="8" className="fill-card stroke-border" />
        <text x="122" y="728" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">HEART</text>
        <text x="122" y="741" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-success">M₂ — even → Gi</text>
        <text x="122" y="751" textAnchor="middle" fontSize="5.2" className="fill-foreground">↓ heart rate, ↓ AV node</text>
        <text x="122" y="760" textAnchor="middle" fontSize="5.2" className="fill-foreground">conduction (book 237)</text>
        <rect x="216" y="712" width="172" height="58" rx="8" className="fill-card stroke-border" />
        <text x="302" y="728" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">SMOOTH MUSCLE</text>
        <text x="302" y="741" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-emergency">M₃ — odd → Gq</text>
        <text x="302" y="751" textAnchor="middle" fontSize="5.2" className="fill-foreground">gut, bladder, bronchi, miosis,</text>
        <text x="302" y="760" textAnchor="middle" fontSize="5.2" className="fill-foreground">accommodation (book 237)</text>
        <rect x="396" y="712" width="172" height="58" rx="8" className="fill-card stroke-border" />
        <text x="482" y="728" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">BRAIN</text>
        <text x="482" y="741" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-emergency">M₁ — odd → Gq</text>
        <text x="482" y="751" textAnchor="middle" fontSize="5.2" className="fill-foreground">higher cognitive, enteric NS</text>
        <text x="482" y="760" textAnchor="middle" fontSize="5.2" className="fill-foreground">(M₄ — even → Gi, KYP ext)</text>
        <rect x="576" y="712" width="172" height="58" rx="8" className="fill-card stroke-border" />
        <text x="662" y="728" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">EXOCRINE GLANDS</text>
        <text x="662" y="741" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-emergency">M₁ + M₃ — odd → Gq</text>
        <text x="662" y="751" textAnchor="middle" fontSize="5.2" className="fill-foreground">↑ secretions — saliva, bronchi,</text>
        <text x="662" y="760" textAnchor="middle" fontSize="5.2" className="fill-foreground">gastric (book 237)</text>
        <rect x="756" y="712" width="172" height="58" rx="8" className="fill-card stroke-border" />
        <text x="842" y="728" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">SWEAT GLANDS</text>
        <text x="842" y="741" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-emergency">M₃ — “cholinergic sympathetic”</text>
        <text x="842" y="751" textAnchor="middle" fontSize="5.2" className="fill-foreground">the book&apos;s own parenthetical —</text>
        <text x="842" y="760" textAnchor="middle" fontSize="5.2" className="fill-foreground">the sympathetic exception</text>
      </g>

      {/* ===== THE SORTING ROW ===== */}
      <g>
        <rect x="24" y="794" width="932" height="118" rx="10" className="fill-card stroke-border" />
        <text x="40" y="812" fontSize="8" fontWeight="800" className="fill-foreground">NICOTINIC vs MUSCARINIC — the exam&apos;s sorting row</text>
        <text x="254" y="830" fontSize="6.5" fontWeight="800" className="fill-neural">NICOTINIC (NN · NM)</text>
        <text x="496" y="830" fontSize="6.5" fontWeight="800" className="fill-brand">MUSCARINIC (M1–M5)</text>
        <line x1="481" y1="838" x2="481" y2="902" className="stroke-border" strokeWidth="1" />
        <text x="40" y="846" fontSize="5.8" fontWeight="800" className="fill-muted-foreground">SIGNALING</text>
        <text x="254" y="846" fontSize="6.1" className="fill-foreground">ligand-gated Na+/K+ channel — ionotropic</text>
        <text x="496" y="846" fontSize="6.1" className="fill-foreground">G-protein–coupled → 2nd messenger — metabotropic</text>
        <text x="40" y="862" fontSize="5.8" fontWeight="800" className="fill-muted-foreground">STATIONS</text>
        <text x="254" y="862" fontSize="6.1" className="fill-foreground">NN — ganglia + adrenal · NM — the NMJ</text>
        <text x="496" y="862" fontSize="6.1" className="fill-foreground">the organ plates — heart, smooth muscle, brain, glands, sweat</text>
        <text x="40" y="878" fontSize="5.8" fontWeight="800" className="fill-muted-foreground">CHARACTER</text>
        <text x="254" y="878" fontSize="6.1" className="fill-foreground">ms-fast · unamplified · all-or-none depolarization</text>
        <text x="496" y="878" fontSize="6.1" className="fill-foreground">slower onset · amplified · longer-lasting cascade</text>
        <text x="40" y="894" fontSize="5.8" fontWeight="800" className="fill-muted-foreground">DRUG FAMILIES</text>
        <text x="254" y="894" fontSize="6.1" className="fill-foreground">nicotine · ganglionic blockers · NMBAs (KYP anchors)</text>
        <text x="496" y="894" fontSize="6.1" className="fill-foreground">bethanechol/pilocarpine · muscarine · atropine-type (KYP)</text>
      </g>

      {/* ===== FOUR-CODE MNEMONIC STRIP ===== */}
      <g>
        <rect x="24" y="924" width="932" height="176" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="942" fontSize="9" fontWeight="800" className="fill-brand">THE FOUR CODES (all four KYP-original — the source prints no mnemonic)</text>
        <text x="40" y="964" fontSize="7.5" fontWeight="800" className="fill-foreground">1 · ONE TRANSMITTER, TWO ALPHABETS — nicotinic channels at the switches and the muscle (NN, NM); muscarinic GPCRs at the organs (M1–M5)</text>
        <text x="40" y="976" fontSize="5.8" className="fill-muted-foreground">the family — not the transmitter — names the drug class and its selectivity</text>
        <text x="40" y="1000" fontSize="7.5" fontWeight="800" className="fill-foreground">2 · N-N = NEURON→NEURON (the ganglion); N-M = NEURON→MUSCLE (the NMJ) — the subscript names the station</text>
        <text x="40" y="1012" fontSize="5.8" className="fill-muted-foreground">NN — autonomic ganglia + adrenal medulla · NM — neuromuscular junction of skeletal muscle (the book&apos;s own subtype sentence)</text>
        <text x="40" y="1036" fontSize="7.5" fontWeight="800" className="fill-foreground">3 · ODD IS Gq, EVEN IS Gi — M1/M3/M5 → PLC → IP3 + DAG; M2/M4 → ↓ adenylyl cyclase → ↓cAMP</text>
        <text x="40" y="1048" fontSize="5.8" className="fill-muted-foreground">M1–M3 anchored to the book&apos;s book-237 table; M4/M5 + the rule itself — KYP extensions; the heart&apos;s brake is the EVEN one (M2)</text>
        <text x="40" y="1072" fontSize="7.5" fontWeight="800" className="fill-foreground">4 · SWEAT IS ON THE LIST — the book&apos;s location list ends “and on sweat glands (cholinergic sympathetic)”</text>
        <text x="40" y="1084" fontSize="5.8" className="fill-muted-foreground">sympathetic PATH, cholinergic FIBER, muscarinic M₃ — why anticholinergics cause anhidrosis and dry even a sympathetic sweat</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="1112" width="932" height="52" rx="10" className="fill-card stroke-border" />
        <text x="490" y="1130" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">SAME TRANSMITTER, TWO ALPHABETS — CHANNELS (NN/NM) AT THE SWITCHES AND THE MUSCLE, GPCRs (M1–M5) AT THE ORGANS</text>
        <text x="490" y="1144" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">Quoted sentences verbatim from book 235 (the Acetylcholine receptors section — two paragraphs; pdfimages: zero raster rows — no figure on the page) — an original KYP visual; nothing reproduced</text>
        <text x="490" y="1154" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">the Pain transmission section on the same page is EXCLUDED (separate topic) · M1–M3 G-protein anchors are the book&apos;s own (book 237 — separate topic) · M4/M5 + odd/even rule + the four codes are KYP extensions</text>
      </g>
    </svg>
  );
}

export function PainTransmissionMap() {
  const w = 980;
  const h = 1400;
  // An original KYP visual of the PAIN TRANSMISSION section of book 235
  // (pdf 257, LOWER portion of the page). Census: the page has NO figure
  // (pdfimages returned zero raster rows) — the section is TYPESET TEXT
  // (the Nociceptive pain subsection + the Neuropathic pain subsection),
  // so this is an ORIGINAL_KYP_ADAPTATION built from the section's own
  // sentences (the stimulus band; the TRANSDUCTION node with its
  // TRPV → Ca2+ influx → Na+ channel glyph; the Aδ/C fiber-split card;
  // the MODULATION and PERCEPTION nodes; the NEUROPATHIC contrast panel;
  // the step × class blocker matrix; the four-code strip) — nothing
  // reproduced. PAGE-STRUCTURE FINDING: the page prints NO pathway
  // diagram and NO neurotransmitter account — the dorsal-horn /
  // spinothalamic-tract / thalamus / cortex chain, substance P /
  // glutamate, and gate-control theory are NOT printed on this page;
  // the station labels that seat the book's four processes are KYP
  // extensions, flagged on the map itself. The blocker matrix is KYP's
  // pivot of the book's own four printed lines — every cell is the
  // book's own assignment. Color code: red = the pain signal / the
  // sharp Aδ lane, violet = the C fiber lane + the neuropathic panel,
  // blue = the process steps, green = the blocker classes (the drugs).
  // JSX text uses &gt; / &amp; escapes where needed.
  const downArrow = (x: number, y1: number, y2: number, cls = "stroke-foreground/70") => (
    <path d={`M ${x} ${y1} V ${y2} m -3 -4 l 3 4 l 3 -4`} className={cls} strokeWidth="1.3" fill="none" />
  );
  const hArrow = (x1: number, x2: number, y: number, cls = "stroke-foreground/70") => (
    <path d={`M ${x1} ${y} H ${x2} m -4 -3 l 4 3 l -4 3`} className={cls} strokeWidth="1.2" fill="none" />
  );
  const blocker = (x: number, y: number, label: string, wd: number) => (
    <g>
      <rect x={x} y={y} width={wd} height="16" rx="4" className="fill-success-soft stroke-success" />
      <text x={x + wd / 2} y={y + 11.5} textAnchor="middle" fontSize="5.6" fontWeight="700" className="fill-success">{label}</text>
    </g>
  );
  const stepChip = (y: number, label: string) => (
    <g>
      <rect x="36" y={y} width="178" height="18" rx="5" className="fill-brand-soft stroke-brand" />
      <text x="125" y={y + 12.5} textAnchor="middle" fontSize="6.8" fontWeight="800" className="fill-brand">{label}</text>
    </g>
  );
  const dot = (cx: number, cy: number, on: boolean) =>
    on ? (
      <circle cx={cx} cy={cy} r="4.2" className="fill-brand" />
    ) : (
      <circle cx={cx} cy={cy} r="4.2" className="fill-secondary stroke-muted-foreground/50" strokeWidth="1" />
    );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Pain transmission — the four-process map (an original KYP visual of the Pain transmission section, book 235. NOCICEPTIVE PAIN: pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli; transient receptor potential vanilloid ligand receptors cause Ca2+ influx-induced Na+ channel activation — the transducer; signals transmitted by A-delta fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain). FOUR PROCESSES, each with its own blocker classes: Transduction — blocked by local anesthetics, alpha-2 agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids; Transmission — blocked by local anesthetics, alpha-2 agonists, opioids; Modulation — blocked by TCAs, SSRIs, SNRIs, gabapentinoids; Perception — blocked by alpha-2 agonists, opioids, TCAs, SSRIs, SNRIs. NEUROPATHIC PAIN: caused by neuronal dysfunction of the CNS or PNS, transmitted via upregulation and persistent activation of voltage-gated Na+ channels — example: diabetic peripheral neuropathy. THE BLOCKER MATRIX pivots the book&apos;s four printed lines into a step-by-class grid — the alpha-2 agonist row blocks three of the four steps; opioids own transmission and perception; NSAIDs, acetaminophen and glucocorticoids never leave transduction. Page structure: the page prints no pathway diagram — the dorsal-horn, spinothalamic, thalamus and cortex station labels are KYP extensions; the matrix view and the four mnemonic codes are KYP extensions; the Acetylcholine receptors section on the same page is EXCLUDED — the separate PH12 topic; the section ends on book 235 — pdf 258 opens the separate Micturition control section; no figure exists on the page — zero raster rows; original KYP visual, nothing reproduced)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Pain transmission — the four-process map (original KYP visual of book 235)</text>
        <rect x="712" y="24" width="220" height="18" className="fill-brand-soft" />
        <text x="822" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">2 pains · 4 processes · 9 classes</text>
      </g>

      {/* ===== THE STIMULUS BAND ===== */}
      <g>
        <rect x="24" y="74" width="932" height="60" rx="10" className="fill-card stroke-border" />
        <text x="40" y="92" fontSize="8" fontWeight="800" className="fill-emergency">NOCICEPTIVE PAIN — the stimulus side (book 235, verbatim):</text>
        <text x="40" y="105" fontSize="6" className="fill-foreground">“Pain signals transmitted to the CNS in response to mechanical,</text>
        <text x="40" y="116" fontSize="6" className="fill-foreground">thermal, or chemical stimuli.”</text>
        <rect x="620" y="86" width="100" height="17" rx="4" className="fill-emergency-soft stroke-emergency" />
        <text x="670" y="98" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-emergency">MECHANICAL</text>
        <rect x="730" y="86" width="90" height="17" rx="4" className="fill-emergency-soft stroke-emergency" />
        <text x="775" y="98" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-emergency">THERMAL</text>
        <rect x="830" y="86" width="100" height="17" rx="4" className="fill-emergency-soft stroke-emergency" />
        <text x="880" y="98" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-emergency">CHEMICAL</text>
        <text x="620" y="118" fontSize="5.2" className="fill-muted-foreground">three energies start the signal — force, heat, chemistry</text>
      </g>
      {downArrow(490, 134, 146)}

      {/* ===== STEP 1 — TRANSDUCTION ===== */}
      <g>
        <rect x="24" y="146" width="932" height="176" rx="10" className="fill-card stroke-brand" strokeWidth="1.5" />
        {stepChip(158, "STEP 1 — TRANSDUCTION")}
        <rect x="228" y="156" width="712" height="30" rx="6" className="fill-secondary/40" />
        <text x="238" y="168" fontSize="6" className="fill-foreground">“Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced</text>
        <text x="238" y="179" fontSize="6" className="fill-foreground">Na+ channel activation.” (verbatim — the transducer)</text>
        <text x="40" y="206" fontSize="6.5" fontWeight="800" className="fill-brand">THE TRANSDUCTION GLYPH — the stimulus becomes a signal</text>
        <rect x="36" y="212" width="150" height="56" rx="6" className="fill-secondary stroke-foreground/30" />
        <text x="46" y="226" fontSize="6" fontWeight="800" className="fill-emergency">THE STIMULUS</text>
        <text x="46" y="238" fontSize="5.2" className="fill-foreground">mechanical · thermal ·</text>
        <text x="46" y="247" fontSize="5.2" className="fill-foreground">chemical — the energy</text>
        <text x="46" y="256" fontSize="5.2" className="fill-foreground">that starts it all</text>
        {hArrow(186, 210, 240)}
        <rect x="214" y="212" width="176" height="56" rx="6" className="fill-emergency-soft stroke-emergency" />
        <text x="224" y="226" fontSize="6" fontWeight="800" className="fill-emergency">TRPV — the transducer</text>
        <text x="224" y="238" fontSize="5.2" className="fill-foreground">transient receptor potential</text>
        <text x="224" y="247" fontSize="5.2" className="fill-foreground">vanilloid LIGAND receptor</text>
        <text x="224" y="256" fontSize="5.2" className="fill-foreground">(capsaicin’s own receptor —</text>
        <text x="224" y="265" fontSize="5.2" className="fill-foreground">KYP anchor)</text>
        {hArrow(390, 414, 240)}
        <rect x="418" y="212" width="128" height="56" rx="6" className="fill-card stroke-emergency" />
        <text x="482" y="226" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-emergency">Ca2+ INFLUX</text>
        <text x="482" y="238" textAnchor="middle" fontSize="5.2" className="fill-foreground">the calcium signal</text>
        <text x="482" y="247" textAnchor="middle" fontSize="5.2" className="fill-foreground">is the switch</text>
        {hArrow(546, 570, 240)}
        <rect x="574" y="212" width="182" height="56" rx="6" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="584" y="226" fontSize="6" fontWeight="800" className="fill-emergency">Na+ CHANNEL — ON</text>
        <text x="584" y="238" fontSize="5.2" className="fill-foreground">the depolarizing current</text>
        <text x="584" y="247" fontSize="5.2" className="fill-foreground">fires the first spike —</text>
        <text x="584" y="256" fontSize="5.2" className="fill-foreground">TRPV is NOT the Na+ channel:</text>
        <text x="584" y="265" fontSize="5.2" className="fill-foreground">its Ca2+ influx turns it on</text>
        {hArrow(756, 780, 240)}
        <rect x="784" y="212" width="160" height="56" rx="6" className="fill-secondary/40 stroke-border" />
        <text x="794" y="226" fontSize="6" fontWeight="800" className="fill-foreground">THE SIGNAL EXISTS</text>
        <text x="794" y="238" fontSize="5.2" className="fill-muted-foreground">the stimulus has become</text>
        <text x="794" y="247" fontSize="5.2" className="fill-muted-foreground">an electrical signal —</text>
        <text x="794" y="256" fontSize="5.2" className="fill-muted-foreground">transduction complete</text>
        <text x="40" y="290" fontSize="6" fontWeight="800" className="fill-success">BLOCKS TRANSDUCTION — 6 classes (the longest list):</text>
        {blocker(40, 296, "local anesthetics", 126)}
        {blocker(174, 296, "α2-agonists", 87)}
        {blocker(269, 296, "gabapentinoids", 106)}
        {blocker(383, 296, "NSAIDs", 54)}
        {blocker(445, 296, "acetaminophen", 100)}
        {blocker(553, 296, "glucocorticoids", 113)}
        <text x="682" y="302" fontSize="5.2" className="fill-muted-foreground">the anti-inflammatory trio acts</text>
        <text x="682" y="311" fontSize="5.2" className="fill-muted-foreground">on TRPV’s chemical milieu only</text>
      </g>
      {downArrow(490, 322, 334)}

      {/* ===== STEP 2 — TRANSMISSION (THE FIBER SPLIT) ===== */}
      <g>
        <rect x="24" y="334" width="932" height="186" rx="10" className="fill-card stroke-brand" strokeWidth="1.5" />
        {stepChip(346, "STEP 2 — TRANSMISSION")}
        <rect x="228" y="344" width="712" height="30" rx="6" className="fill-secondary/40" />
        <text x="238" y="356" fontSize="6" className="fill-foreground">“Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing,</text>
        <text x="238" y="367" fontSize="6" className="fill-foreground">chronic pain).” (verbatim — the two-lane periphery)</text>
        <rect x="36" y="380" width="440" height="84" rx="8" className="fill-emergency-soft stroke-emergency" />
        <text x="48" y="396" fontSize="8" fontWeight="800" className="fill-emergency">Aδ FIBERS — the fast lane</text>
        <text x="48" y="410" fontSize="6.5" fontWeight="800" className="fill-foreground">“sharp, acute pain”</text>
        <text x="48" y="422" fontSize="5.4" className="fill-muted-foreground">the first jab — thinly myelinated, fast (KYP anchor:</text>
        <text x="48" y="431" fontSize="5.4" className="fill-muted-foreground">the myelination clue is not printed on the page)</text>
        <text x="48" y="448" fontSize="5.6" fontWeight="800" className="fill-emergency">step on a nail: the SHARP first pain arrives on Aδ</text>
        <rect x="500" y="380" width="444" height="84" rx="8" className="fill-neural-soft stroke-neural" />
        <text x="512" y="396" fontSize="8" fontWeight="800" className="fill-neural">C FIBERS — the slow lane</text>
        <text x="512" y="410" fontSize="6.5" fontWeight="800" className="fill-foreground">“dull, throbbing, chronic pain”</text>
        <text x="512" y="422" fontSize="5.4" className="fill-muted-foreground">the slow burn — unmyelinated, slow (KYP anchor:</text>
        <text x="512" y="431" fontSize="5.4" className="fill-muted-foreground">unmyelinated is the slowness clue)</text>
        <text x="512" y="448" fontSize="5.6" fontWeight="800" className="fill-neural">the DULL ache that follows and lingers arrives on C</text>
        <text x="40" y="482" fontSize="6" fontWeight="800" className="fill-success">BLOCKS TRANSMISSION — 3 classes (the road):</text>
        {blocker(40, 488, "local anesthetics", 126)}
        {blocker(174, 488, "α2-agonists", 87)}
        {blocker(269, 488, "opioids", 60)}
        <text x="345" y="499" fontSize="5.2" className="fill-muted-foreground">opioids’ first appearance in the chain — they never reach transduction (or modulation)</text>
      </g>
      {downArrow(490, 520, 532)}

      {/* ===== STEP 3 — MODULATION ===== */}
      <g>
        <rect x="24" y="532" width="932" height="118" rx="10" className="fill-card stroke-brand" strokeWidth="1.5" />
        {stepChip(544, "STEP 3 — MODULATION")}
        <text x="228" y="552" fontSize="6" fontWeight="800" className="fill-foreground">The signal is TUNED — amplified or damped — on its way up.</text>
        <text x="228" y="564" fontSize="5.4" className="fill-muted-foreground">the synapse + descending control (dorsal horn · descending monoamines — station</text>
        <text x="228" y="573" fontSize="5.4" className="fill-muted-foreground">labels beyond the book’s printed set: KYP extensions, flagged)</text>
        <text x="40" y="596" fontSize="6" fontWeight="800" className="fill-success">BLOCKS MODULATION — 4 classes:</text>
        {blocker(40, 602, "TCAs", 40)}
        {blocker(88, 602, "SSRIs", 47)}
        {blocker(143, 602, "SNRIs", 47)}
        {blocker(198, 602, "gabapentinoids", 106)}
        <text x="320" y="613" fontSize="5.2" className="fill-muted-foreground">the antidepressant classes (TCAs · SSRIs · SNRIs) enter HERE and nowhere earlier —</text>
        <text x="320" y="622" fontSize="5.2" className="fill-muted-foreground">why amitriptyline and duloxetine treat pain (KYP anchors)</text>
      </g>
      {downArrow(490, 650, 662)}

      {/* ===== STEP 4 — PERCEPTION ===== */}
      <g>
        <rect x="24" y="662" width="932" height="118" rx="10" className="fill-card stroke-brand" strokeWidth="1.5" />
        {stepChip(674, "STEP 4 — PERCEPTION")}
        <text x="228" y="682" fontSize="6" fontWeight="800" className="fill-foreground">The signal is FELT — the conscious endpoint.</text>
        <text x="228" y="694" fontSize="5.4" className="fill-muted-foreground">thalamus + cortex (station labels beyond the book’s printed set — KYP extensions).</text>
        <text x="228" y="703" fontSize="5.4" className="fill-muted-foreground">The local anesthetics and the NSAID trio drop out here; the modulators carry through.</text>
        <text x="40" y="726" fontSize="6" fontWeight="800" className="fill-success">BLOCKS PERCEPTION — 5 classes:</text>
        {blocker(40, 732, "α2-agonists", 87)}
        {blocker(135, 732, "opioids", 60)}
        {blocker(203, 732, "TCAs", 40)}
        {blocker(251, 732, "SSRIs", 47)}
        {blocker(306, 732, "SNRIs", 47)}
        <text x="370" y="743" fontSize="5.2" className="fill-muted-foreground">the widest central list — opioids peak here; α2-agonists reach their third station</text>
      </g>

      {/* ===== THE NEUROPATHIC PANEL ===== */}
      <g>
        <rect x="24" y="792" width="932" height="158" rx="10" className="fill-card stroke-neural" strokeWidth="1.5" />
        <text x="40" y="812" fontSize="9" fontWeight="800" className="fill-neural">THE EXCEPTION — NEUROPATHIC PAIN: no stimulus at all</text>
        <rect x="736" y="801" width="204" height="16" rx="4" className="fill-secondary/40" />
        <text x="838" y="812" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">the section’s second subsection</text>
        <rect x="36" y="822" width="904" height="48" rx="6" className="fill-secondary/40" />
        <text x="46" y="834" fontSize="6" className="fill-foreground">“Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and</text>
        <text x="46" y="845" fontSize="6" className="fill-foreground">persistent activation of voltage-gated Na+ channels. Example: diabetic peripheral</text>
        <text x="46" y="856" fontSize="6" className="fill-foreground">neuropathy.” (verbatim)</text>
        <rect x="36" y="880" width="190" height="40" rx="6" className="fill-secondary stroke-foreground/30" />
        <text x="46" y="894" fontSize="5.8" fontWeight="800" className="fill-foreground">NO STIMULUS</text>
        <text x="46" y="906" fontSize="5.2" className="fill-muted-foreground">intact skin, no injury —</text>
        <text x="46" y="915" fontSize="5.2" className="fill-muted-foreground">the nerve is the story</text>
        {hArrow(226, 250, 900)}
        <rect x="254" y="880" width="210" height="40" rx="6" className="fill-neural-soft stroke-neural" />
        <text x="264" y="894" fontSize="5.8" fontWeight="800" className="fill-neural">NEURONAL DYSFUNCTION</text>
        <text x="264" y="906" fontSize="5.2" className="fill-foreground">of the CNS or PNS (injury ·</text>
        <text x="264" y="915" fontSize="5.2" className="fill-foreground">metabolic stress — diabetes)</text>
        {hArrow(464, 488, 900)}
        <rect x="492" y="880" width="200" height="40" rx="6" className="fill-card stroke-neural" />
        <text x="502" y="894" fontSize="5.8" fontWeight="800" className="fill-neural">Na+ CHANNELS UPREGULATED</text>
        <text x="502" y="906" fontSize="5.2" className="fill-foreground">more channels — a hair-</text>
        <text x="502" y="915" fontSize="5.2" className="fill-foreground">trigger membrane</text>
        {hArrow(692, 716, 900)}
        <rect x="720" y="880" width="224" height="40" rx="6" className="fill-card stroke-neural" />
        <text x="730" y="894" fontSize="5.8" fontWeight="800" className="fill-neural">PERSISTENTLY ACTIVE</text>
        <text x="730" y="906" fontSize="5.2" className="fill-foreground">ectopic, self-sustaining firing —</text>
        <text x="730" y="915" fontSize="5.2" className="fill-foreground">the nerve generates its own pain</text>
        <text x="490" y="934" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-neural">Example: diabetic peripheral neuropathy — the stocking-distribution burn of longstanding diabetes</text>
        <text x="490" y="944" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">why NSAIDs fail here: transduction-only classes, no stimulus to transduce (KYP reading)</text>
      </g>

      {/* ===== THE STEP × CLASS BLOCKER MATRIX ===== */}
      <g>
        <rect x="24" y="962" width="932" height="198" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="40" y="980" fontSize="8" fontWeight="800" className="fill-foreground">THE STEP × CLASS BLOCKER MATRIX (KYP pivot — every cell is the book’s own) · ● blocks · ○ not printed</text>
        <text x="320" y="1000" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-muted-foreground">TRANSDUCTION</text>
        <text x="460" y="1000" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-muted-foreground">TRANSMISSION</text>
        <text x="600" y="1000" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-muted-foreground">MODULATION</text>
        <text x="740" y="1000" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-muted-foreground">PERCEPTION</text>
        <text x="786" y="1000" fontSize="5.5" fontWeight="800" className="fill-muted-foreground">THE PATTERN (KYP)</text>
        <rect x="32" y="1039" width="916" height="18" rx="4" className="fill-brand-soft" />
        <text x="40" y="1032" fontSize="5.8" fontWeight="700" className="fill-foreground">Local anesthetics</text>
        {dot(320, 1030, true)}{dot(460, 1030, true)}{dot(600, 1030, false)}{dot(740, 1030, false)}
        <text x="786" y="1032" fontSize="5.2" className="fill-muted-foreground">the two peripheral steps</text>
        <text x="40" y="1052" fontSize="5.8" fontWeight="800" className="fill-brand">α2-agonists</text>
        {dot(320, 1050, true)}{dot(460, 1050, true)}{dot(600, 1050, false)}{dot(740, 1050, true)}
        <text x="786" y="1052" fontSize="5.2" fontWeight="700" className="fill-brand">3 OF 4 — the widest reach</text>
        <text x="40" y="1072" fontSize="5.8" fontWeight="700" className="fill-foreground">Opioids</text>
        {dot(320, 1070, false)}{dot(460, 1070, true)}{dot(600, 1070, false)}{dot(740, 1070, true)}
        <text x="786" y="1072" fontSize="5.2" className="fill-muted-foreground">road + room, never the start</text>
        <text x="40" y="1092" fontSize="5.8" fontWeight="700" className="fill-foreground">Gabapentinoids</text>
        {dot(320, 1090, true)}{dot(460, 1090, false)}{dot(600, 1090, true)}{dot(740, 1090, false)}
        <text x="786" y="1092" fontSize="5.2" className="fill-muted-foreground">the split agent</text>
        <text x="40" y="1112" fontSize="5.8" fontWeight="700" className="fill-foreground">TCAs</text>
        {dot(320, 1110, false)}{dot(460, 1110, false)}{dot(600, 1110, true)}{dot(740, 1110, true)}
        <text x="786" y="1112" fontSize="5.2" className="fill-muted-foreground">enters last, carries on</text>
        <text x="40" y="1132" fontSize="5.8" fontWeight="700" className="fill-foreground">SSRIs / SNRIs</text>
        {dot(320, 1130, false)}{dot(460, 1130, false)}{dot(600, 1130, true)}{dot(740, 1130, true)}
        <text x="786" y="1132" fontSize="5.2" className="fill-muted-foreground">enters last, carries on</text>
        <text x="40" y="1152" fontSize="5.2" className="fill-foreground">NSAIDs · acetaminophen · glucocorticoids</text>
        {dot(320, 1150, true)}{dot(460, 1150, false)}{dot(600, 1150, false)}{dot(740, 1150, false)}
        <text x="786" y="1152" fontSize="5.2" className="fill-muted-foreground">the starting line only</text>
      </g>

      {/* ===== FOUR-CODE MNEMONIC STRIP ===== */}
      <g>
        <rect x="24" y="1172" width="932" height="164" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="1190" fontSize="9" fontWeight="800" className="fill-brand">THE FOUR CODES (all four KYP-original — the source prints no mnemonic)</text>
        <text x="40" y="1212" fontSize="7.5" fontWeight="800" className="fill-foreground">1 · TRACK THE MESSAGE’S PATH — Transduction → Transmission → Modulation → Perception</text>
        <text x="40" y="1224" fontSize="5.6" className="fill-muted-foreground">the stimulus becomes a signal · the signal travels · the signal is tuned · the signal is felt — four stations, four printed lists</text>
        <text x="40" y="1246" fontSize="7.5" fontWeight="800" className="fill-foreground">2 · DELTA IS THE DASH, C IS THE CRAWL — Aδ = sharp, acute; C = dull, throbbing, chronic</text>
        <text x="40" y="1258" fontSize="5.6" className="fill-muted-foreground">sort by the printed qualities, never the alphabet — two-phase injury pain prints the order: sharp first on Aδ, dull second on C</text>
        <text x="40" y="1280" fontSize="7.5" fontWeight="800" className="fill-foreground">3 · α2 BLOCKS THREE OF FOUR — opioids own the road and the room, NSAIDs never leave the start</text>
        <text x="40" y="1292" fontSize="5.6" className="fill-muted-foreground">α2-agonists: transduction + transmission + perception · opioids: transmission + perception · NSAID trio: transduction only</text>
        <text x="40" y="1314" fontSize="7.5" fontWeight="800" className="fill-foreground">4 · NO STIMULUS, STILL PAIN — the upregulated, persistently active voltage-gated Na+ channel</text>
        <text x="40" y="1326" fontSize="5.6" className="fill-muted-foreground">neuronal dysfunction of the CNS or PNS — the nerve itself generates the pain · Example: diabetic peripheral neuropathy</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="1348" width="932" height="52" rx="10" className="fill-card stroke-border" />
        <text x="490" y="1365" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">THE STEP NAMES THE DRUG — SORT THE PAIN, FIND THE FIBER, LOCATE THE STEP, READ THE LIST</text>
        <text x="490" y="1377" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">Quoted sentences verbatim from book 235 (typeset text — pdfimages: zero rows; no figure) — an original KYP visual, nothing reproduced</text>
        <text x="490" y="1387" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">the Acetylcholine receptors section above is EXCLUDED (PH12) · the section ends on book 235 — pdf 258 opens Micturition control</text>
        <text x="490" y="1397" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">station labels (dorsal horn · spinothalamic · thalamus/cortex) + the matrix view + the four codes are KYP extensions</text>
      </g>
    </svg>
  );
}

export function MicturitionControlMap() {
  const w = 980;
  const h = 1214;
  // An original KYP visual of the MICTURITION CONTROL section of book 236
  // (pdf 258, UPPER portion of the page). Census (pdfimages + VLM): the
  // source diagram is a FULL-COLOR MEDICAL ILLUSTRATION (3 sep rasters —
  // the bladder-base/trigone mask 426x336, the bladder+urethra body
  // 383x518, a curved wall segment 458x277) with VECTORIZED typeset
  // labels — the tissue artwork is COPYRIGHTED and is NEVER reproduced;
  // this is an original KYP schematic conveying the same wiring (the
  // three nerve lanes; the bladder/urethra glyph column with its three
  // outlet levels; the four receptor plates with the book's own ①②③
  // keys to the drug rows; the verbatim margin-note strip; the STORAGE
  // and VOIDING state panels built from the book's two margin arrows;
  // the four-row drug strip; the code strip). KYP extensions flagged on
  // the map: the state names (storage/voiding), the α₁-contraction
  // direction (read off the tamsulosin row), the pudendal
  // voluntary-hold reading, and the S2–S4/Onuf anchors. The printed
  // mnemonic 'Baby one more time.' (red initials B·o·m·t =
  // Bethanechol · Oxybutynin · Mirabegron · Tamsulosin) is the
  // SOURCE'S OWN, carried verbatim and attributed; the other three
  // codes are KYP-original. Color code: red = the parasympathetic
  // (pelvic/M₃) voiding lane, blue = the sympathetic
  // (hypogastric/β₃/α₁) storage lane, violet = the somatic
  // (pudendal/nicotinic) voluntary lane, green = the drug rows.
  // JSX text uses &gt; / &amp; escapes where needed.
  const vArrow = (x: number, y1: number, y2: number, cls = "stroke-foreground/70") => (
    <path d={`M ${x} ${y1} V ${y2} m -3 -4 l 3 4 l 3 -4`} className={cls} strokeWidth="1.2" fill="none" />
  );
  const nerveBox = (y: number, title: string, sub: string, note1: string, note2: string, cls: string, soft: string, stroke: string, bh: number) => (
    <g>
      <rect x="36" y={y} width="174" height={bh} rx="8" className={`${soft} ${stroke}`} strokeWidth="1.4" />
      <text x="46" y={y + 18} fontSize="7" fontWeight="800" className={cls}>{title}</text>
      <text x="46" y={y + 30} fontSize="5.6" fontWeight="700" className="fill-foreground">{sub}</text>
      <text x="46" y={y + 44} fontSize="5" className="fill-muted-foreground">{note1}</text>
      <text x="46" y={y + 54} fontSize="4.8" className="fill-muted-foreground">{note2}</text>
    </g>
  );
  const plate = (x: number, y: number, wd: number, title: string, sub: string, cls: string, soft: string, stroke: string) => (
    <g>
      <rect x={x} y={y} width={wd} height="28" rx="5" className={`${soft} ${stroke}`} strokeWidth="1.3" />
      <text x={x + wd / 2} y={y + 12.5} textAnchor="middle" fontSize="6.2" fontWeight="800" className={cls}>{title}</text>
      <text x={x + wd / 2} y={y + 22.5} textAnchor="middle" fontSize="4.9" className="fill-foreground">{sub}</text>
    </g>
  );
  const drugChip = (x: number, y: number, label: string, wd: number) => (
    <g>
      <rect x={x} y={y} width={wd} height="16" rx="4" className="fill-success-soft stroke-success" />
      <text x={x + wd / 2} y={y + 11.5} textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-success">{label}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Micturition control — the wiring map (an original KYP visual of the Micturition control section, book 236. THE WIRING: pelvic nerve (parasympathetic input) to the detrusor muscle's M3 receptor (1) — the voiding squeeze; hypogastric nerve (sympathetic input) branching to the detrusor's beta-3 receptor (2) — the storage stretch — and to the internal urethral sphincter's alpha-1 receptor (3) — the storage gate; pudendal nerve (somatic input) to the external urethral sphincter's nicotinic receptor — the voluntary hold. THE MARGIN NOTE, verbatim: micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems; sympathetic increases urinary retention; parasympathetic increases urine voiding; some autonomic drugs act on smooth muscle receptors to treat bladder dysfunction. The printed mnemonic: Baby one more time — Bethanechol, Oxybutynin, Mirabegron, Tamsulosin (the four drug rows in table order). THE FOUR DRUG ROWS: muscarinic agonists (bethanechol) — M3 receptor contraction of detrusor smooth muscle, up bladder emptying — urinary retention; muscarinic antagonists (oxybutynin) — M3 receptor relaxation, down detrusor overactivity — urgency incontinence; sympathomimetics (mirabegron) — beta-3 receptor relaxation, up bladder capacity — urgency incontinence; alpha-1 antagonists (tamsulosin) — alpha-1 receptor relaxation of smooth muscle (bladder, neck, prostate), down urinary obstruction — BPH. The storage and voiding state panels, the alpha-1 contraction direction, the pudendal voluntary-hold reading, and the S2-S4/Onuf anchors are KYP extensions; the Tissue distribution of adrenergic receptors section on the same page is EXCLUDED — the separate pending topic; the source diagram's tissue artwork is copyrighted — original KYP schematic, nothing reproduced)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Micturition control — the wiring map (original KYP visual of book 236)</text>
        <rect x="726" y="24" width="206" height="18" className="fill-brand-soft" />
        <text x="829" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">3 nerves · 4 receptors · 4 drugs</text>
      </g>

      {/* ===== PANEL A — THE WIRING ===== */}
      <g>
        <rect x="24" y="74" width="536" height="546" rx="10" className="fill-card stroke-border" />
        <text x="40" y="94" fontSize="7.4" fontWeight="800" className="fill-foreground">THE WIRING — three input nerves · three outlet structures · four receptor plates (labels verbatim)</text>
        {/* the three nerve lanes */}
        {nerveBox(112, "PELVIC NERVE", "(parasympathetic input)", "the voiding lane — ACh on M₃", "one nerve, one target, one lock", "fill-emergency", "fill-emergency-soft", "stroke-emergency", 64)}
        {nerveBox(252, "HYPOGASTRIC NERVE", "(sympathetic input)", "the storage lane — NE on β₃ + α₁", "the only nerve with TWO targets", "fill-brand", "fill-brand-soft", "stroke-brand", 84)}
        {nerveBox(424, "PUDENDAL NERVE", "(somatic input)", "the voluntary hold — ACh on", "nicotinic (skeletal muscle)", "fill-neural", "fill-neural-soft", "stroke-neural", 64)}
        {/* the bladder */}
        <ellipse cx="395" cy="185" rx="118" ry="80" className="fill-secondary/50 stroke-foreground/50" strokeWidth="1.6" />
        <text x="395" y="164" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">DETRUSOR MUSCLE</text>
        <text x="395" y="176" textAnchor="middle" fontSize="5.6" className="fill-foreground">the bladder wall — the pump</text>
        <text x="395" y="186" textAnchor="middle" fontSize="5" className="fill-muted-foreground">(the only structure with TWO plates)</text>
        {plate(298, 206, 88, "M₃-receptor ①", "the parasympathetic key", "fill-emergency", "fill-card", "stroke-emergency")}
        {plate(400, 206, 88, "β₃-receptor ②", "the sympathetic key", "fill-brand", "fill-card", "stroke-brand")}
        {/* pelvic nerve arrow — to the M₃ plate */}
        <path d="M 210 144 L 290 202 m -8 -1 l 8 1 l -3 -8" className="stroke-emergency" strokeWidth="1.3" fill="none" />
        {/* hypogastric branch 1 — wraps under to the β₃ plate (bladder lower-right edge) */}
        <path d="M 210 284 H 478 V 248 m -3 6 l 3 -6 l 3 6" className="stroke-brand" strokeWidth="1.2" fill="none" />
        {/* hypogastric branch 2 — to the internal sphincter */}
        <path d="M 210 322 H 351 m -6 -3 l 6 3 l -6 3" className="stroke-brand" strokeWidth="1.2" fill="none" />
        {/* the urethra tube segments */}
        <rect x="383" y="265" width="30" height="47" className="fill-secondary/60 stroke-foreground/30" strokeWidth="0.8" />
        <rect x="383" y="362" width="30" height="68" className="fill-secondary/60 stroke-foreground/30" strokeWidth="0.8" />
        <rect x="383" y="478" width="30" height="67" className="fill-secondary/60 stroke-foreground/30" strokeWidth="0.8" />
        {/* internal urethral sphincter band */}
        <rect x="357" y="312" width="82" height="50" rx="9" className="fill-brand-soft stroke-brand" strokeWidth="1.5" />
        <text x="398" y="330" textAnchor="middle" fontSize="5.8" fontWeight="800" className="fill-foreground">INTERNAL</text>
        <text x="398" y="340" textAnchor="middle" fontSize="5.8" fontWeight="800" className="fill-foreground">URETHRAL</text>
        <text x="398" y="350" textAnchor="middle" fontSize="5.8" fontWeight="800" className="fill-foreground">SPHINCTER</text>
        {plate(455, 318, 96, "α₁-receptor ③", "the gate key", "fill-brand", "fill-card", "stroke-brand")}
        <path d="M 455 332 L 441 336" className="stroke-brand" strokeWidth="1" fill="none" />
        <text x="455" y="358" fontSize="4.9" className="fill-muted-foreground">involuntary smooth muscle — the ANS gate</text>
        <text x="455" y="368" fontSize="4.9" className="fill-muted-foreground">+ bladder neck / prostate = the tamsulosin territory</text>
        {/* external urethral sphincter band */}
        <rect x="351" y="430" width="94" height="48" rx="9" className="fill-neural-soft stroke-neural" strokeWidth="1.5" />
        <text x="398" y="447" textAnchor="middle" fontSize="5.8" fontWeight="800" className="fill-foreground">EXTERNAL</text>
        <text x="398" y="457" textAnchor="middle" fontSize="5.8" fontWeight="800" className="fill-foreground">URETHRAL</text>
        <text x="398" y="467" textAnchor="middle" fontSize="5.8" fontWeight="800" className="fill-foreground">SPHINCTER</text>
        {plate(461, 436, 90, "Nicotinic receptor", "the voluntary plate", "fill-neural", "fill-card", "stroke-neural")}
        <path d="M 461 450 L 447 452" className="stroke-neural" strokeWidth="1" fill="none" />
        <text x="461" y="476" fontSize="4.9" className="fill-muted-foreground">voluntary skeletal muscle — the hold (somatic)</text>
        <text x="461" y="486" fontSize="4.9" className="fill-muted-foreground">the only conscious element — NO drug row targets it</text>
        {/* pudendal arrow — to the external sphincter */}
        <path d="M 210 456 H 345 m -6 -3 l 6 3 l -6 3" className="stroke-neural" strokeWidth="1.3" fill="none" />
        {/* the outlet */}
        {vArrow(398, 545, 572)}
        <text x="398" y="586" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">URINE OUT</text>
        <text x="398" y="596" textAnchor="middle" fontSize="5" className="fill-muted-foreground">voiding = the pump ON + the gates open</text>
        <text x="40" y="608" fontSize="5.4" className="fill-muted-foreground">the numbered circles ① ② ③ on the plates key them to the numbered drug rows below (the book&apos;s own keying)</text>
      </g>

      {/* ===== PANEL B — THE MARGIN NOTE (VERBATIM) ===== */}
      <g>
        <rect x="572" y="74" width="378" height="158" rx="10" className="fill-card stroke-border" />
        <text x="588" y="92" fontSize="7.4" fontWeight="800" className="fill-foreground">THE MARGIN NOTE (book 236, verbatim)</text>
        <rect x="582" y="98" width="358" height="90" rx="6" className="fill-secondary/40" />
        <text x="592" y="112" fontSize="6" className="fill-foreground">“Micturition center in pons regulates involuntary bladder</text>
        <text x="592" y="122" fontSize="6" className="fill-foreground">function via coordination of sympathetic and parasympathetic</text>
        <text x="592" y="132" fontSize="6" className="fill-foreground">nervous systems.”</text>
        <text x="592" y="146" fontSize="6" fontWeight="800" className="fill-brand">“⊕ sympathetic → ↑ urinary retention.”</text>
        <text x="592" y="158" fontSize="6" fontWeight="800" className="fill-emergency">“⊕ parasympathetic → ↑ urine voiding.”</text>
        <text x="592" y="172" fontSize="6" className="fill-foreground">“Some autonomic drugs act on smooth muscle receptors to</text>
        <text x="592" y="182" fontSize="6" className="fill-foreground">treat bladder dysfunction.”</text>
        <text x="588" y="202" fontSize="5.8" fontWeight="800" className="fill-foreground">THE PRINTED MNEMONIC — the source&apos;s own:</text>
        <text x="588" y="214" fontSize="5.8" fontWeight="800" className="fill-foreground">“Baby one more time.” — B·o·m·t = <tspan className="fill-emergency">B</tspan>ethanechol, <tspan className="fill-emergency">O</tspan>xybutynin, <tspan className="fill-emergency">M</tspan>irabegron, <tspan className="fill-emergency">T</tspan>amsulosin</text>
        <text x="588" y="225" fontSize="5" className="fill-muted-foreground">red initials on the page (VLM-verified) — the four drug rows in table order</text>
      </g>

      {/* ===== PANEL C — THE STORAGE STATE ===== */}
      <g>
        <rect x="572" y="244" width="378" height="184" rx="10" className="fill-card stroke-brand" strokeWidth="1.5" />
        <text x="588" y="262" fontSize="8" fontWeight="800" className="fill-brand">STATE 1 — STORAGE (sympathetic dominance)</text>
        <text x="588" y="273" fontSize="5.4" className="fill-muted-foreground">the book&apos;s own arrow: “⊕ sympathetic → ↑ urinary retention.”</text>
        <rect x="582" y="280" width="358" height="44" rx="6" className="fill-brand-soft" />
        <text x="592" y="294" fontSize="6" fontWeight="800" className="fill-brand">β₃ on the detrusor → RELAXATION</text>
        <text x="592" y="305" fontSize="5.4" className="fill-foreground">“relaxation of detrusor smooth muscle → ↑ bladder capacity”</text>
        <text x="592" y="315" fontSize="5" className="fill-muted-foreground">(the mirabegron row) — the pump stretches to hold more</text>
        <rect x="582" y="330" width="358" height="52" rx="6" className="fill-brand-soft" />
        <text x="592" y="344" fontSize="6" fontWeight="800" className="fill-brand">α₁ on the internal sphincter → the GATE CLOSES</text>
        <text x="592" y="355" fontSize="5.4" className="fill-foreground">stimulation CONTRACTS the outlet — a KYP reading off the</text>
        <text x="592" y="365" fontSize="5.4" className="fill-foreground">tamsulosin row (blockade relaxes: “↓ urinary obstruction”),</text>
        <text x="592" y="375" fontSize="5" className="fill-muted-foreground">so α₁ stimulation closes it — storage&apos;s second lock</text>
        <text x="761" y="418" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-brand">RESULT — a relaxed pump behind a closed gate: urine HELD</text>
      </g>

      {/* ===== PANEL D — THE VOIDING STATE ===== */}
      <g>
        <rect x="572" y="440" width="378" height="180" rx="10" className="fill-card stroke-emergency" strokeWidth="1.5" />
        <text x="588" y="458" fontSize="8" fontWeight="800" className="fill-emergency">STATE 2 — VOIDING (parasympathetic dominance)</text>
        <text x="588" y="469" fontSize="5.4" className="fill-muted-foreground">the book&apos;s own arrow: “⊕ parasympathetic → ↑ urine voiding.”</text>
        <rect x="582" y="476" width="358" height="44" rx="6" className="fill-emergency-soft" />
        <text x="592" y="490" fontSize="6" fontWeight="800" className="fill-emergency">M₃ on the detrusor → CONTRACTION</text>
        <text x="592" y="501" fontSize="5.4" className="fill-foreground">“contraction of detrusor smooth muscle → ↑ bladder emptying”</text>
        <text x="592" y="511" fontSize="5" className="fill-muted-foreground">(the bethanechol row) — the pump squeezes on demand</text>
        <rect x="582" y="526" width="358" height="52" rx="6" className="fill-emergency-soft" />
        <text x="592" y="540" fontSize="6" fontWeight="800" className="fill-emergency">The gates open + the hold releases</text>
        <text x="592" y="551" fontSize="5.4" className="fill-foreground">the α₁ gate relaxes as sympathetic tone falls (KYP reading);</text>
        <text x="592" y="561" fontSize="5.4" className="fill-foreground">the pudendal hold lets go — the voluntary nicotinic lane</text>
        <text x="592" y="571" fontSize="5" className="fill-muted-foreground">(Onuf nucleus, S2–S4 — KYP anchors, not printed on the page)</text>
        <text x="761" y="612" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-emergency">RESULT — a squeezing pump behind an open gate: urine FLOWS</text>
      </g>

      {/* ===== PANEL E — THE FOUR DRUG ROWS ===== */}
      <g>
        <rect x="24" y="632" width="932" height="374" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="40" y="650" fontSize="8" fontWeight="800" className="fill-foreground">THE FOUR DRUG ROWS (book 236, verbatim) — each key turned in the plate it names · ① ② ③ match the wiring above</text>
        <rect x="32" y="658" width="916" height="18" rx="4" className="fill-brand-soft" />
        <text x="44" y="670" fontSize="5.8" fontWeight="800" className="fill-foreground">DRUGS</text>
        <text x="252" y="670" fontSize="5.8" fontWeight="800" className="fill-foreground">MECHANISM (verbatim)</text>
        <text x="676" y="670" fontSize="5.8" fontWeight="800" className="fill-foreground">APPLICATIONS</text>
        <text x="820" y="670" fontSize="5.8" fontWeight="800" className="fill-foreground">THE PLATE</text>
        {/* row 1 — muscarinic agonists */}
        <rect x="32" y="680" width="916" height="76" rx="6" className="fill-card" />
        <text x="44" y="696" fontSize="6.2" fontWeight="800" className="fill-foreground">① MUSCARINIC AGONISTS</text>
        <text x="44" y="708" fontSize="5.4" className="fill-foreground">(eg, bethanechol)</text>
        <text x="44" y="726" fontSize="5" className="fill-muted-foreground">the pump key turned ON —</text>
        <text x="44" y="736" fontSize="5" className="fill-muted-foreground">the pelvic lane&apos;s drug</text>
        <text x="252" y="696" fontSize="5.8" className="fill-foreground">⊕ M₃ receptor → contraction of detrusor smooth muscle</text>
        <text x="252" y="707" fontSize="5.8" className="fill-foreground">→ ↑ bladder emptying</text>
        <text x="252" y="726" fontSize="5" className="fill-muted-foreground">mimics the parasympathetic (pelvic) lane — the voiding</text>
        <text x="252" y="736" fontSize="5" className="fill-muted-foreground">squeeze, on demand (KYP reading)</text>
        <text x="676" y="700" fontSize="6.2" fontWeight="800" className="fill-emergency">Urinary retention</text>
        <text x="676" y="712" fontSize="5" className="fill-muted-foreground">the pump will not</text>
        <text x="676" y="722" fontSize="5" className="fill-muted-foreground">empty</text>
        {drugChip(816, 694, "M₃ ① — AGONIST", 104)}
        {/* row 2 — muscarinic antagonists */}
        <rect x="32" y="760" width="916" height="76" rx="6" className="fill-card" />
        <text x="44" y="776" fontSize="6.2" fontWeight="800" className="fill-foreground">① MUSCARINIC ANTAGONISTS</text>
        <text x="44" y="788" fontSize="5.4" className="fill-foreground">(eg, oxybutynin)</text>
        <text x="44" y="806" fontSize="5" className="fill-muted-foreground">the SAME key JAMMED —</text>
        <text x="44" y="816" fontSize="5" className="fill-muted-foreground">the only lock with both rows</text>
        <text x="252" y="776" fontSize="5.8" className="fill-foreground">⊝ M₃ receptor → relaxation of detrusor smooth muscle</text>
        <text x="252" y="787" fontSize="5.8" className="fill-foreground">→ ↓ detrusor overactivity</text>
        <text x="252" y="806" fontSize="5" className="fill-muted-foreground">removes the parasympathetic squeeze — the same mechanism</text>
        <text x="252" y="816" fontSize="5" className="fill-muted-foreground">that CAUSES retention when the bladder already cannot empty</text>
        <text x="676" y="780" fontSize="6.2" fontWeight="800" className="fill-success">Urgency incontinence</text>
        <text x="676" y="792" fontSize="5" className="fill-muted-foreground">the pump will not</text>
        <text x="676" y="802" fontSize="5" className="fill-muted-foreground">stay calm</text>
        {drugChip(816, 774, "M₃ ① — ANTAGONIST", 122)}
        {/* row 3 — sympathomimetics */}
        <rect x="32" y="840" width="916" height="76" rx="6" className="fill-card" />
        <text x="44" y="856" fontSize="6.2" fontWeight="800" className="fill-foreground">② SYMPATHOMIMETICS</text>
        <text x="44" y="868" fontSize="5.4" className="fill-foreground">(eg, mirabegron)</text>
        <text x="44" y="886" fontSize="5" className="fill-muted-foreground">the capacity key ON —</text>
        <text x="44" y="896" fontSize="5" className="fill-muted-foreground">a sympathomimetic that RELAXES</text>
        <text x="252" y="856" fontSize="5.8" className="fill-foreground">⊕ β₃ receptor → relaxation of detrusor smooth muscle</text>
        <text x="252" y="867" fontSize="5.8" className="fill-foreground">→ ↑ bladder capacity</text>
        <text x="252" y="886" fontSize="5" className="fill-muted-foreground">the sympathetic storage stretch — the counterintuitive row</text>
        <text x="252" y="896" fontSize="5" className="fill-muted-foreground">(the same application as oxybutynin via the OPPOSITE lock)</text>
        <text x="676" y="860" fontSize="6.2" fontWeight="800" className="fill-success">Urgency incontinence</text>
        <text x="676" y="872" fontSize="5" className="fill-muted-foreground">same lock-muscle,</text>
        <text x="676" y="882" fontSize="5" className="fill-muted-foreground">different receptor</text>
        {drugChip(816, 854, "β₃ ② — AGONIST", 104)}
        {/* row 4 — α1-antagonists */}
        <rect x="32" y="920" width="916" height="76" rx="6" className="fill-card" />
        <text x="44" y="936" fontSize="6.2" fontWeight="800" className="fill-foreground">③ α1-ANTAGONISTS</text>
        <text x="44" y="948" fontSize="5.4" className="fill-foreground">(eg, tamsulosin)</text>
        <text x="44" y="966" fontSize="5" className="fill-muted-foreground">the GATE key JAMMED —</text>
        <text x="44" y="976" fontSize="5" className="fill-muted-foreground">the only row at the OUTLET</text>
        <text x="252" y="936" fontSize="5.8" className="fill-foreground">⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder,</text>
        <text x="252" y="947" fontSize="5.8" className="fill-foreground">neck, prostate) → ↓ urinary obstruction</text>
        <text x="252" y="966" fontSize="5" className="fill-muted-foreground">the printed evidence for the α₁ direction itself: blockade relaxes</text>
        <text x="252" y="976" fontSize="5" className="fill-muted-foreground">the outlet, so α₁ stimulation contracts it (storage closes the gate)</text>
        <text x="676" y="940" fontSize="6.2" fontWeight="800" className="fill-brand">BPH</text>
        <text x="676" y="952" fontSize="5" className="fill-muted-foreground">the prostate-compressed</text>
        <text x="676" y="962" fontSize="5" className="fill-muted-foreground">outlet</text>
        {drugChip(816, 934, "α₁ ③ — ANTAGONIST", 122)}
      </g>

      {/* ===== PANEL F — THE FOUR CODES ===== */}
      <g>
        <rect x="24" y="1018" width="932" height="136" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="1036" fontSize="8" fontWeight="800" className="fill-brand">THE FOUR CODES — 1 is the book&apos;s own printed mnemonic (carried verbatim); 2–4 are KYP-original</text>
        <text x="40" y="1054" fontSize="6.6" fontWeight="800" className="fill-foreground">1 · BABY ONE MORE TIME — Bethanechol · Oxybutynin · Mirabegron · Tamsulosin</text>
        <text x="40" y="1064" fontSize="5.2" className="fill-muted-foreground">the margin&apos;s own red-initial mnemonic (B·o·m·t) — the four drug rows in table order; recite it before reading any options</text>
        <text x="40" y="1082" fontSize="6.6" fontWeight="800" className="fill-foreground">2 · SYMPATHETIC HOLDS, PARASYMPATHETIC FLOWS — the two margin arrows compressed</text>
        <text x="40" y="1092" fontSize="5.2" className="fill-muted-foreground">⊕ sympathetic → ↑ urinary retention (storage) · ⊕ parasympathetic → ↑ urine voiding — the state names the system</text>
        <text x="40" y="1110" fontSize="6.6" fontWeight="800" className="fill-foreground">3 · M₃ SQUEEZES, β₃ STRETCHES, α₁ GUARDS THE GATE, NICOTINIC IS YOURS</text>
        <text x="40" y="1120" fontSize="5.2" className="fill-muted-foreground">the four plates: M₃ pump-squeeze (pelvic) · β₃ pump-stretch (hypogastric) · α₁ gate (hypogastric) · nicotinic hold (pudendal, voluntary)</text>
        <text x="40" y="1138" fontSize="6.6" fontWeight="800" className="fill-foreground">4 · S2, 3, 4 KEEPS THE URINE OFF THE FLOOR</text>
        <text x="40" y="1148" fontSize="5.2" className="fill-muted-foreground">the pelvic + pudendal lanes arise S2–S4 — a classic code OUTSIDE First Aid (Onuf nucleus = the hold&apos;s motor home)</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="1166" width="932" height="48" rx="10" className="fill-card stroke-border" />
        <text x="490" y="1184" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">THE RECEPTOR NAMES THE DRUG — NAME THE STATE, FIND THE PART, READ THE LOCK, PICK THE KEY</text>
        <text x="490" y="1196" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">Quoted sentences and table rows verbatim from book 236 (pdf 258) — the source diagram&apos;s tissue artwork is copyrighted and never reproduced: an original KYP schematic</text>
        <text x="490" y="1206" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">the Tissue distribution of adrenergic receptors section on the same page is EXCLUDED (separate pending topic) · state names + α₁ direction + pudendal reading + S2–S4/Onuf are KYP extensions</text>
      </g>
    </svg>
  );
}

export function AdrenergicReceptorDistributionMap() {
  const w = 980;
  const h = 1140;
  // An original KYP visual of the TISSUE DISTRIBUTION OF ADRENERGIC
  // RECEPTORS section of book 236 (pdf 258, LOWER portion of the page —
  // directly below the completed PH14 Micturition control section).
  // Census (pdfimages + text layer): the section's sole printed element
  // is ONE TABLE (RECEPTOR / TISSUE / EFFECTS — 13 rows under 5
  // receptors), PURE TEXT — the page's 3 sep rasters all belong to the
  // UPPER portion's PH14 bladder illustration (COPYRIGHTED, never
  // reproduced, NOT part of this topic). This visual conveys the table
  // as an ORIGINAL_KYP_ADAPTATION grid: the 12-tissue x 5-receptor
  // matrix with the 13 verbatim effect cells (the pancreas row carries
  // TWO cells — the seesaw in one row), the EMPTY-CELL CAVEAT strip,
  // the three seesaw/brake cards, the four-code strip, and the
  // reading-rule footer. KYP extensions flagged on the map: the grid
  // view, the empty-cell caveat (blank = no printed row, NOT receptor-
  // absent), the pancreas/tone seesaws, the α2 triple brake, the
  // doubled heart-rate row, the drug anchors (albuterol, epinephrine,
  // dobutamine, phenylephrine, clonidine, mirabegron — none printed on
  // this page), and the classic '1 heart, 2 lungs' counting code (the
  // FACING page's G-protein table prints '(one heart)' / '(two lungs)'
  // — book 237, a separate pending topic; attributed). Color code:
  // α1 = blue (brand), α2 = amber (warning), β1 = red (emergency),
  // β2 = green (success), β3 = violet (neural). The EXCLUDED
  // neighboring sections are flagged: the Micturition control section
  // above (PH14, same page) and the G-protein–linked second messengers
  // section on pdf 259 (the next page). JSX text uses &gt; / &amp;
  // escapes where needed (none required here — no raw > or & appears).
  const COLS = [
    { key: "α1", x: 168, cls: "fill-brand", soft: "fill-brand-soft", stroke: "stroke-brand", head: "2 rows · contracts" },
    { key: "α2", x: 324, cls: "fill-warning", soft: "fill-warning-soft", stroke: "stroke-warning", head: "3 rows · inhibits" },
    { key: "β1", x: 480, cls: "fill-emergency", soft: "fill-emergency-soft", stroke: "stroke-emergency", head: "2 rows · cardiorenal" },
    { key: "β2", x: 636, cls: "fill-success", soft: "fill-success-soft", stroke: "stroke-success", head: "5 rows · the widest" },
    { key: "β3", x: 792, cls: "fill-neural", soft: "fill-neural-soft", stroke: "stroke-neural", head: "1 row · adipose" },
  ];
  const ROWS = [
    { name: "Vascular smooth muscle", desc: "the constrictor arm of the tone axis", cells: [{ c: 0, e: "Vasoconstriction" }] },
    { name: "Visceral smooth muscle", desc: "the visceral beds — same sign, different bed", cells: [{ c: 0, e: "Smooth muscle contraction" }] },
    { name: "Pancreas", desc: "the seesaw organ — the only TWO-row tissue", cells: [{ c: 1, e: "Inhibition of insulin secretion" }, { c: 3, e: "Stimulation of insulin secretion" }] },
    { name: "Presynaptic terminals", desc: "the only neuronal row — the autoreceptor", cells: [{ c: 1, e: "Inhibition of neurotransmitter release" }] },
    { name: "Salivary glands", desc: "the exocrine row — the dry-mouth row", cells: [{ c: 1, e: "Inhibition of salivary secretion" }] },
    { name: "Heart", desc: "the β1 row — the pump", cells: [{ c: 2, e: "↑ heart rate, contractility" }] },
    { name: "Kidney", desc: "the only kidney row in the table (renin)", cells: [{ c: 2, e: "↑ renin secretion" }] },
    { name: "Bronchioles", desc: "the airway row — the albuterol story", cells: [{ c: 3, e: "Bronchodilation" }] },
    { name: "Cardiac muscle", desc: "the DOUBLED row — same string as β1 Heart", cells: [{ c: 3, e: "↑ heart rate, contractility" }] },
    { name: "Liver", desc: "the fuel row", cells: [{ c: 3, e: "Glycogenolysis, glucose release" }] },
    { name: "Arterial smooth muscle", desc: "the dilator arm of the tone axis", cells: [{ c: 3, e: "Vasodilation" }] },
    { name: "Adipose", desc: "the one-row receptor's only tissue", cells: [{ c: 4, e: "↑ lipolysis" }] },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Tissue distribution of adrenergic receptors — the tissue x receptor grid (an original KYP visual of the Tissue distribution of adrenergic receptors section, book 236, pdf 258, the LOWER portion of the page. THE TABLE, verbatim: alpha1 — Vascular smooth muscle, Vasoconstriction; Visceral smooth muscle, Smooth muscle contraction. alpha2 — Pancreas, Inhibition of insulin secretion; Presynaptic terminals, Inhibition of neurotransmitter release; Salivary glands, Inhibition of salivary secretion. beta1 — Heart, up heart rate and contractility; Kidney, up renin secretion. beta2 — Bronchioles, Bronchodilation; Cardiac muscle, up heart rate and contractility; Liver, Glycogenolysis glucose release; Arterial smooth muscle, Vasodilation; Pancreas, Stimulation of insulin secretion. beta3 — Adipose, up lipolysis. The grid view (tissues down, receptors across), the empty-cell caveat (blank means no printed row, not receptor-absent), the pancreas and tone seesaws, the alpha2 triple brake, the doubled heart-rate row, and all drug anchors (albuterol, epinephrine, dobutamine, phenylephrine, clonidine, mirabegron) are KYP extensions, flagged; the classic one heart two lungs counting code is printed on the facing page's G-protein table (book 237, a separate pending topic), attributed. The Micturition control section above on the same page is the completed PH14 and is EXCLUDED; the G-protein-linked second messengers section on pdf 259 is a separate pending topic and is EXCLUDED; the table is pure text — nothing reproduced)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Tissue distribution of adrenergic receptors — the tissue × receptor grid (original KYP visual of book 236)</text>
        <rect x="706" y="24" width="226" height="18" rx="4" className="fill-brand-soft" />
        <text x="819" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">5 receptors · 13 rows · 12 tissues</text>
      </g>

      {/* ===== PANEL A — THE GRID ===== */}
      <g>
        <rect x="24" y="74" width="932" height="594" rx="10" className="fill-card stroke-border" />
        <text x="40" y="94" fontSize="7.4" fontWeight="800" className="fill-foreground">THE GRID — tissues down (book order) · α1 / α2 / β1 / β2 / β3 across · every cell verbatim from the book&apos;s table</text>
        {/* column heads */}
        <rect x="32" y="102" width="136" height="30" rx="4" className="fill-secondary/40" />
        <text x="100" y="117" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">TISSUE</text>
        <text x="100" y="127" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">the table&apos;s own 12 tissues</text>
        {COLS.map((col) => (
          <g key={col.key}>
            <rect x={col.x + 2} y="102" width="152" height="30" rx="4" className={`${col.soft} ${col.stroke}`} strokeWidth="1.2" />
            <text x={col.x + 78} y="118" textAnchor="middle" fontSize="9" fontWeight="800" className={col.cls}>{col.key}</text>
            <text x={col.x + 78} y="128" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">{col.head}</text>
          </g>
        ))}
        {/* the 12 tissue rows */}
        {ROWS.map((row, i) => {
          const y0 = 138 + i * 40;
          return (
            <g key={row.name}>
              <rect x="32" y={y0 + 2} width="916" height="36" rx="4" className={i % 2 === 0 ? "fill-secondary/20" : "fill-card"} />
              <text x="40" y={y0 + 16} fontSize="6" fontWeight="800" className="fill-foreground">{row.name}</text>
              <text x="40" y={y0 + 28} fontSize="4.4" className="fill-muted-foreground">{row.desc}</text>
              {COLS.map((col, ci) => {
                const cell = row.cells.find((c) => c.c === ci);
                if (cell) {
                  return (
                    <g key={col.key}>
                      <rect x={col.x + 4} y={y0 + 5} width="148" height="30" rx="5" className={`${col.soft} ${col.stroke}`} strokeWidth="1.2" />
                      <text x={col.x + 78} y={y0 + 24} textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">{cell.e}</text>
                    </g>
                  );
                }
                return <text key={col.key} x={col.x + 78} y={y0 + 24} textAnchor="middle" fontSize="7" className="fill-muted-foreground/60">–</text>;
              })}
            </g>
          );
        })}
        {/* the empty-cell caveat strip */}
        <rect x="32" y="622" width="916" height="38" rx="6" className="fill-secondary/40" />
        <text x="44" y="634" fontSize="5.2" fontWeight="800" className="fill-foreground">THE EMPTY-CELL CAVEAT (KYP): the table prints positives only —</text>
        <text x="44" y="644" fontSize="5" className="fill-muted-foreground">a blank cell means “no row in the book&apos;s table pairs this receptor with this tissue”, NOT “the receptor is absent from the tissue”.</text>
        <text x="44" y="654" fontSize="5" className="fill-muted-foreground">Real vessels and airways carry more receptors than this table prints — never read absence into silence; the exam asks what the BOOK prints.</text>
      </g>

      {/* ===== PANEL B — THE THREE CUTS ===== */}
      <g>
        <rect x="24" y="680" width="932" height="240" rx="10" className="fill-card stroke-border" />
        <text x="40" y="700" fontSize="8" fontWeight="800" className="fill-foreground">THE THREE CUTS THE LIST HIDES — the seesaws and the brake (KYP frames built from the book&apos;s own cells)</text>
        {/* card 1 — the pancreas seesaw */}
        <rect x="32" y="710" width="296" height="200" rx="8" className="fill-secondary/30 stroke-border" />
        <text x="44" y="726" fontSize="6.4" fontWeight="800" className="fill-warning">THE PANCREAS SEESAW</text>
        <text x="44" y="736" fontSize="4.4" className="fill-muted-foreground">the only organ with TWO rows — under two receptors</text>
        <rect x="40" y="744" width="280" height="44" rx="6" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
        <text x="48" y="758" fontSize="5.4" fontWeight="800" className="fill-foreground">α2 → Inhibition of insulin secretion</text>
        <text x="48" y="770" fontSize="4.6" className="fill-muted-foreground">HOLDS the insulin back — the brake pedal&apos;s islet stop</text>
        <rect x="40" y="794" width="280" height="44" rx="6" className="fill-success-soft stroke-success" strokeWidth="1.1" />
        <text x="48" y="808" fontSize="5.4" fontWeight="800" className="fill-foreground">β2 → Stimulation of insulin secretion</text>
        <text x="48" y="820" fontSize="4.6" className="fill-muted-foreground">POURS it out — the accelerator&apos;s islet stop</text>
        <text x="44" y="854" fontSize="4.8" fontWeight="700" className="fill-foreground">Same organ, opposite signs — the stress-state fuel switch:</text>
        <text x="44" y="864" fontSize="4.8" className="fill-muted-foreground">sympathetic activation holds insulin back (α2) while the β2 liver row pours glucose out — and β3 frees the fat.</text>
        {/* card 2 — the tone seesaw */}
        <rect x="340" y="710" width="296" height="200" rx="8" className="fill-secondary/30 stroke-border" />
        <text x="352" y="726" fontSize="6.4" fontWeight="800" className="fill-brand">THE TONE SEESAW</text>
        <text x="352" y="736" fontSize="4.4" className="fill-muted-foreground">two arms, two printed labels, two receptors — opposite signs</text>
        <rect x="348" y="744" width="280" height="44" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.1" />
        <text x="356" y="758" fontSize="5.4" fontWeight="800" className="fill-foreground">α1 · Vascular smooth muscle → Vasoconstriction</text>
        <text x="356" y="770" fontSize="4.6" className="fill-muted-foreground">the constrictor arm — phenylephrine&apos;s row (KYP anchor)</text>
        <rect x="348" y="794" width="280" height="44" rx="6" className="fill-success-soft stroke-success" strokeWidth="1.1" />
        <text x="356" y="808" fontSize="5.4" fontWeight="800" className="fill-foreground">β2 · Arterial smooth muscle → Vasodilation</text>
        <text x="356" y="820" fontSize="4.6" className="fill-muted-foreground">the dilator arm — the low-dose epinephrine row</text>
        <text x="352" y="854" fontSize="4.8" fontWeight="700" className="fill-foreground">The dose story of every mixed agonist (KYP anchors):</text>
        <text x="352" y="864" fontSize="4.8" className="fill-muted-foreground">low dose reads β2 first — the diastolic fall; higher doses recruit α1 — the pressure rise; anaphylaxis answers α1 + β2.</text>
        {/* card 3 — the α2 triple brake */}
        <rect x="648" y="710" width="296" height="200" rx="8" className="fill-secondary/30 stroke-border" />
        <text x="660" y="726" fontSize="6.4" fontWeight="800" className="fill-warning">THE α2 TRIPLE BRAKE</text>
        <text x="660" y="736" fontSize="4.4" className="fill-muted-foreground">three rows, three inhibitions — nothing else</text>
        <rect x="656" y="744" width="280" height="34" rx="6" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
        <text x="664" y="758" fontSize="5.2" fontWeight="800" className="fill-foreground">Pancreas → Inhibition of insulin secretion</text>
        <text x="664" y="768" fontSize="4.2" className="fill-muted-foreground">the islet stop</text>
        <rect x="656" y="784" width="280" height="34" rx="6" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
        <text x="664" y="798" fontSize="5.2" fontWeight="800" className="fill-foreground">Presynaptic terminals → Inhibition of release</text>
        <text x="664" y="808" fontSize="4.2" className="fill-muted-foreground">the autoreceptor row — the only neuronal row</text>
        <rect x="656" y="824" width="280" height="34" rx="6" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
        <text x="664" y="838" fontSize="5.2" fontWeight="800" className="fill-foreground">Salivary glands → Inhibition of salivary secretion</text>
        <text x="664" y="848" fontSize="4.2" className="fill-muted-foreground">the dry-mouth row</text>
        <text x="660" y="880" fontSize="4.8" className="fill-muted-foreground">In this table α2 never excites anything — the clonidine story (KYP anchor): ↓ sympathetic outflow + dry mouth.</text>
      </g>

      {/* ===== PANEL C — THE FOUR CODES ===== */}
      <g>
        <rect x="24" y="932" width="932" height="140" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="950" fontSize="8" fontWeight="800" className="fill-brand">THE FOUR CODES — 1 is the classic counting code (printed on the facing page&apos;s G-protein table, book 237 — attributed); 2–4 are KYP-original</text>
        <text x="40" y="968" fontSize="6.6" fontWeight="800" className="fill-foreground">1 · 1 HEART, 2 LUNGS, 3 FAT — β1 → Heart · β2 → Bronchioles · β3 → Adipose</text>
        <text x="40" y="978" fontSize="5.2" className="fill-muted-foreground">the classic code — the facing page prints “(one heart)” and “(two lungs)” (book 237, a separate pending topic); it names the DOMINANT organ — it does not delete the table&apos;s other rows (β2 keeps its cardiac-muscle row)</text>
        <text x="40" y="996" fontSize="6.6" fontWeight="800" className="fill-foreground">2 · α2 IS THE BRAKE PEDAL — insulin, neurotransmitter release, saliva: three rows, three inhibitions</text>
        <text x="40" y="1006" fontSize="5.2" className="fill-muted-foreground">every “inhibition” in this table belongs to α2 — the brake pedal never contracts anything; the contraction receptor is α1</text>
        <text x="40" y="1024" fontSize="6.6" fontWeight="800" className="fill-foreground">3 · THE PANCREAS SEESAW — α2 HOLDS the insulin, β2 POURS it out</text>
        <text x="40" y="1034" fontSize="5.2" className="fill-muted-foreground">the table&apos;s only two-row organ — the stress-state fuel switch (α2 holds insulin while β2 pours glucose from the liver and β3 frees the fat)</text>
        <text x="40" y="1052" fontSize="6.6" fontWeight="800" className="fill-foreground">4 · TWO SMOOTH MUSCLES, TWO SIGNS — α1 VASCULAR CONSTRICTS, β2 ARTERIAL DILATES</text>
        <text x="40" y="1062" fontSize="5.2" className="fill-muted-foreground">the tone axis&apos;s two labels — the dose story of every mixed agonist; the anaphylaxis composite is α1 + β2 together</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="1084" width="932" height="48" rx="10" className="fill-card stroke-border" />
        <text x="490" y="1102" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">THE TISSUE NAMES THE RECEPTOR, THE RECEPTOR NAMES THE EFFECT — READ THE ROW ACROSS, THE COLUMN DOWN, THE CELL FOR THE SIGN</text>
        <text x="490" y="1114" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">The 13 rows verbatim from book 236 (pdf 258) — the table is pure text (the page&apos;s images belong to the Micturition control section above, the completed PH14): an original KYP grid, nothing reproduced</text>
        <text x="490" y="1124" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">blank ≠ absent (positives only) · the grid view, the seesaw/brake frames, and all drug names are KYP extensions, flagged · the Micturition section above and the G-protein section on pdf 259 are EXCLUDED (separate topics)</text>
      </g>
    </svg>
  );
}

export function GProteinSecondMessengerMap() {
  const w = 980;
  const h = 1100;
  // An original KYP visual of the G-PROTEIN-LINKED SECOND MESSENGERS
  // section of book 237 (pdf 259, the WHOLE page under the standing
  // 'PHARMACOLOGY—AUTONOMIC DRUGS' banner). Census (pdfimages + text
  // layer): the section prints TWO elements — the 14-row RECEPTOR /
  // G-PROTEIN CLASS / MAJOR FUNCTIONS table (α1 q, α2 i, β1 s, β2 s,
  // β3 s, M1 q, M2 i, M3 q, D1 s, D2 i, H1 q, H2 s, V1 q, V2 s) and
  // THREE VECTOR CASCADE DIAGRAMS (Gq, Gs, Gi) whose labels print in
  // the text layer ('H1, α1, V1, M1, or M3 receptor' / 'B1, B2, B3,
  // D1, H2, or V2 receptor' / 'M2, α2, or D2 receptor' -> Gq/GS/Gi
  // protein -> Phospholipase C / Adenylyl cyclase -> PIP2 -> IP3 +
  // DAG -> Ca2+ -> Protein kinase C / ATP -> Cyclic AMP -> Protein
  // kinase A -> Smooth muscle contraction + Myosin light-chain
  // kinase). RASTER CENSUS: ZERO rasters on the page — the diagrams
  // are vector typeset artwork, COPYRIGHTED, never reproduced; this
  // visual conveys the cascade structure as an ORIGINAL_KYP_REDRAW
  // (the labels and steps are the book's own; the layout and glyphs
  // are KYP's) with the table compressed into the class-digest strip.
  // KYP extensions flagged on the map: the three-lanes reading (gas
  // pedal / brake / squeeze), the subscript-rule membership frames
  // (the i class is all 2s — NOT all 2s are Gi [β2, H2, V2 are s];
  // the q class is the odd ones), the kinase fork (PKA vs PKC vs
  // MLCK), the PIP2 splitter, the sign wrinkle (cAMP contracts the
  // heart but relaxes smooth muscle), and every drug/toxin anchor
  // (albuterol, dobutamine, desmopressin, cimetidine, clonidine,
  // antipsychotics, phenylephrine, cholera toxin, pertussis toxin —
  // none printed on this page). The '(one heart)' / '(two lungs)'
  // parentheticals are THIS page's own print (the classic counting
  // code, attributed — PH15's facing-page attribution resolves here).
  // The EXCLUDED neighbors are flagged: the completed PH14/PH15
  // sections on pdf 258 behind this page, and the Autonomic drugs
  // section on pdf 260 ahead of it (the separate pending topic).
  // Color code: Gs = green (success), Gi = amber (warning), Gq =
  // blue (brand). JSX text uses &gt; / &amp; / &apos; escapes where
  // needed (no raw > or & appears in text runs).
  const gsChips = ["β1", "β2", "β3", "D1", "H2", "V2"];
  const giChips = ["α2", "M2", "D2"];
  const gqChipsCol1 = ["α1", "M1", "M3"];
  const gqChipsCol2 = ["H1", "V1"];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="G-protein–linked second messengers — the three cascade lanes (an original KYP visual of the G-protein–linked second messengers section, book 237, pdf 259, the whole page. THE TABLE, verbatim letters: alpha1 q, alpha2 i, beta1 s, beta2 s, beta3 s; M1 q, M2 i, M3 q; D1 s, D2 i; H1 q, H2 s; V1 q, V2 s — under the heads RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS, each with its printed functions string (alpha1 vascular, pupillary dilator (mydriasis), intestinal and bladder sphincter contraction; alpha2 down sympathetic outflow, insulin, lipolysis, up platelet aggregation, down aqueous humor; beta1 up heart rate, contractility (one heart), renin, lipolysis; beta2 vasodilation, bronchodilation (two lungs), lipolysis, insulin, glycogenolysis, down uterine tone (tocolysis), up aqueous humor, up K+ uptake; beta3 lipolysis, thermogenesis, bladder relaxation; M1 higher cognitive, enteric, exocrine; M2 down heart rate, AV node conduction velocity, atrial contractility; M3 exocrine, gut peristalsis, bladder contraction, bronchoconstriction, vasodilation, miosis, accommodation; D1 renal vascular relaxation, direct pathway of striatum; D2 transmitter modulation, indirect pathway; H1 bronchoconstriction, mucus, permeability, pruritus; H2 up gastric acid; V1 up vascular smooth muscle contraction; V2 aquaporin-2 water reabsorption plus vWF release, the row printing the book's own red-ink erratum overlay 'twobules (tubules)'). THE THREE CASCADES (the diagrams' own labels): Gs — B1, B2, B3, D1, H2, or V2 receptor to GS protein to Adenylyl cyclase to ATP to Cyclic AMP to Protein kinase A; Gi — M2, alpha2, or D2 receptor to Gi protein to the SAME adenylyl cyclase, inhibited, down Cyclic AMP; Gq — H1, alpha1, V1, M1, or M3 receptor to Gq protein to Phospholipase C to PIP2 to IP3 plus DAG to Ca2+ to Protein kinase C and Myosin light-chain kinase (smooth muscle contraction). The three-lanes reading (gas pedal, brake, squeeze), the subscript-rule membership frames (the i class is all 2s; not all 2s are Gi — beta2, H2, V2 are s; the q class is the odd ones), the kinase fork (PKA vs PKC vs MLCK), the PIP2 splitter, the sign wrinkle (cAMP contracts the heart, relaxes smooth muscle), and all drug and toxin anchors (albuterol, dobutamine, desmopressin, cimetidine, clonidine, antipsychotics, phenylephrine, cholera toxin, pertussis toxin) are KYP extensions, flagged; the one heart / two lungs counting code is this page's own print, attributed. The diagrams are vector artwork with zero rasters, never reproduced — an original KYP schematic; the completed PH14 and PH15 sections on pdf 258 and the Autonomic drugs section on pdf 260 are EXCLUDED, separate topics)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">G-protein–linked second messengers — the three cascade lanes (original KYP visual of book 237)</text>
        <rect x="706" y="24" width="226" height="18" rx="4" className="fill-brand-soft" />
        <text x="819" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">14 receptors · 3 classes · 2 enzymes</text>
      </g>

      {/* ===== PANEL A — THE Gs CASCADE (THE GAS PEDAL) ===== */}
      <g>
        <rect x="24" y="74" width="932" height="246" rx="10" className="fill-card stroke-success" strokeWidth="1.4" />
        <text x="40" y="96" fontSize="8" fontWeight="800" className="fill-foreground">THE Gs LANE — THE GAS PEDAL (s stimulates): receptor → Gs protein → adenylyl cyclase ON → ATP → cAMP → protein kinase A</text>
        <text x="40" y="107" fontSize="4.8" className="fill-muted-foreground">THE MEMBERSHIP (the diagram&apos;s own chip): “B1, B2, B3, D1, H2, or V2 receptor” — the betas plus the strays (six receptors; the diagram prints B where the table prints β)</text>
        {/* receptor chips */}
        <text x="40" y="124" fontSize="5.4" fontWeight="800" className="fill-foreground">THE s RECEPTORS</text>
        {gsChips.map((c, i) => (
          <g key={c}>
            <rect x={i < 3 ? 32 : 104} y={130 + (i % 3) * 28} width="68" height="24" rx="5" className="fill-success-soft stroke-success" strokeWidth="1.1" />
            <text x={(i < 3 ? 32 : 104) + 34} y={130 + (i % 3) * 28 + 16} textAnchor="middle" fontSize="9" fontWeight="800" className="fill-success">{c}</text>
          </g>
        ))}
        {/* flow row */}
        <rect x="192" y="138" width="84" height="56" rx="7" className="fill-secondary/40 stroke-border" />
        <text x="234" y="160" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">Gs protein</text>
        <text x="234" y="172" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">the transducer —</text>
        <text x="234" y="182" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">s = stimulates (prints “GS”)</text>
        <text x="286" y="170" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-success">→</text>
        <rect x="296" y="138" width="118" height="56" rx="7" className="fill-success-soft stroke-success" strokeWidth="1.3" />
        <text x="355" y="160" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">Adenylyl cyclase</text>
        <text x="355" y="172" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">turned ON —</text>
        <text x="355" y="182" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">the gas pedal (the enzyme)</text>
        <text x="424" y="170" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-success">→</text>
        <rect x="434" y="138" width="122" height="56" rx="7" className="fill-secondary/40 stroke-border" />
        <text x="495" y="160" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">ATP → Cyclic AMP</text>
        <text x="495" y="172" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">the second messenger ↑ —</text>
        <text x="495" y="182" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">one event, many cAMP (amplified)</text>
        <text x="566" y="170" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-success">→</text>
        <rect x="574" y="138" width="108" height="56" rx="7" className="fill-secondary/40 stroke-border" />
        <text x="628" y="160" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">Protein kinase A</text>
        <text x="628" y="172" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">the lane&apos;s kinase — PKA</text>
        <text x="628" y="182" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">(never PKC — that is q)</text>
        <text x="692" y="170" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-success">→</text>
        {/* the organ story */}
        <text x="702" y="148" fontSize="5.2" fontWeight="800" className="fill-foreground">THE ORGAN STORY (one messenger, many organs):</text>
        <text x="702" y="160" fontSize="4.4" className="fill-foreground">Heart (β1): ↑ heart rate, ↑ contractility (one heart), ↑ renin</text>
        <text x="702" y="171" fontSize="4.4" className="fill-foreground">Smooth muscle (β2, D1): RELAXES — bronchodilation, vasodilation</text>
        <text x="702" y="182" fontSize="4.4" className="fill-foreground">Stomach (H2): ↑ gastric acid · Kidney (V2): aquaporin-2, ↑ vWF</text>
        <text x="702" y="193" fontSize="4.4" className="fill-foreground">Metabolic (β2/β3): ↑ lipolysis, ↑ glycogenolysis — the fuel budget</text>
        {/* the sign wrinkle strip */}
        <rect x="32" y="224" width="916" height="84" rx="6" className="fill-secondary/30" />
        <text x="44" y="240" fontSize="5.6" fontWeight="800" className="fill-foreground">THE SIGN WRINKLE (KYP flag on the book&apos;s own rows): the SAME messenger carries opposite mechanical signs —</text>
        <text x="44" y="252" fontSize="4.8" className="fill-foreground">cAMP → PKA in the HEART (β1): “↑ heart rate, ↑ contractility (one heart)” — phosphorylation speeds Ca2+ handling → the pump CONTRACTS</text>
        <text x="44" y="264" fontSize="4.8" className="fill-foreground">cAMP → PKA in SMOOTH MUSCLE (β2): “Vasodilation, bronchodilation (two lungs)” — phosphorylation shuts down MLCK → the muscle RELAXES</text>
        <text x="44" y="276" fontSize="4.8" className="fill-muted-foreground">the counting code is this page&apos;s own print: β1 “(one heart)” · β2 “(two lungs)” — the classic code the facing PH15 topic attributed to this table</text>
        <text x="44" y="296" fontSize="4.6" fontWeight="700" className="fill-muted-foreground">drug anchors (KYP — none printed on this page): albuterol rides β2-s (bronchodilation) · dobutamine rides β1-s (inotropy) · desmopressin rides V2-s (aquaporin-2) · cimetidine blocks H2-s (↓ acid)</text>
      </g>

      {/* ===== PANEL B — THE Gi CASCADE (THE BRAKE) ===== */}
      <g>
        <rect x="24" y="332" width="932" height="158" rx="10" className="fill-card stroke-warning" strokeWidth="1.4" />
        <text x="40" y="354" fontSize="8" fontWeight="800" className="fill-foreground">THE Gi LANE — THE BRAKE (i inhibits): receptor → Gi protein → the SAME adenylyl cyclase, inhibited → ↓cAMP</text>
        <text x="40" y="365" fontSize="4.8" className="fill-muted-foreground">THE MEMBERSHIP (the diagram&apos;s own chip): “M2, α2, or D2 receptor” — all subscript-2 (three receptors: the i class is all 2s)</text>
        {/* receptor chips */}
        <text x="40" y="382" fontSize="5.4" fontWeight="800" className="fill-foreground">THE i RECEPTORS</text>
        {giChips.map((c, i) => (
          <g key={c}>
            <rect x="32" y={388 + i * 28} width="144" height="24" rx="5" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
            <text x="104" y={388 + i * 28 + 16} textAnchor="middle" fontSize="9" fontWeight="800" className="fill-warning">{c}</text>
          </g>
        ))}
        {/* flow row */}
        <rect x="192" y="372" width="84" height="56" rx="7" className="fill-secondary/40 stroke-border" />
        <text x="234" y="394" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">Gi protein</text>
        <text x="234" y="406" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">the negative sign —</text>
        <text x="234" y="416" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">i = inhibits (the brake)</text>
        <text x="286" y="404" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-warning">→</text>
        <rect x="296" y="372" width="118" height="56" rx="7" className="fill-warning-soft stroke-warning" strokeWidth="1.3" strokeDasharray="4 2" />
        <text x="355" y="394" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">Adenylyl cyclase</text>
        <text x="355" y="406" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">INHIBITED — the SAME</text>
        <text x="355" y="416" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">enzyme Gs turns on</text>
        <text x="424" y="404" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-warning">→</text>
        <rect x="434" y="372" width="122" height="56" rx="7" className="fill-secondary/40 stroke-border" />
        <text x="495" y="394" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">↓ Cyclic AMP</text>
        <text x="495" y="406" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">the messenger FALLS —</text>
        <text x="495" y="416" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">less fuel for PKA</text>
        <text x="566" y="404" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-warning">→</text>
        <rect x="574" y="372" width="108" height="56" rx="7" className="fill-secondary/40 stroke-border" />
        <text x="628" y="394" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">↓ Protein kinase A</text>
        <text x="628" y="406" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">less phosphorylation —</text>
        <text x="628" y="416" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">the organ slows</text>
        <text x="692" y="404" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-warning">→</text>
        {/* where the brake grabs */}
        <text x="702" y="382" fontSize="5.2" fontWeight="800" className="fill-foreground">WHERE THE BRAKE GRABS (the table&apos;s own i rows):</text>
        <text x="702" y="394" fontSize="4.4" className="fill-foreground">Heart (M2): ↓ heart rate, AV node conduction velocity, atrial contractility</text>
        <text x="702" y="405" fontSize="4.4" className="fill-foreground">Presynaptic terminal (α2): ↓ NE release → ↓ sympathetic (adrenergic) outflow</text>
        <text x="702" y="416" fontSize="4.4" className="fill-foreground">Islet (α2): ↓ insulin release · platelets: ↑ aggregation · eye: ↓ aqueous humor</text>
        <text x="702" y="427" fontSize="4.4" className="fill-foreground">Brain (D2): modulates transmitter release, inhibits indirect pathway of striatum</text>
        <text x="702" y="438" fontSize="4.4" fontWeight="700" className="fill-muted-foreground">NOT a receptor antagonist — the sign is on the ENZYME (KYP: the βγ subunit also opens K+ channels)</text>
        <text x="44" y="482" fontSize="4.6" fontWeight="700" className="fill-muted-foreground">drug anchors (KYP): clonidine rides α2-i (↓ outflow, dry mouth) · the vagus rides M2-i (the bradycardia reflex) · antipsychotics block D2-i · the 2s that got away: β2, H2, V2 are all s</text>
      </g>

      {/* ===== PANEL C — THE Gq CASCADE (THE SQUEEZE) ===== */}
      <g>
        <rect x="24" y="502" width="932" height="268" rx="10" className="fill-card stroke-brand" strokeWidth="1.4" />
        <text x="40" y="524" fontSize="8" fontWeight="800" className="fill-foreground">THE Gq LANE — THE SQUEEZE (q goes to phospholipase C): receptor → Gq protein → PLC → PIP2 → IP3 + DAG → Ca2+ + PKC → contraction</text>
        <text x="40" y="535" fontSize="4.8" className="fill-muted-foreground">THE MEMBERSHIP (the diagram&apos;s own chip): “H1, α1, V1, M1, or M3 receptor” — the odd ones (five receptors; all the 1s plus M3)</text>
        {/* receptor chips */}
        <text x="40" y="552" fontSize="5.4" fontWeight="800" className="fill-foreground">THE q RECEPTORS</text>
        {gqChipsCol1.map((c, i) => (
          <g key={c}>
            <rect x="32" y={558 + i * 28} width="68" height="24" rx="5" className="fill-brand-soft stroke-brand" strokeWidth="1.1" />
            <text x="66" y={558 + i * 28 + 16} textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">{c}</text>
          </g>
        ))}
        {gqChipsCol2.map((c, i) => (
          <g key={c}>
            <rect x="104" y={558 + i * 28} width="68" height="24" rx="5" className="fill-brand-soft stroke-brand" strokeWidth="1.1" />
            <text x="138" y={558 + i * 28 + 16} textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">{c}</text>
          </g>
        ))}
        {/* flow row */}
        <rect x="192" y="570" width="84" height="56" rx="7" className="fill-secondary/40 stroke-border" />
        <text x="234" y="592" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">Gq protein</text>
        <text x="234" y="604" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">the transducer —</text>
        <text x="234" y="614" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">the q class (the squeeze)</text>
        <text x="286" y="602" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-brand">→</text>
        <rect x="296" y="570" width="118" height="56" rx="7" className="fill-brand-soft stroke-brand" strokeWidth="1.3" />
        <text x="355" y="592" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">Phospholipase C</text>
        <text x="355" y="604" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">the class enzyme —</text>
        <text x="355" y="614" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">q ALONE (AC never here)</text>
        <text x="424" y="602" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-brand">→</text>
        <rect x="434" y="570" width="90" height="56" rx="7" className="fill-secondary/40 stroke-border" />
        <text x="479" y="592" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">PIP2</text>
        <text x="479" y="604" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">the membrane lipid —</text>
        <text x="479" y="614" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">the splitter&apos;s substrate</text>
        {/* the split — IP3 arm (up) and DAG arm (down) */}
        <text x="532" y="568" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">→</text>
        <text x="532" y="648" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">→</text>
        <rect x="540" y="542" width="76" height="40" rx="6" className="fill-secondary/40 stroke-border" />
        <text x="578" y="560" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-foreground">IP3</text>
        <text x="578" y="572" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">water-soluble — frees Ca2+</text>
        <rect x="540" y="622" width="76" height="40" rx="6" className="fill-secondary/40 stroke-border" />
        <text x="578" y="640" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-foreground">DAG</text>
        <text x="578" y="652" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">membrane-bound — drags PKC</text>
        <text x="624" y="566" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">→</text>
        <text x="624" y="646" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">→</text>
        <rect x="632" y="542" width="76" height="40" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
        <text x="670" y="560" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-foreground">Ca2+</text>
        <text x="670" y="572" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">freed from the stores</text>
        <rect x="632" y="622" width="76" height="40" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
        <text x="670" y="640" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-foreground">Protein kinase C</text>
        <text x="670" y="652" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">held at the membrane</text>
        <text x="716" y="646" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">→</text>
        <rect x="724" y="542" width="110" height="40" rx="6" className="fill-secondary/40 stroke-border" />
        <text x="779" y="560" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-foreground">MLCK</text>
        <text x="779" y="572" textAnchor="middle" fontSize="4.2" className="fill-muted-foreground">myosin light-chain kinase</text>
        <path d="M 779 582 L 779 614" stroke="currentColor" strokeWidth="1.2" className="text-brand" fill="none" />
        <polygon points="775,612 783,612 779,620" className="fill-brand" />
        <rect x="724" y="622" width="110" height="40" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="779" y="640" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">Smooth muscle</text>
        <text x="779" y="651" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">contraction</text>
        {/* the terminal label provenance + organ map */}
        <text x="846" y="556" fontSize="4.2" className="fill-muted-foreground">the diagram&apos;s own</text>
        <text x="846" y="566" fontSize="4.2" className="fill-muted-foreground">terminal box — the</text>
        <text x="846" y="576" fontSize="4.2" className="fill-muted-foreground">q lane ends in the</text>
        <text x="846" y="586" fontSize="4.2" className="fill-muted-foreground">same two words for</text>
        <text x="846" y="596" fontSize="4.2" className="fill-muted-foreground">all five receptors</text>
        <rect x="32" y="676" width="916" height="82" rx="6" className="fill-secondary/30" />
        <text x="44" y="692" fontSize="5.6" fontWeight="800" className="fill-foreground">THE q ROWS&apos; ORGAN MAP (the table&apos;s own function strings):</text>
        <text x="44" y="704" fontSize="4.6" className="fill-foreground">α1 — ↑ vascular smooth muscle contraction · ↑ pupillary dilator muscle contraction (mydriasis) · ↑ intestinal and bladder sphincter muscle contraction</text>
        <text x="44" y="716" fontSize="4.6" className="fill-foreground">M3 — ↑ exocrine gland secretions, gut peristalsis, bladder contraction, bronchoconstriction, vasodilation, ↑ pupillary sphincter muscle contraction (miosis), ciliary muscle contraction (accommodation)</text>
        <text x="44" y="728" fontSize="4.6" className="fill-foreground">H1 — ↑ bronchoconstriction, airway mucus production, ↑ vascular permeability/vasodilation, pruritus · V1 — ↑ vascular smooth muscle contraction · M1 — the CNS/enteric arm (KYP anchor)</text>
        <text x="44" y="748" fontSize="4.6" fontWeight="700" className="fill-muted-foreground">the eye is the exam&apos;s mirror pair: α1-q contracts the DILATOR (mydriasis) while M3-q contracts the SPHINCTER (miosis) — same lane, opposite muscles, opposite transmitters (KYP frame)</text>
      </g>

      {/* ===== PANEL D — THE CLASS DIGEST ===== */}
      <g>
        <rect x="24" y="782" width="932" height="148" rx="10" className="fill-card stroke-border" />
        <text x="40" y="802" fontSize="8" fontWeight="800" className="fill-foreground">THE CLASS DIGEST — all 14 receptors, three classes, two enzymes, three kinases (the table compressed; frames are KYP)</text>
        <rect x="32" y="814" width="296" height="108" rx="8" className="fill-brand-soft stroke-brand" strokeWidth="1.1" />
        <text x="44" y="832" fontSize="6.2" fontWeight="800" className="fill-brand">Gq — THE SQUEEZE (the odd ones)</text>
        <text x="44" y="844" fontSize="5.4" fontWeight="800" className="fill-foreground">α1 · M1 · M3 · H1 · V1  (5 receptors)</text>
        <text x="44" y="856" fontSize="4.6" className="fill-foreground">enzyme: Phospholipase C (q alone)</text>
        <text x="44" y="867" fontSize="4.6" className="fill-foreground">messengers: PIP2 → IP3 + DAG → Ca2+</text>
        <text x="44" y="878" fontSize="4.6" className="fill-foreground">kinases: protein kinase C + MLCK</text>
        <text x="44" y="892" fontSize="4.4" className="fill-muted-foreground">the contraction-and-secretion lane — every q row contracts or pours</text>
        <rect x="340" y="814" width="296" height="108" rx="8" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
        <text x="352" y="832" fontSize="6.2" fontWeight="800" className="fill-warning">Gi — THE BRAKE (all 2s)</text>
        <text x="352" y="844" fontSize="5.4" fontWeight="800" className="fill-foreground">α2 · M2 · D2  (3 receptors — the only members)</text>
        <text x="352" y="856" fontSize="4.6" className="fill-foreground">enzyme: adenylyl cyclase INHIBITED (the same one)</text>
        <text x="352" y="867" fontSize="4.6" className="fill-foreground">messenger: ↓cAMP → less protein kinase A</text>
        <text x="352" y="878" fontSize="4.6" className="fill-foreground">NOT receptor blockade — the sign is on the enzyme</text>
        <text x="352" y="892" fontSize="4.4" className="fill-muted-foreground">the 2s that got away: β2, H2, V2 are all s (KYP warning)</text>
        <rect x="648" y="814" width="296" height="108" rx="8" className="fill-success-soft stroke-success" strokeWidth="1.1" />
        <text x="660" y="832" fontSize="6.2" fontWeight="800" className="fill-success">Gs — THE GAS PEDAL (betas + strays)</text>
        <text x="660" y="844" fontSize="5.4" fontWeight="800" className="fill-foreground">β1 · β2 · β3 · D1 · H2 · V2  (6 receptors)</text>
        <text x="660" y="856" fontSize="4.6" className="fill-foreground">enzyme: adenylyl cyclase ON → ATP → cAMP</text>
        <text x="660" y="867" fontSize="4.6" className="fill-foreground">kinase: protein kinase A (PKA)</text>
        <text x="660" y="878" fontSize="4.6" className="fill-foreground">the amplifier — contracts the heart, relaxes smooth muscle</text>
        <text x="660" y="892" fontSize="4.4" className="fill-muted-foreground">the diagram&apos;s chip prints “B1, B2, B3” where the table prints β</text>
      </g>

      {/* ===== PANEL E — THE CODES ===== */}
      <g>
        <rect x="24" y="942" width="932" height="100" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="960" fontSize="7.4" fontWeight="800" className="fill-brand">THE FOUR CODES — 1 names the three verbs; 2–3 are KYP membership frames; 4 is the KYP splitter frame</text>
        <text x="40" y="976" fontSize="6.4" fontWeight="800" className="fill-foreground">1 · GAS PEDAL, BRAKE, SQUEEZE — s stimulates adenylyl cyclase · i inhibits it · q squeezes via phospholipase C</text>
        <text x="40" y="986" fontSize="4.8" className="fill-muted-foreground">the three verbs of the three lanes — Gs the amplifier, Gi the negative sign on the same enzyme, Gq the Ca2+ contraction lane</text>
        <text x="40" y="1000" fontSize="6.4" fontWeight="800" className="fill-foreground">2 · THE i CLASS IS ALL 2s — α2, D2, M2 — but NOT all 2s are i (β2, H2, V2 are s: the three 2s that got away)</text>
        <text x="40" y="1010" fontSize="4.8" className="fill-muted-foreground">the brake lane has exactly three members — the adrenergic, dopaminergic, and muscarinic 2</text>
        <text x="40" y="1024" fontSize="6.4" fontWeight="800" className="fill-foreground">3 · THE q CLASS IS THE ODD ONES — α1, M1, M3, H1, V1 · 4 · IP3 FREES Ca, DAG DRAGS PKC (the PIP2 splitter)</text>
        <text x="40" y="1034" fontSize="4.8" className="fill-muted-foreground">all the 1s plus M3 ride the squeeze lane — and one phospholipid splits into two messengers with two addresses</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="1054" width="932" height="42" rx="10" className="fill-card stroke-border" />
        <text x="490" y="1072" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">NAME THE RECEPTOR → READ THE CLASS LETTER → RUN THE LANE — s THE AMP MAKER ON · i OFF · q TO PHOSPHOLIPASE C</text>
        <text x="490" y="1084" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">Table letters and cascade labels verbatim from book 237 (pdf 259) — the diagrams are vector artwork, never reproduced: an original KYP schematic</text>
        <text x="490" y="1094" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">the three-lanes reading, the membership frames, and all drug/toxin names (albuterol, clonidine, phenylephrine, cholera, pertussis) are KYP extensions · PH14/PH15 behind and Autonomic drugs ahead are EXCLUDED</text>
      </g>
    </svg>
  );
}

export function AutonomicDrugsSynthesisMap() {
  const w = 980;
  const h = 1400;
  // An original KYP visual of the AUTONOMIC DRUGS section of book 238
  // (pdf 260, the WHOLE page under the standing
  // 'PHARMACOLOGY—AUTONOMIC DRUGS' banner). Census (pdfimages + text
  // layer + VLM render check on the 150-dpi page): the section prints
  // TWO elements — the two intro rules (the α2-autoreceptor
  // negative-feedback rule; the amphetamine NET-entry → VMAT-entry →
  // displacement → threshold → NET-reversal → NE-expulsion rule) and
  // ONE LARGE FOUR-LANE VECTOR FLOWCHART (CHOLINERGIC / NORADRENERGIC
  // / DOPAMINERGIC / SEROTONERGIC) whose labels print in the text
  // layer. RASTER CENSUS: ZERO rasters on the page — the flowchart is
  // VECTOR LINE ART, COPYRIGHTED, never reproduced; this visual
  // conveys the two main lanes' chains, labels, and drug-anchor lists
  // as an ORIGINAL_KYP_REDRAW (the layout, slot names, and glyphs are
  // KYP's; every chain step, anchor list, and receptor label is the
  // book's own). VLM-verified facts flagged on the map: NO enzyme
  // labels print on the Tyrosine→DOPA or Dopamine→NE arrows (ChAT is
  // the ONLY printed enzyme — the enzyme-name chips are KYP extensions)
  // and there is NO epinephrine/PNMT/adrenal branch — the
  // noradrenergic lane ENDS at NE (the adrenal Epi limb is the book's
  // OWN print on book 234's overview diagram, the completed PH11
  // topic — cross-referenced, flagged, not drawn as this page's
  // content). KYP extensions flagged wherever they appear: the FIVE
  // SLOTS reading (MAKE, PACK, RELEASE, LISTEN, TAKE BACK), the
  // TROJAN HORSE frame, the α2-thermostat drug layer (clonidine,
  // guanfacine, yohimbine — none printed), the AT II facilitator
  // reading, and the clearance-asymmetry frame (ACh has a BREAKER, NE
  // has a PUMP). PAGE-EXTENT FINDING: the diagram does NOT extend to
  // pdf 261 — pdf 261 (book 239) opens the separate pending
  // Cholinomimetic agents section; the EXCLUDED neighbors are flagged
  // (PH16 on pdf 259 behind, Cholinomimetic agents on pdf 261 ahead).
  // Color code: CHOLINERGIC = brand (blue), NORADRENERGIC = warning
  // (amber), DOPAMINERGIC = success (green), SEROTONERGIC = neural
  // (purple). JSX text uses &gt; / &amp; / &apos; escapes where needed
  // (no raw > or & appears in text runs).
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Autonomic drugs — the two-lane synthesis map (an original KYP visual of the Autonomic drugs section, book 238, pdf 260, the whole page. THE TWO INTRO RULES, verbatim: Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic alpha2-autoreceptors, negative feedback; and amphetamines use the NE transporter NET to enter the presynaptic terminal, utilize the vesicular monoamine transporter VMAT to enter neurosecretory vesicles, displace NE from the vesicles, and once NE reaches a concentration threshold the action of NET is reversed and NE is expelled into the synaptic cleft, the up-NE effects of amphetamines. THE CHOLINERGIC LANE (the diagram's own labels): Choline + Acetyl-CoA, the enzyme ChAT, ACh, Ca2+-triggered release, Cholinoreceptors M1 M2 M3 on the postsynaptic neuron, AChE breaking ACh into Choline + Acetate, with the anchors Cholinergic inhibitor Botulinum toxin at release and Cholinergic stimulant AChE inhibitors eg Donepezil at the breaker. THE NORADRENERGIC LANE (the diagram's own labels): Tyrosine, DOPA, Dopamine, NE, VMAT, Vesicular monoamine transporter VMAT inhibitor Tetrabenazine, Noradrenergic stimulant Amphetamine Ephedrine displacing vesicular NE, Release-modulating receptors alpha2 (the autoreceptor, Negative feedback) and AT II, Ca2+-triggered release, Adrenoreceptors alpha and beta on the postsynaptic neuron, NET Reuptake with Amphetamine SNRIs Cocaine TCAs MDMA, and Diffusion metabolism — the lane ends at NE. THE AXONAL STRIP: DOPAMINERGIC Tyrosine L-DOPA Dopamine DAT with Amphetamine Methylphenidate Cocaine; SEROTONERGIC Tryptophan 5-Hydroxytryptophan 5-HT SERT with Amphetamine SNRIs Cocaine SSRIs. THE FIVE SLOTS digest, the four codes, and the reading-rule footer. The five-slots reading, the Trojan-horse frame, the enzyme-name layer (tyrosine hydroxylase rate-limiting, dopa decarboxylase, dopamine beta-hydroxylase, PNMT — VLM-verified as not printed; ChAT is the only printed enzyme), the adrenal Epi branch (the book's own limb on book 234, the autonomic-receptors topic — this lane ends at NE), and the clonidine-guanfacine-yohimbine drug layer are KYP extensions, flagged; the flowchart is vector line art with zero rasters, never reproduced — an original KYP redraw; the completed g-protein-linked-second-messengers topic on pdf 259 and the pending Cholinomimetic agents section on pdf 261 are EXCLUDED, separate topics)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Autonomic drugs — the two-lane synthesis map (original KYP visual of book 238)</text>
        <rect x="700" y="24" width="232" height="18" rx="4" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">2 rules · 4 lanes · 5 slots · 6 anchor lists</text>
      </g>

      {/* ===== LEFT LANE — CHOLINERGIC ===== */}
      <g>
        <rect x="24" y="74" width="464" height="740" rx="10" className="fill-card stroke-brand" strokeWidth="1.4" />
        <text x="40" y="96" fontSize="8" fontWeight="800" className="fill-foreground">THE CHOLINERGIC LANE — MAKE → RELEASE → LISTEN → BREAK</text>
        <text x="40" y="107" fontSize="4.8" className="fill-muted-foreground">the diagram&apos;s own chain: Choline + Acetyl-CoA →(ChAT)→ ACh → M1 M2 M3 → AChE → Choline + Acetate (no reuptake pump — clearance is enzymatic)</text>
        {/* terminal axon zone */}
        <rect x="36" y="118" width="300" height="248" rx="8" className="fill-secondary/20 stroke-border" strokeDasharray="5 3" />
        <text x="44" y="131" fontSize="5" fontWeight="800" className="fill-muted-foreground">TERMINAL AXON</text>
        {/* substrates */}
        <rect x="86" y="138" width="200" height="26" rx="6" className="fill-secondary/40 stroke-border" />
        <text x="186" y="155" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-foreground">Choline + Acetyl-CoA</text>
        <path d="M 186 164 L 186 188" stroke="currentColor" strokeWidth="1.2" className="text-brand" fill="none" />
        <polygon points="182,186 190,186 186,193" className="fill-brand" />
        <text x="198" y="174" fontSize="5.6" fontWeight="800" className="fill-brand">ChAT</text>
        <text x="198" y="182" fontSize="3.8" className="fill-muted-foreground">choline acetyltransferase — the ONLY</text>
        <text x="198" y="189" fontSize="3.8" className="fill-muted-foreground">printed enzyme on the whole page</text>
        {/* ACh */}
        <rect x="86" y="193" width="200" height="30" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.3" />
        <text x="186" y="206" textAnchor="middle" fontSize="6.6" fontWeight="800" className="fill-foreground">ACh — acetylcholine</text>
        <text x="186" y="216" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">made in the cytosol, packed into the vesicle</text>
        {/* vesicle */}
        <path d="M 186 223 L 186 232" stroke="currentColor" strokeWidth="1.2" className="text-brand" fill="none" />
        <ellipse cx="186" cy="252" rx="52" ry="15" className="fill-card stroke-foreground" strokeWidth="1.1" />
        <text x="186" y="250" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-foreground">ACh</text>
        <text x="186" y="259" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">the vesicle</text>
        <path d="M 186 267 L 186 292" stroke="currentColor" strokeWidth="1.2" className="text-brand" fill="none" />
        <polygon points="182,290 190,290 186,297" className="fill-brand" />
        <text x="198" y="278" fontSize="4.4" fontWeight="700" className="fill-foreground">Ca2+ influx</text>
        <text x="198" y="285" fontSize="3.8" className="fill-muted-foreground">the printed trigger</text>
        {/* release */}
        <rect x="86" y="297" width="200" height="28" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
        <text x="186" y="315" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">Exocytosis → ACh into the cleft</text>
        <text x="44" y="152" fontSize="3.8" className="fill-muted-foreground">the substrates:</text>
        <text x="44" y="159" fontSize="3.8" className="fill-muted-foreground">dietary choline,</text>
        <text x="44" y="166" fontSize="3.8" className="fill-muted-foreground">reclaimed (see</text>
        <text x="44" y="173" fontSize="3.8" className="fill-muted-foreground">the AChE step)</text>
        {/* drug card 1 — cholinergic inhibitor */}
        <rect x="344" y="284" width="132" height="76" rx="7" className="fill-emergency-soft/60 stroke-emergency" strokeWidth="1.1" />
        <text x="410" y="297" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">CHOLINERGIC INHIBITOR</text>
        <text x="410" y="308" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-foreground">Botulinum toxin</text>
        <text x="410" y="318" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">⊣ blocks ACh RELEASE</text>
        <text x="410" y="325" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">(KYP: proteases the SNAREs —</text>
        <text x="410" y="332" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">the vesicle cannot dock)</text>
        <text x="410" y="344" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the printed slot: the release step</text>
        <path d="M 344 311 L 292 311" stroke="currentColor" strokeWidth="1.2" className="text-emergency" fill="none" />
        <polygon points="294,307 294,315 287,311" className="fill-emergency" />
        {/* cleft band */}
        <rect x="36" y="378" width="440" height="34" rx="6" className="fill-secondary/30 stroke-border" strokeDasharray="4 3" />
        <text x="256" y="399" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">THE SYNAPTIC CLEFT — ACh</text>
        {/* receptors */}
        <text x="256" y="430" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-foreground">Cholinoreceptors</text>
        <rect x="156" y="436" width="60" height="24" rx="5" className="fill-brand-soft stroke-brand" strokeWidth="1.1" />
        <text x="186" y="452" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">M1</text>
        <rect x="226" y="436" width="60" height="24" rx="5" className="fill-brand-soft stroke-brand" strokeWidth="1.1" />
        <text x="256" y="452" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">M2</text>
        <rect x="296" y="436" width="60" height="24" rx="5" className="fill-brand-soft stroke-brand" strokeWidth="1.1" />
        <text x="326" y="452" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">M3</text>
        {/* postsynaptic bar */}
        <rect x="36" y="466" width="440" height="28" rx="6" className="fill-card stroke-foreground" strokeWidth="1.1" />
        <text x="256" y="484" textAnchor="middle" fontSize="6.6" fontWeight="800" className="fill-foreground">POSTSYNAPTIC NEURON</text>
        <text x="44" y="508" fontSize="4.2" className="fill-muted-foreground">the letters live one page back (book 237, PH16): M1 q · M2 i · M3 q — the vagal brake M2 is the i lane</text>
        <text x="44" y="517" fontSize="4.2" className="fill-muted-foreground">the wiring and the organ plates on book 234 (PH11) · the tissue addresses of the NE lane on book 236 (PH15)</text>
        {/* break row */}
        <rect x="56" y="530" width="80" height="28" rx="6" className="fill-secondary/40 stroke-border" />
        <text x="96" y="548" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">AChE</text>
        <path d="M 136 544 L 164 544" stroke="currentColor" strokeWidth="1.2" className="text-brand" fill="none" />
        <polygon points="162,540 162,548 169,544" className="fill-brand" />
        <rect x="170" y="530" width="150" height="28" rx="6" className="fill-secondary/40 stroke-border" />
        <text x="245" y="548" textAnchor="middle" fontSize="5.8" fontWeight="800" className="fill-foreground">Choline + Acetate</text>
        <text x="44" y="574" fontSize="4.2" className="fill-muted-foreground">choline is reclaimed by the terminal — the substrate loop (the diagram&apos;s own second</text>
        <text x="44" y="583" fontSize="4.2" className="fill-muted-foreground">&apos;Choline&apos; print sits right at the AChE site); acetate diffuses away</text>
        {/* drug card 2 — cholinergic stimulant */}
        <rect x="344" y="522" width="132" height="76" rx="7" className="fill-success-soft stroke-success" strokeWidth="1.1" />
        <text x="410" y="535" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">CHOLINERGIC STIMULANT</text>
        <text x="410" y="546" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-success">AChE inhibitors</text>
        <text x="410" y="556" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-success">eg, Donepezil</text>
        <text x="410" y="566" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">⊣ blocks the breaker →</text>
        <text x="410" y="573" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">released ACh accumulates (↑ ACh)</text>
        <text x="410" y="585" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the printed slot: the AChE step</text>
        <path d="M 344 546 L 326 546" stroke="currentColor" strokeWidth="1.1" className="text-success" fill="none" />
        <polygon points="328,542 328,550 321,546" className="fill-success" />
        {/* the left lane's two slots */}
        <rect x="36" y="602" width="440" height="126" rx="8" className="fill-secondary/20" />
        <text x="44" y="614" fontSize="5.4" fontWeight="800" className="fill-foreground">THE LEFT LANE&apos;S TWO DRUG SLOTS — opposite attacks on one lane (both printed)</text>
        <text x="44" y="630" fontSize="4.4" className="fill-foreground">INHIBITOR at RELEASE — Botulinum toxin: the signal never leaves the terminal (flaccid paralysis; no ACh in the cleft at all).</text>
        <text x="44" y="642" fontSize="4.4" className="fill-foreground">STIMULANT at the BREAKER — AChE inhibitors (eg, Donepezil): the signal never dies (↑ ACh → glands, gut, and muscle overdrive).</text>
        <text x="44" y="654" fontSize="4.2" className="fill-muted-foreground">the mirror lesson (KYP frame): an AChE inhibitor cannot rescue botulism — there is nothing in the cleft to preserve.</text>
        <text x="44" y="672" fontSize="5" fontWeight="800" className="fill-foreground">THE CLEARANCE ASYMMETRY — ACh HAS A BREAKER, NOT A PUMP</text>
        <text x="44" y="686" fontSize="4.4" className="fill-foreground">the left lane clears by an ENZYME (AChE), so its drug class is an enzyme inhibitor; every monoamine lane clears by a</text>
        <text x="44" y="697" fontSize="4.4" className="fill-foreground">TRANSPORTER (NET, DAT, SERT), so its drug class is a pump blocker (KYP frame on the page&apos;s own architecture).</text>
        <text x="44" y="714" fontSize="4.4" fontWeight="700" className="fill-muted-foreground">what the exam asks of this lane: name the slot (release vs breaker), then the direction (block the supply → signal falls;</text>
        <text x="44" y="724" fontSize="4.4" fontWeight="700" className="fill-muted-foreground">block the clearance → signal rises). The two printed anchors are the two answers.</text>
        {/* synthesis note strip */}
        <rect x="36" y="740" width="440" height="62" rx="8" className="fill-secondary/20" />
        <text x="44" y="756" fontSize="5" fontWeight="800" className="fill-foreground">SYNTHESIS IN ONE LINE — ChAT is the only enzyme the page prints</text>
        <text x="44" y="770" fontSize="4.4" className="fill-foreground">Choline + Acetyl-CoA →(ChAT)→ ACh: the choline half is reclaimed from the cleft, the acetyl half comes from mitochondrial</text>
        <text x="44" y="781" fontSize="4.4" className="fill-foreground">acetyl-CoA (KYP depth). Everything else on this lane — vesicle, Ca2+, plate, breaker — is the page&apos;s own print.</text>
        <text x="44" y="795" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">hemicholinium blocks the choline reclaimer; vesamicol blocks vesicular loading (KYP anchors — not printed).</text>
      </g>

      {/* ===== RIGHT LANE — NORADRENERGIC ===== */}
      <g>
        <rect x="492" y="74" width="464" height="740" rx="10" className="fill-card stroke-warning" strokeWidth="1.4" />
        <text x="508" y="96" fontSize="8" fontWeight="800" className="fill-foreground">THE NORADRENERGIC LANE — MAKE → PACK → RELEASE → LISTEN → TAKE BACK</text>
        <text x="508" y="107" fontSize="4.6" className="fill-muted-foreground">the diagram&apos;s own chain: Tyrosine → DOPA → Dopamine → NE → VMAT vesicle → α2/AT II-modulated release → α β → NET (Diffusion, metabolism)</text>
        {/* terminal axon zone */}
        <rect x="500" y="118" width="336" height="332" rx="8" className="fill-secondary/20 stroke-border" strokeDasharray="5 3" />
        <text x="508" y="131" fontSize="5" fontWeight="800" className="fill-muted-foreground">TERMINAL AXON</text>
        {/* synthesis chain */}
        <rect x="640" y="138" width="180" height="24" rx="6" className="fill-secondary/40 stroke-border" />
        <text x="730" y="154" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-foreground">Tyrosine</text>
        <path d="M 730 162 L 730 184" stroke="currentColor" strokeWidth="1.2" className="text-warning" fill="none" />
        <polygon points="726,182 734,182 730,189" className="fill-warning" />
        <text x="742" y="170" fontSize="3.8" fontWeight="700" className="fill-warning">tyrosine hydroxylase</text>
        <text x="742" y="177" fontSize="3.6" className="fill-muted-foreground">RATE-LIMITING step · KYP,</text>
        <text x="742" y="184" fontSize="3.6" className="fill-muted-foreground">not printed on this page</text>
        <rect x="640" y="189" width="180" height="24" rx="6" className="fill-secondary/40 stroke-border" />
        <text x="730" y="205" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-foreground">DOPA</text>
        <path d="M 730 213 L 730 235" stroke="currentColor" strokeWidth="1.2" className="text-warning" fill="none" />
        <polygon points="726,233 734,233 730,240" className="fill-warning" />
        <text x="742" y="221" fontSize="3.8" fontWeight="700" className="fill-warning">dopa decarboxylase</text>
        <text x="742" y="228" fontSize="3.6" className="fill-muted-foreground">KYP, not printed</text>
        <rect x="640" y="240" width="180" height="24" rx="6" className="fill-secondary/40 stroke-border" />
        <text x="730" y="256" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-foreground">Dopamine</text>
        <path d="M 730 264 L 730 286" stroke="currentColor" strokeWidth="1.2" className="text-warning" fill="none" />
        <polygon points="726,284 734,284 730,291" className="fill-warning" />
        <text x="742" y="272" fontSize="3.8" fontWeight="700" className="fill-warning">dopamine β-hydroxylase</text>
        <text x="742" y="279" fontSize="3.6" className="fill-muted-foreground">vesicular · KYP, not printed</text>
        <rect x="640" y="291" width="180" height="24" rx="6" className="fill-warning-soft stroke-warning" strokeWidth="1.3" />
        <text x="730" y="307" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-foreground">NE — norepinephrine</text>
        <path d="M 730 315 L 730 326" stroke="currentColor" strokeWidth="1.2" className="text-warning" fill="none" />
        <polygon points="726,324 734,324 730,331" className="fill-warning" />
        {/* vesicle */}
        <ellipse cx="730" cy="348" rx="56" ry="16" className="fill-card stroke-foreground" strokeWidth="1.1" />
        <text x="730" y="346" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-foreground">NE (vesicle)</text>
        <text x="730" y="355" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">VMAT-packed</text>
        <path d="M 730 364 L 730 384" stroke="currentColor" strokeWidth="1.2" className="text-warning" fill="none" />
        <polygon points="726,382 734,382 730,389" className="fill-warning" />
        <text x="742" y="374" fontSize="4.4" fontWeight="700" className="fill-foreground">Ca2+ influx</text>
        <rect x="640" y="389" width="180" height="26" rx="6" className="fill-warning-soft stroke-warning" strokeWidth="1.2" />
        <text x="730" y="406" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-foreground">Exocytosis → NE into the cleft</text>
        <text x="632" y="152" fontSize="3.8" className="fill-muted-foreground" textAnchor="end">the substrate:</text>
        <text x="632" y="159" fontSize="3.8" className="fill-muted-foreground" textAnchor="end">essential amino</text>
        <text x="632" y="166" fontSize="3.8" className="fill-muted-foreground" textAnchor="end">acid (dietary)</text>
        {/* drug card A — noradrenergic stimulant at the store */}
        <rect x="844" y="240" width="104" height="82" rx="7" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
        <text x="896" y="253" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">NORADRENERGIC</text>
        <text x="896" y="261" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">STIMULANT — at the store</text>
        <text x="896" y="272" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-warning">Amphetamine,</text>
        <text x="896" y="281" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-warning">Ephedrine</text>
        <text x="896" y="291" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">displace NE from the vesicle</text>
        <text x="896" y="298" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">(rule 2, steps 1–3: NET → VMAT</text>
        <text x="896" y="305" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">→ displacement)</text>
        <text x="896" y="317" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the printed slot: the vesicle</text>
        <path d="M 844 300 L 804 334" stroke="currentColor" strokeWidth="1.1" className="text-warning" fill="none" />
        <polygon points="808,330 801,326 800,337" className="fill-warning" />
        {/* drug card B — VMAT inhibitor */}
        <rect x="844" y="330" width="104" height="82" rx="7" className="fill-emergency-soft/60 stroke-emergency" strokeWidth="1.1" />
        <text x="896" y="343" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">VMAT INHIBITOR</text>
        <text x="896" y="352" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">Vesicular monoamine</text>
        <text x="896" y="358" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">transporter (VMAT) inhibitor</text>
        <text x="896" y="369" textAnchor="middle" fontSize="5.8" fontWeight="800" className="fill-foreground">Tetrabenazine</text>
        <text x="896" y="379" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">⊣ empties the store —</text>
        <text x="896" y="386" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">NO expulsion (transmission ↓</text>
        <text x="896" y="393" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">— Huntington chorea, KYP)</text>
        <text x="896" y="404" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the printed slot: the vesicle</text>
        <path d="M 844 371 L 804 358" stroke="currentColor" strokeWidth="1.1" className="text-emergency" fill="none" />
        <polygon points="808,354 800,354 804,363" className="fill-emergency" />
        {/* modulator card */}
        <rect x="508" y="330" width="128" height="112" rx="7" className="fill-secondary/40 stroke-border" />
        <text x="572" y="344" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">RELEASE-MODULATING</text>
        <text x="572" y="352" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">RECEPTORS</text>
        <text x="572" y="364" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-warning">α2 — the autoreceptor</text>
        <text x="572" y="373" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">⊖ NEGATIVE FEEDBACK (rule 1:</text>
        <text x="572" y="380" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">NE turns itself down)</text>
        <text x="572" y="392" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">AT II — facilitates ⊕</text>
        <text x="572" y="404" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">KYP drug layer (none printed):</text>
        <text x="572" y="411" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">clonidine agonizes α2</text>
        <text x="572" y="418" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">(↓ outflow); yohimbine blocks</text>
        <text x="572" y="425" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">it (↑ outflow)</text>
        <text x="572" y="437" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the printed slot: the release step</text>
        <path d="M 636 424 Q 680 424 680 416" stroke="currentColor" strokeWidth="1.1" className="text-warning" fill="none" />
        <polygon points="676,419 684,419 680,409" className="fill-warning" />
        {/* cleft band */}
        <rect x="504" y="462" width="440" height="34" rx="6" className="fill-secondary/30 stroke-border" strokeDasharray="4 3" />
        <text x="724" y="483" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">THE SYNAPTIC CLEFT — NE</text>
        {/* receptors */}
        <text x="724" y="514" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-foreground">Adrenoreceptors</text>
        <rect x="654" y="520" width="60" height="24" rx="5" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
        <text x="684" y="536" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">α</text>
        <rect x="734" y="520" width="60" height="24" rx="5" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
        <text x="764" y="536" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">β</text>
        {/* postsynaptic bar */}
        <rect x="504" y="550" width="440" height="28" rx="6" className="fill-card stroke-foreground" strokeWidth="1.1" />
        <text x="724" y="568" textAnchor="middle" fontSize="6.6" fontWeight="800" className="fill-foreground">POSTSYNAPTIC NEURON</text>
        <text x="512" y="592" fontSize="4.2" className="fill-muted-foreground">the letters one page back (book 237, PH16): α1 q · α2 i · β1 s · β2 s · β3 s — the autoreceptor α2 is the same i lane</text>
        <text x="512" y="601" fontSize="4.2" className="fill-muted-foreground">the addresses on book 236 (PH15): vessels α1 · heart β1 · airways β2 · bladder β3 — the plate PH11 wired to every organ</text>
        {/* take back row */}
        <rect x="524" y="614" width="100" height="34" rx="6" className="fill-secondary/40 stroke-border" />
        <text x="574" y="628" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-foreground">NET</text>
        <text x="574" y="640" textAnchor="middle" fontSize="4" className="fill-muted-foreground">Reuptake — the pump</text>
        <rect x="644" y="608" width="140" height="88" rx="7" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
        <text x="714" y="621" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">NORADRENERGIC STIMULANT</text>
        <text x="714" y="629" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">— at the pump (the printed list)</text>
        <text x="714" y="640" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-warning">Amphetamine, SNRIs,</text>
        <text x="714" y="649" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-warning">Cocaine, TCAs, MDMA</text>
        <text x="714" y="660" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">⊣ block reuptake → cleft NE persists;</text>
        <text x="714" y="667" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">amphetamine alone ALSO rides NET in</text>
        <text x="714" y="674" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">and reverses it (rule 2) — expulsion</text>
        <text x="714" y="687" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the printed slot: the NET step</text>
        <path d="M 644 648 L 630 648" stroke="currentColor" strokeWidth="1.1" className="text-warning" fill="none" />
        <polygon points="632,644 632,652 625,648" className="fill-warning" />
        <rect x="800" y="614" width="140" height="52" rx="7" className="fill-secondary/40 stroke-border" />
        <text x="870" y="630" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">THE OTHER WAY OUT</text>
        <text x="870" y="644" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-foreground">Diffusion, metabolism</text>
        <text x="870" y="656" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">the printed overflow route —</text>
        <text x="870" y="663" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">NE has no cleft enzyme (unlike ACh)</text>
        {/* the right lane's forks */}
        <rect x="504" y="706" width="440" height="66" rx="8" className="fill-secondary/20" />
        <text x="512" y="722" fontSize="5.2" fontWeight="800" className="fill-foreground">THE RIGHT LANE&apos;S THREE FORKS AT THE VESICLE AND THE PUMP (all printed)</text>
        <text x="512" y="736" fontSize="4.3" className="fill-foreground">Tetrabenazine empties the store with NO expulsion (↓ transmission) · Amphetamine/Ephedrine displace AND reverse NET (↑↑ NE, rule 2)</text>
        <text x="512" y="748" fontSize="4.3" className="fill-foreground">Cocaine/TCAs/SNRIs/MDMA park on NET — nothing expelled, reuptake blocked (↑ cleft NE) · the REVERSAL step is the fingerprint</text>
        <text x="512" y="762" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">what the exam asks of this lane: which slot (vesicle vs pump), then which relationship to the pump (passes through vs parks on).</text>
        {/* adrenal flag */}
        <rect x="504" y="782" width="440" height="28" rx="6" className="fill-secondary/30" />
        <text x="724" y="793" textAnchor="middle" fontSize="4.1" fontWeight="800" className="fill-foreground">NOT ON THIS PAGE (VLM-verified): the adrenal Epi branch — NE → epinephrine via PNMT in the adrenal medulla — is the book&apos;s own limb</text>
        <text x="724" y="802" textAnchor="middle" fontSize="4.1" fontWeight="800" className="fill-foreground">on book 234&apos;s overview (PH11): THIS LANE ENDS AT NE · the enzyme layer (tyrosine hydroxylase · dopa decarboxylase · dopamine β-hydroxylase) is KYP-flagged</text>
      </g>

      {/* ===== AXONAL TERMINAL STRIP — DOPAMINERGIC + SEROTONERGIC ===== */}
      <g>
        <rect x="24" y="826" width="932" height="180" rx="10" className="fill-card stroke-border" />
        <text x="40" y="846" fontSize="7.4" fontWeight="800" className="fill-foreground">THE AXONAL TERMINAL STRIP — the DOPAMINERGIC and SEROTONERGIC lanes (the diagram&apos;s bottom lanes: same architecture, their own pumps)</text>
        {/* dopaminergic */}
        <rect x="32" y="856" width="456" height="140" rx="8" className="fill-success-soft/40 stroke-success" strokeWidth="1.1" />
        <text x="44" y="874" fontSize="6.2" fontWeight="800" className="fill-success">DOPAMINERGIC</text>
        <text x="44" y="888" fontSize="4.6" className="fill-foreground">Chain: Tyrosine → L-DOPA → Dopamine → vesicle → release → cleft</text>
        <text x="44" y="902" fontSize="4.6" className="fill-foreground">Pump: DAT — Reuptake (the lane&apos;s own transporter)</text>
        <text x="44" y="916" fontSize="4.6" className="fill-foreground">Plate: Dopamine receptor · POSTSYNAPTIC N EURO (the raw layer&apos;s own split)</text>
        <text x="44" y="932" fontSize="4.8" fontWeight="800" className="fill-foreground">Dopaminergic stimulant: Amphetamine, Methylphenidate, Cocaine</text>
        <text x="44" y="946" fontSize="4.2" className="fill-muted-foreground">methylphenidate is this lane&apos;s reuptake blocker (ADHD, KYP clinical layer); amphetamine</text>
        <text x="44" y="956" fontSize="4.2" className="fill-muted-foreground">runs the same Trojan-horse sequence here (rides DAT in, displaces, reverses)</text>
        <text x="44" y="976" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">note the printed chain says L-DOPA here where the main lane prints DOPA</text>
        {/* serotonergic */}
        <rect x="492" y="856" width="456" height="140" rx="8" className="fill-neural-soft/40 stroke-neural" strokeWidth="1.1" />
        <text x="504" y="874" fontSize="6.2" fontWeight="800" className="fill-neural">SEROTONERGIC</text>
        <text x="504" y="888" fontSize="4.6" className="fill-foreground">Chain: Tryptophan → 5-Hydroxytryptophan → 5-HT → vesicle → release → cleft</text>
        <text x="504" y="902" fontSize="4.6" className="fill-foreground">Pump: SERT — Reuptake (the lane&apos;s own transporter)</text>
        <text x="504" y="916" fontSize="4.6" className="fill-foreground">Plate: 5-HT receptor · POSTSYNAPTIC N EURO</text>
        <text x="504" y="932" fontSize="4.8" fontWeight="800" className="fill-foreground">Serotonergic stimulant: Amphetamine, SNRIs, Cocaine, SSRIs</text>
        <text x="504" y="946" fontSize="4.2" className="fill-muted-foreground">SSRIs are this lane&apos;s reuptake blockers (the antidepressant arm, KYP clinical layer);</text>
        <text x="504" y="956" fontSize="4.2" className="fill-muted-foreground">MDMA&apos;s printed home is the NET list — its serotonergic action is the SERT arm</text>
        <text x="504" y="976" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">tryptophan, not tyrosine — the only lane whose substrate is not an amino-acid twin of its transmitter family</text>
      </g>

      {/* ===== THE FIVE SLOTS ===== */}
      <g>
        <rect x="24" y="1016" width="932" height="150" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="1034" fontSize="7.4" fontWeight="800" className="fill-brand">THE FIVE SLOTS — the drug-target grid (KYP slot names; every step and list the page&apos;s own)</text>
        <rect x="32" y="1044" width="176" height="112" rx="6" className="fill-secondary/30" />
        <text x="40" y="1058" fontSize="5.2" fontWeight="800" className="fill-foreground">1 · MAKE</text>
        <text x="40" y="1070" fontSize="4" className="fill-foreground">ACh: Choline + Acetyl-CoA</text>
        <text x="40" y="1078" fontSize="4" className="fill-foreground">→(ChAT — printed)→ ACh</text>
        <text x="40" y="1090" fontSize="4" className="fill-foreground">NE: Tyrosine → DOPA →</text>
        <text x="40" y="1098" fontSize="4" className="fill-foreground">Dopamine → NE (enzymes</text>
        <text x="40" y="1106" fontSize="4" className="fill-foreground">NOT printed — KYP layer)</text>
        <text x="40" y="1122" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">block the maker (KYP: α-methyl-</text>
        <text x="40" y="1129" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">tyrosine) → signal falls</text>
        <rect x="216" y="1044" width="176" height="112" rx="6" className="fill-secondary/30" />
        <text x="224" y="1058" fontSize="5.2" fontWeight="800" className="fill-foreground">2 · PACK</text>
        <text x="224" y="1070" fontSize="4" className="fill-foreground">VMAT loads the vesicle</text>
        <text x="224" y="1078" fontSize="4" className="fill-foreground">(dopamine in, NE made inside)</text>
        <text x="224" y="1090" fontSize="4" className="fill-foreground">Tetrabenazine ⊣ empties the</text>
        <text x="224" y="1098" fontSize="4" className="fill-foreground">store — no expulsion</text>
        <text x="224" y="1110" fontSize="4" className="fill-foreground">Amphetamine ENTERS by VMAT</text>
        <text x="224" y="1118" fontSize="4" className="fill-foreground">(rule 2, step 2)</text>
        <text x="224" y="1134" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">ACh&apos;s vesicular loader is not</text>
        <text x="224" y="1141" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">printed on this page (KYP)</text>
        <rect x="400" y="1044" width="176" height="112" rx="6" className="fill-secondary/30" />
        <text x="408" y="1058" fontSize="5.2" fontWeight="800" className="fill-foreground">3 · RELEASE</text>
        <text x="408" y="1070" fontSize="4" className="fill-foreground">Ca2+ influx → exocytosis</text>
        <text x="408" y="1078" fontSize="4" className="fill-foreground">(both main lanes)</text>
        <text x="408" y="1090" fontSize="4" className="fill-foreground">Botulinum toxin ⊣ blocks ACh</text>
        <text x="408" y="1098" fontSize="4" className="fill-foreground">release (the inhibitor slot)</text>
        <text x="408" y="1110" fontSize="4" className="fill-foreground">α2 ⊖ brakes NE release (rule 1)</text>
        <text x="408" y="1118" fontSize="4" className="fill-foreground">AT II ⊕ facilitates it</text>
        <text x="408" y="1134" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">agonize the brake (clonidine)</text>
        <text x="408" y="1141" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">→ outflow falls (KYP)</text>
        <rect x="584" y="1044" width="176" height="112" rx="6" className="fill-secondary/30" />
        <text x="592" y="1058" fontSize="5.2" fontWeight="800" className="fill-foreground">4 · LISTEN</text>
        <text x="592" y="1070" fontSize="4" className="fill-foreground">the postsynaptic plates:</text>
        <text x="592" y="1082" fontSize="4.6" fontWeight="800" className="fill-brand">M1 · M2 · M3</text>
        <text x="592" y="1094" fontSize="4" className="fill-foreground">(Cholinoreceptors)</text>
        <text x="592" y="1108" fontSize="4.6" fontWeight="800" className="fill-warning">α · β</text>
        <text x="592" y="1118" fontSize="4" className="fill-foreground">(Adrenoreceptors)</text>
        <text x="592" y="1134" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the class letters: book 237 · the</text>
        <text x="592" y="1141" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">addresses: book 236 (cross-linked)</text>
        <rect x="768" y="1044" width="176" height="112" rx="6" className="fill-secondary/30" />
        <text x="776" y="1058" fontSize="5.2" fontWeight="800" className="fill-foreground">5 · TAKE BACK / BREAK</text>
        <text x="776" y="1070" fontSize="4" className="fill-foreground">ACh: AChE → Choline + Acetate</text>
        <text x="776" y="1078" fontSize="4" className="fill-foreground">donepezil ⊣ the breaker → ↑ ACh</text>
        <text x="776" y="1090" fontSize="4" className="fill-foreground">NE: NET Reuptake — cocaine,</text>
        <text x="776" y="1098" fontSize="4" className="fill-foreground">TCAs, SNRIs, MDMA ⊣ the pump</text>
        <text x="776" y="1110" fontSize="4" className="fill-foreground">amphetamine REVERSES the pump</text>
        <text x="776" y="1118" fontSize="4" className="fill-foreground">(rule 2, step 4) → NE expelled</text>
        <text x="776" y="1134" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">DAT (methylphenidate) · SERT (SSRIs)</text>
        <text x="776" y="1141" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">— the bottom lanes&apos; own pumps</text>
      </g>

      {/* ===== THE FOUR CODES ===== */}
      <g>
        <rect x="24" y="1178" width="932" height="100" rx="10" className="fill-card stroke-brand" />
        <text x="40" y="1196" fontSize="7.4" fontWeight="800" className="fill-brand">THE FOUR CODES — 1–2 compress the page&apos;s rules; 3–4 are the KYP reading frames</text>
        <text x="40" y="1212" fontSize="6.2" fontWeight="800" className="fill-foreground">1 · THE FIVE SLOTS — MAKE, PACK, RELEASE, LISTEN, TAKE BACK (the cholinergic lane swaps the last slot for BREAK)</text>
        <text x="40" y="1222" fontSize="4.8" className="fill-muted-foreground">name the slot before the drug — then the direction: block a SUPPLY route and the signal falls, block a CLEARANCE route and it rises</text>
        <text x="40" y="1236" fontSize="6.2" fontWeight="800" className="fill-foreground">2 · THE TROJAN HORSE — enters by the gate (NET), raids the store (VMAT), opens the gate backwards (NET reversed → NE expelled)</text>
        <text x="40" y="1246" fontSize="4.8" className="fill-muted-foreground">rule 2 compressed: the reuptake blockers park on the gate; tetrabenazine robs the store without opening it; only the Trojan horse does both</text>
        <text x="40" y="1260" fontSize="6.2" fontWeight="800" className="fill-foreground">3 · α2 THE THERMOSTAT — NE turns itself down; agonize it (clonidine) and the fire goes out, block it (yohimbine) and the fire roars; AT II props the fire up</text>
        <text x="40" y="1270" fontSize="6.2" fontWeight="800" className="fill-foreground">4 · ACh HAS A BREAKER, NE HAS A PUMP — the left lane clears by AChE (enzyme-inhibitor class), the right lane clears by NET (transporter-blocker class)</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="1290" width="932" height="96" rx="10" className="fill-card stroke-border" />
        <text x="490" y="1312" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">NAME THE TRANSMITTER → NAME THE SLOT (MAKE · PACK · RELEASE · LISTEN · TAKE BACK/BREAK) → READ THE DIRECTION → RUN THE DRUG</text>
        <text x="490" y="1328" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">Rule 1 and rule 2 verbatim from book 238 (pdf 260) — the flowchart is vector line art (zero rasters), never reproduced: an original KYP redraw</text>
        <text x="490" y="1340" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">KYP extensions flagged: the five-slots grid, the Trojan-horse and thermostat frames, the enzyme-name layer (not printed — ChAT is the only printed enzyme),</text>
        <text x="490" y="1352" textAnchor="middle" fontSize="5.4" className="fill-muted-foreground">the adrenal Epi branch (the book&apos;s own limb on book 234, PH11 — this lane ends at NE), and the clonidine/guanfacine/yohimbine drug layer (none printed)</text>
        <text x="490" y="1370" textAnchor="middle" fontSize="5.4" fontWeight="700" className="fill-muted-foreground">EXCLUDED: the completed g-protein-linked-second-messengers section on pdf 259 behind this page, and the pending Cholinomimetic agents section on pdf 261 ahead — the diagram does not extend to 261</text>
      </g>
    </svg>
  );
}

export function CholinomimeticAgentsMap() {
  const w = 980;
  const h = 1030;
  // An original KYP visual of the CHOLINOMIMETIC AGENTS section of book 239
  // (pdf 261, the UPPER portion of the page under the standing
  // 'PHARMACOLOGY—AUTONOMIC DRUGS' banner). Census (pdfimages + text
  // layer): the section prints TWO elements — ONE INTRO WARNING (prose,
  // verbatim: 'Watch for exacerbation of COPD, asthma, and peptic ulcers
  // in susceptible patients.') and ONE TWO-GROUP TABLE (DRUG / ACTION /
  // APPLICATIONS — 4 direct agonists + 4 indirect agonists/
  // anticholinesterases). RASTER CENSUS: ZERO rasters on pdf 261 — the
  // table is PURE TEXT, COPYRIGHTED, never reproduced as artwork; the
  // rows are carried VERBATIM in the note's two table blocks and conveyed
  // here as ONE original KYP fork map (ORIGINAL_KYP_ADAPTATION — every
  // drug name, action clause, application, and mnemonic is the book's
  // own; the fork layout, the charge grid, and the reading rule are
  // KYP's). KYP extensions flagged wherever they appear: the FORK
  // reading (DIRECT drugs BIND the plate; INDIRECT drugs BLOCK the
  // breaker — the compression of the page's own two group labels), the
  // CHARGE GRID (three printed rules + pilocarpine's crossing; the
  // bethanechol/carbachol/methacholine/donepezil-trio cells are NOT
  // printed — flagged), the END-ORGAN chips (addresses cross-referenced
  // from books 234–238, the completed autonomic block), and the
  // NOT-PRINTED drug layer (edrophonium and echothiophate are ABSENT
  // from this page — flagged). SAME-PAGE EXCLUSION: the
  // 'Anticholinesterase poisoning' section prints BELOW the table on the
  // SAME pdf 261 — EXCLUDED (the pending anticholinesterase-poisoning
  // topic); pdf 260 behind carries the completed autonomic-drugs topic
  // (its 'Cholinergic stimulant' anchor resolves here); pdf 262 ahead
  // opens the pending Muscarinic antagonists section — this section does
  // NOT extend to 262. Color code: DIRECT = brand (blue), INDIRECT =
  // neural (purple), the warning strip = emergency (red). JSX text uses
  // &gt; / &amp; / &apos; escapes where needed (no raw > or & appears in
  // text runs).
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Cholinomimetic agents — the fork map (an original KYP visual of the Cholinomimetic agents section, book 239, pdf 261, the upper portion of the page. ONE INTRO WARNING, verbatim: Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients. ONE TWO-GROUP TABLE, DRUG / ACTION / APPLICATIONS. THE FORK: DIRECT AGONISTS bind the muscarinic plate themselves (exogenous ligand, AChE-resistant — printed on bethanechol, carbachol, and pilocarpine — muscarinic-selective, no nicotinic activity) vs INDIRECT AGONISTS (ANTICHOLINESTERASES) block the breaker AChE so the patient&apos;s own acetylcholine accumulates (up-ACh, at muscarinic AND nicotinic sites — the neuromuscular-junction uses live only through this door). THE FOUR DIRECT CARDS: Bethanechol — Activates bladder smooth muscle; resistant to AChE; Acts on muscarinic receptors; no nicotinic activity; Bethany, call me to activate your bladder — Urinary retention. Carbachol — Carbon copy of acetylcholine (but resistant to AChE) — Constricts pupil, intraoperative miosis induction. Methacholine — Stimulates muscarinic receptors in airway when inhaled — Challenge test for diagnosis of asthma. Pilocarpine — Contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle glaucoma); resistant to AChE, can cross blood-brain barrier; You cry, drool, and sweat on your pilow — sweat, tears, and saliva; open-angle and closed-angle glaucoma; xerostomia (Sjogren syndrome). THE FOUR INDIRECT CARDS: Donepezil, rivastigmine, galantamine — up ACh — 1st line for Alzheimer disease (Dona Riva forgot the gala). Neostigmine — up ACh; Neo = no blood-brain barrier penetration due to positive charge — postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of neuromuscular junction blockade. Pyridostigmine — up ACh, up muscle strength; Does not penetrate CNS; Pyridostigmine gets rid of myasthenia gravis — myasthenia gravis (long acting), with glycopyrrolate or hyoscyamine to control adverse effects. Physostigmine — up ACh; Phreely (freely) crosses blood-brain barrier as not charged to CNS — Antidote for anticholinergic toxicity; physostigmine phyxes atropine overdose. THE CHARGE GRID (three printed rules; the quaternary/tertiary words and the unprinted cells are KYP, flagged), the verbatim toxicity strip, and the reading-rule + exclusions footer. The fork reading, the charge grid, the end-organ receptor map (addresses cross-referenced from books 234-238), and the not-printed drug layer (edrophonium and echothiophate are absent from this page) are KYP extensions, flagged; the table is pure text with zero rasters, never reproduced — an original KYP adaptation; the Anticholinesterase poisoning section on the SAME book-239 page below the table (the pending anticholinesterase-poisoning topic), the completed autonomic-drugs section on pdf 260 behind, and the Muscarinic antagonists section on pdf 262 ahead are EXCLUDED, separate topics)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Cholinomimetic agents — the fork map (original KYP visual of book 239)</text>
        <rect x="700" y="24" width="232" height="18" rx="4" className="fill-brand-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">1 warning · 2 groups · 8 drugs · 1 fork</text>
      </g>

      {/* ===== THE FORK HEADER ===== */}
      <g>
        <rect x="24" y="74" width="932" height="132" rx="10" className="fill-card stroke-border" />
        <text x="490" y="94" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">THE FORK — one synapse (the cholinergic lane book 238 drew), two doors for eight drugs</text>
        <text x="490" y="108" textAnchor="middle" fontSize="5" className="fill-muted-foreground">the target: ACh → Cholinoreceptors M1 · M2 · M3 (the plate) · AChE → Choline + Acetate (the breaker, the cleft&apos;s clearance enzyme)</text>
        {/* door 1 — direct */}
        <rect x="40" y="120" width="432" height="70" rx="8" className="fill-brand-soft/40 stroke-brand" strokeWidth="1.2" />
        <text x="56" y="136" fontSize="6.4" fontWeight="800" className="fill-brand">DOOR 1 — DIRECT: the drug BINDS the plate</text>
        <text x="56" y="150" fontSize="4.2" className="fill-foreground">its own ligand at the muscarinic receptor — no dependence on neuronal firing (works on a quiet synapse)</text>
        <text x="56" y="161" fontSize="4.2" className="fill-foreground">survives the breaker: &apos;resistant to AChE&apos; (printed on bethanechol, carbachol, pilocarpine)</text>
        <text x="56" y="172" fontSize="4.2" className="fill-foreground">muscarinic-selective: &apos;no nicotinic activity&apos; (bethanechol, printed) — ganglia and the NMJ untouched</text>
        <text x="56" y="184" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the book&apos;s own label: &apos;Direct agonists&apos;</text>
        {/* door 2 — indirect */}
        <rect x="508" y="120" width="432" height="70" rx="8" className="fill-neural-soft/40 stroke-neural" strokeWidth="1.2" />
        <text x="524" y="136" fontSize="6.4" fontWeight="800" className="fill-neural">DOOR 2 — INDIRECT: the drug BLOCKS the breaker</text>
        <text x="524" y="150" fontSize="4.2" className="fill-foreground">inhibits AChE → &apos;↑ ACh.&apos; — the patient&apos;s OWN transmitter accumulates (amplification, not substitution)</text>
        <text x="524" y="161" fontSize="4.2" className="fill-foreground">muscarinic AND nicotinic sites — the NMJ uses (myasthenia, blockade reversal) live only through this door</text>
        <text x="524" y="172" fontSize="4.2" className="fill-foreground">needs an intact, firing synapse — an empty cleft gives it nothing to preserve (botulism corollary)</text>
        <text x="524" y="184" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the book&apos;s own label: &apos;Indirect agonists (anticholinesterases)&apos;</text>
        {/* fork arrows down to the two panels */}
        <path d="M 256 190 L 256 210" stroke="currentColor" strokeWidth="1.4" className="text-brand" fill="none" />
        <polygon points="251,208 261,208 256,215" className="fill-brand" />
        <path d="M 724 190 L 724 210" stroke="currentColor" strokeWidth="1.4" className="text-neural" fill="none" />
        <polygon points="719,208 729,208 724,215" className="fill-neural" />
      </g>

      {/* ===== LEFT PANEL — DIRECT AGONISTS ===== */}
      <g>
        <rect x="24" y="216" width="464" height="486" rx="10" className="fill-card stroke-brand" strokeWidth="1.4" />
        <text x="40" y="238" fontSize="8" fontWeight="800" className="fill-foreground">THE DIRECT AGONISTS — the drug IS the ligand</text>
        <text x="40" y="250" fontSize="4.4" className="fill-muted-foreground">the book&apos;s own group label: &apos;Direct agonists&apos; · four rows, four addresses, every ACTION/APPLICATIONS cell verbatim</text>
        {/* card 1 — Bethanechol */}
        <rect x="36" y="262" width="440" height="100" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="48" y="278" fontSize="6.8" fontWeight="800" className="fill-brand">BETHANECHOL</text>
        <rect x="356" y="268" width="108" height="13" rx="3" className="fill-brand-soft" />
        <text x="410" y="277.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-brand">the bladder</text>
        <text x="48" y="292" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ACTION (verbatim):</text>
        <text x="48" y="301" fontSize="4" className="fill-foreground">&apos;Activates bladder smooth muscle; resistant to AChE. Acts on muscarinic receptors; no</text>
        <text x="48" y="309" fontSize="4" className="fill-foreground">nicotinic activity.&apos; — the selectivity clause is the group&apos;s rule (printed on this row)</text>
        <text x="48" y="326" fontSize="4.3" fontWeight="700" className="fill-foreground">USE: &apos;Urinary retention.&apos; (postoperative / neurogenic — the M3 detrusor wiring of book 235)</text>
        <text x="48" y="342" fontSize="3.8" className="fill-muted-foreground">“Bethany, call me to activate your bladder.” — the book&apos;s own mnemonic</text>
        <text x="48" y="352" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">no nicotinic activity → no ganglionic, no NMJ effects (the exam&apos;s clause)</text>
        {/* card 2 — Carbachol */}
        <rect x="36" y="370" width="440" height="100" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="48" y="386" fontSize="6.8" fontWeight="800" className="fill-brand">CARBACHOL</text>
        <rect x="356" y="376" width="108" height="13" rx="3" className="fill-brand-soft" />
        <text x="410" y="385.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-brand">the carbon copy</text>
        <text x="48" y="400" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ACTION (verbatim):</text>
        <text x="48" y="409" fontSize="4" className="fill-foreground">&apos;Carbon copy of acetylcholine (but resistant to AChE).&apos; — the printed etymology: the copy the</text>
        <text x="48" y="417" fontSize="4" className="fill-foreground">breaker cannot hydrolyze (carbachol ≈ carbamyl + choline — KYP etymology flag)</text>
        <text x="48" y="434" fontSize="4.3" fontWeight="700" className="fill-foreground">USE: &apos;Constricts pupil. Used for intraoperative miosis induction.&apos; (the ophthalmic address)</text>
        <text x="48" y="450" fontSize="3.8" className="fill-muted-foreground">the direct row with the shortest cell — and the only direct drug printed without a mnemonic</text>
        <text x="48" y="460" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">charge NOT printed (KYP flag) — quaternary, peripheral</text>
        {/* card 3 — Methacholine */}
        <rect x="36" y="478" width="440" height="100" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="48" y="494" fontSize="6.8" fontWeight="800" className="fill-brand">METHACHOLINE</text>
        <rect x="356" y="484" width="108" height="13" rx="3" className="fill-brand-soft" />
        <text x="410" y="493.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-brand">the airway challenge</text>
        <text x="48" y="508" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ACTION (verbatim):</text>
        <text x="48" y="517" fontSize="4" className="fill-foreground">&apos;Stimulates muscarinic receptors in airway when inhaled.&apos; — organ and route printed together:</text>
        <text x="48" y="525" fontSize="4" className="fill-foreground">the inhaled muscarinic agonist of bronchial smooth muscle (the M3 airway address)</text>
        <text x="48" y="542" fontSize="4.3" fontWeight="700" className="fill-foreground">USE: &apos;Challenge test for diagnosis of asthma.&apos; (bronchial provocation under monitoring)</text>
        <text x="48" y="558" fontSize="3.8" className="fill-muted-foreground">the paradox card: the class warning&apos;s bronchospasm, PROVOKED on purpose as the diagnostic</text>
        <text x="48" y="568" fontSize="3.8" className="fill-muted-foreground">signal — toxicity and test are the same pharmacology, opposite directions (KYP frame)</text>
        {/* card 4 — Pilocarpine */}
        <rect x="36" y="586" width="440" height="100" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="48" y="602" fontSize="6.8" fontWeight="800" className="fill-brand">PILOCARPINE</text>
        <rect x="356" y="592" width="108" height="13" rx="3" className="fill-brand-soft" />
        <text x="410" y="601.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-brand">the pilow</text>
        <text x="48" y="616" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ACTION (verbatim):</text>
        <text x="48" y="625" fontSize="4" className="fill-foreground">&apos;Contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle</text>
        <text x="48" y="633" fontSize="4" className="fill-foreground">glaucoma); resistant to AChE, can cross blood-brain barrier.&apos; (raw layer prints &apos;bloodbrain&apos;)</text>
        <text x="48" y="650" fontSize="4.3" fontWeight="700" className="fill-foreground">USE: sweat, tears, and saliva · open-angle and closed-angle glaucoma · xerostomia (Sjögren)</text>
        <text x="48" y="666" fontSize="3.8" className="fill-muted-foreground">“You cry, drool, and sweat on your ‘pilow.’” — the book&apos;s own mnemonic</text>
        <text x="48" y="676" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the only direct drug printed as crossing the BBB</text>
      </g>

      {/* ===== RIGHT PANEL — INDIRECT AGONISTS ===== */}
      <g>
        <rect x="492" y="216" width="464" height="486" rx="10" className="fill-card stroke-neural" strokeWidth="1.4" />
        <text x="508" y="238" fontSize="8" fontWeight="800" className="fill-foreground">THE INDIRECT AGONISTS (ANTICHOLINESTERASES) — block the breaker</text>
        <text x="508" y="250" fontSize="4.4" className="fill-muted-foreground">the book&apos;s own group label: &apos;Indirect agonists (anticholinesterases)&apos; · one mechanism (&apos;↑ ACh.&apos;), four reaches</text>
        {/* card 1 — the donepezil trio */}
        <rect x="504" y="262" width="440" height="100" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="516" y="278" fontSize="6.8" fontWeight="800" className="fill-neural">DONEPEZIL · RIVASTIGMINE · GALANTAMINE</text>
        <rect x="824" y="268" width="108" height="13" rx="3" className="fill-neural-soft" />
        <text x="878" y="277.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-neural">the dementia trio</text>
        <text x="516" y="292" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ACTION (verbatim):</text>
        <text x="516" y="301" fontSize="4" className="fill-foreground">&apos;↑ ACh.&apos; — the whole printed ACTION cell (two characters: the indirect mechanism entire)</text>
        <text x="516" y="309" fontSize="4" className="fill-foreground">charge NOT printed (KYP flag: crosses the BBB — which the cortical use requires)</text>
        <text x="516" y="326" fontSize="4.3" fontWeight="700" className="fill-foreground">USE: &apos;1st line for Alzheimer disease&apos; — the cortical ACh-deficit indication</text>
        <text x="516" y="342" fontSize="3.8" className="fill-muted-foreground">(Dona Riva forgot the gala). — the book&apos;s own mnemonic, verbatim</text>
        <text x="516" y="352" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the trio carries the three names the exam rotates through the same answer line</text>
        {/* card 2 — Neostigmine */}
        <rect x="504" y="370" width="440" height="100" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="516" y="386" fontSize="6.8" fontWeight="800" className="fill-neural">NEOSTIGMINE</text>
        <rect x="824" y="376" width="108" height="13" rx="3" className="fill-neural-soft" />
        <text x="878" y="385.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-neural">the peripheral workhorse</text>
        <text x="516" y="400" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ACTION (verbatim):</text>
        <text x="516" y="409" fontSize="4" className="fill-foreground">&apos;↑ ACh. Neo = no blood-brain barrier penetration due to positive charge.&apos; — printed charge</text>
        <text x="516" y="417" fontSize="4" className="fill-foreground">rule 1 of 3: the positive charge keeps it OUT of the CNS (peripheral-only by design)</text>
        <text x="516" y="434" fontSize="4.3" fontWeight="700" className="fill-foreground">USE: postoperative and neurogenic ileus and urinary retention · myasthenia gravis ·</text>
        <text x="516" y="443" fontSize="4.3" fontWeight="700" className="fill-foreground">reversal of neuromuscular junction blockade (postoperative) — gut, bladder, NMJ</text>
        <text x="516" y="460" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the printed retention overlap: this row and bethanechol treat the SAME indication, by different forks</text>
        {/* card 3 — Pyridostigmine */}
        <rect x="504" y="478" width="440" height="100" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="516" y="494" fontSize="6.8" fontWeight="800" className="fill-neural">PYRIDOSTIGMINE</text>
        <rect x="824" y="484" width="108" height="13" rx="3" className="fill-neural-soft" />
        <text x="878" y="493.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-neural">long-acting MG</text>
        <text x="516" y="508" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ACTION (verbatim):</text>
        <text x="516" y="517" fontSize="4" className="fill-foreground">&apos;↑ ACh; ↑ muscle strength. Does not penetrate CNS. Pyridostigmine gets rid of myasthenia</text>
        <text x="516" y="525" fontSize="4" className="fill-foreground">gravis.&apos; — printed charge rule 2 + the book&apos;s own mnemonic (the NMJ outcome printed)</text>
        <text x="516" y="542" fontSize="4.3" fontWeight="700" className="fill-foreground">USE: &apos;Myasthenia gravis (long acting). Used with glycopyrrolate or hyoscyamine to control</text>
        <text x="516" y="551" fontSize="4.3" fontWeight="700" className="fill-foreground">pyridostigmine adverse effects.&apos; — the chronic mainstay + the printed antimuscarinic cover</text>
        <text x="516" y="568" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the co-therapy is the NEXT page&apos;s class arriving early (muscarinic antagonists, book 240)</text>
        {/* card 4 — Physostigmine */}
        <rect x="504" y="586" width="440" height="100" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="516" y="602" fontSize="6.8" fontWeight="800" className="fill-neural">PHYSOSTIGMINE</text>
        <rect x="824" y="592" width="108" height="13" rx="3" className="fill-neural-soft" />
        <text x="878" y="601.5" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-neural">the antidote</text>
        <text x="516" y="616" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ACTION (verbatim):</text>
        <text x="516" y="625" fontSize="4" className="fill-foreground">&apos;↑ ACh. Phreely (freely) crosses blood-brain barrier as not charged → CNS.&apos; — printed</text>
        <text x="516" y="633" fontSize="4" className="fill-foreground">charge rule 3, inverted: uncharged = CNS entry (the only uncharged -stigmine)</text>
        <text x="516" y="650" fontSize="4.3" fontWeight="700" className="fill-foreground">USE: &apos;Antidote for anticholinergic toxicity; physostigmine “phyxes” atropine overdose.&apos;</text>
        <text x="516" y="666" fontSize="3.8" className="fill-muted-foreground">the use that REQUIRES central entry — the central antimuscarinic syndrome needs a CNS-reaching drug</text>
        <text x="516" y="676" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the charged pair (neo/pyrido) are the wrong-answer set for the antidote question</text>
      </g>

      {/* ===== THE CHARGE GRID ===== */}
      <g>
        <rect x="24" y="714" width="932" height="104" rx="10" className="fill-card stroke-neural" />
        <text x="40" y="734" fontSize="7.4" fontWeight="800" className="fill-neural">THE CHARGE GRID — the page&apos;s three printed charge rules, one grid (the quaternary/tertiary words and the unprinted cells are KYP, flagged)</text>
        {/* charged half */}
        <rect x="36" y="742" width="440" height="62" rx="6" className="fill-secondary/20" />
        <text x="44" y="756" fontSize="5.2" fontWeight="800" className="fill-foreground">CHARGED (quaternary amine — KYP word) → NO CNS entry, peripheral only</text>
        <text x="44" y="770" fontSize="4.2" className="fill-foreground">NEOSTIGMINE — &apos;no blood-brain barrier penetration due to positive charge&apos; (printed)</text>
        <text x="44" y="780" fontSize="4.2" className="fill-foreground">PYRIDOSTIGMINE — &apos;Does not penetrate CNS&apos; (printed)</text>
        <text x="44" y="794" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the printed payoff: gut, bladder, and NMJ indications — never the antidote line</text>
        {/* uncharged half */}
        <rect x="504" y="742" width="440" height="62" rx="6" className="fill-secondary/20" />
        <text x="512" y="756" fontSize="5.2" fontWeight="800" className="fill-foreground">UNCHARGED (tertiary amine — KYP word) → crosses the BBB</text>
        <text x="512" y="770" fontSize="4.2" className="fill-foreground">PHYSOSTIGMINE — &apos;not charged → CNS&apos; (printed) · PILOCARPINE — &apos;can cross blood-brain barrier&apos; (printed)</text>
        <text x="512" y="780" fontSize="4.2" className="fill-foreground">NOT PRINTED (KYP-flagged): the bethanechol/carbachol/methacholine charges · the donepezil trio&apos;s crossing</text>
        <text x="512" y="794" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the printed payoff: the anticholinergic-toxicity antidote needs the uncharged molecule</text>
      </g>

      {/* ===== THE TOXICITY STRIP ===== */}
      <g>
        <rect x="24" y="830" width="932" height="64" rx="10" className="fill-emergency-soft/60 stroke-emergency" strokeWidth="1.1" />
        <text x="490" y="848" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-emergency">THE CLASS WARNING, VERBATIM — &apos;Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.&apos;</text>
        <text x="490" y="862" textAnchor="middle" fontSize="4.4" className="fill-foreground">the muscarinic address list run backwards: airway smooth muscle tightens (COPD, asthma) · gastric acid and secretions rise (peptic ulcers)</text>
        <text x="490" y="876" textAnchor="middle" fontSize="4.4" className="fill-foreground">and the deliberate exception: methacholine PROVOKES the bronchospasm on purpose — &apos;Challenge test for diagnosis of asthma.&apos; (controlled provocation vs therapeutic exposure)</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="906" width="932" height="104" rx="10" className="fill-card stroke-border" />
        <text x="490" y="928" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">NAME THE FORK (direct binds · indirect blocks) → NAME THE ADDRESS (bladder · pupil · airway · eye + glands · cortex · periphery · NMJ · antidote) → RUN THE CHARGE RULE</text>
        <text x="490" y="944" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">Every drug name, action clause, application, and mnemonic is the book&apos;s own print (book 239, pdf 261) — the table is pure text (zero rasters), never reproduced: an original KYP adaptation</text>
        <text x="490" y="956" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">KYP extensions flagged: the fork reading, the charge grid (quaternary/tertiary words + the unprinted cells), the end-organ chips (addresses cross-referenced from books 234–238),</text>
        <text x="490" y="968" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">and the not-printed drug layer (edrophonium and echothiophate are ABSENT from this page — flagged, never cited as printed)</text>
        <text x="490" y="984" textAnchor="middle" fontSize="5.2" className="fill-muted-foreground">RAW-LAYER ARTIFACTS pinned: the group labels print BELOW their rows (&apos;Direct agonists&apos; after Pilocarpine) · Pilocarpine&apos;s cell prints &apos;bloodbrain&apos; hyphen-less (the -stigmine rows print &apos;blood-brain&apos;)</text>
        <text x="490" y="1002" textAnchor="middle" fontSize="5.4" fontWeight="700" className="fill-muted-foreground">EXCLUDED: the Anticholinesterase poisoning section on THIS SAME book-239 page below the table (the pending anticholinesterase-poisoning topic), the completed autonomic-drugs page on pdf 260 behind, and the Muscarinic antagonists section on pdf 262 ahead — this section does not extend to 262</text>
      </g>
    </svg>
  );
}

export function AnticholinesterasePoisoningMap() {
  const w = 980;
  const h = 1000;
  // An original KYP visual of the ANTICHOLINESTERASE POISONING section of
  // book 239 (pdf 261, the LOWER portion of the page under the standing
  // 'PHARMACOLOGY—AUTONOMIC DRUGS' banner, BELOW the Cholinomimetic
  // agents table of the excluded upper portion). Census (pdfimages +
  // text layer): the section prints TWO elements — ONE INTRO PAIR
  // (prose, verbatim: 'Often due to organophosphates (eg, fenthion,
  // parathion, malathion) that irreversibly inhibit AChE.' +
  // 'Organophosphates commonly used as insecticides; poisoning usually
  // seen in farmers.') and ONE THREE-ROW EFFECT-TIER TABLE (row label /
  // findings / high-yield, no column headers printed). RASTER CENSUS:
  // ZERO rasters on pdf 261 — the section is PURE TEXT, COPYRIGHTED,
  // never reproduced as artwork; the rows are carried VERBATIM in the
  // note's two table blocks and conveyed here as ONE original KYP
  // poison map (ORIGINAL_KYP_ADAPTATION — every row label, findings
  // clause, antidote clause, and the book's own DUMBBELSS mnemonic are
  // the book's own; the mechanism strip, the tier band, the coverage
  // maps, and the aging flag are KYP's). KYP extensions flagged
  // wherever they appear: the TIER-TRIAD reading, the AGING-TIME
  // WINDOW (the mechanism behind the printed 'if given early' is NOT
  // printed — 'aging' appears nowhere in part 1), the DUAL-ANTIDOTE
  // COVERAGE MAP (all four antidote clauses are printed; the map is
  // KYP's), the MIRROR-TOXIDROME frame, and the NOT-PRINTED layer
  // (carbamates, SLUDGE, nerve agents, ganglionic signs are ABSENT
  // from the page — flagged, never cited as printed). SAME-PAGE
  // EXCLUSION: the 'Cholinomimetic agents' section prints ABOVE this
  // section on the SAME pdf 261 (the completed cholinomimetic-agents
  // topic — its table ends with physostigmine, the anticholinergic
  // antidote, the mirror of this section's cholinergic story); pdf 262
  // ahead opens the pending Muscarinic antagonists section (atropine's
  // own page — this section does NOT extend to 262). Color code: the
  // poison and the CNS tier = emergency (red), muscarinic tier +
  // atropine = brand (blue), nicotinic tier + pralidoxime = neural
  // (purple). JSX text uses &gt; / &amp; / &apos; escapes where needed
  // (no raw > or & appears in text runs).
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Anticholinesterase poisoning — the cholinergic toxidrome map (an original KYP visual of the Anticholinesterase poisoning section, book 239, pdf 261, the lower portion of the page, below the Cholinomimetic agents table. ONE INTRO PAIR, verbatim: Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE. Organophosphates commonly used as insecticides; poisoning usually seen in farmers. ONE THREE-ROW EFFECT-TIER TABLE. THE MECHANISM STRIP: the farmer&apos;s exposure (the three -thion insecticides fenthion, parathion, malathion) to the irreversible phosphorylation of AChE (the breaker of book 238&apos;s synapse) to the acetylcholine flood at every cholinergic synapse. TIER 1, MUSCARINIC EFFECTS — the wet tier: Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation, spelled by the SOURCE&apos;s own mnemonic DUMBBELSS (double-S: Sweating + Salivation) — Reversed by atropine, a competitive inhibitor; Atropine can cross BBB to relieve CNS symptoms. TIER 2, NICOTINIC EFFECTS — the muscle tier: Neuromuscular blockade (mechanism similar to succinylcholine) — Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early; Must be coadministered with atropine to prevent transient worsening of symptoms; Pralidoxime does not readily cross BBB. TIER 3, CNS EFFECTS — the brain tier: Respiratory depression, lethargy, seizures, coma — printed without its own reversal line; atropine&apos;s BBB crossing is its cover. THE TREATMENT DUO: ATROPINE the shield at the plate (a competitive inhibitor at the muscarinic receptor, covering the muscarinic and CNS tiers, never the NMJ) and PRALIDOXIME the restorer of the breaker (dephosphorylation of the poisoned enzyme, covering the nicotinic NMJ tier) with the AGING-TIME WINDOW — given early, dephosphorylation regenerates the enzyme; after aging (the alkyl group lost, the bond permanent — KYP flag, not printed), it is useless. The not-printed strip (carbamates, SLUDGE, nerve agents, ganglionic signs — census-flagged as absent) and the reading-rule + exclusions footer. The tier-triad reading, the aging-time window, the dual-antidote coverage map, and the mirror-toxidrome frame are KYP extensions, flagged; the section is pure text with zero rasters, never reproduced — an original KYP adaptation; the Cholinomimetic agents section above on the same book-239 page, the autonomic-drugs page on pdf 260 behind, and the Muscarinic antagonists page on pdf 262 ahead are EXCLUDED, separate topics)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Anticholinesterase poisoning — the cholinergic toxidrome map (original KYP visual of book 239)</text>
        <rect x="700" y="24" width="232" height="18" rx="4" className="fill-emergency-soft" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency">1 poison · 3 tiers · 2 antidotes</text>
      </g>

      {/* ===== THE MECHANISM STRIP — THE POISON ===== */}
      <g>
        <rect x="24" y="72" width="932" height="134" rx="10" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="40" y="92" fontSize="8" fontWeight="800" className="fill-foreground">THE POISON — organophosphates irreversibly inhibit AChE → ACh floods every cholinergic synapse the facing page drew</text>
        <text x="40" y="104" fontSize="4.2" className="fill-muted-foreground">the book&apos;s own intro pair, verbatim: &apos;Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE. Organophosphates commonly used as insecticides; poisoning usually seen in farmers.&apos;</text>
        {/* step 1 — exposure */}
        <rect x="36" y="114" width="292" height="78" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="46" y="128" fontSize="5.4" fontWeight="800" className="fill-emergency">STEP 1 — THE EXPOSURE</text>
        <text x="46" y="141" fontSize="4.2" className="fill-foreground">the &apos;-thion&apos; trio (KYP rhyme on the printed names): fenthion · parathion · malathion</text>
        <text x="46" y="151" fontSize="4.2" className="fill-foreground">insecticides — the printed patient is the farmer; absorbed through skin, lungs, gut</text>
        <text x="46" y="161" fontSize="4.2" className="fill-foreground">(the soaked clothing of the spraying scenario is an ongoing dermal source)</text>
        <text x="46" y="181" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">printed: &apos;Organophosphates commonly used as insecticides; poisoning usually seen in farmers.&apos;</text>
        {/* step 2 — block */}
        <rect x="336" y="114" width="292" height="78" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="346" y="128" fontSize="5.4" fontWeight="800" className="fill-emergency">STEP 2 — PHOSPHORYLATE THE BREAKER</text>
        <text x="346" y="141" fontSize="4.2" className="fill-foreground">&apos;irreversibly inhibit AChE&apos; (printed) — the organophosphate phosphorylates the enzyme&apos;s</text>
        <text x="346" y="151" fontSize="4.2" className="fill-foreground">active site (phosphorylation = KYP word for the printed &apos;irreversibly inhibit&apos;); the cleft&apos;s</text>
        <text x="346" y="161" fontSize="4.2" className="fill-foreground">clearance step (book 238: AChE → Choline + Acetate) is dead — and the aging clock starts</text>
        <text x="346" y="181" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the therapeutic -stigmines of the upper table inhibit this enzyme REVERSIBLY — the poison does not</text>
        {/* step 3 — flood */}
        <rect x="636" y="114" width="308" height="78" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="646" y="128" fontSize="5.4" fontWeight="800" className="fill-emergency">STEP 3 — THE FLOOD</text>
        <text x="646" y="141" fontSize="4.2" className="fill-foreground">every released ACh quantum lingers — &apos;↑ ACh.&apos; pushed past the therapeutic window,</text>
        <text x="646" y="151" fontSize="4.2" className="fill-foreground">at every cholinergic address at once: muscarinic AND nicotinic AND central —</text>
        <text x="646" y="161" fontSize="4.2" className="fill-foreground">the receptor map of book 235 under flood (the three tiers below)</text>
        <text x="646" y="181" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">one mechanism, every address — which is why nothing is spared and the findings sort into tiers</text>
        {/* flow arrows between steps */}
        <path d="M 328 153 L 336 153" stroke="currentColor" strokeWidth="1.4" className="text-emergency" fill="none" />
        <polygon points="334,150 334,156 340,153" className="fill-emergency" />
        <path d="M 628 153 L 636 153" stroke="currentColor" strokeWidth="1.4" className="text-emergency" fill="none" />
        <polygon points="634,150 634,156 640,153" className="fill-emergency" />
      </g>

      {/* arrows down to the three tiers */}
      <path d="M 177 206 L 177 214" stroke="currentColor" strokeWidth="1.2" className="text-brand" fill="none" />
      <polygon points="173,213 181,213 177,217" className="fill-brand" />
      <path d="M 491 206 L 491 214" stroke="currentColor" strokeWidth="1.2" className="text-neural" fill="none" />
      <polygon points="487,213 495,213 491,217" className="fill-neural" />
      <path d="M 804 206 L 804 214" stroke="currentColor" strokeWidth="1.2" className="text-emergency" fill="none" />
      <polygon points="800,213 808,213 804,217" className="fill-emergency" />

      {/* ===== THE THREE TIER CARDS ===== */}
      {/* tier 1 — muscarinic */}
      <g>
        <rect x="24" y="216" width="306" height="310" rx="10" className="fill-card stroke-brand" strokeWidth="1.4" />
        <text x="40" y="238" fontSize="7.4" fontWeight="800" className="fill-foreground">TIER 1 · MUSCARINIC EFFECTS — the WET tier</text>
        <text x="40" y="250" fontSize="4.2" className="fill-muted-foreground">the book&apos;s own row label · the nine findings print in the mnemonic&apos;s own letter order</text>
        <text x="40" y="266" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">FINDINGS (verbatim):</text>
        <text x="40" y="276" fontSize="4.4" className="fill-foreground">&apos;Diarrhea, Urination, Miosis, Bronchospasm,</text>
        <text x="40" y="284" fontSize="4.4" className="fill-foreground">Bradycardia, Emesis, Lacrimation, Sweating,</text>
        <text x="40" y="292" fontSize="4.4" className="fill-foreground">Salivation.&apos;</text>
        <rect x="38" y="304" width="278" height="34" rx="5" className="fill-secondary/20" />
        <text x="48" y="318" fontSize="6.4" fontWeight="800" className="fill-brand">&apos;DUMBBELSS.&apos; — the SOURCE&apos;s own mnemonic</text>
        <text x="48" y="330" fontSize="3.8" className="fill-muted-foreground">double-S: Sweating + Salivation are separate letters (the page prints DUMBBELSS, not DUMBBELLS)</text>
        <text x="40" y="356" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">REVERSAL (verbatim):</text>
        <text x="40" y="366" fontSize="4.4" className="fill-foreground">&apos;Reversed by atropine, a competitive inhibitor.&apos;</text>
        <text x="40" y="374" fontSize="4.4" className="fill-foreground">&apos;Atropine can cross BBB to relieve CNS symptoms.&apos;</text>
        <text x="40" y="390" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the plate shield — receptor-level competition; also covers TIER 3 through the BBB</text>
        <text x="40" y="410" fontSize="4.2" fontWeight="800" className="fill-foreground">THE NINE, LETTER BY LETTER (the mnemonic spells its own list):</text>
        <text x="40" y="424" fontSize="3.9" className="fill-foreground">D — Diarrhea · U — Urination · M — Miosis</text>
        <text x="40" y="436" fontSize="3.9" className="fill-foreground">B — Bronchospasm · B — Bradycardia · E — Emesis</text>
        <text x="40" y="448" fontSize="3.9" className="fill-foreground">L — Lacrimation · S — Sweating · S — Salivation</text>
        <text x="40" y="468" fontSize="4.2" className="fill-foreground">the wet picture in one word: everything flows — pupils small (miosis), heart slow</text>
        <text x="40" y="478" fontSize="4.2" className="fill-foreground">(bradycardia), glands pouring (sweat, saliva, tears), gut cramping, bladder letting go</text>
        <text x="40" y="500" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">atropine&apos;s dosing endpoint: the dried patient — secretions clear, heart rate rises</text>
      </g>

      {/* tier 2 — nicotinic */}
      <g>
        <rect x="338" y="216" width="306" height="310" rx="10" className="fill-card stroke-neural" strokeWidth="1.4" />
        <text x="354" y="238" fontSize="7.4" fontWeight="800" className="fill-foreground">TIER 2 · NICOTINIC EFFECTS — the MUSCLE tier</text>
        <text x="354" y="250" fontSize="4.2" className="fill-muted-foreground">the book&apos;s own row label · the only tier whose reversal prints as a full protocol</text>
        <text x="354" y="266" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">FINDINGS (verbatim):</text>
        <text x="354" y="276" fontSize="4.4" className="fill-foreground">&apos;Neuromuscular blockade (mechanism similar</text>
        <text x="354" y="284" fontSize="4.4" className="fill-foreground">to succinylcholine).&apos;</text>
        <rect x="352" y="300" width="278" height="34" rx="5" className="fill-secondary/20" />
        <text x="362" y="313" fontSize="5.2" fontWeight="800" className="fill-neural">the succinylcholine kinship (the printed comparator)</text>
        <text x="362" y="326" fontSize="3.8" className="fill-muted-foreground">sustained depolarization → blockade — ACh EXCESS paralyzes exactly as ACh deficiency does</text>
        <text x="354" y="352" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">REVERSAL (verbatim):</text>
        <text x="354" y="362" fontSize="4.2" className="fill-foreground">&apos;Reversed by pralidoxime, regenerates AChE via dephosphorylation</text>
        <text x="354" y="370" fontSize="4.2" className="fill-foreground">if given early. Must be coadministered with atropine to prevent</text>
        <text x="354" y="378" fontSize="4.2" className="fill-foreground">transient worsening of symptoms. Pralidoxime does not readily</text>
        <text x="354" y="386" fontSize="4.2" className="fill-foreground">cross BBB.&apos;</text>
        <text x="354" y="404" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the breaker restorer — enzyme-level regeneration, the only drug that touches the poison itself</text>
        <text x="354" y="424" fontSize="4.2" fontWeight="800" className="fill-foreground">THE THREE PRINTED RIDERS:</text>
        <text x="354" y="438" fontSize="3.9" className="fill-foreground">1 · EARLY — &apos;if given early&apos; (the aging window behind it is KYP-flagged, not printed)</text>
        <text x="354" y="450" fontSize="3.9" className="fill-foreground">2 · TOGETHER — &apos;Must be coadministered with atropine to prevent transient worsening...&apos;</text>
        <text x="354" y="462" fontSize="3.9" className="fill-foreground">3 · NO CNS — &apos;does not readily cross BBB&apos; (the brain tier stays atropine&apos;s job)</text>
        <text x="354" y="482" fontSize="4.2" className="fill-foreground">the clinical face: fasciculations → weakness → respiratory failure —</text>
        <text x="354" y="492" fontSize="4.2" className="fill-foreground">the killer tier atropine cannot touch; the printed pair exists because of this row</text>
        <text x="354" y="512" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">weak WITH wetness = cholinergic crisis · weak WITHOUT wetness = myasthenic crisis</text>
      </g>

      {/* tier 3 — CNS */}
      <g>
        <rect x="652" y="216" width="304" height="310" rx="10" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="668" y="238" fontSize="7.4" fontWeight="800" className="fill-foreground">TIER 3 · CNS EFFECTS — the BRAIN tier</text>
        <text x="668" y="250" fontSize="4.2" className="fill-muted-foreground">the book&apos;s own row label · prints WITHOUT its own reversal line</text>
        <text x="668" y="266" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">FINDINGS (verbatim):</text>
        <text x="668" y="276" fontSize="4.4" className="fill-foreground">&apos;Respiratory depression, lethargy,</text>
        <text x="668" y="284" fontSize="4.4" className="fill-foreground">seizures, coma.&apos;</text>
        <rect x="666" y="300" width="276" height="34" rx="5" className="fill-secondary/20" />
        <text x="676" y="313" fontSize="5.2" fontWeight="800" className="fill-emergency">no reversal line printed for this row</text>
        <text x="676" y="326" fontSize="3.8" className="fill-muted-foreground">the cover is the muscarinic row&apos;s own clause — atropine&apos;s BBB crossing</text>
        <text x="668" y="352" fontSize="4.4" className="fill-foreground">&apos;Atropine can cross BBB to relieve CNS symptoms.&apos; — the</text>
        <text x="668" y="360" fontSize="4.4" className="fill-foreground">printed bridge from TIER 1 to TIER 3 (the same drug covers both)</text>
        <text x="668" y="378" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">pralidoxime cannot reach this tier: &apos;does not readily cross BBB&apos; (printed)</text>
        <text x="668" y="398" fontSize="4.2" fontWeight="800" className="fill-foreground">THE CLINICAL LADDER (KYP on the printed findings):</text>
        <text x="668" y="412" fontSize="3.9" className="fill-foreground">respiratory depression — the airway and ventilation decision (intubate)</text>
        <text x="668" y="424" fontSize="3.9" className="fill-foreground">lethargy — the between-sentences fading of the wet patient</text>
        <text x="668" y="436" fontSize="3.9" className="fill-foreground">seizures — the cortical threshold falling under the flood</text>
        <text x="668" y="448" fontSize="3.9" className="fill-foreground">coma — the end of the printed list</text>
        <text x="668" y="468" fontSize="4.2" className="fill-foreground">the exam&apos;s question on this row is coverage: which antidote reaches the</text>
        <text x="668" y="478" fontSize="4.2" className="fill-foreground">brain? — only atropine, by the printed reach-pair of the two rows</text>
        <text x="668" y="500" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the two BBB clauses are the page&apos;s own: atropine crosses · pralidoxime does not</text>
      </g>

      {/* arrows from tiers to the duo */}
      <path d="M 150 526 L 150 534" stroke="currentColor" strokeWidth="1.2" className="text-brand" fill="none" />
      <polygon points="146,533 154,533 150,537" className="fill-brand" />
      <path d="M 580 526 L 580 534" stroke="currentColor" strokeWidth="1.2" className="text-neural" fill="none" />
      <polygon points="576,533 584,533 580,537" className="fill-neural" />

      {/* ===== THE TREATMENT DUO ===== */}
      {/* atropine card */}
      <g>
        <rect x="24" y="536" width="456" height="286" rx="10" className="fill-card stroke-brand" strokeWidth="1.6" />
        <text x="40" y="560" fontSize="8" fontWeight="800" className="fill-brand">ATROPINE — THE SHIELD AT THE PLATE (the muscarinic blocker)</text>
        <text x="40" y="572" fontSize="4.2" className="fill-muted-foreground">the book&apos;s own words: &apos;Reversed by atropine, a competitive inhibitor.&apos; + &apos;Atropine can cross BBB to relieve CNS symptoms.&apos;</text>
        <text x="40" y="590" fontSize="4.6" fontWeight="800" className="fill-foreground">WHAT IT IS (printed mechanism): a COMPETITIVE INHIBITOR — receptor-level competition with the ACh flood</text>
        <text x="40" y="601" fontSize="4.2" className="fill-foreground">it does nothing to the poison or the dead enzyme — it holds the muscarinic plate while pralidoxime works</text>
        <text x="40" y="619" fontSize="4.6" fontWeight="800" className="fill-foreground">WHAT IT COVERS: TIER 1 (muscarinic) + TIER 3 (CNS)</text>
        <text x="40" y="630" fontSize="4.2" className="fill-foreground">the wet tier dries: secretions, bronchorrhea/bronchospasm, bradycardia, miosis (the DUMBBELSS list)</text>
        <text x="40" y="640" fontSize="4.2" className="fill-foreground">the brain tier lifts: lethargy, seizures, coma — through the BBB (the printed clause)</text>
        <text x="40" y="658" fontSize="4.6" fontWeight="800" className="fill-foreground">WHAT IT DOES NOT COVER: TIER 2 — the NMJ is a nicotinic address</text>
        <text x="40" y="669" fontSize="4.2" className="fill-foreground">a patient dry under atropine can still die of respiratory-muscle paralysis — the printed reason the pair exists</text>
        <text x="40" y="687" fontSize="4.6" fontWeight="800" className="fill-foreground">THE KYP WORKSITE FRAME: atropine works at the PLATE; pralidoxime works at the BREAKER</text>
        <text x="40" y="698" fontSize="4.2" className="fill-foreground">titrated to the dried patient — and it is the headlining drug of the NEXT page&apos;s table (book 240, Muscarinic antagonists)</text>
        <text x="40" y="724" fontSize="4" fontWeight="800" className="fill-muted-foreground">COVERAGE (KYP map on the printed clauses):</text>
        <rect x="40" y="732" width="138" height="26" rx="4" className="fill-brand-soft" />
        <text x="109" y="744" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-brand">TIER 1 muscarinic — COVERED</text>
        <text x="109" y="753" textAnchor="middle" fontSize="3.2" className="fill-brand">the wet tier dries</text>
        <rect x="186" y="732" width="138" height="26" rx="4" className="fill-secondary/20" />
        <text x="255" y="744" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">TIER 2 nicotinic/NMJ — NOT</text>
        <text x="255" y="753" textAnchor="middle" fontSize="3.2" className="fill-muted-foreground">muscle tier needs pralidoxime</text>
        <rect x="332" y="732" width="136" height="26" rx="4" className="fill-brand-soft" />
        <text x="400" y="744" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-brand">TIER 3 CNS — COVERED</text>
        <text x="400" y="753" textAnchor="middle" fontSize="3.2" className="fill-brand">through the BBB (printed)</text>
        <text x="40" y="778" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the dosing endpoint is clinical, not measured: repeat until the secretions clear and the rate rises —</text>
        <text x="40" y="789" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the printed charter is the muscarinic row&apos;s own clause (&apos;Reversed by atropine, a competitive inhibitor.&apos;)</text>
        <text x="40" y="811" fontSize="4.2" className="fill-foreground">with pralidoxime it travels as the printed pair — never solo, never substituted (see the card beside it)</text>
      </g>

      {/* pralidoxime card */}
      <g>
        <rect x="500" y="536" width="456" height="286" rx="10" className="fill-card stroke-neural" strokeWidth="1.6" />
        <text x="516" y="560" fontSize="8" fontWeight="800" className="fill-neural">PRALIDOXIME — THE RESTORER OF THE BREAKER (the AChE reactivator)</text>
        <text x="516" y="572" fontSize="4.2" className="fill-muted-foreground">the book&apos;s own words: &apos;Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early.&apos;</text>
        <text x="516" y="590" fontSize="4.6" fontWeight="800" className="fill-foreground">WHAT IT IS (printed mechanism): REGENERATES AChE via DEPHOSPHORYLATION — strips the phosphoryl group off the enzyme</text>
        <text x="516" y="601" fontSize="4.2" className="fill-foreground">the only enzyme-level move in the duo — it restores the breaker itself, where atropine only shields the plate</text>
        <text x="516" y="619" fontSize="4.6" fontWeight="800" className="fill-foreground">WHAT IT COVERS: TIER 2 (the nicotinic/NMJ tier) — fasciculations, weakness, the respiratory muscles</text>
        <text x="516" y="630" fontSize="4.2" className="fill-foreground">&apos;Must be coadministered with atropine to prevent transient worsening of symptoms.&apos; — the printed DUO RULE</text>
        <text x="516" y="640" fontSize="4.2" className="fill-foreground">&apos;Pralidoxime does not readily cross BBB.&apos; — the printed mirror of atropine&apos;s crossing</text>
        <text x="516" y="658" fontSize="4.6" fontWeight="800" className="fill-foreground">THE AGING-TIME WINDOW (the mechanism behind the printed &apos;if given early&apos;):</text>
        <rect x="522" y="666" width="202" height="36" rx="5" className="fill-neural-soft" />
        <text x="532" y="679" fontSize="4.4" fontWeight="800" className="fill-neural">GIVEN EARLY — regeneration works</text>
        <text x="532" y="690" fontSize="3.8" className="fill-neural">dephosphorylation restores the enzyme (printed)</text>
        <rect x="734" y="666" width="212" height="36" rx="5" className="fill-secondary/20" />
        <text x="744" y="679" fontSize="4.4" fontWeight="800" className="fill-muted-foreground">AFTER AGING — useless</text>
        <text x="744" y="690" fontSize="3.8" className="fill-muted-foreground">alkyl group lost, bond permanent (KYP — NOT printed)</text>
        <path d="M 724 684 L 732 684" stroke="currentColor" strokeWidth="1.2" className="text-neural" fill="none" />
        <polygon points="730,681 730,687 736,684" className="fill-neural" />
        <text x="516" y="714" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">aging = the phosphoryl-enzyme bond hardening over hours (&apos;aging&apos; appears nowhere in part 1 — KYP flag; the printed rule is &apos;if given early&apos;)</text>
        <text x="516" y="734" fontSize="4.6" fontWeight="800" className="fill-foreground">NEVER ALONE · NEVER LATE · NEVER FOR THE CNS</text>
        <text x="516" y="745" fontSize="4.2" className="fill-foreground">alone → transient worsening (printed); late → the aged enzyme cannot regenerate; the CNS → out of reach (printed)</text>
        <text x="516" y="766" fontSize="4" fontWeight="800" className="fill-muted-foreground">COVERAGE (KYP map on the printed clauses):</text>
        <rect x="516" y="774" width="138" height="26" rx="4" className="fill-secondary/20" />
        <text x="585" y="786" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">TIER 1 muscarinic — NOT</text>
        <text x="585" y="795" textAnchor="middle" fontSize="3.2" className="fill-muted-foreground">atropine&apos;s tier</text>
        <rect x="662" y="774" width="138" height="26" rx="4" className="fill-neural-soft" />
        <text x="731" y="786" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-neural">TIER 2 nicotinic/NMJ — COVERED</text>
        <text x="731" y="795" textAnchor="middle" fontSize="3.2" className="fill-neural">dephosphorylation, if early</text>
        <rect x="808" y="774" width="138" height="26" rx="4" className="fill-secondary/20" />
        <text x="877" y="786" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">TIER 3 CNS — NOT</text>
        <text x="877" y="795" textAnchor="middle" fontSize="3.2" className="fill-muted-foreground">no BBB entry (printed)</text>
        <text x="516" y="816" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the pair is the unit of management: atropine&apos;s shield + pralidoxime&apos;s restoration, ordered together and immediately</text>
      </g>

      {/* ===== THE NOT-PRINTED STRIP ===== */}
      <g>
        <rect x="24" y="832" width="932" height="58" rx="10" className="fill-card stroke-border" />
        <text x="40" y="850" fontSize="6" fontWeight="800" className="fill-foreground">THE NOT-PRINTED LAYER (census-flagged — absent from the page, never cited as printed)</text>
        <text x="40" y="864" fontSize="4.2" className="fill-foreground">&apos;carbamate&apos; appears NOWHERE in part 1 (the reversible, non-aging insecticide cousins) · SLUDGE (the alternative mnemonic) is absent · nerve agents (sarin, VX) are absent</text>
        <text x="40" y="876" fontSize="4.2" className="fill-foreground">the nicotinic-GANGLIONIC signs (mydriasis, tachycardia, hypertension — the sympathetic overdrive that can override the wet picture) are absent — the printed nicotinic row is the NMJ blockade alone</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="898" width="932" height="90" rx="10" className="fill-card stroke-border" />
        <text x="490" y="918" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">READING RULE: SORT WET vs DRY → NAME THE TIER (muscarinic · nicotinic · CNS) → ORDER THE PAIR (atropine the plate-shield + pralidoxime the breaker-restorer — EARLY, TOGETHER)</text>
        <text x="490" y="934" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">Every row label, findings clause, antidote clause, and the DUMBBELSS mnemonic is the book&apos;s own print (book 239, pdf 261, lower portion) — pure text, zero rasters, never reproduced: an original KYP adaptation</text>
        <text x="490" y="946" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">KYP extensions flagged: the tier-triad reading · the AGING-TIME WINDOW (not printed — &apos;aging&apos; appears nowhere in part 1; the printed rule is &apos;if given early&apos;) · the dual-antidote coverage map (all four antidote clauses printed; the map KYP&apos;s)</text>
        <text x="490" y="958" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">the mirror-toxidrome frame (the upper table&apos;s physostigmine row vs this section below — the dry and wet poles of one page) · the not-printed layer (carbamates, SLUDGE, nerve agents, ganglionic signs — absent, flagged)</text>
        <text x="490" y="976" textAnchor="middle" fontSize="5" fontWeight="700" className="fill-muted-foreground">EXCLUDED: the Cholinomimetic agents section ABOVE on this same book-239 page (the completed cholinomimetic-agents topic — its table ends with physostigmine, this section&apos;s mirror), the autonomic-drugs page on pdf 260 behind, and the Muscarinic antagonists (atropine&apos;s own page) on pdf 262 ahead — this section does not extend to 262</text>
      </g>
    </svg>
  );
}

export function MuscarinicAntagonistsMap() {
  const w = 980;
  const h = 1100;
  // An original KYP visual of the MUSCARINIC ANTAGONISTS section of
  // book 240 (pdf 262, the UPPER portion of the page under the standing
  // 'PHARMACOLOGY—AUTONOMIC DRUGS' banner; the dedicated Atropine block
  // BELOW it on the same page is EXCLUDED — the separate pending
  // 'atropine' topic, PH21). Census (pdfimages + text layer): the
  // section prints ONE element — the SEVEN-ROW DRUG CLASS TABLE (DRUGS ×
  // ORGAN SYSTEMS × APPLICATIONS), PURE TEXT with ZERO rasters on pdf
  // 262-263 — COPYRIGHTED, never reproduced as artwork; the rows are
  // carried VERBATIM in the note's two table blocks and conveyed here
  // as ONE original KYP class map (ORIGINAL_KYP_ADAPTATION — every drug
  // set, organ system, applications cell, and the book's own 'park my
  // Benz' and 'Make bladder SOFT' mnemonics are the book's own; the
  // lock strip, the lane cards, the dry-mirror band, the antidote
  // mirror, and the boundary strip are KYP's). KYP extensions flagged
  // wherever they appear: the BODY-LANE LADDER (eye · brain · gut ·
  // airway · bladder), the LOCK-AND-LANE reading (the chemistry behind
  // lane-aiming — quaternary vs tertiary amines, BBB entry, inhaled
  // delivery — is NOT printed on this page), the DRY-MIRROR frame
  // (anti-DUMBBELSS — the printed wet list of book 239 reversed; the
  // PRINTED dry list, the seven-line 'Hot as a hare' mnemonic, and the
  // Jimson weed line print in the ATROPINE BLOCK BELOW on this same
  // page — PH21's portion, flagged as adjacent, never this table's own
  // print), and the ANTIDOTE-MIRROR frame (both clauses printed one
  // page back). SAME-PAGE EXCLUSION: the dedicated Atropine block below
  // (PH21 — the intro, the ORGAN SYSTEM/ACTION/NOTES grid, the ADVERSE
  // EFFECTS cell, the seven-line mnemonic, the Jimson weed line);
  // BEHIND: pdf 261 (book 239) carries the completed cholinomimetic-
  // agents (upper) and anticholinesterase-poisoning (lower) — the
  // agonist mirror and the wet toxidrome; AHEAD: pdf 263 (book 241)
  // opens sympathomimetics — this section does NOT extend there (the
  // pilot sympathomimetics note's 'pp. 240–243' over-claims book 240;
  // its table prints entirely on pdf 263-265). Color code: eye +
  // atropine = brand (blue), respiratory = neural (purple), CNS +
  // secretions/spasm = warning (amber), GU = success (green), the leak
  // = emergency (red). JSX text uses &gt; / &amp; / &apos; / &quot;
  // escapes where needed (no raw > or & appears in text runs).
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Muscarinic antagonists — the class map (an original KYP visual of the Muscarinic antagonists section, book 240, pdf 262, the upper portion of the page, above the excluded Atropine block. ONE SEVEN-ROW DRUG CLASS TABLE, verbatim: Atropine, homatropine, tropicamide | Eye | Produce mydriasis and cycloplegia; Benztropine, trihexyphenidyl | CNS | Parkinson disease (park my Benz) + Acute dystonia; Glycopyrrolate | GI, respiratory | Parenteral: preoperative use to reduce airway secretions + Oral: reduces drooling, peptic ulcer; Hyoscyamine, dicyclomine | GI | Antispasmodics for irritable bowel syndrome; Ipratropium, tiotropium | Respiratory | COPD, asthma + Duration: tiotropium greater than ipratropium; Solifenacin, Oxybutynin, Flavoxate, Tolterodine | Genitourinary | Reduce bladder spasms and urge urinary incontinence (overactive bladder) + Make bladder SOFT; Scopolamine | CNS | Motion sickness. THE LOCK STRIP: the muscarinic receptor blocked competitively (the mechanism word competitive printed one page back: Reversed by atropine, a competitive inhibitor) — parasympathetic tone removed lane by lane. THE FIVE ORGAN-LANE CARDS: EYE (mydriasis + cycloplegia), CNS (park my Benz + acute dystonia; scopolamine motion sickness), GI (glycopyrrolate route-split secretions; hyoscyamine/dicyclomine IBS antispasmodics), RESPIRATORY (ipratropium/tiotropium with the printed duration line), GENITOURINARY (the SOFT four — the book&apos;s own mnemonic spelling the initials). THE DRY-MIRROR BAND: the leak beyond the lane is anti-DUMBBELSS — the printed wet list of book 239 reversed (miosis to mydriasis, bradycardia to tachycardia, glands pouring to dry, gut cramping to constipation, bladder letting go to retention), with the printed adverse-effects cell, the seven-line Hot as a hare mnemonic, and the Jimson weed line flagged as printing in the ATROPINE BLOCK BELOW on this same page (the separate atropine topic, PH21 — adjacent, never this table&apos;s own print; this class table prints uses only). THE ANTIDOTE MIRROR: the wet pole&apos;s antidote is this class&apos;s headliner (Reversed by atropine, a competitive inhibitor) and this class&apos;s own overdose antidote is physostigmine (physostigmine phyxes atropine overdose) — both printed one page back. The body-lane ladder, the lock-and-lane reading, the dry-mirror frame, and the antidote-mirror frame are KYP extensions, flagged; the section is pure text with zero rasters, never reproduced — an original KYP adaptation; the Atropine block below on the same book-240 page (PH21), the cholinomimetic-agents and anticholinesterase-poisoning pages on pdf 261 behind, and the sympathomimetics page on pdf 263 ahead are EXCLUDED, separate topics)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Muscarinic antagonists — the class map (original KYP visual of book 240)</text>
        <rect x="716" y="24" width="216" height="18" rx="4" className="fill-secondary/20" />
        <text x="824" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">1 lock · 5 lanes · 7 drug sets</text>
      </g>

      {/* ===== THE LOCK STRIP — THE CLASS MECHANISM ===== */}
      <g>
        <rect x="24" y="72" width="932" height="124" rx="10" className="fill-card stroke-brand" strokeWidth="1.4" />
        <text x="40" y="92" fontSize="8" fontWeight="800" className="fill-foreground">THE CLASS LOCK — muscarinic receptors blocked competitively → parasympathetic tone removed, lane by lane</text>
        <text x="40" y="104" fontSize="4.2" className="fill-muted-foreground">the class banner &apos;Muscarinic antagonists&apos; is the page&apos;s own header; the mechanism word is printed one page back: &apos;Reversed by atropine, a competitive inhibitor.&apos; (book 239, the wet tier&apos;s antidote clause)</text>
        {/* step 1 — the tone */}
        <rect x="36" y="114" width="292" height="72" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="46" y="128" fontSize="5.4" fontWeight="800" className="fill-brand">STEP 1 — THE TONE TO REMOVE</text>
        <text x="46" y="141" fontSize="4.2" className="fill-foreground">parasympathetic output reaching its end organs through MUSCARINIC</text>
        <text x="46" y="151" fontSize="4.2" className="fill-foreground">receptors — the M-addresses of book 235&apos;s map, the receiving plate of</text>
        <text x="46" y="161" fontSize="4.2" className="fill-foreground">book 238&apos;s cholinergic lane (glands, smooth muscle, the SA node)</text>
        <text x="46" y="181" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the same plate the agonist page (book 239) triggers — this page holds it shut</text>
        {/* step 2 — the block */}
        <rect x="336" y="114" width="292" height="72" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="346" y="128" fontSize="5.4" fontWeight="800" className="fill-brand">STEP 2 — THE BLOCK: occupancy, no signal</text>
        <text x="346" y="141" fontSize="4.2" className="fill-foreground">the antagonist occupies the receptor competitively — held, never</text>
        <text x="346" y="151" fontSize="4.2" className="fill-foreground">triggered: ACh arrives and finds the plate occupied, so the message</text>
        <text x="346" y="161" fontSize="4.2" className="fill-foreground">never lands at the blocked address</text>
        <text x="346" y="181" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">one lock for every row — the therapeutic difference between rows is the LANE</text>
        {/* step 3 — the lane read */}
        <rect x="636" y="114" width="308" height="72" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="646" y="128" fontSize="5.4" fontWeight="800" className="fill-brand">STEP 3 — EACH LANE READS AS ONE ROW</text>
        <text x="646" y="141" fontSize="4.2" className="fill-foreground">the tone removed IS the use: the eye dilates and freezes, the glands</text>
        <text x="646" y="151" fontSize="4.2" className="fill-foreground">fall silent, the gut calms, the airway opens, the bladder holds — the</text>
        <text x="646" y="161" fontSize="4.2" className="fill-foreground">charter: remove parasympathetic tone where it is unwanted</text>
        <text x="646" y="181" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">seven rows = seven aimings of the one mechanism (the ladder below)</text>
        <path d="M 328 150 L 336 150" stroke="currentColor" strokeWidth="1.4" className="text-brand" fill="none" />
        <polygon points="334,147 334,153 340,150" className="fill-brand" />
        <path d="M 628 150 L 636 150" stroke="currentColor" strokeWidth="1.4" className="text-brand" fill="none" />
        <polygon points="634,147 634,153 640,150" className="fill-brand" />
      </g>

      {/* arrows down to the five lanes */}
      <path d="M 177 196 L 177 202" stroke="currentColor" strokeWidth="1.2" className="text-brand" fill="none" />
      <polygon points="173,201 181,201 177,205" className="fill-brand" />
      <path d="M 491 196 L 491 202" stroke="currentColor" strokeWidth="1.2" className="text-neural" fill="none" />
      <polygon points="487,201 495,201 491,205" className="fill-neural" />
      <path d="M 804 196 L 804 202" stroke="currentColor" strokeWidth="1.2" className="text-success" fill="none" />
      <polygon points="800,201 808,201 804,205" className="fill-success" />

      {/* ===== EYE LANE ===== */}
      <g>
        <rect x="24" y="206" width="460" height="104" rx="10" className="fill-card stroke-brand" strokeWidth="1.4" />
        <text x="40" y="228" fontSize="7.4" fontWeight="800" className="fill-foreground">EYE LANE — &apos;Atropine, homatropine, tropicamide&apos;</text>
        <text x="40" y="240" fontSize="4.2" className="fill-muted-foreground">ORGAN SYSTEM (verbatim): &apos;Eye&apos; · the table&apos;s first row</text>
        <text x="40" y="256" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">APPLICATIONS (verbatim):</text>
        <text x="40" y="266" fontSize="4.4" className="fill-foreground">&apos;Produce mydriasis and cycloplegia&apos;</text>
        <text x="40" y="282" fontSize="4.2" className="fill-foreground">the pupillary sphincter loses its constrictor tone (MYDRIASIS — the fundoscopy eye);</text>
        <text x="40" y="292" fontSize="4.2" className="fill-foreground">the ciliary muscle loses its accommodation tone (CYCLOPLEGIA — the refraction eye)</text>
        <text x="40" y="304" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">atropine&apos;s ONLY appearance in this table — the ophthalmic trio; its own drug block is BELOW (PH21)</text>
      </g>

      {/* ===== RESPIRATORY LANE ===== */}
      <g>
        <rect x="500" y="206" width="456" height="104" rx="10" className="fill-card stroke-neural" strokeWidth="1.4" />
        <text x="516" y="228" fontSize="7.4" fontWeight="800" className="fill-foreground">RESPIRATORY LANE — &apos;Ipratropium, tiotropium&apos;</text>
        <text x="516" y="240" fontSize="4.2" className="fill-muted-foreground">ORGAN SYSTEM (verbatim): &apos;Respiratory&apos;</text>
        <text x="516" y="256" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">APPLICATIONS (verbatim):</text>
        <text x="516" y="266" fontSize="4.4" className="fill-foreground">&apos;COPD, asthma&apos; · &apos;Duration: tiotropium &gt; ipratropium&apos;</text>
        <text x="516" y="282" fontSize="4.2" className="fill-foreground">bronchodilation by removing cholinergic bronchial tone — the inhaled pair aimed at the</text>
        <text x="516" y="292" fontSize="4.2" className="fill-foreground">airway (the inhaled route is KYP-flagged, not printed); the printed duration line is the</text>
        <text x="516" y="302" fontSize="4.2" className="fill-foreground">once-daily vs shorter-acting sort (tiotropium the long-acting member of the pair)</text>
      </g>

      {/* ===== CNS LANES ===== */}
      <g>
        <rect x="24" y="322" width="460" height="142" rx="10" className="fill-card stroke-warning" strokeWidth="1.4" />
        <text x="40" y="344" fontSize="7.4" fontWeight="800" className="fill-foreground">CNS LANES — the two brain rows</text>
        <text x="40" y="360" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">MOVEMENT ROW (verbatim):</text>
        <text x="40" y="370" fontSize="4.4" className="fill-foreground">&apos;Benztropine, trihexyphenidyl&apos; | &apos;CNS&apos; | &apos;Parkinson disease (“park my Benz”)&apos;</text>
        <text x="40" y="380" fontSize="4.4" className="fill-foreground">+ &apos;Acute dystonia&apos; — the Benz parks in the Parkinson spot; the antipsychotic emergency</text>
        <text x="40" y="396" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">VESTIBULAR ROW (verbatim):</text>
        <text x="40" y="406" fontSize="4.4" className="fill-foreground">&apos;Scopolamine&apos; | &apos;CNS&apos; | &apos;Motion sickness&apos;</text>
        <text x="40" y="420" fontSize="4.2" className="fill-foreground">the cruise-ship stem&apos;s drug — the CNS-aimed member (the patch story is KYP, not printed)</text>
        <text x="40" y="436" fontSize="4.2" className="fill-foreground">the striatum: antipsychotics block dopamine → relative cholinergic excess → the antimuscarinic</text>
        <text x="40" y="446" fontSize="4.2" className="fill-foreground">restores the balance (both printed uses of the movement row); the vestibular pathway is</text>
        <text x="40" y="456" fontSize="4.2" className="fill-foreground">the motion-sickness row&apos;s address</text>
      </g>

      {/* ===== GENITOURINARY LANE ===== */}
      <g>
        <rect x="500" y="322" width="456" height="142" rx="10" className="fill-card stroke-success" strokeWidth="1.4" />
        <text x="516" y="344" fontSize="7.4" fontWeight="800" className="fill-foreground">GENITOURINARY LANE — &apos;Make bladder SOFT&apos;</text>
        <text x="516" y="358" fontSize="4.4" className="fill-foreground">&apos;Solifenacin, Oxybutynin, Flavoxate, Tolterodine&apos; — the initials spell S-O-F-T</text>
        <text x="516" y="372" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">APPLICATIONS (verbatim):</text>
        <text x="516" y="382" fontSize="4.4" className="fill-foreground">&apos;Reduce bladder spasms and urge urinary incontinence</text>
        <text x="516" y="392" fontSize="4.4" className="fill-foreground">(overactive bladder)&apos; + &apos;Make bladder SOFT&apos;</text>
        <rect x="516" y="400" width="196" height="18" rx="4" className="fill-success-soft" />
        <text x="614" y="411" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-success">S-O-F-T — the book&apos;s own mnemonic</text>
        <text x="516" y="432" fontSize="4.2" className="fill-foreground">the detrusor&apos;s M-tone removed — the micturition page&apos;s printed row (book 236):</text>
        <text x="516" y="442" fontSize="4.2" className="fill-foreground">&apos;Muscarinic antagonists (eg, oxybutynin)&apos; → &apos;⊝ M receptor → relaxation of detrusor smooth muscle&apos;</text>
        <text x="516" y="456" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the leak: dry mouth, constipation, cycloplegia, retention, confusion — the elderly-oxybutynin stem</text>
      </g>

      {/* ===== GI LANES ===== */}
      <g>
        <rect x="24" y="476" width="932" height="164" rx="10" className="fill-card stroke-warning" strokeWidth="1.4" />
        <text x="40" y="498" fontSize="7.4" fontWeight="800" className="fill-foreground">GI LANES — the two gut rows</text>
        {/* secretions sub-card */}
        <rect x="36" y="510" width="440" height="118" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="46" y="528" fontSize="5.4" fontWeight="800" className="fill-warning">SECRETIONS ROW — &apos;Glycopyrrolate&apos; | &apos;GI, respiratory&apos;</text>
        <text x="46" y="542" fontSize="4.4" className="fill-foreground">&apos;Parenteral: preoperative use to reduce airway secretions&apos;</text>
        <text x="46" y="552" fontSize="4.4" className="fill-foreground">&apos;Oral: reduces drooling, peptic ulcer&apos;</text>
        <text x="46" y="568" fontSize="4.2" className="fill-foreground">the only row that prints its routes — one drug, two glandular aims:</text>
        <text x="46" y="578" fontSize="4.2" className="fill-foreground">the airway glands for the operating room; the salivary glands for the drooler</text>
        <text x="46" y="596" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">prints one page back as pyridostigmine&apos;s co-therapy — the agonist page&apos;s own use of this</text>
        <text x="46" y="606" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">class to dry its wet excess (&apos;Used with glycopyrrolate or hyoscyamine...&apos;, book 239)</text>
        {/* spasm sub-card */}
        <rect x="484" y="510" width="460" height="118" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="494" y="528" fontSize="5.4" fontWeight="800" className="fill-warning">SPASM ROW — &apos;Hyoscyamine, dicyclomine&apos; | &apos;GI&apos;</text>
        <text x="494" y="542" fontSize="4.4" className="fill-foreground">&apos;Antispasmodics for irritable bowel syndrome&apos;</text>
        <text x="494" y="558" fontSize="4.2" className="fill-foreground">the gut&apos;s cramping calmed — the same lock that dries the glands quiets the</text>
        <text x="494" y="568" fontSize="4.2" className="fill-foreground">smooth muscle (the anti-spasm effect the leak overshoots into constipation)</text>
        <text x="494" y="586" fontSize="4.2" className="fill-foreground">the IBS pair&apos;s lane-mate glycopyrrolate covers the glandular half of the gut</text>
        <text x="494" y="596" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">hyoscyamine is the OTHER printed co-therapy of the pyridostigmine row (book 239) —</text>
        <text x="494" y="606" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">two of this table&apos;s members print on the agonist page as the antidote to its excess</text>
      </g>

      {/* ===== THE DRY MIRROR BAND ===== */}
      <g>
        <rect x="24" y="652" width="932" height="154" rx="10" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="40" y="672" fontSize="7" fontWeight="800" className="fill-foreground">THE LEAK — ANTI-DUMBBELSS, the dry mirror (KYP frame): the printed wet list of book 239, one page back, reversed</text>
        <text x="40" y="690" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">WET (book 239, printed) → DRY (this class&apos;s leak):</text>
        <text x="40" y="704" fontSize="4.2" className="fill-foreground">Miosis → MYDRIASIS (the &apos;blind as a bat&apos; direction — the eye row&apos;s use at overdose)</text>
        <text x="40" y="716" fontSize="4.2" className="fill-foreground">glands pouring (saliva, tears, sweat) → DRY MOUTH, DRY SKIN</text>
        <text x="40" y="728" fontSize="4.2" className="fill-foreground">gut cramping, diarrhea → CONSTIPATION (the antispasmodic overshoot)</text>
        <text x="40" y="740" fontSize="4.2" className="fill-foreground">bladder letting go, urination → URINARY RETENTION (the SOFT row overshot)</text>
        <text x="500" y="690" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">the same flips, airway to brain:</text>
        <text x="500" y="704" fontSize="4.2" className="fill-foreground">bronchospasm, airway secretions → BRONCHODILATION, dry airway (the -ium pair&apos;s lane)</text>
        <text x="500" y="716" fontSize="4.2" className="fill-foreground">bradycardia → TACHYCARDIA (the SA node unopposed — the &apos;fast as a fiddle&apos; direction)</text>
        <text x="500" y="728" fontSize="4.2" className="fill-foreground">sweating → ANHIDROSIS → hyperthermia (the &apos;hot as a hare&apos; direction)</text>
        <text x="500" y="740" fontSize="4.2" className="fill-foreground">lethargy → DISORIENTATION (the CNS leak — the elderly patient is the sensitive one)</text>
        <text x="40" y="762" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">BOUNDARY FLAG: this class table prints USES only — the PRINTED adverse-effects cell (&apos;↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia;</text>
        <text x="40" y="772" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">constipation; disorientation&apos; + the angle-closure / prostatic-hyperplasia / infant-hyperthermia line), the seven-line mnemonic (&apos;Hot as a hare / Fast as a fiddle / Dry as a bone /</text>
        <text x="40" y="782" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask&apos;), and &apos;Jimson weed (Datura) → gardener&apos;s pupil (mydriasis)&apos; print in the ATROPINE BLOCK BELOW on this</text>
        <text x="40" y="792" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">same page — the separate pending atropine topic (PH21): adjacent, flagged, never this table&apos;s own print</text>
        <text x="500" y="806" fontSize="4.2" fontWeight="800" className="fill-emergency">the rescue of the overdose is printed one page back: &apos;physostigmine &quot;phyxes&quot; atropine overdose.&apos; (book 239)</text>
      </g>

      {/* ===== THE ANTIDOTE MIRROR STRIP ===== */}
      <g>
        <rect x="24" y="818" width="932" height="106" rx="10" className="fill-card stroke-border" />
        <text x="40" y="838" fontSize="7" fontWeight="800" className="fill-foreground">THE ANTIDOTE MIRROR — both clauses printed one page back (book 239): two pages, two poles, two rescues</text>
        <rect x="36" y="850" width="440" height="62" rx="7" className="fill-secondary/20 stroke-brand" />
        <text x="46" y="866" fontSize="5" fontWeight="800" className="fill-brand">THE WET POLE&apos;S ANTIDOTE = THIS CLASS&apos;S HEADLINER</text>
        <text x="46" y="878" fontSize="4.2" className="fill-foreground">&apos;Reversed by atropine, a competitive inhibitor.&apos; (PH19&apos;s muscarinic tier, the organophosphate page)</text>
        <text x="46" y="888" fontSize="4.2" className="fill-foreground">this page is atropine&apos;s family page: the class behind the printed rescue of the wet toxidrome;</text>
        <text x="46" y="898" fontSize="4.2" className="fill-foreground">the CNS cover is printed there too (&apos;Atropine can cross BBB to relieve CNS symptoms.&apos;)</text>
        <rect x="484" y="850" width="460" height="62" rx="7" className="fill-secondary/20 stroke-neural" />
        <text x="494" y="866" fontSize="5" fontWeight="800" className="fill-neural">THIS CLASS&apos;S OWN OVERDOSE ANTIDOTE = THE AGONIST PAGE&apos;S LAST ROW</text>
        <text x="494" y="878" fontSize="4.2" className="fill-foreground">&apos;Antidote for anticholinergic toxicity; physostigmine &quot;phyxes&quot; atropine overdose.&apos; (book 239, PH18)</text>
        <text x="494" y="888" fontSize="4.2" className="fill-foreground">the dry pole&apos;s rescue: the AChE inhibitor that re-floods the muscarinic plate this class holds shut —</text>
        <text x="494" y="898" fontSize="4.2" className="fill-foreground">wet gets antimuscarinic (this table), dry gets cholinomimetic (the table behind): one mirror, two pages</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="936" width="932" height="150" rx="10" className="fill-card stroke-border" />
        <text x="490" y="956" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">READING RULE: NAME THE LANE (eye · brain · gut · airway · bladder) → RECALL THE PRINTED SET (the trio · park-my-Benz · glycopyrrolate + hyoscyamine/dicyclomine · the -ium pair · the SOFT four)</text>
        <text x="490" y="968" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">→ READ EVERY ADVERSE EFFECT AS THE SAME LOCK IN THE WRONG LANE (anti-DUMBBELSS, the dry mirror)</text>
        <text x="490" y="984" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">Every drug set, organ system, applications cell, and both mnemonics (&apos;park my Benz&apos;, &apos;Make bladder SOFT&apos;) are the book&apos;s own print (book 240, pdf 262, UPPER portion) — pure text, zero rasters, never reproduced: an original KYP adaptation</text>
        <text x="490" y="996" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">KYP extensions flagged: the BODY-LANE LADDER · the LOCK-AND-LANE reading (the chemistry behind lane-aiming — quaternary/tertiary amines, BBB entry, inhaled delivery — NOT printed on this page) · the DRY-MIRROR frame · the ANTIDOTE-MIRROR frame</text>
        <text x="490" y="1008" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">BOUNDARY: the printed adverse-effects cell, the seven-line &apos;Hot as a hare&apos; mnemonic, and the Jimson weed line print in the ATROPINE BLOCK BELOW on this same page — the separate pending atropine topic (PH21), EXCLUDED here</text>
        <text x="490" y="1026" textAnchor="middle" fontSize="5" fontWeight="700" className="fill-muted-foreground">EXCLUDED: the Atropine block below on this same book-240 page (PH21) · the cholinomimetic-agents and anticholinesterase-poisoning sections on pdf 261 behind (the agonist mirror and the wet toxidrome — completed topics)</text>
        <text x="490" y="1038" textAnchor="middle" fontSize="5" fontWeight="700" className="fill-muted-foreground">· the sympathomimetics section on pdf 263 ahead — this section does NOT extend to pdf 263 (verified); the pilot sympathomimetics note&apos;s &apos;pp. 240–243&apos; over-claims book 240 (its table prints entirely on pdf 263-265, book 241-243)</text>
      </g>
    </svg>
  );
}

export function AtropineToxicityMap() {
  const w = 980;
  const h = 1000;
  // An original KYP visual of the dedicated ATROPINE block — the LOWER
  // portion of book 240 (pdf 262, lines 72-131, under the standing
  // 'PHARMACOLOGY—AUTONOMIC DRUGS' banner; the UPPER portion of the same
  // page is the Muscarinic antagonists class table — the COMPLETED PH20
  // topic — EXCLUDED here, only its boundary pinned). Census (pdfimages +
  // text layer): the block prints the intro ('Muscarinic antagonist.
  // Used to treat bradycardia and for ophthalmic applications.'), the
  // three-column ORGAN SYSTEM/ACTION/NOTES grid (six organ rows with the
  // printed NOTES cell 'Blocks muscarinic effects (DUMBBELSS) of
  // anticholinesterases, but not the nicotinic effects'), the ADVERSE
  // EFFECTS tier (the findings cell, the three-population cautions line,
  // the book's OWN seven-line mnemonic 'Hot as a hare / Fast as a fiddle
  // / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter /
  // Full as a flask', and 'Jimson weed (Datura) → gardener's pupil
  // (mydriasis)') — PURE TEXT with ZERO rasters on pdf 262-263 —
  // COPYRIGHTED, never reproduced as artwork; the set is carried VERBATIM
  // in the note's two table blocks and conveyed here as ONE original KYP
  // toxicity map (ORIGINAL_KYP_ADAPTATION — every organ, arrow, finding,
  // caution, simile, and the Jimson weed line are the book's own; the
  // six-lane grid layout, the simile-to-arrow mapping, the antidote
  // mirror, and the exposure frame are KYP's). KYP extensions flagged
  // wherever they appear: the SIX-ORGAN DRY TOUR (with the
  // simile-to-arrow mapping — both printed sets, the pinning KYP's), the
  // ANTIDOTE-MIRROR frame (both clauses printed one page back, book 239:
  // 'Reversed by atropine, a competitive inhibitor. Atropine can cross
  // BBB to relieve CNS symptoms.' + 'physostigmine "phyxes" atropine
  // overdose.'), and the GARDENER'S-PUPIL frame (the printed Jimson weed
  // line; the tropane-alkaloid family reading is KYP's, flagged — never
  // cited as printed). SAME-PAGE EXCLUSION: the class table above (PH20);
  // BEHIND: pdf 261 (book 239) carries the completed cholinomimetic-
  // agents (upper) and anticholinesterase-poisoning (lower) — the agonist
  // mirror and the wet toxidrome; AHEAD: pdf 263 (book 241) opens
  // sympathomimetics — this block does NOT extend there. Color code: eye
  // + atropine = brand (blue), heart = emergency (red), airway = neural
  // (purple), GI/stomach = warning (amber), bladder = success (green).
  // JSX text uses &gt; / &amp; / &apos; / &quot; escapes where needed (no
  // raw > or & appears in text runs).
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Atropine — the toxicity map (an original KYP visual of the dedicated Atropine block, book 240, pdf 262, the lower portion of the page, below the excluded Muscarinic antagonists class table. THE INTRO, verbatim: Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications. THE ACTION GRID, verbatim — ORGAN SYSTEM / ACTION / NOTES: Eye, pupil dilation up + cycloplegia; Airway, bronchodilation + secretions down; Heart, heart rate up (the bradycardia use); Stomach, acid secretion down; Gut, motility down; Bladder, urgency in cystitis down — with the printed NOTES cell: Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects (the M-vs-N coverage split of the organophosphate antidote). THE ADVERSE EFFECTS TIER, verbatim: body temperature up (due to sweating down); HR up; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation + Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants. THE SEVEN-LINE MNEMONIC — the book&apos;s OWN, printed under the label Adverse effects: Hot as a hare, Fast as a fiddle, Dry as a bone, Red as a beet, Blind as a bat, Mad as a hatter, Full as a flask (attributed as the source&apos;s own; the simile-to-arrow pinning is KYP&apos;s). THE JIMSON WEED LINE, verbatim: Jimson weed (Datura) to gardener&apos;s pupil (mydriasis) — the plant-exposure stem. THE ANTIDOTE MIRROR, both clauses printed one page back (book 239): Reversed by atropine, a competitive inhibitor + physostigmine phyxes atropine overdose — wet gets dry, dry gets wet. The six-organ dry tour, the simile mapping, the antidote-mirror frame, and the gardener&apos;s-pupil frame are KYP extensions, flagged; the block is pure text with zero rasters, never reproduced — an original KYP adaptation; the class table above on the same book-240 page (PH20, completed), the cholinomimetic-agents and anticholinesterase-poisoning pages on pdf 261 behind, and the sympathomimetics page on pdf 263 ahead are EXCLUDED, separate topics)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Atropine — the toxicity map (original KYP visual of book 240)</text>
        <rect x="700" y="24" width="232" height="18" rx="4" className="fill-secondary/20" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">6 organ arrows · 7 similes · 1 mirror</text>
      </g>

      {/* ===== THE INTRO STRIP — THE BLOCK'S OWN CHARTER ===== */}
      <g>
        <rect x="24" y="72" width="932" height="50" rx="10" className="fill-card stroke-brand" strokeWidth="1.4" />
        <text x="40" y="90" fontSize="8" fontWeight="800" className="fill-foreground">THE INTRO, verbatim — &apos;Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.&apos;</text>
        <text x="40" y="104" fontSize="4.4" className="fill-foreground">the class name and the two printed indications — each one resolves to a grid arrow below: bradycardia → the HEART row (&apos;↑ heart rate&apos;), the ophthalmic exam → the EYE row (&apos;↑ pupil dilation, cycloplegia&apos;)</text>
        <text x="40" y="114" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">the mechanism word prints one page back: &apos;Reversed by atropine, a competitive inhibitor.&apos; (book 239) — competitive occupancy, no signal, at every muscarinic address</text>
      </g>

      {/* ===== THE ACTION GRID — ORGAN SYSTEM / ACTION / NOTES ===== */}
      <g>
        <rect x="24" y="134" width="932" height="286" rx="10" className="fill-card stroke-border" />
        <text x="40" y="154" fontSize="7.4" fontWeight="800" className="fill-foreground">THE ACTION GRID — ORGAN SYSTEM / ACTION / NOTES (book 240, verbatim): six organs, six arrows, one lock</text>
        {/* column headers */}
        <text x="40" y="172" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">ORGAN SYSTEM</text>
        <text x="190" y="172" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">ACTION</text>
        <text x="580" y="172" fontSize="4.6" fontWeight="800" className="fill-muted-foreground">NOTES</text>
        <line x1="40" y1="178" x2="944" y2="178" stroke="currentColor" strokeWidth="0.5" className="text-border" />
        {/* row 1 — Eye */}
        <rect x="32" y="186" width="534" height="34" rx="5" className="fill-secondary/20 stroke-brand" />
        <text x="44" y="207" fontSize="5.4" fontWeight="800" className="fill-brand">Eye</text>
        <text x="190" y="200" fontSize="4.6" className="fill-foreground">↑ pupil dilation, cycloplegia</text>
        <text x="190" y="212" fontSize="4" className="fill-muted-foreground">the sphincter loses tone (mydriasis — the fundoscopy eye); the ciliary muscle freezes (the refraction eye)</text>
        {/* row 2 — Airway */}
        <rect x="32" y="224" width="534" height="34" rx="5" className="fill-secondary/20 stroke-neural" />
        <text x="44" y="245" fontSize="5.4" fontWeight="800" className="fill-neural">Airway</text>
        <text x="190" y="238" fontSize="4.6" className="fill-foreground">Bronchodilation, ↓ secretions</text>
        <text x="190" y="250" fontSize="4" className="fill-muted-foreground">two arrows in one cell — the bronchi opened and the glands dried (the class&apos;s COPD/preop lane above)</text>
        {/* row 3 — Heart */}
        <rect x="32" y="262" width="534" height="34" rx="5" className="fill-secondary/20 stroke-emergency" />
        <text x="44" y="283" fontSize="5.4" fontWeight="800" className="fill-emergency">Heart</text>
        <text x="190" y="276" fontSize="4.6" className="fill-foreground">↑ heart rate</text>
        <text x="190" y="288" fontSize="4" className="fill-muted-foreground">the SA node&apos;s vagal tone removed — the printed bradycardia use&apos;s own mechanism arrow (the ACLS stop)</text>
        {/* row 4 — Stomach */}
        <rect x="32" y="300" width="534" height="34" rx="5" className="fill-secondary/20 stroke-warning" />
        <text x="44" y="321" fontSize="5.4" fontWeight="800" className="fill-warning">Stomach</text>
        <text x="190" y="314" fontSize="4.6" className="fill-foreground">↓ acid secretion</text>
        <text x="190" y="326" fontSize="4" className="fill-muted-foreground">the parietal cell quieted — the row the class table above has no lane for (this block&apos;s own print)</text>
        {/* row 5 — Gut */}
        <rect x="32" y="338" width="534" height="34" rx="5" className="fill-secondary/20 stroke-warning" />
        <text x="44" y="359" fontSize="5.4" fontWeight="800" className="fill-warning">Gut</text>
        <text x="190" y="352" fontSize="4.6" className="fill-foreground">↓ motility</text>
        <text x="190" y="364" fontSize="4" className="fill-muted-foreground">the antispasmodic direction — overshooting it is the findings cell&apos;s constipation below</text>
        {/* row 6 — Bladder */}
        <rect x="32" y="376" width="534" height="34" rx="5" className="fill-secondary/20 stroke-success" />
        <text x="44" y="397" fontSize="5.4" fontWeight="800" className="fill-success">Bladder</text>
        <text x="190" y="390" fontSize="4.6" className="fill-foreground">↓ urgency in cystitis</text>
        <text x="190" y="402" fontSize="4" className="fill-muted-foreground">the detrusor held — the physiology prints on book 236: &apos;⊝ M receptor → relaxation of detrusor smooth muscle&apos;</text>
        {/* the NOTES cell — spanning column */}
        <rect x="574" y="186" width="370" height="224" rx="5" className="fill-secondary/20 stroke-brand" />
        <text x="586" y="202" fontSize="5.2" fontWeight="800" className="fill-brand">THE NOTES CELL, verbatim</text>
        <text x="586" y="216" fontSize="4.6" className="fill-foreground">&apos;Blocks muscarinic effects (DUMBBELSS)</text>
        <text x="586" y="227" fontSize="4.6" className="fill-foreground">of anticholinesterases, but not the</text>
        <text x="586" y="238" fontSize="4.6" className="fill-foreground">nicotinic effects&apos;</text>
        <text x="586" y="256" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">the M-vs-N coverage split of the organophosphate</text>
        <text x="586" y="266" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">antidote, printed once, spanning the grid:</text>
        <text x="586" y="282" fontSize="4.4" fontWeight="800" className="fill-foreground">MUSCARINIC tier (DUMBBELSS) — COVERED:</text>
        <text x="586" y="292" fontSize="4.2" className="fill-foreground">the wet list dried — &apos;Reversed by atropine, a</text>
        <text x="586" y="302" fontSize="4.2" className="fill-foreground">competitive inhibitor.&apos; (book 239)</text>
        <text x="586" y="316" fontSize="4.4" fontWeight="800" className="fill-foreground">CNS tier — COVERED (the printed BBB clause):</text>
        <text x="586" y="326" fontSize="4.2" className="fill-foreground">&apos;Atropine can cross BBB to relieve CNS symptoms.&apos;</text>
        <text x="586" y="340" fontSize="4.4" fontWeight="800" className="fill-foreground">NICOTINIC tier (neuromuscular) — NOT COVERED:</text>
        <text x="586" y="350" fontSize="4.2" className="fill-foreground">fasciculations, weakness, respiratory failure</text>
        <text x="586" y="360" fontSize="4.2" className="fill-foreground">stay pralidoxime&apos;s — &apos;Must be coadministered</text>
        <text x="586" y="370" fontSize="4.2" className="fill-foreground">with atropine&apos; (its own printed clause, book 239)</text>
        <text x="586" y="386" fontSize="4" fontWeight="700" className="fill-muted-foreground">the tier-by-tier coverage table assembling the printed</text>
        <text x="586" y="396" fontSize="4" fontWeight="700" className="fill-muted-foreground">clauses is KYP&apos;s — each clause itself is the book&apos;s own</text>
        <text x="40" y="416" fontSize="4" fontWeight="700" className="fill-muted-foreground">the two printed indications of the intro resolve to their rows: bradycardia → HEART (&apos;↑ heart rate&apos;) · ophthalmic applications → EYE (&apos;↑ pupil dilation, cycloplegia&apos;); every arrow is the same competitive lock at a different address</text>
      </g>

      {/* ===== THE ADVERSE EFFECTS TIER ===== */}
      <g>
        <rect x="24" y="432" width="932" height="140" rx="10" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="40" y="452" fontSize="7" fontWeight="800" className="fill-foreground">THE ADVERSE EFFECTS TIER (book 240, verbatim) — the grid inverted: every therapeutic arrow, overshooting, becomes a finding</text>
        {/* findings cell */}
        <rect x="36" y="462" width="456" height="98" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="46" y="476" fontSize="5" fontWeight="800" className="fill-emergency">THE FINDINGS CELL, verbatim</text>
        <text x="46" y="490" fontSize="4.4" className="fill-foreground">&apos;↑ body temperature (due to ↓ sweating); ↑ HR;</text>
        <text x="46" y="500" fontSize="4.4" className="fill-foreground">dry mouth; dry, flushed skin; cycloplegia;</text>
        <text x="46" y="510" fontSize="4.4" className="fill-foreground">constipation; disorientation&apos;</text>
        <text x="46" y="526" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">each finding to its arrow: the sweat glands (temperature), the Heart</text>
        <text x="46" y="536" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">arrow overshooting (↑ HR), the salivary and cutaneous arrows (dry</text>
        <text x="46" y="546" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">mouth, dry flushed skin), the Eye arrow (cycloplegia), the Gut arrow</text>
        <text x="46" y="556" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">overshooting (constipation) — and the CNS (disorientation: the BBB)</text>
        {/* cautions line */}
        <rect x="500" y="462" width="444" height="98" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="510" y="476" fontSize="5" fontWeight="800" className="fill-emergency">THE CAUTIONS LINE, verbatim — three populations</text>
        <text x="510" y="490" fontSize="4.2" className="fill-foreground">&apos;Can cause acute angle-closure glaucoma in older adults</text>
        <text x="510" y="500" fontSize="4.2" className="fill-foreground">(due to mydriasis), urinary retention in men with prostatic</text>
        <text x="510" y="510" fontSize="4.2" className="fill-foreground">hyperplasia, and hyperthermia in infants&apos;</text>
        <text x="510" y="526" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">the Eye arrow on the narrow-angled older adult (the red, painful,</text>
        <text x="510" y="536" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">hard eye — an emergency) · the Bladder arrow on the obstructed</text>
        <text x="510" y="546" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">outlet (the prostatic man) · the sweat arrow on immature</text>
        <text x="510" y="556" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">thermoregulation (the infant — the most dangerous host)</text>
      </g>

      {/* ===== THE SIMILE-TO-ARROW MAPPING BAND ===== */}
      <g>
        <rect x="24" y="584" width="932" height="188" rx="10" className="fill-card stroke-warning" strokeWidth="1.4" />
        <text x="40" y="604" fontSize="7" fontWeight="800" className="fill-foreground">THE SEVEN-LINE MNEMONIC — THE BOOK&apos;S OWN, printed under its own label &apos;Adverse effects:&apos; (verbatim, attributed) — each simile pinned to its grid arrow (the pinning is KYP&apos;s)</text>
        {/* left column — 4 similes */}
        <rect x="36" y="614" width="450" height="32" rx="5" className="fill-secondary/20 stroke-border" />
        <text x="46" y="626" fontSize="5" fontWeight="800" className="fill-warning">&apos;Hot as a hare&apos;</text>
        <text x="46" y="640" fontSize="4.2" className="fill-foreground">→ hyperthermia: the sweat glands&apos; arrow (&apos;↑ body temperature (due to ↓ sweating)&apos;)</text>
        <rect x="36" y="650" width="450" height="32" rx="5" className="fill-secondary/20 stroke-border" />
        <text x="46" y="662" fontSize="5" fontWeight="800" className="fill-warning">&apos;Fast as a fiddle&apos;</text>
        <text x="46" y="676" fontSize="4.2" className="fill-foreground">→ tachycardia: the HEART row&apos;s arrow in a patient who was not slow (&apos;↑ HR&apos;)</text>
        <rect x="36" y="686" width="450" height="32" rx="5" className="fill-secondary/20 stroke-border" />
        <text x="46" y="698" fontSize="5" fontWeight="800" className="fill-warning">&apos;Dry as a bone&apos;</text>
        <text x="46" y="712" fontSize="4.2" className="fill-foreground">→ dry mouth, dry flushed skin: the salivary and cutaneous arrows — no sweat glands</text>
        <rect x="36" y="722" width="450" height="32" rx="5" className="fill-secondary/20 stroke-border" />
        <text x="46" y="734" fontSize="5" fontWeight="800" className="fill-warning">&apos;Red as a beet&apos;</text>
        <text x="46" y="748" fontSize="4.2" className="fill-foreground">→ the cutaneous flush: the skin vessels&apos; picture of the same blockade</text>
        {/* right column — 3 similes + attribution */}
        <rect x="494" y="614" width="450" height="32" rx="5" className="fill-secondary/20 stroke-border" />
        <text x="504" y="626" fontSize="5" fontWeight="800" className="fill-warning">&apos;Blind as a bat&apos;</text>
        <text x="504" y="640" fontSize="4.2" className="fill-foreground">→ mydriasis + cycloplegia: the EYE row&apos;s arrows — cannot read near, cannot focus</text>
        <rect x="494" y="650" width="450" height="32" rx="5" className="fill-secondary/20 stroke-border" />
        <text x="504" y="662" fontSize="5" fontWeight="800" className="fill-warning">&apos;Mad as a hatter&apos;</text>
        <text x="504" y="676" fontSize="4.2" className="fill-foreground">→ disorientation: the CNS finding (atropine crosses the BBB — the printed clause)</text>
        <rect x="494" y="686" width="450" height="32" rx="5" className="fill-secondary/20 stroke-border" />
        <text x="504" y="698" fontSize="5" fontWeight="800" className="fill-warning">&apos;Full as a flask&apos;</text>
        <text x="504" y="712" fontSize="4.2" className="fill-foreground">→ urinary retention: the BLADDER row&apos;s arrow past its target (and the gut&apos;s stasis)</text>
        <rect x="494" y="722" width="450" height="32" rx="5" className="fill-secondary/20 stroke-brand" />
        <text x="504" y="734" fontSize="4.6" fontWeight="800" className="fill-brand">THE SEVEN SIMILES ARE THE SOURCE&apos;S OWN</text>
        <text x="504" y="748" fontSize="4.2" className="fill-foreground">printed verbatim under the label &apos;Adverse effects:&apos; — attribute them to First Aid when quoted</text>
      </g>

      {/* ===== THE ANTIDOTE-MIRROR STRIP ===== */}
      <g>
        <rect x="24" y="784" width="932" height="96" rx="10" className="fill-card stroke-border" />
        <text x="40" y="804" fontSize="7" fontWeight="800" className="fill-foreground">THE ANTIDOTE MIRROR — both clauses printed one page back (book 239): wet gets dry, dry gets wet</text>
        <rect x="36" y="814" width="440" height="56" rx="7" className="fill-secondary/20 stroke-brand" />
        <text x="46" y="828" fontSize="4.8" fontWeight="800" className="fill-brand">THE WET POLE&apos;S RESCUE IS THIS DRUG</text>
        <text x="46" y="840" fontSize="4.2" className="fill-foreground">&apos;Reversed by atropine, a competitive inhibitor. Atropine can cross BBB</text>
        <text x="46" y="850" fontSize="4.2" className="fill-foreground">to relieve CNS symptoms.&apos; (PH19&apos;s muscarinic + CNS tiers) — the DUMBBELSS</text>
        <text x="46" y="860" fontSize="4.2" className="fill-foreground">flood dried by the same lock this grid formalizes (pralidoxime rides along)</text>
        <rect x="484" y="814" width="460" height="56" rx="7" className="fill-secondary/20 stroke-neural" />
        <text x="494" y="828" fontSize="4.8" fontWeight="800" className="fill-neural">THIS DRUG&apos;S OWN RESCUE IS THE AGONIST PAGE&apos;S LAST ROW</text>
        <text x="494" y="840" fontSize="4.2" className="fill-foreground">&apos;Antidote for anticholinergic toxicity; physostigmine &quot;phyxes&quot; atropine</text>
        <text x="494" y="850" fontSize="4.2" className="fill-foreground">overdose.&apos; (book 239, PH18) — the AChE inhibitor that re-floods the held plate,</text>
        <text x="494" y="860" fontSize="4.2" className="fill-foreground">uncharged into the CNS: it clears the &apos;Mad as a hatter&apos; delirium too</text>
      </g>

      {/* ===== THE JIMSON WEED CARD ===== */}
      <g>
        <rect x="24" y="892" width="932" height="52" rx="10" className="fill-card stroke-success" strokeWidth="1.4" />
        <text x="40" y="910" fontSize="6.4" fontWeight="800" className="fill-foreground">THE PLANT ANCHOR, verbatim — &apos;Jimson weed (Datura) → gardener&apos;s pupil (mydriasis)&apos;</text>
        <text x="40" y="924" fontSize="4.2" className="fill-foreground">the exposure stem: the trumpet-flowered, spiny-podded weed carries tropane alkaloids — atropine&apos;s own family (KYP flag: the family reading is NOT printed) — so the gardener who handles or brews it wears the EYE row&apos;s arrow</text>
        <text x="40" y="936" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">inside the full dry tier (the seven similes); the pair with the farmer one page back — Datura (dry, physostigmine) vs organophosphate insecticide (wet, atropine + pralidoxime): two gardening exposures, two opposite poles</text>
      </g>

      {/* ===== FOOTER — THE BOUNDARY + READING RULE ===== */}
      <g>
        <rect x="24" y="954" width="932" height="34" rx="10" className="fill-card stroke-border" />
        <text x="490" y="966" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">Every organ row, action arrow, the NOTES cell, the findings cell, the cautions line, the seven similes, and the Jimson weed line are the book&apos;s own print (book 240, pdf 262, LOWER portion) — pure text, zero rasters, never reproduced: an original KYP adaptation</text>
        <text x="490" y="976" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">KYP extensions flagged: the SIX-ORGAN DRY TOUR · the simile-to-arrow pinning · the ANTIDOTE-MIRROR frame (both clauses printed one page back) · the GARDENER&apos;S-PUPIL frame (the tropane-alkaloid family reading is KYP&apos;s, not printed)</text>
        <text x="490" y="986" textAnchor="middle" fontSize="4.8" fontWeight="700" className="fill-muted-foreground">BOUNDARY: the Muscarinic antagonists class table ABOVE on this same book-240 page is the COMPLETED PH20 topic — EXCLUDED here; this block does NOT extend to pdf 263 (book 241 opens Sympathomimetics; verified)</text>
      </g>
    </svg>
  );
}

export function Alpha2AgonistMap() {
  const w = 980;
  const h = 950;
  // An original KYP visual of the SYMPATHOLYTICS (α2-AGONISTS) block —
  // the UPPER portion of book 243 (pdf 265, lines 9-37, under the
  // standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner; the LOWER portion of
  // the same page is the α-blockers class table — the PENDING
  // alpha-blockers topic — EXCLUDED here, only its boundary pinned from
  // above, its last row cited as the α2-ANTAGONIST receptor mirror).
  // Census (pdfimages + text layer): the block prints the section header
  // 'Sympatholytics (α2-agonists)' and ONE three-column table (DRUG /
  // APPLICATIONS / ADVERSE EFFECTS) of three rows — 'Clonidine,
  // guanfacine' → 'Hypertensive urgency (limited situations), ADHD,
  // Tourette syndrome, symptom control in opioid withdrawal' | 'CNS
  // depression, bradycardia, hypotension, respiratory depression,
  // miosis, rebound hypertension with abrupt cessation'; 'α-methyldopa'
  // → 'Hypertension in pregnancy' | 'Direct Coombs ⊕ hemolysis,
  // drug-induced lupus, hyperprolactinemia'; 'Tizanidine' → 'Relief of
  // spasticity' | 'Hypotension, weakness, xerostomia' — PURE TEXT with
  // ZERO rasters on pdf 265 — COPYRIGHTED, never reproduced as artwork;
  // carried VERBATIM in the note's two table blocks and conveyed here as
  // ONE original KYP mechanism map (ORIGINAL_KYP_ADAPTATION — every
  // drug, application, and adverse-effect cell is the book's own; the
  // mechanism strip, the drug cards, the dimmer frame, the patient sort,
  // and the toxicity pictures are KYP's). KYP extensions flagged
  // wherever they appear: the SYMPATHETIC-DIMMER frame (the
  // central/medullary location of the clonidine effect is NOT printed —
  // flagged), the PATIENT-SORT frame, the MOM-AND-COOMBS frame, and the
  // PRODRUG flag (α-methyldopa → α-methylnorepinephrine — NOT printed,
  // flagged). The three cross-page anchors are printed on the completed
  // pages: book 238 ('Release of norepinephrine from a sympathetic
  // nerve ending is modulated by NE itself, acting on presynaptic
  // α2-autoreceptors → negative feedback.'), book 237 (the α2 | i row
  // with '↓ sympathetic (adrenergic) outflow' + the figure labels
  // 'M2, α2, or D2 receptor' → 'Gi protein'), book 236 (the α2
  // distribution row 'Pancreas / Presynaptic terminals / Salivary
  // glands'). Color code: clonidine/guanfacine = brand (blue),
  // methyldopa = emergency (red), tizanidine = warning (amber), the
  // mechanism synapse = neural (purple), the Gi link = success (green).
  // JSX text uses &gt; / &amp; / &apos; / &quot; escapes where needed
  // (no raw > or & appears in text runs).
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Sympatholytics: α2 agonists — the α2-agonist map (an original KYP visual of the Sympatholytics (α2-agonists) block, book 243, pdf 265, the UPPER portion of the page, above the excluded α-blockers class table. THE TABLE, verbatim — DRUG / APPLICATIONS / ADVERSE EFFECTS: Clonidine, guanfacine — hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal; CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation. α-methyldopa — hypertension in pregnancy; direct Coombs positive hemolysis, drug-induced lupus, hyperprolactinemia. Tizanidine — relief of spasticity; hypotension, weakness, xerostomia. THE MECHANISM, assembled from printed anchors on books 236-238: the presynaptic α2 autoreceptor is the brake (presynaptic α2-autoreceptors → negative feedback, book 238), it couples Gi (M2, α2, or D2 receptor → Gi protein, book 237), and its first printed function is ↓ sympathetic (adrenergic) outflow (book 237) — central α2 stimulation turns the sympathetic dimmer down, and the toxicity cells are the dimmer at three settings: overshoot (the opioid-like overdose picture), rebound (hypertension with abrupt cessation — the taper rule), and the methyldopa autoimmune triad. The dimmer frame, the patient sort, the mom-and-Coombs frame, and the prodrug flag (α-methylnorepinephrine — not printed) are KYP extensions, flagged; the block is pure text with zero rasters, never reproduced — an original KYP adaptation; the α-blockers table below on the same book-243 page (the pending, separate topic; mirtazapine its α2-antagonist mirror) and the β-blockers page on pdf 266 ahead are EXCLUDED)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Sympatholytics: α2 agonists — the map (original KYP visual of book 243)</text>
        <rect x="700" y="24" width="232" height="18" rx="4" className="fill-secondary/20" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">1 brake · 3 drugs · 5 patients</text>
      </g>

      {/* ===== THE MECHANISM STRIP — THE PRESYNAPTIC α2 BRAKE ===== */}
      <g>
        <rect x="24" y="72" width="932" height="198" rx="10" className="fill-card stroke-neural" strokeWidth="1.4" />
        <text x="40" y="92" fontSize="7" fontWeight="800" className="fill-foreground">THE MECHANISM — THE PRESYNAPTIC α2 BRAKE: central α2 stimulation → ↓ sympathetic outflow (assembled from three printed anchor pages; the dimmer frame is KYP&apos;s)</text>
        {/* left box — the brake (the synapse) */}
        <rect x="36" y="102" width="268" height="156" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="48" y="114" fontSize="4.8" fontWeight="800" className="fill-neural">THE BRAKE (book 238)</text>
        <text x="196" y="112" fontSize="4.2" fontWeight="800" className="fill-foreground">the AGONISTS arrive:</text>
        <text x="196" y="122" fontSize="3.8" className="fill-foreground">clonidine · guanfacine ·</text>
        <text x="196" y="131" fontSize="3.8" className="fill-foreground">α-methylnorepinephrine*</text>
        <line x1="206" y1="136" x2="180" y2="150" stroke="currentColor" strokeWidth="0.7" className="text-neural" />
        <polygon points="180,150 186,144 187,151" className="fill-neural" />
        {/* the presynaptic terminal */}
        <rect x="48" y="124" width="118" height="52" rx="8" className="fill-card stroke-neural" />
        <text x="52" y="134" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">PRESYNAPTIC TERMINAL</text>
        <circle cx="74" cy="158" r="7" className="fill-secondary/40 stroke-border" />
        <text x="74" y="160" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">NE</text>
        <circle cx="98" cy="160" r="7" className="fill-secondary/40 stroke-border" />
        <text x="98" y="162" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">NE</text>
        <rect x="160" y="150" width="24" height="16" rx="3" className="fill-card stroke-neural" strokeWidth="1.2" />
        <text x="172" y="161" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-neural">α2</text>
        <text x="190" y="136" fontSize="3.6" className="fill-muted-foreground">cleft →</text>
        <text x="190" y="146" fontSize="3.6" className="fill-muted-foreground">end organ</text>
        {/* the printed quote */}
        <text x="48" y="192" fontSize="4" className="fill-foreground">&apos;Release of norepinephrine from a sympathetic nerve ending is</text>
        <text x="48" y="202" fontSize="4" className="fill-foreground">modulated by NE itself, acting on presynaptic α2-autoreceptors</text>
        <text x="48" y="212" fontSize="4" className="fill-foreground">→ negative feedback.&apos; (the mechanism sentence — printed on</text>
        <text x="48" y="222" fontSize="4" className="fill-foreground">book 238, the autonomic-drugs page; cited as the bridge)</text>
        <text x="48" y="236" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">*the α-methylnorepinephrine prodrug reading is NOT printed (KYP flag)</text>
        {/* inter-box arrow 1 */}
        <line x1="306" y1="180" x2="322" y2="180" stroke="currentColor" strokeWidth="0.8" className="text-border" />
        <polygon points="322,180 316,177 316,183" className="fill-border" />
        {/* middle box — the couple */}
        <rect x="324" y="102" width="296" height="156" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="340" y="114" fontSize="4.8" fontWeight="800" className="fill-neural">THE COUPLE (book 237)</text>
        <text x="340" y="138" fontSize="6" fontWeight="800" className="fill-foreground">α2 | i</text>
        <text x="340" y="156" fontSize="4.6" fontWeight="700" className="fill-foreground">&apos;M2, α2, or D2 receptor&apos; → &apos;Gi protein&apos;</text>
        <text x="340" y="172" fontSize="4" className="fill-foreground">the book&apos;s OWN i-family grouping — α2 rides the inhibitory</text>
        <text x="340" y="182" fontSize="4" className="fill-foreground">couple with the M2 heart brake and the D2 dopamine brake:</text>
        <text x="340" y="192" fontSize="4" className="fill-foreground">adenylyl cyclase ↓ → cAMP ↓ → the terminal&apos;s release</text>
        <text x="340" y="202" fontSize="4" className="fill-foreground">machinery quiets — the presynaptic brake in molecule form</text>
        <text x="340" y="216" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the Gi figure prints on the second-messenger page (PH16, completed)</text>
        <text x="340" y="228" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the peripheral α2 addresses print on book 236 (the strip below)</text>
        {/* inter-box arrow 2 */}
        <line x1="622" y1="180" x2="638" y2="180" stroke="currentColor" strokeWidth="0.8" className="text-border" />
        <polygon points="638,180 632,177 632,183" className="fill-border" />
        {/* right box — the function */}
        <rect x="640" y="102" width="304" height="156" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="652" y="114" fontSize="4.8" fontWeight="800" className="fill-neural">THE FUNCTION (book 237)</text>
        <text x="652" y="136" fontSize="5.2" fontWeight="800" className="fill-foreground">&apos;↓ sympathetic (adrenergic) outflow&apos;</text>
        <text x="652" y="152" fontSize="4" className="fill-foreground">the α2 row&apos;s FIRST printed major function — the one this</text>
        <text x="652" y="162" fontSize="4" className="fill-foreground">whole block rides: the CNS-driven sympathetic signal falls</text>
        <text x="652" y="178" fontSize="4.4" fontWeight="700" className="fill-foreground">→ ↓ heart rate · ↓ contractility · ↓ renin · ↓ vascular tone</text>
        <text x="652" y="194" fontSize="4" className="fill-foreground">the same end-organ story the β-blockers (one page ahead)</text>
        <text x="652" y="204" fontSize="4" className="fill-foreground">achieve by blocking the receptor instead of the outflow</text>
        <text x="652" y="220" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the central/medullary location of the clonidine effect is</text>
        <text x="652" y="230" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">NOT printed on this page or its anchors (KYP flag)</text>
      </g>

      {/* ===== THE THREE DRUG CARDS ===== */}
      <g>
        <text x="40" y="282" fontSize="6.4" fontWeight="800" className="fill-foreground">THE THREE DRUG CARDS — the printed table, row by row (book 243, verbatim cells) · the PATIENT-SORT: who gets which row (KYP)</text>
        {/* card 1 — clonidine, guanfacine */}
        <rect x="24" y="290" width="296" height="272" rx="10" className="fill-card stroke-brand" strokeWidth="1.4" />
        <text x="36" y="306" fontSize="5.6" fontWeight="800" className="fill-brand">Clonidine, guanfacine</text>
        <text x="36" y="316" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the four-use headliner — the C.A.T.S. herd (KYP)</text>
        <text x="36" y="332" fontSize="4.4" fontWeight="800" className="fill-foreground">APPLICATIONS, verbatim</text>
        <text x="36" y="344" fontSize="4.2" className="fill-foreground">&apos;Hypertensive urgency (limited situations),</text>
        <text x="36" y="354" fontSize="4.2" className="fill-foreground">ADHD, Tourette syndrome, symptom control</text>
        <text x="36" y="364" fontSize="4.2" className="fill-foreground">in opioid withdrawal&apos;</text>
        <text x="36" y="380" fontSize="4.4" fontWeight="800" className="fill-foreground">ADVERSE EFFECTS, verbatim</text>
        <text x="36" y="392" fontSize="4.2" className="fill-foreground">&apos;CNS depression, bradycardia, hypotension,</text>
        <text x="36" y="402" fontSize="4.2" className="fill-foreground">respiratory depression, miosis, rebound</text>
        <text x="36" y="412" fontSize="4.2" className="fill-foreground">hypertension with abrupt cessation&apos;</text>
        <text x="36" y="428" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">every finding is the brake overshooting — except the</text>
        <text x="36" y="437" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">last: the REBOUND clause is the taper rule (never stop</text>
        <text x="36" y="446" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">cold; taper over days; restart if it rebounds)</text>
        <text x="36" y="460" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the four uses: C.A.T.S. (KYP) — Crisis-adjacent</text>
        <text x="36" y="469" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">hypertensive urgency, ADHD, Tourette tics, opioid-</text>
        <text x="36" y="478" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">withdrawal Symptoms; the MIOSIS makes the overdose</text>
        <text x="36" y="487" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the opioid toxidrome&apos;s twin (the pupil sorts them)</text>
        {/* card 2 — α-methyldopa */}
        <rect x="332" y="290" width="296" height="272" rx="10" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="344" y="306" fontSize="5.6" fontWeight="800" className="fill-emergency">α-methyldopa</text>
        <text x="344" y="316" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the MOM drug + the COOMBS triad (KYP)</text>
        <text x="344" y="332" fontSize="4.4" fontWeight="800" className="fill-foreground">APPLICATIONS, verbatim</text>
        <text x="344" y="344" fontSize="4.2" className="fill-foreground">&apos;Hypertension in pregnancy&apos;</text>
        <text x="344" y="358" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the pregnancy-safe antihypertensive (with labetalol and</text>
        <text x="344" y="367" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">nifedipine; the ACE inhibitors/ARBs are contraindicated)</text>
        <text x="344" y="383" fontSize="4.4" fontWeight="800" className="fill-foreground">ADVERSE EFFECTS, verbatim</text>
        <text x="344" y="395" fontSize="4.2" className="fill-foreground">&apos;Direct Coombs ⊕ hemolysis,</text>
        <text x="344" y="405" fontSize="4.2" className="fill-foreground">drug-induced lupus, hyperprolactinemia&apos;</text>
        <text x="344" y="421" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the autoimmune triad: the positive DIRECT antiglobulin</text>
        <text x="344" y="430" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">test (warm AIHA, spherocytes — stop the drug; the test</text>
        <text x="344" y="439" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">lags months), the drug-lupus list (hydralazine,</text>
        <text x="344" y="448" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">procainamide, isoniazid), and the prolactin axis</text>
        <text x="344" y="462" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">KYP flag: the prodrug conversion to</text>
        <text x="344" y="471" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">α-methylnorepinephrine (the false neurotransmitter</text>
        <text x="344" y="480" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">that stimulates the central α2 receptor) is NOT printed</text>
        {/* card 3 — tizanidine */}
        <rect x="640" y="290" width="296" height="272" rx="10" className="fill-card stroke-warning" strokeWidth="1.4" />
        <text x="652" y="306" fontSize="5.6" fontWeight="800" className="fill-warning">Tizanidine</text>
        <text x="652" y="316" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the T-drug for TONE (KYP)</text>
        <text x="652" y="332" fontSize="4.4" fontWeight="800" className="fill-foreground">APPLICATIONS, verbatim</text>
        <text x="652" y="344" fontSize="4.2" className="fill-foreground">&apos;Relief of spasticity&apos;</text>
        <text x="652" y="358" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the MS / spinal-cord-injury / cerebral-palsy spasticity</text>
        <text x="652" y="367" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">lane — the α2 brake aimed at the muscle tone</text>
        <text x="652" y="383" fontSize="4.4" fontWeight="800" className="fill-foreground">ADVERSE EFFECTS, verbatim</text>
        <text x="652" y="395" fontSize="4.2" className="fill-foreground">&apos;Hypotension, weakness, xerostomia&apos;</text>
        <text x="652" y="411" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the hypotension is the brake overshooting (row 1&apos;s</text>
        <text x="652" y="420" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">direction); the xerostomia is the peripheral α2 salivary</text>
        <text x="652" y="429" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">address: &apos;Inhibition of salivary secretion&apos; (book 236)</text>
        <text x="652" y="443" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the muscle-relaxant sort: tizanidine (α2 agonist) vs</text>
        <text x="652" y="452" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">baclofen (GABA-B) vs benzodiazepines (GABA-A) vs</text>
        <text x="652" y="461" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">dantrolene (ryanodine receptor — peripheral)</text>
        <text x="652" y="475" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the taper rule applies here too — abrupt cessation</text>
        <text x="652" y="484" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">can rebound the pressure and the spasticity</text>
      </g>

      {/* ===== THE THREE TOXICITY PICTURES ===== */}
      <g>
        <rect x="24" y="576" width="932" height="132" rx="10" className="fill-card stroke-emergency" strokeWidth="1.2" />
        <text x="40" y="594" fontSize="7" fontWeight="800" className="fill-foreground">THE THREE TOXICITY PICTURES — every printed cell is the dimmer at one setting (the frame is KYP&apos;s; the cells are the book&apos;s)</text>
        <rect x="36" y="604" width="292" height="94" rx="7" className="fill-secondary/20 stroke-emergency" />
        <text x="46" y="618" fontSize="4.6" fontWeight="800" className="fill-emergency">THE OVERSHOOT PICTURE — the overdose</text>
        <text x="46" y="630" fontSize="4" className="fill-foreground">&apos;CNS depression, bradycardia, hypotension,</text>
        <text x="46" y="640" fontSize="4" className="fill-foreground">respiratory depression, miosis&apos; — the opioid-like</text>
        <text x="46" y="650" fontSize="4" className="fill-foreground">toxidrome: the toddler with grandparent&apos;s patch;</text>
        <text x="46" y="660" fontSize="4" className="fill-foreground">manage supportively (naloxone is the sometimes-</text>
        <text x="46" y="670" fontSize="4" className="fill-foreground">working adjunct) — the dimmer at zero</text>
        <rect x="340" y="604" width="292" height="94" rx="7" className="fill-secondary/20 stroke-brand" />
        <text x="350" y="618" fontSize="4.6" fontWeight="800" className="fill-brand">THE REBOUND PICTURE — the taper rule</text>
        <text x="350" y="630" fontSize="4" className="fill-foreground">&apos;rebound hypertension with abrupt cessation&apos; — the</text>
        <text x="350" y="640" fontSize="4" className="fill-foreground">missed-dose patient returns hypertensive, tachycardic,</text>
        <text x="350" y="650" fontSize="4" className="fill-foreground">agitated, diaphoretic: restart and taper over days —</text>
        <text x="350" y="660" fontSize="4" className="fill-foreground">not a new pheochromocytoma workup; the knob</text>
        <text x="350" y="670" fontSize="4" className="fill-foreground">snapped back (the printed clause of row 1&apos;s cell)</text>
        <rect x="644" y="604" width="292" height="94" rx="7" className="fill-secondary/20 stroke-neural" />
        <text x="654" y="618" fontSize="4.6" fontWeight="800" className="fill-neural">THE AUTOIMMUNE PICTURE — the triad</text>
        <text x="654" y="630" fontSize="4" className="fill-foreground">&apos;Direct Coombs ⊕ hemolysis&apos; (warm AIHA; stop the</text>
        <text x="654" y="640" fontSize="4" className="fill-foreground">drug — the test may lag months), &apos;drug-induced</text>
        <text x="654" y="650" fontSize="4" className="fill-foreground">lupus&apos; (the ANA-positive mimic), &apos;hyperprolactinemia&apos;</text>
        <text x="654" y="660" fontSize="4" className="fill-foreground">(the dopamine-axis finding) — three organ systems,</text>
        <text x="654" y="670" fontSize="4" className="fill-foreground">one drug: the lab question of the methyldopa row</text>
      </g>

      {/* ===== THE α2 = Gi LINK BAND ===== */}
      <g>
        <rect x="24" y="722" width="932" height="76" rx="10" className="fill-card stroke-success" strokeWidth="1.2" />
        <text x="40" y="740" fontSize="6.4" fontWeight="800" className="fill-foreground">THE α2 = Gi LINK — the book&apos;s OWN inhibitory-family grouping (book 237) + the peripheral α2 addresses (book 236)</text>
        <rect x="36" y="750" width="440" height="40" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="46" y="764" fontSize="4.4" fontWeight="800" className="fill-success">&apos;M2, α2, or D2 receptor&apos; → &apos;Gi protein&apos; (figure labels, verbatim)</text>
        <text x="46" y="776" fontSize="4" className="fill-foreground">α2 rides the i-family with the M2 heart brake and the D2 dopamine brake — α2 = Gi = ↓ cAMP</text>
        <rect x="488" y="750" width="456" height="40" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="498" y="764" fontSize="4.2" fontWeight="800" className="fill-success">&apos;α2&apos; | &apos;Pancreas / Presynaptic terminals / Salivary glands&apos;</text>
        <text x="498" y="776" fontSize="4" className="fill-foreground">→ &apos;Inhibition of insulin secretion / of neurotransmitter release / of salivary secretion&apos; (book 236, verbatim)</text>
      </g>

      {/* ===== THE BOUNDARY STRIP ===== */}
      <g>
        <rect x="24" y="812" width="932" height="66" rx="10" className="fill-card stroke-border" />
        <text x="40" y="828" fontSize="6.2" fontWeight="800" className="fill-foreground">THE BOUNDARY — book 243 prints TWO sections under the one banner (the PH22/alpha-blockers split, pinned from above)</text>
        <text x="40" y="842" fontSize="4.4" className="fill-foreground">ABOVE (lines 9-37): THIS block — &apos;Sympatholytics (α2-agonists)&apos;, the AGONIST side of the receptor. BELOW (lines 39-78): the α-blockers class table — the PENDING</text>
        <text x="40" y="852" fontSize="4.4" className="fill-foreground">alpha-blockers topic, EXCLUDED here — its last row is the receptor mirror: &apos;α2 selective&apos; + &apos;Mirtazapine&apos; → &apos;Depression.&apos; — the ANTAGONIST that releases the brake</text>
        <text x="40" y="862" fontSize="4.4" className="fill-foreground">(noradrenergic outflow UP = the antidepressant direction; its own cells are that topic&apos;s print, cited as the mirror only)</text>
        <text x="40" y="874" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">EXTENT: pdf 264 behind carries only the sympathomimetics tail (the physiologic-effects graphs); pdf 266 ahead opens &apos;β-blockers&apos; — this block does NOT extend there; sourcePages = [265] only</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="892" width="932" height="46" rx="10" className="fill-card stroke-border" />
        <text x="490" y="906" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">Every drug, application, and adverse-effect cell is the book&apos;s own print (book 243, pdf 265, UPPER portion) — pure text, zero rasters, never reproduced: an original KYP adaptation</text>
        <text x="490" y="918" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">KYP extensions flagged: the SYMPATHETIC-DIMMER frame (the central/medullary location is NOT printed) · the PATIENT-SORT frame · MOM + COOMBS · the prodrug flag (α-methylnorepinephrine — not printed)</text>
        <text x="490" y="930" textAnchor="middle" fontSize="4.8" fontWeight="700" className="fill-muted-foreground">The three cross-page anchors are printed on the completed pages: book 238 (the autoreceptor sentence) · book 237 (the α2 | i row + the Gi figure) · book 236 (the distribution row)</text>
      </g>
    </svg>
  );
}

export function AlphaBlockerMap() {
  const w = 980;
  const h = 950;
  // An original KYP visual of the ALPHA-BLOCKERS block — the LOWER
  // portion of book 243 (pdf 265, lines 39-80, under the standing
  // 'PHARMACOLOGY—AUTONOMIC DRUGS' banner; the UPPER portion of the
  // same page is the Sympatholytics (α2-agonists) table — the COMPLETED
  // PH22 — EXCLUDED here, only its boundary pinned from below, its
  // clonidine/guanfacine agonists cited as the α2 receptor mirror of
  // this table's mirtazapine row). Census (pdfimages + text layer): the
  // block prints the section header 'α-blockers' and ONE three-column
  // table (DRUG / APPLICATIONS / ADVERSE EFFECTS) of four rows grouped
  // by selectivity — 'Nonselective' + 'Phenoxybenzamine' →
  // 'Irreversible. Pheochromocytoma (used preoperatively) to prevent
  // catecholamine (hypertensive) crisis.'; 'Phentolamine' →
  // 'Reversible. Given to patients on MAO inhibitors who eat
  // tyramine-containing foods and for severe cocaine-induced
  // hypertension (2nd line). Also used to treat norepinephrine
  // extravasation.' (shared adverse cell: 'Orthostatic hypotension,
  // reflex tachycardia.'); 'α1 selective (-osin ending)' + 'Prazosin,
  // terazosin, doxazosin, tamsulosin' → 'Urinary symptoms of BPH; PTSD
  // (prazosin); hypertension (except tamsulosin).' | '1st-dose
  // orthostatic hypotension, dizziness, headache.'; 'α2 selective' +
  // 'Mirtazapine' → 'Depression.' | 'Sedation, ↑ serum cholesterol, ↑
  // appetite.' — PURE TEXT with ZERO rasters on pdf 265 — COPYRIGHTED,
  // never reproduced as artwork; carried VERBATIM in the note's two
  // table blocks and conveyed here as ONE original KYP selectivity-fork
  // map (ORIGINAL_KYP_ADAPTATION — every drug, group label,
  // application, and adverse-effect cell is the book's own; the fork
  // frame, the lane sort, the pheo protocol, and the first-dose rule
  // are KYP's). KYP extensions flagged wherever they appear: the
  // THREE-WAY FORK frame, the PHEO-PROTOCOL frame (the α-before-β
  // ordering rule is NOT printed — flagged), the -OSIN SUFFIX frame +
  // the α1A subtype reading of 'except tamsulosin' (not printed), the
  // FIRST-DOSE frame (the bedtime rule is NOT printed — flagged), and
  // the EPINEPHRINE-REVERSAL LINK (the graphs print on book 242 in the
  // sympathomimetics context — the attribution to the nonselective
  // rows is KYP's bridge). The cross-page anchors are printed on the
  // completed pages: book 237 (the α1 | q row), book 236 (the α1
  // distribution row + the micturition page's own 'α1-antagonists (eg,
  // tamsulosin)' → BPH row), book 238 (the presynaptic α2-autoreceptor
  // sentence), book 242 (the 'After α-blockade' graphs). Color code:
  // nonselective = emergency (red), α1-selective = brand (blue),
  // α2-selective = neural (purple), the mechanism strip = neural
  // (purple) with success (green) for the opening, the reversal band =
  // warning (amber). JSX text uses &gt; / &amp; / &apos; / &quot;
  // escapes where needed (no raw > or & appears in text runs).
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Alpha-blockers — the selectivity fork (an original KYP visual of the α-blockers block, book 243, pdf 265, the LOWER portion of the page, below the excluded Sympatholytics α2-agonists table of the completed PH22. THE TABLE, verbatim — DRUG / APPLICATIONS / ADVERSE EFFECTS, four rows in three selectivity groups: Nonselective — phenoxybenzamine, irreversible, pheochromocytoma used preoperatively to prevent catecholamine (hypertensive) crisis; phentolamine, reversible, for MAO-inhibitor patients who eat tyramine-containing foods, severe cocaine-induced hypertension (2nd line), and norepinephrine extravasation; shared adverse cell — orthostatic hypotension, reflex tachycardia. α1 selective (-osin ending) — prazosin, terazosin, doxazosin, tamsulosin: urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin); 1st-dose orthostatic hypotension, dizziness, headache. α2 selective — mirtazapine: depression; sedation, ↑ serum cholesterol, ↑ appetite. THE MECHANISM, assembled from printed anchors on books 236-238 and 242: α1 rides Gq (α1 | q, book 237) at the vascular and visceral smooth-muscle addresses (book 236) — blockade relaxes the vessel (the hypertension use) and the bladder neck and prostate (the BPH use, the micturition page's own tamsulosin row); the nonselective rows also take the presynaptic α2 autoreceptor (book 238), one substrate of the reflex tachycardia; mirtazapine releases that brake on purpose (the antidepressant direction — the receptor mirror of the completed PH22's agonists on the same page above); and with α blocked, epinephrine's pressor response reverses to a depressor one (book 242's After-α-blockade graphs). The three-way fork frame, the pheo protocol (α-blockade before β-blockade — not printed), the α1A subtype reading of except tamsulosin (not printed), and the first-dose bedtime rule (not printed) are KYP extensions, flagged; the block is pure text with zero rasters, never reproduced — an original KYP adaptation; the sympatholytics α2-agonists table above on the same book-243 page (the completed PH22) and the β-blockers page on pdf 266 ahead (the pending topic) are EXCLUDED)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Alpha-blockers — the selectivity fork (original KYP visual of book 243)</text>
        <rect x="700" y="24" width="232" height="18" rx="4" className="fill-secondary/20" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">3 selectivities · 6 drugs · 6 lanes</text>
      </g>

      {/* ===== THE MECHANISM STRIP — THE α1 SQUEEZE, BLOCKED ===== */}
      <g>
        <rect x="24" y="72" width="932" height="180" rx="10" className="fill-card stroke-neural" strokeWidth="1.4" />
        <text x="40" y="92" fontSize="7" fontWeight="800" className="fill-foreground">THE MECHANISM — THE α1 SQUEEZE, BLOCKED: one Gq-coupled receptor at two smooth-muscle addresses (anchors printed on books 236/237; the fork frame is KYP&apos;s)</text>
        {/* left box — the squeeze */}
        <rect x="36" y="102" width="268" height="146" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="48" y="116" fontSize="4.8" fontWeight="800" className="fill-neural">THE SQUEEZE (books 236-237)</text>
        <text x="48" y="134" fontSize="6" fontWeight="800" className="fill-foreground">&apos;α1&apos; | &apos;q&apos;</text>
        <text x="48" y="150" fontSize="4" className="fill-foreground">&apos;↑ vascular smooth muscle contraction, ↑ pupillary</text>
        <text x="48" y="160" fontSize="4" className="fill-foreground">dilator muscle contraction (mydriasis), ↑ intestinal</text>
        <text x="48" y="170" fontSize="4" className="fill-foreground">and bladder sphincter muscle contraction&apos; (book 237)</text>
        <text x="48" y="188" fontSize="3.8" className="fill-foreground">the distribution row (book 236): &apos;α1&apos; | &apos;Vascular</text>
        <text x="48" y="197" fontSize="3.8" className="fill-foreground">smooth muscle / Visceral smooth muscle&apos; →</text>
        <text x="48" y="206" fontSize="3.8" className="fill-foreground">&apos;Vasoconstriction / Smooth muscle contraction&apos; —</text>
        <text x="48" y="215" fontSize="3.8" className="fill-foreground">α1 = the Gq couple: PLC → IP3/DAG → Ca2+ → the squeeze</text>
        <text x="48" y="231" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">three printed addresses = three clinical stories: the vessel,</text>
        <text x="48" y="240" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the pupil, the bladder sphincter</text>
        {/* inter-box arrow 1 */}
        <line x1="306" y1="175" x2="322" y2="175" stroke="currentColor" strokeWidth="0.8" className="text-border" />
        <polygon points="322,175 316,172 316,178" className="fill-border" />
        {/* middle box — the blockade */}
        <rect x="324" y="102" width="296" height="146" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="340" y="116" fontSize="4.8" fontWeight="800" className="fill-neural">THE BLOCKADE (book 243&apos;s DRUG column)</text>
        <text x="340" y="134" fontSize="4" className="fill-foreground">the drug OCCUPIES the receptor: phenoxybenzamine</text>
        <text x="340" y="144" fontSize="4" className="fill-foreground">&apos;Irreversible.&apos; (covalent — no surge displaces it) vs</text>
        <text x="340" y="154" fontSize="4" className="fill-foreground">phentolamine + the -osins &apos;Reversible.&apos; (competitive)</text>
        <text x="340" y="172" fontSize="4" className="fill-foreground">the NONSELECTIVE rows also take the presynaptic α2 brake</text>
        <text x="340" y="182" fontSize="4" className="fill-foreground">— &apos;presynaptic α2-autoreceptors → negative feedback.&apos;</text>
        <text x="340" y="192" fontSize="4" className="fill-foreground">(book 238): the brake off → NE release ↑ → one substrate</text>
        <text x="340" y="202" fontSize="4" className="fill-foreground">of the printed &apos;reflex tachycardia.&apos;</text>
        <text x="340" y="220" fontSize="4" className="fill-foreground">mirtazapine takes the brake ALONE, on purpose — the</text>
        <text x="340" y="230" fontSize="4" className="fill-foreground">antidepressant direction (the fork&apos;s third arm, below)</text>
        <text x="340" y="243" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the binding chemistry is the first word of each cell:</text>
        {/* inter-box arrow 2 */}
        <line x1="622" y1="175" x2="638" y2="175" stroke="currentColor" strokeWidth="0.8" className="text-border" />
        <polygon points="638,175 632,172 632,178" className="fill-border" />
        {/* right box — the opening */}
        <rect x="640" y="102" width="304" height="146" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="652" y="116" fontSize="4.8" fontWeight="800" className="fill-success">THE OPENING (two specialties, one receptor)</text>
        <text x="652" y="134" fontSize="4" className="fill-foreground">the VESSEL relaxes → ↓ vascular tone → ↓ BP (the</text>
        <text x="652" y="144" fontSize="4" className="fill-foreground">hypertension lane: prazosin/terazosin/doxazosin —</text>
        <text x="652" y="154" fontSize="4" className="fill-foreground">&apos;except tamsulosin&apos;)</text>
        <text x="652" y="172" fontSize="4" className="fill-foreground">the BLADDER NECK + PROSTATE relax → &apos;↓ urinary</text>
        <text x="652" y="182" fontSize="4" className="fill-foreground">obstruction&apos; (the BPH lane — book 236&apos;s own row:</text>
        <text x="652" y="192" fontSize="4" className="fill-foreground">&apos;α1-antagonists (eg, tamsulosin)&apos; → &apos;BPH&apos;)</text>
        <text x="652" y="210" fontSize="4" className="fill-foreground">and with α blocked, exogenous epinephrine REVERSES</text>
        <text x="652" y="220" fontSize="4" className="fill-foreground">(book 242&apos;s &apos;After α-blockade&apos; graph — the band below)</text>
        <text x="652" y="236" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">one drug class doing cardiology (the vessel) and urology</text>
        <text x="652" y="245" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">(the bladder neck) at once</text>
      </g>

      {/* ===== THE THREE-WAY FORK — THE DRUG CARDS ===== */}
      <g>
        <text x="40" y="270" fontSize="6.4" fontWeight="800" className="fill-foreground">THE THREE-WAY FORK — the printed table, group by group (book 243, verbatim cells) · the LANE-SORT: who gets which row (KYP)</text>
        {/* card 1 — nonselective */}
        <rect x="24" y="278" width="296" height="324" rx="10" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="36" y="294" fontSize="5.6" fontWeight="800" className="fill-emergency">Nonselective — α1 + α2 blocked</text>
        <text x="36" y="304" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the emergency lane — catecholamine storms (PHENOXY = PERMANENT, KYP)</text>
        <rect x="36" y="312" width="272" height="112" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="46" y="324" fontSize="4.4" fontWeight="800" className="fill-emergency">Phenoxybenzamine — &apos;Irreversible.&apos;</text>
        <text x="46" y="337" fontSize="4" className="fill-foreground">&apos;Pheochromocytoma (used preoperatively) to</text>
        <text x="46" y="347" fontSize="4" className="fill-foreground">prevent catecholamine (hypertensive) crisis.&apos;</text>
        <text x="46" y="361" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">covalent (noncompetitive) — the tumor&apos;s surge cannot</text>
        <text x="46" y="370" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">displace it: the storm-proof PHEO pretreatment</text>
        <text x="46" y="379" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">KYP flag: the α-BEFORE-β rule is NOT printed (a β-blocker</text>
        <text x="46" y="388" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">first leaves the surge on UNOPPOSED α1 → the very crisis)</text>
        <rect x="36" y="432" width="272" height="118" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="46" y="444" fontSize="4.4" fontWeight="800" className="fill-emergency">Phentolamine — &apos;Reversible.&apos;</text>
        <text x="46" y="457" fontSize="3.8" className="fill-foreground">&apos;Given to patients on MAO inhibitors who eat</text>
        <text x="46" y="467" fontSize="3.8" className="fill-foreground">tyramine-containing foods and for severe cocaine-</text>
        <text x="46" y="477" fontSize="3.8" className="fill-foreground">induced hypertension (2nd line). Also used to treat</text>
        <text x="46" y="487" fontSize="3.8" className="fill-foreground">norepinephrine extravasation.&apos;</text>
        <text x="46" y="501" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">competitive, titratable — the crisis tool: the MAOI-</text>
        <text x="46" y="510" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">tyramine reaction, cocaine HTN (2nd line), the</text>
        <text x="46" y="519" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">extravasated-NE rescue (the drawn-up intraop drug)</text>
        <text x="36" y="560" fontSize="4.2" fontWeight="800" className="fill-foreground">ADVERSE EFFECTS (the shared cell), verbatim</text>
        <text x="36" y="571" fontSize="4.2" className="fill-foreground">&apos;Orthostatic hypotension, reflex tachycardia.&apos;</text>
        <text x="36" y="584" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">venous pooling + the unbraked baroreflex (the α2 brake</text>
        <text x="36" y="593" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">also taken, book 238) — the shared fingerprint of both rows</text>
        {/* card 2 — α1 selective */}
        <rect x="332" y="278" width="296" height="324" rx="10" className="fill-card stroke-brand" strokeWidth="1.4" />
        <text x="344" y="294" fontSize="5.6" fontWeight="800" className="fill-brand">α1 selective — &apos;(-osin ending)&apos;</text>
        <text x="344" y="304" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the chronic lane — the vessel + the prostate (the book&apos;s own suffix label)</text>
        <text x="344" y="322" fontSize="4.8" fontWeight="800" className="fill-foreground">Prazosin, terazosin, doxazosin, tamsulosin</text>
        <text x="344" y="338" fontSize="4.4" fontWeight="800" className="fill-foreground">APPLICATIONS, verbatim</text>
        <text x="344" y="350" fontSize="4" className="fill-foreground">&apos;Urinary symptoms of BPH; PTSD (prazosin);</text>
        <text x="344" y="360" fontSize="4" className="fill-foreground">hypertension (except tamsulosin).&apos;</text>
        <text x="344" y="374" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the two parentheticals are the exam (KYP): &apos;PTSD</text>
        <text x="344" y="383" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">(prazosin)&apos; — the nightmare use, prazosin alone;</text>
        <text x="344" y="392" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">&apos;except tamsulosin&apos; — the prostate member (the α1A</text>
        <text x="344" y="401" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">subtype story is NOT printed; the printed bridge is</text>
        <text x="344" y="410" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">book 236&apos;s tamsulosin row) — the BP-sparing member</text>
        <text x="344" y="430" fontSize="4.4" fontWeight="800" className="fill-foreground">ADVERSE EFFECTS, verbatim</text>
        <text x="344" y="442" fontSize="4" className="fill-foreground">&apos;1st-dose orthostatic hypotension, dizziness,</text>
        <text x="344" y="452" fontSize="4" className="fill-foreground">headache.&apos;</text>
        <text x="344" y="466" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">FIRST DOSE, FIRST FALL (KYP): a FIRST-dose phenomenon</text>
        <text x="344" y="475" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">(worst with prazosin, the elderly, the volume-depleted) —</text>
        <text x="344" y="484" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the first dose goes to BEDTIME, start low, titrate slow</text>
        <text x="344" y="493" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">(the bedtime rule is NOT printed — KYP flag)</text>
        <text x="344" y="513" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the urology sort: the -osins open the DYNAMIC component</text>
        <text x="344" y="522" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">(days — smooth-muscle relaxation); the 5α-reductase</text>
        <text x="344" y="531" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">inhibitors shrink the STATIC gland (months — finasteride);</text>
        <text x="344" y="540" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">in the falls-risk BPH patient → tamsulosin, the except member</text>
        {/* card 3 — α2 selective */}
        <rect x="640" y="278" width="296" height="324" rx="10" className="fill-card stroke-neural" strokeWidth="1.4" />
        <text x="652" y="294" fontSize="5.6" fontWeight="800" className="fill-neural">α2 selective — the antagonist mirror</text>
        <text x="652" y="304" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the psychiatric lane — the brake RELEASED (the mirror row, KYP)</text>
        <text x="652" y="322" fontSize="4.8" fontWeight="800" className="fill-foreground">Mirtazapine</text>
        <text x="652" y="338" fontSize="4.4" fontWeight="800" className="fill-foreground">APPLICATIONS, verbatim</text>
        <text x="652" y="350" fontSize="4" className="fill-foreground">&apos;Depression.&apos;</text>
        <text x="652" y="364" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the α2 ANTAGONIST: the book-238 brake released →</text>
        <text x="652" y="373" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">noradrenergic outflow ↑ → the antidepressant direction</text>
        <text x="652" y="390" fontSize="4.4" fontWeight="800" className="fill-foreground">ADVERSE EFFECTS, verbatim</text>
        <text x="652" y="402" fontSize="4" className="fill-foreground">&apos;Sedation, ↑ serum cholesterol, ↑ appetite.&apos;</text>
        <text x="652" y="416" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">MIRTAZAPINE MUNCHES AND SNOOZES (KYP): the metabolic</text>
        <text x="652" y="425" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">set the psychiatry chapters recycle — often the therapeutic</text>
        <text x="652" y="434" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">reason the drug was chosen (the depressed patient not</text>
        <text x="652" y="443" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">sleeping, not eating); no hemodynamics in this cell at all</text>
        <text x="652" y="463" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">THE SAME-PAGE MIRROR: the table ABOVE (the completed</text>
        <text x="652" y="472" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">PH22) prints the α2 AGONISTS — clonidine/guanfacine PULL</text>
        <text x="652" y="481" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the brake (outflow ↓, BP ↓); this row RELEASES it (outflow</text>
        <text x="652" y="490" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">↑ → &apos;Depression.&apos;) — one receptor, two directions, two</text>
        <text x="652" y="499" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">tables, one page; the nonselective rows take the brake too</text>
        <text x="652" y="519" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the exam&apos;s sort: depression with insomnia + weight loss →</text>
        <text x="652" y="528" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">mirtazapine; PTSD nightmares → prazosin (the middle card);</text>
        <text x="652" y="537" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">hypertension/ADHD/withdrawal/spasticity → the agonist table</text>
        <text x="652" y="546" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">above; never mirtazapine as an antihypertensive</text>
      </g>

      {/* ===== THE THREE TOXICITY FINGERPRINTS ===== */}
      <g>
        <rect x="24" y="612" width="932" height="118" rx="10" className="fill-card stroke-emergency" strokeWidth="1.2" />
        <text x="40" y="630" fontSize="7" fontWeight="800" className="fill-foreground">THE THREE TOXICITY FINGERPRINTS — every printed adverse cell is one fingerprint (the cells are the book&apos;s; the management flags are KYP&apos;s)</text>
        <rect x="36" y="640" width="292" height="80" rx="7" className="fill-secondary/20 stroke-emergency" />
        <text x="46" y="654" fontSize="4.6" fontWeight="800" className="fill-emergency">THE NONSELECTIVE PICTURE — the emergency lane</text>
        <text x="46" y="666" fontSize="4" className="fill-foreground">&apos;Orthostatic hypotension, reflex tachycardia.&apos; — the</text>
        <text x="46" y="676" fontSize="4" className="fill-foreground">venous pooling + the unbraked baroreflex; recognition:</text>
        <text x="46" y="686" fontSize="4" className="fill-foreground">epinephrine&apos;s pressor response REVERSES under this</text>
        <text x="46" y="696" fontSize="4" className="fill-foreground">blockade (the band below); counsel: rise slowly</text>
        <text x="46" y="708" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the two rows share this cell — one fingerprint, both drugs</text>
        <rect x="340" y="640" width="292" height="80" rx="7" className="fill-secondary/20 stroke-brand" />
        <text x="350" y="654" fontSize="4.6" fontWeight="800" className="fill-brand">THE FIRST-DOSE PICTURE — the HTN/BPH lane</text>
        <text x="350" y="666" fontSize="4" className="fill-foreground">&apos;1st-dose orthostatic hypotension, dizziness, headache.&apos;</text>
        <text x="350" y="676" fontSize="4" className="fill-foreground">— the printed &apos;1st-&apos; is the whole point: worst at the</text>
        <text x="350" y="686" fontSize="4" className="fill-foreground">first dose or after escalation (prazosin the potent one),</text>
        <text x="350" y="696" fontSize="4" className="fill-foreground">not a reason to abandon the class — tolerance develops</text>
        <text x="350" y="708" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">manage with dose timing (bedtime — KYP flag, not printed)</text>
        <rect x="644" y="640" width="292" height="80" rx="7" className="fill-secondary/20 stroke-neural" />
        <text x="654" y="654" fontSize="4.6" fontWeight="800" className="fill-neural">THE METABOLIC PICTURE — the psychiatric lane</text>
        <text x="654" y="666" fontSize="4" className="fill-foreground">&apos;Sedation, ↑ serum cholesterol, ↑ appetite.&apos; — no</text>
        <text x="654" y="676" fontSize="4" className="fill-foreground">hemodynamics at all: mirtazapine&apos;s fingerprint, the</text>
        <text x="654" y="686" fontSize="4" className="fill-foreground">metabolic opposite of a sympatholytic — often the</text>
        <text x="654" y="696" fontSize="4" className="fill-foreground">therapeutic reason the drug was chosen (sleep, intake)</text>
        <text x="654" y="708" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the cholesterol line is the follow-up lab the stem can ask</text>
      </g>

      {/* ===== THE EPINEPHRINE-REVERSAL BAND + THE α2 MIRROR ===== */}
      <g>
        <rect x="24" y="740" width="932" height="66" rx="10" className="fill-card stroke-warning" strokeWidth="1.2" />
        <text x="40" y="756" fontSize="6.2" fontWeight="800" className="fill-foreground">THE EPINEPHRINE-REVERSAL LINK (the graphs print on book 242, one page behind — the attribution to the nonselective rows is KYP&apos;s bridge) · THE α2 MIRROR (book 238)</text>
        <rect x="36" y="764" width="452" height="34" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="46" y="776" fontSize="4" className="fill-foreground">&apos;After α-blockade&apos; — &apos;Epinephrine response exhibits reversal of mean arterial pressure from a net</text>
        <text x="46" y="786" fontSize="4" className="fill-foreground">increase (the α response) to a net decrease (the β2 response).&apos; (book 242, verbatim)</text>
        <text x="46" y="795" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">and: &apos;Phenylephrine response is suppressed but not reversed... a &quot;pure&quot; α-agonist&apos; (book 242)</text>
        <rect x="496" y="764" width="448" height="34" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="506" y="776" fontSize="4" className="fill-foreground">&apos;presynaptic α2-autoreceptors → negative feedback.&apos; (book 238, verbatim) — the brake:</text>
        <text x="506" y="786" fontSize="4" className="fill-foreground">the agonists above PULL it (clonidine → outflow ↓); mirtazapine RELEASES it (outflow ↑)</text>
        <text x="506" y="795" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">and the nonselective rows take it too — one substrate of their printed &apos;reflex tachycardia.&apos;</text>
      </g>

      {/* ===== THE BOUNDARY STRIP ===== */}
      <g>
        <rect x="24" y="816" width="932" height="58" rx="10" className="fill-card stroke-border" />
        <text x="40" y="830" fontSize="6.2" fontWeight="800" className="fill-foreground">THE BOUNDARY — book 243 prints TWO sections under the one banner (the PH22/PH23 split, pinned from below)</text>
        <text x="40" y="842" fontSize="4.4" className="fill-foreground">ABOVE (lines 9-37): &apos;Sympatholytics (α2-agonists)&apos; — the COMPLETED PH22, the agonist side of the receptor story — EXCLUDED here; only its header + last row</text>
        <text x="40" y="852" fontSize="4.4" className="fill-foreground">pinned from below (&apos;Tizanidine&apos; → &apos;Relief of spasticity&apos;). BELOW (lines 39-78): THIS α-blockers class table — the antagonist side, its mirtazapine row the mirror.</text>
        <text x="40" y="864" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">EXTENT: pdf 264 behind carries the sympathomimetics tail (its &apos;After α-blockade&apos; graphs cited as anchors); pdf 266 ahead opens &apos;β-blockers&apos; (the PENDING topic — carvedilol/labetalol there combine α1 + β blockade); sourcePages = [265] only</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="884" width="932" height="46" rx="10" className="fill-card stroke-border" />
        <text x="490" y="898" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">Every drug, group label, application, and adverse-effect cell is the book&apos;s own print (book 243, pdf 265, LOWER portion) — pure text, zero rasters, never reproduced: an original KYP adaptation</text>
        <text x="490" y="910" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">KYP extensions flagged: the THREE-WAY FORK · the PHEO-PROTOCOL (α-before-β NOT printed) · the -OSIN/α1A subtype reading (not printed) · the FIRST-DOSE bedtime rule (NOT printed) · the epinephrine-reversal attribution (bridge)</text>
        <text x="490" y="922" textAnchor="middle" fontSize="4.8" fontWeight="700" className="fill-muted-foreground">The cross-page anchors are printed on the completed pages: book 237 (α1 | q) · book 236 (the α1 distribution row + the tamsulosin bladder row) · book 238 (the α2 brake) · book 242 (the α-blockade graphs)</text>
      </g>
    </svg>
  );
}

export function BetaBlockerMap() {
  const w = 980;
  const h = 1100;
  // An original KYP visual of the BETA-BLOCKERS block — the WHOLE of
  // book 244 (pdf 266, under the standing 'PHARMACOLOGY—AUTONOMIC
  // DRUGS' banner; the page behind, book 243, carries the two COMPLETED
  // same-page blocks — PH22 sympatholytics-alpha-2-agonists and PH23
  // alpha-blockers — only the α-blockers table's phenoxybenzamine row
  // and final mirtazapine row pinned from behind as boundary markers;
  // the page ahead, book 245, opens 'Phosphodiesterase inhibitors', the
  // PENDING next topic). Census (pdfimages + text layer): the block
  // prints the section header 'β-blockers' with the eleven-drug roster
  // 'Atenolol, betaxolol, bisoprolol, carvedilol, esmolol, labetalol,
  // metoprolol, nadolol, nebivolol, propranolol, timolol.'; the
  // three-column APPLICATION/ACTIONS/NOTES-EXAMPLES matrix of ten rows
  // (angina, glaucoma — Timolol, heart failure — Bisoprolol, carvedilol,
  // metoprolol (β-blockers curb mortality), hypertension — ↓ renin on
  // JG cells, hyperthyroidism/thyroid storm — Propranolol, HCM,
  // migraine — Effective for prevention, MI, SVT — Metoprolol, esmolol,
  // variceal bleeding — Nadolol, propranolol, carvedilol for no portal
  // circulation); the ADVERSE EFFECTS row 'Erectile dysfunction,
  // cardiovascular (bradycardia, AV block, HF), CNS (seizures, sleep
  // alterations), dyslipidemia (metoprolol), masked hypoglycemia,
  // asthma/COPD exacerbations' + the cocaine note 'unsubstantiated
  // concern for unopposed α-adrenergic stimulation'; and the SELECTIVITY
  // subtable of four rows with the book's OWN four printed mnemonics
  // ('A to M', 'N to Z', 'modified suffixes (instead of "-olol")',
  // 'NebivOlol increases NO') — PURE TEXT with ZERO rasters on pdf 266
  // — COPYRIGHTED, never reproduced as artwork; carried VERBATIM in the
  // note's two table blocks and conveyed here as ONE original KYP
  // selectivity/application map (ORIGINAL_KYP_ADAPTATION — every
  // application, action, notes cell, adverse bucket, selectivity group,
  // and printed mnemonic is the book's own; the four-lane frame, the
  // patient sort, and the three caution patients are KYP's, flagged).
  // KYP extensions flagged wherever they appear: the FOUR-LANE
  // SELECTIVITY frame (the mnemonics are the book's, the compression is
  // KYP's), the THREE CAUTION PATIENTS frame (cells printed; the
  // avoid-in-asthma, tachycardia-masking, and taper rules NOT printed —
  // flagged), the PHEO α-FIRST rule (NOT printed — anchored to book
  // 243's phenoxybenzamine row and this page's own cocaine note,
  // flagged), the T4→T3 conversion blockade (not printed), and the
  // essential-tremor use (not printed on this page). Verified absent
  // from the 2026 subtable: the ISA members (pindolol, acebutolol) and
  // any α2+β member — exactly four groups print. Color code: β1-
  // selective = brand (blue), nonselective = emergency (red), combined
  // β+α1 = neural (purple), nebivolol-NO = success (green), the caution
  // strip = warning (amber). JSX text uses &gt; / &amp; / &apos; /
  // &quot; escapes where needed (no raw > or & appears in text runs).
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Beta-blockers — the four-lane selectivity map (an original KYP visual of the β-blockers block, book 244, pdf 266, the whole page, between the completed α-blockers table of book 243 behind and the phosphodiesterase-inhibitors section of book 245 ahead. THE PAGE, verbatim — the header and roster: β-blockers — atenolol, betaxolol, bisoprolol, carvedilol, esmolol, labetalol, metoprolol, nadolol, nebivolol, propranolol, timolol. THE APPLICATION MATRIX (APPLICATION, ACTIONS, NOTES-EXAMPLES), ten rows: angina pectoris — ↓ heart rate and contractility → ↓ O2 consumption; glaucoma — ↓ production of aqueous humor, timolol; heart failure — blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality, bisoprolol, carvedilol, metoprolol (β-blockers curb mortality); hypertension — ↓ cardiac output, ↓ renin secretion (due to β1-receptor blockade on JG cells); hyperthyroidism and thyroid storm — symptom control (↓ heart rate, ↓ tremor), propranolol; hypertrophic cardiomyopathy — ↓ heart rate → ↑ filling time, relieving obstruction; migraine — ↓ nitric oxide production, effective for prevention; myocardial infarction — ↓ O2 demand (short-term), ↓ mortality (long-term); supraventricular tachycardia (eg, atrial fibrillation) — ↓ AV conduction velocity (class II antiarrhythmic), metoprolol, esmolol; variceal bleeding — ↓ hepatic venous pressure gradient and portal hypertension (prophylactic use), nadolol, propranolol, carvedilol for no portal circulation. THE ADVERSE EFFECTS row: erectile dysfunction, cardiovascular (bradycardia, AV block, HF), CNS (seizures, sleep alterations), dyslipidemia (metoprolol), masked hypoglycemia, asthma/COPD exacerbations — plus the printed note: use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation. THE SELECTIVITY subtable, four groups with the book's own mnemonics: β1-selective antagonists (β1 greater than β2) — atenolol, betaxolol, bisoprolol, esmolol, metoprolol — selective antagonists mostly go from A to M (β1 with 1st half of alphabet); nonselective antagonists (β1 = β2) — nadolol, propranolol, timolol — nonselective antagonists mostly go from N to Z (β2 with 2nd half of alphabet); nonselective β-adrenergic, α1-selective antagonists — carvedilol, labetalol — modified suffixes (instead of -olol); nebivolol — cardiac-selective β1 blockade plus β3-receptor stimulation (NO synthase → ↓ SVR) — NebivOlol increases NO. THE MECHANISM, assembled from printed anchors on books 236 and 237: β1 and β2 both ride Gs; β1 sits at the heart and kidney (rate, contractility, renin — the JG-cell address), β2 at the bronchioles, liver, arterial smooth muscle, and ciliary body (bronchodilation, glycogenolysis, vasodilation, aqueous humor) — blockade gives the ten uses and the caution set in one mechanism. The four-lane frame, the three caution patients (the asthmatic, the brittle diabetic, the cocaine user), the pheo α-first rule (not printed), the taper rule (not printed), the T4-to-T3 conversion blockade (not printed), and the essential-tremor use (not printed on this page) are KYP extensions, flagged; verified absent from the 2026 subtable: the ISA members pindolol and acebutolol and any α2+β member; the block is pure text with zero rasters, never reproduced — an original KYP adaptation; the book-243 tables behind (the completed PH22 and PH23) and the phosphodiesterase-inhibitors page ahead are EXCLUDED)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Beta-blockers — the four-lane selectivity map (original KYP visual of book 244)</text>
        <rect x="700" y="24" width="232" height="18" rx="4" className="fill-secondary/20" />
        <text x="816" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">4 lanes · 11 drugs · 10 uses</text>
      </g>

      {/* ===== THE MECHANISM STRIP — THE β-Gs COUPLE, BLOCKED ===== */}
      <g>
        <rect x="24" y="72" width="932" height="172" rx="10" className="fill-card stroke-neural" strokeWidth="1.4" />
        <text x="40" y="92" fontSize="7" fontWeight="800" className="fill-foreground">THE MECHANISM — β1 AND β2 BOTH RIDE Gs: one couple, two address sets, ten uses, one caution set (anchors printed on books 236/237; the four-lane frame is KYP&apos;s)</text>
        {/* left box — the β1 arm */}
        <rect x="36" y="102" width="290" height="132" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="48" y="116" fontSize="4.8" fontWeight="800" className="fill-neural">THE β1 ARM (books 236-237)</text>
        <text x="48" y="134" fontSize="5.2" fontWeight="800" className="fill-foreground">&apos;β1 | s&apos; — &apos;↑ heart rate, ↑ contractility</text>
        <text x="48" y="144" fontSize="5.2" fontWeight="800" className="fill-foreground">(one heart), ↑ renin release, ↑ lipolysis&apos;</text>
        <text x="48" y="162" fontSize="4" className="fill-foreground">the distribution row (book 236): &apos;β1 | Heart / Kidney&apos;</text>
        <text x="48" y="171" fontSize="4" className="fill-foreground">→ &apos;↑ heart rate, contractility / ↑ renin secretion&apos;</text>
        <text x="48" y="188" fontSize="4" className="fill-foreground">BLOCK IT → the heart slows and weakens (the angina</text>
        <text x="48" y="197" fontSize="4" className="fill-foreground">arithmetic: ↓ rate × ↓ contractility = ↓ O2 consumption),</text>
        <text x="48" y="206" fontSize="4" className="fill-foreground">the AV node slows (&apos;class II antiarrhythmic&apos;), and the</text>
        <text x="48" y="215" fontSize="4" className="fill-foreground">JG cells cut renin — the printed hypertension note:</text>
        <text x="48" y="224" fontSize="4" className="fill-foreground">&apos;↓ renin secretion (due to β1-receptor blockade on JG cells)&apos;</text>
        {/* middle box — the β2 arm */}
        <line x1="328" y1="168" x2="344" y2="168" stroke="currentColor" strokeWidth="0.8" className="text-border" />
        <polygon points="344,168 338,165 338,171" className="fill-border" />
        <rect x="346" y="102" width="290" height="132" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="358" y="116" fontSize="4.8" fontWeight="800" className="fill-neural">THE β2 ARM (books 236-237)</text>
        <text x="358" y="134" fontSize="4.6" fontWeight="800" className="fill-foreground">&apos;β2 | s&apos; — &apos;Vasodilation, bronchodilation (two lungs),</text>
        <text x="358" y="144" fontSize="4.6" fontWeight="800" className="fill-foreground">↑ glycogenolysis... ↑ aqueous humor production&apos;</text>
        <text x="358" y="162" fontSize="4" className="fill-foreground">the distribution row (book 236): &apos;Bronchioles / Cardiac</text>
        <text x="358" y="171" fontSize="4" className="fill-foreground">muscle / Liver / Arterial smooth muscle / Pancreas&apos;</text>
        <text x="358" y="188" fontSize="4" className="fill-foreground">BLOCK IT (the nonselective lanes) → the bronchioles</text>
        <text x="358" y="197" fontSize="4" className="fill-foreground">constrict (&apos;asthma/COPD exacerbations&apos;), the liver&apos;s</text>
        <text x="358" y="206" fontSize="4" className="fill-foreground">rescue glycogenolysis blunts + the alarm silences</text>
        <text x="358" y="215" fontSize="4" className="fill-foreground">(&apos;masked hypoglycemia&apos;) — and the ONE therapeutic</text>
        <text x="358" y="224" fontSize="4" className="fill-foreground">β2 loss: the ciliary body secretes less (timolol, glaucoma)</text>
        {/* right box — the sort */}
        <line x1="638" y1="168" x2="654" y2="168" stroke="currentColor" strokeWidth="0.8" className="text-border" />
        <polygon points="654,168 648,165 648,171" className="fill-border" />
        <rect x="656" y="102" width="288" height="132" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="668" y="116" fontSize="4.8" fontWeight="800" className="fill-success">THE SORT — WHICH β DOES THE DRUG TAKE?</text>
        <text x="668" y="134" fontSize="4.2" fontWeight="800" className="fill-brand">β1-SELECTIVE &apos;A to M&apos; (β1 &gt; β2)</text>
        <text x="668" y="143" fontSize="3.9" className="fill-foreground">atenolol, betaxolol, bisoprolol, esmolol, metoprolol</text>
        <text x="668" y="157" fontSize="4.2" fontWeight="800" className="fill-emergency">NONSELECTIVE &apos;N to Z&apos; (β1 = β2)</text>
        <text x="668" y="166" fontSize="3.9" className="fill-foreground">nadolol, propranolol, timolol — the asthma-caution lane</text>
        <text x="668" y="180" fontSize="4.2" fontWeight="800" className="fill-neural">COMBINED β+α1 &apos;modified suffixes&apos;</text>
        <text x="668" y="189" fontSize="3.9" className="fill-foreground">carvedilol, labetalol — vasodilation built into the molecule</text>
        <text x="668" y="203" fontSize="4.2" fontWeight="800" className="fill-success">NEBIVOLOL &apos;NebivOlol increases NO&apos;</text>
        <text x="668" y="212" fontSize="3.9" className="fill-foreground">β1 + β3 → NO synthase → ↓ SVR — the vasodilating member</text>
        <text x="668" y="228" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">all four mnemonics are the book&apos;s own print — the lane</text>
        <text x="668" y="236" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">decides the patient (the fork cards below)</text>
      </g>

      {/* ===== THE FOUR-LANE FORK — THE DRUG CARDS ===== */}
      <g>
        <text x="40" y="262" fontSize="6.4" fontWeight="800" className="fill-foreground">THE FOUR-LANE FORK — the printed selectivity subtable, lane by lane (book 244, verbatim cells) · the mnemonics are the book&apos;s own</text>
        {/* card 1 — β1 selective */}
        <rect x="24" y="270" width="224" height="268" rx="10" className="fill-card stroke-brand" strokeWidth="1.4" />
        <text x="36" y="286" fontSize="5.4" fontWeight="800" className="fill-brand">β1-selective (β1 &gt; β2)</text>
        <text x="36" y="296" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the cardioselective lane — the asthmatic&apos;s least-bad lane</text>
        <text x="36" y="314" fontSize="4.4" fontWeight="800" className="fill-foreground">Atenolol, betaxolol, bisoprolol,</text>
        <text x="36" y="324" fontSize="4.4" fontWeight="800" className="fill-foreground">esmolol, metoprolol</text>
        <text x="36" y="340" fontSize="4" fontWeight="800" className="fill-brand">THE PRINTED MNEMONIC, verbatim</text>
        <text x="36" y="351" fontSize="4" className="fill-foreground">&apos;Selective antagonists mostly go from A to M</text>
        <text x="36" y="360" fontSize="4" className="fill-foreground">(β1 with 1st half of alphabet)&apos;</text>
        <text x="36" y="376" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the FIRST LETTER of a plain &apos;-olol&apos; name sorts it:</text>
        <text x="36" y="385" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">A(tenolol) through M(etoprolol) = β1 &gt; β2 — the dose</text>
        <text x="36" y="394" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">caveat is KYP&apos;s (flagged): selectivity fades as dose rises</text>
        <text x="36" y="412" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">this lane owns: the HFrEF mortality pair (bisoprolol,</text>
        <text x="36" y="421" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">metoprolol), the SVT duo (metoprolol, esmolol — the</text>
        <text x="36" y="430" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">ultra-short IV agent), and the dyslipidemia parenthetical</text>
        <text x="36" y="439" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">of the adverse row names one of its five: metoprolol</text>
        <text x="36" y="457" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the sort the exam runs: the asthmatic needing rate</text>
        <text x="36" y="466" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">control gets this lane (or none) — never the N-to-Z lane;</text>
        <text x="36" y="475" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the brittle diabetic masks less here (the alarm is partly β2)</text>
        <text x="36" y="490" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">A-to-M = β1 · five drugs · the heart without the lungs</text>
        {/* card 2 — nonselective */}
        <rect x="256" y="270" width="224" height="268" rx="10" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="268" y="286" fontSize="5.4" fontWeight="800" className="fill-emergency">Nonselective (β1 = β2)</text>
        <text x="268" y="296" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">both receptors — the classic single-drug uses live here</text>
        <text x="268" y="314" fontSize="4.4" fontWeight="800" className="fill-foreground">Nadolol, propranolol, timolol</text>
        <text x="268" y="330" fontSize="4" fontWeight="800" className="fill-emergency">THE PRINTED MNEMONIC, verbatim</text>
        <text x="268" y="341" fontSize="4" className="fill-foreground">&apos;NonZelective antagonists mostly go from N</text>
        <text x="268" y="350" fontSize="4" className="fill-foreground">to Z (β2 with 2nd half of alphabet)&apos;</text>
        <text x="268" y="366" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">N(adolol) through t(imolol): the second half of the</text>
        <text x="268" y="375" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">alphabet — the capital-Z is the book&apos;s own emphasis</text>
        <text x="268" y="393" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">this lane owns the named rows: propranolol (thyroid</text>
        <text x="268" y="402" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">storm, migraine prophylaxis, varices), timolol (the</text>
        <text x="268" y="411" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">glaucoma drop — absorbed: eye drops count), nadolol</text>
        <text x="268" y="420" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">(variceal prophylaxis, least CNS penetration)</text>
        <text x="268" y="438" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">AND the caution cell: &apos;asthma/COPD exacerbations&apos;</text>
        <text x="268" y="447" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">is THIS lane&apos;s β2 doing (book 237: &apos;bronchodilation</text>
        <text x="268" y="456" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">(two lungs)&apos; blocked) — the avoidance rule is KYP&apos;s</text>
        <text x="268" y="465" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">(flagged); outside this page: essential tremor (flagged)</text>
        <text x="268" y="483" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">N-to-Z = β2 too · three drugs · the lungs go with it</text>
        {/* card 3 — combined β+α1 */}
        <rect x="488" y="270" width="224" height="268" rx="10" className="fill-card stroke-neural" strokeWidth="1.4" />
        <text x="500" y="286" fontSize="5.4" fontWeight="800" className="fill-neural">β + α1 — modified suffixes</text>
        <text x="500" y="296" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the suffix is the fingerprint — the receptor pattern is broken</text>
        <text x="500" y="314" fontSize="4.4" fontWeight="800" className="fill-foreground">Carvedilol, labetalol</text>
        <text x="500" y="330" fontSize="4" fontWeight="800" className="fill-neural">THE PRINTED RULE, verbatim</text>
        <text x="500" y="341" fontSize="4" className="fill-foreground">&apos;Nonselective β-adrenergic and α1-selective</text>
        <text x="500" y="350" fontSize="4" className="fill-foreground">antagonists have modified suffixes (instead of</text>
        <text x="500" y="359" fontSize="4" className="fill-foreground">&quot;-olol&quot;)&apos;</text>
        <text x="500" y="375" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">MODIFIED SUFFIX = MODIFIED RECEPTORS (KYP reading):</text>
        <text x="500" y="384" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">nonselective β-blockade PLUS α1 blockade — the same α1</text>
        <text x="500" y="393" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the -osin four block (book 243 behind, book 236&apos;s rows)</text>
        <text x="500" y="411" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">carvedilol: the HFrEF mortality trio&apos;s third member +</text>
        <text x="500" y="420" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">a varices option (&apos;for no portal circulation&apos; — the</text>
        <text x="500" y="429" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">book&apos;s own clause). labetalol: the hypertension-</text>
        <text x="500" y="438" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">emergency workhorse (pregnancy, dissection — outside</text>
        <text x="500" y="447" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">this page, KYP-flagged) and the pheo second step</text>
        <text x="500" y="465" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">PHEO α-FIRST (KYP flag — not printed on either page):</text>
        <text x="500" y="474" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">book 243 prints phenoxybenzamine first, the β-blocker</text>
        <text x="500" y="483" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">second — never β-first (unopposed α1 = the crisis)</text>
        {/* card 4 — nebivolol */}
        <rect x="720" y="270" width="224" height="268" rx="10" className="fill-card stroke-success" strokeWidth="1.4" />
        <text x="732" y="286" fontSize="5.4" fontWeight="800" className="fill-success">Nebivolol — the NO member</text>
        <text x="732" y="296" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the one β-blocker that vasodilates by a second mechanism</text>
        <text x="732" y="314" fontSize="4.4" fontWeight="800" className="fill-foreground">Nebivolol</text>
        <text x="732" y="330" fontSize="4" fontWeight="800" className="fill-success">THE PRINTED ROW + MNEMONIC, verbatim</text>
        <text x="732" y="341" fontSize="3.9" className="fill-foreground">&apos;combines cardiac-selective β1-adrenergic</text>
        <text x="732" y="350" fontSize="3.9" className="fill-foreground">blockade with stimulation of β3 -receptors</text>
        <text x="732" y="359" fontSize="3.9" className="fill-foreground">(activate NO synthase in the vasculature and</text>
        <text x="732" y="368" fontSize="3.9" className="fill-foreground">↓ SVR)&apos; | &apos;NebivOlol increases NO&apos;</text>
        <text x="732" y="386" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">β1 blockade (cardioselective — A-to-M territory) PLUS</text>
        <text x="732" y="395" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">β3 agonism → NO synthase → vasodilation → ↓ SVR:</text>
        <text x="732" y="404" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">afterload falls by a mechanism no other lane carries</text>
        <text x="732" y="422" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the β3 row prints on book 237&apos;s second-messenger table</text>
        <text x="732" y="431" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">(the s-family — the same Gs currency): the receptor</text>
        <text x="732" y="440" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">behind the printed mechanism is printed one page back</text>
        <text x="732" y="458" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the exam&apos;s face: &apos;which β-blocker increases nitric</text>
        <text x="732" y="467" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">oxide / vasodilates by a second mechanism / ↓ SVR&apos;</text>
        <text x="732" y="476" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">→ nebivolol, by the book&apos;s own capital-O mnemonic</text>
        <text x="732" y="490" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the fourth lane of every selectivity sort — NE- = NO</text>
      </g>

      {/* ===== THE TEN-USE GRID ===== */}
      <g>
        <text x="40" y="556" fontSize="6.4" fontWeight="800" className="fill-foreground">THE TEN-USE GRID — the printed APPLICATION matrix (book 244, verbatim; named drugs in the NOTES/EXAMPLES column)</text>
        <rect x="24" y="564" width="932" height="196" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        {/* column 1 */}
        <text x="36" y="580" fontSize="4.2" fontWeight="800" className="fill-foreground">THE MORTALITY + RATE LANES (cardiology)</text>
        <text x="36" y="594" fontSize="3.9" className="fill-foreground">&apos;Heart failure&apos; → &apos;Blockade of neurohormonal stress →</text>
        <text x="36" y="603" fontSize="3.9" className="fill-foreground">prevention of deleterious cardiac remodeling → ↓ mortality&apos;</text>
        <text x="36" y="612" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">| &apos;Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)&apos;</text>
        <text x="36" y="628" fontSize="3.9" className="fill-foreground">&apos;Myocardial infarction&apos; → &apos;↓ O2 demand (short-term),</text>
        <text x="36" y="637" fontSize="3.9" className="fill-foreground">↓ mortality (long-term)&apos; — the two-clock row</text>
        <text x="36" y="652" fontSize="3.9" className="fill-foreground">&apos;Supraventricular tachycardia (eg, atrial fibrillation)&apos; →</text>
        <text x="36" y="661" fontSize="3.9" className="fill-foreground">&apos;↓ AV conduction velocity (class II antiarrhythmic)&apos;</text>
        <text x="36" y="670" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">| &apos;Metoprolol, esmolol&apos; — the rate duo (esmolol: IV, minutes)</text>
        <text x="36" y="686" fontSize="3.9" className="fill-foreground">&apos;Angina pectoris&apos; → &apos;↓ heart rate and contractility →</text>
        <text x="36" y="695" fontSize="3.9" className="fill-foreground">↓ O2 consumption&apos; — the demand arithmetic</text>
        <text x="36" y="710" fontSize="3.9" className="fill-foreground">&apos;Hypertrophic cardiomyopathy&apos; → &apos;↓ heart rate →</text>
        <text x="36" y="719" fontSize="3.9" className="fill-foreground">↑ filling time, relieving obstruction&apos; — slower = fuller = less gradient</text>
        {/* column 2 */}
        <text x="342" y="580" fontSize="4.2" fontWeight="800" className="fill-foreground">THE HYPERTENSION + THYROID ROWS</text>
        <text x="342" y="594" fontSize="3.9" className="fill-foreground">&apos;Hypertension&apos; → &apos;↓ cardiac output, ↓ renin secretion</text>
        <text x="342" y="603" fontSize="3.9" className="fill-foreground">(due to β1-receptor blockade on JG cells)&apos;</text>
        <text x="342" y="612" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the two-hit formula: pump + renin (→ ↓ ang II, ↓ aldo)</text>
        <text x="342" y="628" fontSize="3.9" className="fill-foreground">&apos;Hyperthyroidism/ thyroid storm&apos; → &apos;Symptom</text>
        <text x="342" y="637" fontSize="3.9" className="fill-foreground">control (↓ heart rate, ↓ tremor)&apos; | &apos;Propranolol&apos;</text>
        <text x="342" y="646" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the adrenergic bridge while antithyroid drugs work;</text>
        <text x="342" y="655" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the T4→T3 conversion blockade is NOT printed (KYP flag)</text>
        <text x="342" y="671" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the storm sequence this row plugs into: β-blocker +</text>
        <text x="342" y="680" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">PTU, then iodine hours later, + glucocorticoids, cooling</text>
        <text x="342" y="696" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the migraine row: &apos;↓ nitric oxide production&apos; |</text>
        <text x="342" y="705" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">&apos;Effective for prevention&apos; — PROPHYLAXIS, not abortion</text>
        <text x="342" y="719" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">(the alternatives for the asthmatic are KYP-flagged)</text>
        {/* column 3 */}
        <text x="648" y="580" fontSize="4.2" fontWeight="800" className="fill-foreground">THE ORGAN-SPECIFIC LANES</text>
        <text x="648" y="594" fontSize="3.9" className="fill-foreground">&apos;Glaucoma&apos; → &apos;↓ production of aqueous humor&apos;</text>
        <text x="648" y="603" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">| &apos;Timolol&apos; — the topical nonselective drop (absorbed:</text>
        <text x="648" y="612" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the asthmatic&apos;s eye drops can wheeze — the drops count)</text>
        <text x="648" y="628" fontSize="3.9" className="fill-foreground">&apos;Variceal bleeding&apos; → &apos;↓ hepatic venous pressure gradient</text>
        <text x="648" y="637" fontSize="3.9" className="fill-foreground">and portal hypertension (prophylactic use)&apos;</text>
        <text x="648" y="646" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">| &apos;Nadolol, propranolol, carvedilol for no portal circulation&apos;</text>
        <text x="648" y="662" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the carvedilol clause is the book&apos;s own fine print on the</text>
        <text x="648" y="671" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">combined member; prophylaxis after banding or first bleed</text>
        <text x="648" y="688" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">ten rows, five with named drugs — the matrix IS the</text>
        <text x="648" y="697" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">class&apos;s whole exam surface: the named drugs are the</text>
        <text x="648" y="706" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">answer keys (timolol, the trio, propranolol, the duo, the</text>
        <text x="648" y="715" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">portal trio); the actions are the formulas the stems quote</text>
      </g>

      {/* ===== THE CAUTION SET — THREE PATIENTS + THE REST OF THE ROW ===== */}
      <g>
        <rect x="24" y="772" width="932" height="150" rx="10" className="fill-card stroke-warning" strokeWidth="1.2" />
        <text x="40" y="790" fontSize="7" fontWeight="800" className="fill-foreground">THE CAUTION SET — three patients + the rest of the printed adverse row (the cells are the book&apos;s; the avoidance and taper rules are KYP&apos;s, flagged)</text>
        <rect x="36" y="800" width="292" height="84" rx="7" className="fill-secondary/20 stroke-emergency" />
        <text x="46" y="814" fontSize="4.6" fontWeight="800" className="fill-emergency">THE ASTHMATIC — &apos;asthma/COPD exacerbations&apos;</text>
        <text x="46" y="826" fontSize="4" className="fill-foreground">the nonselective lane&apos;s β2 doing: book 237&apos;s</text>
        <text x="46" y="835" fontSize="4" className="fill-foreground">&apos;bronchodilation (two lungs)&apos; blocked → the airways</text>
        <text x="46" y="844" fontSize="4" className="fill-foreground">lose their sympathetic brake (the miniCase lane); the</text>
        <text x="46" y="853" fontSize="4" className="fill-foreground">&apos;avoid the N-to-Z lane&apos; rule is KYP&apos;s (flagged)</text>
        <text x="46" y="866" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">timolol drops count; the A-to-M lane is the least-bad fallback</text>
        <rect x="340" y="800" width="292" height="84" rx="7" className="fill-secondary/20 stroke-brand" />
        <text x="350" y="814" fontSize="4.6" fontWeight="800" className="fill-brand">THE BRITTLE DIABETIC — &apos;masked hypoglycemia&apos;</text>
        <text x="350" y="826" fontSize="4" className="fill-foreground">the alarm silenced (tachycardia, tremor, anxiety are</text>
        <text x="350" y="835" fontSize="4" className="fill-foreground">β-mediated) + the rescue blunted (book 236&apos;s liver row:</text>
        <text x="350" y="844" fontSize="4" className="fill-foreground">&apos;Glycogenolysis, glucose release&apos;) → neuroglycopenia</text>
        <text x="350" y="853" fontSize="4" className="fill-foreground">(confusion, seizures) without the shaky prodrome</text>
        <text x="350" y="866" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">counseling: more glucose checks (KYP flag: not printed)</text>
        <rect x="644" y="800" width="292" height="84" rx="7" className="fill-secondary/20 stroke-warning" />
        <text x="654" y="814" fontSize="4.6" fontWeight="800" className="fill-warning">THE COCAINE USER — the printed hedge</text>
        <text x="654" y="826" fontSize="3.9" className="fill-foreground">&apos;Use of β-blockers for acute cocaine-associated chest</text>
        <text x="654" y="835" fontSize="3.9" className="fill-foreground">pain remains controversial due to unsubstantiated</text>
        <text x="654" y="844" fontSize="3.9" className="fill-foreground">concern for unopposed α-adrenergic stimulation&apos;</text>
        <text x="654" y="853" fontSize="3.9" className="fill-foreground">— benzodiazepines + nitrates first (KYP-flagged first line)</text>
        <text x="654" y="866" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the same unopposed-α physiology as the pheo α-first rule</text>
        <text x="40" y="902" fontSize="4" className="fill-foreground">THE REST OF THE ROW: &apos;cardiovascular (bradycardia, AV block, HF)&apos; (the β1 excess — the syncopal rate-38 picture; the HFrEF initiation risk) · &apos;CNS (seizures, sleep alterations)&apos; · &apos;dyslipidemia (metoprolol)&apos; (the one drug named in the row) · &apos;erectile dysfunction&apos; (the compliance problem)</text>
        <text x="40" y="914" fontSize="4" fontWeight="700" className="fill-warning">THE UN-PRINTED RULE (KYP flag): never stop a β-blocker cold — rebound tachycardia, hypertension, angina, arrhythmia; taper over days to weeks (the row prints no withdrawal token)</text>
      </g>

      {/* ===== THE BOUNDARY STRIP ===== */}
      <g>
        <rect x="24" y="934" width="932" height="94" rx="10" className="fill-card stroke-border" />
        <text x="40" y="950" fontSize="6.2" fontWeight="800" className="fill-foreground">THE BOUNDARY + THE VERIFIED ABSENCES — book 244 between the completed book-243 tables and the pending PDE-inhibitors page</text>
        <text x="40" y="964" fontSize="4.4" className="fill-foreground">BEHIND (pdf 265 / book 243): the two COMPLETED same-page blocks — sympatholytics (α2-agonists) above and the α-blockers table below — EXCLUDED here; only the α-blockers table&apos;s phenoxybenzamine row (the α-first pheo anchor)</text>
        <text x="40" y="974" fontSize="4.4" className="fill-foreground">and its final mirtazapine row (the α2-antagonist mirror — THIS table&apos;s subtable has NO α2 lane) pinned from behind. THIS PAGE: the whole β-blockers block. AHEAD (pdf 267 / book 245): &apos;Phosphodiesterase inhibitors&apos; — the PENDING next topic; sourcePages = [266] only.</text>
        <text x="40" y="988" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">VERIFIED ABSENT from the 2026 selectivity subtable (documented, never cited as printed): the partial-agonist/ISA members (pindolol, acebutolol) · any α2+β member (exactly four groups print: β1-selective, nonselective, combined β+α1, nebivolol-NO) · the essential-tremor row (the printed neurology lane is migraine prophylaxis alone)</text>
        <text x="40" y="1000" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">The book&apos;s own four printed mnemonics (A to M · N to Z · modified suffixes · NebivOlol increases NO) are carried verbatim — the publisher prints the selectivity key; KYP adds only the four-lane reading and the caution frames, flagged where un-printed</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="1040" width="932" height="46" rx="10" className="fill-card stroke-border" />
        <text x="490" y="1054" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">Every application, action, notes cell, adverse-effect bucket, selectivity group, and mnemonic is the book&apos;s own print (book 244, pdf 266, the whole page) — pure text, zero rasters, never reproduced: an original KYP adaptation</text>
        <text x="490" y="1066" textAnchor="middle" fontSize="4.6" className="fill-muted-foreground">KYP extensions flagged: the FOUR-LANE SELECTIVITY frame (the mnemonics are printed; the compression is KYP&apos;s) · the THREE CAUTION PATIENTS (avoidance rules NOT printed) · the PHEO α-FIRST rule and the taper rule (NOT printed) · T4→T3 (not printed)</text>
        <text x="490" y="1078" textAnchor="middle" fontSize="4.8" fontWeight="700" className="fill-muted-foreground">The cross-page anchors are printed on the completed pages: book 237 (β1 | s and β2 | s — Gs, the '(one heart)' and '(two lungs)' rows) · book 236 (the Heart/Kidney and Bronchioles/Liver/Arterial distribution rows) · book 243 behind (phenoxybenzamine, the α-first anchor)</text>
      </g>
    </svg>
  );
}

export function PdeInhibitorMap() {
  const w = 980;
  const h = 950;
  // An original KYP visual of the PHOSPHODIESTERASE INHIBITORS block — the
  // WHOLE of book 245 (pdf 267), the LAST page under the standing
  // 'PHARMACOLOGY—AUTONOMIC DRUGS' banner (the banner ends here: pdf 268 /
  // book 246 opens the NEW 'PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS'
  // banner with the Ingested seafood toxins table; the page behind, book
  // 244, carries the COMPLETED PH24 beta-blockers block — only its
  // selectivity subtable's final rows and footer pinned from behind as
  // boundary markers). Census (pdfimages + text layer): the block prints
  // the section header 'Phosphodiesterase inhibitors' + the intro sentence
  // 'Phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the
  // hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP.
  // These inhibitors have varying specificity for PDE isoforms and thus
  // have different clinical uses.'; ONE FOUR-COLUMN TABLE (TYPE OF
  // INHIBITOR / MECHANISM OF ACTION / CLINICAL USES / ADVERSE EFFECTS) of
  // FIVE rows — the nonspecific theophylline ('COPD/asthma (rarely used)'),
  // the PDE-5 four (sildenafil, vardenafil, tadalafil, avanafil — the
  // '(tadalafil only)' parenthetical on BPH, the nitrate token
  // 'hypotension in patients taking nitrates', the '"hot and sweaty,"'
  // quote, sildenafil-only 'cyanopia (blue-tinted vision) via inhibition of
  // PDE-6 (six) in retina'), the PDE-4 roflumilast ('↑ cAMP in
  // neutrophils, granulocytes, and bronchial epithelium' for 'Severe
  // COPD', price 'depression, anxiety, insomnia'), the PDE-3 milrinone
  // (the book's own 'ionotropy' spelling, two addresses, 'Tachycardia,
  // ventricular arrhythmias, hypotension'), and the platelet pair (the
  // quoted '"Platelet inhibitors"' category, the two footnotes: a
  // cilostazol 'is a PDE-3 inhibitor, but due to its indications is
  // categorized as a platelet inhibitor together with dipyridamole'; b
  // dipyridamole 'is a nonspecific PDE inhibitor' that 'also prevents
  // adenosine reuptake by platelets → ↑ extracellular adenosine → ↑
  // vasodilation') — PURE TEXT with ZERO rasters on pdf 267 — COPYRIGHTED,
  // never reproduced as artwork; carried VERBATIM in the note's two table
  // blocks and conveyed here as ONE original KYP isoform-fork map
  // (ORIGINAL_KYP_ADAPTATION — every type, mechanism, use, and adverse
  // cell is the book's own print). KYP extensions flagged wherever they
  // appear: the ISOFORM-FORK frame (the rows, numbers, and footnotes are
  // printed; the compression is KYP's), the CYCLIC-NUCLEOTIDE-CURRENCY
  // frame (the cAMP camp vs the cGMP camp — the currency rows print on
  // book 237, 'GS protein | ATP | Cyclic AMP' through 'Adenylyl cyclase';
  // the camp split is KYP's), and the NITRATE-SEPARATION protocol (NOT
  // printed — the page prints only 'hypotension in patients taking
  // nitrates' as an adverse cell; the 24-48h rules are KYP's, flagged).
  // Verified absent from the 2026 table: PDE-1 and PDE-2 rows, any other
  // methylxanthine (caffeine), any other PDE-3 member (amrinone or
  // inamrinone) — the PDE-5 roster prints exactly FOUR members. Color
  // code: PDE-3 = brand (blue), PDE-4 = neural (purple), PDE-5 =
  // emergency (red, the nitrate lane), the nonspecific pair = warning
  // (amber), the caution strip = warning, the mechanism strip = neural
  // border. JSX text uses &gt; / &amp; / &apos; / &quot; escapes where
  // needed (no raw > or & appears in text runs); lists use commas, never
  // slash-chains.
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Phosphodiesterase inhibitors — the isoform-fork map (an original KYP visual of the phosphodiesterase-inhibitors block, book 245, pdf 267, the whole page, the LAST page of the Autonomic Drugs banner, between the completed beta-blockers table of book 244 behind and the Ingested seafood toxins page of book 246 ahead. THE PAGE, verbatim — the header and intro: Phosphodiesterase inhibitors — phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP; these inhibitors have varying specificity for PDE isoforms and thus have different clinical uses. THE CLASS TABLE (TYPE OF INHIBITOR, MECHANISM OF ACTION, CLINICAL USES, ADVERSE EFFECTS), five rows: nonspecific PDE inhibitor, theophylline — down cAMP hydrolysis, up cAMP, bronchial smooth muscle relaxation, bronchodilation, for COPD and asthma (rarely used), price cardiotoxicity (tachycardia, arrhythmia), neurotoxicity (seizures, headache), abdominal pain. PDE-5 inhibitors — sildenafil, vardenafil, tadalafil, avanafil — down hydrolysis of cGMP, up cGMP, up smooth muscle relaxation by enhancing NO activity, pulmonary vasodilation and up blood flow in corpus cavernosum fills the penis, for erectile dysfunction, pulmonary hypertension, benign prostatic hyperplasia (tadalafil only), price facial flushing, headache, dyspepsia, hypotension in patients taking nitrates, hot and sweaty, then headache, heartburn, hypotension, and sildenafil-only cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina. PDE-4 inhibitor, roflumilast — up cAMP in neutrophils, granulocytes, and bronchial epithelium, for severe COPD, price abdominal pain, weight loss, depression, anxiety, insomnia. PDE-3 inhibitor, milrinone — in cardiomyocytes up cAMP, up Ca2+ influx, up ionotropy and chronotropy, in vascular smooth muscle up cAMP, MLCK inhibition, vasodilation, down preload and afterload, for acute decompensated HF with cardiogenic shock (inotrope), price tachycardia, ventricular arrhythmias, hypotension. Platelet inhibitors — cilostazol, dipyridamole — in platelets up cAMP, inhibition of platelet aggregation, for intermittent claudication, stroke or TIA prevention (with aspirin), cardiac stress testing (dipyridamole only, due to coronary vasodilation), prevention of coronary stent restenosis, price nausea, headache, facial flushing, hypotension, abdominal pain. THE TWO FOOTNOTES: cilostazol is a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole; dipyridamole is a nonspecific PDE inhibitor, leading to inhibition of platelet aggregation, and it also prevents adenosine reuptake by platelets, up extracellular adenosine, up vasodilation. THE MECHANISM, assembled from printed anchors on book 237: Gs mints the cAMP (GS protein, adenylyl cyclase, ATP, Cyclic AMP, Protein kinase A), the NO pathway drives the cGMP, and PDE is the sink both camps share. The isoform-fork frame, the camp split (cAMP camp, cGMP camp), the patient sort, and the nitrate separation protocol (not printed) are KYP extensions, flagged; verified absent from the 2026 table: PDE-1 and PDE-2 rows, caffeine, amrinone or inamrinone — the PDE-5 roster prints exactly four members; the block is pure text with zero rasters, never reproduced — an original KYP adaptation; the beta-blockers table on book 244 behind (the completed PH24) and the Ingested seafood toxins page on pdf 268 ahead (the NEW Toxicities banner, the PENDING next topics) are EXCLUDED)" className="min-w-[940px]">
      {/* ===== HEADER ===== */}
      <g>
        <rect x="24" y="14" width="932" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Phosphodiesterase inhibitors — the isoform-fork map (original KYP visual of book 245)</text>
        <rect x="690" y="24" width="242" height="18" rx="4" className="fill-secondary/20" />
        <text x="811" y="37" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">2 currencies · 5 rows · 8 drugs · 2 footnotes</text>
      </g>

      {/* ===== THE MECHANISM STRIP — THE HYDROLYSIS BLOCK ===== */}
      <g>
        <rect x="24" y="72" width="932" height="150" rx="10" className="fill-card stroke-neural" strokeWidth="1.4" />
        <text x="40" y="92" fontSize="7" fontWeight="800" className="fill-foreground">THE MECHANISM — PDE catalyzes the hydrolysis of cAMP and/or cGMP; the inhibitor blocks the hydrolase and the currency accumulates (the intro sentence, book 245; the mint prints on book 237 — the camp split is KYP&apos;s, flagged)</text>
        {/* box 1 — the mint */}
        <rect x="36" y="102" width="290" height="108" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="48" y="116" fontSize="4.8" fontWeight="800" className="fill-neural">THE MINT (book 237, printed)</text>
        <text x="48" y="132" fontSize="4" className="fill-foreground">Gs side: &apos;GS protein&apos; → &apos;Adenylyl cyclase&apos; → &apos;ATP&apos;</text>
        <text x="48" y="141" fontSize="4" className="fill-foreground">→ &apos;Cyclic AMP&apos; → &apos;Protein kinase A&apos; — the printed</text>
        <text x="48" y="150" fontSize="4" className="fill-foreground">chain of the second-messenger table&apos;s figure</text>
        <text x="48" y="166" fontSize="4" className="fill-foreground">cGMP side: the NO pathway — this page&apos;s own</text>
        <text x="48" y="175" fontSize="4" className="fill-foreground">token is &apos;enhancing NO activity&apos; (the NO →</text>
        <text x="48" y="184" fontSize="4" className="fill-foreground">guanylyl cyclase step is KYP-flagged, not printed)</text>
        <text x="48" y="200" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the receptor-side lever on the same cAMP is the</text>
        <text x="48" y="209" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">β-blockers page behind (book 244) — two levers, one currency</text>
        {/* box 2 — the sink */}
        <line x1="328" y1="156" x2="344" y2="156" stroke="currentColor" strokeWidth="0.8" className="text-border" />
        <polygon points="344,156 338,153 338,159" className="fill-border" />
        <rect x="346" y="102" width="290" height="108" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="358" y="116" fontSize="4.8" fontWeight="800" className="fill-neural">THE SINK — PDE, THE HYDROLASE</text>
        <text x="358" y="132" fontSize="4" className="fill-foreground">the intro sentence, verbatim: &apos;Phosphodiesterase</text>
        <text x="358" y="141" fontSize="4" className="fill-foreground">(PDE) inhibitors inhibit PDE, which catalyzes the</text>
        <text x="358" y="150" fontSize="4" className="fill-foreground">hydrolysis of cAMP and/or cGMP, and thereby</text>
        <text x="358" y="159" fontSize="4" className="fill-foreground">increase cAMP and/or cGMP.&apos;</text>
        <text x="358" y="175" fontSize="4" className="fill-foreground">PDE terminates both signals — the drugs work</text>
        <text x="358" y="184" fontSize="4" className="fill-foreground">DOWNSTREAM of the receptor: they extend the</text>
        <text x="358" y="193" fontSize="4" className="fill-foreground">half-life of the signal already minted</text>
        <text x="358" y="209" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">theophylline manufactures the bronchodilation of</text>
        <text x="358" y="218" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">book 237&apos;s β2 row without touching the receptor</text>
        {/* box 3 — the fork principle */}
        <line x1="638" y1="156" x2="654" y2="156" stroke="currentColor" strokeWidth="0.8" className="text-border" />
        <polygon points="654,156 648,153 648,159" className="fill-border" />
        <rect x="656" y="102" width="288" height="108" rx="7" className="fill-secondary/20 stroke-border" />
        <text x="668" y="116" fontSize="4.8" fontWeight="800" className="fill-success">THE FORK — THE CAMP SPLIT (KYP, flagged)</text>
        <text x="668" y="132" fontSize="4.2" fontWeight="800" className="fill-brand">cAMP ACTS — four addresses</text>
        <text x="668" y="141" fontSize="3.9" className="fill-foreground">bronchial smooth muscle (theophylline), airway</text>
        <text x="668" y="150" fontSize="3.9" className="fill-foreground">immune cells (roflumilast), cardiomyocyte + vessels</text>
        <text x="668" y="159" fontSize="3.9" className="fill-foreground">(milrinone), platelet (cilostazol, dipyridamole)</text>
        <text x="668" y="175" fontSize="4.2" fontWeight="800" className="fill-emergency">cGMP RELAXES — one lane (PDE-5 alone)</text>
        <text x="668" y="184" fontSize="3.9" className="fill-foreground">&apos;↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle</text>
        <text x="668" y="193" fontSize="3.9" className="fill-foreground">relaxation by enhancing NO activity&apos; — the penis</text>
        <text x="668" y="202" fontSize="3.9" className="fill-foreground">and the pulmonary arteries</text>
        <text x="668" y="218" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the isoform number IS the use: 3 the pump, 4 the</text>
        <text x="668" y="227" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">airway, 5 the erection — no number, the nonspecifics</text>
      </g>

      {/* ===== THE ISOFORM FORK — THE THREE NUMBERED CARDS ===== */}
      <g>
        <text x="40" y="246" fontSize="6.4" fontWeight="800" className="fill-foreground">THE ISOFORM FORK — the printed class table, lane by lane (book 245, verbatim cells) · the numbered 3/4/5 plus the two nonspecifics below</text>
        {/* card 1 — PDE-3 */}
        <rect x="24" y="254" width="300" height="236" rx="10" className="fill-card stroke-brand" strokeWidth="1.4" />
        <text x="36" y="270" fontSize="5.4" fontWeight="800" className="fill-brand">PDE-3 — the failing pump + the platelet</text>
        <text x="36" y="280" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">two addresses, one isoform — the inotrope and the claudicant&apos;s drug</text>
        <text x="36" y="298" fontSize="4.6" fontWeight="800" className="fill-foreground">Milrinone</text>
        <text x="36" y="312" fontSize="4" fontWeight="800" className="fill-brand">THE ROW, BOTH HALVES, VERBATIM</text>
        <text x="36" y="323" fontSize="3.9" className="fill-foreground">&apos;In cardiomyocytes: ↑ cAMP → ↑ Ca2+ influx →</text>
        <text x="36" y="332" fontSize="3.9" className="fill-foreground">↑ ionotropy and chronotropy&apos; (the book&apos;s own</text>
        <text x="36" y="341" fontSize="3.9" className="fill-foreground">&apos;ionotropy&apos; spelling — carried verbatim)</text>
        <text x="36" y="352" fontSize="3.9" className="fill-foreground">&apos;In vascular smooth muscle: ↑ cAMP → MLCK</text>
        <text x="36" y="361" fontSize="3.9" className="fill-foreground">inhibition → vasodilation → ↓ preload and afterload&apos;</text>
        <text x="36" y="375" fontSize="3.9" fontWeight="700" className="fill-foreground">USE: &apos;Acute decompensated HF with cardiogenic</text>
        <text x="36" y="384" fontSize="3.9" fontWeight="700" className="fill-foreground">shock (inotrope)&apos; — the ICU bridge, never a</text>
        <text x="36" y="393" fontSize="3.9" fontWeight="700" className="fill-foreground">chronic inotrope (chronic inotropy is the opposite</text>
        <text x="36" y="402" fontSize="3.9" fontWeight="700" className="fill-foreground">of the β-blockers&apos; mortality story, book 244)</text>
        <text x="36" y="416" fontSize="3.9" fontWeight="700" className="fill-warning">PRICE: &apos;Tachycardia, ventricular arrhythmias,</text>
        <text x="36" y="425" fontSize="3.9" fontWeight="700" className="fill-warning">hypotension&apos; — the telemetry price</text>
        <text x="36" y="441" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">+ Cilostazol (footnote a): the same isoform at the</text>
        <text x="36" y="450" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">platelet — &apos;a PDE-3 inhibitor, but due to its</text>
        <text x="36" y="459" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">indications is categorized as a platelet inhibitor</text>
        <text x="36" y="468" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">together with dipyridamole&apos; — intermittent claudication</text>
        <text x="36" y="481" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">3 = the pump · two drugs · heart, vessels, platelet</text>
        {/* card 2 — PDE-4 */}
        <rect x="340" y="254" width="300" height="236" rx="10" className="fill-card stroke-neural" strokeWidth="1.4" />
        <text x="352" y="270" fontSize="5.4" fontWeight="800" className="fill-neural">PDE-4 — the inflamed airway</text>
        <text x="352" y="280" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the anti-inflammatory lane — the immune cells, not the muscle</text>
        <text x="352" y="298" fontSize="4.6" fontWeight="800" className="fill-foreground">Roflumilast</text>
        <text x="352" y="312" fontSize="4" fontWeight="800" className="fill-neural">THE ROW, VERBATIM</text>
        <text x="352" y="323" fontSize="3.9" className="fill-foreground">&apos;↑ cAMP in neutrophils, granulocytes, and</text>
        <text x="352" y="332" fontSize="3.9" className="fill-foreground">bronchial epithelium&apos; — the immune cells of</text>
        <text x="352" y="341" fontSize="3.9" className="fill-foreground">the airway (the PDE-3 row&apos;s cAMP works the</text>
        <text x="352" y="350" fontSize="3.9" className="fill-foreground">heart; this one quiets the inflammation)</text>
        <text x="352" y="364" fontSize="3.9" fontWeight="700" className="fill-foreground">USE: &apos;Severe COPD&apos; — the once-daily add-on</text>
        <text x="352" y="373" fontSize="3.9" fontWeight="700" className="fill-foreground">for the frequent exacerbator (KYP flag: the</text>
        <text x="352" y="382" fontSize="3.9" fontWeight="700" className="fill-foreground">exacerbation language is not printed — the</text>
        <text x="352" y="391" fontSize="3.9" fontWeight="700" className="fill-foreground">use cell prints &apos;Severe COPD&apos; alone)</text>
        <text x="352" y="405" fontSize="3.9" fontWeight="700" className="fill-warning">PRICE: &apos;Abdominal pain, weight loss, depression,</text>
        <text x="352" y="414" fontSize="3.9" fontWeight="700" className="fill-warning">anxiety, insomnia&apos; — the mood warning:</text>
        <text x="352" y="423" fontSize="3.9" fontWeight="700" className="fill-warning">counsel at prescribing (the monitoring</text>
        <text x="352" y="432" fontSize="3.9" fontWeight="700" className="fill-warning">language is KYP-flagged, not printed)</text>
        <text x="352" y="448" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the lane the β2 agonists cannot fill: they dilate</text>
        <text x="352" y="457" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">the smooth muscle (the receptor side, book 237&apos;s</text>
        <text x="352" y="466" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">β2 row); roflumilast works the cells around it</text>
        <text x="352" y="481" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">4 = the airway · one drug · immune cells, not muscle</text>
        {/* card 3 — PDE-5 */}
        <rect x="656" y="254" width="300" height="236" rx="10" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="668" y="270" fontSize="5.4" fontWeight="800" className="fill-emergency">PDE-5 — the engorged vessels</text>
        <text x="668" y="280" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the cGMP camp alone — the penis and the pulmonary arteries</text>
        <text x="668" y="298" fontSize="4.6" fontWeight="800" className="fill-foreground">Sildenafil, vardenafil, tadalafil, avanafil</text>
        <text x="668" y="312" fontSize="4" fontWeight="800" className="fill-emergency">THE ROW, VERBATIM (FOUR members)</text>
        <text x="668" y="323" fontSize="3.9" className="fill-foreground">&apos;↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle</text>
        <text x="668" y="332" fontSize="3.9" className="fill-foreground">relaxation by enhancing NO activity → pulmonary</text>
        <text x="668" y="341" fontSize="3.9" className="fill-foreground">vasodilation and ↑ blood flow in corpus cavernosum</text>
        <text x="668" y="350" fontSize="3.9" className="fill-foreground">fills the penis&apos; — the mechanism sentence whole</text>
        <text x="668" y="364" fontSize="3.9" fontWeight="700" className="fill-foreground">USES: &apos;Erectile dysfunction / Pulmonary</text>
        <text x="668" y="373" fontSize="3.9" fontWeight="700" className="fill-foreground">hypertension / Benign prostatic hyperplasia</text>
        <text x="668" y="382" fontSize="3.9" fontWeight="700" className="fill-foreground">(tadalafil only)&apos; — the long half-life that</text>
        <text x="668" y="391" fontSize="3.9" fontWeight="700" className="fill-foreground">earns the BPH use also sets the 48h window</text>
        <text x="668" y="405" fontSize="3.9" fontWeight="700" className="fill-warning">PRICE: &apos;hypotension in patients taking nitrates;</text>
        <text x="668" y="414" fontSize="3.9" fontWeight="700" className="fill-warning">&quot;hot and sweaty,&quot; then headache, heartburn,</text>
        <text x="668" y="423" fontSize="3.9" fontWeight="700" className="fill-warning">hypotension&apos; + &apos;Sildenafil only: cyanopia</text>
        <text x="668" y="432" fontSize="3.9" fontWeight="700" className="fill-warning">(blue-tinted vision) via inhibition of PDE-6</text>
        <text x="668" y="441" fontSize="3.9" fontWeight="700" className="fill-warning">(six) in retina&apos; — the book&apos;s own &apos;(six)&apos;</text>
        <text x="668" y="457" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">THE CONVERGENCE: nitrates feed the same cGMP pool</text>
        <text x="668" y="466" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">from the NO side — two inputs, one bed (the miniCase)</text>
        <text x="668" y="481" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">5 = the erection · four drugs · 6 = the sight (off-target)</text>
      </g>

      {/* ===== THE NONSPECIFIC PAIR ===== */}
      <g>
        <text x="40" y="506" fontSize="6.4" fontWeight="800" className="fill-foreground">THE NONSPECIFIC PAIR — the two rows without isoform numbers (book 245, verbatim cells + the footnotes)</text>
        <rect x="24" y="514" width="460" height="96" rx="10" className="fill-card stroke-warning" strokeWidth="1.2" />
        <text x="36" y="530" fontSize="5" fontWeight="800" className="fill-warning">Theophylline — the rare bird</text>
        <text x="36" y="542" fontSize="3.9" className="fill-foreground">&apos;↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation →</text>
        <text x="36" y="551" fontSize="3.9" className="fill-foreground">bronchodilation&apos; | USE: &apos;COPD/asthma (rarely used)&apos; — the rank is the</text>
        <text x="36" y="560" fontSize="3.9" className="fill-foreground">book&apos;s own, printed inside the use cell itself</text>
        <text x="36" y="574" fontSize="3.9" fontWeight="700" className="fill-warning">PRICE: &apos;Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity</text>
        <text x="36" y="583" fontSize="3.9" fontWeight="700" className="fill-warning">(eg, seizures, headache), abdominal pain&apos; — the systemic currency:</text>
        <text x="36" y="592" fontSize="3.9" fontWeight="700" className="fill-warning">the heart and brain ride along with the bronchiole</text>
        <text x="36" y="604" fontSize="3.7" fontWeight="700" className="fill-muted-foreground">the level-monitoring and narrow-index story is KYP-flagged, not printed</text>
        <rect x="496" y="514" width="460" height="96" rx="10" className="fill-card stroke-warning" strokeWidth="1.2" />
        <text x="508" y="530" fontSize="5" fontWeight="800" className="fill-warning">Dipyridamole — the double blocker (footnote b)</text>
        <text x="508" y="542" fontSize="3.9" className="fill-foreground">&apos;a nonspecific PDE inhibitor, leading to inhibition of platelet aggregation.</text>
        <text x="508" y="551" fontSize="3.9" className="fill-foreground">It also prevents adenosine reuptake by platelets → ↑ extracellular</text>
        <text x="508" y="560" fontSize="3.9" className="fill-foreground">adenosine → ↑ vasodilation.&apos; — the stress-test mechanism</text>
        <text x="508" y="574" fontSize="3.9" fontWeight="700" className="fill-foreground">USES: &apos;Stroke or TIA prevention (with aspirin)&apos; · &apos;Cardiac stress</text>
        <text x="508" y="583" fontSize="3.9" fontWeight="700" className="fill-foreground">testing (dipyridamole only, due to coronary vasodilation)&apos; ·</text>
        <text x="508" y="592" fontSize="3.9" fontWeight="700" className="fill-foreground">stent-restenosis prevention · PRICE: nausea, headache, flushing</text>
        <text x="508" y="604" fontSize="3.7" fontWeight="700" className="fill-muted-foreground">no isoform number — the theophylline of the platelet row (footnote b)</text>
      </g>

      {/* ===== THE USE GRID ===== */}
      <g>
        <text x="40" y="630" fontSize="6.4" fontWeight="800" className="fill-foreground">THE USE GRID — the printed CLINICAL USES column, sorted by address (book 245, verbatim; the fork decides the patient)</text>
        <rect x="24" y="638" width="932" height="118" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        {/* column 1 — the cAMP addresses */}
        <text x="36" y="654" fontSize="4.2" fontWeight="800" className="fill-brand">THE cAMP ADDRESSES (four tissues)</text>
        <text x="36" y="668" fontSize="3.9" className="fill-foreground">THE HEART AND VESSELS — milrinone: &apos;Acute decompensated HF</text>
        <text x="36" y="677" fontSize="3.9" className="fill-foreground">with cardiogenic shock (inotrope)&apos; — the ICU bridge</text>
        <text x="36" y="691" fontSize="3.9" className="fill-foreground">THE PLATELETS — cilostazol: &apos;Intermittent claudication&apos;;</text>
        <text x="36" y="700" fontSize="3.9" className="fill-foreground">dipyridamole: &apos;Stroke or TIA prevention (with aspirin)&apos;,</text>
        <text x="36" y="709" fontSize="3.9" className="fill-foreground">&apos;Cardiac stress testing&apos;, stent-restenosis prevention</text>
        <text x="36" y="723" fontSize="3.9" className="fill-foreground">THE IMMUNE CELLS — roflumilast: &apos;Severe COPD&apos;;</text>
        <text x="36" y="732" fontSize="3.9" className="fill-foreground">THE BRONCHIOLE — theophylline: &apos;COPD/asthma (rarely used)&apos;</text>
        {/* column 2 — the cGMP lane */}
        <text x="342" y="654" fontSize="4.2" fontWeight="800" className="fill-emergency">THE cGMP LANE (PDE-5 alone)</text>
        <text x="342" y="668" fontSize="3.9" className="fill-foreground">&apos;Erectile dysfunction&apos; — the corpus cavernosum fills</text>
        <text x="342" y="677" fontSize="3.9" className="fill-foreground">&apos;Pulmonary hypertension&apos; — the pulmonary vasodilation</text>
        <text x="342" y="691" fontSize="3.9" className="fill-foreground">&apos;Benign prostatic hyperplasia (tadalafil only)&apos; — the</text>
        <text x="342" y="700" fontSize="3.9" className="fill-foreground">long half-life that earns the once-daily dosing</text>
        <text x="342" y="714" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">THE NITRATE BOUNDARY: &apos;hypotension in patients taking</text>
        <text x="342" y="723" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">nitrates&apos; — the convergence; the separation protocol</text>
        <text x="342" y="732" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">(24h sildenafil, vardenafil; 48h tadalafil) is KYP-flagged</text>
        {/* column 3 — the taxonomy */}
        <text x="648" y="654" fontSize="4.2" fontWeight="800" className="fill-foreground">THE TAXONOMY + THE READING RULES</text>
        <text x="648" y="668" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">footnote a: cilostazol IS a PDE-3 inhibitor filed by</text>
        <text x="648" y="677" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">indication under the platelet row — the quoted</text>
        <text x="648" y="686" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">&apos;&quot;Platelet inhibitors&quot;&apos; is a filing category, not a class</text>
        <text x="648" y="700" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">footnote b: dipyridamole is the OTHER nonspecific</text>
        <text x="648" y="709" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">member + the adenosine-reuptake second mechanism</text>
        <text x="648" y="723" fontSize="3.9" fontWeight="700" className="fill-foreground">5 for the penis, 6 for the sight (KYP): the one</text>
        <text x="648" y="732" fontSize="3.9" fontWeight="700" className="fill-foreground">off-target the exam names — &apos;PDE-6 (six) in retina&apos;</text>
      </g>

      {/* ===== THE CAUTION STRIP ===== */}
      <g>
        <rect x="24" y="768" width="932" height="76" rx="10" className="fill-card stroke-warning" strokeWidth="1.2" />
        <text x="40" y="786" fontSize="7" fontWeight="800" className="fill-foreground">THE CAUTION SET — the printed ADVERSE EFFECTS column, row by row (the cells are the book&apos;s; the separation protocol is KYP&apos;s, flagged)</text>
        <text x="40" y="800" fontSize="3.9" className="fill-foreground">MILRINONE: &apos;Tachycardia, ventricular arrhythmias, hypotension&apos; — the telemetry price, the ICU-only rank · ROFLUMILAST: &apos;Abdominal pain, weight loss, depression, anxiety, insomnia&apos; — the mood warning</text>
        <text x="40" y="810" fontSize="3.9" className="fill-foreground">THEOPHYLLINE: &apos;Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain&apos; — the systemic currency&apos;s price · THE PAIR: &apos;Nausea, headache, facial flushing, hypotension, abdominal pain&apos;</text>
        <text x="40" y="824" fontSize="3.9" fontWeight="700" className="fill-warning">THE NITRATE RULE — printed as the adverse cell &apos;hypotension in patients taking nitrates; &quot;hot and sweaty,&quot; then headache, heartburn, hypotension&apos; (never as a protocol — KYP-flagged): never concurrent; separate by 24h (sildenafil, vardenafil) or 48h (tadalafil)</text>
        <text x="40" y="836" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">SILDENAFIL ONLY: &apos;cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina&apos; — the off-target isoform, one number from PDE-5: 5 for the penis, 6 for the sight</text>
      </g>

      {/* ===== THE BOUNDARY STRIP ===== */}
      <g>
        <rect x="24" y="856" width="932" height="64" rx="10" className="fill-card stroke-border" />
        <text x="40" y="872" fontSize="6.2" fontWeight="800" className="fill-foreground">THE BOUNDARY + THE VERIFIED ABSENCES — book 245, the LAST page of the Autonomic Drugs banner</text>
        <text x="40" y="886" fontSize="4.2" className="fill-foreground">BEHIND (pdf 266 / book 244): the COMPLETED PH24 beta-blockers block — EXCLUDED here; only its selectivity subtable&apos;s final rows (the carvedilol/labetalol row, the nebivolol row, the &apos;NebivOlol increases NO&apos; mnemonic) and its footer pinned from behind.</text>
        <text x="40" y="895" fontSize="4.2" className="fill-foreground">THIS PAGE: the whole PDE-inhibitors block. AHEAD (pdf 268 / book 246): the NEW &apos;PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS&apos; banner — Ingested seafood toxins; sourcePages = [267] only. The β-blockers and the PDE inhibitors are the two levers on the same cAMP, on facing pages.</text>
        <text x="40" y="908" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">VERIFIED ABSENT from the 2026 table (documented, never cited as printed): PDE-1 and PDE-2 rows · any other methylxanthine (caffeine — the nonspecific row names theophylline alone) · any other PDE-3 member (amrinone or inamrinone) — the PDE-5 roster prints exactly FOUR members (sildenafil, vardenafil, tadalafil, avanafil); the book&apos;s own &apos;ionotropy&apos; spelling and &apos;(six)&apos; parenthetical carry verbatim</text>
      </g>

      {/* ===== FOOTER — THE READING RULE ===== */}
      <g>
        <rect x="24" y="928" width="932" height="14" rx="4" className="fill-secondary/20" />
        <text x="490" y="938" textAnchor="middle" fontSize="4.2" fontWeight="700" className="fill-muted-foreground">Every type, mechanism, use, and adverse cell is the book&apos;s own print (book 245, pdf 267, the whole page) — pure text, zero rasters, never reproduced: an original KYP adaptation · KYP flags: the camp split, the fork compression, the 24-48h nitrate protocol (not printed), the level-monitoring story (not printed)</text>
      </g>
    </svg>
  );
}
