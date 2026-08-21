import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function EditDashboardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-7">
      <header className="border-b border-border pb-5">
        <Link
          href={`/dashboards/${id}`}
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Voltar ao dashboard
        </Link>

        <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Configuração
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Editar dashboard
        </h1>

        <p className="mt-1.5 text-sm text-muted-foreground">
          Altere as informações e a organização do painel.
        </p>
      </header>

      <section className="rounded-lg border border-border bg-card p-5">
        <div className="mb-6">
          <h2 className="text-sm font-medium text-foreground">
            Informações gerais
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            Alterações são apenas simuladas nesta etapa.
          </p>
        </div>

        <form className="grid gap-5">
          <div className="grid gap-1.5">
            <label
              htmlFor="title"
              className="text-sm font-medium text-foreground"
            >
              Nome do dashboard
            </label>

            <Input
              id="title"
              defaultValue="Acompanhamento semanal"
            />
          </div>

          <div className="grid gap-1.5">
            <label
              htmlFor="category"
              className="text-sm font-medium text-foreground"
            >
              Categoria
            </label>

            <Input
              id="category"
              defaultValue="Fitness"
            />
          </div>

          <div className="grid gap-1.5">
            <label
              htmlFor="description"
              className="text-sm font-medium text-foreground"
            >
              Descrição
            </label>

            <textarea
              id="description"
              defaultValue="Acompanhamento de métricas e metas semanais."
              rows={4}
              className="min-h-24 w-full resize-y rounded-md border border-input bg-transparent px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="button">
              <Save className="size-4" />
              Salvar alterações
            </Button>

            <Button
              nativeButton={false}
              variant="outline"
              render={<Link href={`/dashboards/${id}`} />}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </section>

      <section className="rounded-lg border border-border bg-card p-5">
        <h2 className="text-sm font-medium text-foreground">
          Widgets
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Organização visual simulada do dashboard.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Passos",
            "Calorias",
            "Peso",
            "Treinos concluídos",
          ].map((widget, index) => (
            <div
              key={widget}
              className="flex items-center justify-between rounded-md bg-secondary px-3 py-3"
            >
              <div>
                <p className="text-sm font-medium text-foreground">
                  {widget}
                </p>

                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                  posição {index + 1}
                </p>
              </div>

              <span className="text-xs text-muted-foreground">
                Métrica
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}