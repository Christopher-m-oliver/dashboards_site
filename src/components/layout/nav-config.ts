import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  LayoutDashboard,
  LayoutTemplate,
  Settings,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const primaryNav: NavItem[] = [
  {
    title: "Visão geral",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Análises",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Modelos",
    href: "/templates",
    icon: LayoutTemplate,
  },
];

export const secondaryNav: NavItem[] = [
  {
    title: "Configurações",
    href: "/settings",
    icon: Settings,
  },
];