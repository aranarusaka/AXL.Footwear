import React from 'react';

interface OrderFiltersProps {
  selectedStatus: string | null;
  onStatusChange: (status: string | null) => void;
}

export function OrderFilters({
  selectedStatus,
  onStatusChange,
}: OrderFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-700">Filter by status:</span>
        <select
          value={selectedStatus || ''}
          onChange={(e) => onStatusChange(e.target.value || null)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="">All Orders</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>
    </div>
  );
}