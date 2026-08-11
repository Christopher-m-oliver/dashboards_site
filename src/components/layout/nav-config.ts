import type { LucideIcon } from "lucide-react";
import { BarChart3, LayoutDashboard, LayoutTemplate, Settings } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

/** Primary application navigation. */
export const primaryNav: NavItem[] = [
  { title: "Overview", href: "/", icon: LayoutDashboard },
  { title: "Analytics", href: "/analytics", icon: BarChart3 },
  { title: "Templates", href: "/templates", icon: LayoutTemplate },
];

/** Secondary navigation, rendered below a separator near the bottom of the sidebar. */
export const secondaryNav: NavItem[] = [
  { title: "Settings", href: "/settings", icon: Settings },
];

//REVISAR LOGO