
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            {/* <img src="/logo-placeholder.svg" alt="AAhar Logo" className="h-8 w-8" /> */}
            <span className="font-display font-bold text-xl">AAHAR</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/donate" className="text-sm font-medium hover:text-primary transition-colors">
            {user?.role === 'ngo' ? 'Find Donations' : 'Donate Food'}
          </Link>
          <Link to="/impact" className="text-sm font-medium hover:text-primary transition-colors">
            Impact
          </Link>
          {user?.role === 'admin' && (
            <Link to="/admin" className="text-sm font-medium hover:text-primary transition-colors">
              Admin Panel
            </Link>
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <div className="mr-2 text-sm">
                <span className="text-muted-foreground">Logged in as </span>
                <span className="font-medium capitalize">{user?.role}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" onClick={() => navigate('/login')}>
                Log In
              </Button>
              <Button size="sm" onClick={() => navigate('/login')}>
                Sign Up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-b animate-fade-in">
          <nav className="container flex flex-col py-4 gap-2">
            <Link 
              to="/" 
              className="px-4 py-2 hover:bg-primary/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className="px-4 py-2 hover:bg-primary/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/donate" 
              className="px-4 py-2 hover:bg-primary/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {user?.role === 'ngo' ? 'Find Donations' : 'Donate Food'}
            </Link>
            <Link 
              to="/impact" 
              className="px-4 py-2 hover:bg-primary/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact
            </Link>
            {user?.role === 'admin' && (
              <Link 
                to="/admin" 
                className="px-4 py-2 hover:bg-primary/10 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Panel
              </Link>
            )}
            
            <div className="flex gap-2 mt-2 px-4">
              {isAuthenticated ? (
                <>
                  <div className="flex flex-col mr-2 text-sm py-2">
                    <span className="text-muted-foreground">Logged in as </span>
                    <span className="font-medium capitalize">{user?.role}</span>
                  </div>
                  <Button variant="outline" size="sm" className="flex-1" onClick={handleLogout}>
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => {
                      navigate('/login');
                      setIsMenuOpen(false);
                    }}
                  >
                    Log In
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => {
                      navigate('/login');
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
