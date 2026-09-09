/*
- Nesta aula aprendemos como aplicar method decorators. Eles são aplicados diretamente acima do método da classe e permitem observar, modificar ou substituir completamente o comportamento desse método.
*/

/* eslint-disable @typescript-eslint/no-explicit-any */

// Decorator function -> aplicada ao método da classe
function decorator(classPrototype: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor | void { // Retorno normalmente é `any` ou `PropertyDescriptor`

  // Usando decorator de método para "assistir"
  console.log(classPrototype);
  console.log(propertyKey); // Nome do método
  console.log(descriptor); // Confifurações

  // Usando decorator para editar configurações do método
  return {
    // Neste caso, o value é o método. Então, podemos retornar uma função, substituindo o método original
    value: function (...args: string[]) {
      return args[0]?.toUpperCase();
    },
  };
}

export class Person {
  name: string;
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  @decorator // Decorator aplicado logo acima do método alvo
  method(msg: string): string { return `${this.name} ${this.surname}: ${msg}`; }

  get fullName(): string { return `${this.name} ${this.surname}`; }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    console.log(words);

    const firstName = words.shift();

    if (!firstName) return;

    this.name = firstName;
    this.surname = words.join(' ').trim();
  }
}

const person = new Person('Breno', 'Rangel', 23);
const method = person.method('Hello world!');
console.log(method);
