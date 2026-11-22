#!/usr/bin/env python3
"""M25 viral-vaccines-diagnostics — generates the VaccineDiagnosticMap
component into micro.tsx (width-budget machinery, 0.50 u/char/px). Source:
pdf 190-191 + 196 / books 168-169 + the prions block of 174. The Aedes
arbovirus trio (Chikungunya vs Dengue + Yellow fever + Zika), the emerging
set (Rabies, Ebola, SARS-CoV-2 with the virion cross-section), and the prion
conversion cascade. Photos are raster, COPYRIGHTED, described-in-text only."""
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
        AUDIT.append(("M25", size, text, budget_w, round(len(text) * U * size, 1)))
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

def C(cx, cy, r, cls, stroke=None, sw=None):
    a = f'cx="{cx}" cy="{cy}" r="{r}" className="{cls}"'
    if stroke:
        a += f' stroke="{stroke}"'
        if sw:
            a += f' strokeWidth="{sw}"'
    return f"<circle {a} />"

def L(x1, y1, x2, y2, cls, sw="0.9"):
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" className="{cls}" strokeWidth="{sw}" />'

def P(d, cls, sw="1.1"):
    return f'<path d="{d}" className="{cls}" strokeWidth="{sw}" fill="none" strokeLinejoin="round" strokeLinecap="round" />'

import math

L25 = []
a = L25.append

# ============ content ============
aedes = [
    ("Chikungunya virus", "Alphavirus/togavirus.",
     "High fever, maculopapular rash, headache, lymphadenopathy, and inflammatory polyarthritis. Arthralgias are more commonly reported (vs dengue); joint swelling is highly specific for Chikungunya. Thrombocytopenia, leukopenia, and hemorrhagic manifestations are less common.",
     "NAAT, serology",
     "Supportive. Steroids or disease-modifying antirheumatic drugs for chronic arthritis.",
     "Minimize mosquito exposure. No vaccine currently available."),
    ("Dengue virus", "Flavivirus.",
     "Dengue fever: fever, rash, headache, myalgias, arthralgias, retro-orbital pain, neutropenia. Dengue hemorrhagic fever: dengue fever + bleeding and plasma leakage due to severe thrombocytopenia and RBC perturbations. Most common if infected with a DIFFERENT SEROTYPE after initial infection (antibody-dependent enhancement). May progress to dengue shock syndrome: plasma leakage → circulatory collapse.",
     "NAAT, serology",
     "Supportive. Intravascular volume repletion or blood transfusion if severe shock.",
     "Live, recombinant vaccine available — derived from the yellow fever virus backbone with insertion of genes for the envelope and pre-membrane proteins of dengue virus."),
]

emerging = [
    ("RABIES — the retrograde traveler",
     "Bullet-shaped virus A (printed TEM — described-in-text only); Negri bodies (cytoplasmic inclusions B, printed micrograph — described-in-text only) in Purkinje cells of cerebellum and hippocampal neurons. Long incubation (weeks to months). US exposure: bat, raccoon, and skunk bites more common than dog bites; aerosol (bat caves) possible. Travels to CNS retrograde via dynein motors up nerve axons after binding ACh receptors. Progression: fever, malaise → agitation, photophobia, hydrophobia, hypersalivation → paralysis, coma → death. PEP = wound cleaning + KILLED VACCINE + RABIES IMMUNOGLOBULIN — the passive-active immunity exemplar."),
    ("EBOLA — the filovirus hemorrhage",
     "A filovirus A (printed TEM — the filamentous shepherd's-crook virion, described-in-text only). Incubation up to 21 days, then abrupt flulike symptoms, diarrhea/vomiting, high fever, myalgia → DIC, diffuse hemorrhage, shock. Diagnosed with RT-PCR within 48 hr of symptom onset; high mortality. Transmission: direct contact with bodily fluids, fomites (including dead bodies), infected bats or primates; high incidence of healthcare-associated infection. Supportive care only — vaccination of contacts, strict isolation, and barrier practices prevent transmission."),
    ("SARS-COV-2 — the pandemic coronavirus",
     "A ⊕ ssRNA virus; the cause of the COVID-19 pandemic. Spread via respiratory droplets, aerosols, and fomites. Symptoms: fever, myalgia, headache, congestion, sneezing, cough, sore throat, nausea, diarrhea, ANOSMIA, DYSGEUSIA. Severe: pneumonia, hypercoagulability (DVT, PE, stroke), myocardial injury, neurologic sequelae, shock, organ failure, death. Entry: the spike protein binds ACE2 (lungs, intestines, heart, kidneys). Diagnosis: NAAT (RT-PCR) — or the rapid antigen test (RAT): rapid, accessible, LESS SENSITIVE than NAAT. Vaccines: mRNA and viral vector, presenting the spike protein → anti-spike antibodies."),
]

