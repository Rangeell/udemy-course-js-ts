/*
*INTERFACES EM TYPESCRIPT
  Interfaces são 99,9% parecidas com Type Alias. Ambos são usados para o mesmo propósito (descrever a estrutura de um objeto -> Contratos para que outros objetos possam implementart e tornar o código mais manutenível, seguro, escalável e previsível).

  - Em Type Alias, podemos usar union types (string | number) e intersection types (A & B), em interfaces não
  - Interfaces estão muito mais relacionadas com objetos, pois foram feitas para modelar contratos de objetos (POO)
  - Em interfaces, podemos extender (extends) outras interfaces (mais de uma)
*/

// Funciona como uma "interface" para que outras classes possam conhecer esse tipo
export interface TipoPessoa { // Não usamos sinal de atribuição (=)
  nome: string // Não usamos modificadores de acesso
  sobrenome: string
  nomeCompleto(): string
}

export interface TipoIdade { // Simulando uma segunda interface
  idade: number
}

export interface TipoPessoa2 extends TipoPessoa, TipoIdade { } // Extendendo mais de uma interface

// Classe que implementa a interface
export class Pessoa2 implements TipoPessoa2 { // Usamos a palavra-chave "implements"
  constructor( // Não precisamos de super, pois há uso de herança
    public nome: string,
    public sobrenome: string,
    public idade: number,
  ) { }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoaObj: TipoPessoa2 = {
  nome: 'Maria',
  sobrenome: 'Silva',
  idade: 26,

  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

const pessoa = new Pessoa2('Breno', 'Rangel', 23);
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
