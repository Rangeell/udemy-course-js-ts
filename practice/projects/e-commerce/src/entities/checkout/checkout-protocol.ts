import type { OrderStatus } from '../Order/order-status-protocol.js';

export interface CheckoutOutput {
    id: string;
    total: number;
    status: OrderStatus;
}