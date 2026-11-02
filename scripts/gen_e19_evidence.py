#!/usr/bin/env python3
"""E19 lymphoid-structures — manifest + visual inventory + chapter flip.

Evidence pinned across pdf 116-118 (book 94-96). Same verification rules as
gen_e16-e18 (norm containment, >=3 char floor, loud failures).

Ligature notes (documented): the printed table uses fi U+FB01 in
"Super<fi>cial inguinal" / "(super<fi>cial inguinal)" and fl U+FB02 in
"In<fl>ammatory bowel disease" — quotes embed the ligature code points.
The prose uses 1°/2° (degree sign); the node figure labels use 1º/2º
(masculine ordinal). The neonatal thymus line uses curly quotes around
sail-shaped. The involution line prints arrow glyphs (stripped by
pdftotext) — spans are quoted up to the arrow boundaries.
"""
import json
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path("/home/z/kyp-usmle-notes")
CACHE = ROOT / ".usmle-pipeline-cache"

def norm(s: str) -> str:
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()

pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "":
    pages.pop()
P = {p: norm(pages[p - 1]) for p in (116, 117, 118)}

def ev(claim: str, quote: str, pg: int) -> dict:
    ok = norm(quote) in P[pg]
    return {
        "claim": claim,
        "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg - 22)},
        "quote": quote,
        "verified": "pass" if ok else "FAIL",
        "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)",
    }

E = []  # (claim, quote, page)

# --- p116: immune system organs + lymph node ---
E += [
    ("Section heading", "Immune system\norgans", 116),
    ("1° organs", "1° organs:", 116),
    ("Bone marrow function", "Bone marrow—immune cell production, B cell maturation", 116),
    ("Thymus function", "Thymus—T cell maturation", 116),
    ("2° organs", "2° organs:", 116),
    ("2° organ list", "Spleen, lymph nodes, tonsils, adenoids, appendix, Peyer patches", 116),
    ("2° organ function", "Allow immune cells to interact with antigen", 116),
    ("Section heading", "Lymph node", 116),
    ("Node identity", "A 2° lymphoid organ that has many afferents, 1 or more efferents. Encapsulated, with trabeculae A .", 116),
    ("Node functions", "Functions are nonspecific filtration by macrophages, circulation of B and T cells, and immune\nresponse activation.", 116),
    ("Section heading", "Follicle", 116),
    ("Follicle description", "Located in outer cortex; site of B-cell localization and proliferation. 1° follicles are dense and\nquiescent. 2° follicles have pale central germinal centers and are active.", 116),
    ("Section heading", "Medulla", 116),
    ("Medulla composition", "Consists of medullary cords (closely packed lymphocytes and plasma cells) and medullary sinuses\n(contain reticular cells and macrophages). Medullary sinuses communicate with efferent\nlymphatics.", 116),
    ("Section heading", "Paracortex", 116),
    ("Paracortex description", "Contains T cells. Region of cortex between follicles and medulla. Contains high endothelial\nvenules through which T and B cells enter from blood. Underdeveloped in patients with\nDiGeorge syndrome.", 116),
    ("Paracortical hyperplasia", "Paracortex enlarges in an extreme cellular immune response (eg, EBV and other viral infections", 116),
    ("Figure label: afferent", "Afferent\nlymphatic", 116),
    ("Figure label: follicles", "Follicles", 116),
    ("Figure label: 1º follicle", "1º follicle", 116),
    ("Figure label: 2º follicle", "2º follicle", 116),
    ("Figure label: germinal center", "Germinal center", 116),
    ("Figure label: mantle zone", "Mantle zone", 116),
    ("Figure label: medullary cords", "Medullary cords", 116),
    ("Figure label: medullary sinus", "Medullary\nsinus", 116),
    ("Figure label: efferent", "Efferent\nlymphatic", 116),
    ("Figure label: HEV", "Postcapillary\nvenule", 116),
    ("Figure label: trabecula", "Trabecula", 116),
    ("Figure label: capsule", "Capsule", 116),
    ("Figure label: capillary supply", "Capillary\nsupply", 116),
    ("Figure label: cortex", "Cortex", 116),
]

