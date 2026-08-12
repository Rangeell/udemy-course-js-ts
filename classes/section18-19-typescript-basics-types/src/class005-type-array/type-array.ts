/*
Duas sintaxes para representação de tipo "Array":
  1. Array <T>
  2. T[]
*/

function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, v) => acc * v, 1);
}

function concatString(...args: string[]): string {
  return args.reduce((acc, v) => acc + v);
}
function toUpperCase(...args: string[]): string[] {
  return args.map(v => v.toUpperCase());
}

// Como o retorno da função em questão é number, o tipo da variável que usar a função também será inferido como number automaticamente
const result = multiplyArgs(1, 2, 3); // Type: number
const string = concatString('A', 'B', 'C'); // Type: string
const stringArray = toUpperCase('a', 'b', 'c'); // Type: string[]

console.log(result);
console.log(string);
console.log(stringArray);
