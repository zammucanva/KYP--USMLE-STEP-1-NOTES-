import {
  Badge,
  Callout,
  CardPrimitive,
} from "@/components/kyp/ui";
import { MechanismFlow } from "@/components/kyp/ui/mechanism-flow";
import { Accordion } from "@/components/kyp/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MiniCasePanel } from "./mini-case";
import type {
  DrugCard,
  KypUsMLENote,
  Mnemonic,
  PatternCard,
  PivotCard,
  TrapCard,
  UsMLEMechanism,
} from "@/lib/kyp/usmle/types";

/* ------------------------------------------------------------
   Mechanisms — data rendered by the UNIVERSAL KYP MECHANISM
   SYSTEM (MechanismFlow). No USMLE-specific mechanism UI.
   ------------------------------------------------------------ */

export function UsMLEMechanisms({ mechanisms }: { mechanisms: UsMLEMechanism[] }) {
  return (
    <div className="space-y-14">
      {mechanisms.map((m) => (
        <div key={m.id}>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-h3 text-foreground">{m.title}</h3>
            {m.context && (
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-[0.7rem] font-medium text-muted-foreground">
                {m.context}
              </span>
            )}
          </div>
          <MechanismFlow flow={m.flow} />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------
   Pharmacology — drug cards on the KYP card chassis
   ------------------------------------------------------------ */

const drugRows: { key: keyof DrugCard; label: string }[] = [
  { key: "target", label: "Target" },
  { key: "mechanism", label: "Mechanism" },
  { key: "effect", label: "Net effect" },
  { key: "uses", label: "Uses" },
  { key: "adverse", label: "Adverse effects" },
];

export function UsMLEPharmacology({ drugs }: { drugs: DrugCard[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {drugs.map((d, i) => (
        <CardPrimitive key={i} variant="flat" className="flex flex-col">
          <div className="border-b border-border/60 p-5 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-serif text-lg font-semibold text-foreground">{d.drug}</h4>
              <Badge variant="brand" size="sm">{d.klass}</Badge>
            </div>
          </div>
          <div className="flex-1 p-5">
            <dl className="space-y-2.5">
              {drugRows.map(({ key, label }) => (
                <div key={key}>
                  <dt className="text-overline text-muted-foreground">{label}</dt>
                  <dd className="mt-0.5 text-body-sm text-foreground/85 leading-relaxed">
                    {d[key] as string}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          {d.clue && (
            <div className="border-t border-border/60 p-5 pt-4">
              <Callout variant="tip" title="Exam clue">
                {d.clue}
              </Callout>
            </div>
          )}
        </CardPrimitive>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------
   USMLE attack — patterns, traps, pivots
   ------------------------------------------------------------ */

export function UsMLEPatterns({ patterns }: { patterns: PatternCard[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {patterns.map((p, i) => (
        <CardPrimitive key={i} variant="flat">
          <div className="p-5">
            <p className="text-body-sm text-foreground/85 leading-relaxed italic">“{p.stem}”</p>
            <div className="mt-4 space-y-2 border-t border-border/60 pt-4">
              <p className="text-body-sm">
                <span className="font-semibold text-brand">Key clue: </span>
                <span className="text-foreground/85">{p.discriminator}</span>
              </p>
              <p className="text-body-sm">
                <span className="font-semibold text-neural">Concept: </span>
                <span className="text-foreground/85">{p.concept}</span>
              </p>
              <p className="rounded-lg bg-success-soft/40 p-2.5 text-body-sm text-foreground/90">
                <span className="font-semibold text-success">Answer: </span>
                {p.answer}
              </p>
            </div>
          </div>
        </CardPrimitive>
      ))}
    </div>
  );
}

export function UsMLETraps({ traps }: { traps: TrapCard[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {traps.map((t, i) => (
        <CardPrimitive key={i} variant="flat">
          <div className="p-5">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center">
              <span className="rounded-lg bg-emergency-soft/50 p-2 font-serif text-sm font-semibold text-emergency">
                {t.a}
              </span>
              <span className="text-overline text-muted-foreground">vs</span>
              <span className="rounded-lg bg-brand-soft/50 p-2 font-serif text-sm font-semibold text-brand-ink">
                {t.b}
              </span>
            </div>
            <div className="mt-4 space-y-2.5 border-t border-border/60 pt-4">
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground/80">Why confused: </span>
                {t.whyConfused}
              </p>
              <p className="text-body-sm text-foreground/85 leading-relaxed">
                <span className="font-semibold text-foreground">The difference: </span>
                {t.keyDifference}
              </p>
              <p className="rounded-lg bg-warning-soft/40 p-2.5 text-body-sm text-foreground/90">
                <span className="font-semibold text-warning">Fast fork: </span>
                {t.clue}
              </p>
            </div>
          </div>
        </CardPrimitive>
      ))}
    </div>
  );
}

export function UsMLEPivots({ pivots }: { pivots: PivotCard[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {pivots.map((p, i) => (
        <CardPrimitive key={i} variant="outline">
          <div className="p-5">
            <p className="text-overline text-muted-foreground">Looks like</p>
            <p className="mt-1 font-serif text-base font-semibold text-foreground">{p.lookAlike}</p>
            <p className="mt-4 text-overline text-brand">Differentiator</p>
            <p className="mt-1 text-body-sm text-foreground/85 leading-relaxed">{p.differentiator}</p>
            <p className="mt-4 text-overline text-success">Correct path</p>
            <p className="mt-1 text-body-sm text-foreground/85 leading-relaxed">{p.correctPath}</p>
          </div>
        </CardPrimitive>
      ))}
    </div>
  );
}

export { MiniCasePanel };

/* ------------------------------------------------------------
   Memory — mnemonics, rapid review, recall deck
   ------------------------------------------------------------ */

export function UsMLEMnemonics({ mnemonics }: { mnemonics: Mnemonic[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {mnemonics.map((m, i) => (
        <CardPrimitive key={i} variant="flat">
          <div className="p-5">
            <p className="font-serif text-xl font-semibold text-brand">{m.code}</p>
            <p className="mt-2 text-body-sm text-foreground/85 leading-relaxed">{m.meaning}</p>
            <div className="mt-4 space-y-2 border-t border-border/60 pt-4 text-body-sm">
              <p>
                <span className="font-semibold text-foreground">Memorizes: </span>
                <span className="text-muted-foreground">{m.memorizes}</span>
              </p>
              <p>
                <span className="font-semibold text-foreground">Use it when: </span>
                <span className="text-muted-foreground">{m.whenToUse}</span>
              </p>
              <p>
                <span className="font-semibold text-foreground">Clinically: </span>
                <span className="text-muted-foreground">{m.clinical}</span>
              </p>
            </div>
          </div>
        </CardPrimitive>
      ))}
    </div>
  );
}

export function UsMLERapidReview({ note }: { note: KypUsMLENote }) {
  const { s30, m3, m10 } = note.rapidReview;
  const tabs = [
    { value: "s30", label: "30 seconds", items: s30 },
    { value: "m3", label: "3 minutes", items: m3 },
    { value: "m10", label: "10 minutes", items: m10 },
  ];
  return (
    <div>
      <Tabs defaultValue="s30">
        <TabsList>
          {tabs.map((t) => (
            <TabsTrigger key={t.value} value={t.value}>
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((t) => (
          <TabsContent key={t.value} value={t.value} className="mt-4">
            <ul className="space-y-2">
              {t.items.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 rounded-lg border border-border/60 bg-card p-3 text-body-sm text-foreground/85 leading-relaxed"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export function UsMLERecallDeck({ recall }: { recall: { q: string; a: string }[] }) {
  return (
    <Accordion
      type="single"
      items={recall.map((r, i) => ({
        id: `recall-${i}`,
        question: r.q,
        answer: <p className="text-body text-foreground/85 leading-relaxed">{r.a}</p>,
      }))}
    />
  );
}
