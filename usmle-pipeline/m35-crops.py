#!/usr/bin/env python3
"""M32 element crops from the full-page desktop captures (both themes).
Rect from m35-browser-qa.sh element-rect.json (CSS px at 1440 wide;
agent-browser full screenshots are 1:1 CSS px here)."""
import json
from pathlib import Path
from PIL import Image

OUT = Path("docs/qa/m35")
raw = (OUT / "element-rect.json").read_text()
rect = json.loads(raw)
if isinstance(rect, str):
    rect = json.loads(rect)  # agent-browser eval wraps JSON in a JSON string
x, y, w, h = rect["x"], rect["y"], rect["w"], rect["h"]
for theme in ("light", "dark"):
    src = OUT / f"full-desktop-{theme}.png"
    im = Image.open(src)
    x0, y0 = int(max(0, x - 4)), int(max(0, y - 4))
    x1, y1 = int(min(im.width, x + w + 4)), int(min(im.height, y + h + 4))
    crop = im.crop((x0, y0, x1, y1))
    out = OUT / f"element-crop-v0-{theme}.png"
    crop.save(out)
    print(out, crop.size)
