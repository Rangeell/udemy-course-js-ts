/*
Contrato leve que define o comportamento dos veículos.
*/

export interface Vehicle {
  pickUp(customerName: string): void;
  stop(): void;
}
