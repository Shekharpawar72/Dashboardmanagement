import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

// Content-only component for embedding in dashboard
export function NewsContent() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">News Letters</h2>
      <p className="mb-6">Stay updated with the latest hospital news and updates.</p>
      
      {/* News Statistics */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Total Articles</h3>
          <p className="text-2xl font-bold text-blue-600">156</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">This Month</h3>
          <p className="text-2xl font-bold text-green-600">12</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Pending Review</h3>
          <p className="text-2xl font-bold text-orange-600">3</p>
        </div>
      </div>

      {/* Recent News */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Recent News & Updates</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-800">New Medical Equipment Arrival</h4>
            <p className="text-gray-600 text-sm">Advanced MRI machine installed in radiology department</p>
            <span className="text-xs text-gray-500">2 days ago</span>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-gray-800">Staff Training Program</h4>
            <p className="text-gray-600 text-sm">Monthly training session scheduled for next week</p>
            <span className="text-xs text-gray-500">5 days ago</span>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-gray-800">Patient Satisfaction Survey</h4>
            <p className="text-gray-600 text-sm">98% satisfaction rate achieved this quarter</p>
            <span className="text-xs text-gray-500">1 week ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Full page component with layout
export default function NewsLettersPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <NewsContent />
      </div>
    </div>
  );
}
