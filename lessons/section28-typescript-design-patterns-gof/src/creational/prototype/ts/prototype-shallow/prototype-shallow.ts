/*
Para formalizar o padrão, definimos o contrato `PrototypeProtocol`. A implementação inicial foca no método `clone()` utilizando a abordagem nativa de prototipagem.

* Este módulo foi dedicado para exemplificar o padrão Prototype em TypeScript e a Shallow Copy de objetos.

Embora eficiente, a cópia rasa é perigosa em objetos compostos. No JavaScript, tipos de referência (Arrays e Objects) não são duplicados; apenas o seu endereço de memória é copiado.
*/

export interface Prototype {
  clone(): Prototype
}

// Objeto composto
export class Person implements Prototype {
  public addresses: Address[] = []; // Outro objeto (array de objetos)

  constructor(public name: string, public age: number) { }

  // Implementação de Shallow Copy
  clone(): this {

    // Cria um novo objeto apontando a instância atual como protótipo
    const newObj = Object.create(this);

    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) { }
}

const address1 = new Address('Av. Brasil', 15);
const person1 = new Person('Breno', 24);
person1.addAddress(address1);

const person2 = person1.clone();
console.log(person2); // Objeto vazio com o prototype apontando para Person
console.log(person2.name); // Acessado pelo prototype de Person

person2.name = 'Joana'; // Shadowing

// Mudar o endereço no clone AFETA a pessoa 1 devido à referência compartilhada
//! person1.addresses[0].street = 'Rua Alterada';

console.log(person2);
console.log(person2.name); // Agora, acessa a propriedade de person2
console.log(person2.addresses); // 'Rua Alterada' (Efeito colateral!) -> descomente a linha 48
