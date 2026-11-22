#!/usr/bin/env python3
"""M26 hepatitis-viruses — generates the HepatitisSerologyMap component into
micro.tsx (width-budget machinery, 0.50 u/char/px). Source: pdf 192-193 /
books 170-171. The 5-virus comparison grid, the HBV-polymerase/HCV-proofread
mechanism strip, the ORIGINAL serology timeline redraw, the 7-scenario
serology patterns table, and the extrahepatic panel. The Councilman-bodies
histology is raster, COPYRIGHTED, described-in-text only; the 17 tiny sep
rasters on p193 are the patterns-table's +/- marks (redrawn as text marks)."""
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
        AUDIT.append(("M26", size, text, budget_w, round(len(text) * U * size, 1)))
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

def P(d, cls, sw="1.3", fill="none", dash=None):
    a = f'<path d="{d}" className="{cls}" strokeWidth="{sw}" fill="{fill}"'
    if dash:
        a += f' strokeDasharray="{dash}"'
    a += ' strokeLinejoin="round" strokeLinecap="round" />'
    return a

L26 = []
a = L26.append

# ============ content ============
viruses = [
    ("HAV", "RNA picornavirus", "Fecal-oral (shellfish, travelers, day care)", "Short (weeks)",
     "Acute and self-limiting (adults); asymptomatic (children)", "Good", "No",
     "Hepatocyte swelling, monocyte infiltration, Councilman bodies A (printed histology — described-in-text only)", "Absent (no) carrier state"),
    ("HBV", "DNA hepadnavirus", "Parenteral (Blood), sexual (Bedroom), perinatal (Birthing)", "Long (months)",
     "Initially like serum sickness (fever, arthralgias, rash); may progress to carcinoma", "Adults → mostly full resolution; neonates → worse prognosis", "Yes",
     "Granular eosinophilic “ground glass” appearance (surface antigen accumulation in hepatocytes); cytotoxic T cells mediate damage", "Carrier state common"),
    ("HCV", "RNA flavivirus", "Primarily blood (injection drug use, posttransfusion)", "Long",
     "May progress to cirrhosis or carcinoma", "Majority develop stable, CHRONIC hepatitis C", "Yes",
     "Lymphoid aggregates with focal areas of macrovesicular steatosis", "Carrier state very common"),
    ("HDV", "RNA deltavirus", "Parenteral, sexual, perinatal", "SUPERINFECTION (HDV after HBV) = short; COINFECTION (HDV with HBV) = long",
     "Similar to HBV", "Superinfection → worse prognosis", "Yes",
     "Similar to HBV", "Defective virus — depends on HBV HBsAg coat for entry into hepatocytes"),
    ("HEV", "RNA hepevirus", "Fecal-oral, especially waterborne", "Short",
     "FULMINANT hepatitis in Expectant (pregnant) patients", "HIGH MORTALITY in pregnant patients", "No",
     "Patchy necrosis", "Enteric, epidemic (eg, parts of Asia, Africa, Middle East); no carrier state"),
]

mech_lines = [
    "THE HBV POLYMERASE: HBV DNA polymerase has DNA- AND RNA-dependent activities. Upon entry into the nucleus, the polymerase completes the partial dsDNA; host RNA polymerase transcribes mRNA from viral DNA to make viral proteins; the DNA polymerase then REVERSE TRANSCRIBES viral RNA to DNA.",
    "THE HCV ESCAPE: HCV lacks 3′-5′ exonuclease activity → no proofreading ability → antigenic variation of HCV envelope proteins; host antibody production lags behind production of new mutant strains.",
]

# serology patterns: (scenario, HBsAg, HBeAg, Anti-HBs, Anti-HBc, Anti-HBe)
patterns = [
    ("Incubation", "⊕", "⊝", "⊝", "⊝", "⊝"),
    ("Acute infection (IgM)", "⊕", "⊕", "⊝", "⊕", "⊝"),
    ("Window (IgM)", "⊝", "⊝", "⊝", "⊕", "⊝"),
    ("Recovery (IgG)", "⊝", "⊝", "⊕", "⊕", "⊕"),
    ("Chronic infection — high infectivity (IgG)", "⊕", "⊕", "⊝", "⊕", "⊝"),
    ("Chronic infection — low infectivity (IgG)", "⊕", "⊝", "⊝", "⊕", "⊕"),
    ("Immunized", "⊝", "⊝", "⊕", "⊝", "⊝"),
]

