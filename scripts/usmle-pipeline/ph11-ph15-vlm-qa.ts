import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

const BASE = '/home/z/my-project/kyp-usmle-notes/docs/qa';
const TOPICS: [string, string][] = [
  ['ph11', 'pain transmission (the four-station relay: transduction, transmission, modulation, perception — each with drug-class blocker chips; A-delta vs C fiber lanes; TRPV transducer; neuropathic Na+ channel panel)'],
  ['ph12', 'bladder micturition pharmacology (pontine center band, bladder wiring map with M3/beta-3/alpha-1 receptors and three nerves: pelvic, hypogastric, pudendal; retention-vs-voiding fork; four drug rows bethanechol/oxybutynin/mirabegron/tamsulosin)'],
  ['ph13', 'adrenergic receptor tissue distribution directory (five columns alpha-1, alpha-2, beta-1, beta-2, beta-3 with tissue-to-effect chips; double-booked pancreas and heart flags; exam-reading band)'],
  ['ph14', 'G-protein second messenger system (three swimlanes Gq/Gs/Gi families with receptor lists; the Gq cascade panel: receptor, Gq, phospholipase C, PIP2, DAG, protein kinase C, IP3, Ca2+; the shared adenylyl cyclase panel with Gs stimulating and Gi inhibiting; ATP to cyclic AMP to protein kinase A)'],
  ['ph15', 'the four-panel autonomic synapse map (cholinergic, noradrenergic, serotonergic, dopaminergic synapses with synthesis chains, vesicles, transporters NET/SERT/DAT with drug blocker chips, postsynaptic receptors, class banners; alpha-2 negative feedback loop in the noradrenergic panel)'],
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
