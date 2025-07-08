import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default Layout;

