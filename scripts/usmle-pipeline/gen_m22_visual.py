#!/usr/bin/env python3
"""M22 viral-structure-genetics — generates the ViralStructureMap component into
micro.tsx (width-budget machinery, 0.50 u/char/px). Source: pdf 181-182 / books
159-160. Four architecture panels (naked icosahedral, enveloped icosahedral,
enveloped helical, bacteriophage), the four genetic-exchange cards (recombination,
reassortment, complementation, phenotypic mixing), the naked-genome infectivity
rule + envelope rule strip. Pure-vector page — no rasters."""
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
        AUDIT.append(("M22", size, text, budget_w, round(len(text) * U * size, 1)))
    return f"<text {a}>{t}</text>"

def R(x, y, w, h, cls, rx="0", stroke=None, sw=None, extra=""):
    a = f'x="{x}" y="{y}" width="{w}" height="{h}"'
    if rx != "0":
        a += f' rx="{rx}"'
    a += f' className="{cls}"'
    if stroke:
        a += f' stroke="{stroke}"'
        if sw:
            a += f' strokeWidth="{sw}"'
    if extra:
        a += " " + extra
    return f"<rect {a} />"

def C(cx, cy, r, cls, stroke=None, sw=None, fill=True):
    a = f'cx="{cx}" cy="{cy}" r="{r}"'
    a += f' className="{cls}"'
    if stroke:
        a += f' stroke="{stroke}"'
        if sw:
            a += f' strokeWidth="{sw}"'
    return f"<circle {a} />"

def L(x1, y1, x2, y2, cls, sw="0.9"):
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" className="{cls}" strokeWidth="{sw}" />'

def P(d, cls, sw="1.1", fill="none"):
    return f'<path d="{d}" className="{cls}" strokeWidth="{sw}" fill="{fill}" strokeLinejoin="round" strokeLinecap="round" />'

def PG(pts, cls, sw="1.2"):
    return f'<polygon points="{pts}" className="{cls}" strokeWidth="{sw}" />'

import math

def hexpts(cx, cy, r, start=0):
    pts = []
    for k in range(6):
        a = math.radians(start + 60 * k)
        pts.append(f"{cx + r * math.cos(a):.1f},{cy + r * math.sin(a):.1f}")
    return " ".join(pts)

def spike_ring(cx, cy, r_in, r_out, knob_r, cls, sw="0.9"):
    out = []
    for k in range(12):
        a = math.radians(15 + 30 * k)
        x1, y1 = cx + r_in * math.cos(a), cy + r_in * math.sin(a)
        x2, y2 = cx + r_out * math.cos(a), cy + r_out * math.sin(a)
        out.append(L(f"{x1:.1f}", f"{y1:.1f}", f"{x2:.1f}", f"{y2:.1f}", cls, sw))
        out.append(C(f"{x2:.1f}", f"{y2:.1f}", knob_r, cls))
    return out

def squiggle(cx, cy, halfw, cls, sw="1.0"):
    x0 = cx - halfw
    seg = halfw / 2.0
    d = f"M {x0:.1f} {cy:.1f}"
    for i in range(4):
        dy = -5 if i % 2 == 0 else 5
        d += f" q {seg/2:.1f} {dy} {seg:.1f} 0"
    return P(d, cls, sw)

L22 = []
a = L22.append

# ============ geometry ============
Y0 = 76          # architecture section top
PH = 250         # architecture panel height
CAP_Y = Y0 + PH - 22   # caption baseline (first line)
PANEL_X = [36, 266, 496, 726]

# ---- component open ----
a('export function ViralStructureMap() {')
a('  const w = 980;')

# ---- SECTION B panels built inline (heights known) ----
GEN_Y = Y0 + PH + 18          # genetics section top
CARD_Y = GEN_Y + 34
DEF_Y = CARD_Y + 126          # definition text start

