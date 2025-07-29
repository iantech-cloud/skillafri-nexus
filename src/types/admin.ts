import { User, UserRole } from './auth';

export interface PlatformSettings {
  id: string;
  commissionRate: number;
  minProjectAmount: number;
  maxProjectAmount: number;
  supportEmail: string;
  maintenanceMode: boolean;
  registrationEnabled: boolean;
  featuredFreelancerSlots: number;
  updatedAt: string;
  updatedBy: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  userEmail: string;
  action: string;
  resource: string;
  resourceId?: string;
  details: string;
  ipAddress: string;
  createdAt: string;
}

export interface Transaction {
  id: string;
  clientId: string;
  freelancerId: string;
  projectId: string;
  amount: number;
  commission: number;
  status: 'pending' | 'completed' | 'refunded' | 'disputed';
  paymentMethod: string;
  createdAt: string;
  completedAt?: string;
}

export interface UserManagementFilter {
  role?: UserRole;
  isActive?: boolean;
  searchTerm?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalProjects: number;
  completedProjects: number;
  totalRevenue: number;
  monthlyRevenue: number;
  pendingDisputes: number;
  newRegistrations: number;
}