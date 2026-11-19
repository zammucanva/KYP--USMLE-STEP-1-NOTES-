/* Neoplasia — P14 (Cancer Immunotherapy & Epidemiology). An ORIGINAL KYP
 * visual for the topic "cancer-immunotherapy-epidemiology" (book 218):
 * the immune-checkpoint figure redrawn with original KYP glyphs (APC ×
 * T cell × tumor cell, the CTLA-4/B7 and PD-1/PD-L1 axes, the seven
 * Y-shaped antibody blockers at their binding sites) + the cancer
 * epidemiology grid carried verbatim. Census: the source page has ZERO
 * raster images — pure text plus ONE vector line-art figure, which is
 * REDRAWN here (never reproduced). Purely presentational. */

export function ImmunotherapyTargetMap() {
  const w = 1102;
  const h = 992;
  const Y = (x: number, y: number, cls: string) => (
    <g className={cls} strokeWidth="1.6" strokeLinecap="round" fill="none">
      <path d={`M ${x} ${y + 10} L ${x} ${y + 2}`} />
      <path d={`M ${x} ${y + 2} L ${x - 5} ${y - 6}`} />
      <path d={`M ${x} ${y + 2} L ${x + 5} ${y - 6}`} />
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Immune checkpoint interactions and cancer epidemiology — the immunotherapy target map (an original KYP adaptation)" className="min-w-[940px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Cancer immunotherapy &amp; epidemiology — the target map (original KYP adaptation)</text>
        <rect x="840" y="24" width="222" height="18" className="fill-brand-soft" />
        <text x="951" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">release the brake · read the flip</text>
      </g>
      {/* ===== LEFT — the checkpoint figure (KYP redraw) ===== */}
      <g>
        <rect x="36" y="78" width="560" height="700" rx="14" className="fill-card stroke-border" />
        <text x="52" y="100" fontSize="8" fontWeight="800" className="fill-foreground">The checkpoint interactions (book 218 — an original KYP redraw)</text>
        <text x="52" y="120" fontSize="4" fontWeight="700" className="fill-muted-foreground">Signals that modulate T-cell activation and function → ↓ immune response against tumor cells — targeted by several cancer immunotherapies.</text>
        {/* the three cells */}
        <ellipse cx="118" cy="305" rx="58" ry="90" className="fill-brand-soft/40 stroke-brand" />
        <text x="118" y="310" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-brand">APC</text>
        <ellipse cx="320" cy="300" rx="66" ry="106" className="fill-card stroke-border" />
        <text x="320" y="345" textAnchor="middle" fontSize="6" fontWeight="800" className="fill-foreground">T cell</text>
        <ellipse cx="521" cy="300" rx="57" ry="106" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="521" y="345" textAnchor="middle" fontSize="5.5" fontWeight="800" className="fill-emergency">Tumor cell</text>
        {/* MHC I on the tumor cell */}
        <rect x="513" y="188" width="16" height="10" rx="2" className="fill-brand-soft stroke-brand" />
        <text x="521" y="184" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">MHC I</text>
        {/* left gap — signal 1 + signal 2 + the off-switch */}
        <text x="215" y="202" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">Antigen</text>
        <path d="M 215 206 L 221 212 L 215 218 L 209 212 Z" className="fill-warning-soft stroke-warning" />
        <rect x="168" y="228" width="16" height="10" rx="2" className="fill-brand-soft stroke-brand" />
        <rect x="240" y="228" width="16" height="10" rx="2" className="fill-brand-soft stroke-brand" />
        <path d="M 184 233 L 240 233" className="stroke-brand" strokeWidth="1.4" />
        <text x="176" y="250" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">MHC II</text>
        <text x="248" y="250" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">TCR</text>
        <text x="215" y="268" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">T cell activation ⊕</text>
        <rect x="168" y="292" width="16" height="10" rx="2" className="fill-brand-soft stroke-brand" />
        <rect x="240" y="292" width="16" height="10" rx="2" className="fill-brand-soft stroke-brand" />
        <path d="M 184 297 L 240 297" className="stroke-brand" strokeWidth="1.4" />
        <text x="176" y="312" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">B7</text>
        <text x="248" y="312" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">CD28</text>
        <text x="215" y="328" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">costimulation ⊕</text>
        <rect x="240" y="348" width="16" height="10" rx="2" className="fill-emergency-soft stroke-emergency" />
        <path d="M 184 302 L 240 353" className="stroke-emergency" strokeWidth="1.2" strokeDasharray="3 2" />
        <text x="248" y="372" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">CTLA-4</text>
        {/* ipilimumab blocks the off-switch */}
        {Y(212, 327, "stroke-emergency")}
        <text x="212" y="354" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-emergency">Ipilimumab</text>
        <text x="215" y="392" textAnchor="middle" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">CTLA-4 outcompetes CD28 for B7</text>
        <text x="215" y="402" textAnchor="middle" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">→ loss of costimulatory signal ⊖</text>
        {/* right gap — the PD-1 / PD-L1 axis */}
        <text x="386" y="242" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">PD-1</text>
        <text x="464" y="242" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">PD-L1</text>
        <rect x="378" y="248" width="16" height="10" rx="2" className="fill-emergency-soft stroke-emergency" />
        <rect x="456" y="248" width="16" height="10" rx="2" className="fill-emergency-soft stroke-emergency" />
        <path d="M 394 253 L 456 253" className="stroke-emergency" strokeWidth="1.4" />
        {/* anti-PD-1 blockers above the axis */}
        <text x="408" y="200" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-foreground">Cemiplimab</text>
        <text x="408" y="211" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-foreground">Nivolumab</text>
        <text x="408" y="222" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-foreground">Pembrolizumab</text>
        <text x="408" y="234" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-brand">anti-PD-1</text>
        <rect x="403" y="246" width="14" height="16" className="fill-card" />
        {Y(410, 253, "stroke-brand")}
        {/* anti-PD-L1 blockers below the axis */}
        <text x="415" y="276" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-foreground">T-cell dysfunction</text>
        <text x="415" y="287" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-foreground">(exhaustion) ⊖</text>
        <text x="448" y="272" textAnchor="middle" fontSize="3.2" fontWeight="800" className="fill-warning">anti-PD-L1</text>
        <path d="M 452 288 L 460 260" className="stroke-warning" strokeWidth="1" />
        {Y(452, 296, "stroke-warning")}
        <text x="448" y="314" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-foreground">Atezolizumab</text>
        <text x="448" y="325" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-foreground">Durvalumab</text>
        <text x="448" y="336" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-foreground">Avelumab</text>
        {/* axis cards (verbatim bullets) */}
        <rect x="52" y="480" width="258" height="92" rx="10" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="181" y="498" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-emergency">AXIS 1 — THE START GATE (CTLA-4 vs B7)</text>
        <text x="64" y="514" fontSize="3.35" fontWeight="700" className="fill-foreground">CTLA-4 on T cells outcompetes CD28 for B7 on</text>
        <text x="64" y="524" fontSize="3.35" fontWeight="700" className="fill-foreground">APCs → loss of T-cell costimulatory signal.</text>
        <text x="64" y="538" fontSize="3.35" fontWeight="700" className="fill-foreground">Inhibited by antibodies against CTLA-4</text>
        <text x="64" y="548" fontSize="3.35" fontWeight="700" className="fill-foreground">(eg, ipilimumab).</text>
        <text x="64" y="564" fontSize="3.3" className="fill-muted-foreground">THE GATE: activation denied at the start.</text>
        <rect x="322" y="480" width="258" height="92" rx="10" className="fill-warning-soft/40 stroke-warning" />
        <text x="451" y="498" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-warning">AXIS 2 — THE EXHAUSTION BRAKE (PD-1 × PD-L1/2)</text>
        <text x="334" y="514" fontSize="3.35" fontWeight="700" className="fill-foreground">PD-1 (on T cells) × PD-L1/2 (on tumor cells or</text>
        <text x="334" y="524" fontSize="3.35" fontWeight="700" className="fill-foreground">immune cells in tumor microenvironment) → T-cell</text>
        <text x="334" y="534" fontSize="3.35" fontWeight="700" className="fill-foreground">dysfunction (exhaustion). Inhibited by antibodies</text>
        <text x="334" y="544" fontSize="3.35" fontWeight="700" className="fill-foreground">against PD-1 (eg, cemiplimab, nivolumab,</text>
        <text x="334" y="554" fontSize="3.35" fontWeight="700" className="fill-foreground">pembrolizumab) or PD-L1 (eg, atezolizumab,</text>
        <text x="334" y="564" fontSize="3.35" fontWeight="700" className="fill-foreground">durvalumab, avelumab).</text>
        {/* the directory */}
        <rect x="52" y="588" width="528" height="170" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="66" y="608" fontSize="5.4" fontWeight="800" className="fill-foreground">The directory — seven antibodies, two targets, one gate</text>
        <text x="140" y="630" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-emergency">ANTI-CTLA-4 — the gate</text>
        {Y(96, 650, "stroke-emergency")}
        <text x="148" y="652" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">Ipilimumab</text>
        <text x="140" y="670" textAnchor="middle" fontSize="3.2" className="fill-muted-foreground">blocks the CD28 competitor</text>
        <text x="140" y="681" textAnchor="middle" fontSize="3.2" className="fill-muted-foreground">for B7 at the APC</text>
        <text x="316" y="630" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-brand">ANTI-PD-1 — the receptor (T-cell side)</text>
        <text x="316" y="650" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Cemiplimab</text>
        <text x="316" y="662" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Nivolumab</text>
        <text x="316" y="674" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Pembrolizumab</text>
        <text x="492" y="630" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-warning">ANTI-PD-L1 — the ligand (tumor side)</text>
        <text x="492" y="650" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Atezolizumab</text>
        <text x="492" y="662" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Durvalumab</text>
        <text x="492" y="674" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">Avelumab</text>
        <text x="316" y="700" textAnchor="middle" fontSize="3.3" className="fill-muted-foreground">Every blocker releases a brake → T-cell activation and function restored against the tumor —</text>
        <text x="316" y="711" textAnchor="middle" fontSize="3.3" className="fill-muted-foreground">and released everywhere: colitis · thyroiditis · pneumonitis · dermatitis (immune-related adverse events).</text>
        <text x="316" y="732" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">IPI HOLDS THE GATE · A.D.A. BLUNTS THE LIGAND · C.N.P. FREES THE RECEPTOR</text>
      </g>
      {/* ===== RIGHT — the epidemiology grid (verbatim) ===== */}
      <g>
        <rect x="612" y="78" width="454" height="700" rx="14" className="fill-card stroke-border" />
        <text x="628" y="100" fontSize="8" fontWeight="800" className="fill-foreground">Cancer epidemiology (book 218 — verbatim)</text>
        <text x="628" y="122" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">Skin cancer (basal &gt; squamous &gt;&gt; melanoma) is the most common cancer (not included below).</text>
        {/* header row */}
        <rect x="628" y="136" width="422" height="28" className="fill-secondary/40" />
        <text x="732" y="155" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">MALeS</text>
        <text x="816" y="155" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">feMALeS</text>
        <text x="901" y="155" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-foreground">CHILDReN (AGe 0-14)</text>
        <text x="997" y="155" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">NOTeS</text>
        {/* incidence row */}
        <rect x="628" y="172" width="422" height="150" rx="8" className="fill-card stroke-border" />
        <path d="M 690 172 L 690 322 M 774 172 L 774 322 M 858 172 L 858 322 M 944 172 L 944 322" className="stroke-border" strokeWidth="0.6" />
        <text x="659" y="236" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Cancer</text>
        <text x="659" y="249" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">incidence</text>
        <text x="732" y="196" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">1. Prostate</text>
        <text x="732" y="212" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">2. Lung</text>
        <text x="732" y="228" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">3. Colon/rectum</text>
        <text x="816" y="196" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">1. Breast</text>
        <text x="816" y="212" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">2. Lung</text>
        <text x="816" y="228" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">3. Colon/rectum</text>
        <text x="901" y="196" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">1. Leukemia</text>
        <text x="901" y="212" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">2. CNS</text>
        <text x="901" y="228" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">3. Neuroblastoma</text>
        <text x="1000" y="196" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-muted-foreground">Lung cancer incidence</text>
        <text x="1000" y="208" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-muted-foreground">has ↓ in males, but has</text>
        <text x="1000" y="220" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-muted-foreground">not changed significantly</text>
        <text x="1000" y="232" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-muted-foreground">in females.</text>
        {/* mortality row */}
        <rect x="628" y="330" width="422" height="150" rx="8" className="fill-card stroke-border" />
        <path d="M 690 330 L 690 480 M 774 330 L 774 480 M 858 330 L 858 480 M 944 330 L 944 480" className="stroke-border" strokeWidth="0.6" />
        <text x="659" y="394" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">Cancer</text>
        <text x="659" y="407" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">mortality</text>
        <text x="732" y="354" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">1. Lung</text>
        <text x="732" y="370" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">2. Prostate</text>
        <text x="732" y="386" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">3. Colon/rectum</text>
        <text x="816" y="354" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">1. Lung</text>
        <text x="816" y="370" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">2. Breast</text>
        <text x="816" y="386" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">3. Colon/rectum</text>
        <text x="901" y="354" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">1. Leukemia</text>
        <text x="901" y="370" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">2. CNS</text>
        <text x="901" y="386" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">3. Neuroblastoma</text>
        <text x="1000" y="354" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-muted-foreground">Cancer is the 2nd leading</text>
        <text x="1000" y="366" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-muted-foreground">cause of death in the</text>
        <text x="1000" y="378" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-muted-foreground">United States (heart</text>
        <text x="1000" y="390" textAnchor="middle" fontSize="3.3" fontWeight="700" className="fill-muted-foreground">disease is 1st).</text>
        {/* flip rule card */}
        <rect x="628" y="492" width="422" height="100" rx="10" className="fill-brand-soft/40 stroke-brand" />
        <text x="839" y="512" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">THE FLIP RULE — what each row measures</text>
        <text x="640" y="528" fontSize="3.4" fontWeight="700" className="fill-foreground">INCIDENCE asks who GETS cancer (new cases): prostate leads males in, breast</text>
        <text x="640" y="539" fontSize="3.4" fontWeight="700" className="fill-foreground">leads females in. MORTALITY asks who DIES of it — lung leads EVERYONE out:</text>
        <text x="640" y="550" fontSize="3.4" fontWeight="700" className="fill-foreground">#1 cause of cancer death in BOTH sexes (prostate and breast drop to #2).</text>
        <text x="640" y="561" fontSize="3.4" fontWeight="700" className="fill-foreground">Colon/rectum holds #3 in every adult column — the table's most stable entry.</text>
        {/* standing rules card */}
        <rect x="628" y="604" width="422" height="154" rx="10" className="fill-secondary/40 stroke-border" />
        <text x="839" y="624" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">THE STANDING RULES</text>
        <text x="640" y="642" fontSize="3.4" fontWeight="700" className="fill-foreground">• SKIN STAYS OFF THE LIST — skin cancer (basal &gt; squamous &gt;&gt; melanoma) is the</text>
        <text x="640" y="653" fontSize="3.4" fontWeight="700" className="fill-foreground">most common cancer overall, excluded from the table.</text>
        <text x="640" y="664" fontSize="3.4" fontWeight="700" className="fill-foreground">• KIDS KEEP L-C-N TWICE — children (age 0-14): 1. Leukemia 2. CNS</text>
        <text x="640" y="675" fontSize="3.4" fontWeight="700" className="fill-foreground">3. Neuroblastoma — the same trio for incidence AND mortality.</text>
        <text x="640" y="686" fontSize="3.4" fontWeight="700" className="fill-foreground">• Cancer is the 2nd leading cause of death in the United States (heart disease is 1st).</text>
        <text x="640" y="697" fontSize="3.4" fontWeight="700" className="fill-foreground">• Lung cancer incidence has ↓ in males, but has not changed significantly in females.</text>
        <text x="640" y="716" fontSize="3.3" className="fill-muted-foreground">Read the stem's verb before choosing the row: "new cases" vs "deaths".</text>
      </g>
      {/* ===== BOTTOM — the release-the-brake logic ===== */}
      <g>
        <rect x="36" y="794" width="1030" height="118" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="816" fontSize="8" fontWeight="800" className="fill-foreground">The release-the-brake logic — why all seven drugs share one toxicity family</text>
        <text x="52" y="836" fontSize="3.6" fontWeight="700" className="fill-foreground">Every checkpoint is a brake: signals that modulate T-cell activation and function → ↓ immune response against tumor cells. Blocking the brake — ipilimumab at the gate, the anti-PD-1 trio at the receptor, the anti-PD-L1 trio at the ligand — restores the response against the tumor.</text>
        <text x="52" y="848" fontSize="3.6" fontWeight="700" className="fill-foreground">But a brake released is released everywhere: the same checkpoints restrain T cells in normal tissues, so gut, thyroid, lung, and skin pay the price — the immune-related adverse events (colitis, thyroiditis, pneumonitis, dermatitis) that shadow the whole class.</text>
        <text x="52" y="868" fontSize="3.4" className="fill-muted-foreground">The previous page's hallmark — "tumor cells upregulate immune checkpoint molecules, which inhibit immune response" — is exactly this page's target list; the tumor's escape mechanism becomes the drug's mechanism, inverted.</text>
      </g>
      {/* footer */}
      <g>
        <rect x="24" y="928" width="1054" height="48" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="944" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 240 / book 218 (Pathology — Neoplasia: Immune checkpoint interactions; Cancer epidemiology)</text>
        <text x="42" y="958" fontSize="5" className="fill-muted-foreground">Census (pdfimages + VLM): ZERO raster images — pure text plus ONE vector line-art checkpoint figure, redrawn here as an ORIGINAL KYP figure with original glyphs. The figure labels interleave in the text layer (the M39 pattern).</text>
        <text x="42" y="970" fontSize="5" className="fill-muted-foreground">The epidemiology table is carried verbatim in the note's table blocks. No margin mnemonics (VLM confirmed); the KYP memory layer is original.</text>
      </g>
    </svg>
  );
}
