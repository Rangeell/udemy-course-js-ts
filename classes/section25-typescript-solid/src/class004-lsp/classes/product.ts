/*
Essa classe representa a entidade básica de um produto com nome e preço.

Nesta caso, como já temos um "type" para produtos, essa classe já segue o Dependency Invercion Principle (DIP), uma vez que a mesma depende de uma abstração
*/

import type { CartItem } from '../interfaces/cart-item.js'; // Nossa abstração

export class Product implements CartItem {
  constructor(
    public readonly name: string,
    public readonly price: number,
  ) { }
}
