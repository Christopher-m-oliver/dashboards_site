import { formatNumber } from "@/lib/format";
import type { WeeklyGoal } from "@/data/overview-mock";

export function WeeklyGoalItem({
  goal,
}: {
  goal: WeeklyGoal;
}) {
  const percent = Math.min(
    100,
    Math.round((goal.current / goal.target) * 100)
  );

  const suffix = goal.unit ? ` ${goal.unit}` : "";

  return (
    <div className="grid gap-2">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-foreground">
            {goal.label}
          </p>

          <p className="mt-0.5 font-mono text-[11px] tabular-nums text-muted-foreground">
            {percent}% da meta
          </p>
        </div>

        <span className="text-right font-mono text-xs tabular-nums text-muted-foreground">
          {formatNumber(goal.current)}
          {suffix}
          <span className="mx-1 text-border">/</span>
          {formatNumber(goal.target)}
          {suffix}
        </span>
      </div>

      <div className="h-1 w-full bg-secondary">
        <div
          className="h-full bg-category-fitness"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}