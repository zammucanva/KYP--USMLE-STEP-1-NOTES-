/* Cardiovascular — CV2, topic heart-embryology-structures (pdf 307 / book 285
 * — the embryonic-structure → adult-derivative table + the ventricular
 * septation recap). Census (pdfimages): 3 raster objects (heart-tube stage
 * figure — described not reproduced); the TABLE is pure text and carried
 * verbatim in one KYP registry visual. Nothing is reproduced; purely
 * presentational (no props, no hooks, no external images). */

export const EmbryologyStructuresMap = () => {
  const w = 1102;
  const h = 1150;

  const rows: [string, string][] = [
    ["Right common/anterior cardinal veins", "Superior vena cava (SVC)"],
    ["Posterior cardinal, subcardinal, and supracardinal veins", "Inferior vena cava (IVC)"],
    ["Right horn of sinus venosus", "Smooth part of RA (sinus venarum)"],
    ["Left horn of sinus venosus", "Coronary sinus"],
    ["Primitive pulmonary vein", "Smooth part of LA"],
    ["Primitive atrium", "Trabeculated part of LA and RA"],
    ["Endocardial cushion", "Atrial septum, membranous interventricular septum; AV and semilunar valves"],
    ["Primitive ventricle", "Trabeculated part of LV and RV"],
    ["Bulbus cordis", "Smooth parts (outflow tract) of LV and RV"],
    ["Truncus arteriosus", "Ascending aorta and pulmonary trunk"],
  ];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Heart embryology structures — the printed ten-row mapping of embryonic structures to adult derivatives (right common and anterior cardinal veins to the superior vena cava; posterior cardinal, subcardinal, and supracardinal veins to the inferior vena cava; right horn of sinus venosus to the smooth part of the right atrium, the sinus venarum; left horn of sinus venosus to the coronary sinus; primitive pulmonary vein to the smooth part of the left atrium; primitive atrium to the trabeculated parts of both atria; endocardial cushion to the atrial septum, membranous interventricular septum, and AV and semilunar valves; primitive ventricle to the trabeculated parts of both ventricles; bulbus cordis to the smooth outflow-tract parts of both ventricles; truncus arteriosus to the ascending aorta and pulmonary trunk), organized on the smooth-versus-trabeculated axis with the ventricular septation recap (muscular septum forms with the interventricular foramen; aorticopulmonary septum rotates and fuses to form the membranous septum; VSD usually membranous and the most common congenital cardiac anomaly; complete versus partial AV septal defects with the Down syndrome association) and the heart-tube stage timeline (22, 24, 35, 50 days) — an original KYP diagram of book 285." className="min-w-[1060px]">
      <title>Heart embryology structures — the address book</title>
      <desc>
        Zone A the ten-row mapping on the smooth/trabeculated axis; Zone B the ventricular septation recap; Zone C the stage timeline.
      </desc>

      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Heart embryology — every structure names its adult address</text>
        <rect x="806" y="25" width="256" height="18" rx="6" className="fill-brand-soft" />
        <text x="934" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">10 rows · smooth = immigrant · trabeculated = resident</text>
      </g>

      {/* ZONE A — the table */}
      <g>
        <rect x="36" y="72" width="1030" height="560" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="94" fontSize="5.4" fontWeight="800" className="fill-foreground">THE ADDRESS BOOK — the printed table, all ten rows verbatim</text>
        <text x="52" y="105" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">census: 3 raster objects (heart-tube figure — described, not reproduced); the mapping table is pure text, carried below row by row</text>

        <text x="76" y="126" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">EMBRYONIC STRUCTURE (printed header)</text>
        <text x="560" y="126" fontSize="3.6" fontWeight="800" className="fill-brand">GIVES RISE TO (printed header)</text>

        {rows.map(([a, b], i) => (
          <g key={a}>
            <rect x="52" y={138 + i * 47} width="494" height="40" rx="8" className="fill-card stroke-border" />
            <text x="66" y={138 + i * 47 + 24} fontSize="3" fontWeight="700" className="fill-foreground">{a}</text>
            <path d={`M 548 ${138 + i * 47 + 20} L 560 ${138 + i * 47 + 20}`} stroke="currentColor" strokeWidth="1.4" className="stroke-brand" />
            <path d={`M 555 ${138 + i * 47 + 16} L 563 ${138 + i * 47 + 20} L 555 ${138 + i * 47 + 24} Z`} className="fill-brand" />
            <rect x="566" y={138 + i * 47} width="486" height="40" rx="8" className={i === 3 || i === 5 || i === 6 ? "fill-card stroke-brand" : "fill-card stroke-border"} />
            <text x="580" y={138 + i * 47 + 24} fontSize="3" fontWeight={i === 3 || i === 5 || i === 6 ? 800 : 700} className="fill-foreground">{b}</text>
          </g>
        ))}
        <text x="52" y="606" fontSize="2.8" fontWeight="800" className="fill-brand">HIGHLIGHTED ROWS = the exam&apos;s favorites: left horn → coronary sinus · primitive atrium → BOTH atria trabeculated · cushion → two septa + four valves</text>
        <text x="52" y="620" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">the smooth-vs-trabeculated axis (KYP): every SMOOTH segment is a late immigrant (right horn, pulmonary vein, bulbus cordis); every TRABECULATED segment is the original resident</text>
      </g>

      {/* ZONE B — ventricular septation recap */}
      <g>
        <rect x="36" y="644" width="1030" height="270" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="666" fontSize="5.4" fontWeight="800" className="fill-foreground">VENTRICULAR SEPTATION RECAP — the continued-morphogenesis block (book 285), verbatim</text>
        <g>
          <rect x="52" y="682" width="500" height="216" rx="10" className="fill-card stroke-border" />
          <text x="66" y="704" fontSize="3.4" fontWeight="800" className="fill-brand">THE SEPTATION STEPS (printed)</text>
          <text x="66" y="724" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Muscular interventricular septum forms. Opening = interventricular foramen.</text>
          <text x="66" y="742" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Aorticopulmonary septum rotates and fuses with the muscular septum →</text>
          <text x="66" y="760" fontSize="2.9" fontWeight="700" className="fill-foreground/80">membranous interventricular septum, closing the interventricular foramen.</text>
          <text x="66" y="782" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Growth of endocardial cushions separates atria from ventricles and contributes</text>
          <text x="66" y="800" fontSize="2.9" fontWeight="700" className="fill-foreground/80">to both atrial septation and the membranous portion of the IV septum.</text>
          <rect x="66" y="820" width="420" height="20" rx="5" className="fill-emergency-soft stroke-emergency" />
          <text x="74" y="833.5" fontSize="2.9" fontWeight="800" className="fill-emergency">VSD — MOST COMMON congenital cardiac anomaly, usually MEMBRANOUS</text>
          <text x="66" y="866" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">the wall that closes last fails most often (KYP reading of the membranous row)</text>
        </g>
        <g>
          <rect x="566" y="682" width="500" height="216" rx="10" className="fill-card stroke-border" />
          <text x="580" y="704" fontSize="3.4" fontWeight="800" className="fill-brand">THE AVSD SPECTRUM (printed)</text>
          <text x="580" y="724" fontSize="2.9" fontWeight="700" className="fill-foreground/80">Atrioventricular septal defect — also called endocardial cushion or AV canal</text>
          <text x="580" y="742" fontSize="2.9" fontWeight="700" className="fill-foreground/80">defect; incomplete fusion of endocardial cushions → defects in septa and AV valves.</text>
          <rect x="580" y="756" width="470" height="34" rx="6" className="fill-emergency-soft stroke-emergency" />
          <text x="588" y="768" fontSize="2.9" fontWeight="800" className="fill-emergency">COMPLETE: common AV valve with ASD and VSD</text>
          <text x="588" y="784" fontSize="2.9" fontWeight="800" className="fill-emergency">PARTIAL: primum ASD with cleft mitral valve → MR; NO VSD</text>
          <rect x="580" y="802" width="280" height="20" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="588" y="815.5" fontSize="2.9" fontWeight="800" className="fill-warning">ASSOCIATED WITH DOWN SYNDROME</text>
          <text x="580" y="846" fontSize="2.8" fontWeight="700" className="fill-muted-foreground">figure furniture carried: aorticopulmonary septum · interventricular foramen · membranous IV septum · AV canals · muscular IV septum · RA/LA columns</text>
          <text x="580" y="872" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">footer slug: FAS1_2026_07-Cardio.indd 285 · 12/18/25 9:25 AM</text>
        </g>
      </g>

      {/* ZONE C — stage timeline */}
      <g>
        <rect x="36" y="926" width="1030" height="120" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="948" fontSize="5.4" fontWeight="800" className="fill-foreground">THE HEART-TUBE TIMELINE — the printed figure&apos;s stage tags (22 → 50 days)</text>
        <line x1="120" y1="990" x2="1044" y2="990" className="stroke-foreground" strokeWidth="1.5" />
        {[
          { x: 160, t: "22 days", d: "atrium · sinus venosus · bulbus cordis · aortic arches" },
          { x: 420, t: "24 days", d: "SVC · truncus arteriosus · cardinal veins · pericardium" },
          { x: 680, t: "35 days", d: "left ventricle visible" },
          { x: 940, t: "50 days", d: "ventricles formed" },
        ].map((s) => (
          <g key={s.t}>
            <line x1={s.x} y1="982" x2={s.x} y2="998" className="stroke-foreground" strokeWidth="1.5" />
            <text x={s.x} y="976" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-brand">{s.t}</text>
            <text x={s.x} y="1014" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">{s.d}</text>
          </g>
        ))}
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1058" width="1054" height="64" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1076" fontSize="3.8" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid 2026, Part 1 pdf 307 / book 285 (Cardiovascular—Embryology: Heart morphogenesis continued + Heart embryology table).</text>
        <text x="42" y="1087" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): 3 raster objects — heart-tube stage figure COPYRIGHTED_NO_REPUBLISH, described not reproduced; the ten-row table and the septation text carried verbatim.</text>
        <text x="42" y="1098" fontSize="3.8" className="fill-muted-foreground">The region-grouping arrows, the smooth/trabeculated axis, and the timeline strip are ORIGINAL KYP ADAPTATIONS of the printed table (documented).</text>
      </g>
    </svg>
  );
};
