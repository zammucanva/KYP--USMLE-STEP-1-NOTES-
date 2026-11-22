import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA inspection. Do NOT write code. Inspect the image and answer the numbered questions factually and tersely.`;
  for (const theme of ['light', 'dark'] as const) {
    const png = readFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/m39/element-crop-v0-${theme}.png`);
    const desc = `This is a browser screenshot (theme: ${theme}) of an ORIGINAL educational SVG diagram about Hepatitis C therapy (a "DAA target map"). It should contain: a LEFT naming-ladder panel (-previr/-asvir/-buvir boxes + multidrug rule); a CENTER panel with a large ellipse (the hepatocyte) containing a nucleus, small virion circle outside, TRANSLATION box (NS3/4A), REPLICATION box (NS5B, membranous web), ASSEMBLY box (NS5A), and stage labels; a RIGHT host-door panel (ribavirin, IMP-GMP-GTP strip, toxicity contrast); a BOTTOM cycle strip; a footer.
Questions:
1) Are all panels fully rendered with no clipped/missing text?
2) Any text overlap or spill outside boxes?
3) Do the ⊣ and ↔ and → symbols render correctly (not as literal backslash-u sequences or tofu)? Specifically check the replication box lines about "(+) RNA" and "(−) RNA" — is the minus sign a proper − character, or does it show as the literal text "u2212"?
4) Readable in this theme?
5) List defects. If none, say CLEAN.`;
    const messages: VisionMessage[] = [
      { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
    ];
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
    console.log(`\n===== ${theme.toUpperCase()} =====\n` + (r.choices?.[0]?.message?.content ?? ''));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
