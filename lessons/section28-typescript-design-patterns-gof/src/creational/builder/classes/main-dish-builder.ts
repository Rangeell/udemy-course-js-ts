/*
Módulo responsável por representar a refeição padrão, definindo preços fixos conforme o domínio.

Os Builders concretos encapsulam as "receitas" e as variações de negócio, protegendo o código cliente de mudanças nas regras de precificação ou composição.

A Importância do `reset()`: Este método é crucial para garantir que a instância do Builder possa ser reutilizada. Ele limpa o estado interno (`meal`), evitando que resíduos de um pedido anterior contaminem a nova construção.
*/

import type { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';

import { MealBox } from './meal-box';
import { Bean, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  // Monta uma refeição padrão
  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const bean = new Bean('Feijão', 10);
    const meat = new Meat('Carne', 20);
    this._meal.add(rice, bean, meat);

    return this; // Permite method chaining
  }

  makeBeverage(): this {
    const beverage = new Beverage('Bebida', 7);
    this._meal.add(beverage);

    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Sobremesa', 10);
    this._meal.add(dessert);

    return this;
  }

  // Método que retorna o caixa de refeição montada (seria o método `result` do Builder)
  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
