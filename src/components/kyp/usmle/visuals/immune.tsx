"use client";

// Original KYP immunology visuals (E batch: lymphoid structures).
// Theme tokens only. Redraws preserve the source's label sets, zonation
// logic, and clinical callouts; histology/radiographs are conveyed
// schematically (COPYRIGHTED_NO_REPUBLISH — never reproduced).

// ---------------------------------------------------------------------------
// E19 — The lymph node: B-cell cortex, T-cell paracortex, macrophage medulla
// (source: lymph node histology + schematic, pdf 116 / book 94)
// ---------------------------------------------------------------------------

export function LymphNodeMap() {
  const w = 980;
  const h = 640;
  const callout = (x: number, y: number, wd: number, title: string, lines: string[], tone = "fill-card stroke-border") => (
    <g key={`${title}-${x}-${y}`}>
      <rect x={x} y={y} width={wd} height={26 + lines.length * 12} rx="10" className={tone} strokeWidth="1.4" />
      <text x={x + 14} y={y + 18} fontSize="8.4" fontWeight="800" className="fill-foreground">{title}</text>
      {lines.map((b, i) => (
        <text key={i} x={x + 14} y={y + 32 + i * 12} fontSize="7.1" className="fill-muted-foreground">{b}</text>
      ))}
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The lymph node, an original KYP schematic (not a micrograph): a bean-shaped secondary lymphoid organ with many afferent lymphatics entering the convex side and one efferent lymphatic at the hilum. Under the capsule and its trabeculae, the outer cortex holds B-cell follicles — a dense quiescent primary follicle and an active secondary follicle with a pale germinal center ringed by a dark mantle zone. The paracortex between follicles and medulla contains T cells and high endothelial venules through which T and B cells enter from the blood; it is underdeveloped in DiGeorge syndrome and enlarges (paracortical hyperplasia, lymphadenopathy) in EBV and other viral infections. The medulla consists of medullary cords (lymphocytes and plasma cells) and medullary sinuses (reticular cells and macrophages) communicating with the efferent lymphatic. Functions: nonspecific filtration by macrophages, circulation of B and T cells, and immune response activation" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">The lymph node — B-cell cortex · T-cell paracortex · macrophage medulla (original KYP redraw)</text>
        <rect x="742" y="24" width="190" height="18" rx="9" className="fill-brand-soft" />
        <text x="837" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">many afferents in · 1+ efferent out</text>
      </g>

      {/* node body */}
      <g>
        {/* capsule + trabeculae */}
        <path d="M 150 250 C 150 120, 340 86, 470 100 C 610 114, 700 170, 700 260 C 700 380, 590 452, 450 456 C 310 460, 150 420, 150 250 Z"
          className="fill-secondary stroke-border" strokeWidth="3" />
        <path d="M 236 112 C 240 210, 238 330, 252 448" fill="none" stroke="currentColor" className="text-border" strokeWidth="2.4" />
        <path d="M 322 100 C 322 210, 320 330, 330 452" fill="none" stroke="currentColor" className="text-border" strokeWidth="2.4" />
        <text x="196" y="98" fontSize="7.6" fontWeight="800" className="fill-muted-foreground">Capsule</text>
        <text x="346" y="94" fontSize="7.6" fontWeight="800" className="fill-muted-foreground">Trabeculae</text>

        {/* cortex band label */}
        <text x="180" y="146" fontSize="8" fontWeight="800" className="fill-brand">Cortex (outer)</text>

        {/* 1° follicle — dense, quiescent */}
        <g>
          <circle cx="230" cy="196" r="34" className="fill-brand-soft stroke-brand" strokeWidth="1.6" />
          <text x="230" y="192" textAnchor="middle" fontSize="8.2" fontWeight="800" className="fill-brand">1° follicle</text>
          <text x="230" y="204" textAnchor="middle" fontSize="6.8" className="fill-foreground">dense · quiescent</text>
          <text x="230" y="214" textAnchor="middle" fontSize="6.8" className="fill-foreground">B cells</text>
        </g>

        {/* 2° follicle — germinal center + mantle zone */}
        <g>
          <circle cx="350" cy="180" r="46" className="fill-primary/15 stroke-primary" strokeWidth="1.8" />
          <circle cx="350" cy="180" r="30" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
          <text x="350" y="176" textAnchor="middle" fontSize="7.8" fontWeight="800" className="fill-foreground">Germinal</text>
          <text x="350" y="186" textAnchor="middle" fontSize="7.8" fontWeight="800" className="fill-foreground">center</text>
          <text x="350" y="126" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-brand">2° follicle (active)</text>
          <text x="350" y="238" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">Mantle zone (dark rim of small B lymphocytes)</text>
        </g>
        <text x="288" y="268" fontSize="6.8" className="fill-muted-foreground">Follicles = outer cortex, B-cell localization and proliferation</text>

        {/* paracortex */}
        <g>
          <path d="M 182 300 C 280 278, 420 276, 560 292 C 600 298, 640 312, 648 338 C 620 366, 540 378, 440 378 C 330 378, 220 366, 182 344 Z"
            className="fill-warning-soft stroke-warning" strokeWidth="1.6" />
          <text x="410" y="318" textAnchor="middle" fontSize="9.4" fontWeight="800" className="fill-foreground">Paracortex — T cells</text>
          <text x="410" y="332" textAnchor="middle" fontSize="6.8" className="fill-muted-foreground">between follicles and medulla · high endothelial venules (HEV):</text>
          <text x="410" y="343" textAnchor="middle" fontSize="6.8" className="fill-muted-foreground">T and B cells enter the node from the blood here</text>
          {/* HEV — vessel with a clear separate label below-right */}
          <g>
            <path d="M 556 288 C 560 306, 558 322, 550 336" fill="none" stroke="currentColor" className="text-emergency" strokeWidth="4.6" strokeLinecap="round" />
            <path d="M 566 340 L 596 356" stroke="currentColor" className="text-border" strokeWidth="1" />
            <text x="600" y="356" fontSize="6.8" fontWeight="700" className="fill-emergency">HEV</text>
            <text x="600" y="366" fontSize="6.4" className="fill-emergency">(postcapillary</text>
            <text x="600" y="375" fontSize="6.4" className="fill-emergency">venule) — T/B</text>
            <text x="600" y="384" fontSize="6.4" className="fill-emergency">cells enter from</text>
            <text x="600" y="393" fontSize="6.4" className="fill-emergency">the blood here</text>
          </g>
        </g>

        {/* medulla */}
        <g>
          <path d="M 200 396 C 300 408, 480 410, 620 396 C 600 430, 520 446, 420 448 C 320 450, 230 434, 200 396 Z"
            className="fill-card stroke-border" strokeWidth="1.6" />
          <text x="410" y="416" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">Medulla</text>
          <text x="410" y="428" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">medullary cords (lymphocytes + plasma cells) · medullary sinuses</text>
          <text x="410" y="438" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">(reticular cells + macrophages) → efferent lymphatics</text>
        </g>

        {/* afferent lymphatics — convex side (left) */}
        {[170, 210, 250].map((y, i) => (
          <g key={`aff-${i}`}>
            <path d={`M 96 ${y} C 120 ${y - 6}, 136 ${y - 10}, 152 ${y - 12}`} fill="none" strokeWidth="2" stroke="currentColor" className="text-muted-foreground" />
            <path d={`M 152 ${y - 12} l -8 -1 4 7 z`} className="fill-muted-foreground" />
          </g>
        ))}
        <text x="86" y="156" fontSize="7.4" fontWeight="800" className="fill-muted-foreground">Afferent</text>
        <text x="86" y="166" fontSize="7.4" fontWeight="800" className="fill-muted-foreground">lymphatics (many)</text>

        {/* efferent + hilum vessels */}
        <g>
          <path d="M 620 420 C 660 428, 692 432, 726 434" fill="none" strokeWidth="2.2" stroke="currentColor" className="text-muted-foreground" />
          <path d="M 729 434 l -8 -3 2 8 z" className="fill-muted-foreground" />
          <text x="736" y="430" fontSize="7.4" fontWeight="800" className="fill-muted-foreground">Efferent lymphatic</text>
          <path d="M 618 448 C 656 452, 690 450, 726 446" fill="none" strokeWidth="2.6" stroke="currentColor" className="text-emergency" />
          <text x="736" y="448" fontSize="7" fontWeight="700" className="fill-emergency">Artery (red) · Vein</text>
          <text x="736" y="458" fontSize="6.6" className="fill-muted-foreground">enter/exit at the hilum</text>
        </g>

        {/* filtration macrophage dots in sinuses */}
        {[[268, 404], [318, 402], [368, 401], [418, 401], [468, 402], [518, 404], [568, 407]].map(([x, y], i) => (
          <circle key={`m${i}`} cx={x} cy={y} r="4" className="fill-emergency/70" />
        ))}
        <text x="256" y="466" fontSize="6.4" className="fill-muted-foreground">macrophages (nonspecific filtration)</text>
      </g>

      {/* right-side clinical callouts */}
      {callout(724, 84, 232, "DiGeorge syndrome", ["Paracortex underdeveloped — no thymus,", "few T cells in the node"])}
      {callout(724, 132, 232, "EBV / viral infection", ["Extreme cellular immune response →", "paracortical hyperplasia →", "lymphadenopathy"], "fill-warning-soft stroke-warning")}
      {callout(724, 194, 232, "Node functions", ["Nonspecific filtration by macrophages ·", "circulation of B and T cells ·", "immune response activation"])}
      {callout(724, 256, 232, "1° vs 2° organs", ["1° = bone marrow (B cells) + thymus (T cells)", "2° = spleen, nodes, tonsils, adenoids,", "appendix, Peyer patches — where immune", "cells meet antigen"])}
      {callout(724, 332, 232, "Encapsulated, with trabeculae", ["A 2° lymphoid organ: many afferents in,", "1 or more efferents out"], "fill-secondary stroke-border")}

      {/* footer */}
      <g>
        <text x="24" y="520" fontSize="8.2" fontWeight="800" className="fill-foreground">Reading order of an immune response: antigen arrives in afferent lymph → macrophages filter →</text>
        <text x="24" y="534" fontSize="8.2" fontWeight="800" className="fill-foreground">dendritic cells present to T cells in the paracortex → B cells activate in follicle germinal centers</text>
        <text x="24" y="548" fontSize="8.2" fontWeight="800" className="fill-foreground">→ plasma cells exit via medulla and efferent lymph.</text>
        <text x="24" y="566" fontSize="7.2" className="fill-muted-foreground">Original KYP redraw of the source's lymph node histology + schematic (pdf 116 / book 94). The micrograph is conveyed schematically — never reproduced or faked.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E19 — Lymphatic drainage: the two ducts and the node clusters
// (source: lymphatic drainage associations figure + table, pdf 117 / book 95)
// ---------------------------------------------------------------------------

export function LymphaticDrainageMap() {
  const w = 980;
  const h = 660;
  const node = (cx: number, cy: number, label: string, palpable: boolean, lx: number, ly: number) => (
    <g key={label}>
      {palpable ? (
        <circle cx={cx} cy={cy} r="6.5" className="fill-emergency stroke-emergency" strokeWidth="1" />
      ) : (
        <circle cx={cx} cy={cy} r="6.5" className="fill-card stroke-emergency" strokeWidth="1.6" />
      )}
      <line x1={cx} y1={cy} x2={lx} y2={ly} stroke="currentColor" className="text-border" strokeWidth="1" />
      <text x={lx} y={ly + 3} fontSize="6.9" fontWeight="700" textAnchor={lx < cx ? "end" : "start"} className={palpable ? "fill-emergency" : "fill-muted-foreground"}>{label}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Lymphatic drainage associations, an original KYP redraw: a body map of lymph node clusters (filled dots = palpable nodes, hollow circles = nonpalpable nodes) beside the two great ducts — the right lymphatic duct draining the right side of the body above the diaphragm into the junction of the right subclavian and internal jugular veins, and the thoracic duct draining everything below the diaphragm plus the left thorax and upper limb into the junction of the left subclavian and internal jugular veins (thoracic duct rupture causes chylothorax). High-yield clusters marked: left supraclavicular Virchow node (left hemithorax, abdomen, pelvis — gastric cancer), periumbilical Sister Mary Joseph node (gastric cancer), hilar nodes (unilateral = pulmonary TB, bilateral = sarcoidosis), axillary (breast), epitrochlear (hand/forearm — secondary syphilis), popliteal pop-lateral (dorsolateral foot)" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Lymphatic drainage — the two ducts and the node clusters (original KYP redraw)</text>
        <circle cx="758" cy="33" r="6" className="fill-emergency stroke-emergency" />
        <text x="770" y="36" fontSize="7.2" fontWeight="700" className="fill-foreground">palpable</text>
        <circle cx="838" cy="33" r="6" className="fill-card stroke-emergency" strokeWidth="1.6" />
        <text x="850" y="36" fontSize="7.2" fontWeight="700" className="fill-muted-foreground">nonpalpable</text>
      </g>

      {/* body silhouette (simple schematic) */}
      <g>
        <path d="M 200 96 C 216 74, 244 74, 258 96 C 266 108, 266 124, 258 138 L 252 150 L 206 150 L 200 138 C 194 124, 194 108, 200 96 Z"
          className="fill-secondary stroke-border" strokeWidth="1.6" />
        <path d="M 226 150 C 172 158, 148 176, 146 214 L 150 300 C 152 342, 158 366, 168 384 L 312 384 C 322 366, 328 342, 330 300 L 334 214 C 332 176, 308 158, 254 150 Z"
          className="fill-secondary stroke-border" strokeWidth="1.6" />
        <path d="M 150 214 C 120 224, 100 244, 92 268 L 86 292 C 84 302, 90 310, 100 308 L 118 302"
          className="fill-secondary stroke-border" strokeWidth="1.6" />
        <path d="M 334 214 C 364 224, 384 244, 392 268 L 398 292 C 400 302, 394 310, 384 308 L 366 302"
          className="fill-secondary stroke-border" strokeWidth="1.6" />
        <path d="M 172 384 L 164 452 C 162 470, 166 482, 176 490 L 212 506 L 238 470 L 238 384 Z"
          className="fill-secondary stroke-border" strokeWidth="1.6" />
        <path d="M 308 384 L 316 452 C 318 470, 314 482, 304 490 L 268 506 L 242 470 L 242 384 Z"
          className="fill-secondary stroke-border" strokeWidth="1.6" />
        <path d="M 176 490 L 172 546 C 170 566, 178 578, 194 580 L 226 580 L 230 506 Z"
          className="fill-secondary stroke-border" strokeWidth="1.6" />
        <path d="M 304 490 L 308 546 C 310 566, 302 578, 286 580 L 254 580 L 250 506 Z"
          className="fill-secondary stroke-border" strokeWidth="1.6" />
        <text x="239" y="120" textAnchor="middle" fontSize="7" className="fill-muted-foreground">head / neck</text>
        <text x="240" y="256" textAnchor="middle" fontSize="7" className="fill-muted-foreground">thorax / abdomen</text>
      </g>

      {/* node clusters on the body */}
      {node(214, 100, "submandibular / submental", true, 150, 88)}
      {node(236, 118, "deep cervical", true, 320, 92)}
      {node(208, 152, "supraclavicular (L = Virchow)", true, 60, 176)}
      {node(196, 216, "mediastinal", false, 112, 206)}
      {node(272, 216, "hilar", false, 340, 206)}
      {node(128, 232, "axillary", true, 84, 226)}
      {node(112, 286, "epitrochlear", true, 66, 296)}
      {node(212, 300, "celiac / SMA / IMA", false, 128, 312)}
      {node(240, 330, "periumbilical (Sister Mary Joseph)", true, 348, 322)}
      {node(262, 352, "para-aortic", false, 340, 356)}
      {node(212, 396, "external iliac", false, 132, 404)}
      {node(258, 396, "internal iliac", false, 336, 400)}
      {node(206, 492, "superficial inguinal", true, 122, 500)}
      {node(288, 536, "popliteal (pop-lateral)", true, 348, 540)}

      {/* right panel: the two ducts */}
      <g>
        <rect x="470" y="76" width="486" height="180" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="488" y="100" fontSize="9.6" fontWeight="800" className="fill-brand">The two ducts</text>
        <rect x="488" y="112" width="216" height="126" rx="10" className="fill-secondary stroke-border" strokeWidth="1.2" />
        <text x="596" y="132" textAnchor="middle" fontSize="8.6" fontWeight="800" className="fill-foreground">Right lymphatic duct</text>
        <text x="596" y="150" textAnchor="middle" fontSize="7.2" className="fill-muted-foreground">drains the RIGHT side of the body</text>
        <text x="596" y="162" textAnchor="middle" fontSize="7.2" className="fill-muted-foreground">ABOVE the diaphragm</text>
        <path d="M 596 172 L 596 200" stroke="currentColor" className="text-muted-foreground" strokeWidth="2" />
        <path d="M 596 204 l -4 -8 h 8 z" className="fill-muted-foreground" />
        <text x="604" y="192" fontSize="6.4" fontWeight="700" className="fill-muted-foreground">drains into</text>
        <text x="596" y="218" textAnchor="middle" fontSize="7" fontWeight="700" className="fill-foreground">junction of right subclavian</text>
        <text x="596" y="228" textAnchor="middle" fontSize="7" fontWeight="700" className="fill-foreground">+ internal jugular veins</text>
        <rect x="722" y="112" width="216" height="126" rx="10" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
        <text x="830" y="132" textAnchor="middle" fontSize="8.6" fontWeight="800" className="fill-brand">Thoracic duct</text>
        <text x="830" y="150" textAnchor="middle" fontSize="7.2" className="fill-muted-foreground">drains BELOW the diaphragm</text>
        <text x="830" y="162" textAnchor="middle" fontSize="7.2" className="fill-muted-foreground">+ LEFT thorax and upper limb</text>
        <path d="M 830 172 L 830 200" stroke="currentColor" className="text-muted-foreground" strokeWidth="2" />
        <path d="M 830 204 l -4 -8 h 8 z" className="fill-muted-foreground" />
        <text x="838" y="192" fontSize="6.4" fontWeight="700" className="fill-muted-foreground">drains into</text>
        <text x="830" y="218" textAnchor="middle" fontSize="7" fontWeight="700" className="fill-foreground">junction of LEFT subclavian</text>
        <text x="830" y="228" textAnchor="middle" fontSize="7" fontWeight="700" className="fill-foreground">+ internal jugular veins</text>
      </g>

      {/* right panel: highest-yield associations (full table is the note's table block) */}
      <g>
        <rect x="470" y="270" width="486" height="330" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="488" y="294" fontSize="9.6" fontWeight="800" className="fill-brand">Highest-yield cluster associations (full table in the note)</text>
        {[
          ["Left supraclavicular (Virchow node)", "left hemithorax, abdomen, pelvis — think gastric / abdominal malignancy"],
          ["Periumbilical (Sister Mary Joseph)", "abdomen, pelvis — gastric cancer"],
          ["Hilar, unilateral", "pulmonary TB · lung cancer"],
          ["Hilar, bilateral", "sarcoidosis · granulomatous disease"],
          ["Axillary", "upper limb, breast, skin above umbilicus — mastitis, breast cancer metastasis"],
          ["Epitrochlear", "hand, forearm — secondary syphilis"],
          ["Supraclavicular, right", "right hemithorax"],
          ["Popliteal (pop-lateral)", "dorsolateral foot, posterior calf — lateral foot/leg cellulitis"],
          ["Superficial inguinal", "skin below umbilicus, external genitalia, lower anal canal (below pectinate line)"],
        ].map(([k, v], i) => (
          <g key={k}>
            <text x="488" y={316 + i * 30} fontSize="7.6" fontWeight="800" className="fill-foreground">{k}</text>
            <text x="500" y={327 + i * 30} fontSize="6.9" className="fill-muted-foreground">{v}</text>
          </g>
        ))}
      </g>

      {/* chylothorax strip */}
      <g>
        <rect x="24" y="608" width="932" height="40" rx="10" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
        <text x="42" y="626" fontSize="8" fontWeight="800" className="fill-foreground">Rupture of the thoracic duct can cause chylothorax.</text>
        <text x="42" y="640" fontSize="7.2" className="fill-muted-foreground">The full 16-cluster table (cluster → area drained → associated pathology) is reproduced verbatim as the note's table block.</text>
      </g>

      {/* footer */}
      <text x="24" y="600" fontSize="7.2" className="fill-muted-foreground">Original KYP redraw of the source's lymphatic drainage body map + associations table (pdf 117 / book 95).</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E19 — Spleen and thymus: the filtration organ and the T-cell school
// (source: spleen cross-section + neonatal sail-shaped thymus CXR, pdf 118 / book 96)
// ---------------------------------------------------------------------------

export function SpleenThymusMap() {
  const w = 980;
  const h = 660;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Spleen and thymus, an original KYP schematic (not a micrograph or radiograph). Left, the spleen: LUQ, anterolateral to the left kidney, deep to ribs 9–11, commonly injured in blunt abdominal trauma; a cross-section shows the central artery wrapped by the periarteriolar lymphoid sheath (T cells), the B-cell follicle with germinal center and mantle zone, the marginal zone (macrophages and specialized B cells where APCs capture blood-borne antigens) between white pulp and red pulp, and red pulp cords and sinusoids with open and closed circulation. Splenic dysfunction (postsplenectomy, sickle cell autosplenectomy): less IgM, less complement activation, less C3b opsonization, susceptibility to encapsulated organisms — vaccinate against pneumococci, meningococci, Hib; postsplenectomy findings: Howell-Jolly bodies, target cells, thrombocytosis, lymphocytosis. Right, the thymus: anterosuperior mediastinum, site of T-cell differentiation and maturation, epithelium from the third pharyngeal pouch (endoderm) with mesodermal lymphocytes, dense immature-T-cell cortex and pale mature-T-cell medulla with Hassall corpuscles; sail-shaped on neonatal CXR, involutes by age 3; absent thymic shadow in SCID and DiGeorge; thymoma associates with myasthenia gravis, SVC syndrome, pure red cell aplasia, Good syndrome; involution = fatty replacement with age-related atrophy" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Spleen and thymus — filtration organ · T-cell school (original KYP redraw)</text>
        <rect x="726" y="24" width="206" height="18" rx="9" className="fill-brand-soft" />
        <text x="829" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">T cells = Thymus · B cells = Bone marrow</text>
      </g>

      {/* ============ SPLEEN PANEL ============ */}
      <g>
        <rect x="36" y="76" width="460" height="392" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="52" y="98" fontSize="9.6" fontWeight="800" className="fill-brand">Spleen — LUQ, ribs 9–11, blunt-trauma organ</text>

        {/* spleen body */}
        <g>
          <path d="M 96 220 C 120 160, 250 140, 340 168 C 420 194, 444 260, 420 330 C 396 396, 280 420, 196 392 C 120 366, 78 292, 96 220 Z"
            className="fill-secondary stroke-border" strokeWidth="2.6" />
          <text x="252" y="158" fontSize="7.2" fontWeight="800" className="fill-muted-foreground"> </text>
          <path d="M 100 190 L 122 210" stroke="currentColor" className="text-border" strokeWidth="1" />
          <text x="52" y="184" fontSize="7.2" fontWeight="800" className="fill-muted-foreground">Capsule + trabecula</text>

          {/* central artery + PALS */}
          <path d="M 300 176 C 292 240, 286 300, 268 372" fill="none" stroke="currentColor" className="text-emergency" strokeWidth="3.4" />
          <path d="M 300 176 C 340 200, 360 232, 364 268 C 366 300, 350 330, 322 348" fill="none" stroke="currentColor" className="text-emergency" strokeWidth="2" strokeDasharray="4 3" />
          <text x="252" y="170" fontSize="6.8" fontWeight="800" className="fill-emergency">central artery</text>
          <path d="M 296 172 L 302 178" stroke="currentColor" className="text-border" strokeWidth="0.8" />

          {/* white pulp: PALS — label above the organ with leader to the sheath */}
          <path d="M 276 220 C 252 268, 244 316, 254 364 C 276 356, 296 328, 300 284 C 302 252, 296 228, 276 220 Z"
            className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
          <path d="M 118 144 L 270 232" stroke="currentColor" className="text-border" strokeWidth="1" />
          <text x="64" y="118" fontSize="7" fontWeight="800" className="fill-foreground">Periarteriolar</text>
          <text x="64" y="128" fontSize="7" fontWeight="800" className="fill-foreground">lymphoid sheath</text>
          <text x="64" y="138" fontSize="6.6" className="fill-muted-foreground">(PALS) — T cells</text>

          {/* follicle with germinal center */}
          <circle cx="344" cy="246" r="30" className="fill-primary/15 stroke-primary" strokeWidth="1.6" />
          <circle cx="344" cy="246" r="17" className="fill-warning-soft stroke-warning" strokeWidth="1.2" />
          <text x="382" y="252" fontSize="6.8" fontWeight="800" className="fill-brand">Follicle — B cells</text>
          <text x="344" y="244" textAnchor="middle" fontSize="6.2" className="fill-foreground">germinal</text>
          <text x="344" y="252" textAnchor="middle" fontSize="6.2" className="fill-foreground">center</text>

          {/* marginal zone — dashed boundary with label outside at top, leader to boundary */}
          <path d="M 250 214 C 300 200, 356 208, 396 240 C 400 276, 384 312, 348 334 C 320 346, 286 344, 262 330"
            fill="none" stroke="currentColor" className="text-brand" strokeWidth="2" strokeDasharray="5 4" />
          <path d="M 340 212 L 350 154" stroke="currentColor" className="text-border" strokeWidth="1" />
          <text x="240" y="128" fontSize="6.8" fontWeight="800" className="fill-brand">Marginal zone — macrophages + specialized B cells;</text>
          <text x="240" y="138" fontSize="6.8" fontWeight="800" className="fill-brand">APCs capture blood-borne antigens here</text>
          <text x="240" y="148" fontSize="6.4" className="fill-muted-foreground">(between red pulp and white pulp — the dashed boundary)</text>

          {/* red pulp */}
          <path d="M 130 250 C 118 292, 128 340, 162 372 C 196 396, 236 396, 258 378 C 236 348, 216 306, 214 262 C 186 246, 152 244, 130 250 Z"
            className="fill-emergency/15 stroke-emergency" strokeWidth="1.4" />
          <text x="146" y="300" fontSize="7" fontWeight="800" className="fill-emergency">Red pulp (RBCs)</text>
          <text x="146" y="311" fontSize="6.2" className="fill-muted-foreground">cords + sinusoids ·</text>
          <text x="146" y="320" fontSize="6.2" className="fill-muted-foreground">reticular fibrous framework</text>

          {/* circulation labels */}
          <text x="76" y="408" fontSize="6.6" className="fill-muted-foreground">Open circulation (ends in cords) · Closed circulation (via sinusoids) → pulp vein → vein; artery in at the hilum</text>
        </g>

        {/* asplenia strip */}
        <g>
          <rect x="50" y="424" width="432" height="36" rx="9" className="fill-warning-soft stroke-warning" strokeWidth="1.3" />
          <text x="62" y="440" fontSize="7.2" fontWeight="800" className="fill-foreground">Splenic dysfunction → ↓IgM → ↓complement activation → ↓C3b opsonization →</text>
          <text x="62" y="452" fontSize="7.2" fontWeight="800" className="fill-foreground">encapsulated organisms: vaccinate (pneumococci &gt; meningococci &gt; Hib)</text>
        </g>
        <text x="52" y="486" fontSize="7" fontWeight="800" className="fill-foreground">Postsplenectomy blood findings: Howell-Jolly bodies (nuclear remnants) · target cells · thrombocytosis · lymphocytosis</text>
        <text x="52" y="500" fontSize="6.6" className="fill-muted-foreground">Sickle cell autosplenectomy behaves the same way — same vaccines, same risk.</text>
      </g>

      {/* ============ THYMUS PANEL ============ */}
      <g>
        <rect x="512" y="76" width="444" height="392" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="528" y="98" fontSize="9.6" fontWeight="800" className="fill-brand">Thymus — anterosuperior mediastinum</text>

        {/* bilobed thymus schematic with cortex/medulla */}
        <g>
          <path d="M 556 140 C 600 118, 668 118, 700 142 C 712 156, 712 218, 700 238 C 664 258, 596 258, 556 238 C 544 218, 544 156, 556 140 Z"
            className="fill-secondary stroke-border" strokeWidth="2.2" />
          <path d="M 628 130 C 636 168, 636 210, 628 248 C 620 210, 620 168, 628 130 Z"
            className="fill-card stroke-border" strokeWidth="1.4" />
          {/* cortex = left lobe — label above-left with leader */}
          <text x="524" y="110" fontSize="7" fontWeight="800" className="fill-foreground">Cortex — dense,</text>
          <text x="524" y="120" fontSize="7" fontWeight="800" className="fill-foreground">immature T cells</text>
          <path d="M 556 124 L 580 146" stroke="currentColor" className="text-border" strokeWidth="1" />
          {/* medulla = central pale strip — label to the right with leader */}
          <text x="722" y="170" fontSize="7" fontWeight="800" className="fill-brand">Medulla — pale,</text>
          <text x="722" y="180" fontSize="7" fontWeight="800" className="fill-brand">mature T cells</text>
          <path d="M 720 177 L 644 184" stroke="currentColor" className="text-border" strokeWidth="1" />
          {/* Hassall corpuscles */}
          {[[600, 216], [622, 226], [652, 216]].map(([x, y], i) => (
            <g key={`h${i}`}>
              <circle cx={x} cy={y} r="8" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
              <circle cx={x} cy={y} r="3.5" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
            </g>
          ))}
          <text x="588" y="248" fontSize="6.4" className="fill-muted-foreground">Hassall corpuscles (concentric epithelial reticular cells)</text>
        </g>

        {/* derivation */}
        <text x="528" y="282" fontSize="7.2" fontWeight="700" className="fill-foreground">Thymus epithelium: third pharyngeal pouch (endoderm) · thymic lymphocytes: mesoderm.</text>
        <text x="528" y="296" fontSize="7.2" className="fill-muted-foreground">Encapsulated. Site of T-cell differentiation and maturation. Neonatal thymus is sail-shaped on CXR and</text>
        <text x="528" y="307" fontSize="7.2" className="fill-muted-foreground">involutes by age 3 years.</text>

        {/* sail-shaped schematic (original, conveys the CXR finding) */}
        <g>
          <rect x="528" y="318" width="140" height="104" rx="8" className="fill-secondary stroke-border" strokeWidth="1.4" />
          <path d="M 596 344 C 620 348, 638 362, 642 386 L 640 408 L 570 408 C 566 386, 572 356, 596 344 Z"
            className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
          <text x="606" y="364" fontSize="6.6" fontWeight="800" className="fill-foreground">sail-shaped</text>
          <text x="606" y="374" fontSize="6.6" fontWeight="800" className="fill-foreground">neonatal thymus</text>
          <text x="598" y="424" fontSize="6.2" textAnchor="middle" className="fill-muted-foreground">schematic of the CXR finding (A)</text>
        </g>

        {/* clinical box */}
        <g>
          <rect x="684" y="318" width="256" height="104" rx="9" className="fill-warning-soft stroke-warning" strokeWidth="1.3" />
          <text x="698" y="336" fontSize="7.4" fontWeight="800" className="fill-foreground">Absent thymic shadow / hypoplastic thymus:</text>
          <text x="698" y="348" fontSize="7" className="fill-muted-foreground">immunodeficiencies — SCID, DiGeorge syndrome</text>
          <text x="698" y="364" fontSize="7.4" fontWeight="800" className="fill-foreground">Thymoma associations:</text>
          <text x="698" y="376" fontSize="7" className="fill-muted-foreground">myasthenia gravis · superior vena cava syndrome</text>
          <text x="698" y="386" fontSize="7" className="fill-muted-foreground">· pure red cell aplasia · Good syndrome</text>
          <text x="698" y="402" fontSize="7" fontWeight="700" className="fill-foreground">Thymus involution: fatty replacement with age-related</text>
          <text x="698" y="412" fontSize="7" fontWeight="700" className="fill-foreground">atrophy — the thymus FADES (see note)</text>
        </g>

        {/* FADES strip */}
        <g>
          <rect x="528" y="432" width="412" height="30" rx="9" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
          <text x="542" y="450" fontSize="7.6" fontWeight="800" className="fill-brand">Thymus FADES: Fatty replacement · Atrophy · Decline in naïve T cells (↓IL-7, thymopoietin)</text>
          <text x="542" y="459" fontSize="6.8" fontWeight="700" className="fill-brand">· Elderly immunosenescence (↓ vaccine response) · Size/cellularity/function ↓ — accelerated after puberty</text>
        </g>
        <text x="528" y="486" fontSize="6.8" className="fill-muted-foreground">Cortisol shrinks the thymus (stress involution) — partly reversible when cortisol falls.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="490" width="932" height="44" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="42" y="508" fontSize="7.8" fontWeight="700" className="fill-foreground">Read the two organs together: the spleen filters BLOOD (encapsulated bacteria die without its IgM–complement–C3b axis), the thymus builds T cells (and disappears from the CXR when it fails).</text>
        <text x="42" y="522" fontSize="7.2" className="fill-muted-foreground">Original KYP redraw of the source's spleen cross-section and neonatal thymus CXR (pdf 118 / book 96) — the radiograph is conveyed as a schematic, never reproduced.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E20 — Innate vs adaptive: the two arms (source: comparison table,
// pdf 119 / book 97 — no printed artwork; pdfimages clean. This is an
// original KYP teaching visual, not a figure replacement.)
// ---------------------------------------------------------------------------

export function InnateVsAdaptiveArms() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Innate vs adaptive immunity, an original KYP diagram: the innate arm (left) is germline-encoded, nonspecific, active within minutes to hours with no memory — neutrophils, macrophages, monocytes, dendritic cells, NK cells, complement, epithelial barriers, secreted enzymes (lysozyme, CRP, defensins), and Toll-like receptors recognizing PAMPs and DAMPs to activate NF-κB and release pro-inflammatory cytokines. The adaptive arm (right) is highly specific through V(D)J recombination, develops over long periods, and mounts faster, more robust memory responses — T cells, B cells, circulating antibodies, immunoglobulins, with immunosenescence late in life. A response-vs-time strip at the bottom contrasts the immediate innate curve with the lagging primary and the brisk secondary adaptive response" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Innate vs adaptive immunity — the two arms (original KYP diagram)</text>
        <rect x="726" y="24" width="206" height="18" rx="9" className="fill-brand-soft" />
        <text x="829" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">fast &amp; general vs slow &amp; specific</text>
      </g>

      {/* INNATE panel */}
      <g>
        <rect x="36" y="76" width="444" height="330" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="36" y="76" width="444" height="34" rx="12" className="fill-secondary stroke-border" strokeWidth="1.4" />
        <text x="258" y="98" textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-foreground">INNATE — first line</text>
        {[
          ["Components", "Neutrophils, macrophages, monocytes, dendritic cells, NK cells (lymphoid origin), complement, physical epithelial barriers, secreted enzymes"],
          ["Mechanism", "Germline encoded — no gene rearrangement"],
          ["Response", "Nonspecific · occurs rapidly (minutes to hours) · no memory response"],
          ["Secreted proteins", "Lysozyme, complement, C-reactive protein (CRP), defensins, cytokines"],
          ["Recognition", "Toll-like receptors (TLRs) read PAMPs (LPS, flagellin, viral nucleic acids) and DAMPs (mitochondrial DNA, histones, heat shock proteins) → NF-κB → pro-inflammatory cytokines"],
        ].map(([k, v], i) => (
          <g key={k}>
            <text x="54" y={136 + i * 54} fontSize="8" fontWeight="800" className="fill-brand">{k}</text>
            {v.split(" · ").length > 1 && i === 2 ? (
              v.split(" · ").map((part, j) => (
                <text key={j} x="54" y={148 + i * 54 + j * 11} fontSize="7" className="fill-muted-foreground">· {part}</text>
              ))
            ) : (
              v.match(/.{1,62}(\s|$)/g)!.slice(0, 3).map((line, j) => (
                <text key={j} x="54" y={148 + i * 54 + j * 11} fontSize="7" className="fill-muted-foreground">{line.trim()}</text>
              ))
            )}
          </g>
        ))}
      </g>

      {/* ADAPTIVE panel */}
      <g>
        <rect x="500" y="76" width="444" height="330" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="500" y="76" width="444" height="34" rx="12" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
        <text x="722" y="98" textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-foreground">ADAPTIVE — the specialist</text>
        {[
          ["Components", "T cells, B cells, circulating antibodies"],
          ["Mechanism", "Variation through V(D)J recombination during lymphocyte development"],
          ["Response", "Highly specific, refined over time · develops over long periods · memory response is faster and more robust"],
          ["Secreted proteins", "Immunoglobulins, cytokines"],
          ["Recognition", "Memory cells (activated B and T cells): subsequent exposure to a previously encountered antigen → stronger, quicker response. Immunosenescence: adaptive responses decrease with age"],
        ].map(([k, v], i) => (
          <g key={k}>
            <text x="518" y={136 + i * 54} fontSize="8" fontWeight="800" className="fill-brand">{k}</text>
            {i === 2 ? (
              v.split(" · ").map((part, j) => (
                <text key={j} x="518" y={148 + i * 54 + j * 11} fontSize="7" className="fill-muted-foreground">· {part}</text>
              ))
            ) : (
              v.match(/.{1,62}(\s|$)/g)!.slice(0, 3).map((line, j) => (
                <text key={j} x="518" y={148 + i * 54 + j * 11} fontSize="7" className="fill-muted-foreground">{line.trim()}</text>
              ))
            )}
          </g>
        ))}
      </g>

      {/* response vs time strip */}
      <g>
        <rect x="36" y="422" width="908" height="94" rx="12" className="fill-secondary stroke-border" strokeWidth="1.2" />
        <text x="54" y="444" fontSize="8.6" fontWeight="800" className="fill-foreground">Response magnitude vs time</text>
        <line x1="54" y1="502" x2="920" y2="502" stroke="currentColor" className="text-border" strokeWidth="1.4" />
        <line x1="54" y1="502" x2="54" y2="448" stroke="currentColor" className="text-border" strokeWidth="1.4" />
        <text x="58" y="458" fontSize="6.4" className="fill-muted-foreground">magnitude</text>
        <text x="900" y="512" fontSize="6.4" className="fill-muted-foreground">time →</text>
        {/* innate: immediate, flat (no memory) */}
        <path d="M 54 478 L 380 478 L 920 478" fill="none" stroke="currentColor" className="text-emergency" strokeWidth="2.4" />
        <text x="80" y="466" fontSize="6.8" fontWeight="700" className="fill-emergency">innate: minutes–hours, same every time (no memory)</text>
        {/* adaptive primary: lag then rise */}
        <path d="M 54 502 C 200 502, 260 500, 300 496 C 380 486, 430 470, 470 462" fill="none" stroke="currentColor" className="text-brand" strokeWidth="2.2" strokeDasharray="6 3" />
        <path d="M 405 488 L 400 478" stroke="currentColor" className="text-border" strokeWidth="0.9" />
        <text x="360" y="494" fontSize="6.8" fontWeight="700" className="fill-brand">primary: develops over long periods</text>
        {/* adaptive secondary: brisk and higher */}
        <path d="M 470 462 C 500 480, 520 498, 545 502 C 560 500, 575 492, 590 476 C 610 456, 640 448, 920 444" fill="none" stroke="currentColor" className="text-brand" strokeWidth="2.6" />
        <text x="640" y="440" fontSize="6.8" fontWeight="700" className="fill-brand">secondary (memory): faster and more robust</text>
      </g>

      {/* footer */}
      <text x="24" y="540" fontSize="7.2" className="fill-muted-foreground">Original KYP diagram (the source page carries a comparison table only — pdf 119 / book 97; no textbook artwork exists to redraw). The verbatim 5-row table is the note's table block.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E21 — MHC I vs MHC II: the two display scaffolds
// (source: two molecular structure diagrams + 7-row table, pdf 120 / book 98)
// ---------------------------------------------------------------------------

export function MhcStructureComparison() {
  const w = 980;
  const h = 620;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="MHC I vs MHC II structure, an original KYP redraw of the source's two molecular diagrams. MHC I (left): one long chain with three extracellular domains (alpha 1, alpha 2, alpha 3) plus one short chain, beta-2 microglobulin; the alpha 1 and alpha 2 domains form the endogenous antigen-binding groove, which displays viral and cytosolic peptides loaded in the RER after TAP delivery; expressed on all nucleated cells, APCs, and platelets (except RBCs); binds TCR and CD8 on cytotoxic T cells. MHC II (right): two equal-length chains (alpha 1-alpha 2 and beta 1-beta 2); the alpha 1 and beta 1 domains form the exogenous antigen-binding groove, loaded after invariant-chain release in a lysosome; expressed on APCs; binds TCR and CD4 on helper T cells. The mnemonic bar: CD8 times MHC 1 equals 8, and CD4 times MHC 2 equals 8" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">MHC I vs MHC II — the two antigen-display scaffolds (original KYP redraw)</text>
        <rect x="734" y="24" width="198" height="18" rx="9" className="fill-brand-soft" />
        <text x="833" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">CD8 × MHC 1 = 8 · CD4 × MHC 2 = 8</text>
      </g>

      {/* ===== MHC I panel ===== */}
      <g>
        <rect x="36" y="76" width="444" height="420" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="52" y="100" fontSize="10" fontWeight="800" className="fill-foreground">MHC I — 1 long chain (3 α) + 1 short chain</text>

        {/* membrane + cytoplasm bands */}
        <rect x="76" y="404" width="360" height="12" rx="3" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x="452" y="414" fontSize="6.6" className="fill-muted-foreground">cell membrane</text>
        <rect x="76" y="416" width="360" height="18" rx="3" className="fill-secondary/60" />
        <text x="452" y="429" fontSize="6.6" className="fill-muted-foreground">cytoplasm</text>

        {/* long chain: α1 α2 (groove) + α3 + transmembrane tail */}
        <g>
          {/* binding groove: α1 + α2 domains with peptide */}
          <rect x="136" y="164" width="60" height="76" rx="6" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
          <text x="166" y="206" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">α1</text>
          <rect x="200" y="164" width="60" height="76" rx="6" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
          <text x="230" y="206" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">α2</text>
          {/* endogenous peptide in groove */}
          <rect x="146" y="146" width="140" height="14" rx="7" className="fill-emergency/80" />
          <text x="216" y="156" textAnchor="middle" fontSize="6.6" fontWeight="800" className="fill-background">endogenous antigen (viral, cytosolic)</text>
          {/* α3 domain */}
          <rect x="168" y="244" width="60" height="70" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
          <text x="198" y="283" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">α3</text>
          {/* transmembrane tail */}
          <path d="M 198 314 L 198 404" stroke="currentColor" className="text-border" strokeWidth="5" />
          <text x="120" y="340" fontSize="7" fontWeight="800" className="fill-muted-foreground">long chain (α)</text>
          <path d="M 176 334 L 192 340" stroke="currentColor" className="text-border" strokeWidth="0.9" />
        </g>

        {/* short chain: β2-microglobulin */}
        <g>
          <rect x="248" y="244" width="60" height="70" rx="6" className="fill-primary/15 stroke-primary" strokeWidth="1.4" />
          <text x="278" y="272" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-foreground">β2-</text>
          <text x="278" y="282" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-foreground">micro-</text>
          <text x="278" y="292" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-foreground">globulin</text>
          <text x="322" y="262" fontSize="6.8" fontWeight="700" className="fill-muted-foreground">short chain —</text>
          <text x="322" y="272" fontSize="6.8" fontWeight="700" className="fill-muted-foreground">associated protein</text>
        </g>

        {/* CD8 binding */}
        <g>
          <path d="M 136 200 C 96 200, 78 212, 72 232" fill="none" stroke="currentColor" className="text-emergency" strokeWidth="2" />
          <circle cx="66" cy="240" r="17" className="fill-emergency/15 stroke-emergency" strokeWidth="1.4" />
          <text x="66" y="243" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-emergency">CD8</text>
          <text x="40" y="272" fontSize="6.6" className="fill-muted-foreground">cytotoxic</text>
          <text x="40" y="281" fontSize="6.6" className="fill-muted-foreground">T cell</text>
        </g>

        {/* RER/TAP annotation */}
        <g>
          <rect x="330" y="318" width="132" height="78" rx="9" className="fill-card stroke-border" strokeWidth="1.2" />
          <text x="340" y="336" fontSize="7.2" fontWeight="800" className="fill-foreground">Antigen loading</text>
          <text x="340" y="348" fontSize="6.6" className="fill-muted-foreground">Peptides loaded onto</text>
          <text x="340" y="357" fontSize="6.6" className="fill-muted-foreground">MHC I in the RER after</text>
          <text x="340" y="366" fontSize="6.6" className="fill-muted-foreground">delivery via TAP</text>
          <text x="340" y="379" fontSize="6.4" className="fill-muted-foreground">(transporter associated</text>
          <text x="340" y="388" fontSize="6.4" className="fill-muted-foreground">with antigen processing)</text>
        </g>

        {/* expression strip */}
        <rect x="52" y="448" width="412" height="34" rx="9" className="fill-secondary stroke-border" strokeWidth="1.2" />
        <text x="64" y="462" fontSize="7.2" fontWeight="800" className="fill-foreground">Expression: all nucleated cells, APCs, platelets (except RBCs)</text>
        <text x="64" y="474" fontSize="6.8" className="fill-muted-foreground">Function: endogenous antigens (viral, cytosolic proteins) → CD8+ cytotoxic T cells</text>
      </g>

      {/* ===== MHC II panel ===== */}
      <g>
        <rect x="500" y="76" width="444" height="420" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="516" y="100" fontSize="10" fontWeight="800" className="fill-foreground">MHC II — 2 equal-length chains (2 α, 2 β)</text>

        {/* membrane + cytoplasm bands */}
        <rect x="540" y="404" width="360" height="12" rx="3" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x="916" y="414" fontSize="6.6" className="fill-muted-foreground">cell membrane</text>
        <rect x="540" y="416" width="360" height="18" rx="3" className="fill-secondary/60" />
        <text x="916" y="429" fontSize="6.6" className="fill-muted-foreground">cytoplasm</text>

        {/* equal-length chains: α1 α2 / β1 β2 */}
        <g>
          {/* α chain: α1 (groove) + α2 */}
          <rect x="600" y="164" width="60" height="76" rx="6" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
          <text x="630" y="206" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">α1</text>
          <rect x="600" y="244" width="60" height="70" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
          <text x="630" y="283" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">α2</text>
          <path d="M 630 314 L 630 404" stroke="currentColor" className="text-border" strokeWidth="5" />
          <text x="580" y="340" fontSize="7" fontWeight="800" className="fill-muted-foreground">α chain</text>
          {/* β chain: β1 (groove) + β2 */}
          <rect x="668" y="164" width="60" height="76" rx="6" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
          <text x="698" y="206" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">β1</text>
          <rect x="668" y="244" width="60" height="70" rx="6" className="fill-primary/15 stroke-primary" strokeWidth="1.4" />
          <text x="698" y="283" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">β2</text>
          <path d="M 698 314 L 698 404" stroke="currentColor" className="text-border" strokeWidth="5" />
          <text x="722" y="340" fontSize="7" fontWeight="800" className="fill-muted-foreground">β chain</text>
          {/* exogenous peptide in groove */}
          <rect x="610" y="146" width="140" height="14" rx="7" className="fill-emergency/80" />
          <text x="680" y="156" textAnchor="middle" fontSize="6.6" fontWeight="800" className="fill-background">exogenous antigen (bacterial)</text>
        </g>

        {/* CD4 binding */}
        <g>
          <path d="M 600 200 C 560 200, 542 212, 536 232" fill="none" stroke="currentColor" className="text-emergency" strokeWidth="2" />
          <circle cx="530" cy="240" r="17" className="fill-emergency/15 stroke-emergency" strokeWidth="1.4" />
          <text x="530" y="243" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-emergency">CD4</text>
          <text x="504" y="272" fontSize="6.6" className="fill-muted-foreground">helper</text>
          <text x="504" y="281" fontSize="6.6" className="fill-muted-foreground">T cell</text>
        </g>

        {/* lysosome/invariant chain annotation */}
        <g>
          <rect x="770" y="318" width="152" height="78" rx="9" className="fill-card stroke-border" strokeWidth="1.2" />
          <text x="780" y="336" fontSize="7.2" fontWeight="800" className="fill-foreground">Antigen loading</text>
          <text x="780" y="348" fontSize="6.6" className="fill-muted-foreground">Loaded following release of</text>
          <text x="780" y="357" fontSize="6.6" className="fill-muted-foreground">the invariant chain in a</text>
          <text x="780" y="366" fontSize="6.6" className="fill-muted-foreground">lysosome</text>
          <text x="780" y="379" fontSize="6.4" className="fill-muted-foreground">(associated protein:</text>
          <text x="780" y="388" fontSize="6.4" className="fill-muted-foreground">invariant chain)</text>
        </g>

        {/* expression strip */}
        <rect x="516" y="448" width="412" height="34" rx="9" className="fill-secondary stroke-border" strokeWidth="1.2" />
        <text x="528" y="462" fontSize="7.2" fontWeight="800" className="fill-foreground">Expression: APCs (the professional presenters)</text>
        <text x="528" y="474" fontSize="6.8" className="fill-muted-foreground">Function: exogenous antigens (bacterial proteins) → CD4+ helper T cells</text>
      </g>

      {/* loci strip */}
      <g>
        <rect x="36" y="510" width="908" height="42" rx="10" className="fill-warning-soft stroke-warning" strokeWidth="1.3" />
        <text x="52" y="528" fontSize="7.8" fontWeight="800" className="fill-foreground">LOCI: MHC I = HLA-A, HLA-B, HLA-C (loci have 1 letter) · MHC II = HLA-DP, HLA-DQ, HLA-DR (loci have 2 letters)</text>
        <text x="52" y="541" fontSize="7.2" className="fill-muted-foreground">MHC molecules are encoded by HLA genes and present antigen fragments to T cells, binding T-cell receptors (TCRs).</text>
      </g>

      {/* footer */}
      <text x="24" y="576" fontSize="7.2" className="fill-muted-foreground">Original KYP redraw of the source's MHC I and MHC II structure diagrams (pdf 120 / book 98); the verbatim 7-row comparison table is the note's table block.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E23 — NK cell kill model: activating signal + missing self + ADCC
// (source: "Major functions of natural killer cells", pdf 121 / book 99)
// ---------------------------------------------------------------------------

export function NkKillModel() {
  const w = 980;
  const h = 648;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The NK cell kill decision, an original KYP diagram. A target cell (virally infected or tumor, with surface MHC I downregulated) presents a stress ligand — the nonspecific activation signal — and no MHC I inhibitory signal. The NK cell integrates its activating receptor (go) and inhibitory receptor (brake off, because MHC I is missing), then kills with perforin and granzymes, inducing apoptosis. Side rails show activity enhanced by IL-2, IL-12, IFN-alpha, and IFN-beta, and the NK cell's own IFN-gamma output activating macrophages. A bottom strip shows the ADCC route: IgG antibody coats a target cell, CD16 on the NK cell binds the Fc region of the bound IgG, activating the NK cell to kill the antibody-coated target" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">The NK kill decision — two inputs, one granule payload (original KYP diagram)</text>
        <rect x="770" y="24" width="162" height="18" rx="9" className="fill-brand-soft" />
        <text x="851" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">missing self → kill</text>
      </g>

      {/* ===== main scene: target cell (left) vs NK cell (right) ===== */}
      {/* TARGET CELL panel */}
      <g>
        <rect x="36" y="76" width="264" height="296" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="36" y="76" width="264" height="34" rx="12" className="fill-secondary stroke-border" strokeWidth="1.4" />
        <text x="168" y="98" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">TARGET CELL</text>
        <text x="168" y="126" textAnchor="middle" fontSize="7.4" fontWeight="700" className="fill-muted-foreground">virally infected or tumor cell</text>

        {/* cell body */}
        <rect x="64" y="140" width="208" height="150" rx="16" className="fill-secondary/50 stroke-border" strokeWidth="1.3" />
        {/* stress ligands on surface (right edge, facing NK) */}
        <circle cx="272" cy="168" r="6" className="fill-emergency stroke-emergency" strokeWidth="1" />
        <circle cx="272" cy="210" r="6" className="fill-emergency stroke-emergency" strokeWidth="1" />
        {/* MHC I: one, faded (downregulated) */}
        <rect x="262" y="250" width="20" height="14" rx="3" className="fill-warning-soft/40 stroke-warning/40" strokeWidth="1" />
        <line x1="256" y1="244" x2="288" y2="270" stroke="currentColor" className="text-warning" strokeWidth="1.2" />
        <line x1="288" y1="244" x2="256" y2="270" stroke="currentColor" className="text-warning" strokeWidth="1.2" />

        {/* labels */}
        <text x="252" y="160" textAnchor="end" fontSize="6.8" fontWeight="700" className="fill-emergency">stress ligand —</text>
        <text x="252" y="169" textAnchor="end" fontSize="6.8" fontWeight="700" className="fill-emergency">nonspecific</text>
        <text x="252" y="178" textAnchor="end" fontSize="6.8" fontWeight="700" className="fill-emergency">activation signal</text>
        <text x="252" y="244" textAnchor="end" fontSize="6.8" fontWeight="700" className="fill-warning">MHC I ↓ (escape</text>
        <text x="252" y="253" textAnchor="end" fontSize="6.8" fontWeight="700" className="fill-warning">from CD8+ T cells)</text>

        {/* inside text */}
        <text x="168" y="182" textAnchor="middle" fontSize="7" className="fill-muted-foreground">viral replication,</text>
        <text x="168" y="192" textAnchor="middle" fontSize="7" className="fill-muted-foreground">tumor stress —</text>
        <text x="168" y="202" textAnchor="middle" fontSize="7" className="fill-muted-foreground">fewer MHC I on surface</text>

        {/* fate */}
        <rect x="56" y="304" width="224" height="52" rx="9" className="fill-emergency/10 stroke-emergency" strokeWidth="1.2" />
        <text x="168" y="322" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-emergency">→ apoptosis</text>
        <text x="168" y="334" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">perforin pores + granzymes enter</text>
        <text x="168" y="344" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">the virally infected / tumor cell</text>
      </g>

      {/* receptor arrows between cells */}
      <g>
        {/* activating receptor arrow: stress ligand → NK (label above, arrow below) */}
        <text x="336" y="157" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-emergency">activating</text>
        <text x="336" y="166" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-emergency">signal ✓</text>
        <path d="M 280 178 C 310 180, 340 182, 378 183" fill="none" stroke="currentColor" className="text-emergency" strokeWidth="2" />
        <path d="M 376 178 L 388 183 L 375 188 Z" className="fill-emergency" />
        {/* inhibitory receptor: no MHC I → dashed broken */}
        <path d="M 302 254 L 370 254" stroke="currentColor" className="text-warning" strokeWidth="1.6" strokeDasharray="4 3" />
        <line x1="330" y1="248" x2="342" y2="260" stroke="currentColor" className="text-warning" strokeWidth="1.2" />
        <line x1="342" y1="248" x2="330" y2="260" stroke="currentColor" className="text-warning" strokeWidth="1.2" />
        <text x="336" y="243" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-warning">no ligand</text>
        <text x="336" y="270" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-warning">brake OFF</text>
        <text x="336" y="280" textAnchor="middle" fontSize="6" fontWeight="700" className="fill-muted-foreground">(missing self)</text>
      </g>

      {/* NK CELL panel */}
      <g>
        <rect x="372" y="76" width="264" height="296" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="372" y="76" width="264" height="34" rx="12" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="504" y="98" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">NK CELL</text>
        <text x="504" y="126" textAnchor="middle" fontSize="7.4" fontWeight="700" className="fill-muted-foreground">lymphocyte member of the INNATE immune system</text>

        {/* cell body */}
        <rect x="400" y="140" width="208" height="150" rx="16" className="fill-brand-soft/30 stroke-border" strokeWidth="1.3" />
        {/* activating receptor (left edge) */}
        <path d="M 392 176 L 410 176 L 402 168 L 410 184 L 392 184 Z" className="fill-emergency/70 stroke-emergency" strokeWidth="1" />
        <text x="424" y="172" fontSize="6.8" fontWeight="700" className="fill-emergency">activating receptor</text>
        <text x="424" y="181" fontSize="6.8" fontWeight="700" className="fill-emergency">reads the stress signal</text>
        {/* inhibitory receptor (left edge, blocked) */}
        <path d="M 392 252 L 410 246 L 410 260 Z" className="fill-warning/60 stroke-warning" strokeWidth="1" />
        <line x1="392" y1="240" x2="408" y2="266" stroke="currentColor" className="text-warning" strokeWidth="1.4" />
        <text x="424" y="248" fontSize="6.8" fontWeight="700" className="fill-warning">inhibitory receptor</text>
        <text x="424" y="257" fontSize="6.8" fontWeight="700" className="fill-warning">binds MHC I if present</text>
        <text x="424" y="266" fontSize="6.8" fontWeight="700" className="fill-warning">— here: nothing to bind</text>

        {/* granules */}
        <circle cx="448" cy="212" r="11" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="448" y="216" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">gran.</text>
        <circle cx="482" cy="216" r="11" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="482" y="220" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">gran.</text>
        <text x="520" y="208" fontSize="6.6" className="fill-muted-foreground">perforin +</text>
        <text x="520" y="217" fontSize="6.6" className="fill-muted-foreground">granzymes</text>
        <text x="520" y="226" fontSize="6.6" className="fill-muted-foreground">(cytotoxic</text>
        <text x="520" y="235" fontSize="6.6" className="fill-muted-foreground">granules)</text>

        {/* decision strip */}
        <rect x="392" y="304" width="224" height="52" rx="9" className="fill-secondary stroke-border" strokeWidth="1.2" />
        <text x="504" y="322" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-foreground">KILL decision: GO + no brake</text>
        <text x="504" y="334" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">induced by an activation signal</text>
        <text x="504" y="344" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">and/or absent MHC I inhibitory signal</text>
      </g>

      {/* right rail: amplifiers + output */}
      <g>
        <rect x="660" y="76" width="284" height="140" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="676" y="100" fontSize="8.4" fontWeight="800" className="fill-foreground">Activity enhanced by</text>
        {[
          ["IL-2", "growth/activation signal"],
          ["IL-12", "from APCs — arms NK response"],
          ["IFN-α, IFN-β", "antival alarm cytokines"],
        ].map(([k, v], i) => (
          <g key={k}>
            <rect x="676" y={112 + i * 32} width="252" height="26" rx="8" className="fill-brand-soft" />
            <text x="688" y={129 + i * 32} fontSize="7.4" fontWeight="800" className="fill-brand">↑ {k}</text>
            <text x="920" y={129 + i * 32} textAnchor="end" fontSize="6.6" className="fill-muted-foreground">{v}</text>
          </g>
        ))}
        <rect x="660" y="232" width="284" height="140" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="676" y="256" fontSize="8.4" fontWeight="800" className="fill-foreground">NK cells produce</text>
        <rect x="676" y="268" width="252" height="52" rx="8" className="fill-warning-soft" />
        <text x="688" y="288" fontSize="7.8" fontWeight="800" className="fill-foreground">IFN-γ → macrophage activation</text>
        <text x="688" y="300" fontSize="6.6" className="fill-muted-foreground">the innate bridge: killed-cell cleanup,</text>
        <text x="688" y="309" fontSize="6.6" className="fill-muted-foreground">intracellular microbe killing</text>
        <text x="676" y="340" fontSize="6.8" className="fill-muted-foreground">Same payload as CD8+ T cells —</text>
        <text x="676" y="350" fontSize="6.8" className="fill-muted-foreground">opposite MHC I logic: CD8+ requires</text>
        <text x="676" y="360" fontSize="6.8" className="fill-muted-foreground">MHC I; NK kills when it is missing.</text>
      </g>

      {/* ===== ADCC strip ===== */}
      <g>
        <rect x="36" y="392" width="908" height="196" rx="12" className="fill-secondary stroke-border" strokeWidth="1.2" />
        <text x="54" y="416" fontSize="8.6" fontWeight="800" className="fill-foreground">ADCC — the antibody-guided route (antibody-dependent cell-mediated cytotoxicity)</text>

        {/* step 1: antibody-coated target */}
        <rect x="60" y="432" width="240" height="132" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="180" y="452" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-foreground">1 · IgG coats the target</text>
        <rect x="100" y="466" width="160" height="66" rx="10" className="fill-secondary/50 stroke-border" strokeWidth="1.1" />
        {/* IgG Y shapes, Fc up */}
        <g className="stroke-primary" strokeWidth="1.6" fill="none">
          <path d="M 130 486 L 130 472 L 122 460 M 130 472 L 138 460" />
          <path d="M 180 486 L 180 472 L 172 460 M 180 472 L 188 460" />
          <path d="M 230 486 L 230 472 L 222 460 M 230 472 L 238 460" />
        </g>
        <text x="180" y="500" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">antigen-specific IgG bound to</text>
        <text x="180" y="509" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">surface antigen — Fc regions</text>
        <text x="180" y="518" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">protrude</text>
        <text x="180" y="556" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">(specificity supplied by antibody)</text>

        {/* arrow 1→2 */}
        <path d="M 306 498 L 340 498" stroke="currentColor" className="text-border" strokeWidth="2" />
        <path d="M 340 492 L 352 498 L 340 504 Z" className="fill-border" />

        {/* step 2: CD16 binds Fc */}
        <rect x="360" y="432" width="252" height="132" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="486" y="452" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-foreground">2 · CD16 binds the Fc region</text>
        <rect x="396" y="466" width="120" height="66" rx="10" className="fill-brand-soft/30 stroke-border" strokeWidth="1.1" />
        <text x="456" y="492" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-brand">CD16</text>
        <text x="456" y="503" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">(Fc receptor, on the</text>
        <text x="456" y="512" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">NK cell surface)</text>
        <g>
          <path d="M 516 486 L 516 472 L 508 460 M 516 472 L 524 460" className="stroke-primary" strokeWidth="1.6" fill="none" />
          <path d="M 528 484 C 522 490, 514 490, 510 486" stroke="currentColor" className="text-brand" strokeWidth="1.6" fill="none" />
          <text x="530" y="502" fontSize="6.4" fontWeight="700" className="fill-brand">binds the Fc</text>
          <text x="530" y="511" fontSize="6.4" fontWeight="700" className="fill-brand">region of the</text>
          <text x="530" y="520" fontSize="6.4" fontWeight="700" className="fill-brand">bound IgG</text>
        </g>
        <text x="486" y="556" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">Fc binding = an NK activating signal</text>

        {/* arrow 2→3 */}
        <path d="M 618 498 L 652 498" stroke="currentColor" className="text-border" strokeWidth="2" />
        <path d="M 652 492 L 664 498 L 652 504 Z" className="fill-border" />

        {/* step 3: kill */}
        <rect x="672" y="432" width="252" height="132" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="798" y="452" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-foreground">3 · NK kills the coated target</text>
        <rect x="708" y="466" width="180" height="66" rx="10" className="fill-emergency/10 stroke-emergency" strokeWidth="1.1" />
        <text x="798" y="488" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-emergency">perforin + granzymes</text>
        <text x="798" y="500" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">same cytotoxic granules as the</text>
        <text x="798" y="509" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">missing-self pathway → apoptosis</text>
        <text x="798" y="556" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">innate killer + adaptive guidance</text>
      </g>

      {/* footer */}
      <text x="24" y="618" fontSize="7.2" className="fill-muted-foreground">Original KYP diagram of the source sentences (pdf 121 / book 99 — the page carries prose only; no textbook artwork exists). Key: stress ligand + ↓MHC I → activating receptor GO, inhibitory receptor OFF → kill.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E23 — B vs T division of labor: humoral vs cell-mediated functions
// (source: "Major functions of B and T cells", pdf 121 / book 99)
// ---------------------------------------------------------------------------

export function BtDivisionOfLabor() {
  const w = 980;
  const h = 620;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="B and T cells, the division of labor — an original KYP diagram. Left panel, B cells, humoral immunity: recognize and present antigen with somatic hypermutation optimizing antigen specificity; produce antibody by differentiating into plasma cells that secrete specific immunoglobulins; maintain immunologic memory with persistent memory B cells that accelerate future response to antigen — the RPM mnemonic: Recognize, Produce, Memory. Right panel, T cells, cell-mediated immunity: CD4+ helper T cells help B cells make antibodies and produce cytokines to recruit phagocytes and activate other leukocytes; CD8+ cytotoxic T cells directly kill virus-infected and tumor cells via perforin and granzymes, similar to NK cells; and T cells mediate type IV hypersensitivity reactions and acute and chronic cellular organ rejection. A CD4-help arrow crosses from the T panel to the B panel. Bottom strip: the exam sorter — antibodies in serum means humoral B-cell function; positive delayed-type hypersensitivity skin test and cellular organ rejection mean T-cell function" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">B and T cells — the division of labor (original KYP diagram)</text>
        <rect x="742" y="24" width="190" height="18" rx="9" className="fill-brand-soft" />
        <text x="837" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">humoral vs cell-mediated</text>
      </g>

      {/* ===== B CELL panel ===== */}
      <g>
        <rect x="36" y="76" width="444" height="336" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="36" y="76" width="444" height="34" rx="12" className="fill-secondary stroke-border" strokeWidth="1.4" />
        <text x="258" y="98" textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-foreground">B CELLS — humoral immunity</text>
        {[
          ["R — Recognize", "Recognize and present antigen; undergo somatic hypermutation to optimize antigen specificity.", "surface Ig receptor → APC role; mutations tune the binding site"],
          ["P — Produce", "Produce antibody — differentiate into plasma cells to secrete specific immunoglobulins.", "the antibody factory: IgM, IgG, IgA, IgE, IgD"],
          ["M — Maintain memory", "Maintain immunologic memory — memory B cells persist and accelerate future response to antigen.", "the reason vaccines work: faster, stronger on re-exposure"],
        ].map(([k, v, sub], i) => (
          <g key={k as string}>
            <text x="54" y={138 + i * 78} fontSize="8.2" fontWeight="800" className="fill-brand">{k}</text>
            {(v as string).match(/.{1,58}(\s|$)/g)!.slice(0, 2).map((line, j) => (
              <text key={j} x="54" y={150 + i * 78 + j * 11} fontSize="7" className="fill-muted-foreground">{line.trim()}</text>
            ))}
            <text x="54" y={150 + i * 78 + 22} fontSize="6.4" className="fill-muted-foreground/80">{sub}</text>
          </g>
        ))}
        <rect x="54" y="330" width="408" height="64" rx="9" className="fill-brand-soft" />
        <text x="258" y="352" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">B cells run on RPM: Recognize → Produce → Remember</text>
        <text x="258" y="366" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">somatic hypermutation refines the receptor; plasma cells secrete;</text>
        <text x="258" y="376" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">memory B cells persist and accelerate the future response to antigen</text>
      </g>

      {/* ===== T CELL panel ===== */}
      <g>
        <rect x="500" y="76" width="444" height="336" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="500" y="76" width="444" height="34" rx="12" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
        <text x="722" y="98" textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-foreground">T CELLS — cell-mediated immunity</text>
        {[
          ["CD4+ — the helper", "Help B cells make antibodies; produce cytokines to recruit phagocytes and activate other leukocytes.", "the coordinator: cytokines are its tools"],
          ["CD8+ — the killer", "Directly kill virus-infected and tumor cells via perforin and granzymes (similar to NK cells).", "MHC I-restricted — requires antigen display"],
          ["T-cell contexts", "Type IV hypersensitivity reaction. Acute and chronic cellular organ rejection.", "both are cell-mediated (T-cell) phenomena"],
        ].map(([k, v, sub], i) => (
          <g key={k as string}>
            <text x="518" y={138 + i * 78} fontSize="8.2" fontWeight="800" className="fill-warning">{k}</text>
            {(v as string).match(/.{1,58}(\s|$)/g)!.slice(0, 2).map((line, j) => (
              <text key={j} x="518" y={150 + i * 78 + j * 11} fontSize="7" className="fill-muted-foreground">{line.trim()}</text>
            ))}
            <text x="518" y={150 + i * 78 + 22} fontSize="6.4" className="fill-muted-foreground/80">{sub}</text>
          </g>
        ))}
        <rect x="518" y="330" width="408" height="64" rx="9" className="fill-warning-soft" />
        <text x="722" y="352" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">CD4+ helps (antibodies, phagocyte recruitment) · CD8+ kills (perforin/granzymes)</text>
        <text x="722" y="366" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">the kill payload matches NK cells — but CD8+ requires MHC I presentation,</text>
        <text x="722" y="376" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">while NK cells kill preferentially when MHC I is absent (missing self)</text>
      </g>

      {/* CD4 → B help arrow (elbow through the empty inter-row band, y 174-206) */}
      <g>
        <path d="M 640 177 L 640 190 L 492 190" fill="none" stroke="currentColor" className="text-warning" strokeWidth="1.8" strokeDasharray="6 3" />
        <path d="M 494 185 L 482 190 L 494 195 Z" className="fill-warning" />
        <text x="560" y="182" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-warning">CD4+ helps B cells make antibodies</text>
      </g>

      {/* ===== exam sorter strip ===== */}
      <g>
        <rect x="36" y="428" width="908" height="140" rx="12" className="fill-secondary stroke-border" strokeWidth="1.2" />
        <text x="54" y="452" fontSize="8.6" fontWeight="800" className="fill-foreground">The exam sorter — which arm answered the question?</text>
        {[
          [60, "Antibodies in serum · opsonization of encapsulated bacteria · vaccine antibody response", "B cells (humoral)", "fill-brand-soft", "fill-brand"],
          [360, "Positive PPD / contact dermatitis (type IV) · acute or chronic cellular organ rejection", "T cells (cell-mediated)", "fill-warning-soft", "fill-foreground"],
          [660, "Perforin/granzyme killing of virus-infected or tumor cells · MHC I-restricted cytotoxicity", "CD8+ T cells", "fill-emergency/10", "fill-emergency"],
        ].map(([x, desc, tag, bg, fg]) => (
          <g key={desc as string}>
            <rect x={x as number} y="466" width="284" height="86" rx="10" className="fill-card stroke-border" strokeWidth="1.2" />
            <text x={(x as number) + 14} y="486" fontSize="7" fontWeight="700" className="fill-muted-foreground">{(desc as string).match(/.{1,44}(\s|$)/g)!.slice(0, 2).map((l, j) => (
              <tspan key={j} x={(x as number) + 14} dy={j === 0 ? 0 : 10}>{l.trim()}</tspan>
            ))}</text>
            <rect x={(x as number) + 14} y="514" width="150" height="24" rx="8" className={bg as string} />
            <text x={(x as number) + 89} y="530" textAnchor="middle" fontSize="7.2" fontWeight="800" className={fg as string}>{tag}</text>
          </g>
        ))}
      </g>

      {/* footer */}
      <text x="24" y="596" fontSize="7.2" className="fill-muted-foreground">Original KYP synthesis diagram (pdf 121 / book 99 — function roster presented as a list in the source; no textbook artwork exists). The verbatim function table is the note's table block.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E24 — T-cell development: thymic selection + helper lineage switchboard
// (source: "Differentiation of T cells" diagram + selection text, pdf 122 / book 100)
// ---------------------------------------------------------------------------

export function TCellSelectionMap() {
  const w = 980;
  const h = 590;
  const cards = [
    { x: 196, name: "Th1", plus: "IFN-γ, IL-12", minus: "IL-4, IL-10", fn: ["activates macrophages", "+ cytotoxic T cells"] },
    { x: 378, name: "Th2", plus: "IL-2, IL-4", minus: "IFN-γ", fn: ["activates eosinophils,", "↑IgE"] },
    { x: 560, name: "Th17", plus: "TGF-β, IL-1, IL-6", minus: "IFN-γ, IL-4", fn: ["induce neutrophilic", "infiltration"] },
    { x: 742, name: "Treg", plus: "TGF-β, IL-2", minus: "IL-6", fn: ["prevent autoimmunity", "(maintain tolerance)"] },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="T-cell development, an original KYP redraw of the source's differentiation diagram. Top row, the thymic school: a T-cell precursor leaves the bone marrow, enters the thymus as a double-positive CD4+ CD8+ thymocyte; positive selection in the cortex keeps T cells that recognize self-peptide MHC complexes (survival signal); negative selection in the medulla removes T cells that bind self too strongly (apoptosis or become regulatory T cells), driven by the AIRE protein. Output: single-positive CD8+ cytotoxic and CD4+ helper T cells to the peripheral blood and lymph node. Bottom row, the helper lineage switchboard: a naive CD4+ (Th0) cell differentiates into Th1 (promoted by IFN-gamma and IL-12, inhibited by IL-4 and IL-10; activates macrophages and cytotoxic T cells), Th2 (promoted by IL-2 and IL-4, inhibited by IFN-gamma; activates eosinophils and raises IgE), Th17 (promoted by TGF-beta, IL-1 and IL-6, inhibited by IFN-gamma and IL-4; induces neutrophilic infiltration), and Treg (promoted by TGF-beta and IL-2, inhibited by IL-6; prevents autoimmunity and maintains tolerance). The verbatim secretes-and-function table is the note's table block" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">T-cell development — the thymic school and the helper lineages (original KYP redraw)</text>
        <rect x="704" y="24" width="228" height="18" rx="9" className="fill-brand-soft" />
        <text x="818" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">cortex keeps self-MHC · medulla culls self-reactive</text>
      </g>

      {/* ===== section 1: the thymic school ===== */}
      <text x="36" y="96" fontSize="8.4" fontWeight="800" className="fill-foreground">THE THYMIC SCHOOL</text>

      {/* bone marrow panel */}
      <g>
        <rect x="36" y="106" width="140" height="186" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="36" y="106" width="140" height="30" rx="12" className="fill-secondary stroke-border" strokeWidth="1.4" />
        <text x="106" y="126" textAnchor="middle" fontSize="8.6" fontWeight="800" className="fill-foreground">BONE MARROW</text>
        <circle cx="106" cy="196" r="24" className="fill-secondary stroke-border" strokeWidth="1.3" />
        <text x="106" y="190" textAnchor="middle" fontSize="6.4" fontWeight="700" className="fill-foreground">T-cell</text>
        <text x="106" y="199" textAnchor="middle" fontSize="6.4" fontWeight="700" className="fill-foreground">precursor</text>
        <text x="106" y="228" textAnchor="middle" fontSize="6.4" className="fill-muted-foreground">leaves for the thymus</text>
        <text x="106" y="238" textAnchor="middle" fontSize="6.4" className="fill-muted-foreground">(does NOT mature here —</text>
        <text x="106" y="248" textAnchor="middle" fontSize="6.4" className="fill-muted-foreground">contrast B cells)</text>
      </g>

      {/* arrow BM -> thymus */}
      <path d="M 180 196 L 244 196" stroke="currentColor" className="text-border" strokeWidth="2" />
      <path d="M 242 191 L 254 196 L 242 201 Z" className="fill-border" />

      {/* thymus panel */}
      <g>
        <rect x="216" y="76" width="392" height="216" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="216" y="76" width="392" height="30" rx="12" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
        <text x="412" y="96" textAnchor="middle" fontSize="8.6" fontWeight="800" className="fill-foreground">THYMUS — the selection school</text>

        {/* original lobed thymus schematic: outer cortex band + inner medulla */}
        <g>
          <path d="M 258 122 q 22 -12 44 0 q 22 -12 44 0 q 22 -12 44 0 q 10 26 0 52 q -10 26 -20 44 l -92 0 q -14 -18 -20 -44 q -6 -26 0 -52 Z" className="fill-warning-soft/60 stroke-warning" strokeWidth="1.4" />
          <rect x="278" y="158" width="112" height="44" rx="14" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
          <text x="334" y="150" textAnchor="middle" fontSize="6.8" fontWeight="800" className="fill-warning">CORTEX (outer)</text>
          <text x="334" y="184" textAnchor="middle" fontSize="6.8" fontWeight="800" className="fill-brand">MEDULLA (inner)</text>

          {/* double-positive thymocyte entering the cortex */}
          <circle cx="248" cy="132" r="16" className="fill-card stroke-border" strokeWidth="1.2" />
          <text x="248" y="129" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-foreground">CD4+</text>
          <text x="248" y="138" textAnchor="middle" fontSize="5.6" fontWeight="800" className="fill-foreground">CD8+</text>
          <path d="M 262 140 C 280 152, 292 160, 300 166" fill="none" stroke="currentColor" className="text-border" strokeWidth="1.2" />
        </g>

        {/* selection annotations (below the lobe, inside the panel) */}
        <g>
          <rect x="232" y="196" width="360" height="40" rx="8" className="fill-secondary" />
          <text x="242" y="210" fontSize="6.8" fontWeight="800" className="fill-foreground">POSITIVE SELECTION — cortex</text>
          <text x="242" y="220" fontSize="6.2" className="fill-muted-foreground">keeps T cells that recognize self-peptide MHC complexes —</text>
          <text x="242" y="229" fontSize="6.2" className="fill-muted-foreground">double-positive thymocytes receive a survival signal</text>

          <rect x="232" y="242" width="360" height="40" rx="8" className="fill-secondary" />
          <text x="242" y="256" fontSize="6.8" fontWeight="800" className="fill-foreground">NEGATIVE SELECTION — medulla</text>
          <text x="242" y="266" fontSize="6.2" className="fill-muted-foreground">removes T cells that bind too strongly to self-peptides — apoptosis</text>
          <text x="242" y="275" fontSize="6.2" className="fill-muted-foreground">or become Tregs; the AIRE protein drives negative selection</text>
        </g>

        {/* single-positive output arrows */}
        <path d="M 430 146 C 500 146, 560 150, 622 152" fill="none" stroke="currentColor" className="text-emergency" strokeWidth="1.8" />
        <path d="M 620 147 L 632 152 L 620 157 Z" className="fill-emergency" />
        <path d="M 430 178 C 500 178, 560 210, 622 214" fill="none" stroke="currentColor" className="text-brand" strokeWidth="1.8" />
        <path d="M 620 209 L 632 214 L 620 219 Z" className="fill-brand" />
      </g>

      {/* outcomes panel */}
      <g>
        <rect x="636" y="106" width="308" height="186" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="636" y="106" width="308" height="30" rx="12" className="fill-secondary stroke-border" strokeWidth="1.4" />
        <text x="790" y="126" textAnchor="middle" fontSize="8.6" fontWeight="800" className="fill-foreground">SINGLE-POSITIVE OUTPUT</text>
        <rect x="652" y="146" width="276" height="36" rx="8" className="fill-emergency/10 stroke-emergency" strokeWidth="1.2" />
        <text x="664" y="160" fontSize="7.2" fontWeight="800" className="fill-emergency">CD8+ → cytotoxic T cell</text>
        <text x="664" y="172" fontSize="6.2" className="fill-muted-foreground">kills virus-infected, neoplastic, donor graft cells (MHC I–restricted)</text>
        <rect x="652" y="196" width="276" height="36" rx="8" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
        <text x="664" y="210" fontSize="7.2" fontWeight="800" className="fill-brand">CD4+ → helper T cell</text>
        <text x="664" y="222" fontSize="6.2" className="fill-muted-foreground">the lineage switchboard below: Th1 / Th2 / Th17 / Treg</text>
        <text x="790" y="252" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">→ peripheral blood → lymph node → antigen encounter</text>
        <text x="790" y="264" textAnchor="middle" fontSize="6.6" fontWeight="700" className="fill-muted-foreground">(no thymus after involution — the repertoire is set for life)</text>
      </g>

      {/* ===== section 2: the helper lineage switchboard ===== */}
      <text x="36" y="330" fontSize="8.4" fontWeight="800" className="fill-foreground">THE HELPER LINEAGE SWITCHBOARD — differentiation signals (+) and cross-inhibition (−)</text>

      {/* Th0 node */}
      <g>
        <rect x="36" y="348" width="140" height="176" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="36" y="348" width="140" height="30" rx="12" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="106" y="368" textAnchor="middle" fontSize="8.6" fontWeight="800" className="fill-foreground">NAIVE CD4+ (Th0)</text>
        <circle cx="106" cy="414" r="22" className="fill-brand-soft/40 stroke-brand" strokeWidth="1.2" />
        <text x="106" y="418" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">Th0</text>
        <text x="106" y="452" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">in the lymph node:</text>
        <text x="106" y="462" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">antigen + co-stimulation</text>
        <text x="106" y="472" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">→ IL-2-driven</text>
        <text x="106" y="482" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">clonal proliferation,</text>
        <text x="106" y="492" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">then the cytokine</text>
        <text x="106" y="502" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">milieu picks the lineage</text>
      </g>

      {/* fan arrows Th0 -> cards */}
      {cards.map((c, i) => (
        <g key={c.name}>
          <path d={`M 180 ${436 - i * 4} C ${188} ${436}, ${c.x - 14} ${434 + i * 6}, ${c.x - 4} ${436 + i * 6}`} fill="none" stroke="currentColor" className="text-border" strokeWidth="1.4" />
        </g>
      ))}

      {/* lineage cards */}
      {cards.map((c) => (
        <g key={c.name}>
          <rect x={c.x} y="348" width="166" height="176" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
          <rect x={c.x} y="348" width="166" height="26" rx="12" className={c.name === "Treg" ? "fill-warning-soft" : "fill-secondary"} />
          <text x={c.x + 83} y="366" textAnchor="middle" fontSize="8.4" fontWeight="800" className="fill-foreground">{c.name}</text>
          <text x={c.x + 14} y="390" fontSize="6.6" fontWeight="800" className="fill-brand">(+) differentiate</text>
          <text x={c.x + 14} y="401" fontSize="7" fontWeight="700" className="fill-foreground">{c.plus}</text>
          <text x={c.x + 14} y="421" fontSize="6.6" fontWeight="800" className="fill-emergency">(−) inhibited by</text>
          <text x={c.x + 14} y="432" fontSize="7" fontWeight="700" className="fill-foreground">{c.minus}</text>
          <line x1={c.x + 14} y1="446" x2={c.x + 152} y2="446" stroke="currentColor" className="text-border" strokeWidth="1" />
          <text x={c.x + 14} y="460" fontSize="6.2" fontWeight="700" className="fill-muted-foreground">function (see table):</text>
          {c.fn.map((line, j) => (
            <text key={j} x={c.x + 14} y={472 + j * 11} fontSize="6.8" className="fill-muted-foreground">{line}</text>
          ))}
        </g>
      ))}

      {/* footer */}
      <text x="24" y="566" fontSize="7.2" className="fill-muted-foreground">Original KYP redraw of the source's differentiation diagram (pdf 122 / book 100 — the printed page's thymus illustration is copyrighted and is conveyed here as an original schematic). Verbatim selection text and the Secretes/Function table are the note's table and mechanism blocks.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E25 — CD8+ cytotoxic kill cycle (source: "Cytotoxic T cells", pdf 122 / book 100)
// ---------------------------------------------------------------------------

export function CtlKillCycle() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The CD8+ cytotoxic T-cell kill cycle, an original KYP diagram. Left: a cytotoxic T cell carrying CD8 and a T-cell receptor faces a virus-infected target cell displaying peptide on MHC I; the TCR recognizes the peptide-MHC I complex and CD8 binds MHC I, forming the immunological synapse; the cytotoxic T cell releases preformed cytotoxic granules containing perforin and granzyme B; perforin forms pores and granzyme B induces apoptosis. Right rail, the target spectrum: virus-infected cells, neoplastic (tumor) cells, and donor graft cells — all killed by inducing apoptosis" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">The CD8+ cytotoxic kill cycle (original KYP diagram)</text>
        <rect x="716" y="24" width="216" height="18" rx="9" className="fill-brand-soft" />
        <text x="824" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">MHC I-guided perforin / granzyme B</text>
      </g>

      {/* ===== CTL panel ===== */}
      <g>
        <rect x="36" y="76" width="300" height="290" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="36" y="76" width="300" height="34" rx="12" className="fill-secondary stroke-border" strokeWidth="1.4" />
        <text x="186" y="98" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">CYTOTOXIC T CELL (CD8+)</text>

        {/* cell body */}
        <rect x="60" y="128" width="252" height="150" rx="18" className="fill-secondary/40 stroke-border" strokeWidth="1.3" />
        {/* granules */}
        <circle cx="112" cy="180" r="13" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="112" y="177" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-foreground">perforin</text>
        <text x="112" y="185" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-foreground">granzyme B</text>
        <circle cx="160" cy="212" r="13" className="fill-card stroke-emergency" strokeWidth="1.4" />
        <text x="160" y="209" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-foreground">perforin</text>
        <text x="160" y="217" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-foreground">granzyme B</text>
        <text x="230" y="180" fontSize="6.6" className="fill-muted-foreground">cytotoxic granules:</text>
        <text x="230" y="190" fontSize="6.6" className="fill-muted-foreground">preformed proteins,</text>
        <text x="230" y="200" fontSize="6.6" className="fill-muted-foreground">ready for release —</text>
        <text x="230" y="210" fontSize="6.6" className="fill-muted-foreground">no new synthesis</text>
        <text x="230" y="220" fontSize="6.6" className="fill-muted-foreground">needed at the synapse</text>

        {/* CD8 + TCR on right edge */}
        <circle cx="316" cy="160" r="14" className="fill-emergency/15 stroke-emergency" strokeWidth="1.4" />
        <text x="316" y="163" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-emergency">CD8</text>
        <rect x="302" y="204" width="28" height="20" rx="6" className="fill-brand-soft stroke-brand" strokeWidth="1.3" />
        <text x="316" y="217" textAnchor="middle" fontSize="6.4" fontWeight="800" className="fill-brand">TCR</text>
        <text x="186" y="300" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">TCR reads the foreign peptide; CD8 clamps onto MHC I —</text>
        <text x="186" y="310" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">dual recognition makes the kill antigen-specific and MHC I-restricted</text>
      </g>

      {/* synapse zone */}
      <g>
        <rect x="356" y="130" width="90" height="150" rx="10" className="fill-warning-soft/40 stroke-warning" strokeWidth="1.2" />
        <text x="401" y="150" textAnchor="middle" fontSize="6.6" fontWeight="800" className="fill-foreground">immunological</text>
        <text x="401" y="160" textAnchor="middle" fontSize="6.6" fontWeight="800" className="fill-foreground">synapse</text>
        <path d="M 332 160 L 356 160" stroke="currentColor" className="text-emergency" strokeWidth="1.6" />
        <path d="M 334 214 L 356 214" stroke="currentColor" className="text-brand" strokeWidth="1.6" />
        <text x="401" y="180" textAnchor="middle" fontSize="5.8" className="fill-muted-foreground">CD8 ↔ MHC I</text>
        <text x="401" y="192" textAnchor="middle" fontSize="5.8" className="fill-muted-foreground">TCR ↔ peptide</text>
        <path d="M 401 200 L 401 214" stroke="currentColor" className="text-warning" strokeWidth="1.2" />
        <text x="401" y="226" textAnchor="middle" fontSize="5.8" fontWeight="700" className="fill-warning">granule</text>
        <text x="401" y="236" textAnchor="middle" fontSize="5.8" fontWeight="700" className="fill-warning">release →</text>
      </g>

      {/* target panel */}
      <g>
        <rect x="466" y="76" width="290" height="290" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="466" y="76" width="290" height="34" rx="12" className="fill-emergency/10 stroke-emergency" strokeWidth="1.4" />
        <text x="611" y="98" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">TARGET CELL (MHC I+)</text>
        <rect x="490" y="128" width="242" height="150" rx="18" className="fill-emergency/5 stroke-border" strokeWidth="1.3" />
        {/* MHC I with peptide on left edge */}
        <rect x="486" y="152" width="26" height="18" rx="4" className="fill-warning-soft stroke-warning" strokeWidth="1.3" />
        <rect x="488" y="146" width="22" height="8" rx="4" className="fill-emergency/80" />
        <text x="499" y="152" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-background">peptide</text>
        <text x="499" y="181" textAnchor="middle" fontSize="5.6" fontWeight="700" className="fill-muted-foreground">MHC I</text>
        <text x="611" y="196" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">viral peptides displayed on MHC I —</text>
        <text x="611" y="206" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">every nucleated cell reports its contents</text>
        <text x="611" y="216" textAnchor="middle" fontSize="6.6" className="fill-muted-foreground">this way; the CTL reads the report</text>
        {/* pores + granzyme entry */}
        <circle cx="556" cy="248" r="4" className="fill-emergency" />
        <circle cx="574" cy="248" r="4" className="fill-emergency" />
        <circle cx="592" cy="248" r="4" className="fill-emergency" />
        <text x="668" y="251" fontSize="6" fontWeight="700" className="fill-emergency">perforin pores</text>
        <text x="611" y="286" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-emergency">→ apoptosis</text>
        <text x="611" y="300" textAnchor="middle" fontSize="6.4" className="fill-muted-foreground">granzyme B enters through the pores</text>
        <text x="611" y="310" textAnchor="middle" fontSize="6.4" className="fill-muted-foreground">and induces programmed cell death</text>
      </g>

      {/* right rail: target spectrum */}
      <g>
        <rect x="776" y="76" width="168" height="290" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="860" y="100" textAnchor="middle" fontSize="8.4" fontWeight="800" className="fill-foreground">TARGET SPECTRUM</text>
        {[
          ["Virus-infected cells", "viral peptides on MHC I"],
          ["Neoplastic cells", "tumor antigens on MHC I"],
          ["Donor graft cells", "allo-MHC I = foreign peptide"],
        ].map(([t, s], i) => (
          <g key={t}>
            <rect x="790" y={116 + i * 78} width="140" height="66" rx="9" className="fill-secondary stroke-border" strokeWidth="1.1" />
            <text x="860" y={138 + i * 78} textAnchor="middle" fontSize="7" fontWeight="800" className="fill-foreground">{t}</text>
            <text x="860" y={152 + i * 78} textAnchor="middle" fontSize="6">{s.split(" ").slice(0, 3).join(" ")}</text>
            <text x="860" y={162 + i * 78} textAnchor="middle" fontSize="6">{s.split(" ").slice(3).join(" ")}</text>
            <text x="860" y={174 + i * 78} textAnchor="middle" fontSize="6" fontWeight="700" className="fill-emergency">killed by apoptosis</text>
          </g>
        ))}
      </g>

      {/* bottom strip: shared ammunition note */}
      <g>
        <rect x="36" y="386" width="908" height="120" rx="12" className="fill-secondary stroke-border" strokeWidth="1.2" />
        <text x="54" y="410" fontSize="8.4" fontWeight="800" className="fill-foreground">Same ammunition as NK cells — different guidance system</text>
        <text x="54" y="428" fontSize="7" className="fill-muted-foreground">CD8+ cytotoxic T cells kill via perforin and granzymes (similar to NK cells), but the kill is TCR-guided and MHC I-RESTRICTED:</text>
        <text x="54" y="440" fontSize="7" className="fill-muted-foreground">only cells displaying the specific foreign peptide on MHC I die. NK cells kill preferentially when MHC I is absent</text>
        <text x="54" y="452" fontSize="7" className="fill-muted-foreground">(missing self) or via CD16-bound IgG (ADCC). A target cell cannot escape both: downregulating MHC I hides from CD8+</text>
        <text x="54" y="464" fontSize="7" className="fill-muted-foreground">but exposes it to NK. Cytotoxic T cells have CD8, which binds to MHC I on virus-infected cells — the printed anchor sentence.</text>
        <text x="54" y="486" fontSize="7" fontWeight="800" className="fill-brand">Exam bridge: acute and chronic cellular organ rejection = this same CD8+ machinery attacking donor graft cells.</text>
      </g>

      {/* footer */}
      <text x="24" y="534" fontSize="7.2" className="fill-muted-foreground">Original KYP diagram of the source's Cytotoxic T cells section (pdf 122 / book 100 — prose in the source; no textbook artwork exists). Verbatim text in the note's table block.</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// E25 — Treg suppression model (source: "Regulatory T cells", pdf 122 / book 100)
// ---------------------------------------------------------------------------

export function TregSuppressionModel() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="The regulatory T-cell brake, an original KYP diagram. Center: a regulatory T cell identified by surface CD3, CD4, and CD25 with the FOXP3 transcription factor in its nucleus — FOXP3 is the master switch that makes the Treg. Left: what it suppresses — CD4+ helper and CD8+ cytotoxic T-cell effector functions — maintaining specific immune tolerance. Right: how it suppresses — activated Tregs produce the anti-inflammatory cytokines IL-10 and TGF-beta. Bottom strip: FOXP3 deficiency causes IPEX (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked) syndrome — enteropathy, endocrinopathy, nail dystrophy, dermatitis, and diabetes in male infants" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">The Treg brake — tolerance's active suppressor (original KYP diagram)</text>
        <rect x="742" y="24" width="190" height="18" rx="9" className="fill-brand-soft" />
        <text x="837" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">CD3 · CD4 · CD25 · FOXP3</text>
      </g>

      {/* left: suppressed targets */}
      <g>
        <rect x="36" y="76" width="260" height="280" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="36" y="76" width="260" height="34" rx="12" className="fill-secondary stroke-border" strokeWidth="1.4" />
        <text x="166" y="98" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">WHAT IT SUPPRESSES</text>
        <rect x="52" y="126" width="228" height="86" rx="10" className="fill-secondary stroke-border" strokeWidth="1.1" />
        <text x="166" y="148" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">CD4+ helper T-cell effectors</text>
        <text x="166" y="164" textAnchor="middle" fontSize="6.4" className="fill-muted-foreground">cytokine-driven recruitment and</text>
        <text x="166" y="174" textAnchor="middle" fontSize="6.4" className="fill-muted-foreground">B-cell help — muted when Tregs engage</text>
        <rect x="52" y="228" width="228" height="86" rx="10" className="fill-secondary stroke-border" strokeWidth="1.1" />
        <text x="166" y="250" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-emergency">CD8+ cytotoxic effectors</text>
        <text x="166" y="266" textAnchor="middle" fontSize="6.4" className="fill-muted-foreground">perforin/granzyme killing —</text>
        <text x="166" y="276" textAnchor="middle" fontSize="6.4" className="fill-muted-foreground">held in check to protect self tissue</text>
        <text x="166" y="330" textAnchor="middle" fontSize="6.8" fontWeight="700" className="fill-muted-foreground">= maintaining specific immune tolerance</text>
      </g>

      {/* suppression arrows */}
      <g>
        <path d="M 356 168 C 386 168, 396 176, 414 184" fill="none" stroke="currentColor" className="text-brand" strokeWidth="2" strokeDasharray="6 3" />
        <path d="M 412 178 L 424 186 L 410 191 Z" className="fill-brand" />
        <path d="M 356 272 C 386 272, 396 264, 414 256" fill="none" stroke="currentColor" className="text-brand" strokeWidth="2" strokeDasharray="6 3" />
        <path d="M 412 262 L 424 254 L 410 249 Z" className="fill-brand" />
        <text x="388" y="154" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-brand">suppress</text>
        <text x="388" y="292" textAnchor="middle" fontSize="6.2" fontWeight="800" className="fill-brand">suppress</text>
      </g>

      {/* center: the Treg */}
      <g>
        <rect x="424" y="76" width="270" height="280" rx="12" className="fill-card stroke-brand" strokeWidth="1.6" />
        <rect x="424" y="76" width="270" height="34" rx="12" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="559" y="98" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">REGULATORY T CELL (Treg)</text>

        {/* cell body */}
        <rect x="446" y="126" width="226" height="160" rx="20" className="fill-brand-soft/25 stroke-border" strokeWidth="1.2" />
        {/* nucleus with FOXP3 */}
        <circle cx="559" cy="206" r="34" className="fill-card stroke-primary" strokeWidth="1.4" />
        <text x="559" y="203" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-foreground">FOXP3</text>
        <text x="559" y="213" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">master transcription</text>
        <text x="559" y="221" textAnchor="middle" fontSize="5.6" className="fill-muted-foreground">factor — the Treg switch</text>

        {/* surface markers */}
        <circle cx="474" cy="146" r="11" className="fill-card stroke-brand" strokeWidth="1.2" />
        <text x="474" y="149" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-brand">CD3</text>
        <circle cx="518" cy="138" r="11" className="fill-card stroke-brand" strokeWidth="1.2" />
        <text x="518" y="141" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-brand">CD4</text>
        <circle cx="562" cy="146" r="11" className="fill-card stroke-brand" strokeWidth="1.2" />
        <text x="562" y="149" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-brand">CD25</text>
        <text x="559" y="172" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">identified by expression of CD3, CD4, CD25, and FOXP3</text>

        {/* identity strip */}
        <rect x="440" y="300" width="238" height="42" rx="8" className="fill-secondary" />
        <text x="559" y="318" textAnchor="middle" fontSize="6.8" fontWeight="800" className="fill-foreground">Treg identity panel</text>
        <text x="559" y="330" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">surface: CD3 + CD4 + CD25 (IL-2 receptor α)</text>
        <text x="559" y="340" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">nuclear: FOXP3 — deficiency = IPEX (below)</text>
      </g>

      {/* right: the how — anti-inflammatory cytokines */}
      <g>
        <rect x="722" y="76" width="222" height="280" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="722" y="76" width="222" height="34" rx="12" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
        <text x="833" y="98" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">HOW IT SUPPRESSES</text>
        <rect x="738" y="126" width="190" height="70" rx="10" className="fill-warning-soft/50 stroke-warning" strokeWidth="1.1" />
        <text x="833" y="150" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">IL-10</text>
        <text x="833" y="166" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">anti-inflammatory cytokine —</text>
        <text x="833" y="176" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">dampens APC activation and</text>
        <text x="833" y="186" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">effector cytokine output</text>
        <rect x="738" y="210" width="190" height="70" rx="10" className="fill-warning-soft/50 stroke-warning" strokeWidth="1.1" />
        <text x="833" y="234" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-foreground">TGF-β</text>
        <text x="833" y="250" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">anti-inflammatory cytokine —</text>
        <text x="833" y="260" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">suppresses proliferation and</text>
        <text x="833" y="270" textAnchor="middle" fontSize="6.2" className="fill-muted-foreground">tips the Th17/Treg toggle toward Treg</text>
        <text x="833" y="302" textAnchor="middle" fontSize="6.4" fontWeight="700" className="fill-muted-foreground">activated Tregs produce these —</text>
        <text x="833" y="312" textAnchor="middle" fontSize="6.4" fontWeight="700" className="fill-muted-foreground">the brake is active suppression,</text>
        <text x="833" y="322" textAnchor="middle" fontSize="6.4" fontWeight="700" className="fill-muted-foreground">not mere absence of activation</text>
        {/* secretion arrows */}
        <path d="M 700 160 C 710 160, 716 162, 722 160" fill="none" stroke="currentColor" className="text-warning" strokeWidth="1.8" />
        <path d="M 700 245 C 710 245, 716 243, 722 245" fill="none" stroke="currentColor" className="text-warning" strokeWidth="1.8" />
      </g>

      {/* bottom strip: IPEX */}
      <g>
        <rect x="36" y="376" width="908" height="130" rx="12" className="fill-emergency/5 stroke-emergency" strokeWidth="1.2" />
        <text x="54" y="400" fontSize="8.4" fontWeight="800" className="fill-foreground">FOXP3 deficiency → IPEX — the brake removed at the transcriptional level</text>
        <text x="54" y="418" fontSize="7" className="fill-muted-foreground">IPEX (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked) syndrome — genetic deficiency of FOXP3 → autoimmunity.</text>
        {[
          ["Enteropathy", "chronic diarrhea, failure to thrive"],
          ["Endocrinopathy", "diabetes in male infants (X-linked)"],
          ["Dermatologic", "dermatitis, nail dystrophy, other autoimmune skin conditions"],
        ].map(([t, s], i) => (
          <g key={t}>
            <rect x={54 + i * 292} y="432" width="276" height="58" rx="9" className="fill-card stroke-border" strokeWidth="1.1" />
            <text x={66 + i * 292} y="452" fontSize="7.2" fontWeight="800" className="fill-emergency">{t}</text>
            <text x={66 + i * 292} y={466} fontSize="6.4">{s.match(/.{1,40}(\s|$)/g)![0].trim()}</text>
            <text x={66 + i * 292} y={476} fontSize="6.4" className="fill-muted-foreground">{(s.match(/.{1,40}(\s|$)/g)!)[1] ? (s.match(/.{1,40}(\s|$)/g)!)[1].trim() : ""}</text>
          </g>
        ))}
      </g>

      {/* footer */}
      <text x="24" y="534" fontSize="7.2" className="fill-muted-foreground">Original KYP diagram of the source's Regulatory T cells section (pdf 122 / book 100 — prose in the source; no textbook artwork exists). Verbatim text in the note's table block.</text>
    </svg>
  );
}
