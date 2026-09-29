/*
Nesta aula prática, aplicamos o padrão de projeto criacional Abstract Factory em TypeScript. Construímos um sistema que gerencia duas famílias de produtos distintas — a família Enterprise (Empresarial) e a família Individual (Pessoa Física) —, garantindo que o tipo de veículo e o tipo de cliente de uma mesma categoria sejam sempre criados e utilizados em conjunto.
*/

import { EnterpriseVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualVehicleFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseVehicleFactory();
const individuaFactory = new IndividualVehicleFactory();

const car1 = individuaFactory.createVehicle('Fusca', 'Breno');
const car2 = enterpriseFactory.createVehicle('Audi', 'Maria');

car1.pickUp();
car2.pickUp();
