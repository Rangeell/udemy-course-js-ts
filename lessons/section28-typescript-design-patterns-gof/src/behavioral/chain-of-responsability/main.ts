/*
Nesta aula prática, implementamos o padrão de projeto Chain of Responsibility simulando um sistema corporativo de aprovação de orçamentos (budgets).

O objetivo foi distribuir a responsabilidade de aprovação por níveis hierárquicos (Vendedor, Gerente, Diretor e CEO). Cada elo da cadeia analisa o valor do orçamento: se estiver dentro de sua alçada, ele aprova e encerra o fluxo; caso contrário, repassa a requisição automaticamente para o próximo nível.
*/

import { CEOBudgetHandler } from './budget/ceo-budget-handler';
import { CustomerBudget } from './budget/customer-budget';
import { DirectorBudgetHandler } from './budget/director-budget-handler';
import { ManagerBudgetHandler } from './budget/manager-budget-handler';
import { SellerBudgetHandler } from './budget/seller-budget-handler';

// Montagem da cadeia de responsabilidades via Method Chaining
const seller = new SellerBudgetHandler();

seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

// Teste 1: Orçamento de R$ 10 (Vendedor deve tratar)
const customerBudget1 = new CustomerBudget(10);
seller.handle(customerBudget1);
console.log(customerBudget1); // Aprovado: true

// Teste 2: Orçamento de R$ 1.001 (Gerente deve tratar)
const customerBudget2 = new CustomerBudget(1_001);
seller.handle(customerBudget2);
console.log(customerBudget2); //

// Teste 3: Orçamento de R$ 5.001 (Diretor deve tratar)
const customerBudget3 = new CustomerBudget(5_001);
seller.handle(customerBudget3);
console.log(customerBudget3); // Aprovado: true

// Teste 4: Orçamento de R$ 50.001 (CEO deve tratar)
const customerBudget4 = new CustomerBudget(50_001);
seller.handle(customerBudget4);
console.log(customerBudget4); // Aprovado: true
