import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
/* PH13 paint QA (best-effort standalone check — the main agent owns the
 * real browser QA against the live site). Renders the visual component
 * via react-dom/server into a harness with the site's own token values
 * (light + dark from globals.css), screenshots with agent-browser, and
 * asks the VLM to verify label readability and overlap/cut-off defects. */
async function ask(zai: any, text: string, files: string[]) {
  const content: any[] = [{ type: 'text', text }];
  for (const f of files) {
    const b64 = readFileSync(f).toString('base64');
    content.push({ type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } });
  }
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content }],
    thinking: { type: 'disabled' },
  });
  return String(r.choices?.[0]?.message?.content);
}
async function main() {
  const zai = await (ZAI as any).create();
  const guard = `This is a PAINT VERIFICATION of an SVG diagram rendered in a browser (light theme in image 1, dark theme in image 2). Answer factually and tersely.`;
  const q = `${guard}

The diagram is a five-column receptor directory (alpha1, alpha2, beta1, beta2, beta3), each column stacked with tissue-effect chips, plus three lower bands. Check and report:
1) READABILITY: are all text labels legible in BOTH themes? Name any label that is too small, low-contrast, or unreadable.
2) OVERFLOW/CUT-OFF: does any text overflow its chip/box, or get clipped at the edges of the SVG? Name any.
3) OVERLAP: do any chips, badges (PANCREAS x2 / HEART x2), or text lines overlap each other? Name any.
4) LAYOUT: are the five columns side by side without collision? Do the effect chips sit inside their row cards? Do the three bottom-band panels stay inside their container?
5) CONTENT SPOT-CHECK: quote the alpha2 column's three tissue labels and the beta2 column's five tissue labels as they appear.
6) VERDICT: PASS or FAIL per theme, with reasons.`;
  const r = await ask(zai, q, ['/tmp/ph13-paint-L.png', '/tmp/ph13-paint-D.png']);
  console.log(r);
}
main().catch((e) => { console.error(e); process.exit(1); });
