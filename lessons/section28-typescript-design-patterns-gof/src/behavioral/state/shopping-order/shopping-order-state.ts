/*
A interface `ShoppingOrderState` estabelece os métodos obrigatórios que toda classe de estado concreto deve implementar para gerenciar a transição e a execução das ações do pedido:

- `getName(): string`: Retorna a identificação textual do estado atual.
- `approvePayment(): void`: Processa a tentativa de aprovação do pagamento.
- `rejectPayment(): void`: Processa a recusa do pagamento.
- `waitPayment(): void`: Coloca ou mantém o pedido em espera/pendência de pagamento.
- `shipOrder(): void`: Executa ou valida o envio físico do pedido ao cliente.
*/

export interface ShoppingOrderState {
  getName(): string;
  approvePayment(): void;
  rejectPayment(): void;
  waitPayment(): void;
  shipOrder(): void;
}
