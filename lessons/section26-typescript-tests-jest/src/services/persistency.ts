/*
Classe responsável por salvar os dados do pedido no sistema.

* Classificação: Classe Concreta de alto nível quando comparada com `PersistencyProtocol`
Depende de uma abstração (interface -> baixo nível)
*/

import type { PersistencyProtocol } from '../interfaces/persitency-protocol.js';

// Classe Concreta que depende de uma abstação (DIP)
export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }
}