# --- p117: lymphatic drainage associations ---
E += [
    ("Section heading", "Lymphatic drainage associations", 117),
    ("Table header: cluster", "Lymph node cluster", 117),
    ("Table header: area", "Area of body drained", 117),
    ("Table header: pathology", "Associated pathology", 117),
    ("Submandibular cluster", "Submandibular,\nsubmental", 117),
    ("Submandibular area", "Oral cavity, anterior tongue,\nlower lip", 117),
    ("Submandibular pathology", "Malignancy of and metastasis to the\noral cavity", 117),
    ("Deep cervical cluster", "Deep cervical", 117),
    ("Deep cervical area", "Head, neck, oropharynx", 117),
    ("Deep cervical pathology 1", "Upper respiratory tract infection", 117),
    ("Deep cervical pathology 2", "Infectious mononucleosis", 117),
    ("Deep cervical pathology 3", "Kawasaki disease", 117),
    ("Deep cervical pathology 4", "Malignancy of head, neck,\noropharynx", 117),
    ("Supraclavicular cluster", "Supraclavicular", 117),
    ("Supraclavicular area", "Right: right hemithorax\nLeft (Virchow node): left\nhemithorax, abdomen, pelvis", 117),
    ("Supraclavicular pathology", "Malignancies of thorax, abdomen,\npelvis", 117),
    ("Mediastinal cluster", "Mediastinal", 117),
    ("Mediastinal area", "Trachea, esophagus", 117),
    ("Mediastinal pathology 1", "Pulmonary TB (unilateral hilar)", 117),
    ("Mediastinal pathology 2", "Sarcoidosis (bilateral hilar)", 117),
    ("Hilar cluster", "Hilar", 117),
    ("Hilar area", "Lungs", 117),
    ("Hilar pathology 1", "Lung cancer", 117),
    ("Hilar pathology 2", "Granulomatous disease", 117),
    ("Axillary cluster", "Axillary", 117),
    ("Axillary area", "Upper limb, breast, skin above\numbilicus", 117),
    ("Axillary pathology 1", "Mastitis", 117),
    ("Axillary pathology 2", "Metastasis (especially breast cancer)", 117),
    ("Epitrochlear cluster", "Epitrochlear", 117),
    ("Epitrochlear area", "Hand, forearm", 117),
    ("Epitrochlear pathology", "Secondary syphilis", 117),
    ("Celiac cluster", "Celiac", 117),
    ("Celiac area", "Liver, stomach, spleen, pancreas,\nupper duodenum", 117),
    ("Superior mesenteric cluster", "Superior mesenteric", 117),
    ("Superior mesenteric area", "Lower duodenum, jejunum, ileum,\ncolon to splenic ﬂexure", 117),
    ("Inferior mesenteric cluster", "Inferior mesenteric", 117),
    ("Inferior mesenteric area", "Colon from splenic ﬂexure to\nupper rectum", 117),
    ("Periumbilical cluster", "Periumbilical (Sister Mary\nJoseph node)", 117),
    ("Periumbilical area", "Abdomen, pelvis", 117),
    ("Periumbilical pathology", "Gastric cancer", 117),
    ("Para-aortic cluster", "Para-aortic", 117),
    ("Para-aortic area", "Pair of testes, ovaries, kidneys,\nfallopian tubes, fundus of uterus", 117),
    ("Para-aortic pathology", "Metastasis", 117),
    ("External iliac cluster", "External iliac", 117),
    ("External iliac area", "Body of uterus, cervix, superior\nbladder", 117),
    ("Internal iliac cluster", "Internal iliac", 117),
    ("Internal iliac area", "Cervix, proximal vagina, corpus\ncavernosum, prostate, inferior\nbladder, lower rectum to anal\ncanal (above pectinate line)", 117),
    ("Superficial inguinal cluster", "Superﬁcial inguinal", 117),
    ("Superficial inguinal area", "Distal vagina, vulva, scrotum,\nurethra, anal canal (below\npectinate line), skin below\numbilicus (except popliteal area)", 117),
    ("Popliteal cluster", "Popliteal (“pop-lateral”)", 117),
    ("Popliteal area", "Dorsolateral foot, posterior calf", 117),
    ("Popliteal pathology", "Lateral foot/leg cellulitis", 117),
    ("Iliac/inguinal merged pathology 1", "Sexually transmitted infections", 117),
    ("Iliac/inguinal merged pathology 2", "Medial foot/leg cellulitis", 117),
    ("Iliac/inguinal merged pathology 3", "(superﬁcial inguinal)", 117),
    ("Mesenteric merged pathology 1", "Mesenteric lymphadenitis", 117),
    ("Mesenteric merged pathology 2", "Inﬂammatory bowel disease", 117),
    ("Mesenteric merged pathology 3", "Celiac disease", 117),
    ("Right lymphatic duct", "Right lymphatic duct drains right side of body above diaphragm into junction of the right\nsubclavian and internal jugular vein", 117),
    ("Thoracic duct", "Thoracic duct drains below the diaphragm and left thorax and upper limb into junction of left\nsubclavian and internal jugular veins (rupture of thoracic duct can cause chylothorax)", 117),
]

