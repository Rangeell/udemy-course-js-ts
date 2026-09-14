/*
Âncoras:
    ^ -> Começa com
        !Cuidado: quando usado dentro de um conjunto [^] passa a ser operador de negação
    $ -> Termina com

Flags:
    /m (multiline) -> Muda o comportamento das âncoras. A expressão regular passa a checar cada linha, ou seja, a cada quebra de linha (/n), ocorrerá uma chegagem, ao invés de checar a string como um único grupo
*/

const cpf = '254.224.877-45';
const { cpf2 } = require('../base.js');

// Testando o funcinamento das âncoras
const cpfRegExp = /^(\d{3}\.){2}\d{3}-\d{2}$/g; // A expressão precisa ser exatamente isso para ser encontrada
const cpfRegExp2 = /(\d{3}\.){2}\d{3}-\d{2}/g;

console.log(cpf.match(cpfRegExp));
console.log(cpf2.match(cpfRegExp2));

// Testando o funcionamento da flag /m (multiline)
const cpfRegExp3 = /^(\d{3}\.){2}\d{3}-\d{2}$/gm; // O "começa com" e "termina com" vai ser testado para cada quebra de linha
console.log(cpf2.match(cpfRegExp3));