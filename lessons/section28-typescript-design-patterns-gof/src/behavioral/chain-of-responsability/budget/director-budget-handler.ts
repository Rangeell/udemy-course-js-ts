/*
Essa classe representa o Tratador Concreto -> Diretor (até R$ 50.000):

- Limite de Valor: Trata orçamentos com valor total `<= 50000`.

- Ação: Define `budget.approved = true`, exibe a mensagem `"O diretor tratou o orçamento!"` no console e retorna o orçamento.

- Exceção: Caso o valor ultrapasse `50000`, delega para `super.handle(budget)`.
*/

import { BaseBudgetHandler } from './base-budget-handler';
import type { CustomerBudget } from './customer-budget';

export class DirectorBudgetHandler extends BaseBudgetHandler {
  // Só precisamos configurar o método handle
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 50000) {
      console.log('O diretor tratou o orçamento!');
      budget.approved = true;
      return budget; // interrompe a cadeia
    }

    return super.handle(budget); // Repassa para o próximo da cadeia tratar
  }
}
