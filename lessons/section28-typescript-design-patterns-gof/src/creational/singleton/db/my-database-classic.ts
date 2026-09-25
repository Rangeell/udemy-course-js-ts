/*
Esse módulo foi usado para representar o padrão de projeto Singleton na sua forma mais clássica de aplicabilidade.

Esta implementação segue o rigor técnico do GoF (Gang of Four). É a abordagem universal para desenvolvedores que vêm de ecossistemas como Java ou C#.
*/

import type { User } from '../interfaces/user';

export class MyDataBaseClassic {
  // Atributo privado -> só podemos manipular dentro da classe
  private static _instace: MyDataBaseClassic | null = null;
  private users: User[] = [];

  // Constructor privado impede instanciação fora da classe
  private constructor() { }

  static get instance() {
    // Se a instância for nula -> instancia o objeto
    if (MyDataBaseClassic._instace === null) {
      MyDataBaseClassic._instace = new MyDataBaseClassic();
    }

    // Sempre retorna a própria instância
    return MyDataBaseClassic._instace;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
