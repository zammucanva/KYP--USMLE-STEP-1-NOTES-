"use client";

// Original KYP visuals — Laboratory Techniques block (First Aid 2026, Part 1
// pdf 72–75 / book 50–53). All SVGs use theme tokens (currentColor + Tailwind
// classes), so they stay readable in light AND dark mode.

// ---------------------------------------------------------------------------
// PCR — the three-step thermal cycle (denaturation / annealing / elongation)
// Source figure uses NO temperature numbers: "heated" → "cooled" → "temperature
// is increased" → Repeat. KYP redraw preserves the source's own wording.
// ---------------------------------------------------------------------------

export function PcrCycleSteps() {
  const w = 980;
  const h = 540;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Polymerase chain reaction cycle: double-stranded DNA is heated to denature into single strands, cooled so DNA primers anneal to the specific sequence, then temperature is increased so heat-stable DNA polymerase adds dNTPs after each primer; heating and cooling cycles repeat until the amount of DNA is sufficient" className="min-w-[940px]">
      {/* input: double-stranded DNA */}
      <g>
        <rect x="24" y="212" width="180" height="120" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="114" y="238" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-foreground">Double-stranded DNA</text>
        <line x1="48" y1="272" x2="180" y2="272" strokeWidth="5" className="stroke-brand" />
        <line x1="48" y1="292" x2="180" y2="292" strokeWidth="5" className="stroke-neural" />
        <text x="42" y="268" textAnchor="end" fontSize="8" fontWeight="700" className="fill-muted-foreground">5′</text>
        <text x="42" y="300" textAnchor="end" fontSize="8" fontWeight="700" className="fill-muted-foreground">3′</text>
        <text x="186" y="268" fontSize="8" fontWeight="700" className="fill-muted-foreground">3′</text>
        <text x="186" y="300" fontSize="8" fontWeight="700" className="fill-muted-foreground">5′</text>
        <text x="114" y="318" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">the template to amplify</text>
      </g>

      {/* step 1 — denaturation */}
      <g>
        <rect x="240" y="60" width="220" height="200" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <circle cx="266" cy="86" r="12" className="fill-emergency-soft stroke-emergency" strokeWidth="1.4" />
        <text x="266" y="90" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-emergency">1</text>
        <text x="286" y="90" fontSize="10.5" fontWeight="800" className="fill-foreground">Denaturation</text>
        <rect x="258" y="104" width="86" height="20" rx="7" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
        <text x="301" y="118" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">heated</text>
        <line x1="266" y1="150" x2="432" y2="150" strokeWidth="5" className="stroke-brand" />
        <text x="438" y="153" fontSize="8" fontWeight="700" className="fill-muted-foreground">5′</text>
        <line x1="266" y1="212" x2="432" y2="212" strokeWidth="5" className="stroke-neural" />
        <text x="438" y="215" fontSize="8" fontWeight="700" className="fill-muted-foreground">3′</text>
        <path d="M 340 150 C 360 168, 380 168, 400 150" fill="none" strokeWidth="1.2" strokeDasharray="3 3" className="stroke-muted-foreground" />
        <path d="M 340 212 C 360 194, 380 194, 400 212" fill="none" strokeWidth="1.2" strokeDasharray="3 3" className="stroke-muted-foreground" />
        <text x="350" y="184" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-foreground">strands separate</text>
        <text x="258" y="242" fontSize="7.5" className="fill-muted-foreground">DNA template + DNA primers + heat-stable</text>
        <text x="258" y="252" fontSize="7.5" className="fill-muted-foreground">DNA polymerase + dNTPs are heated to</text>
        <text x="258" y="262" fontSize="7.5" className="fill-muted-foreground">separate the DNA strands.</text>
      </g>

      {/* step 2 — annealing */}
      <g>
        <rect x="240" y="288" width="220" height="200" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <circle cx="266" cy="314" r="12" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <text x="266" y="318" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-brand">2</text>
        <text x="286" y="318" fontSize="10.5" fontWeight="800" className="fill-foreground">Annealing</text>
        <rect x="258" y="332" width="86" height="20" rx="7" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
        <text x="301" y="346" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">sample is cooled</text>
        <line x1="266" y1="378" x2="432" y2="378" strokeWidth="5" className="stroke-brand" />
        <text x="438" y="381" fontSize="8" fontWeight="700" className="fill-muted-foreground">3′</text>
        <rect x="300" y="364" width="70" height="12" rx="4" className="fill-neural stroke-neural" strokeWidth="1" />
        <text x="335" y="373.5" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-neural">DNA primer</text>
        <line x1="266" y1="436" x2="432" y2="436" strokeWidth="5" className="stroke-neural" />
        <rect x="300" y="436" width="70" height="12" rx="4" className="fill-neural stroke-neural" strokeWidth="1" />
        <text x="335" y="445" textAnchor="middle" fontSize="7" fontWeight="800" className="fill-neural">DNA primer</text>
        <text x="258" y="470" fontSize="7.5" className="fill-muted-foreground">Primers anneal to the specific sequence</text>
        <text x="258" y="480" fontSize="7.5" className="fill-muted-foreground">to be amplified on the DNA template.</text>
      </g>

      {/* step 3 — elongation */}
      <g>
        <rect x="492" y="160" width="220" height="240" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <circle cx="518" cy="186" r="12" className="fill-warning-soft stroke-warning" strokeWidth="1.4" />
        <text x="518" y="190" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-warning">3</text>
        <text x="538" y="190" fontSize="10.5" fontWeight="800" className="fill-foreground">Elongation</text>
        <rect x="490" y="204" width="120" height="20" rx="7" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
        <text x="550" y="218" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">temperature is increased</text>
        <line x1="518" y1="252" x2="688" y2="252" strokeWidth="5" className="stroke-brand" />
        <rect x="552" y="252" width="62" height="12" rx="4" className="fill-neural stroke-neural" strokeWidth="1" />
        <line x1="552" y1="240" x2="676" y2="240" strokeWidth="5" className="stroke-emergency" strokeDasharray="2 5" />
        <path d="M676 240 l-9 -4.5 v9 z" className="fill-emergency" />
        <text x="700" y="243" fontSize="7.5" fontWeight="800" className="fill-emergency">dNTP</text>
        <line x1="518" y1="330" x2="688" y2="330" strokeWidth="5" className="stroke-neural" />
        <rect x="552" y="318" width="62" height="12" rx="4" className="fill-neural stroke-neural" strokeWidth="1" />
        <line x1="552" y1="342" x2="676" y2="342" strokeWidth="5" className="stroke-emergency" strokeDasharray="2 5" />
        <path d="M676 342 l-9 -4.5 v9 z" className="fill-emergency" />
        <text x="700" y="345" fontSize="7.5" fontWeight="800" className="fill-emergency">dNTP</text>
        <text x="510" y="376" fontSize="7.5" className="fill-muted-foreground">DNA polymerase adds dNTPs to the strand</text>
        <text x="510" y="386" fontSize="7.5" className="fill-muted-foreground">to replicate the sequence after each</text>
        <text x="510" y="396" fontSize="7.5" fontWeight="700" className="fill-foreground">primer — new strand grows 5′→3′.</text>
      </g>

      {/* flow arrows */}
      <path d="M 204 262 C 222 240, 228 190, 240 160" fill="none" strokeWidth="2" className="stroke-muted-foreground" />
      <path d="M240 156 l-10 -2 l4 10 z" className="fill-muted-foreground" />
      <path d="M 240 320 C 226 300, 218 290, 206 276" fill="none" strokeWidth="2" className="stroke-muted-foreground" />
      <path d="M206 272 l4 10 l6 -8 z" className="fill-muted-foreground" />
      <path d="M 460 388 C 478 380, 484 340, 492 320" fill="none" strokeWidth="2" className="stroke-muted-foreground" />
      <path d="M492 314 l-10 1.5 l5 9.5 z" className="fill-muted-foreground" />

      {/* repeat loop */}
      <path d="M 602 400 C 602 470, 500 500, 400 500 C 330 500, 322 496, 300 494" fill="none" strokeWidth="2" strokeDasharray="6 4" className="stroke-brand" />
      <path d="M292 493 l10 -4.5 l-1.5 10.5 z" className="fill-brand" />
      <rect x="380" y="482" width="180" height="34" rx="9" className="fill-card stroke-border" strokeWidth="1.2" />
      <text x="470" y="496" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">REPEAT</text>
      <text x="470" y="508" textAnchor="middle" fontSize="7" className="fill-muted-foreground">heating and cooling cycles continue until</text>
      <text x="470" y="516" textAnchor="middle" fontSize="7" className="fill-muted-foreground">the amount of DNA is sufficient</text>

      {/* diagnostic uses strip */}
      <g>
        <rect x="744" y="60" width="212" height="200" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="760" y="84" fontSize="10" fontWeight="800" className="fill-foreground">Diagnostic tool for</text>
        <rect x="760" y="98" width="180" height="30" rx="8" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
        <text x="850" y="112" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">neonatal HIV</text>
        <text x="850" y="123" textAnchor="middle" fontSize="7" className="fill-muted-foreground">amplify viral nucleic acid before</text>
        <text x="850" y="131" textAnchor="middle" fontSize="7" className="fill-muted-foreground">antibody tests can turn positive</text>
        <rect x="760" y="140" width="180" height="30" rx="8" className="fill-neural-soft stroke-neural" strokeWidth="1.2" />
        <text x="850" y="154" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-neural">herpes encephalitis</text>
        <text x="850" y="165" textAnchor="middle" fontSize="7" className="fill-muted-foreground">CSF viral DNA when culture</text>
        <text x="850" y="173" textAnchor="middle" fontSize="7" className="fill-muted-foreground">is slow or negative</text>
        <text x="760" y="196" fontSize="7.5" className="fill-muted-foreground">Amplifies a desired fragment of DNA —</text>
        <text x="760" y="206" fontSize="7.5" className="fill-muted-foreground">the molecular stethoscope of the</text>
        <text x="760" y="216" fontSize="7.5" className="fill-muted-foreground">infectious-disease workup.</text>
        <text x="760" y="238" fontSize="7.5" fontWeight="700" className="fill-foreground">Ingredients: template + DNA primers +</text>
        <text x="760" y="248" fontSize="7.5" fontWeight="700" className="fill-foreground">heat-stable polymerase + dNTPs.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// CRISPR/Cas9 — gRNA-guided cut, then the NHEJ / HDR fork
// ---------------------------------------------------------------------------

export function CrisprCas9Mechanism() {
  const w = 980;
  const h = 560;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="CRISPR Cas9 genome editing: guide RNA complementary to the target DNA sequence directs the Cas9 endonuclease to make a double-strand break; NHEJ repair re-joins with frameshift and gene knock-out, while HDR with donor DNA template inserts the edited sequence as a knock-in" className="min-w-[940px]">
      {/* Cas9 + gRNA complex */}
      <g>
        <rect x="24" y="60" width="440" height="190" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="86" fontSize="11" fontWeight="800" className="fill-foreground">The editing complex</text>
        {/* Cas9 protein blob */}
        <ellipse cx="180" cy="170" rx="92" ry="62" className="fill-brand-soft stroke-brand" strokeWidth="1.6" />
        <text x="180" y="118" textAnchor="middle" fontSize="11" fontWeight="800" className="fill-brand">Cas9</text>
        <text x="180" y="130" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">endonuclease (from bacteria)</text>
        {/* target DNA inside */}
        <line x1="112" y1="164" x2="248" y2="164" strokeWidth="4.5" className="stroke-neural" />
        <line x1="112" y1="180" x2="248" y2="180" strokeWidth="4.5" className="stroke-neural" />
        {/* gRNA hybridized */}
        <path d="M 120 196 C 150 188, 200 188, 240 196" fill="none" strokeWidth="4" className="stroke-warning" />
        <text x="180" y="212" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">gRNA</text>
        <text x="180" y="224" textAnchor="middle" fontSize="7" className="fill-muted-foreground">complementary to target sequence</text>
        {/* labels */}
        <line x1="276" y1="140" x2="330" y2="120" strokeWidth="1.2" className="stroke-muted-foreground" />
        <text x="336" y="118" fontSize="7.5" fontWeight="700" className="fill-foreground">target DNA</text>
        <line x1="276" y1="196" x2="330" y2="216" strokeWidth="1.2" className="stroke-muted-foreground" />
        <text x="336" y="220" fontSize="7.5" fontWeight="700" className="fill-foreground">gRNA guides Cas9</text>
        <text x="336" y="230" fontSize="7.5" className="fill-muted-foreground">to the exact site</text>
        <text x="42" y="236" fontSize="7.5" className="fill-muted-foreground">Single- or double-strand break made at the target site.</text>
      </g>

      {/* the cut */}
      <g>
        <path d="M 236 254 L 236 306" strokeWidth="2.4" className="stroke-emergency" />
        <path d="M 244 254 L 244 306" strokeWidth="2.4" className="stroke-emergency" />
        <circle cx="240" cy="282" r="15" fill="none" strokeWidth="2.4" className="stroke-emergency" />
        <line x1="231" y1="273" x2="249" y2="291" strokeWidth="2.4" className="stroke-emergency" />
        <line x1="249" y1="273" x2="231" y2="291" strokeWidth="2.4" className="stroke-emergency" />
        <text x="266" y="286" fontSize="9" fontWeight="800" className="fill-emergency">double-strand break</text>
      </g>

      {/* fork DNA */}
      <g>
        <line x1="180" y1="320" x2="180" y2="352" strokeWidth="2" className="stroke-muted-foreground" />
        <path d="M180 356 l-4.5 -10 l9 0 z" className="fill-muted-foreground" />
        <line x1="316" y1="320" x2="316" y2="352" strokeWidth="2" className="stroke-muted-foreground" />
        <path d="M316 356 l-4.5 -10 l9 0 z" className="fill-muted-foreground" />
      </g>

      {/* NHEJ branch */}
      <g>
        <rect x="40" y="372" width="330" height="170" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="56" y="390" width="70" height="22" rx="7" className="fill-emergency-soft stroke-emergency" strokeWidth="1.3" />
        <text x="91" y="405" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-emergency">NHEJ</text>
        <text x="136" y="405" fontSize="7.5" className="fill-muted-foreground">nonhomologous end joining — just re-joins the ends</text>
        <line x1="76" y1="436" x2="334" y2="436" strokeWidth="4.5" className="stroke-neural" />
        <rect x="178" y="428" width="34" height="16" rx="3" className="fill-emergency stroke-emergency" strokeWidth="1" />
        <text x="195" y="439.5" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-emergency">indel</text>
        <line x1="76" y1="452" x2="334" y2="452" strokeWidth="4.5" className="stroke-neural" />
        <text x="56" y="478" fontSize="8" fontWeight="700" className="fill-foreground">Repaired with insertions/deletions →</text>
        <text x="56" y="492" fontSize="9" fontWeight="800" className="fill-emergency">Frameshift/inactivation</text>
        <text x="56" y="506" fontSize="9" fontWeight="800" className="fill-emergency">(“knock-out”)</text>
        <text x="56" y="526" fontSize="7.5" className="fill-muted-foreground">Use: remove gene function — eg, removing</text>
        <text x="56" y="536" fontSize="7.5" className="fill-muted-foreground">virulence factors from pathogens.</text>
      </g>

      {/* HDR branch */}
      <g>
        <rect x="610" y="372" width="346" height="170" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <rect x="626" y="390" width="70" height="22" rx="7" className="fill-brand-soft stroke-brand" strokeWidth="1.3" />
        <text x="661" y="405" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">HDR +</text>
        <text x="706" y="405" fontSize="7.5" className="fill-muted-foreground">homology-directed repair with a template</text>
        {/* donor DNA ladder */}
        <g>
          <line x1="646" y1="428" x2="700" y2="428" strokeWidth="3.5" className="stroke-brand" />
          <line x1="646" y1="462" x2="700" y2="462" strokeWidth="3.5" className="stroke-brand" />
          <line x1="656" y1="432" x2="656" y2="458" strokeWidth="2.5" className="stroke-brand" />
          <line x1="668" y1="432" x2="668" y2="458" strokeWidth="2.5" className="stroke-brand" />
          <line x1="680" y1="432" x2="680" y2="458" strokeWidth="2.5" className="stroke-brand" />
          <line x1="692" y1="432" x2="692" y2="458" strokeWidth="2.5" className="stroke-brand" />
          <text x="673" y="478" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">Donor DNA</text>
        </g>
        <path d="M 706 445 C 730 445, 740 445, 758 445" fill="none" strokeWidth="1.6" className="stroke-muted-foreground" />
        <path d="M766 445 l-9 -4.5 v9 z" className="fill-muted-foreground" />
        <line x1="774" y1="436" x2="934" y2="436" strokeWidth="4.5" className="stroke-neural" />
        <rect x="800" y="428" width="96" height="16" rx="3" className="fill-brand stroke-brand" strokeWidth="1" />
        <line x1="774" y1="452" x2="934" y2="452" strokeWidth="4.5" className="stroke-neural" />
        <text x="626" y="500" fontSize="9" fontWeight="800" className="fill-brand">Edited sequence (“knock-in”)</text>
        <text x="626" y="514" fontSize="7.5" className="fill-muted-foreground">Use: replace disease-causing alleles with</text>
        <text x="626" y="524" fontSize="7.5" className="fill-muted-foreground">healthy variants — eg, sickle cell disease;</text>
        <text x="626" y="534" fontSize="7.5" className="fill-muted-foreground">specifically target tumor cells.</text>
      </g>

      {/* fork arrows from cut */}
      <path d="M 232 310 C 200 336, 178 352, 168 372" fill="none" strokeWidth="2" className="stroke-muted-foreground" />
      <path d="M166 376 l2 -10.5 l8 6.5 z" className="fill-muted-foreground" />
      <path d="M 248 310 C 290 336, 330 352, 360 372" fill="none" strokeWidth="2" className="stroke-muted-foreground" />
      <path d="M362 376 l-9.5 -4.5 l10 -2 z" className="fill-muted-foreground" />

      {/* fork label on the right of complex */}
      <g>
        <rect x="508" y="96" width="448" height="150" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="524" y="120" fontSize="10" fontWeight="800" className="fill-foreground">One cut, two repair fates</text>
        <rect x="524" y="134" width="196" height="44" rx="8" className="fill-emergency-soft stroke-emergency" strokeWidth="1.2" />
        <text x="622" y="152" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-emergency">NHEJ — fast, error-prone</text>
        <text x="622" y="166" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">random indel → frameshift</text>
        <text x="622" y="175" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">→ gene knock-out</text>
        <rect x="740" y="134" width="196" height="44" rx="8" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
        <text x="838" y="152" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">HDR — template-guided</text>
        <text x="838" y="166" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">donor DNA supplies the new</text>
        <text x="838" y="175" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">sequence → knock-in</text>
        <text x="524" y="202" fontSize="7.5" className="fill-muted-foreground">A genome editing tool derived from bacteria:</text>
        <text x="524" y="212" fontSize="7.5" className="fill-muted-foreground">gRNA supplies the ADDRESS (complementary</text>
        <text x="524" y="222" fontSize="7.5" className="fill-muted-foreground">to the target sequence); Cas9 supplies the</text>
        <text x="524" y="232" fontSize="7.5" className="fill-muted-foreground">SCISSORS (single- or double-strand break).</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Southern blot — pedigree → gel lanes → band pattern (heterozygosity)
// ---------------------------------------------------------------------------

export function SouthernBlotPedigree() {
  const w = 980;
  const h = 620;
  const lanes = [
    { gt: "Aa", top: true, bottom: true },
    { gt: "Aa", top: true, bottom: true },
    { gt: "aa", top: true, bottom: false },
    { gt: "Aa", top: true, bottom: true },
    { gt: "AA", top: false, bottom: true },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Southern blot genotyping figure: a pedigree with two heterozygous parents and three children (aa affected, Aa carrier, AA unaffected) with arrows to five blot lanes; heterozygous Aa lanes show both the mutant large-fragment band and the normal small-fragment band, aa shows only the mutant band, AA shows only the normal band" className="min-w-[940px]">
      {/* pedigree */}
      <g>
        <rect x="24" y="24" width="560" height="240" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="48" fontSize="10.5" fontWeight="800" className="fill-foreground">PEDIGREE</text>
        <text x="42" y="62" fontSize="7.5" className="fill-muted-foreground">I: Parents (both Aa — dot marks the mutant allele)</text>
        {/* parents */}
        <circle cx="180" cy="110" r="22" fill="none" strokeWidth="2.2" className="stroke-foreground" />
        <circle cx="180" cy="110" r="5.5" className="fill-emergency" />
        <rect x="258" y="88" width="44" height="44" fill="none" strokeWidth="2.2" className="stroke-foreground" />
        <circle cx="280" cy="110" r="5.5" className="fill-emergency" />
        <line x1="202" y1="110" x2="258" y2="110" strokeWidth="2" className="stroke-foreground" />
        <text x="180" y="152" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">Aa</text>
        <text x="280" y="152" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">Aa</text>
        {/* sibship line */}
        <line x1="230" y1="132" x2="230" y2="170" strokeWidth="2" className="stroke-foreground" />
        <line x1="130" y1="170" x2="400" y2="170" strokeWidth="2" className="stroke-foreground" />
        <line x1="130" y1="170" x2="130" y2="192" strokeWidth="2" className="stroke-foreground" />
        <line x1="265" y1="170" x2="265" y2="192" strokeWidth="2" className="stroke-foreground" />
        <line x1="400" y1="170" x2="400" y2="192" strokeWidth="2" className="stroke-foreground" />
        {/* children: affected girl (filled), carrier boy (dot), unaffected boy */}
        <circle cx="130" cy="214" r="22" className="fill-emergency" stroke="none" />
        <rect x="243" y="192" width="44" height="44" fill="none" strokeWidth="2.2" className="stroke-foreground" />
        <circle cx="265" cy="214" r="5.5" className="fill-emergency" />
        <rect x="378" y="192" width="44" height="44" fill="none" strokeWidth="2.2" className="stroke-foreground" />
        <text x="130" y="240" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">aa</text>
        <text x="265" y="252" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">Aa</text>
        <text x="400" y="252" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-foreground">AA</text>
        <text x="42" y="196" fontSize="7.5" className="fill-muted-foreground">II: Children</text>
        {/* legend chips */}
        <rect x="452" y="88" width="116" height="20" rx="7" className="fill-emergency-soft stroke-emergency" strokeWidth="1.1" />
        <text x="510" y="101" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-emergency">filled = affected (aa)</text>
        <rect x="452" y="114" width="116" height="20" rx="7" className="fill-card stroke-border" strokeWidth="1.1" />
        <text x="510" y="127" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-foreground">dot = carrier allele (Aa)</text>
        <text x="452" y="152" fontSize="7" className="fill-muted-foreground">Autosomal dominant family here:</text>
        <text x="452" y="162" fontSize="7" className="fill-muted-foreground">Aa parent → 50% transmission;</text>
        <text x="452" y="172" fontSize="7" className="fill-muted-foreground">the blot below confirms each</text>
        <text x="452" y="182" fontSize="7" className="fill-muted-foreground">child&apos;s genotype by band pattern.</text>
      </g>

      {/* arrows to lanes */}
      {lanes.map((ln, i) => {
        const x = 330 + i * 84;
        return (
          <g key={i}>
            <line x1={x} y1="270" x2={x} y2="316" strokeWidth="1.6" className="stroke-muted-foreground" />
            <path d={`M${x} 324 l-4 -9 h8 z`} className="fill-muted-foreground" />
          </g>
        );
      })}

      {/* the blot */}
      <g>
        <rect x="24" y="330" width="560" height="270" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="354" fontSize="10.5" fontWeight="800" className="fill-foreground">SOUTHERN BLOT</text>
        <text x="42" y="368" fontSize="7.5" className="fill-muted-foreground">DNA cleaved → gel electrophoresis → membrane → labeled DNA probe → film</text>
        {/* gel */}
        <rect x="60" y="382" width="424" height="196" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.2" />
        {lanes.map((ln, i) => {
          const x = 330 + i * 84 - 60;
          const lx = 108 + i * 84;
          return (
            <g key={i}>
              <text x={lx} y="398" textAnchor="middle" fontSize="9" fontWeight="800" className="fill-foreground">{ln.gt}</text>
              {ln.top && <rect x={lx - 22} y="416" width="44" height="13" rx="3" className="fill-emergency" />}
              {ln.bottom && <rect x={lx - 22} y="530" width="44" height="13" rx="3" className="fill-foreground" />}
            </g>
          );
        })}
        {/* legend */}
        <rect x="500" y="410" width="72" height="14" rx="3" className="fill-emergency" />
        <text x="540" y="437" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-emergency">Mutant</text>
        <text x="540" y="447" textAnchor="middle" fontSize="6.8" className="fill-muted-foreground">larger fragment</text>
        <rect x="500" y="524" width="72" height="14" rx="3" className="fill-foreground" />
        <text x="540" y="551" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-foreground">Normal</text>
        <text x="540" y="561" textAnchor="middle" fontSize="6.8" className="fill-muted-foreground">smaller fragment</text>
        <text x="42" y="590" fontSize="7.5" fontWeight="700" className="fill-foreground">Aa = TWO bands (one per allele) · aa = mutant band only · AA = normal band only.</text>
      </g>

      {/* reading + uses panel */}
      <g>
        <rect x="608" y="24" width="348" height="576" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="624" y="48" fontSize="10.5" fontWeight="800" className="fill-foreground">The three-step procedure</text>
        {[
          ["1", "DNA sample is enzymatically cleaved into smaller pieces, which are separated by gel electrophoresis, and then transferred to a membrane."],
          ["2", "Membrane is exposed to labeled DNA probe that anneals to its complementary strand."],
          ["3", "Resulting double-stranded, labeled piece of DNA is visualized when membrane is exposed to film or digital imager."],
        ].map(([n, t], i) => (
          <g key={i}>
            <circle cx="638" cy={76 + i * 62} r="11" className="fill-brand-soft stroke-brand" strokeWidth="1.3" />
            <text x="638" y={80 + i * 62} textAnchor="middle" fontSize="9" fontWeight="800" className="fill-brand">{n}</text>
            <foreignObject x="658" y={62 + i * 62} width="286" height="58">
              <div className="text-[7.6px] leading-snug text-muted-foreground">{t}</div>
            </foreignObject>
          </g>
        ))}
        <text x="624" y="272" fontSize="10.5" fontWeight="800" className="fill-foreground">Useful to identify size of specific sequences</text>
        <rect x="624" y="286" width="316" height="52" rx="8" className="fill-neural-soft stroke-neural" strokeWidth="1.2" />
        <text x="640" y="306" fontSize="8.5" fontWeight="800" className="fill-neural">Determination of heterozygosity</text>
        <text x="640" y="318" fontSize="7.5" className="fill-muted-foreground">two bands = two alleles at the locus</text>
        <text x="640" y="328" fontSize="7.5" className="fill-muted-foreground">(as seen in the blot image)</text>
        <rect x="624" y="348" width="316" height="52" rx="8" className="fill-warning-soft stroke-warning" strokeWidth="1.2" />
        <text x="640" y="368" fontSize="8.5" fontWeight="800" className="fill-warning"># of CGG repeats in FMR1</text>
        <text x="640" y="380" fontSize="7.5" className="fill-muted-foreground">to diagnose fragile X syndrome —</text>
        <text x="640" y="390" fontSize="7.5" className="fill-muted-foreground">repeat size reads directly as fragment size</text>
        <text x="624" y="424" fontSize="9" fontWeight="800" className="fill-foreground">SNoW DRoP</text>
        <text x="624" y="440" fontSize="8" fontWeight="700" className="fill-foreground">Southern = DNA</text>
        <text x="624" y="454" fontSize="8" fontWeight="700" className="fill-foreground">Northern = RNA</text>
        <text x="624" y="468" fontSize="8" fontWeight="700" className="fill-foreground">Western = Protein</text>
        <text x="624" y="490" fontSize="7.5" className="fill-muted-foreground">Southwestern blot: protein probed with labeled</text>
        <text x="624" y="500" fontSize="7.5" className="fill-muted-foreground">dsDNA — detects DNA-binding proteins</text>
        <text x="624" y="510" fontSize="7.5" className="fill-muted-foreground">(eg, transcription factors).</text>
        <text x="624" y="540" fontSize="7.5" fontWeight="700" className="fill-foreground">Northern blot: RNA sample — mRNA levels/size</text>
        <text x="624" y="550" fontSize="7.5" className="fill-muted-foreground">(gene expression); detects splicing errors.</text>
        <text x="624" y="570" fontSize="7.5" fontWeight="700" className="fill-foreground">Western blot: protein + labeled antibody —</text>
        <text x="624" y="580" fontSize="7.5" className="fill-muted-foreground">identifies specific protein and determines quantity.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Flow cytometry — the instrument: labeled cells → laser → detector
// ---------------------------------------------------------------------------

export function FlowCytometryLaserPath() {
  const w = 980;
  const h = 540;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Flow cytometry instrument: cells tagged with fluorescent-dye-conjugated antibodies to CD3 and CD8 flow one at a time past a laser; the laser makes the label fluoresce and the detector counts labeled cells, producing histograms for one measure or scatter plots for two measures" className="min-w-[940px]">
      {/* flow channel */}
      <g>
        <rect x="80" y="40" width="150" height="440" rx="16" className="fill-card stroke-border" strokeWidth="1.6" />
        <text x="155" y="66" textAnchor="middle" fontSize="9.5" fontWeight="800" className="fill-foreground">Sample stream</text>
        <text x="155" y="78" textAnchor="middle" fontSize="7" className="fill-muted-foreground">one cell at a time</text>
        {/* cells moving down */}
        <circle cx="155" cy="120" r="10" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <circle cx="155" cy="182" r="10" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <circle cx="155" cy="244" r="10" className="fill-brand-soft stroke-brand" strokeWidth="1.4" />
        <path d="M 155 430 C 155 452, 155 458, 155 466" fill="none" strokeWidth="1.8" className="stroke-muted-foreground" />
        <path d="M155 472 l-4 -9 h8 z" className="fill-muted-foreground" />
        {/* interrogation cell */}
        <circle cx="155" cy="330" r="26" className="fill-card stroke-brand" strokeWidth="2" />
        <text x="155" y="334" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-brand">cell</text>
        {/* antibodies on the cell */}
        <g>
          <path d="M 176 316 l 14 -12" strokeWidth="2.4" className="stroke-neural" />
          <circle cx="196" cy="300" r="5" className="fill-neural" />
          <text x="204" y="296" fontSize="7.5" fontWeight="800" className="fill-neural">Anti-CD3 Ab</text>
          <text x="204" y="306" fontSize="6.8" className="fill-muted-foreground">+ unique fluorescent label</text>
          <path d="M 176 344 l 14 12" strokeWidth="2.4" className="stroke-warning" />
          <circle cx="196" cy="362" r="5" className="fill-warning" />
          <text x="204" y="366" fontSize="7.5" fontWeight="800" className="fill-warning">Anti-CD8 Ab</text>
          <text x="204" y="376" fontSize="6.8" className="fill-muted-foreground">+ unique fluorescent label</text>
        </g>
      </g>

      {/* laser */}
      <g>
        <rect x="300" y="312" width="96" height="36" rx="8" className="fill-emergency-soft stroke-emergency" strokeWidth="1.5" />
        <text x="348" y="334" textAnchor="middle" fontSize="10" fontWeight="800" className="fill-emergency">Laser</text>
        <line x1="270" y1="330" x2="300" y2="330" strokeWidth="1.4" className="stroke-muted-foreground" />
        <line x1="196" y1="330" x2="268" y2="330" strokeWidth="3" strokeDasharray="7 4" className="stroke-emergency" />
        <path d="M188 330 l10 -4.5 v9 z" className="fill-emergency" />
        <rect x="212" y="278" width="120" height="20" rx="7" className="fill-card stroke-border" strokeWidth="1.1" />
        <text x="272" y="291" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-foreground">Laser makes label fluoresce</text>
      </g>

      {/* detector */}
      <g>
        <path d="M 220 348 C 250 372, 262 382, 282 398" fill="none" strokeWidth="2.4" strokeDasharray="5 4" className="stroke-warning" />
        <path d="M288 402 l-11 -1 l5.5 -9.5 z" className="fill-warning" />
        <rect x="292" y="396" width="104" height="40" rx="10" className="fill-warning-soft stroke-warning" strokeWidth="1.5" />
        <text x="344" y="413" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">Detector</text>
        <text x="344" y="425" textAnchor="middle" fontSize="6.8" className="fill-muted-foreground">light scatter + fluorescence</text>
        <rect x="180" y="446" width="230" height="34" rx="8" className="fill-card stroke-border" strokeWidth="1.1" />
        <text x="295" y="460" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-foreground">Fluorescence is detected;</text>
        <text x="295" y="471" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-foreground">labeled cells are counted</text>
      </g>

      {/* output panel */}
      <g>
        <rect x="480" y="40" width="228" height="250" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="496" y="64" fontSize="10" fontWeight="800" className="fill-foreground">Data are plotted as…</text>
        {/* histogram */}
        <g>
          <line x1="516" y1="170" x2="636" y2="170" strokeWidth="1.6" className="stroke-muted-foreground" />
          <line x1="516" y1="170" x2="516" y2="96" strokeWidth="1.6" className="stroke-muted-foreground" />
          <path d="M 522 168 C 540 166, 548 150, 556 136 C 564 124, 576 120, 588 132 C 598 142, 608 158, 630 166" fill="none" strokeWidth="3" className="stroke-brand" />
          <text x="576" y="188" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">one measure (fluorescence)</text>
          <text x="576" y="92" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">Histogram</text>
        </g>
        {/* scatter */}
        <g>
          <line x1="516" y1="270" x2="636" y2="270" strokeWidth="1.6" className="stroke-muted-foreground" />
          <line x1="516" y1="270" x2="516" y2="206" strokeWidth="1.6" className="stroke-muted-foreground" />
          <circle cx="556" cy="256" r="3" className="fill-neural" />
          <circle cx="562" cy="250" r="3" className="fill-neural" />
          <circle cx="552" cy="248" r="3" className="fill-neural" />
          <circle cx="600" cy="228" r="3" className="fill-warning" />
          <circle cx="608" cy="222" r="3" className="fill-warning" />
          <circle cx="612" cy="232" r="3" className="fill-warning" />
          <text x="576" y="286" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">any two measures (scatter plot)</text>
          <text x="576" y="202" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-neural">Scatter plot</text>
        </g>
      </g>

      {/* what it measures */}
      <g>
        <rect x="480" y="314" width="228" height="166" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="496" y="338" fontSize="10" fontWeight="800" className="fill-foreground">Assesses, per cell:</text>
        <text x="496" y="358" fontSize="8.5" fontWeight="700" className="fill-brand">size</text>
        <text x="496" y="376" fontSize="8.5" fontWeight="700" className="fill-neural">granularity</text>
        <text x="496" y="394" fontSize="8.5" fontWeight="700" className="fill-warning">protein expression</text>
        <text x="496" y="408" fontSize="7.5" className="fill-muted-foreground">(immunophenotype) — via antibodies</text>
        <text x="496" y="422" fontSize="7.5" className="fill-muted-foreground">specific to surface or intracellular proteins</text>
        <text x="496" y="436" fontSize="7.5" className="fill-muted-foreground">tagged with unique fluorescent dyes</text>
        <text x="496" y="458" fontSize="7.5" fontWeight="700" className="fill-foreground">Sample analyzed one cell at a time by</text>
        <text x="496" y="468" fontSize="7.5" fontWeight="700" className="fill-foreground">focusing a laser on the cell.</text>
      </g>

      {/* clinical uses */}
      <g>
        <rect x="732" y="40" width="224" height="440" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="748" y="66" fontSize="10" fontWeight="800" className="fill-foreground">Commonly used in workup of</text>
        {[
          ["Hematologic abnormalities", "leukemia · paroxysmal nocturnal hemoglobinuria · fetal RBCs in pregnant person's blood", "fill-brand-soft stroke-brand"],
          ["Immunodeficiencies", "CD4+ cell count in HIV — the viral-defense ledger followed in every HIV-positive patient", "fill-neural-soft stroke-neural"],
        ].map(([title, sub, tone], i) => (
          <g key={i}>
            <rect x="748" y={84 + i * 96} width="192" height="84" rx="9" className={tone as string} strokeWidth="1.3" />
            <text x="760" y={104 + i * 96} fontSize="8.5" fontWeight="800" className="fill-foreground">{title}</text>
            <foreignObject x="758" y={110 + i * 96} width="176" height="56">
              <div className="text-[7.3px] leading-snug text-muted-foreground">{sub}</div>
            </foreignObject>
          </g>
        ))}
        <text x="748" y="288" fontSize="7.5" className="fill-muted-foreground">Microarrays (same page): compare relative</text>
        <text x="748" y="298" fontSize="7.5" className="fill-muted-foreground">transcription of genes in two RNA samples;</text>
        <text x="748" y="308" fontSize="7.5" className="fill-muted-foreground">detect SNPs and CNVs for genotyping,</text>
        <text x="748" y="318" fontSize="7.5" className="fill-muted-foreground">clinical genetic testing, forensic analysis,</text>
        <text x="748" y="328" fontSize="7.5" className="fill-muted-foreground">and cancer mutation / linkage analysis</text>
        <text x="748" y="342" fontSize="7.5" className="fill-muted-foreground">when DNA is used.</text>
        <text x="748" y="376" fontSize="7.5" fontWeight="700" className="fill-foreground">Quadrant reading:</text>
        <text x="748" y="390" fontSize="7.5" className="fill-muted-foreground">each dot = one cell; dashed dividers split</text>
        <text x="748" y="400" fontSize="7.5" className="fill-muted-foreground">positive/negative per marker — see the</text>
        <text x="748" y="410" fontSize="7.5" className="fill-muted-foreground">CD3 vs CD8 quadrant plot.</text>
        <text x="748" y="440" fontSize="7.5" fontWeight="700" className="fill-foreground">Fetal RBCs in maternal blood:</text>
        <text x="748" y="452" fontSize="7.5" className="fill-muted-foreground">quantitating fetomaternal hemorrhage</text>
        <text x="748" y="462" fontSize="7.5" className="fill-muted-foreground">(anti-D dosing) by flow cytometry.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Flow cytometry — CD3 vs CD8 quadrant dot plot
// ---------------------------------------------------------------------------

export function CdCdQuadrantPlot() {
  const w = 980;
  const h = 560;
  // deterministic pseudo-random dot positions (precomputed, no Math.random in render)
  const llDots = [
    [40, 62], [52, 72], [46, 84], [60, 58], [66, 74], [58, 90], [44, 102], [70, 60],
    [72, 86], [62, 96], [50, 116], [78, 70], [82, 92], [68, 108], [56, 128], [86, 64],
    [90, 80], [76, 118], [64, 120], [94, 104], [84, 126], [98, 88], [88, 112], [100, 70],
  ];
  const luDots = [[36, 292], [50, 306], [44, 322], [62, 298], [58, 316], [72, 308], [68, 284], [80, 324], [54, 340], [76, 336], [90, 300], [86, 344], [64, 356], [46, 364], [98, 318], [82, 372]];
  const ruDots = [[292, 296], [306, 310], [300, 326], [318, 302], [314, 320], [328, 312], [324, 288], [336, 344], [310, 350], [332, 356], [346, 306], [342, 364], [320, 376], [302, 384], [354, 330], [338, 388]];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Flow cytometry quadrant scatter plot of CD3 versus CD8 on logarithmic axes from 10 to the 0 to 10 to the 4: double-negative cells in the lower left, CD3 positive CD8 negative cells in the left upper quadrant, CD3 and CD8 double positive cells in the right upper quadrant, and the right lower quadrant empty because all CD8-expressing cells also express CD3" className="min-w-[940px]">
      {/* plot frame */}
      <g>
        <rect x="80" y="60" width="420" height="420" rx="8" className="fill-card stroke-border" strokeWidth="1.4" />
        {/* quadrant dividers */}
        <line x1="290" y1="66" x2="290" y2="474" strokeWidth="1.4" strokeDasharray="6 4" className="stroke-muted-foreground" />
        <line x1="86" y1="270" x2="494" y2="270" strokeWidth="1.4" strokeDasharray="6 4" className="stroke-muted-foreground" />
        {/* axes */}
        <line x1="80" y1="480" x2="520" y2="480" strokeWidth="2" className="stroke-foreground" />
        <line x1="80" y1="480" x2="80" y2="60" strokeWidth="2" className="stroke-foreground" />
        {/* x ticks 10^0..10^4 */}
        {[0, 1, 2, 3, 4].map((i) => (
          <text key={i} x={80 + i * 105} y={500} textAnchor="middle" fontSize="9" className="fill-muted-foreground">10<tspan fontSize="6.5" dy="-3">{i}</tspan></text>
        ))}
        {/* y ticks */}
        {[0, 1, 2, 3, 4].map((i) => (
          <text key={i} x={66} y={484 - i * 105} textAnchor="end" fontSize="9" className="fill-muted-foreground">10<tspan fontSize="6.5" dy="-3">{i}</tspan></text>
        ))}
        <text x="300" y="522" textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-foreground">CD8</text>
        <text x="46" y="270" textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-foreground" transform="rotate(-90 46 270)">CD3</text>
        {/* ⊕ / ⊖ axis markers */}
        <circle cx="508" cy="270" r="8" className="fill-none stroke-warning" strokeWidth="1.6" />
        <line x1="503" y1="270" x2="513" y2="270" strokeWidth="1.6" className="stroke-warning" />
        <line x1="508" y1="265" x2="508" y2="275" strokeWidth="1.6" className="stroke-warning" />
        <text x="508" y="256" textAnchor="middle" fontSize="7.5" className="fill-muted-foreground">CD8 ⊕</text>
        <circle cx="86" cy="54" r="8" className="fill-none stroke-brand" strokeWidth="1.6" />
        <line x1="81" y1="54" x2="91" y2="54" strokeWidth="1.6" className="stroke-brand" />
        <line x1="86" y1="49" x2="86" y2="59" strokeWidth="1.6" className="stroke-brand" />
        <text x="100" y="50" fontSize="7.5" className="fill-muted-foreground">CD3 ⊕</text>
        {/* dots: LL double negative */}
        {llDots.map(([dx, dy], i) => (
          <circle key={`ll${i}`} cx={100 + dx} cy={330 + dy * 0.5} r="4" className="fill-muted-foreground/70" />
        ))}
        {/* LU: CD3+ CD8- */}
        {luDots.map(([dx, dy], i) => (
          <circle key={`lu${i}`} cx={100 + dx * 0.6} cy={110 + dy} r="4" className="fill-brand" />
        ))}
        {/* RU: double positive */}
        {ruDots.map(([dx, dy], i) => (
          <circle key={`ru${i}`} cx={330 + dx * 0.5} cy={110 + dy} r="4" className="fill-warning" />
        ))}
      </g>

      {/* quadrant explanations */}
      <g>
        <rect x="548" y="60" width="408" height="420" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="564" y="86" fontSize="10.5" fontWeight="800" className="fill-foreground">Reading the quadrants (source&apos;s own example)</text>
        <g>
          <rect x="564" y="102" width="372" height="76" rx="9" className="fill-muted/30 stroke-border" strokeWidth="1.1" />
          <text x="578" y="122" fontSize="8.5" fontWeight="800" className="fill-foreground">Left lower — ⊝ CD8, ⊝ CD3</text>
          <text x="578" y="136" fontSize="7.5" className="fill-muted-foreground">Cells negative for both CD8 and CD3</text>
          <text x="578" y="148" fontSize="7.5" className="fill-muted-foreground">(not T cells — eg, B cells, NK cells, other lineages</text>
          <text x="578" y="158" fontSize="7.5" className="fill-muted-foreground">depending on the marker panel)</text>
        </g>
        <g>
          <rect x="564" y="188" width="372" height="70" rx="9" className="fill-brand-soft stroke-brand" strokeWidth="1.1" />
          <text x="578" y="208" fontSize="8.5" fontWeight="800" className="fill-brand">Left upper — ⊕ CD3, ⊝ CD8</text>
          <text x="578" y="222" fontSize="7.5" className="fill-muted-foreground">T cells that are CD3 positive but CD8 negative —</text>
          <text x="578" y="232" fontSize="7.5" fontWeight="700" className="fill-foreground">the helper (CD4) compartment shares this zone</text>
          <text x="578" y="244" fontSize="7.5" className="fill-muted-foreground">on a CD3 vs CD8 plot.</text>
        </g>
        <g>
          <rect x="564" y="268" width="372" height="70" rx="9" className="fill-warning-soft stroke-warning" strokeWidth="1.1" />
          <text x="578" y="288" fontSize="8.5" fontWeight="800" className="fill-warning">Right upper — ⊕ both CD8 and CD3</text>
          <text x="578" y="302" fontSize="7.5" className="fill-muted-foreground">Double-positive cells = cytotoxic T cells</text>
          <text x="578" y="312" fontSize="7.5" className="fill-muted-foreground">(CD8+ riding on CD3+ T-cell identity).</text>
          <text x="578" y="328" fontSize="7.5" fontWeight="700" className="fill-foreground">Both axes positive → upper right.</text>
        </g>
        <g>
          <rect x="564" y="348" width="372" height="82" rx="9" className="fill-emergency-soft stroke-emergency" strokeWidth="1.1" />
          <text x="578" y="368" fontSize="8.5" fontWeight="800" className="fill-emergency">Right lower — ⊕ CD8, ⊝ CD3: EMPTY</text>
          <text x="578" y="382" fontSize="7.5" className="fill-muted-foreground">In this example the right lower quadrant is empty</text>
          <text x="578" y="392" fontSize="7.5" className="fill-muted-foreground">because all CD8-expressing cells also express</text>
          <text x="578" y="402" fontSize="7.5" fontWeight="700" className="fill-foreground">CD3 — a CD8+ cell that is not a T cell would</text>
          <text x="578" y="412" fontSize="7.5" fontWeight="700" className="fill-foreground">be biologically unexpected here.</text>
        </g>
        <text x="564" y="452" fontSize="7.5" className="fill-muted-foreground">Each dot = one cell. Axes are log-scale fluorescence.</text>
        <text x="564" y="464" fontSize="7.5" className="fill-muted-foreground">Two-color panels resolve four immunophenotypes at once.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// ELISA — direct (antigen) vs indirect (antibody) sandwich wells
// ---------------------------------------------------------------------------

export function ElisaDirectIndirect() {
  const w = 980;
  const h = 560;
  const EnzymeSignal = ({ x, y, tone }: { x: number; y: number; tone: string }) => (
    <g>
      <circle cx={x} cy={y} r="7" className={tone} />
      <path d={`M ${x - 13} ${y} h7 M ${x + 6} ${y} h7 M ${x} ${y - 13} v7 M ${x} ${y + 6} v7`} strokeWidth="2" className={tone} />
    </g>
  );
  const YShape = ({ x, y, tone, labeled, enzyme }: { x: number; y: number; tone: string; labeled?: boolean; enzyme?: boolean }) => (
    <g>
      <path d={`M ${x} ${y + 26} L ${x} ${y + 8} M ${x} ${y + 8} L ${x - 12} ${y - 6} M ${x} ${y + 8} L ${x + 12} ${y - 6}`} strokeWidth="3.4" strokeLinecap="round" className={tone} />
      {labeled && <circle cx={x + 20} cy={y + 20} r="6" className="fill-success-soft stroke-success" strokeWidth="1.3" />}
      {labeled && <text x={x + 20} y={y + 23} textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-success">E</text>}
      {enzyme && <circle cx={x + 20} cy={y + 20} r="6" className="fill-success-soft stroke-success" strokeWidth="1.3" />}
      {enzyme && <text x={x + 20} y={y + 23} textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-success">E</text>}
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Direct versus indirect ELISA: in the direct ELISA a labeled primary antibody with enzyme binds the patient antigen fixed in the well and substrate produces a detectable signal; in the indirect ELISA the patient antibody binds fixed antigen and a labeled secondary antibody with enzyme detects it, then substrate yields the signal" className="min-w-[940px]">
      {/* direct */}
      <g>
        <rect x="24" y="60" width="452" height="400" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="88" fontSize="12" fontWeight="800" className="fill-foreground">Direct ELISA</text>
        <rect x="42" y="100" width="168" height="24" rx="8" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
        <text x="126" y="116" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">detects ANTIGEN in patient</text>
        {/* well cross-section */}
        <path d="M 80 140 L 80 400 L 380 400 L 380 140" fill="none" strokeWidth="3" className="stroke-foreground" />
        <line x1="80" y1="140" x2="380" y2="140" strokeWidth="1.2" strokeDasharray="4 4" className="fill-none stroke-muted-foreground" />
        {/* antigen fixed at bottom */}
        <circle cx="150" cy="382" r="14" className="fill-neural" />
        <circle cx="220" cy="382" r="14" className="fill-neural" />
        <circle cx="290" cy="382" r="14" className="fill-neural" />
        <text x="230" y="418" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-neural">Antigen (patient sample) fixed to well</text>
        {/* labeled 1° antibody */}
        <YShape x={150} y={318} tone="stroke-brand" labeled enzyme />
        <YShape x={220} y={318} tone="stroke-brand" labeled enzyme />
        <text x="230" y="290" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-brand">Labeled 1° antibody</text>
        <text x="230" y="302" textAnchor="middle" fontSize="7" className="fill-muted-foreground">enzyme already attached</text>
        {/* substrate + signal */}
        <EnzymeSignal x={330} y={318} tone="stroke-success" />
        <text x="330" y={292} textAnchor="middle" fontSize="8" fontWeight="800" className="fill-success">Detectable signal</text>
        <text x="330" y={304} textAnchor="middle" fontSize="7" className="fill-muted-foreground">Substrate reacts with enzyme</text>
        <text x="42" y="440" fontSize="8" fontWeight="700" className="fill-foreground">1 layer of recognition: antigen + labeled 1° antibody.</text>
        <text x="42" y="452" fontSize="7.5" className="fill-muted-foreground">Fewer steps, faster — the enzyme is on the detecting</text>
        <text x="42" y="462" fontSize="7.5" className="fill-muted-foreground">antibody from the start.</text>
      </g>

      {/* indirect */}
      <g>
        <rect x="504" y="60" width="452" height="400" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="522" y="88" fontSize="12" fontWeight="800" className="fill-foreground">Indirect ELISA</text>
        <rect x="522" y="100" width="200" height="24" rx="8" className="fill-warning-soft stroke-warning" strokeWidth="1.2" />
        <text x="622" y="116" textAnchor="middle" fontSize="8.5" fontWeight="800" className="fill-warning">detects ANTIBODY in patient</text>
        {/* well */}
        <path d="M 560 140 L 560 400 L 860 400 L 860 140" fill="none" strokeWidth="3" className="stroke-foreground" />
        <line x1="560" y1="140" x2="860" y2="140" strokeWidth="1.2" strokeDasharray="4 4" className="fill-none stroke-muted-foreground" />
        {/* antigen fixed */}
        <circle cx="630" cy="382" r="14" className="fill-neural" />
        <circle cx="700" cy="382" r="14" className="fill-neural" />
        <circle cx="770" cy="382" r="14" className="fill-neural" />
        <text x="710" y="418" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-neural">Antigen fixed to well (known)</text>
        {/* patient 1° antibody */}
        <YShape x={630} y={330} tone="stroke-brand" />
        <YShape x={700} y={330} tone="stroke-brand" />
        <text x="565" y="300" fontSize="8" fontWeight="800" className="fill-brand">1° antibody (patient)</text>
        <text x="565" y="311" fontSize="7" className="fill-muted-foreground">binds the fixed antigen</text>
        {/* labeled 2° antibody */}
        <YShape x={665} y={262} tone="stroke-warning" labeled enzyme />
        <text x="700" y={234} textAnchor="middle" fontSize="8" fontWeight="800" className="fill-warning">Labeled 2° antibody</text>
        <text x="700" y="245" fontSize="7" className="fill-muted-foreground">anti-Ig with enzyme, binds the 1° antibody</text>
        {/* substrate + signal */}
        <EnzymeSignal x={810} y={300} tone="stroke-success" />
        <text x="810" y="274" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-success">Substrate → signal</text>
        <text x="522" y="440" fontSize="8" fontWeight="700" className="fill-foreground">2 layers of recognition: antigen + patient 1° Ab</text>
        <text x="522" y="452" fontSize="8" fontWeight="700" className="fill-foreground">+ labeled 2° antibody.</text>
        <text x="522" y="464" fontSize="7.5" className="fill-muted-foreground">Signal amplifies with the extra layer.</text>
      </g>

      {/* bottom strip */}
      <g>
        <rect x="24" y="480" width="932" height="64" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="502" fontSize="9" fontWeight="800" className="fill-foreground">The shared engine</text>
        <text x="42" y="516" fontSize="7.5" className="fill-muted-foreground">Detection involves an antibody linked to an enzyme; added substrate reacts with the</text>
        <text x="42" y="526" fontSize="7.5" className="fill-muted-foreground">enzyme, producing a detectable signal.</text>
        <text x="330" y="502" fontSize="9" fontWeight="800" className="fill-foreground">Performance</text>
        <text x="330" y="516" fontSize="7.5" className="fill-muted-foreground">Can have high sensitivity and specificity, but is less</text>
        <text x="330" y="526" fontSize="7.5" className="fill-muted-foreground">specific than Western blot.</text>
        <text x="620" y="502" fontSize="9" fontWeight="800" className="fill-foreground">Classic use</text>
        <text x="620" y="516" fontSize="7.5" className="fill-muted-foreground">Often used to screen for HIV infection — positive</text>
        <text x="620" y="526" fontSize="7.5" className="fill-muted-foreground">screens are confirmed by Western blot.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Karyotyping — colchicine → metaphase arrest → Giemsa-banded karyogram
// ---------------------------------------------------------------------------

export function GBandedKaryotypeSchematic() {
  const w = 980;
  const h = 600;
  // stylized chromosome pair renderer (deterministic band patterns)
  const Chrom = ({ x, y, tone, bands, label }: { x: number; y: number; tone: string; bands: number[]; label?: string }) => (
    <g>
      {[-5, 5].map((dx, k) => (
          <g key={k}>
            <line x1={x + dx} y1={y + 10} x2={x + dx} y2={y + 54} strokeWidth="9" strokeLinecap="round" className={tone} />
            <line x1={x + dx} y1={y + 54} x2={x + dx} y2={y + 66} strokeWidth="4" className="stroke-border" />
            {bands.map((b, bi) => (
              <line key={bi} x1={x + dx - 4} y1={y + 14 + b} x2={x + dx + 4} y2={y + 14 + b} strokeWidth="3" className="stroke-background" opacity="0.85" />
            ))}
          </g>
        ))}
      {label && <text x={x} y={y + 80} textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-muted-foreground">{label}</text>}
    </g>
  );
  const row1 = [
    { x: 100, b: [4, 12, 22, 34, 42], label: "1" },
    { x: 180, b: [6, 16, 26, 36], label: "2" },
    { x: 260, b: [8, 20, 32], label: "3" },
    { x: 340, b: [6, 18, 30], label: "4" },
    { x: 420, b: [10, 22, 34], label: "5" },
    { x: 500, b: [8, 20], label: "6" },
    { x: 580, b: [10, 24], label: "7" },
    { x: 660, b: [6, 16, 28], label: "8" },
    { x: 740, b: [10, 26], label: "9" },
    { x: 820, b: [12, 30], label: "10" },
    { x: 900, b: [14, 28], label: "11" },
  ];
  const row2 = [
    { x: 100, b: [12, 30], label: "12" },
    { x: 180, b: [14], label: "13" },
    { x: 260, b: [16], label: "14" },
    { x: 340, b: [18], label: "15" },
    { x: 420, b: [20], label: "16" },
    { x: 500, b: [10, 22], label: "17" },
    { x: 580, b: [12, 26], label: "18" },
    { x: 660, b: [14, 28], label: "19" },
    { x: 740, b: [16, 30], label: "20" },
    { x: 820, b: [18, 32], label: "21" },
    { x: 900, b: [20, 34], label: "22" },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Karyotyping: colchicine arrests cultured cells at metaphase by disrupting mitotic spindle assembly, chromosomes are stained with Giemsa, then ordered and numbered by morphology, size, arm-length ratio and banding pattern into a karyogram; red arrows mark extensive abnormalities in a cancer-cell karyotype" className="min-w-[940px]">
      {/* process strip */}
      <g>
        <rect x="24" y="24" width="932" height="92" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="10" fontWeight="800" className="fill-foreground">From culture to karyogram</text>
        {[
          ["Colchicine added", "disrupts assembly of mitotic spindles", "fill-warning-soft stroke-warning", "fill-warning"],
          ["Arrest at metaphase", "chromosomes most condensed, most visible", "fill-warning-soft stroke-warning", "fill-warning"],
          ["Giemsa stain", "classic G-banding pattern", "fill-brand-soft stroke-brand", "fill-brand"],
          ["Ordered + numbered", "morphology · size · arm-length ratio · banding", "fill-neural-soft stroke-neural", "fill-neural"],
        ].map(([t, s, box, tone], i) => (
          <g key={i}>
            <rect x={42 + i * 232} y="56" width="212" height="48" rx="9" className={box as string} strokeWidth="1.2" />
            <text x={54 + i * 232} y={74} fontSize="8.5" fontWeight="800" className={tone as string}>{t}</text>
            <foreignObject x={52 + i * 232} y={78} width="196" height="24">
              <div className="text-[7.2px] leading-snug text-muted-foreground">{s}</div>
            </foreignObject>
            {i < 3 && (
              <>
                <line x1={254 + i * 232} y1="80" x2={268 + i * 232} y2="80" strokeWidth="1.6" className="stroke-muted-foreground" />
                <path d={`M${272 + i * 232} 80 l-8 -4 v8 z`} className="fill-muted-foreground" />
              </>
            )}
          </g>
        ))}
      </g>

      {/* karyogram */}
      <g>
        <rect x="24" y="136" width="684" height="440" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="160" fontSize="10" fontWeight="800" className="fill-foreground">The karyogram — homologous pairs, Giemsa-banded</text>
        {row1.map((c) => (
          <Chrom key={c.label} x={c.x} y={176} tone="stroke-brand" bands={c.b} label={c.label} />
        ))}
        {row2.map((c) => (
          <Chrom key={c.label} x={c.x} y={330} tone="stroke-brand" bands={c.b} label={c.label} />
        ))}
        {/* sex pair + arrows to abnormalities */}
        <Chrom x={100} y={484} tone="stroke-neural" bands={[8, 24, 40]} label="X" />
        <Chrom x={180} y={484} tone="stroke-neural" bands={[12, 30]} label="Y" />
        {/* abnormality arrows (cancer-cell example) */}
        <line x1="662" y1="418" x2="672" y2="392" strokeWidth="2.4" className="stroke-emergency" />
        <path d="M674 386 l-8 6 l10 3 z" className="fill-emergency" />
        <text x="680" y="386" fontSize="8" fontWeight="800" className="fill-emergency">structural</text>
        <text x="680" y="396" fontSize="8" fontWeight="800" className="fill-emergency">abnormality</text>
        <line x1="262" y1="446" x2="250" y2="428" strokeWidth="2.4" className="stroke-emergency" />
        <path d="M247 423 l3 10 l7 -7 z" className="fill-emergency" />
        <text x="180" y="420" fontSize="8" fontWeight="800" className="fill-emergency">abnormal</text>
        <text x="180" y="430" fontSize="8" fontWeight="800" className="fill-emergency">banding</text>
        <text x="42" y="566" fontSize="7.5" className="fill-muted-foreground">Red arrows (as in the source image) point to extensive</text>
        <text x="42" y="576" fontSize="7.5" className="fill-muted-foreground">abnormalities in a cancer-cell karyotype.</text>
      </g>

      {/* samples + uses */}
      <g>
        <rect x="732" y="136" width="224" height="440" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="748" y="160" fontSize="10" fontWeight="800" className="fill-foreground">Can be performed on</text>
        <text x="748" y="180" fontSize="8.5" fontWeight="700" className="fill-foreground">blood · bone marrow ·</text>
        <text x="748" y="194" fontSize="8.5" fontWeight="700" className="fill-foreground">amniotic fluid · placental tissue</text>
        <text x="748" y="222" fontSize="10" fontWeight="800" className="fill-foreground">Used to diagnose</text>
        <rect x="748" y="234" width="192" height="44" rx="9" className="fill-brand-soft stroke-brand" strokeWidth="1.2" />
        <text x="760" y="252" fontSize="8.5" fontWeight="800" className="fill-brand">Chromosomal imbalances</text>
        <text x="760" y="266" fontSize="7.5" className="fill-muted-foreground">autosomal trisomies ·</text>
        <text x="760" y="276" fontSize="7.5" className="fill-muted-foreground">sex chromosome disorders</text>
        <text x="748" y="306" fontSize="10" fontWeight="800" className="fill-foreground">Nomenclature nuggets</text>
        <text x="748" y="324" fontSize="8" fontWeight="700" className="fill-foreground">46,XX — normal female</text>
        <text x="748" y="338" fontSize="8" fontWeight="700" className="fill-foreground">46,XY — normal male</text>
        <text x="748" y="352" fontSize="8" fontWeight="700" className="fill-foreground">47,XY,+21 — Down syndrome</text>
        <text x="748" y="366" fontSize="8" fontWeight="700" className="fill-foreground">46,XX,t(14;21) — Robertsonian</text>
        <text x="748" y="378" fontSize="8" fontWeight="700" className="fill-foreground">translocation carrier</text>
        <text x="748" y="406" fontSize="7.5" className="fill-muted-foreground">Count (total) → sex pair →</text>
        <text x="748" y="416" fontSize="7.5" className="fill-muted-foreground">abnormality (trisomy, t(A;B), del, …)</text>
        <text x="748" y="446" fontSize="7.5" fontWeight="700" className="fill-foreground">Molecular cloning (same page):</text>
        <text x="748" y="458" fontSize="7.5" className="fill-muted-foreground">recombinant DNA molecule produced</text>
        <text x="748" y="468" fontSize="7.5" className="fill-muted-foreground">in a bacterial or eukaryotic host —</text>
        <text x="748" y="478" fontSize="7.5" className="fill-muted-foreground">human insulin, growth hormone.</text>
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Spectral karyotyping — painted chromosomes: translocation / duplication /
// microdeletion readouts
// ---------------------------------------------------------------------------

export function SkyKaryotypeSchematic() {
  const w = 980;
  const h = 580;
  const Painted = ({ x, y, tone, label, half }: { x: number; y: number; tone: string; label?: string; half?: string }) => (
    <g>
      <line x1={x - 5} y1={y + 8} x2={x - 5} y2={y + 52} strokeWidth="9" strokeLinecap="round" className={tone} />
      <line x1={x - 5} y1={y + 52} x2={x - 5} y2={y + 64} strokeWidth="4" className="stroke-border" />
      <line x1={x + 5} y1={y + 8} x2={x + 5} y2={y + 52} strokeWidth="9" strokeLinecap="round" className={half ?? tone} />
      <line x1={x + 5} y1={y + 52} x2={x + 5} y2={y + 64} strokeWidth="4" className="stroke-border" />
      {label && <text x={x} y={y + 78} textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-muted-foreground">{label}</text>}
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Spectral karyotyping: each chromosome painted a distinct color by chromosome-specific fluorescent probes; a two-color chromosome reveals an unbalanced translocation between chromosomes 17 and 19, a third copy of one color reveals a duplication or trisomy such as chromosome 8, and a missing stretch of fluorescence on one copy reveals a microdeletion; FISH uses fluorescent probes for specific localization" className="min-w-[940px]">
      {/* intro strip */}
      <g>
        <rect x="24" y="24" width="932" height="56" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="42" y="46" fontSize="10" fontWeight="800" className="fill-foreground">Chromosomes “painted” by hybridization with fluorescent probes</text>
        <text x="42" y="62" fontSize="7.5" className="fill-muted-foreground">that distinguish each chromosome from the others — used to identify aneuploidies and translocations in a karyotype.</text>
      </g>

      {/* painted spread */}
      <g>
        <rect x="24" y="100" width="640" height="456" rx="12" className="fill-muted/30 stroke-border" strokeWidth="1.4" />
        <text x="42" y="124" fontSize="10" fontWeight="800" className="fill-foreground">The paint panel (one color per chromosome)</text>
        {/* normal pairs */}
        <Painted x={80} y={140} tone="stroke-brand" label="1" />
        <Painted x={160} y={140} tone="stroke-neural" label="2" />
        <Painted x={240} y={140} tone="stroke-warning" label="3" />
        <Painted x={320} y={140} tone="stroke-success" label="4" />
        <Painted x={400} y={140} tone="stroke-brand" label="5" />
        <Painted x={480} y={140} tone="stroke-neural" label="6" />
        <Painted x={560} y={140} tone="stroke-warning" label="7" />
        {/* duplication row: three copies of chr 8 color */}
        <g>
          <Painted x={80} y={248} tone="stroke-success" label="8" />
          <Painted x={160} y={248} tone="stroke-success" label="8" />
          <Painted x={240} y={248} tone="stroke-success" label="8 — 3rd copy" />
          <rect x="206" y="240" width="78" height="86" rx="10" fill="none" strokeWidth="2" strokeDasharray="6 4" className="stroke-emergency" />
          <text x="245" y="338" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency">duplication</text>
          <text x="245" y="348" textAnchor="middle" fontSize="7" className="fill-emergency">trisomy / tetrasomy</text>
        </g>
        <Painted x={340} y={248} tone="stroke-brand" label="9" />
        <Painted x={420} y={248} tone="stroke-neural" label="10" />
        <Painted x={500} y={248} tone="stroke-warning" label="11" />
        <Painted x={580} y={248} tone="stroke-success" label="12" />
        {/* translocation row: 17/19 two-tone */}
        <g>
          <Painted x={80} y={368} tone="stroke-brand" label="17" />
          {/* two-tone chromosome: 19|17 */}
          <Painted x={180} y={368} tone="stroke-neural" half="stroke-brand" label="19 + 17 piece" />
          <Painted x={280} y={368} tone="stroke-neural" label="19" />
          <rect x={146} y={360} width="170" height="86" rx="10" fill="none" strokeWidth="2" strokeDasharray="6 4" className="stroke-emergency" />
          <text x="231" y="458" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency">two-color chromosome =</text>
          <text x="231" y="468" textAnchor="middle" fontSize="7.5" fontWeight="800" className="fill-emergency">unbalanced translocation (17;19)</text>
        </g>
        {/* microdeletion row */}
        <g>
          <Painted x={380} y={368} tone="stroke-warning" label="15" />
          {/* one copy missing a stretch */}
          <g>
            <line x1="455" y1="376" x2="455" y2="406" strokeWidth="9" strokeLinecap="round" className="stroke-warning" />
            <line x1="455" y1="406" x2="455" y2="420" strokeWidth="9" strokeLinecap="round" className="stroke-muted-foreground/50" strokeDasharray="2 3" />
            <line x1="455" y1="420" x2="455" y2="432" strokeWidth="9" strokeLinecap="round" className="stroke-warning" />
            <line x1="455" y1="432" x2="455" y2="444" strokeWidth="4" className="stroke-border" />
            <line x1="465" y1="376" x2="465" y2="432" strokeWidth="9" strokeLinecap="round" className="stroke-warning" />
            <line x1="465" y1="432" x2="465" y2="444" strokeWidth="4" className="stroke-border" />
            <text x="460" y="462" textAnchor="middle" fontSize="7.5" fontWeight="700" className="fill-muted-foreground">15 — one copy lacks signal</text>
            <rect x="436" y="360" width="94" height="110" rx="10" fill="none" strokeWidth="2" strokeDasharray="6 4" className="stroke-emergency" />
          </g>
          <text x="483" y="486" textAnchor="middle" fontSize="8" fontWeight="800" className="fill-emergency">microdeletion: lack of fluorescence at a locus</text>
          <text x="483" y="496" textAnchor="middle" fontSize="7" className="fill-emergency">vs the corresponding locus on the other copy</text>
        </g>
        <Painted x={560} y={368} tone="stroke-brand" label="X / Y" />
      </g>

      {/* readout definitions */}
      <g>
        <rect x="688" y="100" width="268" height="456" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
        <text x="704" y="126" fontSize="10" fontWeight="800" className="fill-foreground">Paint readouts</text>
        {[
          ["Translocation", "one chromosome breaks and its piece(s) attach to (an)other chromosome(s); the fluorescence signal shows the unbalanced translocation (between chromosomes 17 and 19 in the source image).", "fill-warning-soft stroke-warning", "fill-warning"],
          ["Duplication", "a second copy of a chromosome, resulting in a trisomy or tetrasomy (eg, chromosome 8 in the source image).", "fill-emergency-soft stroke-emergency", "fill-emergency"],
          ["Microdeletion", "lack of fluorescence at a specific locus on a chromosome compared to fluorescence at the corresponding locus on the second copy of that chromosome.", "fill-brand-soft stroke-brand", "fill-brand"],
        ].map(([t, s, box, tone], i) => (
          <g key={i}>
            <rect x="704" y={140 + i * 116} width="236" height="104" rx="9" className={box as string} strokeWidth="1.2" />
            <text x="716" y={160 + i * 116} fontSize="9" fontWeight="800" className={tone as string}>{t}</text>
            <foreignObject x={714} y={166 + i * 116} width="216" height="76">
              <div className="text-[7.4px] leading-snug text-muted-foreground">{s}</div>
            </foreignObject>
          </g>
        ))}
        <text x="704" y="500" fontSize="7.5" fontWeight="700" className="fill-foreground">FISH: fluorescent DNA or RNA probe binds</text>
        <text x="704" y="510" fontSize="7.5" fontWeight="700" className="fill-foreground">specific genes or sites of interest —</text>
        <text x="704" y="520" fontSize="7.5" className="fill-muted-foreground">used for specific localization (SKY paints</text>
        <text x="704" y="530" fontSize="7.5" className="fill-muted-foreground">whole chromosomes; FISH aims at one locus).</text>
      </g>
    </svg>
  );
}
