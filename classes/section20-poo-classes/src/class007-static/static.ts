/*
- Método estático: é um metodo que pode ser acesso sem instanciar a classe -> (const v = "new Object").
  - Um método estático é uma função definida dentro da classe que pode ser acessada sem a necessidade de instanciar a classe (ou seja, sem utilizar o operador `new`).

  O próprio objeto Math faz muito isso:
    - Math.floor();
    - Math.random();
    - Math.max();
    - São todos métodos da classe que acessamos sem instanciar a mesma

- Factory Method: método que cria uma instância da própria classe
- Atributos estáticos: podem ser acessados fora da classe
?- Como acessar métodos e atributos estáticos dentro da classe?
  - Não conseguimos acessar eles com o `this`
  - Temos que usar a sintaxe: `NomeClasse.atribut` `NomeClasse.método`. Isso ocorre porque o `this` aponta para o objeto instanciado, e o objeto não conhece os membros estáticos.
*/

export class Pessoa {
  // Atributos estáticos (podem ser acessados fora da classe)
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    // Atributos de instância
    public nome: string,
    public sobrenome: string,
    public idade: number,
    protected cpf: string,
  ) { }

  metodoDeInstancia(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  // Método que cria uma instância da própria classe
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static falaOi(): void {
    console.log('Oi');
  }
}

Pessoa.falaOi(); // Executando método estático sem instanciar a classe

// Instanciação da classe
const pessoa = new Pessoa('Breno', 'Rangel', 23, '111.111.111-11');

// Criando um objeto a partir de um método estático (Factory Method)
const pessoa2 = Pessoa.criaPessoa('Maria', 'Eugenia');

console.log(pessoa); // Não temos acesso aos métodos estáticos pela instancia
console.log(pessoa2);

// Acessando atributos estáticos
pessoa.metodoDeInstancia(); // Chamando um método de instancia que usa os atributos estáticos
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao); // Acessando diretamente
