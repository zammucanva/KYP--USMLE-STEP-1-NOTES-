"use client";

// Original KYP anatomy & histology-style visuals.
// Schematic, copyright-safe, theme-aware.

// ---------------------------------------------------------------------------
// Urinary cast gallery (schematic light-microscopy view)
// ---------------------------------------------------------------------------

export function UrinaryCastGallery() {
  const casts = [
    {
      name: "RBC casts",
      find: "Glomerulonephritis · hypertensive emergency",
      tone: "rose" as const,
      render: (
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} transform={`translate(${26 + (i % 3) * 34} ${18 + Math.floor(i / 3) * 30})`}>
              <circle r="11" className="fill-emergency/70 stroke-emergency" strokeWidth="1" />
              <circle r="4.5" className="fill-background stroke-emergency" strokeWidth="0.8" />
            </g>
          ))}
        </g>
      ),
    },
    {
      name: "WBC casts",
      find: "Acute pyelonephritis · tubulointerstitial inflammation · transplant rejection",
      tone: "amber" as const,
      render: (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${30 + (i % 2) * 40} ${20 + Math.floor(i / 2) * 28})`}>
              <circle r="12" className="fill-warning/60 stroke-warning" strokeWidth="1" />
              {[0, 60, 120, 180, 240, 300].map((a) => (
                <circle key={a} r="3" cx={Math.round(Math.cos((a * Math.PI) / 180) * 45) / 10} cy={Math.round(Math.sin((a * Math.PI) / 180) * 45) / 10} className="fill-warning" />
              ))}
            </g>
          ))}
        </g>
      ),
    },
    {
      name: "Granular (\"muddy brown\") casts",
      find: "Acute tubular necrosis — ischemic or nephrotoxic",
      tone: "plum" as const,
      render: (
        <g>
          {Array.from({ length: 26 }).map((_, i) => (
            <circle
              key={i}
              r={1.6 + ((i * 7) % 3) * 0.7}
              cx={18 + ((i * 37) % 96)}
              cy={12 + ((i * 23) % 44)}
              className="fill-neural/70"
            />
          ))}
        </g>
      ),
    },
    {
      name: "Fatty casts / oval fat bodies",
      find: "Nephrotic syndrome — Maltese cross under polarized light",
      tone: "teal" as const,
      render: (
        <g>
          <circle cx="46" cy="30" r="13" className="fill-brand/25 stroke-brand" strokeWidth="1.2" />
          {[0, 45, 90, 135].map((a) => (
            <line
              key={a}
              x1={Math.round((46 - Math.cos((a * Math.PI) / 180) * 10) * 10) / 10}
              y1={Math.round((30 - Math.sin((a * Math.PI) / 180) * 10) * 10) / 10}
              x2={Math.round((46 + Math.cos((a * Math.PI) / 180) * 10) * 10) / 10}
              y2={Math.round((30 + Math.sin((a * Math.PI) / 180) * 10) * 10) / 10}
              className="stroke-brand"
              strokeWidth="1.6"
            />
          ))}
          <circle cx="86" cy="22" r="6" className="fill-brand/40 stroke-brand" strokeWidth="1" />
          <circle cx="80" cy="44" r="5" className="fill-brand/40 stroke-brand" strokeWidth="1" />
        </g>
      ),
    },
    {
      name: "Waxy casts",
      find: "End-stage renal disease / chronic kidney disease",
      tone: "neutral" as const,
      render: (
        <g>
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M ${20 + i * 30} ${16 + i * 12} q 8 6 16 0 q 6 -5 12 2`}
              fill="none"
              className="stroke-muted-foreground"
              strokeWidth="2.2"
            />
          ))}
        </g>
      ),
    },
    {
      name: "Hyaline casts",
      find: "Nonspecific — dehydration, exercise, diuretics (can be normal)",
      tone: "neutral" as const,
      render: (
        <g>
          <rect x="30" y="22" width="70" height="16" rx="8" className="fill-muted-foreground/20 stroke-muted-foreground/50" strokeWidth="1" />
          <rect x="44" y="40" width="42" height="12" rx="6" className="fill-muted-foreground/15 stroke-muted-foreground/40" strokeWidth="0.8" />
        </g>
      ),
    },
  ];

  const tones = {
    rose: "border-emergency/40",
    amber: "border-warning/40",
    plum: "border-neural/40",
    teal: "border-brand/40",
    neutral: "border-border",
  };

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {casts.map((c) => (
        <figure key={c.name} className={`rounded-xl border bg-card p-3 ${tones[c.tone]}`}>
          <div className="flex h-[110px] items-center justify-center rounded-lg bg-secondary/60">
            <svg viewBox="0 0 130 66" width="130" height="66" role="img" aria-label={`${c.name} schematic`}>
              <rect x="14" y="8" width="102" height="52" rx="26" className="fill-background/60 stroke-border" strokeWidth="1.2" />
              {c.render}
            </svg>
          </div>
          <figcaption className="mt-2">
            <div className="text-sm font-bold">{c.name}</div>
            <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{c.find}</div>
          </figcaption>
        </figure>
      ))}
      <p className="text-xs italic text-muted-foreground sm:col-span-2 lg:col-span-3">
        All casts share a Tamm-Horsfall mucoprotein (uromodulin) matrix secreted by renal tubular
        cells. Original KYP schematics — identify the inclusions, not the artwork.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Stroke territory map (schematic lateral hemisphere)
