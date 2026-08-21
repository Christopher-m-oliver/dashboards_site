import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-2xl">
        <p className="text-sm font-medium text-primary">
          Dashboards
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Suas métricas em um só lugar.
        </h1>

        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
          Crie dashboards personalizados para acompanhar dados de fitness,
          finanças, produtividade, estudos e outras áreas importantes para você.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button
  nativeButton={false}
  render={<Link href="/login" />}
>
  Entrar
</Button>

<Button
  nativeButton={false}
  variant="outline"
  render={<Link href="/register" />}
>
  Criar conta
</Button>
        </div>
      </div>
    </main>
  );
}