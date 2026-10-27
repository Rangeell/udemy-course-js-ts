/*
Sobre o teste de adiconar itens de produtos com id iguais:
    - Precisamos de instâncias separadas de CartItem (para não haver mutação cruzada de referência), mas todas apontando para o mesmo Product (compartilhando o mesmo ID).Dessa forma, o carrinho reconhece pelo ID que é o mesmo produto, encontra o item existente e soma corretamente a quantidade de cada adição (1 + 1 + 1 = 3).
*/

import { jest } from '@jest/globals';
import { Cart } from './cart.js';
import { CartItem } from '../cart-item/cart-item.js';
import { Product } from '../product/product.js';

// FACTORY FUNCTIONS
const createCartItem = (
    name: string = 'Camiseta',
    price: number = 30,
    quantity: number = 3) => {
    const product = new Product(name, price);

    return new CartItem(product, quantity);
};

const createSut = () => new Cart();

const createSutWithItems = () => {
    const cartItem1 = createCartItem();
    const cartItem2 = createCartItem();
    const cartItem3 = createCartItem('Livro', 20, 2);

    const sut = new Cart();

    sut.addItems(cartItem1, cartItem2, cartItem3);

    return { sut, cartItem1, cartItem2, cartItem3 };
};

// HOOKS
afterEach(() => jest.clearAllMocks());

// TESTS
describe('Cart', () => {
    it('Should return all items in the cart when the `items()` getter is called.', () => {
        const { sut, cartItem1, cartItem2, cartItem3 } = createSutWithItems();

        expect(sut.items).toEqual([cartItem1, cartItem2, cartItem3]);
    });

    it('Should return zero when `totalQuantity()` getter is called (no product added).', () => {
        const sut = createSut();

        expect(sut.items.length).toBe(0);
        expect(sut.totalQuantity).toBe(0);
    });

    it('Should add items and result in 3 items with a total quantity of 8 in the cart when the `addItems()` method is called.', () => {
        const { sut } = createSutWithItems();

        expect(sut.items.length).toBe(3);
        expect(sut.totalQuantity).toBe(8);
    });

    it('Should increment the quantity when adding the same product multiple times', () => {
        const sut = createSut();
        const product = new Product('Bola', 10);

        sut.addItems(new CartItem(product, 1));
        sut.addItems(new CartItem(product, 1));
        sut.addItems(new CartItem(product, 1));

        expect(sut.items.length).toBe(1); // Garante que não duplicou itens no array
        expect(sut.items[0]?.quantity).toBe(3);
    });

    it('Should calculate the total value (220) of the cart when the method `calculateTotal()` is called.', () => {
        const { sut } = createSutWithItems();

        expect(sut.calculateTotal()).toBe(220);
    });

    it('Should remove an item and return it when the `removeItem()` method is called.', () => {
        const { sut, cartItem1 } = createSutWithItems();

        const removedItem = sut.removeItem(cartItem1.product.id);

        expect(removedItem).toBe(cartItem1);
    });

    it('Should remove all items from the cart when the `clear()` method is called', () => {
        const { sut } = createSutWithItems();

        expect(sut.items.length).toBe(3);
        expect(sut.totalQuantity).toBe(8);

        sut.clear();

        expect(sut.items.length).toBe(0);
        expect(sut.totalQuantity).toBe(0);
    });
});
