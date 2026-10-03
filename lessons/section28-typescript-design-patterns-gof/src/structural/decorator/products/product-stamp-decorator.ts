/*
Os decoradores concretos estendem a classe `ProductDecorator` para modificar ou incrementar o comportamento do produto envelopado. Cada decorador concreto intercepta as chamadas aos métodos `getPrice()` e `getName()`, adiciona sua regra de negócio específica e combina o resultado com o retorno fornecido pelo objeto interno.

O decorador `ProductStampDecorator` é responsável por adicionar uma estampa ao produto, o que afeta tanto o seu preço final quanto o seu nome descritivo.
*/

import { ProductDecorator } from './product-decorator';

export class ProductStampDecorator extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 10; // Polymorphism -> Method Overriding
  }

  getName(): string {
    return `${this.product.getName()} (Estampada)`; // Polymorphism -> Method Overriding
  }
}
