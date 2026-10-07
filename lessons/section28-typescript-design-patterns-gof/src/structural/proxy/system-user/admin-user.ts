/*
Na arquitetura do padrão GoF, o `RealSubject` representa o componente funcional autêntico que executa as operações de negócio e detém o acesso direto aos recursos do sistema ou ao armazenamento persistente. No contexto da aula, a classe `AdminUser` foi escolhida para representar concretamente um usuário do sistema com privilégios administrativos cujas consultas ao banco de dados exigem alto custo computacional.

O método `getAddresses()` encapsula a latência deliberada para simular o tempo de resposta de uma consulta ao banco de dados. O atraso de 2000ms é introduzido através de uma `Promise` manual com `setTimeout`.
*/

import type { SystemUserAddresseProtocol, SystemUserProtocol } from './system-user-protocol';

// Classe concreta que representa o usuário real - SRP - OCP - DIP
export class AdminUser implements SystemUserProtocol { // POO Realization
  public firstName: string;
  public userName: string;

  // Forma longa do construtor (sem parameter property)
  constructor(firstName: string, userName: string) {
    this.firstName = firstName;
    this.userName = userName;
  }

  // Método assíncrono
  async getAddresses(): Promise<SystemUserAddresseProtocol[]> {
    // Simulando busca de dados de algum lugar
    return new Promise(resolve => {
      return setTimeout(() => {
        return resolve([
          { street: 'Av. Brasil', number: 50 },
          { street: 'Rua A.', number: 40 },
        ]);
      }, 2000);
    });
  }
}
