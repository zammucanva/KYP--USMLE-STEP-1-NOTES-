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
