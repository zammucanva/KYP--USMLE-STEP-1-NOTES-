"use client";

import * as React from "react";
import { CheckCircle2, Circle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge, Callout, CardPrimitive } from "@/components/kyp/ui";
import type { MiniCase } from "@/lib/kyp/usmle/types";

/**
 * MiniCasePanel — one interactive USMLE vignette.
 *
 * Options reveal their "why" (right or tempting-but-wrong) on click;
 * the reasoning autopsy unlocks after any answer. Built entirely from
 * KYP primitives — CardPrimitive, Badge, Callout.
 */
export function MiniCasePanel({ miniCase }: { miniCase: MiniCase }) {
  const [picked, setPicked] = React.useState<number | null>(null);
  const [showReasoning, setShowReasoning] = React.useState(false);
  const answered = picked !== null;

  const options = miniCase.options;

  return (
    <CardPrimitive variant="elevated" className="p-0">
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="brand" size="sm">USMLE Mini-Case</Badge>
          <span className="text-caption text-muted-foreground">Answer, then read the autopsy.</span>
        </div>

        <p className="mt-4 text-body text-foreground/90 leading-relaxed">{miniCase.vignette}</p>
        <p className="mt-3 font-serif text-lg font-semibold text-foreground">{miniCase.question}</p>

        <div className="mt-5 space-y-2.5">
          {options.map((opt, i) => {
            const isPicked = picked === i;
            const isCorrect = opt.correct === true;
            const reveal = answered && (isPicked || (isCorrect && answered));
            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  if (!answered) setPicked(i);
                }}
                disabled={answered}
                className={cn(
                  "kyp-focus-ring w-full rounded-xl border p-4 text-left transition-all",
                  !answered && "hover:border-brand/40 hover:bg-accent/30 cursor-pointer",
                  !reveal && "border-border/70 bg-card",
                  reveal && isCorrect && "border-success/40 bg-success-soft/50",
                  reveal && !isCorrect && isPicked && "border-emergency/40 bg-emergency-soft/40",
                  answered && !isPicked && !isCorrect && "opacity-60"
                )}
              >
                <div className="flex items-start gap-3">
                  {answered ? (
                    <CheckCircle2
                      className={cn(
                        "mt-0.5 h-5 w-5 shrink-0",
                        isCorrect ? "text-success" : isPicked ? "text-emergency" : "text-muted-foreground/40"
                      )}
                      aria-hidden
                    />
                  ) : (
                    <Circle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground/50" aria-hidden />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground">
                      <span className="font-semibold">{opt.label}.</span> {opt.text}
                    </p>
                    {(isPicked || (isCorrect && answered)) && (
                      <p
                        className={cn(
                          "mt-2 rounded-lg p-2.5 text-body-sm leading-relaxed",
                          isCorrect
                            ? "bg-success-soft/60 text-foreground/85"
                            : "bg-emergency-soft/50 text-foreground/85"
                        )}
                      >
                        <span className={cn("font-semibold", isCorrect ? "text-success" : "text-emergency")}>
                          {isCorrect ? "Correct — " : "Tempting but wrong — "}
                        </span>
                        {opt.why}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mt-5">
            <button
              type="button"
              onClick={() => setShowReasoning((v) => !v)}
              className="kyp-focus-ring flex items-center gap-1.5 rounded text-sm font-semibold text-brand hover:text-brand-ink"
              aria-expanded={showReasoning}
            >
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", showReasoning && "rotate-180")}
                aria-hidden
              />
              {showReasoning ? "Hide" : "Show"} the full reasoning autopsy
            </button>
            {showReasoning && (
              <div className="mt-3">
                <Callout variant="tip" title="How the examiner wants you to think">
                  {miniCase.reasoning}
                </Callout>
              </div>
            )}
          </div>
        )}
      </div>
    </CardPrimitive>
  );
}
