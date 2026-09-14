/*
Nesta aula, é apresentada a primeira parte sobre o OCP – Open/Closed Principle (Princípio do Aberto/Fechado) do S.O.L.I.D.

O Open Closed Principle (OCP) é um dos pilares fundamentais do SOLID. Ele estabelece que as entidades de software (classes, módulos, funções, métodos) devem estar abertas para extensão, mas fechadas para modificação.

O princípio dita que o comportamento de uma entidade pode ser estendido sem que seja necessário alterar seu código-fonte original.

  - Aberto para extensão: É possível adicionar novos comportamentos ou funcionalidades ao sistema.
  - Fechado para modificação: O código-fonte original, uma vez testado e funcional, não deve ser alterado para acomodar novas regras de negócio.

Para ilustrar a necessidade do OCP, considera-se um cenário de comércio eletrônico durante a semana da Black Friday. O departamento de marketing solicita promoções variáveis a cada dia:
  - Segunda-feira: 15% de desconto.
  - Terça-feira: 10% de desconto.
  - Quarta-feira: 50% de desconto.

Para solucionar o problema existem diversas maneiras:
  - Passar parâmetros para o método: Passar o valor ou a regra de desconto como um argumento para o método. Isso permite que o método se comporte de forma diferente conforme o input externo.

  - Herança: Criar subclasses que herdam da classe original e sobrescrevem comportamentos específicos.

  - Injeção de Dependência / Padrão Strateg: Injetar uma classe de algoritmo (estratégia) dentro da classe principal. Este é o método mais robusto para gerenciar famílias de algoritmos que podem variar.

Nesta aula, usamos o Padrão Strategy (GoF) combinado com Injeção de Dependência para gerenciar os descontos.
*/

import { Messaging } from './services/messaging.js';
import { Order } from './classes/order.js';
import { Persistency } from './services/persistency.js';
import { Product } from './classes/product.js';
import { ShoppingCart } from './classes/shopping-cart.js';
import { FifityPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/discount.js';

//* --- Teste do Carrinho de Compras ---

// Instanciações e injeção de depedências
const fifityPercentDiscount = new FifityPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(fifityPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

// Adicionando produtos ao carrinho
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

//! shoppingCart.items[0] = { name: 'Maria', price: 30 }; Erro em tempo de compilação (ReadOnly)
// shoppingCart.clear();
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkOut();
console.log(order.orderStatus);
