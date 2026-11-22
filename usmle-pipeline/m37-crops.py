#!/usr/bin/env python3
"""M37 element crops — capture the AntiviralTargetMap svg element as PNG (light + dark)."""
import json, subprocess, time, base64
SESS = "m37-crops"
OUT = "/home/z/my-project/kyp-usmle-notes/docs/qa/m37"
URL = "http://localhost:3000/usmle/antiparasitic-antiviral"

def ab(*args, inp=None):
    r = subprocess.run(["agent-browser", *args], capture_output=True, text=True, input=inp, timeout=120,
                       env={"AGENT_BROWSER_SESSION": SESS, "PATH": "/usr/local/bin:/usr/bin:/bin", "HOME": "/home/z"})
    return (r.stdout or "") + (r.stderr or "")

rect_json = None
for theme in ("light", "dark"):
    ab("set", "viewport", "1440", "900")
    ab("open", URL)
    time.sleep(4)
    if theme == "dark":
        ab("eval", 'localStorage.setItem("theme","dark"); document.documentElement.classList.add("dark");')
        ab("open", URL)
        time.sleep(4)
    # find the target svg and return its bounding rect
    r = ab("eval", '(() => { const svg = document.querySelectorAll("svg[role=img]"); let t = null; for (const s of svg) { if (s.getAttribute("aria-label") && s.getAttribute("aria-label").startsWith("Antiparasitic and non-HIV antiviral therapy")) t = s; } if (!t) return JSON.stringify({error:1}); const r = t.getBoundingClientRect(); return JSON.stringify({x: r.x + window.scrollX, y: r.y + window.scrollY, w: r.width, h: r.height}); })()')
    line = [l for l in r.splitlines() if l.strip().startswith("{")]
    rect = json.loads(line[-1])
    with open(f"{OUT}/element-rect-{theme}.json", "w") as f:
        json.dump(rect, f)
    x, y, w, h = int(rect["x"]), int(rect["y"]), int(rect["w"]), int(rect["h"]) + 2
    ab("eval", f'window.scrollTo(0, {max(0, y - 40)})')
    time.sleep(1)
    rr = ab("eval", '(() => { const svg = document.querySelectorAll("svg[role=img]"); let t = null; for (const s of svg) { if (s.getAttribute("aria-label") && s.getAttribute("aria-label").startsWith("Antiparasitic and non-HIV antiviral therapy")) t = s; } const r = t.getBoundingClientRect(); return JSON.stringify({x: r.x, y: r.y, w: r.width, h: r.height}); })()')
    line = [l for l in rr.splitlines() if l.strip().startswith("{")]
    rect2 = json.loads(line[-1])
    x2, y2, w2, h2 = int(rect2["x"]), int(rect2["y"]), int(rect2["w"]), int(rect2["h"]) + 2
    # screenshot the viewport region containing the element (element is 980-wide scaled to viewport)
    ab("screenshot", f"{OUT}/element-crop-v0-{theme}.png", "--x", str(max(0, x2)), "--y", str(max(0, y2)), "--w", str(min(w2, 1440)), "--h", str(min(h2, 4000)))
    print(f"{theme}: rect {x2},{y2} {w2}x{h2} captured")
ab("close", "--all")
print("crops done")
