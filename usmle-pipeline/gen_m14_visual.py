#!/usr/bin/env python3
"""M14 spirochete-syphilis — generates the SpirocheteSyphilisMap component
into micro.tsx with discipline: every text line is wrapped to a per-column
character budget (0.50 units/char/px, calibrated from the M12 anchors-line
measurement of 0.478), panel geometry computed from line counts, and a final
audit asserts no line exceeds its budget. Emits static JSX coordinates."""
import math

U_PER_CHAR_PX = 0.50  # units per char per fontSize px (safety over 0.478 measured)

def budget(fontsize, width_units):
    return int(width_units / (U_PER_CHAR_PX * fontsize))

def wrap(text, fontsize, width_units):
    """Wrap text into lines each within the char budget."""
    maxc = budget(fontsize, width_units)
    words = text.split()
    lines, cur = [], ""
    for wd in words:
        trial = (cur + " " + wd).strip()
        if len(trial) <= maxc:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = wd
    if cur:
        lines.append(cur)
    return lines

AUDIT = []  # (element, fontsize, text, budget_units, actual_units)

def T(x, y, size, cls, text, weight=None, anchor=None, budget_w=None):
    """Emit a <text> element; register audit if budget_w given."""
    attrs = f'x="{x}" y="{y}"'
    if anchor:
        attrs += f' textAnchor="{anchor}"'
    attrs += f' fontSize="{size}"'
    if weight:
        attrs += f' fontWeight="{weight}"'
    attrs += f' className="{cls}"'
    t = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    if budget_w:
        AUDIT.append((size, text, budget_w, round(len(text) * U_PER_CHAR_PX * size, 1)))
    return f"<text {attrs}>{t}</text>"

L = []  # jsx lines
def add(s):
    L.append(s)

