/*
Literals types ou Tipos literais: Consiste em basicamente utilizar valores como tipo

Sempre que utilizamos "const", estamos usando um tipo literal em Typescript
*/

let x = 10; // Inferência de tipo = number -> Todo valor do tipo number pode ser atribuído a essa variável
x = 0b1010; // Sem erros -> Qualquer tipo number é aceito
x = 'Breno'; //! Erro em tempo de compilação -> O tipo 'string' não pode ser atribuído ao tipo 'number'.

const y = 10; // Inferência de tipo (Tipo literal) automática -> O tipo inferido não é number, e sim literalmente o valor 10. Esse tipo é um SUBTIPO de Number, ou seja, o tipo de y só pode ser 10

//* Podemos fazer com que as variáveis let também possuam tipos literais, apesar de não aconselhável (má prática)
// Inferindo manualmente o tipo liteal 100
let a: 100 = 100; // eslint-disable-line
a = 120; //! Erro em tempo de compilação: O tipo '120' não pode ser atribuído ao tipo '100'.

// Uma melhor prática seria usar a sintaxe "as const" -> seria mais simples usar apenas const
let b = 100 as const; // eslint-disable-line

// Uso em propriedades de objetos
const person = {
  nome: 'Breno' as const, // Torna a propriedade imutável -> infererência de tipo literal 'Breno'
  sobrenome: 'Rangel',
};
person.nome = 'Breno'; // Suporte de autocomplete
person.nome = 'Breno1'; //! Erro: O tipo '"Breno1"' não pode ser atribuído ao tipo '"Breno"'.
// Em objetos, seria mais aconselhável usar readonly para tornar uma propriedade imutável, ou seja, ela não poderá ser alterada após a inicialização.


// Combinando tipos literais com union types
// Parece ser uma abordagem melhor mais segura ao invés do tipo enum
function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  // Maior especificidade -> Nossa função vai ser receber uma string, porém nessa string só pode conter os valores compatíveis com os tipos: 'Vermelho' ou 'Amarelo' ou 'Azul'
  return cor;
}

console.log(escolhaCor('Vermelho'));
