/*
Essa classe representa o Tratador Concreto -> CEO trata qualquer valor acima do limite dos anteriores:

  - Regra: Atua como o tratador final da cadeia (catch-all).

  - Ação: Aprova qualquer orçamento que chegue até ele (`budget.approved = true`), exibe no console a mensagem `"O CEO trata qualquer orçamento!"` e retorna o objeto diretamente, sem chamar `super.handle()`.
*/

import { BaseBudgetHandler } from './base-budget-handler';
import type { CustomerBudget } from './customer-budget';

export class CEOBudgetHandler extends BaseBudgetHandler {
  // Só precisamos configurar o método handle
  handle(budget: CustomerBudget): CustomerBudget {
    console.log('O CEO trata qualquer orçamento!');
    budget.approved = true;
    return budget; // Processador final, não chama super.handle() e interrompe a cadeia
  }
}
