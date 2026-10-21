#!/usr/bin/env python3
"""M23 dna-viruses — generates the DnaVirusFamilyMap component into micro.tsx
(width-budget machinery, 0.50 u/char/px). Source: pdf 183-185 / books 161-163.
The 7-family grid (envelope/structure/medical importance), the herpes roster
(7 viruses with routes + signatures + latency), and the HSV-identification +
receptors strip. Photos are raster, COPYRIGHTED, described-in-text only."""
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
        AUDIT.append(("M23", size, text, budget_w, round(len(text) * U * size, 1)))
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

L = []
a = L.append

# ============ content ============
rule_lines = [
    "THE BOX RULE: all DNA viruses are icosahedral and replicate in the NUCLEUS — EXCEPT POXVIRUS, which replicates in the cytoplasm (it carries its own machinery).",
    "THE SIZE POLES: POXVIRUS = the LARGEST DNA virus; PARVOVIRUS = the SMALLEST (parvus = small). THE ENVELOPE SET: the enveloped trio = HERPES, HEPADNA, POX — the other four families are naked.",
]
rule_w = [ln for raw in rule_lines for ln in wrap(raw, 5.2, 880)]

families = [
    ("Herpesviruses", "Yes", "DS, linear",
     "See the Herpesviruses roster below (the source's own pointer)."),
    ("Poxvirus", "Yes", "DS, linear (LARGEST DNA virus)",
     "Smallpox eradicated worldwide by use of the live-attenuated vaccine; cowpox (\u201cmilkmaid blisters\u201d); molluscum contagiosum — flesh-colored papule with central umbilication; keratinocytes contain molluscum bodies A (printed histology — described-in-text only)."),
    ("Hepadnavirus", "Yes", "Partially DS, circular",
     "HBV: acute or chronic hepatitis; not a retrovirus but HAS REVERSE TRANSCRIPTASE."),
    ("Adenovirus", "No", "DS, linear",
     "Febrile pharyngitis — sore throat B (printed photo — described-in-text only); acute hemorrhagic cystitis; pneumonia; conjunctivitis (\u201cpink eye\u201d); gastroenteritis; myocarditis."),
    ("Papillomavirus", "No", "DS, circular",
     "HPV — warts and cancer (cervical, anal, penile, oropharyngeal); serotypes 1, 2, 6, 11 → warts; serotypes 16, 18 → cancer."),
    ("Polyomavirus", "No", "DS, circular",
     "JC virus — progressive multifocal leukoencephalopathy (PML) in the immunocompromised (eg, HIV); BK virus — transplant patients, commonly targets the kidney."),
    ("Parvovirus", "No", "SS, linear (SMALLEST; parvus = small)",
     "B19 virus — aplastic crises in sickle cell disease; \u201cslapped cheek\u201d rash in children (erythema infectiosum, fifth disease); infects RBC precursors and endothelial cells → RBC destruction → hydrops fetalis and death in the fetus; pure RBC aplasia and RA-like symptoms in adults."),
]

