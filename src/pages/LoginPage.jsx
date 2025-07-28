import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

// Button Component
const Button = ({ children, variant = 'primary', size = 'md', className = '', type = 'button', ...props }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500';
      case 'google':
        return 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500';
      default:
        return 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'lg':
        return 'px-6 py-3 text-lg';
      case 'md':
        return 'px-4 py-2 text-base';
      default:
        return 'px-3 py-1.5 text-sm';
    }
  };

  return (
    <button
      type={type}
      className={`
        rounded-md font-medium transition-colors duration-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center
        ${getVariantClasses()} 
        ${getSizeClasses()} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

// Input Component
const Input = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  icon, 
  required = false, 
  className = '',
  ...props 
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className={`${icon} text-gray-400`}></i>
          </div>
        )}
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`
            block w-full rounded-md border-gray-300 shadow-sm
            focus:border-purple-500 focus:ring-purple-500
            ${icon ? 'pl-10' : 'pl-3'} pr-3 py-2
            placeholder-gray-400 text-gray-900
            border transition-colors duration-200
            ${className}
          `}
          {...props}
        />
      </div>
    </div>
  );
};

// Main Login Page Component
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
    alert('Login attempt logged to console');
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Google login attempt');
    alert('Google login clicked');
  };

  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
      />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="absolute top-8 left-8">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* Login Form */}
        <div className="max-w-md w-full space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Already have an account?
              </h2>
              <p className="text-gray-600">
                Login to get started
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  icon="fas fa-envelope"
                  required
                />
              </div>

              <div>
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  icon="fas fa-lock"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  size="lg"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              <Button
                type="button"
                variant="google"
                className="w-full"
                size="lg"
                onClick={handleGoogleLogin}
              >
                <i className="fab fa-google mr-3 text-red-500"></i>
                Continue with Google
              </Button>

              <div className="text-center pt-4">
                <span className="text-gray-600">Don't have an account? </span>
                <a 
                  href="#register" 
                  className="text-purple-600 font-medium hover:text-purple-500 transition-colors"
                >
                  Register <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;