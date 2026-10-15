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
