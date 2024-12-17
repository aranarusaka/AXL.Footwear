export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  address?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  category: string;
  sizes: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
}

export interface WishlistItem {
  productId: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  paymentMethod: 'credit' | 'debit' | 'gopay' | 'ovo';
  shippingAddress: string;
  createdAt: string;
}