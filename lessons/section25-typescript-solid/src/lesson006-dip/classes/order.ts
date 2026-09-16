/*
Essa classe é responsável por gerenciar os status dos pedidos, valida se o carrinho está vazio e coordena o checkout, delegando ações para `Messaging` e `Persistency`. Logo, ela precisa rebecer um Carrinho para ter acesso aos seus dados.

Essa classe, agora, passa a ser mais "coesa".

A coesão é uma métrica para avaliar se os elementos de uma classe estão intimamente relacionados. Segundo princípios de Clean Code, uma classe é considerada coesa quando utiliza seus atributos dentro de seus métodos.
*/

// Dependências abstratas (interfaces)
import type { CustomerOrderProtocol } from '../interfaces/customer-protocol.js';
import type { MessagingProtocol } from '../interfaces/messaging-protocol.js';
import type { OrderStatus } from '../interfaces/order-status.js';
import type { PersistencyProtocol } from '../interfaces/persitency-protocol.js';
import type { ShoppingCartProtocol } from '../interfaces/shopping-cart-protocol.js';

// Dependências concretas antigas (acoplamento rígido)
//// import type { Messaging } from '../services/messaging.js';
//// import type { ShoppingCart } from './shopping-cart.js';
//// import type { Persistency } from '../services/persistency.js';

/*
* Classificação: A Classe Order é de alto nível quando comparada com `ShoppingCart` (não sabe como realizar as tarefas do carrinho), com `Messagin` e assim por diante.
*/
export class Order {
  /*
    Para poder ter acesso à dados do carrinho, precisamos realizar a injeção de dependência através do construtor.

    Classse já não depende mais de classe concretase e não possui acoplamento rígido
    // Com isso, quebramos o Dependency Inversion Principle (DIP) -> vamos ver como lidar com esse problema em outra aula.

    Fazemos com que a Classe dependa também de abtrações
  */

  // Injeção de depedências
  constructor(
    private readonly cart: ShoppingCartProtocol, // Depende de uma interface (abstração -> DIP)
    private readonly messaging: MessagingProtocol, // Depende de uma interface (abstração -> DIP)
    private readonly persistency: PersistencyProtocol, // Depende de uma interface (abstração -> DIP)
    private readonly customer: CustomerOrderProtocol, // Depende de uma interface (abstração -> DIP)
  ) { }

  // Atributo coeso
  private _orderStatus: OrderStatus = 'open';

  // Método coeso
  get orderStatus(): OrderStatus { return this._orderStatus; }

  // Finaliza o carrinho de compras e usa o carrinho recebido no construtor
  checkOut(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'closed';

    // Delegação de funções / serviços para as Classes especializadas
    this.messaging.sendMessage(`Seu pedido com o total de ${this.cart.totalWithDiscount()} foi recebido!`);
    this.persistency.saveOrder();
    this.cart.clear();

    // Polimorfismo (sem necessidade de checagens extras)
    console.log(`O cliente é: ${this.customer.getName()} ${this.customer.getIDN()}`);
  }
}
