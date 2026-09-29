import type { CustomerProtocol } from '../customer/customer-protocol';
import type { VehicleProtocol } from '../vehicle/vehicle-protocol';

export interface CustomerVehicleFactoryProtocol {
  createCustomer(customerName: string): CustomerProtocol;
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol;
}
