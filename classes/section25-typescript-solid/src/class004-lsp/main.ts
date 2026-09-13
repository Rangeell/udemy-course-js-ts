/*
Nesta aula, é apresentado o*LSP – Liskov Substitution Principle (Princípio da Substituição de Liskov), o "L" do S.O.L.I.D.

* Liskov Substitution principle (Princípio da substituição de Liskov): Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y) deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

* Subtipos devem ser substituíveis por seus tipos de base sem que isso afete a correção ou o comportamento esperado do programa.

* Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
* Mais simples ainda: Se meu programa espera um Animal, algo do tipo Cachorro (que herda de Animal) deve servir como qualquer outro Animal.

O código cliente nunca deve saber — ou se importar — com qual subclasse específica está interagindo. Se o sistema espera um tipo genérico, qualquer subtipo deve servir integralmente sem exigir adaptações.

No design de software, a herança é frequentemente descrita como uma relação de "é um" (ex: um cachorro "é um" animal). Contudo, para o LSP, a herança vai além da taxonomia; ela é uma obrigação contratual.

Quando uma classe herda de outra, ela assume o compromisso de honrar não apenas a assinatura dos métodos (tipagem), mas também a semântica e as expectativas de comportamento da classe pai. Se a relação não for forte o suficiente para garantir que a subclasse se comporte exatamente como a base em todos os contextos, a herança é inadequada e a abstração torna-se uma mentira lógica.
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
