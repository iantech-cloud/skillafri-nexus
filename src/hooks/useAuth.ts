import { useState, useEffect, createContext, useContext } from 'react';
import { User, AuthState, LoginCredentials, RegisterData } from '@/types/auth';

const AuthContext = createContext<{
  auth: AuthState;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
} | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useAuthState = () => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    // Mock auth check - replace with actual token validation
    const mockUser = localStorage.getItem('mockUser');
    if (mockUser) {
      try {
        const user = JSON.parse(mockUser);
        setAuth({
          user,
          isAuthenticated: true,
          isLoading: false
        });
      } catch {
        localStorage.removeItem('mockUser');
        setAuth(prev => ({ ...prev, isLoading: false }));
      }
    } else {
      setAuth(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      // Mock login - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        firstName: credentials.email === 'admin@skillafrica.com' ? 'Super' : 'John',
        lastName: credentials.email === 'admin@skillafrica.com' ? 'Admin' : 'Doe',
        role: credentials.email === 'admin@skillafrica.com' ? 'super_admin' as any : 'client' as any,
        createdAt: new Date().toISOString(),
        isActive: true
      };

      localStorage.setItem('mockUser', JSON.stringify(mockUser));
      setAuth({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false
      });
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const register = async (data: RegisterData) => {
    try {
      // Mock registration - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: Date.now().toString(),
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.role,
        createdAt: new Date().toISOString(),
        isActive: true
      };

      localStorage.setItem('mockUser', JSON.stringify(mockUser));
      setAuth({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false
      });
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('mockUser');
    setAuth({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  };

  const updateUser = (user: User) => {
    localStorage.setItem('mockUser', JSON.stringify(user));
    setAuth(prev => ({ ...prev, user }));
  };

  return { auth, login, register, logout, updateUser };
};

export { AuthContext };