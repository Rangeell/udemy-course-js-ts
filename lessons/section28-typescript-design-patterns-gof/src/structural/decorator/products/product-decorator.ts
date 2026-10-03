/*
A classe `ProductDecorator` implementa `ProductProtocol` e injeta em seu construtor a propriedade `protected product: ProductProtocol`. Os seus métodos `getName()` e `getPrice()` não realizam modificações diretas: eles apenas delegam as chamadas para o objeto interno `this.product`.

A utilidade deste decorador base reside no fato de ele imitar perfeitamente o comportamento do objeto envolvido, funcionando de maneira neutra. Ele estabelece um gabarito limpo (template) que permite aos decoradores concretos estenderem (herança) seu comportamento sem código redundante.

Com a infraestrutura do decorador base implementada, torna-se possível criar decoradores especializados para agregação dinâmica de funcionalidades ao produto.
*/

import type { ProductProtocol } from './product-protocol';

export class ProductDecorator implements ProductProtocol { // Realization
  constructor(protected product: ProductProtocol) { } // Aggregation & DIP

  getPrice(): number {
    return this.product.getPrice(); // Delegation
  }

  getName(): string {
    return this.product.getName(); // Delegation
  }
}
