/*
Módulo responsável por reduzir a redundância (DRY) para as classes "Leaves" (folhas), centralizando os atributos de nome e preço das refeições.
*/

import type { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export abstract class AbstractMeal implements MealCompositeProtocol {
  constructor(private name: string, private price: number) { }

  getPrice(): number {
    return this.price;
  }
}
