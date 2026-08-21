"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronsUpDown, Gauge, LogOut, User } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { primaryNav, secondaryNav } from "@/components/layout/nav-config";

export function AppSidebar() {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  const closeMobileSidebar = () => {
    if (isMobile) {
      setOpenMobile(false);
  }
};

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              render={
                <Link 
                  href="/dashboard"
                  onClick={closeMobileSidebar}
                >
                  <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Gauge className="size-4" />
                  </div>

                  <div className="grid flex-1 text-left leading-tight">
                    <span className="truncate text-sm font-semibold">
                      Dashboards
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      Instrument panel
                    </span>
                  </div>
                </Link>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {primaryNav.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={item.title}
                      render={
                        <Link
                          href={item.href}
                          onClick={closeMobileSidebar}
                        />
                      }                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator />

        <SidebarMenu>
          {secondaryNav.map((item) => {
            const isActive = pathname === item.href;

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  isActive={isActive}
                  tooltip={item.title}
                  render={
                    <Link
                      href={item.href}
                      onClick={closeMobileSidebar}
                    />
                  }
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}

          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<SidebarMenuButton size="lg" />}
              >
                <Avatar className="size-6 rounded-md">
                  <AvatarFallback className="rounded-md">
                    U
                  </AvatarFallback>
                </Avatar>

                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate text-sm font-medium">
                    User
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    user@example.com
                  </span>
                </div>

                <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="top"
                align="start"
                className="w-56"
              >
                <DropdownMenuItem>
                  <User className="size-4" />
                  Account
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <LogOut className="size-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}