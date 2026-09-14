/*
Type Alias com Classes:
  ?- O que é?
    - Type Alias em classes é uma forma de definir um tipo que pode ser usado para descrever a estrutura de uma classe, permitindo que outras classes implementem esse tipo.

    - Normalmente, não usamos modificadores de acesso, pois são apenas definições de tipo

    - Podemos implementar mais de um tipo em uma classe, basta usar a palavra `implements` e usar o operador &
*/

//* MODELO 1: Usando classes abstratas como tipo / molde
export abstract class TipoPessoa {
  protected abstract nome: string
  protected abstract sobrenome: string
  protected abstract nomeCompleto(): string
}

export class Pessoa extends TipoPessoa {
  // Podemos alterar os modificadores (podemos abrir (de protected para public), mas não podemos deixar mais fechado (protected para private))

  constructor(
    public nome: string, // Alterando modificador para public. Se tantarmos mudar para private, daria erro
    public sobrenome: string) {
    super(); // Precisamos usar super, pois ocorre herança
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

//* INSTANCIAÇÃO E TESTES
const pessoa = new Pessoa('Breno', 'Rangel');
console.log(pessoa.nomeCompleto());

//* MODELO 2: Usando Type Alias
// Funciona como uma "interface" para que outras classes possam conhecer esse tipo
type TipoPessoa2 = {
  nome: string // Não usamos modificadores de acesso
  sobrenome: string
  nomeCompleto(): string
}

// Classe que implementa o tipo
export class Pessoa2 implements TipoPessoa2 { // Usamos a palavra-chave "implements"
  constructor( // Não precisamos de super, pois há uso de herança
    public nome: string,
    public sobrenome: string,
  ) { }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa2 = new Pessoa2('Breno', 'Rangel');
console.log(pessoa2.nomeCompleto());
