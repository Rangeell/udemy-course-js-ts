/*
Essa classe é responsável por gerenciar os status dos pedidos, valida se o carrinho está vazio e coordena o checkout, delegando ações para `Messaging` e `Persistency`. Logo, ela precisa rebecer um Carrinho para ter acesso aos seus dados.

Essa classe, agora, passa a ser mais "coesa".

A coesão é uma métrica para avaliar se os elementos de uma classe estão intimamente relacionados. Segundo princípios de Clean Code, uma classe é considerada coesa quando utiliza seus atributos dentro de seus métodos.
*/

import type { OrderStatus } from '../interfaces/order-status.js';
import type { Messaging } from '../services/messaging.js';
import type { Persistency } from '../services/persistency.js';
import type { ShoppingCart } from './shopping-cart.js';

export class Order {
  /*
    Para poder ter acesso à dados do carrinho, precisamos realizar a injeção de dependência através do construtor.

    ! Com isso, quebramos o Dependency Inversion Principle (DIP) -> vamos ver como lidar com esse problema em outra aula.
  */
  constructor( // Injeção de depedências
    private readonly cart: ShoppingCart, //! Depende de uma classe concreta -> ideal: abstração
    private readonly messaging: Messaging, //! Depende de uma classe concreta -> ideal: abstração
    private readonly persistency: Persistency, //! Depende de uma classe concreta -> ideal: abstração
  ) { }

  //* Atributo coeso
  private _orderStatus: OrderStatus = 'open';

  //* Método coeso
  get orderStatus(): OrderStatus { return this._orderStatus; }

  // Finaliza o carrinho de compras e usa o carrinho recebido no construtor
  checkOut(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(`Seu pedido com o total de ${this.cart.total()} foi recebido!`);
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
