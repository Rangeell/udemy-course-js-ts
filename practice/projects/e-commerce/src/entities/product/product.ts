import type { ProductProtocol } from './product-protocol.js';

export class Product implements ProductProtocol {
    private readonly _id: string = crypto.randomUUID();

    constructor(
        private readonly _name: string,
        private readonly _price: number) {

        if (!_name) throw new Error('Invalid product name!');
        if (_price < 0) throw new Error('Product price cannot be negative!');
    }
    
    get id(): string { return this._id; }
    get name(): string { return this._name; }
    get price(): number { return this._price; }
}
