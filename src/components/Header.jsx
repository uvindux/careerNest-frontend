import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();
  
  // Don't show header on dashboard pages
  if (location.pathname.startsWith('/dashboard')) {
    return null;
  }

  return (
    <header className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-careernest-primary transition-colors duration-200 font-bold"
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-careernest-primary transition-colors duration-200 font-bold"
            >
              ABOUT
            </Link>
            <Link 
              to="/service" 
              className="text-gray-700 hover:text-careernest-primary transition-colors duration-200 font-bold"
            >
              SERVICE
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-700 hover:text-careernest-primary transition-colors duration-200 font-bold"
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

