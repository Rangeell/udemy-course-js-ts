/*
A classe Proxy atua como uma camada de interceptação inteligente que gerencia o estado interno do objeto real e condiciona a delegação das chamadas de método às verificações de memória e de ciclo de vida.

A classe `SystemUserProxy` implementa a interface `SystemUserProtocol`. Para gerenciar a criação tardia e a retenção de dados, ela mantém dois atributos privados de controle inicializados como nulos (`null`).
*/

import { AdminUser } from './admin-user';
import type { SystemUserAddresseProtocol, SystemUserProtocol } from './system-user-protocol';

// VIRTUAL PROXY - CACHE PROXY - SMART PROXY

// "Finge" que é um usuário do sistema - SRP - OCP - DIP
export class SystemUserProxy implements SystemUserProtocol {
  // POO Aggregation
  private realUser: SystemUserProtocol | null = null; // Campo que sustenta o usuário real
  private realUserAddress: SystemUserAddresseProtocol[] | null = null; // Campo que sustenta os endereços reais

  // Forma curta do construtor (parameter property)
  constructor(public firstName: string, public userName: string) { }

  // Método que cria uma usuário
  private createUser(): SystemUserProtocol {
    // Type Narrowing/Type Guard - Lazy Instanciation - POO Composition
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.userName);
    }

    return this.realUser;
  }

  // Método assíncrono que busca os endereços na base de dados
  async getAddresses(): Promise<SystemUserAddresseProtocol[]> {
    this.realUser = this.createUser();

    // Type Narrowing/Type Guard
    if (this.realUserAddress === null) {
      this.realUserAddress = await this.realUser.getAddresses(); // Delegation
    }

    return this.realUserAddress; // Delegation
  }
}
