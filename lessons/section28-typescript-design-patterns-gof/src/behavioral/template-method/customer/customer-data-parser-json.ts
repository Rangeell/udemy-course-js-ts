/*
- Mecanismo de Leitura: Especializada na interpretação de arquivos estruturados em formato JSON.

- Implementação do `parseData()`: Utiliza o módulo assíncrono do Node.js (`fs/promises`) para ler o arquivo codificado em UTF-8 e efetua o *parsing* nativo JSON.parse().

- Sobrescrita do Hook: Implementa `hookBeforeParse()` para emitir um log no console sinalizando a inicialização do processamento do arquivo JSON.
*/

import { promises } from 'fs';
import type { CustomerData } from './customer-data';
import { CustomerDataParser } from './customer-data-parser';

export class CustomerDataParserJson extends CustomerDataParser {
  protected async parseData(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = JSON.parse(rawData.toString());
    /*
    Ou:
      const data: CustomerData[] = JSON.parse(rawData)
    */

    // Se optar pela opção comentada a cima, essa linha se faz desnecessária
    const customers: CustomerData[] = [];

    for (const customer of data) {
      // Desestruturação dos valores separados por Tabulação (\t)
      const { name, age, cpf } = customer;
      customers.push({ name, age, cpf });
    }

    return customers;
  }

  // Sobrescrita do hook opcional
  protected hook(): void {
    console.log('O hook foi executado');
  }
}
