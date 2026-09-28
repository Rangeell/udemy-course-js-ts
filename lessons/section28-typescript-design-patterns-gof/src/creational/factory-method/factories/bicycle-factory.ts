/*
Criadore Concreto (Concrete Creator)
*/

import { Bicycle } from '../vehicles/bicyle';
import type { Vehicle } from '../vehicles/vehicle-protocol';
import { VehicleFactory } from './vehicle-factory';

export class BicycleFactory extends VehicleFactory {
  getVehile(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}
