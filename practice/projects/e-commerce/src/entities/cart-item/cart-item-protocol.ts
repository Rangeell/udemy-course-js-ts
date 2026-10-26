import type { ProductProtocol } from '../product/product-protocol.js';

export interface CartItemProtocol {
    get product(): ProductProtocol;
    get quantity(): number;
    get subTotal(): number;
}