/*
Principais técnicas de Type Guards
  1. `typeof`: Usado para tipos primitivos (ex: `string`, `number`,`boolean`).

  2. Operador `in`: Usado para verificar a existência de propriedades específicas dentro de objetos em tempo de execução.

  3. `instanceof`: Usado para checar instâncias de classes reais.

  4. União Discriminada (`switch/case`em propriedade comum): Excelente padrão arquitetural para objetos estruturados e retornos de chamadas de rede/APIs.
*/

//* Operador typeof
// Função que soma ou concatena a depender do tipo
function add(a: unknown, b: unknown): number | string {
  // O compilador precisa ter certeza de que 'a' e 'b' são do tipo 'number' para permitir a operação aritmética de soma (+) com segurança.
  if (typeof a === 'number' && typeof b === 'number') return a + b; // Chega se ambos parâmetros são numbers

  return `${a}${b}`; // Caso contrário, podemos retornar uma string customizada (ou concatenação)
}
console.log(add(1, 2)); // Soma
console.log(add('a', 'b')); // Concatena

//* Operador `in`
// Types
type Pessoa = { nome: string };
type Animal = { cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) { }
}

// Função que recebe dois objetos diferentes
function mostraNome(obj: PessoaOuAnimal): void {
  //! Erro se fizéssemos direto: console.log(obj.nome) -> O TS reclamaria: "Property 'nome' does not exist on type 'Animal'."

  // Type Guard usando o operador 'in':
  if ('nome' in obj) {
    // Aqui o TypeScript tem certeza absoluta de que 'obj' é do tipo Pessoa!
    console.log(obj.nome);
  } else {
    // TypeScript infere que, se não tem 'nome', neste bloco só pode ser Animal!
    console.log(`Isso é um animal de cor: ${obj.cor}`);
  }
}
mostraNome(new Aluno('Breno'));

//* Operador `instanceof`
// Função que recebe dois objetos diferentes
function mostrNomeInstanceOf(obj: PessoaOuAnimal): void {
  if (obj instanceof Aluno) { // Chega se o objeto recebido é uma instância de Aluno
    console.log(obj.nome);
  }
}
mostrNomeInstanceOf(new Aluno('Maria'));

//* Discremited Unions

type PessoaDiscriminada = {
  tipo: 'Pessoa', // Literal Type (o valor deve ser exatamente a string 'Pessoa')
  nome: string,
}

type AnimalDiscriminado = {
  tipo: 'Animal', // Literal Type (o valor deve ser exatamente a string 'Animal')
  cor: string,
}

type objetoGeralDiscriminado = PessoaDiscriminada | AnimalDiscriminado; // Union Types

export class Aluno2 implements PessoaDiscriminada {
  tipo: 'Pessoa' = 'Pessoa' as const;
  constructor(public nome: string) { }
}

function processaObjeto(obj: objetoGeralDiscriminado) {
  // Utilizando estrutura de controle Switch baseado na propriedade discriminadora 'tipo'
  switch (obj.tipo) {
    case 'Pessoa':
      // Aqui dentro, o compilador sabe que obj é PessoaDiscriminada
      console.log(obj.nome);
      return;

    case 'Animal':
      // Aqui dentro, o compilador sabe que obj é AnimalDiscriminado
      console.log(`Isso é um animal da cor: ${obj.cor}`);
      return;
  }
}

processaObjeto(new Aluno2('Luiz'));
processaObjeto({ tipo: 'Animal', cor: 'Rosa' });
