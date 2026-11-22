/* Pharmacology — PH-batch 28: Biologic agents (book 254, pdf 276 — the LAST
 * page of the Pharmacology chapter; ONE table, columns ENDING / CATEGORY /
 * EXAMPLE, three group banners, eleven rows). Census (pdfimages): ZERO
 * raster images — the page's visual asset is the color-coded table itself
 * (red mnemonic letters inside the CATEGORY cells, light blue-gray group
 * banner rows, dark navy title), VLM-read at 120dpi
 * (staging-ph28/vlm-census.txt), no margin mnemonics, no images; the table
 * occupies the top ~40% of a short final page. This is an ORIGINAL KYP
 * ADAPTATION: the -mab humanization ladder drawn as three Y-shaped
 * antibodies color-coded by retained mouse sequence (-ximab chimeric with
 * mouse arms, -zumab humanized with grafted loop tips, -umab fully human),
 * the format-follows-the-target cell-crossing panel (the -mab antibody
 * locked outside the plasma membrane at overexpressed surface receptors
 * while the six -ib small molecules enter and jam their intracellular
 * machines), the -kin see-saw at the interleukin receptor (aldesleukin the
 * interleukin-2 agonist/analog pushing, anakinra the interleukin receptor
 * antagonist blocking), and the four-move decode protocol strip. The
 * ladder, the panel, the see-saw, and the protocol are KYP's; every ending,
 * category, and example is preserved from the print, and the full table is
 * also carried verbatim in the note's table blocks. Nothing is reproduced
 * from the book; purely presentational (no props, no hooks, no external
 * images). */

