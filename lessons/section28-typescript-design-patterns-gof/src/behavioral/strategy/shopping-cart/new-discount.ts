/*
Herda de `DiscountStrategy` e encapsula a nova regra promocional de teste (5% de desconto para compras \ge R$ 150,00).
*/

import { DiscountStrategy } from './discount-strategy';
import type { ECommerceShoppingCart } from './e-commerce-shopping-cart';

export class NewDiscount extends DiscountStrategy {
  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 150) {
      this.discount = 5;
    }

    return total - total * (this.discount / 100);
  }
}
