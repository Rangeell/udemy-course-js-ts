/*
A criação da classe `BuilderFacade` em `src/facade/builder-facade.ts` simplifica completamente a interação. A fachada importa as classes necessárias a partir do módulo barrel (`src/creational/builder`), gerencia as instâncias internamente e disponibiliza métodos expressivos e declarativos (`makeMeal1()`, `makeMeal2()`, `makeMeal3()`).
*/

import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder';

// Fachada para o builder que fizemos em src/creational/builder/index.ts
export class BuilderFacade {
  private mainDishBuilder = new MainDishBuilder;
  private veganDishBuilder = new VeganDishBuilder;

  makeMean1(): void {
    this.mainDishBuilder.makeMeal();

    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
  }

  makeMean2(): void {
    this.mainDishBuilder.reset();

    const meal2 = this.mainDishBuilder.makeBeverage().getMeal();
    console.log(meal2);
  }

  makeMean3(): void {
    const veganMeal = this.veganDishBuilder.makeMeal().getMeal();

    console.log(veganMeal);
    console.log(veganMeal.getPrice());
  }
}
