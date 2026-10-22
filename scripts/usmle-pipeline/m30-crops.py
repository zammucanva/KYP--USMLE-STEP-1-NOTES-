#!/usr/bin/env python3
"""M30 element crops from the full-page desktop captures (both themes).
Rect from m30-browser-qa.sh: x=281 y=6300.6875 w=1102 h=2616.6875 (CSS px
at 1440 wide; agent-browser full screenshots are 1:1 CSS px here)."""
from PIL import Image

RECT = (281, 6300.6875, 1102, 2616.6875)

for theme in ("light", "dark"):
    src = f"docs/qa/m30/full-desktop-{theme}.png"
    im = Image.open(src)
    x, y, w, h = RECT
    # clamp to image bounds with a small margin
    x0, y0 = int(max(0, x - 4)), int(max(0, y - 4))
    x1, y1 = int(min(im.width, x + w + 4)), int(min(im.height, y + h + 4))
    crop = im.crop((x0, y0, x1, y1))
    out = f"docs/qa/m30/element-crop-v0-{theme}.png"
    crop.save(out)
    print(out, crop.size)