prion = [
    ("THE CONFORMATION CASCADE", "Prion diseases convert the normal, predominantly α-helical prion protein (PrPc) to a β-pleated form (PrPsc) — transmissible via CNS-related tissue (iatrogenic CJD) or food contaminated by BSE-infected animal products (variant CJD)."),
    ("THE RESISTANCE PAIR", "PrPsc resists PROTEASE degradation and facilitates the conversion of still more PrPc to PrPsc (autocatalysis) — and it resists STANDARD STERILIZING PROCEDURES, including standard autoclaving."),
    ("THE DISEASE", "Accumulation of PrPsc → SPONGIFORM ENCEPHALOPATHY: dementia, ataxia, startle myoclonus, and death. Creutzfeldt-Jakob disease — rapidly progressive dementia, typically sporadic (some familial forms). Bovine spongiform encephalopathy — mad cow disease. Kuru — acquired by tribal populations practicing human cannibalism."),
]

foot_lines = [
    "Original KYP redraw of the source's Arboviruses-Aedes block (pdf 190 / book 168), the Rabies + Ebola + SARS-CoV-2 blocks with the labeled virion diagram (pdf 191 / book 169), and the Prions block (pdf 196 / book 174 — page ownership: the microbiota and foodborne blocks on the same page belong to M28).",
    "The printed images (the congenital-Zika brain imaging A; the rabies bullet-shaped TEM A and Negri bodies B; the Ebola filamentous TEM A; the SARS-CoV-2 cross-section diagram) are raster — COPYRIGHTED, described-in-text only; the virion cross-section above is an ORIGINAL KYP REDRAW of the labeled diagram.",
    "The banner typo 'MICROCIOLOGY—VIROLOGY' prints on books 168-169; book 174 prints 'MICROCIOLOGY—SYSTEMS'. FA's printed gloss ('Food poisoning from reheated rice? Be serious!' — that block belongs to M28) is not redrawn here.",
]
foot_w = [ln for raw in foot_lines for ln in wrap(raw, 7.2, 944)]

# ============ layout ============
Y_HDR = 14
Y_AE = 76
aedes_cols = [(52, 104, "VIRUS"), (162, 92, "TYPE"), (260, 300, "SYMPTOMS"), (566, 100, "DIAGNOSIS"), (674, 254, "TREATMENT + PREVENTION")]
aedes_rows = []
for n, ty, sx, dx, tx, px in aedes:
    sxl = wrap(sx, 4.6, 294)
    txl = wrap("TREATMENT: " + tx + " PREVENTION: " + px, 4.6, 248)
    tyl = wrap(ty, 4.6, 86)
    h = 14 + max(len(sxl), len(txl), len(tyl)) * 9 + 10
    aedes_rows.append((n, tyl, sxl, dx, txl, h))
AE_H = 26 + 26 + 6 + sum(h for *_, h in aedes_rows) + 6 * len(aedes_rows) + 40 + 12

# extra cards (yellow fever + zika) inside the aedes panel
yf_text = "YELLOW FEVER — a flavivirus (also an arbovirus) transmitted by Aedes mosquito bites; monkey or human reservoir (Flavi = yellow, jaundice). Symptoms: high fever, black vomitus, jaundice, hemorrhage, backache; Councilman bodies (eosinophilic apoptotic globules) on liver biopsy. LIVE, ATTENUATED vaccine for travelers to endemic countries."
zk_text = "ZIKA — a flavivirus, most commonly Aedes-borne. Conjunctivitis, low-grade pyrexia, itchy rash in 20% of cases; tropical and subtropical outbreaks; may be complicated by GUILLAIN-BARRÉ syndrome. Sexual and vertical transmission occurs. In pregnancy: miscarriage or congenital Zika syndrome — brain imaging shows VENTRICULOMEGALY, SUBCORTICAL CALCIFICATIONS A (printed imaging — described-in-text only); the newborn: microcephaly, ocular anomalies, motor abnormalities (spasticity, seizures). Supportive care; diagnose with RT-PCR or serology."
yf_w = wrap(yf_text, 4.6, 768)
zk_w = wrap(zk_text, 4.6, 768)
AE_H = 26 + 26 + 6 + sum(h for *_, h in aedes_rows) + 6 * len(aedes_rows) + 8 + (12 + len(yf_w) * 9 + 6) + 12 + (12 + len(zk_w) * 9 + 6) + 8

