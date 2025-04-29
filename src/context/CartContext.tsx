import React, { createContext, useState, useContext, ReactNode } from 'react';
import type { Medicine } from '../types/medicine';

interface CartContextType {
  items: Medicine[];
  addItem: (item: Medicine) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Medicine[]>([]);

  function addItem(item: Medicine) {
    setItems((prev) => [...prev, item]);
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter(item => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
