import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8">
          <p className="text-sm font-medium text-primary">
            Dashboards
          </p>

          <h1 className="mt-2 text-2xl font-semibold text-foreground">
            Entrar
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Acesse seus dashboards e métricas.
          </p>
        </div>

        <form className="space-y-4">
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
  Entrar
</Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Ainda não possui conta?{" "}
          <Link
            href="/register"
            className="font-medium text-primary hover:underline"
          >
            Criar conta
          </Link>
        </p>
      </div>
    </main>
  );
}