# ---------------- content ----------------
trio = [
    ("Leptospira", "brand", "Hook-shaped ends. Water contaminated with animal urine. Leptospirosis — flulike symptoms, myalgias (classically of calves), jaundice, photophobia with conjunctival suffusion (erythema without exudate). Prevalent among surfers and in the tropics (eg, Hawaii). Weil disease (icterohemorrhagic leptospirosis) — the severe form: jaundice and azotemia from liver and kidney dysfunction, fever, hemorrhage, anemia."),
    ("Treponema pallidum", "emergency", "Visualized by DARK-FIELD microscopy or direct fluorescent antibody (DFA) microscopy. The syphilis organism — treatment penicillin G. Primary: painless chancre (VDRL ⊕ in ~80%). Secondary: systemic. Tertiary: gummas, aortitis, neurosyphilis. Congenital via placental transmission typically after the first trimester — treat the patient early in pregnancy to prevent."),
    ("Borrelia burgdorferi", "brand", "The ONLY spirochete visualized with aniline dyes (Wright or Giemsa stain) in light microscopy, due to size. Lyme disease: transmitted by the Ixodes deer tick (also the vector for Anaplasma spp. and the protozoa Babesia). Natural reservoir is the mouse; deer are essential to the tick life cycle but do NOT harbor Borrelia. Common in the northeastern United States."),
]
lyme_stages = [
    ("STAGE 1 — EARLY LOCALIZED", "Erythema migrans — the typical “bulls-eye” configuration is pathognomonic but not always present; flulike symptoms."),
    ("STAGE 2 — EARLY DISSEMINATED", "Secondary lesions · carditis, AV block · facial nerve (Bell) palsy · migratory myalgias / transient arthritis."),
    ("STAGE 3 — LATE DISSEMINATED", "Encephalopathy · chronic arthritis · peripheral neuropathy."),
]
syph = [
    ("PRIMARY", "emergency", "Localized disease presenting with a PAINLESS CHANCRE. Use fluorescent or dark-field microscopy to visualize treponemes in fluid from the chancre. VDRL ⊕ in ~80% of patients.", 68),
    ("SECONDARY", "brand", "Disseminated disease with constitutional symptoms, maculopapular rash (including palms and soles), condylomata lata (smooth, painless, wartlike white lesions on genitals), lymphadenopathy, patchy hair loss; also confirmable with dark-field microscopy. Serologic testing: VDRL/RPR (nonspecific), confirm with a specific test (eg, FTA-ABS). Secondary syphilis = systemic. Latent syphilis (⊕ serology without symptoms) may follow.", 110),
    ("TERTIARY", "emergency", "Gummas (chronic granulomas), aortitis (vasa vasorum destruction), neurosyphilis (tabes dorsalis, “general paresis”), Argyll Robertson pupil (constricts with accommodation but is not reactive to light). Signs: broad-based ataxia, ⊕ Romberg, Charcot joint, stroke without hypertension.", 88),
    ("CONGENITAL", "brand", "Facial abnormalities: rhagades (linear scars at angle of mouth), snuffles (nasal discharge), saddle nose, notched (Hutchinson) teeth, mulberry molars, and short maxilla; saber shins; CN VIII deafness. To prevent, treat the patient early in pregnancy — placental transmission typically occurs after the first trimester.", 88),
]
rods = [
    ("Vibrio cholerae (+ V. vulnificus)", "emergency", "Gram ⊝, flagellated, comma shaped, oxidase ⊕, grows in alkaline media. Endemic to developing countries. Produces profuse rice-water diarrhea via enterotoxin that permanently activates Gs → ↑ cAMP. Sensitive to stomach acid (acid labile); requires large inoculum (high ID50) unless the host has ↓ gastric acidity. Transmitted via ingestion of contaminated water or uncooked food (eg, raw shellfish). Treat promptly with oral rehydration solution. V. vulnificus — gram ⊝ bacillus of marine environments: severe wound infections or septicemia from contaminated sea water; cellulitis that can progress to necrotizing fasciitis in high-risk patients, especially with high serum iron (eg, cirrhosis, hemochromatosis). Serious wound infection requires surgical debridement."),
    ("Helicobacter pylori", "brand", "Curved, flagellated (motile) gram ⊝ rod that is TRIPLE ⊕: catalase ⊕, oxidase ⊕, and urease ⊕ (urea breath test or fecal antigen test for diagnosis). Urease produces ammonia, creating an alkaline environment that helps H pylori survive in acidic mucosa. Colonizes mainly the antrum of the stomach; causes gastritis and peptic ulcers (especially duodenal). Risk factor for peptic ulcer disease, gastric adenocarcinoma, and MALT lymphoma. Triple therapy: amoxicillin (metronidazole if penicillin allergy) + clarithromycin + proton pump inhibitor. Bismuth-based quadruple therapy if concerned about macrolide resistance."),
]

# ---------------- geometry ----------------
# Panel A: trio. Cards 284 wide x3 at x=52/348/644; inner text width 264; body 5.0
CARD_W, CARD_IN = 284, 264
cards_a = []
for n, c, body in trio:
    lines = wrap(body, 5.0, CARD_IN - 8)
    h = 20 + len(lines) * 11 + 12
    cards_a.append((n, c, lines, h))
panelA_h = 24 + max(h for *_, h in cards_a) + 12  # title zone + tallest card + pad
jarisch_h = 26
panelA_h += jarisch_h + 8
A_Y, A_H = 76, panelA_h

# Panel B: lyme. One full-width card: VECTOR & RESERVOIR + the three stages + treatment.
B_Y = A_Y + A_H + 16
b_left_w = 876
b_left_lines = []
b_left_lines += wrap("Natural reservoir is the MOUSE; deer are essential to the tick life cycle but do NOT harbor Borrelia. Common in the northeastern United States.", 5.2, b_left_w - 20)
b_stages_wrapped = []
for n, d in lyme_stages:
    dl = wrap(d, 5.0, b_left_w - 20)
    b_stages_wrapped.append((n, dl))
