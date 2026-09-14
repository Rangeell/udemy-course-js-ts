/*
- Generics + Interfaces
- Generics + Type Alias
- Default Types

Generics funciona de forma similar uma função:
  Quando criamos uma função, passamos os parâmetros que esperamos receber. No momento de chamar essa função, precisamos passar os argumentos.

  Dessa maneira, quando criamos um tipo genérico, nós passamos os "parâmetros" <T, U, V> e, quando formos usar esse tipo, precisamos informar os "argumentos", isto é, os tipos em si
*/

//* GENERICS + INTERFACES
interface PeapleProtocol<T, U> { // Generics -> Tipo dinâmicos / flexiveis
  name: T, // Tipo 1 informado / recebido
  surname: T, // Tipo 1 informado / recebido
  age: U, // Tipo 2 informado / recebido
};

// Precisamos passar orbrigatóriamente os argumentos de tipo para o generic, pois não há Default Types
const student: PeapleProtocol<string, number> = {
  name: 'Breno',
  surname: 'Rangel',
  age: 23,
};

const student2: PeapleProtocol<number, number> = { // Enviando outros tipos como argumentos
  // Como enviamos 2 tipos iguais como argumento, passa a ser considerado que há apenas um tipo <T>
  name: 123,
  surname: 456,
  age: 23,
};

/*
* Default Types (Generics + Interfaces)
  ? Faz com que, quando chamarmos o protocolo (interface), não seja obrigatório informar os tipos
*/
interface PeapleProtocolDefault<T = string, U = number> { // Generics -> Tipo dinâmicos / flexiveis
  name: T, // Tipo 1 informado / recebido
  surname: T, // Tipo 1 informado / recebido
  age: U, // Tipo 2 informado / recebido
};

/*
- Se usarmos o segundo protocolo (PeapleProtocolDefault), não precisamos passar os argumentos de tipo, pois já há Default Types definidos;
- Podemos sobrecrever esses valores padrões, passando outros argumentos como tipo.
*/
const student3: PeapleProtocolDefault = {
  name: 'Maria',
  surname: 'Madalena',
  age: 27,
};

console.log(student);
console.log(student2);
console.log(student3);

//* GENERICS + TYPE ALIAS
//? Funciona exatamente da mesma forma que interface e a diferença sintáxica é mínima.

type PeapleProtocol2<T, U> = { // Generics -> Tipo dinâmicos / flexiveis
  name: T, // Tipo 1 informado / recebido
  surname: T, // Tipo 1 informado / recebido
  age: U, // Tipo 2 informado / recebido
};

//* Default Types
type PeapleProtocol2Default<T = string, U = number> = { // Generics -> Tipo dinâmicos / flexiveis
  name: T, // Tipo 1 informado / recebido
  surname: T, // Tipo 1 informado / recebido
  age: U, // Tipo 2 informado / recebido
};

const student4: PeapleProtocol2<string, number> = {
  name: 'Márcia',
  surname: 'Miranda',
  age: 30,
};

const student5: PeapleProtocol2Default = {
  name: 'Ana',
  surname: 'Silva',
  age: 23,
};

console.log(student4);
console.log(student5);
