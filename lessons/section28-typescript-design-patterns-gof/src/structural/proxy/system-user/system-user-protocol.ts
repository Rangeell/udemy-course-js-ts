/*
SystemUserAddresseProtocol:
  - O contrato estrutural para os dados de endereço é modelado como um tipo customizado que especifica a rua e o número:

SystemUserProtocol:
  - A interface principal define a estrutura de dados básica do usuário e a assinatura da operação assíncrona responsável por retornar seus endereços
*/

// ISP
export type SystemUserAddresseProtocol = {
  street: string;
  number: number;
}

// ISP
export interface SystemUserProtocol {
  firstName: string;
  userName: string;

  // Simula uma coleta de dados na base de dados
  getAddresses(): Promise<SystemUserAddresseProtocol[]>;
}