export function BiologicAgentsMap() {
  const w = 1102;
  const h = 1116;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Biologic agents — the naming table drawn as a decoder: the -mab humanization ladder (chimeric -ximab rituximab, humanized -zumab bevacizumab, human -umab denosumab) color-coded by retained mouse sequence, the format-follows-the-target cell-crossing panel where the antibody stays outside at overexpressed surface receptors while the six -ib small molecules enter and jam their intracellular machines (-ciclib cyclin-dependent kinase, -coxib COX-2, -parib poly(ADP-ribose) polymerase, -rafenib BRAF, -tinib tyrosine kinase, -zomib proteasome), the -kin see-saw at the interleukin receptor (aldesleukin the interleukin-2 agonist/analog, anakinra the interleukin receptor antagonist), and the four-move decode protocol — an original KYP diagram of book 254." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Biologic agents — the naming table as a decoder ring (original KYP diagram)</text>
        <rect x="762" y="25" width="300" height="18" className="fill-brand-soft" />
        <text x="912" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">11 rows · 3 stems · 1 grammar</text>
      </g>

      {/* ===== ZONE A — THE -mab SOURCE LADDER ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="260" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE -mab SOURCE LADDER — the monoclonal antibodies group, drawn by mouse content</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the printed banner: “Monoclonal antibodies (-mab)—target overexpressed cell surface receptors” — three rungs, -xi- to -u-</text>

        {/* the ladder strip */}
        <rect x="64" y="112" width="976" height="14" rx="7" className="fill-card stroke-border" />
        <rect x="64" y="112" width="140" height="14" rx="7" className="fill-warning" />
        <rect x="900" y="112" width="140" height="14" rx="7" className="fill-success" />
        <path d="M 480 119 L 600 119" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 596 115 L 606 119 L 596 123 Z" className="fill-foreground" />
        <text x="552" y="130" textAnchor="middle" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">the humanization ladder — retained mouse sequence and infusion immunogenicity descend left → right (KYP context)</text>

        {/* rung 1 — chimeric */}
        <g>
          <rect x="60" y="138" width="300" height="124" rx="10" className="fill-card stroke-warning" />
          <path d="M 125 205 L 92 154" className="stroke-warning" strokeWidth="13" strokeLinecap="round" />
          <path d="M 125 205 L 158 154" className="stroke-warning" strokeWidth="13" strokeLinecap="round" />
          <path d="M 125 205 L 125 256" className="stroke-brand" strokeWidth="13" strokeLinecap="round" />
          <circle cx="92" cy="154" r="7" className="fill-warning" />
          <circle cx="158" cy="154" r="7" className="fill-warning" />
          <text x="100" y="146" fontSize="2.7" fontWeight="700" className="fill-warning">mouse variable</text>
          <text x="132" y="243" fontSize="2.7" fontWeight="700" className="fill-brand">human constant</text>
          <text x="196" y="160" fontSize="7" fontWeight="800" className="fill-warning">-ximab</text>
          <text x="196" y="172" fontSize="3.2" fontWeight="700" className="fill-foreground">Chimeric human-mouse</text>
          <text x="196" y="181" fontSize="3.2" fontWeight="700" className="fill-foreground">monoclonal antibody</text>
          <text x="196" y="196" fontSize="3.4" fontWeight="800" className="fill-foreground">Rituximab</text>
          <text x="196" y="210" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">mouse variable regions remain —</text>
          <text x="196" y="219" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">the most mouse, the most</text>
          <text x="196" y="228" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">immunogenic rung (KYP context)</text>
        </g>

        {/* rung 2 — humanized */}
        <g>
          <rect x="385" y="138" width="300" height="124" rx="10" className="fill-card stroke-brand" />
          <path d="M 450 205 L 417 154" className="stroke-brand" strokeWidth="13" strokeLinecap="round" />
          <path d="M 450 205 L 483 154" className="stroke-brand" strokeWidth="13" strokeLinecap="round" />
          <path d="M 450 205 L 450 256" className="stroke-brand" strokeWidth="13" strokeLinecap="round" />
          <circle cx="417" cy="154" r="5.5" className="fill-warning" />
          <circle cx="483" cy="154" r="5.5" className="fill-warning" />
          <text x="500" y="146" fontSize="2.7" fontWeight="700" className="fill-warning">only the loops are mouse</text>
          <text x="457" y="243" fontSize="2.7" fontWeight="700" className="fill-brand">human frame</text>
          <text x="521" y="160" fontSize="7" fontWeight="800" className="fill-brand">-zumab</text>
          <text x="521" y="172" fontSize="3.2" fontWeight="700" className="fill-foreground">Humanized monoclonal</text>
          <text x="521" y="181" fontSize="3.2" fontWeight="700" className="fill-foreground">antibody</text>
          <text x="521" y="196" fontSize="3.4" fontWeight="800" className="fill-foreground">Bevacizumab</text>
          <text x="521" y="210" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">the binding loops (CDRs) grafted</text>
          <text x="521" y="219" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">onto a fully human frame —</text>
          <text x="521" y="228" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">far less mouse than chimeric</text>
        </g>

        {/* rung 3 — human */}
        <g>
          <rect x="710" y="138" width="300" height="124" rx="10" className="fill-card stroke-success" />
          <path d="M 775 205 L 742 154" className="stroke-success" strokeWidth="13" strokeLinecap="round" />
          <path d="M 775 205 L 808 154" className="stroke-success" strokeWidth="13" strokeLinecap="round" />
          <path d="M 775 205 L 775 256" className="stroke-success" strokeWidth="13" strokeLinecap="round" />
          <circle cx="742" cy="154" r="6" className="fill-success" />
          <circle cx="808" cy="154" r="6" className="fill-success" />
          <text x="745" y="146" fontSize="2.7" fontWeight="700" className="fill-success">fully human sequence</text>
          <text x="782" y="243" fontSize="2.7" fontWeight="700" className="fill-success">human</text>
          <text x="846" y="160" fontSize="7" fontWeight="800" className="fill-success">-umab</text>
          <text x="846" y="172" fontSize="3.2" fontWeight="700" className="fill-foreground">Human monoclonal</text>
          <text x="846" y="181" fontSize="3.2" fontWeight="700" className="fill-foreground">antibody</text>
          <text x="846" y="196" fontSize="3.4" fontWeight="800" className="fill-foreground">Denosumab</text>
          <text x="846" y="210" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">derived start to finish from</text>
          <text x="846" y="219" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">human immunoglobulin genes —</text>
          <text x="846" y="228" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">the top rung of the ladder</text>
        </g>

        <text x="52" y="286" fontSize="3.6" fontWeight="800" className="fill-foreground">READ THE NAME RIGHT-TO-LEFT: [target infix] + [source infix] + -mab — the stem names the format (a 150-kDa extracellular protein aimed at an overexpressed cell-surface receptor);</text>
        <text x="52" y="297" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the infix immediately before -mab names the source: -xi- chimeric · -zu- humanized · plain -u- human. The grammar generalizes beyond the page (KYP context): infliximab -xi- · trastuzumab -zu- · adalimumab -u-.</text>
      </g>

      {/* ===== ZONE B — THE FORMAT FOLLOWS THE TARGET ===== */}
      <g>
        <rect x="36" y="350" width="1030" height="390" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="372" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FORMAT FOLLOWS THE TARGET — where the target lives decides the drug&apos;s format (the two printed banners)</text>
        <text x="52" y="383" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">an antibody cannot cross the plasma membrane → cell-surface receptors (-mab); a small molecule crosses → intracellular molecules (-ib)</text>

        {/* extracellular side — the -mab antibody at surface receptors */}
        <g>
          <path d="M 150 396 L 150 432" className="stroke-brand" strokeWidth="10" strokeLinecap="round" />
          <path d="M 150 432 L 118 464" className="stroke-warning" strokeWidth="10" strokeLinecap="round" />
          <path d="M 150 432 L 182 464" className="stroke-warning" strokeWidth="10" strokeLinecap="round" />
          <circle cx="118" cy="464" r="5.5" className="fill-warning" />
          <circle cx="182" cy="464" r="5.5" className="fill-warning" />
          <text x="128" y="394" fontSize="2.8" fontWeight="800" className="fill-brand">-mab</text>
          <rect x="104" y="466" width="28" height="9" rx="3" className="fill-brand-soft stroke-brand" />
          <rect x="168" y="466" width="28" height="9" rx="3" className="fill-brand-soft stroke-brand" />
          <text x="230" y="414" fontSize="3.8" fontWeight="800" className="fill-foreground">-mab — monoclonal antibody: a large extracellular protein</text>
          <text x="230" y="427" fontSize="3.4" fontWeight="700" className="fill-foreground">locked OUTSIDE the membrane, aimed at OVEREXPRESSED CELL-SURFACE</text>
          <text x="230" y="438" fontSize="3.4" fontWeight="700" className="fill-foreground">RECEPTORS — the printed banner verbatim. Rituximab · Bevacizumab ·</text>
          <text x="230" y="449" fontSize="3.4" fontWeight="700" className="fill-foreground">Denosumab — three source rungs, one address: outside the cell.</text>
          <text x="230" y="463" fontSize="3" fontWeight="700" className="fill-muted-foreground">(arms colored by source rung — the ladder from Zone A applies to every -mab)</text>
          {/* interleukin receptors live here too */}
          <rect x="742" y="466" width="30" height="9" rx="3" className="fill-warning-soft/50 stroke-warning" />
          <text x="784" y="424" fontSize="3.4" fontWeight="800" className="fill-warning">interleukin receptors live on the surface too —</text>
          <text x="784" y="435" fontSize="3.4" fontWeight="700" className="fill-warning">the -kin family modulates them (see-saw below):</text>
          <text x="784" y="446" fontSize="3.4" fontWeight="700" className="fill-foreground">-leukin the agonist/analog · -kinra the antagonist</text>
          <text x="784" y="460" fontSize="3" fontWeight="700" className="fill-muted-foreground">“agonists and antagonists of interleukin receptors” — printed banner</text>
        </g>

        {/* the membrane */}
        <rect x="60" y="480" width="982" height="20" rx="8" className="fill-card stroke-border" />
        <text x="552" y="493.5" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">PLASMA MEMBRANE — antibodies cannot cross it; small molecules can</text>

        {/* intracellular side — the -ib six */}
        <g>
          <text x="52" y="522" fontSize="3.8" fontWeight="800" className="fill-foreground">INSIDE THE CELL — the six -ib small molecules cross the membrane and jam their intracellular machines; each infix names the machine:</text>
          {[
            ["CYCLIN-DEPENDENT KINASE", "-ciclib", "Palbociclib", 52, 532],
            ["COX-2", "-coxib", "Celecoxib", 391, 532],
            ["POLY(ADP-RIBOSE) POLYMERASE", "-parib", "Olaparib", 730, 532],
            ["BRAF", "-rafenib", "Vemurafenib", 52, 618],
            ["TYROSINE KINASE", "-tinib", "Imatinib", 391, 618],
            ["PROTEASOME", "-zomib", "Bortezomib", 730, 618],
          ].map(([machine, ending, example, x, y], i) => (
            <g key={`ib-${i}`}>
              <rect x={x as number} y={y as number} width="322" height="74" rx="8" className="fill-card stroke-warning" />
              <text x={(x as number) + 14} y={(y as number) + 18} fontSize="3.6" fontWeight="800" className="fill-foreground">{machine as string}</text>
              <text x={(x as number) + 14} y={(y as number) + 36} fontSize="3.6" fontWeight="800" className="fill-warning">inhibitor ← {ending as string}</text>
              <text x={(x as number) + 14} y={(y as number) + 54} fontSize="3.2" fontWeight="700" className="fill-muted-foreground">printed example: {example as string}</text>
              <circle cx={(x as number) + 296} cy={(y as number) + 22} r="8" className="stroke-warning" strokeWidth="1.4" fill="none" />
              <line x1={(x as number) + 290} y1={(y as number) + 28} x2={(x as number) + 302} y2={(y as number) + 16} className="stroke-warning" strokeWidth="1.4" />
            </g>
          ))}
          <text x="552" y="718" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">“Small molecule inhibitors (-ib)—target intracellular molecules” — the printed banner; the -ib suffix is the shared signature of inhibition</text>
        </g>
      </g>

      {/* ===== ZONE C — THE -kin SEE-SAW ===== */}
      <g>
        <rect x="36" y="750" width="1030" height="210" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="772" fontSize="5.4" fontWeight="800" className="fill-foreground">THE -kin SEE-SAW — one receptor family, two directions</text>
        <text x="52" y="783" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the printed banner: “Interleukin receptor modulators (-kin)—agonists and antagonists of interleukin receptors” — the immunology bridge</text>

        {/* left panel — -leukin, the agonist/analog */}
        <g>
          <rect x="52" y="795" width="492" height="150" rx="10" className="fill-card stroke-success" />
          <text x="66" y="815" fontSize="4.4" fontWeight="800" className="fill-success">-leukin — Interleukin-2 agonist/analog</text>
          <circle cx="360" cy="846" r="11" className="fill-success stroke-success" strokeWidth="1.5" />
          <text x="360" y="848" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-card">IL-2</text>
          <line x1="373" y1="846" x2="408" y2="846" className="stroke-success" strokeWidth="1.6" />
          <path d="M 404 842 L 414 846 L 404 850 Z" className="fill-success" />
          <text x="390" y="838" textAnchor="middle" fontSize="2.7" fontWeight="700" className="fill-success">mimics &amp; stimulates</text>
          <rect x="416" y="828" width="30" height="36" rx="5" className="fill-brand-soft stroke-brand" />
          <text x="431" y="850" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-brand">IL-2R</text>
          <rect x="396" y="866" width="86" height="8" rx="4" className="fill-secondary stroke-border" />
          <rect x="404" y="880" width="120" height="14" rx="5" className="fill-success-soft/50 stroke-success" />
          <text x="464" y="889.5" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-success">signal ON — T-cell expansion (KYP context)</text>
          <text x="66" y="840" fontSize="3.4" fontWeight="700" className="fill-foreground">Aldesleukin — a recombinant MIMIC of interleukin-2, an</text>
          <text x="66" y="850" fontSize="3.4" fontWeight="700" className="fill-foreground">agonist/ANALOG that pushes the receptor the same way</text>
          <text x="66" y="860" fontSize="3.4" fontWeight="700" className="fill-foreground">the native cytokine does (KYP context: IL-2 is the</text>
          <text x="66" y="870" fontSize="3.4" fontWeight="700" className="fill-foreground">T-cell growth factor — its analog amplifies the response).</text>
          <text x="66" y="890" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">The stem carries the word interleukin itself: -leukin.</text>
          <rect x="66" y="906" width="150" height="16" rx="5" className="fill-success" />
          <text x="141" y="917" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-card">LEUKIN LIFTS (KYP)</text>
        </g>

        {/* right panel — -kinra, the antagonist */}
        <g>
          <rect x="556" y="795" width="492" height="150" rx="10" className="fill-card stroke-warning" />
          <text x="570" y="815" fontSize="4.4" fontWeight="800" className="fill-warning">-kinra — Interleukin receptor antagonist</text>
          <circle cx="864" cy="846" r="11" className="fill-warning stroke-warning" strokeWidth="1.5" />
          <text x="864" y="848" textAnchor="middle" fontSize="2.7" fontWeight="800" className="fill-card">IL-1Ra</text>
          <rect x="878" y="828" width="30" height="36" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="893" y="850" textAnchor="middle" fontSize="3" fontWeight="800" className="fill-warning">IL-1R</text>
          <rect x="858" y="866" width="86" height="8" rx="4" className="fill-secondary stroke-border" />
          <rect x="866" y="880" width="130" height="14" rx="5" className="fill-warning-soft/50 stroke-warning" />
          <text x="931" y="889.5" textAnchor="middle" fontSize="2.8" fontWeight="800" className="fill-warning">signal OFF — inflammation damped</text>
          <circle cx="800" cy="846" r="10" className="fill-card stroke-foreground" />
          <text x="800" y="848" textAnchor="middle" fontSize="2.6" fontWeight="800" className="fill-foreground">IL-1</text>
          <line x1="812" y1="840" x2="866" y2="852" className="stroke-foreground" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="826" y1="838" x2="842" y2="854" className="stroke-warning" strokeWidth="1.6" />
          <line x1="842" y1="838" x2="826" y2="854" className="stroke-warning" strokeWidth="1.6" />
          <text x="570" y="840" fontSize="3.4" fontWeight="700" className="fill-foreground">Anakinra — a recombinant copy of the body&apos;s own</text>
          <text x="570" y="850" fontSize="3.4" fontWeight="700" className="fill-foreground">interleukin-1 receptor antagonist (KYP context) that</text>
          <text x="570" y="860" fontSize="3.4" fontWeight="700" className="fill-foreground">OCCUPIES the receptor without activating it — the native</text>
          <text x="570" y="870" fontSize="3.4" fontWeight="700" className="fill-foreground">cytokine arrives and finds the seat taken (the X above).</text>
          <text x="570" y="890" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">The antagonist direction of the same -kin family.</text>
          <rect x="570" y="906" width="160" height="16" rx="5" className="fill-warning" />
          <text x="650" y="917" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-card">KINRA KNOCKS (KYP)</text>
        </g>
      </g>

      {/* ===== ZONE D — THE FOUR-MOVE DECODE PROTOCOL ===== */}
      <g>
        <rect x="36" y="970" width="1030" height="58" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="986" fontSize="4.6" fontWeight="800" className="fill-foreground">DECODING ANY BIOLOGIC NAME IN FOUR MOVES (the KYP protocol)</text>
        {[
          ["MOVE 1 — READ THE STEM", "-mab antibody · -ib intracellular · -kin interleukin", 52, 240],
          ["MOVE 2 — IF -mab, THE SOURCE INFIX", "-xi- chimeric · -zu- humanized · -u- human", 302, 250],
          ["MOVE 3 — IF -ib/-kin, TARGET OR DIRECTION", "the infix names the machine; the stem names the arrow", 562, 250],
          ["MOVE 4 — RECALL THE EXAMPLE", "rituximab → then generalize to any name", 822, 246],
        ].map(([label, sub, x, bw], i) => (
          <g key={`move-${i}`}>
            <rect x={x as number} y="996" width={bw as number} height="20" rx="5" className="fill-card stroke-brand" />
            <text x={(x as number) + (bw as number) / 2} y="1003" textAnchor="middle" fontSize="3.3" fontWeight="800" className="fill-foreground">{label as string}</text>
            <text x={(x as number) + (bw as number) / 2} y="1012" textAnchor="middle" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">{sub as string}</text>
            {i < 3 && (
              <g>
                <line x1={(x as number) + (bw as number) + 3} y1="1006" x2={(x as number) + (bw as number) + 8} y2="1006" className="stroke-foreground" strokeWidth="1.2" />
                <path d={`M ${(x as number) + (bw as number) + 5} 1003 L ${(x as number) + (bw as number) + 11} 1006 L ${(x as number) + (bw as number) + 5} 1009 Z`} className="fill-foreground" />
              </g>
            )}
          </g>
        ))}
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1040" width="1054" height="62" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1058" fontSize="4.2" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 276 / book 254 (Pharmacology — Miscellaneous: Biologic agents — the LAST page of Pharmacology; pdf 277 opens Public Health Sciences)</text>
        <text x="42" y="1070" fontSize="3.8" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the page&apos;s asset is the color-coded table itself (red mnemonic letters inside the CATEGORY cells, light blue-gray group banner rows, dark navy title), VLM-read</text>
        <text x="42" y="1080" fontSize="3.8" className="fill-muted-foreground">at 120dpi (glm-4.6v, staging-ph28/vlm-census.txt), no margin mnemonics, no images; the table occupies the top ~40% of a short final page. ORIGINAL KYP ADAPTATION — the antibody ladder, the</text>
        <text x="42" y="1090" fontSize="3.8" className="fill-muted-foreground">cell-crossing panel, the -kin see-saw, and the four-move protocol are KYP&apos;s; every ending, category, and example is preserved from the print, and the full table is carried verbatim in the note&apos;s table</text>
        <text x="42" y="1100" fontSize="3.8" className="fill-muted-foreground">block. ADJUDICATION: the brief&apos;s anticipated -cept fusion proteins / recombinant-enzyme rows DO NOT PRINT on pdf 276 (text layer + layout + VLM agree) — the page carries exactly -mab / -ib / -kin.</text>
      </g>
    </svg>
  );
}
