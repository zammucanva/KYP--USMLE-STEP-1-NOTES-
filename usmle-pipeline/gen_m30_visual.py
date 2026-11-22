#!/usr/bin/env python3
"""M30 bugs-by-system-rash-std-torch — generates the SystemsBugMatrix2
component into micro.tsx (width-budget machinery, 0.50 u/char/px). Source:
pdf 199-204 / books 177-182. The red rashes of childhood directory, the UTI
species ladder + cystitis/pyelonephritis + diagnostic markers, the common
vaginal infections triad, the STD directory with the pain axis, the TORCH
maternal-fetal map with the calcification key, and the healthcare-associated
routing table. All 20 clinical photos (books 177-181) are raster, COPYRIGHTED,
described-in-text only."""
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
        AUDIT.append(("M30", size, text, budget_w, round(len(text) * U * size, 1)))
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

L30 = []
a = L30.append

# ============ content ============
rash = [
    ("Coxsackievirus type A", "Hand-foot-mouth disease",
     "Oval-shaped vesicles on palms and soles; vesicles and ulcers in oral mucosa (herpangina)"),
    ("Human herpesvirus 6", "Roseola (exanthem subitum)",
     "Asymptomatic rose-colored macules appear on body after several days of high fever; can present with febrile seizures; usually affects infants"),
    ("Measles virus", "Measles (rubeola)",
     "Confluent rash beginning at head and moving down; preceded by cough, coryza, conjunctivitis, and blue-white (Koplik) spots on buccal mucosa"),
    ("Parvovirus B19", "Erythema infectiosum (fifth disease)",
     "\u201cSlapped cheek\u201d rash on face"),
    ("Rubella virus", "Rubella",
     "Pink macules and papules begin at head and move down, remain discrete \u2192 fine desquamating truncal rash; postauricular lymphadenopathy"),
    ("Streptococcus pyogenes", "Scarlet fever",
     "Sore throat, Circumoral pallor, group A strep, Rash (sandpaperlike, from neck to trunk and extremities), Lymphadenopathy, Erythrogenic toxin, strawberry Tongue (SCARLET)"),
    ("Varicella-zoster virus", "Chickenpox",
     "Vesicular rash begins on trunk, spreads to face and extremities with lesions of different stages"),
]
rash_key = ("THE TOPOGRAPHY KEY (original KYP synthesis): palms-and-soles vesicles = coxsackie A \u00b7 trunk-first crops of different stages = VZV \u00b7 "
            "head-down CONFLUENT with the Koplik prodrome = measles \u00b7 head-down DISCRETE with postauricular LAD = rubella \u00b7 fever first, then rose macules = HHV-6 \u00b7 "
            "slapped cheek = parvovirus B19 \u00b7 sandpaper + strawberry tongue = scarlet fever (the bacterial one \u2014 erythrogenic toxin).")

uti_intro = [
    ("CYSTITIS", "Dysuria, frequency, urgency, suprapubic pain, and WBCs (but not WBC casts) in urine. Primarily caused by ascension of microbes from urethra to bladder."),
    ("PYELONEPHRITIS", "Fever, chills, flank pain, costovertebral angle tenderness, hematuria, and WBC casts. Ascension to kidney."),
]
uti_risk = ("10 times more common in females (shorter urethras colonized by fecal microbiota). Risk factors: obstruction (eg, kidney stones, enlarged prostate), kidney surgery, catheterization, congenital GU malformation (eg, vesicoureteral reflux), diabetes, pregnancy.")
uti_species = [
    ("Escherichia coli", "Leading cause of UTI. Colonies show strong pink lactose-fermentation on MacConkey agar."),
    ("Staphylococcus saprophyticus", "2nd leading cause of UTI, particularly in young, sexually active females."),
    ("Klebsiella pneumoniae", "3rd leading cause of UTI. Large mucoid capsule and viscous colonies."),
    ("Serratia marcescens", "Some strains produce a red pigment; often healthcare-associated and drug resistant."),
    ("Enterococcus", "Often healthcare-associated and drug resistant."),
    ("Proteus mirabilis", "Motility causes \u201cswarming\u201d on agar; associated with struvite stones. Produces urease."),
    ("Pseudomonas aeruginosa", "Blue-green pigment and fruity odor; usually healthcare-associated and drug resistant."),
]
uti_markers = "DIAGNOSTIC MARKERS: Leukocyte esterase = evidence of WBC activity \u00b7 Nitrite test = reduction of urinary nitrates by gram \u229d bacterial species (eg, E coli)."

