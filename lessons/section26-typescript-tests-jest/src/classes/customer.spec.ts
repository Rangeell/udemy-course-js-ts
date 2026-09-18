import { IndividualCustomer, EnterpriseCustomer } from './customer';

// Factory Function
const createIndividualCustumer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

// Factory Function
const createEnterpriseCustumer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

// Função que limpa os mocks depois de cada teste -> aplica para ambos os "decribes"
afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustumer('Breno', 'Rangel', '111.111.111-11');

    // State tests
    expect(sut).toHaveProperty('firstName', 'Breno');
    expect(sut).toHaveProperty('lastName', 'Rangel');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn for individual custumers', () => {
    const sut = createIndividualCustumer('Breno', 'Rangel', '111.111.111-11');

    // Behavior Tests
    expect(sut.getName()).toBe('Breno Rangel');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustumer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustumer('Udemy', '222');

    // State tests
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('should have methods to get name and idn enterprise custumers', () => {
    const sut = createEnterpriseCustumer('Udemy', '222');

    // Behavior tests
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('222');
  });
});
