/*
A classe `DeliveryFactory` desempenha o papel de FlyweightFactory no GoF. Sua responsabilidade exclusiva é gerenciar o ciclo de vida e a integridade do pool de instâncias compartilhadas.

Se um objeto Flyweight já tiver sido criado, nós não vamos recriá-lo, e sim entregar o endereço que já foi criado anteriormente. Se ele não foi criado, nós o criamos com os dados recebidos na classe.

Funcionamento Interno e Algoritmos:

  1. Pool de Armazenamento (`locations`): Atributo privado `private locations: DeliveryLocationDictionary = {}` mantido como um dicionário em memória.

  2. Algoritmo de Hash/ID (`createId`): O método privado `createId(data: DeliveryLocationData)` normaliza os valores do estado intrínseco, utilizando a expressão regular `/\s+/g` para eliminar espaços em branco duplicados e unir as strings em caixa padronizada (ex.: `"Avenida Brasil", "SP"` torna-se `"avenidabrasil_sp"`).

  3. Gerenciamento de Instanciação (`makeLocation`):
      - Gera a chave única via `createId`.
      - Realiza a busca no pool com o operador `key in this.locations`.
      - Se a chave existir, retorna imediatamente a referência existente no dicionário (evitando nova alocação no heap).
      - Se não existir, instancia um novo `DeliveryLocation`, armazena-o no dicionário e retorna sua referência.

  4. Mapeamento de Memória e Garbage Collection (GC): Como o dicionário `locations` mantém uma referência forte para cada objeto `DeliveryLocation` criado, essas instâncias nunca serão coletadas pelo Garbage Collector enquanto a fábrica existir na memória. Em cenários com milhões de chaves dinâmicas, essa característica exige estratégias de descarte ou o uso de mapas fracos (`WeakRef` / politicas de despejo LRU).
*/

import type { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocation } from './delivery-location';
import type { DeliveryLocationData, DeliveryLocationDictionary } from './delivery-types';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  // Cria a chave ID com base no objeto recebido
  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map(item => item.replace(/\s+/g, '').toLowerCase()) // Remove espaços e deixa minúsculo
      .join('_'); // Separa o array que retorna do map por "_" (exemplo: rua_sp), convertendo em string
  }

  // Factory Method (Creational Design Pattern - GoF)
  makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
    const key = this.createId(intrinsicState); // Cria a chave do objeto que queremos obter

    // Se já existir dentro do nosso diciário, retorna o objeto dinâmicamente. OBS: Poderíamos ter usado Object.hasOwn() ao invés do operador `in` também.
    if (key in this.locations) return this.locations[key] as DeliveryFlyweight;  // Bracket Notation

    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
