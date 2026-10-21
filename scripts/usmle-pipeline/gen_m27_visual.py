#!/usr/bin/env python3
"""M27 hiv-aids — generates the HivLifecycleMap component into micro.tsx
(width-budget machinery, 0.50 u/char/px). Source: pdf 194-195 / books
172-173. The ORIGINAL virion redraw (gp120/gp41/p17/p24/RT/diploid RNA), the
3-gene strip, the entry-coreceptor logic, the diagnosis algorithm redraw,
and the CD4 ladder (3 tiers, 18 pathogen rows). Both pages PURE VECTOR — no
rasters, no copyrighted photos."""
U = 0.50

def budget(fs, w):
    return int(w / (U * fs))

def wrap(text, fs, w):
    lines, cur = [], ""
    for wd in text.split():
        t = (cur + " " + wd).strip()
        if len(t) <= budget(fs, w):
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
        AUDIT.append(("M27", size, text, budget_w, round(len(text) * U * size, 1)))
    return f"<text {a}>{t}</text>"

def R(x, y, w, h, cls, rx="0", stroke=None, sw=None):
    a = f'x="{x}" y="{y}" width="{w}" height="{h}"'
    if rx != "0":
        a += f' rx="{rx}"'
    a += f' className="{cls}"'
    if stroke:
        a += f' stroke="{stroke}"'
        if sw:
            a += f' strokeWidth="{sw}"'
    return f"<rect {a} />"

def C(cx, cy, r, cls, stroke=None, sw=None):
    a = f'cx="{cx}" cy="{cy}" r="{r}" className="{cls}"'
    if stroke:
        a += f' stroke="{stroke}"'
        if sw:
            a += f' strokeWidth="{sw}"'
    return f"<circle {a} />"

def L(x1, y1, x2, y2, cls, sw="0.9"):
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" className="{cls}" strokeWidth="{sw}" />'

def P(d, cls, sw="1.1", fill="none"):
    return f'<path d="{d}" className="{cls}" strokeWidth="{sw}" fill="{fill}" strokeLinejoin="round" strokeLinecap="round" />'

import math

L27 = []
a = L27.append

# ============ content ============
genes = [
    ("ENV", "gp120 and gp41 — formed from cleavage of gp160. gp120: attachment to host CD4+ T cell. gp41 (forty-one): fusion and entry."),
    ("GAG", "p24 (capsid protein) and p17 (matrix protein) — the structural shell."),
    ("POL", "Reverse transcriptase, Integrase, Protease — the enzyme set. [FA gloss, printed: RIP “Pol” — verification-only.]"),
]

entry_lines = [
    "BINDS CD4 plus a CORECEPTOR: CCR5 on macrophages (EARLY infection) or CXCR4 on T cells (LATE infection).",
    "Homozygous CCR5 mutation = IMMUNITY. Heterozygous CCR5 mutation = slower course. RT synthesizes dsDNA from genomic RNA; the dsDNA INTEGRATES into the host genome (integrase).",
]

dx_lines = [
    "STEP 1 — the HIV-1/2 ANTIBODIES + p24 ANTIGEN combination immunoassay (4th-gen screen): detects p24 capsid antigen + IgG/IgM to HIV-1/2. Use for diagnosis; very high sensitivity/specificity — but may miss disease tested within the FIRST 2 WEEKS of infection.",
    "STEP 2 — a POSITIVE screen is followed by the confirmatory HIV-1/HIV-2 ANTIBODY DIFFERENTIATION immunoassay (which virus: HIV-1, HIV-2, or both). Indeterminate results → HIV-1 NAT.",
    "THE RNA TESTS: NAAT is QUALITATIVE — a sensitive method to detect HIV viremia in antibody-negative patients. VIRAL LOAD (RT-PCR) is QUANTITATIVE — plasma HIV RNA amount; use to MONITOR treatment response and transmissibility. Western blot is NO LONGER recommended by the CDC.",
    "PEDIATRICS: HIV-1/2 Ag/Ab testing is NOT recommended in babies with suspected HIV (maternally transferred antibody) — use the HIV VIRAL LOAD instead.",
    "AIDS DIAGNOSIS: ≤200 CD4+ cells/mm³ (normal 500–1500) or HIV ⊕ with an AIDS-defining condition (eg, Pneumocystis pneumonia).",
]

