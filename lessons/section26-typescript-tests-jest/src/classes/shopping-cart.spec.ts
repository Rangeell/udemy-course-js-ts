import { ShoppingCart } from './shopping-cart';
import { Discount } from './discount';
import type { CartItem } from '../interfaces/cart-item';

// Mocks -> Objetos controlados que "fingem" ser dependências reais para satisfazer o contrato exigido pelo SUT

// Factories Functions
const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem { // Mock -> Implementa de uma interface
    constructor(public name: string, public price: number) { }
  }

  return new CartItemMock(name, price);
};

const createDiscountMock = (): Discount => {
  class DiscountMock extends Discount { } // Mock -> Herda da classe abstrata

  return new DiscountMock();
};

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);

  return { sut, discountMock }; // Retorna um objeto
};

// Cria o Sut com produtos já inseridos no carrinho
const createSutWithProducts = () => {
  const { sut, discountMock } = createSut(); // Destructuring
  const cartItem1 = createCartItem('Camiseta', 40);
  const cartItem2 = createCartItem('Caneta', 1);

  sut.addItem(cartItem1);
  sut.addItem(cartItem2);

  return { sut, discountMock }; // Retorna um objeto
};

// Suites Tests
describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {

    const { sut } = createSut(); // Destructuring
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutWithProducts(); // Destructuring

    expect(sut.items.length).toBe(2);
  });

  it('should test total and total with discount', () => {
    const { sut } = createSutWithProducts(); // Destructuring

    expect(sut.total()).toBe(41);
    expect(sut.totalWithDiscount()).toBe(41);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithProducts(); // Destructuring

    expect(sut.items.length).toBe(2);

    sut.clear();

    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products', () => {
    const { sut } = createSutWithProducts(); // Destructuring
    expect(sut.items.length).toBe(2);

    sut.removeItem(1);
    expect(sut.items.length).toBe(1);

    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });

  // Testes para a integração do Carrinho com o Desconto
  it('should call discount.calculate() once when totalWithDiscount() is called', () => {
    const { sut, discountMock } = createSutWithProducts(); // Destructuring

    const discountMockSpy = jest.spyOn(discountMock, 'calculate'); // Espia o método calculate()

    sut.totalWithDiscount(); // Chama o método que usa o calculate()

    expect(discountMockSpy).toHaveBeenCalledTimes(1); // Verifica se calculate() é chamado
  });

  it('should call discount.calculate() with total() when totalWithDiscount() is called', () => {
    const { sut, discountMock } = createSutWithProducts(); // Destructuring

    const discountMockSpy = jest.spyOn(discountMock, 'calculate'); // Espia o método calculate()

    sut.totalWithDiscount(); // Chama o método que usa o calculate() e total()

    expect(discountMockSpy).toHaveBeenCalledWith(sut.total()); // Verifica se calculate() é chamado junto com total()
  });
});
