/*
Criadore Concreto (Concrete Creator)
*/

import { Car } from '../vehicles/car';
import type { Vehicle } from '../vehicles/vehicle-protocol';
import { VehicleFactory } from './vehicle-factory';

export class CarFactory extends VehicleFactory {
  getVehile(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
