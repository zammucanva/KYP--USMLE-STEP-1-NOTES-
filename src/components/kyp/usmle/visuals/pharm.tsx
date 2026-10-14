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
