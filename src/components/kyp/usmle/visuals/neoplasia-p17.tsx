"use client";

// P17 — Chemical Carcinogens & Organ Cancers (Pathology — Neoplasia,
// book 221). Original KYP adaptation: an exposure → organ → impact
// route map of the 12-toxin Carcinogens table, grouped into four
// bands (FUNGI & CHEMICALS / METALS & DUSTS / RADIATION / LIFESTYLE),
// with the multi-organ rows (arsenic, tobacco, ethanol, ionizing
// radiation) fanning to their organ chips, the HEPATIC ANGIOSARCOMA
// PAIR callout (vinyl chloride + arsenic vs the hepatocyte toxins),
// and the radon 2nd-leading-cause note. Census (pdfimages + VLM, two
// rounds): ZERO raster images on the page — pure text, so nothing is
// reproduced; all glyphs are original.

export function CarcinogenOrganMap() {
  const w = 1102;
  const h = 1218;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Chemical carcinogens and organ cancers — the exposure → organ → impact map for all 12 toxins (book 221)." className="min-w-[1000px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="48" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="11" fontWeight="800" className="fill-foreground">Chemical carcinogens &amp; organ cancers — the exposure → organ → impact map (original KYP adaptation)</text>
        <rect x="884" y="24" width="178" height="18" className="fill-brand-soft" />
        <text x="973" y="37" textAnchor="middle" fontSize="7.6" fontWeight="800" className="fill-brand">12 toxins · 3 columns</text>
      </g>
      {/* ===== BAND 1 — FUNGI & CHEMICALS ===== */}
      <g>
        <rect x="24" y="76" width="1054" height="268" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="96" fontSize="8" fontWeight="800" className="fill-foreground">FUNGI &amp; CHEMICALS — the mycotoxin, the iatrogenic, the dye, and the pipe (4 toxins)</text>
        {/* aflatoxins */}
        <rect x="40" y="108" width="508" height="100" rx="10" className="fill-card stroke-border" />
        <text x="54" y="126" fontSize="4.6" fontWeight="800" className="fill-foreground">AFLATOXINS (Aspergillus)</text>
        <text x="54" y="140" fontSize="3.4" className="fill-muted-foreground">EXPOSURE — stored grains and nuts</text>
        <text x="54" y="161" fontSize="4" fontWeight="700" className="fill-foreground">→</text>
        <rect x="66" y="150" width="84" height="16" rx="4" className="fill-brand-soft/40 stroke-brand" />
        <text x="108" y="161" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-brand">LIVER</text>
        <text x="54" y="186" fontSize="4" fontWeight="800" className="fill-foreground">→ IMPACT — Hepatocellular carcinoma (the hepatocyte, on the HCC side of the liver fork)</text>
        {/* alkylating agents */}
        <rect x="564" y="108" width="508" height="100" rx="10" className="fill-card stroke-border" />
        <text x="578" y="126" fontSize="4.6" fontWeight="800" className="fill-foreground">ALKYLATING AGENTS</text>
        <text x="578" y="140" fontSize="3.4" className="fill-muted-foreground">EXPOSURE — oncologic chemotherapy</text>
        <text x="578" y="161" fontSize="4" fontWeight="700" className="fill-foreground">→</text>
        <rect x="590" y="150" width="84" height="16" rx="4" className="fill-brand-soft/40 stroke-brand" />
        <text x="632" y="161" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-brand">BLOOD</text>
        <text x="578" y="186" fontSize="4" fontWeight="800" className="fill-foreground">→ IMPACT — Leukemia/lymphoma (the treatment that cured the first cancer seeds the second)</text>
        {/* aromatic amines */}
        <rect x="40" y="218" width="508" height="100" rx="10" className="fill-card stroke-border" />
        <text x="54" y="236" fontSize="4.2" fontWeight="800" className="fill-foreground">AROMATIC AMINES (benzidine, 2-naphthylamine)</text>
        <text x="54" y="250" fontSize="3.4" className="fill-muted-foreground">EXPOSURE — textile industry (dyes), tobacco smoke (2-naphthylamine)</text>
        <text x="54" y="271" fontSize="4" fontWeight="700" className="fill-foreground">→</text>
        <rect x="66" y="260" width="92" height="16" rx="4" className="fill-brand-soft/40 stroke-brand" />
        <text x="112" y="271" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-brand">BLADDER</text>
        <text x="54" y="296" fontSize="4" fontWeight="800" className="fill-foreground">→ IMPACT — Transitional cell carcinoma (one row, two exposure streams — dyes AND tobacco)</text>
        {/* vinyl chloride */}
        <rect x="564" y="218" width="508" height="100" rx="10" className="fill-card stroke-border" />
        <text x="578" y="236" fontSize="4.6" fontWeight="800" className="fill-foreground">VINYL CHLORIDE</text>
        <text x="578" y="250" fontSize="3.4" className="fill-muted-foreground">EXPOSURE — used to make PVC pipes</text>
        <text x="578" y="271" fontSize="4" fontWeight="700" className="fill-foreground">→</text>
        <rect x="590" y="260" width="96" height="16" rx="4" className="fill-brand-soft/40 stroke-brand" />
        <text x="638" y="271" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-brand">LiVer [sic]</text>
        <text x="578" y="296" fontSize="4" fontWeight="800" className="fill-foreground">→ IMPACT — Hepatic angiosarcoma (the printed “LiVer” quirk; the pair callout is below)</text>
      </g>
      {/* ===== BAND 2 — METALS & DUSTS ===== */}
      <g>
        <rect x="24" y="356" width="1054" height="254" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="376" fontSize="8" fontWeight="800" className="fill-foreground">METALS &amp; DUSTS — arsenic&apos;s three-arm fan · asbestos · the occupational quartet (3 rows)</text>
        {/* arsenic — the three-arm fan */}
        <rect x="40" y="390" width="508" height="150" rx="10" className="fill-card stroke-border" />
        <text x="54" y="408" fontSize="4.6" fontWeight="800" className="fill-foreground">ARSENIC</text>
        <text x="54" y="422" fontSize="3.4" className="fill-muted-foreground">EXPOSURE — herbicides (vineyard workers), metal smelting,</text>
        <text x="54" y="432" fontSize="3.4" className="fill-muted-foreground">wood preservation</text>
        <circle cx="96" cy="457" r="14" className="fill-brand-soft stroke-brand" />
        <text x="96" y="460" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-brand">As</text>
        <path d="M 110 450 L 146 455" className="stroke-brand" strokeWidth="1.2" />
        <path d="M 146 455 L 138 450 M 146 455 L 140 459" className="stroke-brand" strokeWidth="1.2" />
        <path d="M 110 457 L 146 457" className="stroke-brand" strokeWidth="1.2" />
        <path d="M 146 457 L 138 452 M 146 457 L 138 462" className="stroke-brand" strokeWidth="1.2" />
        <path d="M 110 464 L 146 459" className="stroke-brand" strokeWidth="1.2" />
        <path d="M 146 459 L 138 454 M 146 459 L 140 464" className="stroke-brand" strokeWidth="1.2" />
        <rect x="150" y="449" width="92" height="16" rx="4" className="fill-brand-soft/40 stroke-brand" />
        <text x="196" y="460" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-brand">LIVER</text>
        <rect x="262" y="449" width="92" height="16" rx="4" className="fill-brand-soft/40 stroke-brand" />
        <text x="308" y="460" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-brand">LUNG</text>
        <rect x="374" y="449" width="92" height="16" rx="4" className="fill-brand-soft/40 stroke-brand" />
        <text x="420" y="460" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-brand">SKIN</text>
        <text x="150" y="490" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Hepatic angiosarcoma</text>
        <text x="262" y="490" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Lung cancer</text>
        <text x="374" y="490" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Squamous cell carcinoma</text>
        <text x="54" y="512" fontSize="3.4" className="fill-muted-foreground">the three-arm fan, paired line-by-line — and the ANGIOSARCOMA PAIR with vinyl chloride (callout below)</text>
        <text x="54" y="524" fontSize="3.4" className="fill-muted-foreground">the vessel wall, NOT the hepatocyte — aflatoxin and ethanol give HCC instead</text>
        {/* asbestos */}
        <rect x="564" y="390" width="508" height="98" rx="10" className="fill-card stroke-border" />
        <text x="578" y="408" fontSize="4.6" fontWeight="800" className="fill-foreground">ASBESTOS</text>
        <text x="578" y="422" fontSize="3.4" className="fill-muted-foreground">EXPOSURE — old roofing material, shipyard workers</text>
        <text x="578" y="443" fontSize="4" fontWeight="700" className="fill-foreground">→</text>
        <rect x="590" y="432" width="84" height="16" rx="4" className="fill-warning-soft/40 stroke-warning" />
        <text x="632" y="443" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-warning">LUNG</text>
        <text x="578" y="464" fontSize="4" fontWeight="800" className="fill-foreground">→ IMPACT — Bronchogenic carcinoma &gt; mesothelioma</text>
        <text x="578" y="478" fontSize="3.4" className="fill-muted-foreground">the first rank fact — mesothelioma is the signature, NOT the most common</text>
        {/* nickel, chromium, beryllium, silica */}
        <rect x="564" y="496" width="508" height="98" rx="10" className="fill-card stroke-border" />
        <text x="578" y="514" fontSize="4.2" fontWeight="800" className="fill-foreground">NICKEL, CHROMIUM, BERYLLIUM, SILICA</text>
        <text x="578" y="528" fontSize="3.4" className="fill-muted-foreground">EXPOSURE — occupational exposure</text>
        <text x="578" y="549" fontSize="4" fontWeight="700" className="fill-foreground">→</text>
        <rect x="590" y="538" width="84" height="16" rx="4" className="fill-warning-soft/40 stroke-warning" />
        <text x="632" y="549" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-warning">LUNG</text>
        <text x="578" y="570" fontSize="4" fontWeight="800" className="fill-foreground">→ IMPACT — Lung cancer</text>
        <text x="578" y="584" fontSize="3.4" className="fill-muted-foreground">the occupational quartet — one line, one organ, one impact</text>
      </g>
      {/* ===== BAND 3 — RADIATION ===== */}
      <g>
        <rect x="24" y="622" width="1054" height="150" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="642" fontSize="8" fontWeight="800" className="fill-foreground">RADIATION — ionizing radiation&apos;s two-arm fan · radon, the #2 cause</text>
        {/* ionizing radiation */}
        <rect x="40" y="656" width="508" height="104" rx="10" className="fill-card stroke-border" />
        <text x="54" y="674" fontSize="4.6" fontWeight="800" className="fill-foreground">IONIZING RADIATION</text>
        <text x="54" y="688" fontSize="3.4" className="fill-muted-foreground">EXPOSURE — prints blank (the exposure is the exposure)</text>
        <text x="54" y="707" fontSize="4" fontWeight="700" className="fill-foreground">→</text>
        <rect x="66" y="696" width="96" height="16" rx="4" className="fill-brand-soft/40 stroke-brand" />
        <text x="114" y="707" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-brand">BLOOD</text>
        <text x="230" y="707" fontSize="4" fontWeight="700" className="fill-foreground">→</text>
        <rect x="242" y="696" width="106" height="16" rx="4" className="fill-brand-soft/40 stroke-brand" />
        <text x="295" y="707" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-brand">THYROID</text>
        <text x="66" y="730" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Leukemia</text>
        <text x="242" y="730" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Papillary thyroid carcinoma</text>
        <text x="54" y="750" fontSize="3.4" className="fill-muted-foreground">the two-arm fan, paired line-by-line: Blood → Leukemia · Thyroid → Papillary thyroid carcinoma</text>
        {/* radon */}
        <rect x="564" y="656" width="508" height="104" rx="10" className="fill-card stroke-border" />
        <rect x="920" y="668" width="134" height="18" rx="4" className="fill-warning-soft" />
        <text x="987" y="681" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-warning">THE #2 FACT</text>
        <text x="578" y="674" fontSize="4.6" fontWeight="800" className="fill-foreground">RADON</text>
        <text x="578" y="688" fontSize="3.4" className="fill-muted-foreground">EXPOSURE — byproduct of uranium decay, accumulates in basements</text>
        <text x="578" y="707" fontSize="4" fontWeight="700" className="fill-foreground">→</text>
        <rect x="590" y="696" width="84" height="16" rx="4" className="fill-warning-soft/40 stroke-warning" />
        <text x="632" y="707" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-warning">LUNG</text>
        <text x="578" y="730" fontSize="4" fontWeight="800" className="fill-foreground">→ IMPACT — Lung cancer (2nd leading cause after tobacco smoke)</text>
        <text x="578" y="750" fontSize="3.4" className="fill-muted-foreground">the second rank fact — tobacco smoke is #1; a nonsmoker in a uranium-belt basement points here</text>
      </g>
      {/* ===== BAND 4 — LIFESTYLE ===== */}
      <g>
        <rect x="24" y="784" width="1054" height="288" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="40" y="804" fontSize="8" fontWeight="800" className="fill-foreground">LIFESTYLE — tobacco&apos;s eight-arm octopus · ethanol&apos;s three-arm fan · nitrosamines</text>
        {/* tobacco — the octopus */}
        <rect x="40" y="818" width="1018" height="150" rx="10" className="fill-card stroke-border" />
        <text x="54" y="836" fontSize="4.6" fontWeight="800" className="fill-foreground">TOBACCO SMOKE — the eight-arm octopus (EXPOSURE cell prints blank)</text>
        <text x="54" y="850" fontSize="3.4" className="fill-muted-foreground">organ list printed ALPHABETICALLY as one stacked list, paired line-by-line with the impact list — the VLM census resolved the text-layer interleave</text>
        <rect x="54" y="858" width="100" height="15" rx="4" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="104" y="869" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">BLADDER</text>
        <text x="54" y="888" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Transitional cell carcinoma</text>
        <rect x="304" y="858" width="100" height="15" rx="4" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="354" y="869" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">CERVIX</text>
        <text x="304" y="888" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Squamous cell carcinoma</text>
        <rect x="554" y="858" width="100" height="15" rx="4" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="604" y="869" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">ESOPHAGUS</text>
        <text x="554" y="888" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Squamous cell carcinoma/adenocarcinoma</text>
        <rect x="804" y="858" width="100" height="15" rx="4" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="854" y="869" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">KIDNEY</text>
        <text x="804" y="888" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Renal cell carcinoma</text>
        <rect x="54" y="918" width="100" height="15" rx="4" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="104" y="929" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">LARYNX</text>
        <text x="54" y="948" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Squamous cell carcinoma</text>
        <rect x="304" y="918" width="100" height="15" rx="4" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="354" y="929" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">LUNG</text>
        <text x="304" y="948" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Squamous cell and small cell carcinoma</text>
        <rect x="554" y="918" width="100" height="15" rx="4" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="604" y="929" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">OROPHARYNX</text>
        <text x="554" y="948" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Squamous cell carcinoma</text>
        <rect x="804" y="918" width="100" height="15" rx="4" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="854" y="929" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">PANCREAS</text>
        <text x="804" y="948" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Pancreatic adenocarcinoma</text>
        {/* ethanol */}
        <rect x="40" y="980" width="508" height="92" rx="10" className="fill-card stroke-border" />
        <text x="54" y="996" fontSize="4.6" fontWeight="800" className="fill-foreground">ETHANOL</text>
        <text x="54" y="1008" fontSize="3.4" className="fill-muted-foreground">EXPOSURE — prints blank (the drinking is the exposure)</text>
        <rect x="54" y="1014" width="104" height="16" rx="4" className="fill-brand-soft/40 stroke-brand" />
        <text x="106" y="1025" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">ESOPHAGUS</text>
        <rect x="210" y="1014" width="80" height="16" rx="4" className="fill-brand-soft/40 stroke-brand" />
        <text x="250" y="1025" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">LIVER</text>
        <rect x="320" y="1014" width="84" height="16" rx="4" className="fill-brand-soft/40 stroke-brand" />
        <text x="362" y="1025" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">BREAST</text>
        <text x="54" y="1048" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Squamous cell carcinoma</text>
        <text x="210" y="1048" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Hepatocellular carcinoma</text>
        <text x="320" y="1048" fontSize="3.4" fontWeight="700" className="fill-foreground">→ Breast cancer</text>
        <text x="54" y="1066" fontSize="3.4" className="fill-muted-foreground">the three-arm fan, paired line-by-line: Esophagus → SCC · Liver → HCC · Breast → Breast cancer</text>
        {/* nitrosamines */}
        <rect x="564" y="980" width="508" height="92" rx="10" className="fill-card stroke-border" />
        <text x="578" y="996" fontSize="4.6" fontWeight="800" className="fill-foreground">NITROSAMINES</text>
        <text x="578" y="1008" fontSize="3.4" className="fill-muted-foreground">EXPOSURE — smoked foods</text>
        <text x="578" y="1025" fontSize="4" fontWeight="700" className="fill-foreground">→</text>
        <rect x="590" y="1014" width="96" height="16" rx="4" className="fill-brand-soft/40 stroke-brand" />
        <text x="638" y="1025" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">STOMACH</text>
        <text x="578" y="1048" fontSize="4" fontWeight="800" className="fill-foreground">→ IMPACT — Gastric cancer (intestinal type)</text>
        <text x="578" y="1066" fontSize="3.4" className="fill-muted-foreground">the intestinal type — nitrosamines from smoked and preserved foods</text>
      </g>
      {/* ===== the HEPATIC ANGIOSARCOMA PAIR callout ===== */}
      <g>
        <rect x="24" y="1084" width="1054" height="56" rx="12" className="fill-emergency-soft/40 stroke-emergency" />
        <text x="40" y="1104" fontSize="4.6" fontWeight="800" className="fill-foreground">THE HEPATIC ANGIOSARCOMA PAIR — vinyl chloride (used to make PVC pipes) + arsenic → Liver → Hepatic angiosarcoma</text>
        <text x="40" y="1122" fontSize="4" fontWeight="700" className="fill-foreground">the VESSEL WALL sarcoma (CD31+ spindle cells), NOT the hepatocyte — aflatoxin (stored grains and nuts) and ethanol&apos;s liver arm give Hepatocellular carcinoma instead</text>
      </g>
      {/* footer */}
      <g>
        <rect x="24" y="1152" width="1054" height="52" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="40" y="1170" fontSize="5.2" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 243 / book 221 (Pathology — Neoplasia: Carcinogens)</text>
        <text x="40" y="1182" fontSize="4.4" className="fill-muted-foreground">Census (pdfimages + VLM ×2): ZERO rasters — one pure 12-row table. Tobacco interleave resolved: ONE row between Asbestos and Ethanol, blank EXPOSURE cell, alphabetical 8-organ list paired line-by-line with 8 impacts.</text>
        <text x="40" y="1194" fontSize="4.4" className="fill-muted-foreground">Quirks: the header prints “TOXIn / eXPOSUre / OrGAn / ImPACT” in the text layer (plain capitals on the page); “LiVer” in the vinyl chloride row; blank exposure cells for tobacco, ethanol, and ionizing radiation. Four KYP mnemonics are original.</text>
      </g>
    </svg>
  );
}
