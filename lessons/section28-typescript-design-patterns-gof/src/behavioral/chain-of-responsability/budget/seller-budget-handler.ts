/*
Essa classe representa o Tratador Concreto -> Vendedor (até R$ 1.000):

  - Limite de Valor: Trata orçamentos com valor total `<= 1000`.

  - Ação: Define `budget.approved = true`, exibe a mensagem `"O vendedor tratou o orçamento!"` no console e retorna o orçamento, interrompendo a cadeia.

  - Exceção: Se o valor for maior que `1000`, delega o tratamento chamando `super.handle(budget)`.
*/

import { BaseBudgetHandler } from './base-budget-handler';
import type { CustomerBudget } from './customer-budget';

export class SellerBudgetHandler extends BaseBudgetHandler {
  // Só precisamos configurar o método handle
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 1000) {
      console.log('O vendedor tratou o orçamento!');
      budget.approved = true;
      return budget; // interrompe a cadeia
    }

    return super.handle(budget); // Repassa para o próximo da cadeia tratar
  }
}
