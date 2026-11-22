#!/usr/bin/env python3
"""M20 nematodes + M21 cestodes-trematodes — generates BOTH components into
micro.tsx (width-budget machinery, 0.50 u/char/px). M20: the Intestinal/Tissue
split with 11 organisms. M21: Cestodes + Trematodes + Ectoparasites + the
Parasite-hints anchors (page ownership of books 157-158)."""
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
        AUDIT.append(("M20/21", size, text, budget_w, round(len(text) * U * size, 1)))
    return f"<text {a}>{t}</text>"

# ---------------- M20 ----------------
intestinal = [
    ("Enterobius vermicularis (pinworm)", "Causes anal pruritus, worse at night (eggs A visualized via tape test). Most common in children aged 5-10.", "Fecal-oral.", "Bendazoles, pyrantel pamoate."),
    ("Ascaris lumbricoides (giant roundworm)", "May cause obstruction at ileocecal valve, biliary obstruction, intestinal perforation; migrates from nose/mouth. Migration of larvae to alveoli → Löeffler syndrome (pulmonary eosinophilia).", "Fecal-oral; knobby-coated, oval eggs seen in feces under microscope B.", "Bendazoles."),
    ("Strongyloides stercoralis (threadworm)", "GI (eg, duodenitis), pulmonary (eg, dry cough, hemoptysis), and cutaneous (eg, pruritus) symptoms. Hyperinfection syndrome can be caused by accelerated autoinfection in the immunocompromised.", "Larvae in soil penetrate skin; rhabditiform larvae seen in feces under microscope.", "Ivermectin or bendazoles."),
    ("Ancylostoma spp, Necator americanus (hookworms)", "Cause microcytic anemia by sucking blood from intestinal wall. Cutaneous larva migrans—pruritic, serpiginous rash C.", "Larvae penetrate skin from walking barefoot on contaminated beach/soil.", "Bendazoles or pyrantel pamoate."),
    ("Trichinella spiralis", "Larvae enter bloodstream, encyst in striated muscle D → myositis. Trichinosis—fever, vomiting, nausea, periorbital edema, myalgia.", "Undercooked meat (especially pork); fecal-oral (less likely).", "Bendazoles."),
    ("Trichuris trichiura (whipworm)", "Often asymptomatic; loose stools, anemia, rectal prolapse in children.", "Fecal-oral.", "Bendazoles."),
    ("Toxocara canis", "Visceral larva migrans—migration into blood → inflammation of liver, eyes (visual impairment), CNS (seizures, coma), heart (myocarditis). Patients often asymptomatic.", "Fecal-oral.", "Bendazoles."),
]
tissue = [
    ("Onchocerca volvulus", "Black skin nodules, river blindness (“black sight”).", "Female black fly.", "Ivermectin (ivermectin for river blindness)."),
    ("Loa loa", "Swelling in skin, worm in conjunctiva.", "Deer fly, horse fly, mango fly.", "Diethylcarbamazine."),
    ("Wuchereria bancrofti, Brugia malayi", "Lymphatic filariasis (elephantiasis)—worms invade lymph nodes → inflammation → lymphedema E; symptom onset after 9 mo-1 yr.", "Female mosquito.", "Diethylcarbamazine."),
]

def build_grid(rows):
    out = []
    for n, dz, tx, rx in rows:
        dzl = wrap(dz, 5.0, 216)
        txl = wrap(tx, 5.0, 160)
        rxl = wrap(rx, 5.0, 150)
        h = 18 + max(len(dzl), len(txl), len(rxl)) * 10 + 10
        out.append((n, dzl, txl, rxl, h))
    return out

