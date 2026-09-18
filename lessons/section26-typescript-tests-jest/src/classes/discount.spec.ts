import {
  Discount,
  NoDiscount,
  TenPercentDiscount,
  FifityPercentDiscount,
} from './discount';

type DiscountConstructor = new () => Discount;

// Factory Function
const createSut = (className: DiscountConstructor): Discount => new className();

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks()); // Função que limpa os mocks depois de cada teste

  it('should have no discount', () => {
    const sut = createSut(NoDiscount);

    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should have apply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });

  it('should have apply 50% discount on price', () => {
    const sut = createSut(FifityPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });
});
