import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

// Simple fallback components for all pages
const PatientContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Patient Management</h2>
    <p>Manage patient records and appointments here.</p>
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border rounded-lg p-4 shadow">
          <h3 className="font-semibold mb-2">Total Patients</h3>
          <p className="text-2xl font-bold text-blue-600">2,847</p>
        </div>
        <div className="bg-white border rounded-lg p-4 shadow">
          <h3 className="font-semibold mb-2">New Patients</h3>
          <p className="text-2xl font-bold text-green-600">124</p>
        </div>
        <div className="bg-white border rounded-lg p-4 shadow">
          <h3 className="font-semibold mb-2">Discharged Today</h3>
          <p className="text-2xl font-bold text-purple-600">67</p>
        </div>
        <div className="bg-white border rounded-lg p-4 shadow">
          <h3 className="font-semibold mb-2">Critical Cases</h3>
          <p className="text-2xl font-bold text-red-600">15</p>
        </div>
      </div>
    </div>
  </div>
);

// Export for use in dashboard
export { PatientContent };

export default function PatientPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar activePage="patient" />
      <div className="flex-1">
        <Header />
        <PatientContent />
      </div>
    </div>
  );
}
