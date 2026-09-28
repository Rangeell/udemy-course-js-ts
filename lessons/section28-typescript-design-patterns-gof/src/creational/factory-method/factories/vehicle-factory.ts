/*
Criador Abstrato (Creator)

Note o Princípio da Inversão de Dependência: a fábrica depende de abstrações (Vehicle), não de implementações.
*/

import type { Vehicle } from '../vehicles/vehicle-protocol';

export abstract class VehicleFactory {
  // Factory Method: Subclasses decidem a instância (Pode ser tanto abstrato quanto um método implementado)
  abstract getVehile(vehicleName: string): Vehicle // DIP

  // Lógica de negócio comum que utiliza o Factory Method
  puckUp(customerName: string, vehicleName: string): Vehicle { //DIP
    const vehicle = this.getVehile(vehicleName);
    vehicle.pickUp(customerName);

    return vehicle;
  }
}
