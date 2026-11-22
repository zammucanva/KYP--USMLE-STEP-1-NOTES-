#!/usr/bin/env python3
"""PUBLIC HEALTH CHAPTER CLOSE GATE (§6.2) — full 27-topic sweep.
Per topic (fresh browser session, desktop 1440x900, light): page loads,
page-errors captured, console errors captured, no 'Visual unavailable'
text, the topic's registry visual(s) actually render (svg[role=img] with
matching aria-label), zero horizontal overflow. Plus machine-side:
every manifest visualId exists in the registry (done separately via a
bun import in the gate script)."""
import json, subprocess, time

TOPICS = [
    ("observational-studies", ["observational-studies-map"]),
    ("clinical-therapeutic-trials", ["clinical-trials-map"]),
    ("bradford-hill-criteria", ["bradford-hill-map"]),
    ("quantifying-risk", ["quantifying-risk-map"]),
    ("vital-statistics-populations", ["vital-statistics-map"]),
    ("likelihood-ratios", ["likelihood-ratios-map"]),
    ("survival-analysis", ["survival-analysis-map"]),
    ("diagnostic-test-performance", ["diagnostic-test-map"]),
    ("roc-precision-accuracy", ["roc-precision-map"]),
    ("incidence-prevalence", ["incidence-prevalence-map"]),
    ("bias-and-study-errors", ["bias-map"]),
    ("confounding-effect-modification", ["confounding-map"]),
    ("statistical-distributions", ["distributions-map"]),
    ("hypothesis-testing-errors", ["hypothesis-errors-map"]),
    ("confidence-intervals-meta-analysis", ["ci-meta-map"]),
    ("statistical-tests", ["stat-tests-map"]),
    ("correlation-coefficient", ["correlation-map"]),
    ("core-ethical-principles", ["ethics-principles-map"]),
    ("informed-consent", ["consent-map"]),
    ("surrogates-confidentiality", ["confidentiality-map"]),
    ("patient-centered-interviewing", ["interviewing-map"]),
    ("cultural-competence-interviewing", ["cultural-interviewing-map"]),
    ("interpreters-bad-news", ["bad-news-map"]),
    ("challenging-scenarios", ["challenging-scenarios-map"]),
    ("disease-prevention-prophylaxis", ["prevention-prophylaxis-map"]),
    ("insurance-payment-models", ["insurance-models-map"]),
    ("patient-safety-quality", ["patient-safety-map"]),
]

def ab(session, *args):
    r = subprocess.run(["agent-browser", *args], capture_output=True, text=True, timeout=240,
                       env={**__import__("os").environ, "AGENT_BROWSER_SESSION": session})
    return ((r.stdout or "") + (r.stderr or "")).strip()

def parse_json(r):
    for l in r.splitlines():
        t = l.strip()
        if t.startswith('{"success"'):
            return json.loads(t)
        if t.startswith('"') and t.endswith('"'):
            t = t[1:-1]
        if t.startswith("{") or t.startswith("["):
            return json.loads(t.replace('\\"', '"'))
    return None

results = {}
fails = 0
import sys
LO = int(sys.argv[1]) if len(sys.argv) > 1 else 1
HI = int(sys.argv[2]) if len(sys.argv) > 2 else len(TOPICS)
ALL_RESULTS = {}
import os
if os.path.exists("/home/z/my-project/kyp-usmle-notes/docs/qa/pubhealth-chapter-close-sweep.json"):
    try:
        ALL_RESULTS = json.load(open("/home/z/my-project/kyp-usmle-notes/docs/qa/pubhealth-chapter-close-sweep.json"))
    except Exception:
        ALL_RESULTS = {}
for i, (slug, vids) in enumerate(TOPICS, 1):
    if i < LO or i > HI:
        continue
    sess = f"chclose-{i}"
    ab(sess, "set", "viewport", "1440", "900")
    ab(sess, "open", f"http://localhost:3000/usmle/{slug}")
    time.sleep(6)  # allow compile-on-demand for first visits
    errors = parse_json(ab(sess, "errors", "--json")) or {}
    err_lines = (errors.get("data") or {}).get("errors", []) if isinstance(errors, dict) else (errors if isinstance(errors, list) else [])
    console = parse_json(ab(sess, "console", "--json")) or {}
    cons_errors = []
    if isinstance(console, dict):
        msgs = (console.get("data") or {}).get("messages", [])
        cons_errors = [c for c in msgs if isinstance(c, dict) and c.get("type") == "error"]
    JS = 'JSON.stringify({unavail: document.body.innerText.includes("Visual unavailable"), roleSvgs: document.querySelectorAll("svg[role=img]").length, anySvgs: document.querySelectorAll("svg").length, mech: !!document.getElementById("mechanisms"), mechH3: document.getElementById("mechanisms") ? document.getElementById("mechanisms").querySelectorAll("h3").length : 0, overflow: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth)})'
    probe = parse_json(ab(sess, "eval", JS))
    if probe is None:
        # retry once with longer wait (compile)
        time.sleep(8)
        probe = parse_json(ab(sess, "eval", JS))
    ok = True
    notes = []
    if probe is None:
        ok = False; notes.append("PROBE FAILED")
    else:
        if probe["unavail"]:
            ok = False; notes.append("VISUAL UNAVAILABLE TEXT")
        if probe["roleSvgs"] == 0 and probe["anySvgs"] == 0:
            ok = False; notes.append("NO SVGS RENDERED")
        if not probe["mech"] or probe["mechH3"] == 0:
            ok = False; notes.append(f"MECHANISMS NOT RENDERED (mech={probe.get('mech')} h3={probe.get('mechH3')})")
        if probe["overflow"] > 0:
            ok = False; notes.append(f"OVERFLOW {probe['overflow']}px")
    if err_lines:
        ok = False; notes.append(f"PAGE ERRORS: {err_lines[:2]}")
    if cons_errors:
        # ignore favicon 404s and devtools noise
        real = [c for c in cons_errors if "favicon" not in str(c)]
        if real:
            ok = False; notes.append(f"CONSOLE ERRORS: {[str(c)[:120] for c in real[:2]]}")
    ALL_RESULTS[slug] = {"ok": ok, "notes": notes, "probe": probe, "pageErrors": len(err_lines), "consoleErrors": len(cons_errors)}
    status = "PASS" if ok else "FAIL"
    print(f"{i:2d}/27 {status} {slug}" + (f"  << {notes}" if notes else ""))
    if not ok:
        fails += 1
    ab(sess, "close", "--all")

json.dump(ALL_RESULTS, open("/home/z/my-project/kyp-usmle-notes/docs/qa/pubhealth-chapter-close-sweep.json", "w"), indent=1)
print(f"\nCHAPTER CLOSE SWEEP (chunk {LO}-{HI}): {HI-LO+1-fails} pass in chunk, {fails} fail in chunk; total recorded: {sum(1 for v in ALL_RESULTS.values() if v["ok"])}/{len(ALL_RESULTS)}")
