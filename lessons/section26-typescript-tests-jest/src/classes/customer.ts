/*
Módulo que representa o cliente em si.

Se tivéssmos criado uma fat interface, teríamos que implementar muita coisa que o cliente não usaria de fato -> sinal que estamos implementando contratos incompatíveis com as classes em questão.
*/

import type {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustomerOrderProtocol,
} from '../interfaces/customer-protocol.js';

// Classe que representa o cliente (pessoa física) -> implementa dois contratos
export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrderProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  // cpnj: string; -> Irrelevante para pessoa física (em caso de fat interfaces)

  constructor(
    firstName: string,
    lastName: string,
    cpf: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    // this.cpnj = ''; -> Implementação obrigatória (em caso de fat interfaces)
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getIDN(): string {
    return this.cpf;
  }
}

// Classe que representa o cliente (pessoa jurídica) -> implementa dois contratos
export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrderProtocol {
  name: string;
  cnpj: string;
  // firstName: string; -> Irrelavante para pessoa jurídica (em caso de fat interfaces)
  // lastName: string; -> Irrelavante para pessoa jurídica (em caso de fat interfaces)
  // cpf: string; -> Irrelavante para pessoa jurídica (em caso de fat interfaces)

  constructor(
    name: string,
    cnpj: string,
    // firstName: string,
    // lastName: string,
    // cpf: string,
  ) {
    this.name = name;
    this.cnpj = cnpj;
    // this.firstName = firstName; -> Implementação obrigatória (em caso de fat interfaces)
    // this.lastName = lastName; -> Implementação obrigatória (em caso de fat interfaces)
    // this.cpf = cpf; -> Implementação obrigatória (em caso de fat interfaces)
  }

  getName(): string {
    return this.name;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
