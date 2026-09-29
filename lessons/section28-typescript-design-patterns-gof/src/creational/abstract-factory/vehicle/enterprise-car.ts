import type { CustomerProtocol } from '../customer/customer-protocol';
import type { VehicleProtocol } from './vehicle-protocol';

export class EnterpriseCar implements VehicleProtocol {
  constructor(
    public name: string,

    // Customer -> Dependency Injection e Dependency Inversion Principle
    private readonly customer: CustomerProtocol) { }

  pickUp(): void {
    console.log(`${this.name} está buscando ${this.customer.name} (ENTERPRISE CAR)`);
  }
}
