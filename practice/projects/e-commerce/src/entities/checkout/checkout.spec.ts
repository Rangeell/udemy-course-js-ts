import { jest } from '@jest/globals';
import { Cart } from '../cart/cart.js';
import { Checkout } from './checkout.js';
import { Product } from '../product/product.js';
import { CartItem } from '../cart-item/cart-item.js';

import type { OrderProtocol } from '../Order/order-protocol.js';
import type { OrderRepositoryProtocol } from '../Order/order-repository-protocol.js';

// Função simulada para o métod `save`
const saveMock = jest.fn<(order: OrderProtocol) => Promise<void>>();

// Mock para o repositório
const repositoryMock: OrderRepositoryProtocol = { save: saveMock };

// FACTORY FUNCTIONS
const createCartItem = (): CartItem => {
    const product = new Product('Camiseta', 10);

    return new CartItem(product, 3);
};

const createSut = (cartItem?: CartItem) => {
    const sut = new Checkout(repositoryMock);
    const cart = new Cart();

    if (cartItem) cart.addItems(cartItem);

    return { sut, cart };
};

// HOOKS
afterEach(() => jest.clearAllMocks());

// TESTS
describe('Checkout', () => {
    it('Should reject checkout when the cart is empty', async () => {
        const { sut, cart } = createSut();

        // Verifca erro ao executar o método com um carrinho vazio
        await expect(sut.execute(cart)).rejects.toThrow('This method cannot be executed with an empty cart!');

        // Verifica se o método NÃO foi chamado
        expect(saveMock).not.toHaveBeenCalled();
    });

    it('Should reject checkout when saving the order fails', async () => {
        const cartItem = createCartItem();
        const { sut, cart } = createSut(cartItem);

        // Configura salvamento mal sucedido
        saveMock.mockRejectedValue(new Error('Data base error!'));

        await expect(sut.execute(cart)).rejects.toThrow('Data base error!');
        expect(saveMock).toHaveBeenCalledTimes(1); // Verifica se o repositório foi chamado
    });

    it('Should save the order exactly once', async () => {
        const cartItem = createCartItem();
        const { sut, cart } = createSut(cartItem);

        saveMock.mockResolvedValue(undefined); // Configura salvamente bem sucedido

        await sut.execute(cart);

        expect(saveMock).toHaveBeenCalledTimes(1);
    });

    it('Should return a valid object with the properties id, total, and status', async () => {
        const cartItem = createCartItem();
        const { sut, cart } = createSut(cartItem);

        saveMock.mockResolvedValue(undefined); // Configura salvamente bem sucedido

        const result = await sut.execute(cart);

        expect(saveMock).toHaveBeenCalledTimes(1);
        expect(result).toEqual({ id: expect.any(String), total: 30, status: 'pending' });
        expect(saveMock).toHaveBeenCalledWith(expect.objectContaining({ total: 30, status: 'pending' }));
    });
});