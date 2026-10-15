/*
A classe `ShoppingOrder` atua como o ponto central de entrada para a aplicação cliente, armazenando os dados do pedido e mantendo a referência privada ao estado ativo.

Estrutura do Contexto
  - Atributo Privado de Estado: A classe possui o atributo `private state: ShoppingOrderState`.

  - Inicialização Padrão: Para evitar checagens contínuas de valores indefinidos (`undefined`), o construtor inicializa (composição) o pedido automaticamente no estado pendente (`ShoppingOrderStatePending`).

  - Método `setState()`: Altera o estado ativo e exibe um *log* formal indicando a transição realizada.

  - Métodos de Delegação: Os métodos operacionais (`approvePayment()`, `rejectPayment()`, `waitPayment()`, `shipOrder()`) apenas repassam a chamada para o estado ativo (`this.state.method()`).
*/

import { ShoppingOrderStatePending } from './shopping-order-state-pending';
import type { ShoppingOrderState } from './shopping-order-state';

export class ShoppingOrder {
  private state: ShoppingOrderState = new ShoppingOrderStatePending(this); // Passando contexto para dentro do estado (passa a ter acesso ao objeto que estamos manipulando [contexto])

  constructor() { }

  getState(): ShoppingOrderState {
    return this.state;
  }

  setState(state: ShoppingOrderState): void {
    this.state = state;
    console.log(`O estado do pedido agora é ${this.getStateName()}`); // Feedback
  }

  getStateName(): string {
    return this.state.getName();
  }

  // Delegações e Polimorfimos -> métodos que dependem do estado, ou seja, a depender do mesmo a execução do método vai diferente
  approvePayment(): void {
    this.state.approvePayment();
  }

  rejectPayment(): void {
    this.state.rejectPayment();
  }

  waitPayment(): void {
    this.state.waitPayment();
  }

  shipOrder(): void {
    this.state.shipOrder();
  }
}