roster = [
    ("HSV-1", "Respiratory secretions, saliva",
     "Gingivostomatitis, keratoconjunctivitis A, herpes labialis B (cold sores), herpetic whitlow, TEMPORAL LOBE ENCEPHALITIS (the most common sporadic encephalitis — altered mental status, seizures, aphasia), esophagitis, erythema multiforme; a growing percentage of herpes genitalis. LATENT IN TRIGEMINAL GANGLIA."),
    ("HSV-2", "Sexual contact, perinatal",
     "Herpes genitalis; NEONATAL HERPES C; viral meningitis more common than with HSV-1. LATENT IN SACRAL GANGLIA."),
    ("VZV (HHV-3)", "Respiratory secretions, contact with vesicle fluid",
     "Varicella (chickenpox D) → zoster (shingles E, dermatomal); encephalitis, pneumonia. POSTHERPETIC NEURALGIA = the most common complication of shingles; latent in dorsal root or trigeminal ganglia; CN V1 involvement → HERPES ZOSTER OPHTHALMICUS."),
    ("EBV (HHV-4)", "Respiratory secretions, saliva (\u201ckissing disease\u201d — teens, young adults)",
     "MONONUCLEOSIS: fever, hepatosplenomegaly F, pharyngitis, lymphadenopathy (esp. POSTERIOR CERVICAL nodes); avoid contact sports until resolution (SPLENIC RUPTURE). Endemic Burkitt lymphoma, nasopharyngeal carcinoma (esp. Asian adults), transplant lymphoproliferative disease. Infects B cells through CD21; atypical lymphocytes G = reactive cytotoxic T cells (not infected B cells); ⊕ MONOSPOT (heterophile antibodies agglutinating sheep/horse RBCs); amoxicillin → maculopapular rash."),
    ("CMV (HHV-5)", "Congenital, transfusion, sexual contact, saliva, urine, transplant",
     "Mononucleosis (⊝ Monospot) in the immunocompetent; pneumonia in transplant patients; esophagitis, colitis; AIDS RETINITIS (\u201csightomegalovirus\u201d — hemorrhage, cotton-wool exudates, vision loss); congenital CMV. \u201cOWL EYE\u201d intranuclear inclusions H; latent in mononuclear cells."),
    ("HHV-6 and HHV-7", "Saliva",
     "ROSEOLA INFANTUM (exanthem subitum): high fevers for several days (can cause seizures), then a diffuse macular rash starting on the trunk and spreading to the extremities I; usually children <2 years; self-limited (HHV-7 the less common cause)."),
    ("HHV-8", "Sexual contact",
     "KAPOSI SARCOMA — a neoplasm of endothelial cells in HIV/AIDS and transplant patients; dark/violaceous plaques or nodules J (vascular proliferations); can also affect the GI tract and lungs."),
]

id_left = [
    ("HSV IDENTIFICATION", True),
    ("PCR of skin lesions = the test of choice", False),
    ("CSF PCR for herpes encephalitis", False),
    ("Tzanck test (outdated) — smear of an opened skin vesicle for multinucleated giant cells A (HSV-1, HSV-2, VZV)", False),
    ("Intranuclear eosinophilic Cowdry A inclusions (HSV-1, HSV-2, VZV)", False),
]
id_right = [
    ("RECEPTORS USED BY VIRUSES", True),
    ("CMV — integrins (heparan sulfate) · EBV — CD21 · HIV — CD4, CXCR4, CCR5", False),
    ("Parvovirus B19 — P antigen on RBCs · Rabies — nicotinic AChR", False),
    ("Rhinovirus — ICAM-1 · SARS-CoV-2 — ACE2", False),
]

foot_lines = [
    "Original KYP redraw of the source's DNA-viruses table (pdf 183 / book 161), Herpesviruses table (pdf 184 / book 162), and the HSV-identification + receptors blocks (pdf 185 / book 163).",
    "The printed photos (molluscum bodies A and pharyngitis B on book 161; the A-J gallery, the Liv/Sp hepatosplenomegaly imaging, and the Tzanck smear A on book 163) are raster — COPYRIGHTED, described-in-text only.",
    "The source's banner typo 'MICROCIOLOGY—VIROLOGY' prints on books 161-163. FA's printed mnemonics (Pox is out of the box; JC Junky Cerebrum / BK Bad Kidney; Must be 21 to drink Beer in a Barr; Roseola fever-first-Rosy-later; I CAMe to see the rhino) stay in the note's table block — verification-only, not redrawn.",
]
foot_w = [ln for raw in foot_lines for ln in wrap(raw, 7.2, 944)]

# ============ layout ============
Y_HDR = 14
Y_RULE = 76
RULE_H = 14 + len(rule_w) * 11 + 12
Y_GRID = Y_RULE + RULE_H + 16
GRID_COLS = [(52, 120, "FAMILY"), (180, 44, "ENV"), (232, 150, "DNA STRUCTURE"), (390, 372, "MEDICAL IMPORTANCE")]

grid_rows = []
for n, env, st, mi in families:
    mil = wrap(mi, 4.7, 366)
    stl = wrap(st, 4.7, 144)
    h = 14 + max(len(mil), len(stl)) * 9 + 10
    grid_rows.append((n, env, stl, mil, h))
GRID_H = 26 + 26 + 6 + sum(h for *_, h in grid_rows) + 6 * 7 + 12

Y_ROSTER = Y_GRID + GRID_H + 16
ros_rows = []
for n, rt, sig in roster:
    rtl = wrap(rt, 4.7, 180)
    sigl = wrap(sig, 4.7, 560)
    h = 14 + max(len(rtl), len(sigl)) * 9 + 10
    ros_rows.append((n, rtl, sigl, h))
