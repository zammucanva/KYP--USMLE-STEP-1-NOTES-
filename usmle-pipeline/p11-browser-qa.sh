#!/usr/bin/env bash
# M37 browser QA — 4 passes (desktop 1440x900 + mobile 390x844, light + dark)
# Machine-measures: theme class BEFORE capture, horizontal overflow px, page title.
# Then an in-browser getBBox paint audit over the GranulomaScarMap svg texts.
set -u
export AGENT_BROWSER_SESSION="p11-qa-$(date +%s)"
URL="http://localhost:3000/usmle/granulomatous-inflammation"
OUT="/home/z/my-project/kyp-usmle-notes/docs/qa/p11"
mkdir -p "$OUT"

probe() {
  agent-browser eval 'JSON.stringify({
    theme: (document.documentElement.classList.contains("dark") ? "dark" : "light"),
    overflow: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
    title: document.title
  })'
}

for VIEW in desktop mobile; do
  if [ "$VIEW" = "desktop" ]; then
    agent-browser set viewport 1440 900
  else
    agent-browser set viewport 390 844
  fi
  for THEME in light dark; do
    PASS="${VIEW}-${THEME}"
    echo "=== PASS $PASS ==="
    agent-browser open "$URL" > /dev/null
    agent-browser wait --text "Granulomatous" > /dev/null 2>&1
    sleep 2
    if [ "$THEME" = "dark" ]; then
      agent-browser eval 'localStorage.setItem("theme","dark"); document.documentElement.classList.add("dark");' > /dev/null
    else
      agent-browser eval 'localStorage.setItem("theme","light"); document.documentElement.classList.remove("dark");' > /dev/null
    fi
    agent-browser open "$URL" > /dev/null
    agent-browser wait --text "Granulomatous" > /dev/null 2>&1
    sleep 3
    R=$(probe)
    echo "probe: $R"
    agent-browser screenshot "$OUT/full-${PASS}.png" --full 2>/dev/null && echo "captured full-${PASS}.png"
  done
done

echo "=== getBBox PAINT AUDIT (GranulomaScarMap) ==="
agent-browser set viewport 1440 900
agent-browser open "$URL" > /dev/null
agent-browser wait --text "Granulomatous" > /dev/null 2>&1
sleep 3
agent-browser eval '(() => {
  const svg = document.querySelectorAll("svg[role=img]");
  let target = null;
  for (const s of svg) { if (s.getAttribute("aria-label") && s.getAttribute("aria-label").startsWith("Granulomatous inflammation and scar formation — the map")) target = s; }
  if (!target) return JSON.stringify({error: "visual not found"});
  const vb = target.viewBox.baseVal;
  const rects = [];
  const texts = target.querySelectorAll("text");
  for (const t of texts) {
    const b = t.getBBox();
    rects.push({x: b.x, y: b.y, w: b.width, h: b.height, s: t.textContent.slice(0, 40)});
  }
  const overlaps = [];
  for (let i = 0; i < rects.length; i++) {
    for (let j = i + 1; j < rects.length; j++) {
      const a = rects[i], b = rects[j];
      const ox = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
      const oy = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
      if (ox > 1 && oy > 1) overlaps.push({a: a.s, b: b.s, ox: Math.round(ox), oy: Math.round(oy)});
    }
  }
  const out = [];
  for (const r of rects) {
    const cx0 = r.x, cx1 = r.x + r.w, cy0 = r.y, cy1 = r.y + r.h;
    const edge = {l: Math.round(cx0), r: Math.round(vb.width - cx1), t: Math.round(cy0), b: Math.round(vb.height - cy1)};
    if (edge.l < 0 || edge.r < 0 || edge.t < 0 || edge.b < 0) out.push({s: r.s, edge});
  }
  return JSON.stringify({texts: rects.length, overlaps: overlaps.length, overlapList: overlaps.slice(0, 12), outsideViewBox: out, vb: {w: vb.width, h: vb.height}});
})()'

echo "=== close session ==="
agent-browser close --all > /dev/null 2>&1 || true
echo "QA complete"
