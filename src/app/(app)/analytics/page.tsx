import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

import { MiniLineChart } from "@/components/charts/mini-line-chart";

import {
  dailyStepsGoal,
  weeklyStepsSeries,
  weeklyStepsTotal,
} from "@/data/overview-mock";
import { formatNumber } from "@/lib/format";

const averageSteps = Math.round(
  weeklyStepsTotal / weeklyStepsSeries.length
);

const bestDay = weeklyStepsSeries.reduce((best, current) =>
  current.value > best.value ? current : best
);

const worstDay = weeklyStepsSeries.reduce((worst, current) =>
  current.value < worst.value ? current : worst
);

const daysAboveGoal = weeklyStepsSeries.filter(
  (point) => point.value >= dailyStepsGoal
).length;

const goalCompletion = Math.round(
  (weeklyStepsTotal /
    (dailyStepsGoal * weeklyStepsSeries.length)) *
    100
);

export default function AnalyticsPage() {
  return (
    <div className="mx-auto flex w-full max-w-360 flex-col gap-7">
      <header className="flex flex-col gap-4 border-b border-border pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            Análise
          </p>

          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Tendências e comparações
          </h1>

          <p className="mt-1.5 text-sm text-muted-foreground">
            Entenda o comportamento das métricas ao longo do período.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <CalendarDays className="size-3.5" />
          <span>Período</span>
          <span className="font-mono font-medium text-foreground">
            Últimos 7 dias
          </span>
        </div>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">
            Média diária
          </p>

          <p className="mt-3 font-mono text-2xl font-semibold tabular-nums text-foreground">
            {formatNumber(averageSteps)}
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            passos por dia
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">
            Melhor dia
          </p>

          <div className="mt-3 flex items-center gap-2">
            <ArrowUpRight className="size-4 text-primary" />

            <p className="font-mono text-2xl font-semibold tabular-nums text-foreground">
              {formatNumber(bestDay.value)}
            </p>
          </div>

          <p className="mt-1 text-xs text-muted-foreground">
            {bestDay.label}
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">
            Menor registro
          </p>

          <div className="mt-3 flex items-center gap-2">
            <ArrowDownRight className="size-4 text-primary" />

            <p className="font-mono text-2xl font-semibold tabular-nums text-foreground">
              {formatNumber(worstDay.value)}
            </p>
          </div>

          <p className="mt-1 text-xs text-muted-foreground">
            {worstDay.label}
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">
            Meta semanal
          </p>

          <p className="mt-3 font-mono text-2xl font-semibold tabular-nums text-foreground">
            {goalCompletion}%
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            {daysAboveGoal} de 7 dias acima da meta
          </p>
        </div>
      </section>

      <section className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border px-4 py-3">
          <h2 className="text-sm font-medium text-foreground">
            Distribuição semanal
          </h2>

          <p className="mt-0.5 text-xs text-muted-foreground">
            Passos registrados em comparação com a meta diária.
          </p>
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

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-5">
          <h2 className="text-sm font-medium text-foreground">
            Leitura do período
          </h2>

          <div className="mt-4 space-y-4 text-sm">
            <div>
              <p className="text-muted-foreground">
                Total registrado
              </p>

              <p className="mt-1 font-mono font-medium tabular-nums text-foreground">
                {formatNumber(weeklyStepsTotal)} passos
              </p>
            </div>

            <div>
              <p className="text-muted-foreground">
                Meta acumulada
              </p>

              <p className="mt-1 font-mono font-medium tabular-nums text-foreground">
                {formatNumber(
                  dailyStepsGoal * weeklyStepsSeries.length
                )}{" "}
                passos
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-5">
          <h2 className="text-sm font-medium text-foreground">
            Destaques
          </h2>

          <div className="mt-4 space-y-3 text-sm">
            <p className="text-muted-foreground">
              O maior registro ocorreu em{" "}
              <span className="font-medium text-foreground">
                {bestDay.label}
              </span>
              , com{" "}
              <span className="font-mono text-foreground">
                {formatNumber(bestDay.value)}
              </span>{" "}
              passos.
            </p>

            <p className="text-muted-foreground">
              A média diária ficou em{" "}
              <span className="font-mono text-foreground">
                {formatNumber(averageSteps)}
              </span>{" "}
              passos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}