extrahepatic = [
    ("HEMATOLOGIC", "Aplastic anemia", "Essential mixed cryoglobulinemia, ↑ risk B-cell NHL, ITP, autoimmune hemolytic anemia"),
    ("RENAL", "Membranous GN > membranoproliferative GN", "Membranoproliferative GN > membranous GN"),
    ("VASCULAR", "Polyarteritis nodosa", "Leukocytoclastic vasculitis"),
    ("DERMATOLOGIC", "—", "Sporadic porphyria cutanea tarda, lichen planus"),
    ("ENDOCRINE", "—", "↑ risk of diabetes mellitus, autoimmune hypothyroidism"),
]

foot_lines = [
    "Original KYP redraw of the source's hepatitis comparison table + the HBV/HCV mechanism lines (pdf 192 / book 170 — the source's own column-header typos 'INCUCATION' and 'LIVER CIOPSY' print on this page), the serology timeline figure + the serologic markers + patterns (pdf 193 / book 171 — the source's pattern table uses 17 tiny raster marks, redrawn here as ⊕/⊝ text marks), and the extrahepatic-manifestations table.",
    "The printed Councilman-bodies histology A is raster — COPYRIGHTED, described-in-text only. FA's printed gloss ('the vowels hit your bowels' for the naked enteric pair HAV/HEV) stays in the note's table block — verification-only, not redrawn.",
    "The source's banner typo 'MICROCIOLOGY—VIROLOGY' prints on books 170-171.",
]
foot_w = [ln for raw in foot_lines for ln in wrap(raw, 7.2, 944)]

# ============ layout ============
Y_HDR = 14
Y_MX = 76
mx_w = [ln for raw in mech_lines for ln in wrap(raw, 5.0, 880)]
MX_H = 14 + len(mx_w) * 10 + 12

Y_GRID = Y_MX + MX_H + 16
grid_cols = [(52, 44, "VIRUS"), (102, 92, "FAMILY"), (200, 148, "TRANSMISSION"), (354, 116, "INCUBATION"), (476, 140, "COURSE"), (622, 108, "PROGNOSIS"), (736, 30, "HCC"), (772, 156, "BIOPSY + NOTES")]
grid_rows = []
for v in viruses:
    cells = [wrap(v[1], 4.5, 88), wrap(v[2], 4.5, 144), wrap(v[3], 4.5, 112), wrap(v[4], 4.5, 136), wrap(v[5], 4.5, 104), [v[6]], wrap(v[7] + " · " + v[8], 4.5, 152)]
    h = 14 + max(len(c) for c in cells) * 8.6 + 10
    grid_rows.append((v[0], cells, h))
GRID_H = 26 + 26 + 6 + sum(h for *_, h in grid_rows) + 6 * len(grid_rows) + 12

Y_TL = Y_GRID + GRID_H + 16
TL_H = 240  # serology timeline

Y_PT = Y_TL + TL_H + 16
PT_H = 26 + 24 + 8 * 22 + 12

Y_EH = Y_PT + PT_H + 16
eh_rows = []
for sysname, b, c in extrahepatic:
    bl = wrap(b, 4.6, 330)
    cl = wrap(c, 4.6, 330)
    h = 14 + max(len(bl), len(cl)) * 9 + 8
    eh_rows.append((sysname, bl, cl, h))
EH_H = 26 + 24 + sum(h for *_, h in eh_rows) + 5 * 6 + 12

Y_FOOT = Y_EH + EH_H + 18
TOTAL = Y_FOOT + len(foot_w) * 12 + 16

