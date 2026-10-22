/*
Nesta aula com abordagem prática e teórica combinada, exploramos o padrão de projeto Visitor (Visitante), pertencente à categoria dos Padrões Comportamentais

O domínio de negócios compreende o motor de vendas de uma rede de lojas de conveniência. Em sistemas comerciais, o cálculo de tributação sobre mercadorias é uma das áreas de maior volatilidade funcional. Mudanças em legislações estaduais e federais exigem alterações frequentes nas regras fiscais, demandando uma arquitetura em que a adição de novas regras não colida com as entidades estáveis de domínio.

Os requisitos do sistema exigem a categorização dos produtos comercializados em três tipos estruturais:
  1. Alimentos (`Food`): Itens de necessidade básica, sujeitos a alíquotas tributárias reduzidas.
  2. Cigarros (`Cigarette`): Produtos com alta incidência de impostos regulatórios (extra-fiscais).
  3. Bebidas Alcoólicas (`AlcoholicDrink`): Mercadorias sujeitas a tributação elevada e altamente variável conforme a jurisdição..
*/

import { AlcoholicDrink } from './convenience-store/alcoholic-drink';
import { BrazilTaxVisitor } from './convenience-store/brazil-tax-visitor';
import { Cigarette } from './convenience-store/cigarette';
import { Food } from './convenience-store/food';
import { USTaxVisitor } from './convenience-store/us-tax-visitor';
import type { VisitableProduct } from './convenience-store/visitable-product';

// Instanciação de produtos com seus respectivos preços base
const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

// Simulando um carrinho de compras com um array tipado
const cart: VisitableProduct[] = [food, cigarette, alcoholicDrink];

// 1. Cálculo do valor total bruto sem incidência de impostos
const total = cart.reduce((acc, item) => item.getPrice() + acc, 0);
console.log(total); // 20

// 2. Cálculo do valor total do carrinho aplicado ao regime tributário do Brasil
const totalWithTaxesBrazil = cart.reduce((acc, item) => item.getPriceWithTaxes(brazilTaxVisitor) + acc, 0);
console.log(totalWithTaxesBrazil); // 30.5

// 3. Cálculo do valor total do carrinho aplicado ao regime tributário dos EUA
const totalWithTaxesUS = cart.reduce((acc, item) => item.getPriceWithTaxes(usTaxVisitor) + acc, 0);
console.log(totalWithTaxesUS); // 36.5
