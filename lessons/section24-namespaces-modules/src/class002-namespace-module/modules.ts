/*
- Nesta aula, aprendemos como referenciar e importar arquivos que utilizam Namespaces entre si usando a sintaxe de diretiva de tripla barra (`/// <reference path="..." />`).
*/

/* eslint-disable @typescript-eslint/no-namespace */

namespace MyNamespace {
  export const name = 'Breno';

  export class PersonNamespace {
    constructor(public name: string) { }
  }

  const person = new PersonNamespace('Breno');
  console.log(person);

  export namespace OtherNameSpace {
    export const name2 = 'Breno2';
  }
}

const person = new MyNamespace.PersonNamespace('Breno');
console.log(person);
