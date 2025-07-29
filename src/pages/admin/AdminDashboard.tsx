import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  Users, 
  DollarSign, 
  FolderOpen, 
  AlertTriangle,
  TrendingUp,
  UserPlus
} from "lucide-react";
import { adminService } from "@/lib/adminService";
import { DashboardStats } from "@/types/admin";

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await adminService.getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="p-6 animate-pulse">
              <div className="h-4 bg-muted rounded mb-2"></div>
              <div className="h-8 bg-muted rounded"></div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!stats) return null;

  const statCards = [
    {
      title: "Total Users",
      value: stats.totalUsers.toLocaleString(),
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Users",
      value: stats.activeUsers.toLocaleString(),
      icon: UserPlus,
      color: "text-green-600"
    },
    {
      title: "Total Projects",
      value: stats.totalProjects.toLocaleString(),
      icon: FolderOpen,
      color: "text-purple-600"
    },
    {
      title: "Completed Projects",
      value: stats.completedProjects.toLocaleString(),
      icon: TrendingUp,
      color: "text-emerald-600"
    },
    {
      title: "Total Revenue",
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: "text-yellow-600"
    },
    {
      title: "Monthly Revenue",
      value: `$${stats.monthlyRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: "text-orange-600"
    },
    {
      title: "Pending Disputes",
      value: stats.pendingDisputes.toString(),
      icon: AlertTriangle,
      color: "text-red-600"
    },
    {
      title: "New Registrations",
      value: stats.newRegistrations.toString(),
      icon: UserPlus,
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {stat.value}
                  </p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">
                New freelancer registered - Jane Developer
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">
                Project completed - React E-commerce Site
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">
                Payment processed - $1,250 to John Freelancer
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">
                Dispute opened - Mobile App Development
              </span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              <div className="font-medium text-foreground">Review Pending Users</div>
              <div className="text-sm text-muted-foreground">5 accounts awaiting approval</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              <div className="font-medium text-foreground">Process Payments</div>
              <div className="text-sm text-muted-foreground">12 payments ready to process</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              <div className="font-medium text-foreground">System Maintenance</div>
              <div className="text-sm text-muted-foreground">Schedule maintenance window</div>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;