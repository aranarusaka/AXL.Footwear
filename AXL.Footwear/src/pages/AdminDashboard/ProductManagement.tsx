import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { ProductForm } from './components/ProductForm';
import { ProductList } from './components/ProductList';
import { useProductStore } from '../../store/productStore';

function ProductManagement() {
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<string | null>(null);
  const { products, addProduct, updateProduct, removeProduct } = useProductStore();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
        <button
          onClick={() => setIsAddingProduct(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>

      {(isAddingProduct || editingProduct) && (
        <ProductForm
          product={editingProduct ? products.find(p => p.id === editingProduct) : undefined}
          onSubmit={(data) => {
            if (editingProduct) {
              updateProduct(editingProduct, data);
            } else {
              addProduct(data);
            }
            setIsAddingProduct(false);
            setEditingProduct(null);
          }}
          onCancel={() => {
            setIsAddingProduct(false);
            setEditingProduct(null);
          }}
        />
      )}

      <ProductList
        products={products}
        onEdit={setEditingProduct}
        onDelete={removeProduct}
      />
    </div>
  );
}

export default ProductManagement;