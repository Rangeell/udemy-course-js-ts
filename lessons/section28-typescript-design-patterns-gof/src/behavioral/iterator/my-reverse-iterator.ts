/*
Implementa a travessia em ordem inversa (do último elemento inserido até o primeiro).
*/

import type { MyIteratorProtocol } from './my-iterator-protocol';
import { MyDataStructure } from './my-data-structure';

export class MyReverseIterator implements MyIteratorProtocol<string> {
  private index: number;

  constructor(private readonly dataStructure: MyDataStructure) {
    this.index = this.dataStructure.size() - 1; // Começa pelo último elemento
  }

  next(): IteratorResult<string> {
    const isDone = this.index < 0;
    const value = !isDone ? this.dataStructure.items[this.index] : undefined;

    this.index--;

    return { value: value as string, done: isDone };
  }

  reset(): void {
    this.index = this.dataStructure.size() - 1;
  }
}
