import type { Medicine } from './medicine';

export interface CartItem extends Medicine {
  quantity: number;
}
