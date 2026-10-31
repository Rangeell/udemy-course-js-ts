/*
Métodos:
`execute()`:
    - Retornar uma promise de um objeto contendo id, valor total do pedido, e o seu status atual.
    - Cria um novo pedido (composição).
    - Salva o pedido em um banco de dados. Só retorna o resultado se a promise dessa operação for resolvida com sucesso.
*/

import type { CartProtocol } from '../cart/cart-protocol.js';
import type { OrderRepositoryProtocol } from '../Order/order-repository-protocol.js';
import { Order } from '../Order/order.js';
import type { CheckoutOutput, CheckoutProtocol } from './checkout-protocol.js';

export class Checkout implements CheckoutProtocol {
    constructor(private readonly repository: OrderRepositoryProtocol) { }

    async execute(cart: CartProtocol): Promise<CheckoutOutput> {
        if (!cart) throw new Error('Cart not found!');
        if (cart.items.length === 0) throw new Error('This method cannot be executed with an empty cart!');

        const order = new Order(cart.items);

        await this.repository.save(order); // Salva o pedido antes de retornar os resultados

        return {
            id: order.id,
            total: order.total,
            status: order.status,
        };
    }
}