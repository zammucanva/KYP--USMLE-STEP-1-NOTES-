#!/usr/bin/env python3
"""M31 antimicrobial-overview — generates the AntimicrobialTargetMap component
into micro.tsx (width-budget machinery, 0.50 u/char/px). Source: pdf 205 /
book 183. The mechanisms-of-action chart: the bacterial cell with its nine
numbered target sites (① folate cascade ② membrane ③ DNA-integrity ④
RNA-polymerase/mRNA ⑤ gyrase ⑥ 50S ⑦ 30S, plus the wall pair ⑧ synthesis /
⑨ cross-linking), the seven satellite zone panels with the full drug
rosters, and the β-lactam cross-linking directory. The 4 tiny index rasters
(88-92px at 314ppi) and the 9 standalone dash markers of the printed chart
are redrawn as vector glyphs. The Penicillin G, V drug card printing on the
same page (lines 156-178 of the raw layer) is carried in the note's table
block, not the visual."""
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
        AUDIT.append(("M31", size, text, budget_w, round(len(text) * U * size, 1)))
    return f"<text {a}>{t}</text>"

def R(x, y, w, h, cls, rx="0", stroke=None, sw=None):
    a = f'x="{x}" y="{y}" width="{w}" height="{h}"'
    if rx != "0":
        a += f' rx="{rx}"'
    a += f' className="{cls}"'
    if stroke:
        a += f' stroke="{stroke}"'
        if sw:
            a += f' strokeWidth={sw}'
    return f"<rect {a} />"

L31 = []
a = L31.append

W, H = 980, 1052

# ============ header ============
a('      {/* header */}')
a('      <g>')
a(f'        {R(24, 14, 932, 48, "fill-card stroke-border", rx="12")}')
a(T(42, 42, 11, "fill-foreground", "Antimicrobial therapy — the mechanisms-of-action target map (original KYP redraw)", weight="800"))
a(f'        {R(700, 24, 232, 18, "fill-brand-soft")}')
a(T(816, 37, 7.6, "fill-brand", "drug class → cellular target → stage blocked", weight="800", anchor="middle", budget_w=224))
a('      </g>')

