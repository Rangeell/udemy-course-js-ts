/*
- Nesta aula, aprendemos sobre os Property Decorators. Eles são aplicados diretamente acima de uma propriedade de classe e permitem interceptar e redefinir como essa propriedade é lida (`get`) e gravada (`set`).

- O decorador de propriedade possui uma assinatura simplificada que recebe apenas dois parâmetros obrigatórios:
  1. `classPrototype`: Representa o protótipo da classe (para propriedades de instância) ou a função construtora (para propriedades estáticas).

  2. `propertyKey`: O identificador técnico da propriedade (`string` ou `symbol`)

- A execução dos decoradores de propriedade ocorro no momento de definição da classe, ou seja, quando o runtime carrega o script
*/

/* eslint-disable @typescript-eslint/no-explicit-any */

// Nosso decorador de propriedades
function decorator(classPrototype: any, propertyKey: string | symbol): PropertyDescriptor | any {
  console.log(classPrototype);
  console.log(propertyKey);

  let propertyValue: any;

  return {
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('');
        return;
      }
      propertyValue = value;
    },
  };
}

export class Person {
  @decorator // Aplicando o decorator logo acima da propriedade alvo
  name: string;
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

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
