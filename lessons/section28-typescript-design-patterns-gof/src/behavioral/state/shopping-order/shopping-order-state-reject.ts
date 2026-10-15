/*
Essa classe atua como um estado terminal na modelagem prática adotada.

- Restrição de Movimentação: Uma vez recusado, o pedido não pode transitar para nenhum outro estado. Invocações de `approvePayment()`, `rejectPayment()` ou `waitPayment()` exibem mensagens informando a impossibilidade de alteração devido ao bloqueio da recusa.

- Ações Bloqueadas: O envio (`shipOrder()`) é expressamente bloqueado com a mensagem `"Não posso enviar um pedido de pagamento recusado."`.
*/

import type { ShoppingOrder } from './shopping-order';
import type { ShoppingOrderState } from './shopping-order-state';

export class ShoppingOrderStateReject implements ShoppingOrderState {
  private name = 'Order Reject';

  constructor(private order: ShoppingOrder) { }

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Não posso aprovar o pagamento porque foi recusado!');
  }

  rejectPayment(): void {
    console.log('O pedido já está no estado pagamento rejeitado!');
  }

  waitPayment(): void {
    console.log('Não posso mover o pagamento para pendente porque foi recusado!');
  }

  shipOrder(): void {
    console.log('Não posso enviar o pedido porque o pagamento foi recusado!');
  }
}
