"use client";

// Original KYP ECG rendering engine.
// Schematic but morphologically faithful ECG strips drawn as SVG,
// theme-aware (currentColor) so they render correctly in light AND
// dark mode. No copyrighted artwork is reproduced.

import { useId } from "react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// ECG waveform generator
// ---------------------------------------------------------------------------

interface BeatSpec {
  pr: number; // PR interval in px (25 px = 100 ms at our scale)
  dropQrs?: boolean; // P wave without QRS (2nd-degree block)
  noP?: boolean; // QRS without preceding P (3rd-degree dissociation)
  pOffsetY?: number; // shift P wave (eg, P buried on T)
  rAmp?: number; // R-wave amplitude scale (junctional/ventricular escape = wide)
  wide?: boolean; // wide, bizarre QRS (ventricular escape rhythm)
}

interface StripSpec {
  beats: BeatSpec[];
  // For 3rd-degree AV block: independent P-wave train marching through.
  pTrain?: { start: number; interval: number; count: number };
  totalWidth: number;
}

const BASE_Y = 46;
const P_AMP = 9;
const P_W = 26;
const R_AMP = 34;
const Q_AMP = 5;
const S_AMP = 10;
const QRS_W = 20;
const T_AMP = 9;
const T_W = 56;

function pWavePoints(x0: number, yOff = 0): [number, number][] {
  const pts: [number, number][] = [];
  for (let i = 0; i <= 10; i++) {
    const t = i / 10;
    const x = x0 + t * P_W;
    const y = BASE_Y + yOff - Math.sin(t * Math.PI) * P_AMP;
    pts.push([x, y]);
  }
  return pts;
}

function qrsPoints(x0: number, scale = 1, wide = false): [number, number][] {
  const w = wide ? QRS_W * 1.7 : QRS_W;
  const r = wide ? R_AMP * 1.15 : R_AMP;
  const s = wide ? S_AMP * 1.4 : S_AMP;
  return [
    [x0, BASE_Y],
    [x0 + w * 0.18, BASE_Y + Q_AMP], // Q
    [x0 + w * 0.45, BASE_Y - r * scale], // R peak
    [x0 + w * 0.72, BASE_Y + s], // S
    [x0 + w, BASE_Y - 2], // back toward baseline
  ];
}

function tWavePoints(x0: number): [number, number][] {
  const pts: [number, number][] = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    const x = x0 + t * T_W;
    const y = BASE_Y - Math.sin(t * Math.PI) * T_AMP;
    pts.push([x, y]);
  }
  return pts;
}

function pointsToPath(pts: [number, number][]): string {
  return pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
}

function buildStrip(spec: StripSpec): { trace: string; pMarks: number[] } {
  const all: [number, number][] = [[0, BASE_Y]];
  const pMarks: number[] = [];
  let x = 14;

  const drawBeat = (b: BeatSpec) => {
    if (!b.noP) {
      const yOff = b.pOffsetY ?? 0;
      all.push(...pWavePoints(x, yOff));
      if (yOff === 0) pMarks.push(x + P_W / 2);
      x += P_W;
      // PR segment
      all.push([x + b.pr - P_W, BASE_Y + (b.pOffsetY ?? 0)]);
      x += b.pr - P_W;
    }
    if (!b.dropQrs) {
      all.push(...qrsPoints(x, b.rAmp ?? 1, b.wide));
      x += b.wide ? QRS_W * 1.7 : QRS_W;
      all.push([x + 8, BASE_Y]);
      x += 8;
      all.push(...tWavePoints(x));
      x += T_W;
    }
    // TP segment to next beat
    x += 46;
    all.push([x, BASE_Y]);
  };

  if (spec.pTrain) {
    // 3rd-degree: draw a P-wave train and a separate QRS train.
    const { start, interval, count } = spec.pTrain;
    const pPositions: number[] = [];
    for (let i = 0; i < count; i++) pPositions.push(start + i * interval);
    const beats = spec.beats;
    let bx = 14;
    let pi = 0;
    all.length = 0;
    all.push([0, BASE_Y]);
    let cursor = 14;
    // interleave events by x position
    type Ev = { x: number; kind: "p" | "qrs" };
    const events: Ev[] = pPositions.map((x) => ({ x, kind: "p" as const }));
    beats.forEach((b) => {
      events.push({ x: bx, kind: "qrs" });
      bx += b.pr + P_W + QRS_W + 8 + T_W + 46;
    });
    events.sort((a, b) => a.x - b.x);
    for (const ev of events) {
      if (ev.x < cursor) continue;
      if (ev.x > cursor) {
        all.push([ev.x, BASE_Y]);
        cursor = ev.x;
      }
      if (ev.kind === "p") {
        all.push(...pWavePoints(ev.x));
        pMarks.push(ev.x + P_W / 2);
        cursor = ev.x + P_W;
      } else {
        all.push(...qrsPoints(ev.x));
        cursor = ev.x + QRS_W;
        all.push([cursor + 6, BASE_Y]);
        cursor += 6;
        all.push(...tWavePoints(cursor));
        cursor += T_W;
      }
    }
    all.push([spec.totalWidth - 6, BASE_Y]);
    return { trace: pointsToPath(all), pMarks };
  }

  for (const b of spec.beats) drawBeat(b);
  all.push([spec.totalWidth - 6, BASE_Y]);
  return { trace: pointsToPath(all), pMarks };
}

