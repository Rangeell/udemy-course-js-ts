/*
Nesta aula prática, aplicamos o padrão de projeto criacional Factory Method em TypeScript, construindo um sistema fictício de transporte (estilo Uber) para demonstrar o desacoplamento entre o código cliente e a criação de objetos concretos.

- Ao invés de chamar "new Car()" ou "new Bicycle()" e gerar um acoplamento a essas classes, podemos simplesmente apenas chamar as nossas factories. Com isso, temos um "acoplamento mais confiável", pois podemos alterar um único ponto do código sem quebrar diversas partes do sistema, permitindo que o código cliente evolua de forma independente das implementações de baixo nível.

Resumidamente: é muito melhor ficar acoplado a uma factory a uma classe concreta diretamente.
*/

import { CarFactory } from './factories/car-factory';
import { randomNumbers } from './utils/random-numbers';
import { randomVehicle } from './main/random-vehicle-algorithm';

//! const fusca = new Car('Fusca'); -> Acoplamento rídigio

// Código cliente não fica mais "preso" à classe concreta. Ele nem conhece a Vehile / Car

const carFactory = new CarFactory();
const customersNames = ['Breno', 'Maria', 'Ana', 'Joana'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomVehicle();
  const name = customersNames[randomNumbers(customersNames.length)] as string;

  vehicle.pickUp(name);
  vehicle.stop();

  const newCar = carFactory.puckUp(name, `Novo Carro - ${randomNumbers(100)}`);
  newCar.stop();

  console.log('---');
}
