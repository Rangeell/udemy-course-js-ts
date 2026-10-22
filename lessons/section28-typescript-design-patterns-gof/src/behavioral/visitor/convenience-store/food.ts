/*
Elementos Concretos (`Food`, `Cigarette`, `AlcoholicDrink`): Cada classe concreta implementa `getPriceWithTaxes` invocando a operação correspondente no visitante e passando sua própria referência (this) para o parâmetro.
*/

import type { TaxVisitorProtocol } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price); // Passando o `name` hardcoded
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    // Redireciona a chamada para o método especializado do visitante passando 'this' e elimina condicionais
    return visitor.calculateTaxesForFood(this);
  }
}
