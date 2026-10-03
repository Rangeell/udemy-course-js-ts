/*
A classe `TShirt` representa o produto base neutro no domínio do e-commerce. Ela implementa a interface `ProductProtocol`, definindo os atributos protegidos `name` com o valor `'Camiseta'` e `price` com o valor `49.90`.
*/

import type { ProductProtocol } from './product-protocol';

export class TShirt implements ProductProtocol { // Realization / DIP
  protected price = 49.90;
  protected name = 'Camiseta';

  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.name;
  }
}
