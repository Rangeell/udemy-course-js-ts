/*
Para eliminar o acoplamento rígido das condicionais, encapsula-se o algoritmo de desconto em uma família de algoritmos que herdam de uma classe base comum.

Classe Base da Estratégia:
  - Atributo Protegido (`protected discount: number = 0`): Definido uma única vez na classe base e herdado pelas subclasses para armazenar o percentual de desconto a ser aplicado.

  - Método `getDiscount(cart: ECommerceShoppingCart): number`: Recebe a referência completa da instância do carrinho como argumento. Essa inversão de controle concede à estratégia acesso aos dados do contexto (como `cart.getTotal()`) para avaliar as regras de negócio e aplicar a dedução.

  - Comportamento Neutro (_Fallback_): A classe base retorna o valor bruto total do carrinho sem nenhum abatimento (`cart.getTotal()`), funcionando como uma estratégia neutra padrão caso nenhuma regra promocional específica seja injetada.
*/

import type { ECommerceShoppingCart } from './e-commerce-shopping-cart';

export class DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotal();
  }
}
