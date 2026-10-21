#!/usr/bin/env python3
"""M15 intracellular-bacteria — generates the VectorBorneRashMap component
into micro.tsx using the M14 width-budget machinery (0.50 u/char/px)."""
U_PER_CHAR_PX = 0.50

def budget(fontsize, width_units):
    return int(width_units / (U_PER_CHAR_PX * fontsize))

def wrap(text, fontsize, width_units):
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

AUDIT = []

def T(x, y, size, cls, text, weight=None, anchor=None, budget_w=None):
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

L = []
def add(s):
    L.append(s)

# ---------------- content ----------------
zoo = [
    ("Anaplasma spp", "Anaplasmosis", "Ixodes ticks (live on deer and mice)"),
    ("Bartonella spp", "Cat scratch disease, bacillary angiomatosis", "Cat scratch"),
    ("Borrelia burgdorferi", "Lyme disease", "Ixodes ticks (live on deer and mice)"),
    ("Borrelia recurrentis", "Relapsing fever", "Louse (recurrent due to variable surface antigens)"),
    ("Brucella spp", "Brucellosis/undulant fever", "Unpasteurized dairy; inhalation of or contact with infected animal tissue or fluids"),
    ("Campylobacter", "Bloody diarrhea", "Feces from infected pets/animals; contaminated meats/foods/hands"),
    ("Chlamydophila psittaci", "Psittacosis", "Parrots, other birds"),
    ("Coxiella burnetii", "Q fever", "Aerosols of cattle/sheep amniotic fluid"),
    ("Ehrlichia chaffeensis", "Ehrlichiosis", "Amblyomma (Lone Star tick)"),
    ("Francisella tularensis", "Tularemia", "Ticks, rabbits, deer flies"),
    ("Leptospira spp", "Leptospirosis", "Animal urine in water; recreational water use"),
    ("Mycobacterium leprae", "Leprosy", "Humans with lepromatous leprosy; armadillo (rare)"),
    ("Pasteurella multocida", "Cellulitis, osteomyelitis", "Animal bite, cats, dogs"),
    ("Rickettsia prowazekii", "Epidemic typhus", "Human to human via human body louse"),
    ("Rickettsia rickettsii", "Rocky Mountain spotted fever", "Dermacentor (dog tick)"),
    ("Rickettsia typhi", "Endemic typhus", "Fleas"),
    ("Salmonella spp (except S typhi)", "Diarrhea (which may be bloody), vomiting, fever, abdominal cramps", "Reptiles and poultry"),
    ("Yersinia pestis", "Plague", "Fleas (rats and prairie dogs are reservoirs)"),
]
rash_common = [
    ("ROCKY MOUNTAIN SPOTTED FEVER", "Rickettsia rickettsii, vector is tick. Despite its name, disease occurs primarily in the South Atlantic states, especially North Carolina. Rash typically starts at wrists and ankles and then spreads to trunk, palms, and soles. Classic triad—headache, fever, rash (vasculitis)."),
    ("TYPHUS", "Endemic (fleas)—R typhi. Epidemic (human body louse)—R prowazekii. Rash starts centrally and spreads out, sparing palms and soles."),
]
rash_rare = [
    ("EHRLICHIOSIS", "Ehrlichia, vector is tick. Monocytes with morulae (mulberrylike inclusions) in cytoplasm."),
    ("ANAPLASMOSIS", "Anaplasma, vector is tick. Granulocytes with morulae in cytoplasm."),
    ("Q FEVER", "Coxiella burnetii, no arthropod vector. Bacterium inhaled as aerosols from cattle/sheep amniotic fluid. Presents with headache, cough, flulike symptoms, pneumonia, possibly in combination with hepatitis. Common cause of culture ⊝ endocarditis."),
]
myco = [
    ("THE CLINICAL PICTURE", "Classic cause of atypical “walking pneumonia” (insidious onset, headache, nonproductive cough, patchy or diffuse interstitial infiltrate, macular rash). Occurs frequently in those <30 years old; outbreaks in military recruits, prisons, colleges. Treatment: macrolides, doxycycline, or fluoroquinolone (penicillin ineffective since Mycoplasma has no cell wall)."),
    ("THE LAB RULES", "Not seen on Gram stain. Pleomorphic. Bacterial membrane contains sterols for stability. Grown on Eaton agar. CXR appears more severe than patient presentation. High titer of cold agglutinins (IgM), which can agglutinate RBCs."),
]
serotypes = [
    ("Types A, B, and C", "Chronic infection, cause blindness due to follicular conjunctivitis in resource-limited areas."),
    ("Types D–K", "Urethritis/PID, neonatal pneumonia (staccato cough) with eosinophilia, neonatal conjunctivitis (1-2 weeks after birth). Neonatal disease can be acquired during vaginal birth if pregnant patient is infected."),
    ("Types L1, L2, and L3", "Lymphogranuloma venereum—small, painless ulcers on genitals, then swollen, painful inguinal lymph nodes that ulcerate (buboes). Treat with doxycycline."),
]
chlamydia_main = [
    "Chlamydiae cannot make their own ATP. They are obligate intracellular organisms that cause mucosal infections. 2 forms:",
    "ELEMENTARY BODY (small, dense) is infectious and enters cell via endocytosis; transforms into reticulate body. RETICULATE BODY replicates in cell by fission; reorganizes into elementary bodies.",
    "Chlamydia trachomatis causes neonatal and follicular adult conjunctivitis, nongonococcal urethritis, PID, and reactive arthritis. Chlamydophila pneumoniae and Chlamydophila psittaci cause atypical pneumonia; transmitted by aerosol.",
    "Chlamydial cell wall lacks classic peptidoglycan (due to reduced muramic acid), rendering β-lactam antibiotics ineffective. C psittaci has an avian reservoir (parrots).",
    "Lab diagnosis: PCR, NAAT. Cytoplasmic inclusions (reticulate bodies) seen on Giemsa or fluorescent antibody–stained smear. Treatment: doxycycline, azithromycin (for pregnant patients). Add ceftriaxone if concurrent gonorrhea testing is positive.",
]
gard = [
    "A pleomorphic, gram-variable rod involved in bacterial vaginosis. Presents as a gray vaginal discharge with a fishy smell; nonpainful (vs vaginitis). Associated with sexual activity, but not sexually transmitted. Bacterial vaginosis is also characterized by overgrowth of certain anaerobic bacteria in vagina (due to ↓ lactobacilli).",
    "Clue cells (vaginal epithelial cells covered with Gardnerella) have stippled appearance along outer margin (photo A, described-in-text only). Amine whiff test—mixing discharge with 10% KOH enhances fishy odor. Vaginal pH >4.5 during infection. Treatment: metronidazole or clindamycin.",
]

