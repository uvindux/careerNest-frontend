import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  // Don't show header on dashboard pages
  if (location.pathname.startsWith('/dashboard')) {
    return null;
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-careernest-primary rounded-full flex items-center justify-center">
                <i className="fas fa-star text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold text-gray-900">CareerNest</span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-careernest-primary transition-colors duration-200 font-medium"
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-careernest-primary transition-colors duration-200 font-medium"
            >
              ABOUT
            </Link>
            <Link 
              to="/service" 
              className="text-gray-700 hover:text-careernest-primary transition-colors duration-200 font-medium"
            >
              SERVICE
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-700 hover:text-careernest-primary transition-colors duration-200 font-medium"
            >
              FAQ
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-careernest-primary hover:text-careernest-secondary transition-colors duration-200 font-medium"
            >
              Sign In
            </Link>
            <Link 
              to="/register" 
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-careernest-primary">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

