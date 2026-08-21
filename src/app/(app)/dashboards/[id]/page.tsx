import Link from "next/link";
import {
  Database,
  Pencil,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/dashboard/metric-card";
import { MiniLineChart } from "@/components/charts/mini-line-chart";

import {
  activeDashboard,
  dailyStepsGoal,
  fitnessMetrics,
  weeklyStepsSeries,
  weeklyStepsTotal,
} from "@/data/overview-mock";
import { formatNumber } from "@/lib/format";

export default async function DashboardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="mx-auto flex w-full max-w-360 flex-col gap-7">
      <header className="flex flex-col gap-5 border-b border-border pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            Dashboard #{id}
          </p>

          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {activeDashboard.title}
          </h1>

          <p className="mt-1.5 text-sm text-muted-foreground">
            Fitness · {activeDashboard.period}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button className="w-full sm:w-auto"
            nativeButton={false}
            variant="outline"
            render={
              <Link href={`/dashboards/${id}/data`} />
            }
          >
            <Database className="size-4" />
            Dados
          </Button>

          <Button className="w-full sm:w-auto"
            nativeButton={false}
            render={
              <Link href={`/dashboards/${id}/edit`} />
            }
          >
            <Pencil className="size-4" />
            Editar
          </Button>
        </div>
      </header>

      <section>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {fitnessMetrics.map((metric) => (
            <MetricCard
              key={metric.id}
              metric={metric}
            />
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-medium text-foreground">
              Passos
            </h2>

            <p className="mt-0.5 text-xs text-muted-foreground">
              Evolução no período selecionado
            </p>
          </div>

          <div className="sm:text-right">
            <p className="font-mono text-lg font-medium tabular-nums text-foreground">
              {formatNumber(weeklyStepsTotal)}
            </p>

            <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
              total no período
            </p>
          </div>
        </div>

        <div className="px-4 pb-3 pt-5">
          <MiniLineChart
            data={weeklyStepsSeries}
            goal={dailyStepsGoal}
            goalLabel="Meta diária"
            className="h-48 w-full sm:h-56 lg:h-64"
          />
        </div>
      </section>
    </div>
  );
}