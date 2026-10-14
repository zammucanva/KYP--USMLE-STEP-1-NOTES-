"use client";

// Original KYP visuals — Chromatin organization (First Aid 2026, Part 1 pdf 54 / book 32).
// All SVGs use theme tokens (currentColor + Tailwind color classes),
// so they stay readable in light AND dark mode.

// ---------------------------------------------------------------------------
// Chromatin packing hierarchy — DNA double helix → metaphase chromosome
// ---------------------------------------------------------------------------

export function ChromatinPackingHierarchy() {
  const w = 940;
  const h = 330;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Chromatin packing hierarchy from DNA double helix to metaphase chromosome" className="min-w-[880px]">
      {/* stage 1: DNA double helix */}
      <g>
        <path
          d="M 40 150 C 55 120, 75 120, 90 150 C 105 180, 125 180, 140 150"
          fill="none" strokeWidth="2.4" className="stroke-brand"
        />
        <path
          d="M 40 170 C 55 140, 75 140, 90 170 C 105 200, 125 200, 140 170"
          fill="none" strokeWidth="2.4" className="stroke-neural"
        />
        {[46, 58, 70, 82, 94, 106, 118, 130].map((x, i) => (
          <line key={x} x1={x} y1={152 + (i % 2) * 2} x2={x} y2={172 + (i % 2) * 2} strokeWidth="1" className="stroke-muted-foreground/70" />
        ))}
        <text x="90" y="228" textAnchor="middle" fontSize="11" fontWeight="700" className="fill-foreground">DNA double helix</text>
        <text x="90" y="245" textAnchor="middle" fontSize="9.5" className="fill-muted-foreground">⊝ charge — phosphate groups</text>
      </g>

      {/* arrow 1→2 */}
      <g stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="currentColor">
        <line x1="152" y1="160" x2="182" y2="160" />
        <path d="M182 160 l-8 -4.5 v9 z" stroke="none" />
      </g>

      {/* stage 2: nucleosome beads on a string */}
      <g>
        {/* linker DNA between two nucleosomes */}
        <path d="M 218 178 C 240 196, 268 196, 290 180" fill="none" strokeWidth="2" className="stroke-brand" />
        {/* H1 clamping the linker */}
        <rect x="238" y="196" width="34" height="15" rx="7" className="fill-warning-soft stroke-warning" strokeWidth="1.2" />
        <text x="255" y="207" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">H1</text>
        {/* nucleosome 1 */}
        <g>
          <ellipse cx="205" cy="160" rx="24" ry="34" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
          <ellipse cx="205" cy="160" rx="13" ry="24" className="fill-card stroke-neural/60" strokeWidth="1" />
          <path d="M 186 138 C 200 128, 212 134, 216 148 C 220 162, 214 180, 200 186 C 212 178, 218 164, 212 150 C 208 138, 196 132, 186 138"
            fill="none" strokeWidth="2.2" className="stroke-brand" />
        </g>
        {/* nucleosome 2 */}
        <g>
          <ellipse cx="305" cy="158" rx="24" ry="34" className="fill-neural-soft stroke-neural" strokeWidth="1.4" />
          <ellipse cx="305" cy="158" rx="13" ry="24" className="fill-card stroke-neural/60" strokeWidth="1" />
          <path d="M 286 136 C 300 126, 312 132, 316 146 C 320 160, 314 178, 300 184 C 312 176, 318 162, 312 148 C 308 136, 296 130, 286 136"
            fill="none" strokeWidth="2.2" className="stroke-brand" />
        </g>
        <text x="255" y="252" textAnchor="middle" fontSize="11" fontWeight="700" className="fill-foreground">Nucleosome — “beads on a string”</text>
        <text x="255" y="268" textAnchor="middle" fontSize="9.5" className="fill-muted-foreground">octamer (H2A, H2B, H3, H4)×2 · DNA loops twice</text>
        <text x="255" y="282" textAnchor="middle" fontSize="9.5" className="fill-warning" fontWeight="700">H1 histone binds the linker DNA</text>
        <text x="255" y="108" textAnchor="middle" fontSize="9.5" className="fill-muted-foreground">histones ⊕ charge — lysine &amp; arginine</text>
      </g>

      {/* arrow 2→3 */}
      <g stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="currentColor">
        <line x1="342" y1="160" x2="372" y2="160" />
        <path d="M372 160 l-8 -4.5 v9 z" stroke="none" />
      </g>

      {/* stage 3: supercoiled structure */}
      <g>
        <path
          d="M 388 150 C 398 128, 414 128, 420 150 C 426 172, 442 172, 448 150 C 454 128, 470 128, 476 150 C 482 172, 498 172, 504 150 C 510 128, 526 128, 532 150 C 538 172, 554 172, 560 150"
          fill="none" strokeWidth="7" strokeLinecap="round" className="stroke-neural/80"
        />
        <path
          d="M 388 150 C 398 128, 414 128, 420 150 C 426 172, 442 172, 448 150 C 454 128, 470 128, 476 150 C 482 172, 498 172, 504 150 C 510 128, 526 128, 532 150 C 538 172, 554 172, 560 150"
          fill="none" strokeWidth="2.4" strokeLinecap="round" className="stroke-brand"
        />
        <text x="475" y="212" textAnchor="middle" fontSize="11" fontWeight="700" className="fill-foreground">Supercoiled structure</text>
        <text x="475" y="228" textAnchor="middle" fontSize="9.5" className="fill-muted-foreground">coiled 30-nm fiber</text>
      </g>

      {/* arrow 3→4 */}
      <g stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="currentColor">
        <line x1="572" y1="160" x2="602" y2="160" />
        <path d="M602 160 l-8 -4.5 v9 z" stroke="none" />
      </g>

      {/* stage 4: euchromatin vs heterochromatin */}
      <g>
        {/* euchromatin — loose loops */}
        <g>
          <path d="M 622 96 C 634 74, 650 74, 658 96 C 668 120, 684 120, 692 96" fill="none" strokeWidth="2" className="stroke-brand/80" />
          <path d="M 640 112 C 652 92, 668 92, 676 112 C 684 132, 700 130, 706 112" fill="none" strokeWidth="2" className="stroke-brand/60" />
          <rect x="616" y="140" width="100" height="18" rx="9" className="fill-brand-soft" />
          <text x="666" y="153" textAnchor="middle" fontSize="9.5" fontWeight="700" className="fill-brand">Euchromatin</text>
          <text x="666" y="172" textAnchor="middle" fontSize="9" className="fill-muted-foreground">acetylated · active</text>
        </g>
        {/* heterochromatin — condensed */}
        <g>
          <ellipse cx="666" cy="218" rx="42" ry="26" className="fill-foreground/25 stroke-foreground/50" strokeWidth="1.2" />
          {Array.from({ length: 24 }).map((_, i) => (
            <circle key={i} r="2.2" cx={666 - 36 + ((i * 29) % 72)} cy={218 - 18 + ((i * 17) % 36)} className="fill-foreground/45" />
          ))}
          <rect x="608" y="252" width="116" height="18" rx="9" className="fill-warning-soft" />
          <text x="666" y="265" textAnchor="middle" fontSize="9.5" fontWeight="700" className="fill-warning">Heterochromatin</text>
          <text x="666" y="284" textAnchor="middle" fontSize="9" className="fill-muted-foreground">deacetylated · inactive</text>
        </g>
      </g>

      {/* arrow 4→5 */}
      <g stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" fill="currentColor">
        <line x1="736" y1="160" x2="766" y2="160" />
        <path d="M766 160 l-8 -4.5 v9 z" stroke="none" />
      </g>

      {/* stage 5: metaphase chromosome */}
      <g>
        <g className="stroke-neural" strokeWidth="9" strokeLinecap="round" fill="none">
          <path d="M 822 92 C 830 130, 848 150, 848 160 C 848 170, 830 190, 822 228" />
          <path d="M 874 92 C 866 130, 848 150, 848 160 C 848 170, 866 190, 874 228" />
        </g>
        <g className="stroke-brand/70" strokeWidth="3" strokeLinecap="round" fill="none">
          <path d="M 822 92 C 830 130, 848 150, 848 160 C 848 170, 830 190, 822 228" />
          <path d="M 874 92 C 866 130, 848 150, 848 160 C 848 170, 866 190, 874 228" />
        </g>
        <circle cx="848" cy="160" r="7" className="fill-card stroke-foreground" strokeWidth="1.6" />
        <text x="848" y="252" textAnchor="middle" fontSize="11" fontWeight="700" className="fill-foreground">Metaphase chromosome</text>
        <text x="848" y="268" textAnchor="middle" fontSize="9.5" className="fill-muted-foreground">maximally condensed</text>
      </g>

      {/* condensation rail */}
      <g>
        <line x1="46" y1="308" x2="836" y2="308" stroke="currentColor" strokeWidth="1.6" className="text-muted-foreground" strokeDasharray="5 5" />
        <path d="M848 308 l-10 -5.5 v11 z" className="fill-muted-foreground" />
        <text x="440" y="302" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-muted-foreground">CONDENSATION</text>
      </g>

      {/* S-phase + mtDNA chips */}
      <g fontSize="9.5">
        <rect x="616" y="18" width="150" height="18" rx="9" className="fill-brand-soft" />
        <text x="691" y="31" textAnchor="middle" fontWeight="700" className="fill-brand">DNA + histone synthesis in S phase</text>
        <rect x="616" y="42" width="150" height="18" rx="9" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x="691" y="55" textAnchor="middle" fontWeight="700" className="fill-foreground/80">mtDNA: circular, no histones</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Heterochromatin vs euchromatin — EM pattern (original KYP schematic)
// ---------------------------------------------------------------------------

export function HeterochromatinEuchromatinEm() {
  const w = 940;
  const h = 390;
  const cx = 210;
  const cy = 195;
  // deterministic pseudo-random dots (stable across renders); coordinates are
  // rounded to 2 decimals so SSR and client serialize identical attribute
  // strings (Math.cos/sin can differ in the last ULP between JS runtimes —
  // unrounded values trigger a hydration attribute mismatch).
  const r2 = (v: number) => Math.round(v * 100) / 100;
  const rimDots = Array.from({ length: 90 }).map((_, i) => {
    const a = (i * 137.508 * Math.PI) / 180;
    const rad = 118 + ((i * 53) % 26);
    return { x: r2(cx + rad * Math.cos(a)), y: r2(cy + rad * Math.sin(a)) };
  });
  const cytoDots = Array.from({ length: 46 }).map((_, i) => {
    const a = (i * 97.13 * Math.PI) / 180;
    const rad = 146 + ((i * 41) % 30);
    return { x: r2(cx + rad * Math.cos(a)), y: r2(cy + rad * Math.sin(a)) };
  });
  const euDots = Array.from({ length: 26 }).map((_, i) => ({
    x: ((i * 73) % 150) - 75,
    y: ((i * 47) % 120) - 60,
  }));
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Electron microscopy pattern of heterochromatin versus euchromatin" className="min-w-[880px]">
      {/* cytoplasm */}
      <circle cx={cx} cy={cy} r="176" className="fill-secondary stroke-border" strokeWidth="1.4" />
      {cytoDots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="2" className="fill-muted-foreground/40" />
      ))}

      {/* nuclear envelope (double membrane) */}
      <circle cx={cx} cy={cy} r="142" fill="none" strokeWidth="2.4" className="stroke-foreground/75" />
      <circle cx={cx} cy={cy} r="136" fill="none" strokeWidth="1.2" className="stroke-foreground/45" />

      {/* euchromatin — pale center */}
      <circle cx={cx} cy={cy} r="112" className="fill-card" />
      {euDots.map((d, i) => (
        <circle key={i} cx={cx + d.x} cy={cy + d.y * 0.8} r="1.4" className="fill-foreground/20" />
      ))}

      {/* heterochromatin — dense peripheral rim */}
      <g clipPath="url(#em-nucleus-clip)">
        <defs>
          <clipPath id="em-nucleus-clip">
            <circle cx={cx} cy={cy} r="135" />
          </clipPath>
        </defs>
        {rimDots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r="2.6" className="fill-foreground/60" />
        ))}
        {/* clumps against the envelope */}
        <ellipse cx={cx - 88} cy={cy - 88} rx="26" ry="19" className="fill-foreground/55" />
        <ellipse cx={cx + 104} cy={cy - 56} rx="30" ry="20" className="fill-foreground/55" />
        <ellipse cx={cx + 74} cy={cy + 102} rx="27" ry="18" className="fill-foreground/50" />
        {/* Barr body — inactive X on the periphery */}
        <ellipse cx={cx - 30} cy={cy + 112} rx="17" ry="12" className="fill-foreground/70 stroke-foreground" strokeWidth="0.8" />
      </g>

      {/* nucleolus */}
      <circle cx={cx + 34} cy={cy - 26} r="31" className="fill-foreground/75" />
      <circle cx={cx + 34} cy={cy - 26} r="31" fill="none" strokeWidth="1.2" className="stroke-foreground" />

      {/* leader lines + letters */}
      <g fontSize="12" fontWeight="800">
        <line x1={cx + 92} y1={cy - 96} x2={cx + 150} y2={cy - 132} strokeWidth="1.2" className="stroke-foreground/70" />
        <text x={cx + 156} y={cy - 128} className="fill-foreground">H</text>
        <line x1={cx - 20} y1={cy + 6} x2={cx - 84} y2={cy + 44} strokeWidth="1.2" className="stroke-foreground/70" />
        <text x={cx - 96} y={cy + 48} className="fill-foreground">E</text>
        <line x1={cx + 52} y1={cy - 32} x2={cx + 108} y2={cy - 8} strokeWidth="1.2" className="stroke-foreground/70" />
        <text x={cx + 114} y={cy - 2} className="fill-foreground">Nu</text>
        <line x1={cx - 38} y1={cy + 118} x2={cx + 4} y2={cy + 168} strokeWidth="1.2" className="stroke-foreground/70" />
      </g>
      <text x={cx + 10} y={cy + 184} fontSize="9.5" fontWeight="700" className="fill-warning">Barr body (inactive X)</text>

      {/* legend cards */}
      <g>
        <rect x="430" y="26" width="490" height="102" rx="12" className="fill-card stroke-warning/50" strokeWidth="1.4" />
        <text x="450" y="50" fontSize="11.5" fontWeight="800" className="fill-warning">H — Heterochromatin</text>
        <text x="450" y="70" fontSize="10" className="fill-foreground/85">Condensed · appears darker on EM · sterically inaccessible</text>
        <text x="450" y="86" fontSize="10" className="fill-foreground/85">→ transcriptionally INACTIVE · ↑ methylation, ↓ acetylation</text>
        <text x="450" y="106" fontSize="9.5" fontStyle="italic" className="fill-muted-foreground">“Highly condensed = hidden chromatin” · Barr bodies on the nuclear periphery</text>

        <rect x="430" y="144" width="490" height="102" rx="12" className="fill-card stroke-brand/50" strokeWidth="1.4" />
        <text x="450" y="168" fontSize="11.5" fontWeight="800" className="fill-brand">E — Euchromatin</text>
        <text x="450" y="188" fontSize="10" className="fill-foreground/85">Less condensed · appears lighter on EM · sterically accessible</text>
        <text x="450" y="204" fontSize="10" className="fill-foreground/85">→ transcriptionally ACTIVE</text>
        <text x="450" y="224" fontSize="9.5" fontStyle="italic" className="fill-muted-foreground">“Eu = true — truly transcribed · euchromatin is expressed”</text>

        <rect x="430" y="262" width="490" height="44" rx="12" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="450" y="280" fontSize="10.5" fontWeight="800" className="fill-foreground">Nu — Nucleolus</text>
        <text x="450" y="296" fontSize="9.5" className="fill-muted-foreground">dense round body within the nucleus</text>

        <rect x="430" y="322" width="490" height="44" rx="12" className="fill-brand-soft/60 stroke-brand/40" strokeWidth="1.2" />
        <text x="450" y="340" fontSize="9.5" fontWeight="700" className="fill-foreground">Diagnostic pattern to carry into the exam:</text>
        <text x="450" y="356" fontSize="9.5" className="fill-foreground/85">dense heterochromatin rims the nuclear envelope · pale euchromatin sits centrally</text>
      </g>
    </svg>
  );
}
