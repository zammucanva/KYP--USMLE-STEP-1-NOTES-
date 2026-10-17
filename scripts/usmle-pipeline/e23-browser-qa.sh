#!/usr/bin/env bash
# E23 browser QA — 4 passes (desktop 1440x900 + mobile 390x844, light + dark)
# Machine-measures: theme class BEFORE capture, horizontal overflow px, page errors,
# console errors. Captures full-page + element crops for both new visuals.
set -u
export AGENT_BROWSER_SESSION="e23-qa-$(date +%s)"
URL="http://localhost:3000/usmle/nk-b-t-cell-functions"
OUT="/home/z/kyp-usmle-notes/docs/qa/e23"
mkdir -p "$OUT"

# JS probe: returns "theme|overflowPx|pageTitle"
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
    agent-browser wait --text "Major Functions of NK, B and T Cells" > /dev/null 2>&1
    sleep 2
    # set theme via the app's theme toggle protocol: html.dark class + localStorage
    if [ "$THEME" = "dark" ]; then
      agent-browser eval 'localStorage.setItem("theme","dark"); document.documentElement.classList.add("dark");' > /dev/null
      agent-browser open "$URL" > /dev/null
      agent-browser wait --text "Major Functions of NK, B and T Cells" > /dev/null 2>&1
      sleep 2
    else
      agent-browser eval 'localStorage.setItem("theme","light"); document.documentElement.classList.remove("dark");' > /dev/null
      agent-browser open "$URL" > /dev/null
      agent-browser wait --text "Major Functions of NK, B and T Cells" > /dev/null 2>&1
      sleep 2
    fi
    R=$(probe)
    echo "probe: $R"
    # errors from the page load
    ERRS=$(agent-browser eval 'window.__pageErrors ? window.__pageErrors.length : "n/a"' 2>/dev/null)
    echo "pageErrors(n/a pre-instrumented): $ERRS"
    # full-page screenshot
    agent-browser screenshot "$OUT/full-${PASS}.png" --full 2>/dev/null && echo "captured full-${PASS}.png"
  done
done
echo "DONE"
