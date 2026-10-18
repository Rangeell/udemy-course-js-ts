/*
- Mecanismo de Leitura: Especializada no processamento de arquivos de texto plano delimitados por caracteres de tabulação (`\t`).

- Tratamento de Quebras de Linha Multiplataforma: A leitura do arquivo bruto lida com diferenças entre sistemas operacionais (Unix/Linux/macOS usam Line Feed `\n`, enquanto Windows utiliza Carriage Return + Line Feed `\r\n`). O parser utiliza a expressão regular `/\r?\n/` no método split() para garantir a compatibilidade multiplataforma.

- Higienização de Linhas e Parsing: O algoritmo percorre as linhas resultantes ignorando registros em branco via verificação `if (!line.trim()) continue;`, evitando falhas silenciosas de processamento. Em seguida, divide a linha pelo caractere `\t` para desestruturar os valores nos campos `name`, `age` e `cpf`.
*/

import type { CustomerData } from './customer-data';
import { CustomerDataParser } from './customer-data-parser';
import { promises } from 'fs';

export class CustomerDataParserTxt extends CustomerDataParser {
  protected async parseData(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = rawData.toString();

    // split com Regex /\r?\n/ assegura suporte transparente a sistemas Windows (CRLF) e Unix (LF)
    const lines = data.split(/\r?\n/);
    const customers: CustomerData[] = [];

    for (const line of lines) {
      // Pula linhas vazias ou compostas apenas por espaços
      if (!line.trim()) continue;

      // Desestruturação dos valores separados por Tabulação (\t)
      const [name, age, cpf] = line.split('\t');

      // Garante que os campos existem antes de adicionar
      if (!name || !age || !cpf) continue;

      customers.push({ name, age, cpf });
    }

    return customers;
  }
}