// ---------------------------------------------------------------------------

export function StrokeTerritoryMap() {
  const w = 660;
  const h = 300;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Stroke territories of the cerebral hemispheres" className="min-w-[600px]">
      {/* Brain outline (schematic lateral left hemisphere) */}
      <defs>
        <clipPath id="brainclip">
          <path d="M 120 150
                   C 110 90, 170 40, 260 38
                   C 330 36, 420 44, 480 80
                   C 540 116, 560 160, 540 200
                   C 520 240, 470 252, 400 250
                   L 200 250
                   C 140 248, 112 200, 120 150 Z" />
        </clipPath>
      </defs>

      <g clipPath="url(#brainclip)">
        {/* MCA territory — big lateral convexity */}
        <rect x="100" y="36" width="470" height="220" className="fill-emergency/25" />
        {/* ACA territory — superior-medial strip */}
        <path d="M 295 36 C 240 40 200 80 205 140 L 295 140 Z" className="fill-brand/40" />
        <path d="M 205 140 C 208 190 230 235 290 250 L 295 140 Z" className="fill-brand/40" />
        {/* PCA territory — posterior wedge */}
        <path d="M 480 80 C 540 116 560 160 540 200 C 520 240 470 252 400 250 L 400 90 Z" className="fill-neural/40" />
      </g>

      {/* outline on top */}
      <path
        d="M 120 150 C 110 90, 170 40, 260 38 C 330 36, 420 44, 480 80 C 540 116, 560 160, 540 200 C 520 240, 470 252, 400 250 L 200 250 C 140 248, 112 200, 120 150 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-foreground/70"
      />
      {/* central sulcus hint */}
      <path d="M 300 44 C 288 90, 288 130, 298 160" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-muted-foreground" />
      <text x="316" y="72" fontSize="9.5" fontStyle="italic" className="fill-muted-foreground">central sulcus</text>

      {/* labels */}
      <g fontSize="11.5" fontWeight="800">
        <text x="330" y="120" textAnchor="middle" className="fill-emergency">MCA</text>
        <text x="330" y="135" textAnchor="middle" fontSize="9" fontWeight="600" className="fill-emergency">face + arm &gt; leg</text>
        <text x="248" y="106" textAnchor="middle" className="fill-brand">ACA</text>
        <text x="248" y="121" textAnchor="middle" fontSize="9" fontWeight="600" className="fill-brand">leg &gt; arm</text>
        <text x="492" y="176" textAnchor="middle" className="fill-neural">PCA</text>
        <text x="492" y="191" textAnchor="middle" fontSize="9" fontWeight="600" className="fill-neural">occipital</text>
      </g>

      {/* Syndrome cheat cards on the right */}
      <g fontSize="10">
        <rect x="596" y="34" width="0" height="0" />
      </g>

      {/* bottom syndrome strip */}
      <g fontSize="10.5">
        <rect x="16" y="264" width="630" height="30" rx="8" className="fill-secondary" />
        <text x="30" y="283" className="fill-foreground">
          <tspan fontWeight="800" className="fill-brand">ACA</tspan> leg + urinary incontinence ·
          <tspan fontWeight="800" className="fill-emergency" dx="4">MCA</tspan> face/arm, aphasia (L) or neglect (R) ·
          <tspan fontWeight="800" className="fill-neural" dx="4">PCA</tspan> hemianopia w/ macular sparing ·
          <tspan fontWeight="800" dx="4" className="fill-warning">lenticulostriate</tspan> pure motor lacunar
        </text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Cranial nerve brainstem map
// ---------------------------------------------------------------------------

export function CranialNerveMap() {
  const w = 660;
  const h = 460;
  const cn = (n: string) => `CN ${n}`;
  const groups = [
    {
      level: "Midbrain",
      y: 78,
      color: "fill-brand-soft stroke-brand",
      text: "text-brand",
      nerves: [
        { n: "III", side: "L", func: "Oculomotor" },
        { n: "IV", side: "R", func: "Trochlear — crosses midline!" },
      ],
    },
    {
      level: "Pons",
      y: 178,
      color: "fill-warning-soft stroke-warning",
      text: "text-warning",
      nerves: [
        { n: "V", side: "L", func: "Trigeminal" },
        { n: "VI", side: "R", func: "Abducens" },
        { n: "VII", side: "L", func: "Facial" },
        { n: "VIII", side: "R", func: "Vestibulocochlear" },
      ],
    },
    {
      level: "Medulla",
      y: 286,
      color: "fill-emergency-soft stroke-emergency",
      text: "text-emergency",
      nerves: [
        { n: "IX", side: "L", func: "Glossopharyngeal" },
        { n: "X", side: "R", func: "Vagus" },
        { n: "XI", side: "L", func: "Accessory" },
        { n: "XII", side: "R", func: "Hypoglossal" },
      ],
    },
  ];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Cranial nerve nuclei levels in the brainstem" className="min-w-[600px]">
      {/* brainstem silhouette */}
      <path
        d="M 300 30
           C 320 30, 340 42, 338 66
           C 360 70, 376 84, 372 108
           C 368 120, 360 126, 350 130
           C 366 152, 370 180, 362 214
           C 356 240, 342 258, 336 262
           C 344 292, 344 330, 332 360
           C 324 380, 310 396, 296 400
           C 282 396, 268 380, 260 360
           C 248 330, 248 292, 256 262
           C 250 258, 236 240, 230 214
           C 222 180, 226 152, 242 130
           C 232 126, 224 120, 220 108
           C 216 84, 232 70, 254 66
           C 252 42, 272 30, 300 30 Z"
        className="fill-secondary/70 stroke-border"
        strokeWidth="1.6"
      />

      {/* level bands */}
      {groups.map((g) => (
        <g key={g.level}>
          {/* Level label sits ABOVE the dashed band line — never collides
              with the nerve function labels on the band rows, and uses the
              foreground fill so it stays high-contrast in light AND dark. */}
          <text x="64" y={g.y - 18} fontSize="12" fontWeight="800" className="fill-foreground">
            {g.level}
          </text>
          <line x1="64" y1={g.y - 12} x2="580" y2={g.y - 12} stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 4" className={g.text} />
          {g.nerves.map((nv, i) => {
            const left = nv.side === "L";
            const ny = g.y - 2 + i * 22;
            return (
              <g key={nv.n}>
                <line
                  x1={left ? 230 : 370}
                  y1={ny}
                  x2={left ? 150 : 450}
                  y2={ny}
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className="text-muted-foreground"
                />
                <circle cx={left ? 142 : 458} cy={ny} r="14" className={g.color} strokeWidth="1.4" />
                <text x={left ? 142 : 458} y={ny + 4} textAnchor="middle" fontSize="11" fontWeight="800" className={g.text}>
                  {nv.n}
                </text>
                <text x={left ? 122 : 480} y={ny + 4} textAnchor={left ? "end" : "start"} fontSize="10" className="fill-foreground/85">
                  {nv.func}
                </text>
              </g>
            );
          })}
        </g>
      ))}

      {/* organization rule */}
      <rect x="60" y="404" width="540" height="44" rx="10" className="fill-neural-soft/60" />
      <text x="330" y="422" textAnchor="middle" fontSize="10.5" fontWeight="700" className="fill-foreground">
        Sulcus limitans divides each level: medial nuclei = MOTOR (basal plate) · lateral nuclei = SENSORY (alar plate)
      </text>
      <text x="330" y="438" textAnchor="middle" fontSize="10" className="fill-muted-foreground">
        CN IV is the only nerve that crosses (contralateral function) · CN I has no thalamic relay · CN XI has a spinal root
      </text>
    </svg>
  );
}
