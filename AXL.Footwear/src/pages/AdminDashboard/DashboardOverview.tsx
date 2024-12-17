import React from 'react';
import { useProductStore } from '../../store/productStore';
import { useOrderStore } from '../../store/orderStore';
import { Package, ShoppingBag, TrendingUp, DollarSign } from 'lucide-react';
import { StatsCard } from './components/StatsCard';
import { RecentOrders } from './components/RecentOrders';
import { LowStockProducts } from './components/LowStockProducts';

function DashboardOverview() {
  const { products } = useProductStore();
  const { orders } = useOrderStore();

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = orders.length;
  const totalProducts = products.length;
  const lowStockProducts = products.filter((product) => product.stock < 10);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Revenue"
          value={`$${totalRevenue.toFixed(2)}`}
          icon={<DollarSign className="h-6 w-6" />}
          trend="+12.5%"
        />
        <StatsCard
          title="Total Orders"
          value={totalOrders.toString()}
          icon={<ShoppingBag className="h-6 w-6" />}
          trend="+8.2%"
        />
        <StatsCard
          title="Total Products"
          value={totalProducts.toString()}
          icon={<Package className="h-6 w-6" />}
        />
        <StatsCard
          title="Low Stock Items"
          value={lowStockProducts.length.toString()}
          icon={<TrendingUp className="h-6 w-6" />}
          trend="-2.4%"
          trendDirection="down"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentOrders orders={orders.slice(0, 5)} />
        <LowStockProducts products={lowStockProducts} />
      </div>
    </div>
  );
}

export default DashboardOverview;