# ============ emit ============
a('export function HepatitisSerologyMap() {')
a('  const w = 980;')
a(f'  const h = {TOTAL};')
a('  return (')
a(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="Hepatitis viruses, an original KYP serology map. THE FIVE VIRUSES: HAV — RNA picornavirus, fecal-oral (shellfish, travelers, day care), short incubation, acute and self-limiting in adults and asymptomatic in children, good prognosis, no HCC risk, hepatocyte swelling with monocyte infiltration and Councilman bodies, no carrier state. HBV — DNA hepadnavirus, parenteral and sexual and perinatal, long incubation, serum-sickness-like onset with possible progression to carcinoma, adults mostly resolve while neonates do worse, HCC risk yes, ground-glass hepatocytes with cytotoxic T-cell damage, carrier state common. HCV — RNA flavivirus, primarily blood (injection drug use, posttransfusion), long incubation, may progress to cirrhosis or carcinoma, the majority develop chronic hepatitis C, HCC yes, lymphoid aggregates with macrovesicular steatosis, carrier state very common. HDV — RNA deltavirus, parenteral-sexual-perinatal, superinfection after HBV is short while coinfection with HBV is long, similar to HBV, superinfection worsens prognosis, HCC yes, defective virus depending on the HBV HBsAg coat for entry. HEV — RNA hepevirus, fecal-oral especially waterborne, short incubation, fulminant hepatitis in pregnant patients with high mortality, no HCC, patchy necrosis, enteric and epidemic with no carrier state. THE MECHANISMS: HBV DNA polymerase has DNA- and RNA-dependent activities — it completes the partial dsDNA in the nucleus, host RNA polymerase makes mRNA, and the polymerase reverse transcribes RNA back to DNA; HCV lacks 3-prime-5-prime exonuclease, so no proofreading, antigenic variation, and antibody production lags behind mutant strains. THE SEROLOGY TIMELINE: incubation, acute infection, window, recovery — HBsAg rises first, IgM anti-HBc marks acute and window (the sole positive marker in the window), anti-HBs rises last in recovery and alone in immunization. THE PATTERNS: acute = HBsAg plus HBeAg plus IgM anti-HBc; window = IgM anti-HBc alone; recovery = anti-HBs plus IgG anti-HBc plus anti-HBe; chronic high infectivity = HBsAg plus HBeAg plus IgG anti-HBc; chronic low = HBsAg plus anti-HBe plus IgG anti-HBc; immunized = anti-HBs alone. THE EXTRAHEPATIC SET: HBV — aplastic anemia, membranous GN, polyarteritis nodosa; HCV — cryoglobulinemia and B-cell NHL and ITP, membranoproliferative GN, leukocytoclastic vasculitis, porphyria cutanea tarda and lichen planus, diabetes and autoimmune hypothyroidism" className="min-w-[940px]">')

# header
a('      {/* header */}')
a('      <g>')
a(f'        {R(24, Y_HDR, 932, 46, "fill-card stroke-border", rx="12", sw="1.4")}')
a(T(42, Y_HDR + 28, 11, "fill-foreground", "Hepatitis viruses — the five-virus grid + the serology clock (original KYP redraw)", weight="800"))
a(f'        {R(716, Y_HDR + 10, 240, 18, "fill-brand-soft", rx="9")}')
a(T(836, Y_HDR + 23, 7.6, "fill-brand", "vowels · window · ⊕/⊝", weight="800", anchor="middle"))
a('      </g>')

# mechanism strip
a('      {/* the HBV polymerase + HCV escape */}')
a('      <g>')
a(f'        {R(36, Y_MX, 908, MX_H, "fill-secondary", rx="10")}')
yy = Y_MX + 16
for ln in mx_w:
    a(T(490, yy, 5.0, "fill-foreground", ln, weight="700", anchor="middle", budget_w=884))
    yy += 10
a('      </g>')

# 5-virus grid
a('      {/* ===== THE FIVE VIRUSES ===== */}')
a('      <g>')
a(f'        {R(36, Y_GRID, 908, GRID_H, "fill-secondary/40 stroke-brand", rx="14", sw="1.5")}')
a(T(52, Y_GRID + 20, 9, "fill-foreground", "THE FIVE VIRUSES — book 170 (the source's own header typos: INCUCATION, LIVER CIOPSY)", weight="800"))
for x, cw, ch in grid_cols:
    a(f'        {R(x, Y_GRID + 30, cw, 26, "fill-secondary", rx="4")}')
    a(T(x + 4, Y_GRID + 38, 4.4, "fill-foreground", ch.split()[0][:8], weight="800", budget_w=cw - 6))
    if len(ch.split()) > 1:
        a(T(x + 4, Y_GRID + 47, 4.4, "fill-foreground", " ".join(ch.split()[1:])[:14], weight="800", budget_w=cw - 6))
yy = Y_GRID + 64
for i, (v, cells, hh) in enumerate(grid_rows):
    a(f'        {R(52, yy, 876, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(58, yy + 13, 6.4, "fill-emergency", v, weight="800", budget_w=40))
    for k, (x, cw, _) in enumerate(grid_cols[1:]):
        for j, ln in enumerate(cells[k]):
            a(T(x + 4, yy + 12 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=cw - 6))
    yy += hh + 7
a('      </g>')

# serology timeline
a('      {/* ===== THE SEROLOGY TIMELINE (original redraw) ===== */}')
a('      <g>')
a(f'        {R(36, Y_TL, 908, TL_H, "fill-card stroke-border", rx="14", sw="1.4")}')
a(T(52, Y_TL + 20, 9, "fill-foreground", "The HBV serology clock — an original redraw (book 171)", weight="800"))
# plot area
PX, PY, PW, PH = 190, Y_TL + 34, 700, 132
a(f'        {R(PX, PY, PW, PH, "fill-secondary/60", rx="6")}')
# phase boundaries (months 0-8 → x scale)
def mx_(m):
    return PX + (m / 8.0) * PW
# phases: incubation 0-1.5, acute 1.5-4, window 4-5.5, recovery 5.5-8
for m, lbl in [(1.5, "INCUBATION"), (4, "ACUTE"), (5.5, "WINDOW"), (8, "RECOVERY")]:
    if m < 8:
        a(f'        {P(f"M {mx_(m):.0f} {PY} L {mx_(m):.0f} {PY + PH}", "stroke-border", "0.8", "none", "3 3")}')
for m0, m1, lbl in [(0, 1.5, "Incubation"), (1.5, 4, "Acute infection"), (4, 5.5, "Window"), (5.5, 8, "Recovery")]:
    a(T(f"{(mx_(m0) + mx_(m1)) / 2:.0f}", Y_TL + 32, 5.0, "fill-foreground", lbl, weight="800", anchor="middle", budget_w=110))
# curves (approximate the printed shapes)
top, base = PY + 10, PY + PH - 10
a(f'        {P(f"M {mx_(0.5):.0f} {base} L {mx_(1.2):.0f} {top + 22} L {mx_(3.4):.0f} {top + 18} L {mx_(4.4):.0f} {base - 6} L {mx_(4.8):.0f} {base}", "stroke-emergency", "1.6")}')
a(f'        {P(f"M {mx_(1.6):.0f} {base} L {mx_(2.6):.0f} {top + 34} L {mx_(6.5):.0f} {top + 38} L {mx_(7.6):.0f} {base}", "stroke-brand", "1.4", "none", "5 2")}')
a(f'        {P(f"M {mx_(1.8):.0f} {base} L {mx_(2.8):.0f} {top + 26} L {mx_(4.2):.0f} {top + 30} L {mx_(5.4):.0f} {base}", "stroke-foreground", "1.2")}')
a(f'        {P(f"M {mx_(4.6):.0f} {base} L {mx_(6.4):.0f} {top + 44} L {mx_(7.8):.0f} {top + 30}", "stroke-foreground", "1.2", "none", "2 2")}')
a(f'        {P(f"M {mx_(4.4):.0f} {base} L {mx_(6.8):.0f} {top + 24} L {mx_(7.9):.0f} {top + 14}", "stroke-brand", "1.6")}')
# legend
a(T(PX + 8, PY + PH + 14, 4.8, "fill-emergency", "HBsAg (surface antigen — infection)", weight="700", budget_w=210))
a(T(PX + 226, PY + PH + 14, 4.8, "fill-foreground", "Anti-HBc IgM (acute/recent — the WINDOW sole ⊕)", weight="700", budget_w=230))
a(T(PX + 462, PY + PH + 14, 4.8, "fill-foreground", "HBeAg (dashed — active replication)", weight="700", budget_w=200))
a(T(PX + 8, PY + PH + 26, 4.8, "fill-foreground", "Anti-HBe (low transmissibility)", weight="700", budget_w=180))
a(T(PX + 226, PY + PH + 26, 4.8, "fill-brand", "Anti-HBs (immunity — rises last; alone if immunized)", weight="700", budget_w=240))
a(T(PX + 462, PY + PH + 26, 4.8, "fill-muted-foreground", "x = approximate months after exposure", budget_w=200))
a(T(PX + PW / 2, PY + PH + 44, 5.4, "fill-foreground", "Level of detection", weight="700", anchor="middle", budget_w=200))
a('      </g>')

# patterns table
a('      {/* ===== THE SEROLOGY PATTERNS ===== */}')
a('      <g>')
a(f'        {R(36, Y_PT, 908, PT_H, "fill-secondary/40 stroke-brand", rx="14", sw="1.5")}')
a(T(52, Y_PT + 20, 9, "fill-foreground", "The serology patterns — 7 scenarios (book 171; the 17 tiny raster marks redrawn as text)", weight="800"))
pt_cols = [(52, 380, "SCENARIO"), (440, 100, "HBsAg"), (542, 100, "HBeAg"), (644, 100, "Anti-HBs"), (746, 100, "Anti-HBc"), (848, 90, "Anti-HBe")]
for x, cw, ch in pt_cols:
    a(f'        {R(x, Y_PT + 30, cw - 6, 20, "fill-secondary", rx="4")}')
    a(T(x + 4, Y_PT + 44, 5.2, "fill-foreground", ch, weight="800", budget_w=cw - 12))
yy = Y_PT + 58
for i, (scen, s1, s2, s3, s4, s5) in enumerate(patterns):
    a(f'        {R(52, yy, 876, 22, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(58, yy + 15, 5.2, "fill-foreground", scen, weight="700", budget_w=374))
    for k, mark in enumerate([s1, s2, s3, s4, s5]):
        cls = "fill-emergency" if mark == "⊕" else "fill-muted-foreground"
        a(T(pt_cols[k + 1][0] + 44, yy + 15, 6.6, cls, mark, weight="800", anchor="middle", budget_w=30))
    yy += 22
a('      </g>')

# extrahepatic
a('      {/* ===== EXTRAHEPATIC ===== */}')
a('      <g>')
a(f'        {R(36, Y_EH, 908, EH_H, "fill-card stroke-border", rx="14", sw="1.4")}')
a(T(52, Y_EH + 20, 9, "fill-foreground", "Extrahepatic manifestations of hepatitis B and C — book 171", weight="800"))
for x, cw, ch in [(52, 150, "SYSTEM"), (208, 340, "HEPATITIS B"), (554, 370, "HEPATITIS C")]:
    a(f'        {R(x, Y_EH + 30, cw, 20, "fill-secondary", rx="4")}')
    a(T(x + 6, Y_EH + 44, 5.4, "fill-foreground", ch, weight="800", budget_w=cw - 10))
yy = Y_EH + 58
for i, (sysname, bl, cl, hh) in enumerate(eh_rows):
    a(f'        {R(52, yy, 876, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(60, yy + 13, 5.4, "fill-brand", sysname, weight="800", budget_w=140))
    for j, ln in enumerate(bl):
        a(T(214, yy + 13 + j * 9, 4.6, "fill-muted-foreground", ln, budget_w=330))
    for j, ln in enumerate(cl):
        a(T(560, yy + 13 + j * 9, 4.6, "fill-muted-foreground", ln, budget_w=360))
    yy += hh + 6
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
    f.write("\n" + "\n".join(L26) + "\n")

bad = [s for s in AUDIT if s[4] > s[3]]
for s in bad:
    print(f"  OVERFLOW {s[0]} fs={s[1]} {s[4]}u > {s[3]}u :: {s[2][:50]!r}")
if bad:
    raise SystemExit(f"AUDIT FAILED: {len(bad)}")
print(f"AUDIT PASSED: {len(AUDIT)} text elements (M26); total height {TOTAL}u; grid H={GRID_H}; timeline H={TL_H}; patterns H={PT_H}; extrahepatic H={EH_H}")
