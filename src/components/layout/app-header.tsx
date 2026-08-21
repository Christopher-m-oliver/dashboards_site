import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 border-b border-border bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/80">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="h-4" />

      <div className="flex-1 text-sm font-medium text-foreground" />

      <div className="flex items-center gap-2" />
    </header>
  );
}