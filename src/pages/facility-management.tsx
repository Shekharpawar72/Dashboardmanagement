import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

// Exportable content component for internal rendering
export function FacilityManagementContent() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Facility Management</h2>
      <p>Manage hospital facilities and infrastructure here.</p>
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Total Rooms</h3>
            <p className="text-2xl font-bold text-blue-600">456</p>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Available Beds</h3>
            <p className="text-2xl font-bold text-green-600">89</p>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Maintenance Requests</h3>
            <p className="text-2xl font-bold text-orange-600">23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FacilityManagementPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar activePage="facility-management" />
      <div className="flex-1">
        <Header />
        <FacilityManagementContent />
      </div>
    </div>
  );
}
