/*
Nesta aula prática, aplicamos o padrão de projeto Template Method desenvolvendo um sistema de importação e processamento de arquivos de dados de clientes (formatos `.txt` e `.json`).

O objetivo foi fixar a ordem e o fluxo de execução do algoritmo (ler arquivo, processar/parsear os dados e limpar caracteres indesejados do CPF) em uma classe base abstrata, delegando apenas a etapa específica de leitura e conversão para as subclasses.
*/

import { resolve } from 'path';
import { CustomerDataParserTxt } from './customer/customer-data-parser-txt';
import { CustomerDataParserJson } from './customer/customer-data-parser-json';

async function run () {
  // Resolução absoluta de caminhos usando path.resolve e __dirname para compatibilidade de ambiente
  const filePathTxt = resolve(import.meta.dirname, 'files', 'customer.txt');
  const filePathJson = resolve(import.meta.dirname, 'files', 'customer.json');

  console.log('PARSER TXT');

  const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt);
  await customerDataParserTxt.fixCustomerData(); // O cliente invoca unicamente o Template Method público

  console.log('Resultato (TXT):', customerDataParserTxt.customerData);

  console.log('PARSER JSON');

  const customerDataParsesJson = new CustomerDataParserJson(filePathJson);
  await customerDataParsesJson.fixCustomerData(); // O cliente invoca unicamente o Template Method público
  console.log('Resultato (JSON):', customerDataParsesJson.customerData);
}

run();
