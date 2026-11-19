"use client";

// Original KYP visual — Pathology P12 (First Aid 2026, Part 1 pdf 237-238 /
// book 215-216, PATHOLOGY—NEOPLASIA banner: Neoplasia and neoplastic
// progression; Tumor nomenclature; Tumor grade vs stage). Census
// (pdfimages + VLM): ZERO raster images on either source page — both
// figures are VECTOR LINE ART (the five-panel progression strip; the
// grade-vs-stage art) and are redrawn here with original KYP glyphs.
// All SVG uses theme tokens (currentColor + Tailwind classes), so it
// stays readable in light AND dark mode.

export function NomenclatureProgressionMap() {
  const w = 1102;
  const h = 1252;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      role="img"
      aria-label="Neoplasia nomenclature and progression — an original KYP adaptation of First Aid 2026 book 215-216: the five-station progression (normal basal-to-apical polarity, dysplasia, carcinoma in situ with the basement membrane intact, invasive carcinoma breaching the membrane via metalloproteinases with E-cadherin loss, and metastasis boarding a vessel), the naming rules (carcinoma epithelial vs sarcoma mesenchymal, benign vs malignant traits, hamartoma vs choristoma), the verbatim nine-row nomenclature table with the Mesenchyme group label, and grade vs stage with the TNM hierarchy (M over N over T) and the stage-determines-survival rule."
      className="min-w-[1060px]"
    >
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Neoplasia nomenclature &amp; progression — the map (original KYP adaptation)</text>
        <rect x="836" y="24" width="224" height="18" className="fill-brand-soft" />
        <text x="948" y="37" textAnchor="middle" fontSize="7.4" fontWeight="800" className="fill-brand">name it · grade it · stage it</text>
      </g>

      {/* ===== BAND A — the five-station progression (KYP redraw) ===== */}
      <g>
        <rect x="36" y="76" width="1030" height="314" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="96" fontSize="8" fontWeight="800" className="fill-foreground">Neoplasia and neoplastic progression (book 215 — an original KYP redraw of the source vector figure)</text>

        {/* station 1 — normal cells */}
        <g>
          <rect x="52" y="108" width="190" height="200" rx="10" className="fill-card stroke-border" />
          <text x="147" y="124" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-brand">① NORMAL CELLS</text>
          {/* epithelium: orderly cells, basal nuclei, apical surface */}
          <rect x="62" y="142" width="170" height="50" rx="3" className="fill-secondary/40 stroke-border" />
          <rect x="62" y="142" width="170" height="5" className="fill-brand-soft" />
          <path d="M 104.5 142 L 104.5 192 M 147 142 L 147 192 M 189.5 142 L 189.5 192" className="stroke-border" strokeWidth="0.8" />
          <circle cx="83" cy="182" r="4" className="fill-foreground" />
          <circle cx="126" cy="182" r="4" className="fill-foreground" />
          <circle cx="168" cy="182" r="4" className="fill-foreground" />
          <circle cx="211" cy="182" r="4" className="fill-foreground" />
          {/* polarity arrow: basal to apical */}
          <path d="M 239 190 L 239 148" className="stroke-brand" strokeWidth="1.4" />
          <path d="M 239 148 L 236 155 M 239 148 L 242 155" className="stroke-brand" strokeWidth="1.4" />
          {/* basement membrane — intact */}
          <path d="M 62 196 L 232 196" className="stroke-emergency" strokeWidth="3" />
          {/* stroma + vessel */}
          <rect x="62" y="200" width="170" height="42" className="fill-secondary/20 stroke-border" strokeWidth="0.6" />
          <ellipse cx="147" cy="222" rx="30" ry="10" className="fill-brand-soft stroke-brand" />
          <circle cx="138" cy="222" r="1.6" className="fill-foreground" />
          <circle cx="156" cy="222" r="1.6" className="fill-foreground" />
          <text x="147" y="264" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">Orderly cells, basal nuclei, apical</text>
          <text x="147" y="274" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">surface — basal → apical polarity</text>
          <text x="147" y="286" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">(the cervical example — normal cells and</text>
          <text x="147" y="295" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">the spectrum of dysplasia)</text>
        </g>

        {/* station 2 — dysplasia */}
        <g>
          <rect x="254" y="108" width="190" height="200" rx="10" className="fill-card stroke-border" />
          <text x="349" y="124" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-warning">② DYSPLASIA</text>
          <rect x="264" y="142" width="170" height="50" rx="3" className="fill-secondary/40 stroke-border" />
          {/* pleomorphic cells with large nuclei, still above the membrane */}
          <ellipse cx="290" cy="156" rx="13" ry="10" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="290" cy="156" r="6" className="fill-foreground" />
          <ellipse cx="325" cy="172" rx="16" ry="12" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="325" cy="172" r="7.5" className="fill-foreground" />
          <ellipse cx="357" cy="152" rx="11" ry="9" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="357" cy="152" r="5.5" className="fill-foreground" />
          <ellipse cx="390" cy="170" rx="14" ry="10" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="390" cy="170" r="7" className="fill-foreground" />
          <ellipse cx="418" cy="154" rx="10" ry="8" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="418" cy="154" r="5" className="fill-foreground" />
          <path d="M 264 196 L 434 196" className="stroke-emergency" strokeWidth="3" />
          <rect x="264" y="200" width="170" height="42" className="fill-secondary/20 stroke-border" strokeWidth="0.6" />
          <ellipse cx="349" cy="222" rx="30" ry="10" className="fill-brand-soft stroke-brand" />
          <text x="349" y="264" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">Pleomorphism, lost orientation,</text>
          <text x="349" y="274" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">↑ nuclear:cytoplasmic ratio — still</text>
          <text x="349" y="284" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">above the intact membrane</text>
          <text x="349" y="295" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">often REVERSIBLE</text>
        </g>

        {/* station 3 — carcinoma in situ */}
        <g>
          <rect x="456" y="108" width="190" height="200" rx="10" className="fill-card stroke-border" />
          <text x="551" y="124" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-emergency">③ CARCINOMA IN SITU</text>
          <rect x="466" y="142" width="170" height="50" rx="3" className="fill-secondary/40 stroke-border" />
          {/* atypical cells filling the ENTIRE thickness */}
          <ellipse cx="482" cy="149" rx="8" ry="6" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="482" cy="149" r="4" className="fill-foreground" />
          <ellipse cx="505" cy="160" rx="10" ry="8" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="505" cy="160" r="5" className="fill-foreground" />
          <ellipse cx="528" cy="148" rx="7" ry="6" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="528" cy="148" r="3.6" className="fill-foreground" />
          <ellipse cx="549" cy="168" rx="11" ry="8" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="549" cy="168" r="5.5" className="fill-foreground" />
          <ellipse cx="573" cy="152" rx="9" ry="7" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="573" cy="152" r="4.5" className="fill-foreground" />
          <ellipse cx="596" cy="164" rx="10" ry="7" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="596" cy="164" r="5" className="fill-foreground" />
          <ellipse cx="618" cy="149" rx="8" ry="6" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="618" cy="149" r="4" className="fill-foreground" />
          <ellipse cx="626" cy="172" rx="6" ry="6" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="626" cy="172" r="3" className="fill-foreground" />
          {/* basement membrane — intact and emphasized */}
          <path d="M 466 196 L 636 196" className="stroke-emergency" strokeWidth="4" />
          <rect x="522" y="203" width="58" height="12" rx="4" className="fill-emergency-soft" />
          <text x="551" y="212" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-emergency">MEMBRANE INTACT</text>
          <rect x="466" y="218" width="170" height="24" className="fill-secondary/20 stroke-border" strokeWidth="0.6" />
          <ellipse cx="551" cy="230" rx="24" ry="8" className="fill-brand-soft stroke-brand" />
          <text x="551" y="264" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">Irreversible severe dysplasia —</text>
          <text x="551" y="274" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">the ENTIRE epithelial thickness,</text>
          <text x="551" y="284" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">not penetrating the membrane</text>
          <text x="551" y="295" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">preinvasive — contained, but past the point of return</text>
        </g>

        {/* station 4 — invasive carcinoma */}
        <g>
          <rect x="658" y="108" width="190" height="200" rx="10" className="fill-card stroke-border" />
          <text x="753" y="124" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-emergency">④ INVASIVE CARCINOMA</text>
          <rect x="668" y="142" width="170" height="50" rx="3" className="fill-secondary/40 stroke-border" />
          <ellipse cx="690" cy="155" rx="11" ry="8" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="690" cy="155" r="5.5" className="fill-foreground" />
          <ellipse cx="716" cy="168" rx="12" ry="9" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="716" cy="168" r="6" className="fill-foreground" />
          <ellipse cx="792" cy="156" rx="12" ry="9" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="792" cy="156" r="6" className="fill-foreground" />
          <ellipse cx="818" cy="170" rx="10" ry="8" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="818" cy="170" r="5" className="fill-foreground" />
          {/* the E-cadherin break: two cells pulled apart */}
          <ellipse cx="746" cy="152" rx="10" ry="8" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="746" cy="152" r="5" className="fill-foreground" />
          <ellipse cx="772" cy="157" rx="10" ry="8" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="772" cy="157" r="5" className="fill-foreground" />
          <path d="M 756 148 L 762 160 M 762 148 L 756 160" className="stroke-emergency" strokeWidth="1.3" />
          {/* basement membrane — BREACHED (two segments, gap in the middle) */}
          <path d="M 668 196 L 718 196" className="stroke-emergency" strokeWidth="3" />
          <path d="M 788 196 L 838 196" className="stroke-emergency" strokeWidth="3" />
          {/* metalloproteinase arrows through the gap */}
          <path d="M 728 190 L 728 206" className="stroke-brand" strokeWidth="1.2" />
          <path d="M 728 206 L 725.5 201 M 728 206 L 730.5 201" className="stroke-brand" strokeWidth="1.2" />
          <path d="M 745 188 L 745 206" className="stroke-brand" strokeWidth="1.2" />
          <path d="M 745 206 L 742.5 201 M 745 206 L 747.5 201" className="stroke-brand" strokeWidth="1.2" />
          <path d="M 762 190 L 762 206" className="stroke-brand" strokeWidth="1.2" />
          <path d="M 762 206 L 759.5 201 M 762 206 L 764.5 201" className="stroke-brand" strokeWidth="1.2" />
          {/* cells now below the membrane, in the stroma */}
          <rect x="668" y="200" width="170" height="42" className="fill-secondary/20 stroke-border" strokeWidth="0.6" />
          <ellipse cx="732" cy="216" rx="9" ry="7" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="732" cy="216" r="4.5" className="fill-foreground" />
          <ellipse cx="757" cy="226" rx="8" ry="6" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="757" cy="226" r="4" className="fill-foreground" />
          <ellipse cx="744" cy="234" rx="6" ry="5" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="744" cy="234" r="3" className="fill-foreground" />
          <ellipse cx="812" cy="222" rx="22" ry="8" className="fill-brand-soft stroke-brand" />
          <text x="753" y="264" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">Collagenases + hydrolases</text>
          <text x="753" y="274" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">(metalloproteinases) breach the</text>
          <text x="753" y="284" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">membrane; E-cadherin inactivated →</text>
          <text x="753" y="295" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">cell-cell contacts lost — cells enter the stroma</text>
        </g>

        {/* station 5 — metastasis */}
        <g>
          <rect x="860" y="108" width="190" height="200" rx="10" className="fill-card stroke-border" />
          <text x="955" y="124" textAnchor="middle" fontSize="5.4" fontWeight="800" className="fill-emergency">⑤ METASTASIS</text>
          {/* primary with a breach */}
          <rect x="872" y="142" width="74" height="42" rx="3" className="fill-secondary/40 stroke-border" />
          <ellipse cx="890" cy="154" rx="7" ry="6" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="890" cy="154" r="3.5" className="fill-foreground" />
          <ellipse cx="912" cy="163" rx="8" ry="6" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="912" cy="163" r="4" className="fill-foreground" />
          <ellipse cx="932" cy="153" rx="6" ry="5" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="932" cy="153" r="3" className="fill-foreground" />
          <path d="M 872 186 L 896 186" className="stroke-emergency" strokeWidth="2.6" />
          <path d="M 922 186 L 946 186" className="stroke-emergency" strokeWidth="2.6" />
          <ellipse cx="910" cy="196" rx="7" ry="5" className="fill-card stroke-border" strokeWidth="0.9" />
          <circle cx="910" cy="196" r="3.5" className="fill-foreground" />
          {/* the vessel with tumor emboli */}
          <ellipse cx="985" cy="216" rx="40" ry="14" className="fill-brand-soft stroke-brand" />
          <circle cx="972" cy="216" r="4" className="fill-foreground" />
          <circle cx="985" cy="219" r="3.4" className="fill-foreground" />
          <circle cx="998" cy="214" r="4" className="fill-foreground" />
          <path d="M 916 194 C 940 200 952 206 958 210" className="stroke-brand" strokeWidth="1.3" />
          <path d="M 958 210 L 951 207 M 958 210 L 952 213" className="stroke-brand" strokeWidth="1.3" />
          {/* distant organ */}
          <circle cx="1012" cy="158" r="13" className="fill-warning-soft stroke-warning" />
          <circle cx="1008" cy="155" r="2.4" className="fill-foreground" />
          <circle cx="1016" cy="161" r="2" className="fill-foreground" />
          <path d="M 1002 202 C 1006 190 1008 180 1010 172" className="stroke-warning" strokeWidth="1.2" strokeDasharray="3 2" />
          <path d="M 1010 172 L 1006 177 M 1010 172 L 1014 177" className="stroke-warning" strokeWidth="1.2" />
          <text x="955" y="264" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">Tumor cells board lymphatics or</text>
          <text x="955" y="274" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">blood → spread to distant organ(s)</text>
          <text x="955" y="295" textAnchor="middle" fontSize="3.9" className="fill-muted-foreground">the vessel is the exit — the distant colony is the claim</text>
        </g>

        {/* arrows between stations */}
        <g>
          <path d="M 243.5 210 L 252.5 210" className="stroke-brand" strokeWidth="1.6" />
          <path d="M 252.5 210 L 247 207 M 252.5 210 L 247 213" className="stroke-brand" strokeWidth="1.6" />
          <path d="M 445.5 210 L 454.5 210" className="stroke-brand" strokeWidth="1.6" />
          <path d="M 454.5 210 L 449 207 M 454.5 210 L 449 213" className="stroke-brand" strokeWidth="1.6" />
          <path d="M 647.5 210 L 656.5 210" className="stroke-brand" strokeWidth="1.6" />
          <path d="M 656.5 210 L 651 207 M 656.5 210 L 651 213" className="stroke-brand" strokeWidth="1.6" />
          <path d="M 849.5 210 L 858.5 210" className="stroke-brand" strokeWidth="1.6" />
          <path d="M 858.5 210 L 853 207 M 858.5 210 L 853 213" className="stroke-brand" strokeWidth="1.6" />
        </g>

        {/* the figure's three labels + the two weapons */}
        <g>
          <rect x="52" y="316" width="486" height="66" rx="8" className="fill-card stroke-border" />
          <text x="64" y="330" fontSize="4.6" fontWeight="800" className="fill-foreground">THE FIGURE&apos;S THREE LABELS (they print once, over panel 1)</text>
          <rect x="64" y="338" width="16" height="7" className="fill-secondary/40 stroke-border" strokeWidth="0.7" />
          <text x="88" y="345" fontSize="4" fontWeight="700" className="fill-foreground">Epithelial cell layer — where every station begins</text>
          <path d="M 64 358 L 80 358" className="stroke-emergency" strokeWidth="2.5" />
          <text x="88" y="361" fontSize="4" fontWeight="700" className="fill-foreground">Basement membrane — the boundary the whole progression turns on</text>
          <ellipse cx="72" cy="374" rx="8" ry="4" className="fill-brand-soft stroke-brand" />
          <text x="88" y="377" fontSize="4" fontWeight="700" className="fill-foreground">Blood or lymphatic vessel — the route metastasis boards</text>
          <rect x="554" y="316" width="496" height="66" rx="8" className="fill-card stroke-border" />
          <text x="566" y="330" fontSize="4.6" fontWeight="800" className="fill-emergency">THE TWO WEAPONS OF THE BREACH</text>
          <text x="566" y="345" fontSize="4" fontWeight="700" className="fill-foreground">1 · Metalloproteinases — collagenases + hydrolases digest the basement membrane</text>
          <text x="566" y="358" fontSize="4" fontWeight="700" className="fill-foreground">2 · E-cadherin inactivation — cell-cell contacts lost between the tumor cells</text>
          <text x="566" y="372" fontSize="3.9" className="fill-muted-foreground">Both must fire: carcinoma in situ (contained above the membrane) becomes invasive carcinoma (below it)</text>
        </g>
      </g>

      {/* ===== BAND B — the naming rules + the malformation pair ===== */}
      <g>
        <rect x="36" y="404" width="1030" height="226" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="424" fontSize="8" fontWeight="800" className="fill-foreground">Tumor nomenclature — the rules and the malformation pair (book 216)</text>
        {/* left — the origin suffixes + the trait lists */}
        <g>
          <rect x="52" y="436" width="505" height="182" rx="10" className="fill-card stroke-border" />
          <text x="64" y="452" fontSize="4.8" fontWeight="800" className="fill-foreground">THE ORIGIN SUFFIXES — both terms generally imply malignancy</text>
          <rect x="64" y="460" width="235" height="48" rx="8" className="fill-brand-soft/50 stroke-brand" />
          <text x="181" y="474" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-brand">CARCINOMA = epithelial origin</text>
          <text x="181" y="486" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">Adenoma, papilloma →</text>
          <text x="181" y="496" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">Adenocarcinoma, papillary carcinoma</text>
          <rect x="309" y="460" width="235" height="48" rx="8" className="fill-emergency-soft/50 stroke-emergency" />
          <text x="426" y="474" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-emergency">SARCOMA = mesenchymal origin</text>
          <text x="426" y="486" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">Hemangioma → Angiosarcoma …</text>
          <text x="426" y="496" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">Lipoma → Liposarcoma (the rows below)</text>
          <rect x="64" y="516" width="235" height="90" rx="8" className="fill-secondary/40 stroke-border" />
          <rect x="64" y="516" width="235" height="16" rx="8" className="fill-brand-soft" />
          <text x="181" y="527" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">BENIGN</text>
          <text x="76" y="546" fontSize="3.9" fontWeight="700" className="fill-foreground">well-differentiated · well-demarcated</text>
          <text x="76" y="557" fontSize="3.9" fontWeight="700" className="fill-foreground">low mitotic activity</text>
          <text x="76" y="568" fontSize="3.9" fontWeight="700" className="fill-foreground">no metastases · no necrosis</text>
          <text x="76" y="590" fontSize="3.7" className="fill-muted-foreground">contained, organized, and quiet</text>
          <rect x="309" y="516" width="235" height="90" rx="8" className="fill-secondary/40 stroke-border" />
          <rect x="309" y="516" width="235" height="16" rx="8" className="fill-emergency-soft" />
          <text x="426" y="527" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-emergency">MALIGNANT (CANCERS)</text>
          <text x="321" y="546" fontSize="3.9" fontWeight="700" className="fill-foreground">poor differentiation · erratic growth</text>
          <text x="321" y="557" fontSize="3.9" fontWeight="700" className="fill-foreground">local invasion · metastasis</text>
          <text x="321" y="568" fontSize="3.9" fontWeight="700" className="fill-foreground">↓ apoptosis</text>
          <text x="321" y="590" fontSize="3.7" className="fill-muted-foreground">undifferentiated, invasive, death-evading</text>
        </g>
        {/* right — the malformation pair */}
        <g>
          <rect x="569" y="436" width="497" height="182" rx="10" className="fill-card stroke-border" />
          <text x="581" y="452" fontSize="4.8" fontWeight="800" className="fill-foreground">THE MALFORMATION PAIR — terms for non-neoplastic malformations</text>
          <rect x="581" y="460" width="238" height="146" rx="8" className="fill-warning-soft/40 stroke-warning" />
          <text x="700" y="474" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-warning">HAMARTOMA</text>
          <text x="700" y="486" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">disorganized overgrowth of tissues</text>
          <text x="700" y="496" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">in their NATIVE location</text>
          <text x="700" y="507" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">eg, Peutz-Jeghers polyps</text>
          {/* glyph: jumbled native shapes inside one outline */}
          <rect x="620" y="516" width="160" height="72" rx="6" className="fill-card stroke-border" strokeWidth="0.8" strokeDasharray="4 3" />
          <circle cx="656" cy="542" r="9" className="fill-secondary/60 stroke-border" />
          <rect x="678" y="530" width="22" height="14" rx="2" className="fill-secondary/60 stroke-border" />
          <ellipse cx="726" cy="548" rx="12" ry="8" className="fill-secondary/60 stroke-border" />
          <path d="M 646 566 L 668 558 L 674 570 L 652 574 Z" className="fill-secondary/60 stroke-border" />
          <circle cx="700" cy="566" r="6" className="fill-secondary/60 stroke-border" />
          <rect x="720" y="560" width="18" height="12" rx="2" className="fill-secondary/60 stroke-border" />
          <text x="700" y="600" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">native site — wrong architecture</text>
          <rect x="829" y="460" width="237" height="146" rx="8" className="fill-secondary/40 stroke-border" />
          <text x="947" y="474" textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-foreground">CHORISTOMA</text>
          <text x="947" y="486" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">normal tissue in a</text>
          <text x="947" y="496" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-foreground">FOREIGN location</text>
          <text x="947" y="507" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">eg, gastric tissue in distal ileum (Meckel)</text>
          {/* glyph: orderly tissue cluster outside its dashed native zone */}
          <rect x="848" y="516" width="80" height="72" rx="6" className="fill-card stroke-border" strokeWidth="0.8" strokeDasharray="4 3" />
          <text x="888" y="530" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">native zone (ileum)</text>
          <circle cx="870" cy="548" r="6" className="fill-secondary/60 stroke-border" />
          <circle cx="888" cy="548" r="6" className="fill-secondary/60 stroke-border" />
          <circle cx="906" cy="548" r="6" className="fill-secondary/60 stroke-border" />
          <circle cx="870" cy="566" r="6" className="fill-secondary/60 stroke-border" />
          <circle cx="888" cy="566" r="6" className="fill-secondary/60 stroke-border" />
          <circle cx="906" cy="566" r="6" className="fill-secondary/60 stroke-border" />
          <ellipse cx="995" cy="548" rx="16" ry="11" className="fill-warning-soft stroke-warning" />
          <circle cx="990" cy="546" r="2.6" className="fill-foreground" />
          <circle cx="1000" cy="551" r="2.6" className="fill-foreground" />
          <path d="M 934 552 L 972 550" className="stroke-warning" strokeWidth="1.2" strokeDasharray="3 2" />
          <path d="M 972 550 L 966 547 M 972 550 L 966 553" className="stroke-warning" strokeWidth="1.2" />
          <text x="995" y="572" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">gastric mucosa</text>
          <text x="947" y="600" textAnchor="middle" fontSize="3.7" className="fill-muted-foreground">right architecture — wrong address</text>
        </g>
      </g>

      {/* ===== BAND C — the verbatim nomenclature table ===== */}
      <g>
        <rect x="36" y="644" width="1030" height="320" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="664" fontSize="8" fontWeight="800" className="fill-foreground">The tumor nomenclature table (book 216 — carried verbatim)</text>
        <rect x="52" y="676" width="998" height="24" rx="6" className="fill-brand-soft" />
        <text x="64" y="692" fontSize="5.2" fontWeight="800" className="fill-brand">CeLL TYPe</text>
        <text x="344" y="692" fontSize="5.2" fontWeight="800" className="fill-brand">BeNIGN</text>
        <text x="674" y="692" fontSize="5.2" fontWeight="800" className="fill-brand">MALIGNANT</text>
        <rect x="52" y="700" width="998" height="240" className="fill-card stroke-border" />
        <path d="M 52 724 L 1050 724 M 52 748 L 1050 748 M 52 772 L 1050 772 M 52 796 L 1050 796 M 52 820 L 1050 820 M 52 844 L 1050 844 M 52 868 L 1050 868 M 52 892 L 1050 892 M 52 916 L 1050 916 M 52 940 L 1050 940" className="stroke-border" strokeWidth="0.7" />
        <path d="M 332 700 L 332 940 M 662 700 L 662 940" className="stroke-border" strokeWidth="0.7" />
        <text x="64" y="715" fontSize="4.6" fontWeight="700" className="fill-foreground">Epithelium</text>
        <text x="344" y="715" fontSize="4.6" fontWeight="700" className="fill-foreground">Adenoma, papilloma</text>
        <text x="674" y="715" fontSize="4.6" fontWeight="700" className="fill-foreground">Adenocarcinoma, papillary carcinoma</text>
        {/* the Mesenchyme row-group label band */}
        <rect x="52" y="724" width="998" height="24" className="fill-warning-soft/50" />
        <text x="64" y="739" fontSize="4.6" fontWeight="800" className="fill-warning">Mesenchyme</text>
        <text x="104" y="739" fontSize="3.8" className="fill-muted-foreground">(row-group label spanning the seven rows below — cells print empty)</text>
        <text x="64" y="763" fontSize="4.6" fontWeight="700" className="fill-foreground">Blood cells</text>
        <text x="344" y="763" fontSize="3.8" className="fill-muted-foreground">— the BENIGN cell prints empty —</text>
        <text x="674" y="763" fontSize="4.6" fontWeight="700" className="fill-foreground">Leukemia, lymphoma</text>
        <text x="64" y="787" fontSize="4.6" fontWeight="700" className="fill-foreground">Blood vessels</text>
        <text x="344" y="787" fontSize="4.6" fontWeight="700" className="fill-foreground">Hemangioma</text>
        <text x="674" y="787" fontSize="4.6" fontWeight="700" className="fill-foreground">Angiosarcoma</text>
        <text x="64" y="811" fontSize="4.6" fontWeight="700" className="fill-foreground">Smooth muscle</text>
        <text x="344" y="811" fontSize="4.6" fontWeight="700" className="fill-foreground">Leiomyoma</text>
        <text x="674" y="811" fontSize="4.6" fontWeight="700" className="fill-foreground">Leiomyosarcoma</text>
        <text x="64" y="835" fontSize="4.6" fontWeight="700" className="fill-foreground">Striated muscle</text>
        <text x="344" y="835" fontSize="4.6" fontWeight="700" className="fill-foreground">Rhabdomyoma</text>
        <text x="674" y="835" fontSize="4.6" fontWeight="700" className="fill-foreground">Rhabdomyosarcoma</text>
        <text x="64" y="859" fontSize="4.6" fontWeight="700" className="fill-foreground">Connective tissue</text>
        <text x="344" y="859" fontSize="4.6" fontWeight="700" className="fill-foreground">Fibroma</text>
        <text x="674" y="859" fontSize="4.6" fontWeight="700" className="fill-foreground">Fibrosarcoma</text>
        <text x="64" y="883" fontSize="4.6" fontWeight="700" className="fill-foreground">Bone</text>
        <text x="344" y="883" fontSize="4.6" fontWeight="700" className="fill-foreground">Osteoma</text>
        <text x="674" y="883" fontSize="4.6" fontWeight="700" className="fill-foreground">Osteosarcoma</text>
        <text x="64" y="907" fontSize="4.6" fontWeight="700" className="fill-foreground">Fat</text>
        <text x="344" y="907" fontSize="4.6" fontWeight="700" className="fill-foreground">Lipoma</text>
        <text x="674" y="907" fontSize="4.6" fontWeight="700" className="fill-foreground">Liposarcoma</text>
        <text x="64" y="931" fontSize="4.6" fontWeight="700" className="fill-foreground">Melanocyte</text>
        <text x="344" y="931" fontSize="4.6" fontWeight="700" className="fill-foreground">Nevus/mole</text>
        <text x="674" y="931" fontSize="4.6" fontWeight="700" className="fill-foreground">Melanoma</text>
        <text x="64" y="954" fontSize="3.9" className="fill-muted-foreground">Quirks, exactly as the source prints them: &quot;Mesenchyme&quot; is a row-group label spanning Blood cells → Fat; the Blood cells BENIGN cell is EMPTY (leukemia and lymphoma are malignant-only);</text>
        <text x="64" y="961" fontSize="3.9" className="fill-muted-foreground">and melanoma is malignant despite wearing no carcinoma/sarcoma suffix at all. In the text layer the group label interleaves on the same band as &quot;Leukemia, lymphoma&quot; (raw lines 33-37).</text>
      </g>

      {/* ===== BAND D — grade vs stage ===== */}
      <g>
        <rect x="36" y="978" width="1030" height="216" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="998" fontSize="8" fontWeight="800" className="fill-foreground">Tumor grade vs stage (book 216 — the two rulers)</text>
        {/* left — GRADE */}
        <g>
          <rect x="52" y="1010" width="486" height="168" rx="10" className="fill-card stroke-border" />
          <text x="64" y="1026" fontSize="5" fontWeight="800" className="fill-foreground">GRADE — the microscope&apos;s axis</text>
          {/* low-grade circle: differentiated cells */}
          <circle cx="120" cy="1066" r="24" className="fill-secondary/40 stroke-border" />
          <circle cx="110" cy="1058" r="4.4" className="fill-card stroke-border" strokeWidth="0.8" />
          <circle cx="130" cy="1058" r="4.4" className="fill-card stroke-border" strokeWidth="0.8" />
          <circle cx="110" cy="1074" r="4.4" className="fill-card stroke-border" strokeWidth="0.8" />
          <circle cx="130" cy="1074" r="4.4" className="fill-card stroke-border" strokeWidth="0.8" />
          <circle cx="120" cy="1066" r="4.4" className="fill-card stroke-border" strokeWidth="0.8" />
          <text x="120" y="1102" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">Low grade</text>
          <text x="120" y="1110" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">well differentiated</text>
          {/* high-grade circle: dense, dark, irregular */}
          <circle cx="220" cy="1066" r="24" className="fill-emergency-soft/50 stroke-emergency" />
          <circle cx="210" cy="1056" r="3.6" className="fill-foreground" />
          <circle cx="224" cy="1060" r="4.2" className="fill-foreground" />
          <circle cx="216" cy="1070" r="3.2" className="fill-foreground" />
          <circle cx="230" cy="1072" r="4.6" className="fill-foreground" />
          <circle cx="208" cy="1078" r="4" className="fill-foreground" />
          <circle cx="222" cy="1080" r="3" className="fill-foreground" />
          <text x="220" y="1102" textAnchor="middle" fontSize="4" fontWeight="700" className="fill-foreground">High grade</text>
          <text x="220" y="1110" textAnchor="middle" fontSize="3.6" className="fill-muted-foreground">anaplastic</text>
          <text x="270" y="1042" fontSize="3.9" fontWeight="700" className="fill-foreground">Degree of cell differentiation (tissue</text>
          <text x="270" y="1053" fontSize="3.9" fontWeight="700" className="fill-foreground">of origin resemblance) and mitotic</text>
          <text x="270" y="1064" fontSize="3.9" fontWeight="700" className="fill-foreground">activity on histology. Ranges from</text>
          <text x="270" y="1075" fontSize="3.9" fontWeight="700" className="fill-foreground">low-grade (well differentiated) to</text>
          <text x="270" y="1086" fontSize="3.9" fontWeight="700" className="fill-foreground">high-grade (poorly differentiated or</text>
          <text x="270" y="1097" fontSize="3.9" fontWeight="700" className="fill-foreground">undifferentiated [anaplastic]).</text>
          <text x="270" y="1112" fontSize="3.9" fontWeight="700" className="fill-emergency">Higher grade often correlates with</text>
          <text x="270" y="1122" fontSize="3.9" fontWeight="700" className="fill-emergency">higher aggressiveness.</text>
          <text x="64" y="1144" fontSize="3.9" className="fill-muted-foreground">The slide: how angry the cells look — and how far they are from the tissue they came from.</text>
          <text x="64" y="1162" fontSize="4.2" fontWeight="800" className="fill-foreground">The grade answers: &quot;what does it look like?&quot;</text>
        </g>
        <circle cx="546" cy="1094" r="9" className="fill-secondary stroke-border" />
        <text x="546" y="1097" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">vs</text>
        {/* right — STAGE */}
        <g>
          <rect x="562" y="1010" width="488" height="168" rx="10" className="fill-card stroke-border" />
          <text x="574" y="1026" fontSize="5" fontWeight="800" className="fill-foreground">STAGE — the map&apos;s axis</text>
          <rect x="574" y="1036" width="24" height="18" rx="4" className="fill-brand-soft" />
          <text x="586" y="1049" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-brand">T</text>
          <text x="610" y="1042" fontSize="4.2" fontWeight="700" className="fill-foreground">Primary tumor size/invasion</text>
          <text x="610" y="1051" fontSize="3.7" className="fill-muted-foreground">the local footprint at the origin</text>
          <rect x="574" y="1062" width="24" height="18" rx="4" className="fill-brand-soft" />
          <text x="586" y="1075" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-brand">N</text>
          <text x="610" y="1068" fontSize="4.2" fontWeight="700" className="fill-foreground">Regional lymph node metastasis</text>
          <text x="610" y="1077" fontSize="3.7" className="fill-muted-foreground">the first station of spread</text>
          <circle cx="864" cy="1069" r="5.4" className="fill-secondary/60 stroke-border" />
          <circle cx="876" cy="1063" r="3.4" className="fill-secondary/60 stroke-border" />
          <circle cx="876" cy="1076" r="3.4" className="fill-secondary/60 stroke-border" />
          <rect x="574" y="1088" width="24" height="18" rx="4" className="fill-emergency-soft" />
          <text x="586" y="1101" textAnchor="middle" fontSize="6.5" fontWeight="800" className="fill-emergency">M</text>
          <text x="610" y="1094" fontSize="4.2" fontWeight="700" className="fill-foreground">Distant metastasis — spread to other</text>
          <text x="610" y="1103" fontSize="4.2" fontWeight="700" className="fill-foreground">organs and tissues</text>
          <ellipse cx="856" cy="1096" rx="14" ry="5.5" className="fill-brand-soft stroke-brand" />
          <path d="M 874 1096 L 894 1090" className="stroke-warning" strokeWidth="1.2" strokeDasharray="3 2" />
          <circle cx="902" cy="1088" r="6.4" className="fill-warning-soft stroke-warning" />
          <circle cx="902" cy="1088" r="2" className="fill-foreground" />
          <rect x="574" y="1116" width="464" height="20" rx="6" className="fill-emergency-soft" />
          <text x="806" y="1129" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-emergency">TNM importance: M &gt; N &gt; T — distant metastasis outweighs nodes outweighs the primary</text>
          <text x="574" y="1150" fontSize="3.9" fontWeight="700" className="fill-foreground">Degree of invasion and spread from the initial site; depth of invasion correlates to risk of metastasis.</text>
          <text x="574" y="1160" fontSize="3.9" fontWeight="700" className="fill-foreground">Based on clinical (c) or pathologic (p) findings.</text>
          <text x="574" y="1174" fontSize="4.4" fontWeight="800" className="fill-emergency">Stage &gt; grade prognostically — a high-stage low-grade tumor is usually worse; stage (spread) determines survival.</text>
        </g>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1206" width="1054" height="40" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1221" fontSize="5.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 237–238 / book 215–216 (Pathology — Neoplasia: Neoplasia and neoplastic progression; Tumor nomenclature; Tumor grade vs stage)</text>
        <text x="42" y="1231" fontSize="4.8" className="fill-muted-foreground">Census (pdfimages + VLM): ZERO raster images — both source figures are vector line art (the five-panel progression strip; the grade-vs-stage art with low/high-grade circles, T/N/M, lymph nodes, and vessel), redrawn here as ORIGINAL KYP glyphs.</text>
        <text x="42" y="1241" fontSize="4.8" className="fill-muted-foreground">The nomenclature table is carried verbatim in the note&apos;s table blocks and rendered here as clean KYP table art. No margin mnemonics print on either page (VLM confirmed); the KYP memory layer is original.</text>
      </g>
    </svg>
  );
}
