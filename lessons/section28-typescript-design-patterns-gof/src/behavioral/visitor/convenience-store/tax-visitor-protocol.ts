/*
Interface que estabelece o contrato de operações de visita para cada elemento concreto. A interface exige assinaturas explícitas para cada classe de produto.

Criamos um método para visitar cada tipo de produto (classes concretas a serem visitadas).
*/

import type { AlcoholicDrink } from './alcoholic-drink';
import type { Cigarette } from './cigarette';
import type { Food } from './food';

// Contrato para os objetos que possuem a capacidade de visitar qualquer uma de nossas categorias de produtos
export interface TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number
  calculateTaxesForCigarette(cigarette: Cigarette): number
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number
}
