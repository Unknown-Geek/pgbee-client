// ============================================================================
// 🚨 MOCK DATA FOR DEMO - REMOVE THIS ENTIRE FILE WHEN BACKEND IS READY
// ============================================================================

// Demo users for testing authentication
export const MOCK_USERS = [
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

// Mock localStorage key for user session
export const MOCK_USER_KEY = 'mock_pgbee_user';

// Helper function to simulate API delay
export const simulateApiDelay = (ms: number = 1000) => 
  new Promise(resolve => setTimeout(resolve, ms));
interface User{
    id:string,
    name:string,
    email:string,
    role:string
}
// Helper function to store mock user session
export const storeMockSession = (user: User) => {
  const userWithoutPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  };
  localStorage.setItem(MOCK_USER_KEY, JSON.stringify(userWithoutPassword));
  return userWithoutPassword;
};

// Helper function to get mock user session
export const getMockSession = () => {
  const mockUser = localStorage.getItem(MOCK_USER_KEY);
  return mockUser ? JSON.parse(mockUser) : null;
};

// Helper function to clear mock session
export const clearMockSession = () => {
  localStorage.removeItem(MOCK_USER_KEY);
};

// ============================================================================
// END MOCK DATA - DELETE THIS ENTIRE FILE WHEN BACKEND IS READY
// ============================================================================
