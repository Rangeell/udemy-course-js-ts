/*
Nesta aula prática, exploramos a implementação do padrão de projeto criacional Prototype tanto no ecossistema nativo do JavaScript (via herança de protótipos e delegação) quanto em TypeScript estruturado, analisando a diferença entre Shallow Copy (Cópia Rasa) e Deep Copy (Cópia Profunda).

* Este módulo foi dedicado para exemplificar a "herança" vanilla com constructor functions.

Para simular herança antes das classes ES6, manipulamos o `prototype` manualmente. Um detalhe crítico é a reatribuição do construtor:
*/

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Breno',
  lastName: 'Rangel',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Cria um objeto vazio com o prototype apontando para `personPrototype`
Person.prototype = Object.create(personPrototype);

/*
IMPORTANTE: Object.create limpa a propriedade constructor.
Precisamos restaurá-la para não quebrar instanceof ou reflexão.
*/
Person.prototype.constructor = Person;

// Vinculando métodos ao protótipo
// Person.prototype.fullName = function () { return `${this.firstName} ${this.lastName}`; };

// HERANÇA
function SubPerson(firstName, lastName, age) {
  // O .call herda as propriedades do construtor, mas não o protótipo
  Person.call(this, firstName, lastName, age);

  this.fromSubClass = 'Oi';
}

SubPerson.prototype = Object.create(Person.prototype); // Vincula a cadeia de protótipos
SubPerson.prototype.constructor = SubPerson; // Restaura o constructor

const person1 = new Person('Maria', 'Madalena', 23);
console.log(person1);
console.log(person1.fullName());

const person2 = new SubPerson('Rosalina', 'Vieira', 23);
console.log(person2);
console.log(person2.fullName());
