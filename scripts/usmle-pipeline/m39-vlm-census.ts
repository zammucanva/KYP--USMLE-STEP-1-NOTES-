import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/m39page-222.png');
  const desc = `This is page 222 of First Aid for the USMLE Step 1 2026 (pdf page 222 = printed book page 200, Microbiology — Hepatitis C therapy). pdfimages reports ZERO raster images — everything prints in the text layer. The page has a DRUG/MECHANISM/TOXICITY table (NS5A inhibitors: elbasvir, ledipasvir, pibrentasvir, velpatasvir; NS5B inhibitors: sofosbuvir; NS3/4A inhibitors: glecaprevir, grazoprevir; alternative drugs: ribavirin) and a HCV REPLICATION CYCLE figure whose text labels print interleaved (Receptor binding and endocytosis, HCV, Hepatocyte, Lipoprotein, Release, Cytoplasm, Assembly, Fusion/uncoating/RNA release, Ribavirin, Golgi apparatus, +RNA, IMP, GMP, GTP, Maturation, Nucleus, ER, -RNA, Ribosome, Translation, Membranous web [derived from ER], Replication).
Questions:
1) Describe the replication-cycle figure exactly as printed: what are its visual components (a hepatocyte? the nucleus, ER, Golgi, ribosome, membranous web? arrows for the cycle? the HCV virion with its lipoprotein)? Is it line art/schematic or photographic?
2) Where do the drug labels sit in the figure — which stages do NS3/4A (glecaprevir/grazoprevir), NS5B (sofosbuvir), NS5A, and ribavirin attach to?
3) Where does the IMP -> GMP -> GTP strip sit and what does it show (the ribavirin mechanism)?
4) Read the DRUG/MECHANISM/TOXICITY table row by row exactly as printed (which drug class, mechanism, toxicity).
5) Any margin notes, mnemonics, images, or photographs anywhere on the page? Quote verbatim.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
