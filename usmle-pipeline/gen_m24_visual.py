#!/usr/bin/env python3
"""M24 rna-viruses — generates the RnaVirusFamilyMap component into micro.tsx
(width-budget machinery, 0.50 u/char/px). Source: pdf 186-189 / books 164-167.
The 17-family grid (sense-coded), the influenza shift/drift panel, the
paramyxovirus clinical set (croup, measles, mumps, rubella, RSV), and the
picorna/rhino/rota panel. Photos are raster, COPYRIGHTED, described-in-text
only."""
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
        AUDIT.append(("M24", size, text, budget_w, round(len(text) * U * size, 1)))
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
    "THE CYTOPLASM RULE: all RNA viruses replicate in the CYTOPLASM — EXCEPT RETROVIRUS and INFLUENZA VIRUS (nuclear).",
    "THE SENSE CODE: ⊕ (positive sense, ≈ mRNA — infectious alone) vs ⊝ (negative sense — the virion carries RdRp); a = ARBOVIRUS (arthropod-borne: mosquitoes, ticks).",
]
rule_w = [ln for raw in rule_lines for ln in wrap(raw, 5.2, 880)]

# (family, env, structure, importance, sense-tag, tag-cls)
families = [
    ("Reoviruses", "No", "DS linear, multisegmented", "Rotavirus — important cause of diarrhea in young children; may be fatal.", "DS", "fill-emergency"),
    ("Picornaviruses", "No", "SS ⊕ linear", "Poliovirus (polio — Salk IPV / Sabin OPV vaccines); Echovirus — aseptic meningitis; Rhinovirus — “common cold”; Coxsackievirus — aseptic meningitis, herpangina (mouth blisters, fever), hand-foot-and-mouth disease, myocarditis, pericarditis; HAV — acute viral hepatitis.", "⊕", "fill-brand"),
    ("Hepevirus", "No", "SS ⊕ linear", "HEV.", "⊕", "fill-brand"),
    ("Caliciviruses", "No", "SS ⊕ linear", "Norovirus — viral gastroenteritis.", "⊕", "fill-brand"),
    ("Flaviviruses", "Yes", "SS ⊕ linear", "HCV; Yellow fever ᵃ; Dengue ᵃ; West Nile virus ᵃ — meningoencephalitis, acute asymmetric flaccid paralysis; Zika virus ᵃ.", "⊕", "fill-brand"),
    ("Togaviruses", "Yes", "SS ⊕ linear", "Chikungunya virus ᵃ (co-infection with dengue can occur), Rubella (formerly a togavirus), Eastern and Western equine encephalitis ᵃ — the CREW set.", "⊕", "fill-brand"),
    ("Matonavirus", "Yes", "SS ⊕ linear", "Rubella (the 2026 reclassification — rubella now lives here, not with the togaviruses).", "⊕", "fill-brand"),
    ("Retroviruses", "Yes", "SS ⊕ linear", "Have REVERSE TRANSCRIPTASE; HTLV — T-cell leukemia; HIV — AIDS.", "⊕", "fill-brand"),
    ("Coronaviruses", "Yes", "SS ⊕ linear", "“Common cold,” SARS, COVID-19, MERS.", "⊕", "fill-brand"),
    ("Orthomyxoviruses", "Yes", "SS ⊝ linear, multisegmented", "Influenza virus (the segmented ⊝ virus that replicates in the NUCLEUS).", "⊝", "fill-emergency"),
    ("Paramyxoviruses", "Yes", "SS ⊝ linear", "Parainfluenza — croup; RSV — bronchiolitis in babies; measles, mumps.", "⊝", "fill-emergency"),
    ("Pneumoviruses", "Yes", "SS ⊝ linear", "RSV — bronchiolitis in babies (the non-paramyxovirus home of RSV).", "⊝", "fill-emergency"),
    ("Rhabdoviruses", "Yes", "SS ⊝ linear", "Rabies.", "⊝", "fill-emergency"),
    ("Filoviruses", "Yes", "SS ⊝ linear", "Ebola/Marburg virus disease — often fatal.", "⊝", "fill-emergency"),
    ("Arenaviruses", "Yes", "SS ⊕ and ⊝ circular, multisegmented", "LCMV — lymphocytic choriomeningitis virus; Lassa fever encephalitis — spread by rodents.", "⊕/⊝", "fill-foreground"),
    ("Bunyaviruses", "Yes", "SS ⊝ circular, multisegmented", "California encephalitis ᵃ; Sandfly/Rift Valley fevers ᵃ; Crimean-Congo hemorrhagic fever ᵃ; Hantavirus — hemorrhagic fever, pneumonia.", "⊝", "fill-emergency"),
    ("Delta virus", "Yes", "SS ⊝ circular", "HDV is “defective” — requires the presence of HBV to replicate.", "⊝", "fill-emergency"),
]

