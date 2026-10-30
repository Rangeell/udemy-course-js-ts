import type { OrderProtocol } from './order-protocol.js';

export interface OrderRepositoryProtocol {
    save(order: OrderProtocol): Promise<void>;
}