import { Product } from './product';

// Factory Function
const createSut = (name: string, price: number): Product => new Product(name, price);

describe('Product', () => {
  afterEach(() => jest.clearAllMocks()); // Função que limpa os mocks depois de cada teste

  it('should have properties name and price', () => {
    const sut = createSut('Camiseta', 49.9); // Convenção Padrão (sut)

    // Object state tests
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut).toHaveProperty('price', 49.9);
    expect(sut.price).toBeCloseTo(49.9);
  });
});
