import type { CartItemProtocol } from '../cart-item/cart-item-protocol.js';

export interface CartProtocol {
    get items(): ReadonlyArray<CartItemProtocol> 
    get totalQuantity(): number;    
    addItems(...items: CartItemProtocol[]): void;
    removeItem(id: string): CartItemProtocol | null;
    calculateTotal(): number;
    clear(): void;
}
