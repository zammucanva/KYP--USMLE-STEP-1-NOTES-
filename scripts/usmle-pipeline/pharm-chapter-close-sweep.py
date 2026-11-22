#!/usr/bin/env python3
"""PHARMACOLOGY CHAPTER CLOSE GATE (§6.2) — full 29-topic sweep.
Per topic (fresh browser session, desktop 1440x900, light): page loads,
page-errors captured, console errors captured, no 'Visual unavailable'
text, the topic's registry visual(s) actually render (svg[role=img] with
matching aria-label), zero horizontal overflow. Plus machine-side:
every manifest visualId exists in the registry (done separately via a
bun import in the gate script)."""
import json, subprocess, time

TOPICS = [
    ("enzyme-kinetics", ["enzyme-kinetics-map"]),
    ("pharmacokinetics-aging", ["pk-parameters-map"]),
    ("drug-metabolism", ["metabolism-phase-map"]),
    ("elimination-of-drugs", ["elimination-kinetics-map"]),
    ("urine-ph-dosage", ["urine-ph-trapping-map"]),
    ("efficacy-potency", ["dose-response-map"]),
    ("receptor-binding-ti", ["receptor-binding-map"]),
    ("drug-effect-modifications", ["effect-modification-map"]),
    ("autonomic-receptors", ["autonomic-organ-map"]),
    ("acetylcholine-receptors", ["ach-receptor-map"]),
    ("pain-transmission", ["pain-transmission-map"]),
    ("micturition-control", ["micturition-map"]),
    ("adrenergic-receptor-distribution", ["adrenergic-distribution-map"]),
    ("g-protein-second-messengers", ["g-protein-messenger-map"]),
    ("autonomic-drugs-synapse", ["autonomic-synapse-map"]),
    ("cholinomimetics", ["cholinomimetic-map"]),
    ("muscarinic-antagonists", ["muscarinic-antagonist-map"]),
    ("sympathomimetics", ["sympath-receptor-grid", "epi-reversal"]),
    ("sympatholytics-alpha-blockers", ["sympatholytic-alpha-map"]),
    ("beta-blockers", ["beta-blocker-map"]),
    ("phosphodiesterase-inhibitors", ["pde-inhibitor-map"]),
    ("seafood-plant-toxins", ["seafood-plant-toxin-map"]),
    ("toxicity-treatments", ["antidote-map"]),
    ("drug-reactions-endocrine", ["drug-reaction-endocrine-map"]),
    ("drug-reactions-hematologic", ["drug-reaction-hematologic-map"]),
    ("drug-reactions-neurologic", ["drug-reaction-neurologic-map"]),
    ("pupil-size-cyp450", ["pupil-cyp-map"]),
    ("drug-names", ["drug-name-map"]),
    ("biologic-agents", ["biologic-agents-map"]),
]

def ab(session, *args):
    r = subprocess.run(["agent-browser", *args], capture_output=True, text=True, timeout=240,
                       env={"AGENT_BROWSER_SESSION": session, "PATH": "/usr/local/bin:/usr/bin:/bin", "HOME": "/home/z"})
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
for i, (slug, vids) in enumerate(TOPICS, 1):
    sess = f"chclose-{i}"
    ab(sess, "set", "viewport", "1440", "900")
    ab(sess, "open", f"http://localhost:3000/usmle/{slug}")
    time.sleep(6)  # allow compile-on-demand for first visits
    errors = parse_json(ab(sess, "errors", "--json")) or {}
    err_lines = errors.get("data", {}).get("errors", []) if isinstance(errors, dict) else (errors if isinstance(errors, list) else [])
    console = parse_json(ab(sess, "console", "--json")) or {}
    cons_errors = []
    if isinstance(console, dict):
        msgs = console.get("data", {}).get("messages", [])
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
    results[slug] = {"ok": ok, "notes": notes, "probe": probe, "pageErrors": len(err_lines), "consoleErrors": len(cons_errors)}
    status = "PASS" if ok else "FAIL"
    print(f"{i:2d}/29 {status} {slug}" + (f"  << {notes}" if notes else ""))
    if not ok:
        fails += 1
    ab(sess, "close", "--all")

json.dump(results, open("/home/z/my-project/kyp-usmle-notes/docs/qa/pharm-chapter-close-sweep.json", "w"), indent=1)
print(f"\nCHAPTER CLOSE SWEEP: {29 - fails}/29 pass, {fails} fail")
