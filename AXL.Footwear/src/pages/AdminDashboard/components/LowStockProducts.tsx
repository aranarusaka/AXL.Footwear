import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { Product } from '../../../types';

interface LowStockProductsProps {
  products: Product[];
}

export function LowStockProducts({ products }: LowStockProductsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">Low Stock Alert</h2>
        <AlertTriangle className="h-5 w-5 text-yellow-500" />
      </div>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center">
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{product.name}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-red-600">
                {product.stock} units left
              </p>
              <Link
                to={`/admin/dashboard/products`}
                className="text-sm text-blue-600 hover:text-blue-900"
              >
                Restock
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}