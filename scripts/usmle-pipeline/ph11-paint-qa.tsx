/* PH11 paint-qa — standalone render of PainTransmissionMap (visuals/
 * pharm-p11.tsx) for a light+dark paint check BEFORE promotion. Renders
 * the component to static SVG markup with react-dom/server, wraps it in
 * minimal HTML with a token-shim stylesheet (the exact oklch values from
 * src/app/globals.css — light .root + .dark values), and writes
 * staging-ph11/visual-light.html + visual-dark.html for the agent-browser
 * screenshot pass. The browser QA of the integrated page remains the main
 * agent's gate; this is the authoring-side collision/clipping check. */
import { renderToStaticMarkup } from "react-dom/server";
import { writeFileSync } from "fs";
import { PainTransmissionMap } from "../../src/components/kyp/usmle/visuals/pharm-p11";

const TOKENS: Record<string, [string, string]> = {
  // token: [light, dark] — values from src/app/globals.css
  "card": ["oklch(1 0 0)", "oklch(0.18 0.025 250)"],
  "border": ["oklch(0.92 0.012 210)", "oklch(1 0 0 / 10%)"],
  "brand": ["oklch(0.5 0.11 195)", "oklch(0.72 0.13 190)"],
  "brand-soft": ["oklch(0.93 0.04 195)", "oklch(0.28 0.05 200)"],
  "emergency": ["oklch(0.55 0.22 25)", "oklch(0.7 0.22 25)"],
  "emergency-soft": ["oklch(0.95 0.04 25)", "oklch(0.3 0.08 25)"],
  "warning": ["oklch(0.52 0.15 60)", "oklch(0.78 0.18 60)"],
  "warning-soft": ["oklch(0.95 0.05 70)", "oklch(0.3 0.08 70)"],
  "neural": ["oklch(0.62 0.16 280)", "oklch(0.72 0.18 280)"],
  "neural-soft": ["oklch(0.95 0.025 280)", "oklch(0.28 0.06 280)"],
  "secondary": ["oklch(0.96 0.012 200)", "oklch(0.24 0.03 250)"],
  "foreground": ["oklch(0.18 0.02 240)", "oklch(0.96 0.008 220)"],
  "muted-foreground": ["oklch(0.5 0.02 230)", "oklch(0.7 0.015 220)"],
  "background": ["oklch(0.99 0.005 220)", "oklch(0.14 0.02 250)"],
};

function css(theme: 0 | 1): string {
  const rules: string[] = [];
  for (const [name, vals] of Object.entries(TOKENS)) {
    rules.push(`.fill-${name}{fill:${vals[theme]}}`, `.stroke-${name}{stroke:${vals[theme]}}`);
    for (const alpha of [60, 50, 40, 30]) {
      const cls = `.fill-${name}\\/${alpha}`;
      rules.push(`${cls}{fill:color-mix(in oklab, ${vals[theme]} ${alpha}%, transparent)}`);
    }
  }
  return rules.join("\n");
}

function html(theme: "light" | "dark", markup: string): string {
  const idx = theme === "light" ? 0 : 1;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  body{margin:0;background:${TOKENS.background[idx]}}
  .frame{padding:16px;width:1134px;box-sizing:border-box}
  svg{display:block}
  ${css(idx as 0 | 1)}
</style></head><body><div class="frame">${markup}</div></body></html>`;
}

const markup = renderToStaticMarkup(<PainTransmissionMap />);
writeFileSync(".usmle-pipeline-cache/staging-ph11/visual-light.html", html("light", markup), "utf8");
writeFileSync(".usmle-pipeline-cache/staging-ph11/visual-dark.html", html("dark", markup), "utf8");
console.log("wrote staging-ph11/visual-light.html + visual-dark.html; svg bytes:", markup.length);
