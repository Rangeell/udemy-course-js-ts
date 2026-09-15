/*
Nesta aula é apresentado o DIP – Dependency Inversion Principle (Princípio da Inversão de Dependência), a última letra ("D") do acrônimo S.O.L.I.D.

O princípio é regido por três diretrizes essenciais:
  1. Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
  2. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
  3. Dependa de abstrações e não de implementações concretas. O código deve sempre referenciar interfaces, protocolos ou classes abstratas.

Alto nível: Interfaces, Types, Classes Abstratas e Protocolos em geral -> Define o "que" deve ser feito. Consome serviços e estabelece contratos de negócio (os detalhes).

Baixo nível: Classes Concretas que gerenciam as Classes de baixo nível -> Define o "como" as tarefas são realizadas. Executa detalhes técnicos e tarefas específicas.

Quanto mais abstrato, mais alto é o nível na hierarquia de arquitetura.

? Exemplos:
  - Interfaces: são extremamente de alto nível, pois uma interface "não faz nada", ela simplesmente diz o que outras Classes devem fazer (não faz nada por si só).

  Classes: Classes que implementam métodos, executam tarefas ou lidam com detalhes de infraestrutura são de extremo baixo nível (são também chamadas de Classes Concretas).

É crucial compreender que um módulo pode mudar de papel dependendo do contexto (referência).

?Por que invertem a dependência?
  - Reduz o alto acoplamento rígido entre classes concretas.
  - Facilita a manutenção, extensibilidade e a criação de Mock / Stubs em Testes Unitários.

Nesta aula criamos abstrações para todas as Classes Concretas que estavam dependendo de outras Classes Concretas e abstrações para essas últimas também.
*/

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Messaging } from './services/messaging.js';
import { Order } from './classes/order.js';
import { Persistency } from './services/persistency.js';
import { Product } from './classes/product.js';
import { ShoppingCart } from './classes/shopping-cart.js';
import { FifityPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/discount.js';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer.js';
import type { MessagingProtocol } from './interfaces/messaging-protocol.js';

//* --- Teste do Carrinho de Compras ---

// Instanciações e injeção de depedências
const fifityPercentDiscount = new FifityPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(fifityPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const individualCustomer = new IndividualCustomer('Breno', 'Rangel', '123.456.789-10');
const enterpriseCustomer = new EnterpriseCustomer('Empresa', '22222222222');

/*
Teste sem depender de uma Classe real e sim de uma Classe que "finge" ser a Classe original para apenas simular o sucesso da operação.

Com isso temos alguns benefícios:
  - Ignorância do Alto Nível: A classe `Order` consome o Mock sem qualquer alteração em seu código-fonte. Contanto que o argumento passado obedeça ao protocolo, a Classe será usada normalmente.

  - Conexão com o Open/Closed Principle (OCP): O DIP atua como um facilitador para o OCP. Conseguimos alterar o comportamento do sistema (trocar envio real por simulação) sem modificar o código interno de `Order`, apenas injetando uma implementação diferente da abstração.
*/

class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('A mensagem foi enviada pelo MOCK!');
  }
}

const messaginMock = new MessagingMock();

// Independente do customer que chegar aqui, os dados serão processados de forma polimórfica
const order = new Order(shoppingCart, messaginMock, persistency, enterpriseCustomer);

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
