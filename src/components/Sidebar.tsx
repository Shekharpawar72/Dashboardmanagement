

import React, { useState } from 'react';
import Link from 'next/link';

interface SidebarProps {
  activePage?: string;
}

const menuItems = [
  { label: 'Dashboard', page: 'dashboard', href: '/dashboard', icon: '🏠', navigateToPage: true },
  { label: 'Patient', page: 'patient', href: '/patient', icon: '🧑‍⚕️', navigateToPage: true },
  { label: 'Appointment', page: 'appointment', href: '/appointment', icon: '📅', navigateToPage: true },
  { label: 'Doctor', page: 'doctor', href: '/doctor', icon: '👨‍⚕️', navigateToPage: true },
  { label: 'Billing', page: 'billing', href: '/billing', icon: '💳', navigateToPage: true },
  { label: 'Insurance', page: 'insurance', href: '/insurance', icon: '🛡️', navigateToPage: true },
  { label: 'Master Data', page: 'master-data', href: '/master-data', icon: '📚', navigateToPage: true },
  { label: 'Finance', page: 'finance', href: '/finance', icon: '💰', navigateToPage: true },
  { label: 'Facility Management', page: 'facility-management', href: '/facility-management', icon: '🏢', navigateToPage: true },
  { label: 'Human Resources', page: 'human-resources', href: '/human-resources', icon: '👥', navigateToPage: true },
];

const Sidebar: React.FC<SidebarProps> = ({ 
  activePage = 'dashboard'
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuClick = () => {
    setMobileOpen(false); // Close mobile sidebar after click
  };

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white border rounded p-2 shadow"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle Sidebar"
      >
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-[770px] bg-white flex flex-col justify-between z-40
          transition-all duration-200 shadow-2xl
          ${collapsed ? 'w-20' : 'w-64'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static
        `}
      >
        <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block">
          <button
            className="bg-white rounded-full p-1 shadow z-50"
            onClick={() => setCollapsed(!collapsed)}
            aria-label="Collapse Sidebar"
          >
            {collapsed ? '➡️' : '⬅️'}
          </button>
        </div>

        <div>
          <div className={`py-6 px-4 text-xl font-bold ${collapsed ? 'text-center px-0' : ''}`}>
            {collapsed ? 'L' : 'Logo'}
          </div>
          <nav>
            <ul>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href || `/${item.page}`}
                    className={`px-4 py-2 hover:bg-gray-100 transition font-medium flex items-center cursor-pointer
                      ${collapsed ? 'justify-center' : ''}
                      ${activePage === item.page ? 'bg-blue-100 text-blue-600' : ''}
                    `}
                    onClick={handleMenuClick}
                  >
                    {collapsed ? (
                      <span className="text-lg block">{item.icon}</span>
                    ) : (
                      <>
                        <span className="mr-3 text-lg">{item.icon}</span>
                        <span className="w-full">{item.label}</span>
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className={`px-4 py-6 ${collapsed ? 'text-center px-0' : ''}`}>
          <div className="text-sm font-semibold mb-1">{collapsed ? 'U' : 'User'}</div>
          <div className="flex items-center text-gray-500 text-xs justify-center md:justify-start">
            <span className="mr-2">⚙️</span>
            {!collapsed && 'Account Setting'}
          </div>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
