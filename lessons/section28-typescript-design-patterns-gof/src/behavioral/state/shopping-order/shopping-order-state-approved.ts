/*
Representa a confirmação de pagamento com sucesso.

- Transições Permitidas: Libera o envio do pedido (`shipOrder()`), emitindo `"Enviando o pedido para o cliente..."`. Permite retornar a pendente (`waitPayment()`) transicionando para `ShoppingOrderStatePending`, ou recusar (`rejectPayment()`) transicionando para `ShoppingOrderStateRejected`.

- Ações Bloqueadas: Re-aprovar o pagamento (`approvePayment()`) é bloqueado, emitindo alerta de que o pagamento já está aprovado.
*/

import type { ShoppingOrder } from './shopping-order';
import type { ShoppingOrderState } from './shopping-order-state';
import { ShoppingOrderStatePending } from './shopping-order-state-pending';
import { ShoppingOrderStateReject } from './shopping-order-state-reject';

export class ShoppingOrderStateApproved implements ShoppingOrderState {
  private name = 'Order Approved';

  constructor(private order: ShoppingOrder) { }

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('O pedido já está no estado pagamento aprovado!');
  }

  rejectPayment(): void {
    this.order.setState(new ShoppingOrderStateReject(this.order));
  }

  waitPayment(): void {
    this.order.setState(new ShoppingOrderStatePending(this.order));
  }

  shipOrder(): void {
    console.log('Enviando pedido para o cliente...');
  }
}
