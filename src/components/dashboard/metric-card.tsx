import { Minus, TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  formatComparisonValue,
  formatNumber,
} from "@/lib/format";
import type { MetricReading } from "@/data/overview-mock";

const toneClass = {
  positive: "text-primary",
  negative: "text-destructive",
  neutral: "text-primary",
} as const;

const directionIcon = {
  up: TrendingUp,
  down: TrendingDown,
  flat: Minus,
} as const;

export function MetricCard({
  metric,
}: {
  metric: MetricReading;
}) {
  const Icon = directionIcon[metric.comparison.direction];
  const tone = toneClass[metric.comparison.tone];
  const decimals = metric.decimals ?? 0;

  return (
    <section className="flex min-h-32 flex-col overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-1 flex-col justify-between gap-4 px-4 py-3.5">
        <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
          {metric.label}
        </span>

        <div className="flex items-baseline gap-2">
          <span className="font-mono text-3xl font-semibold leading-none tabular-nums text-foreground">
            {formatNumber(metric.value, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })}
          </span>

          {metric.unit ? (
            <span className="font-mono text-xs text-muted-foreground">
              {metric.unit}
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex min-h-9 items-center gap-1.5 border-t border-border px-4 text-xs">
        <Icon className={cn("size-3.5 shrink-0", tone)} />

        <span className={cn("font-mono font-medium tabular-nums", tone)}>
          {formatComparisonValue(
            metric.comparison.value,
            metric.comparison.direction,
            metric.comparison.unit
          )}
        </span>

        <span className="truncate text-muted-foreground">
          {metric.comparison.comparisonLabel}
        </span>
      </div>
    </section>
  );
}