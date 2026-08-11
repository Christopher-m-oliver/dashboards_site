import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export function AppHeader() {
    return (
        <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border bg-background px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4" />
            
            {/* Breadcrumb / current page title placeholder - populated by future pages */}
            <div className="flex-1 text-sm font-medium text-foreground" />

            {/* Placeholder for future header actions/user controls */}
            <div className="flex items-center gap-2" />
        </header>
    );
}