import Link from "next/link";
import {
  BookOpen,
  Dumbbell,
  Landmark,
  ListChecks,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const templates = [
  {
    id: "fitness",
    title: "Acompanhamento fitness",
    description:
      "Passos, peso, calorias, treinos e metas semanais.",
    category: "Fitness",
    icon: Dumbbell,
  },
  {
    id: "finance",
    title: "Orçamento mensal",
    description:
      "Receitas, despesas, saldo e evolução financeira.",
    category: "Finanças",
    icon: Landmark,
  },
  {
    id: "productivity",
    title: "Metas semanais",
    description:
      "Tarefas, objetivos e acompanhamento de produtividade.",
    category: "Produtividade",
    icon: ListChecks,
  },
  {
    id: "study",
    title: "Rotina de estudos",
    description:
      "Horas estudadas, matérias e progresso semanal.",
    category: "Estudos",
    icon: BookOpen,
  },
];

export default function TemplatesPage() {
  return (
    <div className="mx-auto flex w-full max-w-360 flex-col gap-7">
      <header className="border-b border-border pb-5">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Biblioteca
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Modelos
        </h1>

        <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">
          Comece com uma estrutura pronta e personalize os indicadores
          conforme suas necessidades.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {templates.map((template) => {
          const Icon = template.icon;

          return (
            <article
              key={template.id}
              className="flex flex-col justify-between gap-6 rounded-lg border border-border bg-card p-5"
            >
              <div>
                <div className="mb-5 flex size-9 items-center justify-center rounded-md bg-secondary">
                  <Icon className="size-4 text-primary" />
                </div>

                <p className="text-xs text-muted-foreground">
                  {template.category}
                </p>

                <h2 className="mt-1 text-base font-medium text-foreground">
                  {template.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {template.description}
                </p>
              </div>

              <Button
                nativeButton={false}
                variant="outline"
                className="w-fit"
                render={<Link href="/dashboards/1" />}
              >
                Usar modelo
              </Button>
            </article>
          );
        })}
      </div>
    </div>
  );
}