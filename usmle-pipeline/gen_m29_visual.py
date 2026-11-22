#!/usr/bin/env python3
"""M29 bugs-by-system-gi-meningitis — generates the SystemsBugMatrix
component into micro.tsx (width-budget machinery, 0.50 u/char/px). Source:
pdf 197-198 / books 175-176. The diarrhea split (bloody vs watery), the
pneumonia age ladder + special groups, the meningitis age ladder + CSF
findings + empiric protocol, and the brain-abscess/osteomyelitis set. The
osteomyelitis imaging A is raster, COPYRIGHTED, described-in-text only."""
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
        AUDIT.append(("M29", size, text, budget_w, round(len(text) * U * size, 1)))
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

L29 = []
a = L29.append

# ============ content ============
bloody = [
    ("Campylobacter", "Comma- or S-shaped organisms; growth at 42°C"),
    ("E histolytica", "Protozoan; amebic dysentery; liver abscess"),
    ("Enterohemorrhagic E coli", "O157:H7; can cause HUS; makes Shiga toxin"),
    ("Enteroinvasive E coli", "Invades colonic mucosa"),
    ("Salmonella (nontyphoidal)", "Lactose ⊝; flagellar motility; has animal reservoir, especially poultry and eggs"),
    ("Shigella", "Lactose ⊝; very low ID50; produces Shiga toxin; human reservoir only; bacillary dysentery"),
    ("Y enterocolitica", "Day care outbreaks; pseudoappendicitis"),
]
watery = [
    ("C difficile", "Pseudomembranous colitis; associated with antibiotics and PPIs; occasionally bloody diarrhea"),
    ("C perfringens", "Also causes gas gangrene"),
    ("Enterotoxigenic E coli", "Travelers’ diarrhea; produces heat-labile (LT) and heat-stable (ST) toxins"),
    ("Protozoa", "Giardia, Cryptosporidium"),
    ("V cholerae", "Comma-shaped organisms; rice-water diarrhea; often from infected seafood"),
    ("Viruses", "Norovirus (most common cause in developed countries), rotavirus (↓ incidence in developed countries due to vaccination), enteric adenovirus"),
]

pneum_cols = [
    ("NEONATES (<4 WK)", "Group B Streptococcus, E coli"),
    ("CHILDREN (4 WK-18 YR)", "Viruses (RSV); Mycoplasma; C trachomatis (infants-3 yr); C pneumoniae (school-aged children); S pneumoniae"),
    ("ADULTS (18-40 YR)", "Mycoplasma; C pneumoniae; S pneumoniae; Viruses (eg, influenza)"),
    ("ADULTS (40-65 YR)", "S pneumoniae; H influenzae; Anaerobes; Viruses; Mycoplasma"),
    ("ADULTS (65 YR+)", "S pneumoniae; Influenza virus; Anaerobes; H influenzae; Gram ⊝ rods"),
]
special = [
    ("Alcohol overuse", "Klebsiella, anaerobes usually due to aspiration (eg, Peptostreptococcus, Fusobacterium, Prevotella, Bacteroides)"),
    ("Injection drug use", "S pneumoniae, S aureus"),
    ("Aspiration", "Anaerobes"),
    ("Atypical", "Mycoplasma, Chlamydophila, Legionella, viruses (RSV, CMV, influenza, adenovirus)"),
    ("Cystic fibrosis", "Pseudomonas, S aureus, S pneumoniae, Burkholderia cepacia"),
    ("Immunocompromised", "S aureus, enteric gram ⊝ rods, fungi, viruses, P jirovecii (with HIV)"),
    ("Healthcare-associated", "S aureus, Pseudomonas, other enteric gram ⊝ rods"),
    ("Postviral", "S pneumoniae, S aureus, H influenzae"),
    ("COPD", "S pneumoniae, H influenzae, M catarrhalis, Pseudomonas"),
]

mening_cols = [
    ("NEWBORN (0-6 MO)", "Group B Streptococcus, E coli, Listeria"),
    ("CHILDREN (6 MO-6 YR)", "S pneumoniae, N meningitidis, H influenzae type b, Group B Streptococcus, Enteroviruses"),
    ("6-60 YR", "S pneumoniae, N meningitidis, Enteroviruses, HSV"),
    ("60 YR+", "S pneumoniae, N meningitidis, H influenzae type b, Group B Streptococcus, Listeria"),
]
csf = [
    ("Bacterial", "↑", "↑ PMNs", "↑", "↓"),
    ("Fungal/TB", "↑", "↑ lymphocytes", "↑", "↓"),
    ("Viral", "Normal/↑", "↑ lymphocytes", "Normal/↑", "Normal"),
]

