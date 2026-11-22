#!/usr/bin/env bash
# M31 browser QA — 4 passes (desktop 1440x900 + mobile 390x844, light + dark)
# Machine-measures: theme class BEFORE capture, horizontal overflow px, page title.
# Then an in-browser getBBox paint audit over the AntimicrobialTargetMap svg texts.
set -u
export AGENT_BROWSER_SESSION="m31-qa-$(date +%s)"
URL="http://localhost:3000/usmle/antimicrobial-overview"
OUT="/home/z/my-project/kyp-usmle-notes/docs/qa/m31"
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
    agent-browser wait --text "Antimicrobial Mechanisms: The Target Map" > /dev/null 2>&1
    sleep 2
    if [ "$THEME" = "dark" ]; then
      agent-browser eval 'localStorage.setItem("theme","dark"); document.documentElement.classList.add("dark");' > /dev/null
    else
      agent-browser eval 'localStorage.setItem("theme","light"); document.documentElement.classList.remove("dark");' > /dev/null
    fi
    agent-browser open "$URL" > /dev/null
    agent-browser wait --text "Antimicrobial Mechanisms: The Target Map" > /dev/null 2>&1
    sleep 3
    R=$(probe)
    echo "probe: $R"
    agent-browser screenshot "$OUT/full-${PASS}.png" --full 2>/dev/null && echo "captured full-${PASS}.png"
  done
done

echo "=== getBBox PAINT AUDIT (AntimicrobialTargetMap) ==="
agent-browser set viewport 1440 900
agent-browser open "$URL" > /dev/null
agent-browser wait --text "Antimicrobial Mechanisms: The Target Map" > /dev/null 2>&1
sleep 3
agent-browser eval '(() => {
  const svg = document.querySelectorAll("svg[role=img]");
  let target = null;
  for (const s of svg) { if (s.getAttribute("aria-label") && s.getAttribute("aria-label").startsWith("Antimicrobial therapy")) target = s; }
  if (!target) return JSON.stringify({error: "visual not found"});
  const vb = target.viewBox.baseVal;
  const rects = [];
  const texts = target.querySelectorAll("text");
  for (const t of texts) {
    const b = t.getBBox();
    rects.push({x: b.x, y: b.y, w: b.width, h: b.height, s: t.textContent.slice(0, 40)});
  }
  let overlaps = 0, overruns = 0, edges = 0;
  const details = [];
  for (let i = 0; i < rects.length; i++) {
    const a = rects[i];
    if (a.x < 0 || a.y < 0 || a.x + a.w > vb.width + 0.5 || a.y + a.h > vb.height + 0.5) {
      edges++; details.push("EDGE: " + a.s);
    }
    for (let j = i + 1; j < rects.length; j++) {
      const b = rects[j];
      const ox = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
      const oy = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
      if (ox > 1 && oy > 1) { overlaps++; details.push("OVERLAP: [" + a.s + "] vs [" + b.s + "]"); }
    }
  }
  const rectsAll = target.querySelectorAll("rect");
  for (const t of texts) {
    const b = t.getBBox();
    let inside = null;
    for (const r of rectsAll) {
      const rb = r.getBBox();
      if (b.x >= rb.x - 0.5 && b.y >= rb.y - 0.5 && b.x + b.w <= rb.x + rb.width + 0.5 && b.y + b.h <= rb.y + rb.height + 0.5) { inside = rb; break; }
    }
    if (inside) {
      if (b.x < inside.x - 0.5 || b.y < inside.y - 0.5 || b.x + b.w > inside.x + inside.width + 0.5 || b.y + b.h > inside.y + inside.height + 0.5) {
        overruns++; details.push("OVERRUN: " + t.textContent.slice(0, 40));
      }
    }
  }
  return JSON.stringify({texts: texts.length, overlaps, overruns, edges, details: details.slice(0, 25)});
})()' > "$OUT/bbox-audit.json"
cat "$OUT/bbox-audit.json"
echo ""
echo "=== ELEMENT RECT (visual, for crops) ==="
agent-browser eval '(() => {
  const svg = document.querySelectorAll("svg[role=img]");
  for (const s of svg) {
    if (s.getAttribute("aria-label") && s.getAttribute("aria-label").startsWith("Antimicrobial therapy")) {
      const r = s.getBoundingClientRect();
      return JSON.stringify({x: r.x, y: r.y + window.scrollY, w: r.width, h: r.height});
    }
  }
  return "{}";
})()' > "$OUT/element-rect.json"
cat "$OUT/element-rect.json"
echo ""
echo "DONE"
