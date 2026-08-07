/*
- Conjuntos: Tudo que colocar dentro de "[]" será considerado um conjunto;

- Operador de negação: ^ (Metacaractere de negação) encontra tudo, menos a sequência especificada;

- Ranges: [min-max]
    OBS: Sempre devemos enviar os ranges do menor para o maior para evitar erros;
*/

const { alfabeto } = require('../base.js');

// Encontra todas as ocorrências
console.log(alfabeto.match(/[abc]/g))

// Encontra todas as sequêcias da ocorrência
console.log(alfabeto.match(/[abc]+/g))

// Encontra tudo, menos "a", "b" e "c"
console.log(alfabeto.match(/[^abc]/g))

// Selecina todos os caracteres de 0 a 9 (caractere por caractere)
console.log(alfabeto.match(/[0-9]/g))

// Seleciona tudo que estiver na sequência de 0 a 9
console.log(alfabeto.match(/[0-9]+/g))

// Selecina todos os caracteres de "a" a "z" (caractere por caractere)
console.log(alfabeto.match(/[a-z]/g))

// Seleciona tudo que estiver na sequência de "a" a "z"
console.log(alfabeto.match(/[a-z]+/g))

// Seleciona tudo que estiver na sequência de "A" a "Z"
console.log(alfabeto.match(/[A-Z]+/g))

// Seleciona tudo que estiver na sequência de, "a" a "z", "A" a "Z" e 0 a 9
console.log(alfabeto.match(/[a-zA-Z0-9]+/g)) // Não encontra letras acentuadas

// Seleciona tudo, menos o que estiver na sequência de, "a" a "z", "A" a "Z" e 0 a 9
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g))

// Seleciona tudo que estiver nessa sequência de unicodes
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)) // Range para unicodes (ver tabela na wikipedia)

// Shorthand para [a-zA-Z0-9_]
console.log(alfabeto.match(/\w+/g))

// Shorthand para [^a-zA-Z0-9_]
console.log(alfabeto.match(/\W+/g))

// Shorthand para [0-9]
console.log(alfabeto.match(/\d+/g))

// Shorthand para [^0-9]
console.log(alfabeto.match(/\D+/g))

// Shorthand para encontrar [\r\n\t\f\v ] -> qualquer espaço em branco
console.log(alfabeto.match(/\s+/g))

// Shorthand para encontrar [[^\s]] -> qualquer cosa que não seja um espaço em branco
console.log(alfabeto.match(/\S+/g))

