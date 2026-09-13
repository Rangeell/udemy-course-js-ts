/*
Módulo onde vamos agrupar todos os nossos descontos (família de algoritmos encapsulados que vão ser injetados na classe principal [ShoppingCart])
*/

// Classe abstrata (contrato) para todos os descontos (subclasses concretas)
export abstract class Discount {

  // Método abstrato (sem corpo) -> serve como "contrato" para as subclasses concretas que herdarem Discount
  abstract calculate(price: number): number
}

// Subclasse concreta, obrigada a implementar o método calculate
export class FifityPercentDiscount extends Discount {
  private readonly discount = 0.5;

  // Polimorfismo -> executa o método de forma específica
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.1;

  // Polimorfismo -> executa o método de forma específica
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

// Estratégia para quando não há desconto
export class NoDiscount extends Discount {

  // Polimorfismo -> executa o método de forma específica
  calculate(price: number): number {
    return price; // Retorna o preço original sem modificações
  }
}
