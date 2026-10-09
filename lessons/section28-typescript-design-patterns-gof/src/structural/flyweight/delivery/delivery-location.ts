/*
A classe `DeliveryLocation` atua como o ConcreteFlyweight do padrão GoF. Ela armazena o estado intrínseco do endereço de forma definitiva.

Análise dos Componentes:
  1. Atributo Privado `intrinsicState`: Armazena os dados imutáveis da localização. O acesso é restrito ao escopo da classe para evitar vazamento de referências mutáveis.

  2. Garantia de Imutabilidade: O construtor executa `Object.freeze(this.intrinsicState)` garantindo que nem mesmo alterações indiretas via referências externas possam corromper o estado compartilhado entre múltiplos clientes.

  3. Método `delivery`: Combina dinamicamente os dados imutáveis do estado intrínseco interno com os argumentos extrínsecos (`name`, `number`) recebidos na chamada.
*/

import type { DeliveryFlyweight } from './delivery-flyweight';
import type { DeliveryLocationData } from './delivery-types';

export class DeliveryLocation implements DeliveryFlyweight {
  // Estato intrínseco -> deve ser imutável, pois vai ser compartilhado em vários objetos
  constructor(private readonly intrinsicState: DeliveryLocationData) {
    this.intrinsicState = Object.freeze(this.intrinsicState);
  }

  // Estado / argumentos extrínsecos (varia para todos os clientes)
  delivery(name: string, number: string): void {
    console.log(`Entrega para ${name}`);
    console.log(`Em ${this.intrinsicState.street} ${this.intrinsicState.city}`);
    console.log(`Número: ${number}`);
    console.log('###');
  }
}