# pre-compute card definition wraps to size the panel correctly
cards = [
    ("RECOMBINATION", "what crosses: nucleotides",
     "Genes are exchanged between 2 viral chromosomes by crossing over within regions of significant base sequence homology — the trade happens at the nucleotide level, inside matching stretches.",
     "The homology requirement is the discriminator: no matching sequence, no crossover."),
    ("REASORTMENT", "what crosses: genome segments",
     "Viruses with segmented genomes exchange genetic material — whole segments move. The 2009 novel H1N1 influenza A pandemic emerged via complex viral reassortment of genes from human, swine, and avian viruses; has potential to cause antigenic shift.",
     "EG: 2009 H1N1 — human + swine + avian segments."),
    ("COMPLEMENTATION", "what crosses: proteins in trans",
     "When 1 of 2 viruses infecting a cell has a mutation that results in a nonfunctional protein, the nonmutated virus complements the mutated one by making a functional protein that serves both viruses.",
     "EG: hepatitis D requires replicating HBV to supply HBsAg, its envelope protein."),
    ("PHENOTYPIC MIXING", "what crosses: coat proteins",
     "With simultaneous infection, progeny 1 can carry the genome of virus A coated with the surface proteins of virus B (a pseudovirion) — the type B coat determines the tropism; progeny of the next infection carry the type A coat from their own genome.",
     "EG: the pseudovirion — B's coat sets the tropism; A's genome persists."),
]
card_defs = [ (t, s, wrap(d, 4.6, 198), e) for (t, s, d, e) in cards ]
maxdef = max(len(d[2]) for d in card_defs)
maxex = max(len(wrap(e, 4.6, 198)) for (_, _, _, e) in cards)
CARD_H = 126 + maxdef * 9 + 3 + maxex * 9 + 12
GENH = 34 + CARD_H + 14

rule_lines_left = [
    ("INFECTIOUS AS NAKED NUCLEIC ACID:", True),
    ("Most dsDNA viruses (EXCEPT poxviruses and HBV)", False),
    ("⊕ strand ssRNA viruses (≈ mRNA — ribosome-ready on arrival)", False),
]
rule_lines_right = [
    ("NOT INFECTIOUS — the virion must carry the polymerase:", True),
    ("⊝ strand ssRNA and dsRNA viruses — they lack the required", False),
    ("polymerases to replicate as bare genomes", False),
]
rule_bottom = [
    "ENVELOPE SOURCE: generally the PLASMA membrane, acquired on exit; EXCEPTION — herpesviruses bud from the NUCLEAR membrane.",
    "The enveloped DNA viruses: herpesvirus, hepadnavirus, poxvirus (FA's 'helpful protection' gloss — verification-only).",
]
rb_w = [ln for raw in rule_bottom for ln in wrap(raw, 4.8, 880)]
RULE_Y = GEN_Y + GENH + 16
RULEH = 26 + 3 * 11 + 10 + len(rb_w) * 10 + 14
foot_y = RULE_Y + RULEH + 18

foot_lines = [
    "Original KYP redraw of the source's Viral structure—general features figure + Viral genetics diagrams (pdf 181 / book 159 — pure vector, no rasters)",
    "and the Viral genomes + envelopes rules (pdf 182 / book 160). The source's banner typo 'MICROCIOLOGY—VIROLOGY' prints on books 159-160.",
    "FA's printed mnemonics (Part of a virus; Repeato-virus; the retro-toga-party sentence; BOAR; helpful protection) stay in the note's table block — verification-only, not redrawn.",
]
foot_w = [ln for raw in foot_lines for ln in wrap(raw, 7.2, 944)]

