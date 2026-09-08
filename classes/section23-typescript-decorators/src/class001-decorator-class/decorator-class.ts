export class Animal { // Momento da criação da classe
  constructor(
    public name: string,
    public color: string,
  ) { }
}

const animal = new Animal('Tigre', 'roxo'); // Momento da instânciação
console.log(animal);

/*
Se quisermos alterar algo da classe no momento da sua criação sem mexer diretamente nela, precisamos criar um Decorator.

O Decorator vai "fingir" que é a classe em questão (ser exatamente igual) e nos entregar algo a mais que a classe original faz sem alterar o seu código.

Com o Decorador, podemos intervir no meio da classe e fazer alterações sem alterar o código da classe original.
*/

/*
*Criando um Decorator "na unha"

  - A função recebe a classe e retorna ela mesma;

  - Restringimos o tipo genérico T para um Constructor Type, garantimos que nossa função possa decorar qualquer classe sem perder a referência de seus argumentos e retorno;

  - O `new` indica que o objeto é instanciável;

  - O uso de `...args: any[]` e o retorno `any` são trade-offs necessários para a flexibilidade do decorator, permitindo que ele aceite classes com diferentes números de parâmetros no construtor;

  - A arquitetura de herança se dá através de uma classe anônima que estende o alvo (`extends target`);
*/
// Decorator de Classe
/* eslint-disable @typescript-eslint/no-explicit-any */
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target { // Herança com classe anônima
    name: string;
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.reverseString(args[0]);
      this.color = this.reverseString(args[1]);
    }

    // Método escreve a palavra ao contrário -> não há na classe original
    reverseString(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

// Criamos uma variável que rebece a função decorator que recebe a Classe -> sustenta o valor retornado (classe decorada)
const AnimalDecorated = decorator(Animal);

// Temos exatamente o mesmo resultado, mas com modificações que não alteraram a classe original
const animal2 = new AnimalDecorated('Tigre', 'roxo');
console.log(animal2);

//* Aplicando o decorator na classe Animal usando a sintaxe '@' logo em cima da classe

// Automaticamente, faz a classe Animal2 passar dentro da nossa função sem que precisamos criar uma variável auxiliar para sustentar o retorno da função

@decorator // Chamando nossa função
export class Animal2 {
  constructor(
    public name: string,
    public color: string,
  ) { }
}

// Mesmo resultado sem ter que chamar a função toda vez que
const animal3 = new Animal2('Tigre', 'roxo');
console.log(animal3);
