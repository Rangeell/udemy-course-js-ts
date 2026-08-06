/*
Introdução
    - Usamos expressões regulares como padrão para encontrar padrões específicos dentro de uma string / texto;
    - Podemos usar expressões para validar textos;
    - Com o valor que encontrarmos podemos substituir ou remover.
*/

/*
O comportamento padrão de uma regex sem flags é encontrar a primeira ocorrência e retornar logo de cara (não executa mais) e, além disso, a busca é feita com exatamente aquilo que pedimos pra buscar. 

Com o uso das flags, podemos mudar esse comportamento.

Flags:
    1. g - Global: Encontra todas as ocorrências;
    2. i - Insensitive: Encontra as ocorrências, ignorando minúsculas maiúsculas.

Funções:
    1. .test() - Retorna um valor booleano. Ideal quando precisamos apenas se o padrão existe no texto;
    
    2. .exec() - Executa uma busca pelo padrão na string. Se encontrar, retorna um Array com metadados sobre a captura. Caso contrário, retorna `null`.

Grupos: ()
Ou: |
*/

const { text } = require('../base')

const regExp1 = /maria, hoje sua esposa/gi;
const regExp2 = /(maria|joao)(, hoje sua esposa)/gi;

const found = regExp1.test(text);
const match = regExp2.exec(text);

if (match) {
    console.log(match[0]);
    console.log(match[1]);
    console.log(match[2]);
}

console.log(found)