/*
Visitantes Concretos (`BrazilTaxVisitor` e `USTaxVisitor`): Implementam a interface do visitante isolando as alíquotas fiscais de cada país:
  - Brasil (`BrazilTaxVisitor`): Food (5%), `AlcoholicDrink` (50%), `Cigarette` (150%).
  - EUA (`USTaxVisitor`): Food (15%), `AlcoholicDrink` (100%), `Cigarette` (200%).
*/

import type { AlcoholicDrink } from './alcoholic-drink';
import type { Cigarette } from './cigarette';
import type { Food } from './food';
import type { TaxVisitorProtocol } from './tax-visitor-protocol';

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.05; // Taxa de 5%
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 1.5; // Taxa de 150%
  }

  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.5; // Taxa de 50%
  }
}