# ============ the cell (left) ============
a('      {/* ===== THE BACTERIAL CELL — nine numbered target sites ===== */}')
a('      <g>')
a(f'        {R(36, 100, 296, 560, "fill-secondary/40 stroke-brand", rx="24")}')
a(T(184, 118, 9, "fill-foreground", "The bacterial cell — the target side of the map", weight="800", anchor="middle", budget_w=288))
# wall band
a(f'        {R(48, 132, 272, 34, "fill-brand-soft/50 stroke-brand", rx="10")}')
a(T(184, 148, 5.2, "fill-foreground", "CELL WALL (peptidoglycan) — ⑧ synthesis ⑨ cross-linking", weight="800", anchor="middle", budget_w=264))
a(T(184, 161, 4.2, "fill-muted-foreground", "carried from the source's split rim labels — Cell wal l / Cell m embrane", anchor="middle", budget_w=264))
# membrane band
a(f'        {R(48, 174, 272, 24, "fill-card stroke-foreground", rx="8")}')
a(T(184, 190, 5.0, "fill-foreground", "CELL MEMBRANE ② — Daptomycin (gram ⊕) · Polymyxins (gram ⊝)", weight="800", anchor="middle", budget_w=264))
# cytoplasm content
a(T(184, 214, 6.6, "fill-foreground", "BACTERIAL CELL", weight="800", anchor="middle", budget_w=272))
# ① folate cascade
a(T(184, 232, 4.6, "fill-brand", "① FOLIC ACID SYNTHESIS AND REDUCTION (DNA methylation)", weight="800", anchor="middle", budget_w=272))
a(T(142, 244, 4.0, "fill-muted-foreground", "Sulfonamides", anchor="middle", budget_w=64))
a(T(224, 244, 4.0, "fill-muted-foreground", "Trimethoprim", anchor="middle", budget_w=64))
a(f'        {R(76, 250, 56, 22, "fill-card stroke-border", rx="6")}')
a(T(104, 264, 5.4, "fill-foreground", "PABA", weight="700", anchor="middle", budget_w=52))
a(f'        {R(152, 250, 56, 22, "fill-card stroke-border", rx="6")}')
a(T(180, 264, 5.4, "fill-foreground", "DHF", weight="700", anchor="middle", budget_w=52))
a(f'        {R(228, 250, 56, 22, "fill-card stroke-border", rx="6")}')
a(T(256, 264, 5.4, "fill-foreground", "THF", weight="700", anchor="middle", budget_w=52))
# blocked arrows with | bars
a('        <g className="stroke-emergency" strokeWidth="1.6">')
a('          <path d="M 132 261 L 152 261" fill="none" />')
a('          <path d="M 136 254 L 136 268" />')
a('          <path d="M 208 261 L 228 261" fill="none" />')
a('          <path d="M 212 254 L 212 268" />')
a('        </g>')
a(T(184, 284, 4.0, "fill-muted-foreground", "the one-carbon factory — bacteria build it, we eat it", anchor="middle", budget_w=272))
# ③⑤ DNA + gyrase
a(T(184, 306, 4.4, "fill-brand", "③ DNA INTEGRITY (via free radicals) — Metronidazole · ⑤ GYRASE — Fluoroquinolones", weight="700", anchor="middle", budget_w=272))
a(f'        {R(76, 314, 96, 30, "fill-card stroke-border", rx="8")}')
a(T(124, 333, 6.2, "fill-foreground", "DNA", weight="800", anchor="middle", budget_w=90))
a('        <path d="M 172 329 L 196 329" className="stroke-foreground" strokeWidth="1.3" />')
a(f'        {R(196, 314, 100, 30, "fill-card stroke-border", rx="8")}')
a(T(246, 333, 5.6, "fill-foreground", "DNA gyrase", weight="800", anchor="middle", budget_w=94))
# ④ RNA polymerase → mRNA
a(T(184, 362, 4.4, "fill-brand", "④ mRNA SYNTHESIS (RNA polymerase) — Rifampin", weight="700", anchor="middle", budget_w=272))
a(f'        {R(76, 370, 120, 30, "fill-card stroke-border", rx="8")}')
a(T(136, 389, 5.6, "fill-foreground", "RNA polymerase", weight="800", anchor="middle", budget_w=114))
a('        <path d="M 196 385 L 220 385" className="stroke-foreground" strokeWidth="1.3" />')
a(f'        {R(220, 370, 60, 30, "fill-card stroke-border", rx="8")}')
a(T(250, 389, 5.6, "fill-foreground", "mRNA", weight="800", anchor="middle", budget_w=54))
# ribosomes
a(T(184, 428, 5.6, "fill-foreground", "RIBOSOMES — two 70S pairs (50S cap + 30S base)", weight="800", anchor="middle", budget_w=272))
a('        <path d="M 250 400 C 258 412, 252 420, 240 430" className="stroke-foreground" strokeWidth="1.1" strokeDasharray="3 3" fill="none" />')
a(f'        {R(76, 438, 96, 78, "fill-secondary/60 stroke-border", rx="10")}')
a(f'        {R(82, 444, 84, 30, "fill-secondary")}')
a(T(124, 463, 6.0, "fill-foreground", "50S", weight="800", anchor="middle", budget_w=80))
a(f'        {R(82, 478, 84, 30, "fill-secondary/60")}')
a(T(124, 497, 6.0, "fill-foreground", "30S", weight="800", anchor="middle", budget_w=80))
a(f'        {R(188, 438, 96, 78, "fill-secondary/60 stroke-border", rx="10")}')
a(f'        {R(194, 444, 84, 30, "fill-secondary")}')
a(T(236, 463, 6.0, "fill-foreground", "50S", weight="800", anchor="middle", budget_w=80))
a(f'        {R(194, 478, 84, 30, "fill-secondary/60")}')
a(T(236, 497, 6.0, "fill-foreground", "30S", weight="800", anchor="middle", budget_w=80))
a(T(184, 532, 4.4, "fill-brand", "⑥ 50S SUBUNIT — Chloramphenicol, Clindamycin, Linezolid; Macrolides; Streptogramins", weight="700", anchor="middle", budget_w=272))
a(T(184, 544, 4.4, "fill-brand", "⑦ 30S SUBUNIT — Aminoglycosides; Glycylcycline; Tetracyclines", weight="700", anchor="middle", budget_w=272))
a(T(184, 570, 4.2, "fill-muted-foreground", "the mRNA thread feeds the second pair — translation in motion", anchor="middle", budget_w=272))
a(T(184, 590, 4.2, "fill-muted-foreground", "every numbered site = one drug-class door on the same cell", anchor="middle", budget_w=272))
a(T(184, 622, 4.6, "fill-muted-foreground", "Source figure: the mechanisms-of-action chart, book 183 — an original KYP redraw;", anchor="middle", budget_w=272))
a(T(184, 634, 4.6, "fill-muted-foreground", "the printed marker rasters and dash glyphs are redrawn as vector marks", anchor="middle", budget_w=272))
a('      </g>')

