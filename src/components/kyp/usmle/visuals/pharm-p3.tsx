/* Pharmacology — PH-batch 3: Drug metabolism (book 230, pdf 252 TOP half).
 * Original KYP redraw of the source page's ONE vector flow figure
 * (pdfimages + VLM census: ZERO raster images on the page; no margin
 * notes or mnemonics in the metabolism half — ph3-vlm-census.ts).
 * Redrawn here with original KYP glyphs: the LIPOPHILIC-DRUG chip and
 * the POLAR-DRUGS bypass lane, the PHASE I CYP450 reactor with its
 * three reaction chutes (Reduction / Oxidation / Hydrolysis) plus the
 * reactive-oxygen-metabolites warning flag, the PHASE II conjugation
 * station (Methylation / Acetylation / Glucuronidation / Sulfation)
 * with the EXCEPT-ACETYLATED exception chip, the two EXCRETION routes
 * (serum → urine/sweat; bile → stool), the phase I vs phase II
 * comparison strip, the two clinical-rule cards (geriatric phase-I
 * loss; slow acetylator / isoniazid), and the FORKS-NOT-A-LADDER
 * banner. Nothing is reproduced from the book; purely presentational
 * (no props, no hooks, no external images). */

export function MetabolismPhaseMap() {
  const w = 1102;
  const h = 1010;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Drug metabolism — the phase I/II pipeline with the polar-drug bypass lane, the reactive-oxygen flag, the except-acetylated chip, the two excretion routes, and the geriatric and slow-acetylator rules (original KYP redraw of book 230)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Drug metabolism — the phase I/II pipeline (original KYP redraw)</text>
        <rect x="812" y="25" width="250" height="18" className="fill-brand-soft" />
        <text x="937" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">one pipeline · one fork · one exception</text>
      </g>

      {/* ===== ZONE A — THE PIPELINE ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="436" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE PIPELINE — lipophilic in, excreted out (the flow figure, redrawn with original KYP glyphs)</text>

        {/* input chips */}
        <rect x="52" y="112" width="156" height="84" rx="10" className="fill-card stroke-brand" />
        <path d="M 78 126 C 84 134 88 139 88 145 A 10 10 0 1 1 68 145 C 68 139 72 134 78 126 Z" className="fill-brand-soft stroke-brand" />
        <text x="98" y="136" fontSize="4.6" fontWeight="800" className="fill-foreground">LIPOPHILIC DRUGS</text>
        <text x="66" y="164" fontSize="4.2" fontWeight="700" className="fill-foreground">Fat-soluble — cannot leave the</text>
        <text x="66" y="176" fontSize="4.2" fontWeight="700" className="fill-foreground">body as-is; they enter the</text>
        <text x="66" y="188" fontSize="4.2" fontWeight="700" className="fill-foreground">CYP450 reactor first.</text>

        <rect x="52" y="268" width="156" height="84" rx="10" className="fill-card stroke-border" />
        <circle cx="78" cy="292" r="10" className="fill-secondary stroke-border" />
        <path d="M 71 291 q 3.5 -3.5 7 0 t 7 0 M 71 296 q 3.5 -3.5 7 0 t 7 0" fill="none" className="stroke-foreground" strokeWidth="1" />
        <text x="98" y="290" fontSize="4.6" fontWeight="800" className="fill-foreground">POLAR DRUGS</text>
        <text x="98" y="301" fontSize="4.6" fontWeight="800" className="fill-foreground">(water-soluble)</text>
        <text x="66" y="320" fontSize="4.2" fontWeight="700" className="fill-foreground">Already water-soluble —</text>
        <text x="66" y="332" fontSize="4.2" fontWeight="700" className="fill-foreground">they take the bypass lane</text>
        <text x="66" y="344" fontSize="4.2" fontWeight="700" className="fill-foreground">straight to phase II.</text>

        {/* lipophilic → phase I arrow */}
        <line x1="208" y1="154" x2="238" y2="154" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 238 150 L 248 154 L 238 158 Z" className="fill-foreground" />

        {/* PHASE I reactor */}
        <rect x="248" y="104" width="300" height="252" rx="10" className="fill-card stroke-warning" />
        <circle cx="268" cy="126" r="10" className="fill-warning-soft stroke-warning" />
        <text x="268" y="129.5" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-warning">I</text>
        <text x="286" y="130" fontSize="5" fontWeight="800" className="fill-warning">PHASE I — predominantly CYP450-dependent</text>
        <rect x="262" y="146" width="272" height="34" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="274" y="161" fontSize="4.6" fontWeight="800" className="fill-foreground">REDUCTION</text>
        <text x="274" y="173" fontSize="4.2" className="fill-muted-foreground">electron gain — a CYP450 redox chute</text>
        <rect x="262" y="186" width="272" height="34" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="274" y="201" fontSize="4.6" fontWeight="800" className="fill-foreground">OXIDATION</text>
        <text x="274" y="213" fontSize="4.2" className="fill-muted-foreground">electron loss — the classic CYP450 chute</text>
        <rect x="262" y="226" width="272" height="34" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="274" y="241" fontSize="4.6" fontWeight="800" className="fill-foreground">HYDROLYSIS</text>
        <text x="274" y="253" fontSize="4.2" className="fill-muted-foreground">water splits the bond (esters, amides)</text>
        <text x="262" y="284" fontSize="4.6" fontWeight="800" className="fill-foreground">OUTPUT: SLIGHTLY POLAR METABOLITE</text>
        <text x="262" y="296" fontSize="4.2" fontWeight="700" className="fill-foreground">(active or inactive) — the prodrug clause:</text>
        <text x="262" y="308" fontSize="4.2" fontWeight="700" className="fill-foreground">phase I can bioactivate or deactivate the drug</text>
        <text x="262" y="330" fontSize="3.8" className="fill-muted-foreground">→ onward to phase II (or out as a single reaction)</text>

        {/* reactive oxygen metabolites warning flag */}
        <rect x="248" y="372" width="300" height="44" rx="10" className="fill-emergency-soft/30 stroke-emergency" />
        <path d="M 268 382 L 278 398 L 258 398 Z" className="fill-emergency" />
        <text x="286" y="390" fontSize="4.6" fontWeight="800" className="fill-emergency">REACTIVE OXYGEN METABOLITES</text>
        <text x="286" y="402" fontSize="4.2" className="fill-foreground">generated alongside the phase I output — printed twice on the page</text>
        <text x="286" y="412" fontSize="3.8" className="fill-muted-foreground">(here and again beside the phase II header)</text>

        {/* PHASE II conjugation station */}
        <rect x="600" y="104" width="306" height="252" rx="10" className="fill-card stroke-brand" />
        <circle cx="620" cy="126" r="10" className="fill-brand-soft stroke-brand" />
        <text x="620" y="129.5" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-brand">II</text>
        <text x="638" y="130" fontSize="5" fontWeight="800" className="fill-brand">PHASE II — conjugation</text>
        <rect x="614" y="146" width="278" height="24" rx="6" className="fill-brand-soft/40 stroke-brand" />
        <text x="626" y="162" fontSize="4.6" fontWeight="800" className="fill-foreground">METHYLATION — adds a methyl group</text>
        <rect x="614" y="176" width="278" height="24" rx="6" className="fill-brand-soft/40 stroke-emergency" />
        <text x="626" y="192" fontSize="4.6" fontWeight="800" className="fill-foreground">ACETYLATION — the exception (chip below)</text>
        <rect x="614" y="206" width="278" height="24" rx="6" className="fill-brand-soft/40 stroke-brand" />
        <text x="626" y="222" fontSize="4.6" fontWeight="800" className="fill-foreground">GLUCURONIDATION — adds glucuronic acid</text>
        <rect x="614" y="236" width="278" height="24" rx="6" className="fill-brand-soft/40 stroke-brand" />
        <text x="626" y="252" fontSize="4.6" fontWeight="800" className="fill-foreground">SULFATION — adds a sulfate group</text>
        <text x="614" y="284" fontSize="4.6" fontWeight="800" className="fill-foreground">OUTPUT: VERY POLAR, HYDROPHILIC METABOLITE</text>
        <rect x="614" y="292" width="278" height="44" rx="8" className="fill-card stroke-emergency" strokeDasharray="3 2" />
        <text x="626" y="306" fontSize="4.6" fontWeight="800" className="fill-emergency">EXCEPT ACETYLATED METABOLITE</text>
        <text x="626" y="318" fontSize="4.2" className="fill-foreground">the one conjugate that does NOT become</text>
        <text x="626" y="330" fontSize="3.8" className="fill-muted-foreground">very polar, hydrophilic — the figure&apos;s single printed exception</text>

        {/* excretion terminal */}
        <rect x="938" y="104" width="114" height="252" rx="10" className="fill-card stroke-emergency" />
        <text x="952" y="128" fontSize="5" fontWeight="800" className="fill-emergency">EXCRETION</text>
        <rect x="950" y="146" width="90" height="96" rx="8" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="958" y="166" fontSize="4.2" fontWeight="800" className="fill-foreground">Serum</text>
        <text x="958" y="180" fontSize="4.2" className="fill-foreground">(urine,</text>
        <text x="958" y="192" fontSize="4.2" className="fill-foreground">sweat)</text>
        <rect x="950" y="252" width="90" height="96" rx="8" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="958" y="272" fontSize="4.2" fontWeight="800" className="fill-foreground">bile</text>
        <text x="958" y="286" fontSize="4.2" className="fill-foreground">(stool)</text>

        {/* phase I → phase II arrow */}
        <line x1="548" y1="230" x2="588" y2="230" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 588 226 L 598 230 L 588 234 Z" className="fill-foreground" />
        <text x="573" y="250" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">slightly</text>
        <text x="573" y="259" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">polar</text>

        {/* phase II → excretion arrow */}
        <line x1="906" y1="230" x2="928" y2="230" className="stroke-foreground" strokeWidth="1.4" />
        <path d="M 928 226 L 938 230 L 928 234 Z" className="fill-foreground" />
        <text x="922" y="250" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">very</text>
        <text x="922" y="259" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">polar</text>

        {/* the polar-drug bypass lane */}
        <path d="M 208 310 H 222 V 440 H 574 V 364" fill="none" className="stroke-foreground" strokeWidth="1.4" strokeDasharray="5 3" />
        <path d="M 570 364 L 574 356 L 578 364 Z" className="fill-foreground" />
        <text x="240" y="433" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">BYPASS LANE — polar drugs (water-soluble) skip phase I and feed phase II directly</text>
      </g>

      {/* ===== ZONE B — PHASE I vs PHASE II ===== */}
      <g>
        <rect x="36" y="520" width="1030" height="180" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="542" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FORK, SIDE BY SIDE — phase I vs phase II</text>
        <rect x="52" y="556" width="497" height="24" className="fill-warning-soft/40 stroke-warning" />
        <text x="64" y="572" fontSize="4.6" fontWeight="800" className="fill-warning">PHASE I — predominantly CYP450-dependent</text>
        <rect x="567" y="556" width="483" height="24" className="fill-brand-soft/40 stroke-brand" />
        <text x="579" y="572" fontSize="4.6" fontWeight="800" className="fill-brand">PHASE II — conjugation</text>
        <rect x="52" y="588" width="497" height="30" rx="6" className="fill-card stroke-border" />
        <text x="64" y="607" fontSize="4.2" fontWeight="700" className="fill-foreground">REACTIONS — Reduction · Oxidation · Hydrolysis</text>
        <rect x="567" y="588" width="483" height="30" rx="6" className="fill-card stroke-border" />
        <text x="579" y="607" fontSize="4.2" fontWeight="700" className="fill-foreground">REACTIONS — Methylation · Acetylation · Glucuronidation · Sulfation</text>
        <rect x="52" y="624" width="497" height="30" rx="6" className="fill-card stroke-border" />
        <text x="64" y="643" fontSize="4.2" fontWeight="700" className="fill-foreground">OUTPUT — Slightly polar metabolite (active or inactive) + reactive oxygen metabolites</text>
        <rect x="567" y="624" width="483" height="30" rx="6" className="fill-card stroke-border" />
        <text x="579" y="643" fontSize="4.2" fontWeight="700" className="fill-foreground">OUTPUT — Very polar, hydrophilic metabolite (except the acetylated metabolite)</text>
        <rect x="52" y="660" width="497" height="30" rx="6" className="fill-card stroke-warning" />
        <text x="64" y="679" fontSize="4.2" fontWeight="700" className="fill-foreground">PATIENT RULE — Geriatric patients lose phase I first</text>
        <rect x="567" y="660" width="483" height="30" rx="6" className="fill-card stroke-emergency" />
        <text x="579" y="679" fontSize="4.2" fontWeight="700" className="fill-foreground">PATIENT RULE — Slow acetylators: ↓ rate of metabolism → ↑ adverse effects (eg, isoniazid)</text>
      </g>

      {/* ===== ZONE C — THE TWO CLINICAL RULES ===== */}
      <g>
        <rect x="36" y="714" width="1030" height="150" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="736" fontSize="5.4" fontWeight="800" className="fill-foreground">THE TWO CLINICAL RULES — the patient modifiers of the pipeline</text>
        <rect x="52" y="750" width="497" height="98" rx="10" className="fill-card stroke-warning" />
        <text x="66" y="768" fontSize="5" fontWeight="800" className="fill-warning">GERIATRIC RULE</text>
        <text x="66" y="782" fontSize="4.6" fontWeight="800" className="fill-foreground">Geriatric patients lose phase I first.</text>
        <text x="66" y="796" fontSize="4.2" fontWeight="700" className="fill-foreground">The predominantly CYP450-dependent reactions (reduction, oxidation,</text>
        <text x="66" y="808" fontSize="4.2" fontWeight="700" className="fill-foreground">hydrolysis) decline with age BEFORE phase II conjugation — dose</text>
        <text x="66" y="820" fontSize="4.2" fontWeight="700" className="fill-foreground">phase-I-dependent drugs cautiously in elderly patients.</text>
        <text x="66" y="838" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">THE CYP GREYS FIRST</text>
        <rect x="567" y="750" width="483" height="98" rx="10" className="fill-card stroke-emergency" />
        <text x="581" y="768" fontSize="5" fontWeight="800" className="fill-emergency">SLOW-ACETYLATOR RULE</text>
        <text x="581" y="782" fontSize="4.6" fontWeight="800" className="fill-foreground">↑ adverse effects from ↓ rate of metabolism (eg, isoniazid).</text>
        <text x="581" y="796" fontSize="4.2" fontWeight="700" className="fill-foreground">Patients who are slow acetylators metabolize acetylation-dependent</text>
        <text x="581" y="808" fontSize="4.2" fontWeight="700" className="fill-foreground">drugs slowly — the drug lingers, and dose-related adverse effects</text>
        <text x="581" y="820" fontSize="4.2" fontWeight="700" className="fill-foreground">surface (isoniazid: peripheral neuropathy).</text>
        <text x="581" y="838" fontSize="3.8" fontWeight="800" className="fill-muted-foreground">THE ACETYLATOR STALLS</text>
      </g>

      {/* ===== ZONE D — FORKS, NOT A LADDER ===== */}
      <g>
        <rect x="36" y="878" width="1030" height="56" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="52" y="900" fontSize="5" fontWeight="800" className="fill-foreground">FORKS, NOT A LADDER — either or both phases, never obligately sequential</text>
        <text x="52" y="916" fontSize="4.2" className="fill-foreground">Drugs can be metabolized by either or both phase I and phase II reactions; the reactions serve to bioactivate or deactivate substances, and do</text>
        <text x="52" y="926" fontSize="4.2" className="fill-foreground">not have to take place sequentially — phase I can follow phase II, or take place as a single reaction.</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="946" width="1054" height="60" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="964" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 252 / book 230 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Drug metabolism)</text>
        <text x="42" y="977" fontSize="4" className="fill-muted-foreground">Census (pdfimages + VLM, ph3-vlm-census.ts): ZERO raster images — the metabolism half is pure text plus ONE vector flow figure (lipophilic drugs → phase I → phase II →</text>
        <text x="42" y="988" fontSize="4" className="fill-muted-foreground">excretion, with the polar-drug bypass lane); NO margin notes or mnemonics print in the metabolism half. SHARED PAGE: the bottom half (Elimination of drugs) is the</text>
        <text x="42" y="999" fontSize="4" className="fill-muted-foreground">sibling topic (the p196 convention) — only the metabolism block is quoted. The pipeline glyphs, rule cards, and banner are an ORIGINAL KYP redraw.</text>
      </g>
    </svg>
  );
}