left_h = 26 + len(b_left_lines) * 11 + 10 + 16 + sum(14 + len(dl) * 10 for _, dl in b_stages_wrapped) + 12
treat_line = "Treatment: doxycycline (1st line); amoxicillin (pregnant patients, children <8 years old); ceftriaxone if IV therapy required."
treat_wrapped = wrap(treat_line, 5.2, 876 - 20)
B_H = 24 + left_h + len(treat_wrapped) * 11 + 22  # +8: treatment line must clear the panel bottom (was +14, grazed by 0.8u)

# Panel C: syphilis clock. 4 cards 212 wide at x=52/276/500/724; inner 192.
C_Y = B_Y + B_H + 16
cards_c = []
for n, c, body, _h in syph:
    lines = wrap(body, 5.0, 192)
    h = 22 + len(lines) * 10 + 12
    cards_c.append((n, c, lines, h))
C_H = 24 + max(h for *_, h in cards_c) + 12 + 26  # +8: penicillin line must clear the panel bottom (was +18, grazed by 1.8u)

# Panel D: serology tree.
D_Y = C_Y + C_H + 16
# tree: roots y+24 h24; serologic sub-headers y+56 h22; leaves y+84 h26; rules 3 lines; false-pos 2 lines
D_H = 24 + 24 + 8 + 22 + 6 + 26 + 14 + 3 * 11 + 8 + 20 + 2 * 11 + 12

# Panel E: curved-rod roster. Full-width rows.
E_Y = D_Y + D_H + 16
rows_e = []
for n, c, body in rods:
    lines = wrap(body, 5.0, 876 - 220)
    h = 20 + len(lines) * 11 + 10
    rows_e.append((n, c, lines, h))
E_H = 24 + sum(h for *_, h in rows_e) + 8 * (len(rows_e) - 1) + 12

# anchors + footer
ANC_Y = E_Y + E_H + 16
anchors_line = "Borrelia is the only spirochete seen on light microscopy (aniline dyes — Wright/Giemsa); Treponema needs dark-field or DFA · VDRL/RPR: beef cardiolipin, sensitive not specific, revert to negative after treatment; FTA-ABS/TP-PA remain positive"
anchors_wrapped = wrap(anchors_line, 6.2, 876)
ANC_H = 10 + len(anchors_wrapped) * 13 + 10
FOOT_Y = ANC_Y + ANC_H + 14
footer = [
    "Original KYP redraw of the source’s spirochete trio, Lyme stages, syphilis clock, and the diagnosing-syphilis test-selection tree (pdf 166-168 / book 144-146; the tree on book 146 redrawn as the SEROLOGY panel — pdf 168 is the shared page: M14 owns the syphilis-testing section, the Chlamydiae section below it is M15’s).",
    "The printed images (the comma/curved-rod/spirochete micrographs, the Ixodes tick, the erythema migrans bulls-eye, the chancre dark-field, the maculopapular rash with palms and soles, condylomata lata, gummas, the congenital face with rhagades and snuffles arrows, Hutchinson teeth) are raster — COPYRIGHTED,",
    "described-in-text only. FA’s printed mnemonics (Little Twirling Bacteria; A Key Lyme pie to the FACE; the triple-therapy letter gloss) are NOT reproduced here — verification only, carried verbatim in the note’s table block.",
]
footer_wrapped = [ln for raw in footer for ln in wrap(raw, 7.2, 944)]
TOTAL_H = FOOT_Y + len(footer_wrapped) * 12 + 16

