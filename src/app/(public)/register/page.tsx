import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8">
          <p className="text-sm font-medium text-primary">
            Dashboards
          </p>

          <h1 className="mt-2 text-2xl font-semibold text-foreground">
            Criar conta
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Comece a organizar suas métricas em dashboards personalizados.
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Nome
            </label>

            <Input
              id="name"
              placeholder="Seu nome"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              E-mail
            </label>

            <Input
              id="email"
              type="email"
              placeholder="nome@exemplo.com"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-foreground"
            >
              Senha
            </label>

            <Input
              id="password"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <Button
  nativeButton={false}
  className="w-full"
  render={<Link href="/dashboard" />}
>
  Criar conta
</Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Já possui uma conta?{" "}
          <Link
            href="/login"
            className="font-medium text-primary hover:underline"
          >
            Entrar
          </Link>
        </p>
      </div>
    </main>
  );
}