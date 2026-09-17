/*
Classe responsável por salvar os dados do pedido no sistema.

Classificação: Classe Concreta de alto nível quando comparada com `PersistencyProtocol`
Depende de uma abstração (interface -> baixo nível)

Nossa Classe está dependendo de algo concreto, o objeto global `console`, resultando em um acoplamento forte.

Sob a óptica do SOLID (especificamente o Dependency Inversion Principle [DIP]), a classe deveria receber uma abstração de "logger" injetada, em vez de depender de uma implementação concreta e global. Essa dependência direta dificulta o isolamento e a substituição do comportamento em diferentes ambientes.
*/

import type { PersistencyProtocol } from '../interfaces/persitency-protocol.js';

// Classe Concreta que depende de uma abstação (DIP)
export class Persistency implements PersistencyProtocol {
  // Vamos testar o método e seu retorno (undefined)
  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }
}
