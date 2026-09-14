/*
- Nesta aula aprendemos a utilizar os decoradores de parâmetros. Eles são aplicados diretamente antes dos parâmetros (de um método comum ou até mesmo dos parâmetros do construtor) para apenas observar a presença e o índice de um parâmetro.

- O propósito central dessa ferramenta é assistir, inpecionar e registrar informações sobre parâmetros individuais no exato momento em que eles são definidos dentro de um método ou construtor. Ele não altera o fluxo do código por si só, mas "etiqueta" o parâmetro para o processamento posterior.

- Um decorador de parâmetro nos da acesso a três dados:
  1. classPrototype -> Um objeto, o protótipo da própria classe (para métodos de instância) ou a própria função construtora (para métodos estáticos ou o construtor).

  2. propertyKey -> O nome do método que contém o parâmetro, (string ou symbol).
  3. parameterIndex -> O index numérico da posição do parâmetro na lista de argumentos.

- O Decorator é chamado uma única vez no momento da Evaluation, ou seja, quando o motor JavaScript carrega o script e cria a definição da classe e dos seus métodos. Isso acontece uma única vez durante o carregamento da aplicação.
*/

/* eslint-disable @typescript-eslint/no-explicit-any */

function decorator(classProtorype: any, propertyKey: string | symbol | undefined, parameterIndex: number): void {
  // Qualquer tentativa de retorno é omitida

  console.log(classProtorype);
  console.log(propertyKey);
  console.log(parameterIndex);

  //! return 'Qualquer coisa.'; -> retorno omitido
}

export class Person {
  name: string;
  surname: string;
  age: number;

  // Aplicando decorator nos parâmetros do construtor (propertyKey retorna undefined)
  constructor(@decorator name: string, @decorator surname: string, @decorator age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  // Aplicando o decorator diretamente antes do parâmetro alvo
  method(@decorator msg: string): string { return `${this.name} ${this.surname}: ${msg}`; }

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
