/*
Módulo responsável por representar a refeição padrão vegana, definindo preços fixos conforme o domínio.

Os Builders concretos encapsulam as "receitas" e as variações de negócio, protegendo o código cliente de mudanças nas regras de precificação ou composição.

A Importância do `reset()`: Este método é crucial para garantir que a instância do Builder possa ser reutilizada. Ele limpa o estado interno (`meal`), evitando que resíduos de um pedido anterior contaminem a nova construção.
*/

import type { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';

import { MealBox } from './meal-box';
import { Bean, Rice } from './meals';

// Builder Vegano (Exemplo de ISP/OCP)
export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  // Monta uma refeição vegana padrão
  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const bean = new Bean('Feijão', 10);
    this._meal.add(rice, bean);

    return this; // Permite method chaining
  }

  // Método que retorna o caixa de refeição montada (seria o método `result` do Builder)
  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
