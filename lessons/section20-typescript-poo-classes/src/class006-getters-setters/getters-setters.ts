/*
Getters e Setters;
  - Getters: usado para obter determinado valor privado / protegido por fora da classe
  - Setters: muito usado para fazer algo com determinado valor antes de entregá-lo
*/

//* FORMA CLÁSSICA
export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private cpf: string,
  ) { }

  setCpf(valor: string): void { // Usado para configurar o valor do atributo
    this.cpf = valor;
  }

  getCpf(): string { // Usado para obter o valor do atributo
    return this.cpf.replace(/\D/g, '');
  }

}

const pessoa = new Pessoa('Maria', 'Joaquina', 29, '111.111.111-11');
pessoa.setCpf('123.456.789-00'); // Alterando o valor
console.log(pessoa.getCpf()); // Obtendo o valor atual

//* FORMA MODERNA
export class Pessoa2 {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf; // Chamando o SETTER aqui também
  }

  set cpf(cpf: string) { // Se comporta como atributo, apesar de ser um método
    /// this.cpf = cpf; //! Erro: Maximum call stack size exceeded
    console.log('SETTER CHAMADO!');
    this._cpf = cpf;
  }

  get cpf() { // Se comporta como atributo, apesar de ser um método
    // return this.cpf.replace(/\D/g, ' '); //! Erro: Maximum call stack size exceeded

    console.log('GETTER CHAMADO!');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa2 = new Pessoa2('Breno', 'Rangel', 23, '111.111.111.11');
pessoa2.cpf = '123.456.789.00'; // Acessando o setter com o sinal de atribuição
console.log(pessoa2.cpf); // Acessando o getter ao tentar acessar o valor
