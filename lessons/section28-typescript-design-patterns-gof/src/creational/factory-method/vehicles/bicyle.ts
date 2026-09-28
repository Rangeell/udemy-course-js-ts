/*
Produto Concreto (Concrete Product)
*/

import type { Vehicle } from './vehicle-protocol';

export class Bicycle implements Vehicle {
  constructor(private name: string) { }

  pickUp(customerName: string): void {
    console.log(`Bicicleta ${this.name} está buscando ${customerName}.`);
  }

  stop(): void {
    console.log(`Bicicleta ${this.name} parou.`);
  }
}