flu = [
    ("THE VIRION", "Orthomyxoviruses: enveloped, ⊝ ssRNA, SEGMENTED genome, with HEMAGGLUTININ (binds sialic acid and promotes viral entry) and NEURAMINIDASE (promotes progeny virion release) antigens."),
    ("THE SUPERINFECTION SET", "Patients at risk for fatal bacterial superinfection — most commonly S aureus, S pneumoniae, and H influenzae. Treatment: supportive ± neuraminidase inhibitor (oseltamivir, zanamivir)."),
    ("ANTIGENIC SHIFT", "Infection of 1 cell by 2 different segmented viruses (eg, swine + human influenza) → RNA segment REASORTMENT → a dramatically different virus → major global outbreaks (PANDEMICS)."),
    ("ANTIGENIC DRIFT", "Random mutation in hemagglutinin (HA) or neuraminidase (NA) genes → minor changes in HA or NA protein → frequent LOCAL SEASONAL outbreaks (epidemics)."),
    ("THE VACCINE", "Reformulated each season (the virus's rapid genetic change); KILLED vaccine most frequently used; the live attenuated intranasal vaccine carries a temperature-sensitive mutant that replicates in the nose but not the lung."),
]

cln = [
    ("CROUP (parainfluenza)", "Acute laryngotracheobronchitis — “seal-like” barking cough and inspiratory stridor; narrowing of the upper trachea and subglottis gives the STEEPLE SIGN on x-ray A (printed radiograph — described-in-text only)."),
    ("MEASLES (rubeola)", "Prodromal fever with COUGH, CORYZA, CONJUNCTIVITIS → KOPLIK SPOTS (bright red spots with blue-white center on buccal mucosa A — printed photo, described-in-text only) → maculopapular rash head/neck → downward. Warthin-Finkeldey giant cells; sequelae: SSPE (years later), encephalitis 1:1000 (days), giant cell pneumonia (immunosuppressed), ADEM. Vitamin A reduces morbidity and mortality; pneumonia is the most common cause of measles-associated death."),
    ("MUMPS", "Parotitis A (printed photo — described-in-text only), orchitis, aseptic meningitis, pancreatitis; sterility risk after puberty; uncommon thanks to the MMR vaccine."),
    ("RUBELLA (matonavirus)", "German (3-day) measles — fever, POSTAURICULAR lymphadenopathy, arthralgias, fine maculopapular rash face → centrifugal. Mild in children; the congenital TORCH triad: sensorineural deafness, cataracts, patent ductus arteriosus; “blueberry muffin” dermal extramedullary hematopoiesis A (printed photo — described-in-text only)."),
    ("RSV + PALIVIZUMAB", "All paramyxoviruses carry the surface F (fusion) protein → respiratory epithelial cells fuse into multinucleated cells. PALIVIZUMAB (anti-F monoclonal) prevents RSV pneumonia in premature infants."),
]

gi = [
    ("PICORNAVIRUS", "Poliovirus, echovirus, rhinovirus, coxsackievirus, HAV. RNA is translated into 1 LARGE POLYPEPTIDE cleaved by virus-encoded proteases into functional viral proteins. Polio, echo, and coxsackie are ENTEROVIRUSES — aseptic (viral) meningitis."),
    ("RHINOVIRUS", "A picornavirus, nonenveloped. The common cold; >100 serologic types. ACID LABILE — destroyed by stomach acid, so it does NOT infect the GI tract (unlike the other picornaviruses)."),
    ("ROTAVIRUS", "Segmented dsRNA (a reovirus) A — the printed EM shows the wheel-like capsid (rota = wheel; described-in-text only). The most important global cause of infantile gastroenteritis; winter day-care outbreaks. Villous destruction with atrophy → ↓ Na+ absorption and K+ loss. CDC vaccination for all infants EXCEPT those with intussusception history or SCID."),
]

foot_lines = [
    "Original KYP redraw of the source's RNA-viruses table (pdf 186 / book 164), the picornavirus-rhinovirus-rotavirus blocks (pdf 187 / book 165), the influenza shift/drift + rubella + paramyxovirus blocks (pdf 188 / book 166), and the croup-measles-mumps blocks (pdf 189 / book 167).",
    "The printed photos (the rotavirus EM A, the blueberry-muffin rubella rash A, the steeple-sign x-ray A, the Koplik spots A, and the mumps parotitis A) are raster — COPYRIGHTED, described-in-text only.",
    "The source's banner typo 'MICROCIOLOGY—VIROLOGY' prints on books 164-167. FA's printed mnemonics (Retro flu is outta cyt; PERCH; Toga CREW; Rhino has a runny nose; Rotavirus = right out the anus; Sudden shift is more deadly than gradual drift; the 4 C's; POM-Poms; Palivizumab for preemies) stay in the note's table block — verification-only, not redrawn.",
]
foot_w = [ln for raw in foot_lines for ln in wrap(raw, 7.2, 944)]

