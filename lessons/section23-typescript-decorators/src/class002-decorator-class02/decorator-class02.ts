/*
- A ideia dessa aula é mostrar em que momento o decorator é chamado e passado para a classe.
*/

/* eslint-disable @typescript-eslint/no-explicit-any */
function reverseNameColor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorador e recebi', target); // Executa imediatamente no momento da criação da classe

  return class extends target {
    name: string;
    color: string;

    constructor(...args: any[]) {
      super(...args); // Construtor da classe original é chamado aqui recebendo os args ('Tigre' e 'roxo')
      this.name = this.reverseString(args[0]);
      this.color = this.reverseString(args[1]);
    }

    reverseString(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

//* Aplicando o decorator na classe Animal usando a sintaxe '@' logo em cima da classe
@reverseNameColor // Decorator executado aqui (no momento em que o código lê a declaração da classe)
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
