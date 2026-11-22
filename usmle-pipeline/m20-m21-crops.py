#!/usr/bin/env python3
from PIL import Image
import statistics
jobs = [("m20", "docs/qa/m20", "nematode-route-map", 281, 4529, 1102, 987),
        ("m21", "docs/qa/m21", "cestode-trematode-map", 281, 5233, 1102, 1068)]
for key, qadir, name, x, y, w, h in jobs:
    for theme in ["light", "dark"]:
        im = Image.open(f"{qadir}/full-desktop-{theme}.png")
        crop = im.crop((x, y, x+w, y+h))
        out = f"{qadir}/element-{name}-{theme}.png"
        crop.save(out)
        print(f"{out}: {crop.size[0]}x{crop.size[1]} stdev={statistics.pstdev(list(crop.convert('L').getdata())[::37]):.2f}")
print("DONE")