Y_EM = Y_AE + AE_H + 16
em_rows = []
for t, d in emerging:
    dl = wrap(d, 4.6, 700)
    h = 14 + len(dl) * 9 + 8
    em_rows.append((t, dl, h))
EM_H = 26 + sum(h for *_, h in em_rows) + 6 * len(em_rows) + 12

# virion redraw strip
Y_VIR = Y_EM + EM_H + 16
VIR_H = 128

Y_PR = Y_VIR + VIR_H + 16
pr_rows = []
for t, d in prion:
    dl = wrap(d, 4.6, 700)
    h = 14 + len(dl) * 9 + 8
    pr_rows.append((t, dl, h))
PR_H = 26 + sum(h for *_, h in pr_rows) + 6 * len(pr_rows) + 12

Y_FOOT = Y_PR + PR_H + 18
TOTAL = Y_FOOT + len(foot_w) * 12 + 16

# ============ emit ============
a('export function VaccineDiagnosticMap() {')
a('  const w = 980;')
a(f'  const h = {TOTAL};')
a('  return (')
a(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="Viral vaccines, diagnosis, and emerging viruses, an original KYP map. THE AEDES TRIO: Chikungunya (an alphavirus) — fever, maculopapular rash, lymphadenopathy, inflammatory polyarthritis with arthralgias more common than dengue and joint swelling highly specific; NAAT and serology; supportive with steroids or DMARDs for chronic arthritis; no vaccine. Dengue (a flavivirus) — dengue fever with retro-orbital pain and neutropenia; dengue hemorrhagic fever with bleeding and plasma leakage, most common on infection with a different serotype after the initial infection (antibody-dependent enhancement); dengue shock syndrome with circulatory collapse; the live recombinant vaccine built on the yellow fever backbone. Yellow fever — monkey or human reservoir, black vomitus, jaundice, Councilman bodies on liver biopsy; live attenuated vaccine for travelers. Zika — conjunctivitis, low-grade fever, itchy rash, Guillain-Barre syndrome, sexual and vertical transmission; congenital Zika syndrome with ventriculomegaly, subcortical calcifications, microcephaly, ocular anomalies, motor abnormalities. THE EMERGING SET: rabies — bullet-shaped, Negri bodies in Purkinje cells and hippocampal neurons, bat-raccoon-skunk bites in the US, retrograde dynein travel after binding ACh receptors, hydrophobia; postexposure prophylaxis = wound cleaning + killed vaccine + rabies immunoglobulin (passive-active immunity). Ebola — filovirus, 21-day incubation, DIC and hemorrhage and shock, RT-PCR within 48 hours, contact and fomite transmission, supportive care. SARS-CoV-2 — positive-sense ssRNA, droplets and aerosols and fomites, anosmia and dysgeusia, spike protein binding ACE2 in lungs-intestines-heart-kidneys, NAAT or the less-sensitive rapid antigen test, mRNA and viral vector vaccines presenting the spike. THE PRION CASCADE: PrPc (alpha-helical) converts to PrPsc (beta-pleated), transmissible via CNS tissue or BSE-contaminated food; PrPsc resists protease and standard autoclaving and converts more PrPc; spongiform encephalopathy with dementia, ataxia, startle myoclonus, death — Creutzfeldt-Jakob disease, mad cow disease, and kuru" className="min-w-[940px]">')

# header
a('      {/* header */}')
a('      <g>')
a(f'        {R(24, Y_HDR, 932, 46, "fill-card stroke-border", rx="12", sw="1.4")}')
a(T(42, Y_HDR + 28, 11, "fill-foreground", "Viral vaccines, diagnosis & emerging viruses — the map (original KYP redraw)", weight="800"))
a(f'        {R(716, Y_HDR + 10, 240, 18, "fill-brand-soft", rx="9")}')
a(T(836, Y_HDR + 23, 7.6, "fill-brand", "Aedes · rabies · COVID · prions", weight="800", anchor="middle"))
a('      </g>')

# aedes panel
a('      {/* ===== THE AEDES TRIO ===== */}')
a('      <g>')
a(f'        {R(36, Y_AE, 908, AE_H, "fill-secondary/40 stroke-brand", rx="14", sw="1.5")}')
a(T(52, Y_AE + 20, 9, "fill-foreground", "THE AEDES TRIO + FLAVIVIRUS COUSINS — books 168", weight="800"))
for x, cw, ch in aedes_cols:
    a(f'        {R(x, Y_AE + 30, cw, 20, "fill-secondary", rx="4")}')
    a(T(x + 6, Y_AE + 44, 5.6, "fill-foreground", ch, weight="800"))
yy = Y_AE + 58
for i, (n, tyl, sxl, dx, txl, hh) in enumerate(aedes_rows):
    a(f'        {R(52, yy, 876, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(58, yy + 13, 5.2, "fill-emergency", n, weight="800", budget_w=98))
    for j, ln in enumerate(tyl):
        a(T(164, yy + 13 + j * 9, 4.6, "fill-muted-foreground", ln, budget_w=86))
    for j, ln in enumerate(sxl):
        a(T(262, yy + 13 + j * 9, 4.6, "fill-muted-foreground", ln, budget_w=294))
    a(T(568, yy + 13, 4.6, "fill-foreground", dx, weight="700", budget_w=98))
    for j, ln in enumerate(txl):
        a(T(676, yy + 13 + j * 9, 4.6, "fill-muted-foreground", ln, budget_w=248))
    yy += hh + 6
yy += 8
a(f'        {R(52, yy, 876, 12 + len(yf_w) * 9 + 6, "fill-card stroke-border", rx="4", sw="0.9")}')
a(T(58, yy + 12, 5.2, "fill-brand", "YELLOW FEVER", weight="800", budget_w=90))
for j, ln in enumerate(yf_w):
    a(T(152, yy + 12 + j * 9, 4.6, "fill-muted-foreground", ln, budget_w=768))
yy += 12 + len(yf_w) * 9 + 12
a(f'        {R(52, yy, 876, 12 + len(zk_w) * 9 + 6, "fill-card stroke-border", rx="4", sw="0.9")}')
a(T(58, yy + 12, 5.2, "fill-brand", "ZIKA", weight="800", budget_w=90))
for j, ln in enumerate(zk_w):
    a(T(152, yy + 12 + j * 9, 4.6, "fill-muted-foreground", ln, budget_w=768))
a('      </g>')

# emerging panel
a('      {/* ===== THE EMERGING SET ===== */}')
a('      <g>')
a(f'        {R(36, Y_EM, 908, EM_H, "fill-card stroke-border", rx="14", sw="1.4")}')
a(T(52, Y_EM + 20, 9, "fill-foreground", "THE EMERGING SET — rabies, Ebola, SARS-CoV-2 (book 169)", weight="800"))
yy = Y_EM + 34
for i, (t, dl, hh) in enumerate(em_rows):
    a(f'        {R(52, yy, 876, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(60, yy + 13, 5.6, "fill-brand", t, weight="800", budget_w=190))
    for j, ln in enumerate(dl):
        a(T(60, yy + 24 + j * 9, 4.6, "fill-muted-foreground", ln, budget_w=700))
    yy += hh + 6
a('      </g>')

# virion redraw
a('      {/* ===== THE SARS-CoV-2 VIRION (original redraw of the labeled diagram) ===== */}')
a('      <g>')
a(f'        {R(36, Y_VIR, 908, VIR_H, "fill-secondary/40 stroke-brand", rx="12", sw="1.5")}')
a(T(52, Y_VIR + 20, 8, "fill-foreground", "The SARS-CoV-2 virion — an original redraw of the labeled diagram (book 169)", weight="800"))
cx, cy = 210, Y_VIR + 74
a(f'        {C(cx, cy, 34, "fill-none stroke-brand", sw="1.6")}')
a(f'        {C(cx, cy, 30, "fill-none stroke-brand", sw="0.8")}')
# spikes (S protein): club-shaped — stem + knob
for k in range(10):
    ang = math.radians(18 + 36 * k)
    x1, y1 = cx + 34 * math.cos(ang), cy + 34 * math.sin(ang)
    x2, y2 = cx + 46 * math.cos(ang), cy + 46 * math.sin(ang)
    a(f'        {L(f"{x1:.1f}", f"{y1:.1f}", f"{x2:.1f}", f"{y2:.1f}", "stroke-emergency", "1.2")}')
    a(f'        {C(f"{x2:.1f}", f"{y2:.1f}", 3.2, "fill-card stroke-emergency", sw="1.0")}')
# M and E proteins: small embedded shapes
for k in range(8):
    ang = math.radians(40 + 45 * k)
    x1, y1 = cx + 32 * math.cos(ang), cy + 32 * math.sin(ang)
    a(f'        {C(f"{x1:.1f}", f"{y1:.1f}", 2.0, "fill-brand")}')
# helical capsid: internal coil
a(f'        {P(f"M {cx-16:.1f} {cy} L {cx+16:.1f} {cy-8:.1f} L {cx-16:.1f} {cy-2:.1f} L {cx+16:.1f} {cy+6:.1f} L {cx-16:.1f} {cy+12:.1f}", "stroke-emergency", "1.1")}')
# labels with leader lines
a(T(280, Y_VIR + 42, 5.2, "fill-foreground", "Spike (S) protein — the corona; binds ACE2 (lungs, intestines, heart, kidneys)", weight="700", budget_w=470))
a(f'        {L(277, Y_VIR + 40, 250, cy - 28, "stroke-muted-foreground", "0.7")}')
a(T(280, Y_VIR + 62, 5.2, "fill-foreground", "Lipid bilayer (the envelope)", weight="700", budget_w=470))
a(f'        {L(277, Y_VIR + 60, 244, cy - 6, "stroke-muted-foreground", "0.7")}')
a(T(280, Y_VIR + 82, 5.2, "fill-foreground", "Membrane (M) protein + Envelope (E) protein — embedded in the bilayer", weight="700", budget_w=470))
a(f'        {L(277, Y_VIR + 80, 241, cy + 10, "stroke-muted-foreground", "0.7")}')
a(T(280, Y_VIR + 102, 5.2, "fill-foreground", "Helical capsid with viral RNA (a ⊕ ssRNA genome)", weight="700", budget_w=470))
a(f'        {L(277, Y_VIR + 100, 226, cy + 8, "stroke-muted-foreground", "0.7")}')
a(T(760, Y_VIR + 56, 4.8, "fill-muted-foreground", "mRNA + viral vector vaccines present the", budget_w=170))
a(T(760, Y_VIR + 66, 4.8, "fill-muted-foreground", "SPIKE → anti-spike antibodies;", budget_w=170))
a(T(760, Y_VIR + 76, 4.8, "fill-muted-foreground", "NAAT (RT-PCR) is the diagnostic", budget_w=170))
a(T(760, Y_VIR + 86, 4.8, "fill-muted-foreground", "standard; the RAT is rapid but", budget_w=170))
a(T(760, Y_VIR + 96, 4.8, "fill-muted-foreground", "less sensitive.", budget_w=170))
a('      </g>')

# prion panel
a('      {/* ===== THE PRION CASCADE ===== */}')
a('      <g>')
a(f'        {R(36, Y_PR, 908, PR_H, "fill-card stroke-border", rx="14", sw="1.4")}')
a(T(52, Y_PR + 20, 9, "fill-foreground", "THE PRION CASCADE — PrPc → PrPsc (book 174)", weight="800"))
yy = Y_PR + 34
for i, (t, dl, hh) in enumerate(pr_rows):
    a(f'        {R(52, yy, 876, hh, "fill-secondary" if i % 2 == 0 else "fill-secondary/60", rx="4")}')
    a(T(60, yy + 13, 5.6, "fill-emergency", t, weight="800", budget_w=210))
    for j, ln in enumerate(dl):
        a(T(60, yy + 24 + j * 9, 4.6, "fill-muted-foreground", ln, budget_w=700))
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
    f.write("\n" + "\n".join(L25) + "\n")

bad = [s for s in AUDIT if s[4] > s[3]]
for s in bad:
    print(f"  OVERFLOW {s[0]} fs={s[1]} {s[4]}u > {s[3]}u :: {s[2][:50]!r}")
if bad:
    raise SystemExit(f"AUDIT FAILED: {len(bad)}")
print(f"AUDIT PASSED: {len(AUDIT)} text elements (M25); total height {TOTAL}u; aedes H={AE_H}; emerging H={EM_H}; prion H={PR_H}")
