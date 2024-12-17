import React from 'react';
import { useOrderStore } from '../../store/orderStore';
import { OrderList } from './components/OrderList';
import { OrderFilters } from './components/OrderFilters';

function OrderManagement() {
  const { orders, updateOrderStatus } = useOrderStore();
  const [filterStatus, setFilterStatus] = React.useState<string | null>(null);

  const filteredOrders = filterStatus
    ? orders.filter((order) => order.status === filterStatus)
    : orders;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>

      <OrderFilters
        selectedStatus={filterStatus}
        onStatusChange={setFilterStatus}
      />

      <OrderList
        orders={filteredOrders}
        onUpdateStatus={updateOrderStatus}
      />
    </div>
  );
}

export default OrderManagement;