/*
A classe abstrata `CustomerDataParser` atua como o alicerce do padrão. Ela encapsula os atributos compartilhados, centraliza a regra de sanitização de dados e define a sequência do fluxo de execução.
*/

import type { CustomerData } from './customer-data';

export abstract class CustomerDataParser {
  public customerData: CustomerData[] = []; // Armazena a lista de clientes em memória

  constructor(protected filePath: string) { } // Recebe o caminho que queremos abrir

  /*
  TEMPLATE METHOD: define a "carcaça" imutável do algoritmo

  O uso de 'readonly' com arrow function simula a palavra-chave 'final', impedindo que o método seja sobrescrito nas subclasses ou que ordem de execução do fluxo seja alterada
  */
  readonly fixCustomerData = async (): Promise<void> => {
    this.customerData = await this.parseData(); // Usa método da subclasse
    this.hook(); // Implementação opcional e executado sempre
    this.customerData = this.fixCpf(); // Usa método da superclasse
  };

  // Passo concreto padronizado do algoritmo (presente em todas as subclasses): higienização de CPF via Regex
  private fixCpf(): CustomerData[] {
    return this.customerData.map(customer => ({ ...customer, cpf: customer.cpf.replace(/\D+/g, '') }));
  }

  // Implementação vazia -> Pode ser sobrescrito para executar ações imediatamente após a leitura nas subclasses (opcional)
  protected hook(): void { }

  // Método abstrato (subclasses precisam definir) e protegido (não vamos utilizar esse método fora da classe)
  protected abstract parseData(): Promise<CustomerData[]>; // Método implementadado nas subclasses
}
