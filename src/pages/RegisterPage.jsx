import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-careernest-primary rounded-full flex items-center justify-center">
            <i className="fas fa-star text-white text-sm"></i>
          </div>
          <span className="text-xl font-bold text-gray-900">CareerNest</span>
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

          <form onSubmit={handleSubmit} className="space-y-6">
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
              />
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
              />
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
              />
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
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                className="w-full"
                size="lg"
              >
                Register
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
            >
              <i className="fab fa-google mr-3 text-red-500"></i>
              Continue with Google
            </Button>

            <div className="text-center pt-4">
              <span className="text-gray-600">Already have an account? </span>
              <Link 
                to="/login" 
                className="text-careernest-primary font-medium hover:text-careernest-secondary transition-colors"
              >
                Login <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

