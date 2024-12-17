import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WishlistItem } from '../types';

interface WishlistState {
  items: WishlistItem[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  hasItem: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (productId) =>
        set((state) => ({
          items: [...state.items, { productId }],
        })),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId),
        })),
      hasItem: (productId) =>
        get().items.some((item) => item.productId === productId),
    }),
    {
      name: 'wishlist-storage',
    }
  )
);