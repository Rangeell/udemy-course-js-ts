/*
Métodos:
- `get subTotal()`: 
    O uso clássico de getters é expor o acesso controlado a propriedades privadas.

    No entanto, na orientação a objetos, getters também são amplamente utilizados para propriedades computadas (ou derivadas). Como o subtotal depende diretamente de dados encapsulados (price e quantity), expô-lo como um getter faz sentido porque ele se comporta como um atributo do objeto para quem o consome, sem que a classe precise expor suas variáveis internas cruas.
*/

import type { ProductProtocol } from '../product/product-protocol.js';
import type { CartItemProtocol } from './cart-item-protocol.js';

export class CartItem implements CartItemProtocol {
    constructor(
        private readonly _product: ProductProtocol,
        private _quantity: number) {
        if (_quantity <= 0) throw new Error('The item quantity must be greater than zero!');
    }

    // GETTERS
    get quantity(): number { return this._quantity; }
    get product(): ProductProtocol { return this._product; }

    get subTotal(): number {
        return this._product.price * this._quantity;
    }

    incrementQuantity(amount: number): void {
        this._quantity += amount;
    }
}
