/*
* Constraints: Nada mais são que as restrições aplicadas aos tipos genéricos

  Para realizar essas restrições, usamos a combinação de extends, keyof e Indexed Acess Types.

  Essas restrições são importantes, pois muitas vezes o tipo genérico que estamos usando pode ser muito mais amplo do que imaginávamos, o que pode ocasionar em erros inesperados.

  Ao substituir a flexibilidade perigosa do `any` por restrições inteligentes com `keyof` e `extends`, criamos ferramentas robustas que protegem a integridade da aplicação antes mesmo dela ser executada, consequentemente, garantindo manutenutebilidade e escalabilidade em projetos de larga escala (a certeza de que uma alteração na estrutura do objeto será propagada automaticamente para todas as funções que dependem dele).
*/

// Vamos supor que queremos criar uma função que obtém a chave de um objeto

// Type alias para a nossa função

/*
! type GetKeyFn = <O, K>(object: O, key: K) => O[K]
! ERRO: O tipo 'K' não pode ser usado para indexar o tipo 'O'.

Não tem como o compilador do TS garantir que `K` é de fato uma chave válida pertencente a `O`, pois ele poderia ser literalmente QUALQUER VALOR (um booleano, um símbolo, número, string ou um objeto complexo), ou seja, é muito mais amplo do que imaginamos

Se permitíssemos que qualquer valor fosse usado como índice, estaríamos abrindo uma brecha para retornos `undefined` ou erros críticos de runtime
*/

/*
* USANDO EXTENDS E KEYOF

Aqui estamos dizendo que: `K` é, no MÁXIMO, uma chave que existe em `O`
*/

// Usando generic no local da chamada da função e não no type
type GetkeyFn = <O, K extends keyof O>(object: O, key: K) => O[K]

const getKey: GetkeyFn = (object, key) => object[key];

const animal = {
  color: 'Roxo',
  vaccines: ['Vacina 1', 'Vacina 2'],
  age: 10,
};

const vaccines = getKey(animal, 'vaccines');
const color = getKey(animal, 'color');
const age = getKey(animal, 'age');

console.log(vaccines);
console.log(color);
console.log(age);
