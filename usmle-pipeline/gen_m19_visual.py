#!/usr/bin/env python3
"""M19 blood-tissue-protozoa — generates the BloodTissueProtozoaMap component
into micro.tsx (width-budget machinery, 0.50 u/char/px). Three panels:
CNS (Toxoplasma, Naegleria, T. brucei), hematologic (Plasmodium x4 + Babesia),
others (T. cruzi, Leishmania, Trichomonas — incl. the M18 cross-link)."""
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

cns = [
    ("Toxoplasma gondii",
     "Immunocompetent: mononucleosis-like symptoms, ⊝ heterophile antibody test. Reactivation in AIDS → brain abscesses, usually multiple ring-enhancing lesions on MRI. Congenital toxoplasmosis: classic triad of chorioretinitis, hydrocephalus, and intracranial calcifications.",
     "Cysts in meat (most common); oocysts in cat feces; crosses placenta (pregnant patients should avoid cats)",
     "Serology, biopsy (tachyzoite); PCR of amniotic fluid for possible intrauterine disease",
     "Sulfadiazine + pyrimethamine; prophylaxis with TMP-SMX when CD4+ <100 cells/mm³"),
    ("Naegleria fowleri",
     "Rapidly fatal meningoencephalitis",
     "Swimming in warm freshwater; enters CNS through olfactory nerve via cribriform plate",
     "Amoebas in CSF",
     "Amphotericin B has been effective for a few survivors"),
    ("Trypanosoma brucei",
     "African sleeping sickness—enlarged lymph nodes, recurring fever (due to antigenic variation), somnolence, coma",
     "Tsetse fly, a painful bite",
     "Trypomastigote in blood smear",
     "Suramin for bloodborne disease or melarsoprol for CNS penetration"),
]
heme = [
    ("Plasmodium",
     "Malaria—cyclic fevers, headache, anemia, splenomegaly; hypoglycemia in severe disease",
     "Anopheles mosquito",
     "Peripheral blood smear (also allows for identification of species). P malariae: 72-hr fever cycle (quartan), trophozoite ring within RBC. P vivax/ovale: 48-hr fever cycle (tertian); dormant form (hypnozoite) in liver; trophozoites and Schüffner stippling (small red granules) within RBC cytoplasm. P falciparum: severe, irregular fever pattern; parasitized RBCs may occlude capillaries in brain (cerebral malaria), kidneys, lungs; trophozoite ring (headphone shaped) within RBC; crescent-shaped gametocytes.",
     "If sensitive, chloroquine; if resistant, mefloquine, doxycycline or atovaquone/proguanil. If life threatening, intravenous quinine or artesunate (test for G6PD deficiency). P vivax/ovale: add primaquine to target hypnozoites"),
    ("Babesia",
     "Babesiosis—fever and hemolytic anemia; predominantly in northeastern and north central United States; asplenia ↑ risk of severe disease due to inability to clear infected RBCs",
     "Ixodes tick (also vector for Borrelia burgdorferi and Anaplasma spp)",
     "Ring form, “Maltese cross”; PCR",
     "Atovaquone + azithromycin"),
]
others = [
    ("Trypanosoma cruzi",
     "Chagas disease—dilated cardiomyopathy with apical atrophy, megacolon, megaesophagus (T cruzi causes big problems); predominantly in South America. Unilateral periorbital swelling (Romaña sign) characteristic of acute stage",
     "Triatomine insect (kissing bug) bites and defecates around the mouth or eyes → fecal transmission into bite site or mucosa",
     "Trypomastigote in blood smear",
     "Benznidazole or nifurtimox"),
    ("Leishmania spp",
     "Visceral leishmaniasis (kala-azar)—spiking fevers, hepatosplenomegaly, pancytopenia. Cutaneous leishmaniasis—skin ulcers",
     "Sandfly",
     "Macrophages containing amastigotes",
     "Amphotericin B, sodium stibogluconate"),
    ("Trichomonas vaginalis",
     "Vaginitis—foul-smelling, greenish discharge; itching and burning; do not confuse with Gardnerella vaginalis, a gram-variable bacterium associated with bacterial vaginosis",
     "Sexual (cannot exist outside human because it cannot form cysts)",
     "Trophozoites (motile) on wet mount; punctate cervical hemorrhages (“strawberry cervix”)",
     "Metronidazole for patient and partner(s) (prophylaxis; check for STI)"),
]

