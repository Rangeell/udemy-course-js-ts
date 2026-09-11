/*
- Nesta aula, aprendemos como utilizar o Declaration Merging (Fusão de Declarações) por meio de Namespaces e Interfaces em arquivos de declaração de tipos (`.d.ts`) para estender e customizar a tipagem de bibliotecas de terceiros ou de globais do Node.js.
*/
import _ from './module.js';

// Imagine que temos um array de números e queiramos multiplar todos os números usando o ladash
const arrayNumber = [100, 200, 300, 400];

// Lodash possui muitas funções prontas, porém não existe uma para multiplar todos os números
console.log(_.sum(arrayNumber)); // Soma todos os números
console.log(_.min(arrayNumber)); // Encontra o menor número
console.log(_.max(arrayNumber)); // Encontra o maior número
console.log(_.mean(arrayNumber)); // Média da soma de todos os números

// Criamos nossa função estendendo a lib do Lodash através de Declaration Merging de Interfaces e Namespaces
console.log(_.mult(arrayNumber));

// Variável criada estendendo o escopo global do NodeJS
console.log(globalThis.MyGlobal);
