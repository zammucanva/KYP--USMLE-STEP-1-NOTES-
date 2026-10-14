// E3 dump. Run: bun n_dump_notes.ts
import { tcaCyclePdh } from "./src/lib/kyp/usmle/notes/tca-cycle-pdh";
const n = tcaCyclePdh;
console.log(JSON.stringify({
  id: n.id, title: n.title, difficulty: n.difficulty, sourceRef: n.sourceRef,
  mechanismIds: n.mechanisms.map((m) => m.id),
  visualIds: [...(n.blocks ?? []), ...((n.clinical ?? []) as any[])].filter((b: any) => b.kind === "visual").map((b: any) => b.visualId as string),
  mnemonicCount: n.mnemonics.length,
}, null, 1));
