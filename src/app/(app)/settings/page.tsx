import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-7">
      <header className="border-b border-border pb-5">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Conta
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Configurações
        </h1>

        <p className="mt-1.5 text-sm text-muted-foreground">
          Gerencie suas informações e preferências.
        </p>
      </header>

      <section className="rounded-lg border border-border bg-card p-5">
        <div className="mb-6">
          <h2 className="text-sm font-medium text-foreground">
            Perfil
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            Informações exibidas na sua conta.
          </p>
        </div>

        <form className="grid gap-5">
          <div className="grid gap-1.5">
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Nome
            </label>

            <Input
              id="name"
              defaultValue="Usuário"
            />
          </div>

          <div className="grid gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              E-mail
            </label>

            <Input
              id="email"
              type="email"
              defaultValue="user@example.com"
            />
          </div>

          <div>
            <Button type="button">
              Salvar alterações
            </Button>
          </div>
        </form>
      </section>

      <section className="rounded-lg border border-border bg-card p-5">
        <h2 className="text-sm font-medium text-foreground">
          Preferências
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Essas opções são apenas demonstrativas nesta etapa.
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-foreground">
              Resumo semanal
            </p>

            <p className="text-xs text-muted-foreground">
              Receber um resumo das métricas da semana.
            </p>
          </div>

          <div className="h-5 w-9 rounded-full bg-secondary p-0.5">
            <div className="size-4 rounded-full bg-primary" />
          </div>
        </div>
      </section>
    </div>
  );
}