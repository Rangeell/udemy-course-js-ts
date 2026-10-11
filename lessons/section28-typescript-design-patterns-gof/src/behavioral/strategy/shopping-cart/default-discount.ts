/*
Herda de `DiscountStrategy` e encapsula a regra de faixas de preço progressivas (10%, 20% e 30%).
*/

import { DiscountStrategy } from './discount-strategy';
import type { ECommerceShoppingCart } from './e-commerce-shopping-cart';

export class DefaultDiscount extends DiscountStrategy {
  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 100 && total < 200) {
      this.discount = 10;
    } else if (total >= 200 && total < 300) {
      this.discount = 20;
    } else if (total > 300) {
      this.discount = 30;
    }

    return total - total * (this.discount / 100);
  }
}
