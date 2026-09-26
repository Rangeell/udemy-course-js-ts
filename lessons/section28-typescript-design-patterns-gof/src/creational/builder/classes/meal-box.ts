/*
Módulo que representa uma caixa de refeições (do entregador) -> Classe composta.

Basicamente, um contêiner que armazena `_children` (um array de objetos que seguem o protocolo). O método `add()` utiliza o Rest Operator (...) para permitir a inclusão de múltiplos itens de uma só vez.
*/

import type { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  private readonly children: MealCompositeProtocol[] = [];

  getPrice(): number {
    return this.children.reduce((acc, meal) => acc + meal.getPrice(), 0);
  }

  add(...meals: MealCompositeProtocol[]): void {
    meals.forEach((meal) => this.children.push(meal));
  }
}
