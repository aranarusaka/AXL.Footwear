import { useCartStore } from '@/store/cartStore';
import { useProductStore } from '@/store/productStore';
import { calculateTotal } from '@/utils/price';

export function useCart() {
  const { items, addItem, removeItem, updateQuantity, clearCart } = useCartStore();
  const { products } = useProductStore();

  const cartItems = items.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId)!,
  }));

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const total = calculateTotal(subtotal);

  return {
    items: cartItems,
    subtotal,
    total,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
}