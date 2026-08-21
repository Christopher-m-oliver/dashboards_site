import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { DashboardDataPanel } from "@/components/dashboard/dashboard-data-panel";

const entries = [
  {
    date: "21/08/2026",
    metric: "Passos",
    value: "7.940",
    source: "Manual",
  },
  {
    date: "21/08/2026",
    metric: "Calorias",
    value: "2.140 kcal",
    source: "Manual",
  },
  {
    date: "20/08/2026",
    metric: "Peso",
    value: "76,8 kg",
    source: "Manual",
  },
  {
    date: "20/08/2026",
    metric: "Treino",
    value: "Corrida — 5,2 km",
    source: "Manual",
  },
];

export default async function DashboardDataPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-7">
      <header className="border-b border-border pb-5">
        <Link
          href={`/dashboards/${id}`}
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Voltar ao dashboard
        </Link>

        <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Dados
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Gerenciar dados
        </h1>

        <p className="mt-1.5 text-sm text-muted-foreground">
          Visualize e simule a inserção de registros do dashboard.
        </p>
      </header>

      <DashboardDataPanel initialEntries={entries} />
    </div>
  );
}