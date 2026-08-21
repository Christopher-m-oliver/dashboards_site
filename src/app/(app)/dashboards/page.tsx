import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { categoryStyles } from "@/lib/category-styles";
import {
  categories,
  myDashboards,
} from "@/data/overview-mock";
import {
  formatNumber,
  formatRelativeTime,
} from "@/lib/format";

export default function DashboardsPage() {
  return (
    <div className="mx-auto flex w-full max-w-360 flex-col gap-7">
      <header className="flex flex-col gap-5 border-b border-border pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            Workspace
          </p>

          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Meus dashboards
          </h1>

          <p className="mt-1.5 text-sm text-muted-foreground">
            Acesse e organize seus painéis de acompanhamento.
          </p>
        </div>

        <Button
          nativeButton={false}
          className="w-full sm:w-auto"
          render={<Link href="/templates" />}
        >
          <Plus className="size-4" />
          Novo dashboard
        </Button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {myDashboards.map((dashboard) => {
          const category =
            categories.find(
              (item) => item.key === dashboard.category
            )?.label ?? dashboard.category;

          const categoryStyle =
            categoryStyles[dashboard.category];

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
            <Link
              key={dashboard.id}
              href={`/dashboards/${dashboard.id}`}
              className="group flex min-h-44 flex-col justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:bg-secondary/40"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "size-2 rounded-full",
                        categoryStyle.dot
                      )}
                    />

                    <span className="text-xs text-muted-foreground">
                      {category}
                    </span>
                  </div>

                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </div>

                <h2 className="text-base font-medium text-foreground">
                  {dashboard.title}
                </h2>
              </div>

              <div>
                <p className="font-mono text-xl font-medium tabular-nums text-foreground">
                  {stat}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Atualizado{" "}
                  {formatRelativeTime(dashboard.updatedAt)}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}