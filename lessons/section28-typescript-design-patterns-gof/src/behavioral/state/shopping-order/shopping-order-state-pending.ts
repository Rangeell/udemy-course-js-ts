/*
Estado inicial padrão do pedido ao ser instanciado.

- Transições Permitidas: Permite transitar para `ShoppingOrderStateApproved` via `approvePayment()` ou para `ShoppingOrderStateRejected` via `rejectPayment()`.

- Ações Bloqueadas: Invocar `waitPayment()` apenas informa que o pedido já está pendente. A tentativa de envio (`shipOrder()`) é bloqueada com a mensagem: `"Não posso enviar um pedido com pagamento pendente."`.
*/

import type { ShoppingOrder } from './shopping-order';
import type { ShoppingOrderState } from './shopping-order-state';
import { ShoppingOrderStateApproved } from './shopping-order-state-approved';
import { ShoppingOrderStateReject } from './shopping-order-state-reject';

export class ShoppingOrderStatePending implements ShoppingOrderState {
  private name = 'Order Pending';

  constructor(private order: ShoppingOrder) { }

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new ShoppingOrderStateApproved(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new ShoppingOrderStateReject(this.order));
  }

  waitPayment(): void {
    console.log('O pedido já está no estado pagamento pendente!');
  }

  shipOrder(): void {
    console.log('Não posso enviar o pedido com o pagamento pendente!');
  }
}
