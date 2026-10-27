import { jest } from '@jest/globals';
import { CartItem } from './cart-item.js';
import { Product } from '../product/product.js';

// FACTORY FUNCTIONS
const createProduct = (
    name: string = 'Camiseta',
    price: number = 49.9): Product => new Product(name, price);

const createSut = (
    product: Product,
    quantity: number): CartItem => new CartItem(product, quantity);

// HOOKS
afterEach(() => jest.clearAllMocks());

// TESTS
describe('Cart Item', () => {
    const product = createProduct();

    it('Should throw an error if the product quantity is negative or zero.', () => {
        expect(() => createSut(product, -1)).toThrow('The item quantity must be greater than zero!');
        expect(() => createSut(product, 0)).toThrow('The item quantity must be greater than zero!');
    });

    it('Should calculate the correct subtotal based on product price and quantity', () => {
        const sut = createSut(product, 3);

        // Equality checks
        expect(sut.subTotal).toBeCloseTo(149.7);
    });

    it('Should update the quantity and calculate the new subtotal when incrementQuantity is called', () => {
        const sut = createSut(product, 3);
        sut.incrementQuantity(2);

        // Equality checks
        expect(sut.quantity).toBe(5);
        expect(sut.subTotal).toBeCloseTo(249.5);
    });

    it('Should have a valid product and quantity when created successfully', () => {
        const sut = createSut(product, 2);

        // Property checks
        expect(sut).toHaveProperty('product', product);
        expect(sut).toHaveProperty('quantity', 2);
    });
});