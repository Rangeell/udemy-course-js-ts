/*
Nesta aula, é apresentada a primeira parte sobre o ISP – Interface Segregation Principle (Princípio da Segregação de Interface), a letra "I" do S.O.L.I.D.

Definição: "Os clientes não devem ser forçados a depender de interfaces, tipos (`types`) ou membros abstratos que não utilizam".

Em outras palavras: é melhor ter várias interfaces específicas e enxutas do que uma única interface genérica e "gorda" (inflada). Quando uma interface possui muitos atributos ou métodos, ela força as classes que a implementam a definir coisas desnecessárias para o seu contexto real.
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
