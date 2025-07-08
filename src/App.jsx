import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';

// Import pages (we'll create these next)
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ProfilePage from './pages/ProfilePage';
import MentoringPage from './pages/MentoringPage';
import JobPostingPage from './pages/JobPostingPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with main layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<div>About Page</div>} />
          <Route path="service" element={<div>Service Page</div>} />
          <Route path="faq" element={<div>FAQ Page</div>} />
        </Route>
        
        {/* Auth routes without layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Dashboard routes with dashboard layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="cv-generator" element={<div>CV Generator</div>} />
          <Route path="roadmap" element={<div>Roadmap</div>} />
          <Route path="mentoring" element={<MentoringPage />} />
          <Route path="job-posting" element={<JobPostingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

