import { CalendarDays } from "lucide-react";

import { MetricCard } from "@/components/dashboard/metric-card";
import { DashboardListItem } from "@/components/dashboard/dashboard-list-item";
import { WeeklyGoalItem } from "@/components/dashboard/weekly-goal-item";
import { RecordItem } from "@/components/dashboard/record-item";
import { MiniLineChart } from "@/components/charts/mini-line-chart";

import { cn } from "@/lib/utils";
import { categoryStyles } from "@/lib/category-styles";
import { formatNumber } from "@/lib/format";

import {
  activeDashboard,
  categories,
  dailyStepsGoal,
  fitnessMetrics,
  myDashboards,
  recentRecords,
  weeklyGoals,
  weeklyStepsSeries,
  weeklyStepsTotal,
} from "@/data/overview-mock";

export default function Home() {
  const categoryLabel =
    categories.find(
      (category) =>
        category.key === activeDashboard.category
    )?.label ?? activeDashboard.category;

  const categoryStyle =
    categoryStyles[activeDashboard.category];

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-7">
      <header className="border-b border-border pb-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
              Visão geral
            </p>

            <div className="flex items-center gap-2.5">
              <span
                className={cn(
                  "size-2",
                  categoryStyle.dot
                )}
              />

              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                {activeDashboard.title}
              </h1>
            </div>

            <p className="mt-1.5 text-sm text-muted-foreground">
              {categoryLabel}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <CalendarDays className="size-3.5" />

            <span>Período</span>

            <span className="font-mono font-medium text-foreground">
              {activeDashboard.period}
            </span>
          </div>
        </div>
      </header>

      <section aria-labelledby="metricas-heading">
        <h2 id="metricas-heading" className="sr-only">
          Métricas principais
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {fitnessMetrics.map((metric) => (
            <MetricCard
              key={metric.id}
              metric={metric}
            />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="steps-chart-heading"
        className="border border-border bg-card"
      >
        <div className="flex flex-col gap-2 border-b border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2
              id="steps-chart-heading"
              className="text-sm font-medium text-foreground"
            >
              Passos
            </h2>

            <p className="mt-0.5 text-xs text-muted-foreground">
              Distribuição diária no período selecionado
            </p>
          </div>

          <div className="text-left sm:text-right">
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
            className="h-64 w-full"
          />
        </div>
      </section>

      <section
  aria-labelledby="tracking-heading"
  className="overflow-hidden rounded-lg border border-border bg-card"
>
  <div className="px-4 py-3">
    <h2
      id="tracking-heading"
      className="text-sm font-medium text-foreground"
    >
      Acompanhamento semanal
    </h2>

    <p className="mt-0.5 text-xs text-muted-foreground">
      Progresso das metas e atividade recente
    </p>
  </div>

  <div className="grid grid-cols-1 gap-6 px-4 pb-4 lg:grid-cols-[1.1fr_0.9fr]">
    <div>
      <div className="mb-4 flex items-baseline justify-between">
        <h3 className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
          Metas
        </h3>

        <span className="font-mono text-[11px] text-muted-foreground">
          {weeklyGoals.length} indicadores
        </span>
      </div>

      <div className="flex flex-col gap-5">
        {weeklyGoals.map((goal) => (
          <WeeklyGoalItem
            key={goal.id}
            goal={goal}
          />
        ))}
      </div>
    </div>

    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <h3 className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
          Últimos registros
        </h3>

        <span className="font-mono text-[11px] text-muted-foreground">
          Recentes
        </span>
      </div>

      <div className="divide-y divide-border">
        {recentRecords.map((record) => (
          <RecordItem
            key={record.id}
            record={record}
          />
        ))}
      </div>
    </div>
  </div>
</section>

      <section
  aria-labelledby="dashboards-heading"
  className="overflow-hidden rounded-lg border border-border bg-card"
>
  <div className="flex items-center justify-between border-b border-border px-4 py-3">
    <div>
      <h2
        id="dashboards-heading"
        className="text-sm font-medium text-foreground"
      >
        Meus dashboards
      </h2>

      <p className="mt-0.5 text-xs text-muted-foreground">
        Acesse e acompanhe seus outros painéis
      </p>
    </div>

    <span className="font-mono text-xs tabular-nums text-muted-foreground">
      {myDashboards.length}
    </span>
  </div>

  <div className="px-4">
    {myDashboards.map((dashboard) => (
      <DashboardListItem
        key={dashboard.id}
        dashboard={dashboard}
      />
    ))}
  </div>
</section>
    </div>
  );
}