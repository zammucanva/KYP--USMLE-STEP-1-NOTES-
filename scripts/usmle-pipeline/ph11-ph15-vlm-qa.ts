import ZAI from '/home/z/.bun/install/global/node_modules/z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

const BASE = '/home/z/my-project/kyp-usmle-notes/docs/qa';
const TOPICS: [string, string][] = [
  ['ph16', 'cholinomimetic agents (direct agonists bethanechol/carbachol/methacholine/pilocarpine vs indirect anticholinesterases; organophosphate poisoning band; atropine vs pralidoxime antidote fork)'],
  ['ph17', 'muscarinic antagonists and atropine (the six-organ atropine spine with DUMBBELSS banner, seven drug directory rows, CNS tollbooth exam band, anticholinergic toxidrome chips)'],
  ['ph18', 'sympatholytics alpha-2 agonists and alpha-blockers (the presynaptic alpha-2 autoreceptor brake fork; the alpha-blocker fork with nonselective/alpha-1-selective/alpha-2-selective cards)'],
  ['ph19', 'beta blockers (selectivity lanes beta-1-selective A-to-M, nonselective N-to-Z, alpha+beta duals, nebivolol; ten application docks; classic-exam band with mortality trio)'],
  ['ph20', 'phosphodiesterase inhibitors (cAMP and cGMP second-messenger lanes cut by the PDE brake; five family cards; the sildenafil NO/cGMP panel with nitrates contraindication warning)'],
];

async function main() {
  const zai = await (ZAI as any).create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA inspection. Do NOT write code. Inspect the image and answer the numbered questions factually and tersely.`;
  let defects = 0;
  for (const [pid, desc] of TOPICS) {
    for (const theme of ['light', 'dark'] as const) {
      const file = `${BASE}/${pid}/element-crop-${theme === 'light' ? 'light-v2' : 'dark'}.png`;
      let png: Buffer;
      try { png = readFileSync(file); } catch { console.log(`${pid} ${theme}: CROP MISSING — ${file}`); defects++; continue; }
      const q = `This is a browser screenshot (theme: ${theme}) of an original educational SVG diagram about ${desc}.
Questions:
1) Are all major panels fully rendered with no clipped, cut-off, or missing text?
2) Is any text overlapping other text or spilling outside its boxes?
3) Do arrows/connectors render correctly? Are special glyphs (alpha, beta, arrows, up/down triangles) rendering, not tofu boxes?
4) Is text readable in this theme (contrast, size)?
5) List any visual defects. If none, say CLEAN.`;
      const r = await zai.chat.completions.createVision({
        model: 'glm-4.6v',
        messages: [{ role: 'user', content: [
          { type: 'text', text: `${guard}\n\n${q}\n\nInspect it now.` },
          { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } },
        ]}],
        thinking: { type: 'disabled' },
      });
      const answer = String(r.choices?.[0]?.message?.content ?? '');
      const clean = /CLEAN/i.test(answer) && !/defect|overlap|unreadable|clipped|missing/i.test(answer.replace(/If none, say CLEAN\.?/gi, ''));
      if (!clean) defects++;
      console.log(`\n===== ${pid} ${theme.toUpperCase()} ${clean ? '— CLEAN' : '— REVIEW'} =====`);
      console.log(answer.slice(0, 900));
    }
  }
  console.log(`\nVLM-BATCH-DONE defects-flagged: ${defects}`);
}
main().catch((e) => { console.error(String(e).slice(0, 400)); process.exit(1); });
