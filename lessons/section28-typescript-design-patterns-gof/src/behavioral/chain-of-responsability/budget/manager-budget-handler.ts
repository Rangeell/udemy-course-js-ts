/*
Essa classe representa o Tratador Concreto -> Gerente (até R$ 5.000):

- Limite de Valor: Trata orçamentos com valor total `<= 5000`.

- Ação: Define `budget.approved = true`, exibe a mensagem `"O gerente tratou o orçamento!"` no console e retorna o orçamento.

- Exceção: Caso o valor ultrapasse `5000`, delega para `super.handle(budget)`.
*/

import { BaseBudgetHandler } from './base-budget-handler';
import type { CustomerBudget } from './customer-budget';

export class ManagerBudgetHandler extends BaseBudgetHandler {
  // Só precisamos configurar o método handle
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 5000) {
      console.log('O gerente tratou o orçamento!');
      budget.approved = true;
      return budget; // interrompe a cadeia
    }

    return super.handle(budget); // Repassa para o próximo da cadeia tratar
  }
}
