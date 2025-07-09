import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

// Content-only component for embedding in dashboard
export function AppointmentContent() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Appointment Management</h2>
      <p>Manage and view appointments here.</p>
      {/* Add more appointment-specific content here */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg border-2 border-blue-600">
          <h3 className="font-semibold mb-2">Today's Appointments</h3>
          <p className="text-2xl font-bold text-blue-600">24</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border-2 border-green-600">
          <h3 className="font-semibold mb-2">Completed</h3>
          <p className="text-2xl font-bold text-green-600">18</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border-2 border-orange-600">
          <h3 className="font-semibold mb-2">Pending</h3>
          <p className="text-2xl font-bold text-orange-600">6</p>
        </div>
      </div>
    </div>
  );
}

// Full page component with layout
export default function AppointmentPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <AppointmentContent />
      </div>
    </div>
  );
}
