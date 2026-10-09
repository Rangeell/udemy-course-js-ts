/*
A função `deliveryContext` representa a camada de cliente/orquestração (Client/Context no GoF). Ela desacopla a regra de negócio da verificação manual da fábrica:

  1. Recebe a fábrica (`DeliveryFactory`), o estado extrínseco (`name`, `number`) e o estado intrínseco (`street`, `city`).

  2. Solicita à fábrica a referência do objeto Flyweight correspondente via `factory.makeLocation({ street, city })`.

  3. Invoca o método operacional `location.delivery(name, number)` passando os parâmetros extrínsecos.
*/

import type { DeliveryFactory } from './delivery-factory';

export const deliveryContext = (
  factory: DeliveryFactory,
  name: string,
  number: string,
  street: string,
  city: string): void => {
  const location = factory.makeLocation({ street, city }); // Passamos o estado intrínseco
  location.delivery(name, number); // Passamos o estado extrínseco
};
