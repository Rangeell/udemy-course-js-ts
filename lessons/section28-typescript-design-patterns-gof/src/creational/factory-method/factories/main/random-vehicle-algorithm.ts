/*

*/

import { BicycleFactory } from '../bicycle-factory';
import { CarFactory } from '../car-factory';
import type { Vehicle } from '../../vehicles/vehicle-protocol';
import { randomNumbers } from '../../utils/random-numbers';

export function randomVehicle(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehile('Fusca');
  const car2 = carFactory.getVehile('Celta Preto');
  const bicycle = bicycleFactory.getVehile('Bicycle');

  const cars = [car1, car2, bicycle];

  return cars[randomNumbers(cars.length)] as Vehicle;
}
