/*
Módulo que representa o contrato para os clientes.

Se mantivermos tanto cpf e cpnj na mesma interface, tanto a classe pessoa física quanto a classe pessoa jurídica seriam obrigadas a implementar uma propriedade(s) que não as pertencem.

Agrupar `cpf/rg` com `cnpj` em um único contrato é semanticamente incorreto e tecnicamente perigoso, pois qualquer mudança estrutural em um tipo de cliente forçará a atualização de classes que não possuem relação com aquela alteração.

O verdadeiro custo de uma interface inflada surge no momento da implementação. Ao tentar satisfazer um contrato genérico demais, a classe é obrigada a violar o "Princípio do Menor Conhecimento", lidando com dados que não deveriam existir em seu escopo.
*/

// Contrato para os clientes (pessoa física)
export interface IndividualCustomerProtocol {
  firstName: string; // Irrelevante para empresas
  lastName: string; // Irrelevante para empresas
  cpf: string; // Irrelevante para empresas
  // cpnj: string; ->  Identificador de pessoa jurídica (irrelevante para pessoa física)
}

// Contrato para os clientes (pessoa jurídica)
export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string; // Irrelevante para pessoa física
}
