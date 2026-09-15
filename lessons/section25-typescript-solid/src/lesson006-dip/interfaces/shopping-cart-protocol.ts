import type { CartItem } from './cart-item.js';

// Dependêcia abstrata (alto nível)
export interface ShoppingCartProtocol {
  items: ReadonlyArray<CartItem>;
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
