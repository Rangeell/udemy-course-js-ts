import type { CartProtocol } from '../cart/cart-protocol.js';
import { Order } from '../Order/order.js';
import type { CheckoutOutput } from './checkout-protocol.js';

export class Checkout {
    execute(cart: CartProtocol): CheckoutOutput {
        if (!cart) throw new Error('Cart not found!');
        if (cart.items.length === 0) throw new Error('This method cannot be executed with an empty cart!');

        const order = new Order(cart.items);

        return {
            id: order.id,
            total: order.total,
            status: order.status,
        };
    }
}