# ============ zone panels — column A ============
a('      {/* ===== ZONE PANELS · column A ===== */}')
a('      <g>')
ya = 100
# ① folate
h1 = 118
a(f'        {R(360, ya, 284, h1, "fill-card stroke-border", rx="14")}')
a(T(376, ya + 20, 7.4, "fill-foreground", "① FOLIC ACID SYNTHESIS AND REDUCTION", weight="800", budget_w=268))
a(T(376, ya + 32, 4.8, "fill-muted-foreground", "(DNA methylation) — the source's own zone gloss, carried verbatim", budget_w=268))
a(T(376, ya + 48, 5.8, "fill-brand", "Sulfonamides", weight="800", budget_w=268))
a(T(376, ya + 60, 5.2, "fill-foreground", "Sulfamethoxazole · Sulfadiazine", budget_w=268))
a(T(376, ya + 71, 4.5, "fill-muted-foreground", "⊣ PABA → DHF — block the sulfa step (the PABA analog)", budget_w=268))
a(T(376, ya + 87, 5.8, "fill-brand", "Trimethoprim", weight="800", budget_w=268))
a(T(376, ya + 99, 4.5, "fill-muted-foreground", "⊣ DHF → THF — block the folate-reduction step", budget_w=268))
a(T(376, ya + 110, 4.2, "fill-muted-foreground", "two steps, two drugs, one pathway — the classic pair", budget_w=268))
ya += h1 + 14
# ② membrane
h2 = 84
a(f'        {R(360, ya, 284, h2, "fill-card stroke-border", rx="14")}')
a(T(376, ya + 20, 7.4, "fill-foreground", "② MEMBRANE INTEGRITY", weight="800", budget_w=268))
a(T(376, ya + 38, 5.6, "fill-foreground", "Daptomycin (gram ⊕)", weight="700", budget_w=268))
a(T(376, ya + 51, 5.6, "fill-foreground", "Polymyxins (gram ⊝)", weight="700", budget_w=268))
a(T(376, ya + 64, 4.5, "fill-muted-foreground", "the physical-disruption pair — one per gram polarity", budget_w=268))
ya += h2 + 14
# ③ DNA integrity
h3 = 78
a(f'        {R(360, ya, 284, h3, "fill-card stroke-border", rx="14")}')
a(T(376, ya + 20, 7.4, "fill-foreground", "③ DNA INTEGRITY", weight="800", budget_w=268))
a(T(376, ya + 32, 4.8, "fill-muted-foreground", "(via free radicals) — carried verbatim", budget_w=268))
a(T(376, ya + 50, 5.8, "fill-brand", "Metronidazole", weight="800", budget_w=268))
a(T(376, ya + 62, 4.5, "fill-muted-foreground", "free radicals fragment the helix — the anaerobe killer", budget_w=268))
ya += h3 + 14
# ④ mRNA synthesis
h4 = 78
a(f'        {R(360, ya, 284, h4, "fill-card stroke-border", rx="14")}')
a(T(376, ya + 20, 7.4, "fill-foreground", "④ mRNA SYNTHESIS", weight="800", budget_w=268))
a(T(376, ya + 32, 4.8, "fill-muted-foreground", "(RNA polymerase) — carried verbatim", budget_w=268))
a(T(376, ya + 50, 5.8, "fill-brand", "Rifampin", weight="800", budget_w=268))
a(T(376, ya + 62, 4.5, "fill-muted-foreground", "the polymerase block — orange-body inducer, never monotherapy", budget_w=268))
ya += h4 + 14
# ⑤ gyrase
h5 = 112
a(f'        {R(360, ya, 284, h5, "fill-card stroke-border", rx="14")}')
a(T(376, ya + 20, 7.4, "fill-foreground", "⑤ GYRASE (DNA gyrase)", weight="800", budget_w=268))
a(T(376, ya + 38, 5.8, "fill-brand", "Fluoroquinolones", weight="800", budget_w=268))
a(T(376, ya + 52, 5.2, "fill-foreground", "Ciprofloxacin · Ofloxacin · Levofloxacin · Moxifloxacin", budget_w=268))
a(T(376, ya + 66, 4.5, "fill-muted-foreground", "unhook the gyrase — the supercoil gate stays locked", budget_w=268))
a(T(376, ya + 80, 4.2, "fill-muted-foreground", "printed with the fl ligature in the text layer; normalized here", budget_w=268))
ya += h5 + 14
# zone index chip (fills col A to cell bottom)
h6 = 560 - (ya - 100) - 14
if h6 > 40:
    a(f'        {R(360, ya, 284, h6, "fill-secondary/40 stroke-border", rx="14")}')
    a(T(376, ya + 20, 5.6, "fill-foreground", "THE NINE DOORS (KYP index)", weight="800", budget_w=268))
    ix = ya + 36
    for line in [
        "① folate factory · ② membrane · ③ DNA integrity",
        "④ RNA polymerase · ⑤ gyrase · ⑥ 50S · ⑦ 30S",
        "⑧ wall synthesis · ⑨ wall cross-linking",
        "six layers, nine doors — name the layer, then the stage",
    ]:
        a(T(376, ix, 4.6, "fill-muted-foreground", line, budget_w=268))
        ix += 13