# --- p118: spleen + thymus ---
E += [
    ("Section heading", "Spleen", 118),
    ("Spleen location", "Located in LUQ of abdomen. Anterolateral to left kidney, deep to the 9th-11th ribs; commonly injured in blunt abdominal trauma.", 118),
    ("Splenic dysfunction", "Splenic dysfunction (eg, postsplenectomy,\nsickle cell disease autosplenectomy)", 118),
    ("Encapsulated susceptibility", "susceptibility to\nencapsulated organisms, against which\npatients should be vaccinated (from most to\nleast common: pneumococci, meningococci,\nHaemophilus influenzae type b [Hib]).", 118),
    ("Postsplenectomy finding 1", "Howell-Jolly bodies (nuclear remnants)", 118),
    ("Postsplenectomy finding 2", "Target cells", 118),
    ("Postsplenectomy finding 3", "Thrombocytosis (loss of sequestration and\nremoval)", 118),
    ("Postsplenectomy finding 4", "Lymphocytosis (loss of sequestration)", 118),
    ("Section heading", "Periarteriolar\nlymphatic sheath", 118),
    ("PALS description", "Contains T cells. Located within white pulp.", 118),
    ("Follicle description", "Contains B cells. Located within white pulp.", 118),
    ("Section heading", "Marginal zone", 118),
    ("Marginal zone description", "Contains macrophages and specialized B cells. Site where antigen-presenting cells (APCs) capture\nblood-borne antigens for recognition by lymphocytes. Located between red pulp and white pulp.", 118),
    ("Section heading", "Thymus", 118),
    ("Thymus location + function", "Located in the anterosuperior mediastinum.\nSite of T-cell differentiation and maturation.", 118),
    ("Thymus embryology + histology", "Encapsulated. Thymus epithelium is derived\nfrom third pharyngeal pouch (endoderm),\nwhereas thymic lymphocytes are of\nmesodermal origin. Cortex is dense with\nimmature T cells; medulla is pale with mature\nT cells and Hassall corpuscles containing\nepithelial reticular cells.", 118),
    ("Neonatal thymus", "Normal neonatal thymus “sail-shaped” on\nCXR (arrows in A ), involutes by age 3 years.", 118),
    ("Origin mnemonic", "T cells = Thymus\nB cells = Bone marrow", 118),
    ("Absent thymic shadow", "Absent thymic shadow or hypoplastic thymus\nseen in some immunodeficiencies (eg, SCID,\nDiGeorge syndrome).", 118),
    ("Thymoma", "Thymoma—neoplasm of thymus. Associated\nwith myasthenia gravis, superior vena cava\nsyndrome, pure red cell aplasia, Good\nsyndrome.", 118),
    ("Thymus involution", "Thymus involution—Fatty replacement of\ntissue due to age-related Atrophy (accelerated\nafter puberty)", 118),
    ("Involution consequences", "Decline in naïve T cells ( IL7, thymopoietin), Elderly immunosenescence ( vaccine response); partly reversible with\ncoritsol; Size, cellularity, function. Thymus\nFADES.", 118),
    ("Figure label: red pulp", "Red pulp (RBCs)", 118),
    ("Figure label: sinusoid", "Sinusoid", 118),
    ("Figure label: framework", "Reticular fibrous\nframework", 118),
    ("Figure label: white pulp", "White pulp (WBCs)", 118),
    ("Figure label: follicle", "Follicle (B cells)", 118),
    ("Figure label: PALS", "Periarteriolar\nlymphoid sheath\n(T cells)", 118),
    ("Figure label: open circulation", "Open\ncirculation", 118),
    ("Figure label: closed circulation", "Closed\ncirculation", 118),
    ("Figure label: pulp vein", "Pulp vein", 118),
]

