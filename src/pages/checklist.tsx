import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function Checklist() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Checklist of patients</h2>
          <p>Manage doctor profiles and schedules here.</p>
        </div>
      </div>
    </div>
  );
}
