import type { CustomerProtocol } from '../customer/customer-protocol';
import type { VehicleProtocol } from '../vehicle/vehicle-protocol';
import type { CustomerVehicleFactoryProtocol } from './customer-vehicle-factory-protocol';

import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualCar } from '../vehicle/individual-car';

export class IndividualVehicleFactory implements CustomerVehicleFactoryProtocol {
  createCustomer(customerName: string): CustomerProtocol {
      return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);

    return new IndividualCar(vehicleName, customer);
  }
}
