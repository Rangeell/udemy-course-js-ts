/*
Interface para salvar os dados do pedido em algum banco de dados
*/

import type { OrderProtocol } from './order-protocol.js';

export interface OrderRepositoryProtocol {
    save(order: OrderProtocol): Promise<void>;
}