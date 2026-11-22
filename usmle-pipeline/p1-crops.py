#!/usr/bin/env python3
"""P1 element crops — capture the AdaptationsComparisonMap svg element as PNG (light + dark).
Uses the selector-based screenshot of the current agent-browser CLI."""
import json, subprocess, time
SESS = "p1-crops"
OUT = "/home/z/my-project/kyp-usmle-notes/docs/qa/p1"
URL = "http://localhost:3000/usmle/cellular-adaptations"

def ab(*args, inp=None):
    r = subprocess.run(["agent-browser", *args], capture_output=True, text=True, input=inp, timeout=120,
                       env={"AGENT_BROWSER_SESSION": SESS, "PATH": "/usr/local/bin:/usr/bin:/bin", "HOME": "/home/z"})
    return (r.stdout or "") + (r.stderr or "")

def parse_json(r):
    for l in r.splitlines():
        t = l.strip()
        if t.startswith('"') and t.endswith('"'):
            t = t[1:-1]
        if t.startswith("{"):
            return json.loads(t.replace('\\"', '"'))
    raise ValueError(f"no json in: {r[:200]}")

for theme in ("light", "dark"):
    ab("set", "viewport", "1440", "900")
    ab("open", URL)
    time.sleep(4)
    if theme == "dark":
        ab("eval", 'localStorage.setItem("theme","dark"); document.documentElement.classList.add("dark");')
        ab("open", URL)
        time.sleep(4)
    r = ab("eval", '(() => { const svg = document.querySelectorAll("svg[role=img]"); let t = null; for (const s of svg) { if (s.getAttribute("aria-label") && s.getAttribute("aria-label").startsWith("Cellular adaptations — the progression map")) t = s; } if (!t) return JSON.stringify({error:1}); const r = t.getBoundingClientRect(); return JSON.stringify({x: r.x + window.scrollX, y: r.y + window.scrollY, w: r.width, h: r.height}); })()')
    rect = parse_json(r)
    with open(f"{OUT}/element-rect-{theme}.json", "w") as f:
        json.dump(rect, f)
    # scroll the element into view, then selector-based element screenshot
    ab("eval", f'window.scrollTo(0, {max(0, int(rect["y"]) - 40)})')
    time.sleep(1.5)
    ab("screenshot", "svg[role=img]", f"{OUT}/element-crop-v0-{theme}.png")
    print(f"{theme}: rect {int(rect['x'])},{int(rect['y'])} {int(rect['w'])}x{int(rect['h'])} captured via selector")
ab("close", "--all")
print("crops done")
