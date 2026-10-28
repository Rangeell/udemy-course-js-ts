import { CartItem } from '../cart-item/cart-item.js';
import { Product } from '../product/product.js';
import { Order } from './order.js';

// FACTORY FUNCTIONS
const createItem = (
    name: string = 'Camiseta',
    price: number = 30,
    quantity: number = 3): CartItem => {
    const product = new Product(name, price);

    return new CartItem(product, quantity);
};

const createSut = (...items: CartItem[]): Order => new Order(items);

const createSutWithItems = () => {
    const cartItem = createItem(); // 'Camiseta' (3 unidades -> 90 reais)
    const cartItem2 = createItem('Livro', 10, 2); // 'Livro' (2 unidades -> 20 reais)
    const sut = new Order([cartItem, cartItem2]);

    return { cartItem, cartItem2, sut };
};

// TESTS
describe('Order', () => {
    it('Should return an error when attempting to instantiate the class without items.', () => {
        expect(() => createSut()).toThrow('Cannot create an order with an empty cart!');
    });

    it('Should have all required properties (id, status, createAt, total, and items) when instantiated.', () => {
        const { sut } = createSutWithItems();

        expect(sut).toHaveProperty('id');
        expect(sut).toHaveProperty('status');
        expect(sut).toHaveProperty('createAt');
        expect(sut).toHaveProperty('total');
        expect(sut).toHaveProperty('items');
    });

    it('Should return a value of 110 when the total getter is called.', () => {
        const { sut } = createSutWithItems();
        expect(sut.total).toBe(110);
    });

    it('Should initialize with pending status, unique id, formatted date, and correct items snapshot.', () => {
        const { cartItem, cartItem2, sut } = createSutWithItems();

        expect(sut.status).toBe('pending');
        expect(typeof sut.id).toBe('string');
        expect(sut.createAt).toEqual(new Date().toLocaleDateString());
        expect(sut.items).toEqual([cartItem, cartItem2]);
    });

    it('Should carry out a successful payment and an unsuccessful cancellation', () => {
        const { sut } = createSutWithItems();
        const paymentResult = sut.pay();
        
        expect(sut.status).toBe('paid');
        expect(paymentResult).toBeTruthy();

        const cancellationResult = sut.cancel();
        
        expect(sut.status).toBe('paid');
        expect(cancellationResult).toBeFalsy();
    });
    
    it('Should carry out a successful cancellation and an unsuccessful payment', () => {
        const { sut } = createSutWithItems();
        const cancellationResult = sut.cancel();
        
        expect(sut.status).toBe('cancelled');
        expect(cancellationResult).toBeTruthy();

        const paymentResult = sut.pay();

        expect(sut.status).toBe('cancelled');
        expect(paymentResult).toBeFalsy();
    });
});