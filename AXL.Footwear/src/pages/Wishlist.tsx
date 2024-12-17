import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart } from 'lucide-react';
import { useWishlistStore } from '../store/wishlistStore';
import { useProductStore } from '../store/productStore';
import { useCartStore } from '../store/cartStore';

function Wishlist() {
  const { items, removeItem } = useWishlistStore();
  const { products } = useProductStore();
  const { addItem } = useCartStore();

  const wishlistItems = items
    .map((item) => ({
      ...item,
      product: products.find((p) => p.id === item.productId),
    }))
    .filter((item) => item.product); // Filter out any items where product wasn't found

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Your wishlist is empty
          </h2>
          <p className="mt-4 text-gray-500">
            Save items you love for later
          </p>
          <Link
            to="/catalog"
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Wishlist</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.productId}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Link to={`/product/${item.productId}`}>
              <img
                src={item.product.images[0]}
                alt={item.product.name}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4">
              <Link
                to={`/product/${item.productId}`}
                className="text-lg font-medium text-gray-900 hover:text-blue-600"
              >
                {item.product.name}
              </Link>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${item.product.price.toFixed(2)}
              </p>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() =>
                    addItem({
                      productId: item.productId,
                      quantity: 1,
                      size: item.product.sizes[0],
                    })
                  }
                  className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => removeItem(item.productId)}
                  className="p-2 text-gray-400 hover:text-red-500"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;