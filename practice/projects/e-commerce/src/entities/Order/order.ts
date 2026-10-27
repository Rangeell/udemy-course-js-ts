/*
Caso a o pedido seja instanciado sem itens, a inicialização é barrada.
O valor total do pedido é calculado logo na inicialização, utilizando o método (getter) `subTotal` dos itens.

Métodos:
    - `paid()`
        Alterna o status do pedido para 'paid' e retorna true. Caso o status atual seja 'cancelled', retorna false.
    - `cancel()`
        Alterna o status do pedido para 'cancelled' e retorna true. Caso o status atual seja 'paid' , retorna false.
*/

import type { CartItemProtocol } from '../cart-item/cart-item-protocol.js';
import type { OrderProtocol } from './order-protocol.js';
import type { OrderStatus } from './order-status-protocol.js';

export class Order implements OrderProtocol {
    private _status: OrderStatus = 'pending';
    private readonly _id = crypto.randomUUID();
    private readonly _createAt = new Date().toLocaleDateString();

    private readonly _total: number;

    constructor(
        private readonly _items: readonly CartItemProtocol[]) {

        if (_items.length === 0) {
            throw new Error('Cannot create an order with an empty cart!');
        }

        this._total = _items.reduce((acc, item) => acc + item.subTotal, 0);
    }

    // GETTERS
    get id(): string { return this._id; }
    get total(): number { return this._total; }
    get createAt(): string { return this._createAt; }
    get status(): OrderStatus { return this._status; }
    get items(): readonly CartItemProtocol[] { return Object.freeze([...this._items]); }

    // METHODS
    pay(): boolean {
        if (this._status === 'cancelled') return false;

        this._status = 'paid';
        return true;
    }

    cancel(): boolean {
        if (this._status === 'paid') return false;

        this._status = 'cancelled';
        return true;
    }
}
