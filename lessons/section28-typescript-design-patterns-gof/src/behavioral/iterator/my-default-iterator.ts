/*
Implementa a travessia sequencial direta (do primeiro ao último elemento adicionado).

- Mecânica da Lógica Direta:
  - O ponteiro `index` inicia zerado (`0`).
  - `next()` obtém o valor da coleção na posição `index`.
  - A verificação de esgotamento avalia se `index >= dataStructure.size`.
  - Incrementa `this.index++` preparando a próxima chamada e retorna o resultado.
*/

import type { MyDataStructure } from './my-data-structure';
import type { MyIteratorProtocol } from './my-iterator-protocol';

export class MydefaultIterator implements MyIteratorProtocol<string> {
  private index = 0;

  constructor(private readonly dataStructure: MyDataStructure) { }

  // Lazy Evaluation
  next(): IteratorResult<string> {
    const totalItems = this.dataStructure.size();
    const isDone = this.index >= totalItems;
    const value = !isDone ? this.dataStructure.items[this.index] : undefined;

    this.index++;

    return {
      value: value as string,
      done: isDone,
    };
  }

  reset(): void {
    this.index = 0;
  }
}
