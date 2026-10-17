/*
A classe abstrata `BaseBudgetHandler` define o contrato comum e fornece a implementação padrão de repasse da cadeia de responsabilidade.

Estrutura e Métodos

  - Atributo Protegido `nextHandler`: Aloca a referência para o próximo tratador da cadeia (`protected nextHandler: BaseBudgetHandler | null = null`).

  - Método `setNext(handler: BaseBudgetHandler): BaseBudgetHandler`: Atribui o próximo tratador ao atributo `nextHandler` e retorna o tratador recebido como parâmetro. Essa abordagem permite o encadeamento fluente (fluent interface) de chamadas (method chaining).

  - Método `handle(budget: CustomerBudget): CustomerBudget`: Define o comportamento padrão de repasse. Verifica se `nextHandler` está definido:

    - Se existir um próximo tratador, repassa a execução chamando `this.nextHandler.handle(budget)`.
    - Caso contrário (fim da cadeia sem tratamento prévio), retorna o próprio orçamento sem alterações adicionais.
*/

import type { CustomerBudget } from './customer-budget';

export abstract class BaseBudgetHandler {
  protected nextHandler: BaseBudgetHandler | null = null;

  // Permite encadear chamadas retornando o handler recebido (Method Chaining)
  setNextHandler(handler: BaseBudgetHandler): BaseBudgetHandler {
    this.nextHandler = handler;

    // Retorna o próprio handler para permitir encadeamento em linha (Fluent Interface)
    return handler;
  }

  // Comportamento padrão de repasse na cadeia (pode ser usado em todas as subclasses)
  handle(budget: CustomerBudget): CustomerBudget {
    if (this.nextHandler) return this.nextHandler.handle(budget); // Se existir repassa para o próximo objeto da cadeia

    return budget; // Se não tiver um next, retorna o orçamento
  }
}