# ---------------- geometry ----------------
# Panel A: chlamydiae
A_Y = 76
a_main = [ln for raw in chlamydia_main for ln in wrap(raw, 5.0, 856)]
A_H = 24 + len(a_main) * 11 + 14
# serotype cards
sero_lines = [(n, wrap(d, 5.0, 284 - 12)) for n, d in serotypes]
sero_h = 24 + max(len(x) for _, x in sero_lines) * 11 + 12
A_H += 10 + sero_h

# Panel B: zoonotic directory
B_Y = A_Y + A_H + 16
col_w = (150, 300, 410)  # species | disease | transmission
hdr_h = 24
row_h = 0
zoo_wrapped = []
for sp, dz, tx in zoo:
    dzl = wrap(dz, 5.0, 300 - 12)
    txl = wrap(tx, 5.0, 410 - 12)
    h = 16 + max(len(dzl), len(txl)) * 10
    zoo_wrapped.append((sp, dzl, txl, h))
    row_h += h
B_H = 24 + hdr_h + 6 + row_h + 12

# Panel C: rash common / rare + mycoplasma
C_Y = B_Y + B_H + 16
rc = [(n, wrap(d, 5.0, 432 - 14)) for n, d in rash_common]
rr = [(n, wrap(d, 5.0, 432 - 14)) for n, d in rash_rare]
rc_h = 24 + sum(16 + len(x) * 11 + 8 for _, x in rc)
rr_h = 24 + sum(16 + len(x) * 11 + 8 for _, x in rr)
myco_wrapped = [(n, wrap(d, 5.0, 430)) for n, d in myco]
myco_h = 26 + sum(len(x) * 11 + 12 for _, x in myco_wrapped) + 20  # +10: last lab line was landing on the card bottom (1.5u graze)
C_H = 24 + max(rc_h, rr_h) + 12 + myco_h + 8