L20 = []
a20 = L20.append
gI = build_grid(intestinal)
gT = build_grid(tissue)
I_Y = 76
I_H = 24 + 26 + 6 + sum(h for *_, h in gI) + 8 * 6 + 12
T_Y = I_Y + I_H + 16
T_H = 24 + 26 + 6 + sum(h for *_, h in gT) + 8 * 2 + 12
ANC_Y = T_Y + T_H + 16
anc20 = "The route rails (cross-linked from M19's book-155 box): INGESTED — Enterobius, Ascaris, Toxocara, Trichinella, Trichuris · CUTANEOUS — Strongyloides, Ancylostoma, Necator · BITES — Loa loa, Onchocerca, Wuchereria · therapy spine: bendazoles for the intestinal set; ivermectin (Strongyloides, Onchocerca); diethylcarbamazine (Loa loa, Wuchereria)"
anc20_w = wrap(anc20, 6.2, 876)
ANC_H = 10 + len(anc20_w) * 13 + 10
FOOT_Y = ANC_Y + ANC_H + 14
foot20 = [
    "Original KYP redraw of the source's Nematodes (roundworms) table (pdf 178 / book 156 — pure vector; the printed photos are raster, COPYRIGHTED, described-in-text only). The source's own banner typo prints on this page: 'MICROCIOLOGY—PARASITOLOGY' (line 6).",
    "The Intestinal/Tissue split rails emit as standalone lines (22 and 140). FA's printed mnemonics (ivermectin for river blindness; DiphylloB12 latum is M21's) — this page's glosses stay in the table block only.",
]
foot20_w = [ln for raw in foot20 for ln in wrap(raw, 7.2, 944)]
TOTAL20 = FOOT_Y + len(foot20_w) * 12 + 16

