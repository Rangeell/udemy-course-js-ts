/*
Union types: Quando dizemos que uma variável, parâmetro ou retorno de função pode ter mais de um tipo

Para dizer que algo pode ter mais de um retorno, usamo o operador PIPE ("ou")
*/

function addOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): string | number {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat('10', 20));
console.log(addOrConcat(true, true));