vag = [
    ("Bacterial vaginosis", "fill-brand",
     "No inflammation; Thin, white discharge with fishy odor",
     "Clue cells (bacteria-coated epithelial cells); pH >4.5; \u2295 KOH whiff test",
     "Metronidazole or clindamycin"),
    ("Trichomonas vaginitis", "fill-emergency",
     "Inflammation (\u201cstrawberry cervix\u201d); Frothy, yellow-green, foul-smelling discharge",
     "Motile pear-shaped trichomonads; pH >4.5",
     "Metronidazole; Treat sexual partner(s)"),
    ("Candida vulvovaginitis", "fill-brand",
     "Inflammation; Thick, white, \u201ccottage cheese\u201d discharge",
     "Pseudohyphae; pH normal (4.0\u20134.5)",
     "Azoles"),
]

std = [
    ("AIDS", "Opportunistic infections, Kaposi sarcoma, lymphoma", "HIV"),
    ("Chancroid", "Painful genital ulcer(s) with exudate, inguinal adenopathy", "Haemophilus ducreyi (it\u2019s so painful, you \u201cdo cry\u201d)"),
    ("Chlamydia", "Urethritis, cervicitis, epididymitis, conjunctivitis, reactive arthritis, PID", "Chlamydia trachomatis (D\u2013K)"),
    ("Condylomata acuminata", "Genital warts, koilocytes", "HPV-6 and -11"),
    ("Herpes genitalis", "Painful penile, vulvar, or cervical vesicles and ulcers with bilateral tender inguinal lymphadenopathy; can cause systemic symptoms such as fever, headache, myalgia", "HSV-2, less commonly HSV-1"),
    ("Gonorrhea", "Urethritis, cervicitis, PID, prostatitis, epididymitis, arthritis, creamy purulent discharge", "Neisseria gonorrhoeae"),
    ("Granuloma inguinale (Donovanosis)", "Painless, beefy red ulcer that bleeds readily on contact; uncommon in US", "Klebsiella (Calymmatobacterium) granulomatis; cytoplasmic Donovan bodies (bipolar staining) seen on microscopy"),
    ("Hepatitis B", "Jaundice", "HBV"),
    ("Lymphogranuloma venereum", "Infection of lymphatics; painless genital ulcers, painful lymphadenopathy (ie, buboes)", "C trachomatis (L1-L3)"),
    ("Primary syphilis", "Painless chancre, regional lymphadenopathy", "Treponema pallidum"),
    ("Secondary syphilis", "Fever, diffuse lymphadenopathy, generalized rash, condylomata lata", "Treponema pallidum"),
    ("Tertiary syphilis", "Gummas, tabes dorsalis, general paresis, aortitis, Argyll Robertson pupil", "Treponema pallidum"),
    ("Trichomoniasis", "Vaginitis, strawberry cervix, motile in wet prep", "Trichomonas vaginalis"),
]
std_pain = ("THE PAIN AXIS (original KYP synthesis): PAINFUL genital ulcers \u2014 chancroid (H ducreyi, \u201cdo cry\u201d) and herpes genitalis (HSV-2 vesicles with bilateral TENDER inguinal LAD). "
            "PAINLESS \u2014 primary syphilis (chancre with regional LAD), LGV (painless ulcers, then PAINFUL buboes), granuloma inguinale (beefy red, bleeds readily, Donovan bodies). "
            "PID (book 181): the top bugs \u2014 C trachomatis (subacute, often undiagnosed; the most common bacterial STI in the US) and N gonorrhoeae (acute).")

torch_intro = ("ToRCHHeS \u2014 microbes that may pass from mother to fetus. Transmission is transplacental in most cases, or via vaginal delivery (especially HSV-2). "
               "Nonspecific signs common to many ToRCHHeS infections include hepatosplenomegaly, jaundice, thrombocytopenia, and growth restriction. "
               "Other important agents: S agalactiae (GBS), E coli, and Listeria monocytogenes \u2014 all causes of meningitis in neonates. Parvovirus B19 causes hydrops fetalis.")
