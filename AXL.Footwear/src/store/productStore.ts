import { create } from 'zustand';
import { Product } from '../types';

interface ProductState {
  products: Product[];
  searchTerm: string;
  priceRange: [number, number];
  selectedCategory: string | null;
  setSearchTerm: (term: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setSelectedCategory: (category: string | null) => void;
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  removeProduct: (id: string) => void;
  filteredProducts: () => Product[];
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [
    {
      id: '1',
      name: 'Summer Comfort Sandals',
      description: 'Lightweight and comfortable sandals perfect for summer days.',
      price: 49.99,
      stock: 15,
      images: [
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1543163522-1bf539c55dd2?auto=format&fit=crop&q=80',
      ],
      category: "Women's Collection",
      sizes: ['36', '37', '38', '39', '40'],
    },
    {
      id: '2',
      name: 'Sport Trail Sandals',
      description: 'Durable sport sandals designed for outdoor activities.',
      price: 79.99,
      stock: 10,
      images: [
        'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80',
      ],
      category: 'Sport Sandals',
      sizes: ['40', '41', '42', '43', '44'],
    },
  ],
  searchTerm: '',
  priceRange: [0, 200],
  selectedCategory: null,
  setSearchTerm: (term) => set({ searchTerm: term }),
  setPriceRange: (range) => set({ priceRange: range }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  addProduct: (product) =>
    set((state) => ({
      products: [
        ...state.products,
        { ...product, id: Math.random().toString(36).substr(2, 9) },
      ],
    })),
  updateProduct: (id, product) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, ...product } : p
      ),
    })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
  filteredProducts: () => {
    const { products, searchTerm, priceRange, selectedCategory } = get();
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesPrice && matchesCategory;
    });
  },
}));