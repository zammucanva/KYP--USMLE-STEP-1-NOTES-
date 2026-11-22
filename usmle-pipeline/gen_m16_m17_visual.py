#!/usr/bin/env python3
"""M16 systemic-mycoses + M17 opportunistic-fungi — generates BOTH components
into micro.tsx using the width-budget machinery (0.50 u/char/px)."""
U = 0.50

def budget(fs, w):
    return int(w / (U * fs))

def wrap(text, fs, w):
    maxc = budget(fs, w)
    lines, cur = [], ""
    for wd in text.split():
        t = (cur + " " + wd).strip()
        if len(t) <= maxc:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = wd
    if cur:
        lines.append(cur)
    return lines

AUDIT = []

def T(x, y, size, cls, text, weight=None, anchor=None, budget_w=None):
    a = f'x="{x}" y="{y}"'
    if anchor:
        a += f' textAnchor="{anchor}"'
    a += f' fontSize="{size}"'
    if weight:
        a += f' fontWeight="{weight}"'
    a += f' className="{cls}"'
    t = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    if budget_w:
        AUDIT.append(("M16/17", size, text, budget_w, round(len(text) * U * size, 1)))
    return f"<text {a}>{t}</text>"

def emit_component(name, aria, body_fn):
    out = [f'export function {name}() {{', '  const w = 980;']
    body_fn(out)
    return out

# ================= M16: SystemicMycosesMap =================
sys_rows = [
    ("Histoplasmosis", "Mississippi and Ohio River Valleys", "Macrophage filled with Histoplasma (smaller than RBC); tuberculate macroconidia on culture", "Palatal/tongue ulcers, splenomegaly, pancytopenia, erythema nodosum", "Histo hides (within macrophages). Associated with bird or bat droppings (eg, caves). Diagnosis via urine/serum antigen"),
    ("Blastomycosis", "Eastern and Central US, Great Lakes", "Broad-based budding of Blastomyces (same size as RBC)", "Inflammatory lung disease; disseminates to bone/skin (verrucous lesions, may mimic SCC)", "Blasto buds broadly"),
    ("Coccidioidomycosis", "Southwestern US, California", "Spherule filled with endospores of Coccidioides (much larger than RBC)", "Disseminates to bone/skin; erythema nodosum (desert bumps) or multiforme; arthralgias (desert rheumatism); can cause meningitis", "Associated with dust exposure in endemic areas (eg, archeological excavations, earthquakes)"),
    ("Paracoccidioidomycosis", "Latin America", "Budding yeast of Paracoccidioides with “captain’s wheel” formation (much larger than RBC)", "Similar to blastomycosis, males > females", "Paracoccidio parasails with the captain’s wheel all the way to Latin America"),
]
# NOTE: the NOTES column above mixes FA mnemonics with facts; the visual
# carries FACTS ONLY (FA's mnemonics stay verification-only in the table
# block). Rows whose source NOTES cell is mnemonic-only get an em-dash.
sys_rows_visual = [
    ("Histoplasmosis", "Mississippi and Ohio River Valleys", "Macrophage filled with Histoplasma (smaller than RBC); tuberculate macroconidia on culture", "Palatal/tongue ulcers, splenomegaly, pancytopenia, erythema nodosum", "Bird or bat droppings (eg, caves); diagnosis via urine/serum antigen"),
    ("Blastomycosis", "Eastern and Central US, Great Lakes", "Broad-based budding of Blastomyces (same size as RBC)", "Inflammatory lung disease; disseminates to bone/skin (verrucous lesions, may mimic SCC)", "\u2014 (the printed cell is the FA mnemonic \u2014 table block only)"),
    ("Coccidioidomycosis", "Southwestern US, California", "Spherule filled with endospores of Coccidioides (much larger than RBC)", "Disseminates to bone/skin; erythema nodosum (desert bumps) or multiforme; arthralgias (desert rheumatism); can cause meningitis", "Dust exposure in endemic areas (eg, archeological excavations, earthquakes)"),
    ("Paracoccidioidomycosis", "Latin America", "Budding yeast of Paracoccidioides with the \u201ccaptain\u2019s wheel\u201d formation (much larger than RBC)", "Similar to blastomycosis, males > females", "\u2014 (the printed cell is the FA mnemonic \u2014 table block only)"),
]

