import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const location = useLocation();

  const sidebarItems = [
    { path: '/dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard' },
    { path: '/dashboard/cv-generator', icon: 'fas fa-file-alt', label: 'CV generator' },
    { path: '/dashboard/profile', icon: 'fas fa-user', label: 'profile' },
    // { path: '/dashboard/roadmap', icon: 'fas fa-route', label: 'Roadmap' },
    { path: '/dashboard/mentoring', icon: 'fas fa-users', label: 'Mentoring' },
    { path: '/dashboard/job-posting', icon: 'fas fa-plus', label: 'Job Posting' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <div className="bg-careernest-primary h-14 flex items-center justify-end px-6">
        <div className="flex items-center space-x-4 text-white">
          <Link to="/" className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
          <button className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
            <i className="fas fa-sign-out-alt"></i>
            <span>LogOut</span>
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-lg min-h-screen">
          {/* Profile Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mb-4 overflow-hidden">
                <img 
                  src="/api/placeholder/128/128" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Asanka Samarasinha</h3>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors duration-200 ${
                        isActive
                          ? 'bg-careernest-primary text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <i className={item.icon}></i>
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {children || <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

