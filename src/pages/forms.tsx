import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

// Exportable content component for internal rendering
export function Formsmanage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Total from handle.</h2>
      <p>Manage from records and  update forms here.</p>
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Total Forms</h3>
            <p className="text-2xl font-bold text-blue-600">124</p>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Handle </h3>
            <p className="text-2xl font-bold text-green-600">15</p>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">To Doctor</h3>
            <p className="text-2xl font-bold text-purple-600">34</p>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Support Staff Forms</h3>
            <p className="text-2xl font-bold text-orange-600">7</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function formshandle() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar activePage="human-resources" />
      <div className="flex-1">
        <Header />
        <Formsmanage />
      </div>
    </div>
  );
}
