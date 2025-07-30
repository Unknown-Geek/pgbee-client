"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Public routes that don't require authentication
const PUBLIC_ROUTES = ['/login', '/signup', '/'];

// ============================================================================
// 🚨 MOCK DATA - REMOVE THIS SECTION WHEN BACKEND IS READY
// ============================================================================
const MOCK_USERS = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'student'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    role: 'student'
  },
  {
    id: '3',
    name: 'Demo User',
    email: 'demo@pgbee.com',
    password: 'demo123',
    role: 'student'
  }
];

// Mock localStorage for user session
const MOCK_USER_KEY = 'mock_pgbee_user';
// ============================================================================
// END MOCK DATA
// ============================================================================

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const checkAuth = async () => {
    try {
      // ============================================================================
      // 🚨 MOCK AUTHENTICATION CHECK - REPLACE WITH REAL API CALL
      // Original code should be:
      // const response = await axios.get('https://server.pgbee.in/auth/me', {
      //   withCredentials: true,
      // });
      // ============================================================================
      
      // Simulate checking localStorage for mock session
      const mockUser = localStorage.getItem(MOCK_USER_KEY);
      if (mockUser) {
        const parsedUser = JSON.parse(mockUser);
        setUser(parsedUser);
        console.log('🚨 MOCK: User authenticated from localStorage:', parsedUser);
      } else {
        setUser(null);
        console.log('🚨 MOCK: No user session found');
      }
      
      // ============================================================================
      // END MOCK - Replace above with real backend call
      // ============================================================================
      
      /* REAL CODE TO RESTORE:
      const response = await axios.get('https://server.pgbee.in/auth/me', {
        withCredentials: true,
      });
      
      if (response.data.success) {
        setUser(response.data.user);
      } else {
        setUser(null);
      }
      */
    } catch (error) {
      console.log('Auth check failed:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // Redirect logic
  useEffect(() => {
    if (!loading) {
      const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
      
      if (!user && !isPublicRoute) {
        // User is not authenticated and trying to access protected route
        router.push('/login');
      } else if (user && (pathname === '/login' || pathname === '/signup')) {
        // User is authenticated but on login/signup page
        router.push('/userDashboard');
      }
    }
  }, [user, loading, pathname, router]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // ============================================================================
      // 🚨 MOCK LOGIN - REPLACE WITH REAL API CALL
      // Original code should be:
      // const response = await axios.post('https://server.pgbee.in/auth/login', {
      //   email,
      //   password,
      //   role: 'student'
      // }, {
      //   withCredentials: true,
      // });
      // ============================================================================
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check mock users
      const mockUser = MOCK_USERS.find(u => u.email === email && u.password === password);
      
      if (mockUser) {
        const userWithoutPassword = {
          id: mockUser.id,
          name: mockUser.name,
          email: mockUser.email,
          role: mockUser.role
        };
        
        // Store in localStorage to simulate session
        localStorage.setItem(MOCK_USER_KEY, JSON.stringify(userWithoutPassword));
        setUser(userWithoutPassword);
        
        console.log('🚨 MOCK: Login successful for:', userWithoutPassword);
        return true;
      } else {
        console.log('🚨 MOCK: Login failed - invalid credentials');
        return false;
      }
      
      // ============================================================================
      // END MOCK - Replace above with real backend call
      // ============================================================================
      
      /* REAL CODE TO RESTORE:
      const response = await axios.post('https://server.pgbee.in/auth/login', {
        email,
        password,
        role: 'student'
      }, {
        withCredentials: true,
      });

      if (response.data.success) {
        setUser(response.data.user);
        return true;
      } else {
        return false;
      }
      */
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      // ============================================================================
      // 🚨 MOCK LOGOUT - REPLACE WITH REAL API CALL
      // Original code should be:
      // await axios.post('https://server.pgbee.in/auth/logout', {}, {
      //   withCredentials: true,
      // });
      // ============================================================================
      
      // Clear mock session
      localStorage.removeItem(MOCK_USER_KEY);
      console.log('🚨 MOCK: User logged out and session cleared');
      
      // ============================================================================
      // END MOCK - Replace above with real backend call
      // ============================================================================
      
      /* REAL CODE TO RESTORE:
      await axios.post('https://server.pgbee.in/auth/logout', {}, {
        withCredentials: true,
      });
      */
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      router.push('/login');
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
