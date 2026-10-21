/*
A classe `MyDataStructure` encapsula o armazenamento de dados e delega a responsabilidade de iteração ao objeto Iterador configurado.
*/

import { MydefaultIterator } from './my-default-iterator';
import type { MyIteratorProtocol } from './my-iterator-protocol';

// Simula uma estrutura de dados
export class MyDataStructure {
  private _items: string[] = [];
  private iterator: MyIteratorProtocol<string> = new MydefaultIterator(this); // Começa com o iterador padrão

  addItem(...items: string[]): void {
    items.forEach(item => this.items.push(item));
  }

  get items(): string[] {
    return this._items;
  }

  size(): number {
    return this.items.length;
  }

  changeIterator(iterator: MyIteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  [Symbol.iterator](): MyIteratorProtocol<string> {
    // Se quisermos evitar o esgotamento:
    // this.iterator.reset();

    return this.iterator;
  }

  resetIterator(): void {
    this.iterator.reset();
  }
}
