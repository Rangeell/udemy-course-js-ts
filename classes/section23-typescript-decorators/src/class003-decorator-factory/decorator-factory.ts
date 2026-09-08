/*
- Nesta aula vamos aprender sobre Decorators Factories. Quando precisamos passar parâmetros customizados para um decorador no momento em que ele é anotado, utilizamos uma função que constrói e retorna o próprio decorator.

- Para fazer isso, basta revolver o nosso Decorator em uma função e retornar ele mesmo.

- Basicamente, criamos uma função única e exclusivamente para receber os parâmetros e essa mesma função retorna o Decorator em si como uma função anônima (sem nome).
*/

/* eslint-disable @typescript-eslint/no-explicit-any */

function reverseNameColor(param1: string, param2: string) { // Função que envolve o nosso Decorator
  // A Factory: captura param1 e param2 via closure -> temos acesso pelo escopo

  // Retorna uma função anônima (o Decorator em si)
  return function <T extends new (...args: any[]) => any>(target: T): T {
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
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2; // Usando os parâmetros recebidos
      }
    };
  };
}

//* Aplicando o decorator na classe Animal usando a sintaxe '@' logo em cima da classe
// Decorator executado aqui (no momento em que o código lê a declaração da classe)
@reverseNameColor('Value1', 'Value2') // Passando argumentos para o Decorator
export class Animal { // Momento da criação da classe
  constructor(
    public name: string,
    public color: string,
  ) {
    // Construtor da classe só vai ser chamado / execuatdo quando a mesma for instanciada (new)
    console.log('Sou a Classe');
  }
}
const animal = new Animal('Tigre', 'roxo'); // Momento da instânciação
console.log(animal);
