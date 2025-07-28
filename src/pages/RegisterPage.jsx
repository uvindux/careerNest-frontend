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

// Main Register Page Component
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle registration logic here
    console.log('Registration attempt:', formData);
    alert('Registration successful! Check console for details.');
    
    // Reset form
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
  };

  const handleGoogleRegister = () => {
    // Handle Google registration logic here
    console.log('Google registration attempt');
    alert('Google registration clicked');
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

        {/* Register Form */}
        <div className="max-w-md w-full space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Create an account
              </h2>
              <p className="text-gray-600">
                Sign up to get started
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <Input
                  label="Username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  icon="fas fa-user"
                  required
                  className={errors.username ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'focus:border-purple-500 focus:ring-purple-500'}
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-600">{errors.username}</p>
                )}
              </div>

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
                  className={errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'focus:border-purple-500 focus:ring-purple-500'}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  icon="fas fa-lock"
                  required
                  className={errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'focus:border-purple-500 focus:ring-purple-500'}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
                <div className="mt-1 text-xs text-gray-500">
                  Password must be at least 6 characters long
                </div>
              </div>

              <div>
                <Input
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  icon="fas fa-lock"
                  required
                  className={errors.confirmPassword ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'focus:border-purple-500 focus:ring-purple-500'}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the{' '}
                  <a href="#" className="text-purple-600 hover:text-purple-500">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-purple-600 hover:text-purple-500">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  size="lg"
                  onClick={handleSubmit}
                >
                  Create Account
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
                onClick={handleGoogleRegister}
              >
                <i className="fab fa-google mr-3 text-red-500"></i>
                Continue with Google
              </Button>

              <div className="text-center pt-4">
                <span className="text-gray-600">Already have an account? </span>
                <a 
                  href="#login" 
                  className="text-purple-600 font-medium hover:text-purple-500 transition-colors"
                >
                  Login <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;