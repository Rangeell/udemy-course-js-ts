/*
Com a herança, podemos criar novas classes e herdar atributos e métodos de classes hieararquicamente superiores, reaproveitando código

Tipagems:
 - subclasses assumem a tipagem das suas superclasses, ou seja, são consideradas do mesmo tipo (Duck Typing), por respeitarem o mesmo "contrato"
*/

export class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number,
    protected readonly cpf: string,
  ) { }

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

// O Aluno é uma Pessoa, portanto, é coerente que o mesmo herde os atributos/métodos da classe Pessoa
export class Aluno extends Pessoa { // Tudo que tem dentro de Pessoa tem dentro de Aluno
  getNomeCompleto(): string { // Sobrescrevendo um método
    return `Nome completo (aluno): ${this.nome} ${this.sobrenome}`;
  }
}

export class Cliente extends Pessoa { // Tudo que tem dentro de Pessoa tem dentro de Aluno
  getNomeCompleto(): string { // Sobrescrevendo um método
    return `Nome completo (cliente): ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Maria', 'Joaquina', 29, '111.111.111-11');
const aluno = new Aluno('Breno', 'Rangel', 23, '111.111.111-11'); // Por herança já recebemos o construtor e os métodos de Pessoa
const cliente = new Cliente('Roberta', 'Silva', 26, '111.111.111-11');

console.log(pessoa);
console.log(aluno);
console.log(cliente);

// Mesmos métodos, mas com comportamentos diferentes (POLIFMORFISMOS)
console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
