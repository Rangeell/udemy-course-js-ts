/*
Módulo rensável por centralizar as classes "Leaves" (folhas) -> Refeições.
*/

import { AbstractMeal } from './abstract-meal'; // Evita repetição de código (DRY) comum à todas as refeições

export class Rice extends AbstractMeal { }
export class Bean extends AbstractMeal { }
export class Meat extends AbstractMeal { }
export class Beverage extends AbstractMeal { }
export class Dessert extends AbstractMeal { }
