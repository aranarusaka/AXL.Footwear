import { create } from 'zustand';
import { Order } from '../types';

interface OrderState {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: [
    {
      id: '1',
      userId: '1',
      items: [
        {
          productId: '1',
          quantity: 2,
          size: '40',
        },
      ],
      total: 99.98,
      status: 'pending',
      paymentMethod: 'credit',
      shippingAddress: '123 Main St, City, Country',
      createdAt: new Date().toISOString(),
    },
  ],
  addOrder: (order) =>
    set((state) => ({
      orders: [...state.orders, order],
    })),
  updateOrderStatus: (orderId, status) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      ),
    })),
}));