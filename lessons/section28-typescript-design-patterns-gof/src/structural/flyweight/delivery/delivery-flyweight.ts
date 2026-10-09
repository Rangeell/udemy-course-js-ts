/*
Interface principal (Flyweight Interface no GoF) que estabelece o contrato operacional. Exige a implementação do método `delivery(name: string, number: string): void`, declarando estritamente os parâmetros do estado extrínseco.
*/

export interface DeliveryFlyweight {
  // Nome do cliente e número da casa
  delivery(name: string, number: string): void; // Estado Extrínseco
}
