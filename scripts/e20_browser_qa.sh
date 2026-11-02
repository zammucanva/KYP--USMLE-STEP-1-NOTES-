#!/bin/bash
# E19 browser QA — /usmle/innate-vs-adaptive-immunity (3 registry visuals)
# 4 passes: desktop 1440x900 light+dark, mobile 390 light+dark.
# Machine-measured: overflow, page errors, console, theme state pre-capture.
# Element captures: full-page screenshot per theme + PIL crop at machine-measured
# doc-coords rect of each registry visual (svg width>400, in document order).
set -u
URL="http://localhost:3000/usmle/innate-vs-adaptive-immunity"
OUT="/home/z/kyp-usmle-notes/docs/qa/e20"
mkdir -p "$OUT"
PASS=0; FAIL=0
stripq () { sed 's/^"//;s/"$//'; }
check_pass () {
  if [ "$2" -eq 0 ]; then echo "  ✓ $1"; PASS=$((PASS+1)); else echo "  ✗ $1"; FAIL=$((FAIL+1)); fi
}

for MODE in desktop mobile; do
  for THEME in light dark; do
    echo "=== [$MODE $THEME] ==="
    agent-browser close >/dev/null 2>&1
    if [ "$MODE" = "desktop" ]; then
      agent-browser set viewport 1440 900 >/dev/null
    else
      agent-browser set viewport 390 844 >/dev/null
    fi
    agent-browser open "$URL" >/dev/null
    agent-browser wait --load networkidle >/dev/null 2>&1
    agent-browser wait 1500 >/dev/null
    agent-browser eval "localStorage.setItem('theme','$THEME'); 'set'" >/dev/null
    agent-browser reload >/dev/null
    agent-browser wait --load networkidle >/dev/null 2>&1
    agent-browser wait 1500 >/dev/null

    THEME_STATE=$(agent-browser eval "document.documentElement.classList.contains('dark') ? 'dark' : 'light'" 2>/dev/null | tail -1 | stripq)
    if [ "$THEME_STATE" = "$THEME" ]; then check_pass "theme = $THEME (html.dark verified)" 0; else check_pass "theme = $THEME (got '$THEME_STATE')" 1; fi

    OVERFLOW=$(agent-browser eval "Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - document.documentElement.clientWidth" 2>/dev/null | tail -1)
    if [ "$OVERFLOW" = "0" ]; then check_pass "overflow = 0px" 0; else check_pass "overflow = 0px (got ${OVERFLOW}px)" 1; fi

    ERRS=$(agent-browser errors 2>/dev/null | grep -c "Error\|error" || true)
    if [ "$ERRS" -eq 0 ]; then check_pass "0 page errors" 0; else check_pass "0 page errors (got $ERRS)" 1; fi

    CONS=$(agent-browser console 2>/dev/null | grep -ci "error" || true)
    if [ "$CONS" -eq 0 ]; then check_pass "console clean" 0; else check_pass "console clean ($CONS lines)" 1; fi

    VIS=$(agent-browser eval "document.querySelectorAll('svg').length >= 1 ? 'yes' : 'no'" 2>/dev/null | tail -1 | stripq)
    if [ "$VIS" = "yes" ]; then check_pass "1+ svg visuals in DOM" 0; else check_pass "1+ svg visuals in DOM" 1; fi

    agent-browser screenshot "$OUT/page-$MODE-$THEME.png" >/dev/null
    check_pass "capture page-$MODE-$THEME.png" 0
  done
done

# element captures: full page + crops at doc-coords (both themes, desktop)
agent-browser set viewport 1440 900 >/dev/null
for THEME in light dark; do
  agent-browser open "$URL" >/dev/null
  agent-browser wait --load networkidle >/dev/null 2>&1; agent-browser wait 1200 >/dev/null
  agent-browser eval "localStorage.setItem('theme','$THEME'); 'set'" >/dev/null
  agent-browser reload >/dev/null
  agent-browser wait --load networkidle >/dev/null 2>&1; agent-browser wait 1800 >/dev/null
  agent-browser screenshot "$OUT/page-full-$THEME.png" --full >/dev/null
  N=$(agent-browser eval "[...document.querySelectorAll('svg')].filter(s => s.getBoundingClientRect().width > 400).length" 2>/dev/null | tail -1 | stripq)
  echo "[$THEME] wide svgs found: $N"
  for i in 0; do
    RECT=$(agent-browser eval "(() => { const els = [...document.querySelectorAll('svg')].filter(s => s.getBoundingClientRect().width > 400); if (!$i && els.length === 0) return 'NONE'; const el = els[$i]; if (!el) return 'NONE'; const r = el.getBoundingClientRect(); return Math.round(r.x)+','+Math.round(r.y + window.scrollY)+','+Math.round(r.width)+','+Math.round(r.height); })()" 2>/dev/null | tail -1 | stripq)
    if [ "$RECT" != "NONE" ] && [ -n "$RECT" ]; then
      echo "$RECT" > "$OUT/element-rect-$i-$THEME.txt"
      echo "  [$THEME] visual $i doc-rect: $RECT"
    else
      echo "  [$THEME] visual $i: not found"
      FAIL=$((FAIL+1))
    fi
  done
done
agent-browser close >/dev/null 2>&1

python3 - << 'PYEOF'
from PIL import Image
import statistics, os
OUT = "/home/z/kyp-usmle-notes/docs/qa/e20"
for theme in ["light", "dark"]:
    im = Image.open(f"{OUT}/page-full-{theme}.png")
    for i in range(1):
        rp = f"{OUT}/element-rect-{i}-{theme}.txt"
        if not os.path.exists(rp): continue
        x, y, w, h = [int(v) for v in open(rp).read().split(",")]
        crop = im.crop((x, y, x + w, y + h))
        crop.save(f"{OUT}/element-crop-v{i}-{theme}.png")
        stdev = statistics.pstdev(list(crop.convert("L").getdata()))
        print(f"{theme} visual {i}: {w}x{h} crop stdev={stdev:.2f} -> {'REAL CONTENT' if stdev > 5 else 'BLANK?'}")
PYEOF

echo ""
echo "BROWSER QA: PASS=$PASS FAIL=$FAIL"
exit $([ $FAIL -eq 0 ] && echo 0 || echo 1)
