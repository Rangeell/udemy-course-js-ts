import type { CustomerProtocol } from '../customer/customer-protocol';
import type { VehicleProtocol } from '../vehicle/vehicle-protocol';
import type { CustomerVehicleFactoryProtocol } from './customer-vehicle-factory-protocol';

import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseCar } from '../vehicle/enterprise-car';

export class EnterpriseVehicleFactory implements CustomerVehicleFactoryProtocol {
  createCustomer(customerName: string): CustomerProtocol {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);

    return new EnterpriseCar(vehicleName, customer);
  }
}