# (tier, pathogen, presentation, findings)
ladder = [
    ("<500", "Candida albicans", "Oral thrush", "Scrapable white plaque, pseudohyphae on microscopy"),
    ("<500", "EBV", "Oral hairy leukoplakia", "Unscrapable white plaque on lateral tongue"),
    ("<500", "HHV-8", "Kaposi sarcoma, localized cutaneous disease", "Perivascular spindle cells invading and forming vascular tumors on histology"),
    ("<500", "HPV", "Squamous cell carcinoma at sites of sexual contact (anus, cervix, oropharynx)", "—"),
    ("<500", "Mycobacterium tuberculosis", "Increased risk of reactivation of latent TB infection", "—"),
    ("<200", "Histoplasma capsulatum", "Fever, weight loss, fatigue, cough, dyspnea, nausea, vomiting, diarrhea", "Oval yeast cells within macrophages"),
    ("<200", "HIV itself", "Dementia, HIV-associated nephropathy", "Cerebral atrophy on neuroimaging"),
    ("<200", "JC virus (reactivation)", "Progressive multifocal leukoencephalopathy (PML)", "Nonenhancing areas of demyelination on MRI"),
    ("<200", "HHV-8", "Kaposi sarcoma, disseminated (pulmonary, GI, lymphatic)", "—"),
    ("<200", "Pneumocystis jirovecii", "Pneumocystis pneumonia", "“Ground-glass” opacities on chest imaging"),
    ("<100", "Bartonella spp", "Bacillary angiomatosis", "Multiple red to purple papules or nodules; biopsy with neutrophilic inflammation"),
    ("<100", "Candida albicans", "Esophagitis", "White plaques on endoscopy; yeast and pseudohyphae on biopsy"),
    ("<100", "CMV", "Colitis, Retinitis, Esophagitis, Encephalitis, Pneumonitis (CREEP)", "Linear ulcers on endoscopy, cotton-wool spots on fundoscopy; owl-eye intranuclear inclusions on biopsy"),
    ("<100", "Cryptococcus neoformans", "Meningitis", "Encapsulated yeast on India ink stain or capsular antigen ⊕"),
    ("<100", "Cryptosporidium spp", "Chronic, watery diarrhea", "Acid-fast oocysts in stool"),
    ("<100", "EBV", "B-cell lymphoma (non-Hodgkin, CNS lymphoma)", "CNS lymphoma — ring enhancing, may be SOLITARY (vs Toxoplasma)"),
    ("<100", "Mycobacterium avium–intracellulare (MAC)", "Nonspecific systemic symptoms or superficial lymphadenitis", "Most common if CD4+ <50/mm³"),
    ("<100", "Toxoplasma gondii", "Brain abscesses", "MULTIPLE ring-enhancing lesions on MRI"),
]

foot_lines = [
    "Original KYP redraw of the source's HIV structure diagram + structural genes + coreceptor logic + diagnosis algorithm (pdf 194 / book 172) and the Common diseases of HIV-positive adults CD4 ladder (pdf 195 / book 173). Both pages are PURE VECTOR — no rasters.",
    "FA's printed gloss (RIP “Pol” for the pol gene's RT-Integrase-Protease) is quoted in the gene strip for verification only — KYP's own key is in the note's mnemonics block. The source's banner typo 'MICROCIOLOGY—VIROLOGY' prints on books 172-173.",
]
foot_w = [ln for raw in foot_lines for ln in wrap(raw, 7.2, 944)]

# ============ layout ============
Y_HDR = 14
Y_VIR = 76
VIR_H = 210

Y_GEN = Y_VIR + VIR_H + 16
gen_rows = []
for g, d in genes:
    dl = wrap(d, 4.6, 790)
    h = 12 + len(dl) * 9 + 8
    gen_rows.append((g, dl, h))
GEN_H = 26 + sum(h for *_, h in gen_rows) + 2 * 6 + 12

Y_EN = Y_GEN + GEN_H + 16
en_w = [ln for raw in entry_lines for ln in wrap(raw, 5.0, 880)]
EN_H = 14 + len(en_w) * 10 + 12

Y_DX = Y_EN + EN_H + 16
dx_rows = []
for d in dx_lines:
    dl = wrap(d, 4.6, 790)
    h = 12 + len(dl) * 9 + 8
    dx_rows.append((dl, h))
DX_H = 26 + sum(h for *_, h in dx_rows) + 4 * 6 + 12

