/*
Nesta aula prática, exploramos como implementar o padrão de projeto Iterator em TypeScript, tirando proveito dos protocolos e interfaces nativos da linguagem (`Symbol.iterator` e `Iterator<T>`), além de isolar as estratégias de travessia do armazenamento da estrutura de dados.
*/

import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');
console.log(dataStructure);

const [a, b] = dataStructure;
console.log('ROUBADOS:', a, b);
// Como o iterador mantém estado interno e NÃO foi resetado, o destructuring consome a partir do índice 2 ('C').
const [c, ...rest] = dataStructure;
console.log(c, rest);

/*
ITERADOR PADRÃO

Como o iterador mantém estado interno, se ele NÃO fosse resetado, o laço for...of não teria dados para consumir, pois já foram utilizados no código acima com destructuring.
*/

dataStructure.resetIterator(); // Reset para voltar para o index 0

console.log('\nIteração padrão (ordem crescente / direta)');

for (const data of dataStructure) {
  console.log(data);
}

// TROCANDO DE ITERADOR
console.log('\nTrocando de iterator (ordem decrescente)');

dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}
