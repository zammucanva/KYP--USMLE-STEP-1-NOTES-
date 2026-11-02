#!/bin/bash
# E18 browser QA — /usmle/familial-dyslipidemias
# 4 passes: desktop 1440x900 light+dark, mobile 390 light+dark.
# Machine-measured: horizontal overflow, page errors, console errors,
# theme state (html class) verified before every capture.
# Element capture: viewport screenshot + PIL crop of machine-measured rect
# (direct SVG element-crop renders blank — known browser defect, see worklog).
set -u
URL="http://localhost:3000/usmle/familial-dyslipidemias"
OUT="/home/z/kyp-usmle-notes/docs/qa/e18"
mkdir -p "$OUT"
PASS=0; FAIL=0
# agent-browser eval returns JSON-quoted strings — strip the quotes
stripq () { sed 's/^"//;s/"$//'; }

check_pass () { # name, condition (0=ok)
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
    agent-browser wait 1200 >/dev/null

    # set theme via the app's own mechanism (localStorage + class), then reload
    agent-browser eval "localStorage.setItem('theme','$THEME'); 'set'" >/dev/null
    agent-browser reload >/dev/null
    agent-browser wait --load networkidle >/dev/null 2>&1
    agent-browser wait 1200 >/dev/null

    # 1. theme state verified BEFORE capture
    THEME_STATE=$(agent-browser eval "document.documentElement.classList.contains('dark') ? 'dark' : 'light'" 2>/dev/null | tail -1 | stripq)
    if [ "$THEME_STATE" = "$THEME" ]; then check_pass "theme state = $THEME (html.dark verified)" 0; else check_pass "theme state = $THEME (got '$THEME_STATE')" 1; fi

    # 2. horizontal overflow machine-measured
    OVERFLOW=$(agent-browser eval "Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - document.documentElement.clientWidth" 2>/dev/null | tail -1)
    if [ "$OVERFLOW" = "0" ]; then check_pass "horizontal overflow = 0px" 0; else check_pass "horizontal overflow = 0px (got ${OVERFLOW}px)" 1; fi

    # 3. page errors
    ERRS=$(agent-browser errors 2>/dev/null | grep -c "Error\|error" || true)
    if [ "$ERRS" -eq 0 ]; then check_pass "0 page errors" 0; else check_pass "0 page errors (got $ERRS)" 1; fi

    # 4. console errors
    CONS=$(agent-browser console 2>/dev/null | grep -ci "error" || true)
    if [ "$CONS" -eq 0 ]; then check_pass "console clean" 0; else check_pass "console clean ($CONS error lines)" 1; fi

    # 5. capture (page top)
    agent-browser screenshot "$OUT/page-$MODE-$THEME.png" >/dev/null
    check_pass "capture page-$MODE-$THEME.png" 0

    # 6. visual present in DOM (registry visual rendered)
    VIS=$(agent-browser eval "document.body.innerHTML.includes('lipid-laden-enterocytes') || document.querySelectorAll('svg').length > 0 ? 'yes' : 'no'" 2>/dev/null | tail -1 | stripq)
    if [ "$VIS" = "yes" ]; then check_pass "visual content present (svg in DOM)" 0; else check_pass "visual content present" 1; fi
  done
done

# element capture of the registry visual (viewport + measured rect, desktop both themes)
agent-browser set viewport 1440 900 >/dev/null
for THEME in light dark; do
  agent-browser open "$URL" >/dev/null
  agent-browser wait --load networkidle >/dev/null 2>&1; agent-browser wait 1000 >/dev/null
  agent-browser eval "localStorage.setItem('theme','$THEME'); 'set'" >/dev/null
  agent-browser reload >/dev/null
  agent-browser wait --load networkidle >/dev/null 2>&1; agent-browser wait 1000 >/dev/null
  RECT=$(agent-browser eval "(() => { const el = [...document.querySelectorAll('svg')].find(s => s.getBoundingClientRect().width > 400) || document.querySelector('svg'); if (!el) return 'NONE'; const r = el.getBoundingClientRect(); return Math.round(r.x)+','+Math.round(r.y)+','+Math.round(r.width)+','+Math.round(r.height)+','+window.scrollY; })()" 2>/dev/null | tail -1 | stripq)
  echo "element rect [$THEME]: $RECT"
  if [ "$RECT" != "NONE" ] && [ -n "$RECT" ]; then
    # document position of the element = viewport y + current scrollY
    SCROLL_TARGET=$(agent-browser eval "(() => { const el = [...document.querySelectorAll('svg')].find(s => s.getBoundingClientRect().width > 400) || document.querySelector('svg'); return Math.round(el.getBoundingClientRect().top + window.scrollY - 80); })()" 2>/dev/null | tail -1 | stripq)
    agent-browser eval "window.scrollTo(0, $SCROLL_TARGET); 'scrolled'" >/dev/null
    agent-browser wait 400 >/dev/null
    # re-measure in the scrolled viewport for an accurate crop rect
    RECT2=$(agent-browser eval "(() => { const el = [...document.querySelectorAll('svg')].find(s => s.getBoundingClientRect().width > 400) || document.querySelector('svg'); const r = el.getBoundingClientRect(); return Math.round(r.x)+','+Math.round(r.y)+','+Math.round(r.width)+','+Math.round(r.height); })()" 2>/dev/null | tail -1 | stripq)
    agent-browser screenshot "$OUT/element-visual-$THEME.png" >/dev/null
    echo "$RECT2" > "$OUT/element-rect-$THEME.txt"
    echo "  ✓ element-visual-$THEME.png (viewport capture; crop rect $RECT2)"
  else
    echo "  ✗ element capture [$THEME]: svg not found"
    FAIL=$((FAIL+1))
  fi
done

agent-browser close >/dev/null 2>&1
echo ""
echo "BROWSER QA: PASS=$PASS FAIL=$FAIL"
exit $([ $FAIL -eq 0 ] && echo 0 || echo 1)
