/*
Módulo dedicado para centralizar protocolocos que vão ser reutilizados
*/

import type { DeliveryLocation } from './delivery-location';

// Tipo estrutural que encapsula o estado intrínseco imutável
export type DeliveryLocationData = {
  readonly street: string;
  readonly city: string;
}

// Abstração de dicionário/mapa flexíve, onde a chave é o ID normalizado da localização e o valor é a referência ao objeto Flyweight concreto.
export type DeliveryLocationDictionary = {
  [k: string]: DeliveryLocation; // Index signature
}
