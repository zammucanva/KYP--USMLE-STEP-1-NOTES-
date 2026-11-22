import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

// M14 paint QA — the SpirocheteSyphilisMap registry visual (light + dark).

async function ask(zai: any, dataUrl: string, prompt: string): Promise<string> {
  const messages: VisionMessage[] = [
    { role: 'user', content: [
      { type: 'text', text: prompt },
      { type: 'image_url', image_url: { url: dataUrl } },
    ] },
  ];
  const response = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages,
    thinking: { type: 'disabled' },
  });
  return response.choices?.[0]?.message?.content ?? JSON.stringify(response);
}

async function main() {
  const which = process.argv[2] ?? 'element-spirochete-syphilis-map-light.png';
  const png = readFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/m14/${which}`);
  const dataUrl = `data:image/png;base64,${png.toString('base64')}`;
  const zai = await ZAI.create();
  const prompt = `You are performing paint QA on a study-website SVG schematic (an original composition for a medical education site). Image: ${which}

The visual has five panels plus strips:
1. THE SPIROCHETE TRIO — three side-by-side organism cards (Leptospira / Treponema pallidum / Borrelia burgdorferi) with multi-line wrapped text, plus a full-width JARISCH-HERXHEIMER bar beneath them.
2. LYME DISEASE — one full-width card: a VECTOR & RESERVOIR block, a THE THREE STAGES block (three named stages with description lines), and a bold treatment line at the bottom.
3. THE SYPHILIS CLOCK — four side-by-side stage cards (PRIMARY / SECONDARY / TERTIARY / CONGENITAL) of different heights, plus a penicillin-G line at the bottom.
4. THE SEROLOGY TREE — two root boxes (SEROLOGIC TESTING / DIRECT TESTING), sub-headers (Nontreponemal (nonspecific) / Treponemal (specific)), leaf boxes (RPR, VDRL, FTA-ABS, TP-PA, Darkfield microscopy, PCR), then rules lines and a FALSE-POSITIVE VDRL WITH: header with its list.
5. THE CURVED-ROD ROSTER — two full-width rows (Vibrio cholerae + V. vulnificus; Helicobacter pylori) with name at left and wrapped text right.
6. An anchors strip and a three-line fine-print footer at the very bottom.

Inspect carefully and report:
1. OVERLAPS: any text labels overlapping each other or colliding with panel/card borders (pay special attention to: the trio cards' wrapped last lines vs the Jarisch-Herxheimer bar; the four clock cards' bottom lines vs the panel edge and the penicillin line; the roster text vs each row's bottom border).
2. CLIPPING: any text cut off at edges (check every wrapped line's end, the anchors strip, the three footer lines).
3. CONTRAST/READABILITY: any text hard to read against its background.
4. ALIGNMENT: any misplaced or floating elements; any card whose text drifts outside its column.
5. CONTENT CHECK: one sentence per panel on what it depicts.
End with a verdict line: VERDICT: CLEAN or VERDICT: DEFECTS FOUND (then list them).`;
  const reply = await ask(zai, dataUrl, prompt);
  console.log(`===== ${which} =====`);
  console.log(reply);
}
main().catch((e) => { console.error('M14 paint QA failed:', (e as any)?.message || e); process.exit(1); });
