import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const ask = async (b64: string, prompt: string, tag: string) => {
    const r = await zai.chat.completions.createVision({
      model: 'glm-4.6v',
      messages: [{ role: 'user', content: [
        { type: 'text', text: prompt },
        { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
      ]}],
      thinking: { type: 'disabled' },
    });
    console.log(`\n===== ${tag} =====\n` + String(r.choices?.[0]?.message?.content));
  };
  // 1. The three extracted raster objects — what are they?
  for (const n of ['000', '001', '002']) {
    const b64 = readFileSync(`/tmp/ph12-imgs/img-${n}.png`).toString('base64');
    await ask(b64, 'This is one image object extracted from a textbook PDF page (First Aid USMLE, Pharmacology — Autonomic Drugs, Micturition control). Describe exactly what this image shows: is it part of a medical illustration (which part), decorative art, a mnemonic cartoon, or something else? Describe any letters, people, objects, colors.', `raster img-${n}.png (426x336 / 383x518 / 458x277)`);
  }
  // 2. The page at 200 DPI — margin mnemonic adjudication
  const b64p = readFileSync('/tmp/ph12-page200-258.png').toString('base64');
  await ask(b64p,
    'This is First Aid USMLE page 236 (Micturition control). Focus ONLY on the TOP half of the page. ' +
    '(A) The margin mnemonic "Baby one more time." — quote it EXACTLY as printed, including capitalization and punctuation. Where does it sit (left/right margin, near what)? Which letters of the phrase are emphasized (bold, colored, highlighted) — list the exact emphasized letters in order. Is there any small art/cartoon next to it (describe: person, pose, objects)? ' +
    '(B) Does the margin art or mnemonic show any letter-to-receptor anchors (e.g., lines/arrows connecting letters to receptor labels, or tiny receptor names printed near the letters)? If yes, give the exact mapping of each letter to its receptor. ' +
    '(C) In the bladder figure: is the β-receptor label on the detrusor printed as β₂ or β₃? Is the M-receptor on the detrusor printed as M₃? Is the receptor at the internal urethral sphincter printed as α₁? Are there numbered circles ❶❷❸ anywhere in the figure or table? ' +
    '(D) Describe the figure style precisely: is it flat vector-style line art with flat color fills, or a painted/shaded 3D-style medical illustration? Is the pons/brain shown in the figure or only in text?',
    'page 258 @200dpi — margin mnemonic + figure adjudication');
}
main();
