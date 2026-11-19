#!/usr/bin/env python3
"""P12-P16 element crops — capture each topic's registry visual svg element as
PNG (light + dark) for VLM QA. Adapted from p1-crops.py."""
import json, subprocess, time

OUT_BASE = "/home/z/my-project/kyp-usmle-notes/docs/qa"
TOPICS = [
    ("p12", "neoplasia-nomenclature", "Neoplasia nomenclature and progression"),
    ("p13", "cancer-hallmarks", "Hallmarks of cancer"),
    ("p14", "cancer-immunotherapy-epidemiology", "Immune checkpoint interactions and cancer epidemiology"),
    ("p15", "metastasis-patterns", "Metastasis route map"),
    ("p16", "oncogenes-tumor-suppressors", "Oncogenes and tumor suppressor genes"),
]

def ab(*args, inp=None):
    r = subprocess.run(["agent-browser", *args], capture_output=True, text=True, input=inp, timeout=120,
                       env={"AGENT_BROWSER_SESSION": "pbatch-crops", "PATH": "/usr/local/bin:/usr/bin:/bin", "HOME": "/home/z"})
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
    for theme in ("light", "dark"):
        ab("set", "viewport", "1440", "900")
        ab("open", f"http://localhost:3000/usmle/{slug}")
        time.sleep(4)
        if theme == "dark":
            ab("eval", 'localStorage.setItem("theme","dark"); document.documentElement.classList.add("dark");')
            ab("open", f"http://localhost:3000/usmle/{slug}")
            time.sleep(4)
        r = ab("eval", f'(() => {{ const svg = document.querySelectorAll("svg[role=img]"); let t = null; for (const s of svg) {{ if (s.getAttribute("aria-label") && s.getAttribute("aria-label").startsWith("{aria}")) t = s; }} if (!t) return JSON.stringify({{error:1}}); const r = t.getBoundingClientRect(); return JSON.stringify({{x: r.x + window.scrollX, y: r.y + window.scrollY, w: r.width, h: r.height}}); }})()')
        rect = parse_json(r)
        with open(f"{out}/element-rect-{theme}.json", "w") as f:
            json.dump(rect, f)
        ab("eval", f'window.scrollTo(0, {max(0, int(rect["y"]) - 40)})')
        time.sleep(1.5)
        ab("screenshot", "svg[role=img]", f"{out}/element-crop-v0-{theme}.png")
        print(f"{pid} {theme}: rect {int(rect['x'])},{int(rect['y'])} {int(rect['w'])}x{int(rect['h'])} captured")
ab("close", "--all")
print("ALL CROPS DONE")