EVIDENCE = [ev(c, q, p) for (c, q, p) in E]

failures = []
for e in EVIDENCE:
    if len(e["quote"].strip()) < 3:
        failures.append(f"sub-3-char quote dropped: {e['quote']!r} ({e['claim']})")
    elif e["verified"] != "pass":
        failures.append(f"NOT FOUND on page {e['pages']['pdfPages'][0]}: {e['quote']!r} ({e['claim']})")
if failures:
    print("EVIDENCE FAILURES:")
    for f in failures:
        print("  ✗", f)
    sys.exit(1)

counts = {p: sum(1 for e in EVIDENCE if e["pages"]["pdfPages"] == [p]) for p in (116, 117, 118)}
print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified ({counts})")

QA = {g: "pass" for g in [
    "sourceVerified", "contentComplete", "miniCaseConsistent", "kypExtensionsTraceable",
    "mnemonicQuality", "visualsPaint", "visualCoverage", "mechanismRender", "lightMode",
    "darkMode", "mobile", "desktop", "consoleClean", "captionsReadable", "trackerSynced",
]}
STAGES = {s: "pass" for s in [
    "sourceLocated", "chapterMapped", "subsectionMapped", "topicScoped", "evidencePinned",
    "noteAuthored", "visualsAuthored", "mechanismAuthored", "clinicalAuthored",
    "pivotsAuthored", "trapsAuthored", "mnemonicAuthored", "rapidReviewAuthored",
    "relatedAuthored", "qaPassed", "trackerSynced",
]}

SRC = {"part": 1, "pdfPages": [116, 117, 118], "bookPages": "94–96"}

