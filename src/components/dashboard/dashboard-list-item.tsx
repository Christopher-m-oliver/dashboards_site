import { cn } from "@/lib/utils";
import { categoryStyles } from "@/lib/category-styles";
import {
  formatNumber,
  formatRelativeTime,
} from "@/lib/format";
import {
  categories,
  type DashboardSummary,
} from "@/data/overview-mock";

export function DashboardListItem({
  dashboard,
}: {
  dashboard: DashboardSummary;
}) {
  const style = categoryStyles[dashboard.category];

  const categoryLabel =
    categories.find(
      (category) => category.key === dashboard.category
    )?.label ?? dashboard.category;

  const {
    value,
    unit,
    unitPosition = "suffix",
  } = dashboard.stat;

  const formattedValue = formatNumber(value);

  const stat =
    unitPosition === "prefix"
      ? `${unit} ${formattedValue}`
      : `${formattedValue} ${unit}`;

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border px-1 py-3 last:border-b-0">
      <div className="flex min-w-0 items-center gap-3">
        <span
          className={cn(
            "size-1.5 shrink-0",
            style.dot
          )}
        />

        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-foreground">
            {dashboard.title}
          </p>

          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            {categoryLabel}
            <span className="mx-1.5 text-border">/</span>
            {formatRelativeTime(dashboard.updatedAt)}
          </p>
        </div>
      </div>

      <span className="whitespace-nowrap font-mono text-xs tabular-nums text-muted-foreground">
        {stat}
      </span>
    </div>
  );
}