
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define user roles
export type UserRole = 'donor' | 'ngo' | 'admin';

// Define user type
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

// Define auth context type
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
}

// Create auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Check for existing user session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('trackbite-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);
  
  // Mock login function (in real app, this would call an API)
  const login = async (email: string, password: string, role: UserRole) => {
    // In a real app, you would validate credentials with your backend
    // This is just a mock implementation for demonstration
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create a mock user based on the provided role
    const newUser = {
      id: `user-${Date.now()}`,
      name: email.split('@')[0],
      email,
      role
    };
    
    // Save to localStorage (in a real app, you'd use secure HTTP-only cookies)
    localStorage.setItem('trackbite-user', JSON.stringify(newUser));
    
    // Update state
    setUser(newUser);
    setIsAuthenticated(true);
  };
  
  // Logout function
  const logout = () => {
    localStorage.removeItem('trackbite-user');
    setUser(null);
    setIsAuthenticated(false);
  };
  
  // Provide auth context to children
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