def m16_body(out):
    # geometry
    intro = [
        "All of the following can cause pneumonia and can disseminate.",
        "All are caused by dimorphic fungi: cold (20°C) = mold; heat (37°C) = yeast. Only exception is Coccidioides, which is a spherule (not yeast) in tissue.",
        "Systemic mycoses can form granulomas (like TB); cannot be transmitted person-to-person (unlike TB).",
        "Treatment: fluconazole or itraconazole for local infection; amphotericin B for systemic infection.",
    ]
    intro_w = [ln for raw in intro for ln in wrap(raw, 5.2, 856)]
    # grid: 5 cols: DISEASE 130 | ENDEMIC 150 | PATHOLOGIC 250 | UNIQUE 230 | NOTES 130
    # text budgets: 118, 138, 238, 218, 118
    grid = []
    for (n, loc, pf, us, notes) in sys_rows_visual:
        locl = wrap(loc, 5.0, 128)
        pfl = wrap(pf, 5.0, 218)
        usl = wrap(us, 5.0, 198)
        ntl = wrap(notes, 5.0, 126)
        h = 18 + max(len(locl), len(pfl), len(usl), len(ntl)) * 10 + 10
        grid.append((n, locl, pfl, usl, ntl, h))
    A_Y = 76
    A_H = 24 + len(intro_w) * 11 + 14
    B_Y = A_Y + A_H + 16
    B_H = 24 + 26 + 6 + sum(h for *_, h in grid) + 8 * 3 + 12
    ANC_Y = B_Y + B_H + 16
    anc = "The size axis names the organism on tissue: smaller than RBC = Histoplasma (inside macrophages) · same size as RBC with broad-based bud = Blastomyces · much larger than RBC = the Coccidioides spherule or the Paracoccidioides captain's wheel"
    anc_w = wrap(anc, 6.2, 876)
    ANC_H = 10 + len(anc_w) * 13 + 10
    FOOT_Y = ANC_Y + ANC_H + 14
    footer = [
        "Original KYP redraw of the source's systemic-mycoses table (pdf 171 / book 149 — pure vector; the 5 photos are raster, COPYRIGHTED, described-in-text only). The printed US endemic map with its legend (Blastomycosis Histoplasmosis Coccidiodomycosis — the source's own one-d typo at line 125) is NOT reproduced:",
        "the endemic geography is carried by the ENDEMIC LOCATION column verbatim. FA's printed mnemonics (Histo hides; Blasto buds broadly; Paracoccidio parasails with the captain's wheel) are NOT reproduced — verification only, carried verbatim in the note's table block.",
    ]
    footer_w = [ln for raw in footer for ln in wrap(raw, 7.2, 944)]
    TOTAL = FOOT_Y + len(footer_w) * 12 + 16
    out.append(f'  const h = {TOTAL};')
    out.append('  return (')
    out.append(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="Systemic mycoses, an original KYP comparison grid. The dimorphic rule: cold 20 degrees = mold, heat 37 degrees = yeast, with Coccidioides the spherule exception; granulomas like TB but not transmitted person to person; fluconazole or itraconazole for local infection and amphotericin B for systemic. The four diseases: Histoplasmosis (Mississippi and Ohio River Valleys; macrophage filled with Histoplasma smaller than RBC with tuberculate macroconidia on culture; palatal and tongue ulcers, splenomegaly, pancytopenia, erythema nodosum; bird or bat droppings; urine and serum antigen), Blastomycosis (Eastern and Central US and Great Lakes; broad-based budding same size as RBC; inflammatory lung disease disseminating to bone and skin with verrucous lesions that may mimic SCC), Coccidioidomycosis (Southwestern US, California; spherule filled with endospores much larger than RBC; desert bumps erythema nodosum, desert rheumatism arthralgias, meningitis; dust exposure — archeological excavations, earthquakes), and Paracoccidioidomycosis (Latin America; the captains-wheel budding yeast much larger than RBC; similar to blastomycosis, males more than females)" className="min-w-[940px]">')
    out.append('      {/* header */}')
    out.append('      <g>')
    out.append('        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />')
    out.append(T(42, 42, 11, "fill-foreground", "Systemic mycoses — the dimorphic grid (original KYP redraw)", weight="800"))
    out.append('        <rect x="722" y="24" width="210" height="18" rx="9" className="fill-brand-soft" />')
    out.append(T(827, 37, 7.6, "fill-brand", "pneumonia · disseminates · granulomas", weight="800", anchor="middle"))
    out.append('      </g>')
    out.append('      {/* ===== THE DIMORPHIC RULE ===== */}')
    out.append('      <g>')
    out.append(f'        <rect x="36" y="{A_Y}" width="908" height="{A_H}" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />')
    out.append(T(52, A_Y + 22, 9, "fill-foreground", "THE DIMORPHIC RULE — MYCOLOGY begins", weight="800"))
    yy = A_Y + 38
    for ln in intro_w:
        out.append(T(52, yy, 5.2, "fill-muted-foreground", ln, budget_w=856)); yy += 11
    out.append('      </g>')
    out.append('      {/* ===== THE 4-DISEASE GRID ===== */}')
    out.append('      <g>')
    out.append(f'        <rect x="36" y="{B_Y}" width="908" height="{B_H}" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />')
    out.append(T(52, B_Y + 22, 9, "fill-foreground", "THE FOUR DISEASES — DISEASE | ENDEMIC | PATHOLOGIC | UNIQUE SIGNS | NOTES (facts only; FA's cell mnemonics stay in the table block)", weight="800"))
    cols = [(52, 130, "DISEASE"), (190, 140, "ENDEMIC LOCATION"), (338, 230, "PATHOLOGIC FEATURES"), (576, 210, "UNIQUE SIGNS/SYMPTOMS"), (794, 138, "NOTES")]
    for x, cw, ch in cols:
        out.append(f'        <rect x="{x}" y="{B_Y + 32}" width="{cw}" height="20" rx="4" className="fill-secondary" />')
        out.append(T(x + 6, B_Y + 46, 5.8, "fill-foreground", ch, weight="800"))
    yy = B_Y + 60
    for i, (n, locl, pfl, usl, ntl, hh) in enumerate(grid):
        cls = "fill-secondary/60" if i % 2 else "fill-secondary"
        out.append(f'        <rect x="52" y="{yy}" width="880" height="{hh}" rx="4" className="{cls}" />')
        out.append(T(58, yy + 13, 6.0, "fill-emergency", n, weight="800", budget_w=118))
        for j, ln in enumerate(locl):
            out.append(T(196, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=128))
        for j, ln in enumerate(pfl):
            out.append(T(344, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=218))
        for j, ln in enumerate(usl):
            out.append(T(582, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=198))
        for j, ln in enumerate(ntl):
            out.append(T(800, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=126))
        yy += hh + 8
    out.append('      </g>')
    out.append('      {/* anchors strip */}')
    out.append('      <g>')
    out.append(f'        <rect x="36" y="{ANC_Y}" width="908" height="{ANC_H}" rx="8" className="fill-secondary" />')
    yy = ANC_Y + 20
    for ln in anc_w:
        out.append(T(490, yy, 6.2, "fill-muted-foreground", ln, weight="700", anchor="middle", budget_w=880)); yy += 13
    out.append('      </g>')
    out.append('      {/* footer */}')
    yy = FOOT_Y
    for ln in footer_w:
        out.append(T(24, yy, 7.2, "fill-muted-foreground", ln, budget_w=944)); yy += 12
    out.append('    </svg>')
    out.append('  );')
    out.append('}')

# ================= M17: OpportunisticFungiPanel =================
opp = [
    ("Candida albicans", "brand", [
        "alba = white. Dimorphic; forms pseudohyphae and budding yeasts at 20°C, germ tubes at 37°C. Systemic or superficial fungal infection.",
        "Causes oral and esophageal thrush in immunocompromised (neonates, steroids, diabetes, AIDS), vulvovaginitis (diabetes, use of antibiotics), diaper rash, infective endocarditis (people who inject drugs), disseminated candidiasis (especially in neutropenic patients as host defense relies on phagocytes), chronic mucocutaneous candidiasis.",
        "Treatment: oral fluconazole or topical azoles for vaginal; nystatin, azoles, or rarely echinocandins for oral; fluconazole, echinocandins, or amphotericin B for esophageal or systemic disease.",
    ]),
    ("Aspergillus fumigatus", "emergency", [
        "Acute angle (45°) branching of septate hyphae. Causes invasive aspergillosis in immunocompromised patients, especially those with neutrophil dysfunction (eg, chronic granulomatous disease) because Aspergillus is catalase ⊕. Can cause aspergillomas in pre-existing lung cavities, especially after TB infection.",
        "Some species produce aflatoxins (induce TP53 mutations leading to hepatocellular carcinoma). Treatment: voriconazole or echinocandins (2nd-line).",
        "Allergic bronchopulmonary aspergillosis (ABPA) — hypersensitivity response to Aspergillus growing in lung mucus. Associated with asthma and cystic fibrosis; may cause bronchiectasis and eosinophilia.",
    ]),
    ("Cryptococcus neoformans", "emergency", [
        "5-10 μm with narrow budding. Heavily encapsulated yeast. Not dimorphic. ⊕ PAS staining. Found in soil, pigeon droppings. Acquired through inhalation with hematogenous dissemination to meninges.",
        "Highlighted with India ink (clear halo) and mucicarmine (red inner capsule). Latex agglutination test detects polysaccharide capsular antigen and is more sensitive and specific.",
        "Causes cryptococcosis, which can manifest with meningitis, pneumonia, and/or encephalitis (“soap bubble” lesions in brain), primarily in immunocompromised. Treatment: amphotericin B + flucytosine followed by fluconazole for cryptococcal meningitis.",
    ]),
    ("Mucor and Rhizopus spp", "brand", [
        "Irregular, broad, nonseptate hyphae branching at wide angles. Causes mucormycosis, mostly in patients with DKA and/or neutropenia (eg, leukemia).",
        "Inhalation of spores → fungi proliferate in blood vessel walls, penetrate cribriform plate, and enter brain. Rhinocerebral, frontal lobe abscess; cavernous sinus thrombosis. Headache, facial pain, black necrotic eschar on face; may have cranial nerve involvement.",
        "Treatment: surgical debridement, amphotericin B or isavuconazole.",
    ]),
]

def m17_body(out):
    cards = []
    for n, c, paras in opp:
        lines = [ln for raw in paras for ln in wrap(raw, 5.0, 430)]
        h = 22 + len(lines) * 10 + 12
        cards.append((n, c, lines, h))
    A_Y = 76
    A_H = 24 + max(h for *_, h in cards) * 2 + 10 + 12  # 2 rows of 2 cards
    card_pos = [(52, A_Y + 32), (496, A_Y + 32), (52, A_Y + 32 + max(h for *_, h in cards) + 10), (496, A_Y + 32 + max(h for *_, h in cards) + 10)]
    ANC_Y = A_Y + A_H + 16
    anc = "Septate hyphae at acute 45° angles = Aspergillus · irregular broad nonseptate hyphae at wide angles = Mucor/Rhizopus (the DKA rhinocerebral organism) · pseudohyphae with germ tubes at 37°C = Candida · the encapsulated yeast with a clear halo on India ink = Cryptococcus"
    anc_w = wrap(anc, 6.2, 876)
    ANC_H = 10 + len(anc_w) * 13 + 10
    FOOT_Y = ANC_Y + ANC_H + 14
    footer = [
        "Original KYP redraw of the source's opportunistic-fungi page (pdf 172 / book 150). The page displays 9 photo panels (A-I: the Candida pseudohyphae and germ tubes and oral thrush; the Aspergillus 45° septate hyphae and the aspergilloma CT; the Cryptococcus India-ink halo and mucicarmine capsule; the Mucor/Rhizopus wide-angle",
        "hyphae and the black necrotic facial eschar) — pdfimages counts 5 raster XObjects vs 9 displayed panels (grouping discrepancy documented); all COPYRIGHTED, described-in-text only. No FA cell mnemonics on this page; the morphology axis is carried as facts.",
    ]
    footer_w = [ln for raw in footer for ln in wrap(raw, 7.2, 944)]
    TOTAL = FOOT_Y + len(footer_w) * 12 + 16
    out.append(f'  const h = {TOTAL};')
    out.append('  return (')
    out.append(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="Opportunistic fungi, an original KYP panel. Candida albicans: alba white, dimorphic with pseudohyphae and budding yeasts at 20 degrees and germ tubes at 37 degrees; oral and esophageal thrush in the immunocompromised, vulvovaginitis in diabetes and antibiotic use, diaper rash, infective endocarditis in people who inject drugs, disseminated candidiasis in neutropenia, chronic mucocutaneous candidiasis; fluconazole or topical azoles for vaginal, nystatin or azoles or echinocandins for oral, fluconazole or echinocandins or amphotericin B for esophageal or systemic. Aspergillus fumigatus: acute angle 45-degree branching of septate hyphae; invasive aspergillosis in neutrophil dysfunction such as chronic granulomatous disease because Aspergillus is catalase positive; aspergillomas in pre-existing cavities after TB; aflatoxins inducing TP53 mutations and hepatocellular carcinoma; voriconazole; allergic bronchopulmonary aspergillosis with asthma, cystic fibrosis, bronchiectasis, eosinophilia. Cryptococcus neoformans: 5-10 micrometer narrow budding heavily encapsulated yeast, not dimorphic, PAS positive, soil and pigeon droppings, inhalation with hematogenous dissemination to meninges; India ink clear halo, mucicarmine red inner capsule, latex agglutination for capsular antigen; meningitis, pneumonia, encephalitis with soap bubble lesions; amphotericin B plus flucytosine then fluconazole. Mucor and Rhizopus: irregular broad nonseptate hyphae at wide angles; mucormycosis in DKA and neutropenia; inhalation with proliferation in blood vessel walls penetrating the cribriform plate into the brain; rhinocerebral frontal lobe abscess, cavernous sinus thrombosis, black necrotic eschar; surgical debridement with amphotericin B or isavuconazole" className="min-w-[940px]">')
    out.append('      {/* header */}')
    out.append('      <g>')
    out.append('        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />')
    out.append(T(42, 42, 11, "fill-foreground", "Opportunistic fungi — the morphology panel (original KYP redraw)", weight="800"))
    out.append('        <rect x="722" y="24" width="210" height="18" rx="9" className="fill-brand-soft" />')
    out.append(T(827, 37, 7.6, "fill-brand", "catalase ⊕ · DKA · capsule · 45° vs wide", weight="800", anchor="middle"))
    out.append('      </g>')
    out.append('      {/* ===== THE FOUR ORGANISMS ===== */}')
    out.append('      <g>')
    out.append(f'        <rect x="36" y="{A_Y}" width="908" height="{A_H}" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />')
    out.append(T(52, A_Y + 22, 9, "fill-foreground", "THE FOUR ORGANISMS — morphology · diseases · treatment", weight="800"))
    for (n, c, lines, hh), (x, y) in zip(cards, card_pos):
        out.append(f'        <rect x="{x}" y="{y}" width="432" height="{hh}" rx="8" className="fill-secondary" />')
        out.append(T(x + 10, y + 16, 7, "fill-emergency" if c == "emergency" else "fill-brand", n, weight="800"))
        for j, ln in enumerate(lines):
            out.append(T(x + 10, y + 30 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=430))
    out.append('      </g>')
    out.append('      {/* anchors strip */}')
    out.append('      <g>')
    out.append(f'        <rect x="36" y="{ANC_Y}" width="908" height="{ANC_H}" rx="8" className="fill-secondary" />')
    yy = ANC_Y + 20
    for ln in anc_w:
        out.append(T(490, yy, 6.2, "fill-muted-foreground", ln, weight="700", anchor="middle", budget_w=880)); yy += 13
    out.append('      </g>')
    out.append('      {/* footer */}')
    yy = FOOT_Y
    for ln in footer_w:
        out.append(T(24, yy, 7.2, "fill-muted-foreground", ln, budget_w=944)); yy += 12
    out.append('    </svg>')
    out.append('  );')
    out.append('}')

with open('src/components/kyp/usmle/visuals/micro.tsx', 'a', encoding='utf8') as f:
    f.write("\n" + "\n".join(emit_component("SystemicMycosesMap", "systemic mycoses", m16_body)) + "\n")
    f.write("\n" + "\n".join(emit_component("OpportunisticFungiPanel", "opportunistic fungi", m17_body)) + "\n")

bad = [(t, s, bw, au) for t, s, bw, au in [(a[0], a[1], a[3], a[4]) for a in AUDIT] if au > bw]
for t, s, bw, au in bad:
    print(f"  OVERFLOW {t} fs={s} {au}u > {bw}u :: {s[:50]!r}")
if bad:
    raise SystemExit(f"AUDIT FAILED: {len(bad)}")
print(f"AUDIT PASSED: {len(AUDIT)} text elements within budget (M16 + M17)")
