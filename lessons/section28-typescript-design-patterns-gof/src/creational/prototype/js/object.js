/*
Nesta aula prática, exploramos a implementação do padrão de projeto criacional Prototype tanto no ecossistema nativo do JavaScript (via herança de protótipos e delegação) quanto em TypeScript estruturado, analisando a diferença entre Shallow Copy (Cópia Rasa) e Deep Copy (Cópia Profunda).

* Este módulo foi dedicado para exemplificar a "herança" vanilla por delegação em objetos literais.

No JavaScript "vanilla", a herança não ocorre por cópia de classes, mas por delegação. Ao utilizar Object.create(), criamos um novo objeto cujo ponteiro interno de protótipo aponta para o objeto original.

- Delegação: Se uma propriedade não existe no objeto atual, o motor JS percorre a [[prototype chain ]]até encontrá-la.

- Shadowing: Ao atribuir um valor a uma propriedade no objeto filho que já existe no protótipo, criamos uma propriedade local que "oculta" a do protótipo para aquela instância específica, preservando o estado do molde original.
*/

const personPrototype = {
  firstName: 'Breno',
  lastName: 'Rangel',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Cria um objeto vazio com o prototype apontando para `personPrototype` -> semelhante a herança
const anotherPerson = Object.create(personPrototype);

// Não existe neste objeto -> delega para o prototype e e encontra a propriedade
anotherPerson.firstName = 'Sofia'; // Shadowing

console.log(anotherPerson);

console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
