import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
/* PH13 census ADJUDICATION — pdfimages extracted THREE rasters (img-000
 * 426x336, img-001 383x518, img-002 458x277). PyMuPDF xobject-rect analysis
 * places all three in the TOP half (the micturition figure, x~190-293pt,
 * top-origin y~103-264pt); the first VLM pass guessed one of them might be
 * the bottom-half adrenergic table "rendered as a raster" — impossible,
 * since the adrenergic table has a full pdftotext text layer (you cannot
 * extract text from a raster) and PyMuPDF finds 34 VECTOR paths (the table
 * cell borders/zebra fills) in the bottom half. This adjudication shows the
 * VLM the three ACTUAL extracted rasters plus the bottom-half crop of the
 * 200-DPI page render, so the placement question is settled from pixels,
 * not guesses. */
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
  const guard = `IMPORTANT: This is an IMAGE INSPECTION task. Do NOT write code. Describe exactly what each image shows, factually and tersely.`;
  const r1 = await ask(zai, `${guard}

Image 1 of 4: a raster image extracted by pdfimages from page 258 (book 236) of First Aid USMLE 2026 — the "Micturition control" page. Images 2, 3, 4 are the other extracted rasters. For EACH of the three extracted rasters, describe what it depicts (anatomical structure, orientation, any visible labels) in one or two sentences, numbered 1-3 in the order given (image 1 = raster A, image 2 = raster B, image 3 = raster C). Then answer: do any of these three rasters depict a RECEPTOR/TISSUE/EFFECT table of text rows (alpha1, alpha2, beta1, beta2, beta3)?`,
    ['/tmp/ph13-imgs/img-000.png', '/tmp/ph13-imgs/img-001.png', '/tmp/ph13-imgs/img-002.png']);
  console.log('=== ADJUDICATION 1: the three extracted rasters ===');
  console.log(r1);
  const r2 = await ask(zai, `${guard}

This is the BOTTOM portion of a 200-DPI render of page 258 (book 236) of First Aid USMLE 2026, starting slightly above the heading "Tissue distribution of adrenergic receptors". Describe exactly what prints here: (1) any figures, illustrations, icons, or photographs (or confirm there are NONE — only text and table cell borders/shading); (2) the table's headers and every printed row in order, with the tissue-to-effect pairing per receptor; (3) any margin notes or mnemonics anywhere in this crop (or confirm none); (4) what prints at the very bottom.`,
    ['/tmp/ph13-bottom-hires.png']);
  console.log('\n=== ADJUDICATION 2: the bottom half at 200 DPI ===');
  console.log(r2);
}
main().catch((e) => { console.error(e); process.exit(1); });
