/*
- Nessa aula aprendemos a fazer a composição de mais de um decorador para ser aplicado à nossa classe.
*/

/* eslint-disable @typescript-eslint/no-explicit-any */

// Type alias para o construtor da classe que vamos receber no Decorator
type Constructor = new (...args: any[]) => any;

function reverseNameColor(param1: string, param2: string) { // Função que envolve o nosso Decorator
  // A Factory: captura param1 e param2 via closure -> temos acesso pelo escopo

  // Retorna uma função anônima (o Decorator em si)
  return function (target: Constructor): Constructor {
    console.log('Sou o decorador e recebi', target); // Executa imediatamente no momento da criação da classe

    // Retorna uma classe anônima que estende o construtor original (objeto impostor)
    return class extends target {
      name: string;
      color: string;

      constructor(...args: any[]) {
        super(...args); // Preserva a integridade dos argumentos originais
        this.name = this.reverseString(args[0]);
        this.color = this.reverseString(args[1]);
      }

      reverseString(value: string): string {
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

function otherDecorator(param: string) { // Factory para o Decorator
  return function (target: Constructor): Constructor { // Segundo decorador
    console.log('Sou o outro decorador -> ' + param);
    return target;
  };
}

//* Aplicando o decorator na classe Animal usando a sintaxe '@' logo em cima da classe

@otherDecorator('O parâmetro do outro decorador') // Outro decorador adicionado (empilhamento - stack)
@reverseNameColor('Value1', 'Value2')
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {
    console.log('Sou a Classe');
  }
}
const animal = new Animal('Tigre', 'roxo'); // Momento da instânciação
console.log(animal);
