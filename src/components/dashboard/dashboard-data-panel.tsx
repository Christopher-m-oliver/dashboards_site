"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Entry {
  date: string;
  metric: string;
  value: string;
  source: string;
}

interface DashboardDataPanelProps {
  initialEntries: Entry[];
}

function isValidDate(value: string) {
  const match = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

  if (!match) {
    return false;
  }

  const [, day, month, year] = match;

  const parsedDay = Number(day);
  const parsedMonth = Number(month);
  const parsedYear = Number(year);

  const date = new Date(parsedYear, parsedMonth - 1, parsedDay);

  return (
    date.getFullYear() === parsedYear &&
    date.getMonth() === parsedMonth - 1 &&
    date.getDate() === parsedDay
  );
}

export function DashboardDataPanel({
  initialEntries,
}: DashboardDataPanelProps) {
  const [entries, setEntries] = useState(initialEntries);
  const [isAdding, setIsAdding] = useState(false);

  const [metric, setMetric] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  const canSubmit =
    metric.trim().length > 0 &&
    value.trim().length > 0 &&
    isValidDate(date);

  function handleDateChange(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 8);

    let formatted = digits;

    if (digits.length > 2) {
      formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }

    if (digits.length > 4) {
      formatted = `${digits.slice(0, 2)}/${digits.slice(
        2,
        4
      )}/${digits.slice(4)}`;
    }

    setDate(formatted);
  }

  function handleAddEntry() {
    if (!canSubmit) {
      return;
    }

    setEntries((current) => [
      {
        metric: metric.trim(),
        value: value.trim(),
        date,
        source: "Manual",
      },
      ...current,
    ]);

    setMetric("");
    setValue("");
    setDate("");
    setIsAdding(false);
  }

  function handleCancel() {
    setMetric("");
    setValue("");
    setDate("");
    setIsAdding(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button
          className="w-full sm:w-auto"
          onClick={() => {
            if (isAdding) {
              handleCancel();
            } else {
              setIsAdding(true);
            }
          }}
        >
          {isAdding ? (
            <>
              <X className="size-4" />
              Cancelar
            </>
          ) : (
            <>
              <Plus className="size-4" />
              Novo registro
            </>
          )}
        </Button>
      </div>

      {isAdding ? (
        <section className="rounded-lg border border-border bg-card p-4">
          <div className="mb-5">
            <h2 className="text-sm font-medium text-foreground">
              Adicionar registro
            </h2>

            <p className="mt-1 text-xs text-muted-foreground">
              Insira manualmente uma nova medição no dashboard.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="grid content-start gap-1.5">
              <label
                htmlFor="metric"
                className="text-xs font-medium text-foreground"
              >
                Métrica
              </label>

              <Input
                id="metric"
                value={metric}
                onChange={(event) => setMetric(event.target.value)}
                placeholder="Ex.: Passos"
              />

              <p className="text-[11px] leading-relaxed text-muted-foreground">
                Nome do dado acompanhado, como Passos, Peso ou
                Calorias.
              </p>
            </div>

            <div className="grid content-start gap-1.5">
              <label
                htmlFor="value"
                className="text-xs font-medium text-foreground"
              >
                Valor
              </label>

              <Input
                id="value"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Ex.: 8.240 ou 76,8 kg"
              />

              <p className="text-[11px] leading-relaxed text-muted-foreground">
                Informe o valor e inclua a unidade quando necessário.
              </p>
            </div>

            <div className="grid content-start gap-1.5">
              <label
                htmlFor="date"
                className="text-xs font-medium text-foreground"
              >
                Data
              </label>

              <Input
                id="date"
                value={date}
                onChange={(event) =>
                  handleDateChange(event.target.value)
                }
                placeholder="dd/mm/aaaa"
                inputMode="numeric"
                maxLength={10}
                aria-describedby="date-help"
              />

              <p
                id="date-help"
                className="text-[11px] leading-relaxed text-muted-foreground"
              >
                Use o formato dia/mês/ano, por exemplo 21/08/2026.
              </p>
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <Button
              type="button"
              onClick={handleAddEntry}
              disabled={!canSubmit}
            >
              <Plus className="size-4" />
              Adicionar registro
            </Button>
          </div>
        </section>
      ) : null}

      <section className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border px-4 py-3">
          <h2 className="text-sm font-medium text-foreground">
            Registros recentes
          </h2>

          <p className="mt-0.5 text-xs text-muted-foreground">
            Dados simulados para demonstração do fluxo.
          </p>
        </div>

        <div className="divide-y divide-border sm:hidden">
          {entries.map((entry, index) => (
            <div
              key={`${entry.date}-${entry.metric}-${index}`}
              className="grid gap-3 px-4 py-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Métrica
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-foreground">
                    {entry.metric}
                  </p>
                </div>

                <p className="text-right font-mono text-sm tabular-nums text-foreground">
                  {entry.value}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
                <span>{entry.date}</span>
                <span>{entry.source}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden overflow-x-auto sm:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/60 text-xs text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">
                  Data
                </th>

                <th className="px-4 py-3 font-medium">
                  Métrica
                </th>

                <th className="px-4 py-3 font-medium">
                  Valor
                </th>

                <th className="px-4 py-3 font-medium">
                  Origem
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              {entries.map((entry, index) => (
                <tr key={`${entry.date}-${entry.metric}-${index}`}>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {entry.date}
                  </td>

                  <td className="px-4 py-3 text-foreground">
                    {entry.metric}
                  </td>

                  <td className="px-4 py-3 font-mono tabular-nums text-foreground">
                    {entry.value}
                  </td>

                  <td className="px-4 py-3 text-muted-foreground">
                    {entry.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}