ROS_H = 26 + 26 + 6 + sum(h for *_, h in ros_rows) + 6 * 7 + 12

Y_ID = Y_ROSTER + ROS_H + 16
def panel_h(items, w):
    h = 20 + 12  # title row
    for t, b in items[1:]:
        h += len(wrap(t, 4.7, w)) * 9
    return h + 16
ID_H = max(panel_h(id_left, 400), panel_h(id_right, 420))
Y_FOOT = Y_ID + ID_H + 18
TOTAL = Y_FOOT + len(foot_w) * 12 + 16

# ============ emit ============
a('export function DnaVirusFamilyMap() {')
a('  const w = 980;')
a(f'  const h = {TOTAL};')
a('  return (')
a(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="DNA viruses, an original KYP family map. THE RULES: all DNA viruses are icosahedral and replicate in the nucleus except poxvirus (the largest DNA virus, cytoplasmic); parvovirus is the smallest (parvus = small); the enveloped trio is herpes, hepadna, and pox — the other four families are naked. THE FAMILY GRID: Herpesviruses (enveloped, DS linear — see the roster); Poxvirus (enveloped, DS linear, largest — smallpox eradicated by the live-attenuated vaccine, cowpox milkmaid blisters, molluscum contagiosum with flesh-colored umbilicated papules and molluscum bodies in keratinocytes); Hepadnavirus (enveloped, partially DS circular — HBV acute or chronic hepatitis, not a retrovirus but has reverse transcriptase); Adenovirus (naked, DS linear — febrile pharyngitis, hemorrhagic cystitis, pneumonia, pink eye, gastroenteritis, myocarditis); Papillomavirus (naked, DS circular — HPV warts and cancer, serotypes 1 2 6 11 warts and 16 18 cancer); Polyomavirus (naked, DS circular — JC virus PML in the immunocompromised, BK virus the transplant kidney); Parvovirus (naked, SS linear, smallest — B19 aplastic crises in sickle cell, slapped cheek rash, infects RBC precursors, hydrops fetalis). THE HERPES ROSTER: HSV-1 trigeminal latency with gingivostomatitis, cold sores, and temporal lobe encephalitis; HSV-2 sacral latency with genital and neonatal herpes; VZV chickenpox and shingles with postherpetic neuralgia and zoster ophthalmicus; EBV mononucleosis with CD21 B-cell entry, positive Monospot, atypical lymphocytes, Burkitt and nasopharyngeal carcinoma; CMV owl-eye inclusions with negative-Monospot mono, retinitis, congenital disease; HHV-6 and 7 roseola; HHV-8 Kaposi sarcoma. HSV identification by PCR; Tzanck and Cowdry A; and the receptor set (CMV integrins, EBV CD21, HIV CD4 CXCR4 CCR5, parvovirus P antigen, rabies nicotinic AChR, rhinovirus ICAM-1, SARS-CoV-2 ACE2)" className="min-w-[940px]">')

# header
a('      {/* header */}')
a('      <g>')
a(f'        {R(24, Y_HDR, 932, 46, "fill-card stroke-border", rx="12", sw="1.4")}')
a(T(42, Y_HDR + 28, 11, "fill-foreground", "DNA viruses — the family map + the herpes roster (original KYP redraw)", weight="800"))
a(f'        {R(722, Y_HDR + 10, 234, 18, "fill-brand-soft", rx="9")}')
a(T(839, Y_HDR + 23, 7.6, "fill-brand", "enveloped trio · naked quartet", weight="800", anchor="middle"))
a('      </g>')

# rule strip
a('      {/* the box rule + size poles */}')
a('      <g>')
a(f'        {R(36, Y_RULE, 908, RULE_H, "fill-secondary", rx="10")}')
yy = Y_RULE + 16
for ln in rule_w:
    a(T(490, yy, 5.2, "fill-foreground", ln, weight="700", anchor="middle", budget_w=884))
    yy += 11
a('      </g>')

# family grid
a('      {/* ===== THE FAMILY GRID ===== */}')
a('      <g>')
a(f'        {R(36, Y_GRID, 908, GRID_H, "fill-secondary/40 stroke-brand", rx="14", sw="1.5")}')
a(T(52, Y_GRID + 20, 9, "fill-foreground", "THE SEVEN FAMILIES — book 161", weight="800"))
for x, cw, ch in GRID_COLS:
    a(f'        {R(x, Y_GRID + 30, cw, 20, "fill-secondary", rx="4")}')
    a(T(x + 6, Y_GRID + 44, 5.8, "fill-foreground", ch, weight="800"))
yy = Y_GRID + 58
for i, (n, env, stl, mil, hh) in enumerate(grid_rows):
    cls = "fill-secondary/60" if i % 2 else "fill-secondary"
    a(f'        {R(52, yy, 710, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(58, yy + 13, 5.4, "fill-emergency", n, weight="800", budget_w=112))
    a(T(186, yy + 13, 5.0, "fill-foreground", env, weight="700", budget_w=38))
    for j, ln in enumerate(stl):
        a(T(238, yy + 13 + j * 9, 4.7, "fill-muted-foreground", ln, budget_w=144))
    for j, ln in enumerate(mil):
        a(T(396, yy + 13 + j * 9, 4.7, "fill-muted-foreground", ln, budget_w=366))
    yy += hh + 7
a('      </g>')

# herpes roster
a('      {/* ===== THE HERPES ROSTER ===== */}')
a('      <g>')
a(f'        {R(36, Y_ROSTER, 908, ROS_H, "fill-card stroke-border", rx="14", sw="1.4")}')
a(T(52, Y_ROSTER + 20, 9, "fill-foreground", "THE HERPESVIRUS ROSTER — book 162 (enveloped, DS, linear)", weight="800"))
a(T(52, Y_ROSTER + 32, 4.8, "fill-muted-foreground", "Recent data suggest both HSV-1 and HSV-2 can affect both genital and extragenital areas.", budget_w=880))
roster_cols = [(52, 92, "VIRUS"), (152, 188, "ROUTE"), (348, 580, "SIGNATURE + LATENCY")]
for x, cw, ch in roster_cols:
    a(f'        {R(x, Y_ROSTER + 40, cw, 20, "fill-secondary", rx="4")}')
    a(T(x + 6, Y_ROSTER + 54, 5.8, "fill-foreground", ch, weight="800"))
yy = Y_ROSTER + 68
for i, (n, rtl, sigl, hh) in enumerate(ros_rows):
    a(f'        {R(52, yy, 876, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(58, yy + 13, 5.4, "fill-brand", n, weight="800", budget_w=86))
    for j, ln in enumerate(rtl):
        a(T(158, yy + 13 + j * 9, 4.7, "fill-muted-foreground", ln, budget_w=180))
    for j, ln in enumerate(sigl):
        a(T(354, yy + 13 + j * 9, 4.7, "fill-muted-foreground", ln, budget_w=560))
    yy += hh + 7
a('      </g>')

# id + receptors
a('      {/* ===== IDENTIFICATION + RECEPTORS ===== */}')
a('      <g>')
a(f'        {R(36, Y_ID, 908, ID_H, "fill-secondary/40 stroke-brand", rx="12", sw="1.5")}')
yy = Y_ID + 20
for txt, bold in id_left:
    if bold:
        a(T(52, yy, 6.2, "fill-emergency", txt, weight="800", budget_w=420))
    else:
        for ln in wrap(txt, 4.7, 400):
            a(T(58, yy, 4.7, "fill-muted-foreground", ln, budget_w=400))
            yy += 9
        continue
    yy += 12
yy = Y_ID + 20
for txt, bold in id_right:
    if bold:
        a(T(500, yy, 6.2, "fill-emergency", txt, weight="800", budget_w=420))
        yy += 12
    else:
        for ln in wrap(txt, 4.7, 420):
            a(T(506, yy, 4.7, "fill-muted-foreground", ln, budget_w=420))
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
    f.write("\n" + "\n".join(L) + "\n")

bad = [s for s in AUDIT if s[4] > s[3]]
for s in bad:
    print(f"  OVERFLOW {s[0]} fs={s[1]} {s[4]}u > {s[3]}u :: {s[2][:50]!r}")
if bad:
    raise SystemExit(f"AUDIT FAILED: {len(bad)}")
print(f"AUDIT PASSED: {len(AUDIT)} text elements (M23); total height {TOTAL}u; grid H={GRID_H}; roster H={ROS_H}; id H={ID_H}")