torch = [
    ("Toxoplasma gondii", "Cat feces or ingestion of undercooked meat", "Usually asymptomatic; lymphadenopathy (rarely)",
     "Classic triad: chorioretinitis, hydrocephalus, and intracranial calcifications, +/\u2212 \u201cblueberry muffin\u201d rash"),
    ("Rubella", "Respiratory droplets", "Rash, lymphadenopathy, polyarthritis, polyarthralgia",
     "Classic triad: abnormalities of eye (cataracts) and ear (deafness) and congenital heart disease (PDA); +/\u2013 \u201cblueberry muffin\u201d rash. \u201cI (eye) \u2665 ruby (rubella) earrings\u201d [printed \u2014 verification only]"),
    ("Cytomegalovirus", "Sexual contact, organ transplants", "Usually asymptomatic; mononucleosis-like illness",
     "Hearing loss, seizures, petechial rash, \u201cblueberry muffin\u201d rash, chorioretinitis, periventricular calcifications"),
    ("HIV", "Sexual contact, needlestick", "Variable presentation depending on CD4+ cell count",
     "Recurrent infections, chronic diarrhea"),
    ("Herpes simplex virus-2", "Skin or mucous membrane contact", "Usually asymptomatic; herpetic (vesicular) lesions",
     "Meningoencephalitis, herpetic (vesicular) lesions"),
    ("Syphilis", "Sexual contact", "Chancre (1\u00b0) and disseminated rash (2\u00b0) are the two stages likely to result in fetal infection",
     "Often results in stillbirth, hydrops fetalis; if child survives, presents with facial abnormalities (eg, notched teeth, saddle nose, rhinitis, short maxilla), saber shins, CN VIII deafness"),
]
torch_key = ("THE CALCIFICATION KEY (original KYP synthesis): Toxoplasma = INTRACRANIAL calcifications (with hydrocephalus + chorioretinitis) \u00b7 CMV = PERIVENTRICULAR calcifications "
             "(with hearing loss + microcephaly) \u00b7 Rubella = no calcification \u2014 the eye-ear-heart triad (cataracts, deafness, PDA).")

hai = [
    ("Antibiotic use, PPIs", "C difficile", "Watery diarrhea, leukocytosis"),
    ("Aspiration (2\u00b0 to altered mental status, old age)", "Polymicrobial, gram \u229d bacteria, often anaerobes",
     "Right lower lobe infiltrate or right upper/middle lobe (patient recumbent); purulent malodorous sputum"),
    ("Decubitus ulcers, surgical wounds, drains", "S aureus (including MRSA), gram \u229d anaerobes (Bacteroides, Prevotella, Fusobacterium)",
     "Erythema, tenderness, induration, drainage from surgical wound sites"),
    ("Intravascular catheters", "S aureus (including MRSA), S epidermidis (long term)",
     "Erythema, induration, tenderness, drainage from access sites"),
    ("Mechanical ventilation, endotracheal intubation", "Late onset: P aeruginosa, Klebsiella, Acinetobacter, S aureus",
     "New infiltrate on CXR, \u2191 sputum production; sweet odor (Pseudomonas)"),
    ("Exposure to blood products, shared medical equipment, needlesticks", "HBV, HCV", "\u2014"),
    ("Urinary catheterization", "Proteus spp, E coli, Klebsiella (PEcK)",
     "Dysuria, leukocytosis, flank pain or costovertebral angle tenderness"),
    ("Water aerosols", "Legionella",
     "Signs of pneumonia, GI symptoms (diarrhea, nausea, vomiting), neurologic abnormalities"),
]

foot_lines = [
    "Original KYP redraw of the source's Red rashes of childhood, Urinary tract infections, Common vaginal infections, Sexually transmitted infections, TORCH infections, and Healthcare-associated infections tables (pdf 199-204 / books 177-182).",
    "All 20 clinical photos (the rash set A-E book 177; the vaginal set A-D book 178; the STD set A-F book 179; the TORCH set A-C book 180; the PID set A-B book 181) are raster \u2014 COPYRIGHTED, described-in-text only. FA's printed mnemonics (the rubella earrings line; the CMV = Chorioretinitis, Microcephaly, periVentricular line) stay in the note's table block \u2014 verification-only, not redrawn.",
    "The source's banner typo 'MICROCIOLOGY\u2014SYSTEMS' prints on books 177-181. The Bugs affecting unvaccinated children table (book 182) is carried verbatim in the note's table block.",
]
foot_w = [ln for raw in foot_lines for ln in wrap(raw, 7.2, 944)]

