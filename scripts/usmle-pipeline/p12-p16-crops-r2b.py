#!/usr/bin/env python3
"""P12-P16 QA round 2b — true 2x renders via CSS transform scale(2) on the svg
element (the layout container caps width, so viewport scaling was insufficient)."""
import json, subprocess, time

OUT_BASE = "/home/z/my-project/kyp-usmle-notes/docs/qa"
TOPICS = [
    ("p12", "neoplasia-nomenclature", "Neoplasia nomenclature and progression"),
    ("p13", "cancer-hallmarks", "Hallmarks of cancer"),
    ("p14", "cancer-immunotherapy-epidemiology", "Immune checkpoint interactions and cancer epidemiology"),
    ("p15", "metastasis-patterns", "Metastasis route map"),
    ("p16", "oncogenes-tumor-suppressors", "Oncogenes and tumor suppressor genes"),
]

def ab(*args):
    r = subprocess.run(["agent-browser", *args], capture_output=True, text=True, timeout=180,
                       env={"AGENT_BROWSER_SESSION": "pbatch-r2b", "PATH": "/usr/local/bin:/usr/bin:/bin", "HOME": "/home/z"})
    return (r.stdout or "") + (r.stderr or "")

def parse_json(r):
    for l in r.splitlines():
        t = l.strip()
        if t.startswith('"') and t.endswith('"'):
            t = t[1:-1]
        if t.startswith("{"):
            return json.loads(t.replace('\\"', '"'))
    raise ValueError(f"no json in: {r[:200]}")

for pid, slug, aria in TOPICS:
    out = f"{OUT_BASE}/{pid}"
    url = f"http://localhost:3000/usmle/{slug}"
    ab("set", "viewport", "2880", "2400")
    ab("open", url)
    time.sleep(3)
    ab("eval", 'localStorage.setItem("theme","dark"); document.documentElement.classList.add("dark");')
    ab("open", url)
    time.sleep(4)
    r = ab("eval", f'(() => {{ const svg = document.querySelectorAll("svg[role=img]"); let t = null; for (const s of svg) {{ if (s.getAttribute("aria-label") && s.getAttribute("aria-label").startsWith("{aria}")) t = s; }} if (!t) return JSON.stringify({{error:1}}); t.style.transform = "scale(2)"; t.style.transformOrigin = "0 0"; const r = t.getBoundingClientRect(); return JSON.stringify({{x: r.x + window.scrollX, y: r.y + window.scrollY, w: r.width, h: r.height}}); }})()')
    rect = parse_json(r)
    time.sleep(1.5)
    ab("screenshot", "svg[role=img]", f"{out}/element-crop-2x-dark.png")
    print(f"{pid} 2x-dark transform: {int(rect['w'])}x{int(rect['h'])}")
ab("close", "--all")
print("ROUND-2B DONE")
