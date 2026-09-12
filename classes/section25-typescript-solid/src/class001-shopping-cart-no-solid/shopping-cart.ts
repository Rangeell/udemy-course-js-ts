/*
Nesta aula, iniciamos a implementação de um sistema de carrinho de compras adotando uma abordagem propositalmente "ingênua" (sem aplciar princípios de design, como o S.O.L.I.D.). O objetivo é demonstrar como o software nasce na vida real antes de ser lapidado por padrões arquiteturais.

Resumindo, vamos primeiro fazer o código funcionar para, em seguida, refatorá-lo aplicando os princípios de boas práticas (a começar pelo Princípio da Responsabilidade Única - SRP).

A filosofia aplicada aqui foca na produtividade inicial para evitar a "paralisia por análise". Muitas vezes, tentar aplicar todos os princípios SOLID e Design Patterns desde a primeira linha de código pode dificultar a conclusão da lógica de negócio.
*/

//* O objeto é criar um carrinho de compras

// Contratos & Types
interface CartItem { // Contrato para os nossos produtos (itens do carrinho)
  name: string;
  price: number;
}

type OrderStatus = 'open' | 'closed'

// Shopping Cart
export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  get orderStatus(): OrderStatus { return this._orderStatus; }
  get items(): ReadonlyArray<CartItem> { return this._items; }
  /*
  get items(): ReadonlyArray<CartItem> { return Object.freeze([...this._items]); }
    ? Poderia ser feito dessa forma para manter a segurança em runtime também
  */

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  // Remove um item na posição informada
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items.reduce((acc, value) => acc + value.price, 0).toFixed(2);
  }

  // Finaliza o carrinho de compras
  checkOut(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com o total de ${this.total()} foi recebido!`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(`Mensagem enviada: ${msg}`);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo!');
    this._items.length = 0;
  }
}

//* --- Teste do Carrinho de Compras ---

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'Caderno', price: 9.9 });
shoppingCart.addItem({ name: 'Lápis', price: 1.59 });

//! shoppingCart.items[0] = { name: 'Maria', price: 30 }; Erro em tempo de compilação (ReadOnly)
// shoppingCart.clear();
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkOut();
console.log(shoppingCart.orderStatus);