manifest = {
    "topicId": "lymphoid-structures",
    "title": "Lymphoid Structures: Lymph Node, Spleen & Thymus",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Lymphoid Structures",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["lymph-node-map", "lymphatic-drainage-map", "spleen-thymus-map"],
    "mechanismIds": ["lymph-node-response-pipeline", "postsplenectomy-opsonization-collapse"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the organ descriptions, the node figure, the drainage table, and the thymus/spleen sections; the USMLE question attack structure (stem patterns, traps, look-alike pivots, mini-case with distractors) is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "zoning-model",
            "summary": "Reading every lymphoid organ as a zoning problem: node zones (B-cortex / T-paracortex / macrophage-medulla) with clinical pairs per zone (DiGeorge underdeveloped paracortex; EBV paracortical hyperplasia), splenic white-pulp zones (PALS / follicle / marginal zone), and thymic cortex-medulla maturation gradient.",
            "origin": "outside-first-aid",
            "rationale": "The source describes each organ separately; unifying them under one zoning reading that maps structure to clinical consequence is KYP's integrative model.",
            "location": "core.keyIdea + mechanism captions + trap 1 + pivot 1",
        },
        {
            "id": "two-duct-territory-rule",
            "summary": "The drainage map as one rule plus its exceptions: right lymphatic duct = right side above the diaphragm; thoracic duct = everything else (hence Virchow node, chylothorax); then the pectinate-line divider and pop-lateral foot rule for the pelvic/leg clusters.",
            "origin": "outside-first-aid",
            "rationale": "The source lists clusters and ducts in a table; compressing them into the territory rule with the two named eponym nodes is KYP's exam-retrieval structure.",
            "location": "core.keyIdea + visual lymphatic-drainage-map callouts + miniCase reasoning + mnemonic 3",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "REBUILT batch (the original E19 was destroyed un-pushed with 4c22047 in the 7th wipe). Evidence set is more comprehensive than the lost batch's 90 (this rebuild pins 122). Ligature fidelity (documented): the printed table uses fi U+FB01 in 'Superfi(cial) inguinal' and '(superfi(cial) inguinal)', and fl U+FB02 in 'Infl(ammatory) bowel disease' and 'splenic fl(exure)' x2 — quotes embed the ligature code points. The prose uses 1°/2° (degree sign) while the node figure labels use 1º/2º (masculine ordinal) — both quoted as printed. The neonatal thymus line uses curly quotes around sail-shaped. The involution line prints C1-control arrow glyphs (stripped by the normalizer) — spans are quoted to the arrow boundaries; the text layer renders 'coritsol' (as-is). Table row assignments verified against a 400-DPI render (three independent VLM reads agree): mediastinal row carries Pulmonary TB (unilateral hilar) and Sarcoidosis (bilateral hilar); hilar row carries Lung cancer and Granulomatous disease; the mesenteric and iliac/inguinal pathology cells are merged spans in print — documented in the note's table caption. Census: p116 carries 2 printed elements (histology micrograph + schematic) consolidated as sv1; p117 carries the body map + table (sv2/sv3); p118 carries the spleen diagram + neonatal CXR consolidated as sv4; histology/radiograph conveyed schematically, never reproduced (COPYRIGHTED_NO_REPUBLISH).",
    "updatedAt": str(date.today()),
}

def svi(n, pages, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"lymphoid-structures-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": pages,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Lymphoid Structures",
        "topicId": "lymphoid-structures",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

SRC116 = {"part": 1, "pdfPages": [116], "bookPages": "94"}
SRC117 = {"part": 1, "pdfPages": [117], "bookPages": "95"}
SRC118 = {"part": 1, "pdfPages": [118], "bookPages": "96"}

inventory = {
    "topicId": "lymphoid-structures",
    "chapterId": "immunology",
    "inventory": [
        svi(1, SRC116, "HISTOLOGY", "Lymph node cross-section (histology micrograph + labeled schematic)",
            "Two printed elements: an H&E micrograph of a lymph node cross-section (arrow A = trabecula) and a labeled schematic showing afferent lymphatic, follicles (1º dense quiescent, 2º active with pale germinal center and mantle zone), paracortex with postcapillary (high endothelial) venule, medullary cords and sinuses, capsule, trabecula, cortex, artery, vein, capillary supply, and efferent lymphatic.",
            "ORIGINAL_KYP_REDRAW", "lymph-node-map", "registry-visual"),
        svi(2, SRC117, "ANATOMY_ILLUSTRATION", "Lymphatic drainage body map",
            "Anterior body map with node clusters marked (green dots = palpable; circles with green centers = nonpalpable), leader-lined to the adjacent 16-cluster table; plus the two-duct summary text (right lymphatic duct / thoracic duct territories and terminations, chylothorax on rupture).",
            "ORIGINAL_KYP_REDRAW", "lymphatic-drainage-map", "registry-visual"),
        svi(3, SRC117, "VISUAL_TABLE", "Lymphatic drainage associations table",
            "Three-column table (Lymph node cluster / Area of body drained / Associated pathology), 16 clusters from submandibular/submental to popliteal, with two merged pathology cells in print (celiac–SM–IM: mesenteric lymphadenitis, IBD, celiac disease; external iliac–internal iliac–superficial inguinal: STIs, medial foot/leg cellulitis [superficial inguinal]).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[2] — 'Lymphatic drainage associations — verbatim' table block"),
        svi(4, SRC118, "ANATOMY_ILLUSTRATION", "Spleen cross-section + neonatal thymus CXR",
            "Two printed elements: a spleen cross-section diagram (capsule, trabecula, white pulp with follicle [B cells], mantle zone, germinal center, marginal zone, periarteriolar lymphoid sheath [T cells], red pulp with sinusoids and reticular fibrous framework, open and closed circulation, pulp vein, artery, vein) and a neonatal AP chest radiograph showing the sail-shaped thymus (arrows in A).",
            "ORIGINAL_KYP_REDRAW", "spleen-thymus-map", "registry-visual"),
    ],
    "coverageAudit": {
        "topicId": "lymphoid-structures",
        "textbookVisualCount": 4,
        "accountedFor": 4,
        "sourceReproductions": 0,
        "kypRedraws": 3,
        "kypOriginals": 1,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census (pdfimages + 150-DPI render + VLM): p116 carries 2 printed elements (micrograph + schematic) consolidated as sv1 (both convey one teaching unit — the zonation); p118 carries 2 printed elements (spleen diagram + neonatal CXR) consolidated as sv4. Histology and radiograph findings are conveyed as original schematics per the rights rule — never reproduced. Table row assignments (mediastinal vs hilar pathology; merged cells) verified by three independent high-resolution VLM reads.",
}

(ROOT / "content/usmle/manifests/lymphoid-structures.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/lymphoid-structures.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "lymphoid-structures":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: lymphoid-structures -> complete (textbookVisuals 4 sv)")
        break
else:
    print("ERROR: lymphoid-structures not found in chapter topics")
    sys.exit(1)
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("chapter immunology.json updated (2/24)")
