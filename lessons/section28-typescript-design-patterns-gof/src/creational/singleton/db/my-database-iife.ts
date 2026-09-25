/*
Esse módulo foi usado para representar o padrão de projeto Singleton na através de IIFE e Closure.

Uma alternativa poderosa que utiliza closures para emular atributos privados, sem depender de classes.

A IIFE (Immediately Invoked Function Expression) executa imediatamente e retorna o objeto de acesso. A lista `users` permanece inacessível externamente, protegida pelo escopo léxico da função.
*/

import type { User } from '../interfaces/user';

// Exportando uma função que se auto executa e retorna o objeto da base de dados
export const MyDataBaseIIFE = (() => {
  // Variável privada -> aproveitamos o closure da função
  const users: User[] = [];

  return {
    add(user: User): void {
      users.push(user);
    },

    remove(index: number): void {
      users.splice(index, 1);
    },

    show(): void {
      for (const user of users) {
        console.log(user);
      }
    },
  };
})();