a('      </g>')

# ============ zone panels — column B (⑥ 50S / ⑦ 30S) ============
a('      {/* ===== ZONE PANELS · column B — protein synthesis ===== */}')
a('      <g>')
yb = 100
h50 = 250
a(f'        {R(660, yb, 284, h50, "fill-card stroke-border", rx="14")}')
a(T(676, yb + 20, 7.4, "fill-foreground", "⑥ PROTEIN SYNTHESIS — 50S SUBUNIT", weight="800", budget_w=268))
a(T(676, yb + 36, 5.6, "fill-foreground", "Chloramphenicol · Clindamycin · Linezolid", weight="700", budget_w=268))
a(T(676, yb + 56, 5.8, "fill-brand", "Macrolides", weight="800", budget_w=268))
a(T(676, yb + 70, 5.2, "fill-foreground", "Azithromycin · Clarithromycin · Erythromycin", budget_w=268))
a(T(676, yb + 90, 5.8, "fill-brand", "Streptogramins", weight="800", budget_w=268))
a(T(676, yb + 104, 5.2, "fill-foreground", "Quinupristin + Dalfopristin", budget_w=268))
a(T(676, yb + 124, 4.5, "fill-muted-foreground", "the big cap of the 70S pair — the 50S door", budget_w=268))
a(T(676, yb + 140, 4.5, "fill-muted-foreground", "streptogramins print as the paired combination Quinupristin/", budget_w=268))
a(T(676, yb + 152, 4.5, "fill-muted-foreground", "Dalfopristin in the source — 30/70 synergy at the same door", budget_w=268))
a(T(676, yb + 176, 4.6, "fill-muted-foreground", "printed rule carried: the roster order is physical —", budget_w=268))
a(T(676, yb + 188, 4.6, "fill-muted-foreground", "singles, then Macrolides, then Streptogramins", budget_w=268))
a(T(676, yb + 210, 4.2, "fill-muted-foreground", "the 50S drugs freeze the cap; none of them touch the 30S base", budget_w=268))
yb += h50 + 14
h30 = 560 - (yb - 100) - 14
a(f'        {R(660, yb, 284, h30, "fill-card stroke-border", rx="14")}')
a(T(676, yb + 20, 7.4, "fill-foreground", "⑦ 30S SUBUNIT", weight="800", budget_w=268))
a(T(676, yb + 38, 5.8, "fill-brand", "Aminoglycosides", weight="800", budget_w=268))
a(T(676, yb + 52, 5.0, "fill-foreground", "Gentamicin · Neomycin · Amikacin · Tobramycin · Streptomycin", budget_w=268))
a(T(676, yb + 72, 5.8, "fill-brand", "Glycylcycline", weight="800", budget_w=268))
a(T(676, yb + 86, 5.0, "fill-foreground", "Tigecycline", budget_w=268))
a(T(676, yb + 106, 5.8, "fill-brand", "Tetracyclines", weight="800", budget_w=268))
a(T(676, yb + 120, 5.0, "fill-foreground", "Tetracycline · Doxycycline · Minocycline", budget_w=268))
a(T(676, yb + 140, 4.5, "fill-muted-foreground", "the small base — ⑦ is the reading-head door: ⑥ builds, ⑦ reads", budget_w=268))
a(T(676, yb + 158, 4.6, "fill-muted-foreground", "printed rule carried: Aminoglycosides first (the 5-name set),", budget_w=268))
a(T(676, yb + 170, 4.6, "fill-muted-foreground", "then Glycylcycline single, then the Tetracyclines trio", budget_w=268))
a(T(676, yb + 192, 4.2, "fill-muted-foreground", "30S blockers need transport-in (aerobes) — the O₂-dependent step", budget_w=268))
a('      </g>')

