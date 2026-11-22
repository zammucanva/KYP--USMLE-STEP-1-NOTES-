#!/usr/bin/env python3
"""M16+M17 element captures. M16 rect: 281/4546 1102x635; M17 rect: 281/5014 1102x478."""
from PIL import Image
import os, statistics
QA = {
  "m16": ("docs/qa/m16", [("systemic-mycoses-map", {"x": 281, "y": 4546, "w": 1102, "h": 658})]),
  "m17": ("docs/qa/m17", [("opportunistic-fungi-panel", {"x": 281, "y": 5014, "w": 1102, "h": 478})]),
}
for key, (qadir, visuals) in QA.items():
    for theme in ["light", "dark"]:
        im = Image.open(f"{qadir}/full-desktop-{theme}.png")
        for name, r in visuals:
            box = (int(r["x"]), int(r["y"]), int(r["x"]+r["w"]), int(r["y"]+r["h"]))
            crop = im.crop(box)
            out = f"{qadir}/element-{name}-{theme}.png"
            crop.save(out)
            sd = statistics.pstdev(list(crop.convert("L").getdata())[::37])
            print(f"{out}: {crop.size[0]}x{crop.size[1]} stdev={sd:.2f}")
print("DONE")
