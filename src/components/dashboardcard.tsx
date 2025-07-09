import React from 'react';

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  count?: number;
  href?: string;
}

export default function DashboardCard({ title, icon, count, href }: DashboardCardProps) {
  return (
    <a href={href || '#'} className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition group focus:outline-none focus:ring-2 focus:ring-blue-500" tabIndex={0}>
      <div className="text-3xl text-blue-600 mb-2">{icon}</div>
      <div className="text-lg font-semibold text-gray-800">{title}</div>
      {typeof count === 'number' && <div className="text-2xl font-bold text-blue-700 mt-1">{count}</div>}
    </a>
  );
}
