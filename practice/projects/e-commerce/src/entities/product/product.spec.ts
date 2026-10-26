import { jest } from '@jest/globals';
import { Product } from './product.js';

// FACTORY FUNCTIONS
const createSut = (name: string, price: number): Product => new Product(name, price);

// HOOKS
afterEach(() => jest.clearAllMocks());

// TESTS
describe('Product', () => {
    it('Should throw an error if the name is invalid/empty.', () => {
        expect(() => createSut('', 49.9)).toThrow('Invalid product name!');
    });

    it('Should throw an error if the product price is negative.', () => {
        expect(() => createSut('Camiseta', -10)).toThrow('Product price cannot be negative!');
    });

    it('Should have a valid id, name and price when created successfully', () => {
        const sut = createSut('Camiseta', 49.9);

        const name = sut.name;
        const price = sut.price;
        const id = sut.id;

        // Property checks
        expect(sut).toHaveProperty('id');
        expect(sut).toHaveProperty('name');
        expect(sut).toHaveProperty('price');

        // Equality checks
        expect(typeof id).toBe('string');
        expect(name).toBe('Camiseta');
        expect(price).toBeCloseTo(49.9);
    });
}); 