#!/usr/bin/env python3
"""P17-P19 element crops — light (explicit reset) + dark, then 2x transform
renders for micro-label adjudication (left-half capture limitation documented
in the P12-P16 batch; right-half re-capture handled in r2c when needed)."""
import json, subprocess, time

OUT_BASE = "/home/z/my-project/kyp-usmle-notes/docs/qa"
TOPICS = [
    ("ph1", "enzyme-kinetics", "Enzyme kinetics"),
    ("ph2", "pharmacokinetics-aging", "Pharmacokinetic parameters"),
    ("ph3", "drug-metabolism", "Drug metabolism"),
    ("ph4", "elimination-of-drugs", "Elimination of drugs"),
    ("ph5", "urine-ph-dosage", "Urine pH and dosage"),
]

def ab(*args):
    r = subprocess.run(["agent-browser", *args], capture_output=True, text=True, timeout=180,
                       env={"AGENT_BROWSER_SESSION": "ph1batch-crops", "PATH": "/usr/local/bin:/usr/bin:/bin", "HOME": "/home/z"})
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
    # light (explicit reset)
    ab("set", "viewport", "1440", "900")
    ab("open", url)
    time.sleep(3)
    ab("eval", 'localStorage.setItem("theme","light"); document.documentElement.classList.remove("dark");')
    ab("open", url)
    time.sleep(4)
    r = ab("eval", f'(() => {{ const svg = document.querySelectorAll("svg[role=img]"); let t = null; for (const s of svg) {{ if (s.getAttribute("aria-label") && s.getAttribute("aria-label").startsWith("{aria}")) t = s; }} if (!t) return JSON.stringify({{error:1}}); const r = t.getBoundingClientRect(); return JSON.stringify({{x: r.x + window.scrollX, y: r.y + window.scrollY, w: r.width, h: r.height}}); }})()')
    rect = parse_json(r)
    ab("eval", f'window.scrollTo(0, {max(0, int(rect["y"]) - 40)})')
    time.sleep(1.5)
    ab("screenshot", "svg[role=img]", f"{out}/element-crop-light-v2.png")
    print(f"{pid} light: {int(rect['w'])}x{int(rect['h'])}")
    # dark
    ab("set", "viewport", "1440", "900")
    ab("open", url)
    time.sleep(3)
    ab("eval", 'localStorage.setItem("theme","dark"); document.documentElement.classList.add("dark");')
    ab("open", url)
    time.sleep(4)
    r = ab("eval", f'(() => {{ const svg = document.querySelectorAll("svg[role=img]"); let t = null; for (const s of svg) {{ if (s.getAttribute("aria-label") && s.getAttribute("aria-label").startsWith("{aria}")) t = s; }} if (!t) return JSON.stringify({{error:1}}); const r = t.getBoundingClientRect(); return JSON.stringify({{x: r.x + window.scrollX, y: r.y + window.scrollY, w: r.width, h: r.height}}); }})()')
    rect = parse_json(r)
    ab("eval", f'window.scrollTo(0, {max(0, int(rect["y"]) - 40)})')
    time.sleep(1.5)
    ab("screenshot", "svg[role=img]", f"{out}/element-crop-dark.png")
    print(f"{pid} dark: {int(rect['w'])}x{int(rect['h'])}")
ab("close", "--all")
print("DONE")
