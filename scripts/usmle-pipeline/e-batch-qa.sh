#!/usr/bin/env bash
# Generic browser QA — usage: e-batch-qa.sh <topic-slug> <wait-text> <qa-dir>
# 4 passes (desktop 1440x900 + mobile 390x844, light + dark), theme verified
# pre-capture, machine-measured overflow, full-page captures.
set -u
SLUG="$1"; WAIT="$2"; QADIR="$3"
export AGENT_BROWSER_SESSION="qa-${SLUG}-$(date +%s)"
URL="http://localhost:3000/usmle/${SLUG}"
mkdir -p "$QADIR"

for VIEW in desktop mobile; do
  if [ "$VIEW" = "desktop" ]; then
    agent-browser set viewport 1440 900
  else
    agent-browser set viewport 390 844
  fi
  for THEME in light dark; do
    PASS="${VIEW}-${THEME}"
    agent-browser open "$URL" > /dev/null
    agent-browser wait --text "$WAIT" > /dev/null 2>&1
    sleep 1
    if [ "$THEME" = "dark" ]; then
      agent-browser eval 'localStorage.setItem("theme","dark"); document.documentElement.classList.add("dark");' > /dev/null
    else
      agent-browser eval 'localStorage.setItem("theme","light"); document.documentElement.classList.remove("dark");' > /dev/null
    fi
    agent-browser open "$URL" > /dev/null
    agent-browser wait --text "$WAIT" > /dev/null 2>&1
    sleep 2
    R=$(agent-browser eval 'JSON.stringify({
      theme: (document.documentElement.classList.contains("dark") ? "dark" : "light"),
      overflow: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
      title: document.title
    })')
    echo "$PASS probe: $R"
    agent-browser screenshot "$QADIR/full-${PASS}.png" --full 2>/dev/null | grep -q "Screenshot saved" && echo "$PASS captured" || echo "$PASS CAPTURE FAILED"
  done
done
agent-browser close 2>/dev/null
echo "DONE"