# ============ layout ============
Y_HDR = 14

# --- rash panel ---
rash_rows = []
for n, s, p in rash:
    sl = wrap(s, 4.5, 190)
    pl = wrap(p, 4.5, 380)
    h = 12 + max(len(sl), len(pl)) * 8.6 + 8
    rash_rows.append((n, sl, pl, h))
RASH_H = 26 + 22 + sum(h for *_, h in rash_rows) + 7 * 4 + 12 + 30 + 10
rash_key_w = wrap(rash_key, 4.7, 880)
RASH_H = 26 + 22 + sum(h for *_, h in rash_rows) + 7 * 4 + 12 + (10 + len(rash_key_w) * 9 + 8) + 10

# --- uti panel ---
uti_intro_h = 6 + 22 + max(len(wrap(b, 4.5, 320)) for _, b in uti_intro) * 8.6 + 10
uti_risk_w = wrap(uti_risk, 4.7, 860)
uti_sp_rows = []
for n, d in uti_species:
    dl = wrap(d, 4.5, 640)
    h = 12 + len(dl) * 8.6 + 6
    uti_sp_rows.append((n, dl, h))
uti_markers_w = wrap(uti_markers, 4.7, 860)
UTI_H = 26 + uti_intro_h + 10 + (8 + len(uti_risk_w) * 9 + 8) + 12 + 20 + sum(h for *_, h in uti_sp_rows) + 7 * 3 + 10 + (8 + len(uti_markers_w) * 9 + 8) + 10

# --- vaginal panel ---
vag_cards = []
for name, cls, signs, lab, tx in vag:
    sgl = wrap(signs, 4.5, 262)
    lbl = wrap(lab, 4.5, 262)
    txl = wrap(tx, 4.5, 262)
    h = 6 + 22 + 14 + len(sgl) * 8.6 + 8 + 14 + len(lbl) * 8.6 + 8 + 14 + len(txl) * 8.6 + 10
    vag_cards.append((name, cls, sgl, lbl, txl, h))
VAG_H = 26 + max(h for *_ , h in vag_cards) + 12

# --- std panel ---
std_rows = []
for n, f, p in std:
    fl = wrap(f, 4.5, 360)
    pl = wrap(p, 4.5, 260)
    h = 12 + max(len(fl), len(pl)) * 8.6 + 8
    std_rows.append((n, fl, pl, h))
std_pain_w = wrap(std_pain, 4.7, 860)
STD_H = 26 + 22 + sum(h for *_, h in std_rows) + 13 * 3 + 12 + (10 + len(std_pain_w) * 9 + 8) + 10

# --- torch panel ---
torch_intro_w = wrap(torch_intro, 4.7, 860)
torch_rows = []
for n, ma, mm, nm in torch:
    mal = wrap(ma, 4.5, 163)
    mml = wrap(mm, 4.5, 193)
    nml = wrap(nm, 4.5, 292)
    h = 12 + max(len(mal), len(mml), len(nml)) * 8.6 + 8
    torch_rows.append((n, mal, mml, nml, h))
torch_key_w = wrap(torch_key, 4.7, 860)
TORCH_H = 26 + (8 + len(torch_intro_w) * 9 + 8) + 12 + 22 + sum(h for *_, h in torch_rows) + 6 * 3 + 12 + (8 + len(torch_key_w) * 9 + 8) + 10

# --- hai panel ---
hai_rows = []
for n, p, s in hai:
    nl = wrap(n, 4.5, 195)
    pl = wrap(p, 4.5, 288)
    sl = wrap(s, 4.5, 320)
    h = 12 + max(len(nl), len(pl), len(sl)) * 8.6 + 8
    hai_rows.append((nl, pl, sl, h))
HAI_H = 26 + 22 + sum(h for *_, h in hai_rows) + 8 * 3 + 12

Y_RASH = 76
Y_UTI = Y_RASH + RASH_H + 16
Y_VAG = Y_UTI + UTI_H + 16
Y_STD = Y_VAG + VAG_H + 16
Y_TORCH = Y_STD + STD_H + 16
Y_HAI = Y_TORCH + TORCH_H + 16
Y_FOOT = Y_HAI + HAI_H + 18
TOTAL = Y_FOOT + len(foot_w) * 12 + 16

