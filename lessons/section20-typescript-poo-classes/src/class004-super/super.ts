/*
SUPER
  - Como ter contato a partir da subclasse com a superclasse
  *- Superclasses/Parentclasses -> classes que são extendidas (classes mãe/mai)
  *- Subclasses -> classes que extendem a superclasse (classes filhas)

  - Usamos a palavra-chave "super" quando queremos sobrescrever determinado método, mas não queremos que o comportamento real dele mude

  - Se quisermos sobrescrever ou fazer qualquer tipo de alteração no construtor da superclasse na subclasse (como adicionar algum atributo novo, por exemplo), somos obrigados a usar o "super", caso contrário o TS lançará um erro
*/

export class Pessoa { // Superclasse
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

export class Aluno extends Pessoa { // Subpclasse 1
  // Não usamos modificadores de acesso, pois não estamos recriando, e sim apenas recebendo valores que vão ser passados para o construtor de Pessoa
  constructor(
    nome: string, // Valor
    sobrenome: string, // Valor
    idade: number, // Valor
    cpf: string, // Valor
    public readonly sala: string, // Usando mod de acesso, pois é um novo atributo
  ) {
    // Chamando o construtor de Pessoa e REPASSANDO os valores para a SUPERclasse criar os atributos (o this vem da superclasse)
    super(nome, sobrenome, idade, cpf);
   }

  getNomeCompleto(): string {
    console.log('EXECUTANDO UMA AÇÃO ANTES!'); // Executa alguma ação antes

    const result = super.getNomeCompleto(); // super refere-se à superclasse Pessoa -> executa o método original

    return result + 'Resultado modificado'; // Podemos modificar o retorno do método
  }
}

export class Cliente extends Pessoa { // Subpclasse 2
  getNomeCompleto(): string {
    return `Nome completo (cliente): ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Maria', 'Joaquina', 29, '111.111.111-11');
const aluno = new Aluno('Breno', 'Rangel', 23, '111.111.111-11', '0001');
const cliente = new Cliente('Roberta', 'Silva', 26, '111.111.111-11');

// Mesmos métodos, mas com comportamentos diferentes (POLIFMORFISMOS)
console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());

console.log(aluno);
