import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { LayoutGrid, Package, ShoppingBag, Settings } from 'lucide-react';
import ProductManagement from './ProductManagement';
import OrderManagement from './OrderManagement';
import DashboardOverview from './DashboardOverview';
import AdminSettings from './AdminSettings';

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md min-h-screen">
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
          </div>
          <nav className="mt-4">
            <Link
              to="/admin/dashboard"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              <LayoutGrid className="h-5 w-5 mr-3" />
              Overview
            </Link>
            <Link
              to="/admin/dashboard/products"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              <Package className="h-5 w-5 mr-3" />
              Products
            </Link>
            <Link
              to="/admin/dashboard/orders"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              <ShoppingBag className="h-5 w-5 mr-3" />
              Orders
            </Link>
            <Link
              to="/admin/dashboard/settings"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              <Settings className="h-5 w-5 mr-3" />
              Settings
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/orders" element={<OrderManagement />} />
            <Route path="/settings" element={<AdminSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;