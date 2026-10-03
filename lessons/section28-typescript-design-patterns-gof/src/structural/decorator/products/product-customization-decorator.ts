/*
Os decoradores concretos estendem a classe `ProductDecorator` para modificar ou incrementar o comportamento do produto envelopado. Cada decorador concreto intercepta as chamadas aos métodos `getPrice()` e `getName()`, adiciona sua regra de negócio específica e combina o resultado com o retorno fornecido pelo objeto interno.

O decorador `ProductCustomizationDecorator` representa um processo de personalização mais complexo, adicionando um custo maior e uma nova especificação ao produto.
*/

import { ProductDecorator } from './product-decorator';

export class ProductCustomizationDecorator extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 50;
  }

  getName(): string {
    return `${this.product.getName()} (Customizada)`;
  }
}