# Panel D: Gardnerella
D_Y = C_Y + C_H + 16
gard_wrapped = [ln for raw in gard for ln in wrap(raw, 5.2, 856)]
D_H = 24 + len(gard_wrapped) * 12 + 14

# anchors + footer
ANC_Y = D_Y + D_H + 16
anchors_line = "Doxycycline is the rickettsial therapy (all vectors, all stages) · Chlamydiae: doxycycline or azithromycin in pregnancy (+ ceftriaxone only if concurrent gonorrhea) · Mycoplasma: macrolides/doxycycline/fluoroquinolone — penicillin ineffective (no cell wall) · Gardnerella: metronidazole or clindamycin"
anchors_wrapped = wrap(anchors_line, 6.2, 876)
ANC_H = 10 + len(anchors_wrapped) * 13 + 10
FOOT_Y = ANC_Y + ANC_H + 14
footer = [
    "Original KYP redraw of the source's chlamydiae life-cycle section (the shared pdf 168's lower block — the Chlamydiae section is M15's per the page boundary; the diagnosing-syphilis tree above it is M14's), the 17-row zoonotic directory, the RASH COMMON / RASH RARE split, and the Gardnerella block (pdf 168-170 / book 146-148).",
    "The printed images (the chlamydial follicular-conjunctivitis photo, the Gardnerella clue cells, the RMSF wrist rash, the monocyte morulae of ehrlichiosis, the granulocyte morulae of anaplasmosis, and the pleomorphic Mycoplasma) are raster — COPYRIGHTED,",
    "described-in-text only. FA's printed mnemonics (Chlamys = cloak; ABC = Africa, Blindness, Chronic; D-K = everything else; you drive CARS using your palms and soles; Rickettsii on the wrists, typhus on the trunk; MEGA; the Quite Complicated bug; cold without a coat) are NOT reproduced — verification only, in the note's table block.",
]
footer_wrapped = [ln for raw in footer for ln in wrap(raw, 7.2, 944)]
TOTAL_H = FOOT_Y + len(footer_wrapped) * 12 + 16

