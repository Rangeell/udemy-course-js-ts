import type { CustomerProtocol } from './customer-protocol';

export class IndividualCustomer implements CustomerProtocol {
  constructor(public name: string) {
    this.name = `${this.name} (INDIVIDUAL)`;
  }
}
