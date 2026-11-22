"use client";

// Original KYP visuals — DNA replication, repair, mutations (First Aid 2026,
// Part 1 pdf 58–60 / book 36–38). All SVGs use theme tokens (currentColor +
// Tailwind color classes), so they stay readable in light AND dark mode.

// ---------------------------------------------------------------------------
// Replication fork machinery
// ---------------------------------------------------------------------------

function EnzymeDot({ cx, cy, r = 13, label }: { cx: number; cy: number; r?: number; label: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
      <text x={cx} y={cy + 3} textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">{label}</text>
    </g>
  );
}

export function ReplicationForkMachinery() {
  const w = 940;
  const h = 690;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="DNA replication fork machinery with leading and lagging strand synthesis" className="min-w-[900px]">
      {/* ============================ MAIN FORK ============================ */}
      {/* intact duplex (right of fork) */}
      <g>
        <line x1="620" y1="150" x2="930" y2="150" strokeWidth="2.2" className="stroke-neural" />
        <line x1="620" y1="290" x2="930" y2="290" strokeWidth="2.2" className="stroke-neural" />
        {Array.from({ length: 17 }).map((_, i) => (
          <line key={i} x1={630 + i * 18} y1="152" x2={630 + i * 18} y2="288" strokeWidth="1" className="stroke-muted-foreground/60" />
        ))}
        <text x="775" y="138" textAnchor="middle" fontSize="9.5" className="fill-muted-foreground">intact parental duplex (supercoils build ahead of the fork)</text>

        {/* supercoil squiggle ahead of fork */}
        <path d="M 648 220 C 656 204, 672 204, 678 220 C 684 236, 700 236, 706 220" fill="none" strokeWidth="1.6" className="stroke-warning" />

        {/* topoisomerase on the duplex */}
        <EnzymeDot cx={758} cy={220} r={17} label="TOP" />
        <text x="758" y="252" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-brand">Topoisomerase</text>
        <text x="758" y="265" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">cuts 1 strand (TOP I) or both (TOP II)</text>
        <text x="758" y="277" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">to add or remove supercoils</text>
      </g>

      {/* fork movement arrow */}
      <g>
        <line x1="640" y1="96" x2="760" y2="96" strokeWidth="2.4" className="stroke-warning" />
        <path d="M772 96 l-12 -6 v12 z" className="fill-warning" />
        <text x="706" y="86" textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-warning">FORK MOVEMENT</text>
      </g>

      {/* separated template strands (left of fork) */}
      <line x1="120" y1="150" x2="620" y2="150" strokeWidth="2.2" className="stroke-neural" />
      <line x1="120" y1="290" x2="620" y2="290" strokeWidth="2.2" className="stroke-neural" />

      {/* helicase at the fork */}
      <g>
        <polygon points="606,200 626,184 648,190 656,212 644,234 618,236 604,222"
          className="fill-emergency-soft stroke-emergency" strokeWidth="1.6" />
        <text x="628" y="216" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-emergency">Helicase</text>
        <text x="720" y="306" textAnchor="middle" fontSize="9" fontWeight="700" className="fill-emergency">Helicase — unwinds the template</text>
        <text x="720" y="320" textAnchor="middle" fontSize="8.5" fontStyle="italic" className="fill-muted-foreground">(BLM deficiency → Bloom syndrome)</text>
      </g>

      {/* SSBP on both templates near the fork */}
      {[446, 476, 506, 536, 566, 596].map((x) => (
        <circle key={`t${x}`} cx={x} cy="140" r="6" className="fill-secondary stroke-neural/70" strokeWidth="1" />
      ))}
      {[456, 486, 516, 546, 576].map((x) => (
        <circle key={`b${x}`} cx={x} cy="300" r="6" className="fill-secondary stroke-neural/70" strokeWidth="1" />
      ))}
      <text x="520" y="112" textAnchor="middle" fontSize="9" fontWeight="700" className="fill-foreground/80">Single-stranded binding proteins</text>
      <text x="490" y="318" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">prevent reannealing + nuclease degradation</text>

      {/* LEADING STRAND (top): new DNA under the top template, growing right */}
      <g>
        <line x1="140" y1="172" x2="588" y2="172" strokeWidth="3" className="stroke-brand" />
        <path d="M600 172 l-11 -5.5 v11 z" className="fill-brand" />
        <EnzymeDot cx={512} cy={172} r={19} label="III" />
        <text x="438" y="205" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-brand">DNA pol III</text>
        <text x="340" y="160" fontSize="10.5" fontWeight="800" className="fill-brand">LEADING STRAND — continuous</text>
        <text x="340" y="132" fontSize="9" className="fill-muted-foreground">one primer at the origin · synthesis runs WITH the fork · 5′→3′ + proofreading (3′→5′ exonuclease)</text>
        {/* 5'/3' labels */}
        <text x="128" y="176" textAnchor="end" fontSize="10" fontWeight="800" className="fill-foreground">5′</text>
        <text x="128" y="146" textAnchor="end" fontSize="10" fontWeight="800" className="fill-foreground">3′</text>
        <text x="608" y="146" fontSize="10" fontWeight="800" className="fill-foreground">5′</text>
        <text x="608" y="176" fontSize="10" fontWeight="800" className="fill-foreground">3′</text>
      </g>

      {/* LAGGING STRAND (bottom): Okazaki fragments above the bottom template */}
      <g>
        {/* sealed continuous part (oldest) */}
        <line x1="140" y1="268" x2="212" y2="268" strokeWidth="3" className="stroke-brand" />
        <text x="176" y="256" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-muted-foreground">sealed</text>

        {/* ligase at the nick */}
        <EnzymeDot cx={222} cy={268} r={13} label="LIG" />
        <text x="222" y="296" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-brand">DNA ligase</text>
        <text x="222" y="308" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">seals the nick — phosphodiester</text>
        <text x="222" y="319" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">bond between Okazaki fragments</text>

        {/* Okazaki fragment 1 (older): DNA + RNA primer being replaced */}
        <line x1="236" y1="268" x2="348" y2="268" strokeWidth="3" className="stroke-brand" />
        <line x1="352" y1="268" x2="384" y2="268" strokeWidth="3" strokeDasharray="5 3" className="stroke-emergency" />
        <EnzymeDot cx={368} cy={244} r={16} label="I" />
        <text x="368" y="222" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-brand">DNA pol I</text>
        <text x="368" y="210" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">5′→3′ exonuclease degrades the</text>
        <text x="368" y="199" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">RNA primer, replaces it with DNA</text>

        {/* gap between fragments */}
        <text x="420" y="262" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-muted-foreground">next nick →</text>

        {/* Okazaki fragment 2 (newest): primer at its 5′ end, extended leftward */}
        <line x1="424" y1="268" x2="560" y2="268" strokeWidth="3" className="stroke-brand" />
        <path d="M414 268 l11 -5.5 v11 z" className="fill-brand" />
        <line x1="564" y1="268" x2="596" y2="268" strokeWidth="3" strokeDasharray="5 3" className="stroke-emergency" />
        <EnzymeDot cx={488} cy={268} r={19} label="III" />
        <EnzymeDot cx={560} cy={234} r={13} label="PRIM" />
        <text x="560" y="210" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-brand">Primase</text>
        <text x="560" y="196" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">lays the RNA primer</text>
        <text x="480" y="304" textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-warning">LAGGING STRAND — Okazaki fragments</text>
        <text x="440" y="330" textAnchor="middle" fontSize="9" className="fill-muted-foreground">each fragment synthesized AWAY from the fork (still 5′→3′)</text>
        {/* 5'/3' labels */}
        <text x="128" y="272" textAnchor="end" fontSize="10" fontWeight="800" className="fill-foreground">5′</text>
        <text x="128" y="294" textAnchor="end" fontSize="10" fontWeight="800" className="fill-foreground">3′</text>
        <text x="604" y="294" fontSize="10" fontWeight="800" className="fill-foreground">3′</text>
        <text x="568" y="258" fontSize="9" fontWeight="800" className="fill-emergency">5′</text>
        <text x="352" y="256" fontSize="9" fontWeight="800" className="fill-emergency">5′</text>
      </g>

      {/* origin of replication (far left) */}
      <g>
        <rect x="26" y="138" width="86" height="164" rx="10" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="69" y="166" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-foreground">Origin of</text>
        <text x="69" y="179" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-foreground">replication</text>
        <text x="69" y="197" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">AT-rich consensus</text>
        <text x="69" y="209" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">(like TATA boxes)</text>
        <text x="69" y="231" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">prokaryotes: single</text>
        <text x="69" y="243" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">eukaryotes: multiple</text>
        <text x="69" y="272" textAnchor="middle" fontSize="8" fontStyle="italic" className="fill-muted-foreground">replication is</text>
        <text x="69" y="284" textAnchor="middle" fontSize="8" fontStyle="italic" className="fill-muted-foreground">semiconservative</text>
      </g>

      {/* RNA primer legend */}
      <g>
        <line x1="660" y1="344" x2="690" y2="344" strokeWidth="3" strokeDasharray="5 3" className="stroke-emergency" />
        <text x="698" y="348" fontSize="9" className="fill-muted-foreground">RNA primer → removed by pol I → sealed by ligase</text>
      </g>

      {/* ==================== DIRECTIONALITY CLOSE-UP ==================== */}
      <g>
        <rect x="20" y="372" width="544" height="296" rx="12" className="fill-card stroke-neural/50" strokeWidth="1.4" />
        <text x="40" y="398" fontSize="11.5" fontWeight="800" className="fill-neural">DIRECTIONALITY CLOSE-UP — why one strand must lag</text>
        <text x="40" y="416" fontSize="9.5" className="fill-muted-foreground">DNA polymerase only adds deoxynucleotides to a free 3′-OH end — every strand is built 5′→3′ (“5ynth3sis”)</text>

        {/* leading mini-diagram */}
        <g>
          <text x="52" y="448" fontSize="9.5" fontWeight="800" className="fill-brand">LEADING</text>
          <line x1="120" y1="444" x2="300" y2="444" strokeWidth="1.8" className="stroke-neural" />
          <text x="112" y="448" textAnchor="end" fontSize="9" fontWeight="800" className="fill-foreground">3′</text>
          <text x="308" y="448" fontSize="9" fontWeight="800" className="fill-foreground">5′</text>
          <text x="308" y="436" textAnchor="end" fontSize="8.5" className="fill-muted-foreground">template reads 3′→5′ toward the fork</text>
          <line x1="120" y1="462" x2="290" y2="462" strokeWidth="2.6" className="stroke-brand" />
          <path d="M302 462 l-11 -5 v10 z" className="fill-brand" />
          <text x="112" y="466" textAnchor="end" fontSize="9" fontWeight="800" className="fill-foreground">5′</text>
          <text x="310" y="466" fontSize="9" fontWeight="800" className="fill-foreground">3′→</text>
          <text x="150" y="484" fontSize="9" className="fill-foreground/85">new strand grows WITH the fork — one continuous polymer</text>
        </g>

        {/* lagging mini-diagram */}
        <g>
          <text x="52" y="524" fontSize="9.5" fontWeight="800" className="fill-warning">LAGGING</text>
          <line x1="120" y1="520" x2="300" y2="520" strokeWidth="1.8" className="stroke-neural" />
          <text x="112" y="524" textAnchor="end" fontSize="9" fontWeight="800" className="fill-foreground">5′</text>
          <text x="308" y="524" fontSize="9" fontWeight="800" className="fill-foreground">3′</text>
          <text x="308" y="512" textAnchor="end" fontSize="8.5" className="fill-muted-foreground">template reads 5′→3′ toward the fork</text>
          <line x1="140" y1="538" x2="210" y2="538" strokeWidth="2.6" className="stroke-warning" />
          <line x1="216" y1="538" x2="232" y2="538" strokeWidth="2.6" strokeDasharray="4 2.5" className="stroke-emergency" />
          <path d="M132 538 l11 -5 v10 z" className="fill-warning" />
          <line x1="258" y1="538" x2="328" y2="538" strokeWidth="2.6" className="stroke-warning" />
          <line x1="334" y1="538" x2="350" y2="538" strokeWidth="2.6" strokeDasharray="4 2.5" className="stroke-emergency" />
          <path d="M250 538 l11 -5 v10 z" className="fill-warning" />
          <text x="150" y="560" fontSize="9" className="fill-foreground/85">new strand must grow AWAY from the fork — short Okazaki fragments,</text>
          <text x="150" y="573" fontSize="9" className="fill-foreground/85">each from its own RNA primer (dashed), ligated together afterward</text>
        </g>

        <rect x="40" y="598" width="504" height="50" rx="10" className="fill-brand-soft/50 stroke-brand/40" strokeWidth="1" />
        <text x="292" y="619" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-brand">Antiparallel templates + one-way polymerase = one continuous strand, one lagging strand</text>
        <text x="292" y="636" textAnchor="middle" fontSize="9" className="fill-muted-foreground">Drugs with a modified 3′ OH block addition of the next nucleotide — “chain termination”</text>
      </g>

      {/* ======================= CLINICAL LOCKS ======================= */}
      <g>
        <rect x="584" y="372" width="336" height="296" rx="12" className="fill-card stroke-emergency/40" strokeWidth="1.4" />
        <text x="604" y="398" fontSize="11.5" fontWeight="800" className="fill-emergency">TARGETS &amp; CLINICAL LOCKS</text>
        <g fontSize="9.5">
          <text x="604" y="426" fontWeight="700" className="fill-foreground">Topoisomerases</text>
          <text x="604" y="441" className="fill-muted-foreground">Euk: irinotecan/topotecan → TOP I (“teCOne”)</text>
          <text x="604" y="455" className="fill-muted-foreground">Euk: etoposide/teniposide → TOP II (“boThside”)</text>
          <text x="604" y="469" className="fill-muted-foreground">Prok: fluoroquinolones → TOP II (DNA gyrase) + TOP IV</text>

          <text x="604" y="501" fontWeight="700" className="fill-foreground">Helicase</text>
          <text x="604" y="516" className="fill-muted-foreground">BLM mutation → Bloom syndrome</text>

          <text x="604" y="548" fontWeight="700" className="fill-foreground">Telomerase (eukaryotes only)</text>
          <text x="604" y="563" className="fill-muted-foreground">Reverse transcriptase (RNA-dependent DNA pol)</text>
          <text x="604" y="577" className="fill-muted-foreground">Adds TTAGGG to the 3′ ends of chromosomes</text>
          <text x="604" y="591" className="fill-muted-foreground">↑ progenitor cells &amp; many cancers</text>
          <text x="604" y="605" className="fill-muted-foreground">↓ aging &amp; progeria</text>

          <rect x="604" y="622" width="296" height="34" rx="8" className="fill-emergency-soft/60" />
          <text x="752" y="637" textAnchor="middle" fontSize="9" fontWeight="700" className="fill-emergency">“Telomerase TAGs for Greatness and Glory”</text>
          <text x="752" y="650" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">(TTAGGG repeat)</text>
        </g>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// DNA repair pathways composite — DSB (NHEJ vs HR), NER, BER, MMR
// ---------------------------------------------------------------------------

function DsbDuplex({ x, y, broken, tone }: { x: number; y: number; broken?: "left" | "right" | "both" | false; tone: "neutral" | "template" }) {
  const cls = tone === "template" ? "stroke-neural/60" : "stroke-foreground/70";
  const gap = broken === "both" || broken === "left" ? 14 : 0;
  return (
    <g>
      <line x1={x} y1={y} x2={broken === "left" || broken === "both" ? x + 54 : x + 124} y2={y} strokeWidth="2" className={cls} />
      {broken === "left" || broken === "both" ? (
        <line x1={x + 54 + gap} y1={y} x2={x + 124} y2={y} strokeWidth="2" className={cls} />
      ) : null}
      <line x1={x} y1={y + 16} x2={broken === "right" || broken === "both" ? x + 70 : x + 124} y2={y + 16} strokeWidth="2" className={cls} />
      {broken === "right" || broken === "both" ? (
        <line x1={x + 70 + gap} y1={y + 16} x2={x + 124} y2={y + 16} strokeWidth="2" className={cls} />
      ) : null}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1={x + 10 + i * 20} y1={y + 2} x2={x + 10 + i * 20} y2={y + 14} strokeWidth="0.9" className="stroke-muted-foreground/50" />
      ))}
    </g>
  );
}