# ---------------- emit ----------------
add('export function SpirocheteSyphilisMap() {')
add(f'  const w = 980;')
add(f'  const h = {TOTAL_H};')
add('  return (')
add(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="Spirochetes and syphilis, an original KYP staging map: the spirochete trio (Leptospira with hook-shaped ends from animal-urine water and Weil disease; Treponema visualized by dark-field or DFA; Borrelia the only spirochete seen with aniline dyes on light microscopy) with the Jarisch-Herxheimer reaction; Lyme disease with the Ixodes deer tick, the mouse reservoir, and its three stages; the syphilis clock from the painless chancre through the systemic secondary stage to the gummas, aortitis, and neurosyphilis of tertiary with the Argyll Robertson pupil, plus the congenital branch; the serology tree (nontreponemal RPR/VDRL vs treponemal FTA-ABS/TP-PA, with darkfield and PCR as direct testing) with the false-positive VDRL causes; and the curved-rod roster of book 144 (Vibrio cholerae with its Gs-activating enterotoxin, Vibrio vulnificus, and Helicobacter pylori with its urease)" className="min-w-[940px]">')

# header
add('      {/* header */}')
add('      <g>')
add('        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />')
add(T(42, 42, 11, "fill-foreground", "Spirochetes & syphilis — the staging map (original KYP redraw)", weight="800"))
add('        <rect x="700" y="24" width="232" height="18" rx="9" className="fill-brand-soft" />')
add(T(816, 37, 7.6, "fill-brand", "trio · lyme · clock · serology · roster", weight="800", anchor="middle"))
add('      </g>')

# Panel A: trio
add('      {/* ===== THE SPIROCHETE TRIO ===== */}')
add('      <g>')
add(f'        <rect x="36" y="{A_Y}" width="908" height="{A_H}" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />')
add(T(52, A_Y + 22, 9, "fill-foreground", "THE SPIROCHETE TRIO — spiral-shaped bacteria with axial filaments: Leptospira, Treponema, Borrelia", weight="800"))
xw = [(52, CARD_W), (348, CARD_W), (644, CARD_W)]
for (n, c, lines, h), (x, cw) in zip(cards_a, xw):
    add(f'        <rect x="{x}" y="{A_Y + 32}" width="{cw}" height="{h}" rx="8" className="fill-card stroke-border" strokeWidth="1" />')
    add(T(x + 10, A_Y + 48, 6.6, "fill-emergency" if c == "emergency" else "fill-brand", n, weight="800"))
    for j, ln in enumerate(lines):
        add(T(x + 10, A_Y + 62 + j * 11, 5.0, "fill-muted-foreground", ln, budget_w=CARD_IN - 8))
add(f'        <rect x="52" y="{A_Y + 32 + max(h for *_, h in cards_a) + 8}" width="876" height="{jarisch_h - 2}" rx="6" className="fill-secondary" />')
add(T(64, A_Y + 32 + max(h for *_, h in cards_a) + 8 + 16, 5.4, "fill-foreground", "JARISCH-HERXHEIMER REACTION — flulike symptoms (fever, chills, headache, myalgia) after antibiotics are started, due to the host response to sudden release of bacterial antigens; usually occurs during treatment of spirochetal infections.", weight="700", budget_w=850))
add('      </g>')

# Panel B: lyme
add('      {/* ===== LYME DISEASE ===== */}')
add('      <g>')
add(f'        <rect x="36" y="{B_Y}" width="908" height="{B_H}" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />')
add(T(52, B_Y + 22, 9, "fill-foreground", "LYME DISEASE — Borrelia burgdorferi · the Ixodes deer tick (also the vector for Anaplasma spp. and the protozoa Babesia)", weight="800"))
# the single full-width card
add(f'        <rect x="52" y="{B_Y + 32}" width="{b_left_w}" height="{left_h}" rx="8" className="fill-secondary" />')
add(T(62, B_Y + 48, 6.2, "fill-brand", "VECTOR & RESERVOIR", weight="800"))
yy = B_Y + 62
for ln in b_left_lines:
    add(T(62, yy, 5.2, "fill-muted-foreground", ln, budget_w=b_left_w - 20)); yy += 11
yy += 8
add(T(62, yy, 6.2, "fill-brand", "THE THREE STAGES", weight="800")); yy += 14
for n, dl in b_stages_wrapped:
    add(T(62, yy, 5.4, "fill-emergency", n, weight="800")); yy += 14
    for ln in dl:
        add(T(62, yy, 5.0, "fill-muted-foreground", ln, budget_w=b_left_w - 20)); yy += 10
    yy += 4
for j, ln in enumerate(treat_wrapped):
    add(T(52, B_Y + 32 + left_h + 16 + j * 11, 5.2, "fill-foreground", ln, weight="700", budget_w=856))
add('      </g>')

# Panel C: syphilis clock
add('      {/* ===== THE SYPHILIS CLOCK ===== */}')
add('      <g>')
add(f'        <rect x="36" y="{C_Y}" width="908" height="{C_H}" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />')
add(T(52, C_Y + 22, 9, "fill-foreground", "THE SYPHILIS CLOCK — Treponema pallidum · the congenital branch is the vertical-transmission lane", weight="800"))
cxw = [(52, 212), (276, 212), (500, 212), (724, 212)]
for (n, c, lines, h), (x, cw) in zip(cards_c, cxw):
    add(f'        <rect x="{x}" y="{C_Y + 32}" width="{cw}" height="{h}" rx="8" className="fill-secondary" />')
    add(T(x + 10, C_Y + 48, 7, "fill-emergency" if c == "emergency" else "fill-brand", n, weight="800"))
    for j, ln in enumerate(lines):
        add(T(x + 10, C_Y + 62 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=192))
add(T(52, C_Y + 32 + max(h for *_, h in cards_c) + 22, 5.4, "fill-foreground", "Treatment: penicillin G. To prevent congenital syphilis, treat the patient early in pregnancy (placental transmission typically after the first trimester).", weight="700", budget_w=856))
add('      </g>')

# Panel D: serology tree
add('      {/* ===== THE SEROLOGY TREE (redraw of the printed test-selection tree) ===== */}')
add('      <g>')
add(f'        <rect x="36" y="{D_Y}" width="908" height="{D_H}" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />')
add(T(52, D_Y + 22, 9, "fill-foreground", "THE SEROLOGY TREE — diagnosing syphilis (book 146, redrawn)", weight="800"))
# roots
add(f'        <rect x="52" y="{D_Y + 34}" width="428" height="24" rx="6" className="fill-card stroke-border" />')
add(T(266, D_Y + 50, 7, "fill-brand", "SEROLOGIC TESTING", weight="800", anchor="middle"))
add(f'        <rect x="496" y="{D_Y + 34}" width="432" height="24" rx="6" className="fill-card stroke-border" />')
add(T(712, D_Y + 50, 7, "fill-emergency", "DIRECT TESTING", weight="800", anchor="middle"))
# serologic sub-headers
add(f'        <rect x="52" y="{D_Y + 66}" width="208" height="22" rx="6" className="fill-secondary" />')
add(T(156, D_Y + 81, 5.8, "fill-foreground", "Nontreponemal (nonspecific)", weight="800", anchor="middle"))
add(f'        <rect x="272" y="{D_Y + 66}" width="208" height="22" rx="6" className="fill-secondary" />')
add(T(376, D_Y + 81, 5.8, "fill-foreground", "Treponemal (specific)", weight="800", anchor="middle"))
# serologic leaves
for x, nm in [(52, "RPR"), (162, "VDRL")]:
    add(f'        <rect x="{x}" y="{D_Y + 94}" width="100" height="26" rx="6" className="fill-card stroke-border" />')
    add(T(x + 50, D_Y + 111, 6.4, "fill-foreground", nm, weight="800", anchor="middle"))
for x, nm in [(272, "FTA-ABS"), (382, "TP-PA")]:
    add(f'        <rect x="{x}" y="{D_Y + 94}" width="100" height="26" rx="6" className="fill-card stroke-border" />')
    add(T(x + 50, D_Y + 111, 6.4, "fill-foreground", nm, weight="800", anchor="middle"))
# direct leaves
add(f'        <rect x="496" y="{D_Y + 66}" width="208" height="26" rx="6" className="fill-card stroke-border" />')
add(T(600, D_Y + 83, 6.0, "fill-foreground", "Darkfield microscopy", weight="800", anchor="middle"))
add(f'        <rect x="720" y="{D_Y + 66}" width="208" height="26" rx="6" className="fill-card stroke-border" />')
add(T(824, D_Y + 83, 6.0, "fill-foreground", "PCR", weight="800", anchor="middle"))
# rules
rules = [
    "VDRL and RPR detect nonspecific antibody that reacts with BEEF CARDIOLIPIN — quantitative, inexpensive, widely available; sensitive but NOT specific.",
    "After treatment: nontreponemal tests (VDRL, RPR) and direct testing REVERT TO NEGATIVE; treponemal tests (FTA-ABS, TP-PA) REMAIN POSITIVE.",
]
yy = D_Y + 134
for r in rules:
    for ln in wrap(r, 5.2, 876):
        add(T(52, yy, 5.2, "fill-muted-foreground", ln, budget_w=876)); yy += 11
yy += 6
add(T(52, yy, 6.2, "fill-emergency", "FALSE-POSITIVE VDRL WITH:", weight="800")); yy += 14
for ln in wrap("Pregnancy · Viral infection (eg, EBV, hepatitis) · Drugs (eg, chlorpromazine, procainamide) · Rheumatic fever (rare) · Lupus (anticardiolipin antibody) and Leprosy", 5.2, 876):
    add(T(52, yy, 5.2, "fill-muted-foreground", ln, budget_w=876)); yy += 11
add('      </g>')

# Panel E: curved-rod roster
add('      {/* ===== THE CURVED-ROD ROSTER (book 144, page ownership) ===== */}')
add('      <g>')
add(f'        <rect x="36" y="{E_Y}" width="908" height="{E_H}" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />')
add(T(52, E_Y + 22, 9, "fill-foreground", "THE CURVED-ROD ROSTER — the book-144 entries (the M12 tree’s curved-rod leaves, completed)", weight="800"))
yy = E_Y + 32
for n, c, lines, h in rows_e:
    add(f'        <rect x="52" y="{yy}" width="876" height="{h}" rx="7" className="fill-secondary" />')
    add(T(64, yy + 15, 6.4, "fill-emergency" if c == "emergency" else "fill-brand", n, weight="800"))
    for j, ln in enumerate(lines):
        add(T(240, yy + 15 + j * 11, 5.0, "fill-muted-foreground", ln, budget_w=876 - 200))
    yy += h + 8
add('      </g>')

# anchors
add('      {/* anchors strip */}')
add('      <g>')
add(f'        <rect x="36" y="{ANC_Y}" width="908" height="{ANC_H}" rx="8" className="fill-secondary" />')
yy = ANC_Y + 20
for ln in anchors_wrapped:
    add(T(490, yy, 6.2, "fill-muted-foreground", ln, weight="700", anchor="middle", budget_w=880)); yy += 13
add('      </g>')

# footer
add('      {/* footer */}')
yy = FOOT_Y
for ln in footer_wrapped:
    add(T(24, yy, 7.2, "fill-muted-foreground", ln, budget_w=944)); yy += 12
add('    </svg>')
add('  );')
add('}')

# ---------------- audit ----------------
bad = [(s, t[:50], bw, au) for s, t, bw, au in AUDIT if au > bw]
for s, t, bw, au in bad:
    print(f"  OVERFLOW fontSize={s} actual={au}u > budget={bw}u :: {t!r}")
if bad:
    raise SystemExit(f"AUDIT FAILED: {len(bad)} overflowing lines")
print(f"AUDIT PASSED: {len(AUDIT)} text elements all within budget")
print(f"geometry: A({A_Y},{A_H}) B({B_Y},{B_H}) C({C_Y},{C_H}) D({D_Y},{D_H}) E({E_Y},{E_H}) anchors({ANC_Y},{ANC_H}) footer@{FOOT_Y} total h={TOTAL_H}")

code = "\n".join(L) + "\n"
with open('src/components/kyp/usmle/visuals/micro.tsx', 'a', encoding='utf8') as f:
    f.write("\n" + code)
print("component appended to micro.tsx")