# ============ bottom band — cell wall ⑧⑨ ============
a('      {/* ===== CELL WALL SYNTHESIS — ⑧ build · ⑨ cross-link ===== */}')
a('      <g>')
YW = 688
a(f'        {R(36, YW, 908, 236, "fill-card stroke-brand", rx="14")}')
a(T(52, YW + 20, 9, "fill-foreground", "CELL WALL SYNTHESIS — the two-stage wall zone (books 183)", weight="800", budget_w=880))
# ⑧ sub-panel
a(f'        {R(52, YW + 34, 250, 188, "fill-secondary/40 stroke-border", rx="10")}')
a(T(64, YW + 54, 6.4, "fill-foreground", "⑧ PEPTIDOGLYCAN SYNTHESIS", weight="800", budget_w=230))
a(T(64, YW + 68, 4.6, "fill-muted-foreground", "the bricklayers — they block the", budget_w=230))
a(T(64, YW + 79, 4.6, "fill-muted-foreground", "building of the wall itself", budget_w=230))
a(T(64, YW + 98, 5.8, "fill-brand", "Glycopeptides", weight="800", budget_w=230))
a(T(64, YW + 112, 5.2, "fill-foreground", "Vancomycin", budget_w=230))
a(T(64, YW + 124, 5.2, "fill-foreground", "Bacitracin", budget_w=230))
a(T(64, YW + 144, 4.5, "fill-muted-foreground", "⑧ = the outer face of the wall band;", budget_w=230))
a(T(64, YW + 156, 4.5, "fill-muted-foreground", "glycopeptides stop brick delivery", budget_w=230))
a(T(64, YW + 176, 4.2, "fill-muted-foreground", "source heading pair: PEPTIDOGLYCAN SYNTHESIS /", budget_w=230))
a(T(64, YW + 188, 4.2, "fill-muted-foreground", "PEPTIDOGLYCAN CROSS-LINKING — carried", budget_w=230))
# ⑨ sub-panel — the β-lactam directory
a(f'        {R(316, YW + 34, 612, 188, "fill-secondary/40 stroke-border", rx="10")}')
a(T(332, YW + 54, 6.4, "fill-foreground", "⑨ PEPTIDOGLYCAN CROSS-LINKING — the β-lactam directory", weight="800", budget_w=590))
hdr_y = YW + 66
for xx, cw, ch in [(332, 200, "GROUP"), (544, 368, "DRUGS — the printed roster order")]:
    a(f'        {R(xx, hdr_y, cw, 17, "fill-secondary", rx="4")}')
    a(T(xx + cw / 2, hdr_y + 12, 5.2, "fill-foreground", ch, weight="800", anchor="middle", budget_w=cw - 8))
