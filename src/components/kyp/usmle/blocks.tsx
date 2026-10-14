import { cn } from "@/lib/utils";
import { Badge, Callout, CardPrimitive } from "@/components/kyp/ui";
import type { Block } from "@/lib/kyp/usmle/types";
import { UsMLEVisualFigure } from "./visuals/figure";

/**
 * USMLE 2026 content blocks, rendered with existing KYP components only.
 *
 * Every block kind maps onto a KYP presentation pattern:
 *   text    → serif h3 + prose paragraphs (drug-section convention)
 *   list    → lead-in list with semibold leads
 *   table   → the KYP comparison-table markup (semantic table, zebra rows)
 *   compare → two-column version of the same table (brand vs neural headers)
 *   steps   → numbered vertical steps with brand markers
 *   visual  → original KYP visual inside a bordered figure + notice Callout
 *   callout → the KYP Callout (why=info, clinical=success, exam=warning, memory=tip)
 */

const calloutVariant = {
  why: "info",
  clinical: "success",
  exam: "warning",
  memory: "tip",
} as const;

function TextBlockView({ block }: { block: Extract<Block, { kind: "text" }> }) {
  return (
    <div>
      <h3 className="text-h3 text-foreground">{block.title}</h3>
      <div className="mt-3 space-y-3">
        {block.body.map((p, i) => (
          <p key={i} className="max-w-3xl text-body text-foreground/80 leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function ListBlockView({ block }: { block: Extract<Block, { kind: "list" }> }) {
  return (
    <div>
      <h3 className="text-h3 text-foreground">{block.title}</h3>
      {block.intro && (
        <p className="mt-2 max-w-3xl text-body text-muted-foreground leading-relaxed">{block.intro}</p>
      )}
      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {block.items.map((item, i) => (
          <li key={i} className="rounded-lg border border-border/60 bg-card p-3.5">
            <p className="text-sm font-semibold text-foreground">{item.lead}</p>
            <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TableBlockView({ block }: { block: Extract<Block, { kind: "table" }> }) {
  return (
    <div>
      <h3 className="text-h3 text-foreground">{block.title}</h3>
      {block.intro && (
        <p className="mt-2 max-w-3xl text-body text-muted-foreground leading-relaxed">{block.intro}</p>
      )}
      <div className="mt-4 overflow-x-auto kyp-scroll rounded-xl border border-border/70">
        <table className="w-full border-collapse text-body-sm">
          <thead>
            <tr className="border-b border-border/70 bg-muted/40">
              {block.columns.map((c, i) => (
                <th
                  key={i}
                  scope="col"
                  className={cn(
                    "p-3 text-left text-overline",
                    i === 0 ? "text-muted-foreground" : "text-brand bg-brand-soft/30"
                  )}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr
                key={i}
                className={cn("border-b border-border/50 last:border-b-0", i % 2 === 1 && "bg-muted/20")}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={cn(
                      "p-3 align-top",
                      j === 0
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground leading-relaxed"
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.caption && (
        <p className="mt-2 text-caption italic text-muted-foreground">{block.caption}</p>
      )}
    </div>
  );
}

function CompareBlockView({ block }: { block: Extract<Block, { kind: "compare" }> }) {
  return (
    <div>
      <h3 className="text-h3 text-foreground">{block.title}</h3>
      {block.intro && (
        <p className="mt-2 max-w-3xl text-body text-muted-foreground leading-relaxed">{block.intro}</p>
      )}
      <div className="mt-4 overflow-x-auto kyp-scroll rounded-xl border border-border/70">
        <table className="w-full border-collapse text-body-sm">
          <thead>
            <tr className="border-b border-border/70 bg-muted/40">
              <th scope="col" className="p-3 text-left text-overline text-muted-foreground">
                Discriminator
              </th>
              <th scope="col" className="p-3 text-left text-overline text-brand bg-brand-soft/30">
                {block.columns[0]}
              </th>
              <th scope="col" className="p-3 text-left text-overline text-neural bg-neural-soft/40">
                {block.columns[1]}
              </th>
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr
                key={i}
                className={cn("border-b border-border/50 last:border-b-0", i % 2 === 1 && "bg-muted/20")}
              >
                <th scope="row" className="p-3 text-left font-semibold text-foreground">
                  {row.label}
                </th>
                <td className="p-3 align-top font-medium text-foreground bg-brand-soft/10 leading-relaxed">
                  {row.a}
                </td>
                <td className="p-3 align-top text-muted-foreground leading-relaxed">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StepsBlockView({ block }: { block: Extract<Block, { kind: "steps" }> }) {
  return (
    <div>
      <h3 className="text-h3 text-foreground">{block.title}</h3>
      {block.intro && (
        <p className="mt-2 max-w-3xl text-body text-muted-foreground leading-relaxed">{block.intro}</p>
      )}
      <ol className="mt-5 space-y-4">
        {block.steps.map((step, i) => (
          <li key={i} className="flex gap-3.5">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/15 font-serif text-sm font-semibold text-brand">
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{step.label}</p>
              <p className="mt-0.5 text-body-sm text-muted-foreground leading-relaxed">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function VisualBlockView({ block }: { block: Extract<Block, { kind: "visual" }> }) {
  return (
    <figure>
      <figcaption className="sr-only">{block.title}</figcaption>
      <h3 className="text-h3 text-foreground">{block.title}</h3>
      <div className="mt-4 overflow-x-auto kyp-scroll rounded-xl border border-border/70 bg-card p-4 sm:p-6">
        <UsMLEVisualFigure visualId={block.visualId} />
      </div>
      {block.caption && (
        <p className="mt-2.5 text-body-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground/80">What you see: </span>
          {block.caption}
        </p>
      )}
      <div className="mt-3">
        <Callout variant="info" title="What should I notice?">
          {block.notice}
        </Callout>
      </div>
    </figure>
  );
}

function CalloutBlockView({ block }: { block: Extract<Block, { kind: "callout" }> }) {
  return (
    <Callout variant={calloutVariant[block.variant]} title={block.title}>
      {block.body}
    </Callout>
  );
}

export function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "text":
      return <TextBlockView block={block} />;
    case "list":
      return <ListBlockView block={block} />;
    case "table":
      return <TableBlockView block={block} />;
    case "compare":
      return <CompareBlockView block={block} />;
    case "steps":
      return <StepsBlockView block={block} />;
    case "visual":
      return <VisualBlockView block={block} />;
    case "callout":
      return <CalloutBlockView block={block} />;
  }
}

/** A stack of blocks with KYP's vertical rhythm between them. */
export function BlockStack({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-10">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}