// ---------------------------------------------------------------------------
// Strip component with ECG paper grid
// ---------------------------------------------------------------------------

export function EcgStrip({
  spec,
  label,
  prLabels,
  width = 620,
  height = 92,
  className,
}: {
  spec: StripSpec;
  label?: string;
  prLabels?: { x: number; text: string }[];
  width?: number;
  height?: number;
  className?: string;
}) {
  const { trace, pMarks } = buildStrip(spec);
  const gridId = `ecggrid-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  return (
    <figure className={cn("min-w-[560px]", className)}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        role="img"
        aria-label={label ?? "ECG strip"}
      >
        <defs>
          <pattern id={gridId} width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              className="text-muted-foreground/30"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width={width} height={height} fill={`url(#${gridId})`} className="text-muted-foreground" />
        {/* baseline */}
        <line
          x1="0"
          y1={BASE_Y}
          x2={width}
          y2={BASE_Y}
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-muted-foreground/50"
        />
        {/* trace */}
        <path
          d={trace}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-emergency"
        />
        {/* P-wave markers */}
        {pMarks.map((x, i) => (
          <text
            key={i}
            x={x}
            y={BASE_Y + 14}
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill="currentColor"
            className="text-brand"
          >
            P
          </text>
        ))}
        {prLabels?.map((l, i) => (
          <text
            key={i}
            x={l.x}
            y={16}
            textAnchor="middle"
            fontSize="10.5"
            fontWeight="600"
            fill="currentColor"
            className="text-warning"
          >
            {l.text}
          </text>
        ))}
      </svg>
      {label ? (
        <figcaption className="mt-1 text-xs font-semibold text-muted-foreground">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}

// ---------------------------------------------------------------------------
// The four AV conduction blocks — the pilot ECG visual
// ---------------------------------------------------------------------------

export function AvBlockEcgGallery() {
  const strips: {
    title: string;
    spec: StripSpec;
    prLabels?: { x: number; text: string }[];
    finding: string;
  }[] = [
    {
      title: "1st-degree AV block — PR > 200 ms, every P conducts",
      spec: {
        beats: [{ pr: 62 }, { pr: 62 }, { pr: 62 }, { pr: 62 }],
        totalWidth: 620,
      },
      prLabels: [
        { x: 90, text: "PR ↑ (constant)" },
        { x: 280, text: "PR = PR = PR" },
      ],
      finding:
        "All P waves are followed by QRS, but the PR interval is uniformly prolonged. Benign — no treatment required.",
    },
    {
      title: "2nd-degree, Mobitz I (Wenckebach) — PR lengthens, then a beat drops",
      spec: {
        beats: [
          { pr: 30 },
          { pr: 46 },
          { pr: 62 },
          { pr: 30, dropQrs: true },
          { pr: 46 },
        ],
        totalWidth: 620,
      },
      prLabels: [
        { x: 80, text: "PR₁" },
        { x: 210, text: "PR₂ > PR₁" },
        { x: 360, text: "PR₃ > PR₂" },
      ],
      finding:
        "Progressive PR lengthening until a P wave is not followed by QRS (dropped beat). Regularly irregular. Usually asymptomatic — no treatment.",
    },
    {
      title: "2nd-degree, Mobitz II — PR constant, beats drop without warning",
      spec: {
        beats: [
          { pr: 40 },
          { pr: 40 },
          { pr: 40, dropQrs: true },
          { pr: 40 },
          { pr: 40 },
        ],
        totalWidth: 620,
      },
      prLabels: [{ x: 300, text: "PR constant → dropped QRS" }],
      finding:
        "Dropped beats NOT preceded by PR change. Structural disease (ischemia, fibrosis) — may progress to 3rd-degree block. Pacemaker usually required.",
    },
    {
      title: "3rd-degree (complete) AV block — P and QRS march independently",
      spec: {
        beats: [
          { pr: 0, noP: true, wide: true },
          { pr: 0, noP: true, wide: true },
          { pr: 0, noP: true, wide: true },
        ],
        pTrain: { start: 20, interval: 118, count: 6 },
        totalWidth: 620,
      },
      prLabels: [{ x: 300, text: "AV dissociation — atrial rate > ventricular rate" }],
      finding:
        "Atria and ventricles beat independently (P waves march through QRS/T). Wide, slow escape rhythm. Pacemaker required. Consider Lyme disease.",
    },
  ];

  return (
    <div className="space-y-6">
      {strips.map((s) => (
        <div
          key={s.title}
          className="rounded-xl border border-border bg-card p-4"
        >
          <div className="mb-2 text-sm font-bold">{s.title}</div>
          <div className="kyp-scroll overflow-x-auto rounded-lg bg-secondary/40 p-3">
            <EcgStrip spec={s.spec} prLabels={s.prLabels} label={undefined} />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {s.finding}
          </p>
        </div>
      ))}
      <p className="text-xs italic text-muted-foreground">
        Original KYP schematic traces — morphologies simplified for teaching;
        grid squares are not calibrated to standard ECG paper.
      </p>
    </div>
  );
}