osteo = [
    ("Assume if no other information (A)", "S aureus (most common overall)"),
    ("Sexually active", "Neisseria gonorrhoeae (rare); septic arthritis more common"),
    ("Sickle cell disease", "Salmonella, S aureus"),
    ("Prosthetic joint replacement", "S aureus, S epidermidis"),
    ("Vertebral involvement", "S aureus, M tuberculosis (Pott disease)"),
    ("Cat and dog bites", "Pasteurella multocida"),
    ("Injection drug use", "S aureus; also Pseudomonas, Candida"),
]

foot_lines = [
    "Original KYP redraw of the source's Bugs causing diarrhea split, Common causes of pneumonia (with the special-groups set), Common causes of meningitis + CSF findings, brain-abscess routing, and the Osteomyelitis risk-factor table (pdf 197-198 / books 175-176).",
    "The printed osteomyelitis imaging A (the radiograph and MRI pair) is raster — COPYRIGHTED, described-in-text only. FA's printed glosses (Runts May Cough; Chunky Sputum) stay in the note's table block — verification-only, not redrawn.",
    "The source's banner typo 'MICROCIOLOGY—SYSTEMS' prints on books 175-176.",
]
foot_w = [ln for raw in foot_lines for ln in wrap(raw, 7.2, 944)]

# ============ layout ============
Y_HDR = 14
Y_DIA = 76
dia_rows = []
for n, d in bloody:
    dl = wrap(d, 4.5, 300)
    h = 12 + len(dl) * 8.6 + 8
    dia_rows.append((n, dl, h, "fill-emergency"))
for n, d in watery:
    dl = wrap(d, 4.5, 300)
    h = 12 + len(dl) * 8.6 + 8
    dia_rows.append((n, dl, h, "fill-brand"))
DIA_H = 58 + max(sum(h for *_, h, _ in dia_rows[:7]), sum(h for *_, h, _ in dia_rows[7:])) + 6 * 6 + 10

Y_PN = Y_DIA + DIA_H + 16
pn_cols = []
for head, body in pneum_cols:
    bl = wrap(body, 4.5, 130)
    pn_cols.append((head, bl, 6 + 22 + len(bl) * 8.6 + 10))
sp_rows = []
for n, d in special:
    dl = wrap(d, 4.5, 620)
    h = 12 + len(dl) * 8.6 + 6
    sp_rows.append((n, dl, h))
PN_H = 26 + 6 + max(h for *_, h in pn_cols) + 12 + 26 + sum(h for *_, h in sp_rows) + 8 * 4 + 14

Y_MN = Y_PN + PN_H + 16
mn_cols = []
for head, body in mening_cols:
    bl = wrap(body, 4.5, 150)
    mn_cols.append((head, bl, 6 + 22 + len(bl) * 8.6 + 10))
MN_H = 26 + 6 + max(h for *_, h in mn_cols) + 10 + 26 + 3 * 20 + 12 + 34

Y_AB = Y_MN + MN_H + 16
ab_lines = [
    "Most commonly viridans streptococci and Staphylococcus aureus. If dental infection or extraction precedes abscess, oral anaerobes commonly involved.",
    "Multiple abscesses are usually from bacteremia; single lesions from contiguous sites: otitis media and mastoiditis → temporal lobe and cerebellum; sinusitis or dental infection → frontal lobe. Toxoplasma reactivation in AIDS.",
]
ab_w = [ln for raw in ab_lines for ln in wrap(raw, 4.7, 880)]
AB_H = 26 + len(ab_w) * 9 + 12

Y_OS = Y_AB + AB_H + 16
os_rows = []
for n, d in osteo:
    nl = wrap(n, 4.5, 250)
    dl = wrap(d, 4.5, 420)
    h = 12 + max(len(nl), len(dl)) * 8.6 + 8
    os_rows.append((nl, dl, h))
OS_H = 26 + 26 + sum(h for *_, h in os_rows) + 6 * len(os_rows) + 12 + 34

