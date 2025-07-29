import { User, UserRole } from '@/types/auth';
import { 
  PlatformSettings, 
  AuditLog, 
  Transaction, 
  UserManagementFilter, 
  DashboardStats 
} from '@/types/admin';

// Mock data - replace with actual API calls
const mockUsers: User[] = [
  {
    id: '1',
    email: 'john.client@example.com',
    firstName: 'John',
    lastName: 'Client',
    role: UserRole.Client,
    createdAt: '2024-01-15T10:00:00Z',
    isActive: true
  },
  {
    id: '2',
    email: 'jane.freelancer@example.com',
    firstName: 'Jane',
    lastName: 'Freelancer',
    role: UserRole.Freelancer,
    createdAt: '2024-01-20T14:30:00Z',
    isActive: true
  },
  {
    id: '3',
    email: 'bob.student@example.com',
    firstName: 'Bob',
    lastName: 'Student',
    role: UserRole.Student,
    createdAt: '2024-02-01T09:15:00Z',
    isActive: false
  }
];

const mockStats: DashboardStats = {
  totalUsers: 1250,
  activeUsers: 1180,
  totalProjects: 450,
  completedProjects: 380,
  totalRevenue: 125000,
  monthlyRevenue: 15000,
  pendingDisputes: 3,
  newRegistrations: 25
};

const mockSettings: PlatformSettings = {
  id: '1',
  commissionRate: 25,
  minProjectAmount: 50,
  maxProjectAmount: 50000,
  supportEmail: 'support@skillafrica.com',
  maintenanceMode: false,
  registrationEnabled: true,
  featuredFreelancerSlots: 10,
  updatedAt: '2024-01-15T10:00:00Z',
  updatedBy: 'admin@skillafrica.com'
};

export const adminService = {
  // Dashboard
  async getDashboardStats(): Promise<DashboardStats> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockStats;
  },

  // User Management
  async getUsers(filter?: UserManagementFilter): Promise<User[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    let filteredUsers = [...mockUsers];

    if (filter?.role) {
      filteredUsers = filteredUsers.filter(user => user.role === filter.role);
    }
    if (filter?.isActive !== undefined) {
      filteredUsers = filteredUsers.filter(user => user.isActive === filter.isActive);
    }
    if (filter?.searchTerm) {
      const term = filter.searchTerm.toLowerCase();
      filteredUsers = filteredUsers.filter(user => 
        user.email.toLowerCase().includes(term) ||
        user.firstName.toLowerCase().includes(term) ||
        user.lastName.toLowerCase().includes(term)
      );
    }

    return filteredUsers;
  },

  async createUser(userData: Partial<User>): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email!,
      firstName: userData.firstName!,
      lastName: userData.lastName!,
      role: userData.role!,
      createdAt: new Date().toISOString(),
      isActive: true,
      ...userData
    };
    mockUsers.push(newUser);
    return newUser;
  },

  async updateUser(userId: string, userData: Partial<User>): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const userIndex = mockUsers.findIndex(user => user.id === userId);
    if (userIndex === -1) throw new Error('User not found');
    
    mockUsers[userIndex] = { ...mockUsers[userIndex], ...userData };
    return mockUsers[userIndex];
  },

  async deleteUser(userId: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const userIndex = mockUsers.findIndex(user => user.id === userId);
    if (userIndex === -1) throw new Error('User not found');
    
    mockUsers.splice(userIndex, 1);
  },

  // Platform Settings
  async getPlatformSettings(): Promise<PlatformSettings> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockSettings;
  },

  async updatePlatformSettings(settings: Partial<PlatformSettings>): Promise<PlatformSettings> {
    await new Promise(resolve => setTimeout(resolve, 500));
    Object.assign(mockSettings, settings, {
      updatedAt: new Date().toISOString(),
      updatedBy: 'current-admin@skillafrica.com'
    });
    return mockSettings;
  },

  // Audit Logs
  async getAuditLogs(limit = 50): Promise<AuditLog[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        id: '1',
        userId: '1',
        userEmail: 'admin@skillafrica.com',
        action: 'USER_CREATED',
        resource: 'users',
        resourceId: '123',
        details: 'Created new freelancer account',
        ipAddress: '192.168.1.1',
        createdAt: '2024-01-15T10:00:00Z'
      },
      {
        id: '2',
        userId: '1',
        userEmail: 'admin@skillafrica.com',
        action: 'SETTINGS_UPDATED',
        resource: 'platform_settings',
        details: 'Updated commission rate to 25%',
        ipAddress: '192.168.1.1',
        createdAt: '2024-01-15T09:30:00Z'
      }
    ];
  },

  // Financial Oversight
  async getTransactions(limit = 50): Promise<Transaction[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      {
        id: '1',
        clientId: '1',
        freelancerId: '2',
        projectId: 'proj-1',
        amount: 1000,
        commission: 250,
        status: 'completed',
        paymentMethod: 'stripe',
        createdAt: '2024-01-15T10:00:00Z',
        completedAt: '2024-01-20T15:30:00Z'
      },
      {
        id: '2',
        clientId: '3',
        freelancerId: '2',
        projectId: 'proj-2',
        amount: 500,
        commission: 125,
        status: 'pending',
        paymentMethod: 'mpesa',
        createdAt: '2024-01-25T11:00:00Z'
      }
    ];
  }
};