import { useState } from 'react';
import type { Medicine } from '../types/medicine';

export function useCart() {
  const [items, setItems] = useState<Medicine[]>([]);

  function addItem(item: Medicine) {
    setItems((prev) => [...prev, item]);
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter(item => item.id !== id));
  }

  return { items, addItem, removeItem };
}