def grid_panel(rows, has_5th_col=True):
    out = []
    for n, dz, tx, dx, rx in rows:
        dzl = wrap(dz, 5.0, 202)
        txl = wrap(tx, 5.0, 98)
        dxl = wrap(dx, 5.0, 218)
        rxl = wrap(rx, 5.0, 166)
        h = 18 + max(len(dzl), len(txl), len(dxl), len(rxl)) * 10 + 10
        out.append((n, dzl, txl, dxl, rxl, h))
    return out

L = []
add = L.append
g1 = grid_panel(cns)
g2 = grid_panel(heme)
g3 = grid_panel(others)
P1_Y = 76
P1_H = 24 + 26 + 6 + sum(h for *_, h in g1) + 8 * 2 + 12
P2_Y = P1_Y + P1_H + 16
P2_H = 24 + 26 + 6 + sum(h for *_, h in g2) + 8 * 1 + 12
P3_Y = P2_Y + P2_H + 16
P3_H = 24 + 26 + 6 + sum(h for *_, h in g3) + 8 * 2 + 12
ANC_Y = P3_Y + P3_H + 16
anc = "The vector names the disease: tsetse fly (T. brucei, painful bite) · triatomine kissing bug (T. cruzi — Romaña sign) · sandfly (Leishmania) · Anopheles (Plasmodium) · Ixodes (Babesia — also Borrelia and Anaplasma) · cat feces cysts in meat (Toxoplasma — the TORCH triad) · warm freshwater (Naegleria) · sexual, no cysts (Trichomonas)"
anc_w = wrap(anc, 6.2, 876)
ANC_H = 10 + len(anc_w) * 13 + 10
FOOT_Y = ANC_Y + ANC_H + 14
footer = [
    "Original KYP redraw of the source's three protozoa tables (pdf 175-177 / book 153-155: CNS, hematologic, others — pure vector; the 12 printed photos are raster, COPYRIGHTED, described-in-text only). The TREATMENT header on book 153 emits at the page bottom (line 96) — late figure-block emission documented.",
    "The 'Nematode routes of infection' box prints on pdf 177 (this page's ownership) and is carried in the note's table block; M20's nematode note cross-links it. FA's printed mnemonics (the sleeping-sickness 'I sure am mellow' gloss; 'T cruzi causes big problems') are NOT reproduced — verification only, in the table block.",
]
footer_w = [ln for raw in footer for ln in wrap(raw, 7.2, 944)]
TOTAL = FOOT_Y + len(footer_w) * 12 + 16