# ============ emit ============
a('export function SystemsBugMatrix2() {')
a('  const w = 980;')
a(f'  const h = {TOTAL};')
a('  return (')
a(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="Bugs by system part two, an original KYP matrix. RED RASHES OF CHILDHOOD: coxsackievirus type A (hand-foot-mouth, oval vesicles on palms and soles, herpangina); human herpesvirus 6 (roseola, rose-colored macules after several days of high fever, febrile seizures, infants); measles (confluent rash head to down, cough coryza conjunctivitis, Koplik spots); parvovirus B19 (fifth disease, slapped cheek); rubella (pink macules and papules head down, discrete, postauricular lymphadenopathy); S pyogenes (scarlet fever, sandpaper rash, strawberry tongue, erythrogenic toxin); VZV (chickenpox, vesicular trunk first, lesions of different stages). URINARY TRACT INFECTIONS: cystitis dysuria frequency urgency suprapubic pain WBCs without casts; pyelonephritis fever chills flank pain CVA tenderness hematuria WBC casts; ten times more common in females; E coli leading cause with pink lactose fermentation on MacConkey; S saprophyticus second in young sexually active females; Klebsiella third with mucoid capsule; Serratia red pigment; Enterococcus; Proteus swarming struvite urease; Pseudomonas blue-green fruity; leukocyte esterase WBC activity; nitrite gram-negative reduction. VAGINAL INFECTIONS: bacterial vaginosis no inflammation thin white fishy clue cells pH over 4.5 positive whiff metronidazole or clindamycin; trichomonas strawberry cervix frothy yellow-green motile pear-shaped pH over 4.5 metronidazole treat partners; candida cottage cheese pseudohyphae pH normal azoles. SEXUALLY TRANSMITTED INFECTIONS: the pain axis - painful chancroid do cry and herpes with tender bilateral nodes; painless syphilis chancre, LGV painless ulcers then painful buboes, granuloma inguinale beefy red Donovan bodies; chlamydia D to K most common bacterial STI; gonorrhea creamy purulent; condylomata HPV 6 and 11 koilocytes; hepatitis B jaundice; trichomoniasis motile wet prep. TORCH: transplacental or vaginal delivery HSV-2; hepatosplenomegaly jaundice thrombocytopenia growth restriction; Toxoplasma cat feces undercooked meat chorioretinitis hydrocephalus intracranial calcifications; rubella droplets cataracts deafness PDA; CMV sexual transplant hearing loss periventricular calcifications; HIV recurrent infections chronic diarrhea; HSV-2 meningoencephalitis vesicles; syphilis stillbirth hydrops notched teeth saddle nose saber shins CN 8 deafness; GBS E coli Listeria neonatal meningitis; parvovirus B19 hydrops fetalis. HEALTHCARE-ASSOCIATED: antibiotics and PPIs C difficile; aspiration polymicrobial anaerobes; wounds S aureus MRSA and anaerobes; catheters S aureus and S epidermidis; ventilation Pseudomonas Klebsiella Acinetobacter; blood products HBV HCV; urinary catheterization PEcK; water aerosols Legionella with GI and neurologic signs" className="min-w-[940px]">')

# header
a('      {/* header */}')
a('      <g>')
a(f'        {R(24, Y_HDR, 932, 46, "fill-card stroke-border", rx="12", sw="1.4")}')
a(T(42, Y_HDR + 28, 11, "fill-foreground", "Bugs by system II \u2014 rashes, urinary, vaginal, STDs, TORCH, nosocomial (original KYP redraw)", weight="800"))
a(f'        {R(748, Y_HDR + 10, 208, 18, "fill-brand-soft", rx="9")}')
a(T(852, Y_HDR + 23, 7.6, "fill-brand", "the systems matrices", weight="800", anchor="middle", budget_w=200))
a('      </g>')

# rash panel
a('      {/* ===== RED RASHES OF CHILDHOOD ===== */}')
a('      <g>')
a(f'        {R(36, Y_RASH, 908, RASH_H, "fill-secondary/40 stroke-brand", rx="14", sw="1.5")}')
a(T(52, Y_RASH + 20, 9, "fill-foreground", "Red rashes of childhood \u2014 the directory (book 177)", weight="800"))
for xx, cw, ch in [(52, 150, "AGENT"), (210, 200, "SYNDROME"), (420, 498, "CLINICAL PRESENTATION")]:
    a(f'        {R(xx, Y_RASH + 30, cw, 18, "fill-secondary", rx="4")}')
    a(T(xx + cw / 2, Y_RASH + 43, 5.4, "fill-foreground", ch, weight="800", anchor="middle", budget_w=cw - 8))
yy = Y_RASH + 54
for i, (n, sl, pl, hh) in enumerate(rash_rows):
    a(f'        {R(52, yy, 866, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(58, yy + 11, 5.0, "fill-emergency", n, weight="800", budget_w=142))
    for j, ln in enumerate(sl):
        a(T(216, yy + 11 + j * 8.6, 4.5, "fill-foreground", ln, budget_w=190))
    for j, ln in enumerate(pl):
        a(T(426, yy + 11 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=488))
    yy += hh + 4
a(f'        {R(52, yy, 866, 10 + len(rash_key_w) * 9 + 8, "fill-card stroke-border", rx="6", sw="0.9")}')
for j, ln in enumerate(rash_key_w):
    a(T(58, yy + 14 + j * 9, 4.7, "fill-muted-foreground", ln, budget_w=864))
a('      </g>')

# uti panel
a('      {/* ===== URINARY TRACT INFECTIONS ===== */}')
a('      <g>')
a(f'        {R(36, Y_UTI, 908, UTI_H, "fill-card stroke-border", rx="14", sw="1.4")}')
a(T(52, Y_UTI + 20, 9, "fill-foreground", "Urinary tract infections \u2014 the syndromes and the species ladder (book 178)", weight="800"))
x = 52
for head, body in uti_intro:
    bl = wrap(body, 4.5, 330)
    hh = 6 + 22 + len(bl) * 8.6 + 10
    a(f'        {R(x, Y_UTI + 32, 340, hh, "fill-secondary", rx="6")}')
    a(T(x + 170, Y_UTI + 46, 5.8, "fill-foreground", head, weight="800", anchor="middle", budget_w=330))
    yy2 = Y_UTI + 60
    for ln in bl:
        a(T(x + 8, yy2, 4.5, "fill-muted-foreground", ln, budget_w=324))
        yy2 += 8.6
    x += 350
uti_risk_y = Y_UTI + 32 + max(6 + 22 + len(wrap(b, 4.5, 330)) * 8.6 + 10 for _, b in uti_intro) + 10
a(f'        {R(52, uti_risk_y, 866, 8 + len(uti_risk_w) * 9 + 8, "fill-secondary", rx="6")}')
for j, ln in enumerate(uti_risk_w):
    a(T(58, uti_risk_y + 14 + j * 9, 4.7, "fill-muted-foreground", ln, budget_w=860))
yy = uti_risk_y + 8 + len(uti_risk_w) * 9 + 8 + 12
a(f'        {R(52, yy, 866, 18, "fill-secondary", rx="4")}')
a(T(58, yy + 13, 5.4, "fill-foreground", "SPECIES", weight="800", budget_w=100))
a(T(240, yy + 13, 5.4, "fill-foreground", "FEATURES", weight="800", budget_w=100))
yy += 24
for i, (n, dl, hh) in enumerate(uti_sp_rows):
    a(f'        {R(52, yy, 866, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(58, yy + 11, 5.0, "fill-brand", n, weight="800", budget_w=172))
    for j, ln in enumerate(dl):
        a(T(240, yy + 11 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=672))
    yy += hh + 3
yy += 7
a(f'        {R(52, yy, 866, 8 + len(uti_markers_w) * 9 + 8, "fill-card stroke-border", rx="6", sw="0.9")}')
for j, ln in enumerate(uti_markers_w):
    a(T(58, yy + 14 + j * 9, 4.7, "fill-muted-foreground", ln, budget_w=860))
a('      </g>')

# vaginal panel
a('      {/* ===== COMMON VAGINAL INFECTIONS ===== */}')
a('      <g>')
a(f'        {R(36, Y_VAG, 908, VAG_H, "fill-secondary/40 stroke-brand", rx="14", sw="1.5")}')
a(T(52, Y_VAG + 20, 9, "fill-foreground", "Common vaginal infections \u2014 the three-way comparison (book 178)", weight="800"))
x = 52
for name, cls, sgl, lbl, txl, hh in vag_cards:
    a(f'        {R(x, Y_VAG + 32, 282, hh, "fill-secondary", rx="6")}')
    a(f'        {R(x, Y_VAG + 32, 282, 20, cls, rx="6")}')
    a(T(x + 141, Y_VAG + 46, 5.6, "fill-card", name, weight="800", anchor="middle", budget_w=272))
    yy3 = Y_VAG + 62
    a(T(x + 8, yy3, 4.4, "fill-foreground", "SIGNS AND SYMPTOMS", weight="800", budget_w=270))
    yy3 += 12
    for ln in sgl:
        a(T(x + 8, yy3, 4.5, "fill-muted-foreground", ln, budget_w=268))
        yy3 += 8.6
    yy3 += 6
    a(T(x + 8, yy3, 4.4, "fill-foreground", "LAB FINDINGS", weight="800", budget_w=270))
    yy3 += 12
    for ln in lbl:
        a(T(x + 8, yy3, 4.5, "fill-muted-foreground", ln, budget_w=268))
        yy3 += 8.6
    yy3 += 6
    a(T(x + 8, yy3, 4.4, "fill-foreground", "TREATMENT", weight="800", budget_w=270))
    yy3 += 12
    for ln in txl:
        a(T(x + 8, yy3, 4.5, "fill-muted-foreground", ln, budget_w=268))
        yy3 += 8.6
    x += 292
a('      </g>')

# std panel
a('      {/* ===== SEXUALLY TRANSMITTED INFECTIONS ===== */}')
a('      <g>')
a(f'        {R(36, Y_STD, 908, STD_H, "fill-card stroke-border", rx="14", sw="1.4")}')
a(T(52, Y_STD + 20, 9, "fill-foreground", "Sexually transmitted infections \u2014 the directory + the pain axis (books 179, 181)", weight="800"))
for xx, cw, ch in [(52, 140, "DISEASE"), (200, 380, "CLINICAL FEATURES"), (588, 330, "PATHOGEN")]:
    a(f'        {R(xx, Y_STD + 30, cw, 18, "fill-secondary", rx="4")}')
    a(T(xx + cw / 2, Y_STD + 43, 5.4, "fill-foreground", ch, weight="800", anchor="middle", budget_w=cw - 8))
yy = Y_STD + 54
for i, (n, fl, pl, hh) in enumerate(std_rows):
    a(f'        {R(52, yy, 866, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(58, yy + 11, 5.0, "fill-emergency", n, weight="800", budget_w=132))
    for j, ln in enumerate(fl):
        a(T(206, yy + 11 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=368))
    for j, ln in enumerate(pl):
        a(T(594, yy + 11 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=320))
    yy += hh + 3
a(f'        {R(52, yy + 6, 866, 10 + len(std_pain_w) * 9 + 8, "fill-card stroke-border", rx="6", sw="0.9")}')
for j, ln in enumerate(std_pain_w):
    a(T(58, yy + 20 + j * 9, 4.7, "fill-muted-foreground", ln, budget_w=864))
a('      </g>')

# torch panel
a('      {/* ===== TORCH INFECTIONS ===== */}')
a('      <g>')
a(f'        {R(36, Y_TORCH, 908, TORCH_H, "fill-secondary/40 stroke-brand", rx="14", sw="1.5")}')
a(T(52, Y_TORCH + 20, 9, "fill-foreground", "TORCH infections \u2014 the maternal-fetal map (book 180)", weight="800"))
a(f'        {R(52, Y_TORCH + 30, 866, 8 + len(torch_intro_w) * 9 + 8, "fill-secondary", rx="6")}')
for j, ln in enumerate(torch_intro_w):
    a(T(58, Y_TORCH + 44 + j * 9, 4.7, "fill-muted-foreground", ln, budget_w=860))
yy = Y_TORCH + 30 + 8 + len(torch_intro_w) * 9 + 8 + 12
for xx, cw, ch in [(52, 160, "AGENT"), (220, 175, "MATERNAL ACQUISITION"), (403, 205, "MATERNAL MANIFESTATIONS"), (616, 302, "NEONATAL MANIFESTATIONS")]:
    a(f'        {R(xx, yy, cw, 18, "fill-secondary", rx="4")}')
    a(T(xx + cw / 2, yy + 13, 5.4, "fill-foreground", ch, weight="800", anchor="middle", budget_w=cw - 8))
yy += 24
for i, (n, mal, mml, nml, hh) in enumerate(torch_rows):
    a(f'        {R(52, yy, 866, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(58, yy + 11, 5.0, "fill-emergency", n, weight="800", budget_w=152))
    for j, ln in enumerate(mal):
        a(T(226, yy + 11 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=163))
    for j, ln in enumerate(mml):
        a(T(409, yy + 11 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=193))
    for j, ln in enumerate(nml):
        a(T(622, yy + 11 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=292))
    yy += hh + 3
yy += 6
a(f'        {R(52, yy, 866, 8 + len(torch_key_w) * 9 + 8, "fill-card stroke-border", rx="6", sw="0.9")}')
for j, ln in enumerate(torch_key_w):
    a(T(58, yy + 14 + j * 9, 4.7, "fill-muted-foreground", ln, budget_w=860))
a('      </g>')

# hai panel
a('      {/* ===== HEALTHCARE-ASSOCIATED INFECTIONS ===== */}')
a('      <g>')
a(f'        {R(36, Y_HAI, 908, HAI_H, "fill-card stroke-border", rx="14", sw="1.4")}')
a(T(52, Y_HAI + 20, 9, "fill-foreground", "Healthcare-associated infections \u2014 the risk-factor routing (book 181)", weight="800"))
for xx, cw, ch in [(52, 205, "RISK FACTOR"), (265, 300, "PATHOGEN"), (573, 345, "UNIQUE SIGNS/SYMPTOMS")]:
    a(f'        {R(xx, Y_HAI + 30, cw, 18, "fill-secondary", rx="4")}')
    a(T(xx + cw / 2, Y_HAI + 43, 5.4, "fill-foreground", ch, weight="800", anchor="middle", budget_w=cw - 8))
yy = Y_HAI + 54
for i, (nl, pl, sl, hh) in enumerate(hai_rows):
    a(f'        {R(52, yy, 866, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    for j, ln in enumerate(nl):
        a(T(58, yy + 11 + j * 8.6, 4.5, "fill-emergency", ln, weight="800" if j == 0 else None, budget_w=195))
    for j, ln in enumerate(pl):
        a(T(271, yy + 11 + j * 8.6, 4.5, "fill-foreground", ln, budget_w=288))
    for j, ln in enumerate(sl):
        a(T(579, yy + 11 + j * 8.6, 4.5, "fill-muted-foreground", ln, budget_w=334))
    yy += hh + 3
a('      </g>')

# footer
a('      {/* footer */}')
a('      <g>')
fy = Y_FOOT
for ln in foot_w:
    a(T(24, fy, 7.2, "fill-muted-foreground", ln, budget_w=944))
    fy += 12
a('      </g>')
a('    </svg>')
a('  );')
a('}')

out = "\n".join(L30)
over = [x for x in AUDIT if x[4] > x[3]]
if over:
    print("BUDGET OVERRUNS:")
    for m, fs, t, bw, aw in over:
        print(f"  {m} fs={fs} budget={bw} actual={aw} :: {t[:70]}")
    raise SystemExit(1)
print(f"budget audit: {len(AUDIT)} texts, 0 overruns")
print(f"SystemsBugMatrix2 total height: {TOTAL}")

MICRO = "src/components/kyp/usmle/visuals/micro.tsx"
src = open(MICRO, encoding="utf8").read()
marker = 'export function SystemsBugMatrix() {'
assert marker in src, "SystemsBugMatrix anchor missing"
assert 'export function SystemsBugMatrix2()' not in src, "already appended"
src = src.rstrip() + "\n\n" + out + "\n"
open(MICRO, "w", encoding="utf8").write(src)
print("appended SystemsBugMatrix2 to micro.tsx")

REG = "src/components/kyp/usmle/visuals/registry.tsx"
r = open(REG, encoding="utf8").read()
r = r.replace("HivLifecycleMap, SystemsBugMatrix } from \"./micro\";",
              "HivLifecycleMap, SystemsBugMatrix, SystemsBugMatrix2 } from \"./micro\";")
r = r.replace('  "systems-bug-matrix": SystemsBugMatrix,',
              '  "systems-bug-matrix": SystemsBugMatrix,\n  "systems-bug-matrix-2": SystemsBugMatrix2,')
open(REG, "w", encoding="utf8").write(r)
print("registered systems-bug-matrix-2 in registry.tsx")
