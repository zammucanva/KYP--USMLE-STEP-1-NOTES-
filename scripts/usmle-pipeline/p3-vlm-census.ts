import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p-226.png');
  const desc = `This is page 226 of First Aid for the USMLE Step 1 2026 (pdf page 226 = printed book page 204, PATHOLOGY — Cellular Injury, the APOPTOSIS page). pdfimages reports ZERO rasters — everything prints in the text layer. The page has: an Apoptosis intro block (ATP-dependent programmed cell death; the caspase cascade; apoptotic bodies; eosinophilic cytoplasm; DNA laddering 180bp), an Intrinsic (mitochondrial) pathway block, an Extrinsic (death receptor) pathway block, a Perforin/granzyme B pathway block, and a FIGURE whose labels print interleaved (Intrinsic pathway (mitochondrial), Extrinsic pathway (death receptor), TNF-α, p53 activation, DNA damage, Radiation/ROS/toxins, Misfolded proteins, Hypoxia, Bax/Bak, Bcl-2, Cytochrome C, FasL, TNFR, Fas, Executioner caspases, Cytoskeletal dispersion, Cytoplasmic bleb, Cytotoxic T cell, Granzyme B, Perforin, Nuclear fragmentation, Perforin/granzyme B pathway, Ligands for macrophage cell receptors, Macrophage, Apoptotic body).
Questions:
1) Describe the FIGURE exactly as printed: is it a three-input convergence map — the INTRINSIC column (DNA damage from Radiation/ROS/toxins, Misfolded proteins, Hypoxia feeding p53 activation, then Bax/Bak vs Bcl-2 at the mitochondrion, then Cytochrome C release), the EXTRINSIC column (FasL binding Fas, TNF-α binding TNFR), and the PERFORIN/GRANZYME B column (a cytotoxic T cell releasing Granzyme B through Perforin pores) — all converging on EXECUTIONER CASPASES, then fanning out to Cytoskeletal dispersion, Cytoplasmic bleb, and Nuclear fragmentation, ending in an Apoptotic body tagged with 'Ligands for macrophage cell receptors' being engulfed by a Macrophage?
2) Is there a mitochondrion drawing in the intrinsic column? A cell-membrane drawing with receptors (Fas, TNFR) in the extrinsic column? A cytotoxic T cell drawing in the perforin column? A macrophage drawing at the end?
3) Where do 'Bax/Bak' and 'Bcl-2' sit in the figure (at the mitochondrial membrane — one promoting pore formation and cytochrome C release, the other blocking it)?
4) Is the figure line art/schematic or photographic? Any clinical photographs anywhere on the page?
5) Read the two margin mnemonics verbatim: the one for Bax and Bak ('Bad for survival'?) and the one for Bcl-2 and Bcl-xL ('Be clever, live'?). Where do they print (margin, next to the Bcl-2 paragraph)? Quote them exactly. Any other margin notes?`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
