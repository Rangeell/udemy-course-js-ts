/*
- Nesta aula, aprendemos sobre namesapces. Esse é um recurso nativo da linguagem TypeScript projetado originalmente para evitar colisões de nomes no escopo global, criando um espaço de nomes (escopo fechado) para agrupar classes, funções, interfaces ou constantes.

- Esse é um recurso que caiu em desuso. Atualmente, o sistema de módulos do ES6 (`import`/`export`) é o padrão de mercado e supre todas as necessidades de organização de escopo de forma mais eficiente, pois cada arquivo já é, por padrão, um módulo com seu próprio escopo isolado.

- Contudo, é imporante ter o conhecimento desse recuso apenas por completude didática ou para manutenção de sistemas legados.
*/

/* eslint-disable @typescript-eslint/no-namespace */

// O código dentro de um namespace é executado imediatamente como uma Immediately Invoked Funtion Expression
namespace MyNamespace {
  //! export + const não funciona no sistema de módulos do ES6, mas aqui dentro sim
  export const name = 'Breno';

  export class PersonNamespace {
    constructor(public name: string) { }
  }

  const person = new PersonNamespace('Breno');
  console.log(person);

  // Podemos aninhar namespaces (Nested Namespaces)

  // Para ter acesso a o que tiver aqui dentro, precisamos exportar o namespace completo
  export namespace OtherNameSpace {
    export const name2 = 'Breno2';
  }
}

// Não conseguimos acessar dados do namespace fora de seu escopo
//! const person = new PersonNamespace('Breno'); -> Erro
//! console.log(person); -> Erro

// Para acessar dados do namespace, precisamos usar `export` e notação `NomeDoNamespace.NomeDoDado`
const person = new MyNamespace.PersonNamespace('Breno');
const name = MyNamespace.name;
const name2 = MyNamespace.OtherNameSpace.name2;
console.log(person);
console.log(name);
console.log(name2);
