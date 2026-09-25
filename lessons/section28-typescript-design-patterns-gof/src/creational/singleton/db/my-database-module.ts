/*
Esse módulo foi usado para representar o padrão de projeto Singleton na através do sistema de módulos nativo da linguagem.

No desenvolvimento moderno com JavaScript e TypeScript, o sistema de módulos (ESM ou CommonJS) já implementa um Singleton natural através do cache de importações.

Vantagem: O módulo é avaliado apenas uma vez na primeira importação. Qualquer importação subsequente recebe o mesmo objeto exportado, tornando esta a abordagem mais concisa e pragmática em Node.js.
*/

import type { User } from '../interfaces/user';

// Variável privado (sem export) -> só podemos manipular dentro do módulo
const users: User[] = [];

// Exportando objeto literal
export const MyDataBaseModule = {
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
