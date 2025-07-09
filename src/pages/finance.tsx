import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

// Exportable content component for internal rendering
export function FinanceContent() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Finance Management</h2>
      <p>Manage financial records and reports here.</p>
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Total Revenue</h3>
            <p className="text-2xl font-bold text-green-600">₹2.4M</p>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Monthly Expenses</h3>
            <p className="text-2xl font-bold text-red-600">₹1.8M</p>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Outstanding Bills</h3>
            <p className="text-2xl font-bold text-orange-600">₹324K</p>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Net Profit</h3>
            <p className="text-2xl font-bold text-blue-600">₹600K</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FinancePage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar activePage="finance" />
      <div className="flex-1">
        <Header />
        <FinanceContent />
      </div>
    </div>
  );
}
