#!/usr/bin/env python3
"""M18 intestinal-protozoa — generates the IntestinalProtozoaPanel component
into micro.tsx (width-budget machinery, 0.50 u/char/px)."""
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
        AUDIT.append((size, text, budget_w, round(len(text) * U * size, 1)))
    return f"<text {a}>{t}</text>"

proto = [
    ("Giardia lamblia",
     "Giardiasis—bloating, flatulence, foul-smelling, nonbloody, fatty diarrhea (often seen in campers/hikers)",
     "Cysts in water",
     "Multinucleated trophozoites or cysts in stool; antigen detection; PCR",
     "Tinidazole, nitazoxanide, or metronidazole"),
    ("Entamoeba histolytica",
     "Amebiasis—bloody diarrhea (dysentery), liver abscess (“anchovy paste” exudate), RUQ pain; histology of colon biopsy shows flask-shaped ulcers",
     "Cysts in water",
     "Serology, antigen testing, PCR, and/or trophozoites (with engulfed RBCs in the cytoplasm) or cysts with up to 4 nuclei in stool",
     "Metronidazole; paromomycin for asymptomatic cyst passers"),
    ("Cryptosporidium",
     "Severe diarrhea in AIDS; mild disease (watery diarrhea) in immunocompetent hosts",
     "Oocysts in water",
     "Oocysts on acid-fast stain; antigen detection; PCR",
     "Prevention (eg, filtering); nitazoxanide (severe disease and/or immunocompromised)"),
]

L = []
add = L.append
# geometry
A_Y = 76
grid = []
for n, dz, tx, dx, rx in proto:
    dzl = wrap(dz, 5.0, 228)
    txl = wrap(tx, 5.0, 110)
    dxl = wrap(dx, 5.0, 198)
    rxl = wrap(rx, 5.0, 138)
    h = 18 + max(len(dzl), len(txl), len(dxl), len(rxl)) * 10 + 10
    grid.append((n, dzl, txl, dxl, rxl, h))
A_H = 24 + 26 + 6 + sum(h for *_, h in grid) + 8 * 2 + 12
ANC_Y = A_Y + A_H + 16
anc = "Cysts in water (Giardia, Entamoeba) vs oocysts in water (Cryptosporidium — acid-fast) · Entamoeba eats erythrocytes (trophozoites with engulfed RBCs; cysts with up to 4 nuclei) · Giardia: the fatty nonbloody diarrhea of campers"
anc_w = wrap(anc, 6.2, 876)
ANC_H = 10 + len(anc_w) * 13 + 10
FOOT_Y = ANC_Y + ANC_H + 14
footer = [
    "Original KYP redraw of the source's Protozoa—gastrointestinal infections table (pdf 174 / book 152 — pure vector; the 6 printed photos are raster, COPYRIGHTED, described-in-text only). FA's printed mnemonic (the Ghirardelli chocolates gloss for fatty stools) is NOT reproduced — verification only, in the note's table block.",
    "Trichomonas vaginalis — the urogenital protozoan in this topic's title — prints on pdf 177 (book 155) under M19's page ownership; its verbatim entry is carried in M19's table block and cross-linked here (no duplicate verbatim).",
]
footer_w = [ln for raw in footer for ln in wrap(raw, 7.2, 944)]
TOTAL = FOOT_Y + len(footer_w) * 12 + 16