add('export function BloodTissueProtozoaMap() {')
add('  const w = 980;')
add(f'  const h = {TOTAL};')
add('  return (')
add(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="Blood and tissue protozoa, an original KYP vector map. THE CNS TABLE (book 153): Toxoplasma gondii — mononucleosis-like symptoms with a negative heterophile antibody test in the immunocompetent; reactivation in AIDS producing brain abscesses as multiple ring-enhancing lesions on MRI; the congenital triad of chorioretinitis, hydrocephalus, and intracranial calcifications; cysts in meat most commonly, oocysts in cat feces, crossing the placenta; serology and biopsy with tachyzoites, PCR of amniotic fluid; sulfadiazine plus pyrimethamine with TMP-SMX prophylaxis under CD4 100. Naegleria fowleri — rapidly fatal meningoencephalitis from swimming in warm freshwater, entering the CNS through the olfactory nerve via the cribriform plate; amoebas in CSF; amphotericin B for the few survivors. Trypanosoma brucei — African sleeping sickness with enlarged lymph nodes, recurring fever from antigenic variation, somnolence and coma; the painful bite of the tsetse fly; trypomastigote in blood smear; suramin for bloodborne disease, melarsoprol for CNS penetration. THE HEMATOLOGIC TABLE (book 154): Plasmodium — malaria with cyclic fevers, headache, anemia, splenomegaly, and hypoglycemia in severe disease, from the Anopheles mosquito, diagnosed on peripheral blood smear: P malariae the 72-hour quartan cycle with the trophozoite ring in the RBC; P vivax and ovale the 48-hour tertian cycle with the dormant hypnozoite in the liver and Schüffner stippling; P falciparum severe and irregular with cerebral malaria from capillary occlusion, headphone-shaped rings and crescent gametocytes; therapy by sensitivity — chloroquine if sensitive, mefloquine or doxycycline or atovaquone-proguanil if resistant, intravenous quinine or artesunate if life-threatening with a G6PD check, and primaquine added for the vivax-ovale hypnozoites. Babesia — babesiosis with fever and hemolytic anemia in the northeastern and north central US, worse in asplenia; the Ixodes tick that also carries Borrelia and Anaplasma; the ring form and Maltese cross on smear with PCR; atovaquone plus azithromycin. THE OTHERS TABLE (book 155): Trypanosoma cruzi — Chagas disease with dilated cardiomyopathy with apical atrophy, megacolon, megaesophagus, and the Romaña sign; the triatomine kissing bug defecating around the mouth and eyes; trypomastigote in blood smear; benznidazole or nifurtimox. Leishmania — visceral kala-azar with spiking fevers, hepatosplenomegaly, pancytopenia, and cutaneous skin ulcers; the sandfly; macrophages containing amastigotes; amphotericin B or sodium stibogluconate. Trichomonas vaginalis (the M18 cross-link) — the strawberry cervix of the sexual axis, metronidazole for patient and partners" className="min-w-[940px]">')
add('      {/* header */}')
add('      <g>')
add('        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />')
add(T(42, 42, 11, "fill-foreground", "Blood &amp; tissue protozoa — the vector map (original KYP redraw)", weight="800"))
add('        <rect x="712" y="24" width="220" height="18" rx="9" className="fill-brand-soft" />')
add(T(822, 37, 7.6, "fill-brand", "smear · vector · the cross axis", weight="800", anchor="middle"))
add('      </g>')

def panel(y0, hh, title, rows, tag):
    add('      {/* ===== ' + tag + ' ===== */}')
    add('      <g>')
    add(f'        <rect x="36" y="{y0}" width="908" height="{hh}" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />')
    add(T(52, y0 + 22, 9, "fill-foreground", title, weight="800"))
    cols = [(52, 100, "ORGANISM"), (162, 214, "DISEASE"), (386, 116, "TRANSMISSION"), (512, 230, "DIAGNOSIS"), (752, 180, "TREATMENT")]
    for x, cw, ch in cols:
        add(f'        <rect x="{x}" y="{y0 + 32}" width="{cw}" height="20" rx="4" className="fill-secondary" />')
        add(T(x + 6, y0 + 46, 5.8, "fill-foreground", ch, weight="800"))
    yy = y0 + 60
    for i, (n, dzl, txl, dxl, rxl, hh2) in enumerate(rows):
        cls = "fill-secondary/60" if i % 2 else "fill-secondary"
        add(f'        <rect x="52" y="{yy}" width="880" height="{hh2}" rx="4" className="{cls}" />')
        add(T(58, yy + 13, 6.0, "fill-emergency", n, weight="800", budget_w=88))
        for j, ln in enumerate(dzl):
            add(T(168, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=202))
        for j, ln in enumerate(txl):
            add(T(392, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=98))
        for j, ln in enumerate(dxl):
            add(T(518, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=218))
        for j, ln in enumerate(rxl):
            add(T(758, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=166))
        yy += hh2 + 8
    add('      </g>')

panel(P1_Y, P1_H, "PROTOZOA — CNS INFECTIONS (book 153)", g1, "CNS TABLE")
panel(P2_Y, P2_H, "PROTOZOA — HEMATOLOGIC INFECTIONS (book 154)", g2, "HEMATOLOGIC TABLE")
panel(P3_Y, P3_H, "PROTOZOA — OTHERS (book 155; incl. the Trichomonas M18 cross-link)", g3, "OTHERS TABLE")
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
print(f"geometry: P1({P1_Y},{P1_H}) P2({P2_Y},{P2_H}) P3({P3_Y},{P3_H}) anchors({ANC_Y},{ANC_H}) footer@{FOOT_Y}")
