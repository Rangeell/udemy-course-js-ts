/*
- A classe nada mais é que um molde para gerar objetos

- Usamos "export" logo de cara, pois 99% dos casos vamos querer usar a classe fora do módulo

- Ao invés de usar um type alias para declarar o tipo de um atributo como um objeto, podemos usar a própria classe (linhas 30 e 39)

Criação de atributos:
  *1. Maneira mais longa (inicialiazação parcial dos atributos da classe)
    - Definimos o atributo e o seu tipo
    - No construtor, definimos o valor
    - Ordem:
      modificadores de acesso -> atributo -> :T

  *2. Maneira mais curta (atalho)
    - Ao definir o modificador de acesso (como `public` ou `private`) diretamente nos parâmetros do construtor, o TypeScript automaticamente:
      1. Cria o atributo na classe.
      2. Recebe o valor como argumento.
      3. Faz a atribuição para o `this` internamente.

    - Essa abordagem reduz significativamente a quantidade de código escrito.

Modificadores:
  ? - O nome / atributo vai precisar ser acessado fora da classe?
    - A depender da resposta dessa pergunta, escolheremos o modificador de acesso que vamos usar:
      1. public (modificador padrão) -> atributo que pode ser acessodo em qualquer lugar (tanto dentro, quanto fora da classe);
      2. readonly -> atributo que não pode ter seu valor alterado;
      3. private -> restringe o acesso ao atributo apenas para dentro da classe;
      4. protected -> serve para controle de acesso em hierarquias de herança.
*/

//* MANEIRA LONGA
export class Empresa {
  //* OBS: public aqui é redundante, pois já é o padrão
  public readonly nome: string; // Inicialização
  private readonly colaboradores: Colaborador[] = []; // Usando a classe como um tipo -> aceita apenas objetos criados por essa classe -> array de de objetos
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

  showColabs(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

//* FORMA CURTA
export class Colaborador { // A classe funciona como um molde para objetos e também serve como tipos (linha 32)
  constructor(
    public readonly nome: string,
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

console.log(empresa1);
console.log(empresa1.nome); // Por ser um atributo public, podemos acessar ele diretamente
console.log(colaborador1);
empresa1.showColabs();
