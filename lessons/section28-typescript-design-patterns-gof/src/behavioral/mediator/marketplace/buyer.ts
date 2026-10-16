/*
Mantém a referência do mediador recebida via construtor. Expõe comandos simples de alto nível (`viewProducts` e `buy`), delegando toda a execução ao mediador.
*/

import type { Mediator } from './mediator';

// Classe Buyer (Comprador)
export class Buyer {
  // Recebe a referência do mediador via injeção de dependência no construtor
  constructor(private mediator: Mediator) { }

  // Solicita ao mediador a exibição consolidada de todos os produtos do marketplace
  viewProducts(): void {
    this.mediator.showProducts();
  }

  // Solicita ao mediador a compra de um produto específico através de seu ID
  buy(id: string): void {
    this.mediator.buy(id);
  }
}
