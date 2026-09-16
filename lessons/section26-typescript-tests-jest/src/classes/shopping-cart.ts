/*
Sobre a coesão (Clean Code):
  A coesão é uma métrica para avaliar se os elementos de uma classe estão intimamente relacionados. Segundo princípios de Clean Code, uma classe é considerada coesa quando utiliza seus atributos dentro de seus métodos.

    - Método Coeso: Utiliza os atributos da classe para realizar sua operação.
    - Método Não Coeso: Não utiliza nenhum atributo da classe, funcionando de forma isolada (poderia ser uma função ou pertencer a outra classe).
*/

// Usar `import type` é necessário, pois a opção "texttimModuleSyntax" está ativa no tsconfig.json
// Interfaces (dependências abstratas)
import type { CartItem } from '../interfaces/cart-item.js';
import type { ShoppingCartProtocol } from '../interfaces/shopping-cart-protocol.js';
import type { Discount } from './discount.js'; // Classe abstrata (também considerada um protocolo)

/*
Shopping Cart -> Agora está coesa

* Classificação: ShoppingCart é de alto nível quando comparada com `Discount`, mas é de baixo nível quando comparada com `Order`

Fizemos com que a Classe Concreta dependa de uma abstrações (`ShoppingCartProtocol` e `Discount`)
*/
export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  // Injeção de depedência
  constructor(private readonly discountStrategy: Discount) { }

  // Método coeso -> usa `_items`
  get items(): ReadonlyArray<CartItem> { return this._items; }
  /*
  get items(): ReadonlyArray<CartItem> { return Object.freeze([...this._items]); }
    ? Poderia ser feito dessa forma para manter a segurança em runtime também
  */

  // Método coeso -> usa `_items`
  addItem(item: CartItem): void {
    this._items.push(item);
  }

  // Método coeso -> usa `_items`
  // Remove um item na posição informada
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  // Método coeso -> usa `_items`
  total(): number {
    return +this._items.reduce((acc, value) => acc + value.price, 0).toFixed(2);
  }

  /*
    Comportamento esperado -> Rebemos um desconto do tipo "Discount" e usamos o seu métoodo é confiamos que receberemos um valor númerico processado.

    Se sentíssemos a necessidade de realizar alguma chegagem de tipo (type guards) no método "calculate()", o princípio LSP foi violado.
  */
  totalWithDiscount(): number {
    return this.discountStrategy.calculate(this.total());
  }

  /*
    Isso é uma validação (`isEmpty()`). Normalmente, é considerado um caso a parte, mas como só temos uma validação nessa classe, podemos manter ela aqui por enquanto

    Se voltarmos nessa classe para adicionar uma segunda ou uma terceira vez para adicionar uma validação, o ideal seria movê-las para um novo arquivo / classe

    Mas ainda assim, é um método coeso -> depende de `_items`
  */
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  // Método coeso -> usa `_items`
  clear(): void {
    console.log('Carrinho de compras foi limpo!');
    this._items.length = 0;
  }
}
