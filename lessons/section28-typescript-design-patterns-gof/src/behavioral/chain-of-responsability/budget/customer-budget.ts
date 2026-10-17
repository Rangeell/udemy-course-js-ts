/*
A classe `CustomerBudget` atua como o objeto de requisição que trafega entre os elementos da cadeia e representa o orçamento do cliente. Sua função é encapsular os dados essenciais para o processamento, especificamente o valor total do orçamento e seu estado de aprovação.

Atributos Públicos:
  - `approved`: booleano que indica se o orçamento foi aprovado. É iniciado por padrão como `false`.
  - `total`: valor numérico que representa o total financeiro do orçamento.
*/

// Requisição -> análogo ao exemplo da requisição HTTP da parte teórica da aula
export class CustomerBudget {
  public approved = false;

  constructor(public total: number) { }
}