Y_FOOT = Y_OS + OS_H + 18
TOTAL = Y_FOOT + len(foot_w) * 12 + 16

# ============ emit ============
a('export function SystemsBugMatrix() {')
a('  const w = 980;')
a(f'  const h = {TOTAL};')
a('  return (')
a(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="Bugs by system, an original KYP matrix. THE DIARRHEA SPLIT: BLOODY — Campylobacter (comma or S-shaped, 42 degrees), E histolytica (amebic dysentery, liver abscess), enterohemorrhagic E coli O157:H7 (Shiga toxin, HUS), enteroinvasive E coli (invades colonic mucosa), nontyphoidal Salmonella (lactose negative, flagellar, poultry and eggs), Shigella (lactose negative, very low ID50, Shiga toxin, human only, bacillary dysentery), Y enterocolitica (day care, pseudoappendicitis). WATERY — C difficile (pseudomembranous colitis, antibiotics and PPIs), C perfringens (also gas gangrene), enterotoxigenic E coli (travelers diarrhea, LT and ST toxins), Giardia and Cryptosporidium, V cholerae (comma-shaped, rice-water, infected seafood), the viruses (norovirus most common in developed countries, rotavirus down with vaccination, enteric adenovirus). THE PNEUMONIA LADDER: neonates — group B strep and E coli; children — RSV, Mycoplasma, C trachomatis infants, C pneumoniae school-aged, S pneumoniae; young adults — Mycoplasma, C pneumoniae, S pneumoniae, viruses; middle adults — S pneumoniae, H influenzae, anaerobes, viruses, Mycoplasma; elderly — S pneumoniae, influenza, anaerobes, H influenzae, gram-negative rods; with the special groups (alcohol with Klebsiella and aspiration anaerobes; drug use; atypicals; cystic fibrosis with Pseudomonas and Burkholderia; immunocompromised with P jirovecii; healthcare-associated; postviral; COPD). THE MENINGITIS LADDER: newborn — group B strep, E coli, Listeria; children — S pneumoniae, N meningitidis, H influenzae type b, GBS, enteroviruses; 6 to 60 — S pneumoniae, N meningitidis, enteroviruses, HSV; 60 plus — S pneumoniae, N meningitidis, H influenzae, GBS, Listeria. Empiric: ceftriaxone and vancomycin, ampicillin if Listeria, acyclovir if encephalitis. CSF: bacterial — raised pressure, PMNs, raised protein, low glucose; fungal and TB — raised pressure, lymphocytes, raised protein, low glucose; viral — lymphocytes, normal glucose. BRAIN ABSCESS: viridans and S aureus most common; multiple from bacteremia, single from contiguous sites (otitis and mastoiditis to temporal lobe and cerebellum; sinusitis and dental to frontal lobe); Toxoplasma in AIDS. OSTEOMYELITIS: S aureus most common overall; sickle cell — Salmonella; prosthetic joint — S aureus and S epidermidis; vertebral — S aureus and TB (Pott); cat and dog bites — Pasteurella; drug use — S aureus, Pseudomonas, Candida" className="min-w-[940px]">')

# header
a('      {/* header */}')
a('      <g>')
a(f'        {R(24, Y_HDR, 932, 46, "fill-card stroke-border", rx="12", sw="1.4")}')
a(T(42, Y_HDR + 28, 11, "fill-foreground", "Bugs by system — diarrhea, pneumonia, meningitis, abscess, osteomyelitis (original KYP redraw)", weight="800"))
a(f'        {R(748, Y_HDR + 10, 208, 18, "fill-brand-soft", rx="9")}')
a(T(852, Y_HDR + 23, 7.6, "fill-brand", "the systems matrices", weight="800", anchor="middle"))
a('      </g>')

# diarrhea split
a('      {/* ===== THE DIARRHEA SPLIT ===== */}')
a('      <g>')
a(f'        {R(36, Y_DIA, 908, DIA_H, "fill-secondary/40 stroke-brand", rx="14", sw="1.5")}')
a(T(52, Y_DIA + 20, 9, "fill-foreground", "Bugs causing diarrhea — the bloody/watery split (book 175)", weight="800"))
for x, cw, ch, cls in [(52, 426, "BLOODY", "fill-emergency"), (490, 438, "WATERY", "fill-brand")]:
    a(f'        {R(x, Y_DIA + 30, cw, 20, cls, rx="4")}')
    a(T(x + cw / 2, Y_DIA + 44, 6.4, "fill-card", ch, weight="800", anchor="middle", budget_w=cw - 10))
yy1 = Y_DIA + 58
for n, dl, hh, cls in dia_rows[:7]:
    a(f'        {R(52, yy1, 426, hh, "fill-secondary", rx="4")}')
    a(T(58, yy1 + 11, 5.2, cls, n, weight="800", budget_w=118))
    for j, ln in enumerate(dl):
        a(T(182, yy1 + 11 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=292))
    yy1 += hh + 6
yy2 = Y_DIA + 58
for n, dl, hh, cls in dia_rows[7:]:
    a(f'        {R(490, yy2, 438, hh, "fill-secondary", rx="4")}')
    a(T(496, yy2 + 11, 5.2, cls, n, weight="800", budget_w=124))
    a(f'        {T(626, yy2 + 11, 4.5, "fill-muted-foreground", dl[0], budget_w=296)}')
    for j, ln in enumerate(dl[1:]):
        a(T(626, yy2 + 19.6 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=296))
    yy2 += hh + 6
a('      </g>')

# pneumonia
a('      {/* ===== THE PNEUMONIA LADDER ===== */}')
a('      <g>')
a(f'        {R(36, Y_PN, 908, PN_H, "fill-card stroke-border", rx="14", sw="1.4")}')
a(T(52, Y_PN + 20, 9, "fill-foreground", "Common causes of pneumonia — the age ladder + special groups (book 175)", weight="800"))
x = 52
for head, bl, hh in pn_cols:
    a(f'        {R(x, Y_PN + 32, 170, hh, "fill-secondary", rx="6")}')
    a(T(x + 85, Y_PN + 46, 5.4, "fill-foreground", head, weight="800", anchor="middle", budget_w=160))
    yy = Y_PN + 60
    for ln in bl:
        a(T(x + 7, yy, 4.5, "fill-muted-foreground", ln, budget_w=156))
        yy += 8.6
    x += 178
yy = Y_PN + 32 + max(h for *_, h in pn_cols) + 12
a(f'        {R(52, yy, 876, 20, "fill-secondary", rx="4")}')
a(T(490, yy + 14, 6.0, "fill-brand", "SPECIAL GROUPS", weight="800", anchor="middle", budget_w=860))
yy += 26
for i, (n, dl, hh) in enumerate(sp_rows):
    a(f'        {R(52, yy, 876, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(58, yy + 11, 5.0, "fill-emergency", n, weight="800", budget_w=170))
    for j, ln in enumerate(dl):
        a(T(240, yy + 11 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=680))
    yy += hh + 4
a('      </g>')

# meningitis + CSF
a('      {/* ===== THE MENINGITIS LADDER + CSF ===== */}')
a('      <g>')
a(f'        {R(36, Y_MN, 908, MN_H, "fill-secondary/40 stroke-brand", rx="14", sw="1.5")}')
a(T(52, Y_MN + 20, 9, "fill-foreground", "Common causes of meningitis + the CSF key (book 176)", weight="800"))
x = 52
for head, bl, hh in mn_cols:
    a(f'        {R(x, Y_MN + 32, 210, hh, "fill-secondary", rx="6")}')
    a(T(x + 105, Y_MN + 46, 5.4, "fill-foreground", head, weight="800", anchor="middle", budget_w=200))
    yy = Y_MN + 60
    for ln in bl:
        a(T(x + 7, yy, 4.5, "fill-muted-foreground", ln, budget_w=196))
        yy += 8.6
    x += 218
csf_y = Y_MN + 32 + max(h for *_, h in mn_cols) + 10
for xx, cw, ch in [(52, 180, "TYPE"), (240, 140, "OPENING PRESSURE"), (388, 140, "CELL TYPE"), (536, 120, "PROTEIN"), (664, 120, "GLUCOSE")]:
    a(f'        {R(xx, csf_y, cw, 20, "fill-secondary", rx="4")}')
    a(T(xx + cw / 2, csf_y + 14, 5.4, "fill-foreground", ch, weight="800", anchor="middle", budget_w=cw - 8))
yy = csf_y + 26
for i, (t, op, ct, pr, gl) in enumerate(csf):
    a(f'        {R(52, yy, 732, 20, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(58, yy + 14, 5.2, "fill-emergency", t, weight="800", budget_w=170))
    a(T(310, yy + 14, 5.0, "fill-foreground", op, anchor="middle", budget_w=130))
    a(T(458, yy + 14, 5.0, "fill-foreground", ct, anchor="middle", budget_w=130))
    a(T(596, yy + 14, 5.0, "fill-foreground", pr, anchor="middle", budget_w=110))
    a(T(724, yy + 14, 5.0, "fill-foreground", gl, anchor="middle", budget_w=110))
    yy += 20
a('      </g>')

# empiric strip
a('      {/* empiric strip */}')
a('      <g>')
emp = "EMPIRIC: ceftriaxone + vancomycin (add AMPICILLIN if Listeria suspected; add ACYCLOVIR if viral encephalitis suspected). Viral causes: enteroviruses (esp. coxsackievirus), HSV-2 (HSV-1 = encephalitis), HIV, West Nile (also encephalitis), VZV; in HIV — Cryptococcus. GBS meningitis ↓ with screening + prophylaxis; H influenzae ↓ with conjugate vaccines (cases usually in unimmunized children)."
emp_w = wrap(emp, 4.7, 860)
yy = yy + 8
a(f'        {R(52, yy, 876, 10 + len(emp_w) * 9 + 8, "fill-card stroke-border", rx="6", sw="0.9")}')
for j, ln in enumerate(emp_w):
    a(T(58, yy + 14 + j * 9, 4.7, "fill-muted-foreground", ln, budget_w=864))
a('      </g>')

# brain abscess
a('      {/* ===== BRAIN ABSCESS ===== */}')
a('      <g>')
a(f'        {R(36, Y_AB, 908, AB_H, "fill-card stroke-border", rx="14", sw="1.4")}')
a(T(52, Y_AB + 20, 9, "fill-foreground", "Infections causing brain abscess — the routing rules (book 176)", weight="800"))
yy = Y_AB + 36
for ln in ab_w:
    a(T(58, yy, 4.7, "fill-muted-foreground", ln, budget_w=880))
    yy += 9
a('      </g>')

# osteomyelitis
a('      {/* ===== OSTEOMYELITIS ===== */}')
a('      <g>')
a(f'        {R(36, Y_OS, 908, OS_H, "fill-secondary/40 stroke-brand", rx="14", sw="1.5")}')
a(T(52, Y_OS + 20, 9, "fill-foreground", "Osteomyelitis — the risk-factor map (book 176)", weight="800"))
for xx, cw, ch in [(52, 260, "RISK FACTOR"), (318, 462, "ASSOCIATED INFECTION")]:
    a(f'        {R(xx, Y_OS + 30, cw, 20, "fill-secondary", rx="4")}')
    a(T(xx + 6, Y_OS + 44, 5.6, "fill-foreground", ch, weight="800", budget_w=cw - 10))
yy = Y_OS + 58
for i, (nl, dl, hh) in enumerate(os_rows):
    a(f'        {R(52, yy, 728, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    for j, ln in enumerate(nl):
        a(T(58, yy + 11 + j * 8.6, 4.5, "fill-foreground", ln, weight="700", budget_w=250))
    for j, ln in enumerate(dl):
        a(T(324, yy + 11 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=420))
    yy += hh + 6
imx = "ESR and CRP: sensitive, not specific. Radiographs: insensitive early, useful in chronic disease A (the printed radiograph + MRI pair — described-in-text only). MRI is best for acute infection and anatomy; biopsy or aspiration with culture identifies the organism."
imx_w = wrap(imx, 4.7, 880)
yy += 4
for ln in imx_w:
    a(T(58, yy, 4.7, "fill-muted-foreground", ln, budget_w=880))
    yy += 9
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
    f.write("\n" + "\n".join(L29) + "\n")

bad = [s for s in AUDIT if s[4] > s[3]]
for s in bad:
    print(f"  OVERFLOW {s[0]} fs={s[1]} {s[4]}u > {s[3]}u :: {s[2][:50]!r}")
if bad:
    raise SystemExit(f"AUDIT FAILED: {len(bad)}")
print(f"AUDIT PASSED: {len(AUDIT)} text elements (M29); total height {TOTAL}u; diarrhea H={DIA_H}; pneumonia H={PN_H}; meningitis H={MN_H}; osteo H={OS_H}")
