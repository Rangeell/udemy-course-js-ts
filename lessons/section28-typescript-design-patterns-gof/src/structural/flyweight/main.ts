/*
O padrão Flyweight separa o estado do objeto para otimizar o uso da memória RAM:

  1. Estado Intrínseco (Intrinsic State): Não muda conforme o contexto. É imutável, compartilhado e encapsulado dentro do próprio Flyweight (ex.: Rua, Bairro, Cidade, CEP).
  2. Estado Extrínseco (Extrinsic State): Varia conforme o contexto. É passado como argumento para os métodos do Flyweight na hora da execução (ex.: Nome do cliente, Número da casa, Complemento).

O objetivo central desta aula é a implementação prática e completa do padrão de projeto estrutural Flyweight em TypeScript, resolvendo um problema real de escassez e estouro de memória RAM ao manipular um volume massivo de objetos em aplicações de alta escala.
*/

import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();

// 15 entregas, mas apenas 3 endereços registrado (instâncias concretas)
deliveryContext(factory, 'Breno', '20A', 'Av. Brasil', 'SP'); // Cria instância concreta
deliveryContext(factory, 'Helena', '20A', 'Av. Brasil', 'SP'); // Não cria nova instância concreta
deliveryContext(factory, 'Joana', '502', 'Av. Brasil', 'SP'); // Não cria nova instância concreta
deliveryContext(factory, 'Joana', '502', 'Rua A', 'BH'); // Cria nova instância, pois estado intrínseco mudou
deliveryContext(factory, 'João', '501', 'Rua B', 'RJ'); // Cria nova instância, pois estado intrínseco mudou
deliveryContext(factory, 'Breno', '20A', 'Av. Brasil', 'SP'); // Não cria nova instância concreta
deliveryContext(factory, 'Helena', '20A', 'Av. Brasil', 'SP'); // Não cria nova instância concreta
deliveryContext(factory, 'Joana', '502', 'Av. Brasil', 'SP'); // Não cria nova instância concreta
deliveryContext(factory, 'Joana', '502', 'Rua A', 'BH'); // Não cria nova instância concreta
deliveryContext(factory, 'João', '501', 'Rua B', 'RJ'); // Não cria nova instância concreta
deliveryContext(factory, 'Breno', '20A', 'Av. Brasil', 'SP'); // Não cria nova instância concreta
deliveryContext(factory, 'Helena', '20A', 'Av. Brasil', 'SP'); // Não cria nova instância concreta
deliveryContext(factory, 'Joana', '502', 'Av. Brasil', 'SP'); // Não cria nova instância concreta
deliveryContext(factory, 'Joana', '502', 'Rua A', 'BH'); // Não cria nova instância concreta
deliveryContext(factory, 'João', '501', 'Rua B', 'RJ'); // Não cria nova instância concreta

console.log();

console.log(factory.getLocations());
