import React from 'react';
import { Order } from '../../../types';
import { useProductStore } from '../../../store/productStore';

interface RecentOrdersProps {
  orders: Order[];
}

export function RecentOrders({ orders }: RecentOrdersProps) {
  const { products } = useProductStore();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Orders</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Order #{order.id}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  {
                    pending: 'bg-yellow-100 text-yellow-800',
                    processing: 'bg-blue-100 text-blue-800',
                    shipped: 'bg-green-100 text-green-800',
                    delivered: 'bg-gray-100 text-gray-800',
                  }[order.status]
                }`}
              >
                {order.status}
              </span>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                Items:{' '}
                {order.items
                  .map((item) => {
                    const product = products.find((p) => p.id === item.productId);
                    return product
                      ? `${product.name} (x${item.quantity})`
                      : 'Unknown Product';
                  })
                  .join(', ')}
              </p>
              <p className="text-sm font-medium text-gray-900 mt-1">
                Total: ${order.total.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}