add('export function IntestinalProtozoaPanel() {')
add('  const w = 980;')
add(f'  const h = {TOTAL};')
add('  return (')
add(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="Intestinal and urogenital protozoa, an original KYP panel. THE GASTROINTESTINAL TABLE (book 152): Giardia lamblia — giardiasis with bloating, flatulence, foul-smelling nonbloody fatty diarrhea often seen in campers and hikers; cysts in water; multinucleated trophozoites or cysts in stool with antigen detection and PCR; tinidazole, nitazoxanide, or metronidazole. Entamoeba histolytica — amebiasis with bloody diarrhea (dysentery), liver abscess with the anchovy-paste exudate, RUQ pain, and flask-shaped ulcers on colon biopsy histology; cysts in water; serology, antigen testing, PCR, trophozoites with engulfed RBCs or cysts with up to 4 nuclei in stool; metronidazole with paromomycin for asymptomatic cyst passers. Cryptosporidium — severe diarrhea in AIDS and mild watery diarrhea in the immunocompetent; oocysts in water; oocysts on acid-fast stain with antigen detection and PCR; prevention with filtering, nitazoxanide for severe disease or the immunocompromised. The urogenital protozoan Trichomonas vaginalis prints on book 155 (M19 page ownership) and is cross-linked" className="min-w-[940px]">')
add('      {/* header */}')
add('      <g>')
add('        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />')
add(T(42, 42, 11, "fill-foreground", "Intestinal &amp; urogenital protozoa — the water-panel (original KYP redraw)", weight="800"))
add('        <rect x="712" y="24" width="220" height="18" rx="9" className="fill-brand-soft" />')
add(T(822, 37, 7.6, "fill-brand", "cysts · oocysts · the water axis", weight="800", anchor="middle"))
add('      </g>')
add('      {/* ===== THE GI TABLE ===== */}')
add('      <g>')
add(f'        <rect x="36" y="{A_Y}" width="908" height="{A_H}" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />')
add(T(52, A_Y + 22, 9, "fill-foreground", "PROTOZOA — GASTROINTESTINAL INFECTIONS · PARASITOLOGY begins", weight="800"))
cols = [(52, 118, "ORGANISM"), (176, 240, "DISEASE"), (422, 122, "TRANSMISSION"), (552, 210, "DIAGNOSIS"), (770, 150, "TREATMENT")]
for x, cw, ch in cols:
    add(f'        <rect x="{x}" y="{A_Y + 32}" width="{cw}" height="20" rx="4" className="fill-secondary" />')
    add(T(x + 6, A_Y + 46, 5.8, "fill-foreground", ch, weight="800"))
yy = A_Y + 60
for i, (n, dzl, txl, dxl, rxl, hh) in enumerate(grid):
    cls = "fill-secondary/60" if i % 2 else "fill-secondary"
    add(f'        <rect x="52" y="{yy}" width="880" height="{hh}" rx="4" className="{cls}" />')
    add(T(58, yy + 13, 6.0, "fill-emergency", n, weight="800", budget_w=106))
    for j, ln in enumerate(dzl):
        add(T(182, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=228))
    for j, ln in enumerate(txl):
        add(T(428, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=110))
    for j, ln in enumerate(dxl):
        add(T(558, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=198))
    for j, ln in enumerate(rxl):
        add(T(776, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=138))
    yy += hh + 8
add('      </g>')
add('      {/* anchors strip */}')
add('      <g>')
add(f'        <rect x="36" y="{ANC_Y}" width="908" height="{ANC_H}" rx="8" className="fill-secondary" />')
yy = ANC_Y + 20
for ln in anc_w:
    add(T(490, yy, 6.2, "fill-muted-foreground", ln, weight="700", anchor="middle", budget_w=880)); yy += 13
add('      </g>')
add('      {/* footer */}')
yy = FOOT_Y
for ln in footer_w:
    add(T(24, yy, 7.2, "fill-muted-foreground", ln, budget_w=944)); yy += 12
add('    </svg>')
add('  );')
add('}')

with open('src/components/kyp/usmle/visuals/micro.tsx', 'a', encoding='utf8') as f:
    f.write("\n" + "\n".join(L) + "\n")

bad = [s for s in AUDIT if s[3] > s[2]]
for s in bad:
    print(f"  OVERFLOW fs={s[0]} {s[3]}u > {s[2]}u :: {s[1][:50]!r}")
if bad:
    raise SystemExit(f"AUDIT FAILED: {len(bad)}")
print(f"AUDIT PASSED: {len(AUDIT)} text elements; total h={TOTAL}")
