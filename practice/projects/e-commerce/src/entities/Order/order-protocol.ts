import type { CartItemProtocol } from '../cart-item/cart-item-protocol.js';
import type { OrderStatus } from './order-status-protocol.js';

export interface OrderProtocol {
    get id(): string;
    get total(): number;
    get status(): OrderStatus;
    get createAt(): string;
    get items(): ReadonlyArray<CartItemProtocol>;

    pay(): boolean;
    cancel(): boolean;
}
