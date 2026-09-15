/*
Módulo onde vamos agrupar todos os nossos descontos (família de algoritmos encapsulados que vão ser injetados na classe principal [ShoppingCart]).

Herança: Relação "É um".
*/

/*
Classe abstrata (contrato) para todos os descontos (subclasses concretas)

* Classificação: Baixo nível quando comparada com `ShoppingCart`
*/
export abstract class Discount {
  protected discount = 0; // Atributo que vai ser sobrescrito nas demais subclasses

  // Método concreto (comum em todas as subclasses)
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FifityPercentDiscount extends Discount {
  protected discount = 0.5; // Property Overriding
}

export class TenPercentDiscount extends Discount {
  protected discount = 0.1; // Proper Overriding
}

// Estratégia para quando não há desconto (a superclasse base já supre a necessidade, portanto, não há implementações extras para essa subclasse)
export class NoDiscount extends Discount { }
