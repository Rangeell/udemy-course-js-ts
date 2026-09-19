/* eslint-disable */
import type { CartItem } from '../interfaces/cart-item';
import type { CustomerOrderProtocol } from '../interfaces/customer-protocol';
import type { MessagingProtocol } from '../interfaces/messaging-protocol';
import type { PersistencyProtocol } from '../interfaces/persitency-protocol';
import type { ShoppingCartProtocol } from '../interfaces/shopping-cart-protocol';
import { Order } from './order';

// MOCKS
class ShoppingCartMock implements ShoppingCartProtocol { // Mock para o carrinho de compras.
  get items(): readonly CartItem[] {
    return [];
  }

  // Tivemos que retornar qualquer coisa para evitar erros de retornos tipados
  addItem(item: CartItem): void { }
  removeItem(index: number): void { }
  total(): number { return 1; }
  totalWithDiscount(): number { return 2; }
  isEmpty(): boolean { return false; }
  clear(): void { }
}

class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void { }
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void { }
}

class CustumerMock implements CustomerOrderProtocol {
  getName(): string { return ''; }
  getIDN(): string { return ''; }
}

// SUT
const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const custumerMock = new CustumerMock();
  const sut = new Order(shoppingCartMock, messagingMock, persistencyMock, custumerMock);

  return { sut, shoppingCartMock, messagingMock, persistencyMock, custumerMock }; // Retorna um objeto
};

describe('Order', () => {
  it('should not checkout if cart is empity', () => {
    const { sut, shoppingCartMock } = createSut();

    // mockReturnValueOnce -> Jest "mocka"/finge que o retorno do método é true
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(true);

    sut.checkOut(); // Executa o método que usa os demais método

    // Verifica se empity() foi chamado
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);

    // Verifica se o orderStatus se manteve em 'open', pois não pode ser finalizado -> carrinho vazio
    expect(sut.orderStatus).toBe('open');
  });

  it('should checkout if cart is not empity', () => {
    const { sut, shoppingCartMock, messagingMock, persistencyMock } = createSut();

    // mockReturnValueOnce -> Jest "mocka"/finge que o retorno do método é false
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(false);

    sut.checkOut(); // Executa o método que usa os demais métodos

    // Verifica se empity() foi chamado
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);

    // Verifica se o orderStatus foi alterado para 'closed', pois o fechamento do pedido foi liberado
    expect(sut.orderStatus).toBe('closed');
  });

  it('should send an email to customer', () => {
    const { sut, messagingMock } = createSut();

    // mockReturnValueOnce -> Jest "mocka"/finge que o retorno do método é false
    const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');

    sut.checkOut(); // Executa o método que usa os demais métodos

    // Verifica se sendMessage() foi chamado
    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, persistencyMock } = createSut();

    // mockReturnValueOnce -> Jest "mocka"/finge que o retorno do método é false
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');

    sut.checkOut(); // Executa o método que usa os demais métodos

    // Verifica se saveOrder() foi chamado
    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear cart', () => {
    const { sut, shoppingCartMock } = createSut();

    // mockReturnValueOnce -> Jest "mocka"/finge que o retorno do método é false
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');

    sut.checkOut(); // Executa o método que usa os demais métodos

    // Verifica se clear() foi chamado
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });
});
