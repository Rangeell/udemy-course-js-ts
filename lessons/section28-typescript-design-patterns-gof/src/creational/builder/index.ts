/*
Módulo do código cliente

Nesta aula prática, aplicamos o padrão de projeto criacional Builder construindo um sistema de montagem de refeições para um restaurante. Para criar o objeto complexo e demonstrar o valor do padrão, utilizamos também a estrutura de um Composite (padrão estrutural) para representar a caixa de refeições (Meal Box).
*/

import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

/* Objeto complexo de ser criado -> Solução: Builder
const rice = new Rice('Arroz', 5);
const bean = new Bean('Feijão', 10);
const meat = new Meat('Carne', 20);
const mealBox = new MealBox();
mealBox.add(rice, bean, meat);
*/

// Builders
const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();

const meal1 = mainDishBuilder.getMeal();

console.log(meal1);
console.log(meal1.getPrice());

mainDishBuilder.reset(); // Zera os produtos do prato para criar um novo

const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

// Builder para pratos veganos
const vaganDishBuilder = new VeganDishBuilder();
const veganMeal = vaganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
