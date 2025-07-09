import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

// Content-only component for embedding in dashboard
export function BillingContent() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Billing Management</h2>
      <p>Handle billing and invoicing here.</p>
      {/* Add more billing-specific content here */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Total Revenue</h3>
          <p className="text-2xl font-bold text-green-600">₹125,400</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Pending Bills</h3>
          <p className="text-2xl font-bold text-orange-600">₹45,200</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Overdue</h3>
          <p className="text-2xl font-bold text-red-600">₹8,500</p>
        </div>
      </div>
    </div>
  );
}

// Full page component with layout
export default function BillingPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar activePage="billing" />
      <div className="flex-1">
        <Header />
        <BillingContent />
      </div>
    </div>
  );
}
