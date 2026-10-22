/*
Abstração base para todos os produtos visitáveis. Encapsula estado comum e obriga a implementação da operação de aceitação do visitante.

  - Optamos uma classe abstrata a interface, pois não queremos repetir a lógica dentro das subclasses concretas.
*/

import type { TaxVisitorProtocol } from './tax-visitor-protocol';

export abstract class VisitableProduct {
  constructor(protected name: string, protected price: number) { }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  abstract getPriceWithTaxes(visitor: TaxVisitorProtocol): number
}
