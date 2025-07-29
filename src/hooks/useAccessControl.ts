import { useAuth } from './useAuth';
import { UserRole } from '@/types/auth';

export const useAccessControl = () => {
  const { auth } = useAuth();

  const hasRole = (role: UserRole): boolean => {
    if (!auth.isAuthenticated || !auth.user) return false;
    return auth.user.role === role;
  };

  const hasAnyRole = (roles: UserRole[]): boolean => {
    if (!auth.isAuthenticated || !auth.user) return false;
    return roles.includes(auth.user.role);
  };

  const isSuperAdmin = (): boolean => {
    return hasRole(UserRole.SuperAdmin);
  };

  const isClient = (): boolean => {
    return hasRole(UserRole.Client);
  };

  const isFreelancer = (): boolean => {
    return hasRole(UserRole.Freelancer);
  };

  const isStudent = (): boolean => {
    return hasRole(UserRole.Student);
  };

  const canAccessAdminPanel = (): boolean => {
    return isSuperAdmin();
  };

  const canManageUsers = (): boolean => {
    return isSuperAdmin();
  };

  const canEditContent = (): boolean => {
    return isSuperAdmin();
  };

  const canViewFinancials = (): boolean => {
    return isSuperAdmin();
  };

  const canModifySettings = (): boolean => {
    return isSuperAdmin();
  };

  return {
    hasRole,
    hasAnyRole,
    isSuperAdmin,
    isClient,
    isFreelancer,
    isStudent,
    canAccessAdminPanel,
    canManageUsers,
    canEditContent,
    canViewFinancials,
    canModifySettings,
    currentUser: auth.user,
    isAuthenticated: auth.isAuthenticated
  };
};