TOTAL = foot_y + len(foot_w) * 12 + 16
a(f'  const h = {TOTAL};')
a('  return (')
a(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="Viral structure and genetics, an original KYP architecture map. THE ARCHITECTURE: the naked (nonenveloped) virus with icosahedral capsid — capsid shell around nucleic acid; the enveloped virus with icosahedral capsid — surface protein spikes on a lipid bilayer around the capsid around the nucleic acid; the enveloped virus with helical capsid — surface protein on lipid bilayer around the helical capsid with viral RNA; and the bacteriophage — capsid head with nucleic acid, collar, core within the helical sheath, base plate, and spikes. THE GENETIC EXCHANGE: recombination — crossing over within regions of significant base sequence homology; reassortment — segmented genomes (influenza) exchange whole segments, the 2009 H1N1 pandemic from human, swine, and avian reassortment, antigenic shift; complementation — the nonmutated virus makes the functional protein serving both, hepatitis D requiring HBV to supply HBsAg; phenotypic mixing — virus A genome coated with virus B surface proteins (pseudovirion), the B coat determining tropism, progeny 2 reverting to the A coat. THE NAKED-GENOME RULE: most dsDNA (except poxviruses and HBV) and positive-strand ssRNA infectious as naked nucleic acids; negative-strand ssRNA and dsRNA not infectious, their virions carrying RNA-dependent RNA polymerase to transcribe negative to positive. THE ENVELOPE RULE: envelopes from the plasma membrane on exit, herpesviruses from the nuclear membrane; enveloped DNA viruses are herpesvirus, hepadnavirus, poxvirus" className="min-w-[940px]">')

# ---- header ----
a('      {/* header */}')
a('      <g>')
a(f'        {R(24, 14, 932, 46, "fill-card stroke-border", rx="12", sw="1.4")}')
a(T(42, 42, 11, "fill-foreground", "Viral structure & genetics — the architecture map (original KYP redraw)", weight="800"))
a(f'        {R(736, 24, 220, 18, "fill-brand-soft", rx="9")}')
a(T(846, 37, 7.6, "fill-brand", "capsid · envelope · exchange", weight="800", anchor="middle"))
a('      </g>')

# ---- SECTION B: architecture panels ----
a('      {/* ===== THE ARCHITECTURE ===== */}')
a('      <g>')
a(f'        {R(36, Y0, 908, PH, "fill-secondary/40 stroke-brand", rx="14", sw="1.5")}')

def panel_title(x0, num, title):
    a(T(x0 + 12, Y0 + 20, 6.4, "fill-foreground", f"{num} · {title}", weight="800", budget_w=200))

def caption(x0, lines):
    yy = CAP_Y - (len(lines) - 1) * 10
    for ln in lines:
        a(T(x0 + 12, yy, 4.6, "fill-muted-foreground", ln, budget_w=196))
        yy += 10

# Panel 1 — naked icosahedral (x0=36)
x0 = 36
panel_title(x0, "1", "NAKED ICOSAHEDRAL")
cx, cy = 114, 174
a('        {/* p1 naked icosahedral */}')
a(f'        {PG(hexpts(cx, cy, 34, 0), "fill-card stroke-brand", sw="1.4")}')
a(f'        {PG(hexpts(cx, cy, 18, 0), "fill-card stroke-brand", sw="0.9")}')
for k in range(6):
    ang = math.radians(60 * k)
    a(f'        {L(f"{cx + 34 * math.cos(ang):.1f}", f"{cy + 34 * math.sin(ang):.1f}", f"{cx + 18 * math.cos(ang):.1f}", f"{cy + 18 * math.sin(ang):.1f}", "stroke-brand", "0.7")}')
a(f'        {squiggle(cx, cy, 12, "stroke-emergency")}')
a(T(x0 + 140, 152, 4.8, "fill-foreground", "Capsid", weight="700", budget_w=70))
a(f'        {L(x0 + 137, 150, 141, 160, "stroke-muted-foreground", "0.7")}')
a(T(x0 + 140, 186, 4.8, "fill-foreground", "Nucleic acid", weight="700", budget_w=70))
a(f'        {L(x0 + 137, 184, 120, 176, "stroke-muted-foreground", "0.7")}')
caption(x0, ["Naked (nonenveloped) virus", "with icosahedral capsid"])

# Panel 2 — enveloped icosahedral (x0=266)
x0 = 266
panel_title(x0, "2", "ENVELOPED ICOSAHEDRAL")
cx, cy = 344, 174
a('        {/* p2 enveloped icosahedral */}')
for s in spike_ring(cx, cy, 42, 50, 2.0, "stroke-brand", "0.9"):
    a(f'        {s}')
a(f'        {C(cx, cy, 42, "fill-none stroke-brand", sw="1.4")}')
a(f'        {C(cx, cy, 37, "fill-none stroke-brand", sw="0.8")}')
a(f'        {PG(hexpts(cx, cy, 20, 0), "fill-card stroke-brand", sw="1.1")}')
a(f'        {squiggle(cx, cy, 9, "stroke-emergency")}')
a(T(x0 + 140, 140, 4.8, "fill-foreground", "Surface protein", weight="700", budget_w=72))
a(f'        {L(x0 + 137, 138, 376, 146, "stroke-muted-foreground", "0.7")}')
a(T(x0 + 140, 162, 4.8, "fill-foreground", "Lipid bilayer", weight="700", budget_w=72))
a(f'        {L(x0 + 137, 160, 383, 168, "stroke-muted-foreground", "0.7")}')
a(T(x0 + 140, 184, 4.8, "fill-foreground", "Capsid", weight="700", budget_w=72))
a(f'        {L(x0 + 137, 182, 362, 178, "stroke-muted-foreground", "0.7")}')
a(T(x0 + 140, 206, 4.8, "fill-foreground", "Nucleic acid", weight="700", budget_w=72))
a(f'        {L(x0 + 137, 204, 350, 180, "stroke-muted-foreground", "0.7")}')
caption(x0, ["Enveloped virus with", "icosahedral capsid"])

# Panel 3 — enveloped helical (x0=496)
x0 = 496
panel_title(x0, "3", "ENVELOPED HELICAL")
cx, cy = 574, 174
a('        {/* p3 enveloped helical */}')
for s in spike_ring(cx, cy, 42, 50, 2.0, "stroke-brand", "0.9"):
    a(f'        {s}')
a(f'        {C(cx, cy, 42, "fill-none stroke-brand", sw="1.4")}')
a(f'        {C(cx, cy, 37, "fill-none stroke-brand", sw="0.8")}')
a(f'        {P("M 556 152 L 592 158 L 556 166 L 592 174 L 556 182 L 592 190 L 556 198", "stroke-emergency", sw="1.2")}')
a(T(x0 + 140, 140, 4.8, "fill-foreground", "Surface protein", weight="700", budget_w=72))
a(f'        {L(x0 + 137, 138, 606, 146, "stroke-muted-foreground", "0.7")}')
a(T(x0 + 140, 162, 4.8, "fill-foreground", "Lipid bilayer", weight="700", budget_w=72))
a(f'        {L(x0 + 137, 160, 613, 168, "stroke-muted-foreground", "0.7")}')
a(T(x0 + 140, 184, 4.8, "fill-foreground", "Helical capsid", weight="700", budget_w=72))
a(T(x0 + 140, 194, 4.8, "fill-foreground", "with viral RNA", weight="700", budget_w=72))
a(f'        {L(x0 + 137, 186, 588, 182, "stroke-muted-foreground", "0.7")}')
caption(x0, ["Enveloped virus with", "helical capsid"])

# Panel 4 — bacteriophage (x0=726)
x0 = 726
panel_title(x0, "4", "BACTERIOPHAGE")
hx, hy = 804, 130
a('        {/* p4 bacteriophage */}')
a(f'        {PG(hexpts(hx, hy, 22, 0), "fill-card stroke-brand", sw="1.4")}')
a(f'        {squiggle(hx, hy, 9, "stroke-emergency", sw="0.9")}')
a(f'        {R(796, 153, 16, 5, "fill-card stroke-brand", sw="0.9")}')
a(f'        {R(797, 158, 14, 44, "fill-card stroke-brand", sw="1.1")}')
yy = 164
while yy < 202:
    a(f'        {L(797, yy, 811, yy, "stroke-brand", "0.8")}')
    yy += 6
a(f'        {L(804, 158, 804, 202, "stroke-emergency", "1.1")}')
a(f'        {R(789, 202, 30, 8, "fill-card stroke-brand", rx="2", sw="1.1")}')
for x1, y1, x2, y2 in [(793, 210, 783, 222), (800, 210, 796, 226), (812, 210, 816, 226), (819, 210, 829, 222)]:
    a(f'        {L(x1, y1, x2, y2, "stroke-brand", "1.0")}')
# left labels
a(T(x0 + 8, 124, 4.8, "fill-foreground", "Nucleic acid", weight="700", budget_w=60))
a(f'        {L(768, 122, 794, 128, "stroke-muted-foreground", "0.7")}')
a(T(x0 + 8, 176, 4.8, "fill-foreground", "Core", weight="700", budget_w=60))
a(f'        {L(744, 174, 796, 178, "stroke-muted-foreground", "0.7")}')
a(T(x0 + 8, 222, 4.8, "fill-foreground", "Spikes", weight="700", budget_w=60))
a(f'        {L(752, 220, 786, 222, "stroke-muted-foreground", "0.7")}')
# right labels
a(T(x0 + 140, 124, 4.8, "fill-foreground", "Capsid", weight="700", budget_w=70))
a(f'        {L(x0 + 137, 122, 822, 126, "stroke-muted-foreground", "0.7")}')
a(T(x0 + 140, 152, 4.8, "fill-foreground", "Collar", weight="700", budget_w=70))
a(f'        {L(x0 + 137, 150, 813, 155, "stroke-muted-foreground", "0.7")}')
a(T(x0 + 140, 180, 4.8, "fill-foreground", "Helical sheath", weight="700", budget_w=70))
a(f'        {L(x0 + 137, 178, 812, 182, "stroke-muted-foreground", "0.7")}')
a(T(x0 + 140, 206, 4.8, "fill-foreground", "Base plate", weight="700", budget_w=70))
a(f'        {L(x0 + 137, 204, 820, 206, "stroke-muted-foreground", "0.7")}')
caption(x0, ["Bacteriophage"])
a('      </g>')

# ---- SECTION C: the genetic exchange ----
a('      {/* ===== THE GENETIC EXCHANGE ===== */}')
a('      <g>')
a(f'        {R(36, GEN_Y, 908, GENH, "fill-card stroke-border", rx="14", sw="1.4")}')
a(T(52, GEN_Y + 22, 9, "fill-foreground", "The genetic exchange — what crosses in each event", weight="800"))

CARD_X = [48, 272, 496, 720]
CARD_W = 212

def virus_icon(cx, cy, r, coat, genome_kind, cls_coat, cls_gen, label=None, label_y=None, dead=False):
    """small virus icon: circle coat + genome mark (wave or bars)"""
    out = [C(cx, cy, r, "fill-card " + cls_coat, sw="1.2")]
    if dead:
        d = r * 0.55
        out.append(L(cx - d, cy - d, cx + d, cy + d, cls_gen, "1.2"))
        out.append(L(cx - d, cy + d, cx + d, cy - d, cls_gen, "1.2"))
    elif genome_kind == "wave":
        x0 = cx - r * 0.5
        seg = (r * 0.5) / 2
        d = f"M {x0:.1f} {cy:.1f}"
        for i in range(4):
            dy = -2.6 if i % 2 == 0 else 2.6
            d += f" q {seg/2:.1f} {dy} {seg:.1f} 0"
        out.append(P(d, cls_gen, "0.9"))
    else:  # bars
        out.append(R(cx - r * 0.55, cy - 4, r * 1.1, 2.6, cls_gen.replace("stroke-", "fill-")))
        out.append(R(cx - r * 0.55, cy + 1.4, r * 1.1, 2.6, cls_gen.replace("stroke-", "fill-")))
    if label:
        out.append(T(cx, label_y, 4.0, "fill-muted-foreground", label, anchor="middle", budget_w=CARD_W - 16))
    return out

for i, (title, sub, defl, exl) in enumerate(card_defs):
    x0 = CARD_X[i]
    cyy = CARD_Y
    a('        {/* card ' + str(i+1) + ' ' + title.lower() + ' */}')
    a(f'        {R(x0, cyy, CARD_W, CARD_H, "fill-secondary", rx="10")}')
    a(T(x0 + 10, cyy + 16, 6.6, "fill-emergency", title, weight="800", budget_w=CARD_W - 20))
    a(T(x0 + 10, cyy + 27, 4.6, "fill-brand", sub, weight="700", budget_w=CARD_W - 20))
    cyv = cyy + 62
    if i == 0:
        # recombination: A + B = progeny half-half wave
        for e in virus_icon(x0 + 34, cyv, 15, "A", "wave", "stroke-brand", "stroke-brand"):
            a(f'        {e}')
        a(T(x0 + 62, cyv + 3, 8, "fill-muted-foreground", "+", anchor="middle"))
        for e in virus_icon(x0 + 90, cyv, 15, "B", "wave", "stroke-emergency", "stroke-emergency"):
            a(f'        {e}')
        a(T(x0 + 118, cyv + 3, 8, "fill-muted-foreground", "=", anchor="middle"))
        # progeny: two half waves
        px = x0 + 152
        a(f'        {C(px, cyv, 17, "fill-card stroke-foreground", sw="1.2")}')
        a(f'        {P(f"M {px-10:.1f} {cyv} q 2.5 -3 5 0 q 2.5 3 5 0", "stroke-brand", "0.9")}')
        a(f'        {P(f"M {px:.1f} {cyv} q 2.5 -3 5 0 q 2.5 3 5 0", "stroke-emergency", "0.9")}')
        a(T(x0 + 106, cyy + 100, 4.2, "fill-muted-foreground", "crossover within homology → hybrid genome", anchor="middle", budget_w=CARD_W - 12))
    elif i == 1:
        for e in virus_icon(x0 + 34, cyv, 15, "A", "bars", "stroke-brand", "stroke-brand"):
            a(f'        {e}')
        a(T(x0 + 62, cyv + 3, 8, "fill-muted-foreground", "+", anchor="middle"))
        for e in virus_icon(x0 + 90, cyv, 15, "B", "bars", "stroke-emergency", "stroke-emergency"):
            a(f'        {e}')
        a(T(x0 + 118, cyv + 3, 8, "fill-muted-foreground", "=", anchor="middle"))
        px = x0 + 152
        a(f'        {C(px, cyv, 17, "fill-card stroke-foreground", sw="1.2")}')
        a(f'        {R(px - 9, cyv - 4, 18, 2.6, "fill-brand")}')
        a(f'        {R(px - 9, cyv + 1.4, 18, 2.6, "fill-emergency")}')
        a(T(x0 + 106, cyy + 100, 4.2, "fill-muted-foreground", "segments swap wholesale — antigenic shift", anchor="middle", budget_w=CARD_W - 12))
    elif i == 2:
        for e in virus_icon(x0 + 34, cyv, 15, "F", "wave", "stroke-brand", "stroke-brand"):
            a(f'        {e}')
        a(T(x0 + 34, cyy + 92, 4.0, "fill-muted-foreground", "functional", anchor="middle", budget_w=64))
        a(T(x0 + 62, cyv + 3, 8, "fill-muted-foreground", "+", anchor="middle"))
        for e in virus_icon(x0 + 90, cyv, 15, "NF", "wave", "stroke-muted-foreground", "stroke-emergency", dead=True):
            a(f'        {e}')
        a(T(x0 + 90, cyy + 92, 4.0, "fill-muted-foreground", "nonfunctional", anchor="middle", budget_w=64))
        a(T(x0 + 118, cyv + 3, 8, "fill-muted-foreground", "=", anchor="middle"))
        for e in virus_icon(x0 + 152, cyv, 17, "R", "wave", "stroke-brand", "stroke-brand"):
            a(f'        {e}')
        a(T(x0 + 152, cyy + 92, 4.0, "fill-muted-foreground", "both replicate", anchor="middle", budget_w=64))
        a(T(x0 + 106, cyy + 104, 4.2, "fill-muted-foreground", "the protein is shared in trans", anchor="middle", budget_w=CARD_W - 12))
    else:
        for e in virus_icon(x0 + 28, cyv, 14, "A", "wave", "stroke-brand", "stroke-brand"):
            a(f'        {e}')
        a(T(x0 + 54, cyv + 3, 8, "fill-muted-foreground", "+", anchor="middle"))
        for e in virus_icon(x0 + 80, cyv, 14, "B", "wave", "stroke-emergency", "stroke-emergency"):
            a(f'        {e}')
        a(T(x0 + 104, cyv + 3, 8, "fill-muted-foreground", "=", anchor="middle"))
        # progeny 1: A genome (brand wave) in B coat (emergency circle)
        p1x = x0 + 138
        a(f'        {C(p1x, cyv, 16, "fill-card stroke-emergency", sw="1.4")}')
        a(f'        {P(f"M {p1x-8:.1f} {cyv} q 2 -2.6 4 0 q 2 2.6 4 0", "stroke-brand", "0.9")}')
        a(T(p1x, cyy + 92, 4.0, "fill-muted-foreground", "progeny 1", anchor="middle", budget_w=56))
        a(T(x0 + 158, cyv + 3, 7, "fill-muted-foreground", "→", anchor="middle"))
        p2x = x0 + 186
        a(f'        {C(p2x, cyv, 13, "fill-card stroke-brand", sw="1.4")}')
        a(f'        {P(f"M {p2x-6.5:.1f} {cyv} q 1.7 -2.2 3.3 0 q 1.7 2.2 3.3 0", "stroke-brand", "0.9")}')
        a(T(p2x, cyy + 92, 4.0, "fill-muted-foreground", "progeny 2", anchor="middle", budget_w=52))
        a(T(x0 + 106, cyy + 104, 4.2, "fill-muted-foreground", "B coat sets tropism → A coat returns", anchor="middle", budget_w=CARD_W - 12))
    yy = DEF_Y
    for ln in defl:
        a(T(x0 + 10, yy, 4.6, "fill-muted-foreground", ln, budget_w=198))
        yy += 9
    yy += 3
    for ln in wrap(exl, 4.6, 198):
        a(T(x0 + 10, yy, 4.6, "fill-foreground", ln, weight="700", budget_w=198))
        yy += 9
a('      </g>')

# ---- SECTION D: naked-genome rule + envelope rule ----
a('      {/* ===== THE NAKED-GENOME RULE + ENVELOPE RULE ===== */}')
a('      <g>')
a(f'        {R(36, RULE_Y, 908, RULEH, "fill-secondary/40 stroke-brand", rx="12", sw="1.5")}')
a(T(52, RULE_Y + 20, 8, "fill-foreground", "The naked-genome rule + the envelope rule — book 160", weight="800"))
yy = RULE_Y + 38
for txt, bold in rule_lines_left:
    if bold:
        a(T(52, yy, 5.4, "fill-emergency", txt, weight="800", budget_w=430))
    else:
        a(T(58, yy, 4.8, "fill-muted-foreground", txt, budget_w=424))
    yy += 11
yy = RULE_Y + 38
for txt, bold in rule_lines_right:
    if bold:
        a(T(520, yy, 5.4, "fill-emergency", txt, weight="800", budget_w=410))
    else:
        a(T(526, yy, 4.8, "fill-muted-foreground", txt, budget_w=404))
    yy += 11
yy += 4
for ln in rb_w:
    a(T(490, yy, 4.8, "fill-muted-foreground", ln, anchor="middle", budget_w=880))
    yy += 10
a('      </g>')

# ---- footer ----
a('      {/* footer */}')
yy = foot_y
for ln in foot_w:
    a(T(24, yy, 7.2, "fill-muted-foreground", ln, budget_w=944))
    yy += 12
a('    </svg>')
a('  );')
a('}')

with open('src/components/kyp/usmle/visuals/micro.tsx', 'a', encoding='utf8') as f:
    f.write("\n" + "\n".join(L22) + "\n")

bad = [s for s in AUDIT if s[4] > s[3]]
for s in bad:
    print(f"  OVERFLOW {s[0]} fs={s[1]} {s[4]}u > {s[3]}u :: {s[2][:50]!r}")
if bad:
    raise SystemExit(f"AUDIT FAILED: {len(bad)}")
print(f"AUDIT PASSED: {len(AUDIT)} text elements (M22); total height {TOTAL}u; cards H={CARD_H}; rules H={RULEH}")
