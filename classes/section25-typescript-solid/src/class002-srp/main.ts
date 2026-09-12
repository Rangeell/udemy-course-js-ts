/*
Nesta aula, é realizada a refatoração do carrinho de compras ingênuo da aula anterior para colocá-lo em conformidade com o SRP – Single Responsibility Principle (Princípio da Responsabilidade Única) do S.O.L.I.D.

O Single Responsibility Principle (SRP) é o primeiro princípio do acrônimo S.O.L.I.D. e estabelece uma diretriz fundamental para a organização de código voltado à orientação a objetos. O conceito central reside na ideia de que uma classe deve ter uma, e apenas uma, razão para mudar.

Sobre a coesão (Clean Code):
  A coesão é uma métrica para avaliar se os elementos de uma classe estão intimamente relacionados. Segundo princípios de Clean Code, uma classe é considerada coesa quando utiliza seus atributos dentro de seus métodos.

    - Método Coeso: Utiliza os atributos da classe para realizar sua operação.

    - Método Não Coeso: Não utiliza nenhum atributo da classe, funcionando de forma isolada (poderia ser uma função ou pertencer a outra classe).

O "main" ou "index" normalmente representa a camada "suja" ou de entrada do sistema. É neste local que ocorre a:

  1. Instanciação de todas as classes.
  2. Injeção de dependências (ex: passar o `ShoppingCart`, `Messaging` e `Persistency` para dentro da classe `Order`).
  3. Execução do fluxo principal do programa.

! Nesta aula, resolvemos o problema de Single Responsability Principle (SRP). Contudo, quebramos o Depedency Invercion Principle (DIP), pois algumas de nossas classes (ex: Order) dependem de classes concretas ao invés de interfaces ou classes abstratas, o que cria um acoplamento rígido, dificultando a criação de testes unitários com classes mockadas.

* A aplicação do SRP resulta em um aumento no número de arquivos e classes, porém proporciona um código mais modular, fácil de manter e com responsabilidades claramente delimitadas.
*/

import { Messaging } from './services/messaging.js';
import { Order } from './entities/order.js';
import { Persistency } from './services/persistency.js';
import { Product } from './entities/product.js';
import { ShoppingCart } from './entities/shopping-cart.js';

//* --- Teste do Carrinho de Compras ---

// Instanciações e injeção de depedências
const shoppingCart = new ShoppingCart();
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
console.log(order.orderStatus);
order.checkOut();
console.log(order.orderStatus);