a20('export function NematodeRouteMap() {')
a20('  const w = 980;')
a20(f'  const h = {TOTAL20};')
a20('  return (')
a20(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="Nematodes, the roundworms, an original KYP route map. THE INTESTINAL SET: Enterobius vermicularis (pinworm) — anal pruritus worse at night, eggs visualized via tape test, most common in children aged 5-10; Ascaris lumbricoides (giant roundworm) — ileocecal and biliary obstruction, intestinal perforation, migration from nose and mouth, larvae to alveoli causing Löeffler syndrome with pulmonary eosinophilia, knobby-coated oval eggs in feces; Strongyloides stercoralis (threadworm) — GI, pulmonary, and cutaneous symptoms with hyperinfection syndrome from accelerated autoinfection in the immunocompromised, rhabditiform larvae in feces, ivermectin or bendazoles; the hookworms Ancylostoma and Necator americanus — microcytic anemia from sucking blood, cutaneous larva migrans, skin penetration from barefoot beaches; Trichinella spiralis — larvae encyst in striated muscle causing myositis, fever, periorbital edema, from undercooked pork; Trichuris trichiura (whipworm) — rectal prolapse in children; Toxocara canis — visceral larva migrans into liver, eyes, CNS, heart. THE TISSUE SET: Onchocerca volvulus — black skin nodules and river blindness from the female black fly, ivermectin; Loa loa — swelling in skin, worm in conjunctiva, deer and horse and mango flies, diethylcarbamazine; Wuchereria bancrofti and Brugia malayi — lymphatic filariasis with elephantiasis from the female mosquito, diethylcarbamazine" className="min-w-[940px]">')
a20('      {/* header */}')
a20('      <g>')
a20('        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />')
a20(T(42, 42, 11, "fill-foreground", "Nematodes (roundworms) — the route map (original KYP redraw)", weight="800"))
a20('        <rect x="722" y="24" width="210" height="18" rx="9" className="fill-brand-soft" />')
a20(T(827, 37, 7.6, "fill-brand", "ingested · cutaneous · bites", weight="800", anchor="middle"))
a20('      </g>')

def panel20(y0, hh, title, rows, tag):
    a20('      {/* ===== ' + tag + ' ===== */}')
    a20('      <g>')
    a20(f'        <rect x="36" y="{y0}" width="908" height="{hh}" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />')
    a20(T(52, y0 + 22, 9, "fill-foreground", title, weight="800"))
    cols = [(52, 148, "ORGANISM"), (204, 224, "DISEASE"), (434, 166, "TRANSMISSION"), (606, 156, "TREATMENT")]
    for x, cw, ch in cols:
        a20(f'        <rect x="{x}" y="{y0 + 32}" width="{cw}" height="20" rx="4" className="fill-secondary" />')
        a20(T(x + 6, y0 + 46, 5.8, "fill-foreground", ch, weight="800"))
    yy = y0 + 60
    for i, (n, dzl, txl, rxl, hh2) in enumerate(rows):
        cls = "fill-secondary/60" if i % 2 else "fill-secondary"
        a20(f'        <rect x="52" y="{yy}" width="710" height="{hh2}" rx="4" className="{cls}" />')
        a20(T(58, yy + 13, 5.4, "fill-emergency", n, weight="800", budget_w=136))
        for j, ln in enumerate(dzl):
            a20(T(210, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=216))
        for j, ln in enumerate(txl):
            a20(T(440, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=160))
        for j, ln in enumerate(rxl):
            a20(T(612, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=150))
        yy += hh2 + 8
    a20('      </g>')

panel20(I_Y, I_H, "INTESTINAL — the ingested and cutaneous sets (book 156)", gI, "INTESTINAL")
panel20(T_Y, T_H, "TISSUE — the bites set (book 156)", gT, "TISSUE")
a20('      {/* anchors strip */}')
a20('      <g>')
a20(f'        <rect x="36" y="{ANC_Y}" width="908" height="{ANC_H}" rx="8" className="fill-secondary" />')
yy = ANC_Y + 20
for ln in anc20_w:
    a20(T(490, yy, 6.2, "fill-muted-foreground", ln, weight="700", anchor="middle", budget_w=880)); yy += 13
a20('      </g>')
a20('      {/* footer */}')
yy = FOOT_Y
for ln in foot20_w:
    a20(T(24, yy, 7.2, "fill-muted-foreground", ln, budget_w=944)); yy += 12
a20('    </svg>')
a20('  );')
a20('}')

# ---------------- M21 ----------------
cestodes = [
    ("Taenia solium", "Intestinal tapeworm (ingestion of larvae encysted in undercooked pork) AND cysticercosis, neurocysticercosis (cystic CNS lesions, seizures B) from ingestion of eggs in food contaminated with human feces.", "Undercooked pork (larvae); eggs in food contaminated with human feces.", "Praziquantel; albendazole for neurocysticercosis."),
    ("Diphyllobothrium latum", "Vitamin B12 deficiency (the tapeworm competes for B12 in intestine) → megaloblastic anemia.", "Ingestion of larvae in raw freshwater fish.", "Praziquantel, niclosamide."),
    ("Echinococcus granulosus", "Hydatid cysts (“eggshell calcification”) most commonly in liver E and lungs; cyst rupture can cause anaphylaxis. Sheep are an intermediate host.", "Ingestion of eggs in food contaminated with dog feces.", "Albendazole; surgery for complicated cysts."),
]
trematodes = [
    ("Schistosoma", "Liver and spleen enlargement, fibrosis, inflammation, portal hypertension (S mansoni egg with lateral spine A). S mansoni and S japonicum can both also cause intestinal schistosomiasis (diarrhea, abdominal pain, iron deficiency anemia). Chronic infection with S haematobium (egg with terminal spine B) can lead to squamous cell carcinoma of the bladder (painless hematuria) and pulmonary hypertension.", "Snails are intermediate host; cercariae penetrate skin of humans in contact with contaminated fresh water (eg, swimming or bathing).", "Praziquantel."),
    ("Clonorchis sinensis", "Biliary tract inflammation → pigmented gallstones; associated with cholangiocarcinoma.", "Undercooked fish.", "Praziquantel."),
]
ecto = [
    ("Sarcoptes scabiei", "Mites burrow into stratum corneum and cause scabies—pruritus (worse at night) and serpiginous burrows (lines) often between fingers and toes A. Common in children, crowded populations (jails, nursing homes); transmission through skin-to-skin contact (most common) or via fomites.", "Treatment: permethrin cream, oral ivermectin, washing/drying all clothing/bedding, treat close contacts."),
    ("Pediculus humanus and Phthirus pubis", "Blood-sucking lice that cause intense pruritus with excoriations — scalp and neck (head lice), waistband and axilla (body lice), or pubic and perianal regions (pubic lice) B. Body lice can transmit Rickettsia prowazekii (epidemic typhus), Borrelia recurrentis (relapsing fever), Bartonella quintana (trench fever). Children with head lice can be treated at home without interrupting school attendance.", "Treatment: pyrethroids, malathion, or ivermectin lotion, and nit combing."),
    ("Cimex lectularius and Cimex hemipterus", "Bed bugs — blood-feeding insects that infest dwellings; painless bites with pruritic, erythematous papules with central hemorrhagic punctum; a clustered or linear pattern of bites seen upon awakening is suggestive; diagnosis confirmed by direct identification of bed bugs in the dwelling; bites self resolve within 1 week; eradication of the infestation is critical.", "Spreads among rooms; cohabitants may exhibit similar symptoms; via travelers from infested hotels and unwashed used bedding."),
]

L21 = []
a21 = L21.append
gC = build_grid(cestodes)
gTr = build_grid(trematodes)
gE = []  # two-column ecto rows: disease (left, wide) + treatment (right)
for n, d, rx in ecto:
    dl = wrap(d, 5.0, 386)
    rl = wrap(rx, 5.0, 272)
    h = 18 + max(len(dl), len(rl)) * 10 + 10
    gE.append((n, dl, rl, h))
C_Y = 76
C_H = 24 + 26 + 6 + sum(h for *_, h in gC) + 8 * 2 + 12
TR_Y = C_Y + C_H + 16
TR_H = 24 + 26 + 6 + sum(h for *_, h in gTr) + 8 * 1 + 12
E_Y = TR_Y + TR_H + 16
E_H = 24 + sum(18 + hh + 10 for *_, _, _, hh in gE) + 12
ANC_Y = E_Y + E_H + 16
anc21 = "The Parasite-hints directory (book 158): biliary tract disease, cholangiocarcinoma → Clonorchis sinensis · brain cysts, seizures → Taenia solium (neurocysticercosis) · hematuria, SCC bladder → Schistosoma haematobium · liver hydatid cysts, infected dogs → Echinococcus granulosus · iron deficiency anemia → Ancylostoma, Necator · myalgias, periorbital edema → Trichinella · nocturnal perianal pruritus → Enterobius · portal hypertension → S mansoni, S japonicum · B12 deficiency → Diphyllobothrium latum"
anc21_w = wrap(anc21, 6.2, 876)
ANC_H21 = 10 + len(anc21_w) * 13 + 10
FOOT_Y = ANC_Y + ANC_H21 + 14
foot21 = [
    "Original KYP redraw of the source's Cestodes (tapeworms), Trematodes (flukes), Ectoparasites, and Parasite-hints blocks (pdf 179-180 / books 157-158 — pure vector; the printed photos are raster, COPYRIGHTED, described-in-text only). The source's banner typo prints on all three pages: 'MICROCIOLOGY—PARASITOLOGY'.",
    "FA's printed glosses (DiphylloB12 latum; ivermectin for river blindness is M20's) stay in the table block only. The Ectoparasites and Parasite-hints blocks print on book 158 under M21's page ownership (the M15/M9 page-ownership rule).",
]
foot21_w = [ln for raw in foot21 for ln in wrap(raw, 7.2, 944)]
TOTAL21 = FOOT_Y + len(foot21_w) * 12 + 16

a21('export function CestodeTrematodeMap() {')
a21('  const w = 980;')
a21(f'  const h = {TOTAL21};')
a21('  return (')
a21(f'    <svg viewBox={{`0 0 ${{w}} ${{h}}`}} width="100%" role="img" aria-label="Cestodes and trematodes with the ectoparasites, an original KYP map. THE CESTODES (book 157): Taenia solium — the intestinal tapeworm from larvae encysted in undercooked pork, and cysticercosis with neurocysticercosis (cystic CNS lesions, seizures) from eggs in food contaminated with human feces; praziquantel with albendazole for neurocysticercosis. Diphyllobothrium latum — vitamin B12 deficiency with megaloblastic anemia from raw freshwater fish; praziquantel or niclosamide. Echinococcus granulosus — hydatid cysts with eggshell calcification in liver and lungs, rupture causing anaphylaxis, sheep the intermediate host, eggs from dog feces; albendazole with surgery for complicated cysts. THE TREMATODES: Schistosoma — liver and spleen enlargement with fibrosis and portal hypertension (the S mansoni egg with its lateral spine); intestinal schistosomiasis from mansoni and japonicum; the S haematobium egg with its terminal spine leading to squamous cell carcinoma of the bladder with painless hematuria and pulmonary hypertension; snails the intermediate host with cercariae penetrating skin in contaminated fresh water; praziquantel. Clonorchis sinensis — biliary tract inflammation with pigmented gallstones and cholangiocarcinoma from undercooked fish; praziquantel. THE ECTOPARASITES (book 158): Sarcoptes scabiei with scabies (nocturnal pruritus, serpiginous burrows between fingers and toes; crowded populations; permethrin and ivermectin); Pediculus humanus and Phthirus pubis (head, body, and pubic lice — body lice transmitting prowazekii, recurrentis, and quintana); and Cimex lectularius (bed bugs with painless bites and hemorrhagic punctum, eradication critical)" className="min-w-[940px]">')
a21('      {/* header */}')
a21('      <g>')
a21('        <rect x="24" y="14" width="932" height="46" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />')
a21(T(42, 42, 11, "fill-foreground", "Cestodes &amp; trematodes + ectoparasites — the hint map (original KYP redraw)", weight="800"))
a21('        <rect x="700" y="24" width="232" height="18" rx="9" className="fill-brand-soft" />')
a21(T(816, 37, 7.6, "fill-brand", "spines · stones · the hint directory", weight="800", anchor="middle"))
a21('      </g>')

def panel21(y0, hh, title, rows, tag):
    a21('      {/* ===== ' + tag + ' ===== */}')
    a21('      <g>')
    a21(f'        <rect x="36" y="{y0}" width="908" height="{hh}" rx="14" className="fill-secondary/40 stroke-brand" strokeWidth="1.5" />')
    a21(T(52, y0 + 22, 9, "fill-foreground", title, weight="800"))
    cols = [(52, 120, "ORGANISM"), (178, 224, "DISEASE"), (410, 140, "TRANSMISSION"), (558, 204, "TREATMENT")]
    for x, cw, ch in cols:
        a21(f'        <rect x="{x}" y="{y0 + 32}" width="{cw}" height="20" rx="4" className="fill-secondary" />')
        a21(T(x + 6, y0 + 46, 5.8, "fill-foreground", ch, weight="800"))
    yy = y0 + 60
    for i, (n, dzl, txl, rxl, hh2) in enumerate(rows):
        cls = "fill-secondary/60" if i % 2 else "fill-secondary"
        a21(f'        <rect x="52" y="{yy}" width="710" height="{hh2}" rx="4" className="{cls}" />')
        a21(T(58, yy + 13, 5.4, "fill-emergency", n, weight="800", budget_w=108))
        for j, ln in enumerate(dzl):
            a21(T(184, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=216))
        for j, ln in enumerate(txl or []):
            a21(T(416, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=160))
        for j, ln in enumerate(rxl):
            a21(T(564, yy + 13 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=150))
        yy += hh2 + 8
    a21('      </g>')

panel21(C_Y, C_H, "CESTODES (tapeworms) — book 157", gC, "CESTODES")
panel21(TR_Y, TR_H, "TREMATODES (flukes) — book 157 (Clonorchis heading emits at the page end)", gTr, "TREMATODES")
a21('      {/* ===== ECTOPARASITES ===== */}')
a21('      <g>')
a21(f'        <rect x="36" y="{E_Y}" width="908" height="{E_H}" rx="14" className="fill-card stroke-border" strokeWidth="1.4" />')
a21(T(52, E_Y + 22, 9, "fill-foreground", "ECTOPARASITES — book 158 (page ownership)", weight="800"))
yy = E_Y + 32
for i, (n, dl, rl, hh) in enumerate(gE):
    cls = "fill-secondary/60" if i % 2 else "fill-secondary"
    a21(f'        <rect x="52" y="{yy}" width="876" height="{hh}" rx="6" className="{cls}" />')
    a21(T(60, yy + 14, 6.2, "fill-brand", n, weight="800", budget_w=180))
    for j, ln in enumerate(dl):
        a21(T(250, yy + 14 + j * 10, 5.0, "fill-muted-foreground", ln, budget_w=386))
    for j, ln in enumerate(rl):
        a21(T(648, yy + 14 + j * 10, 5.0, "fill-foreground", ln, budget_w=272))
    yy += hh + 10
a21('      </g>')
a21('      {/* anchors strip */}')
a21('      <g>')
a21(f'        <rect x="36" y="{ANC_Y}" width="908" height="{ANC_H21}" rx="8" className="fill-secondary" />')
yy = ANC_Y + 20
for ln in anc21_w:
    a21(T(490, yy, 6.2, "fill-muted-foreground", ln, weight="700", anchor="middle", budget_w=880)); yy += 13
a21('      </g>')
a21('      {/* footer */}')
yy = FOOT_Y
for ln in foot21_w:
    a21(T(24, yy, 7.2, "fill-muted-foreground", ln, budget_w=944)); yy += 12
a21('    </svg>')
a21('  );')
a21('}')

with open('src/components/kyp/usmle/visuals/micro.tsx', 'a', encoding='utf8') as f:
    f.write("\n" + "\n".join(L20) + "\n")
    f.write("\n" + "\n".join(L21) + "\n")

bad = [s for s in AUDIT if s[4] > s[3]]
for s in bad:
    print(f"  OVERFLOW {s[0]} fs={s[1]} {s[4]}u > {s[3]}u :: {s[2][:50]!r}")
if bad:
    raise SystemExit(f"AUDIT FAILED: {len(bad)}")
print(f"AUDIT PASSED: {len(AUDIT)} text elements (M20 + M21)")
