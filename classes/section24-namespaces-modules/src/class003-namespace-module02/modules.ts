/*
- Nesta aula, compreendemos que o uso da diretiva `/// <reference path="..." />` não importa apenas os elementos com `export` de um `namespace`, mas sim todo o escopo global do arquivo referenciado
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
// const namespaceData = 'Namespace value';
console.log(person);
