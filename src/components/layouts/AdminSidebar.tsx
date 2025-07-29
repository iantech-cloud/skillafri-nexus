import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  DollarSign, 
  Settings, 
  Activity,
  BarChart3,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "User Management",
    href: "/admin/users",
    icon: Users
  },
  {
    title: "Content Management",
    href: "/admin/content",
    icon: FileText
  },
  {
    title: "Financial Oversight",
    href: "/admin/financial",
    icon: DollarSign
  },
  {
    title: "Platform Settings",
    href: "/admin/settings",
    icon: Settings
  },
  {
    title: "System Logs",
    href: "/admin/logs",
    icon: Activity
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3
  }
];

export const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-card border-r border-border">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-semibold text-foreground">Admin Panel</span>
        </div>
        
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};