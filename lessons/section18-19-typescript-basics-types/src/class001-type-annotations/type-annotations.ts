/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Breno'; // Redundância
let idade: number = 23; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; //  True ou false
let simbolo: symbol = Symbol('Qualquer-symbol'); // Symbol
let big: bigint = 10n // Bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4]; // Genereric
let arrayDeNumeros2: number[] = [1, 2, 3, 4];

let arrayDeStrings: Array<string> = ['a', 'b', 'c']; // Genereric
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'Breno',
  idade: 23,
}

// Funções
function soma(x: number, y: number): number {
  return x + y
};
const result = soma(2, 3)

const soma2: (x: number, y: number) => number = (x, y) => x + y// Type Annotations