export function DnaRepairPathways() {
  const w = 940;
  const h = 760;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="DNA repair pathways: nonhomologous end joining, homologous recombination, nucleotide excision repair, base excision repair, and mismatch repair" className="min-w-[900px]">
      {/* ============ TOP BAND: DOUBLE-STRAND BREAKS ============ */}
      <rect x="20" y="18" width="900" height="30" rx="15" className="fill-emergency-soft stroke-emergency/40" strokeWidth="1.2" />
      <text x="470" y="38" textAnchor="middle" fontSize="11.5" fontWeight="800" className="fill-emergency">DOUBLE-STRAND BREAKS — both strands cut</text>

      {/* NHEJ panel */}
      <g>
        <rect x="20" y="60" width="440" height="200" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="40" y="86" fontSize="11" fontWeight="800" className="fill-foreground">Nonhomologous end joining (NHEJ)</text>
        <DsbDuplex x={40} y={106} broken="both" tone="neutral" />
        <text x="102" y="142" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">broken ends</text>
        <g stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" fill="currentColor">
          <line x1="168" y1="114" x2="196" y2="114" />
          <path d="M204 114 l-8 -4 v8 z" stroke="none" />
        </g>
        <DsbDuplex x={216} y={106} broken={false} tone="neutral" />
        <circle cx="278" cy="98" r="12" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
        <text x="278" y="101" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-brand">LIG</text>
        <text x="278" y="142" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">ends ligated together</text>
        {/* lost nucleotides marker */}
        <rect x="216" y="104" width="20" height="18" fill="none" strokeDasharray="3 2" strokeWidth="1.2" className="stroke-emergency" />
        <text x="244" y="164" fontSize="9" fontWeight="700" className="fill-emergency">✕ bases may be lost or translocated</text>
        <text x="40" y="196" fontSize="9.5" className="fill-muted-foreground">Homology NOT required · fast but error-prone</text>
        <rect x="40" y="212" width="400" height="30" rx="8" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x="240" y="231" textAnchor="middle" fontSize="9.5" fontWeight="700" className="fill-foreground">“Homology not required — part of the DNA may be lost or translocated”</text>
      </g>

      {/* HR panel */}
      <g>
        <rect x="480" y="60" width="440" height="200" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="500" y="86" fontSize="11" fontWeight="800" className="fill-foreground">Homologous recombination (HR)</text>
        {/* damaged duplex on top */}
        <DsbDuplex x={500} y={102} broken="both" tone="neutral" />
        <text x="562" y="94" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">damaged duplex</text>
        {/* intact sister chromatid below */}
        <g>
          <DsbDuplex x={500} y={170} broken={false} tone="template" />
          <text x="562" y="204" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-neural">intact homologous dsDNA (sister chromatid)</text>
        </g>
        {/* strand invasion arrow */}
        <g stroke="currentColor" strokeWidth="1.6" className="text-brand" fill="currentColor">
          <path d="M 560 128 C 548 144, 546 152, 552 162" fill="none" />
          <path d="M552 162 l-1.5 -6.5 l6 2 z" stroke="none" />
        </g>
        <text x="588" y="150" fontSize="8.5" className="fill-brand" fontWeight="700">3′ strand invades &amp; copies the template</text>
        {/* restored duplex */}
        <DsbDuplex x={640} y={128} broken={false} tone="neutral" />
        <text x="702" y="164" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-brand">restored accurately — no nucleotide loss</text>
        <text x="500" y="228" fontSize="9.5" className="fill-muted-foreground">Requires 2 homologous DNA duplexes</text>
        <rect x="700" y="216" width="204" height="30" rx="8" className="fill-emergency-soft/70" />
        <text x="802" y="235" textAnchor="middle" fontSize="9" fontWeight="700" className="fill-emergency">Defective: BRCA1/2 · Fanconi anemia</text>
      </g>

      {/* ============ LANE SCAFFOLD ============ */}
      {/* NER lane */}
      <g>
        <rect x="20" y="280" width="900" height="140" rx="12" className="fill-card stroke-border" strokeWidth="1.2" />
        <rect x="32" y="296" width="150" height="108" rx="10" className="fill-warning-soft/60 stroke-warning/50" strokeWidth="1.2" />
        <text x="107" y="316" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-warning">NUCLEOTIDE</text>
        <text x="107" y="330" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-warning">EXCISION REPAIR</text>
        <text x="107" y="348" textAnchor="middle" fontSize="8.5" className="fill-foreground/80">bulky, helix-distorting</text>
        <text x="107" y="361" textAnchor="middle" fontSize="8.5" className="fill-foreground/80">lesions</text>
        <text x="107" y="380" textAnchor="middle" fontSize="9" fontWeight="700" className="fill-foreground">UV → T=T dimer</text>
        <text x="107" y="393" textAnchor="middle" fontSize="8" fontStyle="italic" className="fill-muted-foreground">(pyrimidine dimer)</text>

        {/* NER steps */}
        <g fontSize="9">
          <rect x="200" y="306" width="130" height="52" rx="9" className="fill-secondary stroke-border" strokeWidth="1" />
          <text x="265" y="326" textAnchor="middle" fontWeight="700" className="fill-foreground">Specific endonucleases</text>
          <text x="265" y="340" textAnchor="middle" className="fill-muted-foreground">cut out the oligonucleotide</text>
          <text x="265" y="352" textAnchor="middle" className="fill-muted-foreground">containing the damaged bases</text>
          <path d="M336 330 h14 m8 0 l-7 -4 v8 z" stroke="currentColor" strokeWidth="1.3" className="text-muted-foreground" fill="currentColor" />
          <rect x="366" y="306" width="120" height="52" rx="9" className="fill-secondary stroke-border" strokeWidth="1" />
          <text x="426" y="326" textAnchor="middle" fontWeight="700" className="fill-foreground">DNA polymerase</text>
          <text x="426" y="340" textAnchor="middle" className="fill-muted-foreground">fills the gap</text>
          <path d="M494 330 h14 m8 0 l-7 -4 v8 z" stroke="currentColor" strokeWidth="1.3" className="text-muted-foreground" fill="currentColor" />
          <rect x="524" y="306" width="100" height="52" rx="9" className="fill-secondary stroke-border" strokeWidth="1" />
          <text x="574" y="326" textAnchor="middle" fontWeight="700" className="fill-foreground">DNA ligase</text>
          <text x="574" y="340" textAnchor="middle" className="fill-muted-foreground">reseals the strand</text>
        </g>
        {/* NER chips */}
        <g>
          <rect x="648" y="300" width="120" height="26" rx="13" className="fill-neural-soft" />
          <text x="708" y="317" textAnchor="middle" fontSize="9" fontWeight="700" className="fill-neural">Occurs in G1 phase</text>
          <rect x="648" y="334" width="258" height="52" rx="10" className="fill-emergency-soft/70 stroke-emergency/40" strokeWidth="1" />
          <text x="662" y="354" fontSize="9.5" fontWeight="800" className="fill-emergency">Defective → xeroderma pigmentosum</text>
          <text x="662" y="369" fontSize="8.5" className="fill-foreground/80">cannot repair UV pyrimidine dimers:</text>
          <text x="662" y="380" fontSize="8.5" className="fill-foreground/80">dry skin · photosensitivity · skin cancer</text>
        </g>
      </g>

      {/* BER lane */}
      <g>
        <rect x="20" y="434" width="900" height="140" rx="12" className="fill-card stroke-border" strokeWidth="1.2" />
        <rect x="32" y="450" width="150" height="108" rx="10" className="fill-brand-soft/60 stroke-brand/50" strokeWidth="1.2" />
        <text x="107" y="470" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-brand">BASE EXCISION</text>
        <text x="107" y="484" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-brand">REPAIR</text>
        <text x="107" y="502" textAnchor="middle" fontSize="8.5" className="fill-foreground/80">small, non-distorting</text>
        <text x="107" y="515" textAnchor="middle" fontSize="8.5" className="fill-foreground/80">base damage</text>
        <text x="107" y="534" textAnchor="middle" fontSize="9" fontWeight="700" className="fill-foreground">deaminated C → U</text>
        <text x="107" y="547" textAnchor="middle" fontSize="8" fontStyle="italic" className="fill-muted-foreground">(also oxidative, alkylation, radiation)</text>

        {/* BER steps — GEL Please */}
        <g fontSize="8.5">
          <rect x="200" y="460" width="106" height="66" rx="9" className="fill-secondary stroke-border" strokeWidth="1" />
          <text x="253" y="480" textAnchor="middle" fontWeight="700" className="fill-foreground">G — Glycosylase</text>
          <text x="253" y="494" textAnchor="middle" className="fill-muted-foreground">removes the altered</text>
          <text x="253" y="506" textAnchor="middle" className="fill-muted-foreground">base → AP site</text>
          <path d="M312 492 h10 m8 0 l-7 -4 v8 z" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" fill="currentColor" />
          <rect x="336" y="460" width="104" height="66" rx="9" className="fill-secondary stroke-border" strokeWidth="1" />
          <text x="388" y="480" textAnchor="middle" fontWeight="700" className="fill-foreground">E — AP-endonuclease</text>
          <text x="388" y="494" textAnchor="middle" className="fill-muted-foreground">cleaves the 5′ side</text>
          <text x="388" y="506" textAnchor="middle" className="fill-muted-foreground">of the AP site</text>
          <path d="M446 492 h10 m8 0 l-7 -4 v8 z" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" fill="currentColor" />
          <rect x="470" y="460" width="96" height="66" rx="9" className="fill-secondary stroke-border" strokeWidth="1" />
          <text x="518" y="480" textAnchor="middle" fontWeight="700" className="fill-foreground">L — AP-lyase</text>
          <text x="518" y="494" textAnchor="middle" className="fill-muted-foreground">cleaves the 3′ side</text>
          <text x="518" y="506" textAnchor="middle" className="fill-muted-foreground">of the backbone</text>
          <path d="M572 492 h10 m8 0 l-7 -4 v8 z" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" fill="currentColor" />
          <rect x="596" y="460" width="120" height="66" rx="9" className="fill-secondary stroke-border" strokeWidth="1" />
          <text x="656" y="480" textAnchor="middle" fontWeight="700" className="fill-foreground">P — DNA pol β fills</text>
          <text x="656" y="494" textAnchor="middle" fontWeight="700" className="fill-foreground">L — Ligase seals</text>
          <text x="656" y="510" textAnchor="middle" fontStyle="italic" className="fill-muted-foreground">“GEL, PLease”</text>
        </g>
        {/* BER chips */}
        <g>
          <rect x="736" y="462" width="170" height="26" rx="13" className="fill-neural-soft" />
          <text x="821" y="479" textAnchor="middle" fontSize="9" fontWeight="700" className="fill-neural">Throughout the cell cycle</text>
          <rect x="736" y="496" width="170" height="42" rx="10" className="fill-secondary stroke-border" strokeWidth="1" />
          <text x="821" y="514" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">handles deamination, oxidative</text>
          <text x="821" y="526" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">stress, radiation, alkylators,</text>
          <text x="821" y="536" textAnchor="middle" fontSize="8.5" className="fill-muted-foreground">replication errors</text>
        </g>
      </g>

      {/* MMR lane */}
      <g>
        <rect x="20" y="588" width="900" height="140" rx="12" className="fill-card stroke-border" strokeWidth="1.2" />
        <rect x="32" y="604" width="150" height="108" rx="10" className="fill-neural-soft/60 stroke-neural/50" strokeWidth="1.2" />
        <text x="107" y="624" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-neural">MISMATCH REPAIR</text>
        <text x="107" y="642" textAnchor="middle" fontSize="8.5" className="fill-foreground/80">replication mismatch in</text>
        <text x="107" y="655" textAnchor="middle" fontSize="8.5" className="fill-foreground/80">the NEW strand</text>
        {/* mismatched pair graphic */}
        <g>
          <rect x="76" y="668" width="28" height="14" rx="3" className="fill-card stroke-foreground" strokeWidth="1" />
          <rect x="110" y="668" width="28" height="14" rx="3" className="fill-card stroke-emergency" strokeWidth="1.4" />
          <text x="90" y="678" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-foreground">C</text>
          <text x="124" y="678" textAnchor="middle" fontSize="8.5" fontWeight="700" className="fill-emergency">T</text>
          <text x="107" y="700" textAnchor="middle" fontSize="8" fontStyle="italic" className="fill-muted-foreground">wrong pairing</text>
        </g>

        {/* MMR steps */}
        <g fontSize="9">
          <rect x="200" y="614" width="150" height="52" rx="9" className="fill-secondary stroke-border" strokeWidth="1" />
          <text x="275" y="634" textAnchor="middle" fontWeight="700" className="fill-foreground">Mismatched nucleotides</text>
          <text x="275" y="648" textAnchor="middle" className="fill-muted-foreground">removed from the new strand</text>
          <path d="M356 638 h14 m8 0 l-7 -4 v8 z" stroke="currentColor" strokeWidth="1.3" className="text-muted-foreground" fill="currentColor" />
          <rect x="386" y="614" width="140" height="52" rx="9" className="fill-secondary stroke-border" strokeWidth="1" />
          <text x="456" y="634" textAnchor="middle" fontWeight="700" className="fill-foreground">Gap filled + resealed</text>
          <text x="456" y="648" textAnchor="middle" className="fill-muted-foreground">by polymerase + ligase</text>
        </g>
        {/* MMR chips */}
        <g>
          <rect x="556" y="610" width="130" height="26" rx="13" className="fill-neural-soft" />
          <text x="621" y="627" textAnchor="middle" fontSize="9" fontWeight="700" className="fill-neural">Predominantly S phase</text>
          <rect x="556" y="644" width="350" height="52" rx="10" className="fill-emergency-soft/70 stroke-emergency/40" strokeWidth="1" />
          <text x="570" y="664" fontSize="9.5" fontWeight="800" className="fill-emergency">Defective → Lynch syndrome (HNPCC)</text>
          <text x="570" y="679" fontSize="8.5" className="fill-foreground/80">hereditary nonpolyposis colorectal cancer</text>
        </g>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Mutation types panel — FA mutation table redrawn as an original KYP grid
// ---------------------------------------------------------------------------

function BaseCell({ x, y, base, changed }: { x: number; y: number; base: string; changed?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width="24" height="26" rx="5"
        className={changed ? "fill-emergency-soft stroke-emergency" : "fill-card stroke-border"} strokeWidth="1.3" />
      <text x={x + 12} y={y + 18} textAnchor="middle" fontSize="12" fontWeight="800"
        className={changed ? "fill-emergency" : "fill-foreground"}>{base}</text>
    </g>
  );
}

export function MutationTypesPanel() {
  const w = 940;
  const h = 560;
  // column left-edge x positions for the six mutation columns
  const cx = [186, 320, 454, 588, 722, 856];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Mutation types comparison: silent, missense, nonsense, frameshift insertion and deletion with DNA, mRNA and amino acid consequences" className="min-w-[900px]">
      {/* header row */}
      <g fontSize="10" fontWeight="800">
        {[
          { t: "Original sequence", x: cx[0] },
          { t: "Silent", x: cx[1] },
          { t: "Missense", x: cx[2] },
          { t: "Nonsense", x: cx[3] },
          { t: "Frameshift insertion", x: cx[4] },
          { t: "Frameshift deletion", x: cx[5] },
        ].map((c, i) => (
          <text key={c.t} x={c.x + 36} y="46" textAnchor="middle" className={i === 0 ? "fill-muted-foreground" : i >= 2 ? "fill-foreground" : "fill-muted-foreground"}>
            {c.t}
          </text>
        ))}
      </g>

      {/* Coding DNA row */}
      <text x="150" y="104" textAnchor="end" fontSize="10" fontWeight="800" className="fill-foreground">Coding DNA</text>
      <text x="150" y="88" textAnchor="end" fontSize="9" className="fill-muted-foreground">5′ → 3′</text>
      {/* Original: G A G */}
      <BaseCell x={cx[0]} y={88} base="G" />
      <BaseCell x={cx[0] + 26} y={88} base="A" />
      <BaseCell x={cx[0] + 52} y={88} base="G" />
      {/* Silent: G A A (3rd changed) */}
      <BaseCell x={cx[1]} y={88} base="G" />
      <BaseCell x={cx[1] + 26} y={88} base="A" />
      <BaseCell x={cx[1] + 52} y={88} base="A" changed />
      {/* Missense: G T G (2nd changed) */}
      <BaseCell x={cx[2]} y={88} base="G" />
      <BaseCell x={cx[2] + 26} y={88} base="T" changed />
      <BaseCell x={cx[2] + 52} y={88} base="G" />
      {/* Nonsense: T A G (1st+2nd changed) */}
      <BaseCell x={cx[3]} y={88} base="T" changed />
      <BaseCell x={cx[3] + 26} y={88} base="A" changed />
      <BaseCell x={cx[3] + 52} y={88} base="G" />
      {/* Frameshift insertion: G A + inserted T (above, red) + displaced G */}
      <BaseCell x={cx[4]} y={88} base="G" />
      <BaseCell x={cx[4] + 26} y={88} base="A" />
      <g>
        <text x={cx[4] + 52} y="76" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-emergency">T</text>
        <path d={`M ${cx[4] + 52} 80 l0 8 m-3.5 -3.5 l3.5 3.5 l3.5 -3.5`} stroke="currentColor" strokeWidth="1.4" className="text-emergency" fill="none" />
        <text x={cx[4] + 52} y="60" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-emergency">inserted</text>
      </g>
      <BaseCell x={cx[4] + 62} y={88} base="G" />
      {/* Frameshift deletion: G A + deleted G (above, struck) + slid-in C */}
      <BaseCell x={cx[5]} y={88} base="G" />
      <BaseCell x={cx[5] + 26} y={88} base="A" />
      <g>
        <text x={cx[5] + 52} y="76" textAnchor="middle" fontSize="12" fontWeight="800" className="fill-muted-foreground">G</text>
        <line x1={cx[5] + 44} y1="72" x2={cx[5] + 60} y2="72" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d={`M ${cx[5] + 52} 80 l0 4 m-3.5 -1.5 l3.5 4 l3.5 -4`} stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground" fill="none" />
        <text x={cx[5] + 52} y="60" textAnchor="middle" fontSize="8" fontWeight="700" className="fill-muted-foreground">deleted</text>
      </g>
      <BaseCell x={cx[5] + 62} y={88} base="C" changed />

      {/* mRNA row */}
      <text x="150" y="172" textAnchor="end" fontSize="10" fontWeight="800" className="fill-foreground">mRNA codon</text>
      <text x="150" y="156" textAnchor="end" fontSize="9" className="fill-muted-foreground">5′ → 3′</text>
      <g fontSize="11.5" fontWeight="700">
        {[
          { x: cx[0], seq: ["G", "A", "G"], changed: [false, false, false] },
          { x: cx[1], seq: ["G", "A", "A"], changed: [false, false, true] },
          { x: cx[2], seq: ["G", "U", "G"], changed: [false, true, false] },
          { x: cx[3], seq: ["U", "A", "G"], changed: [true, true, false] },
          { x: cx[4], seq: ["G", "A", "U"], changed: [false, false, true] },
          { x: cx[5], seq: ["G", "A", "C"], changed: [false, false, true] },
        ].map((c, i) => (
          <g key={i}>
            {c.seq.map((b, j) => (
              <text key={j} x={c.x + j * 26 + 12} y="170" textAnchor="middle"
                className={c.changed[j] ? "fill-emergency" : "fill-foreground/85"}>{b}</text>
            ))}
          </g>
        ))}
      </g>

      {/* amino acid row */}
      <text x="150" y="230" textAnchor="end" fontSize="10" fontWeight="800" className="fill-foreground">Amino acid</text>
      <g fontSize="12" fontWeight="800">
        <text x={cx[0] + 36} y="228" textAnchor="middle" className="fill-foreground/85">Glu</text>
        <text x={cx[1] + 36} y="228" textAnchor="middle" className="fill-foreground/85">Glu</text>
        <text x={cx[2] + 36} y="228" textAnchor="middle" className="fill-emergency">Val</text>
        <text x={cx[3] + 36} y="228" textAnchor="middle" className="fill-emergency">Stop</text>
        <text x={cx[4] + 36} y="228" textAnchor="middle" className="fill-emergency">Asp</text>
        <text x={cx[5] + 36} y="228" textAnchor="middle" className="fill-emergency">Asp</text>
      </g>
      {/* altered amino acids bracket */}
      <g>
        <path d={`M ${cx[2] - 26} 244 h${(cx[5] + 98) - (cx[2] - 26)} v10 h-${(cx[5] + 98) - (cx[2] - 26)} z`}
          fill="none" strokeWidth="1.6" className="stroke-emergency/70" />
        <text x={(cx[2] + cx[5]) / 2 + 36} y="272" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-emergency">Altered amino acids</text>
      </g>
      {/* same-acid note for silent */}
      <text x={cx[1] + 36} y="196" textAnchor="middle" fontSize="8.5" fontStyle="italic" className="fill-muted-foreground">same amino acid — 3rd-position wobble</text>
      {/* downstream frame note for frameshifts */}
      <text x={(cx[4] + cx[5]) / 2 + 36} y="196" textAnchor="middle" fontSize="8.5" fontStyle="italic" className="fill-muted-foreground">reading frame shifts downstream →</text>

      {/* substitution types panel */}
      <g>
        <rect x="20" y="300" width="440" height="128" rx="12" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="40" y="326" fontSize="11" fontWeight="800" className="fill-foreground">Single-nucleotide (point) substitutions</text>
        <rect x="40" y="340" width="196" height="72" rx="9" className="fill-brand-soft/50 stroke-brand/40" strokeWidth="1" />
        <text x="52" y="360" fontSize="10" fontWeight="800" className="fill-brand">Transition</text>
        <text x="52" y="376" fontSize="8.5" className="fill-foreground/85">purine → purine, or</text>
        <text x="52" y="388" fontSize="8.5" className="fill-foreground/85">pyrimidine → pyrimidine</text>
        <text x="52" y="404" fontSize="8.5" fontWeight="700" className="fill-foreground">eg, A → G · C → T</text>
        <rect x="246" y="340" width="196" height="72" rx="9" className="fill-neural-soft/50 stroke-neural/40" strokeWidth="1" />
        <text x="258" y="360" fontSize="10" fontWeight="800" className="fill-neural">Transversion</text>
        <text x="258" y="376" fontSize="8.5" className="fill-foreground/85">purine ↔ pyrimidine</text>
        <text x="258" y="388" fontSize="8.5" className="fill-foreground/85">(the rings switch class)</text>
        <text x="258" y="404" fontSize="8.5" fontWeight="700" className="fill-foreground">eg, A → T · C → G</text>
      </g>

      {/* degree-of-change ladder */}
      <g>
        <rect x="480" y="300" width="440" height="128" rx="12" className="fill-card stroke-border" strokeWidth="1.2" />
        <text x="500" y="326" fontSize="11" fontWeight="800" className="fill-foreground">Degree of change</text>
        <text x="860" y="326" textAnchor="end" fontSize="9" fontStyle="italic" className="fill-muted-foreground">silent &lt;&lt; missense &lt; nonsense &lt; frameshift</text>
        {[
          { label: "Silent", pct: 18, tone: "fill-brand-soft stroke-brand/60" },
          { label: "Missense", pct: 42, tone: "fill-warning-soft stroke-warning/60" },
          { label: "Nonsense", pct: 68, tone: "fill-emergency-soft stroke-emergency/60" },
          { label: "Frameshift", pct: 100, tone: "fill-emergency/70 stroke-emergency" },
        ].map((s, i) => (
          <g key={s.label}>
            <rect x={500 + i * 104} y={366} width="94" height="16" rx="8" className={s.tone} strokeWidth="1" />
            <text x={547 + i * 104} y="394" textAnchor="middle" fontSize="9" fontWeight="700" className="fill-foreground">{s.label}</text>
            <rect x={500 + i * 104} y={360} width="94" height={Math.round(s.pct * 0.3)} rx="4" className="fill-foreground/10" />
          </g>
        ))}
        <path d="M 500 410 h 400" stroke="currentColor" strokeWidth="1.4" className="text-muted-foreground" strokeDasharray="4 4" />
        <text x="700" y="424" textAnchor="middle" fontSize="9" fontWeight="700" className="fill-muted-foreground">increasing disruption of the protein product →</text>
      </g>

      {/* footer fact chips */}
      <g fontSize="9.5">
        <rect x="20" y="452" width="440" height="42" rx="10" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x="240" y="470" textAnchor="middle" fontWeight="700" className="fill-foreground">Single-nucleotide substitutions are repaired by</text>
        <text x="240" y="484" textAnchor="middle" fontWeight="700" className="fill-foreground">DNA polymerase and DNA ligase</text>
        <rect x="480" y="452" width="440" height="42" rx="10" className="fill-secondary stroke-border" strokeWidth="1" />
        <text x="700" y="470" textAnchor="middle" fontWeight="700" className="fill-foreground">Classic missense: sickle cell disease —</text>
        <text x="700" y="484" textAnchor="middle" fontWeight="700" className="fill-foreground">glutamic acid → valine (GAG → GTG)</text>
      </g>

      {/* splice-site + slipped-strand note strip */}
      <g>
        <rect x="20" y="508" width="900" height="34" rx="10" className="fill-card stroke-border" strokeWidth="1" />
        <text x="470" y="529" textAnchor="middle" fontSize="9.5" className="fill-muted-foreground">
          Also on this page: <tspan fontWeight="700" className="fill-foreground">splice-site mutation</tspan> (retained intron — β-thalassemia, Gaucher, Marfan) · <tspan fontWeight="700" className="fill-foreground">slipped-strand mispairing</tspan> (repeats expand → anticipation, eg, Huntington CAG)
        </text>
      </g>
    </svg>
  );
}