# ============ layout ============
Y_HDR = 14
Y_RULE = 76
RULE_H = 14 + len(rule_w) * 11 + 12
Y_GRID = Y_RULE + RULE_H + 16
GRID_COLS = [(52, 116, "FAMILY"), (176, 40, "ENV"), (224, 168, "RNA STRUCTURE"), (400, 20, "")]

grid_rows = []
for n, env, st, mi, tag, tagcls in families:
    mil = wrap(mi, 4.7, 380)
    stl = wrap(st, 4.7, 150)
    h = 14 + max(len(mil), len(stl)) * 9 + 10
    grid_rows.append((n, env, stl, mil, h, tag, tagcls))
GRID_H = 26 + 26 + 6 + sum(h for *_, h, _, _ in [(r[0], r[1], r[2], r[3], r[4], r[5], r[6]) for r in grid_rows]) + 6 * len(grid_rows) + 12

Y_FLU = Y_GRID + GRID_H + 16
flu_rows = []
for t, d in flu:
    dl = wrap(d, 4.7, 700)
    h = 14 + len(dl) * 9 + 8
    flu_rows.append((t, dl, h))
FLU_H = 26 + sum(h for *_, h in flu_rows) + 6 * len(flu_rows) + 12

Y_CLN = Y_FLU + FLU_H + 16
cln_rows = []
for t, d in cln:
    dl = wrap(d, 4.7, 700)
    h = 14 + len(dl) * 9 + 8
    cln_rows.append((t, dl, h))
CLN_H = 26 + sum(h for *_, h in cln_rows) + 6 * len(cln_rows) + 12

Y_GI = Y_CLN + CLN_H + 16
gi_rows = []
for t, d in gi:
    dl = wrap(d, 4.7, 700)
    h = 14 + len(dl) * 9 + 8
    gi_rows.append((t, dl, h))
GI_H = 26 + sum(h for *_, h in gi_rows) + 6 * len(gi_rows) + 12

Y_FOOT = Y_GI + GI_H + 18
TOTAL = Y_FOOT + len(foot_w) * 12 + 16

