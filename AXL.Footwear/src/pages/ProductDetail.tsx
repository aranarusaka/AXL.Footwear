import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductStore } from '../store/productStore';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import { Heart, ShoppingCart } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products } = useProductStore();
  const { addItem } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, hasItem: isInWishlist } = useWishlistStore();
  
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    addItem({
      productId: product.id,
      quantity,
      size: selectedSize,
    });
    navigate('/cart');
  };

  const handleWishlistToggle = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} - View ${index + 1}`}
              className="w-full rounded-lg"
            />
          ))}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-2 text-3xl text-gray-900">${product.price.toFixed(2)}</p>
          
          <div className="mt-4">
            <h2 className="text-sm font-medium text-gray-900">Description</h2>
            <p className="mt-2 text-gray-500">{product.description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-medium text-gray-900">Size</h2>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    selectedSize === size
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-medium text-gray-900">Quantity</h2>
            <div className="mt-2 flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded-md"
              >
                -
              </button>
              <span className="text-gray-900">{quantity}</span>
              <button
                onClick={() =>
                  setQuantity(Math.min(product.stock, quantity + 1))
                }
                className="px-3 py-1 border rounded-md"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-8 flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button 
              onClick={handleWishlistToggle}
              className={`px-6 py-3 border rounded-md shadow-sm text-base font-medium ${
                isInWishlist(product.id)
                  ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Heart 
                className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} 
              />
            </button>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500">
              Stock: {product.stock} units available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;