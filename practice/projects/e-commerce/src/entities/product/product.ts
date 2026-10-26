import type { ProductProtocol } from './product-protocol.js';

export class Product implements ProductProtocol {
    private readonly id: string = crypto.randomUUID();

    constructor(
        private readonly _name: string,
        private readonly _price: number) {

        if (!_name) throw new Error('Nome do produto inválido!');
        if (_price < 0) throw new Error('Preço do produto não pode ser negativo!');
    }
    get name() { return this._name; }
    get price() { return this._price; }
}