ry = hdr_y + 23
wall_rows = [
    ("Penicillinase-sensitive penicillins", "Penicillin G, V · Ampicillin · Amoxicillin", 21),
    ("Penicillinase-resistant penicillins", "Oxacillin · Nafcillin · Dicloxacillin", 21),
    ("Antipseudomonal", "Piperacillin · Cephalosporins (I-V): 1st—Cefazolin, etc · 2nd—Cefoxitin, etc ·", 21),
    ("", "3rd—Ceftriaxone, etc · 4th—Cefepime · 5th—Ceftaroline", 21),
    ("Carbapenems", "Imipenem · Meropenem · Ertapenem", 21),
    ("Monobactams", "Aztreonam — the gram ⊝ rod-only β-lactam (no gram ⊕, no atypicals)", 21),
]
for i, (g1, d1, hh) in enumerate(wall_rows):
    a(f'        {R(332, ry, 580, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    if g1:
        a(T(340, ry + 14, 5.0, "fill-foreground", g1, weight="700", budget_w=192))
    a(T(552, ry + 14, 4.8, "fill-foreground", d1, budget_w=352))
    ry += hh + 3
a(T(332, ry + 10, 4.5, "fill-muted-foreground", "⑨ = the inner face of the wall band: β-lactams are D-Ala-D-Ala structural analogs — they bind PBPs (transpeptidases) and freeze the welds. The Penicillin G, V card", budget_w=590))
a(T(332, ry + 21, 4.5, "fill-muted-foreground", "printing on this page (the first row of the drug directory) is carried verbatim in the note's table block; the directory continues on books 184-186 (M32).", budget_w=590))
a('      </g>')

# ============ KYP synthesis strip ============
a('      {/* ===== KYP synthesis strip ===== */}')
a('      <g>')
YS = YW + 252
a(f'        {R(36, YS, 908, 92, "fill-brand-soft/30 stroke-border", rx="14")}')
a(T(52, YS + 20, 7.2, "fill-foreground", "READ THE MAP — the six layers (original KYP synthesis)", weight="800", budget_w=880))
syn = wrap(
    "Membrane ② disrupts physically — daptomycin ⊕, polymyxins ⊝. Wall ⑧ builds, ⑨ links — glycopeptides lay the bricks, β-lactams freeze the welds. "
    "Folate ① starves the one-carbon factory — bacteria synthesize it, we import it (that is the selectivity). Nucleic acid ③④⑤ — metronidazole "
    "fragments, rifampin silences, fluoroquinolones unhook. Ribosome ⑥⑦ — the 50S cap and the 30S base, the two translation doors.",
    4.8, 880)
for j, ln in enumerate(syn):
    a(T(52, YS + 38 + j * 11, 4.8, "fill-muted-foreground", ln, budget_w=880))
a(T(52, YS + 38 + len(syn) * 11 + 6, 4.4, "fill-muted-foreground", "Printed keys carried verbatim: (DNA methylation) · (via free radicals) · (RNA polymerase) · gram ⊕ / gram ⊝ — the source's own zone glosses.", budget_w=880))
a('      </g>')

# ============ footer ============
a('      {/* footer */}')
a('      <g>')
foot = wrap(
    "Source: First Aid 2026, book 183 (pdf 205) — the antimicrobial mechanisms-of-action chart, an original KYP redraw preserving the source's label sets, "
    "zone glosses, and roster order. The 4 tiny index rasters and the 9 standalone dash markers of the printed chart are redrawn as vector marks. "
    "The chapter banner typo MICROCIOLOGY—ANTIMICROCIALS prints on book 183 twice (lines 4 and 8 of the raw layer), as in the source. "
    "The Penicillin G, V drug card on the same page is carried verbatim in the note's table block — the directory continues in M32 (books 184-186).",
    4.6, 944)
fy = H - 14 - len(foot) * 11
for ln in foot:
    a(T(24, fy, 4.6, "fill-muted-foreground", ln, budget_w=944))
    fy += 11
a('      </g>')
a('    </svg>')
a('  );')
a('}')

out = "\n".join(L31)
over = [x for x in AUDIT if x[4] > x[3]]
if over:
    print("BUDGET OVERRUNS:")
    for m, fs, t, bw, aw in over:
        print(f"  {m} fs={fs} budget={bw} actual={aw} :: {t[:70]}")
    raise SystemExit(1)
print(f"budget audit: {len(AUDIT)} texts, 0 overruns")
print(f"AntimicrobialTargetMap: canvas {W}x{H}; col A ends {ya}; col B ends {yb + h30}")

MICRO = "src/components/kyp/usmle/visuals/micro.tsx"
src = open(MICRO, encoding="utf8").read()
marker = 'export function SystemsBugMatrix2() {'
assert marker in src, "SystemsBugMatrix2 anchor missing"
assert 'export function AntimicrobialTargetMap()' not in src, "already appended"
src = src.rstrip() + "\n\n" + out + "\n"
open(MICRO, "w", encoding="utf8").write(src)
print("appended AntimicrobialTargetMap to micro.tsx")

REG = "src/components/kyp/usmle/visuals/registry.tsx"
r = open(REG, encoding="utf8").read()
r = r.replace("SystemsBugMatrix, SystemsBugMatrix2 } from \"./micro\";",
              "SystemsBugMatrix, SystemsBugMatrix2, AntimicrobialTargetMap } from \"./micro\";")
r = r.replace('  "systems-bug-matrix-2": SystemsBugMatrix2,',
              '  "systems-bug-matrix-2": SystemsBugMatrix2,\n  "antimicrobial-target-map": AntimicrobialTargetMap,')
open(REG, "w", encoding="utf8").write(r)
print("registered antimicrobial-target-map in registry.tsx")
