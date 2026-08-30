/*
Modificadores de acesso public e private

  *1. Public:
    - Um atributo ou método de classe definido como public significa que ele é acessível dentro da classe, fora e em todas as sub-classes (por herança) da mesma;

    - É a configuração padrão, ou seja, não precisamos explicitar que algo é public, é redundante (exceto quando usamos o "atalho" do construtor, onde o public explícito se torna obrigatório).

  *2. Private:
    - Um atributo ou método de classe definido como private só é acessível dentro da classe em que ele foi criado (não pode ser acessado nem em subclasses dessa classe);

    - Isso é excelente para o ENCAPUSULAMENTO.
*/

export class Empresa {
  //* OBS: public aqui é redundante, pois já é o padrão
  public readonly nome: string; // Inicialização
  private readonly colaboradores: Colaborador[] = []; // Encpasulando colaboradores
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    // Definição do valor -> uma vez inicializado, o valor não pode ser mais alterado (readonly)
    this.nome = nome;
    this.cnpj = cnpj;
  }

  // Como Empresa.colabores não pode ser acessado fora da classe, criamos um método para isso
  addColab(colaborador: Colaborador): void { // Omitimos o modificador public
    this.colaboradores.push(colaborador);
  }

  showColabs(): void { // Método public (omitido)
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

}

//* FORMA CURTA
export class Colaborador { // A classe funciona como um molde para objetos e também serve como tipos (linha 32)
  constructor(
    public readonly nome: string, //! public explícito em atalho do construtor é obrigatório
    public readonly sobrenome: string,
  ) { }
}

const empresa1 = new Empresa('Facebook', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Breno', 'Rangel');
const colaborador2 = new Colaborador('Maria', 'Joaquina');
const colaborador3 = new Colaborador('Júlia', 'Silva');

empresa1.addColab(colaborador1);
empresa1.addColab(colaborador2);
empresa1.addColab(colaborador3);
empresa1.addColab({ nome: 'Angelica', sobrenome: 'Mendonça' }); // Structural Typing -> Recebe o objeto normalmente, pois cumpre com as regras (contrato da classe -> tipo Colaborador)

console.log(empresa1.nome, empresa1); // Acesso fora da classe!