# ---------------- emit ----------------
add('export function VectorBorneRashMap() {')
add('  const w = 980;')
add(f'  const h = {TOTAL_H};')
add('  return (')
add(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="Intracellular and vector-borne bacteria, an original KYP rash map. THE CHLAMYDIAE: obligate intracellular organisms that cannot make their own ATP, with the elementary body (small, dense, infectious, entering by endocytosis) transforming into the reticulate body (replicating by fission, reorganizing into elementary bodies); the cell wall lacks classic peptidoglycan so beta-lactams are ineffective; Chlamydia trachomatis causes neonatal and follicular adult conjunctivitis, nongonococcal urethritis, PID, and reactive arthritis; Chlamydophila pneumoniae and psittaci cause aerosol-transmitted atypical pneumonia; the serotypes split into A-B-C (chronic infection, blindness in resource-limited areas), D-K (urethritis and PID, neonatal pneumonia with staccato cough and eosinophilia, neonatal conjunctivitis 1-2 weeks after birth via vaginal birth), and L1-L3 (lymphogranuloma venereum with buboes); lab is PCR/NAAT with cytoplasmic inclusions on Giemsa or fluorescent antibody stain; treatment doxycycline or azithromycin in pregnancy. THE ZOONOTIC DIRECTORY: 17 species-disease-transmission rows from Anaplasma through Yersinia pestis. RASH COMMON: Rocky Mountain spotted fever (Rickettsia rickettsii, tick vector, primarily the South Atlantic states especially North Carolina; rash starts at wrists and ankles then spreads to trunk, palms, and soles; the classic triad of headache, fever, and rash is a vasculitis) and typhus (endemic from fleas — R typhi; epidemic from the human body louse — R prowazekii; rash starts centrally and spreads out, sparing palms and soles). RASH RARE: ehrlichiosis (Ehrlichia, tick; monocytes with morulae), anaplasmosis (Anaplasma, tick; granulocytes with morulae), and Q fever (Coxiella burnetii, no arthropod vector, aerosols of cattle and sheep amniotic fluid; headache, cough, flulike symptoms, pneumonia with possible hepatitis; a common cause of culture-negative endocarditis). MYCOPLASMA PNEUMONIAE: atypical walking pneumonia under 30 with outbreaks in military recruits, prisons, and colleges; no cell wall so penicillin is ineffective; not seen on Gram stain; pleomorphic with sterols in the membrane; grown on Eaton agar; CXR more severe than the presentation; cold agglutinins (IgM) agglutinating RBCs; macrolides, doxycycline, or fluoroquinolones. GARDNERELLA VAGINALIS: the pleomorphic gram-variable rod of bacterial vaginosis — gray fishy nonpainful discharge, anaerobic overgrowth with reduced lactobacilli, clue cells with stippled margins, whiff test with KOH, pH above 4.5; metronidazole or clindamycin" className="min-w-[940px]">')
# header
add('      {/* header */}')
add('      <g>')
add('        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />')
add(T(42, 42, 11, "fill-foreground", "Intracellular & vector-borne bacteria — the rash map (original KYP redraw)", weight="800"))
add('        <rect x="704" y="24" width="228" height="18" rx="9" className="fill-brand-soft" />')
add(T(818, 37, 7.6, "fill-brand", "chlamydiae · zoonoses · rash · mycoplasma", weight="800", anchor="middle"))
add('      </g>')

# Panel A: chlamydiae
add('      {/* ===== THE CHLAMYDIAE ===== */}')
add('      <g>')
add(f'        <rect x="36" y="{A_Y}" width="908" height="{A_H}" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />')
add(T(52, A_Y + 22, 9, "fill-foreground", "THE CHLAMYDIAE — obligate intracellular, cannot make their own ATP (the shared page 168’s lower block; M15’s per the boundary)", weight="800"))
yy = A_Y + 38
for ln in a_main:
    add(T(52, yy, 5.0, "fill-muted-foreground", ln, budget_w=856)); yy += 11
yy += 6
sero_x = [(52, 284), (348, 284), (644, 284)]
for (n, lines), (x, cw) in zip(sero_lines, sero_x):
    add(f'        <rect x="{x}" y="{yy}" width="{cw}" height="{sero_h}" rx="8" className="fill-card stroke-border" strokeWidth="1" />')
    add(T(x + 10, yy + 16, 6.4, "fill-brand", n, weight="800"))
    for j, ln in enumerate(lines):
        add(T(x + 10, yy + 30 + j * 11, 5.0, "fill-muted-foreground", ln, budget_w=cw - 12))
add('      </g>')

# Panel B: zoonotic directory
add('      {/* ===== THE ZOONOTIC DIRECTORY ===== */}')
add('      <g>')
add(f'        <rect x="36" y="{B_Y}" width="908" height="{B_H}" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />')
add(T(52, B_Y + 22, 9, "fill-foreground", "THE ZOONOTIC DIRECTORY — zoonosis: infectious disease transmitted between animals and humans (17 rows, verbatim)", weight="800"))
hx = 52 + 150 + 6
add(f'        <rect x="52" y="{B_Y + 32}" width="150" height="{hdr_h - 6}" rx="4" className="fill-secondary" />')
add(T(56, B_Y + 44, 6.0, "fill-foreground", "SPECIES", weight="800"))
add(f'        <rect x="{52 + 156}" y="{B_Y + 32}" width="300" height="{hdr_h - 6}" rx="4" className="fill-secondary" />')
add(T(52 + 162, B_Y + 44, 6.0, "fill-foreground", "DISEASE", weight="800"))
add(f'        <rect x="{52 + 462}" y="{B_Y + 32}" width="410" height="{hdr_h - 6}" rx="4" className="fill-secondary" />')
add(T(52 + 468, B_Y + 44, 6.0, "fill-foreground", "TRANSMISSION AND SOURCE", weight="800"))
yy = B_Y + 32 + hdr_h + 2
for i, (sp, dzl, txl, h) in enumerate(zoo_wrapped):
    zcls = "fill-secondary/60" if i % 2 else "fill-secondary"
    add(f'        <rect x="52" y="{yy}" width="872" height="{h}" rx="4" className="{zcls}" />')
    add(T(56, yy + 12, 5.2, "fill-foreground", sp, weight="700", budget_w=144))
    for j, ln in enumerate(dzl):
        add(T(52 + 162, yy + 12 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=288))
    for j, ln in enumerate(txl):
        add(T(52 + 468, yy + 12 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=398))
    yy += h
add('      </g>')

# Panel C: rash
add('      {/* ===== RASH COMMON vs RASH RARE ===== */}')
add('      <g>')
add(f'        <rect x="36" y="{C_Y}" width="908" height="{C_H}" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />')
add(T(52, C_Y + 22, 9, "fill-foreground", "RASH COMMON vs RASH RARE — the rickettsial split (treatment: doxycycline)", weight="800"))
add(f'        <rect x="52" y="{C_Y + 32}" width="432" height="{rc_h}" rx="8" className="fill-secondary" />')
add(T(62, C_Y + 48, 7, "fill-emergency", "RASH COMMON", weight="800"))
yy = C_Y + 64
for n, lines in rc:
    add(T(62, yy, 6.0, "fill-foreground", n, weight="800")); yy += 16
    for ln in lines:
        add(T(62, yy, 5.0, "fill-muted-foreground", ln, budget_w=418)); yy += 11
    yy += 8
add(f'        <rect x="496" y="{C_Y + 32}" width="432" height="{rr_h}" rx="8" className="fill-secondary" />')
add(T(506, C_Y + 48, 7, "fill-brand", "RASH RARE", weight="800"))
yy = C_Y + 64
for n, lines in rr:
    add(T(506, yy, 6.0, "fill-foreground", n, weight="800")); yy += 16
    for ln in lines:
        add(T(506, yy, 5.0, "fill-muted-foreground", ln, budget_w=418)); yy += 11
    yy += 8
my_y = C_Y + 32 + max(rc_h, rr_h) + 12
add(f'        <rect x="52" y="{my_y}" width="876" height="{myco_h}" rx="8" className="fill-secondary/40 stroke-brand" strokeWidth="1" />')
add(T(62, my_y + 16, 7, "fill-emergency", "MYCOPLASMA PNEUMONIAE — the atypical closer (rash rare)", weight="800"))
yy = my_y + 32
for n, lines in myco_wrapped:
    add(T(62, yy, 6.0, "fill-brand", n, weight="800")); yy += 14
    for ln in lines:
        add(T(62, yy, 5.0, "fill-muted-foreground", ln, budget_w=430)); yy += 11
    yy += 12
add('      </g>')

# Panel D: Gardnerella
add('      {/* ===== GARDNERELLA ===== */}')
add('      <g>')
add(f'        <rect x="36" y="{D_Y}" width="908" height="{D_H}" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />')
add(T(52, D_Y + 22, 9, "fill-foreground", "GARDNERELLA VAGINALIS — bacterial vaginosis (book 147, page ownership)", weight="800"))
yy = D_Y + 40
for ln in gard_wrapped:
    add(T(52, yy, 5.2, "fill-muted-foreground", ln, budget_w=856)); yy += 12
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
bad = [(s, t, bw, au) for s, t, bw, au in AUDIT if au > bw]
for s, t, bw, au in bad:
    print(f"  OVERFLOW fontSize={s} actual={au}u > budget={bw}u :: {t[:60]!r}")
if bad:
    raise SystemExit(f"AUDIT FAILED: {len(bad)} overflowing lines")
print(f"AUDIT PASSED: {len(AUDIT)} text elements all within budget")
print(f"geometry: A({A_Y},{A_H}) B({B_Y},{B_H}) C({C_Y},{C_H}) D({D_Y},{D_H}) anchors({ANC_Y},{ANC_H}) footer@{FOOT_Y} total h={TOTAL_H}")

code = "\n".join(L) + "\n"
with open('src/components/kyp/usmle/visuals/micro.tsx', 'a', encoding='utf8') as f:
    f.write("\n" + code)
print("component appended to micro.tsx")