Y_LD = Y_DX + DX_H + 16
ld_cols = [(52, 60, "CD4"), (118, 190, "PATHOGEN"), (314, 260, "PRESENTATION"), (580, 348, "FINDINGS")]
ld_rows = []
for tier, p, pres, f in ladder:
    pl = wrap(p, 4.5, 186)
    prl = wrap(pres, 4.5, 256)
    fl = wrap(f, 4.5, 344)
    h = 12 + max(len(pl), len(prl), len(fl)) * 8.6 + 8
    ld_rows.append((tier, pl, prl, fl, h))
LD_H = 26 + 26 + 6 + sum(h for *_, h in ld_rows) + 17 * 5 + 12

Y_FOOT = Y_LD + LD_H + 18
TOTAL = Y_FOOT + len(foot_w) * 12 + 16

# ============ emit ============
a('export function HivLifecycleMap() {')
a('  const w = 980;')
a(f'  const h = {TOTAL};')
a('  return (')
a(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="HIV and AIDS, an original KYP map. THE VIRION: envelope proteins acquired through budding from the host cell plasma membrane — gp120 the docking glycoprotein for attachment to CD4, gp41 the transmembrane glycoprotein for fusion and entry, the lipid envelope, p17 the matrix protein, p24 the capsid protein, reverse transcriptase, integrase, and protease around the diploid genome of 2 RNA molecules. THE GENES: env (gp120 and gp41 from gp160 cleavage), gag (p24 capsid and p17 matrix), pol (reverse transcriptase, integrase, protease). ENTRY: binds CD4 plus CCR5 on macrophages in early infection or CXCR4 on T cells in late infection; homozygous CCR5 mutation confers immunity and heterozygous a slower course; reverse transcriptase makes dsDNA from genomic RNA and integrase inserts it into the host genome. DIAGNOSIS: the antibody-p24 combination immunoassay (may miss the first 2 weeks), the confirmatory HIV-1/HIV-2 differentiation immunoassay, qualitative NAAT for antibody-negative viremia, quantitative viral load RT-PCR to monitor treatment, Western blot no longer recommended, and viral load instead of serology in babies; AIDS is defined as CD4 below 200 or an AIDS-defining condition like Pneumocystis pneumonia. THE CD4 LADDER: below 500 — oral thrush, oral hairy leukoplakia, localized Kaposi, HPV-associated squamous carcinomas, TB reactivation; below 200 — disseminated histoplasmosis with oval yeasts in macrophages, HIV dementia and nephropathy, JC virus PML, disseminated Kaposi, Pneumocystis pneumonia with ground-glass opacities; below 100 — Bartonella bacillary angiomatosis, Candida esophagitis, CMV CREEP with owl-eye inclusions and cotton-wool spots, Cryptococcus meningitis on India ink, Cryptosporidium acid-fast oocysts, EBV CNS lymphoma (solitary ring-enhancing), MAC below 50, and Toxoplasma multiple ring-enhancing abscesses" className="min-w-[940px]">')

# header
a('      {/* header */}')
a('      <g>')
a(f'        {R(24, Y_HDR, 932, 46, "fill-card stroke-border", rx="12", sw="1.4")}')
a(T(42, Y_HDR + 28, 11, "fill-foreground", "HIV — the virion, the diagnosis ladder, and the CD4 map (original KYP redraw)", weight="800"))
a(f'        {R(722, Y_HDR + 10, 234, 18, "fill-brand-soft", rx="9")}')
a(T(839, Y_HDR + 23, 7.6, "fill-brand", "gp120 · ≤200 · the ladder", weight="800", anchor="middle"))
a('      </g>')

# virion panel (original redraw)
a('      {/* ===== THE VIRION (original redraw) ===== */}')
a('      <g>')
a(f'        {R(36, Y_VIR, 908, VIR_H, "fill-secondary/40 stroke-brand", rx="14", sw="1.5")}')
a(T(52, Y_VIR + 20, 9, "fill-foreground", "The virion — an original redraw of the labeled diagram (book 172)", weight="800"))
cx, cy = 200, Y_VIR + 108
r_env, r_mat, r_cap = 62, 52, 34
# envelope + spikes (gp120 knob + gp41 stem)
for k in range(14):
    ang = math.radians(12.85 + 25.71 * k)
    x1, y1 = cx + r_env * math.cos(ang), cy + r_env * math.sin(ang)
    x2, y2 = cx + (r_env + 10) * math.cos(ang), cy + (r_env + 10) * math.sin(ang)
    a(f'        {L(f"{x1:.1f}", f"{y1:.1f}", f"{x2:.1f}", f"{y2:.1f}", "stroke-brand", "1.4")}')
    a(f'        {C(f"{x2:.1f}", f"{y2:.1f}", 4.2, "fill-card stroke-brand", sw="1.1")}')
a(f'        {C(cx, cy, r_env, "fill-none stroke-brand", sw="1.8")}')
a(f'        {C(cx, cy, r_mat, "fill-none stroke-brand", sw="1.0")}')
a(f'        {C(cx, cy, r_cap, "fill-card stroke-emergency", sw="1.6")}')
# diploid genome: two squiggles + enzymes dots
a(f'        {P(f"M {cx-20:.1f} {cy-10:.1f} q 5 -6 10 0 q 5 6 10 0", "stroke-emergency", "1.1")}')
a(f'        {P(f"M {cx-20:.1f} {cy+4:.1f} q 5 -6 10 0 q 5 6 10 0", "stroke-emergency", "1.1")}')
for dx_, dy_ in [(-24, -18), (24, -18), (24, 18)]:
    a(f'        {C(cx + dx_, cy + dy_, 3.4, "fill-brand")}')
# labels with leaders
a(T(300, Y_VIR + 48, 5.2, "fill-foreground", "gp120 — DOCKING glycoprotein: attachment to the host CD4+ T cell", weight="700", budget_w=440))
a(f'        {L(297, Y_VIR + 46, 262, cy - 40, "stroke-muted-foreground", "0.7")}')
a(T(300, Y_VIR + 68, 5.2, "fill-foreground", "gp41 (forty-one) — TRANSMEMBRANE glycoprotein: fusion and entry", weight="700", budget_w=440))
a(f'        {L(297, Y_VIR + 66, 258, cy - 14, "stroke-muted-foreground", "0.7")}')
a(T(300, Y_VIR + 88, 5.2, "fill-foreground", "Lipid envelope — proteins acquired by budding from the host plasma membrane", weight="700", budget_w=440))
a(f'        {L(297, Y_VIR + 86, 252, cy + 20, "stroke-muted-foreground", "0.7")}')
a(T(300, Y_VIR + 108, 5.2, "fill-foreground", "p17 — MATRIX protein · p24 — CAPSID protein (the gag pair)", weight="700", budget_w=440))
a(f'        {L(297, Y_VIR + 106, 234, cy + 46, "stroke-muted-foreground", "0.7")}')
a(T(300, Y_VIR + 128, 5.2, "fill-foreground", "Reverse transcriptase (+ integrase, protease) — the pol enzyme set", weight="700", budget_w=440))
a(f'        {L(297, Y_VIR + 126, 222, cy - 22, "stroke-muted-foreground", "0.7")}')
a(T(300, Y_VIR + 148, 5.2, "fill-foreground", "DIPLOID genome — 2 molecules of RNA", weight="700", budget_w=440))
a(f'        {L(297, Y_VIR + 146, 218, cy + 2, "stroke-muted-foreground", "0.7")}')
a(T(770, Y_VIR + 100, 5.0, "fill-muted-foreground", "RT synthesizes dsDNA from", budget_w=150))
a(T(770, Y_VIR + 110, 5.0, "fill-muted-foreground", "genomic RNA; the dsDNA", budget_w=150))
a(T(770, Y_VIR + 120, 5.0, "fill-muted-foreground", "INTEGRATES into the host", budget_w=150))
a(T(770, Y_VIR + 130, 5.0, "fill-muted-foreground", "genome (integrase).", budget_w=150))
a(T(770, Y_VIR + 152, 5.0, "fill-emergency", "gag = p24 + p17", weight="800", budget_w=150))
a(T(770, Y_VIR + 162, 5.0, "fill-emergency", "env = gp120 + gp41", weight="800", budget_w=150))
a(T(770, Y_VIR + 172, 5.0, "fill-emergency", "pol = RT + IN + PR", weight="800", budget_w=150))
a('      </g>')

# genes panel
a('      {/* ===== THE 3 STRUCTURAL GENES ===== */}')
a('      <g>')
a(f'        {R(36, Y_GEN, 908, GEN_H, "fill-card stroke-border", rx="14", sw="1.4")}')
a(T(52, Y_GEN + 20, 9, "fill-foreground", "The 3 structural genes (the proteins they code)", weight="800"))
yy = Y_GEN + 34
for i, (g, dl, hh) in enumerate(gen_rows):
    a(f'        {R(52, yy, 876, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(60, yy + 12, 6.4, "fill-brand", g, weight="800", budget_w=64))
    for j, ln in enumerate(dl):
        a(T(132, yy + 12 + j * 9, 4.6, "fill-muted-foreground", ln, budget_w=790))
    yy += hh + 6
a('      </g>')

# entry strip
a('      {/* ===== ENTRY LOGIC ===== */}')
a('      <g>')
a(f'        {R(36, Y_EN, 908, EN_H, "fill-secondary", rx="10")}')
yy = Y_EN + 16
for ln in en_w:
    a(T(490, yy, 5.0, "fill-foreground", ln, weight="700", anchor="middle", budget_w=884))
    yy += 10
a('      </g>')

# diagnosis panel
a('      {/* ===== DIAGNOSIS ===== */}')
a('      <g>')
a(f'        {R(36, Y_DX, 908, DX_H, "fill-card stroke-border", rx="14", sw="1.4")}')
a(T(52, Y_DX + 20, 9, "fill-foreground", "The diagnosis algorithm + the AIDS definition (book 172)", weight="800"))
yy = Y_DX + 34
for i, (dl, hh) in enumerate(dx_rows):
    a(f'        {R(52, yy, 876, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    for j, ln in enumerate(dl):
        a(T(60, yy + 12 + j * 9, 4.6, "fill-muted-foreground", ln, budget_w=790))
    yy += hh + 6
a('      </g>')

# CD4 ladder
a('      {/* ===== THE CD4 LADDER ===== */}')
a('      <g>')
a(f'        {R(36, Y_LD, 908, LD_H, "fill-secondary/40 stroke-brand", rx="14", sw="1.5")}')
a(T(52, Y_LD + 20, 9, "fill-foreground", "Common diseases of HIV-positive adults — the CD4 ladder (book 173)", weight="800"))
a(T(52, Y_LD + 32, 4.8, "fill-muted-foreground", "↓ CD4+ → reactivation of past infections (TB, HSV, shingles), dissemination of bacterial and fungal infections (eg, coccidioidomycosis), and non-Hodgkin lymphomas.", budget_w=880))
for x, cw, ch in ld_cols:
    a(f'        {R(x, Y_LD + 42, cw, 20, "fill-secondary", rx="4")}')
    a(T(x + 6, Y_LD + 56, 5.4, "fill-foreground", ch, weight="800", budget_w=cw - 10))
yy = Y_LD + 70
prev_tier = None
for tier, pl, prl, fl, hh in ld_rows:
    tier_cls = "fill-emergency" if tier == "<100" else ("fill-brand" if tier == "<200" else "fill-foreground")
    a(f'        {R(52, yy, 876, hh, "fill-secondary" if tier == "<500" else "fill-secondary/60", rx="4")}')
    a(T(58, yy + 12, 6.6, tier_cls, tier, weight="800", budget_w=54))
    for j, ln in enumerate(pl):
        a(T(120, yy + 12 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=186))
    for j, ln in enumerate(prl):
        a(T(316, yy + 12 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=256))
    for j, ln in enumerate(fl):
        a(T(582, yy + 12 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=344))
    yy += hh + 5
a('      </g>')

# footer
a('      {/* footer */}')
yy = Y_FOOT
for ln in foot_w:
    a(T(24, yy, 7.2, "fill-muted-foreground", ln, budget_w=944))
    yy += 12
a('    </svg>')
a('  );')
a('}')

with open('src/components/kyp/usmle/visuals/micro.tsx', 'a', encoding='utf8') as f:
    f.write("\n" + "\n".join(L27) + "\n")

bad = [s for s in AUDIT if s[4] > s[3]]
for s in bad:
    print(f"  OVERFLOW {s[0]} fs={s[1]} {s[4]}u > {s[3]}u :: {s[2][:50]!r}")
if bad:
    raise SystemExit(f"AUDIT FAILED: {len(bad)}")
print(f"AUDIT PASSED: {len(AUDIT)} text elements (M27); total height {TOTAL}u; virion H={VIR_H}; genes H={GEN_H}; dx H={DX_H}; ladder H={LD_H}")
