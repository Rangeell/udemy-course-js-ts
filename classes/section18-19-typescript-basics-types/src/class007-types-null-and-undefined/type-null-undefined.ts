/*
undefined: Indica que algo não foi definido. Nós normalmente não usamos undefined explicitamente, quem usa é a própria linguagem para dizer que algo não foi definido

null: Indica uma ausência de valor. É atribuído pelo programador para indicar explicitamente que um objeto ou variável não possui conteúdo naquele momento.
*/

let x;

// Type Narrowing -> Estreiramento de tipo
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

// Tipo undefined
function createPerson(
  // Tipando os parâmetros da função
  firstName: string,
  lastName?: string, // Se não existir, o valor atribuído é undefined
): { // Tipando o retorno da função como um objeto
  // Corpo do objeto retornado
  firstName: string; // Tipando as propriedades do objeto individualmente
  lastName?: string; // Chave opcional
} {
  // Corpo da função em si
  return {
    firstName,
    lastName,
  };
}

function squareOf(x: unknown) {
  if (typeof x === 'number') return x * x;

  return null;
}

const squareOfTwoNumber = squareOf(2);

if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber * 100);
}
