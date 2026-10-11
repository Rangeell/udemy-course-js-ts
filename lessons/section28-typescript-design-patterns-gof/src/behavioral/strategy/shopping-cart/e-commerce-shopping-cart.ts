import { DiscountStrategy } from './discount-strategy';
import type { ECommerceProductProtocol } from './e-commerce-product-protocol';

/*
A classe `ECommerceShoppingCart` assume o papel de Contexto. Ela é totalmente desonerada da responsabilidade de calcular percentuais de desconto ou checar faixas de preço, delegando essa tarefa exclusivamente à estratégia configurada em runtime.

- Atributos Privados:
    - `products: ECommerceProductProtocol[]`: Array interno contendo a lista de produtos.

    - `_discountStrategy: DiscountStrategy`: Referência para a estratégia de desconto atualmente ativa.

    - Manipulação Idiomática do Array: O método `addProduct(...products: ECommerceProductProtocol[])` utiliza o operador spread (`this.products.push(...products)`), fornecendo uma inserção limpa de múltiplos elementos sem a necessidade de iterações manuais como `forEach`.

    - Cálculo do Subtotal Bruto: O método `getTotal()` processa o valor acumulado dos itens via reduce.

    - Cálculo Com Desconto: O método `getTotalWithDiscount()` delega a chamada para a estratégia injetada: `this._discountStrategy.getDiscount(this)`.
*/
export class ECommerceShoppingCart {
  private products: ECommerceProductProtocol[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach(produtct => this.products.push(produtct));
  }

  getProducts(): ECommerceProductProtocol[] {
    return this.products;
  }

  // Processa o valor acumulado dos itens
  getTotal(): number {
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }

  // Delega a chamada para a estratégia injetada
  getTotalWithDiscount(): number {
    // this é o atual carrinho de compras instanciado
    return this._discountStrategy.getDiscount(this);
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}