# ============ emit ============
a('export function RnaVirusFamilyMap() {')
a('  const w = 980;')
a(f'  const h = {TOTAL};')
a('  return (')
a(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="RNA viruses, an original KYP family map. THE CYTOPLASM RULE: all RNA viruses replicate in the cytoplasm except retrovirus and influenza virus (nuclear). THE GRID (17 families, sense-coded): Reoviruses (naked, DS linear multisegmented — rotavirus, the infantile diarrhea virus); the positive-sense set — Picornaviruses (naked, polio-Salk-Sabin, echo, rhino, coxsackie, HAV), Hepevirus (HEV), Caliciviruses (norovirus gastroenteritis), Flaviviruses (enveloped — HCV, yellow fever, dengue, West Nile with meningoencephalitis and acute asymmetric flaccid paralysis, Zika; arboviruses), Togaviruses (Chikungunya, Eastern and Western equine encephalitis; arboviruses), Matonavirus (rubella, the 2026 reclassification), Retroviruses (reverse transcriptase — HTLV T-cell leukemia, HIV AIDS), Coronaviruses (common cold, SARS, COVID-19, MERS); the negative-sense set — Orthomyxoviruses (influenza, segmented, nuclear), Paramyxoviruses (parainfluenza croup, RSV bronchiolitis, measles, mumps), Pneumoviruses (RSV), Rhabdoviruses (rabies), Filoviruses (Ebola and Marburg, often fatal); the circular set — Arenaviruses (ambisense, LCMV and Lassa from rodents), Bunyaviruses (California encephalitis, sandfly and Rift Valley fevers, Crimean-Congo hemorrhagic fever, Hantavirus), and Delta virus (defective, requires HBV). INFLUENZA: hemagglutinin binds sialic acid for entry, neuraminidase releases progeny; superinfection with S aureus, S pneumoniae, H influenzae; antigenic SHIFT = reassortment of 2 segmented viruses = pandemics, antigenic DRIFT = HA/NA point mutations = seasonal epidemics; reformulated killed vaccine, intranasal live temperature-sensitive. THE CLINICAL SET: croup with the seal-like cough and steeple sign; measles with cough, coryza, conjunctivitis, Koplik spots, the descending rash, Warthin-Finkeldey giant cells, SSPE, and vitamin A; mumps with parotitis, orchitis, meningitis, pancreatitis; rubella with postauricular nodes and the congenital deafness-cataracts-PDA triad; RSV with the F protein and palivizumab for preemies. THE GI SET: picornavirus one-polypeptide strategy, rhinovirus acid-labile common cold, rotavirus villous atrophy with the vaccine excluding intussusception history and SCID" className="min-w-[940px]">')

# header
a('      {/* header */}')
a('      <g>')
a(f'        {R(24, Y_HDR, 932, 46, "fill-card stroke-border", rx="12", sw="1.4")}')
a(T(42, Y_HDR + 28, 11, "fill-foreground", "RNA viruses — the sense-coded family map (original KYP redraw)", weight="800"))
a(f'        {R(706, Y_HDR + 10, 250, 18, "fill-brand-soft", rx="9")}')
a(T(831, Y_HDR + 23, 7.6, "fill-brand", "⊕ · ⊝ · circular · segmented", weight="800", anchor="middle"))
a('      </g>')

# rule strip
a('      {/* the cytoplasm rule + sense code */}')
a('      <g>')
a(f'        {R(36, Y_RULE, 908, RULE_H, "fill-secondary", rx="10")}')
yy = Y_RULE + 16
for ln in rule_w:
    a(T(490, yy, 5.2, "fill-foreground", ln, weight="700", anchor="middle", budget_w=884))
    yy += 11
a('      </g>')

# family grid
a('      {/* ===== THE 17 FAMILIES ===== */}')
a('      <g>')
a(f'        {R(36, Y_GRID, 908, GRID_H, "fill-secondary/40 stroke-brand", rx="14", sw="1.5")}')
a(T(52, Y_GRID + 20, 9, "fill-foreground", "THE SEVENTEEN FAMILIES — book 164 (sense-coded: ⊕ brand · ⊝/DS emergency)", weight="800"))
for x, cw, ch in [(52, 116, "FAMILY"), (176, 40, "ENV"), (224, 168, "RNA STRUCTURE"), (400, 360, "MEDICAL IMPORTANCE")]:
    a(f'        {R(x, Y_GRID + 30, cw, 20, "fill-secondary", rx="4")}')
    a(T(x + 6, Y_GRID + 44, 5.8, "fill-foreground", ch, weight="800"))
a(f'        {R(768, Y_GRID + 30, 36, 20, "fill-secondary", rx="4")}')
a(T(786, Y_GRID + 44, 5.8, "fill-foreground", "SENSE", weight="800", anchor="middle"))
yy = Y_GRID + 58
for i, (n, env, stl, mil, hh, tag, tagcls) in enumerate(grid_rows):
    a(f'        {R(52, yy, 876, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(58, yy + 13, 5.4, "fill-emergency", n, weight="800", budget_w=110))
    a(T(182, yy + 13, 5.0, "fill-foreground", env, weight="700", budget_w=34))
    for j, ln in enumerate(stl):
        a(T(230, yy + 13 + j * 9, 4.7, "fill-muted-foreground", ln, budget_w=150))
    for j, ln in enumerate(mil):
        a(T(406, yy + 13 + j * 9, 4.7, "fill-muted-foreground", ln, budget_w=380))
    a(T(786, yy + 13, 6.4, tagcls, tag, weight="800", anchor="middle", budget_w=30))
    yy += hh + 7
a('      </g>')

# panels helper
def panel(y0, ph, title, rows, tag):
    a('      {/* ===== ' + tag + ' ===== */}')
    a('      <g>')
    a(f'        {R(36, y0, 908, ph, "fill-card stroke-border", rx="14", sw="1.4")}')
    a(T(52, y0 + 20, 9, "fill-foreground", title, weight="800"))
    yy = y0 + 34
    for i, (t, dl, hh) in enumerate(rows):
        a(f'        {R(52, yy, 876, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
        a(T(60, yy + 13, 5.6, "fill-brand", t, weight="800", budget_w=200))
        for j, ln in enumerate(dl):
            a(T(60, yy + 24 + j * 9, 4.7, "fill-muted-foreground", ln, budget_w=700))
        yy += hh + 6
    a('      </g>')

panel(Y_FLU, FLU_H, "INFLUENZA — the shift/drift map (books 164-166)", flu_rows, "INFLUENZA")
panel(Y_CLN, CLN_H, "THE CLINICAL SET — croup, measles, mumps, rubella, RSV (books 166-167)", cln_rows, "CLINICAL SET")
panel(Y_GI, GI_H, "THE GI SET — picornavirus, rhinovirus, rotavirus (book 165)", gi_rows, "GI SET")

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
print(f"AUDIT PASSED: {len(AUDIT)} text elements (M24); total height {TOTAL}u; grid H={GRID_H}; flu H={FLU_H}; cln H={CLN_H}; gi H={GI_H}")
