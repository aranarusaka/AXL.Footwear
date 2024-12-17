import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  trendDirection?: 'up' | 'down';
}

export function StatsCard({
  title,
  value,
  icon,
  trend,
  trendDirection = 'up',
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="p-3 bg-blue-50 rounded-full">{icon}</div>
      </div>
      {trend && (
        <div className="mt-4">
          <span
            className={`text-sm font-medium ${
              trendDirection === 'up' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {trend}
          </span>
          <span className="text-sm text-gray-600"> vs last month</span>
        </div>
      )}
    </div>
  );
}