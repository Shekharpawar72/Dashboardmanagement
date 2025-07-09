import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

// Simple fallback components for all pages
const PatientContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Patient Management</h2>
    <p>Manage patient records and appointments here.</p>
  </div>
);

const AppointmentContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Appointment Management</h2>
    <p>Manage appointments and scheduling here.</p>
  </div>
);

const DoctorContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Doctor Management</h2>
    <p>Manage doctor profiles and schedules here.</p>
  </div>
);

const BillingContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Billing Management</h2>
    <p>Manage billing and invoices here.</p>
  </div>
);

const InsuranceContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Insurance Management</h2>
    <p>Manage insurance claims and policies here.</p>
  </div>
);

const MasterDataContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Master Data Management</h2>
    <p>Manage master data and configurations here.</p>
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg p-4 shadow">
          <h3 className="font-semibold mb-2">Data Sources</h3>
          <p className="text-2xl font-bold text-blue-600">42</p>
        </div>
        <div className="bg-white border rounded-lg p-4 shadow">
          <h3 className="font-semibold mb-2">Active Configurations</h3>
          <p className="text-2xl font-bold text-green-600">178</p>
        </div>
        <div className="bg-white border rounded-lg p-4 shadow">
          <h3 className="font-semibold mb-2">Sync Operations</h3>
          <p className="text-2xl font-bold text-orange-600">23</p>
        </div>
      </div>
    </div>
  </div>
);

// Export the content component for use in other pages
export { MasterDataContent };

const HumanResourcesContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Human Resources Management</h2>
    <p>Manage HR records and staff here.</p>
  </div>
);

const FinanceContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Finance Management</h2>
    <p>Manage financial records and reports here.</p>
  </div>
);

const FacilityManagementContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Facility Management</h2>
    <p>Manage hospital facilities and resources here.</p>
  </div>
);

const DashboardContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
    <p>Main dashboard overview.</p>
  </div>
);

// Component to render page content based on selection
const PageContent = ({ page }: { page: string }) => {
  switch (page) {
    case 'patient':
      return <PatientContent />;
    case 'appointment':
      return <AppointmentContent />;
    case 'doctor':
      return <DoctorContent />;
    case 'billing':
      return <BillingContent />;
    case 'insurance':
      return <InsuranceContent />;
    case 'master-data':
      return <MasterDataContent />;
    case 'human-resources':
      return <HumanResourcesContent />;
    case 'finance':
      return <FinanceContent />;
    case 'facility-management':
      return <FacilityManagementContent />;
    case 'dashboard':
      return <DashboardContent />;
    default:
      return <MasterDataContent />;
  }
};

export default function MasterDataPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar activePage="master-data" />
      <div className="flex-1">
        <Header />
        <MasterDataContent />
      </div>
    </div>
  );
}
