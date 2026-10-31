import type { CartProtocol } from '../cart/cart-protocol.js';
import type { OrderStatus } from '../Order/order-status-protocol.js';

export interface CheckoutOutput {
    id: string;
    total: number;
    status: OrderStatus;
}

export interface CheckoutProtocol {
    execute(cart: CartProtocol): Promise<CheckoutOutput>
}