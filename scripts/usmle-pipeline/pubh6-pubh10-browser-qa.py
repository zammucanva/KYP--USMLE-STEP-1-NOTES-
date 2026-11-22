#!/usr/bin/env python3
"""pubh6-pubh10 batch browser QA — 4 passes each (desktop 1440x900 + mobile
390x844, light + dark): theme class BEFORE capture, horizontal overflow px,
page title; in-browser getBBox paint audit over each topic's registry visual
svg texts (overlaps + outside-viewBox); element crops (light reset + dark)."""
import json, os, subprocess, time

OUT_BASE = "/home/z/my-project/kyp-usmle-notes/docs/qa"
TOPICS = [
    ("pubh6", "likelihood-ratios", "Likelihood ratios", "Likelihood Ratios"),
    ("pubh7", "survival-analysis", "Kaplan-Meier curves and hazard ratios", "Kaplan-Meier Curves"),
    ("pubh8", "diagnostic-test-performance", "Sensitivity specificity and predictive values", "Sensitivity, Specificity"),
    ("pubh9", "roc-precision-accuracy", "ROC curves precision and accuracy", "ROC Curves"),
    ("pubh10", "incidence-prevalence", "Incidence vs prevalence", "Incidence vs Prevalence"),
]

def ab(session, *args):
    r = subprocess.run(["agent-browser", *args], capture_output=True, text=True, timeout=240,
                       env={**os.environ, "AGENT_BROWSER_SESSION": session})
    return (r.stdout or "") + (r.stderr or "")

def parse_json(r):
    for l in r.splitlines():
        t = l.strip()
        if t.startswith('"') and t.endswith('"'):
            t = t[1:-1]
        if t.startswith("{"):
            return json.loads(t.replace('\\"', '"'))
    raise ValueError(f"no json in: {r[:300]}")

def probe(sess):
    return parse_json(ab(sess, "eval", 'JSON.stringify({theme: (document.documentElement.classList.contains("dark") ? "dark" : "light"), overflow: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth), title: document.title})'))

results = {}
for pid, slug, aria, wait in TOPICS:
    out = f"{OUT_BASE}/{pid}"
    subprocess.run(["mkdir", "-p", out], check=True)
    url = f"http://localhost:3000/usmle/{slug}"
    sess = f"{pid}-qa"
    r4 = []
    for view, w, h in (("desktop", 1440, 900), ("mobile", 390, 844)):
        ab(sess, "set", "viewport", str(w), str(h))
        for theme in ("light", "dark"):
            ab(sess, "open", url)
            ab(sess, "wait", "--text", wait)
            time.sleep(2)
            if theme == "dark":
                ab(sess, "eval", 'localStorage.setItem("theme","dark"); document.documentElement.classList.add("dark");')
            else:
                ab(sess, "eval", 'localStorage.setItem("theme","light"); document.documentElement.classList.remove("dark");')
            ab(sess, "open", url)
            ab(sess, "wait", "--text", wait)
            time.sleep(3)
            p = probe(sess)
            r4.append((f"{view}-{theme}", p))
            ab(sess, "screenshot", f"{out}/full-{view}-{theme}.png", "--full")
    # getBBox audit
    ab(sess, "set", "viewport", "1440", "900")
    ab(sess, "open", url)
    ab(sess, "wait", "--text", wait)
    time.sleep(3)
    r = ab(sess, "eval", '(() => { const svg = document.querySelectorAll("svg[role=img]"); let target = null; for (const s of svg) { if (s.getAttribute("aria-label") && s.getAttribute("aria-label").startsWith("' + aria + '")) target = s; } if (!target) return JSON.stringify({error: "visual not found"}); const vb = target.viewBox.baseVal; const rects = []; const texts = target.querySelectorAll("text"); for (const t of texts) { const b = t.getBBox(); rects.push({x: b.x, y: b.y, w: b.width, h: b.height, s: t.textContent.slice(0, 40)}); } const overlaps = []; for (let i = 0; i < rects.length; i++) { for (let j = i + 1; j < rects.length; j++) { const a = rects[i], b = rects[j]; const ox = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)); const oy = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y)); if (ox > 1 && oy > 1) overlaps.push({a: a.s, b: b.s, ox: Math.round(ox), oy: Math.round(oy)}); } } const out = []; for (const rc of rects) { const cx0 = rc.x, cx1 = rc.x + rc.w, cy0 = rc.y, cy1 = rc.y + rc.h; const edge = {l: Math.round(cx0), r: Math.round(vb.width - cx1), t: Math.round(cy0), b: Math.round(vb.height - cy1)}; if (edge.l < 0 || edge.r < 0 || edge.t < 0 || edge.b < 0) out.push({s: rc.s, edge}); } return JSON.stringify({texts: rects.length, overlaps: overlaps.length, overlapList: overlaps.slice(0, 10), outsideViewBox: out, vb: {w: vb.width, h: vb.height}}); })()')
    bbox = parse_json(r)
    # element crops
    for theme in ("light", "dark"):
        ab(sess, "open", url)
        time.sleep(3)
        if theme == "dark":
            ab(sess, "eval", 'localStorage.setItem("theme","dark"); document.documentElement.classList.add("dark");')
        else:
            ab(sess, "eval", 'localStorage.setItem("theme","light"); document.documentElement.classList.remove("dark");')
        ab(sess, "open", url)
        ab(sess, "wait", "--text", wait)
        time.sleep(4)
        rr = ab(sess, "eval", '(() => { const svg = document.querySelectorAll("svg[role=img]"); let t = null; for (const s of svg) { if (s.getAttribute("aria-label") && s.getAttribute("aria-label").startsWith("' + aria + '")) t = s; } if (!t) return JSON.stringify({error:1}); const rc = t.getBoundingClientRect(); return JSON.stringify({x: rc.x + window.scrollX, y: rc.y + window.scrollY, w: rc.width, h: rc.height}); })()')
        rect = parse_json(rr)
        ab(sess, "eval", f'window.scrollTo(0, {max(0, int(rect["y"]) - 40)})')
        time.sleep(1.5)
        ab(sess, "screenshot", "svg[role=img]", f"{out}/element-crop-{'light-v2' if theme == 'light' else 'dark'}.png")
    ab(sess, "close", "--all")
    results[pid] = {"passes": r4, "bbox": bbox}
    print(f"== {pid} ({slug}) ==")
    for name, p in r4:
        print(f"   {name}: theme={p['theme']} overflow={p['overflow']}px title={p['title'][:60]!r}")
    if "error" in bbox:
        print(f"   BBOX: ERROR — {bbox}")
    else:
        print(f"   BBOX: {bbox['texts']} texts, {bbox['overlaps']} overlaps, {len(bbox['outsideViewBox'])} outside-viewBox, vb={bbox['vb']['w']}x{bbox['vb']['h']}")
        if bbox.get("overlapList"):
            for o in bbox["overlapList"]:
                print(f"      OVERLAP: {o}")
        if bbox.get("outsideViewBox"):
            for o in bbox["outsideViewBox"][:6]:
                print(f"      OUTSIDE: {o}")

json.dump(results, open(f"{OUT_BASE}/pubh6-pubh10-browser-qa.json", "w"), indent=1)
print("saved:", f"{OUT_BASE}/pubh6-pubh10-browser-qa.json")
